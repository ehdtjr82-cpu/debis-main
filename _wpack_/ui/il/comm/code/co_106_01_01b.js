/*amd /ui/il/comm/code/co_106_01_01b.xml 26465 b7132c65238a76eac087394791f8595336c6eb55697f2862d4f2878585576841 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_SearchParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Dept',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'airDept',name:'항공 부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'airDeptNm',name:'항공 부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrDept',name:'컨테이너 부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrDeptNm',name:'컨테이너 부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkDept',name:'벌크 부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkDeptNm',name:'벌크 부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'사용자 ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'falg',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ccfee',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ccfAmt',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_save',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'airDept',name:'항공 부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'airDeptNm',name:'항공 부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrDept',name:'컨테이너 부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrDeptNm',name:'컨테이너 부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkDept',name:'벌크 부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkDeptNm',name:'벌크 부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'사용자 ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'falg',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ccfee',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ccfAmt',name:'name12',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.comm.code.RetrieveDeptCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_SearchParam", "key":"IN_DS1"}, {"id":"ds_Dept", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_Dept","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.comm.code.SaveDeptCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Dept", "key":"IN_DS2"}]',target:'data:json,{}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//---------------------------------------------------------
// 전역변수
//---------------------------------------------------------

scwin.txt_countRow = "";
scwin.txt_userId = "";
scwin.preRowPos = 0;
scwin.selectedColIndex = 0;
scwin.onpageload = function () {
  // scwin.f_DefaultValue();
  btn_save.setDisabled(true);
  // $c.gus.cfSetIMEModeActiveObjects();
};

//---------------------------------------------------------
// UDC
//---------------------------------------------------------    
scwin.onUdcCompleted = function () {
  ed_clntNo.focus();
};

//---------------------------------------------------------
// 사용자 함수
//---------------------------------------------------------
scwin.f_PopUp = function (pPopGubun, pWinCloseTF, pAllSearchTF) {
  udc_clnt.setSelectId("retrieveEngClntInfo"); // XML상의 SELECT ID	
  udc_clnt.ilCommonPopUp(scwin.udc_clnt_callBackFunc,
  // 콜백 함수                                                                         		
  ed_clntNo.getValue().trim(),
  // 화면에서의 ??? Code Element의	Value                                  
  txt_clntNm.getValue(),
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
  "Departure,Code,Name");
};
scwin.udc_clnt_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, txt_clntNm);
};
scwin.f_PopUpGrid = function (disGubun, row, pWinCloseTF, pAllSearchTF, colid, colnmid) {
  switch (disGubun) {
    case "Customer":
      udc_clnt.setSelectId("retrieveEngClntInfo"); // XML상의 SELECT ID	
      udc_clnt.ilCommonPopUp(scwin.gridCustPopupCallback // 콜백 함수      
      , ds_Dept.getCellData(row, "clntNo") //코드
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
      // cfSetGridReturnValue(rtnList, ds_Dept, row, "clntNo", "clntNm", [""]);
      break;
    case "Dept":
      udc_clnt.setSelectId("retrieveOpDeptCdInfo"); // XML상의 SELECT ID	
      udc_clnt.ilCommonPopUp(scwin.gridDeptPopupCallback // 콜백 함수                                                  		
      , ds_Dept.getCellData(row, colid) //코드
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
      // cfSetGridReturnValue(rtnList, ds_Dept, row, colid, colnmid, [""]);
      break;
  }
};
scwin.gridCustPopupCallback = function (rtnList) {
  row = gr_DeptList.getFocusedRowIndex();
  if (rtnList.length > 0) {
    ds_Dept.setCellData(row, "clntNo", rtnList[0]);
    ds_Dept.setCellData(row, "clntNm", rtnList[1]);
  } else {
    ds_Dept.setCellData(row, "clntNo", "");
    ds_Dept.setCellData(row, "clntNm", "");
  }
};
scwin.gridDeptPopupCallback = function (rtnList) {
  row = gr_DeptList.getFocusedRowIndex();
  if (scwin.selectedColIndex == 2) {
    ds_Dept.setCellData(row, "airDept", rtnList[0]);
    ds_Dept.setCellData(row, "airDeptNm", rtnList[1]);
  } else if (scwin.selectedColIndex == 4) {
    ds_Dept.setCellData(row, "cntrDept", rtnList[0]);
    ds_Dept.setCellData(row, "cntrDeptNm", rtnList[1]);
  } else if (scwin.selectedColIndex == 6) {
    ds_Dept.setCellData(row, "bulkDept", rtnList[0]);
    ds_Dept.setCellData(row, "bulkDeptNm", rtnList[1]);
  }
  scwin.selectedColIndex = 0;
};
scwin.f_BeforePopUpEd = function (nmObj, cdObj, gubun1, pWinCloseTF, pAllSearchTF) {
  var cdObjVal = cdObj.getValue().trim();
  if (cdObjVal == "") {
    nmObj.setValue("");
  } else {
    nmObj.setValue("");
    scwin.f_PopUp(gubun1, pWinCloseTF, pAllSearchTF);
  }
};
scwin.f_ChkPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이	입력이 안된	경우, 해당 Text	Box가 readonly 인 경우,	이전값과 동일한	경우 팝업을	실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이	되는 오브젝트의	값 제거
  $c.gus.cfClearPairObj($p, pairObj);
  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);
  // inObj가 코드	필드일 경우	팝업
  if (isCode == null || isCode == true) {
    scwin.f_PopUp(disGubun, 'T', 'T', 'F');
  }
  // inObj가 코드명 필드일 경우 팝업
  else {
    scwin.f_PopUp(disGubun, 'T', 'T', 'F');
  }
};
scwin.f_ReqFieldChk = async function () {
  // 그리드 필수값 체크
  let validArray = [{
    id: "clntNo",
    name: "Customer",
    mandatory: true
  }];
  ret = await $c.gus.cfValidateGrid($p, gr_DeptList, null, null, validArray, "");
  if (!ret) return false;
  return true;
};
scwin.checkDuplicate = async function () {
  colId = "clntNo";
  var rowCount = ds_Dept.getTotalRow();
  var map = {};
  for (var i = 0; i < rowCount; i++) {
    var value = ds_Dept.getCellData(i, colId);
    if (!value) continue;
    if (map[value]) {
      await $c.win.alert($p, "DeptCode List의 " + (i + 1) + "번째 데이터에서 Customer은(는) 중복될 수 없습니다.");
      return false;
    }
    map[value] = true;
  }
  return true;
};

//---------------------------------------------------------
// 컴포넌트 이벤트
//---------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  ed_clntNo.setValue("");
  txt_clntNm.setValue("");
};
scwin.btn_retrieve_onclick = function (e) {
  ds_SearchParam.set("clntNo", ed_clntNo.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  rowCnt = ds_Dept.getTotalRow();
  if (rowCnt > 0) {
    ds_Dept.modifyAllStatus("R");
    btn_save.setDisabled(false);
  } else {
    $c.win.alert($p, "Data not found.");
  }
  eb_totalRow.setValue(rowCnt);
};
scwin.udc_clnt_onclickEvent = function (e) {
  scwin.f_PopUp('Customer', 'F', 'T');
};
scwin.gr_DeptList_ontextimageclick = function (rowIndex, columnIndex) {
  columnId = gr_DeptList.getColumnID(columnIndex);
  scwin.selectedColIndex = columnIndex;
  switch (columnIndex) {
    case 0:
      scwin.f_PopUpGrid("Customer", rowIndex, "F", "F");
      break;
    case 2:
      scwin.f_PopUpGrid("Dept", rowIndex, "F", "F", columnId, "airDeptNm");
      break;
    case 4:
      scwin.f_PopUpGrid("Dept", rowIndex, "F", "F", columnId, "cntrDeptNm");
      break;
    case 6:
      scwin.f_PopUpGrid("Dept", rowIndex, "F", "F", columnId, "bulkDeptNm");
      break;
    default:
      break;
  }
};
scwin.btn_addRowIntnl_onclick = function (e) {
  idx = ds_Dept.insertRow();
  gr_DeptList.setFocusedCell(idx, 0);
  btn_save.setDisabled(false);
};
scwin.btn_deleteRowIntnl_onclick = function (e) {
  if (ds_Dept.getRowStatus(gr_DeptList.getFocusedRowIndex()) == "C") {
    ds_Dept.removeRow(gr_DeptList.getFocusedRowIndex());
    return;
  }
  ds_Dept.modifyRowStatus(gr_DeptList.getFocusedRowIndex(), "D");
};
scwin.btn_undoMarkIntnl_onclick = function (e) {
  if (ds_Dept.getRowStatus(gr_DeptList.getFocusedRowIndex()) == "C") {
    ds_Dept.removeRow(gr_DeptList.getFocusedRowIndex());
    return;
  }
  ds_Dept.undoRow(gr_DeptList.getFocusedRowIndex());
};
scwin.udc_clnt_onblurCodeEvent = function (e) {
  scwin.f_BeforePopUpEd(txt_clntNm, ed_clntNo, "Customer", "T", "T");
};
scwin.udc_clnt_onviewchangeNameEvent = function (info) {
  scwin.f_ChkPopUp(txt_clntNm, ed_clntNo, 'Customer', false);
};
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  if (ds_Dept.getRowStatus(ds_Dept.getRowPosition()) == "C" || ds_Dept.getRowStatus(ds_Dept.getRowPosition()) == "U") ds_Dept.modifyRowStatus(ds_Dept.getRowPosition(), "R");
  if (ds_Dept.getRowStatus(ds_Dept.getRowPosition()) == "D") ds_Dept.removeRow(ds_Dept.getRowPosition());
};
scwin.btn_save_onclick = async function (e) {
  ds_save.removeAll();
  addRow = 0;
  if ((await scwin.f_ReqFieldChk()) && (await scwin.checkDuplicate())) {
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      for (var i = 0; i < ds_Dept.getTotalRow(); i++) {
        if (ds_Dept.getRowStatus(i) != "R") {
          ds_save.setRowJSON(addRow, ds_Dept.getAllJSON()[i]);
          ds_save.modifyRowStatus(i, ds_Dept.getRowStatus(i));
          addRow++;
        }
      }
      $c.sbm.execute($p, sbm_save);
    }
  }
};
scwin.gr_DeptList_onviewchange = function (info) {
  colId = info.colId;
  row = info.rowIndex;
  olddata = info.oldValue;
  scwin.selectedColIndex = info.colIndex + 1;
  switch (colId) {
    case "clntNo":
      if (ds_Dept.getCellData(row, colId) == "") {
        ds_Dept.setCellData(row, "clntNm", "");
      }
      //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
      if (ds_Dept.getCellData(row, colId) != "" && ds_Dept.getCellData(row, colId) != olddata) {
        scwin.f_PopUpGrid("Customer", row, "T", "F");
      }
      break;
    case "airDept":
      //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
      if (ds_Dept.getCellData(row, colId) == "") {
        ds_Dept.setCellData(row, "airDeptNm", "");
      }
      if (ds_Dept.getCellData(row, colId) != "" && ds_Dept.getCellData(row, colId) != olddata) {
        scwin.f_PopUpGrid("Dept", row, "T", "F", colId, "airDeptNm");
      }
      break;
    case "cntrDept":
      //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
      if (ds_Dept.getCellData(row, colId) == "") {
        ds_Dept.setCellData(row, "cntrDeptNm", "");
      }
      if (ds_Dept.getCellData(row, colId) != "" && ds_Dept.getCellData(row, colId) != olddata) {
        scwin.f_PopUpGrid("Dept", row, "T", "F", colId, "cntrDeptNm");
      }
      break;
    case "bulkDept":
      //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
      if (ds_Dept.getCellData(row, colId) == "") {
        ds_Dept.setCellData(row, "bulkDeptNm", "");
      }
      if (ds_Dept.getCellData(row, colId) != "" && ds_Dept.getCellData(row, colId) != olddata) {
        scwin.f_PopUpGrid("Dept", row, "T", "F", colId, "bulkDeptNm");
      }
      break;
    default:
      break;
  }
};
scwin.gr_DeptList_oneditkeyup = function (info) {
  row = info.rowIndex;
  keyCode = info.keyCode;
  olddata = info.oldValue;
  colId = info.colID;
  scwin.selectedColIndex = info.colIndex;
  if (colId != "clntNo" && colId != "airDept" && colId != "cntrDept" && colId != "bulkDept") return;
  if (keyCode == 9 || keyCode == 13) {
    switch (colId) {
      case "clntNo":
        if (ds_Dept.getCellData(row, colId) == "") {
          ds_Dept.setCellData(row, "clntNm", "");
        }
        //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
        if (ds_Dept.getCellData(row, colId) != "" && ds_Dept.getCellData(row, colId) != olddata) {
          scwin.f_PopUpGrid("Customer", row, "T", "F");
        }
        break;
      case "airDept":
        //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
        if (ds_Dept.getCellData(row, colId) == "") {
          ds_Dept.setCellData(row, "airDeptNm", "");
        }
        if (ds_Dept.getCellData(row, colId) != "" && ds_Dept.getCellData(row, colId) != olddata) {
          scwin.f_PopUpGrid("Dept", row, "T", "F", colId, "airDeptNm");
        }
        break;
      case "cntrDept":
        //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
        if (ds_Dept.getCellData(row, colId) == "") {
          ds_Dept.setCellData(row, "cntrDeptNm", "");
        }
        if (ds_Dept.getCellData(row, colId) != "" && ds_Dept.getCellData(row, colId) != olddata) {
          scwin.f_PopUpGrid("Dept", row, "T", "F", colId, "cntrDeptNm");
        }
        break;
      case "bulkDept":
        //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
        if (ds_Dept.getCellData(row, colId) == "") {
          ds_Dept.setCellData(row, "bulkDeptNm", "");
        }
        if (ds_Dept.getCellData(row, colId) != "" && ds_Dept.getCellData(row, colId) != olddata) {
          scwin.f_PopUpGrid("Dept", row, "T", "F", colId, "bulkDeptNm");
        }
        break;
      default:
        break;
    }
  }
  r = info.rowIndex;
  data = info.newValue.toUpperCase();
  dataListObj = gr_DeptList.dataList;
  dataListObj.setCellData(r, colId, data);
  if (keyCode != 9 && keyCode != 13) {
    gr_DeptList.setFocusedCell(r, colId, true);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_clntNo',nameId:'txt_clntNm',id:'udc_clnt','ev:onclickEvent':'scwin.udc_clnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clnt_onviewchangeNameEvent',maxlengthCode:'6',allowCharCode:'0-9|a-z|A-Z'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_Dept',id:'gr_DeptList',style:'',visibleRowNum:'16',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_DeptList_ontextimageclick',focusMode:'row','ev:onviewchange':'scwin.gr_DeptList_onviewchange',rowStatusVisible:'true','ev:oneditkeyup':'scwin.gr_DeptList_oneditkeyup'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'Customer',width:'210',colSpan:'2',class:'txt-red',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'Air',width:'210',colSpan:'2',class:'txt-blue',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'Container',width:'210',colSpan:'2',class:'txt-blue',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'Bulk',width:'210',colSpan:'2',class:'txt-blue',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'CCFEE',width:'140',colSpan:'2',class:'txt-blue',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'105',inputType:'text',id:'column30',value:'Code',displayMode:'label',class:'txt-red',colSpan:'1',rowSpan:''}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column29',value:'Name',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'105',inputType:'text',id:'column28',value:'Dept',displayMode:'label',colSpan:'1',rowSpan:''}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',value:'Name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'105',inputType:'text',id:'column26',value:'Dept',displayMode:'label',colSpan:'1',rowSpan:''}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column25',value:'Name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'105',inputType:'text',id:'column24',value:'Dept',displayMode:'label',colSpan:'1',rowSpan:''}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',value:'Name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'40',inputType:'text',id:'column22',value:'%',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',value:'Amount',displayMode:'label',class:'txt-blue',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'textImage',width:'80',textAlign:'left',readOnly:'false',value:'',allowChar:'0-9|a-z|A-Z'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'airDept',inputType:'textImage',width:'80',textAlign:'left',readOnly:'false',allowChar:'0-9|a-z|A-Z'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'airDeptNm',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrDept',inputType:'textImage',width:'80',textAlign:'left',readOnly:'false',allowChar:'0-9|a-z|A-Z'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrDeptNm',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bulkDept',inputType:'textImage',width:'80',textAlign:'left',readOnly:'false',allowChar:'0-9|a-z|A-Z'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bulkDeptNm',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ccfee',inputType:'text',width:'40',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'false',maxLength:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ccfAmt',inputType:'text',width:'80',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'false',maxLength:'10'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'eb_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_addRowIntnl',style:'',type:'button','ev:onclick':'scwin.btn_addRowIntnl_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Addition'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_deleteRowIntnl',style:'',type:'button','ev:onclick':'scwin.btn_deleteRowIntnl_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Delete'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_undoMarkIntnl',style:'',type:'button','ev:onclick':'scwin.btn_undoMarkIntnl_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Cancel'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]}]}]}]}]}]}]}]})