/*amd /ui/ac/co/rsltsmgnt/rsltsaggr/co_403_01_03b.xml 23529 8c9598af5ff1742c57f7e4a39e6e8214816edc7d9b884b6e9f3cc00732eb0cd0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ymFrom',name:'예산년도(시작)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ymTo',name:'예산년도(종료)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'planRsltsClsCd',name:'계획_실적',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_intRt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ver',name:'버전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'intRt',name:'실질금리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{dataType:'text',name:'계획실적구분코드',id:'planRsltsClsCd'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.co.rsltsmgnt.rsltsaggr.RetrieveInterestRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search", "key":"IN_DS1"},{"id":"ds_intRt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_intRt", "key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.co.rsltsmgnt.rsltsaggr.RegistInterestRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_intRt","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 이자율등록
 * 메뉴경로 : 회계/관리회계/실적관리/실적집계/자산비용관리/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/rsltsaggr/co_403_01_03b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-09-26
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항
 *    1. login정보 확인 필요 
 *     ☞  $c.data.getMemInfo() 처리
 *    2. [해결]<%@ page import="dbl.ac.am.constants.ACConstants" %> 상수가져오는건 공통에서 글로벌 상수로 변경할 듯. 
 *    3. 엑셀다운로드 시 Number타입 excelFormat, excelCellType 옵션 추가 작업
 * 수정이력 :
 *    - 2025-09-26      배기원    최초작성
 */
//hidden 값
scwin.txtCoClsCd = "";
scwin.memJson = $c.data.getMemInfo($p);
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson["coCd"]) ? "" : scwin.memJson["coCd"]; //소속자회사
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson["coClsCd"]) ? "" : scwin.memJson["coClsCd"]; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = $c.gus.cfIsNull($p, scwin.memJson["userHomeClsCd"]) ? "" : scwin.memJson["userHomeClsCd"]; //사용자소속구분코드
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson["coCd"]) ? "" : scwin.memJson["coCd"]; //회사코드
scwin.isSubCompany = false;
scwin.initJson = {}; //초기세팅값(TOBE)

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  gr_intRt.setNoResultMessageVisible(false);
  ds_intRt.reform();
  ds_intRt.removeAll();
  totalRows.setValue("0");
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
  scwin.f_setCompanyInfo();
  scwin.f_PopUpCompanyInfo('T');
  //UDC onkeydown 추가
  ica_ymFrom.bind("onkeydown", scwin.ica_ymFrom_onkeydown);
  ica_ymTo.bind("onkeydown", scwin.ica_ymTo_onkeydown);
  // dma_search.reform();

  scwin.initJson = dma_search.getJSON();
};

/**
 * 조회초기 필드 Clear
 */
scwin.f_FieldClear = function (e) {
  //asis cfInitObjects(tbl_search,[ica_ymFrom,ica_ymTo]);
  $c.gus.cfInitObjects($p, tbl_search, [ed_coCd, ed_coNm]);
  dma_search.set("ymFrom", scwin.initJson["ymFrom"]);
  dma_search.set("ymTo", scwin.initJson["ymTo"]);
  dma_search.set("planRsltsClsCd", scwin.initJson["planRsltsClsCd"]);
};

/**
 * 자회사 회계 시스템 추가에 따른 설정 
 */
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  var vFromYm = $c.date.getServerDateTime($p, "yyyyMM");
  var vToYm = WebSquare.date.dateTimeAdd(vFromYm, 4, "month");
  dma_search.set("ymFrom", vFromYm);
  dma_search.set("ymTo", vToYm);
  dma_search.set("planRsltsClsCd", "2");
  $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
};

