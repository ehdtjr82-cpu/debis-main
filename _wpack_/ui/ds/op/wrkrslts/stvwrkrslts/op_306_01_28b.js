/*amd /ui/ds/op/wrkrslts/stvwrkrslts/op_306_01_28b.xml 31902 91b2b99b8fd77e8c76ae3715bac0bfe812f2d3bdd6dd3525704398b6f8eee9b3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Stevedoring',saveRemovedData:'true','ev:ondataload':'scwin.ds_Stevedoring_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출귀속',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'입항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDt',name:'결재일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'whouseCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'whouseNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemNm',name:'매출항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totQty',name:'보위대수',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'totWt',name:'중량',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'totCbm',name:'총CBM',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'totSellAmt',name:'총매출금액',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'unsettledSellQty',name:'',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'unsettledSellWt',name:'',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'unsettledSellCbm',name:'',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'unsettledSellAmt',name:'',dataType:'bigDecimal'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Inspection'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'branCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdYmSd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdYmEd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'checkYn',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Inspection',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'branCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdYmSd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdYmEd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkYn',name:'name7',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_Done','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.stvwrkrslts.RetrieveStevedoringUnsettledRemainAmtPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Inspection","key":"IN_DS1"},{"id":"ds_Stevedoring","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_Stevedoring","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitDone','ev:submiterror':'scwin.sbm_retrieve_Error',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수
//-------------------------------------------------------------------------
scwin.lobranCd = $c.data.getMemInfo($p, "loUpperLobranCd");
scwin.vCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  $c.sbm.execute($p, sbm_lobran);
};
scwin.onUdcCompleted = function () {
  ed_cvsslMgntNo.focus();
  ica_stdYmSd.setValue(scwin.vQryStDt);
  ica_stdYmEd.setValue(scwin.vCurDate);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  dma_Inspection.set("branCd", acb_branCd.getValue());
  dma_Inspection.set("stdYmSd", ica_stdYmSd.getValue());
  dma_Inspection.set("stdYmEd", ica_stdYmEd.getValue());
  dma_Inspection.set("odrNo", ed_odrNo.getValue());
  dma_Inspection.set("clntNo", ed_clntNo.getValue());
  dma_Inspection.set("cvsslMgntNo", ed_cvsslMgntNo.getValue());
  dma_Inspection.set("checkYn", cbx_Yn.getValue());
  if (!(await $c.gus.cfValidate($p, [tb_retrieve]))) {
    return;
  } else {
    $c.sbm.execute($p, sbm_retrieve);
  }
};

//-------------------------------------------------------------------------
// 대문자 변환
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 점소 데이터
//-------------------------------------------------------------------------
scwin.sbm_lobran_Done = function (e) {
  acb_branCd.setValue(scwin.lobranCd);
};

//-------------------------------------------------------------------------
// 본선 관리 번호 팝업
//-------------------------------------------------------------------------
scwin.btn_popUp_onClick = async function (e) {
  //팝업 화면에 데이터 보내는 방법 1. json형태로 팝업화면에서 getParameter로 받기
  let params = [];
  params[0] = ed_cvsslMgntNo.getValue();
  let url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml";
  let opts = {
    id: "taxPop",
    type: "",
    popupName: "본선관리번호검색팝업",
    width: 1100,
    height: 650
  };
  let rtnValues = await $c.win.openPopup($p, url, opts, params);
  if (rtnValues != null) {
    $c.gus.cfSetReturnValue($p, rtnValues, ed_cvsslMgntNo);
    ed_cvsslMgntNo.setValue(rtnValues[0]);
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (거래처)
//-------------------------------------------------------------------------
scwin.udc_Clnt_onClick = async function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_Clnt_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 1);
};
scwin.udc_Clnt_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 1, false);
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
// function name : f_openPopUp
// function desc : popup
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  var rtnList = new Array();
  switch (disGubun) {
    case 1:
      //거래처
      udc_Clnt.cfCommonPopUp(scwin.udc_Clnt_callBackFunc // 세팅 callback
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , '150,170' // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "매입거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(거래처)
//-------------------------------------------------------------------------
scwin.udc_Clnt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_clntNo, ed_clntNm);
};

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onClick = function (e) {
  acb_branCd.setValue(scwin.lobranCd);
  ed_cvsslMgntNo.setValue("");
  ed_odrNo.setValue("");
  ed_clntNo.setValue("");
  ed_clntNm.setValue("");
  cbx_Yn.setValue("0");
  ica_stdYmSd.setValue(scwin.vQryStDt);
  ica_stdYmEd.setValue(scwin.vCurDate);
};

//-------------------------------------------------------------------------
// 조회 성곧시
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitDone = function (e) {
  if (ds_Stevedoring.getTotalRow() == 0) {
    $c.win.alert($p, MSG_CM_ERR_003);
  }
  spa_totalRows.setValue(ds_Stevedoring.getTotalRow());
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.runExcel = async function () {
  if (!(await $c.gus.cfValidate($p, [tb_retrieve]))) {
    return;
  }
  let count = ds_Stevedoring.getTotalRow();
  if (count > 0) {
    // 검색조건

    const options = {
      fileName: "하역미확정잔액현황.xlsx",
      //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      sheetName: "하역미확정잔액현황",
      startRowIndex: 2,
      startColumnIndex: 0,
      colMerge: true
    };

    // 타이틀
    const infoArr = [{
      rowIndex: 0,
      colIndex: 0,
      colSpan: 20,
      text: "하역미확정잔액현황",
      textAlign: "center",
      drawBorder: false,
      fontSize: "24px",
      fontName: "굴림체",
      fontWeight: "bold",
      textDecoration: "underline"
    }];
    $c.data.downloadGridViewExcel($p, gr_TermEachCarryingVesselStevedoring, options, infoArr);
  } else {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_018, "[하역미확정잔액현황] 자료", "[조회]"));
  }
};
//-------------------------------------------------------------------------
// Check Box Checked 
//-------------------------------------------------------------------------
scwin.checkbox = function (info) {
  if (cbx_Yn.getValue() == "1") {
    dma_Inspection.set("checkYn", "1");
  } else {
    dma_Inspection.set("checkYn", "1");
  }
};
scwin.ds_Stevedoring_ondataload = function () {
  gr_TermEachCarryingVesselStevedoring.setFocusedCell(0, 0);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_branCd',search:'start',style:'width:230px;',submenuSize:'auto',mandatory:'true',vaildExp:'점소:yes',allOption:'',chooseOption:'',ref:'',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',style:'width: 150px;',maxlength:'8',editType:'select','ev:onkeyup':'scwin.onkeyup',allowChar:'a-zA-Z0-9'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_popUp',style:'',type:'button','ev:onclick':'scwin.btn_popUp_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;',maxlength:'13',editType:'select','ev:onkeyup':'scwin.onkeyup',allowChar:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출일',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'ica_stdYm',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_stdYmSd',edToId:'ica_stdYmEd',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'기준일 시작일자',titleTo:'기준일 시작일자'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_clntNo',nameId:'ed_clntNm',id:'udc_Clnt',allowCharCode:'0-9',editTypeCode:'select',maxlengthCode:'6',btnId:'btn_clntNo_popup',maxlengthName:'100','ev:onclickEvent':'scwin.udc_Clnt_onClick','ev:onblurCodeEvent':'scwin.udc_Clnt_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_Clnt_onChangeName',selectID:'retrieveClntList'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정 매출 제외 여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_Yn',ref:'',renderType:'native',rows:'',selectedindex:'-1',style:'','ev:onviewchange':'scwin.checkbox',falseValue:'0',value:'1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'하역미확정 잔액현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_TermEachCarryingVesselStevedoring',gridDownFn:'scwin.runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_Stevedoring',id:'gr_TermEachCarryingVesselStevedoring',style:'',visibleRowNum:'15',visibleRowNumFix:'true',autoFit:'allColumn',autoFitMinWidth:'1700',resize:'true',columnMove:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'오더종류명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'본선관리<br/>번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'모선명',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'입항일자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'매출일자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'오더번호',width:'130',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'거래처명',width:'140',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'B/L-NO',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'매출항목',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'매출부서코드',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'매출품명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column46',value:'창고',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'column43',value:'당월총매출',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'column37',value:'당월미확정매출',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column65',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column61',value:'금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',width:'100',colMerge:'true',upperColumn:'odrKndNm',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslNm',inputType:'text',width:'80',textAlign:'left',colMerge:'true',upperColumn:'cvsslMgntNo',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrvlportDt',inputType:'text',width:'100',displayFormat:'####/##/##',colMerge:'true',upperColumn:'cvsslNm',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellDt',inputType:'text',width:'100',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'130',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'140',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellItemNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellLodeptCd',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'whouseNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'totQty',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'totWt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'totCbm',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'totSellAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'unsettledSellQty',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'unsettledSellWt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'unsettledSellCbm',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'unsettledSellAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'odrKndNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:';text-align:left;',id:'column100',value:'소계',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column98',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column95',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column94',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column92',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column91',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column89',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column88',value:'',displayMode:'label',expression:'sum("totQty")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column87',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum("totWt")',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column86',value:'',displayMode:'label',expression:'sum("totCbm")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column85',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum("totSellAmt")',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column84',value:'',displayMode:'label',expression:'sum("unsettledSellQty")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column83',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum("unsettledSellWt")',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column82',value:'',displayMode:'label',expression:'sum("unsettledSellCbm")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column81',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum("unsettledSellAmt")',dataType:'number',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum("totQty")',dataType:'number',displayFormat:'#,##0',id:'column45',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum("totWt")',dataType:'number',displayFormat:'#,##0',id:'column42',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum("totCbm")',dataType:'number',displayFormat:'#,##0',id:'column33',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',expression:'sum("totSellAmt")',dataType:'number',displayFormat:'#,##0',id:'column36',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum("unsettledSellQty")',dataType:'number',displayFormat:'#,##0',id:'column39',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum("unsettledSellWt")',dataType:'number',displayFormat:'#,##0',style:'',id:'column60',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum("unsettledSellCbm")',dataType:'number',displayFormat:'#,##0',style:'',id:'column54',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum("unsettledSellAmt")',dataType:'number',displayFormat:'#,##0',style:'',id:'column57',value:'',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})