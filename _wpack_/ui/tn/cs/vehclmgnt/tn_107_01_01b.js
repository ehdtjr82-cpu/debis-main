/*amd /ui/tn/cs/vehclmgnt/tn_107_01_01b.xml 21936 8de92fe85eeb318535175ec0cad50ac062a7490865b290149a651f93013967d6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'assgnLobranCd',name:'배정점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'assgnLobranNm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'posnClsCd',name:'소유구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'posnClsNm',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqKndCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqKndNm',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtPicNm',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drvNm',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'accntPicNm',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'discrdYn',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'discrdRsn',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtStDt',name:'실적일 조회 시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtEndDt',name:'실적일 조회 종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fileNm',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'filePath',name:'name16',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsAmt',name:'name17',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'계약자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adjmCoreCls',name:'정산주체',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'배정점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranNm',name:'배정점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'차량종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'차량종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtPicNm',name:'계약자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'운전자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accntPicNm',name:'정산자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmCoreCls',name:'정산주체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'discrdYn',name:'일치여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'discrdRsn',name:'불일치사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileNm',name:'계약서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'계약서첨부경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accntClntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accntClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액(VAT별도)',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.cs.vehclmgnt.RetrieveVehiclesContractConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"action":"modified","id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurrDate = null;

/**
 * event
 * @name onpageload
 * @description 화면로딩시
 */
scwin.onpageload = function () {
  scwin.strCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd").substring(0, 6);
  const codeOptions = [{
    method: "getLuxeComboData",
    param1: "NcallWorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "acb_assgnLobranCd"
  }];
  $c.data.setGauceUtil($p, codeOptions, scwin.onLoadCommonCode);
};

/**
 * event
 * @name onpageload
 * @description 화면로딩시
 */
scwin.onUdcCompleted = function () {
  udc_coCtrtDt.setInitDate(scwin.strCurrDate, scwin.strCurrDate);
};

/**
 * method
 * @name onLoadCommonCode
 * @description 공통코드 조회 콜백
 */
scwin.onLoadCommonCode = function () {
  acb_assgnLobranCd.addItem("전체", "", null, 0);
  acb_assgnLobranCd.setValue("");
};

/**
 * method
 * @name f_retrieve
 * @description 목록 조회
 */
scwin.f_retrieve = async function () {
  if (ica_coCtrtStDt.getValue() == "" || ica_coCtrtEndDt.getValue() == "") {
    await $c.win.alert($p, "실적년월은(는) 필수 입력 항목 입니다.");
    return;
  }
  if (ica_coCtrtStDt.getValue().trim().length < 6 || ica_coCtrtEndDt.getValue().trim().length < 6) {
    await $c.win.alert($p, "실적년월을 정확히 입력해주세요.");
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

/**
 * method
 * @name f_openClntnoPopUp
 * @description 공통 Popup 처리 : 협력업체Popup 을 호출한다.
 */
scwin.f_openClntnoPopUp = function (pClose, pAllSearch) {
  if (pClose != 'F' && !$c.gus.cfCanOpenPopup($p, ed_clntNo, ed_clntNm)) {
    return;
  }

  // 협력업체 팝업
  udc_clnt.cfCommonPopUp(udc_clnt_popup_callback, ed_clntNo.getValue(), ed_clntNm.getValue(), pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "협력업체조회, 협력업체코드/명", null);
};

/**
 * method
 * @name udc_clnt_popup_callback
 * @description
 */
udc_clnt_popup_callback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
};

/**
 * method
 * @name f_runExcel
 * @description 그리드 데이터 엑셀로 다운
 */
scwin.f_runExcel = async function () {
  if (ds_results.getTotalRow()) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      $c.data.downloadGridViewExcel($p, gr_Result, {
        "fileName": "전담차량계약현황.xlsx",
        "sheetName": "전담차량계약현황",
        "useStyle": true
      });
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

/**
 * method
 * @name f_FieldClear
 * @description
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, grp_retrieve);
};

/**
 * method
 * @name f_Download
 * @params {Number} row
 * @params {String} fileName
 * @params {String} filePath
 * @description
 */
scwin.f_Download = async function (row, fileName, filePath) {
  if (row < 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["첨부파일 행"]);
    return;
  }
  const dotPosition = filePath.lastIndexOf(".");
  if (filePath.trim().length == 0) {
    await $c.win.alert($p, "선택하신 " + (row + 1) + "행 해당 항목에 파일이 등록되어 있지 않습니다.");
  } else if (dotPosition > 0) {
    // 파일 다운로드
    const extPos = fileName.lastIndexOf(".");
    if (fileName.substring(extPos, extPos + 4) !== filePath.substring(dotPosition, dotPosition + 4)) {
      fileName += filePath.substring(dotPosition, dotPosition + 4);
    }
    $c.gus.cfDownloadFile($p, fileName, filePath);
  }
};

/**
 * event
 * @name sbm_retrieve_submitdone
 * @description
 */
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }
  const rowCnt = ds_results.getTotalRow();
  tbx_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    gr_Result.setColumnColor("vehclNo", "#007FFF");
  }
};

