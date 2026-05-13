/*amd /ui/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_01_04b.xml 34374 cd838422dfc3460f58c7474c08f185279500b0446a803003f1f0e8d9ff189120 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgCollMoneyAcctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCls',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'upperBizdivCd',name:'상위사업부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperBizdivNm',name:'상위사업부명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizdivCd',name:'사업부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizdivNm',name:'사업부명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperAcctDeptNm',name:'지사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'aamt',name:'총채권;(외상매출)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyFddUnArrv',name:'정상채권',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovr1Dd',name:'1일~15일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovr15Dd',name:'16일~30일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovr30Dd',name:'31일~60일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmamt',name:'관리채권 계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovr60Dd',name:'61일~180일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovr180Dd',name:'180일초과',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iiamt',name:'부실채권 계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmiiamt',name:'계;(관리+부서)',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RetrieveManagementInsolvencyAccountReceivablePresentConditionAggregationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//환경변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd ?? "";
scwin.vLoginCoClsCd = scwin.login.coClsCd ?? "";
scwin.sDate = WebSquare.date.getCurrentServerDate().substring(0, 6);
scwin.txtCoClsCd = "";
scwin.isSubCompany = false;
scwin.isChecked = true;

//그리드 원본데이터
scwin.originData = {};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = async function () {
  const codeOptions = [{
    grpCd: "CO012",
    compID: "acb_unit"
  }];
  await $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, table1, [ica_srchStdDt]);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  $c.gus.cfInitHidVal($p, table1);
  ica_srchStdDt.setValue(scwin.sDate);
  ica_srchStdDt.focus();
  scwin.acb_unit_onviewchange();
};
scwin.onUdcCompleted = function () {
  // $c.gus.cfDisableKey();
  // scwin.f_SearchHeaderCreate();
  $c.gus.cfDisableKey($p);
  scwin.f_FieldClear();
  // scwin.f_Setting();
  // lc_acctDeptCls.index = 0;
  scwin.f_setCompanyInfo();
  //  sp_title.innerText = ed_FromDate.getValue().trim().substring(5,7)+"월 말현재";  
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
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
// Header 초기화
//-------------------------------------------------------------------------
/* scwin.f_SearchHeaderCreate = function () {
    let GAUCE_DATASET_HEADER =  "coCd:STRING(3)"		 //회사코드 
                                + ", stdDt:STRING" 
                                + ",bilgCollMoneyAcctDeptCd:STRING"     
                                + ",acctDeptCls:STRING";
    //ds_search.ClearAll();
    ds_search.SetDataHeader(GAUCE_DATASET_HEADER);
    ds_search.insertRow();
}
 */

//-------------------------------------------------------------------------
//  Grid 화면 Setting
//-------------------------------------------------------------------------
/*
 scwin.f_Setting = function () {
   
 	if ( lc_acctDeptCls.getValue() == "01" ) {
 		sellAcctDeptId.style.display = "inline";
 		collMoneyAcctDeptId.style.display = "none";
 		
	
 	} else if (lc_acctDeptCls.getValue() == "02") {
 		sellAcctDeptId.style.display = "none";
 		collMoneyAcctDeptId.style.display = "inline";
 		
 		
 	}
 } 
*/
//-------------------------------------------------------------------------
// 조회(관리부실채권현황)
//-------------------------------------------------------------------------

scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ica_srchStdDt]))) return;
  if (!(await $c.gus.cfValidate($p, [ed_coCd]))) return false;

  /*
  if ( lc_acctDeptCls.getValue() == "01" ) {
  $c.sbm.execute(sbm_search);
   } else if ( lc_acctDeptCls.getValue() == "02" ) {
  $c.sbm.execute(sbm_search2);
       }
  */

  // ds_search.setUseChangeInfo(false);
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// Object 값 반환함수
//-------------------------------------------------------------------------
scwin.f_GetObjValue = function (inObj) {
  return inObj._wTagName == "OBJECT" ? inObj.getValue().trim() : inObj.getValue().trim();
};

