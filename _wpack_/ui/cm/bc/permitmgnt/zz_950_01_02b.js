/*amd /ui/cm/bc/permitmgnt/zz_950_01_02b.xml 43478 8bfcb29b965b01ac2842d747ca410afb013100599e813e2bcccbf836a8ad9ab9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'coClsNm',name:'회사구분명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'관리부서 코드(귀속부서)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'관리부서명(귀속부서)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprTypeCd',name:'인허가 종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprTypeNm',name:'인허가 종류명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprCd',name:'인허가코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprNm',name:'인허가명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'picEmpNo',name:'담당자 사번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'picEmpNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDtFrom',name:'등록기간종료일자 조회조건 앞',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDtTo',name:'등록기간종료일자 조회조건 뒤',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'number'}},{T:1,N:'w2:key',A:{id:'apprvYn',name:'승인여부',dataType:'number'}}]},{T:1,N:'w2:data'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_conditionHis'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprTypeCd',name:'인허가 종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprCd',name:'인허가코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'관리부서 코드(귀속부서)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprNo',name:'인허가관리번호',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'관리부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'관리부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomNm',name:'사업;영역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprTypeCd',name:'인허가종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprTypeNm',name:'인허가;종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprCd',name:'인허가명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprNm',name:'인허가명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprMgntAgcy',name:'인허가관리청',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firstAcqDt',name:'최초취득일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'renDt',name:'최근갱신일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regStDt',name:'시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regEndDt',name:'종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgDesc',name:'변경사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picEmpNm',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprRegDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNm',name:'승인자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprApprvDtm',name:'승인일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprNo',name:'name21',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_history',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chgDesc',name:'변경사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firstAcqDt',name:'최초취득일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'renDt',name:'최근갱신일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regStDt',name:'시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regEndDt',name:'종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picEmpNm',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprRegDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNm',name:'승인자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprApprvDtm',name:'승인일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFileNm',name:'첨부파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFilePath',name:'name12',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve',action:'/cm.bc.permitmgnt.RetrieveApprInfoListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_results","key":"OUT_DS1"},{"id":"dma_condition","key":"IN_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieveHis',action:'/cm.bc.permitmgnt.RetrieveApprInfoHistoryCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_conditionHis","key":"IN_DS1"},{"id":"ds_history","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_history","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieveHis_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 인허가 취득내역 조회
 * 메뉴경로 : 공통/총무업무/인허가 관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/cm/bc/permitmgnt/zz_950_01_02b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-04
 * 수정이력  :
 *    - 2025-12-04      정승혜    최초작성
 * 메모 :
 * 그리드 mergeCells="byrestriccol" 하면 첨부파일명이 병합되어버려서 컬럼 개별적으로 colMerge="true" upperColumn="chgDesc" 부여
 * 조회조건 : 
 * 자식페이지 zz_950_01_01b / url 수정해야함
 * 
 */

scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.vFirstDate = new Date().before(0, 0, 7).format("YYYYMMDD");
scwin.memJson = $c.data.getMemInfo($p);
scwin.empNo = scwin.memJson.empNo;
scwin.coCd = scwin.memJson.coCd;
scwin.coClsCd = scwin.memJson.coClsCd;
scwin.userHomeClsCd = scwin.memJson.userHomeClsCd;
scwin.params = "";
scwin.cstmrId = "";
scwin.salesInfoId = "";
scwin.privAdmin = scwin.memJson.privAdmin; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님

scwin.gv_CurDate = scwin.vCurDate;
scwin.gv_FirstDate = scwin.vFirstDate;
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.coCd) ? '' : scwin.coCd; // 소속 자회사  
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.coClsCd) ? '' : scwin.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.userHomeClsCd; // 사용자소속구분코드 
scwin.isSubCompany = false;

