/*amd /ui/il/comm/code/co_109_01_01b.xml 26539 453c3de46ae0278f4d8867b5630a8286886446c060f65f820f3a66e748fc9c0b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_SearchParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cust',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_cust_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'사원명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.comm.code.RetrieveClntCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_SearchParam","key":"IN_DS1"},{"id":"ds_cust","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_cust","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.comm.code.SaveClntCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_cust","key":"IN_DS2"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.preRowPos = 0;
scwin.txt_countRow = "";
scwin.txt_userid = "";
scwin.selectedRow = "";
//scwin.saveChk = "N";

scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.userId = memJson.userId;
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    scwin.f_DefaultValue();
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// function name :  f_DefaultValue( gubun1, gubun2 )
// function desc : 화면 open시 초기 데이타 setting
// gubun1 : INIT(초기화), RETRIEVE(조회모드), UPDATE(수정모드), COPY(복사모드)
// gubun2 : INIT(초기화), CREATE(신규모드), ODRKNDCD(오더종류 변경되는 경우)
//-------------------------------------------------------------------------
scwin.f_DefaultValue = function () {
  //ds_SearchParam.AddRow();
  $c.gus.cfDisableBtn($p, [btn_save]);
  ed_clntNo.focus();
};

//-------------------------------------------------------------------------
//조회조건 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_searchCondition, null);
  ed_clntNo.focus();
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  //ds_SearchParam.clearData();
  //ds_SearchParam.AddRow();
  dma_SearchParam.set("clntNo", ed_clntNo.getValue().trim()); // 대표거래처코드
  //tr_retrieve.Post();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_Retrieve2 = function () {
  //ds_SearchParam.clearData();
  //ds_SearchParam.AddRow();
  dma_SearchParam.set("clntNo", ed_clntNo.getValue().trim()); // 대표거래처코드
  //tr_retrieve.Post();
  //scwin.saveChk = "Y";
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// function name : f_AddRow
// function desc : 그리드 칼럼 추가
//-------------------------------------------------------------------------																	
scwin.f_AddRow = function () {
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
  ds_cust.insertRow();
  gr_custList.setFocusedCell(ds_cust.getRowCount() - 1, 0);
  scwin.preRowPos = ds_cust.getRowPosition();
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_DelRow = function () {
  //ds_cust.DeleteMarked();
  //ds_cust.undoRow(ds_cust.getRowPosition());
  if (ds_cust.getRowStatus(ds_cust.getRowPosition()) == "C") {
    ds_cust.removeRow(ds_cust.getRowPosition());
  } else {
    var row = ds_cust.getRowPosition();
    ds_cust.deleteRow(ds_cust.getRowPosition());
    ds_cust.setRowPosition(row);
  }
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_Undo = function () {
  //ds_cust.Undo(ds_cust.RowPosition);
  //ds_cust.undoRow(ds_cust.getRowPosition());
  if (ds_cust.getRowStatus(ds_cust.getRowPosition()) == "C") {
    ds_cust.removeRow(ds_cust.getRowPosition());
  } else {
    ds_cust.undoRow(ds_cust.getRowPosition());
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  preRowPos = ds_cust.RowPosition;
  if (await scwin.f_ReqFieldChk()) {
    var chk = await $c.win.confirm($p, "Do you wish to save?");
    if (chk) {
      //tr_save.Post();
      $c.sbm.execute($p, sbm_save);
    }
  }
};
scwin.f_ReqFieldChk = async function () {
  //필수입력항목 체크
  var validArry = [{
    id: "clntNo",
    name: "Customer",
    mandatory: true,
    key: true
  }];
  let gridName = "DeptCode List";
  if (!(await $c.gus.cfValidateGrid($p, gr_custList, null, null, validArry, gridName))) {
    return false;
  }

  /*
      var chk = $c.gus.cfValidate([gr_custList]);
      if (!chk) {
          return false;
      }
  */
  return true;
};

