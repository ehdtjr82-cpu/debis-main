/*amd /ui/ac/co/rsltsmgnt/profitloss/co_406_05_01b.xml 27819 b68dd5238f0c598e4bd5cc2426f06938cf7b4c674b280e243c480b12baa2ba89 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'distClsCd',name:'결산구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distDegCd',name:'차수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distYm',name:'배부년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_distTarget',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'distDegCd',name:'차수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distGiveAcctDeptNm',name:'배부하는부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distTrgtAmt',name:'배부대상금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distRecvAcctDeptNm',name:'배부받는부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rt',name:'비율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distAmt',name:'배부금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distRecvAcctDeptCd',name:'배부받는귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distGiveAcctDeptCd',name:'배부하는부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distYm',name:'배부년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distClsCd',name:'배부구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distStdAmt1',name:'배부기준금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distRt1',name:'배부비율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distStdAmt2',name:'배부기준금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distRt2',name:'배부비율',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.co.rsltsmgnt.profitloss.RetrieveProfitlossDistributionGiveDepartmentConsequenceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_distTarget","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_distTarget","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 배부하는부서조회
 * 메뉴경로 : 회계/관리회계/실적관리/손익보고/배부결과조회
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/profitloss/co_406_05_01b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-12-17
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항
 * 수정이력 :
 *    - 2025-12-17      배기원    최초작성
 */
scwin.fromDate = ""; // 작업날짜(TOBE 사용안함.)
scwin.closeYm = "";

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  //console.log("co_406_05_01 배부하는부서조회 start");
  const codeOptions = [{
    grpCd: "CO024",
    compID: "lc_distDegCd"
  } //배부차수
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};

/**
 * $c.data.setCommonCode 함수의 콜백함수
 */
scwin.callBackCommonCode = function () {
  dlt_commonCodeCO024.sort("cd", 0);
};

/**
 * 조회 데이터셋 헤더 생성
 * TOBE 사용안함
 */
scwin.f_Header = function () {
  // var GAUCE_DATASET_HEADER = "distYm:STRING(6)" // 배부년월
  //     + ",distClsCd:STRING(1)" // 결산구분
  //     + ",distDegCd:STRING(1)" // 배부차수구분코드
  //     + ",acctDeptCd:STRING(5)" // 부서
  //     ;
  // ds_search.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_search.insertRow();
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  gr_distTarget.setNoResultMessageVisible(false);
  ds_distTarget.reform();
  ds_distTarget.removeAll();
  totalRows.setValue("0");
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
  scwin.f_Header();
  scwin.f_Reset();
  scwin.f_SetSrchDefault();
};

/**
 * 조회초기 필드 Clear
 */
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, [rd_distClsCd]);
  scwin.f_SetDefault();
};

/**
 * 조회 기본값 설정
 */
scwin.f_SetSrchDefault = function () {
  scwin.closeYm = $c.date.getServerDateTime($p).substring(0, 6);
  ica_fromDate.setValue(scwin.closeYm);
  rd_distClsCd.setValue("2");
  lc_distDegCd.setSelectedIndex(0);
  ed_sacctDeptCd.setValue("");
  ed_sacctDeptNm.setValue("");
  ica_fromDate.focus();
};

/**
 * 초기화 시
 */
scwin.f_SetDefault = function () {
  ica_fromDate.setValue(scwin.closeYm);
  lc_distDegCd.setSelectedIndex(0);
  ed_sacctDeptCd.setValue("");
  ed_sacctDeptNm.setValue("");
};

/**
 * 조회 및 마감확인시 작업코드 날짜 세팅하는 함수
 * ASIS 사용안함(TOBE 사용안함)
 */
scwin.f_setWrkNoFromDate = function () {
  scwin.fromDate = ica_fromDate.getValue().trim();
};

/**
 * 초기화 관련 변수 정의 함수
 */
scwin.f_Initial = function () {
  $c.gus.cfDisableKey($p);
  $c.gus.cfEnableObjects($p, [udc_sacctDeptCd]);
};

/**
 * 저장 완료후 화면 Reset시 사용하는 함수 
 */
scwin.f_Reset = function () {
  scwin.f_Initial();
};

