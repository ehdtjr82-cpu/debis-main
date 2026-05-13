/*amd /ui/ac/fi/taxbiz/withhold/fi_404_01_03b.xml 114731 4ce22a819d452a33c428311de487d3bf246baef243eda9c6810dba24089beabe */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_withholdList',saveRemovedData:'true','ev:ondataload':'scwin.ds_withholdList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'declarDeptCd',name:'신고 부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarDept',name:'신고 부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dofficeNm',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속 부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workSiteCd',name:'근무지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workSiteNm',name:'근무지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizTaxAggrPatternCd',name:'집계유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offcStaff',name:'인원',dataType:'number'}},{T:1,N:'w2:column',A:{id:'offcTotAmt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'offcTaxnAmt',name:'과세금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'offcIncomeTax',name:'소득세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'offcManTax',name:'지방소득세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'salStaff',name:'인원',dataType:'number'}},{T:1,N:'w2:column',A:{id:'salTotAmt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'salTaxnAmt',name:'과세금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'salIncomeTax',name:'소득세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'salManTax',name:'지방소득세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dusePstStaff',name:'인원',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dusePstMmWorkDdCnt',name:'근무일수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dusePstTotAmt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dusePstTaxnAmt',name:'과세금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dusePstIncomeTax',name:'소득세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dusePstManTax',name:'지방소득세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'subSumStaff',name:'인원',dataType:'number'}},{T:1,N:'w2:column',A:{id:'subSumTotAmt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'subSumTaxnAmt',name:'과세금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'subSumIncomeTax',name:'소득세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'subSumManTax',name:'지방소득세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'midstreamStaff',name:'인원',dataType:'number'}},{T:1,N:'w2:column',A:{id:'midstreamTotAmt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'midstreamTaxnAmt',name:'과세금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'midstreamIncomeTax',name:'소득세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'midstreamManTax',name:'지방소득세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'caryFwrdStaff',name:'인원',dataType:'number'}},{T:1,N:'w2:column',A:{id:'caryFwrdTotAmt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'caryFwrdTaxnAmt',name:'과세금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'caryFwrdIncomeTax',name:'소득세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'caryFwrdManTax',name:'지방소득세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pmntSumStaff',name:'인원',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pmntSumTotAmt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pmntSumTaxnAmt',name:'과세금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pmntSumIncomeTax',name:'소득세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pmntSumManTax',name:'지방소득세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'retireStaff',name:'인원',dataType:'number'}},{T:1,N:'w2:column',A:{id:'retireTotAmt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'retireTaxnAmt',name:'과세금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'retireIncomeTax',name:'소득세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'retireManTax',name:'지방소득세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bizStaff',name:'인원',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bizTotAmt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bizIncomeTax',name:'소득세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bizManTax',name:'지방소득세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'etcStaff',name:'인원',dataType:'number'}},{T:1,N:'w2:column',A:{id:'etcTotAmt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'etcIncomeTax',name:'소득세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'etcManTax',name:'지방소득세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totalSumStaff',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totalSumTotAmt',name:'소득세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totalSumTaxnAmt',name:'지방소득세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totalSumIncomeTax',name:'구청별합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totalSumManTax',name:'과세금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumStaff',name:'11개월전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'taxnAmt12',name:'10개월전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'taxnAmt11',name:'9개월전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'taxnAmt10',name:'8개월전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'taxnAmt9',name:'7개월전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'taxnAmt8',name:'6개월전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'taxnAmt7',name:'5개월전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'taxnAmt6',name:'4개월전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'taxnAmt5',name:'3개월전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'taxnAmt4',name:'2개월전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'taxnAmt3',name:'1개월전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'taxnAmt2',name:'당월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'taxnAmt1',name:'인원',dataType:'number'}},{T:1,N:'w2:column',A:{id:'staff12',name:'11개월전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'staff11',name:'10개월전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'staff10',name:'9개월전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'staff9',name:'8개월전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'staff8',name:'7개월전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'staff7',name:'6개월전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'staff6',name:'5개월전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'staff5',name:'4개월전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'staff4',name:'3개월전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'staff3',name:'2개월전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'staff2',name:'1개월전',dataType:'number'}},{T:1,N:'w2:column',A:{id:'staff1',name:'당월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'taxnAmtAvg',name:'부서별과세금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bizTaxnAvg',name:'과세금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bizTaxAmt',name:'세액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dofficeCd',name:'name91',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYm',name:'name92',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'declarDept',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'declarDeptNm',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'version',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dofficeCd',name:'name7',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.taxbiz.withhold.UpdateMonthIncomePresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_withholdList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.withhold.RetrieveMonthIncomePresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_withholdList","key":"OUT_DS1"}] ',target:'data:json,{"id":"ds_withholdList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.temp_cnt = 0;
scwin.isSubCompany = false;
scwin.isFirst = true;

// hidden 컴포넌트
scwin.txtCoClsCd;
scwin.onpageload = function () {};
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "월소득현황 조회 및 수정");
};
scwin.onUdcCompleted = async function () {
  udc_bilgAcctDeptCd.hide("");
  udc_workSiteInfo.hide("");
  udc_withHoldInfo.hide("");

  // f_Header();
  $c.gus.cfDisableAllBtn($p);
  scwin.f_setCompanyInfo();
  ica_closeYm.setValue(WebSquare.date.getCurrentServerDate().substring(0, 6));
  const codeOptions = [{
    grpCd: "FI052",
    compID: "acb_version"
  }];
  await $c.data.setCommonCode($p, codeOptions);
  scwin.f_Setting();
  $c.gus.cfDisableObjects($p, [btn_Save]);
};

//-------------------------------------------------------------------------
// Enable/Disable
//-------------------------------------------------------------------------
scwin.f_EnableYn = function (str) {
  if (str == scwin.temp_cnt) {
    $c.gus.cfEnableObjects($p, [ica_closeYm, ed_declarDept, ed_declarDeptNm, acb_version]);
  } else {
    $c.gus.cfDisableObjects($p, [ica_closeYm, ed_declarDept, ed_declarDeptNm, acb_version]);
  }
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
  if (scwin.isFirst == true) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
    scwin.isFirst = false;
  }
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

//-------------------------------------------------------------------------
// 수정본만 수정,등록을 할 수있다.
//-------------------------------------------------------------------------
scwin.f_VerCheck = function () {
  // 원본
  if (acb_version.getValue() == "0") {
    $c.gus.cfDisableAllBtn($p);
    $c.gus.cfDisableObjects($p, [udc_bottomGrdBtn]);

    // 수정본
  } else {
    $c.gus.cfEnableAllBtn($p);
    $c.gus.cfEnableObjects($p, [udc_bottomGrdBtn]);
  }
};

//-------------------------------------------------------------------------
// 재조회
//-------------------------------------------------------------------------
scwin.f_SearchClear = function () {
  $c.gus.cfInitObjects($p, searchTable);
  scwin.f_Setting();
};

// //-------------------------------------------------------------------------
// // 헤더생성
// //-------------------------------------------------------------------------
// function f_Header(){
//     var GAUCE_DATASET_HEADER = "closeYm:STRING(6)"
//                                 + ",declarDept:STRING(5)"              
//                                 + ",declarDeptNm:STRING(50)"
//                                 + ",version:STRING(1)"
//                                 + ",coCd:STRING(3)"  
//                                 + ",coClsCd:STRING(1)"
//                                 + ",dofficeCd:STRING(5)"
//                                 ;         

//     ds_search.SetDataHeader(GAUCE_DATASET_HEADER);
//     ds_search.AddRow();
//     f_Setting();
// }

