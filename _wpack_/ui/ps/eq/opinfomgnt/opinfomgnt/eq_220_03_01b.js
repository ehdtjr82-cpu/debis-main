/*amd /ui/ps/eq/opinfomgnt/opinfomgnt/eq_220_03_01b.xml 34519 d357fbec94c59a2b4ecc226db9f9f800c7a4abced64eef2efd167ef4bd7280e6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lux_wrkPlCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_lux_wrkPlCdCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라메터1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_re_pl'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'homeClsCd',name:'사업부문코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixEmpNo',name:'사원번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixEmpNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixEmpClsCd',name:'사원구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_work_pl',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_work_pl_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixEmpNo',name:'사용자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixEmpNm',name:'정비사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'소속구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPartyCd',name:'작업반',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixEmpClsCd',name:'사원구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_wrkPlCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_lux_wrkPlCdCondition',target:'data:json,{"id":"ds_lux_wrkPlCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_wrkPlCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_re_pl","key":"IN_DS1"},{"id":"ds_work_pl","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_work_pl","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_SaveRepairShop',action:'/ps.eq.opinfomgnt.opinfomgnt.SaveFixEmployeeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_work_pl","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_SaveRepairShop_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//세션 정보를 가지고 온다.
scwin.memJson = $c.data.getMemInfo($p);

//그리드 변경전 데이터를 담는 정보
scwin.oriFixEmpNo = "";
scwin.oriFixWrkPlCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "lc_homeClsCd",
    opt: {
      "range": "1,EQ"
    }
  }, {
    grpCd: "EQ004",
    compID: "lc_fixEmpClsCd"
  }, {
    grpCd: "EQ001",
    compID: ""
  }];
  $c.data.setCommonCode($p, codeOptions);

  //페이지로드시 lc_homeClsCd_onchange 가 자동호출되어 주석
  //ds_lux_wrkPlCd.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=PsCommonEBC&queryId=retriveWrkplList&param1="+lux_homeClsCd.BindColVal;
  //ds_lux_wrkPlCd.Reset();
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  lc_homeClsCd.setValue(scwin.memJson.eqHomeClsCd); // 정비소속구분코드
  lc_fixUseClsCd.setValue("1"); //초기 로딩시 Y가 선택되어 있어 추가함
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  try {
    //그리드 코드명 = [코드] 코드명 으로 보여주기 위해 임의 작업 추가
    let cdNm = "";
    for (let i = 0; i < dlt_commonCodeEQ001.getRowCount(); i++) {
      cdNmDesc = "[" + dlt_commonCodeEQ001.getCellData(i, "cd") + "]" + dlt_commonCodeEQ001.getCellData(i, "cdNm");
      dlt_commonCodeEQ001.setCellData(i, "cdNm", cdNmDesc);
    }
    gr_work_pl.setColumnNodeSet("wrkPartyCd", "data:dlt_commonCodeEQ001", "cdNm", "cd"); //작업반

    for (let i = 0; i < dlt_commonCodeEQ004.getRowCount(); i++) {
      cdNmDesc = "[" + dlt_commonCodeEQ004.getCellData(i, "cd") + "]" + dlt_commonCodeEQ004.getCellData(i, "cdNm");
      dlt_commonCodeEQ004.setCellData(i, "cdNm", cdNmDesc);
    }
    gr_work_pl.setColumnNodeSet("fixEmpClsCd", "data:dlt_commonCodeEQ004", "cdNm", "cd"); //사업구분

    scwin.lc_homeClsCd_onviewchange();
  } catch (e) {
    console.log("ondataload : " + e);
  }
};

//-------------------------------------------------------------------------
// 작업장콤보 DataSet
//-------------------------------------------------------------------------
scwin.lc_homeClsCd_onviewchange = function (info) {
  try {
    const params = {
      sysCd: "PsCommonEBC",
      queryId: "retriveWrkplList",
      param1: lc_homeClsCd.getValue()
    };

    //데이터셋에 정보설정
    ds_lux_wrkPlCdCondition.setJSON(params);
    $c.sbm.execute($p, sbm_wrkPlCd);
  } catch (e) {
    console.log("lc_homeClsCd_onviewchange : " + e);
  }
};

//-------------------------------------------------------------------------
// 콜백
//-------------------------------------------------------------------------
scwin.sbm_wrkPlCd_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  if (e.responseJSON.GAUCE) {
    ds_lux_wrkPlCd.insertRow(0);
    ds_lux_wrkPlCd.setCellData(0, "code", " ");
    ds_lux_wrkPlCd.setCellData(0, "name", "전체");
    ds_lux_wrkPlCd.reform();
    if (lc_homeClsCd.getValue() == scwin.memJson.eqHomeClsCd) {
      lc_wrkPlCd.setValue(scwin.memJson.fixWrkPlCd); // "<%=userInfo.getFixWrkPlCd()%>"; // 정비작업장코드
    }

    //lc_wrkPlCd.setSelectedIndex(-1);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  if (lc_wrkPlCd.getSelectedIndex() == 0) {
    ds_lux_wrkPlCd.setCellData(0, "code", "");
    ds_re_pl.set("wrkPlCd", "");
  }
  sbm_retrieve.action = "/ps.eq.opinfomgnt.opinfomgnt.RetrieveFixEmployeeListCMD.do";
  if (lc_homeClsCd.getValue() == "") {
    $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "사업부문")); //cfAlertMsg(MSG_CM_ERR_002,["사업부문"]);
  } else {
    ds_work_pl.removeAll();
    $c.sbm.execute($p, sbm_retrieve);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
    tbx_totalRows.setValue(ds_work_pl.getRowCount());
    $c.gus.cfGoPrevPosition($p, gr_work_pl, 0); //첫번째 포커스 이동

    gr_work_pl.setReadOnly("cell", ds_work_pl.getRowPosition(), "fixEmpNo", true); //readOnly Edit none
    gr_work_pl.setReadOnly("cell", ds_work_pl.getRowPosition(), "fixEmpNm", true); //readOnly Edit none

    if (ds_work_pl.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_WRN_002, ""));
    }
  } catch (e) {
    console.log("sbm_retrieve_submitdone " + e);
  }
};

//-------------------------------------------------------------------------
// 첫번째 그리드추가 - 코드 적용
//-------------------------------------------------------------------------
scwin.f_WorkAddRow = function (e) {
  try {
    //ASIS 행이 없을때는 추가하지 않고 있어서 방어코드 추가함
    if (ds_work_pl.getRowCount() > 0) {
      let addRow = ds_work_pl.insertRow();
      ds_work_pl.setCellData(addRow, "fixEmpStsCd", "1");
      ds_work_pl.setCellData(addRow, "homeClsCd", lc_homeClsCd.getValue()); //사업부문
      ds_work_pl.setCellData(addRow, "useYn", "1");
      ds_work_pl.setCellData(addRow, "fixWrkPlCd", lc_wrkPlCd.getValue()); //사업부문

      ds_work_pl.setCellData(addRow, "fixWrkPlNm", lc_wrkPlCd.getText(true));
      gr_work_pl.setReadOnly("cell", addRow, "fixEmpNo", false);
      gr_work_pl.setReadOnly("cell", addRow, "fixEmpNm", false);
      ds_work_pl.setRowPosition(addRow);
      $c.gus.cfGoPrevPosition($p, gr_work_pl, addRow);
    }
  } catch (e) {
    console.log("f_WorkAddRow : " + e);
  }
};

//-------------------------------------------------------------------------
// 첫번째 그리드삭제 - 서브데이타도 삭제
//-------------------------------------------------------------------------
scwin.f_DelClass = async function (e) {
  try {
    let curPos = ds_work_pl.getRowPosition();
    if (ds_work_pl.getRowStatus(ds_work_pl.getRowPosition()) == "C") {
      ds_work_pl.removeRow(ds_work_pl.getRowPosition());
    } else {
      ds_work_pl.deleteRow(ds_work_pl.getRowPosition());
      gr_work_pl.setFocusedCell(curPos, "fixEmpNo");
    }
  } catch (e) {
    console.log("f_DelClass : " + e);
  }
};

//-------------------------------------------------------------------------
// 첫번째 그리드취소 - 서브데이타도 적용
//-------------------------------------------------------------------------
scwin.f_CancelClass = function (e) {
  try {
    if (ds_work_pl.getRowStatus(ds_work_pl.getRowPosition()) == "C") {
      ds_work_pl.removeRow(ds_work_pl.getRowPosition());
    } else {
      ds_work_pl.undoRow(ds_work_pl.getRowPosition());
      $c.gus.cfGoPrevPosition($p, gr_work_pl, ds_work_pl.getRowPosition());
    }
  } catch (e) {
    console.log("f_CancelClass : " + e);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  try {
    if (ds_work_pl.getModifiedIndex().length == 0) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "정비사원"));
    } else {
      if (!(await $c.gus.cfValidate($p, [gr_work_pl], null, true))) return false;
      if (await $c.win.confirm($p, "저장하시겠습니까?")) {
        $c.sbm.execute($p, sbm_SaveRepairShop);
      }
    }
  } catch (e) {
    console.log("f_Save : " + e);
  }
};

//-------------------------------------------------------------------------
// 저장콜백
//------------------------------------------------------------------------
scwin.sbm_SaveRepairShop_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 정비사원 찾기
//-------------------------------------------------------------------------
scwin.udc_fixEmp_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_txt_fixEmpNo.getValue(), ed_txt_fixEmpNm.getValue(), 'T', 'T');
};

//-------------------------------------------------------------------------
// 정비사원 버튼클릭
//-------------------------------------------------------------------------
scwin.udc_fixEmp_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_txt_fixEmpNo.getValue(), ed_txt_fixEmpNm.getValue(), 'T', 'T');
};

//-------------------------------------------------------------------------------
//공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  try {
    let pWhere = "," + lc_wrkPlCd.getValue() + "";
    switch (disGubun) {
      case 1:
        // 정비사원 팝업
        //udc_fixEmp.setSelectId("retrieveFixEmpInfo");
        udc_fixEmp.cfCommonPopUp(scwin.udc_fixEmp_callbackFunc, ed_txt_fixEmpNo.getValue().trim() // 화면에서의 Code Element의	Value
        , ed_txt_fixEmpNm.getValue() // 화면에서의 Name Element의	Value
        , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
        , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서	
        , null // 보여주는 각 컬럼들의 폭	
        , null // 컬럼중에서 숨기는	컬럼 지정	
        , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의	사용자 정의	폭
        , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
        , null // 윈도우 위치 Y좌표	
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , pAllSearch // 전체검색허용여부	("F")
        , "정비사원,사원코드,사원명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
    }
  } catch (e) {
    console.log("f_OpenCommonPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 정비시원 콜백
//-------------------------------------------------------------------------
scwin.udc_fixEmp_callbackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_txt_fixEmpNo, ed_txt_fixEmpNm);
};

//-------------------------------------------------------------------------
// 정비사원원 목록 그리드 정보변경전 변경전 데이터 정의 olddata
//-------------------------------------------------------------------------
scwin.gr_work_pl_onbeforeedit = function (rowIndex, columnIndex, value) {
  try {
    let colid = gr_work_pl.getColumnID(columnIndex);
    if (colid == "fixEmpNo") {
      scwin.oriFixEmpNo = value;
    }
    if (colid == "fixWrkPlCd") {
      scwin.oriFixWrkPlCd = value;
    }
  } catch (e) {
    console.log("gr_work_pl_onbeforeedit " + e);
  }
};

//-------------------------------------------------------------------------
// 그리드에서 사용자 /작업장 코드 선택시
//-------------------------------------------------------------------------
scwin.gr_work_pl_onafteredit = function (rowIndex, columnIndex, value, info) {
  try {
    let colid = gr_work_pl.getColumnID(columnIndex);

    //돋보기 클릭하는 컬럼인경우
    if (colid == "fixEmpNo" || colid == "fixWrkPlCd") {
      if (info.type === 'mousedown') {
        //입력에는 keydown, 이미지클릭시 mousedown 돋보기 클릭만 처리하기 위한 방어코드
        return false; // onafteredit 로직 중단
      }
    }
    switch (colid) {
      case "fixEmpNo":
        if (ds_work_pl.getCellData(rowIndex, colid) != "" && ds_work_pl.getCellData(rowIndex, colid) != scwin.oriFixEmpNo) {
          ds_work_pl.setCellData(rowIndex, "fixEmpNm", "");
          scwin.f_openCommPopUpGrid(1, rowIndex, 'T');
        } else if (ds_work_pl.getCellData(rowIndex, colid) == "") {
          ds_work_pl.setCellData(rowIndex, "fixEmpNo", "");
          ds_work_pl.setCellData(rowIndex, "fixEmpNm", "");
        }
        break;
      case "fixWrkPlCd":
        if (ds_work_pl.getCellData(rowIndex, colid) != "" && ds_work_pl.getCellData(rowIndex, colid) != scwin.oriFixWrkPlCd) {
          ds_work_pl.setCellData(rowIndex, "fixWrkPlNm", "");
          scwin.f_openCommPopUpGrid(2, rowIndex, 'T');
        } else if (ds_work_pl.getCellData(rowIndex, colid) == "") {
          ds_work_pl.setCellData(rowIndex, "fixWrkPlCd", "");
          ds_work_pl.setCellData(rowIndex, "fixWrkPlNm", "");
        }
        break;
    }

    //ASIS OnCloseUp(row,colid)
    if (colid == "homeClsCd") {
      ds_work_pl.setCellData(rowIndex, "fixWrkPlCd", "");
      ds_work_pl.setCellData(rowIndex, "fixWrkPlNm", "");
      ds_work_pl.setCellData(rowIndex, "wrkPartyCd", "");
    }
  } catch (e) {
    console.log("gr_work_pl_onafteredit : " + e);
  }
};

//-------------------------------------------------------------------------
// Popup 작업장 /사용자  그리드
//-------------------------------------------------------------------------
scwin.gr_work_pl_ontextimageclick = function (rowIndex, columnIndex) {
  try {
    let colid = gr_work_pl.getColumnID(columnIndex);
    switch (colid) {
      case "fixEmpNo":
        scwin.f_openCommPopUpGrid(1, rowIndex, 'F');
        break;
      case "fixWrkPlCd":
        scwin.f_openCommPopUpGrid(2, rowIndex, 'F');
        break;
    }
  } catch (e) {
    console.log("gr_work_pl_ontextimageclick : " + e);
  }
};

//-------------------------------------------------------------------------
// GRID1 EDIT 속성제어
//-------------------------------------------------------------------------
scwin.ds_work_pl_onrowpositionchange = function (info) {
  let RowStatus = ds_work_pl.getRowStatus(ds_work_pl.getRowPosition());
  if (RowStatus == "R") {
    gr_work_pl.setReadOnly("cell", ds_work_pl.getRowPosition(), "fixEmpNo", true); //Edit true
    gr_work_pl.setReadOnly("cell", ds_work_pl.getRowPosition(), "fixEmpNo", true); //Edit true
  } else {
    gr_work_pl.setReadOnly("cell", ds_work_pl.getRowPosition(), "fixEmpNo", false); //Edit none
    gr_work_pl.setReadOnly("cell", ds_work_pl.getRowPosition(), "fixEmpNo", false); //Edit none
  }
};

//-------------------------------------------------------------------------
// 엑셀다운로드드
//-------------------------------------------------------------------------
scwin.f_GridToExcel = function () {
  const options = {
    fileName: "정비사원.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,

    sheetName: "정비사원" //엑셀내 시트명 지정필요시
    ,

    bodyWordwrap: true // 줄바꿈
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_work_pl, options, infoArr);
};

//-------------------------------------------------------------------------
// 명칭 조회 Popup 처리 : 그리드에서 입력된 코드정보로 명을 조회
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = function (disGubun, row, pClose) {
  try {
    let pCode = "";
    let pName = "";
    switch (disGubun) {
      case 1:
        // 사용자 조회 팝업			
        pCode = ds_work_pl.getCellData(row, "fixEmpNo"); // 사용자ID
        pName = ds_work_pl.getCellData(row, "fixEmpNm"); // 사용자이름

        udc_comCodeGrid.setSelectId('retrieveUserInfo');
        udc_comCodeGrid.cfCommonPopUp(scwin.grd_fixEmp_callBackFunc // 콜백 함수
        , pCode // 화면에서의  Code Element의 Value
        , pName // 화면에서의  Name Element의 Value
        , pClose // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
        , "사용자정보,사용자ID,사용자명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case 2:
        // 작업장 코드팝업
        pCode = ds_work_pl.getCellData(row, "fixWrkPlCd");
        udc_comCodeGrid.setSelectId('retrieveWorkPlaceInfo');
        udc_comCodeGrid.cfCommonPopUp(scwin.grd_fixWrkPl_callBackFunc // 콜백 함수
        , pCode // 화면에서의  Code Element의 Value
        , pName // 화면에서의  Name Element의 Value
        , pClose // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
        , "작업장정보,작업장코드,작업장명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
    }
  } catch (e) {
    console.log("f_openCommPopUpGrid : " + e);
  }
};

//-------------------------------------------------------------------------
// 그리드 호출 사용자 콜백
//-------------------------------------------------------------------------
scwin.grd_fixEmp_callBackFunc = async function (ret) {
  if (ret != null && ret != undefined && ret[0] != "N/A") {
    for (let i = 0; i < ds_work_pl.getRowCount(); i++) {
      if (ds_work_pl.getCellData(i, "fixEmpNo") == ret[0]) {
        await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_032, "사용자"));
        return false;
      }
    }
    $c.gus.cfSetGridReturnValue($p, ret, ds_work_pl, ds_work_pl.getRowPosition(), "fixEmpNo", "fixEmpNm");
  }
};
//-------------------------------------------------------------------------
// 그리드 호출 작업장 코드 콜백
//-------------------------------------------------------------------------
scwin.grd_fixWrkPl_callBackFunc = function (ret) {
  $c.gus.cfSetGridReturnValue($p, ret, ds_work_pl, ds_work_pl.getRowPosition(), "fixWrkPlCd", "fixWrkPlNm");
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (value) {
  $c.gus.cfInitObjects($p, tb_est, null);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_est',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:90.00px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 100px;',submenuSize:'fixed',mandatory:'true',title:'작업부문',ref:'data:ds_re_pl.homeClsCd',emptyItem:'true','ev:onviewchange':'scwin.lc_homeClsCd_onviewchange'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkPlCd',style:'width:150px;',submenuSize:'fixed',ref:'data:ds_re_pl.wrkPlCd',visibleRowNum:'26',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_lux_wrkPlCd'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정비사원 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveFixEmpInfo',codeId:'ed_txt_fixEmpNo',validTitle:'',nameId:'ed_txt_fixEmpNm',style:'',btnId:'btn_fixEmp',id:'udc_fixEmp','ev:onblurCodeEvent':'scwin.udc_fixEmp_onblurCodeEvent','ev:onclickEvent':'scwin.udc_fixEmp_onclickEvent',refDataCollection:'ds_re_pl',code:'fixEmpNo',name:'fixEmpNm',objTypeCode:'key',objTypeName:'key'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사원구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixEmpClsCd',style:'width:150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'data:ds_re_pl.fixEmpClsCd'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixUseClsCd',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_re_pl.useYn',sortMethod:'ascending',sortOption:'value'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'정비사원 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_GridToExcel',gridID:'gr_work_pl'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_work_pl',id:'gr_work_pl',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',resize:'true',columnMove:'true',gridName:'정비사원',dataName:'정비사원',validFeatures:'ignoreStatus=no',validExp:'fixEmpNo:사용자ID:yes::key,fixEmpNm:정비사원명:yes::key,fixWrkPlCd:작업장코드:yes:number&length=3:key,fixWrkPlNm:작업장명:yes::key,wrkPartyCd:작업반:yes::key,fixEmpClsCd:사원구분:yes::key,','ev:onbeforeedit':'scwin.gr_work_pl_onbeforeedit','ev:onafteredit':'scwin.gr_work_pl_onafteredit','ev:ontextimageclick':'scwin.gr_work_pl_ontextimageclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'사용자ID',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'정비사원명',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'작업장코드',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'작업장명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'작업반',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'사원구분',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'사용여부',width:'100',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fixEmpNo',inputType:'textImage',width:'100',textAlign:'center',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixEmpNm',inputType:'text',width:'120',textAlign:'left',sortable:'false',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlCd',inputType:'textImage',width:'120',textAlign:'center',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlNm',inputType:'text',width:'100',textAlign:'left',sortable:'false',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPartyCd',inputType:'select',width:'100',textAlign:'left',sortable:'false',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixEmpClsCd',inputType:'select',width:'100',textAlign:'left',sortable:'false',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'useYn',inputType:'select',width:'100',textAlign:'left',sortable:'false',readOnly:'false',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',rowAddUserAuth:'C',rowDelUserAuth:'D',rowAddFunction:'scwin.f_WorkAddRow',rowDelFunction:'scwin.f_DelClass',gridID:'gr_work_pl'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]})