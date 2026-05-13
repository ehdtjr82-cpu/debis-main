/*amd /ui/ac/fm/stdinfomgnt/fm_100_07_01b.xml 60287 24569837d38d787f5973d3a71e18877eb0164c516bf892003b9c4b2fbde7976c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_accountCustomer',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizcondNm',name:'업태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'biztypeNm',name:'업종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accountClntKndCd',name:'계열구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'대표자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntBusiClsCd',name:'거래처사업자구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntTelNo',name:'거래처 전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMpNo',name:'거래처 핸드폰 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fncInstCd',name:'금융기관코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntEmail',name:'거래처 EMAIL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntFaxNo',name:'거래처 팩스번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr2',name:'주소2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_payCond',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_payCond_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'번호',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAcctDeptCd',name:'지급부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAcctDeptNm',name:'지급부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbssysVehclYn',name:'회원제차량여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mchtClntNo',name:'화주거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtClntNm',name:'화주거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCycCd',name:'지급주기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDd',name:'지급일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCntShtCd',name:'지급수단',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'지급화폐',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cashRt',name:'현금비율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'draftRt',name:'어음비율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'confirmYn',name:'확인여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDtChgYn',name:'지급일자변경여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_payAcnt',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_payAcnt_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'번호',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payClsCd',name:'지급구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'은행계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpstrNm',name:'예금주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transfCmisDeductYn',name:'이체수수료 공제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'지급화폐',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmYn',name:'확인여부',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bankcd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCdNm',name:'은행명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCls',name:'sysCls',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coNm',name:'회사',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntLupCond',name:'조회조건구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCntn',name:'조회조건내용',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmYn',name:'확인여부',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmYn',name:'확인여부',dataType:'number'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_payDd_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_payDd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_payCycCd_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_payCycCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'fltrCd1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_bankcd_Retrieve',action:'/ac.fm.stdinfomgnt.RetrieveBankCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_bankcd_Retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveCustomerList',action:'',method:'post',mediatype:'application/json',ref:'data:json,ds_condition',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveCustomerList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveAccountCustomerList',action:'/ac.fm.stdinfomgnt.RetrieveAccountCollMoneyPayCondAcntListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition2","key":"ds_condition2"},{"id":"ds_payCond","key":"OUT_DS2"},{"id":"ds_payAcnt","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_payCond","key":"OUT_DS2"},{"id":"ds_payAcnt","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveAccountCustomerList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_payDd',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_payDd_condition',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_payDd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_payCycCd',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_payCycCd_condition',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_payCycCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveAccountCustomer',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_accountCustomer","key":"IN_DS1"},{"action":"modified","id":"ds_payCond","key":"IN_DS2"},{"action":"modified","id":"ds_payAcnt","key":"IN_DS3"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveAccountCustomer_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){let memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin");
scwin.pos_clnt = 0;
scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드 
scwin.loginCoCd = $c.data.getMemInfo($p, "coCd");
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.loginCoCd) ? '' : scwin.loginCoCd; // 소속 자회사
scwin.loginCoClsCd = $c.data.getMemInfo($p, "coClsCd");
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.loginCoClsCd) ? '' : scwin.loginCoClsCd;
; //회계_회사구분('CO035' : 0:동부 EXPRESS)

scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 처리)
scwin.payCycCd = ""; //scwin.f_payCycCdDsSet 콜벡 체크용정보
//-------------------------------------------------------------------------
// 전역변수 선언
//-------------------------------------------------------------------------
scwin.pos_groupCode = 0; // Grid의 저장시 위치로 이동하게 하는 전역변수

//-------------------------------------------------------------------------
// 히든정보설정
//-------------------------------------------------------------------------
scwin.txt_clntNoValChk = "";
scwin.txt_clntNo = "";
scwin.txt_clntLupCond = "";
scwin.txt_sysCls = "";
scwin.txt_payIdx = "";
scwin.txt_createYn = "";
scwin.txt_updateYn = "";
scwin.txt_rowCount = "";
scwin.txt_saveType = "";
scwin.txtCoClsCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "FM041",
    compID: "gr_payCondition:payCycCd"
  }, {
    grpCd: "FM018",
    compID: "gr_payCondition:payCntShtCd"
  }, {
    grpCd: "ZZ006",
    compID: "gr_payCondition:payCrcCd,gr_payAccount:payCrcCd"
  }, {
    grpCd: "FM019",
    compID: "gr_payAccount:payClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  acb_confirmYn.setSelectedIndex(0);
  acb_clntLupCond.setSelectedIndex(0);
  scwin.f_bankcd_Retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_bankcd_Retrieve = function () {
  $c.sbm.execute($p, sbm_bankcd_Retrieve);
};

//-------------------------------------------------------------------------
// 조회(은행조회) 콜백
//-------------------------------------------------------------------------
scwin.sbm_bankcd_Retrieve_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    ds_bankcd.setJSON(e.responseJSON.GAUCE);
  }
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  try {
    //사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
    if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
      scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
      scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
    }
    ed_coCd.setValue(scwin.vLoginCoCd);
    scwin.f_PopUpCompanyInfo('T');
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 회사코드입력시
//-------------------------------------------------------------------------
scwin.udc_coCd_onblurCodeEvent = function (e) {
  scwin.isStarted = false;
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 회사코드 찾기버튼 클릭시
//-------------------------------------------------------------------------
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.isStarted = false;
  scwin.f_PopUpCompanyInfo('F');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  /*
   var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
  				,ed_coCd.text, txt_coNm.value
  				,pWinCloseTF,null,null,null,null
  				,null,null,null,null,null);
  */
  udc_coCd.setSelectId('retrieveDongbuGroupCompanyInfo');
  udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc // 콜백 함수
  , ed_coCd.getValue() // 화면에서의 ??? Code Element의 Value
  , ed_coNm.getValue() // 화면에서의 ??? Name Element의 Value
  , pWinCloseTF // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_coCd_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;

    // SET	 
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return false;
      ed_coCd.setValue(rtnList[0]); // 코드
      ed_coNm.setValue(rtnList[5]); // 회사명
      ed_coCd.hidVal = rtnList[0]; // 히든값
      scwin.txtCoClsCd = rtnList[1]; // 회사구분  
    } else {
      ed_coCd.setValue("");
      ed_coNm.setValue("");
      scwin.txtCoClsCd = "";
      scwin.txtCoClsCd = "";
    }
    if (scwin.txtCoClsCd > '0') {
      // 자회사 회계 시스템 
      scwin.isSubCompany = true;
    } else {
      scwin.isSubCompany = false;
    }
    if (scwin.isStarted == true) {
      if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
        // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
        $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
      } else {
        $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
      }
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  let edQryCntn = ed_qryCntn.getValue().trim();
  let ret = await $c.gus.cfValidate($p, [ed_coCd]);
  if (!ret) {
    return false;
  }
  if (scwin.bytelength(edQryCntn) < 2 && acb_confirmYn.getValue() == '-1') {
    msgArr = new Array(2);
    msgArr[0] = "검색어";
    msgArr[1] = "글자(숫자) 한(두)";
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_011, msgArr[0], msgArr[1]));
    ed_qryCntn.focus();
    return false;
  } else if (scwin.bytelength(edQryCntn) > 1 && acb_confirmYn.getValue() == '-1') {
    sbm_RetrieveCustomerList.action = "/ac.fm.stdinfomgnt.RetrieveAccountCustomerAllListCMD.do";
  } else {
    sbm_RetrieveCustomerList.action = "/ac.fm.stdinfomgnt.RetrieveAccountCustomerListCMD.do";
  }
  const params = {
    sysCls: "0",
    clntLupCond: acb_clntLupCond.getValue(),
    qryCntn: ed_qryCntn.getValue(),
    coCd: ed_coCd.getValue(),
    confirmYn: acb_confirmYn.getValue()
  };

  //데이터셋에 정보설정
  ds_condition.setJSON(params);
  $c.sbm.execute($p, sbm_RetrieveCustomerList);
};

