/*amd /ui/ac/fm/paymgnt/advcdmgnt/fm_303_03_01b.xml 31275 0cc3c1f983145c7c46df7c418569196bf86d9e3cfdab89e9321560512569c55a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchVariableCostAdvanced'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'outbrDtFrom',name:'발생시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outbrDtTo',name:'발생종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adjmStsCls',name:'정산구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_addVariableCostAdvanced',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_variableCostAdvancedList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'체크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'varCostadvcdOutbrNo',name:'발생번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSlipNo',name:'발생전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctCd',name:'발생상대계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctNm',name:'발생상대계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctNm',name:'상대계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'발생적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrDt',name:'발생일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmSlipNo',name:'정산전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmCnclSlipNo',name:'정산취소전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'발생금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'advcdBankbookNo',name:'전도금통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdExecAcctDeptCd',name:'전도금집행귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmDt',name:'정산일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'발생등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modNm',name:'정산등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_searchVariableCostAdvanced',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchVariableCostAdvanced","key":"IN_DS1"},{"id":"ds_variableCostAdvancedList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_variableCostAdvancedList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchVariableCostAdvanced_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveVariableCostAdvanced',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_variableCostAdvancedList","key":"IN_DS1"},{"action":"modified","id":"ds_addVariableCostAdvanced","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveVariableCostAdvanced_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cancelVariableCostAdvanced',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_variableCostAdvancedList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_cancelVariableCostAdvanced_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMMdd").substring(0, 6) + "01";
scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.pos_groupCode = 0;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {

  //ASIS 히든,showfalse 그리드 필드정보
  //gr_variableCostAdvancedList.setColumnVisible("adjmCnclSlipNo", false);
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ed_FromDate.setValue(scwin.strFromDate);
  ed_wrkDt.setValue(scwin.strToDate);
  ed_ToDate.setValue(scwin.strToDate);
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    if (!$c.gus.cfIsAfterDate($p, ed_FromDate.getValue(), ed_ToDate.getValue())) {
      $c.gus.cfAlertMsg($p, "조회 시작일자는 종료일자보다 이전 날짜 이어야 합니다.");
      ed_FromDate.focus();
      return false;
      ;
    }
    let ret = await $c.gus.cfValidate($p, [ed_FromDate, ed_ToDate, ed_txt_acctDeptCd]);
    if (!ret) {
      return false;
    }
    ds_variableCostAdvancedList.removeAll(); //정보삭제
    sbm_searchVariableCostAdvanced.action = "/ac.fm.paymgnt.advcdmgnt.RetrieveVariableCostAdvancedContentsCMD.do";
    $c.sbm.execute($p, sbm_searchVariableCostAdvanced);
  } catch (e) {
    console.log("f_Retrieve : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_searchVariableCostAdvanced_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_variableCostAdvancedList.getRowCount()));
    if (ds_variableCostAdvancedList.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    } else {
      //scwin.gr_billRecvDc_onrowindexchange(0);
      $c.gus.cfGoPrevPosition($p, gr_variableCostAdvancedList, 0); //첫번째 row 포지션이동
    }
  } catch (e) {
    console.log("sbm_searchVariableCostAdvanced_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 그리드 셀 클릭시
//-------------------------------------------------------------------------
scwin.gr_variableCostAdvancedList_oncellclick = function (rowIndex, columnIndex, columnId) {
  try {
    // 전표 POPUP
    if (columnId == "outbrSlipNo") {
      $c.gus.cfShowSlipInfo($p, ds_variableCostAdvancedList.getCellData(rowIndex, "outbrSlipNo"));
    }
    if (columnId == "adjmSlipNo") {
      $c.gus.cfShowSlipInfo($p, ds_variableCostAdvancedList.getCellData(rowIndex, "adjmSlipNo"));
    }
    if (columnId == "adjmCnclSlipNo") {
      $c.gus.cfShowSlipInfo($p, ds_variableCostAdvancedList.getCellData(rowIndex, "adjmCnclSlipNo"));
    }
  } catch (e) {
    console.log("gr_variableCostAdvancedList_oncellclick : " + e);
  }
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    const options = {
      fileName: "변동비성전도금조회.xlsx",
      //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      sheetName: "변동비성전도금정산"
    };
    const infoArr = [];
    $c.data.downloadGridViewExcel($p, gr_variableCostAdvancedList, options, infoArr);
  }
};

//-------------------------------------------------------------------------
// 귀속부서코드
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_txt_acctDeptCd, ed_txt_acctDeptNm, '1');
};

//-------------------------------------------------------------------------
// 귀속부서명
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurNameEvent = function (e) {};

//-------------------------------------------------------------------------
// 귀속부서찾기
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  try {
    if (orgObjCd.getValue() == orgObjCd.hidVal) {
      if (orgObjNm.getValue()() == "") {
        orgObjNm.setValue("");
        orgObjCd.setValue("");
        orgObjCd.hidVal = "";
      }
      return false;
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code);
    } else {
      orgObjNm.setValue("");
      orgObjCd.setValue("");
      orgObjCd.hidVal = "";
    }
  } catch (e) {
    console.log("f_CheckPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->귀속부서, 2:조회->등록자
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (select_code) {
  let code = "";
  switch (select_code) {
    // 조회조건용 관리부서 PopUp 호출
    case '1':
      if (ed_txt_acctDeptCd.getReadOnly() == true || ed_txt_acctDeptCd.getReadOnly() == true) rertun;
      ed_txt_acctDeptNm.setValue("");
      code = ed_txt_acctDeptCd.getValue();

      //rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo',code,'',"T",null,null,null,null,null,"450","500",null,null); // 귀속부서
      udc_acctDeptCd.setSelectId('retrieveAcctDeptCdInfo');
      udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc // 콜백 함수
      , code // 화면에서의 ??? Code Element의 Value
      , '' // 화면에서의 ??? Name Element의 Value
      , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , '450' // POP-UP뛰을때 원도우의 사용자 정의 폭
      , '500' // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , null // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    default:
      $c.gus.cfAlertMsg($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};

//-------------------------------------------------------------------------
// 귀속부서 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_txt_acctDeptCd.setValue(rtnList[0]); // 관리부서코드
      ed_txt_acctDeptNm.setValue(rtnList[1]); // 관리부서명
      ed_txt_acctDeptCd.hidVal = rtnList[0];
    } else {
      ed_txt_acctDeptCd.setValue("");
      ed_txt_acctDeptCd.hidVal = "";
    }
  } catch (e) {
    console.log("udc_acctDeptCd_callBackFunc : " + e);
  }
};

//-------------------------------------------------------------------------
// 정산처리 버튼 클릭시 실행되는 함수
//-------------------------------------------------------------------------
scwin.f_Save = async function (ret) {
  try {
    // 필수 조건 입력 여부 Check
    let ret = await $c.gus.cfValidate($p, [ed_wrkDt]);
    if (!ret) {
      return false;
    }
    let checkCount = 0;
    for (i = 0; i < ds_variableCostAdvancedList.getRowCount(); i++) {
      if (ds_variableCostAdvancedList.getCellData(i, "num") == "T" && ds_variableCostAdvancedList.getCellData(i, "adjmSlipNo").trim() != "") {
        $c.gus.cfAlertMsg($p, "정산처리된 전표입니다.\n선택하신 항목을 확인하시기 바랍니다.");
        return false;
      }
      if (ds_variableCostAdvancedList.getCellData(i, "num") == "T" && ds_variableCostAdvancedList.getCellData(i, "adjmSlipNo").trim() != "" && ds_variableCostAdvancedList.getCellData(i, "adjmCnclSlipNo").trim() != "") {
        $c.gus.cfAlertMsg($p, "마감후 정산취소된 전표는 정산처리가 불가합니다.\n선택하신 항목을 확인하시기 바랍니다.");
        return false;
      }
      if (ds_variableCostAdvancedList.getCellData(i, "num") == "T") {
        checkCount++;
      }
    }

    // 선택여부 확인
    if (checkCount <= 0) {
      $c.gus.cfAlertMsg($p, "선택하신 사항이 없습니다.");
      return false;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      sbm_saveVariableCostAdvanced.action = "/ac.fm.paymgnt.advcdmgnt.RegistVariableCostAdvancedSlipProcessCMD.do";
      scwin.pos_groupCode = ds_variableCostAdvancedList.getRowCount();

      //ASIS bnd_addVariableCostAdvanced
      let row = ds_addVariableCostAdvanced.insertRow(0);
      ds_addVariableCostAdvanced.setCellData(row, "wrkDt", ed_wrkDt.getValue());
      $c.sbm.execute($p, sbm_saveVariableCostAdvanced);
    }
  } catch (e) {
    console.log("f_Save : " + e);
  }
};

//-------------------------------------------------------------------------
// 정산처리 콜백
//-------------------------------------------------------------------------
scwin.sbm_saveVariableCostAdvanced_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 정산취소 버튼 클릭시 실행되는 함수
//-------------------------------------------------------------------------
scwin.f_Cancel = async function (ret) {
  try {
    let checkCount = 0;
    for (i = 0; i < ds_variableCostAdvancedList.getRowCount(); i++) {
      if (ds_variableCostAdvancedList.getCellData(i, "num") == "T" && (ds_variableCostAdvancedList.getCellData(i, "adjmSlipNo").trim() == "" || ds_variableCostAdvancedList.getCellData(i, "adjmSlipNo").trim() != "" && ds_variableCostAdvancedList.getCellData(i, "adjmCnclSlipNo").trim() != "")) {
        $c.gus.cfAlertMsg($p, "정산이 미처리되거나 마감후 정산 취소된  전표입니다.\n선택하신 항목을 확인하시기 바랍니다.");
        return false;
      }
      if (ds_variableCostAdvancedList.getCellData(i, "num") == "T") {
        checkCount++;
      }
    }

    // 선택여부 확인
    if (checkCount <= 0) {
      $c.gus.cfAlertMsg($p, "선택하신 사항이 없습니다.");
      return false;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      sbm_cancelVariableCostAdvanced.action = "/ac.fm.paymgnt.advcdmgnt.CancelVariableCostAdvancedSlipProcessCMD.do";
      scwin.pos_groupCode = ds_variableCostAdvancedList.getRowCount();
      $c.sbm.execute($p, sbm_cancelVariableCostAdvanced);
    }
  } catch (e) {
    console.log("f_Cancel : " + e);
  }
};

//-------------------------------------------------------------------------
// 정산취소 콜백
//-------------------------------------------------------------------------
scwin.sbm_cancelVariableCostAdvanced_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'발생일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_searchVariableCostAdvanced',refEdDt:'outbrDtTo',refStDt:'outbrDtFrom',style:'',edFromId:'ed_FromDate',edToId:'ed_ToDate',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'발생일자',titleTo:'발생일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_txt_acctDeptCd',nameId:'ed_txt_acctDeptNm',maxlengthCode:'5',allowCharCode:'0-9',code:'acctDeptCd',refDataCollection:'ds_searchVariableCostAdvanced',selectID:'retrieveAcctDeptCdInfo6',id:'udc_acctDeptCd',validTitle:'귀속부서','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCd_onblurNameEvent',mandatoryName:'true',mandatoryCode:'true',maxlengthName:'20'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{allowCharCode:'0-9',class:'',id:'ed_outbrSlipNo',maxlength:'10',objType:'data',ref:'data:ds_searchVariableCostAdvanced.slipNo',style:'width: 150px;'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정산구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',disabled:'false',displayMode:'value delim label',editType:'select',id:'acb_adjmStsCls',ref:'data:ds_searchVariableCostAdvanced.adjmStsCls',search:'start',searchTarget:'both',style:'width:100px;',submenuSize:'auto'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정산'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미정산'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',style:'',id:'udc_topGrd',gridID:'gr_variableCostAdvancedList',gridUpFn:'scwin.f_GridToExcel',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{fixedColumnNoMove:'true','ev:oncellclick':'scwin.gr_variableCostAdvancedList_oncellclick',readOnly:'true',rowStatusVisible:'true',visibleRowNumFix:'true',fixedColumn:'1',checkAllType:'false',dataList:'data:ds_variableCostAdvancedList',resize:'true',style:'',columnMove:'true',autoFit:'none',id:'gr_variableCostAdvancedList',visibleRowNum:'13',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'column1',value:' ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'발생번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column15',value:'발생전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column13',value:'발생상대계정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column11',value:'발생상대계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column9',value:'발생일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column3',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column5',value:'귀속부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column7',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column27',sortable:'false',value:'발생금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column25',value:'발생적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column21',value:'정산전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'adjmCnclSlipNo',value:'정산취소전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'정산일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column33',value:'전도금통장번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'발생등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column31',value:'정산등록자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{falseValue:'F',trueValue:'T',valueType:'other',width:'70',inputType:'checkbox',readOnly:'false',id:'num',checkAlways:'true',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'text',style:'',id:'varCostadvcdOutbrNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'130',inputType:'link',style:'',id:'outbrSlipNo',value:'',class:'linktype',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'130',inputType:'text',style:'',id:'opntAcctCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'150',inputType:'text',style:'',id:'opntAcctNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',style:'',id:'outbrDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',style:'',id:'outbrAcctDeptCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',style:'',id:'outbrAcctDeptNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',displayFormat:'#,##0',inputType:'text',style:'',id:'amt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'140',inputType:'text',style:'',id:'outbrSummary',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'130',inputType:'link',style:'',id:'adjmSlipNo',value:'',class:'linktype',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'adjmCnclSlipNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',style:'',id:'adjmDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'150',inputType:'text',style:'',id:'advcdBankbookNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',style:'',id:'regNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'120',inputType:'text',style:'',id:'modNm',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column50',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',expression:'sum(\'amt\')',textAlign:'right',displayFormat:'#,##0',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column38',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column37',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'전표일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:inputCalendar',A:{displayFormat:'yyyy/MM/dd',style:'',id:'ed_wrkDt',title:'전표일자',class:' cal',objType:'data',mandatory:'true',calendarValueType:'yearMonthDate'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Cancel',style:'',type:'button','ev:onclick':'scwin.f_Cancel',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정산취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정산처리'}]}]}]}]}]}]}]}]}]})