/**
 * event
 * @name gr_Result_oncelldblclick
 * @description
 */
scwin.gr_Result_oncelldblclick = async function (row, col, colid) {
  let rowObj = ds_results.getRowJSON(row);
  if (colid == "vehclNo") {
    let param = {
      "lobranCd": rowObj.assgnLobranCd,
      "vehclNo": rowObj.vehclNo.substring(rowObj.vehclNo.length - 4)
    };
    $c.win.openMenu($p, "직영차량등록", "/ui//tn/cs/vehclmgnt/tn_101_02_01b.xml", "tn_101_02_01b", param, {
      openAction: "exist"
    });
  } else if (colid == "fileNm" && rowObj.fileNm != "") {
    await scwin.f_Download(row, rowObj.fileNm, rowObj.filePath);
  }
};

/**
 * event
 * @name udc_clnt_onblurCodeEvent
 * @description
 */
scwin.udc_clnt_onblurCodeEvent = function (e) {
  scwin.f_openClntnoPopUp('T', 'T');
};

/**
 * event
 * @name udc_clnt_onclickEvent
 * @description
 */
scwin.udc_clnt_onclickEvent = function (e) {
  scwin.f_openClntnoPopUp('F', 'T');
};

/**
 * event
 * @name btn_fieldClear_onclick
 * @description
 */
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

/**
 * event
 * @name btn_retrieve_onclick
 * @description
 */
scwin.btn_retrieve_onclick = async function (e) {
  await scwin.f_retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'grp_retrieve',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'실적년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToYearMon',A:{refStDt:'ctrtStDt',refDataMap:'dma_condition',style:'',id:'udc_coCtrtDt',refEdDt:'ctrtEndDt',edFromId:'ica_coCtrtStDt',edToId:'ica_coCtrtEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배정점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_assgnLobranCd',search:'start',style:'width:230px;',submenuSize:'auto',searchTarget:'both',sortMethod:'ascending',sortOption:'value',ref:'data:dma_condition.assgnLobranCd',visibleRowNum:'20'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNo',placeholder:'',style:'width:100px;',ref:'data:dma_condition.vehclNo',objType:'Data',maxByteLength:'9'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정산주체 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_adjmCoreCls',search:'start',style:'width:100px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_condition.adjmCoreCls',searchTarget:'both'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'법인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'개인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_clntNo',btnId:'pref_search1',nameId:'ed_clntNm',id:'udc_clnt','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clnt_onclickEvent',selectID:'retrieveCarKindClntInfo_tpro',code:'clntNo',refDataCollection:'dma_condition',objTypeCode:'Data',objTypeName:'data',maxlengthCode:'6',codeWidth:'60'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소유구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_posnClsCd',search:'start',style:'width:100px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_condition.posnClsCd',searchTarget:'both',displayMode:'value delim label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'G'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'위탁'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'W'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'장기용차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_section1',style:'',gridDownUserAuth:'X',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_Result',gridDownFn:'scwin.f_runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results',id:'gr_Result',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_Result_oncelldblclick',autoFitMinWidth:'1580',focusMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'배정점소코드',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'배정점소',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'차량번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'소유구분코드',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'소유구분',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'차량종류코드',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'차량종류',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'계약현황',width:'700',colSpan:'10',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column52',value:'정산현황',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'매입금액<br/>(VAT별도)',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column38',value:'계약자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column37',value:'운전자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column36',value:'정산자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column35',value:'정산주체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column34',value:'일치여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'불일치사유',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column32',value:'시작일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column31',value:'종료일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column59',value:'계약서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column56',value:'계약서첨부경로',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column47',value:'거래처명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'assgnLobranCd',inputType:'text',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'assgnLobranNm',inputType:'text',width:'120',textAlign:'left',style:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',class:'underline',style:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'posnClsCd',inputType:'text',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'posnClsNm',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'text',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtPicNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'accntPicNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'adjmCoreCls',displayMode:'label',textAlign:'left',emptyItem:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'법인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'개인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'discrdYn',displayMode:'label',textAlign:'left',emptyItem:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'일치'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'불일치'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'discrdRsn',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'ctrtStDt',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'ctrtEndDt',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'fileNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'filePath',value:'',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'accntClntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'accntClntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pchsAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})