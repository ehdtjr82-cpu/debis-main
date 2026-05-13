/*amd /ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_02b.xml 29605 cf3a2be08313c985ffff50333b291296ec78fcc158bed13cacf933418e8bab87 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_comSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'lobranCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'occptypeCd',name:'occptypeCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empYn',name:'empYn',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lodeptCd',name:'물류부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vacaDt',name:'휴무일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'occptypeCd',name:'직종코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtlOccptypeCd',name:'상세직종코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dtlOccptypeCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'직종코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_present',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'staffNo',name:'인원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lodeptCd',name:'물류부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lodeptNm',name:'물류부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeNm',name:'직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeNm',name:'상세직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vacaRsnCd',name:'휴무사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vacaRsnNm',name:'휴무사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vacaStDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vacaEndDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgVacaStDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgVacaEndDt',name:'종료일자',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_comSearch',action:'',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.RetrieveFuncPostVacationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_present","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_present","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.SaveFuncPostVacationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_present","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log("scwin.onpageload");
  scwin.curDate = $c.date.getServerDateTime($p);
  scwin.memInfo = $c.data.getMemInfo($p);
  scwin.totalRow = 0;
  scwin.click = "";

  //공통코드 조회
  const codeOptions = [{
    grpCd: "OP160",
    compID: "acb_occptypeCd",
    opt: {
      "range": "1,1"
    }
  },
  //{ grpCd : "OP161", compID : "acb_dtlOccptypeCd", opt :{"range" : "3,1"}},
  {
    grpCd: "OP164",
    compID: "gr_emp:vacaRsnCd"
  }];
  $c.data.setCommonCode($p, codeOptions, function () {
    ica_vacaDt.setValue(scwin.curDate);

    //점소코드 조회
    $c.sbm.setAction($p, sbm_comSearch, "/ds.co.RetreiveLoBranCMD.do");
    $c.sbm.execute($p, sbm_comSearch).then(function (e) {
      console.log("scwin.sbm_comSearch_submitdone");
      if (e.responseJSON.resultDataSet[0].Code < 0) return;
      ds_lobran.setJSON(e.responseJSON.GAUCE);
      acb_lobran.setValue(scwin.memInfo.loUpperLobranCd);
      acb_lobran.focus();
    });
  });
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("scwin.onUdcCompleted");
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
  ica_vacaDt.setValue(scwin.curDate);
  acb_lobran.setValue(scwin.memInfo.loUpperLobranCd);
  acb_lobran.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = function () {
  console.log("scwin.f_retrieve");
  let deptCd = ed_lodeptCd.getValue();
  if ($c.gus.cfIsNull($p, deptCd)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["물류부서"]);
    ed_lodeptCd.focus();
  } else {
    dma_search.set("lodeptCd", deptCd);
    $c.sbm.execute($p, sbm_retrieve);
  }
};

//행추가 
scwin.f_addRow = function (e) {
  console.log("scwin.btn_addRow_onclick");
  let rowIndex = ds_present.insertRow();
  gr_emp.setFocusedCell(rowIndex, 0);
  ds_present.setCellData(rowIndex, "vacaStDt", ica_vacaDt.getValue());
  ds_present.setCellData(rowIndex, "vacaEndDt", ica_vacaDt.getValue());
  ds_present.setCellData(rowIndex, "orgVacaStDt", ica_vacaDt.getValue());
  ds_present.setCellData(rowIndex, "orgVacaEndDt", ica_vacaDt.getValue());
};

//-------------------------------------------------------------------------
// 물류부서 팝업
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  scwin.click = "F";
  console.log("scwin.f_openCommonPopUp");
  switch (disGubun) {
    case 1:
      var lobranCd = acb_lobran.getValue();
      udc_lodeptCd.cfCommonPopUp(scwin.callBackDeptCdInfo, pCode, pName, pClose, null, null, null, null, lobranCd, null, null, null, null);
      break;
  }
};
scwin.callBackDeptCdInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lodeptCd, ed_lodeptNm);
};

//-------------------------------------------------------------------------
// 인력 검색 팝업 호출
//-------------------------------------------------------------------------
scwin.f_open = async function (disGubun, pWinCloseTF) {
  console.log("scwin.f_open");
  var sWinCloseTF = pWinCloseTF == null ? "T" : pWinCloseTF;
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 
  var pCode = "";
  var pName = "";
  var pWtitleSearch = "";
  var arrParam = new Array();
  var rowIndex = gr_emp.getFocusedRowIndex();
  switch (disGubun) {
    case 1:
      pCode = ds_present.getCellData(rowIndex, "staffNo").replace(/\s*$/, '');
      pName = ds_present.getCellData(rowIndex, "staffNm");
      arrParam[0] = pCode; //사번
      arrParam[1] = pName; //사원명
      arrParam[2] = ed_lodeptCd.getValue(); //점소코드op_103_01_10p
      arrParam[3] = ed_lodeptNm.getValue(); //점소명			    
      arrParam[4] = ''; //작업장코드
      arrParam[5] = ''; //직종  (정규직)
      arrParam[6] = ''; //상세직종코드 (하역직)
      arrParam[7] = ''; //직급
      arrParam[8] = ''; //작업일
      arrParam[9] = 'Y'; //배치가능여부
      arrParam[10] = sWinCloseTF; //WINDOW CLOSE 여부
      arrParam[11] = '3'; //Flag

      var opts = {
        id: "op_103_01_10p",
        popupName: "인력검색",
        modal: true,
        type: "browserPopup",
        title: "",
        width: 800,
        height: 600
      };
      rtnList = await $c.win.openPopup($p, "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml", opts, arrParam);
      if (rtnList != null) {
        ds_present.setCellData(rowIndex, "staffNo", rtnList[2]); //사원코드
        ds_present.setCellData(rowIndex, "staffNm", rtnList[3]); //사원명
        ds_present.setCellData(rowIndex, "lodeptNm", rtnList[7]); //물류부서
        ds_present.setCellData(rowIndex, "occptypeNm", rtnList[1]); //직종		    
        ds_present.setCellData(rowIndex, "dtlOccptypeNm", rtnList[9]); //상세직종
      } else {
        ds_present.setCellData(rowIndex, "staffNo", "");
        ds_present.setCellData(rowIndex, "staffNm", "");
        ds_present.setCellData(rowIndex, "lodeptNm", "");
        ds_present.setCellData(rowIndex, "occptypeNm", "");
        ds_present.setCellData(rowIndex, "dtlOccptypeNm", "");
      }
      scwin.pWinCloseTF = "";
  }
};

//-------------------------------------------------------------------------
//그리드 Row 값에 따라, 삭제 취소
//-------------------------------------------------------------------------
scwin.f_chkRowStatus = function () {
  console.log("scwin.f_chkRowStatus");
  let selIdx = gr_emp.getAllFocusedRowIndex();
  for (var i = 0; i < selIdx.length; i++) {
    let idx = selIdx[i];
    let sts = ds_present.getRowStatus(idx);
    console.log(i + ", " + idx + ", " + selIdx.length);
    if (sts == "C" || sts == "V") {
      ds_present.removeRow(idx);
    } else {
      ds_present.undoRow(idx);
      ds_present.deleteRow(idx);
    }
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_save = async function () {
  var stDt = "";
  var endDt = "";

  // 아무 액션 취하지 않은 상태서  저장버튼 클릭시
  if (!$c.data.isModified($p, ds_present)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["데이터 "]);
    return;
  }
  if (ds_present.getTotalRow() > 0) {
    //필수입력항목 null 체크
    let chkVal = await $c.gus.cfValidate($p, [gr_emp]);
    if (!chkVal) return;
    for (var i = 0; i < ds_present.getTotalRow(); i++) {
      stDt = ds_present.getCellData(i, "vacaStDt");
      endDt = ds_present.getCellData(i, "vacaEndDt");

      // 시작일자가 종료일자보다 이후일 경우
      chkVal = $c.gus.cfIsAfterDate($p, stDt, endDt, false);
      if (!chkVal) {
        $c.gus.cfAlertMsg($p, i + "번째 휴무의 " + $c.data.getMessage($p, MSG_CM_ERR_039));
        return false;
      }
    }

    //저장하시겠습니까?
    let conf = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (conf) $c.sbm.execute($p, sbm_save);
  }
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료 
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  scwin.totalRow = ds_present.getTotalRow();
  spn_totalRow.setValue(scwin.totalRow);
  if (scwin.totalRow == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfAlertMsg($p, "조회된 데이터가 없습니다.");
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      return;
    }
  } else {
    gr_emp.setFocusedCell(0, 0);
  }
};

//저장 완료
scwin.sbm_save_submitdone = function (e) {
  console.log("scwin.sbm_save_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001).then(function () {
    scwin.f_retrieve();
  });
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//점소 변경 > 물류부서 값 변경
scwin.acb_lobran_onchange = function (info) {
  console.log("acb_lobran_onchange");
  if ($c.util.isEmpty($p, info.oldValue) && $c.util.isEmpty($p, info.newValue)) return;
  ed_lodeptCd.setValue(acb_lobran.getValue());
  ed_lodeptNm.setValue(acb_lobran.getText(true));
};

//물류부서 찾기 버튼
scwin.udc_lodeptCd_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(1, ed_lodeptCd.getValue(), ed_lodeptNm.getValue(), 'F', 'F');
};
scwin.udc_lodeptCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lodeptCd, ed_lodeptNm, 1);
};
scwin.udc_lodeptCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lodeptNm, ed_lodeptCd, 1, false);
};

//직종 변경 > 상세 직종 조회
scwin.acb_occptypeCd_onchange = function (info) {
  if (acb_occptypeCd.getValue() != "") {
    dma_comSearch.set("lobranCd", "OP161");
    dma_comSearch.set("occptypeCd", acb_occptypeCd.getValue());
    dma_comSearch.set("empYn", "Y");
    $c.sbm.setAction($p, sbm_comSearch, "/ds.co.RetreiveLubCMD.do");
    $c.sbm.execute($p, sbm_comSearch, dma_comSearch.getJSON()).then(function (e) {
      console.log("scwin.sbm_comSearch_submitdone");
      if (e.responseJSON.resultDataSet[0].Code < 0) return;
      ds_dtlOccptypeCd.setJSON(e.responseJSON.GAUCE);
    });
  } else {
    ds_dtlOccptypeCd.removeAll();
  }
};

//조회조건 clear 버튼
scwin.btn_clear_onclick = function (e) {
  console.log("scwin.btn_clear_onclick");
  scwin.f_fieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  console.log("scwin.btn_search_onclick");
  scwin.f_retrieve();
};

//그리드 클릭 시 활성화 여부 > 수정시에는 팝업버튼이 활성화되지 않는다. 휴무사유와 종료일자만 변경가능
scwin.gr_emp_oncellclick = function (rowIndex, columnIndex, columnId) {
  console.log("scwin.gr_emp_oncellclick");
  if (scwin.totalRow <= rowIndex + 1 && ds_present.getRowStatus(rowIndex) == "C") {
    gr_emp.setReadOnly("column", "staffNo", false);
    gr_emp.setReadOnly("column", "staffNm", false);
    gr_emp.setReadOnly("column", "lodeptNm", true);
    gr_emp.setReadOnly("column", "occptypeNm", true);
    gr_emp.setReadOnly("column", "dtlOccptypeNm", true);
    gr_emp.setReadOnly("column", "vacaRsnCd", false);
    gr_emp.setReadOnly("column", "vacaStDt", false);
    gr_emp.setReadOnly("column", "vacaEndDt", false);
  } else {
    gr_emp.setReadOnly("column", "staffNo", true);
    gr_emp.setReadOnly("column", "staffNm", true);
    gr_emp.setReadOnly("column", "lodeptNm", true);
    gr_emp.setReadOnly("column", "occptypeNm", true);
    gr_emp.setReadOnly("column", "dtlOccptypeNm", true);
    gr_emp.setReadOnly("column", "vacaRsnCd", false);
    gr_emp.setReadOnly("column", "vacaStDt", true);
    gr_emp.setReadOnly("column", "vacaEndDt", false);
  }
};

//그리드 클릭 시 팝업 호출
scwin.gr_emp_ontextimageclick = function (rowIndex, columnIndex) {
  scwin.pWinCloseTF = "F";
  scwin.gr_emp_onviewchange();
};

//행추가 시, 코드명 자동 입력
scwin.gr_emp_onviewchange = function (info) {
  console.log("scwin.gr_emp_onviewchange");
  if (ds_present.getTotalRow() == 0) return;
  let rowIndex = ds_present.getRowPosition();
  let columnId = gr_emp.getFocusedColumnID();
  let pWinCloseTF = $c.util.isEmpty($p, scwin.pWinCloseTF) ? "T" : scwin.pWinCloseTF;
  if (columnId == "staffNo") {
    ds_present.setCellData(rowIndex, "staffNm", ""); //사원명
    ds_present.setCellData(rowIndex, "lodeptNm", ""); //물류부서
    ds_present.setCellData(rowIndex, "occptypeNm", ""); //직종
    ds_present.setCellData(rowIndex, "dtlOccptypeNm", ""); //상세직종
    scwin.f_open(1, pWinCloseTF);
  } else if (columnId == "staffNm") {
    ds_present.setCellData(rowIndex, "staffNo", ""); //사원코드
    ds_present.setCellData(rowIndex, "lodeptNm", ""); //물류부서
    ds_present.setCellData(rowIndex, "occptypeNm", ""); //직종
    ds_present.setCellData(rowIndex, "dtlOccptypeNm", ""); //상세직종
    scwin.f_open(1, pWinCloseTF);
  }
};

//저장 버튼 
scwin.btn_save_onclick = function (e) {
  console.log("scwin.btn_save_onclick");
  scwin.f_save();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:40px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:200px;'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'',editType:'select',id:'acb_lobran',ref:'data:dma_search.lobranCd',search:'start',style:'width: 200px;',submenuSize:'auto',useKeywordHighlight:'false',textAlign:'left',sortOption:'label',searchTarget:'value','ev:onchange':'scwin.acb_lobran_onchange',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'물류부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{style:'',popupID:'',id:'udc_lodeptCd',codeId:'ed_lodeptCd',nameId:'ed_lodeptNm',btnId:'btn_lodeptCd',validExpCode:'물류부서:yes',objTypeCode:'data',UpperFlagCode:'1',maxlengthCode:'4',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',mandatoryName:'true',code:'lodeptCd',selectID:'retrieveOpDeptCdInfo',popupTitle:'부서코드, 부서코드, 부서명',popupGridHeadTitle:'부서코드, 부서명','ev:onclickEvent':'scwin.udc_lodeptCd_onclickEvent',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',refDataCollection:'dma_search','ev:onblurCodeEvent':'scwin.udc_lodeptCd_onblurCodeEvent',maxlengthName:'15','ev:onviewchangeNameEvent':'scwin.udc_lodeptCd_onviewchangeNameEvent'}},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'휴무일자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_vacaDt',style:'',objType:'data',validExp:'기간(To):yes:date=YYYYMMDD',displayFormat:'yyyy/MM/dd',mandatory:'false',ref:'data:dma_search.vacaDt','ev:onclick':'scwin.ica_vacaDt_onclick'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직종',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'전체',editType:'select','ev:onchange':'scwin.acb_occptypeCd_onchange',id:'acb_occptypeCd',ref:'data:dma_search.occptypeCd',search:'start',sortOption:'value',style:'width: 100px;',submenuSize:'auto',textAlign:'left',useKeywordHighlight:'false'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상세직종',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'전체',class:'',editType:'select',id:'acb_dtlOccptypeCd',ref:'data:dma_search.dtlOccptypeCd',search:'start',sortOption:'value',style:'width: 150px;',submenuSize:'auto',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_dtlOccptypeCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'기능직휴무등록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',templateYn:'N',id:'udc_topGrd',grdDownOpts:'{"fileName":"기능직휴무등록.xlsx", "sheetName" : "기능직휴무등록", "type":"4+8+16"}',btnUser:'Y',gridDownUserAuth:'X',gridID:'gr_emp',btnPlusYn:'Y',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_present',focusMode:'row',id:'gr_emp',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true',resize:'true',columnMove:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true',readOnly:'false',editModeEvent:'onclick','ev:oncellclick':'scwin.gr_emp_oncellclick','ev:onviewchange':'scwin.gr_emp_onviewchange',rowStatusVisible:'true','ev:ontextimageclick':'scwin.gr_emp_ontextimageclick'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column1',inputType:'text',removeBorderStyle:'false',width:'100',value:'인원번호',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column2',inputType:'text',removeBorderStyle:'false',width:'100',value:'성명'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column6',inputType:'text',removeBorderStyle:'false',width:'100',value:'물류부서코드',hidden:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',removeBorderStyle:'false',width:'150',value:'물류부서'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column8',inputType:'text',removeBorderStyle:'false',width:'100',value:'직종코드',hidden:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'100',value:'직종'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'상세직종코드',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column14',value:'상세직종',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'휴무사유',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'시작일자',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'종료일자',class:'col-type1'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'staffNo',inputType:'textImage',removeBorderStyle:'false',width:'100',sortable:'true',validExp:'staffNo:인원번호:yes',mandatory:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'staffNm',inputType:'textImage',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'lodeptCd',inputType:'text',removeBorderStyle:'false',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'lodeptNm',inputType:'text',removeBorderStyle:'false',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'occptypeCd',inputType:'text',removeBorderStyle:'false',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'occptypeNm',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dtlOccptypeCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dtlOccptypeNm',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'vacaRsnCd',inputType:'select',removeBorderStyle:'false',width:'100',validExp:'vacaRsnCd:휴무사유:yes',mandatory:'true'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'vacaStDt',inputType:'calendar',removeBorderStyle:'false',width:'100',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd',validExp:'vacaStDt:시작일자:yes:date=YYYYMMDD',mandatory:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'vacaEndDt',inputType:'calendar',removeBorderStyle:'false',width:'100',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate',validExp:'vacaEndDt:종료일자:yes:date=YYYYMMDD',mandatory:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totalRow',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowAddUserAuth:'C',rowDelUserAuth:'D',rowAddFunction:'scwin.f_addRow',EngYn:'N',btnDelYn:'N',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',gridID:'gr_emp'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})