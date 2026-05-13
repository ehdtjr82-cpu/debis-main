/*amd /ui/ds/op/wrkrslts/transwrkrslts/op_304_01_14b.xml 29505 9cfc0afc12a810b024a7773d0750f8c39406a0c421ec1080ce078bf3baae36d3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_srchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKnd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mchtClntCd',name:'화주코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoCd',name:'협력업체코',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfClsCd',name:'자가구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'line',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrWrkRslts',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNm',name:'선사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'모선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'Line',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrInfo',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출발일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrKnd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'scwin.sbm_lobran_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retreive',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveContainerWorkResultsDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_srchCond","key":"IN_DS1"},{"id":"ds_cntrWrkRslts","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_cntrWrkRslts","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retreive_submitdone','ev:submiterror':'scwin.sbm_retreive_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/*
물류/실적현황/육송/컨테이너작업실적상세
조회조건 - 점소 : 6AA  / [시작일,종료일]20200122, 오더종류 C1, LINE : SWIL

    // 세션정보 가져오기
	LoginDTO loginDTO = LoginUtil.getLoginDTO(request);

    String sUserId  = loginDTO.getUserId();
    String sUserClsCd = loginDTO.getUserClsCd();   
    String sClntNo  = loginDTO.getClntNo();  
    String sClntNm  = loginDTO.getClntNm();  
	String sLobranCd = DCheckIf.isNullToBlank( StringUtils.strip( loginDTO.getLoUpperLobranCd()));

    DDate sDate = new DDate();
	String strFromDate = sDate.getDate("");			// 현재년월일을 구한다.
	strFromDate = strFromDate.substring(0,8);
	String strToDate = sDate.getDate("");	// 현재일자를 구한다.
	String strDate = strFromDate+strToDate;
*/

scwin.params = "";
scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
//scwin.vQryStDt = $c.date.addDate(scwin.vCurDate, -10);
scwin.memJson = $c.data.getMemInfo($p);
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  //console.log('  scwin.f_OnLoad === > ');
  //console.log(scwin.memJson);
  ica_srchWrkStDt.setValue(scwin.vCurDate);
  ica_srchWrkEndDt.setValue(scwin.vCurDate);

  //공통코드 적용
  const codeOptions = [{
    grpCd: "SD113",
    compID: "acb_srchOdrKnd"
  } //오더종류
  , {
    grpCd: "SD114",
    compID: "acb_selfClsCd"
  } //자가구분
  ];
  $c.data.setCommonCode($p, codeOptions);

  //점소콤보 조회 start
  $c.sbm.execute($p, sbm_lobran); //cmd 파일 어떻게?
};
scwin.onUdcCompleted = function () {
  scwin.f_OnLoad();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ica_srchWrkStDt])) || !(await $c.gus.cfValidate($p, [ica_srchWrkEndDt]))) {
    return;
  }
  if (!(await $c.gus.cfIsAfterDate($p, ica_srchWrkStDt.getValue(), ica_srchWrkEndDt.getValue()))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ica_srchWrkStDt.focus();
    return;
  }
  ds_cntrWrkRslts.setJSON([]);
  $c.sbm.execute($p, sbm_retreive);
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------

