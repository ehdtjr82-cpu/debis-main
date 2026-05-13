/*amd /ui/cm/bc/rentloan/zz_900_01_08b.xml 24970 228c29de429553eb3c04bc12c50fcf871ab63031c8de34a622fc75141455d471 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnCount',name:'미확정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unsettledCount',name:'확정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'loanCnt',name:'건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'loanDeposit',name:'보증금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'loanMonTax',name:'월세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentCnt',name:'건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentDeposit',name:'보증금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentMonTax',name:'월세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanCnt',name:'건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanDeposit',name:'보증금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanMonTax',name:'월세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subleaseCnt',name:'건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subleaseDeposit',name:'보증금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subleaseMonTax',name:'월세',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'rentloanDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'uppermostBizDomCd',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cond_sbm',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'rentloanDt',name:'name1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'acctDeptCd',name:'name2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'uppermostBizDomCd',name:'name3'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_uppermostBizdom',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_uppermostBizdom_param'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/cm.bc.rentloan.RetrieveRentLoanGeneralConditionListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_out","key":"OUT_DS1"},{"id":"dma_cond_sbm","key":"IN_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_uppermostBizdom',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_uppermostBizdom_param","key":"IN_DS1"}',target:'data:json,{"id":"ds_uppermostBizdom","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_uppermostBizdom_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 임대차[전대차] 부서별/유형별 계약 현황 조회
 * 메뉴경로 : 공통/총무업무/임대차관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/cm/bc/rentloan/zz_900_01_08b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-10-29
 * 수정이력  :
 *    - 2025-10-29      정승혜    최초작성
 *    - 2026-03-04      정승혜    기타수정
 */
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin"); // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님  

scwin.uppermostBizdomcd = ""; //최상위사업영역

//hidden
scwin.hid_FromDate = "";
scwin.hid_version = "";
scwin.txt_uppermostBizDomCd = "";

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시 
//-------------------------------------------------------------------------   

scwin.onpageload = function () {
  scwin.f_createHeader();
  ed_rentloanDt.setValue(scwin.strCurDate); //오늘날짜받아오기

  // GauceUtil.getCodeList
  const codeOptions = [{
    grpCd: "ZZ940",
    compID: "lc_acctDeptCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function () {
  dlt_commonCodeZZ940.sort("cd", 0);
  //로그인한 사번으로 최상위사업영역을 가져오는 데이타셋 실행
  scwin.f_uppermostBizdom();
};

// DataSet Header 정의
scwin.f_createHeader = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

// 조회
scwin.f_Retrieve = async function (e) {
  if (ed_rentloanDt.getValue() == "" || ed_rentloanDt.getValue().length < 8) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "계약기준일"));
    return;
  }

  //let biz = dma_cond.get("uppermostBizDomCd");
  let biz = lc_uppermostBizdomcd.getValue();
  if (biz == "0") {
    biz = "252";
  } else {
    biz = "200";
  }
  const params = {
    rentloanDt: dma_cond.get("rentloanDt"),
    acctDeptCd: dma_cond.get("acctDeptCd"),
    uppermostBizDomCd: biz
  };
  dma_cond_sbm.setJSON(params);
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_out.getRowCount());
  gr_ctrt.setFocusedCell(0, "acctDeptCd", false);
  if (ds_out.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  let biz = lc_uppermostBizdomcd.getValue();
  if (biz == "252") {
    biz = "0";
  } else {
    biz = "1";
  }
  dma_cond.set("uppermostBizDomCd", biz);
};

