/*amd /ui/ac/fm/stdinfomgnt/fm_100_05_07b.xml 26291 ee388d5c297c784fa6e68fa0bbebccf7f43aa097b8a0382fe7b4af87296999cf */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'drRmn',name:'잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'drSum',name:'합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'drThis',name:'당월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prtAcctNm',name:'계정과목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crThis',name:'당월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crSum',name:'합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crRmn',name:'잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'drPrevSum',name:'전월합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crPrevSum',name:'전월합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtPosSeq',name:'name11',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm2',name:'name1',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'closeYm3',name:'name2',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'type',name:'name3',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name4',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'name5',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'coCd',name:'name6',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name7',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'flag',name:'name8',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'coNm',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_search',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closeYm2',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYm3',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'type',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coNm',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fm.stdinfomgnt.RetrieveTrialBalanceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_master","key":"OUT_DS1"},{"id":"dma_search","key":"IN_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_create',action:'/ac.fm.stdinfomgnt.CreateTrialBalanceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_search","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_create_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'ACConstants',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.privAdmin = scwin.login.privAdmin;
scwin.isSubCompany = false;
scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMM");
scwin.txtCoCd = "";
scwin.txtCoClsCd = "";
scwin.isChecked = true;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  udc_uppermostAcctDeptCdInfo.hide();
};
scwin.onUdcCompleted = function () {
  scwin.f_setCompanyInfo();
  ed_closeYm2.setValue(scwin.vCurDate);
  ed_closeYm2.focus();
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------

// scwin.f_setCompanyInfo = function() {

//     if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
//         scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
//         scwin.vLoginCoClsCd =  ACConstants.CO_CLS_CD_DONGBU ;
//     }

//     ed_coCd.setValue(scwin.vLoginCoCd);

//     scwin.f_PopUpCompanyInfo('T'); 
//     scwin.txtCoCd = scwin.vLoginCoCd;
//     scwin.txtCoClsCd = scwin.vLoginCoClsCd; // 전역변수 처리 히든 인풋박스 없음

// }

//-------------------------------------------------------------------------
// 시산표 발행 
//-------------------------------------------------------------------------

scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_closeYm2, ed_deptCd]);
  if (!ret) return;
  if (dma_search.get("closeYm2") < "201101") {
    await $c.win.alert($p, "결산년월은 2011년 1월보다 작게 설정할 수 없습니다");
    ed_closeYm2.setValue(scwin.vCurDate);
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
  let ym = ed_closeYm2.getValue();
  let yyyy = ym.substring(0, 4);
  dma_search.set("closeYm3", yyyy);
};

//-------------------------------------------------------------------------
// 프로시져 실행 
//-------------------------------------------------------------------------

scwin.f_Create = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_closeYm2, ed_deptCd]);
  if (!ret) return;
  if (dma_search.get("closeYm2") < "201101") {
    await $c.win.alert($p, "결산년월은 2011년 1월보다 작게 설정할 수 없습니다");
    ed_closeYm2.setValue(scwin.vCurDate);
    return;
  }
  $c.sbm.execute($p, sbm_create);
  let ym = ed_closeYm2.getValue(); // "202509"
  let yyyy = ym.substring(0, 4); // "2025"
  dma_search.set("closeYm3", yyyy);
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------

