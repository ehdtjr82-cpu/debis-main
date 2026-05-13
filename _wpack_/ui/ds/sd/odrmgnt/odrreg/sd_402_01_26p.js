/*amd /ui/ds/sd/odrmgnt/odrreg/sd_402_01_26p.xml 29177 363408b7208883184ff4a05279a3e9f8ecc4eef544d90e48b05985bf7d1a026e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_orderInformationQueryConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrDtSt',name:'오더일자',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'odrDtEnd',name:'오더일자',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'odrClsCd',name:'오더구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text',length:'2'}},{T:1,N:'w2:key',A:{id:'odrPic',name:'등록자',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'clntCls',name:'거래처구분',dataType:'text',length:'2'}},{T:1,N:'w2:key',A:{id:'clntCd',name:'거래처코드',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text',length:'5'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text',length:'4'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text',length:'11'}},{T:1,N:'w2:key',A:{id:'blNo',name:'B/L번호',dataType:'text',length:'20'}},{T:1,N:'w2:key',A:{id:'odrCompleteYn',name:'오더완료여부',dataType:'text',length:'1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orderInformationList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'odrClsCd',name:'오더구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'odrClsNm',name:'오더구분명',dataType:'text',length:'255'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'오더종류명',dataType:'text',length:'255'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',length:'70'}},{T:1,N:'w2:column',A:{id:'odrPic',name:'등록자',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'오더완료여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'purchaseYn',name:'구매여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text',length:'100'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_orderInformationQueryConditionDTO',action:'/ds.op.adjmbd.unitypchsmgnt.RetrieveOrderInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_orderInformationQueryConditionDTO","key":"IN_DS1"},{"id":"ds_orderInformationList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_orderInformationList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_orderInformationQueryConditionDTO_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log("scwin.onpageload");
  scwin.vCurDate = $c.date.getServerDateTime($p); // 서버를 기준으로 현재 날짜 반환
  scwin.vQryStDt = $c.date.addDate($p, scwin.vCurDate, -7); // 조회시작일자
  scwin.vQryEndDt = scwin.vCurDate; // 조회종료일자

  scwin.params = $c.data.getParameter($p);
  scwin.odrNo = scwin.params.odrNo;
  const codeOptions = [{
    grpCd: "SD125",
    compID: "lc_odrClsCd"
  },
  // 오더구분
  {
    grpCd: "SD113",
    compID: "lc_odrKndCd"
  },
  // 오더종류
  {
    grpCd: "LO110",
    compID: "lc_clntCls"
  } // 거래처구분
  ];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// UDC 로딩wi
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("scwin.onUdcCompleted");
  udc_fromToCalendar.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
  $c.gus.cfDisableObjects($p, [udc_clntCd]);
  ed_odrDtSt.focus();
};

//-------------------------------------------------------------------------
// 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  console.log("scwin.f_defaultValue");
  lc_odrCompleteYn.setValue("1");
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  console.log("scwin.f_fieldClear");
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.onUdcCompleted();
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieveOrderInformation = async function () {
  console.log("scwin.f_retrieveOrderInformation");
  // 검색조건 필수 입력 체크, 동일 날짜 포함 여부 체크
  let chkVal = await $c.gus.cfValidate($p, [ed_odrDtSt, ed_odrDtEnd]);
  if (!chkVal) return;
  if (!$c.gus.cfIsAfterDate($p, ed_odrDtSt.getValue(), ed_odrDtEnd.getValue())) {
    $c.win.alert($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ed_odrDtSt.focus();
    return;
  }

  // 거래처구분 선택시 거래처 필수 입력
  if (!$c.gus.cfIsNull($p, lc_clntCls.getValue()) && $c.gus.cfIsNull($p, ed_clntCd.getValue())) {
    $c.win.alert($p, "거래처를 입력하십시오.");
    ed_clntCd.focus();
    return;
  }
  $c.sbm.execute($p, sbm_orderInformationQueryConditionDTO);
};

//-------------------------------------------------------------------------
// 공통 팝업 호출
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 담당자 팝업
      udc_odrPic.cfCommonPopUp(scwin.callBackEmp, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      // 거래처 팝업
      udc_clntCd.cfCommonPopUp(scwin.callBackClnt, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 3:
      // 작업장 팝업
      udc_wrkPlCd.cfCommonPopUp(scwin.callBackWrkPl, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 4:
      // 등록점소 팝업
      udc_lobranCd.cfCommonPopUp(scwin.callBackLobran, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 CallBack
//-------------------------------------------------------------------------
scwin.callBackEmp = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_odrPic, ed_odrPicNm); // 사원번호, 사원명		
};
scwin.callBackClnt = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntCd, ed_clntNm); // 거래처코드, 거래처명
};
scwin.callBackWrkPl = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, ed_wrkPlNm); // 작업장코드, 작업장명	
};
scwin.callBackLobran = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lobranCd, ed_lobranNm); // 등록점소코드, 등록점소명
};

//-------------------------------------------------------------------------
// 본선관리번호검색 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function () {
  var args = new Array();
  args[0] = ed_cvsslMgntNo.getValue(); //본선관리번호
  args[1] = ""; //수출입구분코드

  var opts = {
    id: "op_204_01_07p",
    popupName: "본선관리번호검색팝업",
    modal: true,
    type: "browserPopup",
    title: "본선관리번호검색팝업",
    width: 1000,
    height: 500
  };
  let ret = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", opts, args);
  if (ret != null) {
    console.log(ret);
    ed_cvsslMgntNo.setValue(ret[0]); //본선관리번호
  }
};

//-------------------------------------------------------------------------
// Formatter
//-------------------------------------------------------------------------
scwin.f_customFormatter = function (data, formattedData, rowIndex, colIndex) {
  if ($c.gus.cfIsNull($p, data)) return;
  let colId = $c.util.getComponent($p, this.id).getColumnID(colIndex);
  if (colId == "odrCompleteYn") {
    //오더완료
    return $c.gus.decode($p, data, "1", "완료", "0", "미완료");
  }
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_orderInformationQueryConditionDTO_submitdone = function (e) {
  console.log("scwin.sbm_orderInformationQueryConditionDTO_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_orderInformationList.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, "오더정보 조회결과가 존재하지 않습니다.");
  }
};
/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//등록자 udc 관련 이벤트
scwin.udc_odrPic_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_odrPic.getValue(), ed_odrPicNm.getValue(), 'F', 'T');
};
scwin.udc_odrPic_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_odrPic, ed_odrPicNm, 1);
};
scwin.udc_odrPic_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_odrPicNm, ed_odrPic, 1, false);
};

//거래처구분 값 변경
scwin.lc_clntCls_onchange = function (info) {
  ed_clntCd.setValue("");
  ed_clntNm.setValue("");
  if (lc_clntCls.getValue() == "") {
    $c.gus.cfDisableObjects($p, [ed_clntCd, ed_clntNm, btn_clntCd]);
  } else {
    $c.gus.cfEnableObjects($p, [ed_clntCd, ed_clntNm, btn_clntCd]);
  }
};

//등록자 udc 관련 이벤트
scwin.udc_clntCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_clntCd.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_clntCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntCd, ed_clntNm, 2);
};
scwin.udc_clntCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntCd, 2, false);
};

//본선관리번호 찾기 버튼
scwin.btn_cvsslMgntNo_onclick = function (e) {
  scwin.f_openPopUp();
};

//출발작업장 udc 관련 이벤트
scwin.udc_wrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), 'F', 'T');
};
scwin.udc_wrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, ed_wrkPlNm, 3);
};
scwin.udc_wrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlNm, ed_wrkPlCd, 3, false);
};

//등록점소 udc 관련 이벤트
scwin.udc_lobranCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_lobranCd.getValue(), ed_lobranNm.getValue(), 'F', 'T');
};
scwin.udc_lobranCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lobranCd, ed_lobranNm, 4);
};
scwin.udc_lobranCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lobranNm, ed_lobranCd, 4, false);
};

//조회조건 clear 버튼
scwin.btn_clear_onclick = function (e) {
  console.log("scwin.btn_clear_onclick");
  scwin.f_fieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  console.log("scwin.btn_search_onclick");
  scwin.f_retrieveOrderInformation();
};

//그리드 더블 클릭 > 해당 오더 선택
scwin.gr_orderInformationList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  //해당 오더정보 JSON 전달 후 팝업 닫기
  console.log(ds_orderInformationList.getRowJSON(rowIndex));
  $c.win.closePopup($p, new Array(ds_orderInformationList.getCellData(rowIndex, "odrNo")));
};

//닫기 버튼
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};

//입력 소문자 > 대문자
scwin.ed_cvsslMgntNo_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, ed_cvsslMgntNo);
};
scwin.ed_cntrNo_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, ed_cntrNo);
};
scwin.ed_blNo_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, ed_blNo);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload',style:''},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'dma_orderInformationQueryConditionDTO',refEdDt:'odrDtEnd',refStDt:'odrDtSt',style:'',edFromId:'ed_odrDtSt',edToId:'ed_odrDtEnd',objTypeFrom:'data',objTypeTo:'data',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'오더일자',titleTo:'오더일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'lc_odrClsCd',search:'start',style:'width:230px;',submenuSize:'auto',searchTarget:'value',sortOption:'value',objType:'data',ref:'data:dma_orderInformationQueryConditionDTO.odrClsCd','data-length':'1',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',visibleRowNum:'6'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_odrKndCd',search:'start',style:'width:230px;',submenuSize:'auto',searchTarget:'value',sortOption:'value',objType:'data',ref:'data:dma_orderInformationQueryConditionDTO.odrKndCd','data-length':'2',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',visibleRowNum:'20'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupOdrPic',style:'',codeId:'ed_odrPic',btnId:'btn_odrPic',id:'udc_odrPic',nameId:'ed_odrPicNm',UpperFlagCode:'0',allowCharCode:'0-9',maxlengthName:'50',objTypeName:'data',objTypeCode:'data',selectID:'retrieveEmpInfo','ev:onclickEvent':'scwin.udc_odrPic_onclickEvent','ev:onblurCodeEvent':'scwin.udc_odrPic_onblurCodeEvent',refDataCollection:'dma_orderInformationQueryConditionDTO',code:'odrPic','ev:onviewchangeNameEvent':'scwin.udc_odrPic_onviewchangeNameEvent',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'lc_clntCls',search:'start',style:'width:230px;',submenuSize:'auto',objType:'data',searchTarget:'value','ev:onchange':'scwin.lc_clntCls_onchange',ref:'data:dma_orderInformationQueryConditionDTO.clntCls','data-length':'2',allOption:'',chooseOption:'true',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupClntCd',style:'',codeId:'ed_clntCd',id:'udc_clntCd',btnId:'btn_clntCd',objTypeCode:'data',validExpCode:'거래처:yes',UpperFlagCode:'0',allowCharCode:'0-9',nameId:'ed_clntNm',selectID:'retrieveClntList','ev:onclickEvent':'scwin.udc_clntCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntCd_onblurCodeEvent',refDataCollection:'dma_orderInformationQueryConditionDTO',code:'clntCd','ev:onviewchangeNameEvent':'scwin.udc_clntCd_onviewchangeNameEvent',maxlengthCode:'6'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',style:'width: 85px;',objType:'data',validExp:'본선관리번호:yes',allowChar:'0-9A-Za-z',maxlength:'8',ref:'data:dma_orderInformationQueryConditionDTO.cvsslMgntNo','data-length':'8','ev:oneditkeyup':'scwin.ed_cvsslMgntNo_oneditkeyup'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발작업장',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupWrkPlCd',style:'',codeId:'ed_wrkPlCd',btnId:'btn_wrkPlCd',id:'udc_wrkPlCd',nameId:'ed_wrkPlNm',maxlengthName:'50',objTypeName:'data',selectID:'retrieveWrkPlInfo','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent',refDataCollection:'dma_orderInformationQueryConditionDTO',code:'wrkPlCd','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록점소',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupLobranCd',style:'',id:'udc_lobranCd',codeId:'ed_lobranCd',btnId:'btn_lobranCd',nameId:'ed_lobranNm',objTypeCode:'data',validExpCode:'등록점소:yes',maxlengthName:'50',objTypeName:'data',selectID:'retrieveLobranInfo','ev:onclickEvent':'scwin.udc_lobranCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_lobranCd_onblurCodeEvent',refDataCollection:'dma_orderInformationQueryConditionDTO',code:'lobranCd','ev:onviewchangeNameEvent':'scwin.udc_lobranCd_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',placeholder:'',style:'width:110px;',objType:'data',validExp:'오더번호:yes:length>0',ref:'data:dma_orderInformationQueryConditionDTO.cntrNo','data-length':'11',maxlength:'11',allowChar:'0-9A-Za-z','ev:oneditkeyup':'scwin.ed_cntrNo_oneditkeyup'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BL번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_blNo',placeholder:'',style:'width:150px;',objType:'data',validExp:'오더번호:yes:length>0',maxlength:'20',allowChar:'0-9A-Za-z',ref:'data:dma_orderInformationQueryConditionDTO.blNo','data-length':'20','ev:oneditkeyup':'scwin.ed_blNo_oneditkeyup'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더완료 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_odrCompleteYn',search:'start',style:'width: 85px;',submenuSize:'auto',searchTarget:'value',allOption:'',chooseOption:'',ref:'data:dma_orderInformationQueryConditionDTO.odrCompleteYn','data-length':'1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'9'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_orderInformationList',id:'gr_orderInformationList',style:'',resize:'true','ev:oncelldblclick':'scwin.gr_orderInformationList_oncelldblclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'오더번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'오더구분',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'오더종류',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'출발지',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'도착지',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'청구(매입)거래처',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',width:'80',value:'등록자',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',width:'100',value:'오더완료',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',width:'70',value:'매출',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'매입',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column34',value:'비고(매입)',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',displayMode:'label',value:'코드'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column24',displayMode:'label',value:'명'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrClsNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrPic',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrCompleteYn',inputType:'text',width:'100',customFormatter:'scwin.f_customFormatter'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellYn',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'purchaseYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totalRow',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})