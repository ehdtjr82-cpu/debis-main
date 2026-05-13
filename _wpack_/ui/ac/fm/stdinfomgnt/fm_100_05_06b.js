/*amd /ui/ac/fm/stdinfomgnt/fm_100_05_06b.xml 31122 2672dbeb41421c39d3d986a518e16f24a3be9e827cb04e41b4c43bb8cfd10034 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchBankbook'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromDate',name:'수취일자 시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDate',name:'수취일자 종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bankbookHistory',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bankbookNo',name:'통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crAmt',name:'전도금월계표 출금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'drAmt',name:' 전도금월계표 입금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crdrBalanceAmt',name:'전도금월계표 잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outAmt',name:'통장입출금 내역 출금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inAmt',name:'통장입출금 내역 입금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inoutBalanceAmt',name:'통장입출금 내역 잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'gapOutAmt',name:'전도금-통장입출금 내역 출금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'gapInAmt',name:'전도금-통장입출금 내역 입금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'gapBalanceAmt',name:'전도금-통장입출금 내역 잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slip',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crAmt',name:'출금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'drAmt',name:'입금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'balanceAmt',name:'잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_inout',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'txnDt',name:'거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAmt',name:'출금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inAmt',name:'입금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inoutBalAmt',name:'잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'jeokyo',name:'적요',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchBankbook',action:'/ac.fm.stdinfomgnt.RetrieveAdvanceBankbookContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchBankbook","key":"IN_DS1"},{"id":"ds_bankbookHistory","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_bankbookHistory","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchBankbook_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchDetail',action:'/ac.fm.stdinfomgnt.RetrieveAdvanceBankbookDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchBankbook","key":"IN_DS1"},{"id":"ds_slip","key":"OUT_DS1"},{"id":"ds_inout","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_slip","key":"OUT_DS1"},{"id":"ds_inout","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchDetail_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.strCurDate = WebSquare.date.getCurrentServerDate();
scwin.strFromDate = scwin.strCurDate.substring(0, 6) + "01";
scwin.strToDate = scwin.strCurDate;
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.isChecked = true;
scwin.isSubCompany = false;
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  dma_searchBankbook.set("fromDate", scwin.strFromDate);
  dma_searchBankbook.set("toDate", scwin.strToDate);
  $c.gus.cfDisableKey($p);
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  debugger;
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_companyInfo.cfCommonPopUp(scwin.udc_companyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo("F");
};
scwin.udc_companyInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
    ed_coCd.options.hidVal = rtnList[0];
    scwin.txtCoClsCd = rtnList[1];
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isChecked == true) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
  }
  scwin.isChecked = false;
};
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  }
};
scwin.udc_companyInfo_onviewchangeNameEvent = function (info) {
  ed_coCd.setValue("");
  if (ed_coNm.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ed_FromDate.getValue() > ed_ToDate.getValue()) {
    await $c.win.alert($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ed_FromDate.focus();
    return;
  }
  if (!(await $c.gus.cfValidate($p, [ed_coCd]))) return;
  $c.sbm.execute($p, sbm_searchBankbook);
};

//사용안함
//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
// function f_openPopUp(select_code,txtCode,txtName,sFlag) {
//     var rtnList = null;
//     var sCmdName = "";
//     code = txtCode.Text.trim();
//     name = txtName.value;
//     var param = ",,,15";

//     switch (select_code) {
//         case '1' :
//             sCmdName = "retrieveBankBookCdInfo"
//             rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null,null,"F",null,null); // 통장
//     }

//     if ( rtnList != null ) {
//         if (rtnList[0] == "N/A") return;
//         txtCode.Text = rtnList[0].trim();	// 코드
//         txtName.value = rtnList[2];	// 코드명
//         txtCode.hidVal = rtnList[0];	// 코드
//     } else {
//         txtCode.Text = "";	// 코드
//         txtName.value = "";	// 코드명
//         txtCode.hidVal = "";	// 코드
//     }
// }
//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
// function f_CheckPopUp(orgObjCd, orgObjNm,select_code) {

//     if (orgObjCd.tagName.toUpperCase() == "INPUT" ) {
//         if (orgObjCd.value != orgObjCd.hidVal){
//             orgObjNm.value = "";
//         }

//         if (orgObjCd.value.trim() != "" ) {
//             f_openPopUp(select_code,orgObjCd,orgObjNm,"T")
//         } else {
//             if (!orgObjNm == null)
//             {
//                 orgObjNm.value = "";
//             }
//             orgObjCd.value = "";
//             orgObjCd.hidVal = "";
//         }
//     }
//     else if (orgObjCd.tagName.toUpperCase() == "OBJECT" ) {
//         if (orgObjCd.Text != orgObjCd.hidVal){
//             orgObjNm.value = "";
//         }

//         if (orgObjCd.Text.trim() != "") {
//             f_openPopUp(select_code,orgObjCd,orgObjNm,"T");
//         } else {
//             if (!orgObjNm == null)
//             {
//                 orgObjNm.Text = "";
//             }
//             orgObjCd.Text = "";
//         }
//     }
// }

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (ds_bankbookHistory.getRowCount() == 0) {
    await $c.win.alert($p, "전도금 입출금 내역이 존재하지않습니다.");
    return;
  }
  let fileName = "전도금 총괄내역";
  await $c.data.downloadGridViewExcel($p, gr_bankbookHisotry, {
    fileName: fileName + ".xlsx",
    sheetName: fileName
  });
};
scwin.f_GridToExcel_2 = async function () {
  if (ds_bankbookHistory.getRowCount() == 0) {
    await $c.win.alert($p, "전도금 입출금 내역이 존재하지않습니다.");
    return;
  }
  let fileName = "전도금 월계표";
  await $c.data.downloadGridViewExcel($p, gr_slip, {
    fileName: fileName + ".xlsx",
    sheetName: fileName
  });
};
scwin.f_GridToExcel_3 = async function () {
  if (ds_bankbookHistory.getRowCount() == 0) {
    await $c.win.alert($p, "전도금 입출금 내역이 존재하지않습니다.");
    return;
  }
  let fileName = "전도금 입출금";
  await $c.data.downloadGridViewExcel($p, gr_inout, {
    fileName: fileName + ".xlsx",
    sheetName: fileName
  });
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------
scwin.sbm_searchBankbook_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_bankbookHistory.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
  }
  dma_searchBankbook.set("bankbookNo", ds_bankbookHistory.getCellData(0, "bankbookNo"));
  dma_searchBankbook.set("acctDeptCd", ds_bankbookHistory.getCellData(0, "acctDeptCd"));
  $c.sbm.execute($p, sbm_searchDetail);
};
scwin.sbm_searchDetail_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows_slip.setValue(ds_slip.getRowCount());
  totalRows_inout.setValue(ds_inout.getRowCount());
};

//-------------------------------------------------------------------------
//그리드 이벤트
//-------------------------------------------------------------------------
scwin.gr_bankbookHisotry_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  // 선택된 row에서 bankbookNo, acctDeptCd 가져오기 (DataList)
  let bankbookNo = ds_bankbookHistory.getCellData(rowIndex, "bankbookNo");
  let acctDeptCd = ds_bankbookHistory.getCellData(rowIndex, "acctDeptCd");

  // DataMap에 세팅
  dma_searchBankbook.set("bankbookNo", bankbookNo);
  dma_searchBankbook.set("acctDeptCd", acctDeptCd);

  // 서브미션 실행
  $c.sbm.execute($p, sbm_searchDetail);
};
scwin.gr_slip_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "slipNo") {
    $c.gus.cfShowSlipInfo($p, ds_slip.getCellData(rowIndex, "slipNo"));
  }
};

// <!-- 전표번호클릭시  -->   
// <script language="javascript"  for=gr_slip event=OnClick(Row,Colid)>
// 	if(Colid=="slipNo" && Row >0){
// 		cfShowSlipInfo(ds_slip.NameValue(Row,"slipNo"));
// 	}
}}}]},{T:3,text:'\n\n\n\n]]>\n		'},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',style:'',class:'col8',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_company',mandatoryCode:'true',validExpCode:'회사코드:yes',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',objTypeName:'data',maxlengthCode:'3',code:'coCd',name:'coNm',selectID:'retrieveDongbuGroupCompanyInfo',id:'udc_companyInfo',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',popupTitle:'회사조회,회사코드,법인명',maxlengthName:'65',refDataCollection:'dma_searchBankbook','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_companyInfo_onviewchangeNameEvent',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회계처리일자 / 거래일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_cal',refDataMap:'dma_searchBankbook',refEdDt:'toDate',refStDt:'fromDate',style:'',edFromId:'ed_FromDate',edToId:'ed_ToDate',objTypeTo:'data',objTypeFrom:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'전도금 총괄내역 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',style:'',gridID:'gr_bankbookHisotry',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',scrollByColumn:'false',readOnly:'true',checkReadOnlyOnPasteEnable:'',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_bankbookHistory',style:'',autoFit:'allColumn',id:'gr_bankbookHisotry',visibleRowNum:'10','ev:oncelldblclick':'scwin.gr_bankbookHisotry_oncelldblclick',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',value:'통장번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',removeBorderStyle:'false',width:'150',inputType:'text',id:'column11',value:'부서명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'3',removeBorderStyle:'false',width:'210',inputType:'text',id:'column10',value:'전도금월계표',blockSelect:'false',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'3',width:'210',inputType:'text',style:'',id:'column19',value:'통장입출금 내역',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'3',width:'210',inputType:'text',style:'',id:'column15',value:'전도금-통장입출금 내역',displayMode:'label',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'출금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'입금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'잔액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'출금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'입금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'잔액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'출금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'입금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'잔액',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{textAlign:'center',removeBorderStyle:'false',width:'100',inputType:'text',id:'bankbookNo',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'150',inputType:'text',id:'acctDeptNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',id:'crAmt',blockSelect:'false',displayMode:'label',maxLength:'.3',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',id:'drAmt',blockSelect:'false',displayMode:'label',maxLength:'.3',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',style:'',id:'crdrBalanceAmt',value:'',displayMode:'label',maxLength:'.3',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',style:'',id:'outAmt',value:'',displayMode:'label',maxLength:'.3',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',style:'',id:'inAmt',value:'',displayMode:'label',maxLength:'.3',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',style:'',id:'inoutBalanceAmt',value:'',displayMode:'label',maxLength:'.3',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',style:'',id:'gapOutAmt',value:'',displayMode:'label',maxLength:'.3',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',style:'',id:'gapInAmt',value:'',displayMode:'label',maxLength:'.3',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',style:'',id:'gapBalanceAmt',value:'',displayMode:'label',maxLength:'.3',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'전도금 월계표',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_slip',gridDownFn:'scwin.f_GridToExcel_2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_slip',scrollByColumn:'false',style:';color:;',autoFit:'allColumn',id:'gr_slip',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true','ev:oncellclick':'scwin.gr_slip_oncellclick',visibleRowNum:'6'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column12',blockSelect:'false',displayMode:'label',value:'회계일자'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column11',blockSelect:'false',displayMode:'label',value:'출금액'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column10',blockSelect:'false',displayMode:'label',value:'입금액'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column9',blockSelect:'false',displayMode:'label',value:'잔액'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'적요',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'calendar',id:'postDt',blockSelect:'false',displayMode:'label',editFormat:'####/##/##',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'crAmt',blockSelect:'false',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'drAmt',blockSelect:'false',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'balanceAmt',blockSelect:'false',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'color: blue;text-decoration: underline;',id:'slipNo',value:'',displayMode:'label',class:'underline',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column27',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'crAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column26',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'drAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'',style:'',id:'column25',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows_slip',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'전도금 입출금',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridUpYn:'N',grdDownOpts:'{"fileName" : "전도금 입출금.xlsx" ,"type" : "1" }',gridID:'gr_inout',gridDownFn:'scwin.f_GridToExcel_3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section3',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_inout',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_inout',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true',visibleRowNum:'6'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column12',blockSelect:'false',displayMode:'label',value:'거래일자'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column11',blockSelect:'false',displayMode:'label',value:'출금액'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column10',blockSelect:'false',displayMode:'label',value:'입금액'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column9',blockSelect:'false',displayMode:'label',value:'잔액'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'적요',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'calendar',id:'txnDt',blockSelect:'false',displayMode:'label',editFormat:'####/##/##',readOnly:'true',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'outAmt',blockSelect:'false',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'inAmt',blockSelect:'false',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'inoutBalAmt',blockSelect:'false',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'jeokyo',value:'',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column26',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'outAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column25',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'inAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'',style:'',id:'column24',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows_inout',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]}]}]}]}]}]})