scwin.f_openPopUp = function (flag, check) {
  // let rtnList = new Array(); 
  // 부서조회 
  let param = "";
  param = ",,,," + scwin.txtCoCd + "," + scwin.txtCoClsCd;
  rtnList = udc_acctDeptCdInfo2.cfCommonPopUp(scwin.udc_acctDeptCdInfo2_callBackFunc, ed_deptCd.getValue().trim(), ed_deptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
  // scwin.f_resultPopEd(ed_deptCd,ed_deptNm,rtnList);
};

//-------------------------------------------------------------------------
// 팝업체크
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  if (strCd.getValue().trim() == strCd.options.hidVal) return;
  strNm.setValue("");
  strCd.options.hidVal = "";
  if (strCd.getValue().trim() != "") scwin.f_openPopUp(flag, 'T');
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdInfo2_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_deptCd.setValue(rtnList[0]); // 코드
    ed_deptNm.setValue(rtnList[1]); // 명
    ed_deptCd.options.hidVal = rtnList[0]; // 히든값
  } else {
    ed_deptCd.setValue("");
    ed_deptNm.setValue("");
    ed_deptCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_master.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  let fileName = '합계잔액시산표';
  let sheetName = '시산표자료';
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    await $c.data.downloadGridViewExcel($p, gr_withholdList, {
      fileName: fileName + ".xlsx",
      sheetName: sheetName
    });
  }
};
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  scwin.txtCoCd = scwin.vLoginCoCd;
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  await udc_companyInfo.cfCommonPopUp(scwin.udc_companyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
  // SET	 
  // if(rtnList != null ) { 
  //     if (rtnList[0] == "N/A") return; 

  //     ed_coCd.setValue(rtnList[0]);	// 코드
  //     ed_coNm.setValue(rtnList[5]); // 회사명 
  //     ed_coCd.options.hidVal		= rtnList[0];  // 히든값
  //     txtCoCd.setValue(rtnList[0]);	// 회사구분  
  //     txtCoClsCd.setValue(rtnList[1]);	// 회사구분   

  // }else{
  //     ed_coCd.setValue("");
  //     ed_coNm.setValue("");
  //     ed_coCd.options.hidVal		= ""; 
  //     txtCoCd.setValue("");
  //     txtCoClsCd.setValue("");
  // }

  // 콜백fn으로 빠짐.
  // if(scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU)  {  	// 자회사 회계 시스템 
  //     scwin.isSubCompany = true;
  // }else{
  //     scwin.isSubCompany = false;
  // }
  // // 회사코드가 바뀌면 귀속부서에 해당 회사의 최상위레벨 부서를 셋팅한다.
  // if(scwin.isSubCompany == true){
  //     let acctYear = ""; //결산년월
  //     let coCd =""; //회사코드

  //     coCd = ed_coCd.getValue();

  //     //결산년월 (회계년도)
  //     if(ed_closeYm2.getValue() != ""){
  //         acctYear = ed_closeYm2.getValue().substring(0,4);   
  //     }else{
  //         acctYear = scwin.vCurDate.substring(0,4);
  //     }

  //     // 최상위부서조회
  //     udc_uppermostAcctDeptCdInfo.cfCommonPopUp(scwin.udc_uppermostAcctDeptCdInfo_callBackFunc, ed_coCd.getValue(),acctYear,pWinCloseTF,null,null,null,null,null,null,null,null,null);   

  //     // if(rtnAcctDeptList != null ) { 
  //     //     if (rtnAcctDeptList[1] == "N/A") return; 

  //     //     ed_deptCd.setValue(rtnAcctDeptList[1]); // 최상위 부서코드
  //     //     ed_deptNm.setValue("");
  //     // }

  //     // 귀속부서 조회
  //     scwin.f_openPopUp('1','T');
  // }else{
  //     dma_search.set("acctDeptCd","00000");
  //     dma_search.set("acctDeptNm","전사");
  // }
};
scwin.udc_companyInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
    ed_coCd.options.hidVal = rtnList[0];
    scwin.txtCoClsCd = rtnList[1];
    if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
      // 자회사 회계 시스템 
      scwin.isSubCompany = true;
    } else {
      scwin.isSubCompany = false;
    }
    // 회사코드가 바뀌면 귀속부서에 해당 회사의 최상위레벨 부서를 셋팅한다.
    if (scwin.isSubCompany == true) {
      let acctYear = ""; //결산년월
      let coCd = ""; //회사코드

      coCd = ed_coCd.getValue();

      //결산년월 (회계년도)
      if (ed_closeYm2.getValue() != "") {
        acctYear = ed_closeYm2.getValue().substring(0, 4);
      } else {
        acctYear = scwin.vCurDate.substring(0, 4);
      }

      // 최상위부서조회
      udc_uppermostAcctDeptCdInfo.cfCommonPopUp(scwin.udc_uppermostAcctDeptCdInfo_callBackFunc, ed_coCd.getValue(), acctYear, 'T', null, null, null, null, null, null, null, null, null);

      // if(rtnAcctDeptList != null ) { 
      //     if (rtnAcctDeptList[1] == "N/A") return; 

      //     ed_deptCd.setValue(rtnAcctDeptList[1]); // 최상위 부서코드
      //     ed_deptNm.setValue("");
      // }

      // 귀속부서 조회
    } else {
      dma_search.set("acctDeptCd", "00000");
      dma_search.set("acctDeptNm", "전사");
    }
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.isChecked == true) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
  }
  scwin.isChecked = false;
  dma_search.set("coClsCd", scwin.txtCoClsCd);
};
scwin.udc_uppermostAcctDeptCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_deptCd.setValue(rtnList[1]); // 최상위 부서코드
    ed_deptNm.setValue("");
  }
  scwin.f_openPopUp('1', 'T');
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
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
scwin.udc_acctDeptCdInfo2_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};

