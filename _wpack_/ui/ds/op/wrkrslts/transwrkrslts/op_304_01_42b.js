/*amd /ui/ds/op/wrkrslts/transwrkrslts/op_304_01_42b.xml 62996 b358edbccab2da6c3e2154864cfcfa864118f728ae09972d7c0ea7554c784cb3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrWrkRslts',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd20',name:'20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd40',name:'40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd45',name:'45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'QTY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'WT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'기본단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDcScAmt',name:'할증',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totSellAmt',name:'계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'기본단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDcScAmt',name:'할증',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPchsAmt',name:'계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'profitAmt',name:'이익금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'profitRt',name:'원가율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blBookingNo',name:'BL/;BOOKING',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt2',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDcScAmt2',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totSellAmt2',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt2',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDcScAmt2',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPchsAmt2',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'profitAmt2',name:'name25',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_srchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pcostRt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd1',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd2',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd3',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptCd1',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptCd2',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvCd1',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvCd2',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'grpClntNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellAmt',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrKndCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_odrKndCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retreive',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveClntEchTransPcostRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_srchCond", "key":"IN_DS1"}, {"id":"ds_cntrWrkRslts", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_cntrWrkRslts","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retreive_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_odrKndCd',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_odrKndCd',target:'data:json,{"id":"ds_odrKndCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_odrKndCd_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//---------------------------------------------------------
// 전역변수
//---------------------------------------------------------   
scwin.onpageload = async function () {
  const codeOptions = [{
    grpCd: "OP190",
    compID: "co_lc_srchWrkClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.codeCallbackFunc);
  var codeOptions1 = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    compID: "co_lc_srchLobran"
  }];
  $c.data.setGauceUtil($p, codeOptions1, scwin.codeCallbackFunc2);
  scwin.lc_unit_onchange();
};

//---------------------------------------------------------
// UDC
//---------------------------------------------------------    
scwin.onUdcCompleted = function () {
  today = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  ed_srchWrkStDt.setValue(today);
  ed_srchWrkEndDt.setValue(today);
  gr_cntrWrkRslts.setFooterValue("column92", 0);
};

//---------------------------------------------------------
// 사용자 함수
//---------------------------------------------------------   
scwin.codeCallbackFunc = function () {
  let dltStr = "dlt_commonCodeOP190"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
  let dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
  $c.data.dataListFilter($p, dlt, "fltrCd1 == '1'"); //$c.data.dataListFilter 함수를 이용해서 필터
};
scwin.codeCallbackFunc2 = function () {
  co_lc_srchLobran.addItem("전체", "", null, 0);
  co_lc_srchLobran.setSelectedIndex(0);

  // co_lc_srchWrkClsCd.setSelectedIndex(1);

  dma_odrKndCd.set("grpCd", "SD113");
  $c.sbm.execute($p, sbm_odrKndCd);
};
scwin.setAmt = function (d, fd, r, c) {
  debugger;
  rtn = Number(d) * 1000;
  // console.log(gr_cntrWrkRslts.getColumnID(c));
  // console.log(gr_cntrWrkRslts.getColumnID(c+1));
  // ds_cntrWrkRslts.setCellData(r, "sellAmt2", rtn);
  return fd;
};
scwin.f_openPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  if (disGubun == "1") {
    udc_bilgClnt.setSelectId("retrieveBilgMchtList");
    udc_bilgClnt.cfCommonPopUp(scwin.udc_bilgClnt_callbackFunc, pCode // 화면에서의 ??? Code Element의	Value
    , pName // 화면에서의 ??? Name Element의	Value
    , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
    , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서	
    , null // 보여주는 각 컬럼들의 폭	
    , null // 컬럼중에서 숨기는	컬럼 지정	
    , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의	사용자 정의	폭
    , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
    , null // 윈도우 위치 Y좌표	
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , "F" // 전체검색허용여부	("F")
    , "화주,화주코드,화주명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  }
  if (disGubun == "L1") {
    udc_line1.setSelectId("retrieveLineInfoList");
    udc_line1.cfCommonPopUp(scwin.udc_line1_callbackFunc, pCode // 화면에서의 ??? Code Element의	Value
    , pName // 화면에서의 ??? Name Element의	Value
    , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
    , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서	
    , null // 보여주는 각 컬럼들의 폭	
    , null // 컬럼중에서 숨기는	컬럼 지정	
    , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의	사용자 정의	폭
    , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
    , null // 윈도우 위치 Y좌표	
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , "F" // 전체검색허용여부	("F")
    , "LINE,LINE코드,LINE명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  }
  if (disGubun == "L2") {
    udc_line2.setSelectId("retrieveLineInfoList");
    udc_line2.cfCommonPopUp(scwin.udc_line2_callbackFunc, pCode // 화면에서의 ??? Code Element의	Value
    , pName // 화면에서의 ??? Name Element의	Value
    , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
    , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서	
    , null // 보여주는 각 컬럼들의 폭	
    , null // 컬럼중에서 숨기는	컬럼 지정	
    , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의	사용자 정의	폭
    , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
    , null // 윈도우 위치 Y좌표	
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , "F" // 전체검색허용여부	("F")
    , "LINE,LINE코드,LINE명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  }
  if (disGubun == "L3") {
    udc_line3.setSelectId("retrieveLineInfoList");
    udc_line3.cfCommonPopUp(scwin.udc_line3_callbackFunc, pCode // 화면에서의 ??? Code Element의	Value
    , pName // 화면에서의 ??? Name Element의	Value
    , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
    , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서	
    , null // 보여주는 각 컬럼들의 폭	
    , null // 컬럼중에서 숨기는	컬럼 지정	
    , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의	사용자 정의	폭
    , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
    , null // 윈도우 위치 Y좌표	
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , "F" // 전체검색허용여부	("F")
    , "LINE,LINE코드,LINE명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  }
  if (disGubun == "R1") {
    udc_dpt1.setSelectId("retrieveWrkPlInfo");
    udc_dpt1.cfCommonPopUp(scwin.udc_dpt1_callbackFunc, pCode // 화면에서의 ??? Code Element의	Value
    , pName // 화면에서의 ??? Name Element의	Value
    , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
    , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서	
    , null // 보여주는 각 컬럼들의 폭	
    , null // 컬럼중에서 숨기는	컬럼 지정	
    , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의	사용자 정의	폭
    , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
    , null // 윈도우 위치 Y좌표	
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , "F" // 전체검색허용여부	("F")
    , "작업장,코드,코드명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  }
  if (disGubun == "R2") {
    udc_dpt2.setSelectId("retrieveWrkPlInfo");
    udc_dpt2.cfCommonPopUp(scwin.udc_dpt2_callbackFunc, pCode // 화면에서의 ??? Code Element의	Value
    , pName // 화면에서의 ??? Name Element의	Value
    , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
    , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서	
    , null // 보여주는 각 컬럼들의 폭	
    , null // 컬럼중에서 숨기는	컬럼 지정	
    , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의	사용자 정의	폭
    , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
    , null // 윈도우 위치 Y좌표	
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , "F" // 전체검색허용여부	("F")
    , "작업장,코드,코드명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  }
  if (disGubun == "R3") {
    udc_arv1.setSelectId("retrieveWrkPlInfo");
    udc_arv1.cfCommonPopUp(scwin.udc_arv1_callbackFunc, pCode // 화면에서의 ??? Code Element의	Value
    , pName // 화면에서의 ??? Name Element의	Value
    , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
    , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서	
    , null // 보여주는 각 컬럼들의 폭	
    , null // 컬럼중에서 숨기는	컬럼 지정	
    , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의	사용자 정의	폭
    , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
    , null // 윈도우 위치 Y좌표	
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , "F" // 전체검색허용여부	("F")
    , "작업장,코드,코드명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  }
  if (disGubun == "R4") {
    udc_arv2.setSelectId("retrieveWrkPlInfo");
    udc_arv2.cfCommonPopUp(scwin.udc_arv2_callbackFunc, pCode // 화면에서의 ??? Code Element의	Value
    , pName // 화면에서의 ??? Name Element의	Value
    , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
    , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서	
    , null // 보여주는 각 컬럼들의 폭	
    , null // 컬럼중에서 숨기는	컬럼 지정	
    , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의	사용자 정의	폭
    , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
    , null // 윈도우 위치 Y좌표	
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , "F" // 전체검색허용여부	("F")
    , "작업장,코드,코드명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  }
  if (disGubun == "G") {
    udc_grpClnt.setSelectId("retrieveGrpClntNo");
    udc_grpClnt.cfCommonPopUp(scwin.udc_grpClnt_callbackFunc, pCode // 화면에서의 ??? Code Element의	Value
    , pName // 화면에서의 ??? Name Element의	Value
    , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
    , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서	
    , null // 보여주는 각 컬럼들의 폭	
    , null // 컬럼중에서 숨기는	컬럼 지정	
    , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의	사용자 정의	폭
    , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
    , null // 윈도우 위치 Y좌표	
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , "T" // 전체검색허용여부	("F")
    , "그룹거래처,코드,코드명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  }
};
scwin.udc_bilgClnt_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgClntNo, txt_bilgClntNm, null);
};
scwin.udc_line1_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd1, txt_lineNm1, null);
};
scwin.udc_line2_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd2, txt_lineNm2, null);
};
scwin.udc_line3_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd3, txt_lineNm3, null);
};
scwin.udc_dpt1_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dptCd1, txt_dptNm1, null);
};
scwin.udc_dpt2_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dptCd2, txt_dptNm2, null);
};
scwin.udc_arv1_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_arvCd1, txt_arvNm1, null);
};
scwin.udc_arv2_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_arvCd2, txt_arvNm2, null);
};
scwin.udc_grpClnt_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_grpClntNo, txt_grpClntNm, null);
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openPopUp(disGubun, pVal, '', 'T', 'T');
  }
  // inObj가 코드명 필드일 경우 팝업
  else {
    scwin.f_openPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.rate = function (d, fd, r, c) {
  if (d >= 100) {
    gr_cntrWrkRslts.setCellColor(r, "profitRt", "#FF0000");
  } else {
    gr_cntrWrkRslts.setCellColor(r, "profitRt", "#000000");
  }
  return fd;
};

//---------------------------------------------------------
// 컴포넌트 이벤트
//---------------------------------------------------------   

scwin.btn_retrieve_onclick = async function (e) {
  if (!$c.gus.cfValidate($p, ed_srchWrkStDt) || !$c.gus.cfValidate($p, ed_srchWrkEndDt)) {
    return;
  }
  if (ed_srchWrkStDt.getValue() == "") {
    await $c.win.alert($p, "작업 조회 시작일자은(는) 필수 입력 항목입니다.");
    return;
  }
  if (ed_srchWrkEndDt.getValue() == "") {
    await $c.win.alert($p, "작업 조회 종료일자은(는) 필수 입력 항목입니다.");
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_srchWrkStDt.getValue(), ed_srchWrkEndDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_srchWrkStDt.focus();
    return;
  }
  if (chk_retrvStpYn.getValue() == 1) {
    if (ed_bilgClntNo.getValue() == "") {
      $c.win.alert($p, "화주별 조회 선택시 청구화주는 필수 입력항목입니다.");
      return false;
    }
  }
  ds_srchCond.set("lobranCd", co_lc_srchLobran.getValue());
  ds_srchCond.set("wrkStDt", ed_srchWrkStDt.getValue());
  ds_srchCond.set("wrkEndDt", ed_srchWrkEndDt.getValue());
  ds_srchCond.set("wrkClsCd", co_lc_srchWrkClsCd.getValue());
  ds_srchCond.set("pcostRt", ed_pcostRt.getValue());
  ds_srchCond.set("odrKndCd", lc_odrKndCd.getValue());
  ds_srchCond.set("bilgClntNo", ed_bilgClntNo.getValue());
  ds_srchCond.set("lineCd1", ed_lineCd1.getValue());
  ds_srchCond.set("lineCd2", ed_lineCd2.getValue());
  ds_srchCond.set("lineCd3", ed_lineCd3.getValue());
  ds_srchCond.set("dptCd1", ed_dptCd1.getValue());
  ds_srchCond.set("dptCd2", ed_dptCd2.getValue());
  ds_srchCond.set("arvCd1", ed_arvCd1.getValue());
  ds_srchCond.set("arvCd2", ed_arvCd2.getValue());
  ds_srchCond.set("grpClntNo", ed_grpClntNo.getValue());
  ds_srchCond.set("odrNo", ed_odrNo.getValue());
  ds_srchCond.set("sellAmt", ed_sellAmt.getValue());
  $c.sbm.execute($p, sbm_retreive);
};
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_searchCondition);
  ed_srchWrkStDt.setValue(WebSquare.date.getCurrentServerDate("yyyyMMdd"));
  ed_srchWrkEndDt.setValue(WebSquare.date.getCurrentServerDate("yyyyMMdd"));
};
scwin.sbm_odrKndCd_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    //$c.gus.cfShowError(sbm_retrieve);
    return;
  }
  ds_odrKndCd.setColumnFilter({
    type: 'row',
    colIndex: 'fltrCd1',
    key: "C"
  });
  lc_odrKndCd.addItem("전체", "", null, 0);
  lc_odrKndCd.setSelectedIndex(0);
};
scwin.sbm_retreive_submitdone = function (e) {
  if (ds_cntrWrkRslts.getTotalRow() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
    return;
  }
  ds_cntrWrkRslts.sort("bilgClntNm", 0);
  ed_totalRow.setValue(ds_cntrWrkRslts.getTotalRow());
  if (co_lc_srchWrkClsCd.getValue() == "B") {
    gr_cntrWrkRslts.setColumnVisible("qty", true);
    gr_cntrWrkRslts.setColumnVisible("wt", true);
    gr_cntrWrkRslts.setColumnVisible("cbm", true);
    gr_cntrWrkRslts.setColumnVisible("cntrSizCd20", false);
    gr_cntrWrkRslts.setColumnVisible("cntrSizCd40", false);
    gr_cntrWrkRslts.setColumnVisible("cntrSizCd45", false);
  } else {
    gr_cntrWrkRslts.setColumnVisible("qty", false);
    gr_cntrWrkRslts.setColumnVisible("wt", false);
    gr_cntrWrkRslts.setColumnVisible("cbm", false);
    gr_cntrWrkRslts.setColumnVisible("cntrSizCd20", true);
    gr_cntrWrkRslts.setColumnVisible("cntrSizCd40", true);
    gr_cntrWrkRslts.setColumnVisible("cntrSizCd45", true);
  }
  for (var i = 0; i < ds_cntrWrkRslts.getTotalRow(); i++) {
    ds_cntrWrkRslts.setCellData(i, "sellAmt2", Number(ds_cntrWrkRslts.getCellData(i, "sellAmt")) * 1000);
    ds_cntrWrkRslts.setCellData(i, "sellDcScAmt2", Number(ds_cntrWrkRslts.getCellData(i, "sellDcScAmt")) * 1000);
    ds_cntrWrkRslts.setCellData(i, "totSellAmt2", Number(ds_cntrWrkRslts.getCellData(i, "totSellAmt")) * 1000);
    ds_cntrWrkRslts.setCellData(i, "pchsAmt2", Number(ds_cntrWrkRslts.getCellData(i, "pchsAmt")) * 1000);
    ds_cntrWrkRslts.setCellData(i, "pchsDcScAmt2", Number(ds_cntrWrkRslts.getCellData(i, "pchsDcScAmt")) * 1000);
    ds_cntrWrkRslts.setCellData(i, "totPchsAmt2", Number(ds_cntrWrkRslts.getCellData(i, "totPchsAmt")) * 1000);
    ds_cntrWrkRslts.setCellData(i, "profitAmt2", Number(ds_cntrWrkRslts.getCellData(i, "profitAmt")) * 1000);
  }
};
scwin.lc_unit_onchange = function (info) {
  if (lc_unit.getValue() == 0) {
    // 천원
    gr_cntrWrkRslts.setColumnVisible("sellAmt", true);
    gr_cntrWrkRslts.setColumnVisible("sellDcScAmt", true);
    gr_cntrWrkRslts.setColumnVisible("totSellAmt", true);
    gr_cntrWrkRslts.setColumnVisible("pchsAmt", true);
    gr_cntrWrkRslts.setColumnVisible("pchsDcScAmt", true);
    gr_cntrWrkRslts.setColumnVisible("totPchsAmt", true);
    gr_cntrWrkRslts.setColumnVisible("profitAmt", true);
    gr_cntrWrkRslts.setColumnVisible("sellAmt2", false);
    gr_cntrWrkRslts.setColumnVisible("sellDcScAmt2", false);
    gr_cntrWrkRslts.setColumnVisible("totSellAmt2", false);
    gr_cntrWrkRslts.setColumnVisible("pchsAmt2", false);
    gr_cntrWrkRslts.setColumnVisible("pchsDcScAmt2", false);
    gr_cntrWrkRslts.setColumnVisible("totPchsAmt2", false);
    gr_cntrWrkRslts.setColumnVisible("profitAmt2", false);
  } else {
    gr_cntrWrkRslts.setColumnVisible("sellAmt2", true);
    gr_cntrWrkRslts.setColumnVisible("sellDcScAmt2", true);
    gr_cntrWrkRslts.setColumnVisible("totSellAmt2", true);
    gr_cntrWrkRslts.setColumnVisible("pchsAmt2", true);
    gr_cntrWrkRslts.setColumnVisible("pchsDcScAmt2", true);
    gr_cntrWrkRslts.setColumnVisible("totPchsAmt2", true);
    gr_cntrWrkRslts.setColumnVisible("profitAmt2", true);
    gr_cntrWrkRslts.setColumnVisible("sellAmt", false);
    gr_cntrWrkRslts.setColumnVisible("sellDcScAmt", false);
    gr_cntrWrkRslts.setColumnVisible("totSellAmt", false);
    gr_cntrWrkRslts.setColumnVisible("pchsAmt", false);
    gr_cntrWrkRslts.setColumnVisible("pchsDcScAmt", false);
    gr_cntrWrkRslts.setColumnVisible("totPchsAmt", false);
    gr_cntrWrkRslts.setColumnVisible("profitAmt", false);
  }
};
scwin.udc_bilgClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, txt_bilgClntNm, '1');
};
scwin.udc_bilgClnt_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_bilgClntNo.getValue(), txt_bilgClntNm.getValue(), 'F', 'F');
};
scwin.udc_bilgClnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_bilgClntNm, ed_bilgClntNo, '1', false);
};
scwin.udc_grpClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_grpClntNo, txt_grpClntNm, 'G');
};
scwin.udc_grpClnt_onclickEvent = function (e) {
  scwin.f_openPopUp('G', ed_grpClntNo.getValue(), txt_grpClntNm.getValue(), 'F', 'F');
};
scwin.udc_grpClnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_grpClntNm, ed_grpClntNo, 'G', false);
};
scwin.udc_line1_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd1, txt_lineNm1, 'L1');
};
scwin.udc_line1_onclickEvent = function (e) {
  scwin.f_openPopUp('L1', ed_lineCd1.getValue(), txt_lineNm1.getValue(), 'F', 'F');
};
scwin.udc_line1_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_lineNm1, ed_lineCd1, 'L1', false);
};
scwin.udc_line2_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd2, txt_lineNm2, 'L2');
};
scwin.udc_line2_onclickEvent = function (e) {
  scwin.f_openPopUp('L2', ed_lineCd2.getValue(), txt_lineNm2.getValue(), 'F', 'F');
};
scwin.udc_line2_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_lineNm2, ed_lineCd2, 'L2', false);
};
scwin.udc_line3_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd3, txt_lineNm3, 'L3');
};
scwin.udc_line3_onclickEvent = function (e) {
  scwin.f_openPopUp('L3', ed_lineCd3.getValue(), txt_lineNm3.getValue(), 'F', 'F');
};
scwin.udc_line3_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_lineNm3, ed_lineCd3, 'L3', false);
};
scwin.udc_dpt1_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_dptCd1, txt_dptNm1, 'R1');
};
scwin.udc_dpt1_onclickEvent = function (e) {
  scwin.f_openPopUp('R1', ed_dptCd1.getValue(), txt_dptNm1.getValue(), 'F', 'F');
};
scwin.udc_dpt1_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_dptNm1, ed_dptCd1, 'R1', false);
};
scwin.udc_dpt2_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_dptCd2, txt_dptNm2, 'R2');
};
scwin.udc_dpt2_onclickEvent = function (e) {
  scwin.f_openPopUp('R2', ed_dptCd2.getValue(), txt_dptNm2.getValue(), 'F', 'F');
};
scwin.udc_dpt2_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_dptNm2, ed_dptCd2, 'R2', false);
};
scwin.udc_arv1_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_arvCd1, txt_arvNm1, 'R3');
};
scwin.udc_arv1_onclickEvent = function (e) {
  scwin.f_openPopUp('R3', ed_arvCd1.getValue(), txt_arvNm1.getValue(), 'F', 'F');
};
scwin.udc_arv1_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_arvNm1, ed_arvCd1, 'R3', false);
};
scwin.udc_arv2_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_arvCd2, txt_arvNm2, 'R4');
};
scwin.udc_arv2_onclickEvent = function (e) {
  scwin.f_openPopUp('R4', ed_arvCd2.getValue(), txt_arvNm2.getValue(), 'F', 'F');
};
scwin.udc_arv2_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_arvNm2, ed_arvCd2, 'R4', false);
};
scwin.gr_cntrWrkRslts_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "odrNo") {
    menuNm = "";
    src = "";
    menuId = "op_304_01_17b.jsp";
    paramObj = {};
    src = "/ui/ds/op/wrkrslts/transwrkrslts//op_304_01_17b.xml";
    menuNm = "운송단위별 원가율 조회";
    paramObj = {
      sellDept: co_lc_srchLobran.getValue(),
      fromRsltsDt: ed_srchWrkStDt.getValue(),
      toRsltsDt: ed_srchWrkEndDt.getValue(),
      odrNofromRequest: ds_cntrWrkRslts.getCellData(rowIndex, "odrNo")
    };
    $c.win.openMenu($p, menuNm, src, menuId, paramObj);
  }
};
scwin.gr_cntrWrkRslts_onbeforecolumnmove = function (info) {
  if (info.startColumnIndex < 6 || info.endColumnIndex < 6) return false;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'co_lc_srchLobran',search:'start',style:'width:230px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구화주',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',nameId:'txt_bilgClntNm',codeId:'ed_bilgClntNo',id:'udc_bilgClnt','ev:onblurCodeEvent':'scwin.udc_bilgClnt_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bilgClnt_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_bilgClnt_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9|a-z|A-Z'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'실적일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_srchWrkDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_srchWrkStDt',edToId:'ed_srchWrkEndDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'co_lc_srchWrkClsCd',search:'start',style:'width:150px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_retrvStpYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화주별조회'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_odrKndCd',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_odrKndCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'그룹거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_grpClntNo',nameId:'txt_grpClntNm',id:'udc_grpClnt','ev:onblurCodeEvent':'scwin.udc_grpClnt_onblurCodeEvent','ev:onclickEvent':'scwin.udc_grpClnt_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_grpClnt_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9|a-z|A-Z'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출액 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_sellAmt',placeholder:'',class:'tar',allowChar:'0-9',validateOnInput:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'천원 이상',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원가율',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_pcostRt',placeholder:'',style:'width:85px;',allowChar:'0-9',validateOnInput:'true',maxlength:'3'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'% 이상',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line1',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lineCd1',nameId:'txt_lineNm1',id:'udc_line1','ev:onblurCodeEvent':'scwin.udc_line1_onblurCodeEvent','ev:onclickEvent':'scwin.udc_line1_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_line1_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9|a-z|A-Z',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line2',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lineCd2',nameId:'txt_lineNm2',id:'udc_line2','ev:onclickEvent':'scwin.udc_line2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_line2_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_line2_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9|a-z|A-Z',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line3',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lineCd3',nameId:'txt_lineNm3',id:'udc_line3','ev:onblurCodeEvent':'scwin.udc_line3_onblurCodeEvent','ev:onclickEvent':'scwin.udc_line3_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_line3_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9|a-z|A-Z',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발구간1',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_dptCd1',nameId:'txt_dptNm1',id:'udc_dpt1','ev:onblurCodeEvent':'scwin.udc_dpt1_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dpt1_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_dpt1_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9|a-z|A-Z',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발구간2',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_dptCd2',nameId:'txt_dptNm2',id:'udc_dpt2','ev:onblurCodeEvent':'scwin.udc_dpt2_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dpt2_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_dpt2_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9|a-z|A-Z',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착구간1',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_arvCd1',nameId:'txt_arvNm1',id:'udc_arv1','ev:onblurCodeEvent':'scwin.udc_arv1_onblurCodeEvent','ev:onclickEvent':'scwin.udc_arv1_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_arv1_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9|a-z|A-Z',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착구간2',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_arvCd2',nameId:'txt_arvNm2',id:'udc_arv2','ev:onblurCodeEvent':'scwin.udc_arv2_onblurCodeEvent','ev:onclickEvent':'scwin.udc_arv2_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_arv2_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9|a-z|A-Z',UpperFlagCode:'1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처별 원가율',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'단위',class:'req'}},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width:120px;',allOption:'',id:'lc_unit',class:'',direction:'auto',ref:'','ev:onchange':'scwin.lc_unit_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'천원'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',btnUser:'N',gridID:'gr_cntrWrkRslts',grdDownOpts:'{"fileName":"거래처별 운송 원가율 조회","sheetName":"거래처별 운송 원가율 조회","type":"4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_cntrWrkRslts',id:'gr_cntrWrkRslts',style:'',visibleRowNumFix:'true',drawType:'virtual',visibleRowNum:'13',readOnly:'true','ev:oncelldblclick':'scwin.gr_cntrWrkRslts_oncelldblclick','ev:onbeforecolumnmove':'scwin.gr_cntrWrkRslts_onbeforecolumnmove'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'매출부서',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'거래처',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'오더번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'20\'',width:'60',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'40\'',width:'60',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'45\'',width:'60',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'QTY',width:'80',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'WT',width:'80',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'CBM',width:'80',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'매출액',width:'420',colSpan:'6',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',id:'column37',value:'매입액',displayMode:'label',colSpan:'6',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'column31',value:'이익',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',value:'BL/<br/>BOOKING',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'기본단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column110',value:'기본단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column72',value:'할증',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column115',value:'할증',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column120',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'기본단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column125',value:'기본단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column82',value:'할증',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column130',value:'할증',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column77',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column135',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'이익금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column140',value:'이익금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column87',value:'원가율',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sellLodeptNm',inputType:'text',width:'100',textAlign:'left',style:'',upperColumn:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',width:'120',textAlign:'left',style:'background-color: #FFFFFF !important;',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100',style:'text-decoration: underline;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd20',inputType:'text',width:'70',textAlign:'right',excelCellType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd40',inputType:'text',width:'70',textAlign:'right',excelCellType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd45',inputType:'text',width:'70',textAlign:'right',excelCellType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',width:'80',textAlign:'right',dataType:'number',displayFormat:'#,###.0[floor]',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'text',width:'80',textAlign:'right',dataType:'number',displayFormat:'#,###.0[floor]',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cbm',inputType:'text',width:'80',textAlign:'right',dataType:'number',displayFormat:'#,###.0[floor]',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',hidden:'true',excelCellType:'number',customFormatter:'scwin.setAmt',displayFormat:'#,###.#[floor]',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmt2',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#[floor]',hidden:'true',excelCellType:'number',hiddenCol:'true',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'sellDcScAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#[floor]',hidden:'true',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'sellDcScAmt2',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#[floor]',hidden:'true',excelCellType:'number',hiddenCol:'true',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'totSellAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#[floor]',hidden:'true',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'totSellAmt2',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#[floor]',hidden:'true',excelCellType:'number',hiddenCol:'true',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#[floor]',hidden:'true',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pchsAmt2',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#[floor]',hidden:'true',excelCellType:'number',hiddenCol:'true',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'pchsDcScAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#[floor]',hidden:'true',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'pchsDcScAmt2',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#[floor]',hidden:'true',excelCellType:'number',hiddenCol:'true',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'totPchsAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#[floor]',hidden:'true',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'totPchsAmt2',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#[floor]',hidden:'true',excelCellType:'number',hiddenCol:'true',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'profitAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#[floor]',hidden:'true',excelCellType:'number',colMerge:'true',style:'background-color:#FFFFFF;',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'background-color:#FFFFFF;',id:'profitAmt2',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#[floor]',hidden:'true',excelCellType:'number',colMerge:'true',hiddenCol:'true',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'background-color:#FFFFFF;',id:'profitRt',value:'',displayMode:'label',textAlign:'right',excelCellType:'number',displayFormat:'#,###.0[floor]',dataType:'number',customFormatter:'scwin.rate',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'blBookingNo',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'bilgClntNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column108',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column107',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column106',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'expression',style:'',id:'column105',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM(\'cntrSizCd20\')',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'60',inputType:'expression',style:'',id:'column104',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM(\'cntrSizCd40\')',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'60',inputType:'expression',style:'',id:'column103',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM(\'cntrSizCd45\')',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column102',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.0[floor]',expression:'SUM(\'qty\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column101',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.0[floor]',expression:'SUM(\'wt\')',textAlign:'right',excelFormat:'#,##0.0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column100',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.0[floor]',expression:'SUM(\'cbm\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column99',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'sellAmt\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column112',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'sellAmt2\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column98',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'sellDcScAmt\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column117',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'sellDcScAmt2\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column97',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'totSellAmt\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column122',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'totSellAmt2\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column96',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'pchsAmt\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column127',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'pchsAmt2\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column95',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'pchsDcScAmt\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column132',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'pchsDcScAmt2\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column94',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'totPchsAmt\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column137',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'totPchsAmt2\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column93',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'profitAmt\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column142',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'profitAmt2\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column92',value:'',displayMode:'label',dataType:'float',displayFormat:'#,###.0',expression:'(sum(\'sellAmt\')+sum(\'sellDcScAmt\')) == 0 ? 0 : (sum(\'pchsAmt\')+sum(\'pchsDcScAmt\')) / (sum(\'sellAmt\')+sum(\'sellDcScAmt\')) * 100',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column91',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'60',inputType:'expression',style:'',id:'column105',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM(\'cntrSizCd20\')',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'60',inputType:'expression',style:'',id:'column104',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM(\'cntrSizCd40\')',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'60',inputType:'expression',style:'',id:'column103',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM(\'cntrSizCd45\')',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column102',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.0[floor]',expression:'SUM(\'qty\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column101',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.0[floor]',expression:'SUM(\'wt\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column100',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.0[floor]',expression:'SUM(\'cbm\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column99',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'sellAmt\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column112',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'sellAmt2\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column98',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'sellDcScAmt\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column117',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'sellDcScAmt2\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column97',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'totSellAmt\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column122',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'totSellAmt2\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column96',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'pchsAmt\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column127',value:'',displayMode:'label',dataType:'float',displayFormat:'#,###.#[floor]',expression:'SUM(\'pchsAmt2\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column95',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'pchsDcScAmt\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column132',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'pchsDcScAmt2\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column94',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'totPchsAmt\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column137',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'totPchsAmt2\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column93',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'profitAmt\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column142',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#[floor]',expression:'SUM(\'profitAmt2\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column92',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.0',expression:'(sum(\'sellAmt\') + sum(\'sellDcScAmt\')) == 0 ? 0 : (sum(\'pchsAmt\')+sum(\'pchsDcScAmt\'))/(sum(\'sellAmt\')+sum(\'sellDcScAmt\'))*100',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column36',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})