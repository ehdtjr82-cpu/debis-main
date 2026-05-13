/*amd /AI/op_320_01_01b.xml 31764 16af12eb804fa34833500ec30e78a5a28d8e70a0e365ef7b049f2fbcc62a2176 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_RetrieveInoutIntendCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ioClsCd',name:'입출고구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ioIntendTermFrom',name:'입출고예정기간시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ioIntendTermTo',name:'입출고예정기간종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqMchtCd',name:'요청화주코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rltNo',name:'관련번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ourcoYn',name:'자사여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoClntNo',name:'협력업체거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RetrieveInoutIntendList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ioClsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'comm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'I/O',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioIntendDt',name:'예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioIntendHh',name:'예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsQty',name:'실적수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsWt',name:'실적중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsCbm',name:'실적CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retNo',name:'관련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioIntendNo',name:'입출고예정번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm2',name:'요청화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realClntNm',name:'실화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'출발예정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'도착예정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'특기사항',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RetrieveInoutIntendEquipment',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqBizNm',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCarNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'차종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vechlCnt',name:'대수',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveInoutIntendList',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveInoutIntendInformationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_RetrieveInoutIntendCondition","key":"IN_DS1"},{"id":"ds_RetrieveInoutIntendList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_RetrieveInoutIntendList","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_RetrieveInoutIntendList_submitdone','ev:submiterror':'scwin.sbm_RetrieveInoutIntendList_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveInoutIntendEquipmentList',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveInoutIntendEquipmentCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_RetrieveInoutIntendEquipment","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_RetrieveInoutIntendEquipment","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_RetrieveInoutIntendEquipmentList_submitdone','ev:submiterror':'scwin.sbm_RetrieveInoutIntendEquipmentList_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.hd_chkDptWrkPlCd = "";
scwin.onpageload = function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  const codeOptions = [{
    grpCd: "OP228",
    compID: "co_lc_srchCode1"
  }, {
    grpCd: "OP194",
    compID: "co_lc_srchCode2"
  }, {
    grpCd: "ZZ505",
    compID: "co_lc_srchCode3"
  }, {
    grpCd: "ZZ210",
    compID: "gr_selfInoutList2:eqKndCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  udc_srchDate.setInitDate(scwin.vCurDate, scwin.vCurDate);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.f_FieldClear = function () {
  co_lc_srchCode1.setValue("");
  ed_retrieveClntNo.setValue("");
  txt_retrieveClntNm.setValue("");
  ica_srchFromDate.setValue("");
  ica_srchToDate.setValue("");
  co_lc_srchCode2.setValue("");
  ed_reqMchtCd.setValue("");
  txt_reqMchtNm.setValue("");
  ed_empNo.setValue("");
  txt_empNm.setValue("");
  txt_ordNo.setValue("");
  txt_otherNo.setValue("");
  ed_vsslCd.setValue("");
  txt_vsslNm.setValue("");
  co_lc_srchCode3.setValue("");
  ed_retBizNo.setValue("");
  txt_retBizNm.setValue("");
  co_lc_srchCode1.setFocus();
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");
  } else {
    scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      udc_retrieveClnt.ilCommonPopUp(scwin.callbackWrkPl, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      udc_reqMcht.ilCommonPopUp(scwin.callbackReqMcht, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 3:
      udc_emp.ilCommonPopUp(scwin.callbackComm, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 4:
      udc_vssl.ilCommonPopUp(scwin.callbackVssl, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 5:
      udc_retBiz.ilCommonPopUp(scwin.callbackRetBiz, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
  }
};
scwin.callbackWrkPl = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_retrieveClntNo, txt_retrieveClntNm);
};
scwin.callbackReqMcht = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_reqMchtCd, txt_reqMchtNm);
};
scwin.callbackComm = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_empNo, txt_empNm);
};
scwin.callbackVssl = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_vsslCd, txt_vsslNm);
};
scwin.callbackRetBiz = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_retBizNo, txt_retBizNm);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_qeryList();
};
scwin.f_qeryList = async function () {
  let chk = await $c.gus.cfValidate($p, [ica_srchFromDate, ica_srchToDate]);
  if (!chk) {
    return;
  }
  if (!$c.gus.cfValidate($p, ica_srchFromDate) || !$c.gus.cfValidate($p, ica_srchToDate)) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_srchFromDate.getValue(), ica_srchToDate.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ica_srchFromDate.setFocus();
    return;
  }
  if (ed_retrieveClntNo.getValue() == null || ed_retrieveClntNo.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "작업장을 선택하지 않으셨습니다.");
    ed_retrieveClntNo.setFocus();
    return;
  }
  dma_RetrieveInoutIntendCondition.set("ioClsCd", co_lc_srchCode1.getValue());
  dma_RetrieveInoutIntendCondition.set("wrkPlCd", ed_retrieveClntNo.getValue());
  dma_RetrieveInoutIntendCondition.set("ioIntendTermFrom", ica_srchFromDate.getValue());
  dma_RetrieveInoutIntendCondition.set("ioIntendTermTo", ica_srchToDate.getValue());
  dma_RetrieveInoutIntendCondition.set("impExpClsCd", co_lc_srchCode2.getValue());
  dma_RetrieveInoutIntendCondition.set("reqMchtCd", ed_reqMchtCd.getValue());
  dma_RetrieveInoutIntendCondition.set("commCd", ed_empNo.getValue());
  dma_RetrieveInoutIntendCondition.set("odrNo", txt_ordNo.getValue());
  dma_RetrieveInoutIntendCondition.set("rltNo", txt_otherNo.getValue());
  dma_RetrieveInoutIntendCondition.set("vsslCd", ed_vsslCd.getValue());
  dma_RetrieveInoutIntendCondition.set("ourcoYn", co_lc_srchCode3.getValue());
  dma_RetrieveInoutIntendCondition.set("copCoClntNo", ed_retBizNo.getValue());
  await $c.sbm.execute($p, sbm_RetrieveInoutIntendList);
};
scwin.f_setUnderDraw = function (curRow) {
  // TODO: body 하단 상세정보 영역의 textbox에 id가 부여되지 않아 직접 바인딩 불가. body에 id 부여 후 매핑 필요.
  // 원본 로직: innerHTML로 ds_RetrieveInoutIntendList의 각 컬럼값을 하단 span에 표시
  // curRow는 0-based index
};
scwin.f_InoutIntendEquipmentList = async function (curRow) {
  let ioIntendNo = ds_RetrieveInoutIntendList.getCellData(curRow, "ioIntendNo");
  sbm_RetrieveInoutIntendEquipmentList.action = "/ds.op.wrkrslts.yardwrkrslts.RetrieveInoutIntendEquipmentCMD.do?inoutIntendNumber=" + ioIntendNo;
  await $c.sbm.execute($p, sbm_RetrieveInoutIntendEquipmentList);
};
scwin.f_dateForm = function (sdate, kind) {
  let return_value = "";
  if (sdate == "") {
    return return_value;
  }
  let tYYYY = sdate.substring(0, 4);
  let tMM = sdate.substring(4, 6);
  let tDD = sdate.substring(6, 8);
  if (kind == "A") {
    let tHH = sdate.substring(8, 10);
    let tmm = sdate.substring(10, 12);
    return_value = tYYYY + "/" + tMM + "/" + tDD + " " + tHH + ":" + tmm;
  }
  if (kind == "B") {
    return_value = tYYYY + "/" + tMM + "/" + tDD;
  }
  return return_value;
};
scwin.sbm_RetrieveInoutIntendList_submitdone = async function (e) {
  let rowCnt = ds_RetrieveInoutIntendList.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }
  spa_totalRows.setValue(rowCnt);
};
scwin.sbm_RetrieveInoutIntendList_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_RetrieveInoutIntendEquipmentList_submitdone = async function (e) {
  let rowCnt = ds_RetrieveInoutIntendEquipment.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, "[투입예정차량정보]" + MSG_CM_ERR_003);
  }
};
scwin.sbm_RetrieveInoutIntendEquipmentList_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.gr_selfInoutList_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_InoutIntendEquipmentList(rowIndex);
  scwin.f_setUnderDraw(rowIndex);
};
scwin.udc_retrieveClnt_onblurCode = function () {
  if (ed_retrieveClntNo.getValue() != "") {
    scwin.f_openCommonPopUp(1, ed_retrieveClntNo.getValue().trim(), txt_retrieveClntNm.getValue().trim(), "T", "T");
  }
};
scwin.udc_reqMcht_onblurCode = function () {
  if (ed_reqMchtCd.getValue() != "") {
    scwin.f_openCommonPopUp(2, ed_reqMchtCd.getValue().trim(), txt_reqMchtNm.getValue().trim(), "T", "T");
  }
};
scwin.udc_emp_onblurCode = function () {
  if (ed_empNo.getValue() != "") {
    scwin.f_openCommonPopUp(3, ed_empNo.getValue().trim(), txt_empNm.getValue().trim(), "T", "T");
  }
};
scwin.udc_vssl_onblurCode = function () {
  if (ed_vsslCd.getValue() != "") {
    scwin.f_openCommonPopUp(4, ed_vsslCd.getValue().trim(), txt_vsslNm.getValue().trim(), "T", "T");
  }
};
scwin.udc_retBiz_onblurCode = function () {
  if (ed_retBizNo.getValue() != "") {
    scwin.f_openCommonPopUp(5, ed_retBizNo.getValue().trim(), txt_retBizNm.getValue().trim(), "T", "T");
  }
};
scwin.udc_retrieveClnt_onChangeName = function () {
  scwin.f_chkOpenCommonPopUp(txt_retrieveClntNm, ed_retrieveClntNo, 1, false);
};
scwin.udc_reqMcht_onChangeName = function () {
  scwin.f_chkOpenCommonPopUp(txt_reqMchtNm, ed_reqMchtCd, 2, false);
};
scwin.udc_emp_onChangeName = function () {
  scwin.f_chkOpenCommonPopUp(txt_empNm, ed_empNo, 3, false);
};
scwin.udc_vssl_onChangeName = function () {
  scwin.f_chkOpenCommonPopUp(txt_vsslNm, ed_vsslCd, 4, false);
};
scwin.udc_retBiz_onChangeName = function () {
  scwin.f_chkOpenCommonPopUp(txt_retBizNm, ed_retBizNo, 5, false);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입출고 구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'co_lc_srchCode1',search:'start',style:'width:150px;',submenuSize:'auto',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장 코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_retrieveClnt',codeId:'ed_retrieveClntNo',nameId:'txt_retrieveClntNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입출고예정',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_srchDate',edFromId:'ica_srchFromDate',edToId:'ica_srchToDate',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입 구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'co_lc_srchCode2',search:'start',style:'width:150px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청 거래처',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_reqMcht',codeId:'ed_reqMchtCd',nameId:'txt_reqMchtNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_emp',codeId:'ed_empNo',nameId:'txt_empNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_ordNo',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자사/타사구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'co_lc_srchCode3',search:'start',style:'width:150px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_retBiz',codeId:'ed_retBizNo',nameId:'txt_retBizNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박명',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_vssl',codeId:'ed_vsslCd',nameId:'txt_vsslNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관련번호(B/L등)',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_otherNo',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'입출력 예정 정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_RetrieveInoutIntendList',id:'gr_selfInoutList',style:'',visibleRowNum:'8',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'ioClsCd',inputType:'text',value:'구분',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'comm',inputType:'text',value:'품명',width:'150',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqClntNm',inputType:'text',value:'요청화주명',width:'150',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'text',value:'I/O',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ioIntendDt',inputType:'text',value:'예정일자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ioIntendHh',inputType:'text',value:'예정시간',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',value:'예정물량',width:'370',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'text',value:'실적물량',width:'240',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'cbm',value:'작업지시번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rsltsQty',value:'오더번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rsltsWt',value:'관련번호',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ioClsCd',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'comm',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqClntNm',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'impExpClsCd',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ioIntendDt',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ioIntendHh',value:'CBM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'ioClsCd',inputType:'select',width:'80',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'입고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'출고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'comm',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqClntNm',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'text',width:'80',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ioIntendDt',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ioIntendHh',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'text',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cbm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsQty',inputType:'text',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rsltsWt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rsltsCbm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'transWrkIndictNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'odrNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'retNo',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox wfix',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관련내용',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관련번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관련내용',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관련내용',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관련내용',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관련내용',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관련내용',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청화주',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관련내용',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실화주',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관련내용',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발예정일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관련내용',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착예정일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관련내용',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'특기사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관련내용',ref:'',style:'height: 60px;overflow: auto;',userData2:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'입출력 예정 정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_RetrieveInoutIntendEquipment',id:'gr_selfInoutList2',style:'',visibleRowNum:'4',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'eqBizNm',inputType:'text',value:'협력업체',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCarNo',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'text',value:'차종',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vechlCnt',inputType:'text',value:'대수',width:'80'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'eqBizNm',inputType:'text',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCarNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'select',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vechlCnt',inputType:'text',textAlign:'center',width:'80'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]}]})