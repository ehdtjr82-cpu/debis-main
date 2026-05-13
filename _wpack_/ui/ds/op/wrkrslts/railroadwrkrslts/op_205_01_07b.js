/*amd /ui/ds/op/wrkrslts/railroadwrkrslts/op_205_01_07b.xml 33794 df1384a3fede934c6f5af0c8f2a2dc7afac4a25154d03f1d66a77cb98df0f5b4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_railroadResults',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_railroadResults_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dptDt',name:'운송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStn',name:'출발역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStn',name:'도착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adminfrtcarYn',name:'요율구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSiz',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmpty',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dbQty',name:'동부수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dbUnit',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dbAmt',name:'동부금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'railQty',name:'철도수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'chUnit',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'railAmt',name:'철도금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'diffQty',name:'차이수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'diffAmt',name:'차이금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'확정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnPicId',name:'담당자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnPicNm',name:'담당자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_railroadSumResults',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dptStn',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStn',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adminfrtcarYn',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSiz',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmpty',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dbQty',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dbAmt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railQty',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railAmt',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'diffQty',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'diffAmt',name:'name11',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_qryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDtHh',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvDtHh',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'frtCarClsCd',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.railroadwrkrslts.RetrieveRailroadFareConfirmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_qryCondition","key":"IN_DS1"},{"id":"ds_railroadResults","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_railroadResults","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve1',action:'/ds.op.wrkrslts.railroadwrkrslts.RetrieveRailroadFareConfirmSummaryCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_qryCondition","key":"IN_DS1"},{"id":"ds_railroadSumResults","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_railroadSumResults","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve1_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_regist',action:'/ds.op.wrkrslts.railroadwrkrslts.RegistRailroadFareConfirmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_railroadResults","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_regist_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP215",
    compID: "lc_frtCarClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, function () {
    lc_frtCarClsCd.addItem("전체", "", null, 0);
    lc_frtCarClsCd.setSelectedIndex(0);
  });
};
scwin.onUdcCompleted = function () {
  scwin.f_defaultValue();
  txt_dptWrkPlNm.focus();
};

//-------------------------------------------------------------------------
// function name : f_defaultValue
// function desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  ed_dptDtHh.setValue(scwin.strCurDate);
  ed_arvDtHh.setValue(scwin.strCurDate);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfIsAfterDate($p, ed_dptDtHh.getValue(), ed_arvDtHh.getValue()))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_048, ["작업일자 From", "작업일자 To"]);
    ed_dptDtHh.focus();
    return false;
  }
  if (!(await scwin.f_reqFieldChk())) return false;
  $c.sbm.execute($p, sbm_retrieve);
  gr_railroadResults.setColumnReadOnly("railQty", true);
  gr_railroadResults.setColumnReadOnly("railAmt", true);
  gr_railroadResults.setColumnReadOnly("dcsnDt", true);
  gr_railroadResults.setColumnReadOnly("dcsnPicId", true);
  gr_railroadResults.setColumnReadOnly("dcsnPicNm", true);
  $c.gus.cfEnableAllBtn($p);
};

//-------------------------------------------------------------------------
// 저장버튼 처리 
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_railroadResults.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["변경사항"]);
    return;
  }
  let chk = await $c.gus.cfValidate($p, [gr_railroadResults], null, true);
  if (!chk) return false;
  let chk2 = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (chk2) {
    $c.sbm.execute($p, sbm_regist);
  }
  ;
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = async function () {
  if (ds_railroadResults.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
    return;
  }
  gr_railroadResults.setColumnReadOnly("railQty", false);
  gr_railroadResults.setColumnReadOnly("railAmt", false);
  gr_railroadResults.setColumnReadOnly("dcsnDt", false);
  gr_railroadResults.setColumnReadOnly("dcsnPicId", false);
  gr_railroadResults.setColumnReadOnly("dcsnPicNm", false);
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableBtn($p, [btn_edit]);
};

//-------------------------------------------------------------------------
// 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_railroadResultsExcel = function () {
  let options = {
    fileName: "기간별 컨테이너 철송료 확인" + ".xlsx",
    sheetName: "일별철송료",
    colMerge: true
  };
  $c.data.downloadGridViewExcel($p, gr_railroadResults, options);
};

//-------------------------------------------------------------------------
// function name : scwin.f_reqFieldChk
// function desc : 필수항목 check
//-------------------------------------------------------------------------
scwin.f_reqFieldChk = async function () {
  if (ed_dptDtHh.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["출발일자 From"]);
    return false;
  }
  if (ed_arvDtHh.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["도착일자 To"]);
    return false;
  }
  if (!(await $c.gus.cfValidate($p, [ed_dptDtHh, ed_arvDtHh]))) {
    return false;
  }
  return true;
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

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      udc_comCodeDptWrkPl.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, txt_dptWrkPlCd, txt_dptWrkPlNm);
      }, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "출발역조회,출발역명코드,출발역명");
      break;
    case 2:
      udc_comCodeArvWrkPl.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, txt_arvWrkPlCd, txt_arvWrkPlNm);
      }, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "도착역명조회,도착역명코드,도착역명");
      break;
    case 3:
      udc_comCode_Grid.cfCommonPopUp(function (rtnList) {
        if (rtnList != null && rtnList[0] != "N/A") {
          ds_railroadResults.setCellData(ds_railroadResults.getRowPosition(), "dcsnPicId", rtnList[0]);
          ds_railroadResults.setCellData(ds_railroadResults.getRowPosition(), "dcsnPicNm", rtnList[1]);
        }
      }, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
  }
};

//-------------------------------------------------------------------------
// 조회 조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [txt_dptWrkPlCd, txt_arvWrkPlCd, txt_dptWrkPlNm, txt_arvWrkPlNm]);
  scwin.f_defaultValue();
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let cnt = ds_railroadResults.getRowCount();
  if (cnt == 0) {
    $c.sbm.execute($p, sbm_retrieve1);
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  } else if (cnt > 0) {
    $c.sbm.execute($p, sbm_retrieve1);
  }
  totalRows1.setValue(cnt);
};
scwin.sbm_retrieve1_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows2.setValue(ds_railroadSumResults.getRowCount());
};
scwin.sbm_regist_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.gr_railroadResults_ontextimageclick = function (rowIndex, columnIndex) {
  let colId = this.getColumnID(columnIndex);
  if (colId == "dcsnPicNm") {
    scwin.f_openCommonPopUp(3, "", ds_railroadResults.getCellData(rowIndex, "dcsnPicNm"), "F", "F");
  }
};
scwin.gr_railroadResults_onviewchange = function (info) {
  let rowIndex = info.rowIndex;
  let columnIndex = info.colIndex;
  let colId = this.getColumnID(columnIndex);
  let rowJson = ds_railroadResults.getRowJSON(rowIndex);
  if (colId == "dcsnPicNm") {
    scwin.f_openCommonPopUp(3, "", ds_railroadResults.getCellData(rowIndex, "dcsnPicNm"), "T", "T");
  } else if (colId == "railQty") {
    ds_railroadResults.setCellData(rowIndex, "diffQty", Number(rowJson.dbQty) - Number(rowJson.railQty));
  } else if (colId == "railAmt") {
    if (rowJson.cntrSiz == "ZZ") {
      ds_railroadResults.setCellData(rowIndex, "diffAmt", "");
    } else {
      ds_railroadResults.setCellData(rowIndex, "diffAmt", "0");
    }
  }
};
scwin.udc_comCodeDptWrkPl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_dptWrkPlCd, txt_dptWrkPlNm, 1, true);
};
scwin.udc_comCodeDptWrkPl_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_dptWrkPlNm, txt_dptWrkPlCd, 1, false);
};
scwin.udc_comCodeDptWrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, txt_dptWrkPlCd.getValue(), txt_dptWrkPlNm.getValue(), "T", "T");
};
scwin.udc_comCodeArvWrkPl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_arvWrkPlCd, txt_arvWrkPlNm, 2, true);
};
scwin.udc_comCodeArvWrkPl_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_arvWrkPlNm, txt_arvWrkPlCd, 2, false);
};
scwin.udc_comCodeArvWrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, txt_arvWrkPlCd.getValue(), txt_arvWrkPlNm.getValue(), "T", "T");
};
scwin.customFormatter1 = function (data, formattedData, rowIndex, colIndex) {
  let colId = this.getColumnID(colIndex);
  let rowJson = ds_railroadResults.getRowJSON(rowIndex);
  if (colId == "cntrSiz") {
    return data == "ZZ" ? "소계" : data;
  } else if (colId == "fullEmpty") {
    return rowJson.cntrSiz == "ZZ" ? "" : data;
  } else if (colId == "diffQty") {
    return $c.num.formatNumber($p, rowJson.dbQty - rowJson.railQty);
  } else if (colId == "diffAmt") {
    return rowJson.cntrSiz == "ZZ" ? "" : 0;
  }
};
scwin.customFormatter2 = function (data, formattedData, rowIndex, colIndex) {
  let colId = this.getColumnID(colIndex);
  let rowJson = ds_railroadSumResults.getRowJSON(rowIndex);
  if (colId == "cntrSiz") {
    return data == "ZZ" ? "소계" : data;
  } else if (colId == "fullEmpty") {
    return rowJson.cntrSiz == "ZZ" ? "" : data;
  } else if (colId == "diffAmt") {
    return rowJson.cntrSiz == "ZZ" ? formattedData : 0;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:textbox',A:{style:'',id:'textBox01',label:'운송기간 ',class:'req'}},{T:1,N:'xf:input',A:{style:'width:1px;height:21px;border:none;background:transparent;outline:none;',id:'inputFocus'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td',id:''},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'dma_qryCondition',refEdDt:'arvDtHh',refStDt:'dptDtHh',style:'',edFromId:'ed_dptDtHh',objTypeFrom:'data',objTypeTo:'data',edToId:'ed_arvDtHh',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'작업시간From',titleTo:'작업시간To'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_comCodeDptWrkPl','ev:onblurCodeEvent':'scwin.udc_comCodeDptWrkPl_onblurCodeEvent',codeId:'txt_dptWrkPlCd',nameId:'txt_dptWrkPlNm',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9ㄱ-힣',refDataCollection:'dma_qryCondition',code:'dptWrkPlCd',selectID:'retrieveTrainWorkPlace','ev:onclickEvent':'scwin.udc_comCodeDptWrkPl_onclickEvent','ev:onblurNameEvent':'scwin.udc_comCodeDptWrkPl_onblurNameEvent',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',nameId:'txt_arvWrkPlNm',id:'udc_comCodeArvWrkPl',codeId:'txt_arvWrkPlCd',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9ㄱ-힣',refDataCollection:'dma_qryCondition',code:'arvWrkPlCd','ev:onclickEvent':'scwin.udc_comCodeArvWrkPl_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeArvWrkPl_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_comCodeArvWrkPl_onblurNameEvent',selectID:'retrieveTrainWorkPlace',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요율구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_frtCarClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',ref:'data:dma_qryCondition.frtCarClsCd',title:'요율구분'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'grp_group2',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'일별 철송료 확인',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_railroadResults',gridUpYn:'N',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',templateYn:'N',gridDownFn:'scwin.f_railroadResultsExcel',gridDownUserAuth:'X',id:'grd_top'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_railroadResults',style:'',autoFit:'allColumn',id:'gr_railroadResults',visibleRowNum:'5',class:'wq_gvw',columnMove:'true','ev:ontextimageclick':'scwin.gr_railroadResults_ontextimageclick',dataName:'일별철송료',validFeatures:'ignoreStatus=no',validExp:'dcsnDt:확정일자:no:date=YYYYMMDD','ev:onviewchange':'scwin.gr_railroadResults_onviewchange',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column1',value:'운송일자',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column17',value:'출발역',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column15',value:'도착역',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',hidden:'true',width:'70',inputType:'text',id:'column31',value:'요율구분',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'2',width:'140',inputType:'text',id:'column13',value:'구분',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'2',width:'140',inputType:'text',id:'column9',value:'동부',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'2',width:'140',inputType:'text',id:'column5',value:'철도공사',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'2',width:'140',inputType:'text',id:'column19',value:'차이',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'3',width:'210',inputType:'text',id:'column34',value:'확정',displayMode:'label',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',value:'규격',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column26',value:'F/E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column24',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',id:'column23',value:'수량',class:'txt-blue',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column22',value:'금액',class:'txt-blue',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column44',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',id:'column35',value:'확정일자',class:'txt-blue',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column38',value:'담당자ID',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',id:'column41',value:'담당자',class:'txt-blue',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptDt',displayMode:'label',colMerge:'true',displayFormat:'####/##/##',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptStn',displayMode:'label',colMerge:'true',upperColumn:'dptDt',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvStn',displayMode:'label',colMerge:'true',upperColumn:'dptStn',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adminfrtcarYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',id:'cntrSiz',displayMode:'label',customFormatter:'scwin.customFormatter1',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fullEmpty',displayMode:'label',customFormatter:'scwin.customFormatter1',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dbQty',displayMode:'label',dataType:'number',displayFormat:'#,##0',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dbAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'railQty',displayMode:'label',dataType:'number',displayFormat:'#,##0',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'railAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'diffQty',displayMode:'label',dataType:'number',displayFormat:'#,##0',excelCellType:'number',customFormatter:'scwin.customFormatter1',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'diffAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number',customFormatter:'scwin.customFormatter1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'calendar',id:'dcsnDt',displayMode:'label',maxLength:'8',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dcsnPicId',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'dcsnPicNm',displayMode:'label',viewType:'default',editModeEvent:'onclick',editModeEventIcon:'onclick',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'grp_group4',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'기간별 합계 ',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group3',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_railroadSumResults',style:'',autoFit:'allColumn',id:'gr_railroadSumResults',visibleRowNum:'5',class:'wq_gvw',dataName:'기간별합계',validFeatures:'ignoreStatus=no',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column1',value:'출발역',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'도착역',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'요율구분',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column15',value:'구분',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column11',value:'동부',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column3',value:'철도공사',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column7',value:'차이',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column28',value:'규격',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'F/E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column26',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dptStn',value:'',displayMode:'label',colMerge:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvStn',value:'',displayMode:'label',colMerge:'true',upperColumn:'dptStn',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'adminfrtcarYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrSiz',value:'',displayMode:'label',customFormatter:'scwin.customFormatter2',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'fullEmpty',value:'',displayMode:'label',customFormatter:'scwin.customFormatter2',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dbQty',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dbAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'railQty',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'railAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'diffQty',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'diffAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number',customFormatter:'scwin.customFormatter2'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column39',value:'',displayMode:'label',displayFormat:'#,###',expression:'SUM(\'dbQty\')',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column38',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'SUM(\'dbAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column37',value:'',displayMode:'label',displayFormat:'#,###',expression:'SUM(\'railQty\')',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column36',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'SUM(\'railAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column35',value:'',displayMode:'label',displayFormat:'#,###',expression:'SUM(\'diffQty\')',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column34',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'SUM(\'diffAmt\')',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_edit',style:'',type:'button','ev:onclick':'scwin.f_Update',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveEmpInfo',codeId:'udc_comCodeCd',popupTitle:'',nameId:'udc_comCodeNm',style:'width:100%; height:26px;visibility:hidden;display: none;',id:'udc_comCode_Grid'}}]}]}]}]}]}]}]})