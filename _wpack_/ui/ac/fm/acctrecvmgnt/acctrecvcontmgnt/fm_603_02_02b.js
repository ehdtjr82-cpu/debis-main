/*amd /ui/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_02_02b.xml 42240 c5591c0cf857d2e124f330af1eeb2e32a461b227bfc85c19272be612503834a9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchCollMoney'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromDate',name:'매각일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDate',name:'매각일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyFromDate',name:'입금일자 시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyToDate',name:'입금일자 종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyCntSht',name:'수금수단 계정종류 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookNo',name:'통장번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntEmpNo',name:'관리사원번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctRecvStsCd',name:'작업구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delYn',name:'취소포함여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_collMoneyList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'체크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'체크수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyNo',name:'수금번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneySlipNo',name:'수금전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneySlipKndCd',name:'수금전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtDebit',name:'채권금액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtCredit',name:'매각금액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtFcrcDebit',name:'차변금액(외)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtFcrcCredit',name:'대변금액(외)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cnclSlipNo',name:'취소전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvCnclSlipNo',name:'받을어음수금취소전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclDt',name:'취소일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'작성자사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dispClntNo',name:'매각거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispClntNm',name:'매각거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispDcRt',name:'매각할인율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cancelDt',name:'해지일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvStsCd',name:'채권상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgDt',name:'청구일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtPrdClsCd',name:'결제기한구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtPrdDd',name:'결제기일',dataType:'number'}},{T:1,N:'w2:column',A:{id:'collMoneyCntShtCd',name:'수금수단코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCnt',name:'어음일수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtOutbrDt',name:'가수금선수금발생일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptrNm',name:'입금자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchCd',name:'지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchNm',name:'지점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNo',name:'결재자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNm',name:'허가사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpEmail',name:'허가사원이메일',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_collMoneyCont_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'collectionOfMoneyNumber',name:'수금번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_collMoneyCont',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'collMoneyAdjmSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'세금계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvNo',name:'어음번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'정리계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'정리금액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'정리금액(외)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtOutbrNo',name:'가선수관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'채권관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'어음관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyNo',name:'수금번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClsCd',name:'차대구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_searchCollMoney',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RetrieveAccountReceivableDispositionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchCollMoney","key":"IN_DS1"},{"id":"ds_collMoneyList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_collMoneyList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchCollMoney_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_collMoneyCont',action:'',method:'post',mediatype:'application/json',ref:'data:json,ds_collMoneyCont_condition',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_collMoneyCont_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveCollMoney',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_collMoneyList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveCollMoney_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMM") + "01";
scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //ASIS 히든,showfalse 그리드 필드정보
  gr_collMoneyList.setColumnVisible("dispClntNm", false);
  gr_collMoneyList.setColumnVisible("amtFcrcDebit", false);
  gr_collMoneyList.setColumnVisible("amtFcrcCredit", false);
  gr_collMoneyList.setColumnVisible("drawEmpNo", false);
  gr_collMoneyList.setColumnVisible("acctDeptCd", false);
  gr_collMoneyList.setColumnVisible("drawEmpNo", false);
  gr_collMoneyList.setColumnVisible("dispClntNo", false);
  gr_collMoneyList.setColumnVisible("dispDcRt", false);
  gr_collMoneyList.setColumnVisible("dispClntNo", false);
  gr_collMoneyList.setColumnVisible("cancelDt", false);
  gr_collMoneyList.setColumnVisible("dispClntNo", false);
  gr_collMoneyList.setColumnVisible("drawEmpNo", false);
  gr_collMoneyList.setColumnVisible("dispClntNo", false);
  gr_collMoneyList.setColumnVisible("dispClntNo", false);

  //ASIS 히든,showfalse 그리드 필드정보(하단)
  gr_collMoneyCont.setColumnVisible("susRecvInitamtOutbrNo", false);
  gr_collMoneyCont.setColumnVisible("acctRecvNo", false);
  gr_collMoneyCont.setColumnVisible("billRecvMgntNo", false);
  gr_collMoneyCont.setColumnVisible("clntNo", false);
  gr_collMoneyCont.setColumnVisible("acctCd", false);
  gr_collMoneyCont.setColumnVisible("collMoneyNo", false);
  gr_collMoneyCont.setColumnVisible("drcrClsCd", false);
  gr_collMoneyCont.setColumnVisible("crcCd", false);
  gr_collMoneyCont.setColumnVisible("exchRt", false);
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  acb_delYn.setSelectedIndex(0);
  ed_FromDate.setValue(scwin.strFromDate);
  ed_ToDate.setValue(scwin.strToDate);
  ed_cancelDt.setValue(scwin.strToDate);
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {};

//-------------------------------------------------------------------------
//그리드 삭제여부 데이터포맷처리
//-------------------------------------------------------------------------
scwin.delYnData = function (data) {
  return $c.gus.decode($p, data, "1", "예", "아니오");
};

//-------------------------------------------------------------------------
// 귀속부서코드
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'CD');
};

//-------------------------------------------------------------------------
// 귀속부서명
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'NM');
};

//-------------------------------------------------------------------------
// 귀속부서찾기
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '2', 'ALL');
};

//-------------------------------------------------------------------------
// 매각사원
//-------------------------------------------------------------------------
scwin.udc_mgntEmp_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_smgntEmpNo, ed_smgntEmpNm, '2', 'CD');
};

//-------------------------------------------------------------------------
// 매각사원명
//-------------------------------------------------------------------------
scwin.udc_mgntEmp_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_smgntEmpNo, ed_smgntEmpNm, '2', 'NM');
};

//-------------------------------------------------------------------------
// 매각사원찾기
//-------------------------------------------------------------------------
scwin.udc_mgntEmp_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_smgntEmpNo, ed_smgntEmpNm, '2', 'ALL');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  try {
    console.log("02 ? f_CheckPopUporg ObjNm.getValue() : " + orgObjNm.getValue() + ", orgObjNm.hidVal : " + orgObjNm.hidVal);
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
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->수금부서, 2:조회->매각사원, 3:조회->통장번호
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
    switch (select_code) {
      // 조회조건용 수금부서 PopUp 호출
      case '1':
        //rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo',cd, nm,"T",null,null,null,null,",,,0","450","500",null,null); // 귀속부서
        udc_acctDeptCd.setSelectId('retrieveAcctDeptCdInfo');
        udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc // 콜백 함수
        , cd // 화면에서의 ??? Code Element의 Value
        , nm // 화면에서의 ??? Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , ",,,0" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , '450' // POP-UP뛰을때 원도우의 사용자 정의 폭
        , '500' // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case '2':
        //rtnList = cfCommonPopUp('retrieveEmpInfo',cd,nm,"T",null,null,null,null,null,null,null,null,null); // 매각사원
        udc_mgntEmp.setSelectId('retrieveEmpInfo');
        udc_mgntEmp.cfCommonPopUp(scwin.udc_mgntEmp_callBackFunc // 콜백 함수
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
        $c.gus.cfAlertMsg($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
        break;
    }
  } catch (e) {
    console.log("f_openPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 청구(수금)귀속부서 팝업 콜백(1)
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_sacctDeptCd.setValue(rtnList[0]); // 코드값
      ed_sacctDeptNm.setValue(rtnList[1]); // 코드명
      ed_sacctDeptCd.hidVal = rtnList[0]; // HIDDEN 코드값
      ed_sacctDeptNm.hidVal = rtnList[1]; // HIDDEN 코드명
    } else {
      ed_sacctDeptCd.setValue("");
      ed_sacctDeptNm.setValue("");
      ed_sacctDeptCd.hidVal = "";
      ed_sacctDeptNm.hidVal = "";
    }
  } catch (e) {
    console.log("udc_acctDeptCd_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 매각사원 팝업 콜백(2)
//-------------------------------------------------------------------------
scwin.udc_mgntEmp_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_smgntEmpNo.setValue(rtnList[0]); // 코드값
      ed_smgntEmpNm.setValue(rtnList[1]); // 코드명
      ed_smgntEmpNo.hidVal = rtnList[0]; // HIDDEN 코드값
      ed_smgntEmpNm.hidVal = rtnList[1]; // HIDDEN 코드명
    } else {
      ed_smgntEmpNo.setValue("");
      ed_sacctDeptNm.setValue("");
      ed_smgntEmpNo.hidVal = "";
      ed_smgntEmpNm.hidVal = "";
    }
  } catch (e) {
    console.log("udc_mgntEmp_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    if (!$c.gus.cfIsAfterDate($p, ed_FromDate.getValue(), ed_ToDate.getValue())) {
      $c.gus.cfAlertMsg($p, "조회 매각일자는종료일자보다 이전 날짜 이어야 합니다.");
      ed_FromDate.focus();
      return false;
      ;
    }

    // 저장시 필수 입력 사항 Check
    let ret = await $c.gus.cfValidate($p, [ed_FromDate, ed_ToDate, ed_sacctDeptCd]);
    if (!ret) {
      return false;
    }
    ds_searchCollMoney.set("acctRecvStsCd", ACConstants.COLLECION_OF_MONEY_DISP); // 작업구분코드에 매각을 세팅함.
    //ds_searchCollMoney.set("acctRecvStsCd", "03");//01185 04매각이 없어서 03 상계로 임의 화면구성만 테스트
    ds_collMoneyList.removeAll(); //데이터초괴화
    ds_collMoneyCont.removeAll(); //데이터초괴화
    $c.sbm.execute($p, sbm_searchCollMoney);
  } catch (e) {
    console.log("f_Retrieve :" + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_searchCollMoney_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    if (ds_collMoneyList.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    } else {
      tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_collMoneyList.getRowCount()));
      $c.gus.cfGoPrevPosition($p, gr_collMoneyList, 0); //첫번째 row 포지션이동

      //하단그리드 정보조회
      ds_collMoneyCont_condition.set("collectionOfMoneyNumber", ds_collMoneyList.getCellData(0, "collMoneyNo"));
      sbm_collMoneyCont.action = "/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RetrieveAccountReceivableDispositionContentsCMD.do";
      $c.sbm.execute($p, sbm_collMoneyCont);
    }
  } catch (e) {
    console.log("sbm_searchCollMoney_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 하단.
//-------------------------------------------------------------------------
scwin.sbm_collMoneyCont_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    ds_collMoneyCont.setJSON(e.responseJSON.GAUCE);
    tbx_totalRows2.setValue($c.gus.cfInsertComma($p, ds_collMoneyCont.getRowCount()));
    $c.gus.cfGoPrevPosition($p, gr_collMoneyCont, 0); //첫번째 row 포지션이동
  } catch (e) {
    console.log("sbm_collMoneyCont_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 매각처리내역서 호출 
//-------------------------------------------------------------------------
scwin.f_Print = function (e) {
  /* TOBE 파일미존재로 주석처리
  if (!cfValidate([ed_sacctDeptCd, ed_sacctDeptNm]) ) {
  return;
  }
  var valueObject = new Object();
  	valueObject.fromDate = ed_FromDate.Text;
  	valueObject.toDate = ed_ToDate.Text;
  	valueObject.acctDeptCd = ed_sacctDeptCd.Text;
  	valueObject.acctDeptNm = ed_sacctDeptNm.Text;
  	
  	var returnValue = window.showModalDialog("/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_02_02p.jsp", valueObject, 
      	         "dialogWidth:405px; dialogHeight:250px; status:no; scroll:no");
  */
};

