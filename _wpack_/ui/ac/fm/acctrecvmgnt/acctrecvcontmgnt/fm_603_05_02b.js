/*amd /ui/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_05_02b.xml 33161 177dd407a6671241f8f95961bf6e11761936828f8e09c6dd418fa5fa3db220be */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'잔액년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgAcctDeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ramtStdDt',name:'잔액기준일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'replyDt',name:'응답일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stsCls',name:'상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scClsCd',name:'잔액확인사유등록',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'사업자번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ramtConfirm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ver',name:'버젼',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'청구귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'청구귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvAmt',name:'채권금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'substPayAmt',name:'대급금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramtConfirmRsnCd',name:'잔액확인사유코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ramtConfirmStsCd',name:'잔액확인상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsnCdNm',name:'사유명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendClsCd',name:'발송여부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveramtConfirm',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RetrieveRemainAmtConfirmationReasonCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_ramtConfirm","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ramtConfirm","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveramtConfirm_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveramtConfirm',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RegistRemainAmtConfirmationReasonCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_ramtConfirm","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveramtConfirm_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "FM038",
    compID: "lc_stsCls,gr_ramtConfirm:ramtConfirmStsCd",
    opt: {
      "range": "1,10"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//TOBE scwin.onpageload 후 UDC관련 처리
scwin.onUdcCompleted = function () {
  var sCurrDate = scwin.g_sCurrDate;
  ed_ramtYm.setValue(sCurrDate.substring(0, 6));
  ed_ramtYm.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------     
scwin.f_Retrieve = async function (e) {
  let ret = await $c.gus.cfValidate($p, [ed_ramtYm]);
  if (ret) {
    ds_condition.set("scClsCd", "1");
    $c.sbm.execute($p, sbm_retrieveramtConfirm);
  }
};

//-------------------------------------------------------------------------
// 조회콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieveramtConfirm_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_ramtConfirm.getRowCount()));
  if (ds_ramtConfirm.getRowCount() == 0) {
    $c.gus.cfDisableAllBtn($p);
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
    return false;
  } else {
    $c.gus.cfEnableAllBtn($p);
  }
};

//-------------------------------------------------------------------------
// 그리드 row index가 변경시
//-------------------------------------------------------------------------
scwin.gr_ramtConfirm_onrowindexchange = function (rowIndex, oldRow) {
  if (ds_ramtConfirm.getCellData(rowIndex, "sendClsCd") == "0") {
    gr_ramtConfirm.setReadOnly("cell", rowIndex, "ramtConfirmStsCd", true); //readOnly
    gr_ramtConfirm.setReadOnly("cell", rowIndex, "ramtConfirmRsnCd", true);
  } else {
    gr_ramtConfirm.setReadOnly("cell", rowIndex, "ramtConfirmStsCd", false);
    gr_ramtConfirm.setReadOnly("cell", rowIndex, "ramtConfirmRsnCd", false);

    //scwin.gr_ramtConfirm_ontextimageclick = function (rowIndex, columnIndex) {
  }
};

//-------------------------------------------------------------------------
// 그리드셀 클릭시
//-------------------------------------------------------------------------
scwin.gr_ramtConfirm_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_ramtConfirm.getCellData(rowIndex, "sendClsCd") == "0") {
    gr_ramtConfirm.setReadOnly("cell", rowIndex, "ramtConfirmStsCd", true); //readOnly
    gr_ramtConfirm.setReadOnly("cell", rowIndex, "ramtConfirmRsnCd", true);
    //gr_ramtConfirm.setColumnProp(columnId, "viewType", "");
  } else {
    gr_ramtConfirm.setReadOnly("cell", rowIndex, "ramtConfirmStsCd", false);
    gr_ramtConfirm.setReadOnly("cell", rowIndex, "ramtConfirmRsnCd", true); //TOBE 찾기버튼 무조건 활성화 함 (ASIS처럼 버튼만 활성화 불가)
  }
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1, null);
  ed_ramtYm.setValue(scwin.g_sCurrDate.substring(0, 6));
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_ramtConfirm.getModifiedIndex().length == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "자료"));
    return false;
  }
  let ret = await $c.gus.cfValidate($p, [gr_ramtConfirm]);
  if (ret) {
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      $c.sbm.execute($p, sbm_saveramtConfirm);
    }
  }
};