/**
* 조회버튼
*/
scwin.f_Retrieve = async function () {
  // 필수조건 확인
  let ret = await $c.gus.cfValidate($p, [ica_fromDate, rd_distClsCd]);
  if (!ret) {
    return false;
  }
  if (ica_fromDate.getValue().length != 6) {
    await $c.win.alert($p, "배부년월은(는) 6자리수만큼 입력하십시오.");
    ica_fromDate.focus();
    return;
  }
  ret = await $c.date.isDate($p, ica_fromDate.getValue() + "01");
  if (!ret) {
    await $c.win.alert($p, "올바른 배부년월을(를) 입력하십시오.");
    ica_fromDate.focus();
    return;
  }
  scwin.setInit();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_distTarget.setNoResultMessageVisible(true);
  let rowCnt = ds_distTarget.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt > 0) {
    gr_distTarget.setFocusedCell(0, 0);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 엑셀 파일 다운로드
 */
scwin.f_Export = async function () {
  // var objGridName = eval("gr_distTarget");
  // if ($c.win.confirm("Excel로 다운로드 하시겠습니까?")) {
  //     var exportFileName = "배부결과배부하는부서_" + ed_sacctDeptNm.getValue().trim() + "_" + ica_fromDate.getValue().trim();
  //     $c.data.downloadGridViewExcel(objGridName, "배부결과배부하는부서", exportFileName, 8 + 16);
  // }
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    let sheetTitle = "배부결과배부하는부서";
    let options = {
      fileName: sheetTitle + "_" + ed_sacctDeptNm.getValue().trim() + "_" + ica_fromDate.getValue() + ".xlsx",
      sheetName: sheetTitle,
      type: "1",
      headerColor: "#d9d9d9",
      //"#E8E8E8", //연한회색 #33CCCC
      hiddenVisible: false,
      //히든값(true : 포함, false : 미포함)
      startRowIndex: 0,
      //시작되는 행의 번호(헤더 포함)
      //removeColumns:"",     //다운로드시 excel에서 삭제하려는 열의 번호(여러 개일 경우 ,로 구분)
      useFooter: "true" //다운로드시 Footer를 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력)
    };
    //그리드에 대한 내용을 추가 옵션
    // let infoArr = [
    //     //제목
    //     {
    //         rowIndex: 0               //제목을 표시할 행 index
    //         , colIndex: 0               //제목을 표시할 열 index
    //         , rowSpan: 1                //병합할 행의 수
    //         , colSpan: 9                //병합할 열의 수
    //         , text: sheetTitle          //표시할 내용(제목)
    //         , textAlign: "center"       //표시할 내용의 정렬 방법(left, center, right)
    //         , fontSize: "18px"          //폰트 size
    //         , fontName: "돋움체"        //폰트이름 
    //         //, drawBorder: false         //cell의 border 지정(true, false)
    //     }
    // ];
    $c.data.downloadGridViewExcel($p, gr_distTarget, options);
  }
};

/**
 * 각 Argument에 따른 PopUp을 호출 한다.
 * 1:조회->거래처 , 2:Grid->직급코드
 * code변수는 각 항목별 검색요청 값이다.
 * TOBE : scwin.f_gridPop로 호출(UDC 사용)
 */
scwin.f_openPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  //asis 소스rgument에 따른 PopUp을 호출 한다.
  // var rtnList = new Array();
  // var popUpText = 'retrieveAcctDeptCdInfo5';
  // var param_yy = ica_fromDate.getValue().trim();

  // // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  // if (flag == "ALL") {
  //     cd = "";
  //     nm = "";
  // } else {
  //     cd = orgObjCd.Text;
  //     nm = orgObjNm.Text;
  // }

  // switch (select_code) {
  //     // 조회조건용 수금부서 PopUp 호출
  //     case "1":
  //         rtnList = cfCommonPopUp(popUpText, cd, nm, "T", null, null, null, null, param_yy, ",,,,,,1", "450", "500", null, null); // 귀속부서
  //         scwin.f_resultPopUp(orgObjCd, orgObjNm, rtnList);
  //         break;
  //     default:
  //         $c.win.alert("잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
  //         break;
  // }

  //조회조건 9번째, 전체검색허용여부 15번째
  let param = ica_fromDate.getValue();
  switch (select_code) {
    case "1":
      //부서별
      udc_sacctDeptCd.cfCommonPopUp(scwin.udc_sacctDeptCd_callBackFunc, ed_sacctDeptCd.getValue(), ed_sacctDeptNm.getValue(), flag, null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
    default:
      break;
  }
};