//-------------------------------------------------------------------------
// 수금헤더 클릭시 수금정산내역을 조회 한다.
//-------------------------------------------------------------------------
scwin.gr_collMoneyList_oncellclick = function (rowIndex, columnIndex, columnId) {
  try {
    if (columnId != "num") {
      //하단그리드 정보조회
      ds_collMoneyCont_condition.set("collectionOfMoneyNumber", ds_collMoneyList.getCellData(rowIndex, "collMoneyNo"));
      sbm_collMoneyCont.action = "/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RetrieveAccountReceivableDispositionContentsCMD.do";
      $c.sbm.execute($p, sbm_collMoneyCont);
    }

    // 수금전표 POPUP
    if (columnId == "collMoneySlipNo") {
      $c.gus.cfShowSlipInfo($p, ds_collMoneyList.getCellData(rowIndex, "collMoneySlipNo"));
    }

    // 취소전표 POPUP
    if (columnId == "cnclSlipNo") {
      if (ds_collMoneyList.getCellData(rowIndex, "cnclSlipNo") != "") {
        $c.gus.cfShowSlipInfo($p, ds_collMoneyList.getCellData(rowIndex, "cnclSlipNo"));
      }
    }
  } catch (e) {
    console.log("gr_collMoneyList_oncellclick : " + e);
  }
};

