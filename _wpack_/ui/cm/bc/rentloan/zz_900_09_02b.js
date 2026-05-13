/*amd /ui/cm/bc/rentloan/zz_900_09_02b.xml 29255 e511c15d811e1d230c71336d23df3d8aa9836f2a8dd790cba64392de531c56a5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'procYmSt',name:'정산년월시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'procYmEnd',name:'정산년월종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mergeRentloanNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rentloanShapeCd',name:'계약형태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntEmpNo',name:'계약등록자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lowerDeptIncluYn',name:'하위부서포함',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_list',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'procYm',name:'procYm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanNo',name:'rentloanNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mergeRentloanNo',name:'mergeRentloanNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanSeq',name:'rentloanSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanShapeCd',name:'rentloanShapeCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'clntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'crn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'acctDeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'acctDeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regUserId',name:'regUserId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regUserNm',name:'regUserNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'slipNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'acctCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'acctNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drAmt',name:'drAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'summary',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayClsCd',name:'collMoneyPayClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayPlanAmt',name:'collMoneyPayPlanAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crAmt',name:'crAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayAmt',name:'collMoneyPayAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanStDt',name:'rentloanStDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanEndDt',name:'rentloanEndDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr1',name:'addr1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr2',name:'addr2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deposit',name:'deposit',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/cm.bc.rentloan.RetreiveRentLoanAccountsListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_list","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_list","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.userInfo = $c.data.getMemInfo($p);
scwin.strCurDate = WebSquare.date.getCurrentServerDate().substring(0, 6);
scwin.acctDeptCd = scwin.userInfo.acctDeptCd;
scwin.acctDeptNm = scwin.userInfo.acctDeptNm;
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ911",
    compID: "lc_rentloanShapeCd,gr_list:rentloanShapeCd"
  }, {
    grpCd: "ZZ918",
    compID: "gr_list:collMoneyPayClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  ica_procYmSt.setValue(scwin.strCurDate);
  ica_procYmEnd.setValue(scwin.strCurDate);
  ed_acctDeptCd.setValue(scwin.acctDeptCd);
  ed_acctDeptNm.setValue(scwin.acctDeptNm);
};
scwin.ondataload = function () {
  ica_procYmSt.focus();
};
scwin.f_FieldClear2 = function () {
  $c.gus.cfInitObjects($p, [ed_acctDeptCd, ed_acctDeptNm]);
};
scwin.f_FieldClear3 = function () {
  $c.gus.cfInitObjects($p, [ed_mgntEmpNo, ed_mgntEmpNm]);
};

//-------------------------------------------------------------------------
// function name : f_FieldClear
// function desc : 조회 필드 Clear
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, table1);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// function name : f_SetSrchDefault
// function desc : 조회 기본값 설정
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  ica_procYmSt.setValue(scwin.strCurDate);
  ica_procYmEnd.setValue(scwin.strCurDate);
  ica_procYmSt.focus();
};

//-------------------------------------------------------------------------
// function name : f_SearchPopUp
// function desc : 조회 팝업
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_SearchPopUp = function (flag, check, isCdYn) {
  let param = "";
  switch (flag) {
    case '1':
      // 부서
      udc_acctDeptCdInfo7.cfCommonPopUp(scwin.udc_acctDeptCdInfo7_callBackFunc, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '2':
      // 사번
      udc_acEmpInfo.cfCommonPopUp(scwin.udc_acEmpInfo_callBackFunc, ed_mgntEmpNo.getValue(), ed_mgntEmpNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.udc_acctDeptCdInfo7_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_acctDeptCd.setValue(rtnList[0]);
    ed_acctDeptNm.setValue(rtnList[1]);
  }
};
scwin.udc_acEmpInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_mgntEmpNo.setValue(rtnList[0]);
    ed_mgntEmpNm.setValue(rtnList[1]);
  }
};

// 계약등록자 클릭시
scwin.udc_acEmpInfo_onclickEvent = function (e) {
  scwin.f_SearchPopUp('2', 'T');
};

// 귀속부서 클릭시
scwin.udc_acctDeptCdInfo7_onclickEvent = function (e) {
  scwin.f_SearchPopUp('1', 'F');
};

//-------------------------------------------------------------------------
// function name : f_checkPopEd
// function desc : 팝업체크
// function Parameter : strCd : 코드, strNm : 코드명, flag : 플래그
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  if (strCd == "ed_mgntEmpNo") {
    ed_mgntEmpNm.setValue("");
    if (ed_mgntEmpNo.getValue().trim() != "") {
      scwin.f_SearchPopUp(flag, 'T');
    }
  } else if (strCd == "ed_acctDeptCd") {
    ed_acctDeptNm.setValue("");
    if (ed_acctDeptCd.getValue().trim() != "") {
      scwin.f_SearchPopUp(flag, 'T');
    }
  }
};
scwin.udc_acEmpInfo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd('ed_mgntEmpNo', 'ed_mgntEmpNm', '2');
};
scwin.udc_acctDeptCdInfo7_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd('ed_acctDeptCd', 'ed_acctDeptNm', '1');
};
//////////////////////////////end

//-------------------------------------------------------------------------
// function name : f_downExcelSheet
// function desc : 엑셀다운
// function Parameter : objGrd : 그리드
//-------------------------------------------------------------------------
scwin.f_downExcelSheet = async function () {
  let cntRow = ds_list.getRowCount();
  if (cntRow == 0) return;
  let fileName = '임대차_전대차 정산내역';
  let sheetTitle = "임대차_전대차 정산내역";
  await $c.data.downloadGridViewExcel($p, gr_list, {
    fileName: fileName + ".xlsx",
    sheetName: sheetTitle
  });
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ica_procYmSt.getValue() == "" || ica_procYmEnd.getValue() == "") {
    await $c.win.alert($p, "정산년월의 시작일자와 종료일자 모두 입력하세요");
    return;
  }
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// function name : f_Validation
// function desc : 조회 조건 검증
// function Parameter : sType : 검증 타입
//-------------------------------------------------------------------------
// function f_Validation(sType) {    	
//     if (sType == "Search") {

//     }

//     return true;
// };

scwin.sbm_search_submitdone = async function (e) {
  let rowCnt = ds_list.getRowCount();
  spanTotal.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
};
scwin.gr_list_oncelldblclick = async function (rowIndex, columnIndex, columnId) {
  let vcolumnId = ds_list.getCellData(rowIndex, columnId);
  let strPath;
  // 전표번호 선택 시
  if (columnId == "slipNo") {
    if (!$c.gus.cfIsNull($p, vcolumnId)) {
      let result = await $c.gus.cfShowSlipInfo($p, vcolumnId);
    }
  }

  // 계약번호 선택 시
  if (columnId == "mergeRentloanNo") {
    vcolumnId = ds_list.getCellData(rowIndex, "rentloanNo");
    if (!$c.gus.cfIsNull($p, vcolumnId)) {
      // await $c.win.alert("차후 연결....");
      //strPath = "/cm/bc/rentloan/zz_900_01_02b.jsp?mode=MOD&cf=9&rentloanNo="+vcolumnId+"&rentloanSeq="+ds_list.getCellData(rowIndex, "rentloanSeq");
      //scwin.cfTabMenuAdd( strPath , "계약-수정") ;    

      let strPath = "/ui/cm/bc/rentloan/zz_900_01_02b.xml";
      let menuNm = "계약기본정보";
      let data = {};
      data.mode = "MOD";
      data.cf = "9";
      data.rentloanNo = ds_list.getCellData(rowIndex, "rentloanNo");
      data.rentloanSeq = ds_list.getCellData(rowIndex, "rentloanSeq");
      $c.win.openMenu($p, menuNm, strPath, strPath.substring(strPath.lastIndexOf("/") + 1).replace(/.xml/g, ""), data);
    }
  }
};
scwin.ed_mergeRentloanNo_displayFormatter = function (e) {
  let val = e;
  let first = val.charAt(0).toUpperCase();
  if (!/[A-Z]/.test(first)) {
    // 첫 글자가 영문이 아니면 제거
    first = '';
  }
  let rest = val.substring(1).replace(/[^0-9]/g, '');
  if (rest.length > 11) {
    rest = rest.substring(0, 11) + '-' + rest.substring(11, 15);
  }
  let formatted = (first + rest).substring(0, 16);
  return formatted;
};
scwin.f_rentloan_click = function (e) {
  let input = e.target;
  let val = input.value;

  // 1️ 아무것도 없으면 종료
  if (!val) return;

  // 2️ 첫 글자는 영문만 허용, 소문자면 대문자로 자동변환
  let first = val.charAt(0).toUpperCase();
  if (!/[A-Z]/.test(first)) {
    // 첫 글자가 영문이 아니면 제거
    first = '';
  }

  // 3️ 나머지 글자는 숫자만 남김
  let rest = val.substring(1).replace(/[^0-9]/g, '');

  // 4️ 12자리 넘으면 '-' 추가
  if (rest.length > 11) {
    rest = rest.substring(0, 11) + '-' + rest.substring(11, 15);
  }

  // 5️ 전체 조합 및 길이 제한
  let formatted = (first + rest).substring(0, 16);

  // 6️ 결과 반영
  input.value = formatted;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회계년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToYearMon',A:{edFromId:'ica_procYmSt',edToId:'ica_procYmEnd',id:'udc_fromToYearMon1',mandatoryFrom:'true',mandatoryTo:'true',refDataMap:'dma_search',refEdDt:'procYmEnd',refStDt:'procYmSt',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mergeRentloanNo',style:'width: 150px;',ref:'data:dma_search.mergeRentloanNo',displayFormatter:'scwin.ed_mergeRentloanNo_displayFormatter',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.f_rentloan_click(event)'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약형태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_rentloanShapeCd',style:'width: 120px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'data:dma_search.rentloanShapeCd',sortOption:'value'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약등록자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',code:'mgntEmpNo',codeId:'ed_mgntEmpNo',id:'udc_acEmpInfo',maxlengthCode:'6',nameId:'ed_mgntEmpNm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'dma_search',selectID:'retrieveAcEmpInfo',style:'',validTitle:'','ev:onclickEvent':'scwin.udc_acEmpInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acEmpInfo_onblurCodeEvent'}},{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear3'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',code:'acctDeptCd',codeId:'ed_acctDeptCd',id:'udc_acctDeptCdInfo7',maxlengthCode:'5',nameId:'ed_acctDeptNm',popupID:'',refDataCollection:'dma_search',selectID:'retrieveAcctDeptCdInfo7',style:'',validTitle:'','ev:onclickEvent':'scwin.udc_acctDeptCdInfo7_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo7_onblurCodeEvent'}},{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',falseValue:'0',id:'cbx_lowerDeptIncluYn',ref:'data:dma_search.lowerDeptIncluYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',value:'1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하위부서포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_search1_init',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'임대차[전대차] 정산내역 조회 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_list',id:'udc_list',gridDownFn:'scwin.f_downExcelSheet'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_list',focusMode:'cell',id:'gr_list',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',fixedColumn:'5',readOnly:'true','ev:oncelldblclick':'scwin.gr_list_oncelldblclick',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'100',value:'회계년월',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',width:'100',value:'최초</br>계약번호',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',width:'140',value:'계약번호',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',width:'100',value:'계약순번',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',width:'70',value:'계약</br>형태',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'80',value:'거래처</br>번호'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',width:'120',value:'거래처명'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',width:'100',value:'사업자</br>등록번호',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',width:'70',value:'귀속</br>부서'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column88',value:'귀속부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'계약</br>사원번호',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column82',value:'계약</br>등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column76',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column73',value:'전표</br>차변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column70',value:'전표</br>대변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column67',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'청구/</br>정산구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column61',value:'지급/청구</br>예정금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column58',value:'정산금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column55',value:'계약개시일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column49',value:'계약종료일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'보증금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column91',value:'상세주소1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column94',value:'상세주소2',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'procYm',inputType:'text',width:'100',displayFormat:'####/##',calendarValueType:'yearMonth'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mergeRentloanNo',inputType:'text',width:'140',class:'underline',style:'color:blue;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanSeq',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanShapeCd',inputType:'select',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regUserId',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'regUserNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'color:blue;',id:'slipNo',value:'',displayMode:'label',class:'underline'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'drAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'collMoneyPayClsCd',value:'',displayMode:'label',textAlign:'left',dataType:'number',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'collMoneyPayPlanAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'collMoneyPayAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rentloanStDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rentloanEndDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'deposit',value:'',displayMode:'label',textAlign:'right',excelCellType:'number',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'addr1',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'addr2',value:'',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column44',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column43',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column75',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'crAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column72',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'drAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column63',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'collMoneyPayPlanAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###',expression:'sum(\'collMoneyPayAmt\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})