scwin.f_openPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  var rtnList = new Array();
  if (disGubun == "1") {
    //rtnList = cfCommonPopUp('retrieveCoopList'	        // XML상의 SELECT ID	
    udc_srchCopCoCd.setSelectId('retrieveCoopList');
    rtnList = udc_srchCopCoCd.cfCommonPopUp(scwin.udc_srchCopCoCdCallback, pCode // 화면에서의 ??? Code Element의	Value
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
    , pAllSearch // 전체검색허용여부	("F")
    , "협력업체,협력업체코드,협력업체명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );

    //cfSetReturnValue(rtnList, ed_srchCopCoCd, ed_srchCopCoNm);
  } else if (disGubun == "2") {
    //rtnList = cfCommonPopUp('retrieveBilgMchtList'	        // XML상의 SELECT ID
    udc_srchMchtClntNo.setSelectId('retrieveBilgMchtList');
    rtnList = udc_srchMchtClntNo.cfCommonPopUp(scwin.udc_srchMchtClntNoCallback // XML상의 SELECT ID	
    , pCode // 화면에서의 ??? Code Element의	Value
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
    , pAllSearch // 전체검색허용여부	("F")
    , "화주,화주코드,화주명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  } else if (disGubun == "3") {
    //rtnList = cfCommonPopUp('retrieveLineInfoList'          // XML상의 SELECT ID
    udc_lineCd.setSelectId('retrieveLineInfoList');
    rtnList = udc_lineCd.cfCommonPopUp(scwin.udc_lineCdCallback, pCode // 화면에서의 ??? Code Element의  Value
    , pName // 화면에서의 ??? Name Element의  Value
    , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
    , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서  
    , null // 보여주는 각 컬럼들의 폭    
    , null // 컬럼중에서 숨기는    컬럼 지정   
    , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의   사용자 정의  폭
    , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
    , null // 윈도우 위치 Y좌표   
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부   ("F")
    , pAllSearch // 전체검색허용여부 ("F")
    , "LINE,LINE코드,LINE명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 조회 조건 Reset
//-------------------------------------------------------------------------
scwin.f_Reset = function () {
  //$c.gus.cfInitObjects([tb_searchCondition]); //배열 안먹음.
  $c.gus.cfInitObjects($p, tb_searchCondition);
  ica_srchWrkStDt.setValue(scwin.vCurDate);
  ica_srchWrkEndDt.setValue(scwin.vCurDate);
};

//-------------------------------------------------------------------------
// List 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_toExcel = function () {
  //sheet명                              , 저장파일명                                         , 저장 다이얼로그
  $c.gus.cfGridToExcel($p, gr_cntrWrkRslts, "컨테이너 작업실적 상세", "컨테이너작업실적 상세.xls", 4 + 8 + 16);
};
scwin.btn_refresh_onclick = function (e) {
  scwin.f_Reset();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_lobran_submitdone = function (e) {
  var arrItm = ds_lobran.getMatchedIndex("lobranCd", scwin.memJson.loUpperLobranCd, false, 0, ds_lobran.getRowCount());
  if (arrItm.length > 0) {
    acb_con_bran.setValue(scwin.memJson.loUpperLobranCd);
  }
  acb_con_bran.focus();
};
scwin.sbm_lobran_submiterror = function (e) {};
scwin.sbm_retreive_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  var rowcnt = ds_cntrWrkRslts.getRowCount();
  tbx_totalRows.setValue(rowcnt);
  if (rowcnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  gr_cntrWrkRslts.setFocusedCell(0, "odrNo", false);
};
scwin.sbm_retreive_submiterror = function (e) {};
scwin.udc_lineCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, ed_lineNm, '3');
};
scwin.udc_lineCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineNm, ed_lineCd, '3', false);
};
scwin.udc_lineCd_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_lineCd.getValue(), ed_lineNm.getValue(), 'F', 'F');
};
scwin.udc_srchCopCoCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_srchCopCoCd, ed_srchCopCoNm, '1');
};
scwin.udc_srchCopCoCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_srchCopCoNm, ed_srchCopCoCd, '1', false);
};
scwin.udc_srchCopCoCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_srchCopCoCd.getValue(), ed_srchCopCoNm.getValue(), 'F', 'F');
};
scwin.udc_srchMchtClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_srchMchtClntNo, ed_srchMchtClntNm, '2');
};
scwin.udc_srchMchtClntNo_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_srchMchtClntNm, ed_srchMchtClntNo, '2', false);
};
scwin.udc_srchMchtClntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_srchMchtClntNo.getValue(), ed_srchMchtClntNm.getValue(), 'F', 'F');
};
scwin.udc_srchCopCoCdCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_srchCopCoCd, ed_srchCopCoNm);
};
scwin.udc_srchMchtClntNoCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_srchMchtClntNo, ed_srchMchtClntNm);
};
scwin.udc_lineCdCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd, ed_lineNm);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_con_bran',search:'start',style:'width:150px;',submenuSize:'fixed',allOption:'',chooseOption:'',chooseOptionLabel:'-전체-',ref:'data:ds_srchCond.lobranCd',mandatory:'true',title:'점소'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'wrkStDt',refDataMap:'ds_srchCond',style:'',id:'udc_fromToCalendar3',refEdDt:'wrkEndDt',edFromId:'ica_srchWrkStDt',edToId:'ica_srchWrkEndDt',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'작업 조회 시작일자',titleTo:'작업 조회 종료일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_srchOdrKnd',search:'start',style:'width: 150px;',submenuSize:'fixed',allOption:'',chooseOption:'true',chooseOptionLabel:'-전체-',ref:'data:ds_srchCond.odrKnd'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_selfClsCd',search:'start',style:'width: 150px;',submenuSize:'fixed',allOption:'',chooseOption:'true',chooseOptionLabel:'-전체-',ref:'data:ds_srchCond.selfClsCd',objType:'data'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_lineCd',validTitle:'Line',nameId:'ed_lineNm',style:'',id:'udc_lineCd',btnId:'btn_lineCd','ev:onblurCodeEvent':'scwin.udc_lineCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_lineCd_onclickEvent',refDataCollection:'ds_srchCond',code:'lineCd',maxlengthCode:'5',maxlengthName:'20','ev:onviewchangeNameEvent':'scwin.udc_lineCd_onblurNameEvent',allowCharCode:'A-Z-a-z0-9',UpperFlagCode:'1',objTypeCode:'data',objTypeName:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_srchCopCoCd',nameId:'ed_srchCopCoNm',popupID:'',selectID:'',style:'',validTitle:'',btnId:'btn_srchCopCoCd',id:'udc_srchCopCoCd','ev:onblurCodeEvent':'scwin.udc_srchCopCoCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_srchCopCoCd_onclickEvent',refDataCollection:'ds_srchCond',code:'copCoCd',maxlengthCode:'7',maxlengthName:'20','ev:onviewchangeNameEvent':'scwin.udc_srchCopCoCd_onblurNameEvent',allowCharCode:'A-Z-a-z0-9',objTypeCode:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_srchMchtClntNo',nameId:'ed_srchMchtClntNm',popupID:'',selectID:'',style:'',validTitle:'',btnId:'btn_srchMchtClntNo',id:'udc_srchMchtClntNo','ev:onblurCodeEvent':'scwin.udc_srchMchtClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_srchMchtClntNo_onclickEvent',refDataCollection:'ds_srchCond',code:'mchtClntCd',maxlengthCode:'7',maxlengthName:'20','ev:onviewchangeNameEvent':'scwin.udc_srchMchtClntNo_onblurNameEvent',allowCharCode:'A-Z-a-z0-9',objTypeCode:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.btn_refresh_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',grdDownOpts:'{"fileName":"컨테이너작업실적 상세.xlsx","sheetName": "컨테이너작업실적 상세","type":"4+8+16"}',gridUpYn:'N',gridID:'gr_cntrWrkRslts'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_cntrWrkRslts',focusMode:'row',id:'gr_cntrWrkRslts',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'오더번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'화주명',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ordNoMchtClnt',value:'정렬순서',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'선사',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'모선',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'Line',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'협력업체',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'컨테이너번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'규격',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'오더종류',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'출발지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'도착지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'출발일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'도착일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'매출액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'매입액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',style:'',value:'',width:'100',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realMchtClntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'ordNoMchtClnt',value:'',displayMode:'label',expression:'display(\'odrNo\') + display(\'realMchtClntNm\')',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shpCoClntNm',inputType:'text',style:'',value:'',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslCd',inputType:'text',style:'',value:'',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'copCoClntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrInfo',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrKndCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dptWrkPlNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvWrkPlNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dptDt',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvDt',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pchsAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column66',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'sellAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'pchsAmt\')',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})