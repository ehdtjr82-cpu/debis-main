/*amd /ui/ac/fm/acctrecvmgnt/crdtmgnt/fm_604_02_01b.xml 30565 7ddf33917013b39a882d1784e2c712f0feedd6ec24110b963d4efa65951f46ec */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptYr',name:'사업자번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_crdtLimitMgnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptYr',name:'적용년도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'법인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sixMmUnTxnYn',name:'6개월미거래',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'limitSetupStdDt',name:'한도설정기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'작성자사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confGrd',name:'신용등급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liablRt',name:'부채비율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmtIncrRt',name:'매출액증가율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'insolvRt',name:'부실확율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pldgAmt',name:'담보금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crdtLimit',name:'총 여신한도금액(담보포함)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'basisLimit',name:'기본한도금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fyearRsltsTxnAmt',name:'전년실적금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fyearBilgMmCnt',name:'전년청구월수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'total',name:'한도금액+담보',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_detailCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sts',name:'상태',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_detail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'appNo',name:'신청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptYr',name:'적용년도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'appDt',name:'신청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'appDept',name:'신청부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'appDeptNm',name:'신청부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'corNm',name:'법인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'betAdmitId',name:'중간승인ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'betAdmitNm',name:'중간승인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'betAdmitDept',name:'중간승인부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'betAdmitDeptNm',name:'중간승인부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'betAdmitDt',name:'중간승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalAdmitId',name:'최종승인ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalAdmitNm',name:'최종승인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalAdmitDept',name:'최종승인부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalAdmitDeptNm',name:'최종승인부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalAdmitDt',name:'최종승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectId',name:'반려ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectDept',name:'반려부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectDeptNm',name:'반려부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectDt',name:'반려일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectRsn',name:'반려사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confGrd',name:'신용등급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liablRt',name:'부채비율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmtIncrRt',name:'매출금액증가율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'insolvRt',name:'부실율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crdtLimit',name:'여신한도',dataType:'number'}},{T:1,N:'w2:column',A:{id:'appAmt',name:'신청금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sts',name:'신청상태(FM085)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stsRead',name:'상태(읽기용)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsnFlag',name:'사유수정여부',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCrdtMgnt',action:'/ac.fm.acctrecvmgnt.crdtmgnt.RetrieveCreditLimitListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_crdtLimitMgnt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_crdtLimitMgnt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCrdtMgnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCrdtMgntApply',action:'/ac.fm.acctrecvmgnt.crdtmgnt.RetrieveCreditLimitApplyListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_detailCondition","key":"IN_DS1"},{"id":"ds_detail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_detail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCrdtMgntApply_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.rowOld = -1;
scwin.params = "";
scwin.flag = "";
scwin.crn = "";
scwin.busiNm = "";
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);

  //공통코드 적용
  const codeOptions = [{
    grpCd: "FM056",
    compID: "gr_crdtLimitMgnt:confGrd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ed_srchAdptYr.setValue(scwin.g_sCurrDate.substring(0, 4));
  scwin.flag = scwin.params.flag;
  scwin.crn = scwin.params.crn;
  scwin.busiNm = scwin.params.busiNm;
  if (scwin.flag == "Y") {
    ed_crn.setValue(scwin.crn);
    ed_txt_crn.setValue(scwin.busiNm);
    scwin.f_Retrieve();
  } else {
    if (scwin.crn != null && scwin.crn.length > 0) {
      ed_crn.setValue(scwin.crn);
      ed_txt_crn.setValue(scwin.busiNm);
      scwin.f_Retrieve();
    }
  }
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function (e) {
  $c.gus.cfInitObjects($p, table1, []);
  ed_srchAdptYr.setValue(scwin.g_sCurrDate.substring(0, 4));
};

//-------------------------------------------------------------------------
// 사업자번호
//-------------------------------------------------------------------------
scwin.udc_crn_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_crn, ed_txt_crn, '2');
};

