/*amd /ui/ac/fi/gnrlaccount/prepaycostmgnt/fi_202_02_02p.xml 22848 19bb77f966cdbb52cd35fe727b5851b2869dd016db223e8e43ec79413f087db1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_prepayCost',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctCd',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prepayTermDt',name:'기간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisMmPrepayCost',name:'당월대체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisYyPrepayCost',name:'당기대체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befYyPrepayCost',name:'전기대체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ramt',name:'잔액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmdrDtCnt',name:'잔여일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrlSlipNo',name:'조정전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prepayCostNo',name:'선급비용번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dailyCost',name:'일별원가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'longPrepayCost',name:'장기;선급비용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liqSubSlipNo',name:'유동성대체전표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reverseSlipNo',name:'유동성대체전표;삭제전표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prepayTermStDt',name:'prepayTermStDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prepayTermEndDt',name:'prepayTermEndDt',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_search',action:'/ac.fi.gnrlaccount.prepaycostmgnt.RetrievePrepayCostSettlementOfAccountsContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_prepayCost","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_prepayCost","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 선급비용집계내역조회
 * 메뉴경로 : 회계/재무회계/일반회계/선급비용관리/선급비용집계/전표처리
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ac/fi/gnrlaccount/prepaycostmgnt/fi_202_02_02p.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-15
 * 수정이력  :
 *    - 2025-12-15      정승혜    최초작성
 *    - 2026-01-21      정승혜    기타수정
 * 메모 : 부모페이지 fi_202_02_01b
 * 조회조건 : 201001 / 202504
 */
scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin"); // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님
scwin.empNo = scwin.memJson.userId; //사용자 아이디

scwin.valueObject = "";
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사  
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드 
scwin.g_sLoginDept = scwin.memJson.acctDeptCd;
scwin.isSubCompany = false;
scwin.coCd = "000";
scwin.coClsCd = "0";

//hidden
scwin.txtCoClsCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.closeYm = scwin.params.closeYm;
};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  scwin.f_Header();
  scwin.f_setCompanyInfo(); //자회사여부  
  scwin.f_Retrieve();
  $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
};

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  ed_closeYm.setValue(scwin.closeYm);
  ed_closeYm.focus();
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  let rtnList = await udc_companyInfo.cfCommonPopUp(scwin.udc_companyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_companyInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
    scwin.txtCoClsCd = rtnList[1];
    scwin.coCd = ed_coCd.getValue();
    scwin.coClsCd = rtnList[1];
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    scwin.txtCoClsCd = "";
    scwin.coCd = "";
    scwin.coClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};

//-------------------------------------------------------------------------
// function name : f_OpenCommonPopUp
// function desc : 귀속부서팝업
//-------------------------------------------------------------------------
scwin.f_OpenCommonPopUp = async function (gubun, pCode, pName, pClose, pAllSearch, row) {
  // 선언부
  let pSelectID = "";
  let pWtitleSearch = null;
  let param = "," + ed_coCd.getValue() + ",,0";
  let rtnList = await udc_acctDeptCdInfo6.cfCommonPopUp(scwin.udc_acctDeptCdInfo6_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
  , pName // 화면에서의 ??? Name Element의	Value
  , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서	
  , null // 보여주는 각 컬럼들의 폭	
  , null // 컬럼중에서 숨기는	컬럼 지정	
  , param // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , pAllSearch // 전체검색허용여부	("F")
  , pWtitleSearch // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};
scwin.udc_acctDeptCdInfo6_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_deptCd.setValue(rtnList[0]);
    ed_deptNm.setValue(rtnList[1]);
  } else {
    ed_deptCd.setValue("");
    ed_deptNm.setValue("");
  }
};
scwin.udc_acctDeptCdInfo6_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp(4, ed_deptCd.getValue(), ed_deptNm.getValue(), 'F', 'F');
};
scwin.f_ChkOpenCommonPopUp = function (gubun, inObj, pairObj, isCode) {
  //값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  //짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  //검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  //inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_OpenCommonPopUp(gubun, pVal, '', 'T', 'T');
  } else {
    //inObj가 코드명 필드일 경우 팝업
    scwin.f_OpenCommonPopUp(gubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_closeYm]);
  if (!ret) {
    return false;
  }
  dma_search.set("coCd", scwin.vLoginCoCd);
  $c.sbm.execute($p, sbm_tr_search);
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
// 엑셀다운 1+8+16
scwin.f_Excel = async function () {
  let confirm = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (confirm) {
    const options = {
      fileName: "선급비용집계내역조회.xlsx",
      sheetName: "선급비용집계내역조회",
      type: 1
    };
    await $c.data.downloadGridViewExcel($p, gr_prepayCost, options);
  }
};

