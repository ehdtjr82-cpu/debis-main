/*amd /ui/ds/op/wrkrslts/yardwrkrslts/op_302_01_12b.xml 31285 f96e21adcef984f25a8d197ee0c3f766c0fe868a25d387c4432781150f50ac29 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dataMap1'},E:[{T:1,N:'w2:keyInfo'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_inoutCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arrvlportFromDt',name:'입항일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arrvlportToDt',name:'입항일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinoutDtmFrom',name:'반출입일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinoutDtmTo',name:'반출입일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryClsCd',name:'운송구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dealingYn',name:'처리구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'conBulkCls',name:'컨테이너벌크구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fullEmptyCls',name:'FULL/EMPTY구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_crryInoutList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chkFlag',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinDt',name:'반입일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutDt',name:'반출일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutPatternCd',name:'반출입유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomLineCd',name:'당사LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutBasisNo',name:'반출입근거번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinReplyStsCd',name:'반입상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutReplyStsCd',name:'반출상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inCnt',name:'입고갯수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inWt',name:'반입중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outCnt',name:'출고갯수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outWt',name:'출고중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrowDt',name:'경과일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULL/EMPTY구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_blSummaryList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcCd',name:'당사하선장소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrCnt',name:'컨테이너개수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinCnt',name:'반입수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutCnt',name:'반출수량',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveInoutList',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveContainerCustomCrryInoutInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_inoutCondition","key":"IN_DS1"},{"id":"ds_crryInoutList","key":"OUT_DS1"},{"id":"ds_blSummaryList","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_crryInoutList","key":"OUT_DS1"},{"id":"ds_blSummaryList","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveInoutList_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 현재일자
scwin.toDay = $c.date.getServerDateTime($p, "yyyyMMdd"); //현재일자
scwin.v_flag = "0";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP247",
    compID: "acb_conBulkCls"
  } //컨테이너/벌크 구분
  ];
  $c.data.setCommonCode($p, codeOptions);
  grp_cntrDetail.hide();
};
scwin.ondataload = function () {
  acb_conBulkCls.setValue("C");
  ed_fromDate.setValue(scwin.toDay);
  ed_toDate.setValue(scwin.toDay);

  //테스트 데이터
  // ds_inoutCondition.set("wrkPlCd", "6P16");
  // ds_inoutCondition.set("arrvlportFromDt", "20250101");
  // ds_inoutCondition.set("arrvlportToDt", "20251124");
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
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
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 하선장소 팝업
      udc_dsmbrkPlcCd.setSelectId("retrieveMcomDsmbrk"); // XML상의 SELECT ID
      scwin.udc_dsmbrkPlcCd_callBackFunc;
      udc_dsmbrkPlcCd.cfCommonPopUp(scwin.udc_dsmbrkPlcCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "하선장소,하선장소코드,하선장소명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

//-------------------------------------------------------------------------
// 하선장소별 반입/반출 진행현황 조회
//-------------------------------------------------------------------------
scwin.f_qeryList = function () {
  if (!$c.gus.cfValidate($p, [ed_fromDate, ed_toDate])) {
    return;
  }
  if (!$c.gus.cfValidate($p, ed_fromDate) || !$c.gus.cfValidate($p, ed_toDate)) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_fromDate.getValue(), ed_toDate.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_fromDate.focus();
    return;
  }
  if (ed_fromDt.getValue() != "" && ed_toDt.getValue() != "") {
    if (!$c.gus.cfValidate($p, [ed_fromDt, ed_toDt])) {
      return;
    }
    if (!$c.gus.cfValidate($p, ed_fromDt) || !$c.gus.cfValidate($p, ed_toDt)) {
      return;
    }
    if (!$c.gus.cfIsAfterDate($p, ed_fromDt.getValue(), ed_toDt.getValue())) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
      ed_fromDt.focus();
      return;
    }
  }
  if (ed_fromDt.getValue().trim() != "" && ed_toDt.getValue().trim() == "" || ed_fromDt.getValue().trim() == "" && ed_toDt.getValue().trim() != "") {
    if (ed_fromDt.getValue().trim() == "") {
      $c.win.alert($p, "처리시작일자를 입력하십시오");
      ed_fromDt.focus();
      return;
    }
    if (ed_toDt.getValue().trim() == "") {
      $c.win.alert($p, "처리종료일자를 입력하십시오");
      ed_toDt.focus();
      return;
    }
  }
  if (ed_dsmbrkPlcCd.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["하선장소"]);
    ed_dsmbrkPlcCd.focus();
    return;
  }
  ds_inoutCondition.set("cargoClsCd", acb_cargoCls.getValue());
  ds_inoutCondition.set("crryClsCd", acb_crryInOut.getValue());
  ds_inoutCondition.set("dealingYn", acb_dealingYn.getValue());
  ds_inoutCondition.set("crryinoutDtmFrom", ed_fromDt.getValue());
  ds_inoutCondition.set("crryinoutDtmTo", ed_toDt.getValue());
  $c.sbm.execute($p, sbm_RetrieveInoutList);
};

//-------------------------------------------------------------------------
// 컨테이너 상세정보 조회 버튼 클릭시
//-------------------------------------------------------------------------
scwin.f_RetrieveCNTRDetail = function () {
  if (scwin.v_flag == "0") {
    grp_cntrDetail.show("");
    scwin.v_flag = "1";
  } else {
    grp_cntrDetail.hide();
    scwin.v_flag = "0";
  }
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_RetrieveInoutList_submitdone = function (e) {
  tbx_totalRows1.setValue(ds_crryInoutList.getRowCount());
  tbx_totalRows2.setValue(ds_blSummaryList.getRowCount());
  if (ds_crryInoutList.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }
  if (acb_conBulkCls.getValue() == "C") {
    gr_crryInoutList.setColumnVisible("inCnt", false);
    gr_crryInoutList.setColumnVisible("inWt", false);
    gr_crryInoutList.setColumnVisible("outCnt", false);
    gr_crryInoutList.setColumnVisible("outWt", false);
  } else if (acb_conBulkCls.getValue() == "B") {
    gr_crryInoutList.setColumnVisible("inCnt", true);
    gr_crryInoutList.setColumnVisible("inWt", true);
    gr_crryInoutList.setColumnVisible("outCnt", true);
    gr_crryInoutList.setColumnVisible("outWt", true);
  }
  grp_cntrDetail.hide();
};

//-------------------------------------------------------------------------
// 그리드 경과일 customFormatter
//-------------------------------------------------------------------------
scwin.arrowDtExp = function (data, formatData, rowIdx, colIdx) {
  if (data >= 3) {
    gr_crryInoutList.setCellStyle(rowIdx, colIdx, "color", "red");
  } else {
    gr_crryInoutList.setCellStyle(rowIdx, colIdx, "color", "black");
  }
  return $c.gus.decode($p, data, 0, "", data);
};

//-------------------------------------------------------------------------
// 그리드 반입 displayFormatter
//-------------------------------------------------------------------------
scwin.crryinReplyStsCdExp = function (data) {
  return $c.gus.decode($p, data, "A", "접수", "E", "오류");
};

//-------------------------------------------------------------------------
// 그리드 반출 displayFormatter
//-------------------------------------------------------------------------
scwin.crryoutReplyStsCdExp = function (data) {
  return $c.gus.decode($p, data, "A", "접수", "E", "오류");
};
scwin.ed_mrn_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
  if (ed_mrn.getValue().length == 11) {
    ed_msn.focus();
    return;
  }
};
scwin.ed_msn_onkeyup = function (e) {
  if (ed_msn.getValue().length == 4) {
    ed_hsn.focus();
    return;
  }
};

//-------------------------------------------------------------------------
// 하선장소 UDC START
//-------------------------------------------------------------------------
scwin.udc_dsmbrkPlcCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_dsmbrkPlcCd.getValue(), ed_dsmbrkPlcNm.getValue(), 'F', 'T');
};
scwin.udc_dsmbrkPlcCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_dsmbrkPlcCd, ed_dsmbrkPlcNm, 1);
};
scwin.udc_dsmbrkPlcCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_dsmbrkPlcNm, ed_dsmbrkPlcCd, 1, false);
};
scwin.udc_dsmbrkPlcCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_dsmbrkPlcCd, ed_dsmbrkPlcNm);
};
//-------------------------------------------------------------------------
// 하선장소 UDC END
//-------------------------------------------------------------------------
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'하선장소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_dsmbrkPlcCd',maxlengthCode:'6',nameId:'ed_dsmbrkPlcNm',btnId:'btn_dsmbrkPlcCd',id:'udc_dsmbrkPlcCd','ev:onclickEvent':'scwin.udc_dsmbrkPlcCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dsmbrkPlcCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_dsmbrkPlcCd_onviewchangeNameEvent',refDataCollection:'ds_inoutCondition',code:'wrkPlCd',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입항일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_inoutCondition',refEdDt:'arrvlportToDt',refStDt:'arrvlportFromDt',style:'',edFromId:'ed_fromDate',edToId:'ed_toDate'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:100px;',id:'ed_mrn',placeholder:'',class:'',maxlength:'11',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.ed_mrn_onkeyup',ref:'data:ds_inoutCondition.mrn'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'-',class:''}},{T:1,N:'xf:input',A:{style:'width:50px;',id:'ed_msn',placeholder:'',class:'',allowChar:'0-9',maxlength:'4','ev:onkeyup':'scwin.ed_msn_onkeyup',ref:'data:ds_inoutCondition.msn'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'-',class:''}},{T:1,N:'xf:input',A:{style:'width:50px;',id:'ed_hsn',placeholder:'',class:'',maxlength:'4',ref:'data:ds_inoutCondition.hsn',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물 구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cargoCls',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'일반'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/S'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'T'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반출입',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_crryInOut',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'반입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'반출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'처리일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_fromDt',edToId:'ed_toDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'처리구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_dealingYn',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미처리'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'처리'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너/벌크 구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_conBulkCls',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_inoutCondition.conBulkCls'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'F/E',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_fullEmptyCls',search:'start',style:'width:120px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:ds_inoutCondition.fullEmptyCls'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'FULL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'EMPTY'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_qeryList',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'하선장소별 반입/반출 진행현황',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"하선장소별반입반출.xlsx","sheetName":"하선장소별반입반출진행현황","type":"4+8+16"}',grp:'grd_section1',style:'',gridID:'gr_crryInoutList',templateYn:'N',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_crryInoutList',style:'',id:'gr_crryInoutList',visibleRowNum:'14',autoFit:'allColumn',class:'wq_gvw',autoFitMinWidth:'1700',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column1',value:'선택',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column17',value:'선명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column15',value:'MRN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column13',value:'MSN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column11',value:'HSN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',value:'컨테이너번호/<br/>품목명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column3',value:'경과일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'반입일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'반출일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'반입개수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'반입중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'반출개수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'반출중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',value:'구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',value:'F/E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'유형',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',value:'반입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',value:'반출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column43',value:'선사',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column41',value:'승인번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'chkFlag',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'110',inputType:'text',id:'vsslNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'90',inputType:'text',id:'mrn',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'msn',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'hsn',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',id:'cntrNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'arrowDt',displayMode:'label',readOnly:'true',customFormatter:'scwin.arrowDtExp',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crryinDt',displayMode:'label',readOnly:'true',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crryoutDt',displayMode:'label',readOnly:'true',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',id:'inCnt',displayMode:'label',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',id:'inWt',displayMode:'label',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',id:'outCnt',displayMode:'label',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',id:'outWt',displayMode:'label',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cargoClsCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fullEmptyClsCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crryinoutPatternCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crryinReplyStsCd',displayMode:'label',readOnly:'true',displayFormatter:'scwin.crryinReplyStsCdExp'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crryoutReplyStsCd',displayMode:'label',readOnly:'true',displayFormatter:'scwin.crryoutReplyStsCdExp'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'mcomLineCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'crryinoutBasisNo',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_retrieveCNTRDetail',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_RetrieveCNTRDetail'},E:[{T:1,N:'xf:label',E:[{T:3,text:'B/L Summary'}]}]}]}]},{T:1,N:'xf:group',A:{id:'grp_cntrDetail',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'컨테이너 반입/반출 현황',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_blSummaryList',style:'',autoFit:'allColumn',id:'gr_blSummaryList',visibleRowNum:'4',class:'wq_gvw',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column1',value:'하선장소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column17',value:'MRN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column15',value:'MSN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column13',value:'HSN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column11',value:'화물구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column9',value:'컨테이너수량/품목개수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column3',value:'반입신고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column5',value:'반출신고',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'mcomDsmbrkPlcCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'mrn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'msn',displayMode:'label',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'hsn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'cargoClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'cntrCnt',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'crryinCnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'crryoutCnt',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]}]}]}]}]})