//-------------------------------------------------------------------------
// function	name : f_PopUp
// function	desc : popup
//-------------------------------------------------------------------------
scwin.f_PopUp = function (pPopGubun, pWinCloseTF, pAllSearchTF) {
  var rtnList = new Array();
  switch (pPopGubun) {
    case "Customer":
      udc_clntNo.ilCommonPopUp(scwin.callbackEngClntInfo,
      // XML상의 SELECT ID	                                                   		
      ed_clntNo.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      ed_clntNm.getValue(),
      // 화면에서의 ??? Name Element의	Value                                  
      pWinCloseTF,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '2',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Code,Name',
      // Title순서	                                                           
      '140,300',
      // 보여주는 각 컬럼들의 폭	                                               
      "3,4,5,6,7,8,9,10",
      // 컬럼중에서 숨기는	컬럼 지정	                                       
      null,
      // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
      '500',
      // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
      '500',
      // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
      null,
      // 윈도우 위치 Y좌표	                                                   
      null,
      // 윈도우 위치 X좌표                                                       
      null,
      // 중복체크여부	("F")                                                      
      pAllSearchTF,
      // 전체검색허용여부	("F")                                                  
      "Customer,Code,Name"); // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")  
      //cfSetReturnValue(rtnList, ed_clntNo, txt_clntNm);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// function	name : f_PopUpGrid
// function	desc : Grid popup
//-------------------------------------------------------------------------
scwin.f_PopUpGrid = function (disGubun, row, pWinCloseTF, pAllSearchTF, colid, colnmid) {
  var rtnList;
  scwin.selectedRow = row;
  switch (disGubun) {
    case "Customer":
      udc_ilcomCode.setSelectId("retrieveEngClntInfo");
      udc_ilcomCode.ilCommonPopUp(scwin.callbackEngClntInfo2, ds_cust.getCellData(row, "clntNo") //코드
      , '' //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Customer Code,Customer Name," // Title순서
      , '130,300' // 보여주는 각 컬럼들의 폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , '500' // POP-UP뛰을때 원도우의	사용자 정의	폭
      , '500' // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Customer Search,Customer Code,Customer Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      //cfSetGridReturnValue(rtnList, ds_cust, row, "clntNo", "clntNm",[""]);
      break;
    case "Dept":
      udc_ilcomCode.setSelectId("retrieveOpDeptCdInfo");
      udc_ilcomCode.ilCommonPopUp(scwin.callbackOpDeptCdInfo // XML상의 SELECT ID	                                                   		
      , ds_cust.getCellData(row, colid) //코드
      , '' //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Dept Code,Dept Name," // Title순서
      , '130,300' // 보여주는 각 컬럼들의 폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , '500' // POP-UP뛰을때 원도우의	사용자 정의	폭
      , '500' // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Dept Search,Dept Code,Dept Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      //cfSetGridReturnValue(rtnList, ds_cust, row, colid, colnmid,[""]);
      break;
    case "Emp":
      udc_ilcomCode.setSelectId("retrieveEmpInfo");
      udc_ilcomCode.ilCommonPopUp(scwin.callbackEmpInfo // XML상의 SELECT ID	                                                   		
      , ds_cust.getCellData(row, colid) //코드
      , '' //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Code, Name," // Title순서
      , '80,230' // 보여주는 각 컬럼들의 폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , '500' // POP-UP뛰을때 원도우의	사용자 정의	폭
      , '500' // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Salesman,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      //cfSetGridReturnValue(rtnList, ds_cust, row, colid, colnmid,[""]);
      break;
  }
};
scwin.callbackEngClntInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
};
scwin.callbackEngClntInfo2 = function (rtnList) {
  console.log(rtnList);
  if (rtnList != null && rtnList != "N/A") {
    $c.gus.cfSetGridReturnValue($p, rtnList, ds_cust, scwin.selectedRow, "clntNo", "clntNm", [""]);
  } else {
    ds_cust.setCellData(scwin.selectedRow, "clntNo", "");
    ds_cust.setCellData(scwin.selectedRow, "clntNm", "");
  }
};
scwin.callbackOpDeptCdInfo = function (rtnList) {
  if (rtnList != null && rtnList != "N/A") {
    $c.gus.cfSetGridReturnValue($p, rtnList, ds_cust, scwin.selectedRow, "deptCd", "deptNm", [""]);
  } else {
    ds_cust.setCellData(scwin.selectedRow, "deptCd", "");
    ds_cust.setCellData(scwin.selectedRow, "deptNm", "");
  }
};
scwin.callbackEmpInfo = function (rtnList) {
  if (rtnList != null && rtnList != "N/A") {
    $c.gus.cfSetGridReturnValue($p, rtnList, ds_cust, scwin.selectedRow, "empNo", "empNm", [""]);
  } else {
    ds_cust.setCellData(scwin.selectedRow, "empNo", "");
    ds_cust.setCellData(scwin.selectedRow, "empNm", "");
  }
};

//-------------------------------------------------------------------------
// function	name : f_ChkPopUp
// function	desc : 팝업	처리시 검색된 데이터인 경우	팝업 처리 안함.
//------------------------------------------------------------------------
scwin.f_ChkPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_PopUp(disGubun, 'T', 'T', 'F');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_PopUp(disGubun, 'T', 'T', 'F');
};

//-------------------------------------------------------------------------
// function	name : f_BeforePopUpEd
// function	desc : 공통팝업 열기 전에 체크- EMEDIT onKillFocus 이벤트	발생시
//					nmObj-코드명(text),	cdObj-코드(emedit),	gubun1
//-------------------------------------------------------------------------
scwin.f_BeforePopUpEd = function (nmObj, cdObj, gubun1, pWinCloseTF, pAllSearchTF) {
  var cdObjVal = cdObj.getValue().trim();
  //if(cdObj.Modified){
  if (cdObjVal == "") {
    nmObj.value = "";
  } else {
    nmObj.value = "";
    scwin.f_PopUp(gubun1, pWinCloseTF, pAllSearchTF);
  }
  //}
};
scwin.sbm_retrieve_submitdone = function (e) {
  var rowCnt = ds_cust.getRowCount();
  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  if (rowCnt > 0) {
    $c.gus.cfEnableBtnOnly($p, [btn_save]);
  } else {
    $c.win.alert($p, E_MSG_CM_WRN_002);
  }
  /*
      if(scwin.saveChk == "Y") {
          gr_custList.setFocusedCell(ds_cust.getRowCount()-1, 0);
          scwin.saveChk = "N";
      }
  */
  spa_cnt.setValue(ds_cust.getRowCount());
};
scwin.sbm_save_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, E_MSG_CM_INF_001); // 성공적으로 저장하였습니다
    //scwin.f_Retrieve2();
    ds_cust.reform();
  }

  //$c.win.alert("Data was saved successfully.");
};
scwin.gr_custList_ontextimageclick = function (rowIndex, columnIndex) {
  var rtnList = new Array();
  var pCode = "";
  var pName = "";
  var columnId = gr_custList.getColumnID(columnIndex);
  switch (columnId) {
    case "clntNo":
      scwin.f_PopUpGrid("Customer", rowIndex, "F", "F");
      break;
    case "deptCd":
      scwin.f_PopUpGrid("Dept", rowIndex, "F", "F", columnId, "deptNm");
      break;
    case "empNo":
      scwin.f_PopUpGrid("Emp", rowIndex, "F", "F", columnId, "empNm");
      break;
    default:
      break;
  }
};
scwin.ds_cust_oncelldatachange = function (info) {
  // {realRowIndex: 2, rowIndex: 2, colID: 'leng', oldValue: '4', newValue: '5'}

  var columnId = info.colID;
  var rowIndex = info.rowIndex;
  var olddata = info.oldValue;
  switch (columnId) {
    case "clntNo":
      if (ds_cust.getCellData(rowIndex, columnId).trim() == "") {
        ds_cust.setCellData(rowIndex, "clntNm", "");
      }
      //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
      if (ds_cust.getCellData(rowIndex, columnId).trim() != "" && ds_cust.getCellData(rowIndex, columnId) != olddata) {
        scwin.f_PopUpGrid("Customer", rowIndex, "T", "F");
      }
      break;
    case "deptCd":
      //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
      if (ds_cust.getCellData(rowIndex, columnId).trim() == "") {
        ds_cust.setCellData(rowIndex, "deptNm", "");
      }
      if (ds_cust.getCellData(rowIndex, columnId).trim() != "" && ds_cust.getCellData(rowIndex, columnId) != olddata) {
        scwin.f_PopUpGrid("Dept", rowIndex, "T", "F", columnId, "deptNm");
      }
      break;
    case "empNo":
      //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
      if (ds_cust.getCellData(rowIndex, columnId).trim() == "") {
        ds_cust.setCellData(rowIndex, "empNm", "");
      }
      if (ds_cust.getCellData(rowIndex, columnId).trim() != "" && ds_cust.getCellData(rowIndex, columnId) != olddata) {
        scwin.f_PopUpGrid("Emp", rowIndex, "T", "F", columnId, "empNm");
      }
      break;
    default:
      break;
  }
};
scwin.gr_custList_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == 'clntNo') {
    if (ds_cust.getRowStatus(rowIndex) == "C") {
      //gr_custList.ColumnProp("clntNo","Edit")="Numeric";
      gr_custList.setReadOnly("cell", rowIndex, columnId, false);
    } else {
      //gr_custList.ColumnProp("clntNo","Edit")="None";
      gr_custList.setReadOnly("cell", rowIndex, columnId, true);
    }
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_addRowIntnl_onclick = function (e) {
  scwin.f_AddRow();
};
scwin.btn_deleteRowIntnl_onclick = function (e) {
  scwin.f_DelRow();
};
scwin.btn_undoMarkIntnl_onclick = function (e) {
  scwin.f_Undo();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_PopUp('Customer', 'F', 'T');
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_BeforePopUpEd(ed_clntNm, ed_clntNo, "Customer", "T", "T");
};
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  scwin.f_ChkPopUp(ed_clntNm, ed_clntNo, 'Customer', false);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_clntNo',btnId:'btn_clntNo',id:'udc_clntNo',nameId:'ed_clntNm',selectID:'retrieveEngClntInfo',code:'clntNo',refDataCollection:'dma_SearchParam','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent',allowCharCode:'0-9,A-Z,a-z',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{btnId:'btn_ilcomCd',codeId:'ed_ilcomCd',hideName:'Y',id:'udc_ilcomCode',nameId:'ed_ilcomNm',popupID:'',selectID:'',style:'display:none'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_cust',id:'gr_custList',style:'',visibleRowNum:'16',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_custList_ontextimageclick','ev:oncellclick':'scwin.gr_custList_oncellclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'Customer',width:'140',colSpan:'2',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'Department',width:'140',colSpan:'2',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'Saleman',width:'140',colSpan:'2',class:'txt-blue',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column30',value:'Code',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'230',inputType:'text',id:'column29',value:'Name',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column28',value:'Code',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column27',value:'Name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column26',value:'Code',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',value:'Name',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'textImage',width:'80',validateOnInput:'true',dataType:'number',allowChar:'0-9',displayFormat:'######',maxLength:'6',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'230',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deptCd',inputType:'textImage',width:'80',maxLength:'4',textAlign:'left',allowChar:'0-9,A-Z,a-z'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deptNm',inputType:'text',width:'150',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empNo',inputType:'textImage',width:'80',maxLength:'6',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empNm',inputType:'text',width:'120',readOnly:'true',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_addRowIntnl',style:'',type:'button','ev:onclick':'scwin.btn_addRowIntnl_onclick',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Addition'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_deleteRowIntnl',style:'',type:'button','ev:onclick':'scwin.btn_deleteRowIntnl_onclick',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_undoMarkIntnl',style:'',type:'button','ev:onclick':'scwin.btn_undoMarkIntnl_onclick',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{btnId:'btn_ilcomCd',codeId:'ed_ilcomCd',hideName:'Y',id:'udc_ilcomCode2',nameId:'ed_ilcomNm',popupID:'',selectID:'',style:'display:none'}}]}]}]}]}]}]}]}]})