/**
 * 부서코드 팝업 callBack
 */
scwin.udc_sacctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_sacctDeptCd.setValue(ret[0]); // 부서코드
    ed_sacctDeptNm.setValue(ret[1]); // 부서명
    ed_sacctDeptCd.hidVal = ret[0]; // 히든값
  } else {
    ed_sacctDeptCd.setValue(""); // 부서코드
    ed_sacctDeptNm.setValue(""); // 부서명
    ed_sacctDeptCd.hidVal = ""; // 히든값
  }
};

/**
 * PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
 * flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
 */
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
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
  if (!$c.gus.cfIsNull($p, orgObjCd.getValue()) || flag == "NM") {
    if (!$c.gus.cfIsNull($p, orgObjNm.getValue()) || flag == "CD") {
      orgObjCd.setValue(orgObjCd.getValue().trim());
      orgObjNm.setValue(orgObjNm.getValue().trim());
      scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "NO");
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.hidVal = "";
  }
};

/**
 * 팝업결과
 * TOBE 사용안함(UDC 콜백함수 사용)
 */
scwin.f_resultPopUp = function (orgObjCd, orgObjNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    orgObjCd.Text = rtnList[0]; // 코드값
    orgObjNm.Text = rtnList[1]; // 코드명
    orgObjCd.hidVal = rtnList[0]; // HIDDEN 코드값
    orgObjNm.hidVal = rtnList[1]; // HIDDEN 코드명
  } else {
    orgObjCd.Text = "";
    orgObjNm.Text = "";
    orgObjCd.hidVal = "";
    orgObjNm.hidVal = "";
  }
};

/*##############################################################
 * UDC 이벤트
 *##############################################################*/