//hidden
scwin.txtCoClsCd = "";
scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시 
//-------------------------------------------------------------------------   
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  if (scwin.params["cstmrId"] == null) {
    scwin.cstmrId = "";
  } else {
    scwin.cstmrId = scwin.params["cstmrId"];
  }
  if (scwin.params["salesInfoId"] == null) {
    scwin.salesInfoId = "";
  } else {
    scwin.salesInfoId = scwin.params["salesInfoId"];
  }

  // getCodeList
  const codeOptions = [{
    grpCd: "ZZ590",
    compID: "lc_apprTypeCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  $c.gus.cf_AllowCharLength($p, ed_apprCd);
  scwin.f_createHeader();
};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// function name : f_createHeader
// function desc : Grid Header정보 Setting
//-------------------------------------------------------------------------
scwin.f_createHeader = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};
scwin.f_createHistoryHeader = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
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
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_dongbuGroupCompanyInfo.cfCommonPopUp(scwin.udc_dongbuGroupCompanyInfo_callBackFunc2, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_dongbuGroupCompanyInfo_callBackFunc2 = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
    scwin.txtCoClsCd = rtnList[1];
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isStarted == true)
    // 최초 이벤트 여부 (자회사 여부를 최초 한번만 실행-팝업 리턴 시간차)
    {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      if ("T" == scwin.privAdmin || !scwin.isSubCompany) {
        $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
      } else {
        $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
      }
      scwin.isStarted = false;
    }
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_tr_retrieve);
};
scwin.f_Retrieve2 = function () {
  $c.sbm.execute($p, sbm_tr_retrieveHis);
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, portCondtionPart);
};

//-------------------------------------------------------------------------
// function name : f_openPopUp
// function desc : popup
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let condition = "";
  switch (disGubun) {
    case 1:
      // 관리부서
      condition = "";
      udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , '150,170' // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , condition // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      // 담당자
      condition = "";
      udc_loBranEmpInfo.cfCommonPopUp(scwin.udc_loBranEmpInfo_callBackFunc, pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , '5' // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , '150,170' // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는    컬럼 지정
      , condition // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      // 회사구분
      udc_dongbuGroupCompanyInfo.cfCommonPopUp(scwin.udc_dongbuGroupCompanyInfo_callBackFunc, pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null, null, null, null, null, null, null, null, null);
      break;
    default:
      break;
  }
};

// 관리부서
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_regDept.setValue(rtnList[0]);
    ed_regDeptNm.setValue(rtnList[1]);
  } else {
    ed_regDept.setValue("");
    ed_regDeptNm.setValue("");
  }
};

// 담당자
scwin.udc_loBranEmpInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_sregId.setValue(rtnList[0]);
    ed_sregNm.setValue(rtnList[1]);
  } else {
    ed_sregId.setValue("");
    ed_sregNm.setValue("");
  }
};

// 회사구분
scwin.udc_dongbuGroupCompanyInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
  }
};

// 회사구분
scwin.udc_dongbuGroupCompanyInfo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_coCd.getValue(), ed_coNm.getValue(), 'F', 'F');
};

// 관리부서
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_regDept.getValue(), ed_regDeptNm.getValue(), 'F', 'F');
};

// 담당자
scwin.udc_loBranEmpInfo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_sregId.getValue(), ed_sregNm.getValue(), 'F', 'F');
};

// 엑셀다운 4+8+16
scwin.cfGridToExcel = function () {
  const options = {
    fileName: "인허가현황.xlsx",
    sheetName: "인허가현황",
    type: 1,
    colMerge: true,
    colMergeTextAlign: "top"
  };
  $c.data.downloadGridViewExcel($p, gr_results, options);
};

