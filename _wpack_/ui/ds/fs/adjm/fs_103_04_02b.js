/*amd /ui/ds/fs/adjm/fs_103_04_02b.xml 23552 225cdf0e8f73a152e453ca5060691bf8408d8035aed357c9886a77371e1957ce */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_customerEachPaymentList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매입거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inPchsAmt',name:'C1 금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inVat',name:'C1 부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outPchsAmt',name:'C3 금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outVat',name:'C3 부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPchsAmt',name:'CT 금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVat',name:'CT 부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shuttlePchsAmt',name:'셔틀 금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shuttleVat',name:'셔틀 부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exceptPchsAmt',name:'제외금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exceptVat',name:'제외부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPchsAmt',name:'총공급액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totVat',name:'총부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_customerEachPaymentList_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'pchsDeptCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsltsDtSt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsltsDtEnd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.adjm.pchsadjmdcsn.RetrieveCustomerEachPaymentCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_customerEachPaymentList_con","key":"IN_DS1"},{"id":"ds_customerEachPaymentList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_customerEachPaymentList","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//물류/정산/ 거래처별 지급 관련(셔틀/비셔틀) 조회
//조회조건  :  매입부서 : 5B2, 회계일자 : 20160131 ~ 20160131

//DDate sDate = new DDate();

//String strCurDate = sDate.getDate("");
//String strPreDate = strCurDate.substring(0, 6) + "01";				

scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.strPreDate = scwin.strCurDate.substring(0, 6) + "01";
//scwin.strPreDate = $c.date.addDate(scwin.vCurDate, -7);

scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  ica_postDtSt.setValue(scwin.strPreDate);
  ica_postDtEnd.setValue(scwin.strCurDate);
  ed_pchsDeptCd.focus();

  //f_Retrieve();
};
scwin.onUdcCompleted = function () {
  scwin.f_OnLoad();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ed_pchsDeptCd.getValue() == "") {
    await $c.win.alert($p, "매입부서를 입력해주십시요.");
    ed_pchsDeptCd.focus();
    return;
  }
  if (!(await $c.gus.cfValidate($p, [ica_postDtSt, ica_postDtEnd]))) {
    return;
  }

  //조회시작일자가 더 클경우 체크
  if (!(await $c.gus.cfIsAfterDate($p, ica_postDtSt.getValue(), ica_postDtEnd.getValue()))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
  /*
       	var dsHeader = "pchsDeptCd:STRING,rsltsDtSt:STRING,rsltsDtEnd:STRING,pchsClntNo:STRING";
  	 	ds_customerEachPaymentList_con.SetDataHeader(dsHeader);
   		ds_customerEachPaymentList_con.AddRow();
  		
  		ds_customerEachPaymentList_con.NameValue(1, "pchsDeptCd")   = ed_pchsDeptCd.getValue();		
       	ds_customerEachPaymentList_con.NameValue(1, "rsltsDtSt")     = ica_postDtSt.getValue();
       	ds_customerEachPaymentList_con.NameValue(1, "rsltsDtEnd")    = ica_postDtEnd.getValue();
       	ds_customerEachPaymentList_con.NameValue(1, "pchsClntNo")   = ed_pchsClntNo.getValue();	
  		
     		tr_customerEachPaymentList_retrieve.Action = "/ds.fs.adjm.pchsadjmdcsn.RetrieveCustomerEachPaymentCMD.do";
     		tr_customerEachPaymentList_retrieve.Post();
  */
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  //var rtnList  = new Array();  // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      //매입부서코드팝업			
      //rtnList = cfCommonPopUp('retrieveOpDeptCdInfo',pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null);
      udc_pchsDeptCd.setSelectId('retrieveOpDeptCdInfo');
      rtnList = udc_pchsDeptCd.cfCommonPopUp(scwin.udc_pchsDeptCdCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //cfSetReturnValue(rtnList, ed_pchsDeptCd, ed_pchsDeptNm);  // 매입부서코드, 매입부서명		
      break;
    case 2:
      // 매입거래처 팝업
      //rtnList = cfCommonPopUp('retrieveClntList',pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null);	  				  									
      udc_pchsClntNo.setSelectId('retrieveClntList');
      rtnList = udc_pchsClntNo.cfCommonPopUp(scwin.udc_pchsClntNoCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //cfSetReturnValue(rtnList, ed_pchsClntNo, ed_pchsClntNm);  // 매입거래처코드,매입거래처명										
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  await $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 조회조건 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
};

//-------------------------------------------------------------------------
//엑셀 다운로드
//-------------------------------------------------------------------------		
scwin.f_downExcelSheet = async function () {
  //var vObjGrd;
  var sheetTitle;
  var cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    var sheetTitle = "거래처별 지급 관련 조회";
    const options = {
      fileName: sheetTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      ,
      sheetName: sheetTitle //엑셀내 시트명 지정필요시
    };
    const infoArr = [];
    $c.data.downloadGridViewExcel($p, gr_customerEachPaymentList, options, infoArr);
  }
  //{"fileName":"거래처별 지급 관련(셔틀/비셔틀) 조회.xlsx","sheetName": "거래처별 지급 관련(셔틀/비셔틀) 조회","type":"4+8+16"}
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  var rowcnt = ds_customerEachPaymentList.getRowCount();
  tbx_totalRows.setValue(rowcnt);
  if (rowcnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  gr_customerEachPaymentList.setFocusedCell(0, "pchsClntNo", false);
};
scwin.sbm_retrieve_submiterror = function (e) {};
scwin.udc_pchsDeptCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptCd, ed_pchsDeptNm, 1);
};
scwin.udc_pchsDeptCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptNm, ed_pchsDeptCd, 1, false);
};
scwin.udc_pchsDeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_pchsDeptCd.getValue(), ed_pchsDeptNm.getValue(), 'F', 'F');
};
scwin.udc_pchsClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNo, ed_pchsClntNm, 2);
};
scwin.udc_pchsClntNo_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNm, ed_pchsClntNo, 2, false);
};
scwin.udc_pchsClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_pchsClntNo.getValue(), ed_pchsClntNm.getValue(), 'F', 'F');
};
scwin.udc_pchsDeptCdCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_pchsDeptCd, ed_pchsDeptNm); // 매입부서코드, 매입부서명
};
scwin.udc_pchsClntNoCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_pchsClntNo, ed_pchsClntNm); // 매입거래처코드,매입거래처명
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_pchsDeptCd',codeId:'ed_pchsDeptCd',btnId:'btn_pchsDeptCd',nameId:'ed_pchsDeptNm','ev:onblurCodeEvent':'scwin.udc_pchsDeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_pchsDeptCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_pchsDeptCd_onclickEvent',mandatoryCode:'true',validTitle:'매입부서',UpperFlagCode:'1',maxlengthCode:'4',code:'pchsDeptCd',refDataCollection:'ds_customerEachPaymentList_con',allowCharCode:'A-Za-z0-9',objTypeCode:'Data',objTypeName:'key'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회계일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_postDtSt',refDataMap:'ds_customerEachPaymentList_con',refEdDt:'rsltsDtEnd',refStDt:'rsltsDtSt',style:'',edFromId:'ica_postDtSt',edToId:'ica_postDtEnd',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'조회 시작일자',titleTo:'조회 종료일자',objTypeFrom:'data',objTypeTo:'data',objTypeBtn:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_pchsClntNo',codeId:'ed_pchsClntNo',btnId:'btn_pchsClntNo',nameId:'ed_pchsClntNm','ev:onblurCodeEvent':'scwin.udc_pchsClntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_pchsClntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_pchsClntNo_onclickEvent',refDataCollection:'ds_customerEachPaymentList_con',code:'pchsClntNo',name:'pchsClntNm',UpperFlagCode:'1',maxlengthCode:'6',allowCharCode:'A-Z0-9',validTitle:'매입거래처',objTypeName:'data',objTypeCode:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_customerEachPaymentList',userAuth:'X',gridDownFn:'scwin.f_downExcelSheet'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'ds_customerEachPaymentList',id:'gr_customerEachPaymentList',style:'',visibleRowNum:'15',visibleRowNumFix:'true',autoFit:'allColumn',autoFitMinWidth:'1700',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'매입거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'매입거래처명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'C1 금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'C1 부가세',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'C3 금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'C3 부가세',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'CT 금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'CT 부가세',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'셔틀 금액',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'셔틀 부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'제외금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'제외부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'총공급액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'총부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'공급금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'부가세',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNo',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inPchsAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inVat',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outPchsAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outVat',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tsPchsAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tsVat',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shuttlePchsAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shuttleVat',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'exceptPchsAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'exceptVat',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totPchsAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totVat',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipNo',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column27',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'inPchsAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column26',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'inVat\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'outPchsAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'outVat\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'tsPchsAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'tsVat\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'shuttlePchsAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column63',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'shuttleVat\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column60',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'exceptPchsAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column57',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'exceptVat\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column54',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'totPchsAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column51',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'totVat\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})