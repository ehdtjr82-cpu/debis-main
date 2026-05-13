/*amd /ui/ds/fs/adjm/fs_103_01_02b.xml 29809 1f65133cc9dc5457e0a47bc9aad376a58717e82a6e4bac5461e2764ab65c3dcf */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseEvidenceList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'checkbox',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmDept',name:'정산/부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitPic',name:'작성자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정/구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsNm',name:'확정/구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNo',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsVatNo',name:'세금계산서/번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'세금계산서/공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급가액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'합계금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_purchaseCertiQueryConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'pchsDeptCd',name:'정산부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'admitPic',name:'작성자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtSt',name:'전표일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtEnd',name:'전표일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'매입거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsIntendDtSt',name:'세금계산서공급일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsIntendDtEnd',name:'세금계산서공급일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnClsCd',name:'확정구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_purchaseCertiQueryConditionDTO',action:'/ds.fs.adjm.pchsadjmdcsn.RetrievePurchaseEvidenceListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_purchaseCertiQueryConditionDTO","key":"IN_DS1"},{"id":"ds_purchaseEvidenceList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_purchaseEvidenceList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_purchaseCertiQueryConditionDTO_submit','ev:submitdone':'scwin.sbm_purchaseCertiQueryConditionDTO_submitdone','ev:submiterror':'scwin.sbm_purchaseCertiQueryConditionDTO_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cancelSlip',action:'/ds.fs.adjm.pchsadjmdcsn.CancelSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_purchaseEvidenceList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_cancelSlip_submit','ev:submitdone':'scwin.sbm_cancelSlip_submitdone','ev:submiterror':'scwin.sbm_cancelSlip_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fs_103_01_02b 
// 이름     : 확정전 매입전표 조회 및 삭제
// 경로     : 물류/정산/세금계산서/
// 작 성 자 : 조성빈
// 작 업 일 : 2025-12-26
// 사용계정 : 내부
// 비고     : 
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.vCurDate;
scwin.vQryStDt;
scwin.vQryEndDt;
scwin.onpageload = function () {
  scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
  scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
  scwin.vQryEndDt = $c.date.getServerDateTime($p, "yyyyMMdd");
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    scwin.f_SetDefaultData();
    $c.gus.cfDisableBtn($p, [btn_Save]);

    // $p.setTimeout(function() {
    //     ed_pchsDeptCd.setValue("6A2");

    //     // ica_slipDtSt.setValue("20120831");
    //     // ica_slipDtEnd.setValue("20120831");

    //     ica_slipDtSt.setValue("20250730");
    //     ica_slipDtEnd.setValue("20250731");
    //     acb_dcsnClsCd.setValue("3");

    //     // ed_pchsDeptCd.focus();
    //     // ed_pchsDeptCd.blur();
    // }, {"delay":50});        
    // 정산부서 : 6A2, 전표일자 : 2012/08/31 ~ 2012/08/31
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  ica_slipDtSt.setValue(scwin.vQryStDt); // 전표일자시작
  ica_slipDtEnd.setValue(scwin.vQryEndDt); // 전표일자종료
  acb_dcsnClsCd.setSelectedIndex(0); // 확정구분
  // cfSetIMEModeActiveObjects([ed_pchsDeptNm, ed_admitPicNm, ed_pchsClntNm]);  // IME 한글입력

  ed_pchsDeptCd.focus();
};