//-------------------------------------------------------------------------
// 조회결과 콜백(거래처 정보)
//-------------------------------------------------------------------------
scwin.sbm_RetrieveCustomerList_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    if (e.responseJSON.GAUCE) {
      ds_accountCustomer.setJSON(e.responseJSON.GAUCE);
      if (ds_accountCustomer.getRowCount() == 0) {
        //TOBE 기본정보 미존재시 지급조건,지급계좌 데이터 초기화밒 합계 0 처리 추가
        ds_payCond.removeAll();
        ds_payAcnt.removeAll();
        tbx_totalRows2.setValue(ds_payCond.getRowCount()); //지급조건합계
        tbx_totalRows3.setValue(ds_payAcnt.getRowCount()); //지급계좌합계

        //f_OnLoad(); TODO 임시 막음. 테스트중입니다. 10.02
        await $c.win.alert($p, "조회된 데이터가 없습니다.");
        ed_qryCntn.focus();
      } else {
        $c.gus.cfGoPrevPosition($p, gr_accountCustomer, scwin.pos_clnt); //포커스이동
        scwin.gr_accountCustomer_onrowindexchange(scwin.pos_clnt); //저장전의 위치로 이동시킨다.
      }
    }

    // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_accountCustomer.getRowCount()));
    //TOBE 기본정보 설정을 위해 하단값 설정추가함.
    tbx_totalRows2.setValue(ds_payCond.getRowCount()); //지급조건합계
    tbx_totalRows3.setValue(ds_payAcnt.getRowCount()); //지급계좌합계
  } catch (e) {
    console.log("sbm_RetrieveCustomerList_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
//거래처 정보 그리드가 변경되는 경우 ds_accountCustomer event=OnRowPosChanged(row)
//-------------------------------------------------------------------------
scwin.gr_accountCustomer_onrowindexchange = function (rowIndex, oldRow) {
  ds_accountCustomer.setRowPosition(rowIndex);
  scwin.f_RetrieveCollPayAcnt();
};

//-------------------------------------------------------------------------
// 지급조건, 지급계좌 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveCollPayAcnt = function () {
  const params = {
    clntNo: ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "clntNo"),
    confirmYn: acb_confirmYn.getValue(),
    coCd: ed_coCd.getValue()
  };

  //데이터셋에 정보설정
  ds_condition2.setJSON(params);
  $c.sbm.execute($p, sbm_RetrieveAccountCustomerList);
};

