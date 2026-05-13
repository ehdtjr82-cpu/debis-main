/*amd /ui/ds/op/wrkrslts/yardwrkrslts/op_302_01_18b.xml 19404 81d51ec3c2770bfd56f3c7dc6efaebbfe5c072f1464226408ccd282e2830c3ea */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieve',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sndClsCdChk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutDeclarNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoMgntNo',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'divsCrryinoutDeg',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutPatternCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutCnt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutWt',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDt',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsCd',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutDtm',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name20',id:'appCls'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name21',id:'cntrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name22',id:'crryinoutUppercd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name23',id:'flag'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name24',id:'ioNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name25',id:'mainMainAfCont'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name26',id:'mainMainAppDeg'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name27',id:'mainMainBfCont'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name28',id:'mainMainItem'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name29',id:'rowStatus'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name30',id:'sndHh'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name31',id:'wrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name32',id:'wrkPlClsCd'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msn',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hsn',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinDt',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name6',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveImportCargoCarryInAndCarryOutSendCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_retrieve","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieve","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.yardwrkrslts.SaveImportCargoCarryInAndCarryOutSendCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_retrieve","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCrryinDt = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.vCrryinDt = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
};
scwin.onUdcCompleted = function () {
  ed_crryinDt.setValue(scwin.vCrryinDt);
};

//-------------------------------------------------------------------------
// 조회
//------------------------------------------------------------------------- 
scwin.f_Retrieve = async function () {
  if (ed_wrkPlCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작업장 코드"]);
    ed_wrkPlCd.focus();
    return;
  }
  let chk1 = await $c.gus.cfValidate($p, [ed_crryinDt], null, true);
  if (!chk1) {
    return;
  }

  // 오더번호가 입력된 경우 오더번호 형식 확인
  if (ed_odrNo.getValue().length > 0) {
    let chk2 = await $c.gus.cfValidate($p, [ed_odrNo], null, true);
    if (!chk2) return false;
  }
  dma_condition.set("msn", ed_msn.getValue() == "" ? -1 : ed_msn.getValue());
  dma_condition.set("hsn", ed_hsn.getValue() == "" ? -1 : ed_hsn.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

// 저장
scwin.f_Snd = async function () {
  let msg = await $c.win.confirm($p, "전송하시겠습니까?");
  if (msg) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 작업장 POP UP
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 작업장 팝업
  udc_comCodeWrkPl.cfCommonPopUp(function (rtnList) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, txt_wrkPlNm);
  }, pCode, pName, "T", null, null, null, null, null, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명");
};

//-------------------------------------------------------------------------
// 조회 조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [ed_wrkPlCd, txt_wrkPlNm, ed_mrn, ed_msn, ed_hsn, ed_odrNo]);
  ed_crryinDt.setValue(scwin.vCrryinDt);
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
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");
  } else {
    scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    return;
  }
  totalRows.setValue(ds_retrieve.getRowCount());
  if (ds_retrieve.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }
  for (let i = 0; i < ds_retrieve.getRowCount(); i++) {
    let rowJson = ds_retrieve.getRowJSON(i);
    let full = rowJson.sndDt; // 원본: yyyyMMddHHmmss

    if (rowJson.sndClsCd != "Y") {
      gr_workImplement.setCellColor(i, "sndClsCd", "red");
    }
    if (full && full.length >= 8) {
      let dateOnly = full.substring(0, 8); // 앞 8자리만 추출 (yyyyMMdd)
      ds_retrieve.setCellData(i, "sndDt", dateOnly); // 그대로 덮어쓰기 or 새로운 컬럼 넣기
    }
  }
  ds_retrieve.initRowStatus();
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    return;
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.udc_comCodeWrkPl_onblurCodeEvent = function (e) {
  txt_wrkPlNm.setDisabled(true);
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, txt_wrkPlNm, 1);
};
scwin.udc_comCodeWrkPl_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_wrkPlNm, ed_wrkPlCd, 1, false);
};
scwin.udc_comCodeWrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, "", "", 'T', 'T');
};

// 오더번호 대문자
scwin.ed_odrNo_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.displayFm = function (data) {
  return $c.gus.decode($p, data, "Y", "전송", "미전송");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_wrkPlCd',nameId:'txt_wrkPlNm',popupID:'',popupTitle:'',selectID:'retrieveWrkPlInfo',style:'',id:'udc_comCodeWrkPl',mandatoryCode:'true',objTypeName:'key',refDataCollection:'dma_condition',code:'wrkPlCd',UpperFlagCode:'1',maxlengthCode:'6','ev:onblurCodeEvent':'scwin.udc_comCodeWrkPl_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_comCodeWrkPl_onblurNameEvent','ev:onclickEvent':'scwin.udc_comCodeWrkPl_onclickEvent',allowCharCode:'a-zA-Z0-9',validExpCode:'작업장 코드:yes:',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반출입일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_crryinDt',style:'',ref:'data:dma_condition.crryinDt',mandatory:'true',validExp:'반출일자:yes:length=8'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_mrn',style:'',objType:'Data',maxlength:'11',ref:'data:dma_condition.mrn',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'-',style:''}},{T:1,N:'xf:input',A:{class:' w50',id:'ed_msn',style:'',objType:'Data',maxlength:'4',ref:'',allowChar:'0-9'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'-',style:''}},{T:1,N:'xf:input',A:{class:' w50',id:'ed_hsn',style:'',objType:'Data',maxlength:'4',ref:'',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_odrNo',style:'',objType:'data',mandatory:'true',maxlength:'13','ev:onkeyup':'scwin.ed_odrNo_onkeyup',ref:'data:dma_condition.odrNo',allowChar:'a-zA-Z0-9',title:'오더번호',validExp:'오더번호:yes:length=13'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'수입화물 반출입 전송현황',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'group2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_retrieve',id:'gr_workImplement',style:'',visibleRowNum:'16',visibleRowNumFix:'true',readOnly:'true',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'선택',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'오더번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'입출고구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column53',value:'반출입신고번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column51',value:'화물관리번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column49',value:'화물관리번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column47',value:'화물관리번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column45',value:'화물관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'차수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'화주명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'입항일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'모선명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'반입유형',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'B/L번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'출고갯수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'출고중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'전송일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'전송구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'반출입일자',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'sndClsCdChk',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'odrNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crryinoutClsCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crryinoutDeclarNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'mrn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'msn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'hsn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cargoMgntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'divsCrryinoutDeg',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bilgClntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'arrvlportDt',value:'',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vsslCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crryinoutPatternCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'blNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crryinoutCnt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crryinoutWt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0.##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sndDt',value:'',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sndClsCd',value:'',displayMode:'label',displayFormatter:'scwin.displayFm'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crryinoutDtm',value:'',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Snd'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'EDI 전송'}]}]}]}]}]}]}]}]}]})