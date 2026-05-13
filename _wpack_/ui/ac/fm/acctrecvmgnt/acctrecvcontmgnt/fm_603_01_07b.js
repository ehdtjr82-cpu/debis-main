/*amd /ui/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_01_07b.xml 41183 5d953d10f2e1b9f528c42de2b20f60d83c87c7fc46824242318a29ac34581ad4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_overDayAcctRecv',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'bilgAcctDeptCd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bilgAcctDeptNm',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crn',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNo',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNm',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sum',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'CollMoney',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'under0Dd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'under30Dd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'under60Dd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'underSum',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ovrDdCollMoney',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'ovr0Dd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'insolvencyCollMoney',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'ovr30Dd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'ovr60Dd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'ovr180Dd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'insolvencySum',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ovrSum',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'stmtPrdDd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'collMoneyPlan',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'collMoneyIntendDt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'planAmtCash',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'planAmtBill',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'planAmtOffset',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'collMoneyRslt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'rsltAmtCash',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'rsltAmtBill',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'number',id:'rsltAmtOffset',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'collMoneyPicId',name:'name1'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchClose'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeAcctDeptCd',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchAcctRecv'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdDate',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_closeRecv',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.SaveCollectionOfMoneyPlanCloseRsltCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_searchClose","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_closeRecv_submitdone','ev:submiterror':'scwin.sbm_closeRecv_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchAcctRecv',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RetrieveCollectionOfMoneyPlanRsltConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchAcctRecv","key":"IN_DS1"},{"id":"ds_overDayAcctRecv","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_overDayAcctRecv","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchAcctRecv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fm_603_01_07b
// 이름     : 수금계획및실적(초과일별채권기준)
// 경로     : 회계/자금관리/수금관리/수금계획/
// 작 성 자 : 오영재
// 작 업 일 : 2025-11-12
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================
scwin.onpageload = function () {
  scwin.dateStr = $c.date.getServerDateTime($p, "yyyyMMdd");
  ed_stdDt.setValue(scwin.dateStr);
  ed_closeYm.setValue(scwin.dateStr);
};

/**
 * UDC값
 */
scwin.onUdcCompleted = function () {
  /*
  ed_FromDate.setValue($c.date.getServerDateTime("yyyy"));
  scwin.f_LoadVer();
  
  if (ed_coCd.getValue() == "023") {
      scwin.f_retrieveCodeList("FI010", "003");
  } else {
      scwin.f_retrieveCodeList("FI010", "001");
  }
  */
};
scwin.f_Close = async function (e) {
  let ret = await $c.gus.cfValidate($p, [ed_closeYm, ed_closeAcctDeptCd]);
  if (!ret) {
    return false;
  }
  dma_searchClose.set("closeYm", ed_closeYm.getValue());
  dma_searchClose.set("closeAcctDeptCd", ed_closeAcctDeptCd.getValue());
  let confirmResult = await $c.win.confirm($p, "마감 하시겠습니까?");
  if (confirmResult) {
    $c.sbm.execute($p, sbm_closeRecv);
  }
};
scwin.sbm_closeRecv_submitdone = function (e) {
  console.log(e);
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    $c.win.alert($p, MSG_CM_INF_001);
  }
};
scwin.sbm_closeRecv_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.btn_close_onclick = function (e) {
  scwin.f_Close();
};
scwin.f_Retrieve = async function (e) {
  let ret = await $c.gus.cfValidate($p, [ed_stdDt]);
  if (!ret) {
    return false;
  }

  /*
  <w2:key id="stdDate" name="name1" dataType="text"></w2:key><!-- 기준일자 -->
  <w2:key id="clntNo" name="name2" dataType="text"></w2:key><!-- 거래처코드 -->
  <w2:key id="acctDeptCd" name="name2" dataType="text"></w2:key><!-- 청구부서 -->
  <w2:key id="crn" name="name2" dataType="text"></w2:key><!-- 사업자번호 -->
  */
  dma_searchAcctRecv.set("stdDate", ed_stdDt.getValue());
  dma_searchAcctRecv.set("clntNo", ed_clntNo.getValue());
  dma_searchAcctRecv.set("acctDeptCd", ed_bilgAcctDeptCd.getValue());
  dma_searchAcctRecv.set("crn", ed_crn.getValue());
  $c.sbm.execute($p, sbm_searchAcctRecv);
};
scwin.sbm_searchAcctRecv_submitdone = function (e) {
  ed_totalrows.setValue(ds_overDayAcctRecv.getRowCount());
  if (ds_overDayAcctRecv.getRowCount() == 0) {
    $c.win.alert($p, MSG_CM_ERR_003);
  }
};