/**
 * 회사코드 팝업호출(UDC)
 */
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  // SET
  // if (rtnList != null) {
  //     if (rtnList[0] == "N/A") return;

  //     // 회사코드를 다르게 선택한 경우
  //     if (scwin.hid_coCd != rtnList[0]) {
  //         scwin.f_setInitObj();
  //     }

  //     ed_coCd.setValue = rtnList[0]; // 코드
  //     ed_coNm.value    = rtnList[5];    // 회사명
  //     scwin.hid_coCd   = rtnList[0];   // 히든값
  //     scwin.txtCoClsCd = rtnList[1]; // 회사구분

  // } else {
  //     ed_coCd.setValue = "";
  //     ed_coNm.value = "";
  //     ed_coCd.hidVal = "";
  //     scwin.txtCoClsCd = "";
  // }

  // // 자회사 회계 시스템
  // if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) { 
  //     scwin.isSubCompany = true;
  // } else {
  //     scwin.isSubCompany = false;
  // }

  udc_comCode.cfCommonPopUp(scwin.udc_comCode_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, null);
};

/**
 * 회사코드 팝업 callBack
 */
scwin.udc_comCode_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_coCd.setValue(ret[0]); // 코드
    ed_coNm.setValue(ret[5]); // 회사명
    ed_coCd.hidVal = ret[0]; // 히든값
    scwin.txtCoClsCd = ret[1]; // 회사구분
  } else {
    ed_coCd.setValue(""); // 코드
    ed_coNm.setValue(""); // 회사명
    ed_coCd.hidVal = ""; // 히든값
    scwin.txtCoClsCd = ""; // 회사구분
  }
  // 자회사 회계 시스템
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};

/**
 * 조회 : 데이터를 조회한다.
 */