//-------------------------------------------------------------------------
// 매각취소 함수 호출
//-------------------------------------------------------------------------
scwin.f_Cancel = async function (ret) {
  try {
    if (ds_collMoneyList.getModifiedIndex().length == 0) {
      $c.gus.cfAlertMsg($p, "선택하신 사항이 없습니다.");
      return false;
    }
    let ret = await $c.gus.cfValidate($p, [ed_cancelDt]);
    if (!ret) {
      return false;
    }
    let count = 1;
    for (let i = 0; i < ds_collMoneyList.getRowCount(); i++) {
      count = count + i;
      if (ds_collMoneyList.getCellData(i, "num") == "T") {
        if (ds_collMoneyList.getCellData(i, "cnclSlipNo") != "") {
          $c.gus.cfAlertMsg($p, count + "행의 매각사항은 매각취소 하실수 없는 상태 입니다.");
          ds_collMoneyList.setRowPosition(i);
          return false;
        }
        if (ds_collMoneyList.getCellData(i, "delYn") == "1") {
          $c.gus.cfAlertMsg($p, count + "행의 매각사항은 매각취소 하실수 없는 상태 입니다.");
          ds_collMoneyList.setRowPosition(i);
          return false;
        }
      }
    }
    if (await $c.win.confirm($p, "선택하신 사항을 매각취소 하시겠습니까")) {
      for (let i = 0; i < ds_collMoneyList.getRowCount(); i++) {
        if (ds_collMoneyList.getCellData(i, "num") == "T") {
          // 취소일자를 각 Row에 입력한다.
          ds_collMoneyList.setCellData(i, "cnclDt", ed_cancelDt.getValue());
        }
      }
      sbm_saveCollMoney.action = "/ac.fm.acctrecvmgnt.acctrecvcontmgnt.CancelAccountReceivableDispositionCMD.do";
      $c.sbm.execute($p, sbm_saveCollMoney);
    }
  } catch (e) {
    console.log("f_Cancel : " + e);
  }
};