/**
* 부서코드(조회) 팝업 호출
*/
scwin.udc_sacctDeptCd_onclickEvent = function (e) {
  if (ed_sacctDeptCd.hidVal != ed_sacctDeptCd.getValue()) {
    ed_sacctDeptNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_sacctDeptCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  // scwin.f_CheckPopUp(ed_sacctDeptCd,ed_sacctDeptNm,"1","CD");
  scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, "1", close);
};
scwin.udc_sacctDeptCd_onviewchangeCodeEvent = function (info) {
  ed_sacctDeptNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_sacctDeptCd.getValue())) {
    // scwin.f_CheckPopUp(ed_sacctDeptCd,ed_sacctDeptNm,"1","CD")
    scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, "1", "T");
  }
};
scwin.udc_sacctDeptCd_onviewchangeNameEvent = function (info) {
  ed_sacctDeptCd.setValue("");
  if (!$c.gus.cfIsNull($p, ed_sacctDeptNm.getValue())) {
    // scwin.f_CheckPopUp(ed_sacctDeptCd,ed_sacctDeptNm,'1','CD')
    scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, "1", "T");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:60px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'결산구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_distClsCd',mandatory:'true',ref:'data:dma_search.distClsCd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',title:'결산구분'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계획'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실적'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차수 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_distDegCd',mandatory:'true',ref:'data:dma_search.distDegCd',style:'',submenuSize:'auto',title:'차수',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배부년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal w80',displayFormat:'yyyy/MM',id:'ica_fromDate',mandatory:'true',objType:'data',ref:'data:dma_search.distYm',style:'',title:'배부년월'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_sacctDeptCd',code:'acctDeptCd',codeId:'ed_sacctDeptCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_sacctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_sacctDeptCd_onviewchangeCodeEvent',id:'udc_sacctDeptCd',mandatoryCode:'',maxlengthCode:'5',maxlengthName:'30',name:'acctDeptNm',nameId:'ed_sacctDeptNm',objTypeCode:'data',objTypeName:'key',popupID:'popup_sacctDeptCd',refDataCollection:'dma_search',selectID:'retrieveAcctDeptCdInfo5',style:'',validExpCode:'부서',validTitle:'부서','ev:onviewchangeNameEvent':'scwin.udc_sacctDeptCd_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'배부대상금액 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridID:'gr_distTarget',gridUpYn:'N',grp:'grd_section1',id:'udc_excel',style:'',templateYn:'N',gridDownFn:'scwin.f_Export',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_distTarget',focusMode:'cell',id:'gr_distTarget',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',gridName:'배부하는부서'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'차수',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'배부하는부서',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'계정코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'계정명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column79',inputType:'text',style:'',value:'배부대상금액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'배부받는부서',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'비율(%) ',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'배부금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'배부받는귀속부서코드',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'배부하는부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'배부년월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'배부구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'배부기준금액1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'배부비율1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'배부기준금액2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'배부비율2',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{id:'distDegCd',name:'차수',width:'70',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'distGiveAcctDeptNm',name:'배부하는부서',width:'200',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',width:'100',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',width:'200',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'distTrgtAmt',name:'배부대상금액',width:'120',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'distRecvAcctDeptNm',name:'배부받는부서',width:'200',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'rt',name:'비율',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###.00',displayMode:'label',inputType:'text',style:'',value:'',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{id:'distAmt',name:'배부금액',width:'100',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'distRecvAcctDeptCd',name:'배부받는귀속부서코드',width:'100',textAlign:'center',hidden:'true',hiddenCol:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'distGiveAcctDeptCd',name:'배부하는부서코드',width:'100',textAlign:'center',hidden:'true',hiddenCol:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'distYm',name:'배부년월',width:'100',textAlign:'center',hidden:'true',hiddenCol:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'distClsCd',name:'배부구분코드',width:'100',textAlign:'center',hidden:'true',hiddenCol:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'distStdAmt1',name:'배부기준금액',width:'100',textAlign:'right',hidden:'true',hiddenCol:'true',displayMode:'label',inputType:'text',style:'',value:'',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'distRt1',name:'배부비율',width:'100',textAlign:'center',hidden:'true',hiddenCol:'true',displayMode:'label',inputType:'text',style:'',value:'',dataType:'number',displayFormat:'#,###.00',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{id:'distStdAmt2',name:'배부기준금액',width:'100',textAlign:'right',hidden:'true',hiddenCol:'true',displayMode:'label',inputType:'text',style:'',value:'',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'distRt2',name:'배부비율',width:'100',textAlign:'center',hidden:'true',hiddenCol:'true',displayMode:'label',inputType:'text',style:'',value:'',displayFormat:'#,###.00',dataType:'number',excelCellType:'number',excelFormat:'#,##0.00'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{id:'distDegCd_s1',name:'차수',width:'70',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'distGiveAcctDeptNm_s1',name:'배부하는부서',width:'200',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'acctCd_s1',name:'계정코드',width:'100',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'acctNm_s1',name:'계정명',width:'200',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:'합계'}},{T:1,N:'w2:column',A:{id:'distTrgtAmt_s1',name:'배부대상금액',width:'120',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'distRecvAcctDeptNm_s1',name:'배부받는부서',width:'200',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'rt_s1',name:'비율',width:'100',textAlign:'right',dataType:'text',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'distAmt_s1',name:'배부금액',width:'100',textAlign:'right',displayMode:'label',inputType:'expression',style:'',value:'',dataType:'number',displayFormat:'#,##0',expression:'SUM("distAmt")'}},{T:1,N:'w2:column',A:{id:'distRecvAcctDeptCd_s1',name:'배부받는귀속부서코드',width:'100',textAlign:'center',hidden:'true',hiddenCol:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'distGiveAcctDeptCd_s1',name:'배부하는부서코드',width:'100',textAlign:'center',hidden:'true',hiddenCol:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'distYm_s1',name:'배부년월',width:'100',textAlign:'center',hidden:'true',hiddenCol:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'distClsCd_s1',name:'배부구분코드',width:'100',textAlign:'center',hidden:'true',hiddenCol:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'distStdAmt1_s1',name:'배부기준금액',width:'100',textAlign:'center',hidden:'true',hiddenCol:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'distRt1_s1',name:'배부비율',width:'100',textAlign:'center',hidden:'true',hiddenCol:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'distStdAmt2_s1',name:'배부기준금액',width:'100',textAlign:'center',hidden:'true',hiddenCol:'true',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'distRt2_s1',name:'배부비율',width:'100',textAlign:'center',hidden:'true',hiddenCol:'true',displayMode:'label',inputType:'text',style:'',value:''}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]})