scwin.f_Retrieve = async function (e) {
  //   if($c.gus.cfValidate([ica_ymFrom]) != true || $c.gus.cfValidate([ica_ymTo]) != true) {
  //      return false;
  //   }
  let ret = await $c.gus.cfValidate($p, [tbl_search]);
  if (!ret) {
    return false;
  }
  var tempFrom = ica_ymFrom.getValue() + "01";
  var tempTo = ica_ymTo.getValue() + "01";
  if (!$c.gus.cfIsNull($p, tempFrom) || !$c.gus.cfIsNull($p, tempTo)) {
    if (tempFrom.length != "8") {
      await $c.gus.cfAlertMsg($p, "올바른 마감기간을 입력하십시오.");
      ica_ymFrom.focus();
    }
    if (tempTo.length != "8") {
      await $c.gus.cfAlertMsg($p, "올바른 마감기간을 입력하십시오.");
      ica_ymTo.focus();
    }
  }
  if (!$c.gus.cfIsAfterDate($p, tempFrom.trim(), tempTo.trim())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ica_ymFrom.focus();
    return false;
  }
  scwin.setInit();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_intRt.setNoResultMessageVisible(true);
  let rowCnt = ds_intRt.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt > 0) {
    gr_intRt.setFocusedCell(0, 0);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 그리드 데이터 엑셀로 다운
 */
scwin.f_runExcel = async function () {
  if (ds_intRt.getRowCount() < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
    let sheetTitle = "이자율등록내역";
    let options = {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle,
      type: "1",
      headerColor: "#d9d9d9" //"#E8E8E8", //연한회색 #33CCCC
      // hiddenVisible:"true",     //히든값(true : 포함, false : 미포함)
      // startRowIndex: 2,       //시작되는 행의 번호(헤더 포함)
      //useFooter:"false"        //다운로드시 Footer를 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력)
    };
    await $c.data.downloadGridViewExcel($p, gr_intRt, options);
  }
};

/**
 * 자본이자율 자동생성 팝업
 */
scwin.f_PupUpAutoCreation = function (e) {
  // let rtnList = [];  // 공통POP-UP -> 요청화면
  let opt = {};
  let data = {};
  opt.width = "760";
  opt.height = "540";
  opt.id = "pupUpAutoCreation";
  opt.title = "이자율 자동생성";
  opt.popupName = "이자율 자동생성";
  opt.type = "browserPopup";
  data.stdYm = ica_ymFrom.getValue();
  data.planRsltsClsCd = rd_result.getValue();
  data.coCd = ed_coCd.getValue();

  //실제호출
  $c.win.openPopup($p, "/ui/ac/co/rsltsmgnt/rsltsaggr/co_403_01_04p.xml", opt, data);
};

/**
 * 저장
 */
scwin.f_Save = async function (e) {
  let mod = ds_intRt.getModifiedIndex();
  if (mod.length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["데이타"]);
    return;
  } else {
    let ret = await $c.gus.cfValidate($p, [gr_intRt]);
    if (!ret) {
      return false;
    }

    //실질금리 값 체크            
    for (let i = 0; i < mod.length; i++) {
      let intRt = ds_intRt.getCellData(mod[i], "intRt");
      if (intRt <= 0) {
        await $c.win.alert($p, "이자율 등록의 " + mod[i] + "번째 데이터에서 실질금리은(는) 0.0001 이상으로 입력하십시오.");
        return;
      }
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      sbm_save.userData1 = "noError";
      $c.sbm.execute($p, sbm_save);
    }
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    ds_intRt.reform();
    await $c.gus.f_cfAlertMsg($p, MSG_CM_INF_001); //성공적으로 저장하였습니다. 
    scwin.f_Retrieve();
  }
};
scwin.sbm_save_submiterror = function (e) {
  //$c.gus.cfShowError(tr_saveintRt);
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 행추가
 */
scwin.f_AddRow = function () {
  //let row = $c.data.insertRow($p.getComponentById("gr_intRt"));     //현재커서에서 행추가
  let row = ds_intRt.insertRow(); //그리드 맨 끝 행추가
  ds_intRt.setCellData(row, "closeYm", ica_ymFrom.getValue());
  ds_intRt.setCellData(row, "coCd", ed_coCd.getValue());
  ds_intRt.setCellData(row, "planRsltsClsCd", rd_result.getValue());
  ds_intRt.setCellData(row, "intRt", 0);
  ds_intRt.setCellData(row, "ver", "001");
  gr_intRt.setFocusedCell(row, "ver", true);
};
/**
 * 행취소
 */
scwin.f_UndoAll = function () {
  let row = ds_intRt.getRowPosition();
  if (ds_intRt.getRowStatus(row) == "C") {
    ds_intRt.removeRow(row);
  } else {
    ds_intRt.undoRow(row);
    gr_intRt.setRowReadOnly(row, false);
  }
};
/**
 * 행삭제
 */
scwin.f_Delete = function () {
  let row = ds_intRt.getRowPosition();
  //추가등록정보만 삭제, 나머지는 상태값 삭제가 됨
  if (ds_intRt.getRowStatus(row) == "C") {
    ds_intRt.removeRow(row);
  } else {
    ds_intRt.deleteRow(row);
    gr_intRt.setRowReadOnly(row, true);
    gr_intRt.setFocusedCell(row, 0);
  }
};

/*##############################################################
 * UDC 이벤트
 *##############################################################*/
/**
 * 회사코드 팝업 호출
 */
scwin.udc_comCode_onclickEvent = function (e) {
  if (ed_coCd.hidVal != ed_coCd.getValue()) {
    ed_coNm.setValue("");
  }
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_comCode_onviewchangeCodeEvent = function (info) {
  ed_coNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_coCd.getValue())) {
    scwin.f_PopUpCompanyInfo('T');
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
 * 셀의 편집모드가 종료
 * TOBE 그리드 옵션을 이용해서 함
 */
scwin.gr_intRt_onafteredit = function (rowIndex, columnIndex, value) {
  // let colId = gr_intRt.getColumnID(columnIndex);
  // if(colId == "intRt") {
  //     if(value == ds_intRt.getOriginalCellData(rowIndex, colId)) {
  //         ds_intRt.setCellData(rowIndex, colId, value);
  //         return;
  //     }
  //    //숫자와 점만 허용
  //     var val = (value + "").replace(/[^0-9.]/g, ""); 
  //     var dotPos = val.indexOf(".");

  //     // 정수부가 2자리 이상이면 점 제거
  //     if (dotPos > 1) {
  //         val = val.replace(/\./g, "");
  //         dotPos = -1;
  //     }

  //     // 소수점 있는 경우
  //     if (dotPos >= 0) {
  //         var parts = val.split(".");
  //         // 정수부가 1자리 초과이면 점 제거
  //         if (parts[0].length > 1) {
  //             val = parts[0] + parts[1];
  //         } else {
  //             // 소수부 4자리 제한 & 패딩
  //             parts[1] = (parts[1] || "").substring(0, 4);
  //             while (parts[1].length < 4) parts[1] += "0";
  //             val = parts[0] + "." + parts[1];
  //         }
  //     } 
  //     // 소수점 없는 정수 입력
  //     else {
  //         if (/^\d+$/.test(val)) {
  //             if (val.length === 1) {
  //                 // 1자리 → 4자리 패딩
  //                 val = val + ".0000"; 
  //             } else {
  //                 var int1 = val.charAt(0);
  //                 var dec = val.substring(1, 5);
  //                 while (dec.length < 4) dec += "0";
  //                 val = int1 + "." + dec;
  //             }
  //         }
  //     }
  //     // 값 반영
  //     ds_intRt.setCellData(rowIndex, colId, val);
  // }
};

/**
 * 조회영역 onkeydown
 * UDC onkeydown 추가
 */
scwin.ica_ymFrom_onkeydown = function (e) {
  if (e.keyCode == "13") {
    if (!$c.util.isEmpty($p, e.target.value) && !$c.util.isEmpty($p, ica_ymTo.getValue())) {
      this.setValue(e.target.value);
      scwin.f_Retrieve();
    } else {
      ica_ymTo.focus();
    }
  }
};
scwin.ica_ymTo_onkeydown = function (e) {
  if (e.keyCode == "13") {
    if (!$c.util.isEmpty($p, e.target.value)) {
      this.setValue(e.target.value);
      scwin.f_Retrieve();
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_company',code:'coCd',codeId:'ed_coCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_comCode_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_comCode_onviewchangeCodeEvent',id:'udc_comCode',mandatoryCode:'true',maxlengthCode:'3',maxlengthName:'30',name:'coNm',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'key',popupID:'popupCocd',refDataCollection:'dma_search',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validExpCode:'회사코드',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{ref:'data:dma_search.planRsltsClsCd',appearance:'full',style:'',id:'rd_result',renderType:'radiogroup',rows:'',class:'rdo-grp',cols:'',selectedIndex:'-1',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계획'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실적'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'마감기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToYearMon',A:{id:'udc_ymYearMon',refDataMap:'dma_search',refEdDt:'ymTo',refStDt:'ymFrom',style:'',mandatoryFrom:'true',mandatoryTo:'true',edFromId:'ica_ymFrom',edToId:'ica_ymTo',titleFrom:'마감기간',titleTo:'마감기간'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'이자율등록현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridID:'gr_intRt',gridUpYn:'N',grp:'grd_section1',id:'udc_excel',style:'',templateYn:'N',gridDownUserAuth:'X',gridDownFn:'scwin.f_runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_intRt',focusMode:'row',id:'gr_intRt',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusHeaderValue:'',readOnly:'false',rowStatusWidth:'20',keepDefaultColumnWidth:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'300',value:'버전'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'300',value:'마감년월'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'300',value:'실질금리',class:'txt-red'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',width:'250',value:'회사코드'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ver',inputType:'text',removeBorderStyle:'false',width:'300',mandatory:'true',maxLength:'3',dataType:'number',readOnly:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'closeYm',inputType:'calendar',removeBorderStyle:'false',width:'300',calendarValueType:'yearMonth',displayFormat:'yyyy/MM',mandatory:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'intRt',inputType:'text',removeBorderStyle:'false',width:'300',dataType:'float',maxLength:'1.4',displayFormat:'0.0000',mandatory:'true',readOnly:'false',validateOnInput:'true',allowChar:'0-9,.',autoDecimalPoint:'true',applyFormat:'all',excelCellType:'number',excelFormat:'0.0000'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'coCd',inputType:'text',removeBorderStyle:'false',width:'250',hiddenCol:'true',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',displayFormatter:'#,###',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',btnCancelYn:'Y',style:'',rowAddFunction:'scwin.f_AddRow',gridID:'gr_intRt',rowDelFunction:'scwin.f_Delete',cancelFunction:'scwin.f_UndoAll',btnRowDelYn:'Y'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_default',style:'',type:'button','ev:onclick':'scwin.f_PupUpAutoCreation',userAuth:'C',objType:'bCreate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'자동생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_Save',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})