//-------------------------------------------------------------------------
// 저장콜백
//-------------------------------------------------------------------------
scwin.sbm_saveramtConfirm_submitdone = async function () {
  $c.win.alert($p, MSG_CM_INF_001);
};
//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (ds_ramtConfirm.getRowCount() <= 0) {
    await $c.win.alert($p, "잔액확인서내역이 존재하지않습니다.");
    return false;
  }
  const options = {
    fileName: "잔액확인사유등록.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: "잔액확인사유등록"
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_ramtConfirm, options, infoArr);
};

//-------------------------------------------------------------------------
// 청구부서
//-------------------------------------------------------------------------
scwin.udc_bilgAcctDept_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_bilgAcctDeptCd, ed_txt_bilgAcctDeptNm, '1');
};

//-------------------------------------------------------------------------
// 청구부서찾기
//-------------------------------------------------------------------------
scwin.udc_bilgAcctDept_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_bilgAcctDeptCd, ed_txt_bilgAcctDeptNm, 'F');
};

//-------------------------------------------------------------------------
// 거래처
//-------------------------------------------------------------------------
scwin.udc_udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_txt_clntNm, '2');
};

//-------------------------------------------------------------------------
// 거래처찾기
//-------------------------------------------------------------------------
scwin.udc_udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_clntNo, ed_txt_clntNm, 'F');
};

//-------------------------------------------------------------------------
// 사업자
//-------------------------------------------------------------------------
scwin.udc_crd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_crn, ed_txt_crn, '3');
};

//-------------------------------------------------------------------------
// 사업자찾기
//-------------------------------------------------------------------------
scwin.udc_crd_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_crn, ed_txt_crn, 'F');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  try {
    if (orgObjCd.getValue() != orgObjCd.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, "T");
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
      orgObjCd.hidVal = "";
    }
  } catch (e) {
    console.log("f_CheckPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (select_code, txtCode, txtName, sPopupCls) {
  try {
    let code = txtCode.getValue();
    let name = '';
    if (txtName == null) {
      name = "";
    } else {
      name = txtName.getValue();
    }
    switch (select_code) {
      // 차입기관 PopUp 호출
      case '1':
        //sCmdName = "retrieveAcctDeptCdInfo"
        //rtnList = cfCommonPopUp(sCmdName,code,name,sPopupCls,null,null,null,null,null,null,null,null,null,null,null,null,null); // 관리부서
        udc_bilgAcctDept.setSelectId("retrieveAcctDeptCdInfo");
        udc_bilgAcctDept.cfCommonPopUp(scwin.udc_bilgAcctDept_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sPopupCls // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
        break;
      // 거래처 PopUp 호출	
      case '2':
        //sCmdName = "retrieveClntList"
        //rtnList = cfCommonPopUp(sCmdName,code,name,sPopupCls,null,null,null,null,null,null,null,null,null,null,"F",null,null); // 관리부서
        udc_clntNo.setSelectId("retrieveClntList");
        udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sPopupCls // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , 'F' // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 사업자번호 PopUp 호출	
      case '3':
        //sCmdName = "retrieveCrnInfo"
        //rtnList = cfCommonPopUp(sCmdName,code,name,sPopupCls,null,null,null,null,null,null,null,null,null,null,"F",null,null); // 관리부서
        udc_crd.setSelectId("retrieveCrnInfo");
        udc_crd.cfCommonPopUp(scwin.udc_crd_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sPopupCls // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , 'F' // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
    }
  } catch (e) {
    console.log("f_openPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 청구부서 PopUp 콜백(1)
//-------------------------------------------------------------------------
scwin.udc_bilgAcctDept_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_bilgAcctDeptCd.setValue(rtnList[0]); // 코드값
      ed_txt_bilgAcctDeptNm.setValue(rtnList[1]); // 코드명
      ed_bilgAcctDeptCd.hidVal = rtnList[0];
    } else {
      ed_bilgAcctDeptCd.setValue("");
      ed_txt_bilgAcctDeptNm.setValue("");
      ed_bilgAcctDeptCd.hidVal = "";
    }
  } catch (e) {
    console.log("udc_bilgAcctDept_callBackFunc " + e);
  }
};

//-------------------------------------------------------------------------
// 거래처 PopUp 콜백(2)
//-------------------------------------------------------------------------
scwin.udc_clntNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_clntNo.setValue(rtnList[0]); // 코드값
      ed_txt_clntNm.setValue(rtnList[1]); // 코드명
      ed_clntNo.hidVal = rtnList[0];
    } else {
      ed_clntNo.setValue("");
      ed_txt_clntNm.setValue("");
      ed_clntNo.hidVal = "";
    }
  } catch (e) {
    console.log("udc_clntNo_callBackFunc " + e);
  }
};

