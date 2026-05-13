/*amd /ui/ds/sl/sl_101_01_08p.xml 33161 da586a3cebb66049d57df7e0d4828abfef398d4108e0da8db0684bfd0410c60b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'arvStDt',name:'입항일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvEndDt',name:'입항일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'화주',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scalClntNo',name:'화주',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scalCommCd',name:'화주',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'본선',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stockMgntNo',name:'재고번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_stock',saveRemovedData:'true','ev:ondataload':'scwin.ds_stock_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'Chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntClsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockWt',name:'재고중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'본선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendDt',name:'입항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blBkNo',name:'입출고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'본선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockMgntNo',name:'재고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockCbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strRateStsCd',name:'보관료',dataType:'text',defaultValue:'',importFormatter:'',valueType:'',ignoreStatus:''}},{T:1,N:'w2:column',A:{id:'scalClntNo',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scalCommCd',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockStdAdptDt',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strRateAdptDt',name:'name30',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_hidden'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'txt_hlobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txt_hlobranNm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hd_vsslCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txt_stockMgntNo',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.sl.RetrieveScaleWrkIndictStockInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_stock","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_stock","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_search_submit','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : sl_101_01_08p 
// 이름     : 재고관리번호조회
// 경로     : 물류/작업실적/CFS/
// 작 성 자 : 조성빈
// 작 업 일 : 2026-01-02
// 사용계정 : 내부
// 비고     :  ***
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.onpageload = function () {
  // String CodeList = "^ ," + GauceUtil.getCodeList("OP120");
  scwin.cvsslMgntNo = $c.data.getParameter($p, "cvsslMgntNo") == null ? "" : $c.data.getParameter($p, "cvsslMgntNo"); // 본선관리번호
  scwin.lobranCd = $c.data.getMemInfo($p, "lobranCd");
  scwin.lobranNm = $c.data.getMemInfo($p, "lobranNm");
  scwin.sDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.nowDt = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.vQryStDt = scwin.nowDt.substring(0, 4) + "0101"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
  scwin.vQryEndDt = scwin.nowDt.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.nowDt); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
  scwin.vMonStDt = scwin.nowDt.substring(0, 6) + "01"; // 

  $c.data.setPopupTitle($p, $c.data.getParameter($p, "paramTitle"));
  scwin.args = $p.getAllParameter().paramData.data;
  scwin.cvsslMgntNo = scwin.args[0].trim();
  scwin.impExpClsCd = scwin.args[1];
  scwin.stockMgntNo = "";
  if (typeof scwin.args[2] != "undefined") {
    scwin.stockMgntNo = scwin.args[2].trim();
  }
  const codeOptions = [{
    grpCd: "SL005",
    compID: "gr_stock:strRateStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.setCommonCodeCallBack);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {}, {
    "delay": 50
  });
};
scwin.setCommonCodeCallBack = function () {
  ica_arvStDt.setValue("20150101");
  ica_arvEndDt.setValue(scwin.vQryEndDt);
  ica_wrkStDt.setValue(scwin.vMonStDt);
  ica_wrkEndDt.setValue(scwin.nowDt);
  $c.gus.cfDisableObjects($p, [ed_clntNo, ed_clntNm, ed_commCd, ed_commNm]);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------      
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [tbl_condition]))) {
    return;
  }
  if (scwin.stockMgntNo != "") {
    ds_condition.set("stockMgntNo", scwin.stockMgntNo);
  }
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 휴지통
//-------------------------------------------------------------------------  
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_condition, null);
  ica_arvStDt.focus();
};

//-------------------------------------------------------------------------
// Pop up 
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 
  var pWhere; // 조회조건

  switch (disGubun) {
    case 1:
      // 화주Like조회
      var v_clntNo = "525083";
      var v_itemCd = "SCAL_CLNT"; // 사업장 조회
      var v_wrkPlCd = "6E03";
      var v_docCd = "SCL_H01";
      pWhere = v_clntNo + "," + v_itemCd + "," + v_wrkPlCd + "," + v_docCd;
      udc_hidden.setSelectId('retrieveEdiMapping');
      udc_hidden.cfCommonPopUp(scwin.udc_hidden_callBackFunc1 // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "계근대;화주코드,화주명,데비스;화주코드" // Title순서	
      , "80,150,100" // 보여주는 각 컬럼들의 폭	
      , "4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "화주,화주코드,화주명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 화주단건조회
      var v_clntNo = "525083";
      var v_itemCd = "SCAL_CLNT"; // 사업장 조회
      var v_wrkPlCd = "6E03";
      var v_docCd = "SCL_H01";
      pWhere = v_clntNo + "," + v_itemCd + "," + v_wrkPlCd + "," + v_docCd;
      udc_hidden.setSelectId('retrieveEdiMapping2016');
      udc_hidden.cfCommonPopUp(scwin.udc_hidden_callBackFunc2 // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "계근대;화주코드,화주명,데비스;화주코드" // Title순서	
      , "80,150,100" // 보여주는 각 컬럼들의 폭	
      , "4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "화주,화주코드,화주명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      // 품목like조회
      var v_clntNo = "525083";
      var v_itemCd = "SCAL_COMM"; // 사업장 조회
      var v_wrkPlCd = "6E03";
      var v_docCd = "SCL_H01";
      pWhere = v_clntNo + "," + v_itemCd + "," + v_wrkPlCd + "," + v_docCd;
      udc_hidden.setSelectId('retrieveEdiMapping');
      udc_hidden.cfCommonPopUp(scwin.udc_hidden_callBackFunc3 // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "계근대;품명코드,품명,데비스;품명코드" // Title순서	
      , "80,150,100" // 보여주는 각 컬럼들의 폭	
      , "4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "품목,품명코드,품명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      // 품목단건 조회
      var v_clntNo = "525083";
      var v_itemCd = "SCAL_COMM"; // 사업장 조회
      var v_wrkPlCd = "6E03";
      var v_docCd = "SCL_H01";
      pWhere = v_clntNo + "," + v_itemCd + "," + v_wrkPlCd + "," + v_docCd;
      udc_hidden.setSelectId('retrieveEdiMapping2016');
      udc_hidden.cfCommonPopUp(scwin.udc_hidden_callBackFunc4 // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "계근대;품명코드,품명,데비스;품명코드" // Title순서	
      , "80,150,100" // 보여주는 각 컬럼들의 폭	
      , "4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "품목,품명코드,품명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

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
// 본선관리번호검색 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function () {
  var args = new Array();
  args[0] = ed_cvsslMgntNo.getValue(); //본선관리번호
  args[1] = ""; //수출입구분코드

  // var rtnValues = window.showModalDialog('/ds/sl/sl_101_01_01p.jsp?paramTitle=본선관리번호검색팝업',args,"dialogWidth:900px; dialogHeight:400px; status:No");
  let win_url = "/ui/ds/sl/sl_101_01_01p.xml";
  let opts = {
    id: "searchManagNumPop",
    popupName: "본선관리번호검색팝업",
    modal: true,
    type: "browserPopup",
    width: 1200,
    height: 600,
    title: "본선관리번호검색팝업"
  };
  var rtnValues = await $c.win.openPopup($p, win_url, opts, args);
  if (rtnValues != null) {
    ed_cvsslMgntNo.setValue(rtnValues[0]);
    ds_hidden.set("hd_vsslCd", rtnValues[1]);
    ed_vsslNm.setValue(rtnValues[2]);
  }
};
scwin.ed_clntNm_onviewchange = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_scalClntNo, 1, false);
};
scwin.btn_popUp1_onclick = function (e) {
  scwin.f_openCommonPopUp(1, ed_scalClntNo.getValue(), ed_clntNm.getValue(), 'F', 'T');
};
scwin.ed_scalClntNo_onblur = function (e) {
  if (ed_scalClntNo.getValue() == "") {
    ed_scalClntNo.setValue("");
    ed_clntNm.setValue("");
    ed_clntNo.setValue("");
  } else {
    scwin.f_chkOpenCommonPopUp(ed_scalClntNo, ed_clntNm, 2);
  }
};
scwin.ed_commNm_onviewchange = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_commNm, ed_scalCommCd, 3, false);
};
scwin.btn_popUp2_onclick = function (e) {
  scwin.f_openCommonPopUp(3, ed_scalCommCd.getValue(), ed_commNm.getValue(), 'F', 'T');
};
scwin.ed_scalCommCd_onblur = function (e) {
  if (ed_scalCommCd.getValue() == "") {
    ed_scalCommCd.setValue("");
    ed_commNm.setValue("");
    ed_commCd.setValue("");
  } else {
    scwin.f_chkOpenCommonPopUp(ed_scalCommCd, ed_commNm, 4);
  }
};
scwin.udc_PopUp3_onviewchangeNameEvent = function (info) {};
scwin.udc_PopUp3_onclickEvent = function (e) {
  scwin.f_openPopUp();
};
scwin.udc_PopUp3_onblurCodeEvent = function (e) {
  if (ed_cvsslMgntNo.getValue() == "") {
    ed_cvsslMgntNo.setValue("");
    ed_vsslNm.setValue("");
    ds_hidden.set("hd_vsslCd", "");
  } else {
    scwin.f_openPopUp();
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
scwin.sbm_search_submit = function (e) {
  ds_condition.set("vsslCd", ds_hidden.get("hd_vsslCd"));
};
scwin.sbm_search_submitdone = function (e) {
  var rowCnt = ds_stock.getRowCount();
  var options = {};
  options.sortIndex = "commNm clntClsCd clntNm";
  options.sortOrder = "1 1 1";
  ds_stock.multisort(options);
  txt_totalRows.setValue(rowCnt);
  if (rowCnt == 1) {
    var rtnValues = new Array();
    rtnValues[0] = ds_stock.getCellData(ds_stock.getRowPosition(), "stockMgntNo"); //본선관리번호
    rtnValues[1] = ds_stock.getCellData(ds_stock.getRowPosition(), "vsslNm"); //본선관리번호
    rtnValues[2] = ds_stock.getCellData(ds_stock.getRowPosition(), "arvIntendDt"); //본선관리번호
    rtnValues[3] = ds_stock.getCellData(ds_stock.getRowPosition(), "stockWt"); //본선관리번호
    rtnValues[4] = ds_stock.getCellData(ds_stock.getRowPosition(), "clntNm"); //본선관리번호
    rtnValues[5] = ds_stock.getCellData(ds_stock.getRowPosition(), "arvIntendDt"); //본선관리번호
    rtnValues[6] = ds_stock.getCellData(ds_stock.getRowPosition(), "vsslCd"); //본선관리번호
    rtnValues[7] = ds_stock.getCellData(ds_stock.getRowPosition(), "clntNo"); //본선관리번호
    rtnValues[8] = ds_stock.getCellData(ds_stock.getRowPosition(), "commNm"); //본선관리번호
    rtnValues[9] = ds_stock.getCellData(ds_stock.getRowPosition(), "commCd"); //본선관리번호
    rtnValues[10] = ds_stock.getCellData(ds_stock.getRowPosition(), "scalClntNo"); //본선관리번호
    rtnValues[11] = ds_stock.getCellData(ds_stock.getRowPosition(), "scalCommCd"); //본선관리번호
    rtnValues[12] = ds_stock.getCellData(ds_stock.getRowPosition(), "stockStdAdptDt"); //본선관리번호
    rtnValues[13] = ds_stock.getCellData(ds_stock.getRowPosition(), "strRateAdptDt"); //본선관리번호
    rtnValues[14] = ds_stock.getCellData(ds_stock.getRowPosition(), "vsslNm"); //본선관리번호
    rtnValues[15] = ds_stock.getCellData(ds_stock.getRowPosition(), "strRateStsCd"); //보관료상태

    $c.win.closePopup($p, rtnValues);
  }
};
scwin.gr_stock_oncelldblclick = function (row, columnIndex, columnId) {
  var rtnValues = new Array();
  rtnValues[0] = ds_stock.getCellData(row, "stockMgntNo"); //본선관리번호
  rtnValues[1] = ds_stock.getCellData(row, "vsslNm"); //본선관리번호
  rtnValues[2] = ds_stock.getCellData(row, "arvIntendDt"); //본선관리번호
  rtnValues[3] = ds_stock.getCellData(row, "stockWt"); //본선관리번호
  rtnValues[4] = ds_stock.getCellData(row, "clntNm"); //본선관리번호
  rtnValues[5] = ds_stock.getCellData(row, "arvIntendDt"); //본선관리번호
  rtnValues[6] = ds_stock.getCellData(row, "vsslCd"); //본선관리번호
  rtnValues[7] = ds_stock.getCellData(row, "clntNo"); //본선관리번호
  rtnValues[8] = ds_stock.getCellData(row, "commNm"); //본선관리번호
  rtnValues[9] = ds_stock.getCellData(row, "commCd"); //본선관리번호
  rtnValues[10] = ds_stock.getCellData(row, "scalClntNo"); //본선관리번호
  rtnValues[11] = ds_stock.getCellData(row, "scalCommCd"); //본선관리번호
  rtnValues[12] = ds_stock.getCellData(row, "stockStdAdptDt"); //본선관리번호
  rtnValues[13] = ds_stock.getCellData(row, "strRateAdptDt"); //본선관리번호
  rtnValues[14] = ds_stock.getCellData(row, "vsslNm"); //본선관리번호
  rtnValues[15] = ds_stock.getCellData(row, "strRateStsCd"); //보관료상태

  $c.win.closePopup($p, rtnValues);
};
scwin.udc_hidden_callBackFunc1 = async function (ref) {
  if (!(await $c.gus.cfIsNull($p, ref)) && ref[0] != "N/A") {
    ed_scalClntNo.setValue(ref[0]);
    ed_clntNm.setValue(ref[1]);
    ed_clntNo.setValue(ref[2]);
  } else {
    ed_scalClntNo.setValue("");
    ed_clntNm.setValue("");
    ed_clntNo.setValue("");
  }
};
scwin.udc_hidden_callBackFunc2 = async function (ref) {
  if (!(await $c.gus.cfIsNull($p, ref)) && ref[0] != "N/A") {
    ed_scalClntNo.setValue(ref[0]);
    ed_clntNm.setValue(ref[1]);
    ed_clntNo.setValue(ref[2]);
  } else {
    ed_scalClntNo.setValue("");
    ed_clntNm.setValue("");
    ed_clntNo.setValue("");
  }
};
scwin.udc_hidden_callBackFunc3 = async function (ref) {
  if (!(await $c.gus.cfIsNull($p, ref)) && ref[0] != "N/A") {
    ed_scalCommCd.setValue(ref[0]);
    ed_commNm.setValue(ref[1]);
    ed_commCd.setValue(ref[2]);
  } else {
    ed_scalCommCd.setValue("");
    ed_commNm.setValue("");
    ed_commCd.setValue("");
  }
};
scwin.udc_hidden_callBackFunc4 = async function (ref) {
  if (!(await $c.gus.cfIsNull($p, ref)) && ref[0] != "N/A") {
    ed_scalCommCd.setValue(ref[0]);
    ed_commNm.setValue(ref[1]);
    ed_commCd.setValue(ref[2]);
  } else {
    ed_scalCommCd.setValue("");
    ed_commNm.setValue("");
    ed_commCd.setValue("");
  }
};
scwin.f_clntClsCd = function (data, formattData, rowIdx, colIdx) {
  if (data == "2") {
    return "농협/축협";
  } else if (data == "1") {
    return "사협";
  } else {
    return "개별";
  }
};
scwin.f_stockWt = function (data, formattData, rowIdx, colIdx) {
  if (data < 0) {
    gr_stock.setCellBackgroundColor(rowIdx, colIdx, "pink");
  }
  return data;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_condition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입항일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'ica_arvDt',refDataMap:'ds_condition',refEdDt:'arvEndDt',refStDt:'arvStDt',style:'',edFromId:'ica_arvStDt',edToId:'ica_arvEndDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data',titleFrom:'입항일자',titleTo:'입항일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w50',id:'ed_scalClntNo',placeholder:'',style:'',maxlength:'4',allowChar:'a-zA-Z0-9',UpperFlag:'1',objType:'Data','ev:onblur':'scwin.ed_scalClntNo_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_popUp1',style:'',type:'button','ev:onclick':'scwin.btn_popUp1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:input',A:{class:'form-control w70',id:'ed_clntNo',placeholder:'',style:'',ref:'data:ds_condition.clntNo',maxlength:'6',allowChar:'a-zA-Z0-9',UpperFlag:'1',objType:'Data'}},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_clntNm',placeholder:'',style:'',objType:'data','ev:onviewchange':'scwin.ed_clntNm_onviewchange'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group w250',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w50',id:'ed_scalCommCd',placeholder:'',style:'',allowChar:'a-zA-Z0-9',maxlength:'4',UpperFlag:'1',objType:'data','ev:onblur':'scwin.ed_scalCommCd_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_popUp2',style:'',type:'button','ev:onclick':'scwin.btn_popUp2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:input',A:{class:'form-control w70',id:'ed_commCd',placeholder:'',style:'',ref:'data:ds_condition.commCd',allowChar:'a-zA-Z0-9',maxlength:'8',UpperFlag:'1',objType:'data'}},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_commNm',placeholder:'',style:'',objType:'data','ev:onviewchange':'scwin.ed_commNm_onviewchange'}}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'ica_wrkDt',refDataMap:'ds_condition',refEdDt:'wrkEndDt',refStDt:'wrkStDt',style:'',edFromId:'ica_wrkStDt',edToId:'ica_wrkEndDt',titleFrom:'작업일자',titleTo:'작업일자',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_PopUp3',codeId:'ed_cvsslMgntNo',nameId:'ed_vsslNm',code:'cvsslMgntNo',refDataCollection:'ds_condition',allowCharCode:'a-zA-Z0-9',UpperFlag:'1',validTitle:'본선관리번호',objTypeCode:'data',maxlengthCode:'8',UpperFlagCode:'1','ev:onviewchangeNameEvent':'scwin.udc_PopUp3_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_PopUp3_onclickEvent','ev:onblurCodeEvent':'scwin.udc_PopUp3_onblurCodeEvent'}},{T:1,N:'w2:udc_comCode',A:{UpperFlag:'1',codeId:'',id:'udc_hidden',nameId:'',popupID:'',style:'display: none;',validTitle:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_stock',id:'gr_stock',style:'',readOnly:'true',autoFit:'allColumn','ev:oncelldblclick':'scwin.gr_stock_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',fixColumnWidth:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'품명',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'재고중량<br/>(kg)',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'화주명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'본선명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'입항일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'입출고<br/>순번',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'본선<br/>관리번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'화주코드',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'본선코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column27',value:'재고<br/>관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'품명코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'수량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',value:'CBM',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column31',value:'보관료<br/>상태',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',fixColumnWidth:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntClsCd',inputType:'text',width:'70',customFormatter:'scwin.f_clntClsCd',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'70',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockWt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,###',readOnly:'true',dataType:'number',customFormatter:'scwin.f_stockWt'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'150',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvIntendDt',inputType:'text',width:'100',Mandatory:'true',readOnly:'true',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blBkNo',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslCd',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'stockMgntNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'stockQty',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'stockCbm',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###.000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',style:'',id:'strRateStsCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',readOnly:'true'},E:[{T:1,N:'w2:choices'}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'txt_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})