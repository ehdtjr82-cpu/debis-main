/*amd /ui/cm/bc/comnmgnt/privmgnt/zz_670_02_02b.xml 32357 f5b7a23f7038a1b24c97f449fc43a5b1c0e7f5e7ea1897f38ebff4715edc2cec */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_415List',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'privGrpId',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'privGrpNm',name:'권한그룹명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_grpUserList',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'chk',name:'chk',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userId',name:'userId'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userNm',name:'userNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'privGrpId',name:'privGrpId'}},{T:1,N:'w2:column',A:{dataType:'',id:'wrkClsCd',name:'wrkClsCd'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_userList',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'userId',name:'사용자ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'epId',name:'다이렉트아이디'}},{T:1,N:'w2:column',A:{dataType:'text',id:'empNo',name:'사원번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'privGrpId',name:'권한그룹ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'privGrpNm',name:'권한그룹명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'empNm',name:'사원번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNo',name:'거래처번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNm',name:'거래처번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'upperClntNo',name:'거래처번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userNm',name:'사용자명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'passwd',name:'비밀번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'passwdExpdt',name:'비밀번호EXP일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'passwdExpyn',name:'비밀번호EXP여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'decPasswd',name:'decPasswd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'finalPasswdChgDt',name:'최종비밀번호변경일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'email',name:'EMAIL'}},{T:1,N:'w2:column',A:{dataType:'text',id:'zip',name:'우편번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'addr1',name:'주소1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'addr2',name:'주소2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userClsCd',name:'사용자구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userClsCdNm',name:'userClsCdNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userHomeClsCd',name:'사용자소속구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lobranCd',name:'물류점소코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lobranNm',name:'lobranNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lobranPrivLvl',name:'물류점소권한레벨'}},{T:1,N:'w2:column',A:{dataType:'text',id:'loUpperLobranCd',name:'물류상위점소코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'loUpperLobranNm',name:'물류상위점소코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'exprOfcCd',name:'고속영업소코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'exprOfcNm',name:'exprOfcNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'exprOfcPrivLvl',name:'고속영업소권한레벨'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rentcarOfcCd',name:'렌터카영업소코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rentcarOfcNm',name:'rentcarOfcNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rentcarBranchPatternCd',name:'렌터카지점유형코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rentcarOfcPrivLvl',name:'렌터카영업소권한레벨'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fixWrkPlCd',name:'정비작업장코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fixWrkPlNm',name:'fixWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'eqHomeClsCd',name:'정비소속구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fixWrkPlPrivLvl',name:'정비작업장권한레벨'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptNm',name:'귀속부서코드명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptCd',name:'귀속부서코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptPrivLvl',name:'귀속부서권한레벨'}},{T:1,N:'w2:column',A:{dataType:'text',id:'useYn',name:'사용여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'basisMenuClsCd',name:'기본메뉴구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userMpNo',name:'사용자핸드폰번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userMpNo2',name:'사용자핸드폰번호2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'finalConDtm',name:'최종접속일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'finalConIp',name:'최종접속IP'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regId',name:'등록자ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regDtm',name:'등록일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modId',name:'수정자ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modDtm',name:'수정일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userBasisPgmId',name:'사용자기본프로그램ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userBasisPgmNm',name:'사용자기본프로그램명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'occpgrdNm',name:'직급명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'passwdChgCycCd',name:'패스워드변경주기'}},{T:1,N:'w2:column',A:{dataType:'text',id:'msgConfirmCycCd',name:'메시지갱신주기'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sysAdminYn',name:'시스템 관리자 여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ssoAuthYn',name:'SSO 인증 여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'deptNm',name:'부서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pstNm',name:'직위명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'districtCd',name:'노임권역코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'occpposNm',name:'보직명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'chk',name:'chk'}},{T:1,N:'w2:column',A:{dataType:'text',id:'coClsCd',name:'coClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'coCd',name:'coCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'branchAggrDeptCd',name:'branchAggrDeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'branchAggrDeptNm',name:'branchAggrDeptNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'branchLobranCd',name:'branchLobranCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'branchLobranNm',name:'branchLobranNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'viewAcctDeptCd',name:'viewAcctDeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'viewAcctDeptNm',name:'viewAcctDeptNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'viewLobranCd',name:'viewLobranCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'viewLobranNm',name:'viewLobranNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blockReason',name:'blockReason'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blockDt',name:'blockDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blockEtDt',name:'blockEtDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blockCancelEtDt',name:'blockCancelEtDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'authLoginYn',name:'authLoginYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'empTelNo',name:'empTelNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'empFaxNo',name:'empFaxNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'retireDt',name:'retireDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mismatchRsn',name:'mismatchRsn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'privAdmin',name:'privAdmin'}},{T:1,N:'w2:column',A:{dataType:'text',id:'decPwd',name:'decPwd'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_415List',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_415List","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_415List_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_grpUserList',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_grpUserList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_grpUserList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_userList',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_userList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_userList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/cm.bc.comnmgnt.privmgnt.SavePrivilegeGroupUserListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified", "id":"ds_grpUserList", "key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시 
//-------------------------------------------------------------------------   
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ010",
    compID: "lc_userClsCdCond,gr_userList:userClsCd"
  }, {
    grpCd: "ZZ019",
    compID: "lc_userHomeClsCdCond,gr_userList:userHomeClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

/**
 * UDC 셋팅이 이후..
 */
scwin.onUdcCompleted = function () {};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {
  ed_searchPrivGrp.focus();
  if ($p.getAllParameter().paramData.menuInfo.menuId.indexOf("n") > -1) {
    rd_debis.setSelectedIndex(1);
    rd_debis.setDisabled(true);
  }
};

//-------------------------------------------------------------------------
// 권한그룹 DataSet 헤더설정
//-------------------------------------------------------------------------
function setPrivGrpHeader() {}
;
scwin.init = function () {
  lc_searchPrivGrpCond.setSelectedIndex(0);
  ed_searchPrivGrp.setValue("");
  lc_userClsCdCond.setSelectedIndex(0);
  lc_userHomeClsCdCond.setSelectedIndex(0);
  lc_userSearch.setSelectedIndex(0);
  ed_searchUser.setValue("");
  ds_415List.setJSON([]);
  ds_grpUserList.setJSON([]);
  ds_userList.setJSON([]);
  gr_415List_spanTotal.setLabel(0);
  gr_grpUserList_spanTotal.setLabel(0);
  gr_userList_spanTotal.setLabel(0);
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  ds_grpUserList.setJSON([]);
  let debis = "";
  if (rd_debis.getValue() == "N") {
    debis = "ncall.";
  }
  // 권한그룹 조회 
  var arrJson = {
    qryCond: lc_searchPrivGrpCond.getValue(),
    qryCntn: ed_searchPrivGrp.getValue()
  };
  sbm_415List.action = "/" + debis + "cm.bc.comnmgnt.privmgnt.RetrievePrivilegeGroupListCMD.do";
  $c.sbm.execute($p, sbm_415List, arrJson);
};
scwin.f_RetrieveUser = function () {
  // 사용자 조회 
  if (lc_userSearch.getValue() == "0") {
    var arrJson = {
      "arrJSON": {
        userNm: ed_searchUser.getValue(),
        userHomeClsCd: lc_userHomeClsCdCond.getValue(),
        userClsCd: lc_userClsCdCond.getValue(),
        useYn: 1,
        privGrpId: ds_415List.getCellData(ds_415List.getRowPosition(), "privGrpId")
      },
      "OUT_DS1": {}
    };
  } else {
    var arrJson = {
      "arrJSON": {
        userId: ed_searchUser.getValue(),
        userHomeClsCd: lc_userHomeClsCdCond.getValue(),
        userClsCd: lc_userClsCdCond.getValue(),
        useYn: 1,
        privGrpId: ds_415List.getCellData(ds_415List.getRowPosition(), "privGrpId")
      },
      "OUT_DS1": {}
    };
  }
  let debis = "";
  if (rd_debis.getValue() == "N") {
    debis = "ncall.";
  }
  sbm_userList.action = "/" + debis + "cm.bc.comnmgnt.privmgnt.RetrieveUserListCMD.do";
  $c.sbm.execute($p, sbm_userList, arrJson);
};
scwin.f_retrieveGrpUser = function () {
  if (ds_415List.getRowCount() > 0) {
    let privGrpId = ds_415List.getCellData(ds_415List.getRowPosition(), "privGrpId");
    let arrJson = {
      privGrpId: privGrpId
    };
    let debis = "";
    if (rd_debis.getValue() == "N") {
      debis = "ncall.";
    }
    sbm_grpUserList.action = "/" + debis + "cm.bc.comnmgnt.privmgnt.RetrievePrivilegeGroupUserListCMD.do";
    $c.sbm.execute($p, sbm_grpUserList, arrJson);
  }
};

// AS-IS 시작
//-------------------------------------------------------------------------
// function name : f_LMove
// function desc : 좌이동
//-------------------------------------------------------------------------
scwin.f_LMove = function () {
  var vprivGrpId_ds_415List = ds_415List.getCellData(ds_415List.getRowPosition(), "privGrpId");
  var vprivGrpId_ds_grpUserList = ds_415List.getCellData(0, "privGrpId");
  var vContinue = 0;
  for (var i = 0; i < ds_userList.getTotalRow(); i++) {
    var rowJson = ds_userList.getRowJSON(i);
    if (rowJson.chk == "1") {
      for (var j = 0; j < ds_grpUserList.getTotalRow(); j++) {
        var rowJsonG = ds_grpUserList.getRowJSON(j);
        if (rowJson.userId == rowJsonG.userId) {
          $c.win.alert($p, "USER ID : " + rowJson.userId + "는 이미 등록되어 있습니다");
          vContinue = 1;
          break;
        }
      }
      if (vContinue == 1) {
        vContinue = 0;
        continue;
      }
      var rowIndex = ds_grpUserList.getTotalRow();
      ds_grpUserList.insertRow(rowIndex);
      ds_grpUserList.setCellData(rowIndex, "userId", rowJson.userId);
      ds_grpUserList.setCellData(rowIndex, "userNm", rowJson.userNm);
      if (ds_grpUserList.getCellData(0, "privGrpId") != "") {
        ds_grpUserList.setCellData(rowIndex, "privGrpId", vprivGrpId_ds_grpUserList);
      } else {
        ds_grpUserList.setCellData(rowIndex, "privGrpId", vprivGrpId_ds_415List);
      }
      gr_grpUserList.setFocusedCell(rowIndex, 0);
    }
  } //for
};

//-------------------------------------------------------------------------
// function name : f_LMoveForDblClick
// function desc : 좌이동
//-------------------------------------------------------------------------
scwin.f_LMoveForDblClick = function (row) {
  var usrId = ds_userList.getCellData(row, "userId");
  for (var i = 0; i < ds_grpUserList.getTotalRow(); i++) {
    var rowJson = ds_grpUserList.getRowJSON(i);
    if (rowJson.userId == usrId) {
      $c.win.alert($p, "USER ID : " + usrId + "는 이미 등록되어 있습니다");
      return false;
      break;
    }
  }
  var rowIndex = ds_grpUserList.getTotalRow();
  ds_grpUserList.insertRow(rowIndex);
  ds_grpUserList.setCellData(rowIndex, "userId", ds_userList.getCellData(row, "userId"));
  ds_grpUserList.setCellData(rowIndex, "userNm", ds_userList.getCellData(row, "userNm"));
  if (ds_grpUserList.getCellData(0, "privGrpId") != "") {
    ds_grpUserList.setCellData(rowIndex, "privGrpId", ds_grpUserList.getCellData(0, "privGrpId"));
  } else {
    ds_grpUserList.setCellData(rowIndex, "privGrpId", ds_415List.getCellData(ds_415List.getRowPosition(), "privGrpId"));
  }
  gr_grpUserList.setFocusedCell(rowIndex, 0);
};

//-------------------------------------------------------------------------
// function name : f_RMove
// function desc : 좌이동
//-------------------------------------------------------------------------
scwin.f_RMove = function () {
  $c.data.deleteRow($p, ds_grpUserList);
};

//-------------------------------------------------------------------------
// function name : f_save
// function desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmResult) {
    let debis = "";
    if (rd_debis.getValue() == "N") {
      debis = "ncall.";
    }
    sbm_save.action = "/" + debis + "cm.bc.comnmgnt.privmgnt.SavePrivilegeGroupUserListCMD.do";
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_415List_submitdone = function (e) {
  var rowCnt = ds_415List.getRowCount();
  gr_415List_spanTotal.setLabel(rowCnt);
  if (rowCnt > 0) {
    ds_415List.sort("privGrpId", 0);
    gr_415List.setFocusedCell(0, 0);
    scwin.f_retrieveGrpUser();
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  }
  scwin.f_RetrieveUser();
};
scwin.sbm_grpUserList_submitdone = function (e) {
  var rowCnt = ds_grpUserList.getRowCount();
  gr_grpUserList_spanTotal.setLabel(rowCnt);
  if (rowCnt > 0) {
    gr_grpUserList.setFocusedCell(0, 0);
  } else {
    // $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  }
  //scwin.f_RetrieveUser();
};
scwin.sbm_userList_submitdone = function (e) {
  var rowCnt = ds_userList.getRowCount();
  gr_userList_spanTotal.setLabel(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  } else if (rowCnt == 1) {
    scwin.f_LMoveForDblClick(0);
    ds_userList.removeAll();
    ed_searchUser.setValue("");
    ed_searchUser.focus();
  } else {
    gr_userList.setFocusedCell(0, 0);
  }
};
scwin.gr_415List_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_retrieveGrpUser();
};
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.win.alert($p, MSG_CM_INF_001);
  ds_grpUserList.removeAll();
  ds_userList.removeAll();
  scwin.f_retrieveGrpUser();
  scwin.f_RetrieveUser();
};
scwin.gr_userList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_LMoveForDblClick(rowIndex);
};
scwin.gr_grpUserList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  $c.data.deleteRow($p, ds_grpUserList);
};
scwin.btn_search1_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1, ["ed_searchPrivGrp"]);
  if ($p.getAllParameter().paramData.menuInfo.menuId.indexOf("n") > -1) {
    rd_debis.setSelectedIndex(1);
  } else {
    rd_debis.setSelectedIndex(0);
  }
};
scwin.btn_search2_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, table2, ["ed_searchUser"]);
};
scwin.rd_debis_onviewchange = function (info) {
  scwin.init();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'table1',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'','ev:onviewchange':'scwin.rd_debis_onviewchange',id:'rd_debis',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'0',style:'width:150px;'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DEBIS'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'NCALL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'',class:'',displayMode:'value delim label',editType:'select',id:'lc_searchPrivGrpCond',mandatory:'true',ref:'',search:'start',style:'width:150px;',submenuSize:'auto'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'권한그룹명'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'권한그룹ID'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_searchPrivGrp',style:'width: 150px;'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_search1_init',type:'button',class:'btn ico refresh','ev:onclick':'scwin.btn_search1_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_PrivGrpRetrieve',type:'button',class:'btn sch',escape:'false','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 800px;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'table2',class:'w2tb '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'사용자구분 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',class:'',editType:'select',id:'lc_userClsCdCond',mandatory:'true',ref:'',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'20'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'00'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'국내 운영 실적'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'AS'}]}]}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_userHomeClsCdCond',mandatory:'true',ref:'',search:'start',style:'width:100px;',submenuSize:'auto',visibleRowNum:'15',chooseOption:'true',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:autoComplete',A:{allOption:'',class:'',displayMode:'value delim label',editType:'select',id:'lc_userSearch',mandatory:'true',ref:'',search:'start',style:'width:100px;',submenuSize:'auto',chooseOption:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용자명'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용자ID'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_searchUser',style:'width: 100px;'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_search2_init',type:'button',class:'btn ico refresh','ev:onclick':'scwin.btn_search2_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_trigger5',type:'button',class:'btn sch',escape:'false','ev:onclick':'scwin.f_RetrieveUser'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox col4 wfix',id:'',style:'height: auto'},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'권한그룹 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_415List',focusMode:'cell',id:'gr_415List',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',rowStatusWidth:'30',readOnly:'true','ev:oncellclick':'scwin.gr_415List_oncellclick',rowStatusVisible:'true',drawType:'virtual',sortable:'true',sortOrderReverse:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type1',displayMode:'label',id:'column1',inputType:'text',removeBorderStyle:'false',value:'그룹코드',width:'100',sortLabel:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column2',inputType:'text',removeBorderStyle:'false',value:'권한그룹명',width:'130',class:'col-type1'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'privGrpId',inputType:'text',removeBorderStyle:'false',width:'100',dataType:'text',sortLabel:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'privGrpNm',inputType:'text',removeBorderStyle:'false',width:'130',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'gr_415List_spanTotal',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'권한그룹 사용자 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_grpUserList',focusMode:'cell',id:'gr_grpUserList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',rowStatusWidth:'30',readOnly:'true','ev:oncelldblclick':'scwin.gr_grpUserList_oncelldblclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',class:'',displayMode:'label',id:'column1',inputType:'checkbox',removeBorderStyle:'false',value:'코드번호',width:'50',fixColumnWidth:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column2',inputType:'text',removeBorderStyle:'false',value:'ID',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column9',value:'이름',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'chk',inputType:'checkbox',removeBorderStyle:'false',width:'50',fixColumnWidth:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'userId',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'userNm',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'gr_grpUserList_spanTotal',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',btnCancelYn:'N',style:'',btnRowAddYn:'N',btnRowDelYn:'Y',id:'udc_gr_grpUserList',gridID:'gr_grpUserList'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col vam',style:'width: 25px;'},E:[{T:1,N:'xf:group',A:{id:'',class:'shattle flex-row'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_leftMove',type:'button',class:'btn ico btn-double-left','ev:onclick':'scwin.f_LMove'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_rightMove',type:'button',class:'btn ico btn-double-right','ev:onclick':'scwin.f_RMove'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 770px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'사용자 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_userList',focusMode:'cell',id:'gr_userList',rowNumVisible:'false',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',rowStatusWidth:'30',readOnly:'true','ev:oncelldblclick':'scwin.gr_userList_oncelldblclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'column9',value:'',displayMode:'label',fixColumnWidth:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'ID',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column11',value:'이름',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column7',value:'사용자구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'소속구분',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'chk',value:'',displayMode:'label',fixColumnWidth:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'userId',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'userNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'userClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'userHomeClsCd',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'gr_userList_spanTotal',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})