//-------------------------------------------------------------------------
// 사업자번호 PopUp 콜백(2)
//-------------------------------------------------------------------------
scwin.udc_crd_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_crn.setValue(rtnList[0]); // 코드값
      ed_txt_crn.setValue(rtnList[1]); // 코드명
      ed_crn.hidVal = rtnList[0];
    } else {
      ed_crn.setValue("");
      ed_txt_crn.setValue("");
      ed_crn.hidVal = "";
    }
  } catch (e) {
    console.log("udc_crd_callBackFunc " + e);
  }
};

//-------------------------------------------------------------------------
// gr_ramtConfirm event=OnPopup(row,colid,data)
//-------------------------------------------------------------------------
scwin.gr_ramtConfirm_ontextimageclick = function (rowIndex, columnIndex) {
  try {
    if (ds_ramtConfirm.getCellData(rowIndex, "sendClsCd") == "0") return false; //그리드 셀 정보가 ReadOnly 인경우 return 
    //if (gr_ramtConfirm.getReadOnly("cell", rowIndex, "ramtConfirmRsnCd")==true) return false; //그리드 셀 정보가 ReadOnly 인경우 return 

    let colid = gr_ramtConfirm.getColumnID(columnIndex);
    if (colid == "ramtConfirmRsnCd") {
      scwin.f_openPopUpGrid("1", ds_ramtConfirm, "ramtConfirmRsnCd", "rsnCdNm", rowIndex, ds_ramtConfirm.getCellData(rowIndex, "ramtConfirmStsCd"));
    }
  } catch (e) {
    console.log("gr_ramtConfirm_ontextimageclick " + e);
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUpGrid = async function (select_code, sDataSet, sCode, sName, Row, sUpperCd) {
  try {
    switch (select_code) {
      // 차입기관 PopUp 호출
      case '1':
        //sCmdName = "retrieveDsCommCdInfo"
        //rtnList = cfCommonPopUp(sCmdName,"","","F",null,null,null,null,"FM039,"+sUpperCd,null,null,null,null); // 차입기관
        udc_comCodeGrid.setSelectId('retrieveDsCommCdInfo');
        udc_comCodeGrid.cfCommonPopUp(scwin.udcGrid_ramtConfirmRsnCd_callBackFunc // 콜백 함수
        , '' // 화면에서의 ??? Code Element의 Value
        , '' // 화면에서의 ??? Name Element의 Value
        , 'F' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , "FM039," + sUpperCd // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
    }
  } catch (e) {
    console.log("f_openPopUpGrid " + e);
  }
};

//-------------------------------------------------------------------------
// 사유코드 PopUp 콜백
//-------------------------------------------------------------------------
scwin.udcGrid_ramtConfirmRsnCd_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ds_ramtConfirm.setCellData(ds_ramtConfirm.getRowPosition(), "ramtConfirmRsnCd", rtnList[0]); // 코드
      ds_ramtConfirm.setCellData(ds_ramtConfirm.getRowPosition(), "rsnCdNm", rtnList[1]); // 코드명
    } else {
      ds_ramtConfirm.setCellData(ds_ramtConfirm.getRowPosition(), "ramtConfirmRsnCd", ""); // 코드
      ds_ramtConfirm.setCellData(ds_ramtConfirm.getRowPosition(), "rsnCdNm", ""); // 코드명
    }
  } catch (e) {
    console.log("udcGrid_ramtConfirmRsnCd_callBackFunc " + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'table1',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'잔액년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_ramtYm',style:'',ref:'data:ds_condition.stdYm',title:'잔액년월',mandatory:'true',validExp:'잔액년월:yes:length=6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_stsCls',style:'width: 100px;',submenuSize:'auto',objType:'data',chooseOptionLabel:'전체',ref:'data:ds_condition.stsCls'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',onloadCallbackFunc:'',selectID:'retrieveAcctDeptCdInfo',codeId:'ed_bilgAcctDeptCd',popupTitle:'',nameId:'ed_txt_bilgAcctDeptNm',style:'',btnId:'btn_bilgAcctDept',code:'bilgAcctDeptCd',refDataCollection:'ds_condition',maxlengthCode:'5',objTypeCode:'data',objTypeName:'data',id:'udc_bilgAcctDept','ev:onblurCodeEvent':'scwin.udc_bilgAcctDept_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bilgAcctDept_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_txt_clntNm',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'retrieveClntList',style:'',btnId:'btn_clnt',validTitle:'거래처',objTypeCode:'data',maxlengthCode:'6',allowCharCode:'0-9',objTypeName:'data',refDataCollection:'ds_condition',code:'clntNo',id:'udc_clntNo','ev:onblurCodeEvent':'scwin.udc_udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_crn',nameId:'ed_txt_crn',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'retrieveCrnInfo',style:'',btnId:'btn_crd',validTitle:'사업자번호',code:'crn',refDataCollection:'ds_condition',allowCharCode:'0-9',maxlengthCode:'13',objTypeCode:'data',objTypeName:'data',id:'udc_crd','ev:onblurCodeEvent':'scwin.udc_crd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_crd_onclickEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_topGrd',gridID:'gr_ramtConfirm',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_ramtConfirm',id:'gr_ramtConfirm',style:'',visibleRowNum:'15',visibleRowNumFix:'true',resize:'true',columnMove:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true',sortable:'true',editModeEvent:'onclick','ev:onrowindexchange':'scwin.gr_ramtConfirm_onrowindexchange','ev:oncellclick':'scwin.gr_ramtConfirm_oncellclick',setCellInputTypeCustom:'true',rowStatusVisible:'true','ev:ontextimageclick':'scwin.gr_ramtConfirm_ontextimageclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'청구부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'사업자번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'거래처명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'외상매출',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'대급금',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'발송여부',width:'100',class:'col-type1',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ramtConfirmStsCdh',inputType:'text',style:'',value:'상태',width:'70',class:'col-type1',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ramtConfirmRsnCdh',inputType:'text',style:'',value:'사유코드',width:'100',class:'col-type1',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'사유명',width:'100',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAcctDeptCd',inputType:'text',style:'',value:'',width:'100',readonly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',style:'',value:'',width:'120',readonly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'100',readonly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'120',readonly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctRecvAmt',inputType:'text',style:'',value:'',width:'100',readonly:'true',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'substPayAmt',inputType:'text',style:'',value:'',width:'100',readonly:'true',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'sendClsCd',inputType:'select',removeBorderStyle:'false',width:'100',value:'0',readonly:'true',textAlign:'center',allOption:'',chooseOption:'',ref:'',dataType:'number'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미발송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'발송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ramtConfirmStsCd',inputType:'select',removeBorderStyle:'false',width:'70',value:'0',textAlign:'left',allOption:'',chooseOption:'',ref:'',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ramtConfirmRsnCd',inputType:'textImage',style:'',value:'',width:'100',textAlign:'left',viewType:'icon'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsnCdNm',inputType:'text',style:'',value:'',width:'100',readonly:'true',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column26',value:'',displayMode:'label',expression:'sum(\'acctRecvAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]})