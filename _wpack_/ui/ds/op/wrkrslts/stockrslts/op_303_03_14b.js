/*amd /ui/ds/op/wrkrslts/stockrslts/op_303_03_14b.xml 42427 842e60dc2009daf3865bd6bd60034ea5dcee13ce6a3ec641af189e5fa5e48f54 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_stockQuery'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'qryCls',name:'조회 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPl',name:'장치장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrCls',name:'컨테이너 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stockCls',name:'일반, 체화 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryDt',name:'조회기준일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'accfCargoStd',name:'체화기준',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term1From',name:'기간1FROM',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term1To',name:'기간1To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term2From',name:'기간2From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term2To',name:'기간2To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term3From',name:'기간3From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term3To',name:'기간3To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term4From',name:'기간4From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term4To',name:'기간4To',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_stockPresent',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'shpCo',name:'선사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'line',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'term120',name:'20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'term140',name:'40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'term1Teu',name:'TEU',dataType:'text'}},{T:1,N:'w2:column',A:{id:'term220',name:'20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'term240',name:'40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'term2Teu',name:'TEU',dataType:'text'}},{T:1,N:'w2:column',A:{id:'term320',name:'20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'term340',name:'40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'term3Teu',name:'TEU',dataType:'text'}},{T:1,N:'w2:column',A:{id:'term420',name:'20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'term440',name:'40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'term4Teu',name:'TEU',dataType:'text'}},{T:1,N:'w2:column',A:{id:'termT20',name:'20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'termT40',name:'40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'termTteu',name:'TEU',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.stockrslts.RetrievePossessionTermEachContainerYardStockPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_stockQuery","key":"IN_DS1"},{"id":"ds_stockPresent","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_stockPresent","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//물류/실적현황/컨테이너 재고/보유기간별 CY 재고현황
//op_303_03_14b.jsp

scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.memJson = $c.data.getMemInfo($p);
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  console.log('scwin.f_OnLoad~~');
  //console.log(scwin.memJson);

  //scwin.f_createHeader();
  scwin.f_setDefaultData();
  ed_wrkPlCd.focus();
};
scwin.onUdcCompleted = function () {
  scwin.f_OnLoad();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log("f_Retrieve");
  /* 안된다.
          if(!await $c.gus.cfValidate(tb_mainData)) {
              console.log("밸리데이션");
              return;
          }
          
  */

  if (ed_wrkPlCd.getValue() == '') {
    $c.win.alert($p, "작업장 코드은(는) 필수 입력 항목 입니다.");
    return;
  }
  if (!(await $c.gus.cfValidate($p, tb_mainData))) return;
  scwin.f_validateDate();
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------

scwin.f_setDefaultData = function () {
  scwin.f_initTermDate();
  rd_qryCond.setValue(1);
  //lc_cntrCls.Index = 0;
  lc_cntrCls.setSelectedIndex(0);
  scwin.f_qryCondRdoShowHide();
  rd_cls.setValue(1);
  //lc_con_accfCargoStd.Index = 0;
  lc_con_accfCargoStd.setSelectedIndex(0);
  scwin.f_clsCondRdoShowHide();
  ed_qryDt.setValue(scwin.vCurDate); //오늘
};
scwin.f_initTermDate = function () {
  ed_term1From.setValue('0');
  ed_term1To.setValue('5');
  ed_term2From.setValue('6');
  ed_term2To.setValue('10');
  ed_term3From.setValue('11');
  ed_term3To.setValue('30');
  ed_term4From.setValue('30');
};
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_setDefaultData();
  scwin.f_columnShowHide();
};

//-------------------------------------------------------------------------
// ds_information 헤더생성
//-------------------------------------------------------------------------

