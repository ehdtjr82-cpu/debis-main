/*amd /ui/ds/lo/comninfomgnt/lo_100_07_07b.xml 33192 a68cc69c1e594fc997829f18560ac86b1d82951e3feffd0a88a773658f6b8618 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_up_basetrfList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'districtCd',name:'지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtNm',name:'지역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnpDtc',name:'이송거리',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_basetrfList',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_basetrfList_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'districtCd',name:'지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtNm',name:'지역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnpDtc',name:'이송거리',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tmp_basetrfList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'districtCd',name:'지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtNm',name:'지역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnpDtc',name:'이송거리',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'districtCd',name:'지역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.comninfomgnt.RetrieveOtherWarehouseTransportDistanceListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieve","key":"IN_DS1"},{"id":"ds_basetrfList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_basetrfList","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comninfomgnt.SaveOtherWarehouseTransportDistanceListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified", "id":"ds_basetrfList","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// function name : 
// function desc : 전역변수 선언
//------------------------------------------------------------------------- 
scwin.MSG_LO_CRM_001 = "변경 사항이 존재합니다. 진행하시겠습니까?";
scwin.MSG_LO_ERR_002 = "@행, @칼럼의 코드가 일치하지 않습니다.";
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// function name : f_defaultValue
// function desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  //항구지역 Focus
  ed_portDistrictCd.focus();
};

//-------------------------------------------------------------------------
// function name : f_Addrow
// function desc : 행추가
//-------------------------------------------------------------------------
scwin.f_addrow = function () {
  var rowIndex = ds_basetrfList.getRowCount();
  if (rowIndex == 0) {
    ds_basetrfList.insertRow();
  } else {
    $c.gus.cfCopyRecord($p, gr_basetrfList);
  }
  gr_basetrfList.setFocusedCell(rowIndex, "districtCd", true);
  tbx_totalRows.setValue(ds_basetrfList.getRowCount());
};

//-------------------------------------------------------------------------
// function name : f_Delrow
// function desc : 행삭제
//-------------------------------------------------------------------------
scwin.f_delrow = function () {
  var rowIndex = ds_basetrfList.getRowPosition();
  if ("C" == ds_basetrfList.getRowStatus(rowIndex)) {
    ds_basetrfList.removeRow(rowIndex);
  } else {
    ds_basetrfList.deleteRow(rowIndex);
  }
  tbx_totalRows.setValue(ds_basetrfList.getRowCount());
};

//-------------------------------------------------------------------------
// function name : f_undo
// function desc : 취소
//-------------------------------------------------------------------------
scwin.f_undo = function () {
  var rowIndex = ds_basetrfList.getRowPosition();
  if ("C" == ds_basetrfList.getRowStatus(rowIndex)) {
    ds_basetrfList.removeRow(rowIndex);
  } else {
    ds_basetrfList.undoRow(rowIndex);
  }
  tbx_totalRows.setValue(ds_basetrfList.getRowCount());
};

//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// function name : f_validChk
// function desc : 필수 조회 조건 check
//-------------------------------------------------------------------------
scwin.f_validChk = async function () {
  if (ds_basetrfList.getModifiedIndex().length != 0) {
    if (!(await $c.win.confirm($p, scwin.MSG_LO_CRM_001))) {
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  ds_basetrfList.removeAll(); //out 초기화!
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// function name : f_upload
// function desc : csv file UpLoad
//-------------------------------------------------------------------------
scwin.f_upload = function () {
  let options = {
    headerExist: 1,
    header: 1,
    startRowIndex: 0
  };

  //ds_up_basetrfList.removeAll();
  ds_basetrfList.setJSON([]);
  udc_topGrdBtn.uploadGridViewExcel(gr_tmp_basetrfList, options);
};
scwin.gr_tmp_basetrfList_onfilereadend = async function () {
  var rtnList = "";
  for (var i = 0; i < ds_tmp_basetrfList.getRowCount(); i++) {
    ds_basetrfList.insertRow();

    //항구지역조회
    if (ds_tmp_basetrfList.getCellData(i, "districtCd") != "") {
      udc_comCode_Grid.setSelectId("retrieveDistrictList");
      rtnList = await udc_comCode_Grid.cfCommonPopUpAsync(null, ds_tmp_basetrfList.getCellData(i, "districtCd"), '', 'T', '5', null, null, null, ',,PCD', null, null, null, null, null, 'F', '항구지역조회,지역코드,지역명', 'T');
      if (rtnList == null || rtnList[0].trim() == "N/A") {
        ds_basetrfList.setCellData(i, "districtCd", "");
        ds_basetrfList.setCellData(i, "districtNm", "");
        $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_002, new Array(i, "항구지역"));
        ds_basetrfList.removeAll();
        ds_tmp_basetrfList.removeAll();
        return;
      } else {
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_basetrfList, i, "districtCd", "districtNm");
      }
    }

    //작업장조회
    if (ds_tmp_basetrfList.getCellData(i, "wrkPlCd") != "") {
      udc_comCode_Grid.setSelectId("retrieveWrkPlInfo3");
      rtnList = await udc_comCode_Grid.cfCommonPopUpAsync(null, ds_tmp_basetrfList.getCellData(i, "wrkPlCd"), '', 'T', '5', null, null, null, 'W,T', null, null, null, null, null, 'F', '작업장조회,작업장코드,작업장명', 'T');
      if (rtnList != null && rtnList[0].trim() == "N/A") {
        ds_basetrfList.getCellData(i, "wrkPlCd", "");
        ds_basetrfList.getCellData(i, "wrkPlNm", "");
        $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_002, new Array(i, "작업장"));
        ds_basetrfList.removeAll();
        ds_tmp_basetrfList.removeAll();
        return;
      } else {
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_basetrfList, i, "wrkPlCd", "wrkPlNm");
      }
    }
    ds_basetrfList.setCellData(i, "trnpDtc", ds_tmp_basetrfList.getCellData(i, "trnpDtc"));
  }
  ds_tmp_basetrfList.removeAll();
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (await scwin.f_ReqFieldChk()) {
    if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
      $c.sbm.execute($p, sbm_save);
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_ReqFieldChk
// function desc : 필수 입력항목 체크
//-------------------------------------------------------------------------
scwin.f_ReqFieldChk = async function () {
  if (ds_basetrfList.getModifiedJSON().length < 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["타창고 이송거리 관리"]); //"@은(는) 변경된 사항이 없습니다.";
    return false;
  }
  if (!(await $c.gus.cfValidate($p, [gr_basetrfList], null, true))) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// function name : f_openCommonPopUp
// function desc : popup
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  //var rtnList = new Array();

  switch (disGubun) {
    //항구지역 조회	    
    case 1:
      udc_portDistrictCd.cfCommonPopUp(scwin.udc_portDistrictCd_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , '지역코드,지역명' // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , ',,PCD' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , '항구지역조회,지역코드,지역명' // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;

    //작업장 ( 작업장구분이 :W(창고),  작업장소유구분코드: T (타사) )
    case 2:
      udc_wrkPlCd.cfCommonPopUp(scwin.udc_wrkPlCd_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , 'W,T' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , '작업장조회,작업장코드,작업장명' // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
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
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 그리드에서 입력된 코드정보로  팝업조회 - 작업장, 품목
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = function (disGubun, row, pCode, pName, pClose) {
  scwin.isPopupOpen = true;
  return new Promise(function (resolve) {
    let settled = false;
    function safeResolve(data) {
      if (settled) return;
      settled = true;
      scwin.isPopupOpen = false;

      // pendingClick 처리 (여기서 실행)
      if (pClose === 'T' && data && data[0] && scwin.pendingClick) {
        let p = scwin.pendingClick;
        scwin.pendingClick = null;
        scwin.f_openCommPopUpGrid(disGubun, p.row, pCode, pName, 'F');
      } else {
        scwin.pendingClick = null;
      }
      resolve(data);
    }
    switch (disGubun) {
      //항구지역 조회	    
      case 1:
        ds_basetrfList.setCellData(row, "districtCd", "");
        ds_basetrfList.setCellData(row, "districtNm", "");
        udc_comCode_Grid.setSelectId("retrieveDistrictList");
        udc_comCode_Grid.cfCommonPopUp(function (rtnList) {
          let row = ds_basetrfList.getRowPosition();
          if (rtnList != null && rtnList[0].trim() != "N/A") {
            $c.gus.cfSetGridReturnValue($p, rtnList, ds_basetrfList, row, "districtCd", "districtNm");
          } else {
            ds_basetrfList.setCellData(row, "districtCd", "");
            ds_basetrfList.setCellData(row, "districtNm", "");
          }
          safeResolve(rtnList);
        }, pCode // 화면에서의 ??? Code Element의	Value
        , pName // 화면에서의 ??? Name Element의	Value
        , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
        , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
        , '지역코드,지역명' // Title순서	
        , null // 보여주는 각 컬럼들의 폭	
        , null // 컬럼중에서 숨기는	컬럼 지정	
        , ',,PCD' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의	사용자 정의	폭
        , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
        , null // 윈도우 위치 Y좌표	
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , 'F' // 전체검색허용여부	("F")
        , '항구지역조회,지역코드,지역명' // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
        );
        break;
      case 2:
        //작업장 ( 작업장구분이 :W(창고),  작업장소유구분코드: T (타사) )   
        ds_basetrfList.setCellData(row, "wrkPlCd", "");
        ds_basetrfList.setCellData(row, "wrkPlNm", "");
        udc_comCode_Grid.setSelectId("retrieveWrkPlInfo3");
        udc_comCode_Grid.cfCommonPopUp(function (rtnList) {
          let row = ds_basetrfList.getRowPosition();
          if (rtnList != null && rtnList[0].trim() != "N/A") {
            $c.gus.cfSetGridReturnValue($p, rtnList, ds_basetrfList, row, "wrkPlCd", "wrkPlNm");
          } else {
            ds_basetrfList.setCellData(row, "wrkPlCd", "");
            ds_basetrfList.setCellData(row, "wrkPlNm", "");
          }
          safeResolve(rtnList);
        }, pCode // 화면에서의 ??? Code Element의	Value
        , pName // 화면에서의 ??? Name Element의	Value
        , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
        , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서	
        , null // 보여주는 각 컬럼들의 폭	
        , null // 컬럼중에서 숨기는	컬럼 지정	
        , 'W,T' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의	사용자 정의	폭
        , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
        , null // 윈도우 위치 Y좌표	
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , 'F' // 전체검색허용여부	("F")
        , '작업장조회,작업장코드,작업장명' // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
        );
        break;
      default:
        break;
    }
    // X닫힘 감지
    try {
      const timeout = setTimeout(function () {
        if (!settled) {
          safeResolve(null);
        }
      }, 700);
    } catch (e) {}
  });
};

// 검색조건 이벤트
scwin.udc_portDistrictCd_onviewchangeNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_portDistrictNm, ed_portDistrictCd, 1, false);
};
scwin.udc_portDistrictCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_portDistrictCd, ed_portDistrictNm, 1, true);
};
scwin.udc_portDistrictCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_portDistrictCd.getValue(), ed_portDistrictNm.getValue(), 'F', 'F');
};
scwin.udc_portDistrictCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_portDistrictCd, ed_portDistrictNm);
};
scwin.udc_wrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), 'F', 'F');
};
scwin.udc_wrkPlCd_onviewchangeNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlNm, ed_wrkPlCd, 2, false);
};
scwin.udc_wrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, ed_wrkPlNm, 2, true);
};
scwin.udc_wrkPlCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, ed_wrkPlNm);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  var rowcnt = ds_basetrfList.getRowCount();
  if (rowcnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    ds_basetrfList.setRowPosition(0);
    gr_basetrfList.setFocusedCell(0, 0);
  }
  tbx_totalRows.setValue(rowcnt);
};
scwin.btn_Srch_onclick = async function (e) {
  if (!(await scwin.f_validChk())) {
    return;
  } else {
    scwin.f_Retrieve();
  }
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.sbm_retrieve_submiterror = function (e) {};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다 	
    scwin.f_Retrieve();
  }
};
scwin.sbm_save_submiterror = function (e) {};
scwin.olddata = "";
scwin.gr_basetrfList_onbeforeedit = function (rowIndex, columnIndex, value) {
  scwin.olddata = value;
};
scwin.isPopupOpen = false;
scwin.gr_basetrfList_onafteredit = function (rowIndex, columnIndex, value) {
  let colID = ds_basetrfList.getColumnID(columnIndex);
  let olddata = scwin.olddata;
  switch (colID) {
    case "districtCd":
      if (value != "" && value != olddata) {
        ds_basetrfList.setCellData(rowIndex, "districtCd", "");
        ds_basetrfList.setCellData(rowIndex, "districtNm", "");
        scwin.f_openCommPopUpGrid(1, rowIndex, value, '', 'T');
      } else if (value == "") {
        ds_basetrfList.setCellData(rowIndex, "districtCd", "");
        ds_basetrfList.setCellData(rowIndex, "districtNm", "");
      }
      break;
    case "districtNm":
      if (value != "" && value != olddata) {
        ds_basetrfList.setCellData(rowIndex, "districtCd", "");
        ds_basetrfList.setCellData(rowIndex, "districtNm", "");
        scwin.f_openCommPopUpGrid(1, rowIndex, '', value, 'T');
      } else if (value == "") {
        ds_basetrfList.setCellData(rowIndex, "districtCd", "");
        ds_basetrfList.setCellData(rowIndex, "districtNm", "");
      }
      break;
    case "wrkPlCd":
      if (value != "" && value != olddata) {
        ds_basetrfList.setCellData(rowIndex, "wrkPlCd", "");
        ds_basetrfList.setCellData(rowIndex, "wrkPlNm", "");
        scwin.f_openCommPopUpGrid(2, rowIndex, value, '', 'T');
      } else if (value == "") {
        ds_basetrfList.setCellData(rowIndex, "wrkPlCd", "");
        ds_basetrfList.setCellData(rowIndex, "wrkPlNm", "");
      }
      break;
    case "wrkPlNm":
      if (value != "" && value != olddata) {
        ds_basetrfList.setCellData(rowIndex, "wrkPlCd", "");
        ds_basetrfList.setCellData(rowIndex, "wrkPlNm", "");
        scwin.f_openCommPopUpGrid(2, rowIndex, '', value, 'T');
      } else if (value == "") {
        ds_basetrfList.setCellData(rowIndex, "wrkPlCd", "");
        ds_basetrfList.setCellData(rowIndex, "wrkPlNm", "");
      }
      break;
  }
};
scwin.ds_basetrfList_oncelldatachange = function (info) {
  var rowIndex = info.rowIndex;
  var colID = info.colID;
  var newValue = info.newValue;
  if (colID == "trnpDtc" && newValue == "") {
    ds_basetrfList.setCellData(rowIndex, colID, "0");
  }
};
scwin.pendingClick = null;
scwin.gr_basetrfList_ontextimageclick = function (rowIndex, columnIndex) {
  // 팝업 열려있으면 나중에 실행
  if (scwin.isPopupOpen) {
    scwin.pendingClick = {
      rowIndex,
      columnIndex
    };
    return;
  }
  switch (gr_basetrfList.getColumnID(columnIndex)) {
    case "districtNm":
      scwin.f_openCommPopUpGrid(1, rowIndex, gr_basetrfList.getCellData(rowIndex, "districtCd"), gr_basetrfList.getCellData(rowIndex, "districtNm"), 'F');
      break;
    case "wrkPlNm":
      scwin.f_openCommPopUpGrid(2, rowIndex, gr_basetrfList.getCellData(rowIndex, "wrkPlCd"), gr_basetrfList.getCellData(rowIndex, "wrkPlNm"), 'F');
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'tbl_search',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항구지역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'지역코드',style:'',id:'udc_portDistrictCd',codeId:'ed_portDistrictCd',btnId:'btn_portDistrictCd',nameId:'ed_portDistrictNm',selectID:'retrieveDistrictList','ev:onclickEvent':'scwin.udc_portDistrictCd_onclickEvent',refDataCollection:'ds_retrieve',code:'districtCd','ev:onviewchangeNameEvent':'scwin.udc_portDistrictCd_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_portDistrictCd_onblurCodeEvent',name:'districtNm',UpperFlagCode:'1',maxlengthCode:'3',allowCharCode:'A-Za-z0-9',maxlengthName:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_wrkPlCd',codeId:'ed_wrkPlCd',nameId:'ed_wrkPlNm',selectID:'retrieveWrkPlInfo3',code:'wrkPlCd',refDataCollection:'ds_retrieve','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCd_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent',name:'wrkPlNm',btnId:'btn_wrkPlCd',UpperFlagCode:'1',maxlengthCode:'6',allowCharCode:'A-Za-z0-9',maxlengthName:'50'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Srch',style:'',type:'button','ev:onclick':'scwin.btn_Srch_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'Y',btnUser:'N',gridUpFn:'scwin.f_upload',gridID:'gr_basetrfList',id:'udc_topGrdBtn',grdDownOpts:'{"fileName":"타창고 이송거리 관리.xlsx", "sheetName":"타창고 이송거리 관리"}',gridDownUserAuth:'X',gridUpUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_basetrfList',id:'gr_basetrfList',style:'',rowStatusVisible:'true','ev:onbeforeedit':'scwin.gr_basetrfList_onbeforeedit','ev:onafteredit':'scwin.gr_basetrfList_onafteredit','ev:ontextimageclick':'scwin.gr_basetrfList_ontextimageclick',visibleRowNum:'16',dataName:'타창고이송거리목록',validFeatures:'ignoreStatus=no',validExp:'districtCd:항구지역 코드:yes:maxLength=3:key,                                wrkPlCd:작업장 코드:yes:maxLength=5:key,                                trnpDtc:거리(KM):yes:minNumber=1'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'항구지역',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'작업장',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'거리(KM)',width:'200',colSpan:'',rowSpan:'2',class:'col-type1'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'코드',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column29',value:'항구지역명',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'코드',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column27',value:'작업장명',displayMode:'label',class:'col-type1'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'districtCd',inputType:'text',style:'',value:'',width:'100',maxLength:'7',textAlign:'left',allowChar:'A-Za-z0-9',class:'req'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'districtNm',inputType:'textImage',style:'',value:'',width:'180',textAlign:'left',class:'req',maxLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlCd',inputType:'text',style:'',value:'',width:'100',maxLength:'7',textAlign:'left',allowChar:'A-Za-z0-9',class:'req'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'textImage',style:'',value:'',width:'180',textAlign:'left',class:'req',maxLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trnpDtc',inputType:'text',style:'',value:'',width:'200',maxLength:'5',allowChar:'0-9',textAlign:'right',min:'1',dataType:'number',class:'req',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_addRow',rowAddFunction:'scwin.f_addrow',btnCancelYn:'Y',btnDelYn:'N',rowDelFunction:'scwin.f_delrow',cancelFunction:'scwin.f_undo',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:gridView',A:{dataList:'data:ds_tmp_basetrfList',id:'gr_tmp_basetrfList',visible:'false','ev:onfilereadend':'scwin.gr_tmp_basetrfList_onfilereadend'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'항구지역',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'작업장',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'거리(KM)',width:'200',colSpan:'',rowSpan:'2',class:'col-type1'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'코드',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column29',value:'항구지역명',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'코드',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column27',value:'작업장명',displayMode:'label',class:'col-type1'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'districtCd',inputType:'text',style:'',value:'',width:'100',maxLength:'7',textAlign:'left',allowChar:'A-Za-z0-9',class:'req'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'districtNm',inputType:'textImage',style:'',value:'',width:'180',textAlign:'left',class:'req',maxLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlCd',inputType:'text',style:'',value:'',width:'100',maxLength:'7',textAlign:'left',allowChar:'A-Za-z0-9',class:'req'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'textImage',style:'',value:'',width:'180',textAlign:'left',class:'req',maxLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trnpDtc',inputType:'text',style:'',value:'',width:'200',maxLength:'5',textAlign:'right',min:'1',dataType:'number',class:'req',displayFormatter:'scwin.displayTrnpDt'}}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; display:none;',id:'udc_comCode_Grid'}}]}]}]}]}]})