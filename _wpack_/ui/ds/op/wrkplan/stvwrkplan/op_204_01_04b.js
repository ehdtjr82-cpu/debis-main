/*amd /ui/ds/op/wrkplan/stvwrkplan/op_204_01_04b.xml 38412 680829c04001f3862452df3fb60fe146deb1080d9ca24b7c087316e15a2f37dd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_carryingVesselBasisInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'라인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoNm',name:'선사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impPortcnt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expPortcnt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impRepKcg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expRepKcg',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprtportDtm',name:'출항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvChrgCls',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfmanNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslFmanCnt',name:'본선포맨수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'groundFmanCnt',name:'육상포맨수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvStDt',name:'하역시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslWrkCompleteYn',name:'본선작업완료여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'berthCd',name:'선석코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'상위물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierOpClntNo',name:'부두운영거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'건수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stvCnt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineClntNo',name:'LINE거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierCd',name:'부두코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dchrDropRgn',name:'양적하지',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_holdEachWorkPlanList',saveRemovedData:'true','ev:ondataload':'scwin.ds_holdEachWorkPlanList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'holdNo',name:'HOLD번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkShiftCnt',name:'작업SHIFT수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'invsslEqInputDtl',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alngvsslEqInputDtl',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_profitAndLossInfo',saveRemovedData:'true','ev:ondataload':'scwin.ds_profitAndLossInfo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'expectSell',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wage',name:'노임',dataType:'number'}},{T:1,N:'w2:column',A:{id:'welsal',name:'복리후생비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hveqLoanRate',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payCmis',name:'지급수수료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'etcPcost',name:'기타원가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pcostSum',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'expectPrflos',name:'',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'carryingVesselManagementNumber',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchCarryingVesselWorkPlanDetail',action:'/ds.op.wrkplan.stvwrkplan.RetrieveCarryingVesselWorkPlanDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,["dma_search",{"id":"ds_carryingVesselBasisInfo","key":"OUT_DS1"},{"id":"ds_holdEachWorkPlanList","key":"OUT_DS2"},{"id":"ds_profitAndLossInfo","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_carryingVesselBasisInfo","key":"OUT_DS1"},{"id":"ds_holdEachWorkPlanList","key":"OUT_DS2"},{"id":"ds_profitAndLossInfo","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 파라미터 or 전역변수
//-------------------------------------------------------------------------
scwin.param = "";
scwin.carryingVesselManagementNumber = "";

// 테이블 내에 Row 동적 변경을 위한 전역 변수
scwin.tr_impPortcnt = "";
scwin.tr_expPortcnt = "";

//-------------------------------------------------------------------------
// 페이지 로드시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.param = $c.data.getParameter($p);
  scwin.carryingVesselManagementNumber = scwin.param.carryingVesselManagementNumber == null ? "" : scwin.param.carryingVesselManagementNumber;

  // 테이블 Row 동적 변경을 위한 컴포넌트값 세팅
  scwin.tr_impPortcnt = $p.getComponentById("tr_impPortcnt");
  scwin.tr_expPortcnt = $p.getComponentById("tr_expPortcnt");

  // 화면 로드시 1개는 필수로 보이기 때문에 빈 Row 하나 보여주기 위함
  // scwin.tr_impPortcnt.setStyle("display", "none");
  scwin.tr_expPortcnt.setStyle("display", "none");
  ed_cvsslMgntNo.setValue(scwin.carryingVesselManagementNumber);
  scwin.f_RetrieveCvsslMgntNo(scwin.carryingVesselManagementNumber);
  scwin.f_SetDefaultData();
  tb_search.setStyle("display", "table");
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  ed_cvsslMgntNo.focus();
};

//-------------------------------------------------------------------------
// 본선작업계획상세조회 DataSet 호출
//------------------------------------------------------------------------- 
scwin.f_RetrieveCvsslMgntNo = function (carryingVesselManagementNumber) {
  dma_search.set("carryingVesselManagementNumber", carryingVesselManagementNumber);
  $c.sbm.execute($p, sbm_searchCarryingVesselWorkPlanDetail);
};

//-------------------------------------------------------------------------
// 본선관리번호 조회 팝업 클릭
//-------------------------------------------------------------------------
scwin.btn_PopUp_onClick = async function (e) {
  let url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml";
  let options = {
    id: "taxPop",
    type: "",
    popupName: "본선관리번호검색팝업",
    width: 1100,
    height: 650
  };
  let args = [];
  args[0] = ed_cvsslMgntNo.getValue();
  let rtnList = await $c.win.openPopup($p, url, options, args);
  if (rtnList != null) {
    ed_cvsslMgntNo.setValue(rtnList[0]);
  }
};

//-------------------------------------------------------------------------
// 조회 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = function (e) {
  // 검색조건 필수 입력 체크
  if (!$c.gus.cfValidate($p, [ed_cvsslMgntNo])) {
    return;
  }
  scwin.f_RetrieveCvsslMgntNo(ed_cvsslMgntNo.getValue());
};

//-------------------------------------------------------------------------
// 조회 초기화
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onClick = function (e) {
  $c.gus.cfInitObjects($p, tb_search);
  ed_cvsslMgntNo.focus();
};

//-------------------------------------------------------------------------
// 대문자 변환
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 본선작업계획상세조회 테이블 생성
//------------------------------------------------------------------------- 
scwin.f_DivHoldEachWorkPlanList = function () {
  // 1.본선기본정보조회
  let vsslNm = ""; //선박명
  let lineNm = ""; //LINE명
  let shpCoNm = ""; //선사명
  let impPortcnt = ""; //수입항차
  let expPortcnt = ""; //수출항차
  let impRepKcg = ""; //수입대표화종
  let expRepKcg = ""; //수출대표화종
  let wrkPlNm = ""; //작업장명
  let arrvlportDtm = ""; //입항일시
  let deprtportDtm = ""; //출항일시
  let stvChrgCls = ""; //하역담당구분
  let cfmanNm = ""; //CHIEF포맨명
  let cvsslFmanCnt = ""; //본선포맨수
  let groundFmanCnt = ""; //육상포맨수

  // ds_carryingVesselBasisInfo 분기처리
  let totalrow = ds_carryingVesselBasisInfo.getTotalRow();
  if (totalrow > 0) {
    ed_vsslNm.setValue(ds_carryingVesselBasisInfo.getCellData(0, "vsslNm"));
    ed_lineNm.setValue(ds_carryingVesselBasisInfo.getCellData(0, "lineNm"));
    ed_shpCoNm.setValue(ds_carryingVesselBasisInfo.getCellData(0, "shpCoNm"));
    ed_impPortcnt.setValue(ds_carryingVesselBasisInfo.getCellData(0, "impPortcnt"));
    ed_expPortcnt.setValue(ds_carryingVesselBasisInfo.getCellData(0, "expPortcnt"));
    ed_impRepKcg.setValue(ds_carryingVesselBasisInfo.getCellData(0, "impRepKcg"));
    ed_expRepKcg.setValue(ds_carryingVesselBasisInfo.getCellData(0, "expRepKcg"));
    ed_wrkPlNm.setValue(ds_carryingVesselBasisInfo.getCellData(0, "wrkPlNm"));
    if (ds_carryingVesselBasisInfo.getCellData(0, "arrvlportDtm") != "") {
      ed_arrvlportDtm.setValue(ds_carryingVesselBasisInfo.getCellData(0, "arrvlportDtm"));
    }
    if (ds_carryingVesselBasisInfo.getCellData(0, "deprtportDtm") != "") {
      ed_deprtportDtm.setValue(ds_carryingVesselBasisInfo.getCellData(0, "deprtportDtm"));
    }
    ed_cfmanNm.setValue(ds_carryingVesselBasisInfo.getCellData(0, "cfmanNm"));
    ed_cvsslFmanCnt.setValue(ds_carryingVesselBasisInfo.getCellData(0, "cvsslFmanCnt"));
    ed_groundFmanCnt.setValue(ds_carryingVesselBasisInfo.getCellData(0, "groundFmanCnt"));
  }
  if (totalrow == 0) {
    scwin.tr_impPortcnt.setStyle("display", "table-row");
    scwin.tr_expPortcnt.setStyle("display", "none");
  } else {
    if (ds_carryingVesselBasisInfo.getCellData(0, "impportcnt") != "") {
      scwin.tr_impPortcnt.setStyle("display", "table-row");
      scwin.tr_expPortcnt.setStyle("display", "none");
      ed_impPortcnt.setValue(ds_carryingVesselBasisInfo.getCellData(0, "impPortcnt"));
      ed_impRepKcg.setValue(ds_carryingVesselBasisInfo.getCellData(0, "impRepKcg"));
      ed_iocheck.setValue("수입");
    }
    if (ds_carryingVesselBasisInfo.getCellData(0, "expPortcnt") != "") {
      scwin.tr_expPortcnt.setStyle("display", "table-row");
      scwin.tr_impPortcnt.setStyle("display", "none");
      ed_expRepKcg.setValue(ds_carryingVesselBasisInfo.getCellData(0, "expRepKcg"));
      ed_expPortcnt.setValue(ds_carryingVesselBasisInfo.getCellData(0, "expPortcnt"));
      ed_iocheck2.setValue("수출");
    }
    if (ds_carryingVesselBasisInfo.getCellData(0, "impPortcnt") != "" && ds_carryingVesselBasisInfo.getCellData(0, "expPortcnt") != "") {
      scwin.tr_impPortcnt.setStyle("display", "table-row");
      scwin.tr_expPortcnt.setStyle("display", "table-row");
    }
  }

  //ds_profitAndLossInfo 분기처리
  if (ds_profitAndLossInfo.getTotalRow() == 0) {} else {
    ed_expectSell.setValue(ds_profitAndLossInfo.getCellData(0, "expectSell"));
    let wage = ds_profitAndLossInfo.getCellData(0, "wage");
    ed_wage.setValue(wage);
    if (wage != 0) {
      ed_wagePcostRt.setValue((wage / ds_profitAndLossInfo.getCellData(0, "pcostSum") * 100).toFixed(1) + "%");
    } else {
      ed_wagePcostRt.setValue("");
    }
    let welsal = ds_profitAndLossInfo.getCellData(0, "welsal");
    ed_welsal.setValue(welsal);
    if (welsal != 0) {
      ed_welsalPcostRt.setValue((welsal / ds_profitAndLossInfo.getCellData(0, "pcostSum") * 100).toFixed(1) + "%");
    } else {
      ed_welsalPcostRt.setValue("");
    }
    let hveqLoanRate = ds_profitAndLossInfo.getCellData(0, "hveqLoanRate");
    ed_hveqLoanRate.setValue(hveqLoanRate);
    if (hveqLoanRate != 0) {
      ed_hveqLoanRatePcostRt.setValue((hveqLoanRate / ds_profitAndLossInfo.getCellData(0, "pcostSum") * 100).toFixed(1) + "%");
    } else {
      ed_hveqLoanRatePcostRt.setValue("");
    }
    let payCmis = ds_profitAndLossInfo.getCellData(0, "payCmis");
    ed_payCmis.setValue(payCmis);
    if (payCmis != 0) {
      ed_payCmisPcostRt.setValue((payCmis / ds_profitAndLossInfo.getCellData(0, "pcostSum") * 100).toFixed(1) + "%");
    } else {
      ed_payCmisPcostRt.setValue("");
    }
    let etcPcost = ds_profitAndLossInfo.getCellData(0, "etcPcost");
    ed_etcPcost.setValue(etcPcost);
    if (etcPcost != 0) {
      ed_etcPcostPcostRt.setValue((etcPcost / ds_profitAndLossInfo.getCellData(0, "pcostSum") * 100).toFixed(1) + "%");
    } else {
      ed_etcPcostPcostRt.setValue("");
    }
    ed_pcostSum.setValue(ds_profitAndLossInfo.getCellData(0, "pcostSum"));
    let cost = "";
    if (ds_profitAndLossInfo.getCellData(0, "expectSell") == 0) {
      cost = 0;
    } else {
      cost = Number(ds_profitAndLossInfo.getCellData(0, "pcostSum") / ds_profitAndLossInfo.getCellData(0, "expectSell") * 100);
    }
    ed_cost.setValue(cost.toFixed(1) + "%");
    ed_expectPrflos.setValue(ds_profitAndLossInfo.getCellData(0, "expectSell") - ds_profitAndLossInfo.getCellData(0, "pcostSum"));
  }

  // 3.본선예상손익조회 clear
  ed_expectSell.setValue("");
  ed_wage.setValue("");
  ed_wagePcostRt.setValue("");
  ed_welsal.setValue("");
  ed_welsalPcostRt.setValue("");
  ed_hveqLoanRate.setValue("");
  ed_hveqLoanRatePcostRt.setValue("");
  ed_payCmis.setValue("");
  ed_payCmisPcostRt.setValue("");
  ed_etcPcost.setValue("");
  ed_etcPcostPcostRt.setValue("");
  ed_pcostSum.setValue("");
  ed_cost.setValue("");
  ed_expectPrflos.setValue("");
};

//-------------------------------------------------------------------------
// 조회 성공시
//-------------------------------------------------------------------------
scwin.ds_holdEachWorkPlanList_ondataload = function () {
  let rowCnt = ds_holdEachWorkPlanList.getTotalRow();
  scwin.f_DivHoldEachWorkPlanList();
  if (rowCnt == 0 && ed_cvsslMgntNo.getValue() != "") {
    $c.win.alert($p, MSG_CM_ERR_003);
  }
  spa_totalRow.setValue(rowCnt);
  for (i = 0; i < rowCnt; i++) {
    ds_carryingVesselBasisInfo.getCellData(i, "columnInfo");
  }
};

//-------------------------------------------------------------------------
// 조회 성공시
//-------------------------------------------------------------------------
scwin.ds_profitAndLossInfo_ondataload = function () {
  let rowCnt = ds_profitAndLossInfo.getTotalRow();
  if (rowCnt == 0) {
    return;
  }
  ed_expectSell.setValue(ds_profitAndLossInfo.getCellData(0, "expectSell"));
  let wage = ds_profitAndLossInfo.getCellData(0, "wage");
  ed_wage.setValue(wage);
  if (wage != 0) {
    ed_wagePcostRt.setValue((wage / ds_profitAndLossInfo.getCellData(0, "pcostSum") * 100).toFixed(1) + "%");
  } else {
    ed_wagePcostRt.setValue("0%");
  }
  let welsal = ds_profitAndLossInfo.getCellData(0, "welsal");
  ed_welsal.setValue(welsal);
  if (welsal != 0) {
    ed_welsalPcostRt.setValue((welsal / ds_profitAndLossInfo.getCellData(0, "pcostSum") * 100).toFixed(1) + "%");
  } else {
    ed_welsalPcostRt.setValue("0%");
  }
  let hveqLoanRate = ds_profitAndLossInfo.getCellData(0, "hveqLoanRate");
  ed_hveqLoanRate.setValue(hveqLoanRate);
  if (hveqLoanRate != 0) {
    ed_hveqLoanRatePcostRt.setValue((hveqLoanRate / ds_profitAndLossInfo.getCellData(0, "pcostSum") * 100).toFixed(1) + "%");
  } else {
    ed_hveqLoanRatePcostRt.setValue("0%");
  }
  let payCmis = ds_profitAndLossInfo.getCellData(0, "payCmis");
  ed_payCmis.setValue(payCmis);
  if (payCmis != 0) {
    ed_payCmisPcostRt.setValue((payCmis / ds_profitAndLossInfo.getCellData(0, "pcostSum") * 100).toFixed(1) + "%");
  } else {
    ed_payCmisPcostRt.setValue("0%");
  }
  let etcPcost = ds_profitAndLossInfo.getCellData(0, "etcPcost");
  ed_etcPcost.setValue(etcPcost);
  if (etcPcost != 0) {
    ed_etcPcostPcostRt.setValue((etcPcost / ds_profitAndLossInfo.getCellData(0, "pcostSum") * 100).toFixed(1) + "%");
  } else {
    ed_etcPcostPcostRt.setValue("0%");
  }
  ed_pcostSum.setValue(ds_profitAndLossInfo.getCellData(0, "pcostSum"));
  let cost = "";
  if (ds_profitAndLossInfo.getCellData(0, "expectSell") == 0) {
    cost = 0;
  } else {
    cost = Number(ds_profitAndLossInfo.getCellData(0, "pcostSum") / ds_profitAndLossInfo.getCellData(0, "expectSell") * 100);
  }
  if (cost != 0) {
    ed_cost.setValue(cost.toFixed(1) + "%");
  }
  if (ds_profitAndLossInfo.getCellData(0, "expectSell") - ds_profitAndLossInfo.getCellData(0, "pcostSum") != 0) {
    ed_expectPrflos.setValue(ds_profitAndLossInfo.getCellData(0, "expectSell") - ds_profitAndLossInfo.getCellData(0, "pcostSum"));
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',style:'width: 100px;',objType:'Data',mandatory:'true',maxlength:'8','ev:onkeyup':'scwin.onkeyup',allowChar:'a-zA-Z0-9','ev:onviewchange':'scwin.btn_PopUp_onClick2',title:'본선관리번호'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_PopUp',style:'',type:'button','ev:onclick':'scwin.btn_PopUp_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr',id:'tr_vsslNm'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'ed_vsslNm',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_lineNm',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_shpCoNm',label:'',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'tr_impPortcnt'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'ed_impPortcnt',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표화종',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_impRepKcg',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_iocheck',label:'',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'tr_expPortcnt'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'ed_expPortcnt',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표화종',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_expRepKcg',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_iocheck2',label:'',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'tr_wrkPlNm'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_wrkPlNm',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입항(예정)일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_arrvlportDtm',label:'',ref:'',style:'',userData2:'',displayFormat:'####/##/## ##:##'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출항(예정)일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_deprtportDtm',label:'',ref:'',style:'',userData2:'',displayFormat:'####/##/## ##:##'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'tr_cfmanNm'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Chief 포맨',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_cfmanNm',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선포맨',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_cvsslFmanCnt',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'육상포맨',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_groundFmanCnt',label:'',ref:'',style:'',userData2:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'N',gridID:'gr_holdEachWorkPlanList'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_holdEachWorkPlanList',style:'',autoFit:'allColumn',id:'gr_holdEachWorkPlanList',visibleRowNum:'5',class:'wq_gvw',readOnly:'true',columnMove:'false',visibleRowNumFix:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column1',value:'Hold',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'350',inputType:'text',style:'',id:'column17',value:'작업물량',displayMode:'label',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'Shift<br/>수',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column5',value:'투입 중기(Hrs.)',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'수출입구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'column28',value:'품목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column26',value:'중량(톤)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'190',inputType:'text',style:'',id:'column23',value:'선내',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'190',inputType:'text',style:'',id:'column22',value:'선측',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'holdNo',value:'',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'impExpClsNm',value:'',displayMode:'label',colMerge:'true',upperColumn:'holdNo'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'commNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'qty',value:'',displayMode:'label',textAlign:'right',dataType:'float'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'wt',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cbm',value:'',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.3',displayFormat:'#,###.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkShiftCnt',value:'',displayMode:'label',colMerge:'true',upperColumn:'holdNo'}},{T:1,N:'w2:column',A:{width:'190',inputType:'text',style:'',id:'invsslEqInputDtl',value:'',displayMode:'label',textAlign:'left',colMerge:'true',upperColumn:'holdNo',escape:'false'}},{T:1,N:'w2:column',A:{width:'190',inputType:'text',style:'',id:'alngvsslEqInputDtl',value:'',displayMode:'label',textAlign:'left',colMerge:'true',upperColumn:'holdNo',escape:'false'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column39',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'column37',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'sumQty',value:'',displayMode:'label',expression:'sum("qty")',dataType:'float',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'sumWt',value:'',displayMode:'label',expression:'sum("wt")',dataType:'float',displayFormat:'#,##0.000',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'sumCbm',value:'',displayMode:'label',expression:'sum("cbm")',dataType:'float',displayFormat:'#,##0.000',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'190',inputType:'text',style:'',id:'column32',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'190',inputType:'text',style:'',id:'column31',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spa_totalRow',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'예상매출',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'7'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'예상원가',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'예상손익',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'노임',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'복리후생비',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중기임차료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급수수료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기타변동비',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'합계',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원가율',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td tar',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'ed_expectSell',label:'',ref:'',style:'',userData2:'',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tar',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'ed_wage',label:'',ref:'',style:'',userData2:'',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tar',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_welsal',label:'',ref:'',style:'',userData2:'',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tar',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_hveqLoanRate',label:'',ref:'',style:'',userData2:'',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_payCmis',label:'',ref:'',style:'',userData2:'',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_etcPcost',label:'',ref:'',style:'',userData2:'',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_pcostSum',label:'',ref:'',style:'',userData2:'',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_cost',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_expectPrflos',label:'',ref:'',style:'',userData2:'',displayFormat:'#,###',dataType:'number'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td tar',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td tar',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_wagePcostRt',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tar',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_welsalPcostRt',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tar',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_hveqLoanRatePcostRt',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_payCmisPcostRt',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_etcPcostPcostRt',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'}]}]}]}]}]}]}]}]}]}]})