/*
scwin.f_createHeader = function(){
var str_header="";
//헤더의 정의 순서는 반드시 서버측의 정의순서와 일치하여야 한다.	
// tb_op428 Header 생성
str_header = "";
	str_header = "qryCls:STRING(50)" 			//조회 구분
		  + ",wrkPl:STRING(50)" 		//장치장
		  + ",cntrCls:STRING(50)" 		//컨테이너 구분
		  + ",stockCls:STRING(50)" 		//일반, 체화 구분..
		  + ",qryDt:STRING(50)" 		//조회기준일자...				  
		  + ",accfCargoStd:STRING(50)"  //체화기준..
		  + ",term1From:STRING(50)" 	//기간1FROM
		  + ",term1To:STRING(50)" 		//기간1To
		  + ",term2From:STRING(50)" 	//기간2From
		  + ",term2To:STRING(50)" 		//기간2To
		  + ",term3From:STRING(50)" 	//기간3From
		  + ",term3To:STRING(50)" 		//기간3To
		  + ",term4From:STRING(50)" 	//기간4From
		  + ",term4To:STRING(50)" ;		//기간4To
		  
ds_stockQuery.SetDataHeader(str_header);		
	ds_stockQuery.AddRow();
};
*/
//-------------------------------------------------------------------------
// Pop up 
//-------------------------------------------------------------------------

scwin.f_openPopUp = function (disGubun, chgGubun) {
  var rtnList = new Array();
  switch (disGubun) {
    case 1:
      //						pSelectID,				pCode,				pName,  			pWinCloseTF,	pDispCnt,	pTitle,	pWidth,		pHidden,	pWhere,	pW,		pH,		pTop,		pLeft
      //rtnList = cfCommonPopUp('retrieveWrkPlInfo',	ed_wrkPlCd.getValue(),	ed_wrkPlNm.getValue(),	chgGubun,		'5',		null,	'150,170',	null,		',,,4,,',   '440',	'500',	null,		null); 

      udc_wrkPlCd.setSelectId('retrieveWrkPlInfo');
      rtnList = udc_wrkPlCd.cfCommonPopUp(scwin.udc_wrkPlCdCallback, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), chgGubun, '5', null, '150,170', null, ',,,4,,', '440', '500', null, null);

      //if ( rtnList != null) {
      //	$c.gus.cfSetReturnValue(rtnList, ed_wrkPlCd, ed_wrkPlNm);
      //}

      break;
    default:
      break;
  }
};

//------------------------------------------------------
// object 데이타 변경시 호출
//------------------------------------------------------
scwin.f_chkField = function (chgValue1, chgValue2, disGubun) {
  var chgObj1 = eval(chgValue1);
  var chgObj2 = eval(chgValue2);
  var objType1 = chgValue1.substr(0, 2);
  var objType2 = chgValue2.substr(0, 2);
  if (objType1 == "ed") {
    if (chgObj1.getValue().trim() == "") {
      chgObj2.setValue("");
    } else {
      scwin.f_openPopUp(disGubun, "T");
    }
  } else {
    if (chgObj1.getValue().trim() == "") {
      if (objType2 == "ed") {
        chgObj2.setValue("");
      } else {
        chgObj2.setValue("");
      }
    } else {
      if (chgObj1.hidVal != null && chgObj1.getValue() == chgObj1.hidVal) return;
      scwin.f_openPopUp(disGubun, "T");
    }
  }
};

