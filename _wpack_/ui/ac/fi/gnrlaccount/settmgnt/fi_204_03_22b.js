/*amd /ui/ac/fi/gnrlaccount/settmgnt/fi_204_03_22b.xml 18251 f5d3681028f682d3566b71c54255ecf3e1dad608a12becfed2abc83f479aeb4e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm2',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctCd',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drRmn',name:'차변',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crRmn',name:'대변',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.gnrlaccount.settmgnt.RetrieveGroupBalanceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 그룹 연결용 시산표
 * 메뉴경로 : 회계/재무회계/일반회계/결산관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ac/fi/gnrlaccount/settmgnt/fi_204_03_22b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-12
 * 수정이력  :
 *    - 2025-12-12      정승혜    최초작성
 *    - 2026-02-02      정승혜    기타수정
 * 메모 :
 * 조회조건 : 201111
 * 
 */

// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.isSubCompany = false;
scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMM");
scwin.txtCoCd = "";
scwin.txtCoClsCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  scwin.f_Header();
  scwin.f_setCompanyInfo();

  //날짜셋팅
  ica_closeYm2.setValue(scwin.vCurDate);
  ica_closeYm2.focus();
  udc_uppermostAcctDeptCdInfo.hide();
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
  scwin.txtCoCd = scwin.vLoginCoCd;
  scwin.txtCoClsCd = scwin.vLoginCoClsCd; // 전역변수 처리 히든 인풋박스 없음
};

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)

  if (!$c.gus.cfIsNull($p, ed_deptCd.getValue())) {
    scwin.f_openPopUp('1', 'T');
  }
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  ed_coNm.setValue("");
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_setCompanyInfo();
  ica_closeYm2.setValue(scwin.vCurDate);
};

//-------------------------------------------------------------------------
// 시산표 발행 
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ica_closeYm2, ed_deptCd, ed_coCd]);
  if (!ret) {
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
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
};

//-------------------------------------------------------------------------
// 팝업체크
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  if (strCd.getValue().trim() == strCd.options.hidVal) return;
  strNm.setValue("");
  strCd.options.hidVal = "";
  if (strCd.getValue().trim() != "") {
    scwin.f_openPopUp(flag, 'T');
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function () {
  //udc
};
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
// 엑셀다운 1+8+16
scwin.f_Excel = async function () {
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    let fileName = '그룹연결용 시산표';
    let sheetTitle = "그룹 연결용 시산표자료";
    $c.data.downloadGridViewExcel($p, gr_withholdList, {
      fileName: fileName + ".xlsx",
      sheetName: sheetTitle,
      type: 1
    });
  }
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  await udc_companyInfo.cfCommonPopUp(scwin.udc_companyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_companyInfo_callBackFunc = async function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
    ed_coCd.options.hidVal = rtnList[0];
    scwin.txtCoCd = rtnList[0];
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
      if (ica_closeYm2.getValue() != "") {
        acctYear = ica_closeYm2.getValue().substring(0, 4);
      } else {
        acctYear = scwin.vCurDate.substring(0, 4);
      }

      // 최상위부서조회
      await udc_uppermostAcctDeptCdInfo.cfCommonPopUp(scwin.udc_uppermostAcctDeptCdInfo_callBackFunc, ed_coCd.getValue(), acctYear, "T", null, null, null, null, null, null, null, null, null);
    } else {
      dma_search.set("acctDeptCd", "00000");
      dma_search.set("acctDeptNm", "전사");
    }
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
    scwin.txtCoCd = "";
  }
};
scwin.udc_uppermostAcctDeptCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_deptCd.setValue(rtnList[1]); // 최상위 부서코드
    ed_deptNm.setValue("");
  }
  // 귀속부서 조회
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
    scwin.f_PopUpCompanyInfo();
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
scwin.udc_acctDeptCdInfo2_onblurCodeEvent = function (e) {
  ed_deptNm.setValue("");
  if (ed_deptCd.getValue() != "") {
    scwin.f_checkPopEd(ed_deptCd, ed_deptNm, '1');
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_master.getRowCount());
  if (ds_master.getRowCount() === 0) {
    await $$c.gus.cfAlertMsg(MSG_CM_WRN_002);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'searchTable',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',validTitle:'회사코드',nameId:'ed_coNm',style:'',code:'coCd',name:'coNm',refDataCollection:'dma_search',btnId:'btn_company',id:'udc_companyInfo',allowCharCode:'0-9',validExpCode:'회사코드:yes',mandatoryCode:'true',maxlengthCode:'3',objTypeCode:'data',maxlengthName:'65',objTypeName:'data','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_companyInfo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'결산년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_closeYm2',style:'',mandatory:'true',ref:'data:dma_search.closeYm2',displayFormat:'yyyy/MM',title:'결산년월',objType:'data',pickerType:'dynamic'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_deptCd',class:'col7',code:'acctDeptCd',codeId:'ed_deptCd','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo2_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCdInfo2_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCdInfo2_onviewchangeNameEvent',id:'udc_acctDeptCdInfo2',mandatoryCode:'true',maxlengthCode:'5',name:'acctDeptNm',nameId:'ed_deptNm',objTypeCode:'data',objTypeName:'data',onloadCallbackFunc:'',popupGridHeadTitle:'귀속코드,부서명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',popupID:'popupMgntClntNo',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명',refDataCollection:'dma_search',refDataMap:'dma_search',selectID:'retrieveAcctDeptCdInfo2',style:'',validExpCode:'귀속부서코드:yes',validTitle:'귀속부서코드'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_Excel',gridUpYn:'N',gridID:'gr_withholdList',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',id:'gr_withholdList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'17',visibleRowNumFix:'true',readOnly:'true',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'계정',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'계정명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'차변',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'대변',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'text',style:'',value:'',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drRmn',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crRmn',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',class:'col7',code:'acctDeptCd',codeId:'','ev:onblurCodeEvent':'scwin.udc_dept_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dept_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_dept_onviewchangeNameEvent',id:'udc_uppermostAcctDeptCdInfo',maxlengthCode:'5',name:'acctDeptNm',nameId:'',objTypeCode:'data',objTypeName:'data',onloadCallbackFunc:'',popupGridHeadTitle:'귀속코드,부서명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',popupID:'',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명',refDataCollection:'dma_search',refDataMap:'dma_search',selectID:'retrieveUppermostAcctDeptCdInfo',style:'',validExpCode:'귀속부서코드:yes'}}]}]}]}]}]}]})