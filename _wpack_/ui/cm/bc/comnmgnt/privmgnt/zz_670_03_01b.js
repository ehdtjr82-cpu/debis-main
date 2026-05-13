/*amd /ui/cm/bc/comnmgnt/privmgnt/zz_670_03_01b.xml 75133 ffcfed35045b488ae877562d472e201608ce57d87b6b24ee621b574e2e3ad466 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_programList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'체크박스여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmId',name:'프로그램ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmNm',name:'프로그램명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insYn',name:'입력여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modYn',name:'수정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qryYn',name:'조회여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnYn',name:'출력여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xlsDwnldYn',name:'Excel다운로드여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_userList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'체크박스여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'사용자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'사용자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userClsCd',name:'사용자구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userHomeClsCd',name:'사용자소속구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tmpProgramList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'체크박스여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmId',name:'프로그램ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmNm',name:'프로그램명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insYn',name:'입력여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modYn',name:'수정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qryYn',name:'조회여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnYn',name:'출력여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xlsDwnldYn',name:'Excel다운로드여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tmpUserList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'체크박스여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'사용자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'사용자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userClsCd',name:'사용자구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userHomeClsCd',name:'사용자소속구분',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_programList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCls',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'programLupCond',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCntn',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'grpCls',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_userList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'userNm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userHomeClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_programList',action:'/cm.bc.comnmgnt.privmgnt.RetrieveProgramListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_programList',target:'data:json,{"id":"ds_programList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_programList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_userList',action:'/cm.bc.comnmgnt.privmgnt.RetrieveUserListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_userList","key":"IN_DS1"},{"id":"ds_userList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_userList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_userList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_userProgramPriv',action:'/cm.bc.comnmgnt.privmgnt.RegistProgramEachUserCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_tmpProgramList","key":"IN_DS1"},{"id":"ds_tmpUserList","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_userProgramPriv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_allUserProgramPriv',action:'/cm.bc.comnmgnt.privmgnt.CreateAllUserProgramCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_tmpProgramList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_allUserProgramPriv_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  scwin.REG_PROGRAM_COUNT = 2000; // 프로그램을 등록할 프로그램수
  scwin.REG_USER_COUNT = 2000; // 프로그램을 등록할 사용자수 
  txt_searchUser.focus();
};
scwin.f_programUndoAll = function () {
  scwin.f_UndoAll("0");
};
scwin.f_userUndoAll = function () {
  scwin.f_UndoAll("1");
};

//-------------------------------------------------------------------------
// function name : f_UndoAll
// function desc : 취소
//-------------------------------------------------------------------------
scwin.f_UndoAll = function (pIdx) {
  // 프로그램 
  if (pIdx == "0") {
    for (let i = 0; i < ds_tmpProgramList.getTotalRow(); i++) {
      ds_programList.insertRow();
      let pos = ds_programList.getTotalRow();
      let rowData = ds_tmpProgramList.getRowJSON(i);
      ["pgmId", "pgmNm", "insYn", "qryYn", "modYn", "delYn", "prtnYn", "xlsDwnldYn"].forEach(col => {
        ds_programList.setCellData(pos - 1, col, rowData[col]);
      });
    }
    ds_tmpProgramList.removeAll();
  } else {
    ds_userList.undoAll();
    for (let i = 0; i < ds_tmpUserList.getTotalRow(); i++) {
      ds_userList.insertRow();
      let pos = ds_userList.getTotalRow();
      let rowData = ds_tmpUserList.getRowJSON(i);
      ["userId", "userNm", "userClsCd", "userHomeClsCd"].forEach(col => {
        ds_userList.setCellData(pos - 1, col, rowData[col]);
      });
    }
    ds_tmpUserList.removeAll();
  }
};
scwin.f_programRetrieve = function () {
  scwin.f_Retrieve("1");
};
scwin.f_userRetrieve = function () {
  scwin.f_Retrieve("0");
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function (idx) {
  var vSysCd = "";
  var vSearchCond = "";
  var vSearchContent = "";
  var vGrpCd = "";
  if (idx == "1") {
    if (lux_privGroup_cond.getValue() != "00" && lux_sysCd.getValue() != "00") {
      $c.win.alert($p, "권한그룹 또는 시스템구분 중 1개의 조회 조건만 사용할 수 있습니다.");
      lux_privGroup_cond.setValue("00");
      lux_privGroup_cond.focus();
      return false;
    }

    // 프로그램 조회
    vSysCd = lux_sysCd.getValue();
    vGrpCd = lux_privGroup_cond.getValue();
    if (vSysCd.trim() == "") {
      $c.win.alert($p, "시스템구분은 필수선택사항입니다.");
      lux_sysCd.focus();
      return false;
    }
    vSearchCond = lux_programSearch.getValue();
    vSearchContent = txt_searchProgram.getValue();
    dma_programList.set("sysCls", vSysCd);
    dma_programList.set("programLupCond", vSearchCond);
    dma_programList.set("qryCntn", vSearchContent);
    dma_programList.set("grpCls", vGrpCd);
    $c.sbm.execute($p, sbm_programList); // ds_programList.Reset();
  } else {
    // 사용자 조회 
    vSearchCond = lux_userSearch.getValue();
    vSearchContent = txt_searchUser.getValue();
    if (vSearchCond == "0") {
      dma_userList.set("userNm", vSearchContent);
    } else {
      dma_userList.set("userId", vSearchContent);
    }
    dma_userList.set("userHomeClsCd", lux_userHomeClsCd.getValue());
    dma_userList.set("userClsCd", lux_userClsCd.getValue());
    dma_userList.set("useYn", "1");
    $c.sbm.execute($p, sbm_userList);
  }
};

// onkeypress="if(event.keyCode==13) f_Retrieve('1')";
scwin.txt_searchProgram_onkeyup = function (e) {
  if (e.keyCode == 13) {
    scwin.f_Retrieve("1");
  }
};
scwin.btn_clear1_onclick = function (e) {
  // $c.gus.cfInitObjects(txt_searchProgram)
  txt_searchProgram.setValue("");
};

// onkeypress="if(event.keyCode==13) f_Retrieve('0')
scwin.txt_searchUser_onkeyup = function (e) {
  if (e.keyCode == 13) {
    scwin.f_Retrieve("0");
  }
};
scwin.btn_clear2_onclick = function (e) {
  // $c.gus.cfInitObjects(txt_searchUser)
  txt_searchUser.setValue("");
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다. 
  var vProgramListCount = ds_tmpProgramList.getTotalRow();
  var vUserListCount = ds_tmpUserList.getTotalRow();
  if (vProgramListCount < 1) {
    $c.win.alert($p, "권한부여대상 프로그램을 추가해주시기 바랍니다.");
    return false;
  }
  if (vUserListCount < 1) {
    $c.win.alert($p, "권한부여대상 사용자를 추가해주시기 바랍니다.");
    return false;
  }

  // 저장확인 
  let messageStr = "저장하시겠습니까?";
  let ret = await $c.win.confirm($p, messageStr);
  if (ret) {
    $c.sbm.execute($p, sbm_userProgramPriv);
  }
};

//-------------------------------------------------------------------------
// function name : f_SaveAllUserPriv
// function desc : 전체사용자 부여 프로그램 저장
//-------------------------------------------------------------------------

scwin.f_SaveAllUserPriv = async function () {
  //변경한 데이터가 있는지 체크한다. 
  var vProgramListCount = ds_tmpProgramList.getTotalRow();
  if (vProgramListCount < 1) {
    $c.win.alert($p, "권한부여대상 프로그램을 추가해주시기 바랍니다.");
    return false;
  }

  // 저장확인 
  let messageStr = "저장하시겠습니까?";
  let ret = await $c.win.confirm($p, messageStr);
  if (ret) {
    $c.sbm.execute($p, sbm_allUserProgramPriv);
  }
};

//-------------------------------------------------------------------------
// function name : f_ProgrmaMoveUp
// function desc : 프로그램 상위이동
//-------------------------------------------------------------------------
scwin.f_ProgramMoveUp = function () {
  var vCountRow = ds_tmpProgramList.getTotalRow();
  if (vCountRow < 1) {
    $c.win.alert($p, "선택하실 프로그램이 존재하지 않습니다.");
    return false;
  } else {
    // 선택된 프로그램 추가
    for (var i = 0; i < vCountRow; i++) {
      var chkYn = ds_tmpProgramList.getCellData(i, "chk");
      if (chkYn == "T") {
        //체크박스에 체크가 된 경우 선택된 프로그램 삭제
        // 하위 그리드에 선택된 프로그램 추가
        ds_programList.insertRow(); // addRow();
        let rowPos = ds_programList.getTotalRow() - 1;
        ds_programList.setCellData(rowPos, "pgmId", ds_tmpProgramList.getCellData(i, "pgmId"));
        ds_programList.setCellData(rowPos, "pgmNm", ds_tmpProgramList.getCellData(i, "pgmNm"));
        ds_programList.setCellData(rowPos, "insYn", 0);
        ds_programList.setCellData(rowPos, "qryYn", 1);
        ds_programList.setCellData(rowPos, "modYn", 0);
        ds_programList.setCellData(rowPos, "delYn", 0);
        ds_programList.setCellData(rowPos, "prtnYn", 0);
        ds_programList.setCellData(rowPos, "xlsDwnldYn", 0);
        ds_programList.setCellData(rowPos, "chk", "F");
      }
    }
    //선택된 프로그램 삭제		 
    for (var j = vCountRow; j >= 0; j--) {
      var vCheck = ds_tmpProgramList.getCellData(j, "chk");
      if (vCheck == "T") {
        ds_tmpProgramList.deleteRow(j);
        ds_tmpProgramList.removeRow(j);
      }
    }
    ds_programList.modifyAllStatus("R"); // ds_programList.ResetStatus();
  }
  // gr_tmpProgramList.ColumnProp("chk", "HeadCheck") = false; // to-do
};

//-------------------------------------------------------------------------
// function name : f_UserMoveDown
// function desc : 사용자하위 이동
//-------------------------------------------------------------------------
scwin.f_UserMoveDown = function () {
  var vCountRow = ds_userList.getTotalRow();
  var vTmpUserRowCount = 0;
  var vDelCount = 0;
  if (vCountRow < 1) {
    $c.win.alert($p, "프로그램권한을 부여할 사용자를 먼저 조회해주십시오.");
    return false;
  } else {
    // 선택된 사용자 추가
    for (var i = 0; i < vCountRow; i++) {
      var chkYn = ds_userList.getCellData(i, "chk");
      if (chkYn == "T") {
        //체크박스에 체크가 된 경우 선택된 프로그램 삭제
        // 하위 그리드에 선택된 프로그램 추가
        ds_tmpUserList.insertRow(); //addRow();
        let rowPos = ds_tmpUserList.getTotalRow() - 1;
        let rowData = ds_userList.getRowJSON(i);
        ds_tmpUserList.setCellData(rowPos, "userId", rowData["userId"]);
        ds_tmpUserList.setCellData(rowPos, "userNm", rowData["userNm"]);
        ds_tmpUserList.setCellData(rowPos, "userClsCd", rowData["userClsCd"]);
        ds_tmpUserList.setCellData(rowPos, "userHomeClsCd", rowData["userHomeClsCd"]);
        ds_tmpUserList.setCellData(rowPos, "chk", "F");
      }
      vTmpUserRowCount = ds_tmpUserList.getTotalRow();
      if (vTmpUserRowCount >= scwin.REG_USER_COUNT) {
        $c.win.alert($p, "등록사용자가 등록제한 사용자수[" + scwin.REG_USER_COUNT + "]를 초과 했습니다.");
        break;
      }
    }

    //선택된 사용자 삭제		 
    for (var j = vCountRow; j >= 0; j--) {
      var vCheck = ds_userList.getCellData(j, "chk");
      if (vDelCount >= scwin.REG_USER_COUNT) {
        break;
      }
      if (vCheck == "T") {
        ds_userList.deleteRow(j);
        ds_userList.removeRow(j);
        vDelCount++;
      }
    }
  }
  // gr_userList.ColumnProp("chk", "HeadCheck") = false; // to-do
};

//-------------------------------------------------------------------------
// function name : f_UserMoveUp
// function desc : 사용자 상위이동
//-------------------------------------------------------------------------
scwin.f_UserMoveUp = function () {
  var vCountRow = ds_tmpUserList.getTotalRow();
  if (vCountRow < 1) {
    $c.win.alert($p, "선택하실 사용자가 존재하지 않습니다.");
    return false;
  } else {
    // 선택된 프로그램 추가
    for (var i = 0; i < vCountRow; i++) {
      var chkYn = ds_tmpUserList.getCellData(i, "chk");
      if (chkYn == "T") {
        //체크박스에 체크가 된 경우 선택된 프로그램 삭제
        // 하위 그리드에 선택된 프로그램 추가
        ds_userList.insertRow();
        let rowPos = ds_userList.getTotalRow() - 1;
        let rowData = ds_tmpUserList.getRowJSON(i);
        ds_userList.setCellData(rowPos, "userId", rowData["userId"]);
        ds_userList.setCellData(rowPos, "userNm", rowData["userNm"]);
        ds_userList.setCellData(rowPos, "userClsCd", rowData["userClsCd"]);
        ds_userList.setCellData(rowPos, "userHomeClsCd", rowData["userHomeClsCd"]);
        ds_userList.setCellData(rowPos, "chk", "F");
      }
    }
    //선택된 프로그램 삭제		 
    for (var j = vCountRow; j >= 0; j--) {
      var vCheck = ds_tmpUserList.getCellData(j, "chk");
      if (vCheck == "T") {
        ds_tmpUserList.deleteRow(j);
        ds_tmpUserList.removeRow(j);
      }
    }
    ds_userList.modifyAllStatus("R"); // ds_userList.ResetStatus();
  }
  // gr_tmpUserList.ColumnProp("chk", "HeadCheck") = false; // to-do
};

// for=tr_userProgramPriv event=OnSuccess()
scwin.sbm_userProgramPriv_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  ds_tmpProgramList.removeAll();
  ds_tmpUserList.removeAll();
};

// for=tr_allUserProgramPriv event=OnSuccess()
scwin.sbm_allUserProgramPriv_submitdone = function (e) {
  $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  ds_tmpProgramList.removeAll();
};
scwin.sbm_programList_submitdone = function (e) {
  let rowCnt = ds_programList.getTotalRow();
  totalRows.setValue(rowCnt);
  if (rowCnt > 0) {
    for (var i = 0; i < rowCnt; i++) {
      ds_programList.setCellData(i, "chk", "F");
    }
  }
  ds_programList.modifyAllStatus("R"); //  ds_programList.ResetStatus();
  gr_programList.setColumnStyle("pgmId", "color", "blue");
  gr_programList.setColumnStyle("pgmId", "text-decoration", "underline");
};

// for=ds_userList event=OnLoadCompleted(rowCnt)
scwin.sbm_userList_submitdone = function (e) {
  let rowCnt = ds_userList.getTotalRow();
  totalRows2.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, "조회된 사용자가 없습니다.");
    return false;
  }
  if (rowCnt > 0) {
    for (var i = 0; i < rowCnt; i++) {
      ds_userList.setCellData(i, "chk", "F");
    }
  }
  ds_userList.modifyAllStatus("R"); // ds_userList.ResetStatus();

  if (rowCnt == 1) {
    for (var i = 0; i < ds_tmpUserList.getTotalRow(); i++) {
      if (ds_userList.getCellData(0, "userId") == ds_tmpUserList.getCellData(i, "userId")) {
        $c.win.alert($p, "이미 추가된 사용자 입니다");
        ds_userList.removeAll();
        txt_searchUser.setValue("");
        txt_searchUser.focus();
        return false;
      }
    }
    ds_tmpUserList.insertRow();
    // let pos = ds_tmpUserList.getRowPosition();
    let pos = ds_tmpUserList.getTotalRow() - 1;
    ds_tmpUserList.setCellData(pos, "userId", ds_userList.getCellData(0, "userId"));
    ds_tmpUserList.setCellData(pos, "userNm", ds_userList.getCellData(0, "userNm"));
    ds_tmpUserList.setCellData(pos, "userClsCd", ds_userList.getCellData(0, "userClsCd"));
    ds_tmpUserList.setCellData(pos, "userHomeClsCd", ds_userList.getCellData(0, "userHomeClsCd"));
    ds_tmpUserList.setCellData(pos, "chk", "F");
    ds_userList.removeAll();
    txt_searchUser.setValue("");
    txt_searchUser.focus();
  }
};

// 권한부여 대상프로그램 입력,조회,수정,삭제,프린트,엑셀다운로드 권한 일괄체크
// for=gr_tmpProgramList event=OnHeadCheckClick(Col,Colid,bCheck)
scwin.gr_tmpProgramList_onheaderclick = function (headerId) {
  var vCountRow = ds_tmpProgramList.getTotalRow();
  let bCheck = gr_tmpProgramList.getHeaderValue(headerId);
  let chk;
  chk = bCheck == 1 ? "T" : "F";
  let valueToSet;
  if (vCountRow > 0) {
    switch (headerId) {
      case "chk":
        valueToSet = chk;
        break;
      case "insYn":
      case "qryYn":
      case "modYn":
      case "delYn":
      case "prtnYn":
      case "xlsDwnldYn":
        valueToSet = bCheck;
        break;
      default:
        break;
    }
    for (var i = 0; i < vCountRow; i++) {
      ds_tmpProgramList.setCellData(i, headerId, valueToSet);
    }
  }
};

// 프로그램 입력,조회,수정,삭제,프린트,엑셀다운로드 권한 일괄체크 
// for=gr_programList event=OnHeadCheckClick(Col,Colid,bCheck)
scwin.gr_programList_onheaderclick = function (headerId) {
  var vCountRow = ds_programList.getTotalRow();
  let bCheck = gr_programList.getHeaderValue("chk");
  let chk;
  chk = bCheck == 1 ? "T" : "F";
  let valueToSet;
  if (vCountRow > 0) {
    switch (headerId) {
      case "chk":
        valueToSet = chk;
        break;
      case "insYn":
      case "qryYn":
      case "modYn":
      case "delYn":
      case "prtnYn":
      case "xlsDwnldYn":
        valueToSet = bCheck;
        break;
      default:
        break;
    }
    for (var i = 0; i < vCountRow; i++) {
      ds_programList.setCellData(i, headerId, valueToSet);
    }
  }
};
scwin.f_ProgramMoveDown = function (e) {
  var vCountRow = ds_programList.getTotalRow();
  var vTmpPgmRowCount = 0;
  var vDelCount = 0;
  if (vCountRow < 1) {
    $c.win.alert($p, "선택하실 프로그램을 먼저 조회해주십시오.");
    return false;
  } else {
    // 선택된 프로그램 추가
    for (var i = 0; i < vCountRow; i++) {
      var chkYn = ds_programList.getCellData(i, "chk");
      if (chkYn == "T") {
        //체크박스에 체크가 된 경우 선택된 프로그램 삭제

        let rowData = ds_programList.getRowJSON(i);
        let vInsYn = rowData["insYn"] == 0 ? 0 : 1;
        let vQryYn = rowData["qryYn"] == 0 ? 0 : 1;
        let vModYn = rowData["modYn"] == 0 ? 0 : 1;
        let vDelYn = rowData["delYn"] == 0 ? 0 : 1;
        let vPrtnYn = rowData["prtnYn"] == 0 ? 0 : 1;
        let vXlsDwnldYn = rowData["xlsDwnldYn"] == 0 ? 0 : 1;

        // 하위 그리드에 선택된 프로그램 추가
        ds_tmpProgramList.insertRow();
        let rowVal = ds_tmpProgramList.getTotalRow() - 1;
        ds_tmpProgramList.setCellData(rowVal, "pgmId", ds_programList.getCellData(i, "pgmId"));
        ds_tmpProgramList.setCellData(rowVal, "pgmNm", ds_programList.getCellData(i, "pgmNm"));
        ds_tmpProgramList.setCellData(rowVal, "insYn", vInsYn);
        ds_tmpProgramList.setCellData(rowVal, "qryYn", vQryYn);
        ds_tmpProgramList.setCellData(rowVal, "modYn", vModYn);
        ds_tmpProgramList.setCellData(rowVal, "delYn", vDelYn);
        ds_tmpProgramList.setCellData(rowVal, "prtnYn", vPrtnYn);
        ds_tmpProgramList.setCellData(rowVal, "xlsDwnldYn", vXlsDwnldYn);
        ds_tmpProgramList.setCellData(rowVal, "chk", "F");
      }
      vTmpPgmRowCount = ds_tmpProgramList.getTotalRow();
      if (vTmpPgmRowCount >= scwin.REG_PROGRAM_COUNT) {
        $c.win.alert($p, "등록할 프로그램이 등록제한 프로그램갯수[" + scwin.REG_PROGRAM_COUNT + "]를 초과 했습니다.");
        break;
      }
    }

    //선택된 프로그램 삭제		 
    for (var j = vCountRow; j >= 0; j--) {
      var vCheck = ds_programList.getCellData(j, "chk");
      if (vDelCount >= scwin.REG_PROGRAM_COUNT) {
        break;
      }
      if (vCheck == "T") {
        ds_programList.deleteRow(j);
        ds_programList.removeRow(j);
        vDelCount++;
      }
    }
  }
  // gr_programList.ColumnProp("chk", "HeadCheck") = false;  // to-do
};

//  등록대상 사용자 권한 일괄체크
scwin.gr_tmpUserList_onheaderclick = function (headerId) {
  let bCheck = gr_tmpUserList.getHeaderValue("chk");
  let chk;
  chk = bCheck == 1 ? "T" : "F";
  var vCountRow = ds_tmpUserList.getTotalRow();
  if (vCountRow > 0) {
    if (headerId == "chk") {
      for (var i = 0; i < vCountRow; i++) {
        ds_tmpUserList.setCellData(i, "chk", chk);
      }
    }
  }
};

// 사용자 일괄체크
scwin.gr_userList_onheaderclick = function (headerId) {
  var vCountRow = ds_userList.getTotalRow();
  let bCheck = gr_userList.getHeaderValue("chk");
  let chk;
  chk = bCheck == 1 ? "T" : "F";
  if (vCountRow > 0) {
    if (headerId == "chk") {
      for (var i = 0; i < vCountRow; i++) {
        ds_userList.setCellData(i, "chk", chk);
      }
    }
  }
};

// for="lux_programSearch" event=onSelChange()
scwin.lux_programSearch_onchange = function (info) {
  var vProgramSearch = lux_programSearch.getValue();
  if (vProgramSearch == "0") {
    // Kor
    // cfSetIMEModeActiveObjects([txt_searchProgram]);
  } else {
    // cfSetIMEModeInactiveObjects([txt_searchProgram]);
  }
};

// for="lux_userSearch" event=onSelChange()
scwin.lux_userSearch_onchange = function (info) {
  var vUserCond = lux_userSearch.getValue();
  if (["0", "2"].includes(vUserCond)) {
    // Kor
    //cfSetIMEModeActiveObjects([txt_searchUser]);
  } else {
    // cfSetIMEModeInactiveObjects([txt_searchUser]);
  }
};
scwin.gr_programList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "pgmId") {
    // 팝업 화면 개발 목록에 없음.
    let url = "/ui/cm/bc/comnmgnt/privmgnt/zz_670_03_01p.xml";
    let programId = "zz_670_03_01p";
    let paramObj = {
      pgmId: ds_programList.getCellData(ds_programList.getRowPosition(), "pgmId")
    };
    $c.win.openMenu($p, "프로그램별 전체사용자권한관리", url, programId, paramObj);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'lybox flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lux_privGroup_cond',style:'width:150px;',submenuSize:'auto',ref:'',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'00'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'어드민'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ADMI'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'관리_기획팀'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CO01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예산등록'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CO02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사관리회계담당'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CO03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사사업계획입력'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CO04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'감사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DM01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'회계감사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DM02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'감사(인천)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DM03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'감사(BIDC),DS02^협력_보랄'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DM04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'터미널운영(당사)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DS04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'터미널운영(PDA)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DS06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'OB맥주(당사)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DS34'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3자물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DS35'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대성냉동-관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DS41'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력_물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DS51'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력_물류/자가'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DS55'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력_자가'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DS61'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고객_선사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DS81'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'EIS 관리,EIS2^싱글뷰'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'EIS1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'EQ10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'EQ11'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력_정비 KMT관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'EQ91'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력_정비 KMT정비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'EQ92'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력_렌터카정비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'EQ93'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'재무_재무'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FI01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'재무_관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FI02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사회계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FI03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사결산조회'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FI04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'증빙조회'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FI05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사회계-해외법인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FI06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'채권_재무'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FM01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'채권_관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FM02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자금_일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FM51'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자금_회계담당'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FM52'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자금_자금담당'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FM53'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자금_자금상위'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FM54'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부산신항'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FS01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사_물류회계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FS02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FW01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제TPL-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FW21'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제TPL-고객'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FW22'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제TPL-협력1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FW23'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제TPL-협력2'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FW24'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류에너지_관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'GE01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류에너지_일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'GE02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사물류_오더/통합매출입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'JA01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'한창_사용자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'JA02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'여객구매_관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'PR01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'여객구매_일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'PR02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'렌터카-관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'RC01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'렌터카-운영'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'RC02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'렌터카-지점'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'RC03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'렌터카-정비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'RC04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'렌터카-협력BP'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'RC05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'렌터카-콜센터'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'RC06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'렌터카-여행사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'RC07'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'렌터카-Agent'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'RC08'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'렌터카-탁송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'RC09'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'시스템운영'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'SM01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고속공통(TNS)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'TR00'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고속관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'TR01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고속안전운영'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'TR02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고속정비담당'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'TR03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고속소장_총무_매표원'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'TR04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'용기센터'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'WM01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'용기협회어드민'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'WM02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이마트공병수거관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'WM03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공통'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ZZ00'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고객관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ZZ01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Ebiz공통'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ZZ03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'개인정보조회'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ZZ04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영남지사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ZZ05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제공통'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ZZ06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차량보험_관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ZZ07'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차량보험_일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ZZ08'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인천하역'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ZZ09'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운송팀'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ZZ10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력_현대모비스'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ZZ11'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'BIDC_사용자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ZZ12'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'BIDC_회계담당'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ZZ13'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'BIDC_기획'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ZZ14'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하역'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ZZ15'}]}]}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lux_sysCd',style:'width:150px;',submenuSize:'auto',ref:'',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'00'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국내 운영 실적'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'AS'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'관리회계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CO'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CTS 시스템'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CT'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하역(부두,장치장)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CW'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'더존시스템'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DJ'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통합정비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'EQ'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국내 운영(협력)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'EZ'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'재무회계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FI'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자금관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FM'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'청구/정산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FS'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류에너지'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'GE'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제물류(복운)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'IL'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'터미널 운영'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'IN'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수출입 운영'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'IO'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국내 운영 관제'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'LB'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통합물류공통'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'LO'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'모바일 관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'MO'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'제안제도'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'OF'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국내 운영'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'OP'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'구매(소모품)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'PE'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'렌터카관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'RC'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사회계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'SA'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영업/오더'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'SD'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지원(총무/송무등)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'SP'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'시스템'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'SY'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국내 운영(TPL)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'TP'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고속'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'TR'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'WMS(대성,프릭사)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'WM'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공통'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ZZ'}]}]}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lux_programSearch',style:'width:150px;',submenuSize:'auto',ref:'','ev:onchange':'scwin.lux_programSearch_onchange',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'프로그램명'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'프로그램ID'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_searchProgram',style:'width: 150px;','ev:onkeyup':'scwin.txt_searchProgram_onkeyup',maxlength:'14'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear1',style:'',type:'button','ev:onclick':'scwin.btn_clear1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'b_ProgramRetrieve',style:'',type:'button','ev:onclick':'scwin.f_programRetrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용자구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lux_userClsCd',style:'width:150px;',submenuSize:'auto',ref:'',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내부사용자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력_물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고객_선사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고객_화주'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자가운송업체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고객_렌터카'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력_정비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력_렌터카'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'08'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력_렌터카정비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력_물류/자가'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'09'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력_수리업체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력_국제물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'30'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고객_국제물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'32'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'TPL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'50'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'터미널운영'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'60'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차주_NTIS'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'81'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력업체_NTIS'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FB'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외부_회계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'91'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력_렌터카(수출)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'12'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력_국제TPL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'31'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고객_국제TPL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'33'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'WMS_FULL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'70'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'총무업무'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'77'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'SITC_LOGI'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'71'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'JY종합물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'73'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'극동MES'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'74'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판토스'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'75'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'HU로지스'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'76'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'TCA'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'78'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CAP'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'72'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'포스코인터내셔널'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'79'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영업정보'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'SI'}]}]}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lux_userHomeClsCd',style:'width:100px;',submenuSize:'auto',ref:'',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공통'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CM'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FW'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'HR'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'해외법인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'LA'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공통/영업청구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ZZ'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DS'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고속'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'TR'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'렌터카'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'RC'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'EQ'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'회계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'AC'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사회계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'SA'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'JL'}]}]}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lux_userSearch',style:'width:100px;',submenuSize:'auto',ref:'','ev:onchange':'scwin.lux_userSearch_onchange',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용자명'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용자ID'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_searchUser',style:'width: 150px;','ev:onkeyup':'scwin.txt_searchUser_onkeyup'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear2',style:'',type:'button','ev:onclick':'scwin.btn_clear2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'b_UserRetrieve',style:'',type:'button','ev:onclick':'scwin.f_userRetrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:' row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'프로그램 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_programList',focusMode:'row',id:'gr_programList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true','ev:onheaderclick':'scwin.gr_programList_onheaderclick','ev:oncelldblclick':'scwin.gr_programList_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',colSpan:'',rowSpan:'2',trueValue:'T',falseValue:'F',valueType:'boolean'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'프로그램ID',width:'120',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'프로그램명',width:'160',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'C',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'R',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'U',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'D',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'P',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'X',width:'65'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'사이드',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'65',inputType:'checkbox',style:'',id:'column45',value:'',displayMode:'label',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{width:'65',inputType:'checkbox',style:'',id:'column44',value:'',displayMode:'label',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{width:'65',inputType:'checkbox',style:'',id:'column43',value:'',displayMode:'label',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{width:'65',inputType:'checkbox',style:'',id:'column42',value:'',displayMode:'label',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{width:'65',inputType:'checkbox',style:'',id:'column41',value:'',displayMode:'label',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{width:'65',inputType:'checkbox',style:'',id:'column40',value:'',displayMode:'label',trueValue:'T',falseValue:'F',valueType:'other'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pgmId',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pgmNm',inputType:'text',style:'',value:'',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'insYn',inputType:'checkbox',style:'',value:'',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qryYn',inputType:'checkbox',style:'',value:'',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modYn',inputType:'checkbox',style:'',value:'',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'delYn',inputType:'checkbox',style:'',value:'',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prtnYn',inputType:'checkbox',style:'',value:'',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'xlsDwnldYn',inputType:'checkbox',style:'',value:'',width:'65'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'side',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',tagname:'h3'},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'사용자 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_userList',focusMode:'row',id:'gr_userList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true','ev:onheaderclick':'scwin.gr_userList_onheaderclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',trueValue:'T',falseValue:'F',valueType:'boolean'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'사용자ID',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'사용자명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'사용자구분',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'소속구분',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',trueValue:'T',falseValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userId',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userClsCd',inputType:'select',style:'',value:'',width:'120',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'내부사용자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력_물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'고객_선사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'고객_화주'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자가운송업체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'고객_렌터카'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력_정비'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력_렌터카'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'08'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력_렌터카정비'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력_물류/자가'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'09'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력_수리업체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력_국제물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'30'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'고객_국제물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'32'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'TPL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'50'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'터미널운영'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'60'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'차주_NTIS'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'81'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력업체_NTIS'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'FB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'외부_회계'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'91'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력_렌터카(수출)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'12'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력_국제TPL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'31'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'고객_국제TPL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'33'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'WMS_FULL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'70'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'총무업무'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'77'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SITC_LOGI'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'71'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'JY종합물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'73'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'극동MES'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'74'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'판토스'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'75'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'HU로지스'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'76'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'TCA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'78'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CAP'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'72'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'포스코인터내셔널'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'79'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'영업정보'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SI'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'userHomeClsCd',inputType:'select',style:'',value:'',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'공통'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CM'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'국제물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'FW'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'HR'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'해외법인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'공통/영업청구'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ZZ'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'고속'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TR'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'렌터카'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정비'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'EQ'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'회계'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'AC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자회사회계'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자회사물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'JL'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'shattle',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico btn-double-down',id:'btn_trigger4',style:'',type:'button','ev:onclick':'scwin.f_ProgramMoveDown'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ico btn-double-up',id:'btn_trigger5',style:'',type:'button','ev:onclick':'scwin.f_ProgramMoveUp'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'shattle',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico btn-double-down',id:'btn_trigger8',style:'',type:'button','ev:onclick':'scwin.f_UserMoveDown'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ico btn-double-up',id:'btn_trigger9',style:'',type:'button','ev:onclick':'scwin.f_UserMoveUp'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group8',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_tmpProgramList',focusMode:'row',id:'gr_tmpProgramList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true','ev:onheaderclick':'scwin.gr_tmpProgramList_onheaderclick'},E:[{T:1,N:'w2:caption',A:{id:'caption11',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',fixColumnWidth:'true',id:'column30',inputType:'checkbox',rowSpan:'2',style:'',value:'',width:'50',valueType:'other',falseValue:'F',trueValue:'T'}},{T:1,N:'w2:column',A:{class:'txt-red',colSpan:'',displayMode:'label',id:'column38',inputType:'text',rowSpan:'2',style:'',value:'프로그램ID',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',colSpan:'',displayMode:'label',id:'column36',inputType:'text',rowSpan:'2',style:'',value:'프로그램명',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'C',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'R',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'U',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'D',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'P',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'X',width:'65'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column49',inputType:'text',rowSpan:'2',style:'',value:'사이드',width:'100',hidden:'true'}}]},{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'checkbox',style:'',value:'',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column44',inputType:'checkbox',style:'',value:'',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'checkbox',style:'',value:'',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'checkbox',style:'',value:'',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'checkbox',style:'',value:'',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column40',inputType:'checkbox',style:'',value:'',width:'65'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'chk',inputType:'checkbox',style:'',value:'',width:'50',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pgmId',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pgmNm',inputType:'text',style:'',value:'',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'insYn',inputType:'checkbox',style:'',value:'',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qryYn',inputType:'checkbox',style:'',value:'',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modYn',inputType:'checkbox',style:'',value:'',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'delYn',inputType:'checkbox',style:'',value:'',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prtnYn',inputType:'checkbox',style:'',value:'',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'xlsDwnldYn',inputType:'checkbox',style:'',value:'',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'side',inputType:'text',style:'',value:'',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:'display: none;'},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows3',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'b_PgmUndoAll',type:'button',class:'btn','ev:onclick':'scwin.f_programUndoAll'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group9',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_tmpUserList',focusMode:'row',id:'gr_tmpUserList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true','ev:onheaderclick':'scwin.gr_tmpUserList_onheaderclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption12',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'column30',inputType:'checkbox',style:'',value:'',width:'50',valueType:'other',trueValue:'T',falseValue:'F'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column38',inputType:'text',style:'',value:'사용자ID',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'사용자명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'사용자구분',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'소속구분',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'chk',inputType:'checkbox',style:'',value:'',width:'50',valueType:'other',trueValue:'T',falseValue:'F',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userId',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userClsCd',inputType:'select',style:'',value:'',width:'120',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'내부사용자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력_물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'고객_선사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'고객_화주'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자가운송업체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'고객_렌터카'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력_정비'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력_렌터카'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'08'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력_렌터카정비'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력_물류/자가'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'09'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력_수리업체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력_국제물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'30'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'고객_국제물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'32'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'TPL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'50'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'터미널운영'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'60'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'차주_NTIS'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'81'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력업체_NTIS'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'FB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'외부_회계'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'91'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력_렌터카(수출)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'12'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력_국제TPL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'31'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'고객_국제TPL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'33'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'WMS_FULL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'70'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'총무업무'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'77'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SITC_LOGI'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'71'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'JY종합물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'73'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'극동MES'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'74'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'판토스'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'75'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'HU로지스'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'76'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'TCA'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'78'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CAP'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'72'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'포스코인터내셔널'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'79'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'영업정보'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SI'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'userHomeClsCd',inputType:'select',style:'',value:'',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'공통'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CM'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'국제물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'FW'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'HR'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'해외법인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'공통/영업청구'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ZZ'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'고속'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TR'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'렌터카'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정비'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'EQ'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'회계'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'AC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자회사회계'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자회사물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'JL'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:'display: none;'},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows4',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'b_UserUndoAll',style:'',type:'button','ev:onclick':'scwin.f_userUndoAll'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'b_Save',type:'button',class:'btn','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})