//-------------------------------------------------------------------------
// 셋팅
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  ica_closeYm.setValue(WebSquare.date.getCurrentServerDate().substring(0, 6));
  acb_version.setSelectedIndex(1);
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.txtCoClsCd = scwin.vLoginCoClsCd;
  ica_closeYm.focus();
};
scwin.f_Check = async function () {
  var validArry = [{
    id: "acctDeptCd",
    name: "귀속부서",
    key: true
  }, {
    id: "workSiteCd",
    name: "근무지",
    key: true
  }];
  let gridName = "월소득현황조회및수정";
  if (!(await $c.gus.cfValidateGrid($p, gr_withholdList, null, null, validArry, gridName))) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //체크
  if (ds_withholdList.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  if (!(await $c.gus.cfValidate($p, [ica_closeYm, ed_declarDept, acb_version]))) return false;

  // if(ds_withholdList.Namevalue(1,"ver")=="0"){
  //     await $c.gus.cfAlertMsg("버전이 원본일 경우 저장할 수 없습니다");
  //     return;
  // }

  // if (await $c.gus.cfValidate([gr_withholdList])) {
  for (let i = 0; i < ds_withholdList.getTotalRow(); i++) {
    if (ds_withholdList.getRowStatus(i) == "C") {
      if ($c.gus.cfIsNull($p, ds_withholdList.getCellData(i, "acctDeptCd"))) {
        await $c.win.alert($p, "월소득현황조회및수정의" + i + 1 + "번째 데이터에서 귀속부서은(는) 필수 입력 항목입니다.");
        return;
      } else if ($c.gus.cfIsNull($p, ds_withholdList.getCellData(i, "workSiteCd"))) {
        await $c.win.alert($p, "월소득현황조회및수정의" + i + 1 + "번째 데이터에서 근무지(는) 필수 입력 항목입니다.");
        return;
      }
      ds_withholdList.setCellData(i, "closeYm", ica_closeYm.getValue());
      // break;
    }
    for (let j = i + 1; j < ds_withholdList.getTotalRow(); j++) {
      if (ds_withholdList.getCellData(i, "dofficeNm") == ds_withholdList.getCellData(j, "dofficeNm")) {
        if (ds_withholdList.getCellData(i, "acctDeptCd") == ds_withholdList.getCellData(j, "acctDeptCd")) {
          if (ds_withholdList.getCellData(i, "workSiteCd") == ds_withholdList.getCellData(j, "workSiteCd")) {
            await $c.win.alert($p, j + 1 + "번째 데이터에서 귀속부서, 구분, 근무지는 중복될 수 없습니다.");
            ds_withholdList.setRowPosition(j);
            return;
          }
        }
      }
    }
  }
  if ((await $c.win.confirm($p, "저장하시겠습니까?")) == true) {
    $c.sbm.execute($p, sbm_save);
  }
  // }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ica_closeYm, ed_declarDept, acb_version]))) {
    return false;
  }
  if (ica_closeYm.getValue().length < 6) {
    await $c.win.alert($p, "지급년월은 6자리수만큼 입력하십시오. ");
    return false;
  }
  if (!(await $c.gus.cfValidate($p, [ed_coCd]))) {
    return false;
  }
  //alert(ds_search.text);

  // ds_search.UseChangeInfo = false;
  dma_search.set("closeYm", ica_closeYm.getValue());
  dma_search.set("version", acb_version.getValue());
  dma_search.set("coClsCd", scwin.txtCoClsCd);
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 행추가 버튼 클릭시 
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  var row = ds_withholdList.insertRow();
  ds_withholdList.setCellData(ds_withholdList.getRowPosition(), "closeYm", ica_closeYm.getValue());
  scwin.f_EnableYn(ds_withholdList.getTotalRow());
  gr_withholdList.setReadOnly("cell", row, "declarDeptCd", false);
  gr_withholdList.setReadOnly("cell", row, "acctDeptCd", false);
  gr_withholdList.setReadOnly("cell", row, "workSiteCd", false);
};

// //-------------------------------------------------------------------------
// // 행삭제 버튼 클릭시 
// //-------------------------------------------------------------------------
// function f_DeleteRow() {
//     ds_withholdList.DeleteRow(ds_withholdList.RowPosition);
//     f_EnableYn(ds_withholdList.CountRow);
// }

//-------------------------------------------------------------------------
// 취소 버튼 클릭시 
//-------------------------------------------------------------------------
scwin.f_UndoRow = function () {
  $c.data.deleteRow($p, ds_withholdList);
  scwin.f_EnableYn(ds_withholdList.getTotalRow());
};

//-------------------------------------------------------------------------
// 구청코드조회
//-------------------------------------------------------------------------
scwin.f_DofficeCd = function (str) {
  var param = "1";
  param = "1," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
  var rtnList = udc_dofficeCd.cfCommonPopUp(scwin.udc_dofficeCd_callBackFunc2, str, "", "T", null, null, null, null, param, null, null, null, null);
};
scwin.udc_dofficeCd_callBackFunc2 = function (rtnList) {
  var row = gr_withholdList.getFocusedRowIndex();
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ds_withholdList.setCellData(row, "dofficeCd", rtnList[0]); //구청코드
    ds_withholdList.setCellData(row, "dofficeNm", rtnList[1]); //구청명
    ds_withholdList.setCellData(row, "declarDept", rtnList[2]); //납부부서
    //alert(ds_withholdList.Namevalue(row,"declarDept"));
  } else {
    ds_withholdList.setCellData(row, "dofficeCd", ""); //구청코드
    ds_withholdList.setCellData(row, "dofficeNm", ""); //구청명
    ds_withholdList.setCellData(row, "declarDept", ""); //납부부서
  }
};

//-------------------------------------------------------------------------
// 그리드 팝업
//-------------------------------------------------------------------------
scwin.f_GridPop = function (colid, row, str, gubun) {
  if (gubun == "1") {
    //귀속부서
    ds_withholdList.setCellData(row, "acctDeptNm", "");
    ds_withholdList.setCellData(row, "dofficeCd", "");
    ds_withholdList.setCellData(row, "dofficeNm", "");
    var rtnList = new Array();
    var param = ",,,0,";
    param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0,";
    rtnList = udc_bilgAcctDeptCd.cfCommonPopUp(scwin.udc_bilgAcctDeptCd_callBackFunc, str, "", "T", null, null, null, null, param, null, null, null, null);
  }
  if (gubun == "2") {
    //근무지
    ds_withholdList.setCellData(row, "workSiteNm", "");
    var rtnList = new Array();
    var param = '';
    rtnList = udc_workSiteInfo.cfCommonPopUp(scwin.udc_workSiteInfo_callBackFunc, str, "", "T", null, null, null, null, param, null, null, null, null);
    //rtnList = cfCommonPopUp('retrieveWorkSiteInfo',ed_workSiteCd.text.trim(),txt_workSiteNm.value,check,null,null,null,null,param,null,null,null,null); 			
    // f_resultPopEd(ed_workSiteCd,txt_workSiteNm,rtnList);
  }
  if (gubun == "3") {
    //신고부서
    ds_withholdList.setCellData(row, "declarDept", "");
    var param = "";
    param = ed_coCd.getValue() + "," + scwin.txtCoClsCd;
    rtnList = udc_withHoldInfo.cfCommonPopUp(scwin.udc_withHoldInfo_callBackFunc, str, "", "T", null, null, null, null, param, null, null, null, null);
  }
};
scwin.udc_bilgAcctDeptCd_callBackFunc = function (rtnList) {
  var row = gr_withholdList.getFocusedRowIndex();
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ds_withholdList.setCellData(row, "acctDeptCd", rtnList[0]); //부서코드
    ds_withholdList.setCellData(row, "acctDeptNm", rtnList[1]); //부서명
    ds_withholdList.setCellData(row, "dofficeCd", rtnList[5]);
    scwin.f_DofficeCd(ds_withholdList.getCellData(row, "dofficeCd"), row);
  } else {
    ds_withholdList.setCellData(row, "acctDeptCd", "");
    ds_withholdList.setCellData(row, "acctDeptNm", "");
    ds_withholdList.setCellData(row, "dofficeCd", "");
    ds_withholdList.setCellData(row, "dofficeNm", "");
  }
};
scwin.udc_workSiteInfo_callBackFunc = function (rtnList) {
  var row = gr_withholdList.getFocusedRowIndex();
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ds_withholdList.setCellData(row, "workSiteCd", rtnList[0]); //부서코드
    ds_withholdList.setCellData(row, "workSiteNm", rtnList[1]); //부서명
  } else {
    ds_withholdList.setCellData(row, "workSiteCd", "");
    ds_withholdList.setCellData(row, "workSiteNm", "");
  }
};
scwin.udc_withHoldInfo_callBackFunc = function (rtnList) {
  var row = gr_withholdList.getFocusedRowIndex();
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ds_withholdList.setCellData(row, "declarDeptCd", rtnList[1]); //코드
    ds_withholdList.setCellData(row, "declarDept", rtnList[2]); //명
  } else {
    ds_withholdList.setCellData(row, "declarDeptCd", "");
    ds_withholdList.setCellData(row, "declarDept", "");
  }
};