//-------------------------------------------------------------------------
// 사업자번호찾기
//-------------------------------------------------------------------------
scwin.udc_crn_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_crn, ed_txt_crn, 'F');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  if (orgObjCd.getValue() != orgObjCd.hidVal) {
    orgObjNm.setValue("");
  }
  if (orgObjCd.getValue().trim() != "") {
    scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
  } else {
    if (!orgObjNm == null) {
      orgObjNm.setValue("");
    }
    orgObjCd.setValue("");
    orgObjCd.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (select_code, txtCode, txtName, sFlag) {
  try {
    let code = txtCode.getValue();
    let name = txtName.getValue();
    switch (select_code) {
      // 여신대상사업자번호 PopUp 호출
      case '2':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null,null,"F",null,null); // 여신대상사업자번호
        udc_crn.setSelectId('retrieveCreditCrnInfo');
        udc_crn.cfCommonPopUp(scwin.udc_crn_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , 'F' // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 여신한도조회 설정PopUp 호출
      case '3':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null,null,"F",null,null); // 여신대상사업자번호+신용정보등록내역포함
        udc_crn.setSelectId('retrieveCreditLimitTargetCrnInfo');
        udc_crn.cfCommonPopUp(scwin.udc_crn_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , 'F' // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
    }
  } catch (e) {
    console.log("f_openPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 사업자번호호 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_crn_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_crn.setValue(rtnList[0]); // 코드
      ed_txt_crn.setValue(rtnList[1]); // 코드명
      ed_crn.hidVal = rtnList[0]; // 코드
    } else {
      ed_crn.setValue(""); // 코드
      ed_txt_crn.setValue(""); // 코드명
      ed_crn.hidVal = ""; // 코드
    }
  } catch (e) {
    console.log("udc_acctDeptCd_callBackFunc " + e);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    if (ed_crn.getValue().trim() == "" && ed_srchAdptYr.getValue().trim() == "") {
      $c.win.alert($p, "사업자번호와  적용년도 둘중의 하나는 등록바랍니다.");
      return false;
    }
    let ret = await $c.gus.cfValidate($p, [ed_crn]);
    if (!ret) {
      return false;
    } else {
      let temp = ds_condition.get("adptYr");
      ds_condition.set("adptYr", temp.trim());
      ds_crdtLimitMgnt.removeAll();
      $c.sbm.execute($p, sbm_retrieveCrdtMgnt);
    }
  } catch (e) {
    console.log("f_Retrieve " + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieveCrdtMgnt_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    scwin.rowOld = -1;
    if (ds_crdtLimitMgnt.getRowCount() == 0) {
      $c.win.alert($p, "조회된 데이터가 없습니다");
    } else {
      ds_crdtLimitMgnt.sort("payNo", 0); //[0,1,2] 정렬 옵션 (0: 오름차순, 1: 내림차순, 2: 정렬 취소)
    }
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_crdtLimitMgnt.getRowCount()));
    $c.gus.cfGoPrevPosition($p, gr_crdtLimitMgnt, 0); //첫번째 row 포지션이동
  } catch (e) {
    console.log("sbm_retrieveCrdtMgnt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 한도내역 클릭시
//-------------------------------------------------------------------------
scwin.gr_crdtLimitMgnt_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (scwin.rowOld != rowIndex) {
    if (ds_crdtLimitMgnt.getRowStatus(rowIndex) != "C") {
      scwin.rowOld = rowIndex;
      scwin.f_TxnContents(rowIndex);
    }
  }
};

//-------------------------------------------------------------------------
// 조회(거래내역)
//-------------------------------------------------------------------------
scwin.f_TxnContents = function (rowIndex) {
  try {
    ds_detailCondition.set("crn", ds_crdtLimitMgnt.getCellData(rowIndex, "crn"));
    ds_detailCondition.set("sts", "04");
    ds_detail.removeAll();
    $c.sbm.execute($p, sbm_retrieveCrdtMgntApply);
  } catch (e) {
    console.log("f_TxnContents : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieveCrdtMgntApply_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    scwin.rowOld = -1;
    if (ds_detail.getRowCount() == 0) {
      $c.win.alert($p, "조회된 데이터가 없습니다");
    } else {
      ds_detail.sort("payNo", 0); //[0,1,2] 정렬 옵션 (0: 오름차순, 1: 내림차순, 2: 정렬 취소)
    }
    tbx_totalRows2.setValue($c.gus.cfInsertComma($p, ds_detail.getRowCount()));
    $c.gus.cfGoPrevPosition($p, gr_detail, 0); //첫번째 row 포지션이동
  } catch (e) {
    console.log("sbm_retrieveCrdtMgntApply_submitdone : " + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'table1',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용년도 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:'',id:'ed_srchAdptYr',style:'',displayFormat:'yyyy',ref:'data:ds_condition.adptYr'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_crn',nameId:'ed_txt_crn',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'retrieveCreditLimitTargetCrnInfo',style:'',btnId:'btn_crd',validTitle:'사업자번호',code:'crn',refDataCollection:'ds_condition',allowCharCode:'0-9',maxlengthCode:'13',objTypeCode:'data',objTypeName:'data',id:'udc_crn','ev:onblurCodeEvent':'scwin.udc_crn_onblurCodeEvent','ev:onclickEvent':'scwin.udc_crn_onclickEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'N',gridUpYn:'N',gridID:'gr_crdtLimitMgnt'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_crdtLimitMgnt',id:'gr_crdtLimitMgnt',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true',resize:'true',columnMove:'true','ev:oncellclick':'scwin.gr_crdtLimitMgnt_oncellclick',autoFit:'lastColumn'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'년도',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'사업자번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'법인명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'6개월</br>미거래',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'적용일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'기본</br>한도금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'전년</br>실적금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',value:'담보금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',value:'총 여신</br>한도금액(담보포함)',width:'150'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'신용등',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column55',value:'부채비율(%)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'매출액</br>증가율(%)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column52',value:'부실확률(%)',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'adptYr',inputType:'text',width:'80',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'busiNm',inputType:'text',width:'200',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sixMmUnTxnYn',inputType:'select',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'text',width:'100',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'basisLimit',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fyearRsltsTxnAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pldgAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crdtLimit',inputType:'text',width:'150',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'confGrd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'liablRt',displayMode:'label',textAlign:'right',displayFormat:'#,###.#0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmtIncrRt',displayMode:'label',textAlign:'right',displayFormat:'#,###.#0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'insolvRt',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column47',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column57',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column54',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'(단위 : 원)',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 한도승인 내역 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridDownYn:'N',gridUpYn:'N',gridID:'gr_detail'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_detail',id:'gr_detail',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'년도',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'사업자번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'법인명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'신청일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'한도신청금액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'신청부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'신청자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',value:'최종승인일',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',value:'최종승인자',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'adptYr',inputType:'text',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'corNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'appDt',inputType:'text',width:'100',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'appAmt',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'appDeptNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regNm',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'finalAdmitDt',inputType:'text',width:'120',textAlign:'left',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'finalAdmitNm',inputType:'text',width:'120',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column47',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',expression:'sum(\'appAmt\')',displayFormat:'#,##0',id:'column44',value:'0',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column41',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column40',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})