//-------------------------------------------------------------------------
// 거래처 찾기버튼 클릭시
//-------------------------------------------------------------------------
scwin.udc_sclntNo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_clntNo, ed_clntNm, '1', 'ALL');
};

//-------------------------------------------------------------------------
// 거래처코드
//-------------------------------------------------------------------------
scwin.udc_sclntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '1', 'CD');
};

//-------------------------------------------------------------------------
// 거래처명
//-------------------------------------------------------------------------
scwin.udc_sclntNo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '1', 'NM');
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
// 1:조회->거래처 , 2:조회->귀속부서
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  try {
    let cd = "";
    let nm = "";

    // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
    if (flag == "ALL") {
      cd = "";
      nm = "";
    } else {
      cd = orgObjCd.getValue();
      nm = orgObjNm.getValue();
    }
    let param = "";
    switch (select_code) {
      // 조회조건용 수금부서 PopUp 호출(물류 귀속부서만 POPUP에 포함)
      case '1':
        udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
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
      // 관리부서 PopUp 호출
      case '2':
        //udc_acctDeptCd
        udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc // 콜백 함수
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
        , "450" // 윈도우 위치 Y좌표
        , "500" // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 마감부서 PopUp 호출
      case '3':
        //udc_closeAcctDeptCd
        param = ",,,0";
        udc_closeAcctDeptCd.cfCommonPopUp(scwin.udc_closeAcctDeptCd_callBackFunc // 콜백 함수
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
        , "450" // 윈도우 위치 Y좌표
        , "500" // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;

      // 사업자 PopUp 호출
      case '4':
        //udc_crn
        //rtnList = cfCommonPopUp('retrieveEmpNoDeptInfo',cd,nm,"T",null,null,null,null,null,"450","500",null,null); // 귀속부서
        udc_crn.cfCommonPopUp(scwin.udc_crn_callBackFunc // 콜백 함수
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
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 상세 팝업
//-------------------------------------------------------------------------
scwin.f_detail = async function (rowIndex) {
  //상세화면 호출

  /*
  	var valueObject = new Array();
  valueObject[0] = ed_stdDt.Text; 
  valueObject[1] = ds_overDayAcctRecv.NameValue(Row,"bilgAcctDeptCd"); 
  valueObject[2] = ds_overDayAcctRecv.NameValue(Row,"crn");
  valueObject[3] = ed_sclntNo.text;
    	var result = window.showModalDialog("/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_01_07p.jsp", valueObject,
       	         "dialogWidth:1000px; dialogHeight:600px; status:no; scroll:no");
       f_Retrieve();
       */

  let data = {
    stdDt: ed_stdDt.getValue(),
    bilgAcctDeptCd: ds_overDayAcctRecv.getCellData(rowIndex, "bilgAcctDeptCd"),
    crn: ds_overDayAcctRecv.getCellData(rowIndex, "crn"),
    clntNo: ed_clntNo.getValue() // 귀속부서
  };
  let win_url = "/ui/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_01_07p.xml";
  let opts = {
    id: "smpPop",
    popupName: "수금계획 상세",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "수금계획 상세"
  };
  let returnValue = await $c.win.openPopup($p, win_url, opts, data);
};
scwin.gr_overDayAcctRecv_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (ds_overDayAcctRecv.getRowCount() > 0) {
    scwin.f_detail(rowIndex);
  }
};

//-------------------------------------------------------------------------
// 귀속부서코드
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_bilgAcctDeptCd, ed_bilgAcctDeptNm, '2', 'CD');
};

//-------------------------------------------------------------------------
// 귀속부서찾기
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_bilgAcctDeptCd, ed_bilgAcctDeptNm, '2', 'ALL');
};