//-------------------------------------------------------------------------
// 팝업체크
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  if (strCd.getValue().trim() == strCd.options.hidVal) {
    return;
  }
  strNm.getValue("");
  strCd.options.hidVal = "";
  if (strCd.getValue().trim() != "") {
    scwin.f_openPopUp(flag, 'T');
  }
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  var rtnList = new Array();
  switch (flag) {
    case '1':
      // 신고부서
      var param = "";
      param = ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      rtnList = udc_declarDept.cfCommonPopUp(scwin.udc_declarDept_callBackFunc, ed_declarDept.getValue().trim(), ed_declarDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '2':
      var param = "1," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      rtnList = udc_dofficeCd.cfCommonPopUp(scwin.udc_dofficeCd_callBackFunc, ed_dofficeCd.getValue(), ed_dofficeNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      // f_resultPopEd(ed_dofficeCd,txt_dofficeNm,rtnList); 

      if (rtnList != null) {
        if (rtnList[0] == "N/A") return;
        ed_coCd.setValue(rtnList[3]);
        scwin.txtCoClsCd = rtnList[4];
      }
      break;
  }
};

// 신고부서 udc
scwin.udc_declarDept_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_declarDept.setValue(rtnList[1]); // 코드
    ed_declarDeptNm.setValue(rtnList[2]); // 명
    ed_declarDept.options.hidVal = rtnList[1]; // 히든값

    //회사 정보 set
    ed_coCd.setValue(rtnList[3]); //회사코드 
    scwin.txtCoClsCd = rtnList[4]; //회사구분코드  
  } else {
    ed_declarDept.setValue("");
    ed_declarDeptNm.setValue("");
    ed_declarDept.options.hidVal = "";
  }
};
scwin.udc_declarDept_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};
scwin.udc_declarDept_onviewchangeNameEvent = function (info) {
  scwin.f_DeptNmChanged(ed_declarDept, ed_declarDeptNm);
};
scwin.udc_declarDept_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_declarDept, ed_declarDeptNm, '1');
};

// 구청코드 udc
scwin.udc_dofficeCd_callBackFunc = function (rtnList) {
  scwin.f_resultPopEd(ed_dofficeCd, ed_dofficeNm, rtnList);
};
scwin.udc_dofficeCd_onclickEvent = function (e) {
  scwin.f_openPopUp('2', 'F');
};
scwin.udc_dofficeCd_onviewchangeNameEvent = function (info) {
  ed_dofficeCd.setValue("");
};
scwin.udc_dofficeCd_onblurCodeEvent = function (e) {
  if (ed_dofficeCd.getValue().trim() == ed_dofficeCd.options.hidVal) {
    return;
  }
  ed_dofficeNm.setValue("");
  ed_dofficeCd.options.hidVal = "";
  if (ed_dofficeCd.getValue().trim() != "") {
    scwin.f_openPopUp('2', 'T');
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명
    strCd.options.hidVal = rtnList[0]; // 히든값
  } else {
    strCd.setValue("");
    strNm.setValue("");
    strCd.options.hidVal = "";
  }
};

// //-------------------------------------------------------------------------
// // 엑셀 파일 다운로드
// //-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    // var options = {
    //     fileName: "월소득현황조회.xls",
    //     sheetName: "월소득현황"
    // }   

    var options = {
      fileName: "월소득현황조회.xlsx",
      sheetName: "월소득현황조회",
      startColumnIndex: 0,
      type: 1,
      columnMove: true //그리드 컬럼이동시 이동된 상태로 다운로드 유무 ( "true"인경우 컬럼이동 순서대로 출력 )
      //evenRowBackgroundColor : "#f5fff5"//excel파일에서 그리드 body의 짝수줄의 배경색
    };
    $c.data.downloadGridViewExcel($p, gr_withholdList, options);
  }
};