//-------------------------------------------------------------------------
// 조회결과 콜백(지급조건, 지급계좌 조회)
//-------------------------------------------------------------------------
scwin.sbm_RetrieveAccountCustomerList_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  tbx_totalRows2.setValue($c.gus.cfInsertComma($p, ds_payCond.getRowCount())); //지급조건합계
  tbx_totalRows3.setValue($c.gus.cfInsertComma($p, ds_payAcnt.getRowCount())); //지급계좌합계

  $c.gus.cfGoPrevPosition($p, gr_payCondition, 0); //포커스이동
  $c.gus.cfGoPrevPosition($p, gr_payAccount, 0); //포커스이동
};

//-------------------------------------------------------------------------
// 바이트 크기 체크
//-------------------------------------------------------------------------
scwin.bytelength = function (bstr) {
  //var bstr = ed_qryCntn.getValue().trim();
  var len = bstr.length;
  for (ii = 0; ii < bstr.length; ii++) {
    xx = bstr.substr(ii, 1).charCodeAt(0);
    if (xx > 127) {
      len++;
    }
  }
  return len;
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, null);
};

//-------------------------------------------------------------------------
// 지급주기 Combo 선택 처리
//-------------------------------------------------------------------------
scwin.gr_payCondition_onafteredit = function (rowIndex, columnIndex, value) {
  try {
    let colid = gr_payCondition.getColumnID(columnIndex);

    //ASIS 지급일 Combo 선택  gr_payCondition event=OnCloseUp(row,colid)
    let payCycCd = ds_payCond.getCellData(rowIndex, "payCycCd");
    let vPayCntShtCd = ds_payCond.getCellData(rowIndex, "payCntShtCd");
    // 지급주기, 주기일콤보를 여는 경우
    if (colid == "payCycCd") {
      if (payCycCd == 0) {
        ds_payCond.setCellData(rowIndex, "payDd", "");
        gr_payCondition.setReadOnly("cell", rowIndex, "payDd", true); //readOnly
      } else {
        ds_payCond.setCellData(rowIndex, "payDd", "30");
        gr_payCondition.setReadOnly("cell", rowIndex, "payDd", false);
      }
      scwin.payCycCd = payCycCd; //scwin.f_payCycCdDsSet 콜벡 체크용정보
      scwin.f_payCycCdDsSet("FM041");
      //f_payCycCdDsSet 하위 다른 소스는 지급주기 조회 콜백으로 이전함.
    } else if (colid == "payCntShtCd") {
      if (vPayCntShtCd == "25" || vPayCntShtCd == "50") {
        // 전자결재(25)나 실물어음(50)인 경우
        ds_payCond.setCellData(rowIndex, "draftDdCntCd", "");
        gr_payCondition.setReadOnly("cell", rowIndex, "draftDdCntCd", false); //ANY
      } else {
        ds_payCond.setCellData(rowIndex, "draftDdCntCd", "");
        gr_payCondition.setReadOnly("cell", rowIndex, "draftDdCntCd", true); //none
      }
    }
    //ASIS OnCloseUp(row,colid)

    if (colid == "payDd") {
      scwin.payCycCd = ds_payCond.getCellData(rowIndex, "payCycCd"); //scwin.f_payCycCdDsSet 콜벡 체크용정보
      scwin.f_payCycCdDsSet("FM041");
      //f_payCycCdDsSet 하위 다른 소스는 지급주기 조회 콜백으로 이전함.
    } else if (colid == "payAcctDeptNm") {
      scwin.f_OpenCommonPopUp(5, '', '', 'T', 'T'); // 귀속부서팝업
    } else if (colid == "mchtClntNo") {
      scwin.f_PopUp(); // 화주거래처번호팝업
    }
  } catch (e) {
    console.log("gr_payCondition_onafteredit " + e);
  }
};