// 임대차[전대차]계약관리화면  호출
scwin.showRentLoanCtrtMgntInfo = function (dcsnYn, tRentloanDt, tAcctDeptCd, tAcctDeptNm, tdcsnYn, selBizDom) {
  let data = {};
  data.rentloanDt = tRentloanDt; //계약기준일
  data.acctDeptCd = tAcctDeptCd; //부서코드
  data.acctDeptNm = tAcctDeptNm; //부서명
  data.dcsnYn = tdcsnYn; //확정구분
  data.selBizDom = selBizDom; //선택사업영역

  if (dcsnYn == "0") {
    $c.win.alert($p, "0건입니다!!");
    return;
  } else {
    let url = "/ui/cm/bc/rentloan/zz_900_01_01b.xml";
    $c.win.openMenu($p, '임대차[전대차]계약관리', url, url.substring(url.lastIndexOf("/") + 1).replace(/.xml/g, ""), data, {
      openAction: "exist"
    });
  }
};

// 엑셀파일로 저장
// 엑셀다운 8+16
scwin.f_Excel = async function () {
  if (ds_out.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  let confirm = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (confirm) {
    const options = {
      fileName: "임대차(전대차) 부서별·유형별 계약 현황.xlsx",
      sheetName: "임대차(전대차) 부서별·유형별 계약 현황.xlsx",
      startRowIndex: 3,
      startColumnIndex: 0
    };
    const infoArr = [{
      rowIndex: 0,
      colIndex: 0,
      rowSpan: 1,
      colSpan: 16,
      text: "임대차(전대차) 부서별·유형별 계약 현황",
      textAlign: "center",
      fontSize: 18
    }];
    $c.data.downloadGridViewExcel($p, gr_ctrt, options, infoArr);
  }
};
scwin.f_SearchClear = function (e) {
  //$c.gus.cfInitObjects(grp_search);
  $c.gus.cfInitObjects($p, [lc_uppermostBizdomcd, lc_acctDeptCd, ed_rentloanDt]);
};
scwin.f_uppermostBizdom = function () {
  const params = {
    sysCd: "CommonEBC",
    queryId: "retrieveUppermostBizDomInfo",
    param1: scwin.memJson.empNo
  };
  dma_uppermostBizdom_param.setJSON(params);
  $c.sbm.execute($p, sbm_ds_uppermostBizdom);
};
scwin.sbm_ds_uppermostBizdom_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_uppermostBizdom.getCellData(0, "col1") != "" && ds_uppermostBizdom.getCellData(0, "col1") != null) {
    scwin.uppermostBizdomcd = ds_uppermostBizdom.getCellData(0, "col1");
  } else {
    scwin.uppermostBizdomcd = "252";
  }
  if (scwin.uppermostBizdomcd == "200") {
    lc_uppermostBizdomcd.setValue(1);
  } else {
    lc_uppermostBizdomcd.setValue(0);
  }
};
scwin.gr_ctrt_oncellclick = function (rowIndex, columnIndex, columnId) {
  let selBizDom = dma_cond.get("uppermostBizDomCd");
  if (columnId == "dcsnCount") {
    let tRentloanDt = ed_rentloanDt.getValue(); // 계약기준일
    let tAcctDeptCd = ds_out.getCellData(rowIndex, "acctDeptCd"); // 부서코드
    let tAcctDeptNm = ds_out.getCellData(rowIndex, "acctDeptNm"); // 부서명
    let tdcsnYn = "0"; // 확정구분 (미확정)

    scwin.showRentLoanCtrtMgntInfo(ds_out.getCellData(rowIndex, "dcsnCount"), tRentloanDt, tAcctDeptCd, tAcctDeptNm, tdcsnYn, selBizDom);
  }
  if (columnId == "unsettledCount") {
    let tRentloanDt = ed_rentloanDt.getValue(); // 계약기준일
    let tAcctDeptCd = ds_out.getCellData(rowIndex, "acctDeptCd"); // 부서코드
    let tAcctDeptNm = ds_out.getCellData(rowIndex, "acctDeptNm"); // 부서명
    let tdcsnYn = "1"; // 확정구분 (확정)

    scwin.showRentLoanCtrtMgntInfo(ds_out.getCellData(rowIndex, "unsettledCount"), tRentloanDt, tAcctDeptCd, tAcctDeptNm, tdcsnYn, selBizDom);
  }
};
scwin.lc_uppermostBizdomcd_onchange = function (info) {
  if (lc_uppermostBizdomcd.getValue() == 0) {
    dma_cond.set("uppermostBizDomCd", 0);
  } else if (lc_uppermostBizdomcd.getValue() == 1) {
    dma_cond.set("uppermostBizDomCd", 1);
  } else if (lc_uppermostBizdomcd.getValue() == 252) {
    dma_cond.set("uppermostBizDomCd", 252);
  } else if (lc_uppermostBizdomcd.getValue() == 200) {
    dma_cond.set("uppermostBizDomCd", 200);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'grp_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약기준일',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ed_rentloanDt',style:'',displayFormat:'yyyy/MM/dd',ref:'data:dma_cond.rentloanDt',mandatory:'true',title:'계약기준일',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_uppermostBizdomcd',style:'',submenuSize:'auto',ref:'','ev:onchange':'scwin.lc_uppermostBizdomcd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류사업'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'여객사업'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_acctDeptCd',style:'',submenuSize:'auto',chooseOptionLabel:'전체',ref:'data:dma_cond.acctDeptCd',visibleRowNum:'30',objType:'data'},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_SearchClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'임대차[전대차] 부서별/유형별 계약 현황 조회 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_ctrt',gridDownFn:'scwin.f_Excel',id:'udc_topGrd',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_out',id:'gr_ctrt',style:'',visibleRowNum:'14',visibleRowNumFix:'true',fixedColumn:'4',readOnly:'true','ev:oncellclick':'scwin.gr_ctrt_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'부서코드',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'부서명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'미확정',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'확정',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'임차',width:'240',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'임대',width:'240',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'240',inputType:'text',style:'',id:'column61',value:'전차',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'240',inputType:'text',style:'',id:'column52',value:'전대',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column26',value:'건수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'보증금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'월세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'건수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column22',value:'보증금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'월세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'건수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'보증금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column56',value:'월세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column53',value:'건수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'보증금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'월세',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnCount',inputType:'text',style:';color:blue;',value:'',width:'100',textAlign:'right',readOnly:'false',class:'underline',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unsettledCount',inputType:'text',style:';color:blue;',value:'',width:'70',textAlign:'right',readOnly:'false',class:'underline',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'loanCnt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'loanDeposit',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'loanMonTax',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentCnt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentDeposit',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentMonTax',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rentloanCnt',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rentloanDeposit',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rentloanMonTax',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'subleaseCnt',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'subleaseDeposit',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'subleaseMonTax',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column84',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column83',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column82',value:'',displayMode:'label',expression:'SUM("dcsnCount")',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column81',value:'',displayMode:'label',expression:'SUM("unsettledCount")',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column80',value:'',displayMode:'label',expression:'SUM("loanCnt")',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column79',value:'',displayMode:'label',expression:'SUM("loanDeposit")',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column78',value:'',displayMode:'label',expression:'SUM("loanMonTax")',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column77',value:'',displayMode:'label',expression:'SUM("rentCnt")',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column76',value:'',displayMode:'label',expression:'SUM("rentDeposit")',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column75',value:'',displayMode:'label',expression:'SUM("rentMonTax")',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column74',value:'',displayMode:'label',expression:'SUM("rentloanCnt")',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column73',value:'',displayMode:'label',expression:'SUM("rentloanDeposit")',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column72',value:'',displayMode:'label',expression:'SUM("rentloanMonTax")',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column71',value:'',displayMode:'label',expression:'SUM("subleaseCnt")',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column70',value:'',displayMode:'label',expression:'SUM("subleaseDeposit")',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',expression:'SUM("subleaseMonTax")',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'info-list red'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'확정 : 본 화면의 계약건수가 계약일 기준 유효한 계약이며, 계약 건수 클릭시 해지, 해제 사항도 포함되어 조회됨<br/>',class:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'미확정 : 승인상태 중 대기, 상신, 중간승인 상태 계약건수 조회됨',class:'',tagname:'p'}}]}]}]}]}]}]})