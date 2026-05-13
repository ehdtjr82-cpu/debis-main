/*amd /ui/ds/op/wrkrslts/wagewrkrslts/op_307_01_24b.xml 30038 589f568364c9f5bc2bdb51020254f6e47689928cde8ee212f21fc76e97104193 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_rgnDistrict'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_rgnDistrict',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_information',saveRemovedData:'true','ev:ondataload':'scwin.ds_information_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lunionOrgCd',name:'노조조직코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lunionOrgNm',name:'노조조직명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'staffCnt',name:'인원',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'totalWage',name:'',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'tax1',name:'',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'tax2',name:'',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'tax3',name:'',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ssn',name:'주민등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendDt',name:'도착예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col17',name:'name17',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Query',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portDistrict',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rgnDistrict',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chief',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lunionOrgCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStDt',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsEndDt',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_portDistrict',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_portDistrict',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'sysCd',name:'name1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'queryId',name:'name2'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_query',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'clsCd',name:'name1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'portDistrict',name:'name2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'rgnDistrict',name:'name3'}},{T:1,N:'w2:key',A:{dataType:'text',id:'chief',name:'name4'}},{T:1,N:'w2:key',A:{dataType:'text',id:'lunionOrgCd',name:'name5'}},{T:1,N:'w2:key',A:{dataType:'text',id:'rsltsStDt',name:'name6'}},{T:1,N:'w2:key',A:{dataType:'text',id:'rsltsEndDt',name:'name7'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_rgnDistrict',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_rgnDistrict',target:'data:json,{"id":"ds_rgnDistrict","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_portDistrict',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_portDistrict',target:'data:json,{"id":"ds_portDistrict","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.submit_port','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.wagewrkrslts.RetrieveChiefcrewseachtaxinvoiceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_query","key":"IN_DS1"},{"id":"ds_information","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_information","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수
//-------------------------------------------------------------------------
scwin.pgmId = "op_307_01_24b.jsp";

// 날짜 가져오기
scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.strFrDate = scwin.strCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.endDt = $c.date.getLastDateOfMonth($p, scwin.strCurDate.substring(0, 6)); // 현재 월의 마지막일자
scwin.endDt = scwin.strCurDate.substring(0, 6) + scwin.endDt;

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // scwin.f_FieldClear();

  // CMD 주소가 없어서 지역권역을 따라 가긴 했으나 네트워크상 result가 null로 표기되어 찾지못함
  // 우선 하드코딩으로 데이터는 넣어놓고 추후에 CMD주소 없이 가져올 수 있도록 공통 수정되면 찾을 예정

  const param = [{
    method: "getLuxeComboData",
    param1: "WagesCreationPierPierInsideEBC",
    param2: "retrivePortDistrictCodeList",
    compID: "acb_portDistrict"
  }];
  $c.data.setGauceUtil($p, param);

  // dma_portDistrict.set("sysCd", "WagesCreationPierPierInsideEBC");
  // dma_portDistrict.set("queryId", "retrivePortDistrictCodeList");
  // $c.sbm.execute(sbm_portDistrict);

  scwin.f_changeRgnDistrict();

  ///ds.op.wrkrslts.wagewrkrslts.CreatePierPierInsideWagesCMD.do
};

//-------------------------------------------------------------------------
// 날짜 세팅
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  udc_rsltsDt.setInitDate(scwin.strFrDate, scwin.endDt);
};

//-------------------------------------------------------------------------
// 항구권역 선택시 지역권역 리스트 가져옴
//-------------------------------------------------------------------------
scwin.f_changeRgnDistrict = function () {
  let portDistrict = acb_portDistrict.getValue();
  dma_rgnDistrict.set("sysCd", "WagesCreationPierPierInsideEBC");
  dma_rgnDistrict.set("queryId", "retriveAreaDistrictCodeList");
  dma_rgnDistrict.set("param1", portDistrict);
  $c.sbm.execute($p, sbm_rgnDistrict);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = async function (e) {
  //조회 필수 조건 check
  if (!(await $c.gus.cfIsAfterDate($p, ed_rsltsStDt.getValue(), ed_rsltsEndDt.getValue()))) {
    $c.win.alert($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_rsltsStDt.focus();
    return;
  }
  if ((await acb_portDistrict.getValue()) == "") {
    $c.win.alert($p, "항구권역을 선택하여 주십시요");
    return;
  }
  if ((await ed_lunionOrgCd.getValue()) == "") {
    $c.win.alert($p, "지급처를 선택하여 주십시요");
    ed_lunionOrgCd.focus();
    return;
  }
  dma_query.set("clsCd", acb_clsCd.getValue());
  dma_query.set("portDistrict", acb_portDistrict.getValue());
  dma_query.set("rgnDistrict", acb_rgnDistrict.getValue());
  dma_query.set("chief", acb_chief.getValue());
  dma_query.set("lunionOrgCd", ed_lunionOrgCd.getValue());
  dma_query.set("rsltsStDt", ed_rsltsStDt.getValue());
  dma_query.set("rsltsEndDt", ed_rsltsEndDt.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 대문자 변환
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear_onClick = function (e) {
  udc_rsltsDt.setInitDate(scwin.strFrDate, scwin.strCurDate);
  acb_clsCd.setSelectedIndex(0);
  acb_chief.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 반장별 세금계산서 출력
//-------------------------------------------------------------------------
scwin.f_OzReport = function (e) {
  let row = ds_information.getTotalRow();
  if (row == 0) {
    $c.win.alert($p, "결과가 없습니다.");
    return;
  }
  var data = {
    odiName: "op_307_01_24",
    reportName: "ds/op/wrkrslts/wagewrkrslts/op_307_01_24.ozr",
    odiParam: {
      clsCd: acb_clsCd.getValue(),
      portDistrict: acb_portDistrict.getValue(),
      lunionOrgCd: ed_lunionOrgCd.getValue(),
      rgnDistrict: acb_rgnDistrict.getValue(),
      chief: acb_chief.getValue(),
      rsltsStDt: ed_rsltsStDt.getValue(),
      rsltsEndDt: ed_rsltsEndDt.getValue()
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      zoom: 90 // 배율 설정
    },
    formParam: {}
  };
  scwin.openPopup(data);
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
// 주민번호 비노출
//-------------------------------------------------------------------------
scwin.displayFm1 = function (data) {
  let id = "";
  let result = "";
  if (data.length > 0) {
    result = data.substring(0, 6) + "-*******";
  } else {
    result = "";
  }
  return result;
};

//-------------------------------------------------------------------------
// 날짜 형식 체크
//-------------------------------------------------------------------------
scwin.udc_rsltsDt_onBlurFrom = function (e) {
  let dateStr = ed_rsltsStDt.getValue();

  // 종료일자 체크
  if (ed_rsltsStDt.getValue() > ed_rsltsEndDt.getValue() && ed_rsltsEndDt.getValue().length == 8) {
    $c.win.alert($p, "시작일자가 종료일자 이전이여야 합니다.");
    ed_rsltsStDt.setValue("");
    ed_rsltsStDt.focus();
    return;
  } else {
    let minY = 1900;
    let maxY = 2099;
    let strY = dateStr.substring(0, 4);

    // 형식 체크
    if (!$c.date.isDate($p, dateStr) && dateStr.length == 8 || parseInt(strY) < minY || parseInt(strY) > maxY) {
      $c.win.alert($p, "날짜 형식이 올바르지 않습니다.", function () {
        ed_rsltsStDt.setValue("");
        ed_rsltsStDt.focus();
        return;
      });
    }
  }
  ;
};
scwin.udc_rsltsDt_onBlurTo = function (e) {
  let dateStr = ed_rsltsEndDt.getValue();

  // 종료일자 체크
  if (ed_rsltsStDt.getValue() > ed_rsltsEndDt.getValue() && ed_rsltsEndDt.getValue().length == 8) {
    $c.win.alert($p, "종료일자는 시작일자보다 이후여야 합니다.");
    ed_rsltsEndDt.setValue("");
    ed_rsltsEndDt.focus();
    return;
  } else {
    let minY = 1900;
    let maxY = 2099;
    let strY = dateStr.substring(0, 4);

    // 형식 체크
    if (!$c.date.isDate($p, dateStr) && dateStr.length == 8 || parseInt(strY) < minY || parseInt(strY) > maxY) {
      $c.win.alert($p, "날짜 형식이 올바르지 않습니다.", function () {
        ed_rsltsEndDt.setValue("");
        ed_rsltsEndDt.focus();
        return;
      });
    }
  }
  ;
};

//-------------------------------------------------------------------------
// 지급처 UDC 공통팝업
//-------------------------------------------------------------------------
scwin.udc_lunionOrg_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_lunionOrgCd.getValue(), ed_lunionOrgNm.getValue(), 'F', 'T');
};
scwin.udc_lunionOrg_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lunionOrgCd, ed_lunionOrgNm, 1);
};
scwin.udc_lunionOrg_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lunionOrgNm, ed_lunionOrgCd, 1, false);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      // 지급처 팝업
      udc_lunionOrg.cfCommonPopUp(scwin.udc_lunionOrg_CallBack, pCode.trim(), pName, pClose, null, null, null, null, null, 500, null, null, null); // 노임(반)

      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// UDC 콜백
//-------------------------------------------------------------------------
scwin.udc_lunionOrg_CallBack = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lunionOrgCd, ed_lunionOrgNm);
};

//-------------------------------------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------------------------------------
scwin.runExcel = async function () {
  let totCnt = ds_information.getTotalRow();
  let options = {
    fileName: "반장반원별 세금내역서.xlsx",
    sheetName: "반장반원별 세금내역서",
    removeColumns: "7",
    hiddenVisible: true
  };
  let grdObj = gr_Information;
  let infoArr = {};
  if (totCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
    }
  }
};

//-------------------------------------------------------------------------
// 데이터 로드시
//-------------------------------------------------------------------------
scwin.ds_information_ondataload = function () {
  let totalrow = ds_information.getTotalRow();
  spa_totalRows.setValue(totalrow);
  if (totalrow == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'form-control w85',editType:'select',id:'acb_clsCd',search:'start',style:'',submenuSize:'auto',mandatory:'true',objType:'Data',validExp:'구분:yes',allOption:'',chooseOption:'',ref:'',displayMode:'label',title:'구분'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'일반'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'소급'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'항구권역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'acb_portDistrict',search:'start',style:'',submenuSize:'auto',delimiter:'-',displayMode:'value delim label',allOption:'',chooseOption:'true',ref:'','ev:onviewchange':'scwin.f_changeRgnDistrict',chooseOptionLabel:'$blank',title:'항구권역'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지역권역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control ',editType:'select',id:'acb_rgnDistrict',search:'start',style:'width: 208px;',submenuSize:'auto',objType:'Data',validExp:'지역권역:yes',mandatory:'true',allOption:'',chooseOption:'',ref:'',title:'지역권역'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_rgnDistrict'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급처(노조)',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_lunionOrgCd',nameId:'ed_lunionOrgNm',btnId:'btn_PopUp1',id:'udc_lunionOrg',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',mandatoryCode:'true',objTypeCode:'Data',UpperFlagCode:'1',validExpCode:'지급처(노조):yes',objTypeName:'data',selectID:'wageLunionOrgCdLevel12','ev:onclickEvent':'scwin.udc_lunionOrg_onclickEvent','ev:onblurCodeEvent':'scwin.udc_lunionOrg_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_lunionOrg_onviewchangeNameEvent',validTitle:'지급처'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'반장/반원 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'acb_chief',search:'start',style:'',submenuSize:'auto',mandatory:'true',objType:'Data',validExp:'구분:yes',allOption:'',chooseOption:'',ref:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'반장별'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'반원별'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'실적일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_rsltsDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_rsltsStDt',edToId:'ed_rsltsEndDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'Data',objTypeTo:'Data',objTypeBtn:'data','ev:onBlurFrom':'scwin.udc_rsltsDt_onBlurFrom','ev:onBlurTo':'scwin.udc_rsltsDt_onBlurTo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear_onClick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'세금내역서',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_Information',gridDownFn:'scwin.runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_information',id:'gr_Information',style:'',resize:'true',readOnly:'true',columnMove:'true',visibleRowNum:'14',visibleRowNumFix:'true',fixedColumn:'4'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'일자',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'본선관리번호',width:'120',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'본선명',width:'120',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'입항일자',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'작업장',width:'120',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'노조조직코드',width:'120',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'노조조직명',width:'120',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'주민번호',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{width:'95',style:'',inputType:'text',id:'column57',value:'주민번호'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'반장(원)명',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'노임',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'작업인원',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'갑근세',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'주민세',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'노조비',displayMode:'label',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNm',inputType:'text',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvIntendDt',inputType:'text',width:'100',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lunionOrgCd',inputType:'text',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lunionOrgNm',inputType:'text',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ssn',inputType:'text',width:'100',textAlign:'center',displayFormatter:'scwin.displayFm1'}},{T:1,N:'w2:column',A:{width:'95',style:'',inputType:'expression',id:'col_exp',value:'',expression:'display(\'ssn\')',displayFormat:'######-#######',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNm',inputType:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totalWage',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'staffCnt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tax1',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tax2',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tax3',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column50',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'95',style:'',inputType:'text',id:'column59',value:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column47',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum("totalWage")',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column46',value:'',displayMode:'label',textAlign:'right',expression:'sum("staffCnt")',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',textAlign:'right',expression:'sum("tax1")',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column44',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum("tax2")',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column43',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum("tax3")',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_OzReport',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_OzReport',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:3,text:'반장별 세금내역서'}]}]}]}]}]}]}]}]}]})