//-------------------------------------------------------------------------
// 지급주기 조회
//-------------------------------------------------------------------------
scwin.f_payCycCdDsSet = function (grpCd) {
  ds_payCycCd_condition.set("grpCd", grpCd);
  $c.sbm.execute($p, sbm_payCycCd);
};

//-------------------------------------------------------------------------
// 지급주기 조회 콜백
//-------------------------------------------------------------------------
scwin.sbm_payCycCd_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

  let checkNum = 0;
  if (e.responseJSON.GAUCE) {
    ds_payCycCd.setJSON(e.responseJSON.GAUCE);
    for (let i = 0; i < ds_payCycCd.getRowCount(); i++) {
      if (scwin.payCycCd == ds_payCycCd.getCellData(i, "cd")) {
        checkNum = ds_payCycCd.getCellData(i, "fltrCd1");
      }
    }
    if (checkNum == 1) {
      scwin.f_payDdDsSet("ZZ522");
    } else if (checkNum == 2) {
      scwin.f_payDdDsSet("ZZ548"); //f_payDdDsSet("ZZ548");
    }
  }
};

//-------------------------------------------------------------------------
// 지급일자 조회
//-------------------------------------------------------------------------
scwin.f_payDdDsSet = function (grpCd) {
  ds_payDd_condition.set("grpCd", grpCd);
  $c.sbm.execute($p, sbm_payDd);
};

//-------------------------------------------------------------------------
// 지급일자 조회 콜백
//-------------------------------------------------------------------------
scwin.sbm_payDd_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

  if (e.responseJSON.GAUCE) {
    ds_payDd.setJSON(e.responseJSON.GAUCE);
  }
};