//-------------------------------------------------------------------------
// 매입거래명세서 조회
//-------------------------------------------------------------------------
scwin.f_RetrievePurchaseEvidenceList = async function () {
  var validate = await $c.gus.cfValidate($p, [ed_pchsDeptCd, ica_slipDtSt, ica_slipDtEnd]);
  // 검색조건 필수 입력 체크, 동일 날짜 포함 여부 체크
  if (!validate) {
    return;
  }
  var afterDate = await $c.gus.cfIsAfterDate($p, ica_slipDtSt.getValue(), ica_slipDtEnd.getValue());
  if (!afterDate) {
    await $c.gus.cfAlertMsg($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ica_slipDtSt.focus();
    return;
  }
  $c.sbm.execute($p, sbm_purchaseCertiQueryConditionDTO);
};

//-------------------------------------------------------------------------
// 전표 삭제
//-------------------------------------------------------------------------
scwin.f_CancelSlip = async function () {
  var modifyRowCnt = ds_purchaseEvidenceList.getModifiedIndex().length;
  // ds_purchaseEvidenceList.getRowStatus(rowIndex)
  // Data 변경 여부 조회
  if (!(modifyRowCnt > 0)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["목록"]); // 선택된 @이(가) 없습니다.
    return;
  }
  var confirm = await $c.win.confirm($p, "전표를 삭제하시겠습니까?");
  if (confirm) {
    $c.sbm.execute($p, sbm_cancelSlip);
  }
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.f_RunExcel = async function (value) {
  var count = ds_purchaseEvidenceList.getRowCount();
  if (!(count > 0)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  } else {
    // {"fileName":"매입전표 조회 및 삭제.xlsx","type":"4+8+16"}

    var argGridTotalCol = 0;
    for (var i = 0; i < gr_purchaseEvidenceList.getTotalCol(); i++) {
      if (gr_purchaseEvidenceList.getColumnVisible(i)) {
        argGridTotalCol++;
      }
    }
    const infoArr = [{
      rowIndex: 0,
      colIndex: 0,
      rowSpan: 1,
      colSpan: argGridTotalCol,
      text: "매입전표 조회 및 삭제",
      textAlign: "center"
      // , fontSize    : "12pt"
      ,

      fontName: "돋움체",
      color: "black",
      fontWeight: "",
      drawBorder: "false",
      borderColor: "",
      borderWidth: "",
      wordWrap: "true",
      bgColor: "#ffffff"
    }];
    const options = {
      fileName: "매입전표 조회 및 삭제.xlsx",
      //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      sheetName: "매입전표 조회 및 삭제",
      type: "1",
      startRowIndex: 2
      // removeColumns: "0,21",
      // hiddenVisible : true,
      // useSubTotal :"true", 
      // useSubTotalData  : "true",
      // oddRowBackgroundColor  : "",                        // excel파일에서 그리드 body의 홀수줄의 배경색
      // evenRowBackgroundColor : "#F5FFF5"                  // excel파일에서 그리드 body의 짝수줄의 배경색
    };
    $c.data.downloadGridViewExcel($p, gr_purchaseEvidenceList, options, infoArr);
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      // 정산부서 팝업
      udc_pchsDept.setSelectId('retrieveLobranInfo');
      udc_pchsDept.cfCommonPopUp(scwin.udc_pchsDept_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      // 작성자 팝업
      udc_admitPic.setSelectId('retrieveEmpInfo');
      udc_admitPic.cfCommonPopUp(scwin.udc_admitPic_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 3:
      // 매입거래처 팝업
      udc_pchsClnt.setSelectId('retrieveClntList');
      udc_pchsClnt.cfCommonPopUp(scwin.udc_pchsClnt_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
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
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 검색영역 Field Clear함.
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};
scwin.udc_pchsDept_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptNm, ed_pchsDeptCd, 1, false);
};
scwin.udc_pchsDept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_pchsDeptCd.getValue(), ed_pchsDeptNm.getValue(), 'F', 'T');
};
scwin.udc_pchsDept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptCd, ed_pchsDeptNm, 1);
};
scwin.udc_admitPic_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_admitPicNm, ed_admitPic, 2, false);
};
scwin.udc_admitPic_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_admitPic.getValue(), ed_admitPicNm.getValue(), 'F', 'T');
};
scwin.udc_admitPic_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_admitPic, ed_admitPicNm, 2);
};
scwin.udc_pchsClnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNm, ed_pchsClntNo, 3, false);
};
scwin.udc_pchsClnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_pchsClntNo.getValue(), ed_pchsClntNm.getValue(), 'F', 'F');
};
scwin.udc_pchsClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNo, ed_pchsClntNm, 3);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_RetrievePurchaseEvidenceList();
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_CancelSlip();
};
scwin.sbm_purchaseCertiQueryConditionDTO_submit = function (e) {
  ds_purchaseCertiQueryConditionDTO.set("pchsDeptCd", ed_pchsDeptCd.getValue());
  ds_purchaseCertiQueryConditionDTO.set("admitPic", ed_admitPic.getValue());
  ds_purchaseCertiQueryConditionDTO.set("slipDtSt", ica_slipDtSt.getValue());
  ds_purchaseCertiQueryConditionDTO.set("slipDtEnd", ica_slipDtEnd.getValue());
  ds_purchaseCertiQueryConditionDTO.set("pchsClntNo", ed_pchsClntNo.getValue());
  ds_purchaseCertiQueryConditionDTO.set("pchsIntendDtSt", ica_pchsIntendDtSt.getValue());
  ds_purchaseCertiQueryConditionDTO.set("pchsIntendDtEnd", ica_pchsIntendDtEnd.getValue());
  ds_purchaseCertiQueryConditionDTO.set("dcsnClsCd", acb_dcsnClsCd.getValue());
  ds_purchaseCertiQueryConditionDTO.set("slipNo", ed_slipNo.getValue());
};
scwin.sbm_purchaseCertiQueryConditionDTO_submitdone = async function (e) {
  // gr_purchaseEvidenceList.ColumnProp('chk','HeadCheck') = "false";
  // 총 조회건수 표시
  var rowCnt = ds_purchaseEvidenceList.getRowCount();
  txt_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfDisableBtn($p, [btn_Save]);
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
  } else {
    $c.gus.cfEnableBtnOnly($p, [btn_Save]);
  }
};
scwin.sbm_purchaseCertiQueryConditionDTO_submiterror = function (e) {};
scwin.sbm_cancelSlip_submit = function (e) {};
scwin.sbm_cancelSlip_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_RetrievePurchaseEvidenceList();
  }
};
scwin.sbm_cancelSlip_submiterror = function (e) {};
scwin.gr_purchaseEvidenceList_oncellclick = async function (rowIndex, columnIndex, Colid) {
  if (Colid == "chk") {
    var cnt = 0;
    // 확정구분이 계산서작성(3)인 경우 전표 삭제
    for (var i = 0; i < ds_purchaseEvidenceList.getRowCount(); i++) {
      if (ds_purchaseEvidenceList.getCellData(i, "chk") == "T" && ds_purchaseEvidenceList.getCellData(i, "dcsnClsCd") != "3") {
        ds_purchaseEvidenceList.setCellData(i, "chk", "F");
        await $c.gus.cfAlertMsg($p, "확정구분이 계산서작성인 경우만 가능합니다.");
        return;
      }
      if (ds_purchaseEvidenceList.getCellData(i, "chk") == "T") {
        cnt++;
      }
    }
    if (cnt > 1) {
      ds_purchaseEvidenceList.setCellData(ds_purchaseEvidenceList.getRowPosition(), "chk", "0");
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["1건"]); // @을(를) 선택하십시오.
      return;
    }
  }
};
scwin.udc_pchsDept_callBackFunc = function (ref) {
  $c.gus.cfSetReturnValue($p, ref, ed_pchsDeptCd, ed_pchsDeptNm); // 정산부서코드, 정산부서명
};
scwin.udc_admitPic_callBackFunc = function (ref) {
  $c.gus.cfSetReturnValue($p, ref, ed_admitPic, ed_admitPicNm); // 사번, 성명
};
scwin.udc_pchsClnt_callBackFunc = function (ref) {
  $c.gus.cfSetReturnValue($p, ref, ed_pchsClntNo, ed_pchsClntNm); // 매입거래처코드, 매입거래처명
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정산부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_pchsDept',codeId:'ed_pchsDeptCd',nameId:'ed_pchsDeptNm',UpperFlagCode:'1',mandatoryCode:'true',maxlengthCode:'4',objTypeCode:'Data',objTypeName:'data','ev:onviewchangeNameEvent':'scwin.udc_pchsDept_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_pchsDept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_pchsDept_onblurCodeEvent',validTitle:'정산부서',allowCharCode:'A-Za-z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전표일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_slipDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_slipDtSt',mandatoryFrom:'true',objTypeFrom:'data',edToId:'ica_slipDtEnd',mandatoryTo:'true',objTypeTo:'data',titleFrom:'전표일자시작',titleTo:'전표일자종료'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_admitPic',codeId:'ed_admitPic',nameId:'ed_admitPicNm',objTypeCode:'data',maxlengthCode:'6',maxlengthName:'50',objTypeName:'data','ev:onviewchangeNameEvent':'scwin.udc_admitPic_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_admitPic_onclickEvent','ev:onblurCodeEvent':'scwin.udc_admitPic_onblurCodeEvent',validTitle:'작성자',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_pchsClnt',codeId:'ed_pchsClntNo',nameId:'ed_pchsClntNm',objTypeCode:'data',objTypeName:'data','ev:onviewchangeNameEvent':'scwin.udc_pchsClnt_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_pchsClnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_pchsClnt_onblurCodeEvent',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'6',validTitle:'매입거래처'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세금계산서 공급일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_pchsIntendDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_pchsIntendDtSt',objTypeFrom:'data',edToId:'ica_pchsIntendDtEnd',objTypeTo:'data',titleFrom:'세금계산서 공급일자시작',titleTo:'세금계산서 공급일자종료'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_dcsnClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'계산서작성'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전표확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전표취소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_slipNo',placeholder:'',style:'width:150px;',maxByteLength:'10',allowChar:'0-9',objType:'Data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_purchaseEvidenceList',gridDownFn:'scwin.f_RunExcel',id:'udc_topGrdBtn',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_purchaseEvidenceList',id:'gr_purchaseEvidenceList',style:'',visibleRowNum:'14',visibleRowNumFix:'true',columnMove:'true','ev:oncellclick':'scwin.gr_purchaseEvidenceList_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'column1',inputType:'text',value:'',width:'50',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'정산부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'작성자',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'확정<br/>구분',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'전표일자',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'거래처코드',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'협력업체',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'사업자번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'세금계산서<br/>번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'세금계산서<br/>공급일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column73',inputType:'text',value:'공급가액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column70',inputType:'text',value:'부가세',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column67',inputType:'text',value:'합계금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column64',inputType:'text',value:'적요',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'chk',inputType:'checkbox',width:'50',trueValue:'T',falseValue:'F',valueType:'other',emptyValue:'F'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adjmDept',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'admitPic',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnClsNm',inputType:'text',width:'120',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'text',width:'100',readOnly:'true',dataType:'text',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pchsClntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'text',textAlign:'left',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'busiNo',inputType:'text',width:'100',readOnly:'true',displayFormat:'###-##-#####'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsVatNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyDt',inputType:'text',width:'100',readOnly:'true',dataType:'text',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyAmt',inputType:'text',textAlign:'right',width:'100',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vat',inputType:'text',textAlign:'right',width:'100',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumAmt',inputType:'text',textAlign:'right',width:'100',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',textAlign:'left',width:'120',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',value:'합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column75',inputType:'expression',textAlign:'right',width:'100',expression:'sum(\'spplyAmt\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column72',inputType:'expression',textAlign:'right',width:'100',expression:'sum(\'vat\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column69',inputType:'expression',textAlign:'right',width:'100',expression:'sum(\'sumAmt\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column66',inputType:'text',width:'120'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전표삭제'}]}]}]}]}]}]}]}]}]})