//-------------------------------------------------------------------------
// Object 값 설정함수
//-------------------------------------------------------------------------
scwin.f_SetObjValue = function (inObj, val) {
  if (inObj._wTagName == "OBJECT") inObj.setValue(val);else inObj.setValue(val);
};
//-------------------------------------------------------------------------
// 팝업 이벤트에 따라 팝업창을 자동닫기 여부를 구한다.
//-------------------------------------------------------------------------
scwin.f_EventCheck = function () {
  if (window.event != null && window.event._wTagName == "IMG") {
    return 'F';
  } else {
    return 'T';
  }
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------

scwin.f_PopUp = function (cdObj, nmObj, sQueryID, sWhere, sWidth) {
  udc_dept.cfCommonPopUp(sQueryID, scwin.f_GetObjValue(cdObj), "", "T", null, null, null, null, sWhere, sWidth, null, null, null);
};
scwin.f_PopUp1 = function (cdObj, nmObj, sQueryID, sWhere, sWidth) {
  udc_dept.cfCommonPopUp(sQueryID, scwin.f_GetObjValue(cdObj), "", "F", null, null, null, null, sWhere, sWidth, null, null, null);
};

//-------------------------------------------------------------------------
// 팝업 여부 검사
//-------------------------------------------------------------------------
scwin.f_IsPopUp = function (inObj) {
  let inValue = scwin.f_GetObjValue(inObj);
  let hidValue = inObj.options.hidVal;
  if ($c.gus.cfIsNull($p, inValue)) {
    for (let i = 1; i < f_IsPopUp.arguments.length; i++) {
      scwin.f_SetObjValue(f_IsPopUp.arguments[i], "");
    }
    return;
  }
  if (inValue == hidValue) return;
  return true;
};
//-------------------------------------------------------------------------
// 부서코드팝업
//-------------------------------------------------------------------------
scwin.f_deptPopUp = function () {
  param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
  // let rtnList = scwin.f_PopUp(ed_srchAcctDeptCd, ed_srchAcctDeptNm, 'retrieveAcctDeptCdInfo', null, '410');
  scwin.f_PopUp(ed_srchAcctDeptCd, ed_srchAcctDeptNm, scwin.udc_dept_callBackFunc, param, null);
};
scwin.f_deptPopUp1 = function () {
  param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
  // let rtnList = scwin.f_PopUp(ed_srchAcctDeptCd, ed_srchAcctDeptNm, 'retrieveAcctDeptCdInfo', null, '410');
  scwin.f_PopUp1(ed_srchAcctDeptCd, ed_srchAcctDeptNm, scwin.udc_dept_callBackFunc, param, null);
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    if (orgObjCd.getValue() == orgObjCd.options.hidVal) {
      return;
    } else {
      orgObjNm.setValue("");
    }
  } else {
    if (orgObjNm.getValue() == orgObjNm.options.hidVal) {
      return;
    } else {
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
    }
  }

  // 정상조회여부 확인
  if (select_code != "3") checkSearch = false;
  if (orgObjCd.getValue().trim() != "" || flag == "NM") {
    if (orgObjNm.getValue().trim() != "" || flag == "CD") {
      // orgObjCd.setValue(orgObjCd.getValue().trim());
      // orgObjNm.setValue(orgObjNm.getValue().trim());
      scwin.f_PopUp(orgObjCd, orgObjNm);
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------

scwin.udc_dept_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_srchAcctDeptCd.setValue(rtnList[0]);
    ed_srchAcctDeptNm.setValue(rtnList[1]);
    ed_srchAcctDeptCd.options.hidVal = rtnList[0];
    ed_srchAcctDeptNm.options.hidVal = rtnList[1];
    scwin.f_SetObjValue(ed_srchAcctDeptCd, rtnList[0]);
    scwin.f_SetObjValue(ed_srchAcctDeptNm, rtnList[1]);
  } else {
    ed_srchAcctDeptCd.setValue("");
    ed_srchAcctDeptNm.setValue("");
    ed_srchAcctDeptCd.options.hidVal = "";
    ed_srchAcctDeptNm.options.hidVal = "";
    scwin.f_SetObjValue(ed_srchAcctDeptCd, "");
    scwin.f_SetObjValue(ed_srchAcctDeptNm, "");
  }
};

//-------------------------------------------------------------------------
// 엑셀 Download
//-------------------------------------------------------------------------
scwin.f_Export = async function () {
  if (ds_master.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  let fileName = '관리부실채권현황내역_' + ica_srchStdDt.getValue();
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    await $c.data.downloadGridViewExcel($p, gr_master, {
      fileName: fileName + ".xlsx",
      sheetName: fileName,
      useSubTotal: true
    });
  }
};

//-------------------------------------------------------------------------
// 그리드의 단위를 변경한다.
//-------------------------------------------------------------------------
scwin.f_changeUnit = function () {
  if (acb_unit.getValue() == "01") {
    scwin.f_changeUnitAmt(1);
  } else if (acb_unit.getValue() == "02") {
    scwin.f_changeUnitAmt(1000);
  } else if (acb_unit.getValue() == "03") {
    scwin.f_changeUnitAmt(1000000);
  } else if (acb_unit.getValue() == "04") {
    scwin.f_changeUnitAmt(100000000);
  }
};

//-------------------------------------------------------------------------
// 그리드의 단위를 변경한다.
//-------------------------------------------------------------------------

scwin.f_changeUnitAmt = function (unitAmt) {
  const data = JSON.parse(JSON.stringify(scwin.originData));
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    const ovr1 = parseFloat(row.ovr1Dd) || 0;
    const ovr15 = parseFloat(row.ovr15Dd) || 0;
    const ovr30 = parseFloat(row.ovr30Dd) || 0;
    const ovr60 = parseFloat(row.ovr60Dd) || 0;
    const ovr180 = parseFloat(row.ovr180Dd) || 0;
    const collUnArrv = parseFloat(row.collMoneyFddUnArrv) || 0;
    row.aamt = Math.round((collUnArrv + ovr1 + ovr15 + ovr30 + ovr60 + ovr180) / unitAmt);
    row.mmamt = Math.round((ovr1 + ovr15 + ovr30) / unitAmt);
    row.iiamt = Math.round((ovr60 + ovr180) / unitAmt);
    row.mmiiamt = Math.round((ovr1 + ovr15 + ovr30 + ovr60 + ovr180) / unitAmt);
    const simpleCols = ["collMoneyFddUnArrv", "ovr1Dd", "ovr15Dd", "ovr30Dd", "ovr60Dd", "ovr180Dd"];
    for (const col of simpleCols) {
      if (row.hasOwnProperty(col)) {
        row[col] = Math.round((parseFloat(row[col]) || 0) / unitAmt);
      }
    }
  }
  ds_master.setJSON(data);
  let options = {};
  options.sortIndex = "upperBizdivNm bizdivNm upperAcctDeptNm upperAcctDeptNm2";
  options.sortOrder = "1 1 1 1";
  ds_master.multisort(options);
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------
//decode
scwin.acctDeptNmDisplayFm = function (data) {
  return $c.gus.decode($p, level, 0, data, 1, upperAcctDeptNm2, 2, upperAcctDeptNm, 3, bizdivNm, 4, upperBizdivNm);
};
scwin.udc_dept_onclickEvent = function (e) {
  scwin.f_deptPopUp1();
};
scwin.udc_dept_onblurCodeEvent = function (e) {
  if (ed_srchAcctDeptCd.getValue() != "") {
    scwin.f_deptPopUp();
  } else {
    ed_srchAcctDeptNm.setValue("");
  }
};
scwin.sbm_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  scwin.originData = ds_master.getAllJSON();
  scwin.f_changeUnit();
  let rowCnt = ds_master.getRowCount();
  totalRows.setValue(rowCnt);
  ds_master.clearSort();
  let options = {};
  options.sortIndex = "upperBizdivNm bizdivNm";
  options.sortOrder = "1 1";
  ds_master.multisort(options);
};
scwin.acb_unit_onviewchange = function (info) {
  scwin.f_changeUnit();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'table1',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'회사코드 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'3',objTypeCode:'data',refDataCollection:'dma_search','ev:onviewchangeNameEvent':'scwin.udc_companyInfo_onviewchangeNameEvent',code:'coCd',popupID:'',UpperFlagCode:'1',validExpCode:'회사코드:yes',btnId:'btn_company',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent',allowCharCode:'0-9',codeId:'ed_coCd',selectID:'retrieveDongbuGroupCompanyInfo',popupTitle:'',objTypeName:'data',nameId:'ed_coNm',style:'',id:'udc_companyInfo','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'기준년월 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{ref:'data:dma_search.stdDt',displayFormat:'yyyy/MM',style:'',id:'ica_srchStdDt',class:' cal',calendarValueType:'yearMonth',title:'기준년월',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'청구(수금)귀속부서 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'5',objTypeCode:'data',refDataCollection:'dma_search',code:'bilgCollMoneyAcctDeptCd',popupID:'',maxlengthName:'30','ev:onclickEvent':'scwin.udc_dept_onclickEvent',allowCharCode:'0-9',codeId:'ed_srchAcctDeptCd',selectID:'retrieveAcctDeptCdInfo6',popupTitle:'',objTypeName:'data',nameId:'ed_srchAcctDeptNm',style:'',id:'udc_dept','ev:onblurCodeEvent':'scwin.udc_dept_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'귀속구분 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{ref:'data:dma_search.acctDeptCls',search:'start',submenuSize:'auto',chooseOption:'',editType:'select',style:'width: 230px;',allOption:'',id:'acb_acctDeptCls',class:'',title:'귀속구분',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'청구'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'단위 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto','ev:onviewchange':'scwin.acb_unit_onviewchange',editType:'select',style:'width: 120px;',id:'acb_unit',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_FieldClear',style:'',id:'btn_init',type:'button',class:'btn ico refresh'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'R','ev:onclick':'scwin.f_Retrieve',disabled:'',style:'',id:'btn_trigger3',type:'button',class:'btn sch',escape:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section2',style:'',gridID:'gr_master',gridDownFn:'scwin.f_Export'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_master',style:'',readOnly:'true',columnMove:'true',autoFit:'allColumn',id:'gr_master',class:'wq_gvw',visibleRowNum:'15'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'120',inputType:'text',style:'',id:'column1',value:'상위사업부',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'130',inputType:'text',style:'',id:'column17',value:'상위사업부명',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column15',value:'사업부',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column13',value:'사업부명',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'120',inputType:'text',style:'',id:'column11',value:'지사',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column40',value:'총채권</br>(외상매출)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column37',value:'정상채권',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'4',width:'480',inputType:'text',style:'',id:'column34',value:'관리채권',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'3',width:'360',inputType:'text',style:'',id:'column5',value:'부실채권',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'120',inputType:'text',style:'',id:'column49',value:'계</br>(관리+부서)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'70',inputType:'text',style:'',id:'column43',value:'레벨',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column35',value:'1일~15일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column32',value:'16일~30일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column25',value:'31일~60일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column24',value:'관리채권 계',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column23',value:'61일~180일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column22',value:'180일초과',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'부실채권 계',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',style:'',id:'upperBizdivCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'130',inputType:'text',style:'',id:'upperBizdivNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',style:'',id:'bizdivCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',style:'',id:'bizdivNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'upperAcctDeptNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{dataType:'number',width:'100',displayFormat:'#,##0',inputType:'text',style:'',id:'aamt',value:'',displayMode:'label',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{dataType:'number',width:'100',displayFormat:'#,##0',inputType:'text',style:'',id:'collMoneyFddUnArrv',value:'',displayMode:'label',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{dataType:'number',width:'120',displayFormat:'#,##0',inputType:'text',style:'',id:'ovr1Dd',value:'',displayMode:'label',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{dataType:'number',width:'120',displayFormat:'#,##0',inputType:'text',style:'',id:'ovr15Dd',value:'',displayMode:'label',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{dataType:'number',width:'120',displayFormat:'#,##0',inputType:'text',style:'',id:'ovr30Dd',value:'',displayMode:'label',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{dataType:'number',width:'120',displayFormat:'#,##0',inputType:'text',style:'',id:'mmamt',value:'',displayMode:'label',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{dataType:'number',width:'120',displayFormat:'#,##0',inputType:'text',style:'',id:'ovr60Dd',value:'',displayMode:'label',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{dataType:'number',width:'120',displayFormat:'#,##0',inputType:'text',style:'',id:'ovr180Dd',value:'',displayMode:'label',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{dataType:'number',width:'120',displayFormat:'#,##0',inputType:'text',style:'',id:'iiamt',value:'',displayMode:'label',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{dataType:'number',width:'120',displayFormat:'#,##0',inputType:'text',style:'',id:'mmiiamt',value:'',displayMode:'label',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'bizdivNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'targetColValue()',width:'120',inputType:'expression',style:'',id:'column61',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{expression:'SUM("aamt")',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{expression:'SUM("collMoneyFddUnArrv")',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column59',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{expression:'SUM("ovr1Dd")',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',style:'',id:'column58',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{expression:'SUM("ovr15Dd")',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',style:'',id:'column57',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{expression:'SUM("ovr30Dd")',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',style:'',id:'column56',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{expression:'SUM("mmamt")',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',style:'',id:'column55',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{expression:'SUM("ovr60Dd")',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',style:'',id:'column54',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{expression:'SUM("ovr180Dd")',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',style:'',id:'column53',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{expression:'SUM("iiamt")',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',style:'',id:'column52',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{expression:'SUM("mmiiamt")',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',style:'',id:'column51',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'upperBizdivNm',style:'',id:'subTotal2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'targetColValue()',width:'120',inputType:'expression',style:'',id:'column77',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{expression:'SUM("aamt")',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column76',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{expression:'SUM("collMoneyFddUnArrv")',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column75',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{expression:'SUM("ovr1Dd")',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',style:'',id:'column74',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{expression:'SUM("ovr15Dd")',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',style:'',id:'column73',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{expression:'SUM("ovr30Dd")',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',style:'',id:'column72',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{expression:'SUM("mmamt")',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',style:'',id:'column71',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{expression:'SUM("ovr60Dd")',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',style:'',id:'column70',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{expression:'SUM("ovr180Dd")',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{expression:'SUM("iiamt")',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',style:'',id:'column68',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{expression:'SUM("mmiiamt")',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',style:'',id:'column67',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]}]}]})