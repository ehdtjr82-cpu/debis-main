/*amd /ui/ac/fi/electaxinvc/fi_900_01_08b.xml 28359 8998b89e58df87193e8ac79fc205577dbec6b83f395adbcba2aa65d33caaf329 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgVatNo',name:'부가세번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'documentidentifier',name:'발급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxbilltypecode',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxbilltypecodeNm',name:'계산서종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'classcode',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'classcodeNm',name:'발급종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reverseissue',name:'역발행',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reverseYn',name:'역발행여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amendmentstatuscode',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amendmentstatuscodeNm',name:'수정사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'E-mail',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emailPerson',name:'E-mail담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emailDept',name:'E-mail담당자부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delCnt',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainkey',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supplydate',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'responsetype',name:'최종응답이력',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'spplyDtSt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spplyDtEnd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'declarYn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'chkDay',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConKnd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'documentidentifier',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mainkey',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.electaxinvc.RetrieveElecTaxinvcEmailResendCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.electaxinvc.SaveElecTaxinvcEmailResendCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_out","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.sysAdminYn = scwin.memJson.sysAdminYn;
scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.vFirDate = scwin.vCurDate.substring(0, 6) + "01";
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사  
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)

scwin.hid_coClsCd = "";
scwin.isStart = false;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FI065",
    compID: "gr_out:responsetype"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// UDC 로딩 완료 후
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ica_spplyDtSt.setValue(scwin.vFirDate);
  ica_spplyDtEnd.setValue(scwin.vCurDate);
  lc_qryConKnd.setValue("공급일자");
  lc_selpchClsCd.setValue("C");
  ica_spplyDtSt.focus();
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.hid_coClsCd = scwin.vLoginCoClsCd;
  scwin.isStart = true;
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (lc_qryConKnd.getValue() === "전표번호") {
    let ret = await $c.gus.cfValidate($p, [ed_slipNo]);
    if (!ret) {
      return false;
    }
  } else if (lc_qryConKnd.getValue() === "공급일자") {
    if ($c.gus.cfIsNull($p, ica_spplyDtSt.getValue())) {
      await $c.win.alert($p, "공급일자는 필수 입니다.");
      ica_spplyDtSt.focus();
      return;
    }
    if ($c.gus.cfIsNull($p, ica_spplyDtEnd.getValue())) {
      await $c.win.alert($p, "공급일자는 필수 입니다.");
      ica_spplyDtEnd.focus();
      return;
    }
    let ret3 = await $c.date.isDate($p, ica_spplyDtSt.getValue());
    if (!ret3) {
      await $c.win.alert($p, "공급일자가 날자 형식에 맞지 않습니다.");
      ica_spplyDtSt.focus();
      return;
    }
    let ret4 = await $c.date.isDate($p, ica_spplyDtEnd.getValue());
    if (!ret4) {
      await $c.win.alert($p, "공급일자가 날자 형식에 맞지 않습니다.");
      ica_spplyDtEnd.focus();
      return;
    }

    // 조회시작일자가 더 클경우 체크
    if (!(await $c.gus.cfIsAfterDate($p, ica_spplyDtSt.getValue(), ica_spplyDtEnd.getValue()))) {
      await $c.win.alert($p, MSG_CM_ERR_039);
      return;
    }
  }
  dma_search.set("slipNo", ed_slipNo.getValue());
  dma_search.set("coClsCd", scwin.hid_coClsCd);
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_srchCond, [ed_coCd, ed_coNm, scwin.hid_coClsCd]);
  ica_spplyDtSt.setValue(scwin.vFirDate);
  ica_spplyDtEnd.setValue(scwin.vCurDate);
  ica_spplyDtSt.focus();
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  for (let i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, "chk") === "1" && ds_out.getCellData(i, "responsetype") === "D") {
      await $c.win.alert($p, i + 1 + "행의 최종응답이력이 '거부-화주'인 건은 거래처 전송-재발급 화면에서 처리가능합니다.");
      return;
    }
  }
  if (!(await $c.win.confirm($p, "Email 재전송을 하시겠습니까?"))) {
    return;
  }
  $c.sbm.execute($p, sbm_save);
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (flag, check) {
  switch (flag) {
    case '1':
      // 사업자번호
      let param = "";
      await udc_crnInfo.cfCommonPopUp(scwin.udc_crnInfo_callBackFunc, ed_crn.getValue().trim(), ed_crnNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '2':
      // 작성자
      let empParam = "";
      await udc_empInfo.cfCommonPopUp(scwin.udc_empInfo_callBackFunc, ed_drawEmpNo.getValue().trim(), ed_drawEmpNm.getValue(), check, null, null, null, null, empParam, null, null, null, null);
      break;
    case '3':
      // 거래처 email 조회
      let clntNo = ds_out.getCellData(ds_out.getRowPosition(), "clntNo");
      await udc_clntEmail.cfCommonPopUp(scwin.udc_clntEmail_callBackFunc, clntNo, "", "F", null, null, null, null, null, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.udc_crnInfo_callBackFunc = function (rtnList) {
  scwin.f_resultPopEd(ed_crn, ed_crnNm, rtnList);
};
scwin.udc_empInfo_callBackFunc = function (rtnList) {
  scwin.f_resultPopEd(ed_drawEmpNo, ed_drawEmpNm, rtnList);
};
scwin.udc_clntEmail_callBackFunc = function (rtnList) {
  if (typeof rtnList !== "undefined") {
    if (rtnList !== null) {
      if (rtnList[0] === "N/A") {
        return;
      }
      ds_out.setCellData(ds_out.getRowPosition(), "email", rtnList[0]);
      ds_out.setCellData(ds_out.getRowPosition(), "emailPerson", rtnList[3]);
      ds_out.setCellData(ds_out.getRowPosition(), "emailDept", rtnList[4]);
    } else {
      ds_out.setCellData(ds_out.getRowPosition(), "email", "");
      ds_out.setCellData(ds_out.getRowPosition(), "emailPerson", "");
      ds_out.setCellData(ds_out.getRowPosition(), "emailDept", "");
    }
  }
};

//-------------------------------------------------------------------------
// 팝업체크
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  if (strCd.getValue().trim() === strCd.options.hidVal) {
    return;
  }
  strNm.setValue("");
  strCd.options.hidVal = "";
  if (strCd.getValue().trim() !== "") {
    scwin.f_openPopUp(flag, 'T');
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList !== null) {
    if (rtnList[0] === "N/A") {
      return;
    }
    strCd.setValue(rtnList[0]);
    strNm.setValue(rtnList[1]);
    if (!strCd.options) strCd.options = {};
    strCd.options.hidVal = rtnList[0];
  } else {
    strCd.setValue("");
    strNm.setValue("");
    if (!strCd.options) strCd.options = {};
    strCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_out.getRowCount() > 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: '전자세금계산서신고내역.xlsx',
        sheetName: '전자세금계산서신고내역'
      };
      $c.data.downloadGridViewExcel($p, gr_out, options);
    }
  } else {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 (f_PopUpCompanyInfo 대체)
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  await udc_dongbuGroupCompanyInfo.cfCommonPopUp(scwin.udc_dongbuGroupCompanyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_dongbuGroupCompanyInfo_callBackFunc = function (rtnList) {
  if (rtnList !== null) {
    if (rtnList[0] === "N/A") return;
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
    if (!ed_coCd.options) ed_coCd.options = {};
    ed_coCd.options.hidVal = rtnList[0];
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    if (!ed_coCd.options) ed_coCd.options = {};
    ed_coCd.options.hidVal = "";
  }
  if (scwin.isStart == true) {
    if (ACConstants.CO_CD_DONGBU !== scwin.memJson.coCd && scwin.sysAdminYn != 1) {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm]);
    } else {
      ed_coCd.setValue(ACConstants.CO_CD_DONGBU);
    }
  }
  scwin.isStart = false;
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, MSG_CM_INF_001);
  }
};
scwin.sbm_search_submitdone = async function (e) {
  let rowCnt = ds_out.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
  totalRows.setValue(rowCnt);
};
scwin.udc_crnInfo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_crn, ed_crnNm, '1');
};
scwin.udc_empInfo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_drawEmpNo, ed_drawEmpNm, '2');
};
scwin.ed_coCd_onblur = function (e) {
  ed_coNm.setValue("");
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  } else {
    ed_coNm.setValue("");
  }
};
scwin.lc_qryConKnd_onchange = function (info) {
  if (lc_qryConKnd.getValue() === "전표번호") {
    udc_fromToCalendar.hide();
    ed_slipNo.show();
  } else {
    udc_fromToCalendar.show();
    ed_slipNo.hide();
  }
};
scwin.gr_out_ontextimageclick = function (rowIndex, columnIndex) {
  let colId = gr_out.getColumnID(columnIndex);
  if (colId == "email") {
    scwin.f_openPopUp('3', 'F');
  }
};
scwin.udc_crnInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};
scwin.udc_crnInfo_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUp('1', 'F');
};
scwin.udc_empInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('2', 'T');
};
scwin.udc_empInfo_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUp('2', 'T');
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_send_onclick = function (e) {
  scwin.f_Save();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'req',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_qryConKnd',style:'width: 100px;',submenuSize:'fixed',ref:'data:dma_search.qryConKnd','ev:onchange':'scwin.lc_qryConKnd_onchange',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공급일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'공급일자'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'전표번호'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'spplyDtSt',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar',refEdDt:'spplyDtEnd',mandatoryFrom:'true',objTypeFrom:'data',objTypeBtn:'data',edToId:'ica_spplyDtEnd',edFromId:'ica_spplyDtSt',mandatoryTo:'true',objTypeTo:'data'}},{T:1,N:'xf:input',A:{class:'',id:'ed_slipNo',style:';display:none;',mandatory:'true',allowChar:'0-9',maxlength:'10'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCrnInfo',codeId:'ed_crn',validTitle:'사업자번호',nameId:'ed_crnNm',style:'',allowCharCode:'0-9',maxlengthCode:'13',UpperFlagCode:'1',objTypeCode:'data',objTypeName:'data',code:'crn',refDataCollection:'dma_search',id:'udc_crnInfo','ev:onblurCodeEvent':'scwin.udc_crnInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_crnInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_crnInfo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_drawEmpNo',nameId:'ed_drawEmpNm',popupID:'',selectID:'retrieveEmpInfo',style:'',validTitle:'작성자',allowCharCode:'0-9',UpperFlagCode:'1',name:'drawEmpNo',refDataCollection:'dma_search',id:'udc_empInfo','ev:onblurCodeEvent':'scwin.udc_empInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_empInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_empInfo_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출입구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_selpchClsCd',style:'width: 208px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'data:dma_search.selpchClsCd',title:'매출입구분'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'D'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:77px;',id:'ed_coCd',class:'',mandatory:'true',allowChar:'0-9',maxlength:'3',ref:'data:dma_search.coCd','ev:onblur':'scwin.ed_coCd_onblur',title:'회사코드'}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_coNm',class:'',title:'회사명'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'전자세금계산서 내역조회 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'\'거부-화주\' 상태인 세금계산서는 거래처 전송-재발급 화면에서 처리 가능합니다.',class:'txt-dot txt-red'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownUserAuth:'X',gridDownFn:'scwin.f_Excel',gridID:'gr_out',btnUser:'Y',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'13',visibleRowNumFix:'true',columnMove:'true','ev:ontextimageclick':'scwin.gr_out_ontextimageclick',rowStatusVisible:'true',rowStatusWidth:'20',fixedColumn:'11',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'선택',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'부가세</br>번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'발급번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'컬럼헤더명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'계산서종류',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'컬럼헤더명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',value:'발급종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',value:'역발행',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column50',value:'역발행</br>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column48',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'수정사유',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',value:'E-mail',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column42',value:'E-mail</br>담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column40',value:'E-mail</br>담당자부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column62',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column60',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column58',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column56',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'공급일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column54',value:'최종응답이력',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'100',readOnly:'true',colMerge:'true',class:'',style:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'orgVatNo',inputType:'text',width:'100',hidden:'true',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'documentidentifier',inputType:'text',width:'100',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'taxbilltypecode',inputType:'text',width:'120',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'taxbilltypecodeNm',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'classcode',inputType:'text',width:'120',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'classcodeNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reverseissue',inputType:'text',width:'100',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'reverseYn',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'amendmentstatuscode',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'amendmentstatuscodeNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'email',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',textReadOnly:'true',viewType:'icon',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'emailPerson',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'emailDept',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'delCnt',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mainkey',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'clntNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'supplydate',displayMode:'label',readOnly:'true',dataType:'date',ioFormat:'yyyyMMdd',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'130',inputType:'select',id:'responsetype',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_send',style:'',type:'button',userAuth:'U',objType:'bSave','ev:onclick':'scwin.btn_send_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Email 재전송'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_company',codeId:'ed_companyCd',id:'udc_dongbuGroupCompanyInfo',nameId:'ed_companyNm',popupID:'',selectID:'retrieveDongbuGroupCompanyInfo',style:'width:%; height:px; ;display:none;',validTitle:''}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntEmail',codeId:'ed_emailCd',validTitle:'',nameId:'ed_emailNm',style:'width:%; height:px; ;display:none;',id:'udc_clntEmail',btnId:'btn_clntEmail'}}]}]}]}]}]})