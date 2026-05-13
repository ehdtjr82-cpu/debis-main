/*amd /ui/ac/fm/collmoneymgnt/billrecv/fm_504_01_04b.xml 83984 e0f458197063d3c95d1da164876ba5e16cbe243fd352ba5a1dc74f34eaaeb9fb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctRecv',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chkYn',name:'선택여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'billRecvAcctCd',name:'받을어음계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvAcctNm',name:'받을어음계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'siteCd',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'siteNm',name:'사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'b2bType',name:'상품구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arNo',name:'매출번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recDate',name:'접수일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seqNo',name:'SEQ 번호',dataType:'number'}},{T:1,N:'w2:column',A:{id:'buyCorpNm',name:'구매업체명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDate',name:'매출일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDate',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcCanDate',name:'할인가능일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arAmt',name:'매출금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcTotAmt',name:'할인누계',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dcAmt',name:'할인금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dcCanAmt',name:'할인가능금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'buyCorpNo',name:'구매업체사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'b2bTypeNm',name:'거래번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subCorpNo',name:'부계약자사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainCorpNo',name:'주계약자사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'받을어음관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustBankbookNo',name:'수탁통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustBankbookNm',name:'수탁통장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgRsn',name:'변경사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subCorpNm',name:'부계약자사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'autoRegYn',name:'엑셀업로드여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'billDivNo',name:'분할번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNo',name:'계좌번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_XLS',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'arNo',name:'매출번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvAcctCd',name:'어음채권구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyCorpNm',name:'구매업체사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyCorpNo',name:'구매업체사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arAmt',name:'매출금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'recDate',name:'접수일자(수취일자)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDate',name:'매출일자(발행일자)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDate',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subCorpNo',name:'부계약자사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subCorpNm',name:'부계약자사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'금융기관명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'금융기관코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'받을어음관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtDate',name:'발행일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'siteCd',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromRecDate',name:'접수일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toRecDate',name:'접수일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromDueDate',name:'만기일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDueDate',name:'만기일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regYn',name:'등록여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:key',A:{id:'divBilldebenture',name:'채권/어음구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fm.collmoneymgnt.billrecv.RetrieveElecAcctRecvInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_acctRecv","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_acctRecv","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_regist',action:'/ac.fm.collmoneymgnt.billrecv.RegistElecAcctRecvInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_acctRecv","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_regist_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_Delete',action:'/ac.fm.collmoneymgnt.billrecv.DeleteElecAcctRecvInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_acctRecv","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_excelRegist',action:'/ac.fm.collmoneymgnt.billrecv.RegistElecAcctRecvInfoExcelCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_acctRecv","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_excelRegist_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DFWConstants.js',type:'text/javascript',scopeVariable:'DFWConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 오늘 날짜를 구한다.
//-------------------------------------------------------------------------
scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.strFromDate = scwin.strFromDate.substring(0, 6) + "01";
scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin");
scwin.systemPathKey = DFWConstants.FILE_UPLOAD_SYSTEM_PATH;
scwin.systemPathVal = "common/csv/uploadTemp";
scwin.path = "/WEB-INF/struts_config/pt/co.xml";

//-------------------------------------------------------------------------
// 전역변수 선언
//-------------------------------------------------------------------------
scwin.pos_groupCode = 0; // Grid의 저장시 위치로 이동하게 하는 전역변수
scwin.isUpdate = 0; // 수정 버튼 클릭여부
scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드 
scwin.loginCoCd = $c.data.getMemInfo($p, "coCd");
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.loginCoCd) ? '' : scwin.loginCoCd; // 소속 자회사
scwin.loginCoClsCd = $c.data.getMemInfo($p, "coClsCd");
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.loginCoClsCd) ? '' : scwin.loginCoClsCd;
; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.isSubCompany = false;
scwin.today = scwin.strToDate;

//-------------------------------------------------------------------------
// 로그인 정보 전역 변수를 선언
//-------------------------------------------------------------------------
scwin.G_acctDeptCd = $c.data.getMemInfo($p, "acctDeptCd");
scwin.G_acctDeptNm = $c.data.getMemInfo($p, "acctDeptNm");
scwin.G_empNo = $c.data.getMemInfo($p, "empNo");
scwin.G_empNm = $c.data.getMemInfo($p, "userNm");
scwin.registYn = "N"; //저장처리여부
//-------------------------------------------------------------------------
// hidden
//-------------------------------------------------------------------------
scwin.txtCoClsCd = "";
scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 처리)
scwin.checkSearch = false;
scwin.checkSearch1 = false;
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  //scwin.f_Initial(); //gr_acctRecv.TitleHeight = "34"; ASIS 그리드사이즈 TOBE미사용
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {};

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
    lc_delYn.setSelectedIndex(1);
    $c.gus.cfDisableBtn($p, [lc_delYn]);
    scwin.f_OnFocus();
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// f_initObj
//-------------------------------------------------------------------------
scwin.f_initObj = function (e) {};

//-------------------------------------------------------------------------
// 화면 Display시 포커스 설정 : fm_504_01_00b.jsp(f_ViewTab)
// TOBE UDC처리 문제로 회사코드 조회후 처리함.
//-------------------------------------------------------------------------
scwin.f_OnFocus = function (e) {
  $p.setTimeout(function () {
    ed_fromRecDate.focus();
  }, {
    "delay": 50
  });
  ed_fromRecDate.setValue(scwin.strFromDate);
  ed_toRecDate.setValue(scwin.strToDate);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    //ASIS 저장후 정보값 초기화 처리
    if (scwin.registYn == "Y") {
      ed_sclntNo.setValue(""); //거래처
      ed_sclntNm.setValue(""); //거래처
      ed_trustBankCd.setValue(""); //수탁통장번호
      ed_trustBankNm.setValue(""); //수탁통장번호
      ed_sacctDeptCd_04.setValue(""); //청구귀속
      ed_sacctDeptNm.setValue(""); //청구귀속
      ed_txt_chgRsn.setValue(""); //적요
    }

    // 필수 입력 조회 조건에 대한 Check
    let ret = await $c.gus.cfValidate($p, [ed_coCd, ed_fromRecDate, ed_toRecDate]);
    if (!ret) {
      return false;
    }
    if (!$c.gus.cfIsAfterDate($p, ed_fromRecDate.getValue(), ed_toRecDate.getValue())) {
      $c.win.alert($p, "발행일자의 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.");
      return false;
      ;
    }
    if (!$c.gus.cfIsAfterDate($p, ed_fromDueDate.getValue(), ed_toDueDate.getValue())) {
      $c.win.alert($p, "만기일자의 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.");
      return false;
      ;
    }
    $c.gus.cfDisableBtn($p, [btn_Save]);
    ed_fromDueDate.setValue(ed_fromDueDate.getValue().trim());
    ed_toDueDate.setValue(ed_toDueDate.getValue().trim());
    ds_search.set("regYn", lc_regYn.getValue());
    scwin.txtCoClsCd;
    const params = {
      coClsCd: scwin.txtCoClsCd,
      regYn: lc_regYn.getValue(),
      fromDueDate: ed_fromDueDate.getValue(),
      toDueDate: ed_toDueDate.getValue()
    };
    ds_search.setJSON(params);
    ds_acctRecv.removeAll();
    $c.sbm.execute($p, sbm_retrieve);
  } catch (e) {
    console.log("f_Retrieve : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_acctRecv.getRowCount()));
    if (ds_acctRecv.getRowCount() == 0) {
      await $c.win.alert($p, "조회된 데이터가 없습니다.");
      $c.gus.cfEnableObj($p, btn_Save, true); //저장버튼 활성화
      return false;
    } else {
      $c.gus.cfGoPrevPosition($p, gr_acctRecv, scwin.pos_groupCode);
    }
    $c.gus.cfEnableObj($p, btn_Save, true); //저장버튼 활성화
    btn_Retrieve.setDisabled(false); //조회버튼 활성화

    scwin.registYn = "N"; //저장처리여부
  } catch (e) {
    console.log("sbm_retrieve_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  try {
    $c.gus.cfDisableBtn($p, [btn_Save]);

    //필수 입력 항목 Null Value Check
    let ret = await $c.gus.cfValidate($p, [ed_sclntNo, ed_trustBankCd, ed_sacctDeptCd_04]);
    if (!ret) {
      $c.gus.cfEnableObj($p, btn_Save, true); // 저장버튼 활성화
      btn_Retrieve.setDisabled(true); //조회버튼 활성화
      return false;
    }
    if (!scwin.f_checkflag()) {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_056, "항목")); //선택된 @이(가) 없습니다.
      $c.gus.cfEnableObj($p, btn_Save, true); // 저장버튼 활성화
      btn_Retrieve.setDisabled(true); //조회버튼 활성화
      return false;
    }
    let compareToday = null; //오늘일자
    let compareDueDate = null; //만기일

    for (let i = 0; i < ds_acctRecv.getRowCount(); i++) {
      if (ds_acctRecv.getCellData(i, "chkYn") == "1") {
        if (ds_acctRecv.getCellData(i, "status") == "만기일경과") {
          $c.gus.cfEnableObj($p, btn_Save, true); //저장버튼 활성화
          $c.win.alert($p, "만기일경과인 데이터는 저장하실수 없습니다.");
          return false;
        }
        compareToday = parseInt(scwin.today);
        //오늘일자
        compareDueDate = parseInt(ds_acctRecv.getCellData(i, "dueDate")); //만기일

        if (compareDueDate - compareToday < 0) {
          $c.win.alert($p, "만기일이 지난 데이터는 저장할 수 없습니다. (" + i + "번째열)");
          return false;
        }
        // 공백제거 : 사이버브랜치에서 발행일로 사용할 매출일 값이 space 로 들어오는 현상이 있음 ---> 실제 발행일 값이 접수일로 들어오고 있어서 대체하기로함
        // ds_acctRecv.NameValue(i,"arDate") = ds_acctRecv.NameValue(i,"arDate").trim(); 
      }
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      $c.sbm.execute($p, sbm_regist);
    } else {
      $c.gus.cfEnableObj($p, btn_Save, true); //저장버튼 활성화
    }
  } catch (e) {
    console.log("f_Save : " + e);
  }
};

//-------------------------------------------------------------------------
// 저장 콜백
//-------------------------------------------------------------------------
scwin.sbm_regist_submitdone = async function (e) {
  try {
    $c.gus.cfEnableObj($p, btn_Save, true); //저장버튼 활성화
    btn_Retrieve.setDisabled(true); //조회버튼 활성화

    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
    scwin.registYn = "Y"; //저장처리여부 아래 데이터에 대해 조회 시 값을 처리하기 위한 정보
    /*
    ed_sclntNo.setValue(""); //거래처
    ed_sclntNm.setValue(""); //거래처
    ed_trustBankCd.setValue(""); //수탁통장번호
    ed_trustBankNm.setValue(""); //수탁통장번호
    ed_sacctDeptCd_04.setValue(""); //청구귀속
    ed_sacctDeptNm.setValue(""); //청구귀속
    ed_txt_chgRsn.setValue("");//적요
    */
  } catch (e) {
    console.log("sbm_regist_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (ds_acctRecv.getRowCount() <= 0) {
    await $c.win.alert($p, "전자채권 정보 내역이 존재하지않습니다.");
    return false;
  }
  const options = {
    fileName: "전자채권정보조회.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: "전자채권정보조회" //엑셀내 시트명 지정필요시
    ,
    bodyWordwrap: true // 줄바꿈
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_acctRecv, options, infoArr);
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  try {
    if (flag == "CD") {
      if (orgObjCd.getValue() == orgObjCd.hidVal) {
        return;
      } else {
        orgObjNm.setValue("");
      }
    } else {
      if (orgObjNm.getValue() == orgObjNm.hidVal) {
        return;
      } else {
        orgObjCd.setValue("");
      }
    }

    // 정상조회여부 확인
    if (select_code == "1" || select_code == "2" || select_code == "4") {
      scwin.checkSearch = false;
      scwin.checkSearch1 = false;
    }
    if (orgObjCd.getValue().trim() != "" || flag == "NM") {
      if (orgObjNm.getValue().trim() != "" || flag == "CD") {
        orgObjCd.setValue(orgObjCd.getValue().trim());
        orgObjNm.setValue(orgObjNm.getValue().trim());
        scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "NO");
      }
    } else {
      orgObjNm.setValue("");
      orgObjCd.setValue("");
      orgObjCd.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
//각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->거래처, 2:조회->수금귀속부서, 3:조회->통장번호
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  try {
    let cd = "";
    let nm = "";

    // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
    // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
    if (flag == "ALL") {
      cd = "";
      nm = "";
    } else {
      cd = orgObjCd.getValue();
      nm = orgObjNm.getValue();
    }
    let param = "";
    switch (select_code) {
      // 조회조건용 거래처 PopUp 호출
      case '1':
        param = "" + ed_coCd.getValue(); //자회사 회계시스템 추가사항
        //rtnList =cfCommonPopUp('retrieveClntEmpNoList',cd,nm,"T",null,null,null,null,param,null,null,null,null); // 거래처(모든 거래처를 다 조회한다.)
        //f_resultPopUp(orgObjCd, orgObjNm,rtnList);
        udc_clntNo.setSelectId('retrieveClntEmpNoList');
        udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
        , cd // 화면에서의 ??? Code Element의 Value
        , nm // 화면에서의 ??? Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 조회조건용 수금부서 PopUp 호출		 	
      case '2':
        param = "," + ed_coCd.getValue();
        +"," + scwin.txtCoClsCd + ",0"; //자회사 회계시스템 추가사항
        // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo6',cd, nm,"T",null,null,null,null,param,"450","500",null,null); // 귀속부서          
        //f_resultPopUp(orgObjCd, orgObjNm,rtnList);
        udc_sacctDept.setSelectId('retrieveAcctDeptCdInfo6');
        udc_sacctDept.cfCommonPopUp(scwin.udc_sacctDept_callBackFunc // 콜백 함수
        , cd // 화면에서의 ??? Code Element의 Value
        , nm // 화면에서의 ??? Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , '450' // POP-UP뛰을때 원도우의 사용자 정의 폭
        , '500' // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case '3':
        param = ",,,,," + ed_coCd.getValue(); //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp('retrieveBankBookCdInfo',cd,nm,"T",null,null,null,null,param,null,null,null,null); // 통장명
        //통장은 2번째에 통장명이 있기 때문에 1번째와 2번째의 위치를 변경해서 넘겨준다.
        udc_trustBank.setSelectId('retrieveBankBookCdInfo');
        udc_trustBank.cfCommonPopUp(scwin.udc_trustBank_callBackFunc // 콜백 함수
        , cd // 화면에서의 ??? Code Element의 Value
        , nm // 화면에서의 ??? Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case '4':
        //rtnList = cfCommonPopUp('retrieveCrnInfo',cd,nm,"T",null,null,null,null,null,null,null,null,null); //사업자번호
        //f_resultPopUp(orgObjCd,orgObjNm,rtnList);
        udc_site.setSelectId('retrieveCrnInfo');
        udc_site.cfCommonPopUp(scwin.udc_site_callBackFunc // 콜백 함수
        , cd // 화면에서의 ??? Code Element의 Value
        , nm // 화면에서의 ??? Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
      case '6':
        //rtnList = cfCommonPopUp('retrieveBankCdInfo',cd,nm,"T",null,null,null,null,null,null,null,null,null); // 은행명
        udc_bankInfo.setSelectId('retrieveBankCdInfo');
        udc_bankInfo.cfCommonPopUp(scwin.udc_bankInfo_callBackFunc // 콜백 함수
        , cd // 화면에서의 ??? Code Element의 Value
        , nm // 화면에서의 ??? Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
      default:
        await $c.win.alert($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
        break;
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 사업자코드
//-------------------------------------------------------------------------
scwin.udc_site_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_siteCd_04, ed_siteCd_04Nm, '4', 'CD');
};

//-------------------------------------------------------------------------
// 사업자명
//-------------------------------------------------------------------------
scwin.udc_site_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_siteCd_04, ed_siteCd_04Nm, '4', 'NM');
};

//-------------------------------------------------------------------------
// 사업자찾기
//-------------------------------------------------------------------------
scwin.udc_site_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_siteCd_04, ed_siteCd_04Nm, '4', 'ALL');
};

//-------------------------------------------------------------------------
// 은행코드
//-------------------------------------------------------------------------
scwin.udc_bankInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_bankCd, ed_bankNm, '6', 'CD');
};

//-------------------------------------------------------------------------
// 은행명
//-------------------------------------------------------------------------
scwin.udc_bankInfo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_bankCd, ed_bankNm, '6', 'NM');
};

