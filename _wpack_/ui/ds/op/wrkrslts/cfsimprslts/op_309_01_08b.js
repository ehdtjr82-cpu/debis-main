/*amd /ui/ds/op/wrkrslts/cfsimprslts/op_309_01_08b.xml 30943 5dd371764b9abc0d5eddaa65ebfbdb12961e866cde26c17d3ff42113eb634ab9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemNm',name:'매출항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVolTon',name:'매출 적용 R/T',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'매출단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'확정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'확정계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'영수/청구',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'청구처구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgNm',name:'청구여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delNm',name:'삭제여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'searchGubun',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gubun',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cfsDevChg',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cfsStuffChg',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cfsTransChg',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cfsEgoChg',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgYn',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delYn',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellItemCdYn',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sendClsCd',name:'name15',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_hidden'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'hid_sellItemCdYn',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.cfsimprslts.RetrieveCfsSellingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_retrieve_submit','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_309_01_08b 
// 이름     : CFS매출현황
// 경로     : 물류/작업실적/CFS/
// 작 성 자 : 조성빈
// 작 업 일 : 2025-12-12
// 사용계정 : 내부
// 비고     : 
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//            () -  버튼 클릭
//==================================================================================================================
scwin.gap;
scwin.row_gap;
scwin.arrRtnVal;
scwin.dateStrMonth;
scwin.dateStrDay;
scwin.save_del_gubun;
scwin.onpageload = function () {
  scwin.gap = false;
  scwin.row_gap = false;
  scwin.arrRtnVal = new Array(); // Return Value
  scwin.dateStrMonth = $c.date.getServerDateTime($p, "yyyyMM");
  scwin.dateStrDay = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.save_del_gubun = "";
  ds_search.set("wrkStDt", scwin.dateStrMonth + "01");
  ds_search.set("wrkEndDt", scwin.dateStrDay);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    scwin.f_FieldClear();
    ed_wrkPlCd.focus();

    // $p.setTimeout(function() {
    //     ds_search.set("wrkStDt", "20200101");
    //     ds_search.set("wrkEndDt", "20200101");
    // }, {"delay":50});
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
  ds_search.set("wrkStDt", scwin.dateStrMonth + "01");
  ds_search.set("wrkEndDt", scwin.dateStrDay);
  ed_wrkPlCd.setValue("");
  ed_wrkPlNm.setValue("");
  ed_lineCd.setValue("");
  ed_lineNm.setValue("");
  ed_bilgClntNo.setValue("");
  ed_bilgClntNm.setValue("");
  acb_gubun.setValue("");
  cbx_cfsDevChg.setSelectedIndex(-1);
  cbx_cfsStuffChg.setSelectedIndex(-1);
  cbx_cfsTransChg.setSelectedIndex(-1);
  cbx_cfsEgoChg.setSelectedIndex(-1);
  ds_hidden.set("hid_sellItemCdYn", "");
  acb_sendClsCd.setValue("");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  var sica_wrkStDt = ica_wrkStDt.getValue();
  var sica_wrkEndDt = ica_wrkEndDt.getValue();
  // var rs = await $c.gus.cfValidateValue(ica_wrkStDt, "minNumber=19000101");
  // var rs = await $c.gus.cfValidate([ica_wrkStDt], null, false);
  // if (!rs) {}
  if (sica_wrkStDt == "" || sica_wrkStDt < 19000101) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["작업일자From"]); //을(를) 입력하십시오.

    ica_wrkStDt.setValue("");
    ica_wrkStDt.focus();
    return;
  }
  // rs = await $c.gus.cfValidateValue(ica_wrkEndDt, "minNumber=19000101");
  // rs = await $c.gus.cfValidate(ica_wrkEndDt);
  // if (!rs) {
  if (sica_wrkEndDt == "" || sica_wrkEndDt < 19000101) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["작업일자To"]); //을(를) 입력하십시오.

    ica_wrkEndDt.setValue("");
    ica_wrkEndDt.focus();
    return;
  }
  if (sica_wrkStDt > sica_wrkEndDt) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); //시작일자를 종료일자 이전으로 선택[입력]하여주십시요.
    ds_search.set("wrkStDt", scwin.dateStrMonth + "01");
    ds_search.set("wrkEndDt", scwin.dateStrDay);
    ica_wrkStDt.focus();
    return;
  }
  if (cbx_cfsDevChg.getValue() != "" || cbx_cfsStuffChg.getValue() != "" || cbx_cfsTransChg.getValue() != "" || cbx_cfsEgoChg.getValue() != "") {
    ds_search.set("sellItemCdYn", "Y");
  } else {
    ds_search.set("sellItemCdYn", "");
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  switch (disGubun) {
    case 1:
      // LINE retrieveLineInfoList
      udc_line.cfCommonPopUp(scwin.udc_line_callBackFunc // XML상의 SELECT ID	
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
      , "LINE,LINE코드,LINE명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 청구처 retrieveClntInfo
      udc_bilgClnt.cfCommonPopUp(scwin.udc_bilgClnt_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , "T" // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '9', "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,", '100,100,0,120,100,0,100,100,100,0', "3,10", 'LOGISCLNT1,,CTRT,0', '800', '600', null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "F" // 전체검색허용여부	("F")
      , null
      //,"청구거래처,거래처코드,거래처명"				// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      // 작업장코드 retrieveWrkPlInfo
      udc_wrkPl.cfCommonPopUp(scwin.udc_wrkPl_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의    Value
      , pName // 화면에서의 ??? Name Element의    Value
      , pClose // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는    컬럼 지정
      , 'F' // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의    사용자 정의 폭
      , null // POP-UP뛰을때 우도우의    사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  //alert(cfCanOpenPopup(inObj, pairObj) + "/" + inObj.hidVal + "/" + pairObj.hidVal);
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
scwin.udc_wrkPl_onviewchangeNameEvent = function (info) {
  $c.gus.cfLimitByteLength($p, ed_wrkPlNm, 50);
  scwin.f_chkOpenCommonPopUp(ed_wrkPlNm, ed_wrkPlCd, 3, false);
};
scwin.udc_wrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), 'F', 'T');
};
scwin.udc_line_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lineNm, ed_lineCd, 1, false);
};
scwin.udc_line_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_lineCd.getValue(), ed_lineNm.getValue(), 'F', 'F');
};
scwin.udc_bilgClnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNm, ed_bilgClntNo, 2, false);
};
scwin.udc_bilgClnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_bilgClntNo.getValue(), ed_bilgClntNm.getValue(), 'F', 'F');
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_retrieve_submit = function (e) {
  // cfShowDSWaitMsg(gr_results);
  // ds_search.set("sendItemCdYn", ds_hidden.get("hid_sellItemCdYn"));
};
scwin.sbm_retrieve_submitdone = async function (e) {
  // cfHideDSWaitMsg(gr_results);
  var rowCnt = ds_results.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
  }
  //카운터 
  // cfShowTotalRows(totalRows1, ds_results.CountRow);
  txt_totalRows.setValue(rowCnt);

  // if(ds_search.get("cfsDevChg")   == "0025")  cbx_cfsDevChg.setSelectedIndex(1);
  // if(ds_search.get("cfsStuffChg") == "0024")  cbx_cfsStuffChg.setSelectedIndex(1);
  // if(ds_search.get("cfsTransChg") == "0033")  cbx_cfsTransChg.setSelectedIndex(1);
  // if(ds_search.get("cfsEgoChg")   == "0026")  cbx_cfsEgoChg.setSelectedIndex(1);
};
scwin.sbm_retrieve_submiterror = function (e) {
  // cfHideDSWaitMsg(gr_results);
  // cfShowError(ds_results);
  // cfShowError(tr_retrieve);
};
scwin.udc_line_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, ed_lineNm, 1, true);
};
scwin.udc_bilgClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, ed_bilgClntNm, 2, true);
};
scwin.udc_wrkPl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, ed_wrkPlNm, 3, true);
};
scwin.udc_line_callBackFunc = function (ref) {
  $c.gus.cfSetReturnValue($p, ref, ed_lineCd, ed_lineNm);
};
scwin.udc_bilgClnt_callBackFunc = function (ref) {
  $c.gus.cfSetReturnValue($p, ref, ed_bilgClntNo, ed_bilgClntNm);
};
scwin.udc_wrkPl_callBackFunc = function (ref) {
  $c.gus.cfSetReturnValue($p, ref, ed_wrkPlCd, ed_wrkPlNm);
};
scwin.excelDown = function () {
  const infoArr = [];
  const options = {
    fileName: "CFS매출현황.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "CFS매출현황",
    // startRowIndex: 2,
    oddRowBackgroundColor: "",
    // excel파일에서 그리드 body의 홀수줄의 배경색
    evenRowBackgroundColor: "#F5FFF5" // excel파일에서 그리드 body의 짝수줄의 배경색
  };
  $c.data.downloadGridViewExcel($p, gr_results, options, infoArr);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'acb_searchGubun',search:'start',style:'width:90px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_search.searchGubun',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'실적일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'rsltsDt'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'작업일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'wrkDt'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_wrkDt',refDataMap:'ds_search',refEdDt:'wrkEndDt',refStDt:'wrkStDt',style:'',edFromId:'ica_wrkStDt',edToId:'ica_wrkEndDt',mandatoryFrom:'true',mandatoryTo:'true',validExp:'작업일자:yes:minNumber=19000101',titleFrom:'작업일자From',titleTo:'작업일자To'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_wrkPl',codeId:'ed_wrkPlCd',nameId:'ed_wrkPlNm',btnId:'btn_wrkPl',objTypeName:'data',maxlengthCode:'5',UpperFlagCode:'1',objTypeCode:'data','ev:onviewchangeNameEvent':'scwin.udc_wrkPl_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_wrkPl_onclickEvent','ev:onblurCodeEvent':'scwin.udc_wrkPl_onblurCodeEvent',selectID:'retrieveWrkPlInfo',allowCharCode:'a-zA-Z0-9',upperFlag:'1',validTitle:'작업장코드',maxlengthName:'50',refDataCollection:'ds_search',code:'wrkPlCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_line',codeId:'ed_lineCd',maxlengthCode:'5',objTypeCode:'data',UpperFlagCode:'1',nameId:'ed_lineNm','ev:onviewchangeNameEvent':'scwin.udc_line_onviewchangeNameEvent',btnId:'btn_line','ev:onclickEvent':'scwin.udc_line_onclickEvent','ev:onblurCodeEvent':'scwin.udc_line_onblurCodeEvent',selectID:'retrieveLineInfoList',allowCharCode:'a-zA-Z0-9',upperFlag:'1',objTypeName:'data',refDataCollection:'ds_search',code:'lineCd'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_bilgClnt',codeId:'ed_bilgClntNo',nameId:'ed_bilgClntNm',btnId:'btn_bilgClnt',maxlengthCode:'6',UpperFlagCode:'1',objTypeName:'data','ev:onviewchangeNameEvent':'scwin.udc_bilgClnt_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_bilgClnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bilgClnt_onblurCodeEvent',selectID:'retrieveClntInfo',allowCharCode:'a-zA-Z0-9',upperFlag:'1',objTypeCode:'data',refDataCollection:'ds_search',code:'bilgClntNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처 구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_gubun',search:'start',style:'width:85px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_search.gubun',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'선사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'화주'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전송구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_sendClsCd',search:'start',style:'width:85px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_search.sendClsCd',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미전송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_bilgYn',search:'start',style:'width:85px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_search.bilgYn',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'청구완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미청구'}]},{T:1,N:'w2:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항목관리 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'data:ds_search.cfsDevChg',appearance:'full',style:'',id:'cbx_cfsDevChg',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CFS DEVANNING CHG'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0025'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'data:ds_search.cfsStuffChg',appearance:'full',style:'',id:'cbx_cfsStuffChg',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CFS STUFFING CHG'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0024'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'data:ds_search.cfsTransChg',appearance:'full',style:'',id:'cbx_cfsTransChg',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CFS 환적료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0033'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'data:ds_search.cfsEgoChg',appearance:'full',style:'',id:'cbx_cfsEgoChg',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CFS 이고료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0026'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'삭제여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_delYn',search:'start',style:'width:85px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_search.delYn',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'CFS매출현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',id:'udc_topGrdBtn1',gridID:'gr_results',grdDownOpts:'{"fileName" : "CFS매출현황.xlsx","sheetName" : "CFS매출현황","type":"4+8+16"}',gridDownFn:'scwin.excelDown'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'xf:input',A:{id:'',style:'width:144px; height:21px;display: none;'}},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',style:'',visibleRowNum:'15',visibleRowNumFix:'true',columnMove:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'LINE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'청구처코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'청구처',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'작업일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'실적일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'매출항목코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'매출항목',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'매출 적용 R/T',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'매출단가',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'매출액',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'확정일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column41',value:'확정계산서번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'영수/청구',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'청구처구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'청구여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'삭제여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'text',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'text',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellItemCd',inputType:'text',width:'120',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellItemNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellVolTon',inputType:'text',width:'140',textAlign:'right',dataType:'float',displayFormat:'#,###.##0',excelCellType:'number',excelFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellUpr',inputType:'text',width:'120',textAlign:'right',dataType:'float',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',width:'100',textAlign:'right',dataType:'float',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'text',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellVatNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipKndNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'delNm',inputType:'text',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})