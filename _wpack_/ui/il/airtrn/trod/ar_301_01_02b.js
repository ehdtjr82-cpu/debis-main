/*amd /ui/il/airtrn/trod/ar_301_01_02b.xml 32656 5357801928be952213431162289e683a71f9479078363eb0261ac1f8d6ebc9b4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_SearchParam',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'kcomcd',name:'법인코드'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromArea',name:'FROM 지역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toArea',name:'TO 지역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'carNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'procType',name:'배차여부 조건 FLAG',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrDtFrom',name:'조회 일자 From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrDtTo',name:'조회 일자 To',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_TransOrder',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'kcomcd',name:'법인코드'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromArea',name:'FROM 지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromAreaNm',name:'FROM 지역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromDt',name:'FROM 일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromTm',name:'FROM 시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toArea',name:'TO 지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toAreaNm',name:'TO 지역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toDt',name:'TO 일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toTm',name:'TO 시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transTyp',name:'운송 TYPE (1:BONDED  2:Inland   3:ETC)',dataType:'number',defaultValue:'0.0'}},{T:1,N:'w2:column',A:{id:'via',name:'경유여부 Y/N',dataType:'number',defaultValue:'0.0'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매입처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDeptCd',name:'매출부서코드(내부거래시)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDeptNm',name:'매출부서명(내부거래시)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'기사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvTel',name:'기사 전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'REMARK',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sacd',name:'Salesman Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sanm',name:'Salesman Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itcd',name:'Item Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itnm',name:'Item Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'운송조건코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wtBreak',name:'WT_BREAK',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carCondCd',name:'차량종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullYn',name:'Full 여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'MHNO번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'name36',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_reterieve',action:'/il.airtrn.trod.RetrieveTransOrderSearchListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_SearchParam","key":"IN_DS1"},{"id":"ds_TransOrder","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_TransOrder","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_reterieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
//  default 동부국제물류
scwin.p_clntNo = '';
scwin.p_clntNm = '';
scwin.airexgbim = '';

// 서버날짜 가져오기
scwin.strCurDate = $c.date.getServerDateTime($p, 'yyyyMMdd');
scwin.strPreDate = $c.date.addMonth($p, scwin.strCurDate, -1);
scwin.kcomCd = '';
scwin.mblNo = '';
scwin.consolNo = '';

/*
scwin.ioGb = paramData['iogb'];
scwin.p_no = paramData['no'];
scwin.p_row_cnt = paramData['row_cnt'];
scwin.p_data = paramData['data'];
scwin.p_hblno2 = paramData['hblno'];
scwin.v_linkcheck = paramData['linkcheck'];
*/
// 메세지 상수 선언
scwin.MSG_LO_WRN_001 = '';
scwin.MSG_LO_WRN_002 = '';
scwin.processFlag = ''; // 처리 결과를 체크하는 Flag 	
scwin.actionFlag = '';
scwin.spRtn = ''; //인보이스 체크 결과 
scwin.spMsg = ''; //인보이스 체크 메세지 

scwin.TabIndex = 0; //Tab 선택 구분자 
scwin.linkType = ''; // 페이지 링크로 들어 왔을때 해당 b/l, CONSOL 번호  조회 여부 체크