//-------------------------------------------------------------------------
// 은행찾기
//-------------------------------------------------------------------------
scwin.udc_bankInfo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_bankCd, ed_bankNm, '6', 'ALL');
};

//-------------------------------------------------------------------------
// 거래처코드
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '1', 'CD');
};

//-------------------------------------------------------------------------
// 거래처명
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '1', 'NM');
};

//-------------------------------------------------------------------------
// 거래처찾기
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sclntNo, ed_sclntNm, '1', 'ALL');
};

//-------------------------------------------------------------------------
// 수탁통장번호
//-------------------------------------------------------------------------
scwin.udc_trustBank_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_trustBankCd, ed_trustBankNm, '3', 'CD');
};

//-------------------------------------------------------------------------
// 수탁통장명
//-------------------------------------------------------------------------
scwin.udc_trustBank_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_trustBankCd, ed_trustBankNm, '3', 'NM');
};

//-------------------------------------------------------------------------
// 수탁통장번호찾기
//-------------------------------------------------------------------------
scwin.udc_trustBank_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_trustBankCd, ed_trustBankNm, '3', 'ALL');
};

//-------------------------------------------------------------------------
// 청구귀속부서코드
//-------------------------------------------------------------------------
scwin.udc_sacctDept_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd_04, ed_sacctDeptNm, '2', 'CD');
};