// scwin.udc_acctDeptCdInfo2_onviewchangeNameEvent = function (e) {
//     ed_deptNm.setValue("")
//     if (ed_deptCd.getValue() != ""){

//         scwin.f_checkPopEd(ed_deptCd,ed_deptNm,'1');
//     }
// };

scwin.udc_acctDeptCdInfo2_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_deptCd, ed_deptNm, '1');
};

// rowcounts
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_master.getRowCount());
  if (ds_master.getRowCount() === 0) {
    await $c.win.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_create_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.win.alert($p, MSG_CM_INF_001);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'searchTable',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 20%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:95px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',style:'',class:'',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_company',objTypeCode:'data',mandatoryCode:'true',validExpCode:'회사코드:yes',allowCharCode:'0-9',maxlengthCode:'3',maxlengthName:'65',objTypeName:'data',code:'coCd',refDataCollection:'dma_search',popupTitle:'회사조회,회사코드,법인명',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',id:'udc_companyInfo',selectID:'retrieveDongbuGroupCompanyInfo','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent',name:'coNm','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_companyInfo_onviewchangeNameEvent',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'결산년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'form-control cal',id:'ed_closeYm2',style:'',displayFormat:'yyyy/MM',mandatory:'true',validExp:'결산년월:yes:format=000000',ref:'data:dma_search.closeYm2',title:'결산년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',style:'',class:'col7',codeId:'ed_deptCd',nameId:'ed_deptNm',btnId:'btn_deptCd',refDataMap:'dma_search',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명',allowCharCode:'0-9',maxlengthCode:'5',mandatoryCode:'true',validExpCode:'귀속부서코드:yes',objTypeCode:'data',objTypeName:'data',code:'acctDeptCd',name:'acctDeptNm',refDataCollection:'dma_search',onloadCallbackFunc:'',selectID:'retrieveAcctDeptCdInfo2',id:'udc_acctDeptCdInfo2',popupGridHeadTitle:'귀속코드,부서명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo2_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCdInfo2_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCdInfo2_onviewchangeNameEvent',validTitle:'귀속부서코드'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'합계잔액시산표',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'Y',gridUpYn:'N',gridID:'gr_withholdList',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'cell',id:'gr_withholdList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'12',visibleRowNumFix:'true',columnMove:'true',dataDragSelectAutoScroll:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'210',value:'차변',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'400',value:'계정과목',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'대변',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'잔액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'당월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'당월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'잔액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'drRmn',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'right',displayFormat:'#,##0',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'drSum',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'right',displayFormat:'#,##0',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'drThis',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'right',displayFormat:'#,##0',maxLength:'.3',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'prtAcctNm',inputType:'text',removeBorderStyle:'false',width:'400',textAlign:'left',style:'white-space: pre;',class:'ws-pre'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crThis',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crSum',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crRmn',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',excelCellType:'number',dataType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column38',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column37',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column36',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'400',inputType:'text',style:'',id:'column35',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column34',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column33',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column32',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Create',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'생성'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',class:'col7',code:'acctDeptCd',codeId:'','ev:onblurCodeEvent':'scwin.udc_dept_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dept_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_dept_onviewchangeNameEvent',id:'udc_uppermostAcctDeptCdInfo',maxlengthCode:'5',name:'acctDeptNm',nameId:'',objTypeCode:'data',objTypeName:'data',onloadCallbackFunc:'',popupGridHeadTitle:'귀속코드,부서명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',popupID:'',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명',refDataCollection:'dma_search',refDataMap:'dma_search',selectID:'retrieveAcctDeptCdInfo2',style:'visibility: hidden;',validExpCode:'귀속부서코드:yes',validTitle:'귀속부서코드'}},{T:1,N:'w2:udc_comCode',A:{class:'col7',codeId:'','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo2_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCdInfo2_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCdInfo2_onviewchangeNameEvent',id:'udc_uppermostAcctDeptCdInfo',nameId:'',onloadCallbackFunc:'',popupGridHeadTitle:'귀속코드,부서명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',popupID:'',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명',refDataMap:'dma_search',selectID:'retrieveUppermostAcctDeptCdInfo',style:'visibility: hidden;',validTitle:'귀속부서코드'}}]}]}]}]}]})