//-------------------------------------------------------------------------
// 매각취소 함수 호출 콜백
//-------------------------------------------------------------------------
scwin.sbm_saveCollMoney_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    scwin.f_Retrieve();
    $p.parent().tabControl1.getWindow(0).scwin.f_Retrieve();
  } catch (e) {
    console.log("sbm_saveCollMoney_submitdone : " + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매각일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_searchCollMoney',refEdDt:'toDate',refStDt:'fromDate',style:'',edFromId:'ed_FromDate',edToId:'ed_ToDate',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data',titleFrom:'매각일자',titleTo:'매각일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구(수금)귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_sacctDeptCd',nameId:'ed_sacctDeptNm',maxlengthCode:'5',allowCharCode:'0-9',code:'acctDeptCd',name:'acctDeptNm',refDataCollection:'ds_searchCollMoney',selectID:'retrieveAcctDeptCdInfo',id:'udc_acctDeptCd',validTitle:'청구(수금)부서','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCd_onblurNameEvent',mandatoryName:'true',mandatoryCode:'true',maxlengthName:'20',objTypeCode:'data',objTypeName:'data',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매각사원 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_smgntEmpNo',nameId:'ed_smgntEmpNm',maxlengthCode:'5',btnId:'btn_mgntEmp',objTypeCode:'data',code:'mgntEmpNo',refDataCollection:'ds_searchCollMoney',selectID:'retrieveEmpInfo',id:'udc_mgntEmp',validTitle:'매각사원','ev:onblurCodeEvent':'scwin.udc_mgntEmp_onblurCodeEvent','ev:onclickEvent':'scwin.udc_mgntEmp_onclickEvent','ev:onblurNameEvent':'scwin.udc_mgntEmp_onblurNameEvent',maxlengthName:'20',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'취소포함여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_delYn',search:'start',style:'width: 110px;',submenuSize:'auto',allOption:'',ref:'data:ds_searchCollMoney.delYn',disabled:'false',displayMode:'value delim label',searchTarget:'both'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'포함'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미포함'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매각목록',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_collMoneyList',id:'gr_collMoneyList',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true',resize:'true',columnMove:'true','ev:oncellclick':'scwin.gr_collMoneyList_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'선택',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',value:'작업일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyNo',inputType:'text',value:'매각번호',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawEmpNm',inputType:'text',value:'매각사원',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amtDebit',inputType:'text',value:'채권금액(원)',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amtCredit',inputType:'text',value:'매각금액(원) ',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dispClntNm',inputType:'text',value:'매각거래처명',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneySlipNo',inputType:'text',value:'매각전표번호',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnclSlipNo',inputType:'text',value:'취소전표번호',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnclDt',inputType:'text',value:'매각취소일자',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'delYn',value:'삭제여부',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'amtFcrcDebit',value:'차변금액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'amtFcrcCredit',value:'대변금액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'drawEmpNo',value:'작성사원번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'acctDeptCd',value:'귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'dispClntNo',value:'매각거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dispDcRt',value:'매각할인율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cancelDt',value:'취소일자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'num',inputType:'checkbox',width:'70',trueValue:'T',falseValue:'F',valueType:'other',checkAlways:'true',readOnly:'false',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',width:'100',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyNo',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawEmpNm',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amtDebit',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amtCredit',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dispClntNm',inputType:'text',width:'120',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneySlipNo',inputType:'text',width:'120',textAlign:'center',class:'underline txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnclSlipNo',inputType:'text',width:'120',textAlign:'center',class:'underline txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnclDt',inputType:'text',width:'120',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'delYn',displayMode:'label',textAlign:'center',displayFormatter:'scwin.delYnData'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'amtFcrcDebit',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'amtFcrcCredit',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'drawEmpNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'acctDeptCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'dispClntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dispDcRt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cancelDt',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'수금정산내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'취소일자 ',class:'req'}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_cancelDt',class:'',calendarValueType:'yearMonthDate',objType:'data',mandatory:'true',title:'취소일자'}}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_Print',type:'button',class:'btn',objType:'bSave',userAuth:'P','ev:onclick':'scwin.f_Print'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매각내역서'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Cancel',type:'button',class:'btn',objType:'bDetail',userAuth:'D','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매각취소'}]}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group2',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_collMoneyCont',id:'gr_collMoneyCont',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true',resize:'true',columnMove:'true',autoFit:'lastColumn'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyAdjmSeq',inputType:'text',value:'순번',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntNo',inputType:'text',value:'세금계산서번호',width:'150',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankbookNo',inputType:'text',value:'통장번호',width:'150',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'billRecvNo',inputType:'text',value:'어음번호',width:'150',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',value:'거래처',width:'200',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'acctNm',value:'정리계정',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'amt',value:'정리금액(원)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'amtFcrc',value:'정리금액(외)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'susRecvInitamtOutbrNo',value:'가선수관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'acctRecvNo',value:'채권관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'billRecvMgntNo',value:'어음관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNo',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctCd',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyNo',value:'수금번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'drcrClsCd',value:'차대구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crcCd',value:'통화코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'exchRt',value:'환율',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyAdjmSeq',inputType:'text',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntNo',inputType:'text',width:'150',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankbookNo',inputType:'text',width:'150',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'billRecvNo',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'acctNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'amt',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'amtFcrc',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'susRecvInitamtOutbrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'acctRecvNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'billRecvMgntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'drcrClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crcCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'exchRt',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})