//-------------------------------------------------------------------------
// 청구귀속부서명
//-------------------------------------------------------------------------
scwin.udc_sacctDept_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd_04, ed_sacctDeptNm, '2', 'NM');
};

//-------------------------------------------------------------------------
// 청구귀속부서찾기
//-------------------------------------------------------------------------
scwin.udc_sacctDept_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sacctDeptCd_04, ed_sacctDeptNm, '2', 'ALL');
};

//-------------------------------------------------------------------------
// 거래처 팝업 콜백(1)
//-------------------------------------------------------------------------
scwin.udc_clntNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    scwin.checkSearch = false; // 정상조회여부 확인
    scwin.checkSearch1 = false; // 정상조회여부 확인

    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_sclntNo.setValue(rtnList[0]); // 코드값
      ed_sclntNm.setValue(rtnList[1]); // 코드명
      ed_sclntNo.hidVal = rtnList[0]; //HIDDEN 코드값
      ed_sclntNm.hidVal = rtnList[1]; //HIDDEN 코드값
    } else {
      ed_sclntNo.setValue("");
      ed_clntNm.setValue("");
      ed_sclntNo.hidVal = "";
      ed_sclntNm.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 청구귀속부서코드 팝업 콜백(2)
//-------------------------------------------------------------------------
scwin.udc_sacctDept_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    scwin.checkSearch = false; // 정상조회여부 확인
    scwin.checkSearch1 = false; // 정상조회여부 확인

    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_sacctDeptCd_04.setValue(rtnList[0]); // 코드값
      ed_sacctDeptNm.setValue(rtnList[1]); // 코드명
      ed_sacctDeptCd_04.hidVal = rtnList[0]; //HIDDEN 코드값
      ed_sacctDeptNm.hidVal = rtnList[1]; //HIDDEN 코드값
    } else {
      ed_sacctDeptCd_04.setValue("");
      ed_sacctDeptNm.setValue("");
      ed_sacctDeptCd_04.hidVal = "";
      ed_sacctDeptNm.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 수탁통장번호 팝업 콜백(3)
//-------------------------------------------------------------------------
scwin.udc_trustBank_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;

    //통장은 2번째에 통장명이 있기 때문에 1번째와 2번째의 위치를 변경해서 넘겨준다.
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      let tempbankbookNm = rtnList[1];
      rtnList[1] = rtnList[2];
      rtnList[2] = tempbankbookNm;
      ed_trustBankCd.setValue(rtnList[0]); // 코드값
      ed_trustBankNm.setValue(rtnList[1]); // 코드명
      ed_trustBankCd.hidVal = rtnList[0]; //HIDDEN 코드값
      ed_trustBankNm.hidVal = rtnList[1]; //HIDDEN 코드값
    } else {
      ed_trustBankCd.setValue("");
      ed_trustBankNm.setValue("");
      ed_trustBankCd.hidVal = "";
      ed_trustBankNm.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 사업자코드 팝업 콜백(4)
//-------------------------------------------------------------------------
scwin.udc_site_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_siteCd_04.setValue(rtnList[0]); // 코드값
      ed_siteCd_04Nm.setValue(rtnList[1]); // 코드명
      ed_siteCd_04.hidVal = rtnList[0]; //HIDDEN 코드값
      ed_siteCd_04Nm.hidVal = rtnList[1]; //HIDDEN 코드값
    } else {
      ed_siteCd_04.setValue("");
      ed_sacctDeptNm.setValue("");
      ed_siteCd_04.hidVal = "";
      ed_siteCd_04Nm.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 은행코드 팝업 콜백(5)
//-------------------------------------------------------------------------
scwin.udc_bankInfo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_bankCd.setValue(rtnList[0]); // 코드값
      ed_bankNm.setValue(rtnList[1]); // 코드명
      ed_bankCd.hidVal = rtnList[0]; //HIDDEN 코드값
      ed_bankNm.hidVal = rtnList[1]; //HIDDEN 코드값
    } else {
      ed_bankCdsetValue("");
      ed_bankNm.setValue("");
      ed_bankCd.hidVal = "";
      ed_bankNm.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 체크박스 선택 상태 유무 체크 
// 저장할 DATA 설정 (거래처, 수탁통장번호, 청구귀속, 적요)
//-------------------------------------------------------------------------
scwin.f_checkflag = function () {
  try {
    let check_flag = "false";
    for (let idx = 0; idx < ds_acctRecv.getRowCount(); idx++) {
      if (ds_acctRecv.getCellData(idx, "chkYn") == "1") {
        check_flag = "true";
        ds_acctRecv.setCellData(idx, "clntNo", ed_sclntNo.getValue()); //거래처
        ds_acctRecv.setCellData(idx, "trustBankbookNo", ed_trustBankCd.getValue()); //수탁통장번호
        ds_acctRecv.setCellData(idx, "acctDeptCd", ed_sacctDeptCd_04.getValue()); //청구귀속
        ds_acctRecv.setCellData(idx, "chgRsn", ed_txt_chgRsn.getValue()); //적요
        //ds_acctRecv.UserStatus(i) = 1; // DatatSet Status 변경(Insert : 1) , delete:2, update:3 => PBC에서 Update로 처리
        // 위에서 값을 지정하면서 상태가 Update로 바뀐다.
      }
    }
    if (check_flag == "true") {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log("f_checkflag : " + e);
  }
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  try {
    let chkCount = 0;
    let regYnCount = 0;
    for (let i = 0; i < ds_acctRecv.getRowCount(); i++) {
      if (ds_acctRecv.getCellData(i, "chkYn") == "1") {
        chkCount = chkCount + 1;
        if (ds_acctRecv.getCellData(i, "billRecvMgntNo") > 0) {
          regYnCount = regYnCount + 1;
        }
      }
    }
    if (chkCount == 0) {
      $c.win.alert($p, "삭제할 데이터를 선택해주세요");
      return false;
    }
    if (regYnCount != 0) {
      $c.win.alert($p, "등록건이 선택되어 삭제할 수 없습니다.");
      return false;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_004)) {
      $c.sbm.execute($p, sbm_Delete);
    }
  } catch (e) {
    console.log("f_Delete : " + e);
  }
};

//-------------------------------------------------------------------------
// 삭제취소
//-------------------------------------------------------------------------
scwin.f_DeleteCancel = async function () {
  try {
    let chkCount = 0;
    for (let i = 0; i < ds_acctRecv.getRowCount(); i++) {
      if (ds_acctRecv.getCellData(i, "chkYn") == "1") {
        chkCount = chkCount + 1;
        if (ds_acctRecv.getCellData(i, "delYn") == 0) {
          $c.win.alert($p, "미삭제건은 삭제취소 하실 수 없습니다.");
          return false;
        }
      }
    }
    if (chkCount == 0) {
      $c.win.alert($p, "삭제취소 할 데이터를 선택해주세요");
      return;
    }
    if (await $c.win.confirm($p, "삭제취소하시겠습니까")) {
      $c.sbm.execute($p, sbm_Delete);
    }
  } catch (e) {
    console.log("f_DeleteCancel : " + e);
  }
};

//-------------------------------------------------------------------------
// 삭제/삭제취소 콜백
//-------------------------------------------------------------------------
scwin.sbm_Delete_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  } catch (e) {
    console.log("sbm_Delete_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_ExcelSave = async function () {
  try {
    if (!scwin.f_checkflag()) {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_056, "항목")); //선택된 @이(가) 없습니다.
      return;
    }
    $c.sbm.execute($p, sbm_excelRegist);
  } catch (e) {
    console.log("f_ExcelSave : " + e);
  }
};