// 서브미션
scwin.sbm_tr_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_prepayCost.getRowCount());
  if (ds_prepayCost.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    let sort_options = {};
    sort_options.sortIndex = "acctCd acctDeptCd";
    sort_options.sortOrder = "1 1"; // 1: 오름차순
    ds_prepayCost.multisort(sort_options);
    ds_prepayCost.setRowPosition(0);
    $c.gus.cfGoPrevPosition($p, gr_prepayCost, 0);
  }
};

// 그리드 기간
scwin.prepayDisplayFm = function (data, formattedData, rowIndex, colIndex) {
  let stDt = ds_prepayCost.getCellData(rowIndex, "prepayTermStDt");
  stDt = stDt.substring(0, 4) + "/" + stDt.substring(4, 6) + "/" + stDt.substring(6, 8);
  let endDt = ds_prepayCost.getCellData(rowIndex, "prepayTermEndDt");
  endDt = endDt.substring(0, 4) + "/" + endDt.substring(4, 6) + "/" + endDt.substring(6, 8);
  data = stDt + " ~ " + endDt;
  return data;
};

// 닫기
scwin.f_close = function () {
  $c.win.closePopup($p);
};
scwin.gr_prepayCost_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "slipNo") {
    $c.gus.cfShowSlipInfo($p, ds_prepayCost.getCellData(rowIndex, "slipNo"));
  }
  if (columnId == "ctrlSlipNo") {
    $c.gus.cfShowSlipInfo($p, ds_prepayCost.getCellData(rowIndex, "ctrlSlipNo"));
  }
  if (columnId == "liqSubSlipNo") {
    $c.gus.cfShowSlipInfo($p, ds_prepayCost.getCellData(rowIndex, "liqSubSlipNo"));
  }
  if (columnId == "reverseSlipNo") {
    $c.gus.cfShowSlipInfo($p, ds_prepayCost.getCellData(rowIndex, "reverseSlipNo"));
  }
};
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue('');
  scwin.f_PopUpCompanyInfo('T');
  ed_deptCd.setValue("");
  ed_deptNm.setValue("");
};
scwin.udc_acctDeptCdInfo6_onblurCodeEvent = function (e) {
  scwin.f_ChkOpenCommonPopUp(4, ed_deptCd, ed_deptNm);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_coCd',nameId:'ed_coNm',popupID:'',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validTitle:'',allowCharCode:'0-9',maxlengthCode:'3',refDataCollection:'dma_search',code:'coCd',id:'udc_companyInfo','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent',mandatoryCode:'true',btnId:'btn_company'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회계연월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_closeYm',style:'',ref:'data:dma_search.closeYm',displayFormat:'yyyy/MM',pickerType:'dynamic',title:'회계연월',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo6',codeId:'ed_deptCd',validTitle:'',nameId:'ed_deptNm',style:'',refDataCollection:'dma_search',code:'acctDeptCd',id:'udc_acctDeptCdInfo6','ev:onclickEvent':'scwin.udc_acctDeptCdInfo6_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo6_onblurCodeEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_Excel',gridID:'gr_prepayCost',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_prepayCost',id:'gr_prepayCost',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'13',visibleRowNumFix:'true',readOnly:'true','ev:oncellclick':'scwin.gr_prepayCost_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'계정',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'계정명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'부서',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'부서명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'기간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'당월대체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'당기대체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'전기대체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'잔액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'잔여일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'조정전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column43',value:'선급비용번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'일별원가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'장기</br>선급비용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column51',value:'유동성대체전표',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column53',value:'유동성대체전표</br>삭제전표',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'amt',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'prepayTermDt',value:'',displayMode:'label',customFormatter:'scwin.prepayDisplayFm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'thisMmPrepayCost',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'thisYyPrepayCost',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'befYyPrepayCost',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ramt',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rmdrDtCnt',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:';color:blue;',id:'slipNo',value:'',displayMode:'label',class:'underline'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:';color:blue;',id:'ctrlSlipNo',value:'',displayMode:'label',class:'underline'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'prepayCostNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dailyCost',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'longPrepayCost',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'color:blue;',id:'liqSubSlipNo',value:'',displayMode:'label',class:'underline'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'color:blue;',id:'reverseSlipNo',value:'',displayMode:'label',class:'underline'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button','ev:onclick':'scwin.f_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})