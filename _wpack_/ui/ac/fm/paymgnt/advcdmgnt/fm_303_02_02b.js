/*amd /ui/ac/fm/paymgnt/advcdmgnt/fm_303_02_02b.xml 28408 11dec67e19c012fe4b6cc4d2e20418eaec890cbc90439f24289bdd43d3295fb4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_advanced',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'전도부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'limitAmt',name:'한도액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'caryFwrdRamt',name:'이월잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisPayAmt',name:'전도금승인금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'지급금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'useAmt',name:'사용금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'advcdRamt',name:'전도금잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reqAmt',name:'요청가능액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reqPsblAmt',name:'요청잔액',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_detail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'전도부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptCd',name:'전표귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptNm',name:'전표귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnNo',name:'거래번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'사용금액',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'appDept',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition_detail'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'appDept',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveAdvanced',action:'/ac.fm.paymgnt.advcdmgnt.RetrieveAdvancedPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_advanced","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_advanced","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveAdvanced_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_detail_retrieve',action:'/ac.fm.paymgnt.advcdmgnt.RetrieveAdvancedDetailPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_detail","key":"OUT_DS1"},{"id":"dma_condition_detail","key":"IN_DS1"}]',target:'data:json,{"id":"ds_detail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_detail_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.strCurDate = WebSquare.date.getCurrentServerDate();
scwin.sCurrDate = scwin.strCurDate.substring(0, 6);
scwin.sStartDate = "";
scwin.sEndDate = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  ed_stYm.setValue(scwin.sCurrDate);
  ed_endYm.setValue(scwin.sCurrDate);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_stYm, ed_endYm]))) {
    return;
  }
  scwin.sStartDate = ed_stYm.getValue() + "01";
  scwin.sEndDate = ed_endYm.getValue() + "12";
  scwin.sEndDate = scwin.sEndDate.toDate().lastDate().format("YYYYMMDD");
  dma_condition.set("stDt", scwin.sStartDate);
  dma_condition.set("endDt", scwin.sEndDate);
  $c.sbm.execute($p, sbm_retrieveAdvanced);
};

//-------------------------------------------------------------------------
// 하단그리드 조회
//-------------------------------------------------------------------------
scwin.f_DetailRetrieve = function (rowIndex, columnIndex, columnId) {
  let sStartDate = ed_stYm.getValue() + "01";
  let sEndDate = ed_endYm.getValue() + "12";
  sEndDate = sEndDate.toDate().lastDate().format("YYYYMMDD");
  dma_condition_detail.set("appDept", ds_advanced.getCellData(rowIndex, "acctDeptCd"));
  dma_condition_detail.set("stDt", sStartDate);
  dma_condition_detail.set("endDt", sEndDate);
  if (rowIndex >= 0 && ds_advanced.getRowCount() > 0) {
    if (ds_advanced.getCellData(rowIndex, "useAmt") > 0) {
      $c.sbm.execute($p, sbm_detail_retrieve);
    } else {
      ds_detail.removeAll();
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_FieldClear
// function desc : 조회 필드 Clear
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ed_stYm]);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// function name : f_SetSrchDefault
// function desc : 조회 기본값 설정
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  ed_stYm.setValue(scwin.sCurrDate);
  ed_endYm.setValue(scwin.sCurrDate);
  ed_stYm.focus();
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (select_code, txtCode, txtName, sPopupCls) {
  let rtnList = null;
  let sCmdName = "";
  let name = "";
  code = txtCode.getValue();
  if (txtName == null) {
    name = "";
  } else {
    name = txtName.getValue();
  }
  switch (select_code) {
    // 차입기관 PopUp 호출
    case '1':
      rtnList = udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, code, name, sPopupCls, null, null, null, null, null, null, null, null, null, null, null, null, null); // 관리부서
      break;
    // 차입번호 PopUp 호출
    // case '2' :
    // 	rtnList = udc_borrLedgNoInfo.cfCommonPopUp(scwin.udc_borrLedgNoInfo_callBackFunc, code,name,sPopupCls,null,null,null,null,null,null,null,null,null); // 차입번호
    // 	break;
  }

  // if ( rtnList != null ) {
  // 	if (rtnList[0] == "N/A") return;
  // 	txtCode.setValue(rtnList[0]);	 // 코드
  // 	if ( txtName != null )
  // 	{
  // 		txtName.setValue(rtnList[1]);	 // 코드명
  // 	}
  // 	txtCode.options.hidVal = rtnList[0]; // 코드
  // } else {
  // 	txtCode.setValue("");	 // 코드
  // 	if ( txtName != null )
  // 	{
  // 		txtName.setValue("");	 // 코드명
  // 	}
  // 	txtCode.options.hidVal = ""; // 코드
  // }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_appDept.setValue(rtnList[0]); // 코드
    if (ed_appDeptNm != null) {
      ed_appDeptNm.setValue(rtnList[1]); // 코드명
    }
    ed_appDept.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_appDept.setValue(""); // 코드
    if (ed_appDeptNm != null) {
      ed_appDeptNm.setValue(""); // 코드명
    }
    ed_appDept.options.hidVal = ""; // 코드
  }
};

// scwin.udc_borrLedgNoInfo_callBackFunc = function(rtnList) {
// 	if ( rtnList != null ) {
//    		if (rtnList[0] == "N/A") return;
// 		txtCode.setValue(rtnList[0]);	 // 코드
// 		if ( txtName != null )
// 		{
// 			txtName.setValue(rtnList[1]);	 // 코드명
// 		}
// 		txtCode.options.hidVal = rtnList[0]; // 코드
// 	} else {
// 		txtCode.setValue("");	 // 코드
// 		if ( txtName != null )
// 		{
// 			txtName.setValue("");	 // 코드명
// 		}
// 		txtCode.options.hidVal = ""; // 코드
//     }
// };

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  if (orgObjCd._wTagName.toUpperCase() == "INPUT") {
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
    } else {
      if (!orgObjNm.getValue() == "") {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
      orgObjNm.setValue("");
      orgObjNm.options.hidVal = "";
    }
  } else if (orgObjCd._wTagName.toUpperCase() == "OBJECT") {
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
    } else {
      if (!orgObjNm.getValue() == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
    }
  }
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (ds_advanced.getRowCount() <= 0) {
    $c.win.alert($p, "전도금현황내역이 존재하지않습니다.");
    return false;
  }
  let fileName = "전도금현황";
  let sheetTitle = "전도금현황";
  await $c.data.downloadGridViewExcel($p, gr_advanced, {
    fileName: fileName + ".xlsx",
    sheetName: sheetTitle
  });
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcelDetail = async function () {
  if (ds_detail.getRowCount() <= 0) {
    $c.win.alert($p, "전도금현황내역이 존재하지않습니다.");
    return false;
  }
  let fileName = "전도금현황";
  let sheetTitle = "전도금현황";
  await $c.data.downloadGridViewExcel($p, gr_detail, {
    fileName: fileName + ".xlsx",
    sheetName: sheetTitle
  });
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------
scwin.sbm_retrieveAdvanced_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  dma_condition.set("stDt", scwin.sStartDate.substring(0, 6));
  dma_condition.set("endDt", scwin.sEndDate.substring(0, 6));
  let rows = ds_advanced.getRowCount();
  totalRows.setValue(rows);
  if (rows == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
};
scwin.udc_fromToYearMon3_onBlurFrom = function (e) {
  if (scwin.sStartDate.substring(0, 6) != ed_stYm.getValue()) {
    if (ds_advanced.getRowCount() > 0) {
      ds_advanced.removeAll();
      ds_detail.removeAll();
    }
  }
};
scwin.udc_fromToYearMon3_onBlurTo = function (e) {
  if (scwin.sEndDate.substring(0, 6) != ed_endYm.getValue()) {
    if (ds_advanced.getRowCount() > 0) {
      ds_advanced.removeAll();
      ds_detail.removeAll();
    }
  }
};

// grid decode format
scwin.draftDdCntCdDisplayFm = function (data) {
  return $c.gus.decode($p, data, "000", null, data);
};
scwin.gr_detail_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "slipNo") {
    var slipNo = ds_detail.getCellData(rowIndex, "slipNo");
    if (slipNo != "") {
      let rtnList = await $c.gus.cfShowSlipInfo($p, slipNo);
    }
  }
};
scwin.sbm_detail_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  dma_condition.set("stDt", scwin.sStartDate.substring(0, 6));
  dma_condition.set("endDt", scwin.sEndDate.substring(0, 6));
  let rows = ds_detail.getRowCount();
  totalRows1.setValue(rows);

  // if( rows == 0 ){
  //    $c.win.alert("조회된 데이터가 없습니다.");
  // }
};
scwin.udc_dept_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_appDept, ed_appDeptNm, 'F');
};
scwin.udc_dept_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_appDept, ed_appDeptNm, '1');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'',src:'/cm/udc/fromToYearMon.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToYearMon',A:{refStDt:'stDt',refDataMap:'dma_condition',style:'',id:'udc_fromToYearMon3',refEdDt:'endDt',edFromId:'ed_stYm',edToId:'ed_endYm','ev:onBlur':'scwin.udc_fromToYearMon3_onBlur','ev:onBlurTo':'scwin.udc_fromToYearMon3_onBlurTo',titleFrom:'기준년월',mandatoryFrom:'true',mandatoryTo:'true',titleTo:'기준년월','ev:onBlurFrom':'scwin.udc_fromToYearMon3_onBlurFrom'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',selectID:'retrieveAcctDeptCdInfo',codeId:'ed_appDept',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명',nameId:'ed_appDeptNm',style:'',code:'appDept',refDataCollection:'dma_condition',id:'udc_acctDeptCdInfo',popupGridHeadTitle:'귀속코드,부서명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',allowCharCode:'0-9',mandatoryCode:'false',maxlengthCode:'5',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_dept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dept_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 전도금 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_advanced',gridUpYn:'N',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_advanced',id:'gr_advanced',style:'',dataDragSelectAutoScroll:'true',readOnly:'true','ev:oncellclick':'scwin.f_DetailRetrieve',columnMove:'true',columnMoveWithFooter:'true',visibleRowNumFix:'true',visibleRowNum:'7'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'전도부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'부서명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'한도액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'이월잔액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'전도금승인금액',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'지급금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'사용금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'전도금잔액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'요청가능액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'요청잔액',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'limitAmt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'caryFwrdRamt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisPayAmt',inputType:'text',style:'',value:'',width:'150',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payAmt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'useAmt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdRamt',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqAmt',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqPsblAmt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column27',value:'',displayMode:'label',expression:'SUM("caryFwrdRamt")',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column26',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column25',value:'',displayMode:'label',expression:'SUM("payAmt")',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column24',value:'',displayMode:'label',expression:'SUM("useAmt")',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column23',value:'',displayMode:'label',expression:'SUM("advcdRamt")',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column22',value:'',displayMode:'label',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'',displayMode:'label',dataType:'number',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 사용금액 집계내역 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_detail',gridUpYn:'N',gridDownFn:'scwin.f_GridToExcelDetail'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_detail',id:'gr_detail',style:'',dataDragSelectAutoScroll:'true',readOnly:'true',columnMove:'true',columnMoveWithFooter:'true',visibleRowNum:'4',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'전도부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'부서명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'전표일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'거래처번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'회계일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'전표귀속부서코드',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'전표귀속부서명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'거래번호',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'사용금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',style:'',value:'',width:'100',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNo',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipAcctDeptCd',inputType:'text',style:'',value:'',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipAcctDeptNm',inputType:'text',style:'',value:'',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txnNo',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'amt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',excelCellType:'number',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column50',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column22',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("amt")',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})