//-------------------------------------------------------------------------
// 신고부서명 입력창 
//-------------------------------------------------------------------------
scwin.f_DeptNmChanged = function (deptCd, deptNm) {
  // 거래처코드 입력창을 지운다
  deptCd.setValue("");

  // 거래처명를 가져온다.
  var sName = deptNm.getValue().trim();
  var rtnList = new Array();
  var param = "";

  // 자회사 회계 시스템인 경우,  
  if (scwin.isSubCompany) {
    param = ed_coCd.getValue() + "," + scwin.txtCoClsCd;
  }
  rtnList = udc_declarDept.cfCommonPopUp(scwin.udc_declarDept_callBackFunc, ed_declarDept.getValue().trim(), ed_declarDeptNm.getValue(), "T", null, null, null, null, param, null, null, null, null);
};
scwin.udc_declarDept_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_declarDept.setValue(rtnList[1]); // 코드
    ed_declarDeptNm.setValue(rtnList[2]); // 명
    ed_declarDept.options.hidVal = rtnList[1]; // 히든값

    //회사 정보 set
    ed_coCd.setValue(rtnList[3]); //회사코드 
    scwin.txtCoClsCd = rtnList[4]; //회사구분코드  
  } else {
    ed_declarDept.setValue("");
    ed_declarDeptNm.setValue("");
    ed_declarDept.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 부서별과세금액 셋팅
//-------------------------------------------------------------------------
scwin.f_deptTaxnAmt = function () {
  var sumDeptTaxnAmt = 0;
  var cnt = 0;
  for (i = 0; i <= ds_withholdList.getTotalRow(); i++) {
    sumDeptTaxnAmt = 0;
    sumDeptTaxnAmt = sumDeptTaxnAmt + Number(ds_withholdList.getCellData(i, "salTaxnAmt")) + Number(ds_withholdList.getCellData(i, "offcTaxnAmt")) + Number(ds_withholdList.getCellData(i, "dusePstTotAmt"));
    for (j = 2; j <= 12; j++) {
      sumDeptTaxnAmt = sumDeptTaxnAmt + Number(ds_withholdList.getCellData(i, "taxnAmt" + j));
    }
    cnt = 0;
    for (k = 2; k <= 12; k++) {
      if (Number(ds_withholdList.getCellData(i, "taxnAmt" + k)) > 0) {
        cnt = cnt + 1;
      }
    }
    if (Number(ds_withholdList.getCellData(i, "salTaxnAmt")) + Number(ds_withholdList.getCellData(i, "offcTaxnAmt")) + Number(ds_withholdList.getCellData(i, "dusePstTotAmt")) > 0) {
      cnt = cnt + 1;
      ds_withholdList.setCellData(i, "taxnAmtAvg", Math.round(sumDeptTaxnAmt / cnt));
    }
  }
};
scwin.gr_withholdList_onafteredit = function (rowIndex, columnIndex, value) {
  if (columnIndex == "0") {
    scwin.f_GridPop("", rowIndex, value, "3");
  }
  if (columnIndex == "3") {
    scwin.f_GridPop("", rowIndex, value, "1");
  }
  if (columnIndex == "5") {
    scwin.f_GridPop("", rowIndex, value, "2");
  }

  //사업소세 금액 Check
  //급상여의 인원이나 일용직의 인원의 필드에 값이 변경될 경우 조회필드의 sumStaff의 값을 다시 재정의 한다.(같은 구청의 근로소득인원 SUM)
  var SumStaff = 0;

  //일용직 인원수계산: 근무일수 / 해당월(지급년월의 전월)의 총일수 (소수점이하 버림)	
  /* 일용직 근무일수 변경시 인원수 자동계산 안되도록 수정 (김주희 요청)
  if(colid=="dusePstMmWorkDdCnt"){
  
      //이전월 일수 구하기  - [시작]   
      var Ym = ed_closeYm.text.trim();
      var Year = Ym.substr(0,4);
      var preMonth = new Date(Ym.substr(0,4),Ym.substr(4,2),-1).getMonth();
      
      if(("" + preMonth).length == "1"){
          if(preMonth == "0"){
              preMonth = "12";
              Year = Year -1 ;
          }else {
              preMonth = "0" + preMonth;
          }
      }	
      
      var real = Year + preMonth;
      var lastday = new Date(real.substr(0,4),real.substr(4,2),0).getDate();        
      //이전월 일수 구하기 - [끝]
      ds_withholdList.NameValue(row,"dusePstStaff") = Math.floor(Number(ds_withholdList.NameValue(row,"dusePstMmWorkDdCnt")/lastday));	 
  }
  */
  var colid = gr_withholdList.getColumnID(columnIndex);
  if (colid == "salStaff" || colid == "offcStaff") {
    if (ds_withholdList.getCellData(rowIndex, "bizTaxAggrPatternCd") == "01") {
      //집계유형이 구청별일때
      for (i = 1; i <= ds_withholdList.getRowCount(); i++) {
        if (ds_withholdList.getCellData(rowIndex, "dofficeNm") == ds_withholdList.getCellData(i, "dofficeNm") && ds_withholdList.getCellData(rowIndex, "bizTaxAggrPatternCd") == ds_withholdList.getCellData(i, "bizTaxAggrPatternCd")) {
          //선택한 row의 구청명과 같은 것들중에 집계유형이 01 인 것들만 인원 합계 계산
          SumStaff = SumStaff + Number(ds_withholdList.getCellData(i, "salStaff")) + Number(ds_withholdList.getCellData(i, "offcStaff")) + Number(ds_withholdList.getCellData(i, "dusePstStaff"));
        }
      }
      for (i = 1; i <= ds_withholdList.getRowCount(); i++) {
        if (ds_withholdList.getCellData(rowIndex, "dofficeNm") == ds_withholdList.getCellData(i, "dofficeNm") && ds_withholdList.getCellData(rowIndex, "bizTaxAggrPatternCd") == ds_withholdList.getCellData(i, "bizTaxAggrPatternCd")) {
          ds_withholdList.setCellData(i, "sumStaff", SumStaff);
        }
      }
    } else if (ds_withholdList.getCellData(rowIndex, "bizTaxAggrPatternCd") == "02") {
      //집계유형이 부서별일때

      for (i = 1; i <= ds_withholdList.getRowCount(); i++) {
        if (ds_withholdList.getCellData(rowIndex, "dofficeNm") == ds_withholdList.getCellData(i, "dofficeNm") && ds_withholdList.getCellData(rowIndex, "acctDeptNm") == ds_withholdList.getCellData(i, "acctDeptNm")) {
          //선택한 row의 구청명과 같은 것들중에 부서명이 같은 건들만 인원 합계 계산
          SumStaff = SumStaff + Number(ds_withholdList.getCellData(i, "salStaff")) + Number(ds_withholdList.getCellData(i, "offcStaff")) + Number(ds_withholdList.getCellData(i, "dusePstStaff"));
        }
      }
      for (i = 1; i <= ds_withholdList.getRowCount(); i++) {
        if (ds_withholdList.getCellData(rowIndex, "dofficeNm") == ds_withholdList.getCellData(i, "dofficeNm") && ds_withholdList.getCellData(rowIndex, "acctDeptNm") == ds_withholdList.getCellData(i, "acctDeptNm")) {
          ds_withholdList.setCellData(i, "sumStaff", SumStaff);
        }
      }
    }
    SumStaff = 0;
  }
  var obj = {
    sumBizTaxnAmt1: 0,
    sumBizTaxnAmt2: 0,
    sumBizTaxnAmt3: 0,
    sumBizTaxnAmt4: 0,
    sumBizTaxnAmt5: 0,
    sumBizTaxnAmt6: 0,
    sumBizTaxnAmt7: 0,
    sumBizTaxnAmt8: 0,
    sumBizTaxnAmt9: 0,
    sumBizTaxnAmt10: 0,
    sumBizTaxnAmt11: 0,
    sumBizTaxnAmt12: 0
  };
  var sumBizTaxnAmt = 0;
  var cnt = 0;
  var sumTax = 0;
  var sumBizTax = 0;
  var maxNum = 0;
  if (colid == "salTaxnAmt" || colid == "dusePstTotAmt" || colid == "offcTaxnAmt") {
    if (ds_withholdList.getCellData(rowIndex, "bizTaxAggrPatternCd") == "01") {
      //집계유형이 구청별일때
      for (i = 1; i <= ds_withholdList.getRowCount(); i++) {
        if (ds_withholdList.getCellData(rowIndex, "dofficeNm") == ds_withholdList.getCellData(i, "dofficeNm") && ds_withholdList.getCellData(rowIndex, "bizTaxAggrPatternCd") == ds_withholdList.getCellData(i, "bizTaxAggrPatternCd")) {
          //선택한 row의 구청명과 같은 것들중에 집계유형이 01 인 것들만 인원 합계 계산
          obj.sumBizTaxnAmt1 = obj.sumBizTaxnAmt1 + Number(ds_withholdList.getCellData(i, "salTaxnAmt")) + Number(ds_withholdList.getCellData(i, "offcTaxnAmt")) + Number(ds_withholdList.getCellData(i, "dusePstTotAmt"));
          for (j = 2; j <= 12; j++) {
            obj["sumBizTaxnAmt" + j] = +obj["sumBizTaxnAmt" + j] + Number(ds_withholdList.getCellData(i, 'taxnAmt' + j));
          }
        }
      }
      sumBizTaxnAmt = obj.sumBizTaxnAmt1 + obj.sumBizTaxnAmt2 + obj.sumBizTaxnAmt3 + obj.sumBizTaxnAmt4 + obj.sumBizTaxnAmt5 + obj.sumBizTaxnAmt6 + obj.sumBizTaxnAmt7 + obj.sumBizTaxnAmt8 + obj.sumBizTaxnAmt9 + obj.sumBizTaxnAmt10 + obj.sumBizTaxnAmt11 + obj.sumBizTaxnAmt12;
      for (k = 1; k <= 12; k++) {
        // TODO eval
        if (obj["sumBizTaxnAmt" + k] > 0) {
          cnt = cnt + 1;
        }
        ;
      }
      sumTax = 0;
      sumBizTax = 0;
      maxNum = 0;
      for (i = 1; i <= ds_withholdList.getRowCount(); i++) {
        if (ds_withholdList.getCellData(rowIndex, "dofficeNm") == ds_withholdList.getCellData(i, "dofficeNm") && ds_withholdList.getCellData(rowIndex, "bizTaxAggrPatternCd") == ds_withholdList.getCellData(i, "bizTaxAggrPatternCd")) {
          //선택한 row의 구청명과 같은 것들중에 집계유형이 01 인 것들만 사업소세 계산 	 산식 = round((급상여 과세액+일용직 총금액)*0.05%,-1)   	
          if (sumBizTaxnAmt / cnt > 135000000) {
            ds_withholdList.setCellData(rowIndex, "bizTaxAmt", Math.floor(Number(ds_withholdList.getCellData(i, "salTaxnAmt") + Number(ds_withholdList.getCellData(i, "offcTaxnAmt")) + Number(ds_withholdList.getCellData(i, "dusePstTotAmt"))) * 0.0005) * 10);
            sumTax = sumTax + Number(ds_withholdList.getCellData(i, "salTaxnAmt") + Number(ds_withholdList.getCellData(i, "offcTaxnAmt")) + Number(ds_withholdList.getCellData(i, "dusePstTotAmt")));
            sumBizTax = sumBizTax + Number(ds_withholdList.getCellData(i, "bizTaxAmt"));
            if (ds_withholdList.getCellData(i, "bizTaxAmt") != 0) {
              maxNum = i;
            }
          } else {
            ds_withholdList.setCellData(i, "bizTaxAmt", 0);
          }
          ds_withholdList.setCellData(i, "bizTaxnAvg", Math.round(sumBizTaxnAmt / cnt));
        }
      }
      sumTax = Math.floor(sumTax * 0.0005) * 10;

      //alert("sumtax+"+sumTax);
      //alert("sumBizTax+"+sumBizTax);

      sumTax = sumTax - sumBizTax;

      //alert("sumtax나머지+"+sumTax);
      //alert("sumtax마지막 넣을곳+"+maxNum);

      if (sumTax != 0) {
        var remainder = Number(ds_withholdList.getCellData(maxNum, "bizTaxAmt")) + sumTax;

        //alert("remainder+"+remainder);

        ds_withholdList.setCellData(maxNum, "bizTaxAmt", remainder);
      }
    } else if (ds_withholdList.getCellData(rowIndex, "bizTaxAggrPatternCd") == "02") {
      //집계유형이 근무지별일때
      for (i = 1; i <= ds_withholdList.getRowCount(); i++) {
        if (ds_withholdList.getCellData(rowIndex, "workSiteCd") == ds_withholdList.getCellData(i, "workSiteCd")) {
          //선택한 row의 근무지가 같은 것들만 합계 계산
          obj.sumBizTaxnAmt1 = obj.sumBizTaxnAmt1 + Number(ds_withholdList.getCellData(i, "salTaxnAmt")) + Number(ds_withholdList.getCellData(i, "offcTaxnAmt")) + Number(ds_withholdList.getCellData(i, "dusePstTotAmt"));
          for (j = 2; j <= 12; j++) {
            // TODO eval	            	
            obj["sumBizTaxnAmt" + j] = obj["sumBizTaxnAmt" + j] + Number(ds_withholdList.getCellData(i, 'taxnAmt' + j));
          }
        }
      }
      sumBizTaxnAmt = obj.sumBizTaxnAmt1 + obj.sumBizTaxnAmt2 + obj.sumBizTaxnAmt3 + obj.sumBizTaxnAmt4 + obj.sumBizTaxnAmt5 + obj.sumBizTaxnAmt6 + obj.sumBizTaxnAmt7 + obj.sumBizTaxnAmt8 + obj.sumBizTaxnAmt9 + obj.sumBizTaxnAmt10 + obj.sumBizTaxnAmt11 + obj.sumBizTaxnAmt12;
      for (k = 1; k <= 12; k++) {
        // TODO eval
        if (obj["sumBizTaxnAmt" + k] > 0) {
          cnt = cnt + 1;
        }
        ;
      }
      sumTax = 0;
      sumBizTax = 0;
      maxNum = 0;
      for (i = 1; i <= ds_withholdList.getRowCount(); i++) {
        if (ds_withholdList.getCellData(rowIndex, "workSiteCd") == ds_withholdList.getCellData(i, "workSiteCd")) {
          //선택한 row의 구청명과 같은 것들중에 부서명이 같은 건들만 사업소세 계산 산식 = round((급상여 과세액+일용직 총금액)*0.05%,-1)	    	
          if (sumBizTaxnAmt / cnt > 135000000) {
            ds_withholdList.setCellData(i, "bizTaxAmt", Math.floor((Number(ds_withholdList.getCellData(i, "salTaxnAmt")) + Number(ds_withholdList.getCellData(i, "offcTaxnAmt")) + Number(ds_withholdList.getCellData(i, "dusePstTotAmt"))) * 0.0005) * 10);
            sumTax = sumTax + Number(ds_withholdList.getCellData(i, "salTaxnAmt") + Number(ds_withholdList.getCellData(i, "offcTaxnAmt")) + Number(ds_withholdList.getCellData(i, "dusePstTotAmt")));
            sumBizTax = sumBizTax + Number(ds_withholdList.getCellData(i, "bizTaxAmt"));
            if (ds_withholdList.getCellData(i, "bizTaxAmt") != 0) {
              maxNum = i;
            }
          } else {
            ds_withholdList.setCellData(i, "bizTaxAmt", 0);
          }
          ds_withholdList.setCellData(i, "bizTaxnAvg", Math.round(sumBizTaxnAmt / cnt));
        }
      }
      sumTax = Math.floor(sumTax * 0.0005) * 10;

      //alert("sumtax+"+sumTax);
      //alert("sumBizTax+"+sumBizTax);

      sumTax = sumTax - sumBizTax;

      //alert("sumtax나머지+"+sumTax);
      //alert("sumtax마지막 넣을곳+"+maxNum);

      if (sumTax != 0) {
        var remainder = Number(ds_withholdList.getCellData(maxNum, "bizTaxAmt")) + sumTax;

        //alert("remainder+"+remainder);

        ds_withholdList.setCellData(maxNum, "bizTaxAmt", remainder);
      }
    }
  }
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_search_submiterror = function (e) {
  $c.gus.cfShowError($p, sbm_search);
};
scwin.sbm_search_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    ed_totalRow.setValue(gr_withholdList.getTotalRow());
    if (acb_version.getValue() == 0) {
      $c.gus.cfDisableObjects($p, [btn_Save]);
    } else {
      $c.gus.cfEnableObjects($p, [btn_Save]);
    }
  }
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_SearchClear();
};
scwin.ds_withholdList_ondataload = async function () {
  var rowCnt = ds_withholdList.getRowCount();
  scwin.f_deptTaxnAmt();
  // await $c.gus.cfHideDSWaitMsg(gr_withholdList);
  // $c.gus.cfShowTotalRows(ed_totalRow, rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    $c.gus.cfEnableAllBtn($p);
    // for(let i=0; i<rowCnt; i++ ){
    //     ds_withholdList.setCellData(i, "subSumStaff", data)

    // }
  }
  scwin.f_VerCheck();
};
scwin.gr_withholdList_ontextimageclick = function (rowIndex, columnIndex) {
  let data = gr_withholdList.getCellData(rowIndex, columnIndex);
  if (columnIndex == 0) {
    scwin.f_GridPop("declarDeptCd", rowIndex, "", "3");
  }
  if (columnIndex == 3) {
    scwin.f_GridPop("acctDeptCd", rowIndex, "", "1");
  }
  if (columnIndex == 5) {
    scwin.f_GridPop("workSiteCd", rowIndex, "", "2");
  }
};
scwin.gr_withholdList_oncellclick = function (rowIndex, columnIndex, columnId) {
  let editList = ["offcStaff", "offcTotAmt", "offcTaxnAmt", "offcIncomeTax", "offcManTax", "salStaff", "salTotAmt", "salTaxnAmt", "salIncomeTax", "salManTax", "dusePstStaff", "dusePstMmWorkDdCnt", "dusePstTotAmt", "dusePstTaxnAmt", "dusePstIncomeTax", "dusePstManTax", "midstreamStaff", "midstreamTotAmt", "midstreamTaxnAmt", "midstreamIncomeTax", "midstreamManTax", "caryFwrdStaff", "caryFwrdTotAmt", "caryFwrdTaxnAmt", "caryFwrdIncomeTax", "caryFwrdManTax", "retireStaff", "retireTotAmt", "retireTaxnAmt", "retireIncomeTax", "retireManTax", "bizStaff", "bizTotAmt", "bizIncomeTax", "bizManTax", "etcStaff", "etcTotAmt", "etcIncomeTax", "etcManTax", "bizTaxAmt"];

  // 원본
  if (acb_version.getValue() == "0") {
    for (var item of editList) {
      gr_withholdList.setReadOnly("cell", rowIndex, item, true);
    }

    // 수정본
  } else {
    for (var item of editList) {
      gr_withholdList.setReadOnly("cell", rowIndex, item, false);
    }
  }
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, "성공적으로 저장되었습니다");
    $c.gus.cfEnableObjects($p, [ica_closeYm, ed_declarDept, ed_declarDeptNm]);
    scwin.f_Retrieve();
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, sbm_save);
};
scwin.sumFormat = function (data, formatData, rowIndex, colIndex) {
  var colId = gr_withholdList.getColumnID(colIndex);
  var result;
  if (colId == "subSumStaff") {
    result = Number(ds_withholdList.getCellData(rowIndex, "salStaff")) + Number(ds_withholdList.getCellData(rowIndex, "offcStaff")) + Number(ds_withholdList.getCellData(rowIndex, "dusePstStaff"));
    return result;
  } else if (colId == "subSumTotAmt") {
    result = Number(ds_withholdList.getCellData(rowIndex, "salTotAmt")) + Number(ds_withholdList.getCellData(rowIndex, "offcTotAmt")) + Number(ds_withholdList.getCellData(rowIndex, "dusePstTotAmt"));
    return result;
  } else if (colId == "subSumTaxnAmt") {
    result = Number(ds_withholdList.getCellData(rowIndex, "salTaxnAmt")) + Number(ds_withholdList.getCellData(rowIndex, "offcTaxnAmt")) + Number(ds_withholdList.getCellData(rowIndex, "dusePstTaxnAmt"));
    return result;
  } else if (colId == "subSumIncomeTax") {
    result = Number(ds_withholdList.getCellData(rowIndex, "salIncomeTax")) + Number(ds_withholdList.getCellData(rowIndex, "offcIncomeTax")) + Number(ds_withholdList.getCellData(rowIndex, "dusePstIncomeTax"));
    return result;
  } else if (colId == "subSumManTax") {
    result = Number(ds_withholdList.getCellData(rowIndex, "salManTax")) + Number(ds_withholdList.getCellData(rowIndex, "offcManTax")) + Number(ds_withholdList.getCellData(rowIndex, "dusePstManTax"));
    return result;
  } else if (colId == "pmntSumStaff") {
    result = Number(ds_withholdList.getCellData(rowIndex, 'offcStaff')) + Number(ds_withholdList.getCellData(rowIndex, 'salStaff')) + Number(ds_withholdList.getCellData(rowIndex, 'dusePstStaff')) + Number(ds_withholdList.getCellData(rowIndex, 'midstreamStaff')) + Number(ds_withholdList.getCellData(rowIndex, 'caryFwrdStaff'));
    return result;
  } else if (colId == "pmntSumTotAmt") {
    result = Number(ds_withholdList.getCellData(rowIndex, 'offcTotAmt')) + Number(ds_withholdList.getCellData(rowIndex, 'salTotAmt')) + Number(ds_withholdList.getCellData(rowIndex, 'dusePstTotAmt')) + Number(ds_withholdList.getCellData(rowIndex, 'midstreamTotAmt')) + Number(ds_withholdList.getCellData(rowIndex, 'caryFwrdTotAmt'));
    return result;
  } else if (colId == "pmntSumTaxnAmt") {
    result = Number(ds_withholdList.getCellData(rowIndex, 'offcTaxnAmt')) + Number(ds_withholdList.getCellData(rowIndex, 'salTaxnAmt')) + Number(ds_withholdList.getCellData(rowIndex, 'dusePstTaxnAmt')) + Number(ds_withholdList.getCellData(rowIndex, 'midstreamTaxnAmt')) + Number(ds_withholdList.getCellData(rowIndex, 'caryFwrdTaxnAmt'));
    return result;
  } else if (colId == "pmntSumIncomeTax") {
    result = Number(ds_withholdList.getCellData(rowIndex, 'offcIncomeTax')) + Number(ds_withholdList.getCellData(rowIndex, 'salIncomeTax')) + Number(ds_withholdList.getCellData(rowIndex, 'dusePstIncomeTax')) + Number(ds_withholdList.getCellData(rowIndex, 'midstreamIncomeTax')) + Number(ds_withholdList.getCellData(rowIndex, 'caryFwrdIncomeTax'));
    return result;
  } else if (colId == "pmntSumManTax") {
    result = Number(ds_withholdList.getCellData(rowIndex, 'offcManTax')) + Number(ds_withholdList.getCellData(rowIndex, 'salManTax')) + Number(ds_withholdList.getCellData(rowIndex, 'dusePstManTax')) + Number(ds_withholdList.getCellData(rowIndex, 'midstreamManTax')) + Number(ds_withholdList.getCellData(rowIndex, 'caryFwrdManTax'));
    return result;
  } else if (colId == "totalSumStaff") {
    result = Number(ds_withholdList.getCellData(rowIndex, "offcStaff")) + Number(ds_withholdList.getCellData(rowIndex, "salStaff")) + Number(ds_withholdList.getCellData(rowIndex, "dusePstStaff")) + Number(ds_withholdList.getCellData(rowIndex, "midstreamStaff")) + Number(ds_withholdList.getCellData(rowIndex, "caryFwrdStaff")) + Number(ds_withholdList.getCellData(rowIndex, "retireStaff")) + Number(ds_withholdList.getCellData(rowIndex, "bizStaff")) + Number(ds_withholdList.getCellData(rowIndex, "etcStaff"));
    return result;
  } else if (colId == "totalSumTotAmt") {
    result = Number(ds_withholdList.getCellData(rowIndex, "offcTotAmt")) + Number(ds_withholdList.getCellData(rowIndex, "salTotAmt")) + Number(ds_withholdList.getCellData(rowIndex, "dusePstTotAmt")) + Number(ds_withholdList.getCellData(rowIndex, "midstreamTotAmt")) + Number(ds_withholdList.getCellData(rowIndex, "caryFwrdTotAmt")) + Number(ds_withholdList.getCellData(rowIndex, "retireTotAmt")) + Number(ds_withholdList.getCellData(rowIndex, "bizTotAmt")) + Number(ds_withholdList.getCellData(rowIndex, "etcTotAmt"));
    return result;
  } else if (colId == "totalSumTaxnAmt") {
    result = Number(ds_withholdList.getCellData(rowIndex, "offcTaxnAmt")) + Number(ds_withholdList.getCellData(rowIndex, "salTaxnAmt")) + Number(ds_withholdList.getCellData(rowIndex, "dusePstTaxnAmt")) + Number(ds_withholdList.getCellData(rowIndex, "midstreamTaxnAmt")) + Number(ds_withholdList.getCellData(rowIndex, "caryFwrdTaxnAmt")) + Number(ds_withholdList.getCellData(rowIndex, "retireTaxnAmt"));
    return result;
  } else if (colId == "totalSumIncomeTax") {
    result = Number(ds_withholdList.getCellData(rowIndex, "offcIncomeTax")) + Number(ds_withholdList.getCellData(rowIndex, "salIncomeTax")) + Number(ds_withholdList.getCellData(rowIndex, "dusePstIncomeTax")) + Number(ds_withholdList.getCellData(rowIndex, "midstreamIncomeTax")) + Number(ds_withholdList.getCellData(rowIndex, "caryFwrdIncomeTax")) + Number(ds_withholdList.getCellData(rowIndex, "retireIncomeTax")) + Number(ds_withholdList.getCellData(rowIndex, "bizIncomeTax")) + Number(ds_withholdList.getCellData(rowIndex, "etcIncomeTax"));
    return result;
  } else if (colId == "totalSumManTax") {
    result = Number(ds_withholdList.getCellData(rowIndex, "offcManTax")) + Number(ds_withholdList.getCellData(rowIndex, "salManTax")) + Number(ds_withholdList.getCellData(rowIndex, "dusePstManTax")) + Number(ds_withholdList.getCellData(rowIndex, "midstreamManTax")) + Number(ds_withholdList.getCellData(rowIndex, "caryFwrdManTax")) + Number(ds_withholdList.getCellData(rowIndex, "retireManTax")) + Number(ds_withholdList.getCellData(rowIndex, "bizManTax")) + Number(ds_withholdList.getCellData(rowIndex, "etcManTax"));
    return result;
  } else if (colId == "taxnAmt1") {
    result = Number(ds_withholdList.getCellData(rowIndex, 'offcTaxnAmt')) + Number(ds_withholdList.getCellData(rowIndex, 'salTaxnAmt')) + Number(ds_withholdList.getCellData(rowIndex, 'dusePstTotAmt'));
    return result;
  } else if (colId == "staff1") {
    result = Number(ds_withholdList.getCellData(rowIndex, 'offcStaff')) + Number(ds_withholdList.getCellData(rowIndex, 'salStaff')) + Number(ds_withholdList.getCellData(rowIndex, 'dusePstStaff'));
    return result;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'searchTable',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'회사조회,회사코드,법인명',nameId:'ed_coNm',style:'',code:'coCd',name:'coNm',refDataCollection:'dma_search',btnId:'btn_company',id:'udc_companyInfo',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',validExpCode:'회사코드:yes',maxlengthName:'65',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_companyInfo_onviewchangeNameEvent',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드'}},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_bilgAcctDeptCd',code:'',codeId:'ed_bilgAcctDeptCd',id:'udc_bilgAcctDeptCd',maxlengthCode:'5',maxlengthName:'100',name:'',nameId:'ed_bilgAcctDeptNm',objTypeCode:'key',objTypeName:'key',popupID:'retrieveAcctDeptCdInfo6popup',selectID:'retrieveAcctDeptCdInfo6',style:'','ev:onclickEvent':'scwin.udc_bilgAcctDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bilgAcctDeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_bilgAcctDeptCd_onblurNameEvent',mandatoryCode:'true',validTitle:'귀속부서'}},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_workSiteInfo',code:'',codeId:'ed_workSiteInfoCd',id:'udc_workSiteInfo',maxlengthCode:'5',maxlengthName:'100',name:'',nameId:'ed_workSiteInfoNm',objTypeCode:'key',objTypeName:'key',popupID:'retrieveWorkSiteInfo',selectID:'retrieveWorkSiteInfo',style:'',mandatoryCode:'true',validTitle:'근무지'}},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_withHoldInfo',code:'',codeId:'ed_withHoldInfoCd',id:'udc_withHoldInfo',maxlengthCode:'5',maxlengthName:'100',name:'',nameId:'ed_withHoldInfoNm',objTypeCode:'key',objTypeName:'key',popupID:'retrieveWithHoldInfo',selectID:'retrieveWithHoldInfo',style:'',mandatoryCode:'true',validTitle:'신고부서'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_closeYm',style:'',mandatory:'true',displayFormat:'yyyy/MM',title:'지급년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신고부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_declarDept',nameId:'ed_declarDeptNm',popupID:'',selectID:'retrieveWithHoldInfo',style:'',validTitle:'',refDataCollection:'dma_search',code:'declarDept',name:'declarDeptNm',validExpCode:'신고부서:no:format=00000',objTypeCode:'data',objTypeName:'data',id:'udc_declarDept','ev:onclickEvent':'scwin.udc_declarDept_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_declarDept_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_declarDept_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구청코드 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{code:'dofficeCd',codeId:'ed_dofficeCd','ev:onblurCodeEvent':'scwin.udc_dofficeCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dofficeCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_dofficeCd_onviewchangeNameEvent',id:'udc_dofficeCd',nameId:'ed_dofficeNm',objTypeCode:'data',objTypeName:'key',popupID:'',refDataCollection:'dma_search',selectID:'retrieveDOfficeCdInfo',style:'',validExpCode:'구청코드:yes:format=00000',validTitle:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'버전 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'value delim label',id:'acb_version',mandatory:'true',sortOption:'value',style:'width: 100px;',submenuSize:'fixed'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_group1',style:'',gridUpYn:'N',gridID:'gr_withholdList',btnUser:'Y',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_withholdList',id:'gr_withholdList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'13',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_withholdList_ontextimageclick','ev:oncellclick':'scwin.gr_withholdList_oncellclick','ev:oneditend':'scwin.gr_withholdList_onafteredit',fixedColumn:'7',fixedColumnNoMove:'true',gridName:'월소득현황조회및수정'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'신고</br>부서',width:'70',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'신고</br>부서명',width:'100',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'구분',width:'70',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'귀속</br>부서',width:'70',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'귀속부서명',width:'120',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'근무지',width:'100',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'근무지명',width:'100',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column577',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column572',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'급여와상여',width:'920',colSpan:'10',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'560',inputType:'text',style:'',id:'column67',value:'일용직',displayMode:'label',colSpan:'6',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'460',inputType:'text',style:'',id:'column167',value:'근로소득합계',displayMode:'label',colSpan:'5',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'460',inputType:'text',style:'',id:'column142',value:'중도퇴직정산',displayMode:'label',colSpan:'5',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'460',inputType:'text',style:'',id:'column247',value:'이월납부세액계',displayMode:'label',colSpan:'5',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'460',inputType:'text',style:'',id:'column222',value:'납부세액계',displayMode:'label',colSpan:'5',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'460',inputType:'text',style:'',id:'column197',value:'퇴직소득',displayMode:'label',colSpan:'5',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'360',inputType:'text',style:'',id:'column287',value:'사업소득',displayMode:'label',colSpan:'4',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'360',inputType:'text',style:'',id:'column317',value:'기타소득',displayMode:'label',colSpan:'4',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'460',inputType:'text',style:'',id:'column267',value:'총합계',displayMode:'label',colSpan:'5',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'1170',inputType:'text',style:'',id:'column367',value:'과세금액',displayMode:'label',colSpan:'12',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'1170',inputType:'text',style:'',id:'column427',value:'인원',displayMode:'label',colSpan:'12',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'320',inputType:'text',style:'',id:'column477',value:'사업소세',displayMode:'label',colSpan:'3',rowSpan:'2',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column578',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column573',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'460',inputType:'text',style:'',id:'column40',value:'사무직',displayMode:'label',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'460',inputType:'text',style:'',id:'column103',value:'기능직',displayMode:'label',colSpan:'5',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column579',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column574',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column49',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column124',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column119',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column114',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column109',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column104',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column99',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column94',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column89',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column84',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'근무일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column189',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column184',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column179',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column174',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column169',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column164',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column159',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column154',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column149',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column144',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column139',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column134',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column259',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column254',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column249',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column244',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column239',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column234',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column229',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column224',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column219',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column214',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column209',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column204',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column199',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column194',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column304',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column299',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column294',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column289',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column284',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column279',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column324',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column319',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column314',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column309',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column274',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column269',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column264',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column389',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column384',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column379',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column369',value:'11개월전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column364',value:'10개월전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column359',value:'9개월전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column354',value:'8개월전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column349',value:'7개월전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column344',value:'6개월전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column339',value:'5개월전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column334',value:'4개월전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column329',value:'3개월전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column129',value:'2개월전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'1개월전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column434',value:'당월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column429',value:'11개월전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column424',value:'10개월전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column419',value:'9개월전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column414',value:'8개월전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column394',value:'7개월전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column399',value:'6개월전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column454',value:'5개월전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column449',value:'4개월전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column444',value:'3개월전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column439',value:'2개월전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column404',value:'1개월전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column409',value:'당월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column479',value:'부서별과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column474',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column469',value:'세액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'declarDeptCd',inputType:'textImage',style:'',value:'',width:'70',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',readOnly:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarDept',inputType:'text',style:'',value:'',width:'100',readOnly:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dofficeNm',inputType:'text',style:'',value:'',width:'70',readOnly:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'textImage',style:'',value:'',width:'70',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',readOnly:'true',mandatory:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'120',readOnly:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workSiteCd',inputType:'textImage',style:'',value:'',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',readOnly:'true',mandatory:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workSiteNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column580',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column575',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offcStaff',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'offcTotAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'offcTaxnAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'offcIncomeTax',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'offcManTax',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'salStaff',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'salTotAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'salTaxnAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'salIncomeTax',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'salManTax',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dusePstStaff',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dusePstMmWorkDdCnt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dusePstTotAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dusePstTaxnAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dusePstIncomeTax',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'dusePstManTax',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'subSumStaff',value:'',displayMode:'label',textAlign:'right',hidden:'false',readOnly:'true',dataType:'number',displayFormat:'#,###',customFormatter:'scwin.sumFormat',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'subSumTotAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',customFormatter:'scwin.sumFormat',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'subSumTaxnAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',customFormatter:'scwin.sumFormat',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'subSumIncomeTax',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',customFormatter:'scwin.sumFormat',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'subSumManTax',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',customFormatter:'scwin.sumFormat',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'midstreamStaff',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'midstreamTotAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'midstreamTaxnAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'midstreamIncomeTax',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'midstreamManTax',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'caryFwrdStaff',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'caryFwrdTotAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'caryFwrdTaxnAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'caryFwrdIncomeTax',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'caryFwrdManTax',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pmntSumStaff',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',customFormatter:'scwin.sumFormat',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pmntSumTotAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',customFormatter:'scwin.sumFormat',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pmntSumTaxnAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',customFormatter:'scwin.sumFormat',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'pmntSumIncomeTax',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',customFormatter:'scwin.sumFormat',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'pmntSumManTax',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',customFormatter:'scwin.sumFormat',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'retireStaff',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'retireTotAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'retireTaxnAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'retireIncomeTax',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'retireManTax',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bizStaff',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bizTotAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bizIncomeTax',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bizManTax',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'etcStaff',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'etcTotAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'etcIncomeTax',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'etcManTax',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'totalSumStaff',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',customFormatter:'scwin.sumFormat',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'totalSumTotAmt',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',customFormatter:'scwin.sumFormat',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'totalSumTaxnAmt',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',customFormatter:'scwin.sumFormat',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'totalSumIncomeTax',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',customFormatter:'scwin.sumFormat',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'totalSumManTax',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',customFormatter:'scwin.sumFormat',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'taxnAmt12',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'taxnAmt11',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'taxnAmt10',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'taxnAmt9',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'taxnAmt8',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'taxnAmt7',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'taxnAmt6',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'taxnAmt5',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'taxnAmt4',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'taxnAmt3',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'taxnAmt2',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'taxnAmt1',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',customFormatter:'scwin.sumFormat',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'staff12',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'staff11',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'staff10',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'staff9',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'staff8',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'staff7',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'staff6',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'staff5',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'staff4',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'staff3',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'staff2',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'staff1',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',customFormatter:'scwin.sumFormat',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'taxnAmtAvg',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bizTaxnAvg',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bizTaxAmt',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row8'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column571',value:'',displayMode:'label',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column570',value:'',displayMode:'label',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column569',value:'',displayMode:'label',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column568',value:'',displayMode:'label',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column567',value:'',displayMode:'label',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column566',value:'',displayMode:'label',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column565',value:'',displayMode:'label',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column581',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column576',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column563',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'offcStaff\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column562',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'offcTotAmt\') ',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column561',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'offcTaxnAmt\') ',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column560',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'offcIncomeTax\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column559',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'offcManTax\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column558',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'salStaff\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column557',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'salTotAmt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column556',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'salTaxnAmt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column555',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'salIncomeTax\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column554',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'salManTax\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column553',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'dusePstStaff\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column552',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'dusePstMmWorkDdCnt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column551',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'dusePstTotAmt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column550',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'dusePstTaxnAmt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column549',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'dusePstIncomeTax\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column548',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'dusePstManTax\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column547',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'salStaff\') + sum(\'offcStaff\') + sum(\'dusePstStaff\') ',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column546',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'salTotAmt\')+sum(\'offcTotAmt\')+sum(\'dusePstTotAmt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column545',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'salTaxnAmt\') + sum(\'offcTaxnAmt\') + sum(\'dusePstTaxnAmt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column544',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'salIncomeTax\') + sum(\'offcIncomeTax\') + sum(\'dusePstIncomeTax\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column543',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'salManTax\') + sum(\'offcManTax\') + sum(\'dusePstManTax\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column542',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'midstreamStaff\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column541',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'midstreamTotAmt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column540',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'midstreamTaxnAmt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column539',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'midstreamIncomeTax\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column538',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'midstreamManTax\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column537',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'caryFwrdStaff\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column536',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'caryFwrdTotAmt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column535',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'caryFwrdTaxnAmt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column534',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'caryFwrdIncomeTax\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column533',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'caryFwrdManTax\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column532',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'offcStaff\') + sum(\'salStaff\') + sum(\'dusePstStaff\') + sum(\'midstreamStaff\') + sum(\'caryFwrdStaff\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column531',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'offcTotAmt\') + sum(\'salTotAmt\') + sum(\'dusePstTotAmt\') + sum(\'midstreamTotAmt\') + sum(\'caryFwrdTotAmt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column530',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'offcTaxnAmt\') + sum(\'salTaxnAmt\') + sum(\'dusePstTaxnAmt\') + sum(\'midstreamTaxnAmt\') + sum(\'caryFwrdTaxnAmt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column529',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'offcIncomeTax\')+sum(\'salIncomeTax\')+sum(\'dusePstIncomeTax\')+sum(\'midstreamIncomeTax\')+sum(\'caryFwrdIncomeTax\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column528',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'offcManTax\') + sum(\'salManTax\') + sum(\'dusePstManTax\') + sum(\'midstreamManTax\') + sum(\'caryFwrdManTax\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column527',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'retireStaff\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column526',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'retireTotAmt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column525',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'retireTaxnAmt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column524',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'retireIncomeTax\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column523',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'retireManTax\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column522',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'bizStaff\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column521',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'bizTotAmt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column520',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'bizIncomeTax\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column519',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'bizManTax\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column518',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'etcStaff\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column517',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'etcTotAmt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column516',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'etcIncomeTax\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column515',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'etcManTax\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column514',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'offcStaff\')+sum(\'salStaff\')+sum(\'dusePstStaff\')+sum(\'midstreamStaff\')+sum(\'caryFwrdStaff\')+sum(\'retireStaff\')+sum(\'bizStaff\')+sum(\'etcStaff\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column513',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'offcTotAmt\')+sum(\'salTotAmt\')+sum(\'dusePstTotAmt\')+sum(\'midstreamTotAmt\')+sum(\'caryFwrdTotAmt\')+sum(\'retireTotAmt\')+sum(\'bizTotAmt\')+sum(\'etcTotAmt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column512',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'offcTaxnAmt\') + sum(\'salTaxnAmt\') + sum(\'dusePstTaxnAmt\') + sum(\'midstreamTaxnAmt\') + sum(\'caryFwrdTaxnAmt\') + sum(\'retireTaxnAmt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column511',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'offcIncomeTax\')+sum(\'salIncomeTax\')+sum(\'dusePstIncomeTax\')+sum(\'midstreamIncomeTax\')+sum(\'caryFwrdIncomeTax\')+sum(\'retireIncomeTax\')+sum(\'bizIncomeTax\')+sum(\'etcIncomeTax\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column510',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'offcManTax\')+sum(\'salManTax\')+sum(\'dusePstManTax\')+sum(\'midstreamManTax\')+sum(\'caryFwrdManTax\')+sum(\'retireManTax\')+sum(\'bizManTax\')+sum(\'etcManTax\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column508',value:'',displayMode:'label',expression:'sum(\'taxnAmt12\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column507',value:'',displayMode:'label',expression:'sum(\'taxnAmt11\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column506',value:'',displayMode:'label',expression:'sum(\'taxnAmt10\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column505',value:'',displayMode:'label',expression:'sum(\'taxnAmt9\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column504',value:'',displayMode:'label',expression:'sum(\'taxnAmt8\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column503',value:'',displayMode:'label',expression:'sum(\'taxnAmt7\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column502',value:'',displayMode:'label',expression:'sum(\'taxnAmt6\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column501',value:'',displayMode:'label',expression:'sum(\'taxnAmt5\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column500',value:'',displayMode:'label',expression:'sum(\'taxnAmt4\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column499',value:'',displayMode:'label',expression:'sum(\'taxnAmt3\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column498',value:'',displayMode:'label',expression:'sum(\'taxnAmt2\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column497',value:'',displayMode:'label',expression:'sum(\'offcTaxnAmt\') + sum(\'salTaxnAmt\') + sum(\'dusePstTotAmt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column496',value:'',displayMode:'label',expression:'sum(\'staff12\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column495',value:'',displayMode:'label',expression:'sum(\'staff11\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column494',value:'',displayMode:'label',expression:'sum(\'staff10\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column493',value:'',displayMode:'label',expression:'sum(\'staff9\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column492',value:'',displayMode:'label',expression:'sum(\'staff8\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column491',value:'',displayMode:'label',expression:'sum(\'staff7\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column490',value:'',displayMode:'label',expression:'sum(\'staff6\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column489',value:'',displayMode:'label',expression:'sum(\'staff5\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column488',value:'',displayMode:'label',expression:'sum(\'staff4\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column487',value:'',displayMode:'label',expression:'sum(\'staff3\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column486',value:'',displayMode:'label',expression:'sum(\'staff2\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column485',value:'',displayMode:'label',expression:'sum(\'offcStaff\')+sum(\'salStaff\')+sum(\'dusePstStaff\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column484',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'taxnAmtAvg\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column483',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'bizTaxnAvg\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column482',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'bizTaxAmt\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdBtn',gridID:'gr_withholdList',rowAddUserAuth:'C',rowDelUserAuth:'D',btnDelYn:'N',btnCancelYn:'Y',btnRowAddObj:'btn_add',btnRowDelObj:'btn_del',btnCancelObj:'btn_cancel',rowDelFunction:'scwin.btn_delete',rowAddFunction:'scwin.f_AddRow',btnRowAddYn:'Y',btnRowDelYn:'N',cancelFunction:'scwin.f_UndoRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})