//Line Account inof 정보 가져 오기 (항공사  사사 오입 )
scwin.Trunc_Discount = '';
scwin.Trunc_Rate = '';
scwin.Trunc_Commission = '';
scwin.Trunc_vat = '';
scwin.exRateCheck = '1'; // 환율 존재 유무 
scwin.exRate1 = '0'; // 환율1  
scwin.exRate2 = '0'; // 환율2  
scwin.crc = ''; // 환종	
scwin.onpageload = function () {
  //    scwin.iogb = scwin.params.iogb;
  scwin.globalVars();
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    scwin.f_defaultValue();
  }, {
    "delay": 100
  });
};
//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  // 조회 조건 초기화
  scwin.f_Set("INIT");
  //alert("strPreDate ["+scwin.strPreDate+"]");    
  //alert("strCurDate ["+scwin.strCurDate+"]");    
  cnd_ed_odrDtFrom.setValue(scwin.strPreDate);
  cnd_ed_odrDtTo.setValue(scwin.strCurDate);
  cnd_ed_fromAreaCd.focus();
};
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      //초기화

      break;
    case "RETRIEVE":
      //조회모드

      break;
  }
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  scwin.paramData = $c.data.getParameter($p);
  scwin.cvsslMngtNo = scwin.paramData['cvsslMgntNo'] ?? scwin.paramData['cvsslMgntNo'];
  // 세션정보 가져오기
  const loginDTO = $c.data.getMemInfo($p);
  scwin.p_lobranCd = loginDTO.lobranCd ?? ''; // 귀속부서코드 
  scwin.p_lobranNm = loginDTO.lobranNm ?? ''; // 귀속부서 명

  const resData = $c.gus.dsCommonUtil($p, 'getCompanyInfoDTO', scwin.p_lobranCd)[0].value.split('\n');
  const commDTO = resData.reduce((acc, curr) => {
    const match = curr.match(/^\s*\w+\s+(\w+)\s+=\s+\[(.*)\]/);
    if (match) {
      const key = match[1];
      let value = match[2];
      if (value == 'null') value = null;
      acc[key] = value;
    }
    ;
    return acc;
  }, {});

  //  default 동부국제물류
  scwin.p_clntNo = commDTO.clntNo ?? '';
  scwin.p_clntNm = commDTO.name1 ?? '';
  scwin.airexgbim = commDTO.airExgbIm ?? '3';

  // 서버날짜 가져오기
  //    scwin.strCurDate = $c.date.getServerDateTime('yyyyMMdd');
  //    scwin.strPreDate = $c.date.addMonth(scwin.strCurDate, -1).substring(0, 6) + "01";

  //alert("strCurDate ["+scwin.strCurDate+"]");
  //alert("strPreDate ["+scwin.strPreDate+"]");
  scwin.kcomCd = scwin.paramData['kcomcd'];
  scwin.mblNo = scwin.paramData['blno'];
  scwin.consolNo = scwin.paramData['mhno'];

  /*
  scwin.ioGb = paramData['iogb'];
  scwin.p_no = paramData['no'];
  scwin.p_row_cnt = paramData['row_cnt'];
  scwin.p_data = paramData['data'];
  scwin.p_hblno2 = paramData['hblno'];
  scwin.v_linkcheck = paramData['linkcheck'];
  */
  // 메세지 상수 선언
  scwin.MSG_LO_WRN_001 = '@ 운임 자료가 존재 합니다. 삭제 후 적용 하세요.';
  scwin.MSG_LO_WRN_002 = '이미 인보이스가 발행 되어 삭제 불가능 합니다.';
  scwin.processFlag = ''; // 처리 결과를 체크하는 Flag 	
  scwin.actionFlag = '';
  scwin.spRtn = ''; //인보이스 체크 결과 
  scwin.spMsg = ''; //인보이스 체크 메세지 

  scwin.TabIndex = 0; //Tab 선택 구분자 
  scwin.linkType = ''; // 페이지 링크로 들어 왔을때 해당 b/l, CONSOL 번호  조회 여부 체크

  //Line Account inof 정보 가져 오기 (항공사  사사 오입 )
  scwin.Trunc_Discount = '';
  scwin.Trunc_Rate = '';
  scwin.Trunc_Commission = '';
  scwin.Trunc_vat = '';
  scwin.exRateCheck = '1'; // 환율 존재 유무 
  scwin.exRate1 = '0'; // 환율1  
  scwin.exRate2 = '0'; // 환율2  
  scwin.crc = ''; // 환종	
};
//-------------------------------------------------------------------------
// 조회 조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_searchCondition);
};
// 조회 버튼 클릭
scwin.btn_retrieve_onclick = function (e) {
  debugger;
  if (!scwin.f_ReqFieldChk()) {
    return;
  }
  //  dma_search.reform();
  //    ds_SearchParam.setEmptyValue();
  ds_SearchParam.set("kcomcd", "DBEX");
  //    ds_SearchParam.set("odrNo","");
  //    ds_SearchParam.set("odrDt","");
  ds_SearchParam.set("odrDtFrom", cnd_ed_odrDtFrom.getValue());
  ds_SearchParam.set("odrDtTo", cnd_ed_odrDtTo.getValue());
  ds_SearchParam.set("fromArea", cnd_ed_fromAreaCd.getValue());
  ds_SearchParam.set("toArea", cnd_ed_toAreaCd.getValue());
  ds_SearchParam.set("bilgClntNo", cnd_ed_bilgClntNo.getValue());
  //    ds_SearchParam.set("pchsClntNo", "");
  ds_SearchParam.set("carNo", cnd_ed_carNo.getValue());
  ds_SearchParam.set("procType", cnd_rd_optCar.getValue());
  $c.sbm.execute($p, sbm_reterieve);
};
scwin.f_ReqFieldChk = async function () {
  // 날짜  From - To 입력 확인
  var ret = await $c.gus.cfValidate($p, [cnd_ed_odrDtFrom, cnd_ed_odrDtTo]);
  if (!ret) {
    return;
  }

  // 날짜 범위 확인
  if (!$c.gus.cfIsAfterDate($p, cnd_ed_odrDtFrom.getValue(), cnd_ed_odrDtTo.getValue())) {
    cfAlertMsg(MSG_CM_ERR_048, new Array("Order Date From", "Order Date To"));
    ed_mchtOdrFromDt.focus();
    return false;
  }
  return true;
};
//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 
  var pWhere = "";
  switch (disGubun) {
    case 1:
      // 차량번호 팝업

      break;
    /*
        udc_carNo.setSelectId("retrieveCommGoodsInfo"); // XML상의 SELECT ID	
        udc_carNo.cfCommonPopUp(scwin.udc_carNo_callBackFun // XML상의 SELECT ID	
                                ,pCode      // 화면에서의 Code Element의	Value
                                ,pName		  // 화면에서의 Name Element의	Value
                                ,pClose					  // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
                                ,'2'						  // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
                                ,"Item Code,Item Name,"					  // Title순서	
                                ,'130,300'					  // 보여주는 각 컬럼들의 폭	
                                ,"3,4,5,6,7,8,9,10"					  // 컬럼중에서 숨기는	컬럼 지정	
                                ,null					  // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
                                ,'500'					  // POP-UP뛰을때 원도우의	사용자 정의	폭
                                ,'500'					  // POP-UP뛰을때 우도우의	사용자 정의	높이	
                                ,null					  // 윈도우 위치 Y좌표	
                                ,null					  // 윈도우 위치 X좌표
                                ,null					  // 중복체크여부	("F")
                                ,pAllSearch				  // 전체검색허용여부	("F")
                                ,"Item Search,Item Code,Item Name"	  // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
                                );
        break;	
    */
    case 2:
      //        alert("출발지설정");
      //        alert("pCode ["+pCode+"]");
      // 출발지 팝업            
      udc_FrAreaCd.setSelectId("retrieveDoorArea"); // XML상의 SELECT ID
      debugger;
      udc_FrAreaCd.ilCommonPopUp(scwin.udc_FrAreaCd_callBackFun // 콜백 함수
      , pCode // 화면에U의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , 'T' // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , '2' // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , 'FromArea Code,FromArea Name,' // Title순서
      , '130,300' // 보여주는 각 컬럼들의 폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , '500' // POP-UP뛰을때 원도우의 사용자 정의 폭
      , '500' // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "FromArea Search,FromArea Code,FromArea Name" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      // 도착지 팝업            
      udc_ToAreaCd.setSelectId("retrieveDoorArea"); // XML상의 SELECT ID
      udc_ToAreaCd.ilCommonPopUp(scwin.udc_ToAreaCd_callBackFun // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , 'T' // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , '2' // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , "ToArea Code, ToArea Name," // Title순서
      , '130,300' // 보여주는 각 컬럼들의 폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , '500' // POP-UP뛰을때 원도우의 사용자 정의 폭
      , '500' // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "ToArea Search,ToArea Code,ToArea Name" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      // Discharge Code           
      udc_custCd.setSelectId("retrieveEngClntInfo"); // XML상의 SELECT ID
      debugger;
      udc_custCd.cfCommonPopUp(scwinudc_custCd_callBackFun // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , 'T' // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , '2' // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , "Customer Code,Customer Name," // Title순서
      , '130,300' // 보여주는 각 컬럼들의 폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , '500' // POP-UP뛰을때 원도우의 사용자 정의 폭
      , '500' // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "Customer Search,Customer Code,Customer Name" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};
/*
*  조회 후 결과 처리
*/
scwin.sbm_reterieve_submitdone = function (e) {
  let rowCnt = ds_TransOrder.getRowCount();
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, ["조회결과"]);
    } else {
      tbx_totalRows.setValue(rowCnt);
    }
  }
  tbx_totalRows.setValue(rowCnt);
};
/*
*  fieldClear 버튼 클릭 이벤트
*/
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.f_PopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  switch (disGubun) {
    case "Departure":
      //Search Departure
      udc_dp.setSelectId("retrieveAirPortCode");
      udc_dp.ilCommonPopUp(scwin.udc_dp_callbackFunc, cnd_ed_dpcd.getValue().trim(), txt_dpnm.getValue(), pWinCloseTF, '6', 'Port Code, Port Name', '130,300', "3,4,5,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, 'Departure Search, Port Code, Port Name', pNoDataCloseTF);
      break;
    case "Destination":
      //Search Destination
      udc_ds.setSelectId("retrieveAirPortCode");
      udc_ds.ilCommonPopUp(scwin.udc_dc_callbackFunc, cnd_ed_dscd.getValue().trim(), txt_dsnm1.getValue(), pWinCloseTF, '2', 'Port Code, Port Name', '130,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, 'Destination Search, Port Code, Port Name', pNoDataCloseTF);
      break;
    case "Customer":
      //거래처 팝업(Search Shipper)
      udc_custCd.setSelectId("retrieveEngClntInfo");
      udc_custCd.ilCommonPopUp(scwin.udc_custCd_callbackFunc, cnd_ed_bilgClntNo.getValue().trim(), ed_cnd_txt_custNm.getValue(), pWinCloseTF, '6', 'Customer', '140,300', null, null, '500', '500', null, null, null, pAllSearchTF, null, pNoDataCloseTF);
      break;
    case "B/L PIC":
      //B/L 담당자 팝업
      udc_pic.setSelectId("retrieveEmpInfo");
      udc_pic.ilCommonPopUp(scwin.udc_pic_callbackFunc, cnd_ed_pic.getValue().trim(), cnd_txt_pic.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "B/L PIC,Code,Name", pNoDataCloseTF);
      break;
    default:
      break;
  }
};
/*
*   그리드 더블 클릭시
*/
scwin.gr_grdOut_oncelldblclick = function (rowIndex, columnIndex, columnId) {};
scwin.udc_carNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, cnd_ed_carNo.getValue(), txt_carNm.getValue(), 'F', 'T');
};
scwin.udc_carNo_callBackFun = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_carNo, txt_carNm);
  //   $c.gus.cfSetReturnValue(rtnList, ed_carNo, txt_carNm);
};
scwin.udc_FrAreaCd_callBackFun = function (rtnList) {
  //    alert("rtnList "+rtnList[0]);
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_fromAreaCd, cnd_txt_fromAreaNm);
};
scwin.udc_custCd_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_bilgClntNo, ed_cnd_txt_custNm);
};
scwin.udc_custCd_onblurCodeEvent = function (e) {
  var strClntNo = "";
  strClntNo = cnd_ed_bilgClntNo.getValue().trim();

  // if (ed_cnd_ed_custCd.Modified) {
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
scwin.udc_FrAreaCd_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(2, cnd_ed_fromAreaCd.getValue(), cnd_txt_fromAreaNm.getValue(), 'F', 'T');
};
scwin.udc_FrAreaCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, cnd_ed_fromAreaCd.getValue(), cnd_txt_fromAreaNm.getValue(), 'F', 'T');
};
scwin.udc_FrAreaCd_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(2, cnd_ed_fromAreaCd.getValue(), cnd_txt_fromAreaNm.getValue(), 'F', 'T');
};
scwin.udc_ToAreaCd_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(3, cnd_ed_toAreaCd.getValue(), cnd_txt_toAreaNm.getValue(), 'F', 'T');
};
scwin.udc_ToAreaCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, cnd_ed_toAreaCd.getValue(), cnd_txt_toAreaNm.getValue(), 'F', 'T');
};
scwin.udc_ToAreaCd_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(3, cnd_ed_toAreaCd.getValue(), cnd_txt_toAreaNm.getValue(), 'F', 'T');
};
scwin.udc_ToAreaCd_callBackFun = function (rtnList) {
  //    alert("rtnList "+rtnList[0]);
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_toAreaCd, cnd_txt_toAreaNm);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Order Date',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_Dt',refDataMap:'ds_SearchParam',refEdDt:'odrDtTo',refStDt:'odrDtFrom',style:'',edFromId:'cnd_ed_odrDtFrom',edToId:'cnd_ed_odrDtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'From ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{btnId:'fromArea',code:'fromArea',codeId:'cnd_ed_fromAreaCd','ev:onblurCodeEvent':'scwin.udc_FrAreaCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_FrAreaCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_FrAreaCd_onviewchangeNameEvent',id:'udc_FrAreaCd',nameId:'cnd_txt_fromAreaNm',popupID:'',popupTitle:'',refDataCollection:'ds_SearchParam',selectID:'',style:'width: %;height: px;',maxlengthCode:'7',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'To ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{btnId:'btn_ToAreaCd',code:'toArea',codeId:'cnd_ed_toAreaCd','ev:onblurCodeEvent':'scwin.udc_ToAreaCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_ToAreaCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_ToAreaCd_onviewchangeNameEvent',id:'udc_ToAreaCd',nameId:'cnd_txt_toAreaNm',popupID:'',popupTitle:'',refDataCollection:'ds_SearchParam',selectID:'',style:'width: %;height: px;',maxlengthCode:'7',allowCharCode:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Car No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{btnId:'btn_carNo',code:'carNo',codeId:'cnd_ed_carNo','ev:onblurCodeEvent':'','ev:onclickEvent':'','ev:onviewchangeNameEvent':'',id:'udc_carNo',nameId:'txt_carNm',popupID:'',refDataCollection:'ds_SearchParam',selectID:'',style:'',validTitle:'','ev:onviewchangeCodeEvent':'',maxlengthCode:'8',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{maxlengthCode:'8',objTypeCode:'data',refDataCollection:'ds_SearchParam','ev:onviewchangeNameEvent':'scwin.udc_custCd_onviewchangeNameEvent',code:'custCd',popupID:'',UpperFlagCode:'1',maxlengthName:'50',hideName:'Y','ev:onclickEvent':'scwin.udc_custCd_onclickEvent',allowCharCode:'a-zA-Z0-9',codeId:'cnd_ed_bilgClntNo',name:'custNm',nameId:'ed_cnd_txt_custNm',style:'',id:'udc_custCd','ev:onblurCodeEvent':'scwin.udc_custCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'cnd_rd_optCar',ref:'data:ds_SearchParam.procType',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onviewchange':'scwin.rd_procType_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미배차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ALL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ALL'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_TransOrder',id:'gr_grdOut',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_grdOut_oncelldblclick',showSortableUseFilter:'false',showSortableImage:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'Order No',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Order Date',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'Customer',width:'140',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'B/L No',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'From Area',width:'140',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'From Time',width:'140',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'To Area',width:'140',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column37',value:'To Time',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column33',value:'Driver',displayMode:'label',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column27',value:'Remark',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column58',value:'Code',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'Name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column55',value:'Code',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column54',value:'Name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'Date',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column52',value:'Time',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column51',value:'Code',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column50',value:'Name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'Date',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',value:'Time',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column47',value:'Name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column46',value:'Tel',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'Car No',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100',dataType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrDt',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fromArea',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fromAreaNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fromDt',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fromTm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'toArea',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'toAreaNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'toDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'toTm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'drvNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'drvTel',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'carNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'rmk',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',nameId:'',style:'width: %;height: px;'}}]}]}]})