//-------------------------------------------------------------------------
// 지급조건 PopUp 호출
//-------------------------------------------------------------------------
scwin.gr_payCondition_ontextimageclick = function (rowIndex, columnIndex) {
  try {
    let Colid = gr_payCondition.getColumnID(columnIndex);
    if (Colid == "payAcctDeptNm") {
      scwin.f_openCommonPopUp(5, '', '', 'T', 'T'); // 귀속부서팝업
    } else if (Colid == "mchtClntNo") {
      scwin.f_PopUp(); // 화주거래처번호팝업
    }
  } catch (e) {
    console.log("gr_payCondition_ontextimageclick : " + e);
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함
//-------------------------------------------------------------------------
scwin.f_ChkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  //값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  //짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  //검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  //inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_OpenCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    //inObj가 코드명 필드일 경우 팝업
    scwin.f_OpenCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 귀속부서팝업
//-------------------------------------------------------------------------
scwin.f_OpenCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  try {
    let pParam = "";
    let param = "";
    switch (disGubun) {
      case 5:
        //귀속부서 팝업
        pCode = ds_payCond.getCellData(ds_payCond.getRowPosition(), "payAcctDeptCd");
        pName = ds_payCond.getCellData(ds_payCond.getRowPosition(), "payAcctDeptNm");
        pParam = ds_payCond.getCellData(ds_payCond.getRowPosition(), "adptDt");
        param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ","; //자회사 회계시스템 추가사항

        //rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo6',pCode, pName,'F',null,null,null,null,param,null,null,null,null); // 귀속부서
        udc_comCodeGrid.setSelectId('retrieveAcctDeptCdInfo6');
        udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_payAcctDeptNm_callBackFunc // 팝업 콜백
        , pCode // 화면에서의 ??? Code Element의    Value
        , pName // 화면에서의 ??? Name Element의    Value
        , 'F' // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened)
        , null // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서    
        , null // 보여주는 각 컬럼들의 폭  
        , null // 컬럼중에서 숨기는    컬럼 지정   
        , param // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의    사용자 정의 폭
        , null // POP-UP뛰을때 우도우의    사용자 정의 높이    
        , null // 윈도우 위치 Y좌표    
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부 ("F")
        , null // 전체검색허용여부 ("F")
        , null // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
        );
        break;
    }
  } catch (e) {
    console.log("f_OpenCommonPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 귀속부서 콜백
//-------------------------------------------------------------------------
scwin.udc_comCodeGrid_payAcctDeptNm_callBackFunc = function (ret) {
  $c.gus.cfSetGridReturnValue($p, ret, ds_payCond, ds_payCond.getRowPosition(), "payAcctDeptCd", "payAcctDeptNm");
};

//-------------------------------------------------------------------------
// 화주거래처번호팝업
//-------------------------------------------------------------------------
scwin.f_PopUp = function () {
  try {
    let param = "";
    param = ",,," + ed_coCd.getValue();
    //rtnList = cfCommonPopUp('retrieveClntList','','',"T",null,null,null,"3,4,5,6,7,8,9,10",param,null,null,null,null,null,null,null); // 사업자등록번호
    udc_comCodeGrid.setSelectId('retrieveClntList');
    udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_mchtClntNo_callBackFunc // 팝업 콜백
    , '' // 화면에서의 ??? Code Element의    Value
    , '' // 화면에서의 ??? Name Element의    Value
    , 'T' // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened)
    , null // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서    
    , null // 보여주는 각 컬럼들의 폭  
    , '3,4,5,6,7,8,9,10' // 컬럼중에서 숨기는    컬럼 지정   
    , param // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의    사용자 정의 폭
    , null // POP-UP뛰을때 우도우의    사용자 정의 높이    
    , null // 윈도우 위치 Y좌표    
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부 ("F")
    , null // 전체검색허용여부 ("F")
    , null // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  } catch (e) {
    console.log("f_PopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 화주거래처번호팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_comCodeGrid_mchtClntNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return false;
      let payCondRowPosi = ds_payCond.getRowPosition();
      ds_payCond.setCellData(payCondRowPosi, "mchtClntNo", rtnList[0]); //화주거래처명
      ds_payCond.setCellData(payCondRowPosi, "mchtClntNm", rtnList[1]); //화주거래처번호
    }
  } catch (e) {
    console.log("f_PopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 지급조건 신규
//-------------------------------------------------------------------------
scwin.f_AddRow1 = async function () {
  try {
    let row = $c.data.insertRow($p, $p.getComponentById("gr_payCondition"));
    ds_payCond.setCellData(row, "clntNo", ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "clntNo"));
    ds_payCond.setCellData(row, "cashRt", "100");
    ds_payCond.setCellData(row, "payCrcCd", "KRW");
    ds_payCond.setCellData(row, "seq", ds_payCond.getRowCount()); //ASIS 추가시 0을 getRowCount로 변경
  } catch (e) {
    console.log("f_addrow : " + e);
  }
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_deleterow1 = async function () {
  try {
    if (ds_payCond.getRowCount() > 0) {
      //추가등록정보는 삭제, 나머지는 상태값 삭제가 됨
      if (ds_payCond.getRowStatus(ds_payCond.getRowPosition()) == "C") {
        ds_payCond.removeRow(ds_payCond.getRowPosition());
      } else {
        let delRow = ds_payCond.getRowPosition();
        ds_payCond.deleteRow(ds_payCond.getRowPosition());
        $c.gus.cfGoPrevPosition($p, gr_payCondition, delRow);
      }
    }
  } catch (e) {
    console.log("f_deleterow1 : " + e);
  }
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Undo1 = function () {
  try {
    if (ds_payCond.getRowStatus(ds_payCond.getRowPosition()) == "C") {
      ds_payCond.removeRow(ds_payCond.getRowPosition());
    } else {
      $c.data.undoRow($p, ds_payCond, "Y");
    }
  } catch (e) {
    console.log("f_Undo1 : " + e);
  }
};

//-------------------------------------------------------------------------
// 지급계좌 신규
//-------------------------------------------------------------------------
scwin.f_AddRow2 = async function () {
  try {
    let row = $c.data.insertRow($p, $p.getComponentById("gr_payAccount"));
    ds_payAcnt.setCellData(row, "clntNo", ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "clntNo"));
  } catch (e) {
    console.log("f_AddRow2 : " + e);
  }
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_deleterow2 = async function () {
  try {
    if (ds_payAcnt.getRowCount() > 0) {
      //추가등록정보는 삭제, 나머지는 상태값 삭제가 됨
      if (ds_payAcnt.getRowStatus(ds_payAcnt.getRowPosition()) == "C") {
        ds_payAcnt.removeRow(ds_payAcnt.getRowPosition());
      } else {
        let delRow1 = ds_payAcnt.getRowPosition();
        ds_payAcnt.deleteRow(ds_payAcnt.getRowPosition());
        $c.gus.cfGoPrevPosition($p, gr_payAccount, delRow1);
      }
    }
  } catch (e) {
    console.log("f_deleterow2 : " + e);
  }
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Undo2 = function () {
  try {
    if (ds_payAcnt.getRowStatus(ds_payAcnt.getRowPosition()) == "C") {
      ds_payAcnt.removeRow(ds_payAcnt.getRowPosition());
    } else {
      $c.data.undoRow($p, ds_payAcnt, "Y");
    }
  } catch (e) {
    console.log("f_Undo2 : " + e);
  }
};

//-------------------------------------------------------------------------
// 현금과 어음비율 값 입력
//-------------------------------------------------------------------------
scwin.ds_payCond_oncelldatachange = function (info) {
  try {
    let colid = info.colID;
    let row = info.rowIndex;
    let cashRt = ds_payCond.getCellData(row, "cashRt");
    let draftRt = ds_payCond.getCellData(row, "draftRt");

    // 현금과 어음 비율을 100으로
    if (colid == "cashRt") {
      if (cashRt >= 0 && cashRt <= 100) {
        draftVal = 100 - cashRt;
        ds_payCond.setCellData(row, "draftRt", draftVal);
      } else {
        $c.win.alert($p, "현금비율은 입력값이 100보다 클 수 없습니다.");
        ds_payCond.setCellAllData(row, "cashRt", 100 - ds_payCond.getCellData(row, "draftRt"));
      }
    }
    if (colid == "draftRt") {
      if (draftRt >= 0 && draftRt <= 100) {
        cashVal = 100 - draftRt;
        ds_payCond.setCellData(row, "cashRt", cashVal);
      } else {
        $c.win.alert($p, "어음비율은 입력값이 100보다 클 수 없습니다.");
        ds_payCond.setCellAllData(row, "draftRt", 100 - ds_payCond.getCellData(row, "cashRt"));
      }
    }
  } catch (e) {
    console.log("ds_payCond_oncelldatachange : " + e);
  }
};
scwin.ds_payAcnt_oncelldatachange = function (info) {
  try {
    let colid = info.colID;
    let row = info.rowIndex;
    if (colid == "payClsCd") {
      if (ds_payAcnt.getCellData(row, "payClsCd") != "60") {
        ds_payAcnt.setCellAllData(row, "payCrcCd", "KRW");
      } else {
        ds_payAcnt.setCellAllData(row, "payCrcCd", "USD");
      }
    }
    if (colid == "payCrcCd") {
      if (ds_payAcnt.getCellData(row, "payCrcCd") == "KRW" && ds_payAcnt.getCellData(row, "payClsCd") == "60") {
        $c.win.alert($p, "지급구분이 외화인경우 지급화폐를 원화(KRW)로 선택할 수 없습니다.");
        ds_payAcnt.setCellAllData(row, "payCrcCd", "USD");
      }
    }
  } catch (e) {
    console.log("ds_payAcnt_oncelldatachange : " + e);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (info) {
  try {
    if (ds_accountCustomer.getModifiedIndex().length == 0 && ds_payCond.getModifiedIndex().length == 0 && ds_payAcnt.getModifiedIndex().length == 0) {
      $c.win.alert($p, "변경된 사항이 없습니다.");
      return false;
    }

    // 지급조건, 지급계좌 필수항목 체크
    let ret = await $c.gus.cfValidate($p, [gr_payCondition]);
    if (!ret) {
      return false;
    }
    //그리드 전체를 체크하지 못하여 개발로 체크하도록 수정.
    let ret2 = await $c.gus.cfValidate($p, [gr_payAccount]);
    if (!ret2) {
      return false;
    }

    // 지급수단 실물어음,전자결재일경우 어음일수 필수입력 체크
    let payCondRowPosi = ds_payCond.getRowPosition();
    let payCntShtCd = ds_payCond.getCellData(payCondRowPosi, "payCntShtCd");
    let cashRt = ds_payCond.getCellData(payCondRowPosi, "cashRt");
    let vDraftDdCntCd = ds_payCond.getCellData(payCondRowPosi, "draftDdCntCd");
    let vCashRt = ds_payCond.getCellData(payCondRowPosi, "cashRt");
    if (payCntShtCd == "50" && vDraftDdCntCd == "") {
      $c.win.alert($p, "지급수단 실물어음,전자결제일경우 어음일수를 입력하셔야 합니다.");
      return false;
    }
    if (payCntShtCd == "25" && vDraftDdCntCd == "" && vCashRt != "100") {
      $c.win.alert($p, "지급수단 실물어음,전자결제일경우 어음일수를 입력하셔야 합니다.");
      return false;
    }

    // 회원제차량여부 예 일때 화주거래처번호 필수입력 체크
    let mbssysVehclYn = ds_payCond.getCellData(payCondRowPosi, "mbssysVehclYn");
    let vMchtClntNo = ds_payCond.getCellData(payCondRowPosi, "mchtClntNo");
    if (mbssysVehclYn == "1" && vMchtClntNo == "") {
      $c.win.alert($p, "회원제차량여부가 예인 경우 화주거래처번호를 입력하셔야 합니다.");
      scwin.f_PopUp();
      return false;
    }
    if (ds_payAcnt.getModifiedIndex().length > 0) {
      let count = 1;
      for (let i = 0; i < ds_payAcnt.getRowCount(); i++) {
        count++;
        if (ds_payAcnt.getCellData(i, "payClsCd") == "60" && (ds_payAcnt.getRowStatus(i) == "C" || ds_payAcnt.getRowStatus(i) == "U")) {
          if (ds_payAcnt.getCellData(i, "payCrcCd") == "KRW") {
            $c.win.alert($p, count + "행 : 지급구분이 외화일경우 지급화폐는 원화(KRW)가 아닌값으로 입력하여 주세요.");
            return false;
          }
          if (ds_payAcnt.getCellData(i, "payCrcCd") == "") {
            $c.win.alert($p, count + "행 : 지급구분이 외화일경우 지급화폐는 필수입력 입니다.");
            return false;
          }
        } else if (ds_payAcnt.getCellData(i, "payClsCd") != "60" && (ds_payAcnt.getRowStatus(i) == "C" || ds_payAcnt.getRowStatus(i) == "U")) {
          if (ds_payAcnt.getCellData(i, "payCrcCd") != "KRW" && ds_payAcnt.getCellData(i, "payCrcCd") != "") {
            $c.win.alert($p, count + "행 : 지급구분이 외화가 아닐경우 지급화폐는 원화(KRW)로 입력하여 주세요.");
            return false;
          }
        }
      }
    }
    if (await $c.win.confirm($p, "저장하시겠습니까?")) {
      scwin.pos_clnt = ds_accountCustomer.getRowPosition();
      sbm_saveAccountCustomer.action = "/ac.fm.stdinfomgnt.SavePaymentConditionCMD.do";
      $c.sbm.execute($p, sbm_saveAccountCustomer);
    }
  } catch (e) {
    console.log("f_Save : " + e);
  }
};

//-------------------------------------------------------------------------
// 저장 콜백
//-------------------------------------------------------------------------
scwin.sbm_saveAccountCustomer_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_Retrieve();
  } catch (e) {
    console.log("sbm_saveAccountCustomer_submitdone : " + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:65px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:65px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_company',objTypeName:'data',mandatoryCode:'true',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'3',id:'udc_coCd',code:'coCd',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회조건 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group '},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_clntLupCond',search:'start',style:'width: 150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',displayMode:'value delim label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'거래처명'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'거래처번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사업자번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_qryCntn',placeholder:'',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확인여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_confirmYn',search:'start',style:'width: 80px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',searchTarget:'label',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox wfix flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox gvwflex mt32'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',dataList:'data:ds_accountCustomer',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_accountCustomer',class:'wq_gvw h-full',checkReadOnlyOnPasteEnable:'',resize:'true',columnMove:'true',sortable:'true','ev:onrowindexchange':'scwin.gr_accountCustomer_onrowindexchange',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'column12',blockSelect:'false',displayMode:'label',value:'거래처번호',class:'col-type1'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'column11',blockSelect:'false',displayMode:'label',value:'거래처명'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'column10',blockSelect:'false',displayMode:'label',value:'사업자번호'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'clntNo',blockSelect:'false',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'clntNm',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'crn',blockSelect:'false',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'지급조건',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',visibleRowNumFix:'true',dataList:'data:ds_payCond',scrollByColumn:'false',style:'',id:'gr_payCondition',visibleRowNum:'5',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',autoFit:'allColumn',autoFitMinWidth:'1600','ev:onbeforeedit':'scwin.gr_payCondition_onbeforeedit','ev:onafteredit':'scwin.gr_payCondition_onafteredit','ev:ontextimageclick':'scwin.gr_payCondition_ontextimageclick',rowStatusVisible:'true',gridName:'지급조건'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column12',blockSelect:'false',displayMode:'label',value:'번호',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column11',blockSelect:'false',displayMode:'label',value:'적용일자',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column10',blockSelect:'false',displayMode:'label',value:'계약부서명',rowSpan:'2'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column9',blockSelect:'false',displayMode:'label',value:'지급주기',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',value:'지급일',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'지급수단',displayMode:'label',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'어음일수',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'지급화폐',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column15',value:'적용비율(%)',displayMode:'label',colSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'회원제<br/>차량여부',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column38',value:'화주거래처번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column32',value:'확인',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'지급일자<br/>변경여부',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'현금',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',value:'어음',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'seq',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'calendar',id:'adptDt',blockSelect:'false',displayMode:'label',allowChar:'0-9',mandatory:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'textImage',id:'payAcctDeptNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',width:'100',removeBorderStyle:'false',displayMode:'label',id:'payCycCd',inputType:'select',value:'',center:'left',allOption:'',chooseOption:'',ref:'',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'payDd',value:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_payDd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',id:'payCntShtCd',inputType:'select',value:'',center:'left',allOption:'',chooseOption:'',ref:'',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'draftDdCntCd',value:'',displayMode:'label',allowChar:'0-9',maxLength:'3'}},{T:1,N:'w2:column',A:{width:'100',displayMode:'label',id:'payCrcCd',inputType:'select',value:'',center:'left',ref:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cashRt',value:'',displayMode:'label',maxLength:'3',allowChar:'0-9',displayFormat:'###.#0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'draftRt',value:'',displayMode:'label',maxLength:'3',allowChar:'0-9',displayFormat:'###.#0'}},{T:1,N:'w2:column',A:{width:'100',displayMode:'label',id:'mbssysVehclYn',inputType:'select',value:'0',textAlign:'center',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',style:'',id:'mchtClntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',displayMode:'label',id:'confirmYn',inputType:'select',value:'0',textAlign:'center',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payDtChgYn',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',btnRowDelYn:'Y',btnRowAddYn:'Y',rowAddObjType:'ctrlBtn',rowAddFunction:'f_AddRow1',rowAddUserAuth:'C',rowDelFunction:'f_deleterow1',cancelFunction:'f_Undo1',gridID:'gr_payCondition',id:'udc_gridAddDel',cancelUserAuth:'D',rowDelUserAuth:'D',delObjType:'ctrlBtn',rowDelObjType:'ctrlBtn'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'지급계좌',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_payAcnt',id:'gr_payAccount',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',rowStatusVisible:'true',gridName:'지급계좌'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'70',value:'번호',class:'txt-red'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'적용일자',class:'txt-red'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'지급구분',class:'txt-red'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'150',value:'지급은행',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'지급화폐',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'계좌번호',width:'150',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'예금주',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'확인',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'seq',inputType:'text',removeBorderStyle:'false',width:'70',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'adptDt',inputType:'calendar',removeBorderStyle:'false',width:'100',textAlign:'center',mandatory:'true',allowChar:'0-9'}},{T:1,N:'w2:column',A:{blockSelect:'false',removeBorderStyle:'false',width:'100',displayMode:'label',id:'payClsCd',inputType:'select',value:'0',textAlign:'center',allOption:'',chooseOption:'',ref:'',mandatory:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bankCd',inputType:'select',removeBorderStyle:'false',width:'150',textAlign:'left',allOption:'',chooseOption:'true',chooseOptionLabel:'$blank',ref:'',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_bankcd'},E:[{T:1,N:'w2:label',A:{ref:'bankCdNm'}},{T:1,N:'w2:value',A:{ref:'bankCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',removeBorderStyle:'false',displayMode:'label',id:'payCrcCd',inputType:'select',value:'',center:'left',allOption:'',chooseOption:'',ref:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankAcntNo',inputType:'text',width:'150',textAlign:'left',mandatory:'true',maxLength:'30'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dpstrNm',inputType:'text',width:'100',textAlign:'left',maxLength:'30'}},{T:1,N:'w2:column',A:{width:'70',displayMode:'label',id:'confirmYn',inputType:'select',removeBorderStyle:'false',value:'0',textAlign:'center',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows3',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',btnRowDelYn:'Y',btnRowAddYn:'Y',rowAddObjType:'ctrlBtn',rowAddFunction:'f_AddRow2',rowAddUserAuth:'C',rowDelFunction:'f_deleterow2',cancelFunction:'f_Undo2',gridID:'gr_payCondition',id:'udc_gridAddDel2',cancelUserAuth:'D',rowDelUserAuth:'D',delObjType:'ctrlBtn',rowDelObjType:'ctrlBtn'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]})