//-------------------------------------------------------------------------
// 엑셀저장 콜백
//-------------------------------------------------------------------------
scwin.sbm_excelRegist_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  } catch (e) {
    console.log("sbm_excelRegist_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 전체선택 및 해제
//-------------------------------------------------------------------------
scwin.gr_acctRecv_onheaderclick = function (headerId) {
  try {
    let i = 0;
    if (headerId == "chkYn") {
      if (gr_acctRecv.getHeaderValue("chkYn") == true) {
        for (i = 0; i < ds_acctRecv.getRowCount(); i++) {
          if (ds_acctRecv.getCellData(i, "billRecvMgntNo") == "") {
            if (ds_acctRecv.getCellData(i, "status") != "만기일경과") {
              if (ds_acctRecv.getCellData(i, "delYn") != "1") {
                ds_acctRecv.setCellData(i, headerId, "1");
              }
            }
          } else {
            ds_acctRecv.setCellData(i, headerId, "0");
          }
        }
      } else {
        for (i = 0; i < ds_acctRecv.getRowCount(); i++) {
          ds_acctRecv.setCellData(i, headerId, "0");
        }
      }
    }
  } catch (e) {
    console.log("gr_acctRecv_onheaderclick : " + e);
  }
};

//-------------------------------------------------------------------------
// 전체선택 및 해제
//-------------------------------------------------------------------------
scwin.gr_acctRecv_oncellclick = async function (rowIndex, columnIndex, columnId) {
  try {
    let i = 0;
    if (ds_acctRecv.getCellData(rowIndex, "billRecvMgntNo") != "") {
      ed_sclntNo.setValue(ds_acctRecv.getCellData(rowIndex, "clntNo")); //거래처
      ed_sclntNm.setValue(ds_acctRecv.getCellData(rowIndex, "clntNm")); //거래처
      ed_trustBankCd.setValue(ds_acctRecv.getCellData(rowIndex, "trustBankbookNo")); //수탁통장번호
      ed_trustBankNm.setValue(ds_acctRecv.getCellData(rowIndex, "trustBankbookNm")); //수탁통장번호
      ed_sacctDeptCd_04.setValue(ds_acctRecv.getCellData(rowIndex, "acctDeptCd")); //청구귀속
      ed_sacctDeptNm.setValue(ds_acctRecv.getCellData(rowIndex, "acctDeptNm")); //청구귀속
      ed_txt_chgRsn.setValue(ds_acctRecv.getCellData(rowIndex, "chgRsn")); //적요
    } else {
      ed_sclntNo.setValue(""); //거래처
      ed_sclntNm.setValue(""); //거래처
      ed_trustBankCd.setValue(""); //수탁통장번호
      ed_trustBankNm.setValue(""); //수탁통장번호
      ed_sacctDeptCd_04.setValue(""); //청구귀속
      ed_sacctDeptNm.setValue(""); //청구귀속
      ed_txt_chgRsn.setValue(""); //적요
    }
    if (columnId == "chkYn") {
      if (ds_acctRecv.getCellData(rowIndex, "billRecvMgntNo") != "") {
        ds_acctRecv.setCellData(rowIndex, columnId, 0);
        await $c.win.alert($p, "이미 등록되어 선택할 수 없습니다!"); //ASIS 메세지 중복 나옴에 대한 처리때문에 await 처리함.
      }
      if (ds_acctRecv.getCellData(rowIndex, "status") == "만기일경과") {
        ds_acctRecv.setCellData(rowIndex, columnId, 0);
        await $c.win.alert($p, "만기일이 경과하여 선택할 수 없습니다!");
      }
      let compareToday = parseInt(scwin.today); //오늘일자
      let compareDueDate = parseInt(ds_acctRecv.getCellData(rowIndex, "dueDate")); //만기일

      if (compareDueDate - compareToday < 0) {
        ds_acctRecv.setCellData(rowIndex, columnId, 0);
        await $c.win.alert($p, "만기일이 경과하여 선택할 수 없습니다!");
        return false;
      }
      if (ds_acctRecv.getCellData(rowIndex, "billDivNo") == "00") {
        let count1 = 0;
        let count2 = 0;
        let rowPosionArno = ds_acctRecv.getCellData(rowIndex, "arNo");
        let rowPosionArAmto = ds_acctRecv.getCellData(rowIndex, "arAmt");
        for (i = 0; i < ds_acctRecv.getRowCount(); i++) {
          if (rowPosionArno == ds_acctRecv.getCellData(i, "arNo")) {
            count1++;
            if (rowPosionArAmto == ds_acctRecv.getCellData(i, "arAmt")) {
              count2++;
            }
          }
        }
        if (count1 >= '2' && count2 < '2') {
          ds_acctRecv.setCellData(rowIndex, columnId, 0);
          await $c.win.alert($p, "이미 분할 된 건이라 선택할 수 없습니다.");
        }
      }

      // 삭제건과 미삭제건은 동시에 선택할 수 없으며, 삭제건인 경우에는 삭제취소버튼만 활성화, 미삭제건인 경우에는 저장,삭제버튼만 활성화
      if (ds_acctRecv.getCellData(rowIndex, "chkYn") == "1") {
        for (i = 0; i < ds_acctRecv.getRowCount(); i++) {
          if (ds_acctRecv.getCellData(i, "chkYn") == "1") {
            if (ds_acctRecv.getCellData(i, "delYn") != ds_acctRecv.getCellData(i, "delYn")) {
              await $c.win.alert($p, "삭제건과 미삭제건은 동시에 선택하실 수 없습니다.");
              ds_acctRecv.setCellData(rowIndex, columnId, 0);
              return false;
            }
          }
        }
        if (ds_acctRecv.getCellData(rowIndex, "delYn") == "1") {
          $c.gus.cfEnableBtnOnly($p, [btn_DelCancel]);
          $c.gus.cfDisableBtn($p, [btn_Delete, btn_Save]);
        } else {
          $c.gus.cfEnableBtnOnly($p, [btn_Delete, btn_Save]);
          $c.gus.cfDisableBtn($p, [btn_DelCancel]);
        }
      }
    }
  } catch (e) {
    console.log("gr_acctRecv_oncellclick : " + e);
  }
};

//-------------------------------------------------------------------------
// 엑셀 Upload
//-------------------------------------------------------------------------
scwin.f_Upload = async function () {
  try {
    ds_XLS.setJSON([]);
    ds_acctRecv.setJSON([]);
    if (excelUdc.getUpExt() == "1") {
      // csv
      let options = {
        "fileName": "gridDataUpload.csv",
        "status": "C",
        "header": 1,
        "useMaxByteLength": ",",
        "type": "1",
        "startRowIndex": 0,
        "footerExist": "0"
      };
      await $c.data.uploadGridViewCSV($p, gr_excelUpload, options);
    } else {
      // 엑셀
      let options = {
        "fileName": "gridDataUpload.xlsx",
        "status": "C",
        "headerExist": 1,
        "useMaxByteLength": ",",
        "type": "1",
        "startRowIndex": 0,
        "footerExist": "0"
      };
      await $c.data.uploadGridViewExcel($p, gr_excelUpload, options);
    }
  } catch (e) {
    console.log("f_Upload : " + e);
  }
};

//-------------------------------------------------------------------------
// 엑셀 업로드 진행 후  //ASIS f_Import
//-------------------------------------------------------------------------
scwin.gr_excelUpload_onfilereadend = function (value) {
  let row = 0;
  if (ds_XLS.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return false;
  } else {
    //let arNo = "";
    let buyCorpNo = "";
    let recDate = "";
    let arDate = "";
    let dueDate = "";
    let subCorpNo = "";
    console.log("ds_XLS.getRowCount() :: " + ds_XLS.getRowCount());
    for (let i = 0; i < ds_XLS.getRowCount(); i++) {
      row = ds_acctRecv.insertRow(i);

      //ASIS ds_XLS.ColumnValue(i,1) 1~ 12 - > getCellData 의 name으로 변경
      arNo = ds_XLS.getCellData(i, "arNo"); //값을 가져온뒤 replace 처리하여야 한다.
      buyCorpNo = ds_XLS.getCellData(i, "buyCorpNo");
      recDate = ds_XLS.getCellData(i, "recDate");
      arDate = ds_XLS.getCellData(i, "arDate");
      dueDate = ds_XLS.getCellData(i, "dueDate");
      subCorpNo = ds_XLS.getCellData(i, "subCorpNo");

      //replace 빈문자열 방어처리
      if (arNo != "") arNo.replace(/-/gi, "");
      console.log("arNo 2 :: " + arNo);
      if (buyCorpNo != "") buyCorpNo.replace(/-/gi, "");
      if (recDate != "") recDate.replace(/-/gi, "");
      if (arDate != "") arDate.replace(/-/gi, "");
      if (dueDate != "") dueDate.replace(/-/gi, "");
      if (subCorpNo != "") subCorpNo.replace(/-/gi, "");
      ds_acctRecv.setCellData(row, "arNo", arNo); //1
      ds_acctRecv.setCellData(row, "billRecvAcctCd", ds_XLS.getCellData(i, "billRecvAcctCd")); //2
      ds_acctRecv.setCellData(row, "buyCorpNm", ds_XLS.getCellData(i, "buyCorpNm")); //3
      ds_acctRecv.setCellData(row, "buyCorpNo", buyCorpNo); //4
      ds_acctRecv.setCellData(row, "arAmt", ds_XLS.getCellData(i, "arAmt")); //5
      ds_acctRecv.setCellData(row, "recDate", recDate); //6
      ds_acctRecv.setCellData(row, "arDate", arDate); //7
      ds_acctRecv.setCellData(row, "dueDate", dueDate); //8
      ds_acctRecv.setCellData(row, "subCorpNo", subCorpNo); //9
      ds_acctRecv.setCellData(row, "subCorpNm", ds_XLS.getCellData(i, "subCorpNm")); //10
      ds_acctRecv.setCellData(row, "bankNm", ds_XLS.getCellData(i, "bankNm")); //11
      ds_acctRecv.setCellData(row, "bankCd", ds_XLS.getCellData(i, "bankCd")); //12
      ds_acctRecv.setCellData(row, "autoRegYn", 1);
    }
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_acctRecv.getRowCount()));
    $c.gus.cfAlertMsg($p, "업로드작업이 완료되었습니다.");
  }
};

