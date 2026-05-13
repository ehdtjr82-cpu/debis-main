/*amd /ui/ac/fi/stdinfomgnt/fi_100_14_01b.xml 21478 60968d524a484388836b8d25d08a5285434a09a4d59cac58cad897acc7eb98c5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'quitYn',name:'폐업여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'frDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDt',name:'적용일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_List1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnCls',name:'과세유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsAdptDt',name:'과세유형 적용일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'quitYn',name:'폐업여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'quitDt',name:'폐업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'국세청 적용일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seekYn',name:'국세청 조회여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remark',name:'비고',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.stdinfomgnt.RetrieveOutOfBusinessListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_List1","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_List1","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.stdinfomgnt.CUDOutOfBusinessListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_List1","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = WebSquare.date.getCurrentServerDate();
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;

//-------------------------------------------------------------------------
// G L O B A L   V A R I A B L E S   D E F I N I T I O N
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// function name : scwin.onpageload
// function desc : 화면로딩시
// function Parameter : null 
//-------------------------------------------------------------------------  
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FI069",
    compID: "gr_List1:taxnCls"
  }, {
    grpCd: "FM119",
    compID: "gr_List1:quitYn"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  scwin.f_FieldClear();
  ed_crn.focus();
};

//-------------------------------------------------------------------------
// function name : f_chkOpenPopUp
// function desc : 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
// function Parameter : inObj : 코드값, pairObj : 코드명, isCode : 코드구분(코드, 명칭)
//-------------------------------------------------------------------------
scwin.f_chkOpenPopUp = function (inObj, pairObj, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = inObj.getValue();

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp('', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// function name : f_openCommonPopUp
// function desc : 공통 Popup 처리 : 공통 Popup 을 호출한다.
// function Parameter : pCode : 코드, pName : 코드명, pClose : 창여부, pAllSearch : 전체허용여부
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (pCode, pName, pClose, pAllSearch) {
  // 선언부
  let rtnList; // 공통POP-UP -> 요청화면             
  rtnList = udc_crnInfo3.cfCommonPopUp(scwin.udc_crnInfo3_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null);
  // cfSetReturnValue(rtnList, ed_crn, ed_busiNm);  
};

// ======================
// 콜백 함수들
// ======================
scwin.udc_crnInfo3_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_crn.setValue(rtnList[0]);
    ed_busiNm.setValue(rtnList[1]);
    ed_crn.options.hidVal = rtnList[0];
    ed_busiNm.options.hidVal = rtnList[1];
  } else {
    ed_crn.setValue("");
    ed_busiNm.setValue("");
    ed_crn.options.hidVal = "";
    ed_busiNm.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [ed_frDt, ed_toDt, ed_busiNm, ed_crn]);
  // $c.gus.cfInitHidVal(tbl_search);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// function name : f_downExcelSheet
// function desc : 일용직 부서별 실적 조회 엑셀 다운
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_downExcelSheet = async function (objGrd) {
  if (ds_List1.getRowCount() == 0) {
    $c.win.alert($p, "조회된 내역이 없습니다! 조회 먼저 해주세요.");
    return;
  }
  let fileName = '사업자 휴폐업 현황 목록';
  let sheetTitle = '사업자 휴폐업 현황 목록';
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    await $c.data.downloadGridViewExcel($p, gr_List1, {
      fileName: fileName + ".xlsx",
      sheetName: sheetTitle
    });
  }
};

//-------------------------------------------------------------------------
// function name : f_Undo
// function desc : 취소
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_Undo = function (e) {
  ds_List1.undoRow(ds_List1.getRowPosition());
  // gr_List1.setReadOnly(false);
  $c.gus.cfEnableAllBtn($p);
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  ed_frDt.setValue(scwin.strCurDate);
  ed_toDt.setValue(scwin.strCurDate);
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [tbl_search]))) {
    return;
  }
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 매개변수가 숫자인지 확인하는 함수 
//-------------------------------------------------------------------------
scwin.fCheckIsNumber = function (value) {
  let count = 0;
  let ch;
  for (i = 0; i < value.length; i++) {
    ch = value.charAt(i);
    if (isNaN(ch)) {
      if (ch == ".") {
        count++;
      } else {
        return false;
      }
    }
  }
  if (count > 1) {
    return false;
  } else {
    return true;
  }
  return result;
};

//-------------------------------------------------------------------------
// 매개변수가 유효한 날짜인지 확인 
//-------------------------------------------------------------------------
scwin.fCheckIsDate = function (value) {
  let count = 0;
  let ch;
  let year;
  let month;
  let date;
  if (value.length != 8) {
    return false;
  }
  year = value.substr(0, 4);
  month = value.substr(4, 2);
  date = value.substr(6, 2);
  if (year < 1900 || year > 2200) {
    return false;
  }
  if (month < 0 || month > 12) {
    return false;
  }
  if (date < 0 || date > 31) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// function name : f_Update
// function desc : 수정
// function Parameter : null
//-------------------------------------------------------------------------  
scwin.f_save = function () {
  scwin.f_Update();
};
scwin.f_Update = async function () {
  const modifiedIndexList = ds_List1.getModifiedIndex();
  const modifiedCount = modifiedIndexList.length;
  if (modifiedCount <= 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["데이터"]);
    return;
  }
  if (!(await $c.gus.cfValidate($p, [gr_List1]))) return;
  for (let i = 0; i < ds_List1.getRowCount(); i++) {
    let quitYn = ds_List1.getCellData(i, "quitYn");
    let quitDt = ds_List1.getCellData(i, "quitDt");
    let taxnCls = ds_List1.getCellData(i, "taxnCls");

    // if (modifiedIndexList.includes(i) && $c.gus.cfIsNull(taxnCls)) {
    //     $c.win.alert(`사업자 현황 목록의 ${i + 1}번째 데이터에서 과세유형은(는) 필수 입력 항목입니다.`);

    //     gr_List1.setFocusedCell(i, "taxnCls", false);
    //     return;
    // }

    if (quitYn == 1 && $c.gus.cfIsNull($p, quitDt)) {
      $c.win.alert($p, `${i + 1}번째 사업자번호의 폐업 일자를 입력하십시오.`);
      ds_List1.rowposition = i;
      gr_List1.setFocusedCell(i, "quitDt", false);
      return;
    }
    if (quitYn == 1 && !scwin.fCheckIsDate(quitDt)) {
      $c.win.alert($p, `${i + 1} 번째 폐업일자의 형식이 잘못되었습니다.`);
      gr_List1.setFocusedCell(i, "quitDt", false);
      return;
    }
    if (quitYn == 0 && !$c.gus.cfIsNull($p, quitDt)) {
      $c.win.alert($p, `${i + 1} 번째 사업자는 폐업이 아닙니다.`);
      gr_List1.setFocusedCell(i, "quitDt", false);
      return;
    }
  }
  $c.sbm.execute($p, sbm_save);
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------
scwin.ucd_crnInfo_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(ed_crn.getValue(), ed_busiNm.getValue(), 'F', 'F');
};
scwin.udc_crnInfo3_onblurCodeEvent = function (e) {
  ed_busiNm.setValue("");
  if (ed_crn.getValue() != "") {
    scwin.f_chkOpenPopUp(ed_crn, ed_busiNm, true);
  }
};
scwin.udc_crnInfo3_onblurNameEvent = function (e) {
  ed_crn.setValue("");
  if (ed_busiNm.getValue() != "") {
    scwin.f_chkOpenPopUp(ed_busiNm, ed_crn, false);
  }
};

//서브미션 완료
scwin.sbm_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let lowCnt = ds_List1.getRowCount();
  ds_List1_totalRows.setValue(lowCnt);
  if (lowCnt == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

// grid decode format
scwin.seekYnDisplayFm = function (data) {
  return $c.gus.decode($p, data, "1", "조회", "0", "미조회");
};

// 폐업여부
scwin.gr_List1_onviewchange = function (info) {
  if (info.newValue == "0" && info.colId == "quitYn") {
    ds_List1.setCellData(info.rowIndex, "quitDt", "");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:65px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',style:'',class:'col8',codeId:'ed_crn',mandatoryCode:'false',objTypeCode:'data',nameId:'ed_busiNm',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'10',validExpCode:'사업자번호:no:format=0000000000',objTypeName:'data',selectID:'retrieveCrnInfo3',code:'crn',refDataCollection:'dma_search',popupTitle:'사업자번호조회,사업자번호,사업자명',popupGridHeadTitle:'사업자번호,사업자명','ev:onclickEvent':'scwin.ucd_crnInfo_onclickEvent',btnId:'btn_crn',id:'udc_crnInfo3','ev:onblurCodeEvent':'scwin.udc_crnInfo3_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_crnInfo3_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'dma_search',refEdDt:'toDt',refStDt:'frDt',style:'',mandatory:'true',userAttr2:'',edFromId:'ed_frDt',edToId:'ed_toDt',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'적용일자',titleTo:'적용일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'폐업여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_quitYn',ref:'data:dma_search.quitYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',mandatory:'false',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'사업자 현황 목록',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_List1',gridDownFn:'scwin.f_downExcelSheet'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_List1',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_List1',visibleRowNum:'16',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',validFeatures:'ignoreStatus=no',validExp:'crn:사업자번호:YES, repstNm:사업자명:YES, taxnCls:과세유형:YES, taxnClsAdptDt:과세유형적용일:NO, quitYn:폐업여부:YES, quitDt:폐업일자:NO, adptDt:국세청적용일:NO, seekYn:국세청조회여부:YES ',editModeEvent:'onclick','ev:onviewchange':'scwin.gr_List1_onviewchange',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'15',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',blockSelect:'false',displayMode:'label',value:'사업자번호'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column11',blockSelect:'false',displayMode:'label',value:'사업자명'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column10',blockSelect:'false',displayMode:'label',value:'과세유형',class:'col-type2'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column9',blockSelect:'false',displayMode:'label',value:'과세유형 적용일'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'폐업여부',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'폐업일자',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column15',value:'국세청 적용일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column19',value:'국세청 조회여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'350',inputType:'text',style:'',id:'column21',value:'비고',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'crn',blockSelect:'false',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'repstNm',blockSelect:'false',displayMode:'label',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'select',id:'taxnCls',blockSelect:'false',displayMode:'value delim label',textAlign:'left',allOption:'',ref:'',readOnly:'false',chooseOption:'',mandatory:'true'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'taxnClsAdptDt',blockSelect:'false',displayMode:'label',editFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'quitYn',value:'',displayMode:'value delim label',allOption:'',chooseOption:'',ref:'',textAlign:'left',readOnly:'false',mandatory:'true'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'quitDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'adptDt',value:'',displayMode:'label',editFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'seekYn',value:'',displayMode:'label',displayFormatter:'scwin.seekYnDisplayFm',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'350',inputType:'text',style:'',id:'remark',value:'',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'ds_List1_totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:button',A:{style:'',id:'btn_cancel',label:'취소',class:'btn sm','ev:onclick':'scwin.f_Undo'}}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.f_Update',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})