//-------------------------------------------------------------------------
// 거래처 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_clntNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_clntNo.setValue(rtnList[0]); // 코드값
      ed_clntNm.setValue(rtnList[1]); // 코드명
    } else {
      ed_clntNo.setValue("");
      ed_clntNm.setValue("");
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 청구귀속부서 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_bilgAcctDeptCd.setValue(rtnList[0]); // 코드값
      ed_bilgAcctDeptNm.setValue(rtnList[1]); // 코드명
    } else {
      ed_bilgAcctDeptCd.setValue("");
      ed_bilgAcctDeptNm.setValue("");
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 마감부서 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_closeAcctDeptCd_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_closeAcctDeptCd.setValue(rtnList[0]); // 코드값
      ed_closeAcctDeptNm.setValue(rtnList[1]); // 코드명
    } else {
      ed_closeAcctDeptCd.setValue("");
      ed_closeAcctDeptNm.setValue("");
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 사업자 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_crn_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_crn.setValue(rtnList[0]); // 코드값
      ed_crnNm.setValue(rtnList[1]); // 코드명
    } else {
      ed_crn.setValue("");
      ed_crnNm.setValue("");
    }
  } catch (e) {
    console.log(e);
  }
};
scwin.udc_crn_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_crn, ed_crnNm, '4', 'T');
};