//-------------------------------------------------------------------------
// 그리드 등록여부 데이터 포맷처리
//-------------------------------------------------------------------------
scwin.displayRegYn = function (data, formattedData, rowIndex, colIndex) {
  let rtnData = "";
  if (ds_acctRecv.getCellData(rowIndex, "billRecvMgntNo") > 0) {
    rtnData = "등록";
  } else {
    rtnData = "미등록";
  }
  return rtnData;
};

//-------------------------------------------------------------------------
// 그리드 삭제여부 데이터 포맷처리
//-------------------------------------------------------------------------
scwin.displayDelYn = function (data) {
  return $c.gus.decode($p, data, "1", "삭제", "미삭제");
};

//-------------------------------------------------------------------------
// 그리드 구분 데이터 포맷처리
//-------------------------------------------------------------------------
scwin.displayBillRecvAcctNm = function (data) {
  return $c.gus.decode($p, data, "20", "전자채권", "전자어음");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width:250px;',class:'',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_company',objTypeName:'data',mandatoryCode:'true',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'3',id:'udc_coCd',refDataCollection:'ds_search',code:'coCd',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'접수일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ed_fromRecDate',edToId:'ed_toRecDate',id:'',mandatoryFrom:'true',mandatoryTo:'true',refDataMap:'ds_search',refEdDt:'toRecDate',refStDt:'fromRecDate',style:'',titleFrom:'발행일자',titleTo:'발행일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_regYn',ref:'',style:'width: 110px;',submenuSize:'auto',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미등록'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'채권/어음 구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_divBilldebenture',style:'width: 110px;',submenuSize:'auto',ref:'data:ds_search.divBilldebenture',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전자채권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'20'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전자어음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'25'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'은행명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_bank',code:'bankCd',codeId:'ed_bankCd','ev:onblurCodeEvent':'scwin.udc_bankInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_bankInfo_onblurNameEvent','ev:onclickEvent':'scwin.udc_bankInfo_onclickEvent',id:'udc_bankInfo',maxlengthCode:'6',maxlengthName:'20',nameId:'ed_bankNm',objTypeCode:'data',objTypeName:'data',refDataCollection:'ds_search',selectID:'retrieveBankCdInfo',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',style:'',validTitle:'은행명'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'만기일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_fromDueDate',edToId:'ed_toDueDate',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'만기일자시작일',titleTo:'만기일자종료일'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_site',code:'siteCd',codeId:'ed_siteCd_04','ev:onblurCodeEvent':'scwin.udc_site_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_site_onblurNameEvent','ev:onclickEvent':'scwin.udc_site_onclickEvent',id:'udc_site',mandatoryCode:'true',maxlengthCode:'13',nameId:'ed_siteCd_04Nm',objTypeCode:'data',objTypeName:'data',onloadCallbackFunc:'',popupID:'',popupTitle:'',refDataCollection:'ds_search',selectID:'retrieveCrnInfo',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',style:'',validTitle:'사업자번호'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'삭제여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_delYn',ref:'data:ds_search.delYn',style:'width: 110px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미삭제'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_acctRecv',gridUpYn:'Y',gridDownFn:'scwin.f_GridToExcel',gridUpFn:'scwin.f_Upload',id:'excelUdc',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{class:'grid-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_acctRecv',id:'gr_acctRecv',style:'',visibleRowNum:'10',visibleRowNumFix:'true',fixedColumn:'3','ev:onheaderclick':'scwin.gr_acctRecv_onheaderclick','ev:oncellclick':'scwin.gr_acctRecv_oncellclick',rowStatusVisible:'true',readOnly:'true',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chkYn',inputType:'checkbox',width:'70',fixColumnWidth:'true',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'등록</br>여부',width:'70',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'삭제</br>여부',width:'70',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'구매업체명',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'매출금액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'접수일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'만기일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'부계약자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'부계약자</br>사업자번호',width:'120'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'받을어음</br>관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'사업자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column27',value:'금융기관명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column21',value:'매출번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'매출일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'할인</br>가능일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'할인누계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'할인금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column39',value:'할인가능금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column37',value:'구매업체</br>사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',value:'거래번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column35',value:'주계약자</br>사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'사업자</br>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'금융기관</br>코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column53',value:'상품</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column51',value:'일련</br>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column47',value:'등록</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column49',value:'분할</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'billRecvAcctCd',value:'구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'trustBankbookNo',value:'수탁은행',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'trustBankbookNm',value:'수탁은행명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctDeptCd',value:'부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'chgRsn',value:'변경사유',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chkYn',inputType:'checkbox',width:'70',textAlign:'center',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regYn',inputType:'text',width:'70',textAlign:'center',customFormatter:'scwin.displayRegYn'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'delYn',inputType:'text',width:'70',textAlign:'center',displayFormatter:'scwin.displayDelYn'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'billRecvAcctNm',inputType:'text',width:'70',textAlign:'left',displayFormatter:'scwin.displayBillRecvAcctNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'buyCorpNm',inputType:'text',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arAmt',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'recDate',inputType:'text',width:'100',textAlign:'center',displayFormat:'####-##-##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dueDate',inputType:'text',width:'100',textAlign:'center',displayFormat:'####-##-##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'subCorpNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'subCorpNo',inputType:'text',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'billRecvMgntNo',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'siteNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'bankNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'arNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arDate',displayMode:'label',textAlign:'center',displayFormat:'####-##-##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'status',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcCanDate',displayMode:'label',textAlign:'center',displayFormat:'####-##-##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcTotAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'dcCanAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'buyCorpNo',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'b2bTypeNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'mainCorpNo',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'siteCd',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bankCd',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'b2bType',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'seqNo',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'autoRegYn',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'billDivNo',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'billRecvAcctCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'trustBankbookNo',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'trustBankbookNm',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctDeptCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'chgRsn',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column108',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column107',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column106',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column105',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column104',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column103',displayMode:'label',expression:'sum(\'arAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column102',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column101',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column100',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column99',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column98',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column97',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column96',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column95',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column94',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column93',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column92',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column91',displayMode:'label',expression:'sum(\'dcTotAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column90',displayMode:'label',expression:'sum(\'dcAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',id:'column89',displayMode:'label',expression:'sum(\'dcCanAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column88',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column87',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column86',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column85',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column84',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column83',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column82',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column81',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column80',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column78',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column77',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column76',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column74',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120.00px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120.00px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_sclntNo',nameId:'ed_sclntNm',validExpCode:'',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',id:'udc_clntNo',mandatoryName:'true',editTypeName:'select',refDataCollection:'',code:'clntNo',mandatoryCode:'true',selectID:'retrieveClntEmpNoList','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent',validTitle:'거래처',btnId:'btn_clntNo',UpperFlagName:'1',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수탁통장번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{selectID:'retrieveBankInfo',codeId:'ed_trustBankCd',nameId:'ed_trustBankNm',style:'',btnId:'btn_trustBank',code:'prtBank',refDataCollection:'',objTypeName:'data',objTypeCode:'data',maxlengthCode:'6',allowCharCode:'0-9',id:'udc_trustBank',validTitle:'통장명','ev:onblurCodeEvent':'scwin.udc_trustBank_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_trustBank_onblurNameEvent','ev:onclickEvent':'scwin.udc_trustBank_onclickEvent',maxlengthName:'20',UpperFlagName:'1',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N',mandatoryCode:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구귀속',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_sacctDeptCd_04',nameId:'ed_sacctDeptNm',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'retrieveAcctDeptCdInfo6',style:'',btnId:'btn_sacctDept',validTitle:'청구귀속',code:'crn',refDataCollection:'',allowCharCode:'0-9',maxlengthCode:'5',objTypeCode:'data',objTypeName:'data',mandatoryCode:'true',id:'udc_sacctDept',maxlengthName:'20','ev:onblurCodeEvent':'scwin.udc_sacctDept_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_sacctDept_onblurNameEvent','ev:onclickEvent':'scwin.udc_sacctDept_onclickEvent',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_txt_chgRsn',style:'',maxlength:'50'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_edit',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.f_ExcelSave'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',style:'',type:'button',objType:'f_Delete',userAuth:'D','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_DelCancel',style:'',type:'button',objType:'bDeleteCancel',userAuth:'D','ev:onclick':'scwin.f_DeleteCancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제취소'}]}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_XLS','ev:onfilereadend':'scwin.gr_excelUpload_onfilereadend',id:'gr_excelUpload',scrollByColumn:'false',scrollByColumnAdaptive:'false',visibleRowNum:'5',visibleRowNumFix:'true',style:';display:none;'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'arNo',inputType:'text',value:'매출번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'billRecvAcctCd',inputType:'text',value:'어음채권구분',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'buyCorpNm',inputType:'text',value:'구매업체사업자명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'buyCorpNo',inputType:'text',value:'구매업체사업자번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arAmt',inputType:'text',value:'매출금액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'recDate',inputType:'text',value:'접수일자(수취일자)',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arDate',inputType:'text',value:'매출일자(발행일자)',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dueDate',inputType:'text',value:'만기일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'subCorpNo',inputType:'text',value:'부계약자사업자번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'subCorpNm',inputType:'text',value:'부계약자사업자명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankNm',inputType:'text',value:'금융기관명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankCd',inputType:'text',value:'금융기관코드',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'arNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'billRecvAcctCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'buyCorpNm',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'buyCorpNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arAmt',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'recDate',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arDate',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dueDate',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'subCorpNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'subCorpNm',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankNm',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankCd',inputType:'text',width:'120'}}]}]}]}]}]}]}]})