// 엑셀다운 4+8+16
scwin.cfGridToExcel2 = function () {
  const options = {
    fileName: "인허가이력.xlsx",
    sheetName: "인허가이력",
    colMerge: true,
    colMergeTextAlign: "top"
  };
  $c.data.downloadGridViewExcel($p, gr_results2, options);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
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
scwin.f_openApprPopUp = async function () {
  let apprNm = ed_apprNm.getValue();
  let apprCd = ed_apprCd.getValue();
  let arrParam = new Array();
  let rtnList = new Array();
  let data = {};
  data.paramTitle = "인허가명 조회";
  data.closeTF = "T";
  data.apprNm = apprNm;
  data.apprCd = apprCd;
  let opt = {};
  opt.id = "smpPop";
  opt.width = "750";
  opt.height = "700";
  opt.popupName = "인허가명 조회";
  opt.modal = true;
  opt.title = "title";
  rtnList = await $c.win.openPopup($p, "/ui/cm/bc/permitmgnt/zz_950_01_01p.xml", opt, data);
  if (rtnList != null) {
    dma_condition.set("apprCd", rtnList[0]);
    ed_apprCd.setValue(rtnList[0]);
    ed_apprNm.setValue(rtnList[1]);
  } else {
    dma_condition.set("apprCd", "");
    ed_apprCd.setValue("");
    ed_apprNm.setValue("");
  }
};
scwin.f_attahDownload = function () {
  // 호출되는곳 없음
};
scwin.dataSetDebug = function () {};
scwin.apprNmDisplayFm = function (data, formattedData, rowIndex, colIndex) {
  gr_results.setCellColor(rowIndex, "apprNm", "blue");
  return data;
};

// Color={Decode(delYn,0,"blue",1,"black")}
scwin.attachFileNmDisplayFm = function (data, formattedData, rowIndex, colIndex) {
  if (ds_history.getCellData(rowIndex, "delYn") == "0") {
    gr_results2.setCellColor(rowIndex, "attachFileNm", "blue");
  } else if (ds_history.getCellData(rowIndex, "delYn") == "1") {
    gr_results2.setCellColor(rowIndex, "attachFileNm", "black");
  }
  return data;
};

// Value={Decode(delYn,0,"",1,"삭제")}
scwin.delYnDisplayFm = function (data) {
  if (data == "0") {
    data = "";
  } else if (data == "1") {
    data = "삭제";
  } else {}
  return data;
};
scwin.gr_results_oncellclick = function (rowIndex, columnIndex, columnId) {
  /*  scwin.f_createHistoryHeader();
  	dma_conditionHis.set("coClsCd", ds_results.getCellData(ds_results.getRowPosition() , "coClsCd"));
  	dma_conditionHis.set("apprTypeCd", ds_results.getCellData(ds_results.getRowPosition() , "apprTypeCd"));
  	dma_conditionHis.set("apprCd", ds_results.getCellData(ds_results.getRowPosition() , "apprCd"));
  	dma_conditionHis.set("acctDeptCd", ds_results.getCellData(ds_results.getRowPosition() , "acctDeptCd"));
  	dma_conditionHis.set("apprNo", ds_results.getCellData(ds_results.getRowPosition() , "apprNo"));
  
  	scwin.f_Retrieve2(); 
      oncellclick,oncelldblclick 충돌나서 더블클릭시 셀클릭이 계속타니까 서브미션처리되어 더블클릭이 안타는경우가 발생하여 onrowindexchange 로 이벤트 변경
      */
};
scwin.gr_results_onrowindexchange = function (rowIndex, oldRow) {
  scwin.f_createHistoryHeader();
  dma_conditionHis.set("coClsCd", ds_results.getCellData(ds_results.getRowPosition(), "coClsCd"));
  dma_conditionHis.set("apprTypeCd", ds_results.getCellData(ds_results.getRowPosition(), "apprTypeCd"));
  dma_conditionHis.set("apprCd", ds_results.getCellData(ds_results.getRowPosition(), "apprCd"));
  dma_conditionHis.set("acctDeptCd", ds_results.getCellData(ds_results.getRowPosition(), "acctDeptCd"));
  dma_conditionHis.set("apprNo", ds_results.getCellData(ds_results.getRowPosition(), "apprNo"));
  scwin.f_Retrieve2();
};
scwin.gr_results_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "apprNm") {
    let url = "/ui/cm/bc/permitmgnt/zz_950_01_01b.xml";
    let data = {};
    data.apprNo = ds_results.getCellData(rowIndex, "apprNo");
    data.coClsCd = ds_results.getCellData(rowIndex, "coClsCd");
    data.apprTypeCd = ds_results.getCellData(rowIndex, "apprTypeCd");
    data.apprCd = ds_results.getCellData(rowIndex, "apprCd");
    data.acctDeptCd = ds_results.getCellData(rowIndex, "acctDeptCd");
    $c.win.openMenu($p, '인허가 등록/승인', url, url.substring(url.lastIndexOf("/") + 1).replace(/.xml/g, ""), data, {
      openAction: "exist"
    });
  }
};
scwin.gr_results2_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "attachFileNm") {
    if (ds_history.getCellData(rowIndex, "delYn") == 0) {
      //삭제 안 된 건만 다운로드 가능
      $c.gus.cfDownloadFile($p, ds_history.getCellData(rowIndex, "attachFileNm"), ds_history.getCellData(rowIndex, "attachFilePath"));
    }
  }
};

