/*amd /ui/cm/bc/comnmgnt/usermgnt/zz_620_01_03b.xml 25310 807bc30676ab63d2bdfbaa7bdff984a83d32060cc35b2e0f9f0b32f4e60b323a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'userId',name:'사용자ID'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list','ev:onrowpositionchange':'scwin.ds_315List_onrowpositionchange',id:'ds_resultList',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'userId',name:'사용자ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'epId',name:'다이렉트아이디'}},{T:1,N:'w2:column',A:{dataType:'text',id:'empNo',name:'사원번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'privGrpId',name:'권한그룹ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'privGrpNm',name:'권한그룹명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'empNm',name:'사원번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNo',name:'거래처번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNm',name:'거래처번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'upperClntNo',name:'거래처번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userNm',name:'사용자명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'passwd',name:'비밀번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'passwdExpdt',name:'비밀번호EXP일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'decPasswd',name:'비밀번호EXP여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col14',name:'decPasswd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'finalPasswdChgDt',name:'최종비밀번호변경일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'email',name:'EMAIL'}},{T:1,N:'w2:column',A:{dataType:'text',id:'zip',name:'우편번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'addr1',name:'주소1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'addr2',name:'주소2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userClsCd',name:'사용자구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userClsCdNm',name:'userClsCdNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userHomeClsCd',name:'사용자소속구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lobranCd',name:'물류점소코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lobranNm',name:'lobranNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lobranPrivLvl',name:'물류점소권한레벨'}},{T:1,N:'w2:column',A:{dataType:'text',id:'loUpperLobranCd',name:'물류상위점소코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'loUpperLobranNm',name:'물류상위점소코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'exprOfcCd',name:'고속영업소코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'exprOfcNm',name:'exprOfcNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'exprOfcPrivLvl',name:'고속영업소권한레벨'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rentcarOfcCd',name:'렌터카영업소코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rentcarOfcNm',name:'rentcarOfcNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rentcarBranchPatternCd',name:'렌터카지점유형코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rentcarOfcPrivLvl',name:'렌터카영업소권한레벨'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fixWrkPlCd',name:'정비작업장코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fixWrkPlNm',name:'fixWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'eqHomeClsCd',name:'정비소속구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fixWrkPlPrivLvl',name:'정비작업장권한레벨'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptNm',name:'귀속부서코드명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptCd',name:'귀속부서코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptPrivLvl',name:'귀속부서권한레벨'}},{T:1,N:'w2:column',A:{dataType:'text',id:'useYn',name:'사용여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'basisMenuClsCd',name:'기본메뉴구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userMpNo',name:'사용자핸드폰번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userMpNo2',name:'사용자핸드폰번호2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'finalConDtm',name:'최종접속일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'finalConIp',name:'최종접속IP'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regId',name:'등록자ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regDtm',name:'등록일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modId',name:'수정자ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modDtm',name:'수정일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userBasisPgmId',name:'사용자기본프로그램ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userBasisPgmNm',name:'사용자기본프로그램명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'occpgrdNm',name:'직급명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'passwdChgCycCd',name:'패스워드변경주기'}},{T:1,N:'w2:column',A:{dataType:'text',id:'msgConfirmCycCd',name:'메시지갱신주기'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sysAdminYn',name:'시스템 관리자 여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ssoAuthYn',name:'SSO 인증 여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'deptNm',name:'부서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pstNm',name:'직위명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'districtCd',name:'노임권역코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'occpposNm',name:'보직명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'chk',name:'chk'}},{T:1,N:'w2:column',A:{dataType:'text',id:'coClsCd',name:'회계_회사구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'coCd',name:'회사코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'branchAggrDeptCd',name:'지사코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'branchAggrDeptNm',name:'지사명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'branchLobranCd',name:'지사의점소코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'branchLobranNm',name:'지사의점소명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'viewAcctDeptCd',name:'싱글뷰지사코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'viewAcctDeptNm',name:'싱글뷰지사명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'viewLobranCd',name:'싱글뷰지사점소코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'viewLobranNm',name:'싱글뷰지사점소명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blockReason',name:'blockReason'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blockDt',name:'blockDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blockEtDt',name:'blockEtDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blockCancelEtDt',name:'blockCancelEtDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'authLoginYn',name:'authLoginYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'empTelNo',name:'empTelNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'empFaxNo',name:'empFaxNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'retireDt',name:'retireDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mismatchRsn',name:'mismatchRsn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'privAdmin',name:'privAdmin'}},{T:1,N:'w2:column',A:{dataType:'text',id:'decPwd',name:'decPwd'}},{T:1,N:'w2:column',A:{id:'darkmodeYn',name:'darkmodeYn',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map','ev:onrowpositionchange':'scwin.ds_315List_onrowpositionchange',id:'dma_result',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'userId',name:'사용자ID'}},{T:1,N:'w2:key',A:{dataType:'text',id:'epId',name:'다이렉트아이디'}},{T:1,N:'w2:key',A:{dataType:'text',id:'empNo',name:'사원번호'}},{T:1,N:'w2:key',A:{dataType:'text',id:'privGrpId',name:'권한그룹ID'}},{T:1,N:'w2:key',A:{dataType:'text',id:'privGrpNm',name:'권한그룹명'}},{T:1,N:'w2:key',A:{dataType:'text',id:'empNm',name:'사원번호'}},{T:1,N:'w2:key',A:{dataType:'text',id:'clntNo',name:'거래처번호'}},{T:1,N:'w2:key',A:{dataType:'text',id:'clntNm',name:'거래처번호'}},{T:1,N:'w2:key',A:{dataType:'text',id:'upperClntNo',name:'거래처번호'}},{T:1,N:'w2:key',A:{dataType:'text',id:'userNm',name:'사용자명'}},{T:1,N:'w2:key',A:{dataType:'text',id:'passwd',name:'비밀번호'}},{T:1,N:'w2:key',A:{dataType:'text',id:'passwdExpdt',name:'비밀번호EXP일자'}},{T:1,N:'w2:key',A:{dataType:'text',id:'decPasswd',name:'비밀번호EXP여부'}},{T:1,N:'w2:key',A:{dataType:'text',id:'col14',name:'decPasswd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'finalPasswdChgDt',name:'최종비밀번호변경일자'}},{T:1,N:'w2:key',A:{dataType:'text',id:'email',name:'EMAIL'}},{T:1,N:'w2:key',A:{dataType:'text',id:'zip',name:'우편번호'}},{T:1,N:'w2:key',A:{dataType:'text',id:'addr1',name:'주소1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'addr2',name:'주소2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'userClsCd',name:'사용자구분코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'userClsCdNm',name:'userClsCdNm'}},{T:1,N:'w2:key',A:{dataType:'text',id:'userHomeClsCd',name:'사용자소속구분코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'lobranCd',name:'물류점소코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'lobranNm',name:'lobranNm'}},{T:1,N:'w2:key',A:{dataType:'text',id:'lobranPrivLvl',name:'물류점소권한레벨'}},{T:1,N:'w2:key',A:{dataType:'text',id:'loUpperLobranCd',name:'물류상위점소코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'loUpperLobranNm',name:'물류상위점소코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'exprOfcCd',name:'고속영업소코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'exprOfcNm',name:'exprOfcNm'}},{T:1,N:'w2:key',A:{dataType:'text',id:'exprOfcPrivLvl',name:'고속영업소권한레벨'}},{T:1,N:'w2:key',A:{dataType:'text',id:'rentcarOfcCd',name:'렌터카영업소코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'rentcarOfcNm',name:'rentcarOfcNm'}},{T:1,N:'w2:key',A:{dataType:'text',id:'rentcarBranchPatternCd',name:'렌터카지점유형코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'rentcarOfcPrivLvl',name:'렌터카영업소권한레벨'}},{T:1,N:'w2:key',A:{dataType:'text',id:'fixWrkPlCd',name:'정비작업장코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'fixWrkPlNm',name:'fixWrkPlNm'}},{T:1,N:'w2:key',A:{dataType:'text',id:'eqHomeClsCd',name:'정비소속구분코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'fixWrkPlPrivLvl',name:'정비작업장권한레벨'}},{T:1,N:'w2:key',A:{dataType:'text',id:'acctDeptNm',name:'귀속부서코드명'}},{T:1,N:'w2:key',A:{dataType:'text',id:'acctDeptCd',name:'귀속부서코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'acctDeptPrivLvl',name:'귀속부서권한레벨'}},{T:1,N:'w2:key',A:{dataType:'text',id:'useYn',name:'사용여부'}},{T:1,N:'w2:key',A:{dataType:'text',id:'basisMenuClsCd',name:'기본메뉴구분코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'userMpNo',name:'사용자핸드폰번호'}},{T:1,N:'w2:key',A:{dataType:'text',id:'userMpNo2',name:'사용자핸드폰번호2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'finalConDtm',name:'최종접속일시'}},{T:1,N:'w2:key',A:{dataType:'text',id:'finalConIp',name:'최종접속IP'}},{T:1,N:'w2:key',A:{dataType:'text',id:'regId',name:'등록자ID'}},{T:1,N:'w2:key',A:{dataType:'text',id:'regDtm',name:'등록일시'}},{T:1,N:'w2:key',A:{dataType:'text',id:'modId',name:'수정자ID'}},{T:1,N:'w2:key',A:{dataType:'text',id:'modDtm',name:'수정일시'}},{T:1,N:'w2:key',A:{dataType:'text',id:'userBasisPgmId',name:'사용자기본프로그램ID'}},{T:1,N:'w2:key',A:{dataType:'text',id:'userBasisPgmNm',name:'사용자기본프로그램명'}},{T:1,N:'w2:key',A:{dataType:'text',id:'occpgrdNm',name:'직급명'}},{T:1,N:'w2:key',A:{dataType:'text',id:'passwdChgCycCd',name:'패스워드변경주기'}},{T:1,N:'w2:key',A:{dataType:'text',id:'msgConfirmCycCd',name:'메시지갱신주기'}},{T:1,N:'w2:key',A:{dataType:'text',id:'sysAdminYn',name:'시스템 관리자 여부'}},{T:1,N:'w2:key',A:{dataType:'text',id:'ssoAuthYn',name:'SSO 인증 여부'}},{T:1,N:'w2:key',A:{dataType:'text',id:'deptNm',name:'부서명'}},{T:1,N:'w2:key',A:{dataType:'text',id:'pstNm',name:'직위명'}},{T:1,N:'w2:key',A:{dataType:'text',id:'districtCd',name:'노임권역코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'occpposNm',name:'보직명'}},{T:1,N:'w2:key',A:{dataType:'text',id:'chk',name:'chk'}},{T:1,N:'w2:key',A:{dataType:'text',id:'coClsCd',name:'회계_회사구분'}},{T:1,N:'w2:key',A:{dataType:'text',id:'coCd',name:'회사코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'branchAggrDeptCd',name:'지사코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'branchAggrDeptNm',name:'지사명'}},{T:1,N:'w2:key',A:{dataType:'text',id:'branchLobranCd',name:'지사의점소코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'branchLobranNm',name:'지사의점소명'}},{T:1,N:'w2:key',A:{dataType:'text',id:'viewAcctDeptCd',name:'싱글뷰지사코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'viewAcctDeptNm',name:'싱글뷰지사명'}},{T:1,N:'w2:key',A:{dataType:'text',id:'viewLobranCd',name:'싱글뷰지사점소코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'viewLobranNm',name:'싱글뷰지사점소명'}},{T:1,N:'w2:key',A:{dataType:'text',id:'blockReason',name:'blockReason'}},{T:1,N:'w2:key',A:{dataType:'text',id:'blockDt',name:'blockDt'}},{T:1,N:'w2:key',A:{dataType:'text',id:'blockEtDt',name:'blockEtDt'}},{T:1,N:'w2:key',A:{dataType:'text',id:'blockCancelEtDt',name:'blockCancelEtDt'}},{T:1,N:'w2:key',A:{dataType:'text',id:'authLoginYn',name:'authLoginYn'}},{T:1,N:'w2:key',A:{dataType:'text',id:'empTelNo',name:'empTelNo'}},{T:1,N:'w2:key',A:{dataType:'text',id:'empFaxNo',name:'empFaxNo'}},{T:1,N:'w2:key',A:{dataType:'text',id:'retireDt',name:'retireDt'}},{T:1,N:'w2:key',A:{dataType:'text',id:'mismatchRsn',name:'mismatchRsn'}},{T:1,N:'w2:key',A:{dataType:'text',id:'privAdmin',name:'privAdmin'}},{T:1,N:'w2:key',A:{dataType:'text',id:'decPwd',name:'decPwd'}},{T:1,N:'w2:key',A:{id:'darkmodeYn',name:'darkmodeYn',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/cm.bc.comnmgnt.usermgnt.cmd.RetrieveUserWithIdCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_search',target:'data:json,{"id":"dma_result","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/cm.bc.comnmgnt.usermgnt.cmd.UpdateUserEnvironmentSetUpCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_result","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId;
scwin.userNm = scwin.memJson.userNm;
console.log("##### userId : " + scwin.userId);
console.log("##### userNm : " + scwin.userNm);
scwin.MSG_LO_ERR_001 = "기본메뉴를 선택하세요.";
scwin.MSG_LO_ERR_002 = "초기프로그램을 선택하세요.";
scwin.MSG_LO_ERR_003 = "비밀번호변경주기를 선택하세요.";
scwin.MSG_LO_ERR_004 = "메시지확인주기를 선택하세요.";
scwin.MSG_LO_ERR_005 = "사용자구분코드를 선택하세요.";
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ011",
    compID: "lc_basisMenuClsCd"
  }, {
    grpCd: "ZZ402",
    compID: "lc_msgConfirmCycCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {
  console.log("===========scwin.ondataload==========");
};

// UDC 셋팅이 이후..
scwin.onUdcCompleted = function () {
  console.log("===========scwin.onUdcCompleted==========");
  $c.gus.cfDisableKeyData($p);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회 : 데이터를 조회한다.
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  dma_search.set("userId", scwin.userId);
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 저장 : 
//-------------------------------------------------------------------------
scwin.f_Update = async function () {
  console.log("===========scwin.f_Update==========");
  if (await scwin.f_ReqFieldChk()) {
    let ret = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (ret) {
      $c.sbm.execute($p, sbm_save);
    }
  }
};
scwin.f_ReqFieldChk = function (e) {
  //필수입력항목 체크
  if (lc_basisMenuClsCd.getValue() == "") {
    $c.win.alert($p, scwin.MSG_LO_ERR_001);
    return false;
  }
  if (lc_msgConfirmCycCd.getValue() == "") {
    $c.win.alert($p, scwin.MSG_LO_ERR_004);
    return false;
  }
  return true;
};
scwin.sbm_search_submitdone = function (e) {
  var json = e.responseJSON;
  dma_result.setJSON(json["GAUCE"][0]);
};
scwin.sbm_save_submitdone = function (e) {
  if (rd_darkmodeYn.getValue() == "1") {
    // 다크모드일때
    $("body").addClass("dark");
    $p.top().dma_memInfo.set("darkmodeYn", "1");
  } else {
    $("body").removeClass("dark");
    $p.top().dma_memInfo.set("darkmodeYn", "0");
  }
  //$c.data.getMemInfo("darkmodeYn");
  $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
};
scwin.sbm_save_submiterror = function (e) {
  //cfShowError(tr_saveEmp);
};

//-------------------------------------------------------------------------
// 코드팝업
//------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  console.log("============f_openCommonPopUp=========");
  // 선언부
  //var rtnList;  // 공통POP-UP -> 요청화면 
  var rtnList = new Array();
  var SelectValue = "retrievePgmInfo";
  var bAllSearch = "T";
  var bAutoClose = "F";
  var bExist = "F";
  switch (disGubun) {
    case 1:
      rtnList = await udc_actPgmId.cfCommonPopUp(scwin.udc_actPgmId_callback, "", "", pClose, null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , bExist // 중복체크여부	("F")
      , bAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};
scwin.udc_actPgmId_callback = function (rtnList) {
  console.log("============udc_acctDeptCdCond_callback=========");
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_actPgmId.setValue(rtnList[0]);
      ed_actPgmId.options.hidVal = rtnList[0];
      ed_actPgmNm.setValue(rtnList[1]);
    }
  } else {
    ed_actPgmId.setValue("");
    ed_actPgmId.options.hidVal = "";
    ed_actPgmNm.setValue("");
  }
};
scwin.udc_actPgmId_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_actPgmId.getValue(), ed_actPgmNm.getValue(), 'F', 'F');
};
scwin.udc_actPgmId_onclickEvent = function (e) {
  console.log("============udc_actPgmId_onclickEvent=========");
  scwin.f_openCommonPopUp(1, ed_actPgmId.getValue(), ed_actPgmNm.getValue(), 'F', 'F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'개인환경설정',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용자ID',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_userId',style:'',ref:'data:dma_result.userId',objType:'data',maxlength:'50',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용자명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_userNm',style:'',ref:'data:dma_result.userNm',objType:'data',maxlength:'50',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기본메뉴',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',class:'',editType:'select',id:'lc_basisMenuClsCd',ref:'data:dma_result.basisMenuClsCd',search:'start',style:'width:150px;',submenuSize:'auto',mandatory:'true',chooseOption:''},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'화면모드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{id:'rd_darkmodeYn',selectedIndex:'0',appearance:'full',style:'width:196px;height:21px;',cols:'2',rows:'',ref:'data:dma_result.darkmodeYn',renderType:'radiogroup'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일반모드'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'다크모드'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'display:none;'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'초기프로그램',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_actPgmId',code:'userBasisPgmId',codeId:'ed_actPgmId',editTypeName:'focus','ev:onblurCodeEvent':'scwin.udc_actPgmId_onblurCodeEvent','ev:onclickEvent':'scwin.udc_actPgmId_onclickEvent',id:'udc_actPgmId',maxlengthCode:'100',maxlengthName:'100',name:'userBasisPgmNm',nameId:'ed_actPgmNm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'dma_result',selectID:'retrievePgmInfo',style:'',validExpCode:'프로그램명:no:maxByteLength=100',codeWidth:'150',readOnlyName:'true',readOnlyCode:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'메시지확인주기',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',class:'',editType:'select',id:'lc_msgConfirmCycCd',ref:'data:dma_result.msgConfirmCycCd',search:'start',style:'width:150px;',submenuSize:'auto',mandatory:'true',chooseOption:'',visibleRowNum:'10'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Update',style:'',type:'button','ev:onclick':'scwin.f_Update',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]}]}]}]}]}]}]})