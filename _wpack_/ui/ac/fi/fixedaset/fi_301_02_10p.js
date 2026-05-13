/*amd /ui/ac/fi/fixedaset/fi_301_02_10p.xml 30542 aae97a70f938e8c33eea52db5b3c42f969e34312ffa51720e94997a5ccf7ee4e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'기준연월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'unit',name:'단위',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'구분값',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planAcqAmt',name:'당해년계획취득가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planBookAmt',name:'당해년계획장부가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planDeprAmt',name:'당해년계획감가상각비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planDeprCumAmt',name:'당해년계획감가상각비누계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqAmt',name:'당해년취득가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookAmt',name:'당해년장부가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprAmt',name:'당해년감가상각비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprCumAmt',name:'당해년감가상각비누계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfAcqAmt',name:'전년실적취득가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfBookAmt',name:'전년실적장부가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfDeprAmt',name:'전년실적감가상각비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfDeprCumAmt',name:'전년실적감가상각비누계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'riseAcqAmt',name:'실적대비증감취득가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'riseBookAmt',name:'실적대비증감장부가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'riseDeprAmt',name:'실적대비증감감가상각비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'riseDeprCumAmt',name:'실적대비증감감가상각비누계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.fixedaset.RetrieveDetailsBranchFixedAsetCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master", "key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.fixedaset.SaveDetailsBranchFixedAsetCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_master","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 클래스별 자산현황
 * 메뉴경로 : 회계/재무회계/고정자산/지사별자산현황
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/fi/fixedaset/fi_301_02_10p.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-10-24
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 *    5. footer에 값 처리
 * 참고사항 : 
 *    1. 그리드ID.setNoResultMessageVisible(false) 설정해줘야 그리드에 데이터없음 안보임
 *    2. "hiddenVisible":true 되어 있는 항목 일단 false 처리[hiddenCol="true" => hiddenCol="false"]
 * 수정이력 :
 *    - 2025-11-10      배기원    최초작성
 */
//로그인 정보
scwin.memJson;
scwin.vLoginCoCd;
scwin.vLoginCoClsCd;
scwin.vUserHomeClsCd;

//파라메터 정보
scwin.valueObject;
scwin.vCloseYm = ""; //기준년월
scwin.vAcctDeptCd = ""; //부서코드
scwin.vAcctDeptNm = ""; //부서명

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson["coCd"]) ? "" : scwin.memJson["coCd"]; //소속자회사
  scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson["coClsCd"]) ? "" : scwin.memJson["coClsCd"]; //회계_회사구분('CO035' : 0:동부 EXPRESS)
  scwin.vUserHomeClsCd = $c.gus.cfIsNull($p, scwin.memJson["userHomeClsCd"]) ? "" : scwin.memJson["userHomeClsCd"]; //사용자소속구분코드
  scwin.valueObject = $c.data.getParameter($p);
  if (!$c.util.isEmpty($p, scwin.valueObject["pCloseYm"])) {
    scwin.vCloseYm = scwin.valueObject["pCloseYm"];
  }
  if (!$c.util.isEmpty($p, scwin.valueObject["pAcctDeptCd"])) {
    scwin.vAcctDeptCd = scwin.valueObject["pAcctDeptCd"];
  }
  if (!$c.util.isEmpty($p, scwin.valueObject["pAcctDeptNm"])) {
    scwin.vAcctDeptNm = scwin.valueObject["pAcctDeptNm"];
  }
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  ed_acctDeptCd.hidVal = ""; //부서(조회)
  gr_master.setNoResultMessageVisible(false);
  ds_master.reform();
  ds_master.removeAll();
  totalRows.setValue("0");
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
  ica_closeYm.setValue(scwin.vCloseYm);
  ed_acctDeptCd.setValue(scwin.vAcctDeptCd);
  ed_acctDeptNm.setValue(scwin.vAcctDeptNm);
  lc_unit.setValue("1");
  scwin.f_Retrieve();
};

/**
 * 헤더생성
 * asis : 사용안함
 */
// scwin.f_createHeader = function() {
//     var GAUCE_DATASET_HEADER = "closeYm:STRING"
//         + ",acctDeptCd:STRING"
//         + ",unit:STRING"