// 서브미션
scwin.sbm_tr_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_results.getRowCount());
  gr_results.setFocusedCell(0, "coClsNm", false);
  if (ds_results.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

// 서브미션
scwin.sbm_tr_retrieveHis_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows2.setValue(ds_history.getRowCount());
  gr_results2.setFocusedCell(0, 0, false);
  if (ds_history.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  for (i = 0; i < ds_history.getRowCount(); i++) {
    if (ds_history.getCellData(i, "apprvEmpNm") == "") {
      ds_history.setCellData(i, "apprvEmpNm", "미승인");
      ds_history.setCellData(i, "apprApprvDtm", "미승인");
    }
  }
};
scwin.udc_dongbuGroupCompanyInfo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_coNm, ed_coCd, 4, false);
};
scwin.udc_acctDeptCdInfo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_regDeptNm, ed_regDept, 1, false);
};

// 담당자
scwin.udc_loBranEmpInfo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_sregNm, ed_sregId, 3, false);
};
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_regDept, ed_regDeptNm, 1);
};

// 담당자
scwin.udc_loBranEmpInfo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_sregId, ed_sregNm, 3);
};
scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_coCd, ed_coNm, 4);
};
scwin.ed_apprCd_onblur = function (e) {
  if (ed_apprCd.getValue() != "") {
    scwin.f_openApprPopUp('');
  } else {
    ed_apprNm.setValue("");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'portCondtionPart',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회사구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',validTitle:'',popupTitle:'',nameId:'ed_coNm',style:'',maxlengthCode:'3',allowCharCode:'0-9',refDataCollection:'dma_condition',code:'coClsCd',name:'coClsNm',id:'udc_dongbuGroupCompanyInfo','ev:onclickEvent':'scwin.udc_dongbuGroupCompanyInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_dongbuGroupCompanyInfo_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent',editTypeCode:'data',editTypeName:'data',btnId:'btn_company'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인허가 종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_apprTypeCd',style:'width: 100px;',submenuSize:'auto',ref:'data:dma_condition.apprTypeCd',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인허가명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w85',id:'ed_apprCd',placeholder:'',ref:'data:dma_condition.apprCd',style:'','ev:onblur':'scwin.ed_apprCd_onblur',objType:'data',allowChar1:'a-zA-Z0-9',allowChar1Length:'3',allowChar1Upper:'true',maxlength:'3'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch','ev:onclick':'scwin.f_openApprPopUp',id:'trigger2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:input',A:{class:' w120',id:'ed_apprNm',placeholder:'',ref:'data:dma_condition.apprNm',style:'',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_regDept',nameId:'ed_regDeptNm',popupID:'',popupTitle:'',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'',maxlengthName:'12',maxlengthCode:'5',refDataCollection:'dma_condition',code:'acctDeptCd',name:'acctDeptNm',id:'udc_acctDeptCdInfo','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCdInfo_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent',allowCharCode:'0-9 '}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_sregId',nameId:'ed_sregNm',popupID:'',popupTitle:'',selectID:'retrieveLoBranEmpInfo',style:'',validTitle:'',maxlengthCode:'6',allowCharCode:'0-9 ',maxlengthName:'12',refDataCollection:'dma_condition',code:'picEmpNo',name:'picEmpNm',id:'udc_loBranEmpInfo','ev:onclickEvent':'scwin.udc_loBranEmpInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_loBranEmpInfo_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_loBranEmpInfo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_useYn',style:'width: 100px;',submenuSize:'auto',ref:'data:dma_condition.useYn'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_apprvYn',style:'width:230px;',submenuSize:'auto',ref:'data:dma_condition.apprvYn'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'승인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미승인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유효기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'regDtFrom',refDataMap:'dma_condition',style:'',id:'udc_fromToCalendar1',refEdDt:'regDtTo',edFromId:'em_regDtFrom',edToId:'em_regDtTo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'인허가현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_results',gridUpYn:'N',gridDownFn:'scwin.cfGridToExcel',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',style:'',visibleRowNum:'5',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_results_oncelldblclick',readOnly:'true',columnMove:'false','ev:onrowindexchange':'scwin.gr_results_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'회사코드',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'회사명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'관리부서코드',width:'130',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'관리부서',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'사업영역코드',width:'130',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'사업</br>영역명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'인허가종류코드',width:'150',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'인허가</br>종류명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'인허가명코드',width:'150',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'인허가명',width:'250',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column33',value:'인허가관리청',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column31',value:'최초취득일',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column29',value:'최근갱신일',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column27',value:'등록(유효)기간',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'변경사유',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'담당자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'등록일시',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'승인자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'승인일시',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'시작일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'종료일',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'coClsCd',inputType:'text',value:'',width:'100',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coClsNm',inputType:'text',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizDomCd',inputType:'text',style:'',value:'',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizDomNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprTypeCd',inputType:'text',style:'',value:'',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprTypeNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprCd',inputType:'text',style:'',value:'',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprNm',inputType:'text',style:'',value:'',width:'250',class:'underline',customFormatter:'scwin.apprNmDisplayFm',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'apprMgntAgcy',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'firstAcqDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'renDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regStDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regEndDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'chgDesc',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'picEmpNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'apprRegDtm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'apprvEmpNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'apprApprvDtm',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'인허가이력 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_results2',gridUpYn:'N',gridDownFn:'scwin.cfGridToExcel2',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_history',id:'gr_results2',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_results2_oncelldblclick',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'변경사유',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'최초취득일',width:'130',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column43',value:'최근갱신일',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column40',value:'등록(유효)기간',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'담당자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'등록일시',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'승인자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'승인일시',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'첨부파일명',width:'130',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'삭제여부',width:'100',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'시작일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'종료일',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chgDesc',inputType:'text',style:'',value:'',width:'100',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'firstAcqDt',inputType:'text',style:'',value:'',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'renDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',colMerge:'true',upperColumn:'chgDesc'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regStDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',colMerge:'true',upperColumn:'chgDesc'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regEndDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',colMerge:'true',upperColumn:'chgDesc'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'picEmpNm',value:'',displayMode:'label',colMerge:'true',upperColumn:'chgDesc'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'apprRegDtm',value:'',displayMode:'label',colMerge:'true',upperColumn:'chgDesc'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvEmpNm',inputType:'text',style:'',value:'',width:'100',colMerge:'true',upperColumn:'chgDesc'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprApprvDtm',inputType:'text',style:'',value:'',width:'100',colMerge:'true',upperColumn:'chgDesc'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'attachFileNm',inputType:'text',value:'',width:'130',customFormatter:'scwin.attachFileNmDisplayFm',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'delYn',inputType:'text',style:'',value:'',width:'100',displayFormatter:'scwin.delYnDisplayFm'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})