//------------------------------------------------------
// commit 전에  날짜가 잘 들어가 있는지 검사 한다....
//------------------------------------------------------
scwin.f_validateDate = async function () {
  // 조회 기준일 날짜 첵크...
  if (rd_cls.getValue() == 2) {
    if (ed_qryDt.getValue().trim() == '') {
      await $c.win.alert($p, "조회기준일을 입력하세요.");
      ed_qryDt.focus();
      return;
    }
  }

  // 보유기간별로 날짜가 들어가 있는지 확인 하는 Flag
  var chFlag = new Array(4);
  for (i = 0; i < 4; i++) chFlag[i] = false;

  // 보유기간 1
  if (ed_term1From.getValue() != '' && ed_term1To.getValue() != '') {
    if (Number(ed_term1From.getValue()) > Number(ed_term1To.getValue())) {
      await $c.win.alert($p, "보유기간 1: 시작일자가 종료일자 이전이어야 합니다.");
      ed_term1From.focus();
      return;
    }
    chFlag[0] = true;
  }

  // 보유기간 2
  if (ed_term2From.getValue() != '' && ed_term2To.getValue() != '') {
    if (Number(ed_term2From.getValue().trim()) > Number(ed_term2To.getValue().trim())) {
      await $c.win.alert($p, "보유기간 2: 시작일자가 종료일자 이전이어야 합니다.");
      ed_term2From.focus();
      return;
    }
    chFlag[1] = true;
  }

  // 보유기간 3
  if (ed_term3From.getValue() != '' && ed_term3To.getValue() != '') {
    if (Number(ed_term3From.getValue().trim()) > Number(ed_term3To.getValue().trim())) {
      await $c.win.alert($p, "보유기간 3: 시작일자가 종료일자 이전이어야 합니다.");
      ed_term3From.focus();
      return;
    }
    chFlag[2] = true;
  }

  // 보유기간 4
  if (ed_term4From.getValue() != '') chFlag[3] = true;

  // 보유기간 1부터 4까지 선행 종료 일자와 후행 시작일자가 중복거나 보유기간이 연속되어 있지 않으면 경고 메시지...
  if (chFlag[0]) {
    if (chFlag[1]) {
      if (Number(ed_term1To.getValue().trim()) >= Number(ed_term2From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 1과 2의 검색 기간이  중복되었습니다.\n계속 하시겠습니까?")) != true) return;
      } else if (Number(ed_term1To.getValue().trim()) + 1 != Number(ed_term2From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 1과 2의 검색 기간이 연속되어 있지 않습니다.\n계속 하시겠습니까?")) != true) return;
      }
    } else if (chFlag[2]) {
      if (Number(ed_term1To.getValue().trim()) >= Number(ed_term3From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 1과 3의 검색 기간이  중복되었습니다.\n계속 하시겠습니까?")) != true) return;
      } else if (Number(ed_term1To.getValue().trim()) + 1 != Number(ed_term3From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 1과 3의 검색 기간이 연속되어 있지 않습니다.\n계속 하시겠습니까?")) != true) return;
      }
    } else if (chFlag[3]) {
      if (Number(ed_term1To.getValue().trim()) > Number(ed_term4From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 1과 4의 검색 기간이  중복되었습니다.\n계속 하시겠습니까?")) != true) return;
      } else if (Number(ed_term1To.getValue().trim()) + 1 != Number(ed_term4From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 1과 4의 검색 기간이 연속되어 있지 않습니다.\n계속 하시겠습니까?")) != true) return;
      }
    }
  }
  if (chFlag[1]) {
    if (chFlag[2]) {
      if (Number(ed_term2To.getValue().trim()) >= Number(ed_term3From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 2와 3의 검색 기간이  중복되었습니다.\n계속 하시겠습니까?")) != true) return;
      } else if (Number(ed_term2To.getValue().trim()) + 1 != Number(ed_term3From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 2와 3의 검색 기간이 연속되어 있지 않습니다.\n계속 하시겠습니까?")) != true) return;
      }
    } else if (chFlag[3]) {
      if (Number(ed_term2To.getValue().trim()) > Number(ed_term4From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 2와 4의 검색 기간이  중복되었습니다.\n계속 하시겠습니까?")) != true) return;
      } else if (Number(ed_term2To.getValue().trim()) + 1 != Number(ed_term4From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 2와 4의 검색 기간이 연속되어 있지 않습니다.\n계속 하시겠습니까?")) != true) return;
      }
    }
  }
  if (chFlag[2]) {
    if (chFlag[3]) {
      if (Number(ed_term3To.getValue().trim()) > Number(ed_term4From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 3과 4의 검색 기간이  중복되었습니다.\n계속 하시겠습니까?")) != true) return;
      } else if (Number(ed_term3To.getValue().trim()) != Number(ed_term4From.getValue().trim())) {
        if ((await $c.win.confirm($p, "보유기간 3과 4의 검색 기간이 연속되어 있지 않습니다.\n계속 하시겠습니까?")) != true) return;
      }
    }
  }
  ds_stockPresent.setJSON([]);
  $c.sbm.execute($p, sbm_retrieve);
  // 여기서 최종적으로 Validate를 끝내고 Action을 한다...
  //tr_retrieve.Post(); 
};

////////////////////////////////////////////////
// radio button이 바뀔 때 마다 일어 나는 Action....
////////////////////////////////////////////////
scwin.f_qryCondRdoShowHide = function () {
  //console.log('scwin.f_qryCondRdoShowHide~'+rd_qryCond.getValue());
  if (rd_qryCond.getValue() == '1') {
    //gr_stockPresent.ColumnProp('line','Show')=true;
    //gr_stockPresent.ColumnProp('shpCo','Name')= '선사';
    gr_stockPresent.setColumnVisible('line', true);
    gr_stockPresent.setHeaderValue('shpCo', '선사', false);
  } else {
    //gr_stockPresent.ColumnProp('line','Show')=false;
    //gr_stockPresent.ColumnProp('shpCo','Name')= '화주';
    gr_stockPresent.setColumnVisible('line', false);
    gr_stockPresent.setHeaderValue('shpCo', '화주', false);
  }
  ds_stockPresent.setJSON([]);
  tbx_totalRows.setValue(ds_stockPresent.getRowCount());

  //ds_stockPresent.DeleteAll();
  //totalRows.innerHTML = "총 " + ds_stockPresent.CountRow + "건";	
};

////////////////////////////////////////////////
// 체화기준일 radio button이 바뀔 때 마다 일어 나는 Action....
////////////////////////////////////////////////
scwin.f_clsCondRdoShowHide = function () {
  if (rd_cls.getValue() == 1) {
    $c.gus.cfEnableObjects($p, termOdj);

    //if("<%=loginId%>" == "281776" || "<%=loginId%>" == "962861" ){
    if (scwin.memJson.userId == "281776" || scwin.memJson.userId == "962861") {
      $c.gus.cfEnableObjects($p, [ed_qryDt]);
      //$c.gus.cfEnableObjects([ed_qryDt,imgQryDt]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_qryDt]);
      //$c.gus.cfDisableObjects([ed_qryDt,imgQryDt]);
    }
    $c.gus.cfDisableObjects($p, [lc_con_accfCargoStd]);
    lc_cntrCls.addItem(1, "전체", 0, false);
    lc_cntrCls.setSelectedIndex(0);

    //fn(value: string, label: string, index: number, refresh: bool)
    //lc_con_accfCargoStd.Enable = false;
    //lc_cntrCls.CBData = "1^전체,2^수입,3^수출,4^EMPTY";
  } else if (rd_cls.getValue() == 2) {
    $c.gus.cfEnableObjects($p, [lc_con_accfCargoStd]);
    //lc_con_accfCargoStd.Enable = true;

    scwin.f_initTermDate();
    $c.gus.cfDisableObjects($p, termOdj);
    $c.gus.cfEnableObjects($p, [ed_qryDt]);
    lc_cntrCls.deleteItem(0, false);
    lc_cntrCls.setSelectedIndex(0);

    //$c.gus.cfEnableObjects([ed_qryDt,imgQryDt]);
    //lc_cntrCls.CBData = "2^수입,3^수출,4^EMPTY";
  }
};

///////////////////////////////////////////////
//  컬럼 Show/Hide....
///////////////////////////////////////////////
scwin.f_columnShowHide = function () {
  // 보유기간 1의 컬럼 상태와 컬럼 이름을 설정한다....
  if (ed_term1From.getValue() != '' && ed_term1To.getValue() != '') gr_stockPresent.setColumnVisible('term1', true);
  //gr_stockPresent.ColumnProp('term1','Show')=true;
  else gr_stockPresent.setColumnVisible('term1', false);
  gr_stockPresent.setHeaderValue('term1', ed_term1From.getValue() + " ~ " + ed_term1To.getValue() + " 일");
  //gr_stockPresent.ColumnProp('term1','Show')=false;
  //gr_stockPresent.ColumnProp('term1','Name')= ed_term1From.getValue() + " ~ " + ed_term1To.getValue() + " 일";

  // 보유기간 2의 컬럼 상태와 컬럼 이름을 설정한다....
  if (ed_term2From.getValue() != '' && ed_term2To.getValue() != '') gr_stockPresent.setColumnVisible('term2', true);
  //gr_stockPresent.ColumnProp('term2','Show')=true;
  else gr_stockPresent.setColumnVisible('term2', false);
  gr_stockPresent.setHeaderValue('term2', ed_term2From.getValue() + " ~ " + ed_term2To.getValue() + " 일");
  //gr_stockPresent.ColumnProp('term2','Show')=false;
  //gr_stockPresent.ColumnProp('term2','Name')= ed_term2From.getValue() + " ~ " + ed_term2To.getValue() + " 일";

  // 보유기간 3의 컬럼 상태와 컬럼 이름을 설정한다....
  if (ed_term3From.getValue() != '' && ed_term3To.getValue() != '') gr_stockPresent.setColumnVisible('term3', true);
  //gr_stockPresent.ColumnProp('term3','Show')=true;
  else gr_stockPresent.setColumnVisible('term3', false);
  gr_stockPresent.setHeaderValue('term3', ed_term3From.getValue() + " ~ " + ed_term3To.getValue() + " 일");
  //gr_stockPresent.ColumnProp('term3','Show')=false;
  //gr_stockPresent.ColumnProp('term3','Name')= ed_term3From.getValue() + " ~ " + ed_term3To.getValue() + " 일";

  // 보유기간 4의 컬럼 상태와 컬럼 이름을 설정한다....
  if (ed_term4From.getValue() != '') gr_stockPresent.setColumnVisible('term4', true);
  //gr_stockPresent.ColumnProp('term4','Show')=true;
  else gr_stockPresent.setColumnVisible('term4', false);
  gr_stockPresent.setHeaderValue('term4', ed_term4From.getValue() + " 일 초과");
  //gr_stockPresent.ColumnProp('term4','Show')=false;
  //gr_stockPresent.ColumnProp('term4','Name')= ed_term4From.getValue() + " 일 초과";
};

/*
//-------------------------------------------------------------------------
// List 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_toExcel = function() {
                                   //sheet명                        , 저장파일명                               , 저장 다이얼로그
    cfGridToExcel(gr_stockPresent, "보유기간별 CY 재고현황" , "보유기간별 CY 재고현황.xls" , 4+8+16);
};
*/

scwin.btn_refresh_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.udc_wrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkField('ed_wrkPlCd', 'ed_wrkPlNm', 1);
};
scwin.udc_wrkPlCd_onblurNameEvent = function (e) {
  scwin.f_chkField('ed_wrkPlNm', 'ed_wrkPlCd', 1);
};
scwin.udc_wrkPlCd_onclickEvent = function (e) {
  scwin.f_openPopUp(1);
};
scwin.udc_wrkPlCdCallback = function (rtnList) {
  if (rtnList != null) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, ed_wrkPlNm);
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  scwin.f_columnShowHide();
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  var rowcnt = ds_stockPresent.getRowCount();
  tbx_totalRows.setValue(rowcnt);
  if (rowcnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  for (var i = ds_stockPresent.getRowCount(); i >= 0; --i) {
    if (Number(ds_stockPresent.getCellData(i, 'termT20').trim()) == 0 && Number(ds_stockPresent.getCellData(i, 'termT40').trim()) == 0 && Number(ds_stockPresent.getCellData(i, 'termTteu').trim()) == 0) ds_stockPresent.removeRow(i);
  }
  tbx_totalRows.setValue(ds_stockPresent.getRowCount());
  gr_stockPresent.setFocusedCell(0, "shpCo", false);
};
scwin.sbm_retrieve_submiterror = function (e) {};
scwin.rd_qryCond_onviewchange = function (info) {
  scwin.f_qryCondRdoShowHide();
};
scwin.rd_cls_onviewchange = function (info) {
  scwin.f_clsCondRdoShowHide();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 80px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_qryCond',ref:'data:ds_stockQuery.qryCls',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onviewchange':'scwin.rd_qryCond_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선사/라인별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화주별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'작업장',style:'',class:'',btnId:'btn_wrkPlCd',codeId:'ed_wrkPlCd',id:'udc_wrkPlCd',nameId:'ed_wrkPlNm','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent',refDataCollection:'ds_stockQuery',code:'wrkPl',validTitle:'작업장 코드',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'A-Za-z0-9',mandatoryCode:'true',maxlengthName:'20','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCd_onblurNameEvent',mandatoryName:'true',objTypeName:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group',style:'gap:20px;'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'lc_cntrCls',class:' w110',direction:'auto',ref:'data:ds_stockQuery.cntrCls',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'EMPTY'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]}]}]},{T:1,N:'xf:select1',A:{ref:'data:ds_stockQuery.stockCls',appearance:'full',style:'',id:'rd_cls',renderType:'radiogroup',rows:'',class:'rdo-grp flex_no',cols:'',selectedIndex:'-1','ev:onviewchange':'scwin.rd_cls_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'체화'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'lc_con_accfCargoStd',class:'w150',direction:'auto',ref:'data:ds_stockQuery.accfCargoStd'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'법적체화일수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자체체화일수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'termOdj',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유기간1',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_term1From',placeholder:'',class:' w30',ref:'data:ds_stockQuery.term1From',dataType:'number',maxlength:'9',mandatory:'false',title:'보유기간1 시작일',objType:'data'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'~',class:''}},{T:1,N:'xf:input',A:{style:'',id:'ed_term1To',placeholder:'',class:' w30',ref:'data:ds_stockQuery.term1To',maxlength:'9',dataType:'number',objType:'data'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'일',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유기간2',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w30',id:'ed_term2From',placeholder:'',style:'',ref:'data:ds_stockQuery.term2From',dataType:'number',maxlength:'9',objType:'data'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~',style:''}},{T:1,N:'xf:input',A:{class:' w30',id:'ed_term2To',placeholder:'',style:'',ref:'data:ds_stockQuery.term2To',dataType:'number',maxlength:'9',objType:'data'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일',style:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유기간3',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w30',id:'ed_term3From',placeholder:'',style:'',ref:'data:ds_stockQuery.term3From',dataType:'number',maxlength:'9',objType:'data'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~',style:''}},{T:1,N:'xf:input',A:{class:' w30',id:'ed_term3To',placeholder:'',style:'',ref:'data:ds_stockQuery.term3To',dataType:'number',maxlength:'9',objType:'data'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일',style:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보유기간4',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w30',id:'ed_term4From',placeholder:'',style:'',ref:'data:ds_stockQuery.term4From',dataType:'number',maxlength:'9',objType:'data'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일 초과',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회기준일 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_qryDt',style:'',ref:'data:ds_stockQuery.qryDt',objType:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.btn_refresh_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'보유기간별 CY 재고현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_stockPresent',gridUpYn:'N',grdDownOpts:'{"fileName":"보유기간별 CY 재고현황.xlsx","sheetName": "보유기간별 CY 재고현황","type":"4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_stockPresent',focusMode:'row',id:'gr_stockPresent',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'shpCo',inputType:'text',removeBorderStyle:'false',width:'150',value:'선사',rowSpan:'2',colMerge:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'line',inputType:'text',removeBorderStyle:'false',width:'120',value:'LINE',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'term1',inputType:'text',removeBorderStyle:'false',width:'210',value:'0 ~ 5일',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'term2',inputType:'text',value:'6 ~ 10일',width:'210',colSpan:'3',sortLabel:'false',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'term3',inputType:'text',value:'11 ~ 30일',width:'210',colSpan:'3',sortLabel:'false',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'term4',value:'30일 초과',displayMode:'label',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column35',value:'TOTAL',displayMode:'label',colSpan:'3',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',value:'20',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column28',value:'40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',value:'TEU',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column26',value:'20',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',value:'40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column24',value:'TEU',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'20',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column51',value:'40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',value:'TEU',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',value:'20',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column42',value:'40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',value:'TEU',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column36',value:'20',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',value:'40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column54',value:'TEU',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'shpCo',inputType:'text',removeBorderStyle:'false',width:'150',colMerge:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'line',inputType:'text',removeBorderStyle:'false',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'term120',inputType:'text',removeBorderStyle:'false',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'term140',inputType:'text',removeBorderStyle:'false',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'term1Teu',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'term220',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'term240',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'term2Teu',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'term320',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'term340',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'term3Teu',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'term420',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'term440',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'term4Teu',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'termT20',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'termT40',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'termTteu',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'shpCo',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column72',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column71',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column70',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term120\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column69',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term140\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column68',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term1Teu\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column67',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term220\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column66',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term240\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column65',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term2Teu\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column64',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term320\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column63',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term340\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column62',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term3Teu\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column61',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term420\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column60',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term440\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column59',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term4Teu\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column58',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'termT20\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column57',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'termT40\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column56',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'termTteu\')'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column72',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column71',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column70',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term120\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column69',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term140\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column68',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term1Teu\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column67',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term220\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column66',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term240\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column65',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term2Teu\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column64',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term320\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column63',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term340\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column62',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term3Teu\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column61',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term420\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column60',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term440\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column59',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'term4Teu\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column58',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'termT20\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column57',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'termT40\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column56',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'termTteu\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})