//     ds_search.SetDataHeader(GAUCE_DATASET_HEADER);
//     ds_search.insertRow();
// };

/**
 * 엑셀파일 다운로드
 * TOBE 사용안함(UDC 속성값 사용, udc_topGrdBtn)
 */
// scwin.f_GridToExcel = function (gr_groupCode, gridName) {
//     if (ds_master.getRowCount() <= 0) {
//         $c.win.alert("자산현황(세부내역)이 존재하지않습니다.");
//         return false
//     }
//     $c.data.downloadGridViewExcel(gr_groupCode, gridName, "C:\\" + gridName + ".xls", 4 + 8 + 16);
// };

/**
 * 부서코드 팝업호출(UDC)
 */
scwin.f_openPopUp = function (flag, check) {
  // var rtnList; // 공통POP-UP -> 요청화면
  // var pWhere; // 조회조건
  // switch (flag) {
  //     case '1':
  //         //매출부서 조회
  //         pCode = ed_acctDeptCd.getValue();
  //         pName = ed_acctDeptNm.value;
  //         pWhere = null;
  //         rtnList = cfCommonPopUp('getCommonCodeInfomation3', pCode, pName, "T", null, null, null, null, pWhere, null, null, null, null);

  //         if (rtnList != null && rtnList[0] != 'N/A') {
  //             ed_acctDeptCd.setValue = rtnList[0];
  //             ed_acctDeptNm.value = rtnList[1];
  //         } else {
  //             ed_acctDeptCd.setValue = '';
  //             ed_acctDeptNm.value = '';
  //         }

  //         break;

  //     default:
  //         break;
  // }

  //tobe 수정
  var pWhere; // 조회조건
  switch (flag) {
    case '1':
      //매출부서 조회
      pWhere = null;
      udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), check, null, null, null, null, pWhere, null, null, null, null, null, "F", null, null);
      break;
    default:
      break;
  }
};

/**
 * 부서 팝업 callBack
 */
scwin.udc_acctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_acctDeptCd.setValue(ret[0]); // 부서코드
    ed_acctDeptNm.setValue(ret[1]); // 부서명
    ed_acctDeptCd.hidVal = ret[0]; // 히든값
  } else {
    ed_acctDeptCd.setValue(""); // 부서코드
    ed_acctDeptNm.setValue(""); // 부서명
    ed_acctDeptCd.hidVal = ""; // 히든값
  }
};

/**
 * 팝업체크
 */
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  if (strCd.getValue().trim() == strCd.hidVal) return;
  strNm.setValue("");
  strCd.hidVal = "";
  if (strCd.getValue().trim() != "") scwin.f_openPopUp(flag, 'T');
};

/**
 * 팝업결과
 * asis : 사용안함
 */
// scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
//     if (rtnList != null) {
//         if (rtnList[0] == "N/A") return;
//         strCd.Text = rtnList[0]; // 코드
//         strNm.value = rtnList[1]; // 명
//         strCd.hidVal = rtnList[0]; // 히든값
//     } else {
//         strCd.Text = "";
//         strNm.value = "";
//         strCd.hidVal = "";
//     }
// };

/**
 * 조회
 */
scwin.f_Retrieve = async function () {
  // if (!$c.gus.cfValidate([ica_closeYm, ed_acctDeptCd])) {
  //     return;
  // }
  let ret = await $c.gus.cfValidate($p, [tbl_search]);
  if (!ret) {
    return false;
  }
  if ($c.gus.cfIsNull($p, ed_acctDeptCd.getValue())) {
    await $c.win.alert($p, '부서를 입력하세요');
    return;
  }
  scwin.setInit();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_master.setNoResultMessageVisible(true);
  let rowCnt = ds_master.getRowCount();
  totalRows.setValue(rowCnt);
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    } else {
      gr_master.setFocusedCell(0, 0);
    }
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 저장버튼
 */
scwin.f_Save = async function () {
  if (ds_master.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["데이터"]);
    return;
  } else {
    if (lc_unit.getValue() != "1") {
      await $c.gus.cfAlertMsg($p, "단위가 원 일때만 저장가능합니다.");
      return;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      $c.sbm.execute($p, sbm_save);
    }
  }
};
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    ds_master.reform();
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 그리드 컬럼의 금액단위를 설정한다.
 */
