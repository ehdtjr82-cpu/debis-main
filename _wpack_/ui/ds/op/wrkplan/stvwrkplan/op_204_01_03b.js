/*amd /ui/ds/op/wrkplan/stvwrkplan/op_204_01_03b.xml 27481 e15f251cc8a8572b354b14cb8b71ca386d922841436d99d7f6ae77ab4a37ffe0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true',objType:'key'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_lobran'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text',defaultValue:'BerthNonUsableEBC'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text',defaultValue:'retriveLobranCodeList'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_carryingVesselWorkPlanList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'본선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'입항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'선석',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsNm',name:'수출입 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repKcgNm',name:'대표화종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량(톤)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'planPrscond',name:'계획 현황',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stDt',name:'착수일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkShiftCnt',name:'작업 Shift 수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cfmanNm',name:'Chief 포맨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'craneInputCnt',name:'크레인_투입시간',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crKndNm',name:'크레인_종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crNrmNm',name:'크레인_규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fliftInputCnt',name:'지게차/R.S_투입시간',dataType:'number'}},{T:1,N:'w2:column',A:{id:'flKndNm',name:'지게차/R.S_종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flNrmNm',name:'지게차/R.S_규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'excvInputCnt',name:'Ex_투입시간',dataType:'number'}},{T:1,N:'w2:column',A:{id:'exKndNm',name:'Ex_종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exNrmNm',name:'Ex_규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcHveqInputCnt',name:'기타_투입시간',dataType:'number'}},{T:1,N:'w2:column',A:{id:'etcKndNm',name:'기타_종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcNrmNm',name:'기타_규격',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchCarryingVesselWorkPlan'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_lobran',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_Done','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchCarryingVesselWorkPlan',action:'/ds.op.wrkplan.stvwrkplan.RetrieveCarryingVesselWorkPlanPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchCarryingVesselWorkPlan","key":"IN_DS1"},{"id":"ds_carryingVesselWorkPlanList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_carryingVesselWorkPlanList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수
//-------------------------------------------------------------------------
scwin.vCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.vCurDate); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
scwin.lobranCd = $c.data.getMemInfo($p, "loUpperLobranCd");
scwin.vBasSdId = "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_04b.xml";

//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  $c.sbm.execute($p, sbm_lobran);
  scwin.f_SetDefaultData();
};

//-------------------------------------------------------------------------
// 데이터 기본값 세팅
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  scwin.onUdcCompleted();
  btn_detail.setDisabled(true);
};

//-------------------------------------------------------------------------
// 날짜 UDC 기본값 세팅
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ica_qryDt.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
};

//-------------------------------------------------------------------------
// 본선작업계획현황조회 / ASIS 함수 f_CarryingVesselWorkPlan()
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = async function (e) {
  //검색조건 필수 입력 체크
  if (!(await $c.gus.cfValidate($p, [acb_lobranCd, ica_qryStDt, ica_qryEndDt]))) {
    return;
  }
  dma_searchCarryingVesselWorkPlan.set("lobranCd", acb_lobranCd.getValue());
  dma_searchCarryingVesselWorkPlan.set("qryStDt", ica_qryStDt.getValue());
  dma_searchCarryingVesselWorkPlan.set("qryEndDt", ica_qryEndDt.getValue());
  $c.sbm.execute($p, sbm_searchCarryingVesselWorkPlan);
};

//-------------------------------------------------------------------------
// 조회 성공시
//-------------------------------------------------------------------------
scwin.sbm_search_submitDone = function (e) {
  btn_detail.setDisabled(false);
  spa_totalRows.setValue(ds_carryingVesselWorkPlanList.getTotalRow());
  if (ds_carryingVesselWorkPlanList.getTotalRow() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
  }

  // 본선 수 (본선관리번호) count
  scwin.f_CountGridColumn(ds_carryingVesselWorkPlanList, "cvsslMgntNo", "cvsslMgntNo"); // 본선관리번호
  scwin.f_SumGridColumn(ds_carryingVesselWorkPlanList, "craneInputCnt", "cvsslMgntNo"); // 크레인
  scwin.f_SumGridColumn(ds_carryingVesselWorkPlanList, "fliftInputCnt", "cvsslMgntNo"); // 지게차;/R.S.
  scwin.f_SumGridColumn(ds_carryingVesselWorkPlanList, "excvInputCnt", "cvsslMgntNo"); // Ex.
  scwin.f_SumGridColumn(ds_carryingVesselWorkPlanList, "etcHveqInputCnt", "cvsslMgntNo"); // 기타

  gr_carryingVesselWorkPlanPresentConditionInformationList.setFocusedCell(0, "cvsslMgntNo");
};

//-------------------------------------------------------------------------
// 본선작업계획상세조회(화면 이동)
//-------------------------------------------------------------------------
scwin.btn_detail_onClick = function (e) {
  let row = ds_carryingVesselWorkPlanList.getRowPosition();
  if (row < 0) {
    return;
  }
  let param = {
    "carryingVesselManagementNumber": ds_carryingVesselWorkPlanList.getCellData(row, "cvsslMgntNo")
  };
  let option = {};
  $c.win.openMenu($p, "본선작업계획상세조회", scwin.vBasSdId, "op_204_01_04b.xml", param, option);
};

//-------------------------------------------------------------------------
// 점소 기본세팅
//-------------------------------------------------------------------------
scwin.sbm_lobran_Done = function (e) {
  acb_lobranCd.setValue(scwin.lobranCd);
};

//-------------------------------------------------------------------------
// Grid 본선 수(본선관리번호) count
//------------------------------------------------------------------------- 
scwin.f_CountGridColumn = function (dataSetID, columnID, keyColumnID) {
  let rowCount = 0;
  let val0 = "";
  let val1 = "";
  let val3 = "";
  let val4 = "";
  for (let i = 1; i <= dataSetID.getTotalRow(); i++) {
    if (i == dataSetID.getTotalRow()) {
      rowCount++;
    } else {
      let row1 = dataSetID.getCellData(i, columnID);
      let row2 = dataSetID.getCellData(i + 1, columnID);
      let key1 = dataSetID.getCellData(i, keyColumnID);
      let key2 = dataSetID.getCellData(i + 1, keyColumnID);
      if (row1 != null && row2 != null && key1 != null && key2 != null) {
        val0 = row1;
        val1 = row2;
        val3 = key1;
        val4 = key2;
      } else {
        val0 = dataSetID.getCellData(i, columnID);
        val1 = dataSetID.getCellData(i + 1, columnID);
        val3 = dataSetID.getCellData(i, keyColumnID);
        val4 = dataSetID.getCellData(i + 1, keyColumnID);
      }
      if (val0 == val1 && val3 == val4) {} else {
        rowCount++;
      }
    }
  }
  gr_carryingVesselWorkPlanPresentConditionInformationList.setFooterValue("cvsslMgntNoSumText", rowCount);
};

//-------------------------------------------------------------------------
// Grid 투입중기수 합계
//------------------------------------------------------------------------- 
scwin.f_SumGridColumn = function (dataSetID, columnID, keyColumnID) {
  let tot = 0;
  let val0 = "";
  let val1 = "";
  let val3 = "";
  let val4 = "";
  for (let i = 1; i <= dataSetID.getTotalRow(); i++) {
    if (i == dataSetID.getTotalRow()) {
      tot += Number(dataSetID.getCellData(i, columnID));
    } else {
      let row1 = Number(dataSetID.getCellData(i, columnID));
      let row2 = Number(dataSetID.getCellData(i + 1, columnID));
      let key1 = dataSetID.getCellData(i, keyColumnID);
      let key2 = dataSetID.getCellData(i + 1, keyColumnID);
      if (row1 != null && row2 != null && key1 != null && key2 != null) {
        val0 = row1;
        val1 = row2;
        val3 = key1;
        val4 = key2;
      } else {
        val0 = Number(dataSetID.getCellData(i, columnID));
        val1 = Number(dataSetID.getCellData(i + 1, columnID));
        val3 = dataSetID.getCellData(i, keyColumnID);
        val4 = dataSetID.getCellData(i + 1, keyColumnID);
      }
      if (val0 == val1 && val3 == val4) {} else {
        tot += Number(dataSetID.getCellData(i, columnID));
      }
    }
  }
  gr_carryingVesselWorkPlanPresentConditionInformationList.setFooterValue(columnID + "SumText", tot);
};

//-------------------------------------------------------------------------
// 검색영역 Field Clear함. / ASIS f_InitObjects() / lobran 로드 시점으로 인해 GAUCE 메소드 사용 불가
//-------------------------------------------------------------------------
scwin.btn_init_onClick = function (e) {
  scwin.f_SetDefaultData();
  acb_lobranCd.setValue(scwin.lobranCd);
  btn_detail.setDisabled(true);
};

//-------------------------------------------------------------------------
// Grid Cell 더블클릭
//-------------------------------------------------------------------------
scwin.Grid_Dbl_Click = function (rowIndex, columnIndex, columnId) {
  let row = ds_carryingVesselWorkPlanList.getRowPosition();
  console.log(row);
  if (row < 0) {
    return;
  }
  let param = {
    "carryingVesselManagementNumber": ds_carryingVesselWorkPlanList.getCellData(row, "cvsslMgntNo")
  };
  let option = {};
  $c.win.openMenu($p, "본선작업계획상세조회", scwin.vBasSdId, "op_204_01_04b.xml", param, option);
};

//-------------------------------------------------------------------------
// Excel 출력
//-------------------------------------------------------------------------
scwin.runExcel = function () {
  let vDay = "점소 : " + acb_lobranCd.getValue() + " : " + "입항예정일자 : " + ica_qryStDt.getValue() + " ~ " + ica_qryEndDt.getValue();
  let options = {
    fileName: "본선작업계획현황조회.xlsx",
    sheetName: "본선작업계획현황조회",
    startRowIndex: 3,
    startColumnIndex: 0
    // ,useFooter : "true"
  };
  let grdObj = gr_carryingVesselWorkPlanPresentConditionInformationList;
  let infoArr = [{
    rowIndex: 0,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: 26,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "본선작업계획현황조회",
    textAlign: "center",
    //정렬
    fontSize: "16px",
    // fontName : "돋움체",
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 9,
    text: vDay,
    textAlign: "left",
    drawBorder: false
  }];
  $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobranCd',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',sortOption:'value',sortMethod:'ascending',title:'점소',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입항예정일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'ica_qryDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_qryStDt',edToId:'ica_qryEndDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'Data',objTypeTo:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onClick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_carryingVesselWorkPlanPresentConditionInformationList',gridDownFn:'scwin.runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_carryingVesselWorkPlanList',id:'gr_carryingVesselWorkPlanPresentConditionInformationList',style:'',visibleRowNum:'13',visibleRowNumFix:'true',resize:'true',columnMove:'true',readOnly:'true','ev:oncelldblclick':'scwin.Grid_Dbl_Click',mergeCells:'byrestriccol',mergeCol:'cvsslMgntNo, vsslNm, arrvlportDt, wrkPlNm, cvsslMgntNo, planPrscond, stDt, craneInputCnt, fliftInputCnt, excvInputCnt, etcHveqInputCnt'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'본선관리번호',width:'120',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'본선',width:'160',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'입항일자',width:'100',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'선석',width:'140',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'수출입<br/>구분',width:'80',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'대표화종',width:'100',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'품명',width:'80',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'수량',width:'70',colSpan:'',rowSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'중량<br/>(톤)',width:'80',colSpan:'',rowSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column64',value:'계획<br/>현황',displayMode:'label',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'착수일자',displayMode:'label',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column58',value:'작업<br/>Shift 수',displayMode:'label',colSpan:'',rowSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column55',value:'Chief<br/>포맨',displayMode:'label',colSpan:'',rowSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'840',inputType:'text',id:'column52',value:'투입 중기',displayMode:'label',colSpan:'12',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column74',value:'크레인',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column71',value:'지게차/R.S.',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column68',value:'Ex.',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column122',value:'기타',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column96',value:'투입시간',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column95',value:'종류',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column94',value:'규격',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column93',value:'투입시간',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column92',value:'종류',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column91',value:'규격',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'투입시간',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column89',value:'종류',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column128',value:'규격',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column123',value:'투입시간',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column113',value:'종류',displayMode:'label',sortable:'false',sortLabel:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column118',value:'규격',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',width:'120',class:'underline',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',width:'160',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrvlportDt',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsNm',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'repKcgNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',width:'70',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'',width:'80',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'planPrscond',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkShiftCnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'cfmanNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'',id:'craneInputCnt',displayMode:'label',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'crKndNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'crNrmNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fliftInputCnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'flKndNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'flNrmNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'excvInputCnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'exKndNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'exNrmNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'etcHveqInputCnt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'etcKndNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'etcNrmNm',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label',value:'본선 수'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'cvsslMgntNoSumText',displayMode:'label',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'footerQty',displayMode:'label',textAlign:'right',expression:'sum("qty")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',dataType:'float',expression:'sum("wt")',maxLength:'0.3',displayFormat:'#,###.##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'craneInputCntSumText',displayMode:'label',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fliftInputCntSumText',displayMode:'label',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'excvInputCntSumText',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column130',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'etcHveqInputCntSumText',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column115',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column120',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_detail',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_detail_onClick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'상세조회'}]}]}]}]}]}]}]}]}]})