//-------------------------------------------------------------------------
// 마감부서찾기
//-------------------------------------------------------------------------
scwin.udc_closeAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_closeAcctDeptCd, ed_closeAcctDeptNm, '3', 'ALL');
};
//-------------------------------------------------------------------------
// 마감부서명
//-------------------------------------------------------------------------
scwin.udc_closeAcctDeptCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_closeAcctDeptCd, ed_closeAcctDeptNm, '3', 'NM');
};
//-------------------------------------------------------------------------
// 마감부서코드
//-------------------------------------------------------------------------
scwin.udc_closeAcctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_closeAcctDeptCd, ed_closeAcctDeptNm, '3', 'CD');
};
scwin.udc_crn_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_crn, ed_crnNm, '4', 'CD');
};
scwin.f_Export = async function (e) {
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    let sheetTitle = "초과일별채권현황조회";
    const gridId = gr_overDayAcctRecv;
    const infoArr = [];
    const options = {
      fileName: sheetTitle + ".xls",
      // + ".xls",
      sheetName: sheetTitle
    };
    $c.data.downloadGridViewExcel($p, gridId, options, infoArr);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal',id:'ed_stdDt',style:'',displayFormat:'yyyy/MM',mandatory:'true',title:'기준년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',class:'',code:'acctDeptCd',codeId:'ed_bilgAcctDeptCd','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',id:'udc_acctDeptCd',maxlengthCode:'5',maxlengthName:'20',name:'acctDeptNm',nameId:'ed_bilgAcctDeptNm',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'retrieveAcctDeptCdInfo6',style:'',validExpCode:'관리부서:yes:maxLength=5&number',validTitle:'청구귀속부서',mandatoryCode:'false',mandatoryName:'false'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업자번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_crn',class:'flex_no',codeId:'ed_crn','ev:onclickEvent':'scwin.udc_crn_onclickEvent',id:'udc_crn',nameId:'ed_crnNm',popupID:'retrieveCrnInfo2popup',selectID:'retrieveCrnInfo',style:'width: 250px;','ev:onblurCodeEvent':'scwin.udc_crn_onblurCodeEvent',mandatoryCode:'true',mandatoryName:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_clntNo',validExpCode:'',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',nameId:'ed_clntNm',id:'udc_clntNo',mandatoryName:'false',objTypeName:'data',editTypeName:'select',maxlengthName:'20',name:'clntNm',refDataCollection:'dma_searchAcctRecv',code:'clntNo',mandatoryCode:'true',selectID:'retrieveClntList','ev:onblurCodeEvent':'scwin.udc_sclntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_sclntNo_onclickEvent','ev:onblurNameEvent':'scwin.udc_sclntNo_onblurNameEvent',validTitle:'거래처'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_group1',style:'',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_Export',gridID:'gr_overDayAcctRecv',gridDownUserAuth:'X',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_overDayAcctRecv',id:'gr_overDayAcctRecv',style:'',visibleRowNum:'12',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_overDayAcctRecv_oncelldblclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'귀속부서',width:'100',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'귀속부서명',width:'120',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'사업자번호',width:'120',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'거래처',width:'100',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'거래처명',displayMode:'label',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column77',value:'총계',displayMode:'label',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{width:'370',inputType:'text',style:'',id:'CollMoney',value:'정상 채권',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'640',inputType:'text',style:'',id:'ovrDdCollMoney',value:'초과 채권',displayMode:'label',colSpan:'6',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'결제조건',width:'100',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyPlan',inputType:'text',style:'',value:'수금계획',width:'280',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'collMoneyRslt',value:'수금실적',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column106',value:'담당자',displayMode:'label',colSpan:'',rowSpan:'3'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'당월</br>기일도래',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'익월</br>기일도래 ',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'익익월</br>기일도래',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'계',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column58',value:'관리채권</br>(1~30초과)',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'450',inputType:'text',style:'',id:'column54',value:'부실 채권',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column36',value:'계',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column34',value:'일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'현금',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column32',value:'어음',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column127',value:'상계',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column122',value:'현금',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column117',value:'어음',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column112',value:'상계',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column94',value:'31~60초과',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column93',value:'61~180초과',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column92',value:'181초과 ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column91',value:'소계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAcctDeptCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAcctDeptNm',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum(\'under0Dd\',\'under30Dd\',\'under60Dd\',\'ovr0Dd\',\'ovr30Dd\',\'ovr60Dd\',\'ovr180Dd\')',style:'',id:'sum',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'under0Dd',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'under30Dd',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'under60Dd',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum(\'under0Dd\',\'under30Dd\',\'under60Dd\')',style:'',id:'underSum',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'ovr0Dd',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'ovr30Dd',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'ovr60Dd',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'ovr180Dd',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum(\'ovr30Dd\',\'ovr60Dd\',\'ovr180Dd\')',style:'',id:'insolvencySum',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ovrSum',inputType:'expression',expression:'sum(\'ovr0Dd\',\'ovr30Dd\',\'ovr60Dd\',\'ovr180Dd\')',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stmtPrdDd',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyIntendDt',inputType:'text',style:'',value:'',width:'70',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'planAmtCash',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'planAmtBill',inputType:'text',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'planAmtOffset',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rsltAmtCash',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rsltAmtBill',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rsltAmtOffset',value:'',displayMode:'label',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'collMoneyPicId',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'총합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum(\'sum\')',style:'',id:'column80',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',expression:'sum(\'under0Dd\')',style:'',id:'column76',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',expression:'sum(\'under30Dd\')',style:'',id:'column72',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',expression:'sum(\'under60Dd\')',style:'',id:'column68',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum(\'underSum\')',style:'',id:'column64',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',expression:'sum(\'ovr0Dd\')',style:'',id:'column60',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',expression:'sum(\'ovr30Dd\')',style:'',id:'column56',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',expression:'sum(\'ovr60Dd\')',style:'',id:'column52',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',expression:'sum(\'ovr180Dd\')',style:'',id:'column48',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum(\'ovrSum\')',style:'',id:'column44',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum(\'ovrSum\')',style:'',id:'column26',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',expression:'sum(\'insolvencySum\')',style:'',id:'column25',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum(\'planAmtCash\')',style:'',id:'column23',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum(\'planAmtBill\')',style:'',id:'column22',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum(\'planAmtOffset\')',style:'',id:'column130',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum(\'rsltAmtCash\')',style:'',id:'column125',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum(\'rsltAmtBill\')',style:'',id:'column120',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum(\'rsltAmtOffset\')',style:'',id:'column115',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column110',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalrows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'마감년월',class:'req'}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_closeYm',class:' cal',calendarValueType:'yearMonth',displayFormat:'yyyy/MM',mandatory:'true',title:'마감년월'}}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'마감귀속부서',class:'req'}},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',class:'',code:'closeAcctDeptCd',codeId:'ed_closeAcctDeptCd',id:'udc_closeAcctDeptCd',mandatoryCode:'true',mandatoryName:'true',maxlengthCode:'5',maxlengthName:'20',name:'closeAcctDeptNm',nameId:'ed_closeAcctDeptNm',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'retrieveAcctDeptCdInfo6',style:'',validExpCode:'관리부서:yes:maxLength=5&number',validTitle:'마감귀속부서','ev:onclickEvent':'scwin.udc_closeAcctDeptCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_closeAcctDeptCd_onblurNameEvent','ev:onblurCodeEvent':'scwin.udc_closeAcctDeptCd_onblurCodeEvent'}}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'마감'}]}]}]}]}]}]}]}]}]})