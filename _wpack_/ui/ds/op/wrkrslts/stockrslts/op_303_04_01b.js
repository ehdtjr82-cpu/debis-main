/*amd /ui/ds/op/wrkrslts/stockrslts/op_303_04_01b.xml 23481 6159b2e57bec9d79d39534788e9ca8c8d8f43540a044e4f6d23b6109af0725f6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition','ev:oncelldatachange':'scwin.dma_condition_oncelldatachange'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtCls',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtFrom',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtTo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msn',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hsn',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieve',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutAdmitNo',name:'승인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutAdmitPattern',name:'승인구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPackCnt',name:'승인수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWt',name:'승인중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reportDtm',name:'통관승인일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'입항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nmCmpy',name:'상호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'대표자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmdtAmt',name:'관세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnPrcSum',name:'과세가격합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinDtm',name:'반입일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'divsCrryinClsCd',name:'분할반입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutDtm',name:'반출일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'divsCrryoutClsCd',name:'분할반출구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutCnt',name:'반출물량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutWt',name:'반출중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shedDdCnt',name:'장치일',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.stockrslts.RetrieveCarryingOutAdmissionPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_retrieve","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieve","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.stockrslts.SaveCarryingOutAdmissionPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_retrieve","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.loginDTO = "";
scwin.sUserId = "";
scwin.sUserClsCd = "";
scwin.sClntNo = "";
scwin.sClntNm = "";
scwin.sLoUpperLobranCd = "";
scwin.vEndDt = "";
scwin.vStDt = "";
scwin.onpageload = function () {
  scwin.loginDTO = $c.data.getMemInfo($p);
  scwin.sUserId = scwin.loginDTO.userId || "";
  scwin.sUserClsCd = scwin.loginDTO.userClsCd || "";
  scwin.sClntNo = scwin.loginDTO.clntNo || "";
  scwin.sClntNm = scwin.loginDTO.sClntNm || "";
  scwin.sLoUpperLobranCd = scwin.loginDTO.loUpperLobranCd || "";
  scwin.vEndDt = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.vStDt = $c.date.addMonth($p, scwin.vEndDt, -1);
  const codeOptions = [{
    grpCd: "OP135",
    compID: "gr_workImplement:divsCrryinClsCd,gr_workImplement:divsCrryoutClsCd"
  } // 그리드
  ];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  ed_ioDtFrom.setValue(scwin.vStDt);
  ed_ioDtTo.setValue(scwin.vEndDt);
  rd_clsCond.setValue("1");
  btn_Save.setDisabled(false);
};

//-------------------------------------------------------------------------
// RETRIEVE;
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  if (ed_wrkPlCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작업장 코드"]);
    ed_wrkPlCd.focus();
    return;
  }
  if (ed_mrn.getValue() == "" && ed_blNo.getValue() == "" && ed_ioDtFrom.getValue() == "") {
    await $c.win.alert($p, "MRN,BL번호,일자 중 하나는 입력해야 합니다.");
    return;
  }
  if (!(await $c.gus.cfIsAfterDate($p, ed_ioDtFrom.getValue(), ed_ioDtTo.getValue()))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_ioDtFrom.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// save;
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_retrieve.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["통관승인 내역"]);
    return;
  }
  let chk1 = await $c.gus.cfValidate($p, [gr_workImplement], null, true);
  if (!chk1) return;
  let chk2 = await $c.win.confirm($p, "저장하시겠습니까?");
  if (chk2) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 작업장 POP UP
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 작업장 팝업
  udc_comCode.cfCommonPopUp(function (rtnList) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, txt_wrkPlNm);
  }, pCode, pName, "T", null, null, null, null, null, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명");
};

//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
  ed_ioDtFrom.setValue(scwin.vStDt);
  ed_ioDtTo.setValue(scwin.vEndDt);
  ed_mrn.setValue("");
  ed_msn.setValue("");
  ed_hsn.setValue("");
};

//-------------------------------------------------------------------------
// Excel
//-------------------------------------------------------------------------
scwin.f_runExcel = async function () {
  let totCnt = ds_retrieve.getRowCount();
  let sheetTitle = "통관승인목록_" + scwin.vEndDt;
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      let options = {
        fileName: sheetTitle + ".xlsx",
        sheetName: sheetTitle
      };
      $c.data.downloadGridViewExcel($p, gr_workImplement, options);
    }
  } else {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (data, disGubun, isCode) {
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, data, "", "T", "T");
  } else {
    scwin.f_openCommonPopUp(disGubun, "", data, "T", "T");
  }
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_retrieve.getRowCount();
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }
  totalRows.setValue(rowCnt);
};
scwin.udc_comCode_onblurCodeEvent = async function (e) {
  let value = ed_wrkPlCd.getValue();
  await scwin.f_chkOpenCommonPopUp(value, 1);
  if (value == "6C01" || value == "6C04") {
    btn_Save.setDisabled(false);
  } else {
    btn_Save.setDisabled(true);
  }
};
scwin.ed_mrn_oneditkeyup = function (info, e) {
  let val = info.newValue;
  this.setValue(val.toUpperCase());
  if (ed_mrn.getValue().length == 11) {
    ed_msn.focus();
    return;
  }
};
scwin.ed_msn_oneditkeyup = function (info, e) {
  if (ed_msn.getValue().length == 4) {
    ed_hsn.focus();
    return;
  }
};
scwin.ed_blNo_oneditkeyup = function (info, e) {
  let val = info.newValue;
  this.setValue(val.toUpperCase());
};
scwin.udc_comCode_onblurNameEvent = function (e) {
  if (txt_wrkPlNm.originalValue == txt_wrkPlNm.getValue()) return;
  if (txt_wrkPlNm.getValue() == "") {
    ed_wrkPlCd.setValue("");
    return;
  }
  scwin.f_chkOpenCommonPopUp(txt_wrkPlNm.getValue(), 1, false);
};
scwin.udc_comCode_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, "", "", "T", "T");
};
scwin.gr_workImplement_onviewchange = function (info) {
  if (info.colId === "reportDtm") {
    let row = info.rowIndex;
    let col = info.colId;
    let val = info.newValue;

    // 8자리 날짜만 입력된 경우
    if (val && val.length == 8) {
      // $p.getFormattedDate를 사용하여 현재 시분초 6자리 추출
      let hms = $p.getFormattedDate(new Date(), "HHmmss");
      let fullTimestamp = val + hms;

      // 데이터셋에 14자리로 저장
      ds_retrieve.setCellData(row, col, fullTimestamp);
    }
  }
};
scwin.dateFormat = function (data) {
  // 데이터가 없거나 8자리보다 짧으면 그대로 반환 (방어 코드)
  if (!data || data.length < 8) {
    return data;
  }

  // 앞 8자리만 추출 (20200129)
  let y = data.substring(0, 4);
  let m = data.substring(4, 6);
  let d = data.substring(6, 8);

  // 형식에 맞춰 반환
  return y + "/" + m + "/" + d;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',nameId:'txt_wrkPlNm',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',codeId:'ed_wrkPlCd',id:'udc_comCode',mandatoryCode:'true',refDataCollection:'dma_condition',selectID:'retrieveWrkPlInfo',code:'wrkPlCd',btnId:'img_wrkPlCd','ev:onclickEvent':'scwin.udc_comCode_onclickEvent','ev:onblurNameEvent':'scwin.udc_comCode_onblurNameEvent','ev:onblurCodeEvent':'scwin.udc_comCode_onblurCodeEvent',objTypeName:'Data',mandatoryName:'false',validExpCode:'작업장 코드:yes:',validExp:'작업장 코드:yes:',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_clsCond',ref:'data:dma_condition.dtCls',renderType:'radiogroup',rows:'',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통관일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'반입일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입고기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'dma_condition',refEdDt:'dtTo',refStDt:'dtFrom',style:'',edToId:'ed_ioDtTo',edFromId:'ed_ioDtFrom',mandatoryTo:'false',mandatoryFrom:'false',titleFrom:'입고 요청기간 시작일자',titleTo:'입고 요청기간 종료일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:100px;',id:'ed_mrn',placeholder:'',class:'',allowChar:'a-zA-Z0-9',maxlength:'11',ref:'data:dma_condition.mrn','ev:oneditkeyup':'scwin.ed_mrn_oneditkeyup',objType:'data',validExp:'화물관리번호(MRN):no'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'-',class:''}},{T:1,N:'xf:input',A:{style:'width:50px;',id:'ed_msn',placeholder:'',class:'',allowChar:'0-9',maxlength:'4',objType:'data',ref:'data:dma_condition.msn','ev:oneditkeyup':'scwin.ed_msn_oneditkeyup',validExp:'MSN:no'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'-',class:''}},{T:1,N:'xf:input',A:{style:'width:50px;',id:'ed_hsn',placeholder:'',class:'',objType:'data',maxlength:'4',allowChar:'0-9',ref:'data:dma_condition.hsn',validExp:'HSN:no'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BL번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_blNo',placeholder:'',style:'width:150px;',objType:'Data',maxlength:'20',allowChar:'a-zA-Z0-9',ref:'data:dma_condition.blNo','ev:oneditkeyup':'scwin.ed_blNo_oneditkeyup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'통관승인 목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_runExcel',gridUpYn:'N',gridID:'gr_workImplement',id:'udc_topGrdBtn',gridDownYn:'Y',btnPlusYn:'Y',templateYn:'N',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_retrieve',id:'gr_workImplement',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:onviewchange':'scwin.gr_workImplement_onviewchange',validExp:'crryoutAdmitNo:승인번호:yes::key,cstmdtAmt:관세금액:yes::Key,taxnPrcSum:과세가격합계:yes::Key,reportDtm:통관승인일:yes::Key',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'화물관리번호',width:'210',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'BL',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'승인번호',width:'140',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'승인<br/>구분',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'승인<br/>수량',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'승인<br/>중량',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'통관승인일',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'선박명',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'입항일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'상호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'대표자명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'관세금액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'과세가격<br/>합계',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'반입일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'분할반입<br/>구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'반출일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'분할반출<br/>구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',value:'반출<br/>물량',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column41',value:'반출<br/>중량',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column43',value:'장치일',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column66',value:'MRN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column65',value:'MSN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column64',value:'HSN',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'mrn',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'msn',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hsn',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryoutAdmitNo',inputType:'text',width:'140',readOnly:'false',mandatory:'true',validExp:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryoutAdmitPattern',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totPackCnt',inputType:'text',width:'70',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totWt',inputType:'text',width:'70',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'reportDtm',width:'100',displayMode:'label',validateOnInput:'true',allowChar:'0-9',inputType:'text',displayFormatter:'scwin.dateFormat',maxLength:'8'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',width:'120',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arrvlportDt',displayMode:'label',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'nmCmpy',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'repstNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cstmdtAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',validateOnInput:'true',readOnly:'true',mandatory:'true',validExp:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'taxnPrcSum',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',mandatory:'true',validExp:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crryinDtm',displayMode:'label',readOnly:'true',displayFormatter:'scwin.dateFormat'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'divsCrryinClsCd',displayMode:'label',readOnly:'false',emptyItem:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crryoutDtm',displayMode:'label',readOnly:'true',displayFormatter:'scwin.dateFormat'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'divsCrryoutClsCd',displayMode:'label',readOnly:'false',emptyItem:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crryoutCnt',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crryoutWt',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'shedDdCnt',displayMode:'label',textAlign:'center',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save',disabled:'true'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})