/*amd /ui/ac/fi/gnrlaccount/settmgnt/fi_204_03_07b.xml 19230 6c0f4142cb83599c7f75668fa4d4fcea86f29d260f39e0a171a8367e970cd101 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm2',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYm3',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'type',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'flag',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'drPrevSum',name:'차변-전월합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drRmn',name:'차변-잔액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drSum',name:'차변-합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drThis',name:'차변-당월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtAcctNm',name:'계정과목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crThis',name:'대변-당월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crSum',name:'대변-합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crRmn',name:'대변-잔액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crPrevSum',name:'대변-전월합계',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.gnrlaccount.settmgnt.RetrieveTrialBalanceListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/jquery-1.8.3.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/ui/1.9.2/jquery-ui.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 시산표
 * 메뉴경로 : 회계/재무회계/일반회계/결산관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ac/fi/gnrlaccount/settmgnt/fi_204_03_07b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-10
 * 수정이력  :
 *    - 2025-12-10      정승혜    최초작성
 *    - 2026-02-07      정승혜    기타수정
 * 메모 :
 * 조회조건 : 
 * 
 */

//전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.vCoCd = scwin.login.coCd == null ? "" : scwin.login.coCd;
scwin.vCoClsCd = scwin.login.coClsCd == null ? "" : scwin.login.coClsCd;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.isSubCompany = false;
scwin.vCurDate = WebSquare.date.getCurrentServerDate();

//hidden
scwin.txtCoCd = "";
scwin.txtCoClsCd = "";
scwin.txt_closeYm3 = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  scwin.f_setCompanyInfo();
  scwin.f_Header();
  //rd_type.CodeValue="2";
  lc_flag.setSelectedIndex(0);
  //날짜셋팅
  ica_closeYm2.setValue(scwin.vCurDate.substring(0, 6));
  ica_closeYm2.focus();
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.isSubCompany = true;
  } else {
    // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
    scwin.vCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  scwin.txtCoCd = scwin.vCoCd;
  scwin.txtCoClsCd = scwin.vCoClsCd;
};

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)

  if (scwin.vCoCd == "023") {
    dma_search.set("deptCd", "01045");
    dma_search.set("deptNm", "BIDC");
  } else {
    dma_search.set("deptCd", "00000");
    dma_search.set("deptNm", "전사");
  }
  dma_search.set("coCd", scwin.vCoCd);
  //00000 값이 tobe있고 asis는 없어서 강제로 팝업 오픈 T->F
  if (!$c.gus.cfIsNull($p, ed_deptCd.getValue())) scwin.f_openPopUp('1', 'F');
};

//-------------------------------------------------------------------------
// 시산표 발행 
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ica_closeYm2, ed_deptCd]);
  if (!ret) {
    return;
  }
  if (dma_search.get("closeYm2") < 201101) {
    await $c.win.alert($p, "결산년월은 2011년 1월보다 작게 설정할 수 없습니다");
    ica_closeYm2.setValue(scwin.vCurDate.substring(0, 6));
    return false;
  }
  dma_search.set("coCd", scwin.txtCoCd);
  dma_search.set("closeYm3", scwin.txt_closeYm3);
  $c.sbm.execute($p, sbm_retrieve);
  scwin.txt_closeYm3 = ica_closeYm2.getValue().substring(0, 4);
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  let rtnList = new Array();
  // 부서조회 
  let param = "";
  if (scwin.isSubCompany) {
    // 자회사인 경우 
    param = ",,,," + scwin.vCoCd + "," + scwin.vCoClsCd;
  }
  rtnList = udc_acctDeptCdInfo2.cfCommonPopUp(scwin.udc_acctDeptCdInfo2_callBackFunc, ed_deptCd.getValue().trim(), ed_deptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
};

//-------------------------------------------------------------------------
// 팝업체크
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  if (strCd.getValue().trim() == strCd.options.hidVal) {
    return;
  }
  strNm.setValue("");
  strCd.options.hidVal = "";
  if (strCd.getValue().trim() != "") scwin.f_openPopUp(flag, 'T');
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
  let cntRow = ds_master.getRowCount();
  if (cntRow == 0) return;
  let fileName = '합계잔액시산표';
  let sheetTitle = "시산표자료";
  await $c.data.downloadGridViewExcel($p, gr_withholdList, {
    fileName: fileName + ".xlsx",
    sheetName: sheetTitle,
    type: 1,
    autoSizeColumn: "true"
  });
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdInfo2_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};
scwin.udc_acctDeptCdInfo2_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_deptCd, ed_deptNm, '1');
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_master.getRowCount();
  totalRows.setValue(rowCnt);
  gr_withholdList.setFocusedCell(0, "drRmn", false);
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//필요없어 막음
// scwin.udc_acctDeptCdInfo2_onviewchangeCodeEvent = function (info) {
//     if(ed_deptCd.getValue() == ""){
//         ed_deptCd.options.hidVal = "";
//         ed_deptNm.setValue("");
//     }
//     if(info.oldValue != info.newValue){
//         ed_deptNm.setValue("");
//     }
// };
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'searchTable',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'결산년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_closeYm2',style:'',objType:'data',mandatory:'true',ref:'data:dma_search.closeYm2',displayFormat:'yyyy/MM',title:'결산년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo2',codeId:'ed_deptCd',validTitle:'귀속부서코드',nameId:'ed_deptNm',style:'',mandatoryCode:'true',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'5',code:'deptCd',name:'deptNm',refDataCollection:'dma_search',id:'udc_acctDeptCdInfo2','ev:onclickEvent':'scwin.udc_acctDeptCdInfo2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo2_onblurCodeEvent','ev:onviewchangeCodeEvent':'scwin.udc_acctDeptCdInfo2_onviewchangeCodeEvent',objTypeName:'data',btnId:'btn_deptCd',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_flag',style:'width: 150px;',submenuSize:'fixed',objType:'data',ref:'data:dma_search.flag'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'요약'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상세'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'합계잔액시산표',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_Excel',gridDownUserAuth:'X',gridID:'gr_withholdList'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',id:'gr_withholdList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true',columnMove:'true',dataDragSelectAutoScroll:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'310',inputType:'text',style:'',id:'column48',value:'차변',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'계정과목',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'310',inputType:'text',style:'',id:'column43',value:'대변',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'전월합계',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'잔액',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'합계',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'당월',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'당월',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'합계',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'잔액',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'전월합계',width:'100',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'drPrevSum',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drRmn',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drSum',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drThis',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prtAcctNm',inputType:'text',style:'',value:'',width:'100',class:'ws-pre',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crThis',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crSum',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crRmn',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crPrevSum',inputType:'text',style:'',value:'',width:'100',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})