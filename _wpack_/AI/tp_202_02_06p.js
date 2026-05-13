/*amd /AI/tp_202_02_06p.xml 28287 4f81c8b2ef6a91d91a2fddcd3296f44592afbdd61dd79936b6e3fad727493f8f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'repClntNo',name:'대표거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqClntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDtFm',name:'작업시작일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDtTo',name:'작업시작일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sndYn',name:'전송여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqClntNo2',name:'협력업체코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mchtOdrNo',name:'화주오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNm',name:'대표거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrNo',name:'화주오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'등록순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsCd',name:'상태구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'urgentYn',name:'긴급여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jikYn',name:'직영여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strgArea',name:'창고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sapVehclCd',name:'SAP차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rfidNo',name:'RFID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'협력업체코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'협력업체명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sapCoClntCd',name:'SAP협력사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sapCoClntNm',name:'SAP협력사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndSeq',name:'전송순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndYn',name:'전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDt',name:'전송일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndCmplYn',name:'전송완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndCmplDt',name:'전송완료일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chkSndYn',name:'상차지시서전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'배차확정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shortCd',name:'차량약칭',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'기사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modRsnCd',name:'사유코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modRsn',name:'사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkHh',name:'작업시간',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_modRsn'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_ediMappingSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'docCd',name:'문서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'itemCd',name:'항목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'osideCd',name:'외부코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.tp.dongbusteel.rsltsmgnt.UpdatedongbusteelAllocationSendInformationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_outInfo","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.tp.dongbusteel.rsltsmgnt.RetrievedongbusteelAllocationSendInformationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_Query","key":"IN_DS1"},{"id":"ds_outInfo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_outInfo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.checkCnt = 0;
scwin.clntNo = "";
scwin.clntNm = "";
scwin.userId = "";
scwin.vCurDate = "";
scwin.hid_docCd = "";
scwin.hid_wrkPlCd = "";
scwin.hid_itemCd = "";
scwin.hid_osideCd = "";
scwin.hid_repClntNo = "";
scwin.onpageload = async function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.clntNo = $c.ses.getClntNo();
  scwin.clntNm = $c.ses.getClntNm();
  scwin.userId = $c.ses.getUserId();
  ed_clntNo2.setValue(scwin.clntNo);
  txt_clntNm2.setValue(scwin.clntNm);
  lc_odrCreatCls.setValue("");
};
scwin.onUdcCompleted = function () {
  udc_outDt.setInitDate(scwin.vCurDate, scwin.vCurDate);
};
scwin.clntNo_cond = function () {
  ed_clntNo.setReadOnly(false);
  ed_clntNo.setValue("");
  txt_clntNm.setValue("");
};
scwin.f_Retrieve = async function () {
  let chk = await $c.gus.cfValidate($p, [tb_condition]);
  if (!chk) return;
  ds_Query.set("repClntNo", "000012");
  ds_Query.set("reqClntNo", ed_clntNo.getValue());
  ds_Query.set("reqClntNo2", ed_clntNo2.getValue());
  ds_Query.set("wrkStDtFm", ica_outFromDt.getValue());
  ds_Query.set("wrkStDtTo", ica_outToDt.getValue());
  ds_Query.set("sndYn", lc_odrCreatCls.getValue());
  ds_Query.set("mchtOdrNo", ed_mchtOdrNo.getValue());
  ds_Query.set("odrNo", ed_odrNo.getValue());
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_CheckChk = function () {
  for (let i = 0; i < ds_outInfo.getRowCount(); i++) {
    if (ds_outInfo.getCellData(i, "chk") == "T") {
      return true;
    }
  }
  return false;
};
scwin.f_Save = async function () {
  if (!scwin.f_CheckChk()) {
    await $c.win.alert($p, "선택한  정보가 없습니다");
    return;
  }
  if (ds_outInfo.getUpdatedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_005);
    return;
  }
  let chk = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (chk) {
    await $c.sbm.execute($p, sbm_save);
  }
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_condition, null);
  udc_outDt.setInitDate(scwin.vCurDate, scwin.vCurDate);
  lc_odrCreatCls.setValue("0");
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");
  } else {
    scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList;
  switch (disGubun) {
    case 1:
      udc_clnt.ilCommonPopUp(scwin.callbackClnt1, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "거래처,거래처코드/명");
      break;
    case 2:
      udc_clnt.ilCommonPopUp(scwin.callbackClnt2, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "거래처,거래처코드/명");
      break;
  }
};
scwin.callbackClnt1 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, txt_clntNm);
};
scwin.callbackClnt2 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo2, txt_clntNm2);
};
scwin.f_openCommPopUpGrid = function (disGubun, row, pClose) {
  let rtnList;
  let pCode = "";
  let pName = "";
  switch (disGubun) {
    case 1:
      pCode = ds_outInfo.getCellData(row, "shortCd");
      udc_comCode_Grid.ilCommonPopUp(scwin.callbackGridDrvNm, pCode, pName, pClose, null, "차량번호,기사명", "120,240", "3,4,5,6,7,8,9,10", null, "440", "500", null, null, null, "F", "차량번호조회,차량번호,기사명");
      break;
    default:
      break;
  }
};
scwin.callbackGridDrvNm = function (rtnList) {
  let row = gr_out.getFocusedRowIndex();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_outInfo, row, "vehclNo", "drvNm");
};
scwin.f_excel = function (gubun) {
  $c.data.downloadGridViewExcel($p, gr_out, "배차정보", "배차정보");
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_save_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  scwin.checkCnt = 0;
  let rowCnt = ds_outInfo.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }
  $c.gus.cfShowTotalRows($p, spa_totalRow, rowCnt);
  gr_out.setFocus();
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.gr_out_oncheckclick = function (rowIndex, columnId, checked) {
  if (columnId == "chk") {
    if (ds_outInfo.getCellData(rowIndex, "chk").trim() != "T") {
      ds_outInfo.setCellData(rowIndex, "chk", "");
      scwin.checkCnt--;
    } else if (ds_outInfo.getCellData(rowIndex, "chk").trim() == "T") {
      scwin.checkCnt++;
    }
    if (scwin.checkCnt > 20) {
      alert("정보 저장은 20건 이하로 해주세요.");
      ds_outInfo.setCellData(rowIndex, "chk", "");
      scwin.checkCnt--;
      return;
    }
  }
};
scwin.gr_out_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_outInfo.getCellData(rowIndex, "chk") == "T") {
    if (columnId == "shortCd" || columnId == "drvNm" || columnId == "modRsnCd" || columnId == "modRsn" || columnId == "wrkDt" || columnId == "wrkHh") {
      gr_out.setColumnReadOnly("wrkDt", false);
      gr_out.setColumnReadOnly("wrkHh", false);
      gr_out.setColumnReadOnly("modRsnCd", false);
      gr_out.setColumnReadOnly("modRsn", false);
      gr_out.setColumnReadOnly("shortCd", false);
      gr_out.setColumnReadOnly("drvNm", false);
    }
  } else {
    if (columnId == "shortCd" || columnId == "drvNm" || columnId == "modRsnCd" || columnId == "modRsn" || columnId == "wrkDt" || columnId == "wrkHh") {
      gr_out.setColumnReadOnly("wrkDt", true);
      gr_out.setColumnReadOnly("wrkHh", true);
      gr_out.setColumnReadOnly("modRsnCd", true);
      gr_out.setColumnReadOnly("modRsn", true);
      gr_out.setColumnReadOnly("shortCd", true);
      gr_out.setColumnReadOnly("drvNm", true);
    }
  }
};
scwin.gr_out_oneditend = function (rowIndex, columnId, oldValue, newValue) {
  if (rowIndex >= 0 && ds_outInfo.getRowCount() > rowIndex) {
    switch (columnId) {
      case "shortCd":
        if (ds_outInfo.getCellData(rowIndex, columnId) != "" && ds_outInfo.getCellData(rowIndex, columnId) != oldValue) {
          scwin.f_openCommPopUpGrid(1, rowIndex, "T");
        }
        break;
    }
  }
};
scwin.gr_out_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "wrkDt":
      $c.gus.cfOpenCalendar($p, gr_out, rowIndex, columnId);
      break;
    case "shortCd":
      scwin.f_openCommPopUpGrid(1, rowIndex, "T");
      break;
  }
};
scwin.ed_clntNo_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNo.getValue(), 1);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_clnt',codeId:'ed_clntNo',nameId:'txt_clntNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업시작일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_outDt',edFromId:'ica_outFromDt',edToId:'ica_outToDt',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 230px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_clntNo2',placeholder:'',style:'width: 85px;',ref:'data:ds_Query.reqClntNo2'}},{T:1,N:'xf:input',A:{class:'',id:'txt_clntNm2',placeholder:'',style:''}}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'동부오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;',ref:'data:ds_Query.odrNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mchtOdrNo',placeholder:'',style:'width:150px;',ref:'data:ds_Query.mchtOdrNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'처리구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_odrCreatCls',search:'start',style:'width:120px;',submenuSize:'auto',ref:'data:ds_Query.sndYn'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'배차정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'ds_outInfo',id:'gr_out',style:'',visibleRowNum:'15',visibleRowNumFix:'true',fixedColumn:'7',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'text',value:'선택',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'repClntNo',inputType:'text',value:'대표거래처',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'repClntNm',inputType:'text',value:'대표거래처',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqClntNo',inputType:'text',value:'거래처',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqClntNm',inputType:'text',value:'거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtOdrNo',inputType:'text',value:'화주오더번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',value:'오더번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'text',value:'작업시작일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transWrkIndictNo',inputType:'text',value:'작업지시번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',value:'등록<br/>순번',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sndClsCd',value:'상태<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'urgentYn',value:'긴급<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'jikYn',value:'직영<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqCd',value:'장비코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'strgArea',value:'창고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sapVehclCd',value:'SAP<br/>차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rfidNo',value:'RFID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',value:'협력업체',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm',value:'협력업체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sapCoClntCd',value:'SAP<br/>협력사코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sapCoClntNm',value:'SAP<br/>협력사명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sndSeq',value:'전송<br/>순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sndYn',value:'전송<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sndDt',value:'전송일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sndCmplYn',value:'전송완료<br/>여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sndCmplDt',value:'전송완료일시',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'chkSndYn',value:'상차지시서<br/>전송여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'regDtm',value:'배차확정시간',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'repClntNo',inputType:'text',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'repClntNm',inputType:'text',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqClntNo',inputType:'text',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqClntNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtOdrNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transWrkIndictNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sndClsCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'urgentYn',displayMode:'label',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'긴급'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'jikYn',displayMode:'label',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'직영'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'strgArea',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sapVehclCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rfidNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sapCoClntCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sapCoClntNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sndSeq',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sndYn',displayMode:'label',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미전송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sndDt',displayMode:'label',readOnly:'true',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'sndCmplYn',displayMode:'label',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sndCmplDt',displayMode:'label',readOnly:'true',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'chkSndYn',displayMode:'label',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미전송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'regDtm',value:'',displayMode:'label',readOnly:'true',displayFormat:'####/##/## ##:##'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column84',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column81',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column78',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})