/*amd /ui/ac/fm/collmoneymgnt/collmoneymgnt/fm_501_01_02b.xml 81366 0838b1a39bba662ddb26b0a2be5e26a1628d7057e4c79a0b21a2b5345f5670a7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchCollMoneyDetail'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'collectionOfMoneyNumber',name:'수금번호',dataType:'text'}}]},{T:1,N:'w2:data'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchCollMoney'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromDate',name:'수금예정일자 시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDate',name:'수금예정일자 종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyFromDate',name:'입금일자 시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyToDate',name:'입금일자 종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'수금귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lowerDeptIncluYn',name:'하위부서 포함여부',dataType:'number'}},{T:1,N:'w2:key',A:{id:'collMoneyCntSht',name:'수금수단 계정종류 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookNo',name:'통장번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntEmpNo',name:'수금사원',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctRecvStsCd',name:'작업구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delYn',name:'취소포함여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvEmpNo',name:'승인자사번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchStDate',name:'부서검색시 이용되는 기준날짜',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchEndDate',name:'부서검색시 이용되는 기준날짜',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dma_addCollMoney',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'queryDeptSearchStDate',name:'부서검색시 이용되는 기준날짜',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryDeptSearchEndDate',name:'부서검색시 이용되는 기준날짜',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_collMoneyList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgDt',name:'청구일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처;번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자;번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtOutbrDt',name:'입금일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptrNm',name:'입금자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtDebit',name:'차변;금액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtCredit',name:'대변;금액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'collMoneySlipNo',name:'수금전표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyNo',name:'수금번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'청구귀속',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'수금;사원',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNm',name:'승인자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpEmail',name:'승인자메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvStsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclSlipNo',name:'취소전표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제;여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclDt',name:'수금;취소일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrcDebit',name:'차변;금액(외)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtFcrcCredit',name:'대변;금액(외)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNo',name:'승인자사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispClntNo',name:'매각거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispDcRt',name:'매각할인율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cancelDt',name:'취소일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtPrdClsCd',name:'결제구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtPrdDd',name:'결제기한',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyCntShtCd',name:'지급방식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCnt',name:'지급기한',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneySlipKndCd',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvCnslSlipNo',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispClntNm',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchCd',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchNm',name:'name47',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_collMoneyCont',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'collMoneyAdjmSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'세금계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvNo',name:'어음번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'정리계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'정리금액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'정리금액(외)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtOutbrNo',name:'가선수관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'채권관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'어음관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyNo',name:'수금번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClsCd',name:'차대구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col17',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_admin',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNmAbbr',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdDesc',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grpCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCdNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNmAbbr',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd3',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name18',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchCollMoney',action:'/ac.fm.collmoneymgnt.collmoneymgnt.RetrieveCollectionOfMoneyListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchCollMoney","key":"IN_DS1"},{"id":"ds_collMoneyList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_collMoneyList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchCollMoney_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchCollMoneyDetail',action:'/ac.fm.collmoneymgnt.collmoneymgnt.RetrieveCollectionOfMoneyAdjustmentContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchCollMoneyDetail","key":"IN_DS1"},{"id":"ds_collMoneyCont","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_collMoneyCont","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchCollMoneyDetail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveCollMoney',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_addCollMoney","key":"IN_DS2"},{"action":"modified","id":"ds_collMoneyList","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveCollMoney_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_apprvCancelRequestCollMoney',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_collMoneyList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_apprvCancelRequestCollMoney_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_apprvCollMoney',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_collMoneyList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_apprvCollMoney_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_admin',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=FM096&cd=&cdNm=',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_admin","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.sDate = WebSquare.date.getCurrentServerDate();
scwin.strFromDate = scwin.sDate.substring(0, 6) + "01";
scwin.strToDate = scwin.sDate;
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.isChecked = true;

//	 버튼 권한을 가져온다.
//CodeDTOCache codeDTOCache = CodeDTOCache.getInstance();
//String sChkUser = "0";	// 확정버튼 사용권한이 있는지여부 확인 초기값 false

//CodeDTO codeDTO[] = codeDTOCache.getCodeDTOArray("FM096");		// 권한코드를 가져온다. 공통코드FM096 - 채권팀.
//Vector vGrantUser = new Vector();
//for (int i=0; i<codeDTO.length; i++ ) {
//vGrantUser.add(codeDTO[i].getCd());
//}

//공통코드 FM096(채권팀)에 로그인한 사용자의 사번이 있으면 sChkUser = 1, 없으면 0으로 셋팅.
//for (int i=0; i<vGrantUser.size(); i++) {
//if ( vGrantUser.elementAt(i).equals((login.getEmpNo())) ) {
//sChkUser = "1";
//}
//}

scwin.sFlag = true;
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.login.coCd) ? '' : scwin.login.coCd; // 소속 자회사  
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.login.coClsCd) ? '' : scwin.login.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd; // 사용자소속구분코드 
scwin.isSubCompany = false;

//hidden
scwin.txtCoClsCd = "";

// 권한
// empNo - "021169"

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FM036",
    compID: "gr_collMoneyList:acctRecvStsCd,acb_acctRecvStsCd",
    opt: {
      'range': '2,1'
    }
  }, {
    grpCd: "SD020",
    compID: "gr_collMoneyList:stmtPrdClsCd"
  }, {
    grpCd: "SD010",
    compID: "gr_collMoneyList:collMoneyCntShtCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  scwin.f_setCompanyInfo();
  ed_FromDate.setValue(scwin.strFromDate);
  ed_ToDate.setValue(scwin.strToDate);
  ica_cancelDt.setValue(scwin.strToDate);
  dma_addCollMoney.insertRow(0);
  dma_searchCollMoney.set("queryDeptSearchStDate", scwin.strFromDate); // dma -> ds 변경될수있음.
  dma_addCollMoney.setCellData(0, "queryDeptSearchStDate", scwin.strFromDate); // dma -> ds 변경될수있음.
  dma_searchCollMoney.set("queryDeptSearchEndDate", scwin.strToDate); // dma -> ds 변경될수있음.
  dma_addCollMoney.setCellData(0, "queryDeptSearchEndDate", scwin.strToDate); // dma -> ds 변경될수있음.
  dma_addCollMoney.modifyRowStatus(0, "R");
  $c.sbm.execute($p, sbm_admin);
};

//-------------------------------------------------------------------------
// 초기화 시킬 내역들 정의
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, table1, []);
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_coCd]))) return;
  dma_searchCollMoney.set("queryDeptSearchStDate", ed_FromDate.getValue()); // dma -> ds 변경될수있음.
  dma_addCollMoney.setCellData(0, "queryDeptSearchStDate", ed_FromDate.getValue()); // dma -> ds 변경될수있음.
  dma_searchCollMoney.set("queryDeptSearchEndDate", ed_ToDate.getValue()); // dma -> ds 변경될수있음.
  dma_addCollMoney.setCellData(0, "queryDeptSearchStDate", ed_FromDate.getValue()); // dma -> ds 변경될수있음.

  if (ed_FromDate.getValue() > ed_ToDate.getValue()) {
    await $c.win.alert($p, "조회 시작일자는 만기일자보다 이전 날짜 이어야 합니다.");
    ed_FromDate.focus();
    return;
  }

  // 필수입력사항 체크
  if (!(await $c.gus.cfValidate($p, [ed_FromDate, ed_ToDate, ed_acctDeptCd]))) {
    return;
  }
  $c.sbm.execute($p, sbm_searchCollMoney);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve2 = function () {
  let row_position = ds_collMoneyList.getRowPosition();
  let collMoneyNo = ds_collMoneyList.getCellData(row_position, "collMoneyNo");
  dma_searchCollMoneyDetail.set("collectionOfMoneyNumber", collMoneyNo); // 수금번호
  $c.sbm.execute($p, sbm_searchCollMoneyDetail);
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->수금귀속부서, 2:조회->등록자
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (select_code) {
  if (select_code == '1' || select_code == '3') {
    if (!(await $c.gus.cfValidate($p, [ed_coCd]))) return;
    ``;
  }
  let code = "";
  let param = "";
  switch (select_code) {
    // 관리부서 PopUp 호출
    case '1':
      // ed_acctDeptNm.setValue("");
      code = ed_acctDeptCd.getValue();
      param = ed_FromDate.getValue().trim() + "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",,,"; //자회사 회계시스템 추가사항 
      udc_dept.cfCommonPopUp(scwin.udc_dept_callBackFunc, code, '', "T", null, null, null, null, param, null, null, null, null); // 청구귀속부서

      // if ( rtnList != null ) {
      //     if ( rtnList[0] == "N/A" ) return ;
      //     ed_acctDeptCd.setValue(rtnList[0]);	// 관리부서코드
      //     ed_acctDeptNm.setValue(rtnList[1]);	// 관리부서명
      //     ed_acctDeptCd.hidVal = rtnList[0];
      // }
      // else {
      //     ed_acctDeptCd.setValue("");
      // }
      break;
    // 등록자 POPUP 호출
    case '2':
      // ed_mgntEmpNm.setValue("");
      code = ed_mgntEmpNo.getValue();
      udc_empinfo.cfCommonPopUp(scwin.udc_empinfo_callBackFunc, code, '', "T", null, null, null, null, null, null, null, null, null); // 사원

      // if ( rtnList != null ) {
      //     if ( rtnList[0] == "N/A" ) return ;
      //     ed_mgntEmpNo.setValue(rtnList[0]); // 사원번호
      //     ed_mgntEmpNm.setValue(rtnList[1]); // 사원명
      //     ed_mgntEmpNo.hidVal = rtnList[0]; // Hidden 사원번호
      // } else {
      //     ed_mgntEmpNo.setValue("");
      // }
      break;
    // 조회조건용 거래처 PopUp 호출
    case '3':
      code = ed_sclntNo.getValue();
      param = "" + ed_coCd.getValue(); //자회사 회계시스템 추가사항
      udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc, code, '', "T", null, null, null, null, param, null, null, null, null); // 거래처(모든 거래처를 다 조회한다.)
      // if ( rtnList != null ) {
      //     if ( rtnList[0] == "N/A" ) return ;
      //     ed_sclntNo.setValue(rtnList[0]); // 거래처코드
      //     ed_sclntNm.setValue(rtnList[1]); // 거래처명
      //     ed_sclntNo.hidVal = rtnList[0]; // Hidden 거래처코드
      // } else {
      //     ed_sclntNo.setValue("");
      // }
      break;
    case '6':
      // 수금요청 승인자 지정 
      code = ed_apprvEmpNo.getValue();
      param = ",,,"; //자회사 회계시스템 추가사항
      udc_apprvEmpNo.cfCommonPopUp(scwin.udc_apprvEmpNo_callBackFunc, code, "", "F", null, null, null, null, param, "450", "500", null, null);
      // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
      // if (rtnList != null ) {
      //     if ( rtnList[0] == "N/A" ) return ;

      //     ed_apprvEmpNo.setValue(rtnList[0]);	// 승인자사번
      //     ed_apprvEmpNm.setValue(rtnList[1]);	// 승인자명

      // } else {
      //     ed_apprvEmpNo.setValue("");	// 승인자사번
      //     ed_apprvEmpNm.setValue("");	// 승인자명
      // }
      break;
    default:
      await $c.win.alert($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------

scwin.udc_dept_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_acctDeptCd.setValue(rtnList[0]);
    ed_acctDeptNm.setValue(rtnList[1]);
    ed_acctDeptCd.options.hidVal = rtnList[0];
  } else {
    ed_acctDeptCd.setValue("");
  }
};
scwin.udc_empinfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_mgntEmpNo.setValue(rtnList[0]);
    ed_mgntEmpNm.setValue(rtnList[1]);
    ed_mgntEmpNo.options.hidVal = rtnList[0];
  } else {
    ed_mgntEmpNo.setValue("");
  }
};
scwin.udc_clntNo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_sclntNo.setValue(rtnList[0]);
    ed_sclntNm.setValue(rtnList[1]);
    ed_sclntNo.options.hidVal = rtnList[0];
  } else {
    ed_sclntNo.setValue("");
  }
};
scwin.udc_apprvEmpNo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_apprvEmpNo.setValue(rtnList[0]);
    ed_apprvEmpNm.setValue(rtnList[1]);
  } else {
    ed_apprvEmpNo.setValue("");
    ed_apprvEmpNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  if (orgObjCd.getValue() == orgObjCd.options.hidVal) {
    if (orgObjCd.getValue().trim() == "") {
      orgObjNm.setValue("");
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
    }
    return;
  }
  if (orgObjCd._wTagName.toUpperCase() == "INPUT") {
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code);
    } else {
      orgObjNm.setValue("");
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
    }
  } else if (orgObjCd._wTagName.toUpperCase() == "OBJECT") {
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code);
    } else {
      orgObjNm.setValue("");
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
    }
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp_Em = function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    if (orgObjCd.getValue() == orgObjCd.options.hidVal) return;else {
      orgObjNm.setValue("");
      scwin.f_openPopUp(select_code);
    }
  } else {
    if (orgObjNm.getValue() == orgObjNm.hidVal) return;else {
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
      scwin.f_openPopUp(select_code);
    }
  }
};

//-------------------------------------------------------------------------
// 수금일계표 호출 (현재 미개발)(2005.10.10)
//-------------------------------------------------------------------------
// scwin.f_Print = function() {
//     if (! await $c.gus.cfValidate([ed_acctDeptCd, ed_acctDeptNm])) {
//         return;
//     }

//     // 전달할 파라미터 객체
//     const valueObject = {
//         fromDate: ed_FromDate.getValue(),
//         toDate: ed_ToDate.getValue(),
//         acctDeptCd: ed_acctDeptCd.getValue(),
//         acctDeptNm: ed_acctDeptNm.getValue(),
//         mgntEmpNo: ed_mgntEmpNo.getValue(),
//         mgntEmpNm: ed_mgntEmpNm.getValue(),
//         coCd: ed_coCd.getValue()
//     };

//     // WebSquare 모달 팝업 호출
//     $p.openPopup({
//         id: "fm_501_01_03p_popup",
//         popupName: "출력 팝업",
//         url: "/ui/ac/fm/collmoneymgnt/collmoneymgnt/fm_501_01_03p.xml",
//         width: 405,
//         height: 250,
//         modal: true,
//         resizable: false,
//         scroll: false,
//         parameter: valueObject,
//         callbackFunction: "scwin.f_PrintCallback"
//     });
// };

//-------------------------------------------------------------------------
// 수금취소 함수 호출
//-------------------------------------------------------------------------
scwin.f_ApprvCancel = async function () {
  // 필수 입력 여부 Check(부서 날짜 검색시 이용됨)
  if (!(await $c.gus.cfValidate($p, [ed_FromDate, ed_ToDate]))) {
    return;
  }

  // 필수입력사항 체크
  if (!(await $c.gus.cfValidate($p, [ica_cancelDt, ed_acctDeptCd]))) {
    return;
  }
  if (!ds_collMoneyList.getModifiedIndex().length > 0) {
    await $c.win.alert($p, "선택하신 사항이 없습니다.");
    return;
  }
  let admin = "";
  let sChkUser = 0;
  let empNo = scwin.login.empNo;

  // ds_admin.SyncLoad = true;
  // ds_admin.DataID = "/cm.zz.RetrieveCodeCMD.do?grpCd=FM096&cd=&cdNm=";
  // ds_admin.Reset();

  for (let i = 0; i < ds_admin.getRowCount(); i++) {
    admin = ds_admin.getCellData(i, "cd");
    if (empNo == admin) {
      sChkUser++;
    }
  }
  for (i = 0; i < ds_collMoneyList.getRowCount(); i++) {
    if (ds_collMoneyList.getCellData(i, "num") == "T") {
      if (sChkUser == '0') {
        if (empNo != "021169") {
          //조정욱 과장 권한 

          //로그인한 사람의 사번과 수금사항을 작성자의 사번이 같지 않으면...
          if (empNo != ds_collMoneyList.getCellData(i, "drawEmpNo").trim()) {
            await $c.win.alert($p, i + 1 + "행의 수금사항작성자는 " + ds_collMoneyList.getCellData(i, "drawEmpNm") + " 이어서 취소할 수 없습니다");
            return;
          }
        }

        //수금취소일자와 수금한일자의 년월이 다르면...
        if (ica_cancelDt.getValue().substring(0, 6) != ds_collMoneyList.getCellData(i, "wrkDt").substring(0, 6)) {
          await $c.win.alert($p, i + 1 + "행의 작성년월이 상이하여 수금취소할 수 없습니다.");
          return;
        }

        //수금상태가 수금취소요청이 아닌경우.
        if (ds_collMoneyList.getCellData(i, "acctRecvStsCd") != "16") {
          await $c.win.alert($p, i + 1 + "행의 선택사항은 상태가 취소요청이 아닙니다.\n상태가 취소요청인것만 승인 가능합니다.");
          ds_collMoneyList.setRowPosition(i);
          return;
        }
      }

      //취소전표번호가 있으면...
      if (ds_collMoneyList.getCellData(i, "cnclSlipNo") != "") {
        await $c.win.alert($p, i + 1 + "행의 수금사항은 수금취소 하실수 없는 상태 입니다.");
        ds_collMoneyList.setRowPosition(i);
        return;
      }

      //수금의 delYn의 상태가 삭제인경우.
      if (ds_collMoneyList.getCellData(i, "delYn") == "1") {
        await $c.win.alert($p, i + 1 + "행의 수금사항은 이미 삭제처리되었습니다. 확인하시기 바랍니다.");
        ds_collMoneyList.setRowPosition(i);
        return;
      }
      if (scwin.vLoginCoCd == "000" || scwin.vLoginCoCd == "029") {
        //수금상태가 수금또는 수금취소요청이 아닌경우.
        if (ds_collMoneyList.getCellData(i, "acctRecvStsCd") == ACConstants.COLLECION_OF_MONEY_COLLOFMONEY || ds_collMoneyList.getCellData(i, "acctRecvStsCd") == "16") {} else {
          await $c.win.alert($p, i + 1 + "행의 선택사항은 상태가 수금요청이 아닙니다.\n상태가  수금요청 인것만 수금취소승인 가능합니다.");
          ds_collMoneyList.setRowPosition(i);
          return;
        }
      } else {
        //수금상태가 수금또는 수금취소요청이 아닌경우.
        if (ds_collMoneyList.getCellData(i, "acctRecvStsCd") == ACConstants.COLLECION_OF_MONEY_COLLOFMONEY) {} else {
          await $c.win.alert($p, i + 1 + "행의 선택사항은 상태가 수금이 아닙니다.\n상태가 수금 인것만 수금취소가 가능합니다.");
          ds_collMoneyList.setRowPosition(i);
          return;
        }
      }
    }
  }
  if (await $c.win.confirm($p, "선택하신 사항을 수금취소 하시겠습니까")) {
    for (i = 0; i < ds_collMoneyList.getRowCount(); i++) {
      if (ds_collMoneyList.getCellData(i, "num") == "T") {
        // 취소일자를 각 Row에 입력한다.
        ds_collMoneyList.setCellData(i, "cnclDt", ica_cancelDt.getValue());
      }
    }

    // let sSlipNo = "";

    sbm_saveCollMoney.action = "/ac.fm.collmoneymgnt.collmoneymgnt.CancelCollectionOfMoneyCMD.do";
    $c.sbm.execute($p, sbm_saveCollMoney);
  }
};

//-------------------------------------------------------------------------
// 수금취소 삭제시 함수 호출
//-------------------------------------------------------------------------
scwin.f_CancelDelete = async function () {
  // 필수 입력 여부 Check(부서 날짜 검색시 이용됨)
  if (!(await $c.gus.cfValidate($p, [ed_FromDate, ed_ToDate]))) {
    return;
  }
  // 필수입력사항 체크
  if (!(await $c.gus.cfValidate($p, [ica_cancelDt, ed_mgntEmpNo, ed_acctDeptCd]))) {
    return;
  }
  if (!ds_collMoneyList.getModifiedIndex().length > 0) {
    await $c.win.alert($p, "선택하신 사항이 없습니다.");
    return;
  }
  for (i = 0; i < ds_collMoneyList.getRowCount(); i++) {
    if (ds_collMoneyList.getCellData(i, "num") == "T") {
      if (ds_collMoneyList.getCellData(i, "cnclSlipNo") == "" && ds_collMoneyList.getCellData(i, "delYn") == "0") {
        await $c.win.alert($p, i + 1 + "행의 수금사항은 수금취소삭제 하실수 없는 상태입니다.");
        return;
      }
      if (ds_collMoneyList.getCellData(i, "cnclDt") === "") {
        await $c.win.alert($p, i + 1 + "행의 수금사항은 수금취소삭제 하실수 없는 상태입니다.");
        return;
      }
      if (ds_collMoneyList.getCellData(i, "acctRecvStsCd") != ACConstants.COLLECION_OF_MONEY_COLLOFMONEY) {
        await $c.win.alert($p, i + 1 + "행의 선택사항은 상태가 수금이 아닙니다.\n상태가 수금 인것만 수금취소삭제가 가능합니다.");
        ds_collMoneyList.setRowPosition(i);
        return;
      }
    }
  }
  if (await $c.win.confirm($p, "선택하신 사항을 수금취소삭제 하시겠습니까")) {
    for (i = 0; i < ds_collMoneyList.getRowCount(); i++) {
      if (ds_collMoneyList.getCellData(i, "num") == "T") {
        // 취소일자를 각 Row에 입력한다.
        ds_collMoneyList.setCellData(i, "cancelDt", ica_cancelDt.getValue());
      }
    }
    sbm_saveCollMoney.action = "/ac.fm.collmoneymgnt.collmoneymgnt.DeleteCollectionOfMoneyCancelCMD.do";
    $c.sbm.execute($p, sbm_saveCollMoney);
    // 등록 화면에 대한 재조회 (자동조회 주석처리 2006.03.16)
    //	  	if (parent.iFrame0.ed_sclntNo.getValue() != "" && parent.iFrame0.ed_sacctDeptCd.getValue() != "" ) {
    //		  	parent.iFrame0.$c.sbm.execute(sbm_searchAcctRecv);
    //scwin.f_Retrieve();
    //		}
  }
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (ds_collMoneyList.getRowCount() == 0) {
    await $c.win.alert($p, "수금내역이 존재하지않습니다.");
    return;
  }
  let fileName = '수금조회';
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    await $c.data.downloadGridViewExcel($p, gr_collMoneyList, {
      fileName: fileName + ".xlsx",
      sheetName: fileName
    });
  }
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_companyInfo.cfCommonPopUp(scwin.udc_companyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo("F");
};
scwin.udc_companyInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
    ed_coCd.options.hidVal = rtnList[0];
    scwin.txtCoClsCd = rtnList[1];
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
    ed_sclntNo.setValue("");
    ed_sclntNm.setValue("");
    ed_mgntEmpNo.setValue("");
    ed_mgntEmpNm.setValue("");
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isChecked == true) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
  }
  scwin.isChecked = false;
};

// scwin.udc_companyInfo_onblurCodeEvent = function (e) {
//     if(ed_coCd.getValue() == ""){
//         ed_coCd.options.hidVal = ""
//         ed_coNm.setValue("");
//         ed_acctDeptCd.setValue("");
//         ed_acctDeptNm.setValue("");
//         ed_sclntNo.setValue("");
//         ed_sclntNm.setValue("");
//         ed_mgntEmpNo.setValue("");
//         ed_mgntEmpNm.setValue("");
//     }else if(ed_coCd.getValue() != ed_coCd.options.hidVal){
//         scwin.f_PopUpCompanyInfo('T');
//     }
// };
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  } else {
    ed_coCd.options.hidVal = "";
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
    ed_sclntNo.setValue("");
    ed_sclntNm.setValue("");
    ed_mgntEmpNo.setValue("");
    ed_mgntEmpNm.setValue("");
  }
};
scwin.udc_companyInfo_onviewchangeNameEvent = function (info) {
  ed_coCd.setValue("");
  if (ed_coNm.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  }
};
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, table1, []);
  // $c.gus.cfInitObjects([ed_acctDeptCd,ed_acctDeptNm]); //  귀속부서      
  // $c.gus.cfInitObjects([ed_sclntNo,ed_sclntNm]); //거래처    
  // $c.gus.cfInitObjects([ed_mgntEmpNo,ed_mgntEmpNm]); //사원 
  scwin.f_setCompanyInfo();
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
// 수금취소 함수 호출
//-------------------------------------------------------------------------
scwin.f_Cancel = async function () {
  // 필수 입력 여부 Check(부서 날짜 검색시 이용됨)
  if (!(await $c.gus.cfValidate($p, [ed_FromDate, ed_ToDate]))) {
    return;
  }
  // 필수입력사항 체크
  if (!(await $c.gus.cfValidate($p, [ica_cancelDt, ed_acctDeptCd]))) {
    return;
  }
  if (!ds_collMoneyList.getModifiedIndex().length > 0) {
    await $c.win.alert($p, "선택하신 사항이 없습니다.");
    return;
  }
  let admin = "";
  let sChkUser = 0;
  let empNo = scwin.login.empNo;
  let vStsCd = "";
  let sChkSts = 0;
  let vSlipKndCd = "";
  let sChkSlipKndCd = 0;

  // ds_admin.SyncLoad = true;
  // ds_admin.DataID = "/cm.zz.RetrieveCodeCMD.do?grpCd=FM096&cd=&cdNm=";
  // ds_admin.Reset();

  for (let i = 0; i < ds_admin.getRowCount(); i++) {
    admin = ds_admin.getCellData(i, "cd");
    if (empNo == admin) {
      sChkUser++;
    }
  }
  for (i = 0; i < ds_collMoneyList.getRowCount(); i++) {
    if (ds_collMoneyList.getCellData(i, "num") == "T") {
      if (vStsCd != "" && vStsCd != ds_collMoneyList.getCellData(i, "acctRecvStsCd")) {
        sChkSts++;
      }
      if (vSlipKndCd != "" && vSlipKndCd != ds_collMoneyList.getCellData(i, "collMoneySlipKndCd")) {
        sChkSlipKndCd++;
      }
      vStsCd = ds_collMoneyList.getCellData(i, "acctRecvStsCd");
      vSlipKndCd = ds_collMoneyList.getCellData(i, "collMoneySlipKndCd");
      if (sChkUser == '0') {
        //로그인한 사람의 사번과 수금사항을 작성자의 사번이 같지 않으면...
        if (empNo != ds_collMoneyList.getCellData(i, "drawEmpNo").trim()) {
          await $c.win.alert($p, i + 1 + "행의 수금사항작성자는 " + ds_collMoneyList.getCellData(i, "drawEmpNm") + " 이어서 취소할 수 없습니다");
          return;
        }

        //수금취소일자와 수금한일자의 년월이 다르면...
        if (ica_cancelDt.getValue().substring(0, 6) != ds_collMoneyList.getCellData(i, "wrkDt").substring(0, 6)) {
          await $c.win.alert($p, i + 1 + "행의 작성년월이 상이하여 수금취소할 수 없습니다.");
          return;
        }
      }

      //취소전표번호가 있으면...
      if (ds_collMoneyList.getCellData(i, "cnclSlipNo") != "") {
        await $c.win.alert($p, i + 1 + "행의 수금사항은 수금취소 하실수 없는 상태 입니다.");
        ds_collMoneyList.setRowPosition(i);
        return;
      }

      //수금의 delYn의 상태가 삭제인경우.
      if (ds_collMoneyList.getCellData(i, "delYn") == "1") {
        await $c.win.alert($p, i + 1 + "행의 수금사항은 이미 삭제처리되었습니다. 확인하시기 바랍니다.");
        ds_collMoneyList.setRowPosition(i);
        return;
      }
      if (scwin.vLoginCoCd == "000" || scwin.vLoginCoCd == "029") {
        //수금상태가 수금이 아닌경우.
        if (ds_collMoneyList.getCellData(i, "acctRecvStsCd") == ACConstants.COLLECION_OF_MONEY_COLLOFMONEY || ds_collMoneyList.getCellData(i, "acctRecvStsCd") == "15") {} else {
          await $c.win.alert($p, i + 1 + "행의 선택사항은  수금취소가 불가능합니다. 수금상태이거나 수금요청상태인 것만 취소가능합니다.");
          ds_collMoneyList.setRowPosition(i);
          return;
        }
        let wrkDt = ds_collMoneyList.getCellData(i, "wrkDt");
        // 마감이후의 수금취소 권한
        if (empNo != "021169") {
          //조정욱 과장 권한
          // 마감여부 확인
          let jobCloseYN = await scwin.f_JobCloseYN(wrkDt);
          if (!jobCloseYN) {
            return;
          }
        }
      }
    }
  }
  if (sChkSts != 0) {
    await $c.win.alert($p, "수금상태가 다른것은 같이 취소할 수 없습니다");
    return;
  }
  if (sChkSlipKndCd != 0) {
    await $c.win.alert($p, "수금전표종류가 다른것은 같이 취소할 수 없습니다");
    return;
  }
  if (await $c.win.confirm($p, "선택하신 사항을 수금취소 하시겠습니까")) {
    for (i = 0; i < ds_collMoneyList.getRowCount(); i++) {
      if (ds_collMoneyList.getCellData(i, "num") == "T") {
        // 취소일자를 각 Row에 입력한다.
        ds_collMoneyList.setCellData(i, "cnclDt", ica_cancelDt.getValue());
      }
    }
    let sSlipNo = "";
    if (vSlipKndCd == "C53") {
      //가상계좌수금전표는 자동 취소처리
      sbm_saveCollMoney.action = "/ac.fm.collmoneymgnt.collmoneymgnt.CancelCollectionOfMoneyCMD.do";
      $c.sbm.execute($p, sbm_saveCollMoney);
    } else {
      if (vStsCd == "15") {
        /* 수금요청상태일경우 취소 */
        sbm_saveCollMoney.action = "/ac.fm.collmoneymgnt.collmoneymgnt.CancelCollectionOfMoneyCMD.do";
        $c.sbm.execute($p, sbm_saveCollMoney);
      } else {
        if (scwin.vLoginCoCd == "000" || scwin.vLoginCoCd == "029") {
          /* 수금상태일경우 취소요청 */
          sbm_apprvCancelRequestCollMoney.action = "/ac.fm.collmoneymgnt.collmoneymgnt.ApprvCancelRequestCollOfMoneyCMD.do";
          $c.sbm.execute($p, sbm_apprvCancelRequestCollMoney);
        } else {
          sbm_saveCollMoney.action = "/ac.fm.collmoneymgnt.collmoneymgnt.CancelCollectionOfMoneyCMD.do";
          $c.sbm.execute($p, sbm_saveCollMoney);
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
// 승인
//-------------------------------------------------------------------------
scwin.f_Apprv = async function () {
  if (!ds_collMoneyList.getModifiedIndex().length > 0) {
    await $c.win.alert($p, "선택하신 사항이 없습니다.");
    return;
  }
  let empNo = scwin.login.empNo;
  for (i = 0; i < ds_collMoneyList.getRowCount(); i++) {
    if (ds_collMoneyList.getCellData(i, "num") == "T") {
      if (empNo != "021169") {
        //조정욱 과장 권한
        //로그인한 사람의 사번과 승인자의 사번이 같지 않으면...
        if (empNo != ds_collMoneyList.getCellData(i, "apprvEmpNo").trim()) {
          await $c.win.alert($p, i + 1 + "행의 승인자는 " + ds_collMoneyList.getCellData(i, "apprvEmpNm") + " 이어서 승인할 수 없습니다");
          return;
        }
      }

      //수금상태가 수금요청이 아닌경우.
      if (ds_collMoneyList.getCellData(i, "acctRecvStsCd") != "15") {
        await $c.win.alert($p, i + 1 + "행의 선택사항은 상태가 수금요청이 아닙니다.\n상태가 수금요청인것만 승인 가능합니다.");
        ds_collMoneyList.setRowPosition(i);
        return;
      }
      if (scwin.vLoginCoCd == "000" || scwin.vLoginCoCd == "029") {
        let wrkDt = ds_collMoneyList.getCellData(i, "wrkDt");
        // 마감이후의 수금취소 권한
        if (empNo != "021169") {
          //조정욱 과장 권한
          // 마감여부 확인
          if (!(await scwin.f_JobCloseYN(wrkDt))) {
            return;
          }
        }
      }
    }
  }
  if (await $c.win.confirm($p, "선택하신 사항을 승인 하시겠습니까")) {
    sbm_apprvCollMoney.action = "/ac.fm.collmoneymgnt.collmoneymgnt.ApprvCollOfMoneyCMD.do";
    $c.sbm.execute($p, sbm_apprvCollMoney);
  }
};

//-------------------------------------------------------------------------
// 마감체크
//-------------------------------------------------------------------------
scwin.f_JobCloseYN = async function (wrkDt) {
  let wrkNo = ACConstants.CLOSE_MONTH;
  //cfJobCloseYN(마감요청구분,마감년월,마감일,작업번호,관리번호,리턴구분);
  let isClose = await udc_closeYn.cfJobCloseYN("CUR", wrkDt.substring(0, 6), "00", wrkNo, "0", "ARR", "N", ed_coCd.getValue());

  // 마감작업 조회시 해당값이 없을경우 오류 발생
  if (isClose[0] == "DNF") {
    await $c.win.alert($p, "마감되었습니다.");
    return false;
  }

  // 선행마감 작업에 대한 검사
  if (isClose[3] == "PRE") {
    if (isClose[0] == "1") {
      await $c.win.alert($p, "선행작업 " + isClose[2] + "이 미마감되어서 현재 작업을 진행할 수 없습니다.");
      return false;
    } else if (isClose[0] == "0") {
      await $c.win.alert($p, "선행작업 " + isClose[2] + "이 마감작업중이어서 현재 작업을 진행할 수 없습니다.");
      return false;
    }
  }

  // 해당마감 작업에 대한 검사
  if (isClose[3] == "CUR") {
    if (isClose[0] == "0") {
      await $c.win.alert($p, isClose[2] + "(이)가 마감중입니다.");
      return false;
    } else if (isClose[0] == "2") {
      await $c.win.alert($p, isClose[2] + "(이)가 마감완료가 되었습니다");
      return false;
    } else {
      return true;
    }
  }
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------

//부서검색시 이용되는 조건
scwin.udc_fromToCalendar1_onBlur = function () {
  dma_addCollMoney.modifyRowStatus(0, "R");
};
scwin.udc_fromToCalendar1_onBlurTo = function (e) {
  dma_addCollMoney.modifyRowStatus(0, "R");
};

//decode
scwin.delYnDisplayFm = function (data) {
  return $c.gus.decode($p, data, "1", "예", "아니오");
};
scwin.sbm_apprvCancelRequestCollMoney_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_apprvCollMoney_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_searchCollMoney_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_collMoneyList.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
    ds_collMoneyCont.removeAll();
  } else {
    scwin.sFlag = true;
    // scwin.f_Retrieve2();
    // 기존 asis는 불러왓을때의 rowposition이 존재하지만, tobe는 존재하지 않아 분리.
    let collMoneyNoData = ds_collMoneyList.getCellData(0, "collMoneyNo");
    dma_searchCollMoneyDetail.set("collectionOfMoneyNumber", collMoneyNoData); // 수금번호
    $c.sbm.execute($p, sbm_searchCollMoneyDetail);
  }
  totalRows.setValue(rowCnt);
};
scwin.sbm_searchCollMoneyDetail_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_collMoneyCont.getRowCount();
  totalRows2.setValue(rowCnt);
  if (rowCnt == 0) {
    ds_collMoneyCont.removeAll();
  }
};
scwin.gr_collMoneyList_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId != "num") {
    if (rowIndex >= 0) {
      scwin.f_Retrieve2();
    }
    /*// 수금정산내역을 불러온다.
    ds_collMoneyCont.DataID = "/ac.fm.collmoneymgnt.collmoneymgnt.RetrieveCollectionOfMoneyAdjustmentContentsCMD.do?collectionOfMoneyNumber="
    							+ds_collMoneyList.getCellData(Row, "collMoneyNo");
    ds_collMoneyCont.Reset();
    */
  }

  // 수금전표 POPUP
  if (columnId == "collMoneySlipNo") {
    await $c.gus.cfShowSlipInfo($p, ds_collMoneyList.getCellData(rowIndex, "collMoneySlipNo"));
  }

  // 취소전표 POPUP
  if (columnId == "cnclSlipNo") {
    if (ds_collMoneyList.getCellData(rowIndex, "cnclSlipNo") != "") {
      await $c.gus.cfShowSlipInfo($p, ds_collMoneyList.getCellData(rowIndex, "cnclSlipNo"));
    }
  }
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('3');
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp_Em(ed_sclntNo, ed_sclntNm, '3', 'CD');
};
scwin.udc_clntNo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp_Em(ed_sclntNo, ed_sclntNm, '3', 'NM');
};
scwin.gr_collMoneyList_onviewchange = function (info) {
  let colid = info.colId;
  let rowIndex = info.rowIndex;
  let vChk = ds_collMoneyList.getCellData(rowIndex, "num");
  if (colid == "num" && rowIndex >= 0 && scwin.sFlag == true) {
    scwin.sFlag = false;
    for (i = 0; i < ds_collMoneyList.getRowCount(); i++) {
      if (ds_collMoneyList.getCellData(i, "collMoneySlipNo") == ds_collMoneyList.getCellData(rowIndex, "collMoneySlipNo")) {
        ds_collMoneyList.setCellData(i, "num", vChk);
      }
    }
    scwin.sFlag = true;
  }
};
scwin.udc_dept_onclickEvent = function (e) {
  scwin.f_openPopUp('1');
};
scwin.udc_dept_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_acctDeptCd, ed_acctDeptNm, '1');
};
scwin.udc_empinfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_mgntEmpNo, ed_mgntEmpNm, '2');
};
scwin.udc_empinfo_onclickEvent = function (e) {
  scwin.f_openPopUp('2');
};
scwin.udc_apprvEmpNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_apprvEmpNo, ed_apprvEmpNm, '6');
};
scwin.udc_apprvEmpNo_onclickEvent = function (e) {
  scwin.f_openPopUp('6');
};
scwin.sbm_saveCollMoney_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.win.alert($p, MSG_CM_INF_001);
};
scwin.sbm_admin_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'table1',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'',class:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th '},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'회사코드',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_coCd',objTypeCode:'data',validExpCode:'회사코드:yes',maxlengthCode:'3',mandatoryCode:'true',allowCharCode:'0-9',UpperFlagCode:'1',nameId:'ed_coNm',maxlengthName:'65',objTypeName:'data',btnId:'btn_company',code:'coCd',refDataCollection:'dma_searchCollMoney',id:'udc_companyInfo',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_companyInfo_onviewchangeNameEvent',validTitle:'회사코드',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'작업일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'fromDate',refDataMap:'dma_searchCollMoney',style:'',id:'udc_fromToCalendar1',refEdDt:'toDate',edFromId:'ed_FromDate',edToId:'ed_ToDate',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data','ev:onBlur':'scwin.udc_fromToCalendar1_onBlur','ev:onBlurTo':'scwin.udc_fromToCalendar1_onBlurTo',titleFrom:'작업일자'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'청구(수금)귀속',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',codeId:'ed_acctDeptCd',maxlengthCode:'5',objTypeCode:'data',mandatoryCode:'true',allowCharCode:'0-9',validExpCode:'수금부서:yes:maxLength=5&number',nameId:'ed_acctDeptNm',objTypeName:'key',code:'acctDeptCd',refDataCollection:'dma_searchCollMoney',id:'udc_dept',selectID:'retrieveAcctDeptCdInfo6',validTitle:'청구(수금)귀속',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onblurCodeEvent':'scwin.udc_dept_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dept_onclickEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'취소여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_delYn',search:'start',style:'width: 80px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_searchCollMoney.delYn'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'포함'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미포함'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_lowerDeptIncluYn',ref:'data:dma_searchCollMoney.lowerDeptIncluYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하위부서포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'',class:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'거래처',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_sclntNo',maxlengthCode:'6',objTypeCode:'data',allowCharCode:'0-9',mandatoryCode:'true',validExpCode:'거래처:yes:maxLength=6&number',UpperFlagCode:'1',nameId:'ed_sclntNm',mandatoryName:'true',objTypeName:'data',code:'clntNo',refDataCollection:'dma_searchCollMoney',selectID:'retrieveClntEmpNoList',id:'udc_clntNo','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',validTitle:'거래처',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'수금사원',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_mgntEmpNo',mandatoryCode:'false',maxlengthCode:'7',objTypeCode:'data',objTypeName:'data',code:'mgntEmpNo',refDataCollection:'dma_searchCollMoney',id:'udc_empinfo',nameId:'ed_mgntEmpNm',selectID:'retrieveEmpInfo','ev:onblurCodeEvent':'scwin.udc_empinfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_empinfo_onclickEvent',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'승인자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_apprvEmpNo',mandatoryCode:'false',maxlengthCode:'7',objTypeCode:'data',objTypeName:'key',nameId:'ed_apprvEmpNm',code:'apprvEmpNo',refDataCollection:'dma_searchCollMoney',id:'udc_apprvEmpNo',selectID:'retrieveMailList2','ev:onclickEvent':'scwin.udc_apprvEmpNo_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onblurCodeEvent':'scwin.udc_apprvEmpNo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'상태',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_acctRecvStsCd',search:'start',style:'width: 160px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_searchCollMoney.acctRecvStsCd'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_init',type:'button',class:'btn ico refresh','ev:onclick':'scwin.f_initObj'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_search',type:'button',class:'btn_cm sch',escape:'false',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'section row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'수금목록',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_collMoneyList',grdDownOpts:'수금조회',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{oddEvenColorDisplay:'true',rowNumVisible:'false',showSortableImage:'true',rowNumHeaderValue:'No',sortable:'true',defaultCellHeight:'24',rowNumWidth:'40',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_collMoneyList',evenRowBackgroundColor:'#F8FFF8',id:'gr_collMoneyList',class:'wq_gvw',visibleRowNum:'5','ev:oncellclick':'scwin.gr_collMoneyList_oncellclick','ev:onviewchange':'scwin.gr_collMoneyList_onviewchange',columnMoveWithFooter:'true',rowStatusVisible:'true',rowStatusWidth:'15'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column12',value:'선택',displayMode:'label',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column2',value:'작업일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'청구일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column5',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column7',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'입금일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'입금자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'만기일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'통화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'차변금액(원)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column31',value:'대변금액(원)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'수금전표',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'수금번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'청구귀속',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'수금사원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'승인자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'승인자메일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'취소전표',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'삭제여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column43',value:'수금취소일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column41',value:'차변금액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column35',value:'대변금액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column98',value:'작성사원번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column95',value:'귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column92',value:'승인자사번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column89',value:'매각거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column86',value:'매각할인율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column83',value:'취소일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'결제구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'결제기한',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'지급방식',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'지급기한',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column107',value:'전표종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column101',value:'회사코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column104',value:'회사구분코드',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'num',displayMode:'label',fixColumnWidth:'true',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'wrkDt',value:'',displayMode:'label',readOnly:'true',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'bilgDt',displayMode:'label',readOnly:'true',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'crn',class:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'clntNm',class:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'susRecvInitamtOutbrDt',class:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rcptrNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'dueDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crcCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'text',style:'',id:'amtDebit',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'text',style:'',id:'amtCredit',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'color: blue;text-decoration: underline;',id:'collMoneySlipNo',value:'',displayMode:'label',class:'underline'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'collMoneyNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'drawEmpNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'apprvEmpNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'apprvEmpEmail',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'acctRecvStsCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'color: blue;text-decoration: underline;',id:'cnclSlipNo',value:'',displayMode:'label',class:'underline'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'delYn',value:'',displayMode:'label',displayFormatter:'scwin.delYnDisplayFm',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',style:'',id:'cnclDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'text',style:'',id:'amtFcrcDebit',value:'',displayMode:'label',dataType:'float',displayFormat:'#,##0.00',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'text',style:'',id:'amtFcrcCredit',value:'',displayMode:'label',dataType:'float',displayFormat:'#,##0.00',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'drawEmpNo',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'apprvEmpNo',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'dispClntNo',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dispDcRt',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cancelDt',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'stmtPrdClsCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'stmtPrdDd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'collMoneyCntShtCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'draftDdCnt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'collMoneySlipKndCd',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'coCd',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'coClsCd',value:'',displayMode:'label',readOnly:'true',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("amtDebit")'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'expression',style:'',id:'column68',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("amtCredit")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column82',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column59',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'expression',style:'',id:'column58',value:'',displayMode:'label',dataType:'float',displayFormat:'#,##0.00',expression:'SUM("amtFcrcDebit")'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'expression',style:'',id:'column57',value:'',displayMode:'label',dataType:'float',displayFormat:'#,##0.00',expression:'SUM("amtFcrcCredit")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column100',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column94',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column91',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column88',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column109',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column103',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column106',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom ','ev:oncellclick':'scwin.gr_collMoneyList_oncellclick'},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'section row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'수금정산내역',class:'tit'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_apprv',title:'엑셀 UP',type:'button',class:'btn',objType:'bSave','ev:onclick':'scwin.f_Apprv'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수금등록승인'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_apprvCancel',title:'엑셀 UP',type:'button',class:'btn',objType:'bSave','ev:onclick':'scwin.f_ApprvCancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수금취소승인'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'취소일자',class:'req'}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_cancelDt',class:'',calendarValueType:'yearMonthDate',objType:'data',mandatory:'true',displayFormat:'yyyy/MM/dd',title:'취소일자'}}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_cancel',title:'엑셀 UP',type:'button',class:'btn',userAuth:'D',objType:'bDetail','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수금취소요청'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_cancelDelete',title:'엑셀 UP',type:'button',class:'btn',userAuth:'D',objType:'bDetail','ev:onclick':'scwin.f_CancelDelete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수금취소삭제'}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridDownYn:'N',gridID:'gr_collMoneyCont'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{oddEvenColorDisplay:'true',showSortableImage:'true',rowNumHeaderValue:'No',sortable:'true',defaultCellHeight:'24',rowNumWidth:'40',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_collMoneyCont',evenRowBackgroundColor:'#F8FFF8',autoFit:'allColumn',id:'gr_collMoneyCont',class:'wq_gvw',visibleRowNum:'4',columnMove:'true',dataDragSelect:'false',readOnly:'true',dataDragSelectAutoScroll:'true',columnMoveWithFooter:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column106',value:'순번',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column2',value:'세금계산서번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'통장번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'어음번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column5',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'정리계정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'통화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'정리금액(원)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'정리금액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column103',value:'가선수관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column100',value:'채권관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column97',value:'어음관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column94',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column91',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column88',value:'수금번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column85',value:'차대구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',value:'통화코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column82',value:'환율',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'collMoneyAdjmSeq',value:'',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mgntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bankbookNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'billRecvNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'clntNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crcCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',id:'amt',displayMode:'label',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',id:'amtFcrc',displayMode:'label',dataType:'float',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'susRecvInitamtOutbrNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'acctRecvNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'billRecvMgntNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'drcrClsCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col17',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'exchRt',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column108',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column78',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column77',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column76',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column74',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column73',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',id:'column72',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("amt")'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',id:'column71',displayMode:'label',displayFormat:'#,##0.00',dataType:'float',expression:'SUM("amtFcrc")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column105',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column102',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column99',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column96',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column93',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column90',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column87',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column81',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column84',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:'visibility: hidden;',id:'udc_closeYn'}}]}]}]})