scwin.f_SetGridUnit = function () {
  let rowCnt = ds_master.getRowCount();
  let columInfo = $c.gus.f_GetColumnNames($p, ds_master);
  for (let j = 0; j < columInfo.length; j++) {
    for (let i = 0; i < rowCnt; i++) {
      if (columInfo[j] != "cd" && columInfo[j] != "cdNm" && columInfo[j] != "closeYm" && columInfo[j] != "acctDeptCd") {
        ds_master.setCellData(i, columInfo[j], ds_master.getOriginalCellData(i, columInfo[j]) / lc_unit.getValue());
      }
    }
  }
};

/**
 * 닫기
 */
scwin.f_WinClose = function (e) {
  let rt = ["N/A"];
  $c.win.closePopup($p, rt);
};

/*##############################################################
 * UDC 이벤트
 *##############################################################*/
/**
* 부서코드(조회) 팝업 호출
*/
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  if (ed_acctDeptCd.hidVal != ed_acctDeptCd.getValue()) {
    ed_acctDeptNm.setValue("");
  }
  // let close = "F";
  // if(!$c.gus.cfIsNull(ed_acctDeptCd.getValue())) {
  //     close = "T";
  // }
  // let id = e.target.id;
  // if(id.indexOf("btn")> -1) {
  //     close = "F";
  // }
  scwin.f_openPopUp('1', "T");
};
scwin.udc_acctDeptCd_onviewchangeCodeEvent = function (info) {
  // ed_acctDeptNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_acctDeptCd.getValue())) {
    scwin.f_openPopUp('1', "T");
  }
};
scwin.udc_acctDeptCd_onviewchangeNameEvent = function (info) {
  // ed_acctDeptCd.setValue("");
  if (!$c.gus.cfIsNull($p, ed_acctDeptNm.getValue())) {
    // scwin.f_CheckPopUp(ed_sacctDeptCd,ed_sacctDeptNm,'1','CD')
    scwin.f_openPopUp('1', "T");
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
scwin.gr_master_oncellclick = function (rowIndex, columnIndex, columnId) {
  //DPCT, DIMT, 광양물류 그리드 수정	--> 유통물류 하위부서 수정(2018.06.20)
  if ((ds_master.getCellData(rowIndex, "acctDeptCd") == '00689' || ds_master.getCellData(rowIndex, "acctDeptCd") == '00886' || ds_master.getCellData(rowIndex, "acctDeptCd") == '00861' || ds_master.getCellData(rowIndex, "acctDeptCd") == '00910' || ds_master.getCellData(rowIndex, "acctDeptCd") == '00911') && lc_unit.getValue() == "1") {
    gr_master.setCellReadOnly(rowIndex, "acqAmt", false);
    gr_master.setCellReadOnly(rowIndex, "bookAmt", false);
    gr_master.setCellReadOnly(rowIndex, "deprAmt", false);
    gr_master.setCellReadOnly(rowIndex, "deprCumAmt", false);
    gr_master.setCellReadOnly(rowIndex, "planAcqAmt", false);
    gr_master.setCellReadOnly(rowIndex, "planBookAmt", false);
    gr_master.setCellReadOnly(rowIndex, "planDeprAmt", false);
    gr_master.setCellReadOnly(rowIndex, "planDeprCumAmt", false);
    gr_master.setCellReadOnly(rowIndex, "bfAcqAmt", false);
    gr_master.setCellReadOnly(rowIndex, "bfBookAmt", false);
    gr_master.setCellReadOnly(rowIndex, "bfDeprAmt", false);
    gr_master.setCellReadOnly(rowIndex, "bfDeprCumAmt", false);
  } else {
    gr_master.setCellReadOnly(rowIndex, "acqAmt", true);
    gr_master.setCellReadOnly(rowIndex, "bookAmt", true);
    gr_master.setCellReadOnly(rowIndex, "deprAmt", true);
    gr_master.setCellReadOnly(rowIndex, "deprCumAmt", true);
    gr_master.setCellReadOnly(rowIndex, "planAcqAmt", true);
    gr_master.setCellReadOnly(rowIndex, "planBookAmt", true);
    gr_master.setCellReadOnly(rowIndex, "planDeprAmt", true);
    gr_master.setCellReadOnly(rowIndex, "planDeprCumAmt", true);
    gr_master.setCellReadOnly(rowIndex, "bfAcqAmt", true);
    gr_master.setCellReadOnly(rowIndex, "bfBookAmt", true);
    gr_master.setCellReadOnly(rowIndex, "bfDeprAmt", true);
    gr_master.setCellReadOnly(rowIndex, "bfDeprCumAmt", true);

    //무형자산(상각), 무형자산(비상각) 수정
    if ((ds_master.getCellData(rowIndex, "cd") == '98' || ds_master.getCellData(rowIndex, "cd") == '99') && lc_unit.getValue() == "1") {
      gr_master.setCellReadOnly(rowIndex, "acqAmt", false);
      gr_master.setCellReadOnly(rowIndex, "bfAcqAmt", false);
    } else {
      gr_master.setCellReadOnly(rowIndex, "acqAmt", true);
      gr_master.setCellReadOnly(rowIndex, "bfAcqAmt", true);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox w-auto',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준연월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal',id:'ica_closeYm',style:'',ref:'data:dma_search.closeYm',displayFormat:'yyyy/MM',mandatory:'true',title:'기준연월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_acctDeptCd',code:'acctDeptCd',codeId:'ed_acctDeptCd',editTypeCode:'select','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_acctDeptCd_onviewchangeCodeEvent',id:'udc_acctDeptCd',maxlengthCode:'5',maxlengthName:'30',name:'acctDeptNm',nameId:'ed_acctDeptNm',objTypeCode:'data',objTypeName:'key',popupID:'popup_acctDeptCd',refDataCollection:'dma_search',selectID:'getCommonCodeInfomation3',style:'',validExpCode:'부서',validTitle:'부서',codeWidth:'50','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCd_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'단위',class:'req'}},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'lc_unit',class:' w150',direction:'auto',ref:'data:dma_search.unit','ev:onviewchange':'scwin.f_SetGridUnit',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'천원'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'백만원'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1000000'}]}]}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"사업부자산현황.xlsx", "sheetName":"사업부자산현황", "type":"1", "hiddenVisible":false}',gridID:'gr_master',gridUpYn:'N',grp:'grd_section1',id:'udc_excel',style:'',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'cell',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'20','ev:oncellclick':'scwin.gr_master_oncellclick',keepDefaultColumnWidth:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column27',value:'구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'450',inputType:'text',style:'',id:'column24',value:'당해년 실적',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'450',inputType:'text',style:'',id:'column48',value:'당해년 계획',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'450',inputType:'text',style:'',id:'column39',value:'전년',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'450',inputType:'text',style:'',id:'column63',value:'증감',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'취득가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'장부가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'감가상각',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'감가상각 누계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'취득가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'장부가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'감가상각',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'감가상각 누계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'취득가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'장부가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'감가상각',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'감가상각 누계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'취득가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column68',value:'장부가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column100',value:'감가상각',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column96',value:'감가상각 누계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'cdNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acqAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bookAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'deprAmt',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'deprCumAmt',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'planAcqAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',hiddenCol:'false',hidden:'true',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'planBookAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',hiddenCol:'false',hidden:'true',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'planDeprAmt',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',textAlign:'right',excelCellType:'number',hiddenCol:'false',hidden:'true',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'planDeprCumAmt',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',textAlign:'right',excelCellType:'number',hiddenCol:'false',hidden:'true',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bfAcqAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bfBookAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bfDeprAmt',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bfDeprCumAmt',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'riseAcqAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'riseBookAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'riseDeprAmt',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'riseDeprCumAmt',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column29',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column26',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'acqAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column17',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'bookAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column20',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'deprAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column23',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'deprCumAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column50',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'planAcqAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column47',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'planBookAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column44',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'planDeprAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column38',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'planDeprCumAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column41',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'bfAcqAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column82',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'bfBookAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column78',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'bfDeprAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column74',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'bfDeprCumAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column66',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'riseAcqAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column70',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'riseBookAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column102',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'riseDeprAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column98',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'riseDeprCumAmt\')',displayFormat:'#,##0',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'text',displayFormat:'#,###',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Save',id:'btn_save',objType:'bUpdate',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_WinClose',id:'btn_close',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})