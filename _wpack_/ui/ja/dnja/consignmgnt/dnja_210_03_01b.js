/*amd /ui/ja/dnja/consignmgnt/dnja_210_03_01b.xml 42631 08979599eed361dcd558cc3208977b4ad85ffbe63a6b3486805fbf333bd6c884 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtFm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtTo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConKnd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_trusteeCertiInformation',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNo',name:'소속거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNm',name:'소속거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'지급처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'지급처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNo',name:'매니저',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNm',name:'매니저명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsNm',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'대납금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'confirmDt',name:'확인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsMgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiPatternCd',name:'certiPatternCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'fmlaClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'fmlaPatternCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'dcsnClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmId',name:'프로그램명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnYn',name:'dcsnYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_trusteeCertiInformationDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNo',name:'소속거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNm',name:'소속거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'지급처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'지급처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNo',name:'매니저',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNm',name:'매니저명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'대납금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellVat',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsMgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiPatternCd',name:'certiPatternCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsSeq',name:'rsltsSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptYm',name:'adptYm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnNm',name:'dcsnNm',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_saveTrusteeCertiInformation',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_saveTrusteeCertiInformationDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDnTrusteeList',action:'/ja.dnja.consignmgnt.RetrieveDnTrusteeListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_queryCondition","key":"IN_DS1"},{"id":"ds_trusteeCertiInformation","key":"OUT_DS1"},{"id":"ds_trusteeCertiInformationDetail","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_trusteeCertiInformation","key":"OUT_DS1"},{"id":"ds_trusteeCertiInformationDetail","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDnTrusteeList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveTrusteeCerti',action:'/ja.dnja.consignmgnt.SaveDnTrusteeCertiListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_saveTrusteeCertiInformation","key":"IN_DS1"},{"id":"ds_saveTrusteeCertiInformationDetail","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveTrusteeCerti_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_deleteTrusteeCerti',action:'/ja.dnja.consignmgnt.DeleteDnTrusteeCertiListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_trusteeCertiInformation","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_deleteTrusteeCerti_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sDate = $c.date.formatDateTime($p, new Date());
scwin.strCurDate = $c.date.getServerDateTime($p);
scwin.strQryStDt = $c.date.getDateAddMonthDirection($p, scwin.strCurDate, 0, "F"); // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)

scwin.isFilter = true;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  ica_ed_adptYm.setValue(scwin.strQryStDt);
  acb_lc_qryConKnd.setValue("RSLTS");
  acb_lc_qryConKnd.focus();
  $c.gus.cfDisableBtn($p, [btn_save, btn_delete, btn_adaptConfirmDt]);
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  udc_qryConDt.setInitDate(scwin.strQryStDt, scwin.strCurDate);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  //validation check
  if (acb_lc_qryConKnd.getValue() == "YM") {
    if (ica_ed_adptYm.getValue() == "") {
      await $c.win.alert($p, "년월은 필수 입력 항목 입니다.");
      ica_ed_adptYm.focus();
      return false;
    }
  } else {
    if (acb_lc_qryConKnd.getValue() == 'RSLTS') {
      //실적 시작일자는 필수 입력 항목 입니다.","실적 종료일자는 필수 입력 항목 입니다."
      if (ed_qryConDtFm.getValue() == "") {
        await $c.win.alert($p, "실적 시작일자는 필수 입력 항목 입니다.");
        ed_qryConDtFm.focus();
        return false;
      } else if (ed_qryConDtTo.getValue() == "") {
        await $c.win.alert($p, "실적 종료일자는 필수 입력 항목 입니다.");
        ed_qryConDtTo.focus();
        return false;
      }
    } else if (acb_lc_qryConKnd.getValue() == 'CERTI') {
      //거래명세서 시작일자는 필수 입력 항목 입니다.","거래명세서 종료일자는 필수 입력 항목 입니다."
      if (ed_qryConDtFm.getValue() == "") {
        await $c.win.alert($p, "거래명세서 시작일자는 필수 입력 항목 입니다.");
        ed_qryConDtFm.focus();
        return false;
      } else if (ed_qryConDtTo.getValue() == "") {
        await $c.win.alert($p, "거래명세서 종료일자는 필수 입력 항목 입니다.");
        ed_qryConDtTo.focus();
        return false;
      }
    }

    //조회시작일자가 더 클경우 체크
    let ret3 = $c.gus.cfIsAfterDate($p, ed_qryConDtFm.getValue(), ed_qryConDtTo.getValue());
    if (!ret3) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      return;
    }
  }
  $c.sbm.execute($p, sbm_retrieveDnTrusteeList);
};
scwin.sbm_retrieveDnTrusteeList_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    let row = ds_trusteeCertiInformation.getRowCount();
    totalRowsInfo.setValue(row);
    if (row == 0) {
      totalRowsDetail.setValue(0);
    }
    if (row == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      $c.gus.cfDisableBtn($p, [btn_save, btn_delete, btn_adaptConfirmDt]);
    } else if (row > 0) {
      //ds_trusteeCertiInformation.UseFilter = true;
      gr_trusteeCertiInformation.setFocusedCell(0, 0);
      if (acb_lc_qryConKnd.getValue() == "YM" || acb_lc_qryConKnd.getValue() == "RSLTS") {
        $c.gus.cfEnableBtnOnly($p, [btn_save, btn_adaptConfirmDt]);
        $c.gus.cfDisableBtn($p, [btn_delete]);
      } else if (acb_lc_qryConKnd.getValue() == "CERTI") {
        $c.gus.cfEnableBtnOnly($p, [btn_delete]);
        $c.gus.cfDisableBtn($p, [btn_save, btn_adaptConfirmDt]);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 조회조건 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, null);
  ica_ed_adptYm.setValue(scwin.strQryStDt);
  udc_qryConDt.setInitDate(scwin.strQryStDt, scwin.strCurDate);
  acb_lc_qryConKnd.setValue("RSLTS");
  ed_homeClntNo.focus();
};

//-------------------------------------------------------------------------
// 비용확정
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  if (ds_trusteeCertiInformation.getRowCount() < 1 || ds_trusteeCertiInformationDetail.getRowCount() < 1) {
    return;
  }

  // 저장 ds 초기화
  ds_saveTrusteeCertiInformation.removeAll();
  ds_saveTrusteeCertiInformationDetail.removeAll();
  $c.gus.cfCopyDataSetHeader($p, ds_trusteeCertiInformation, ds_saveTrusteeCertiInformation);
  var transRow;
  var chkCnt = 0;
  var arr = [];
  for (var i = 0; i < ds_trusteeCertiInformation.getRowCount(); i++) {
    if (ds_trusteeCertiInformation.getCellData(i, "choice") == "T") {
      var rowData = ds_trusteeCertiInformation.getRowJSON(i);
      chkCnt++;
      rowData.curRow = i;
      arr.push(rowData);
    }
  }
  ds_saveTrusteeCertiInformation.setJSON(arr);
  ds_saveTrusteeCertiInformation.modifyAllStatus("C");
  scwin.isFilter = false;
  // gr_trusteeCertiInformationDetail.DataID = '';
  // ds_trusteeCertiInformationDetail.filter();
  // gr_trusteeCertiInformationDetail.DataID = 'ds_trusteeCertiInformationDetail';

  // 필터제거
  ds_trusteeCertiInformationDetail.removeColumnFilterAll();
  $c.gus.cfCopyDataSetHeader($p, ds_trusteeCertiInformationDetail, ds_saveTrusteeCertiInformationDetail);
  var transRow2;
  var chkCnt2 = 0;
  var arr2 = [];
  for (var i = 0; i < ds_trusteeCertiInformationDetail.getRowCount(); i++) {
    if (ds_trusteeCertiInformationDetail.getCellData(i, "choice") == "T") {
      var sellClntNo = ds_trusteeCertiInformationDetail.getCellData(i, "sellClntNo");
      for (var j = 0; j < ds_trusteeCertiInformation.getRowCount(); j++) {
        if (ds_trusteeCertiInformation.getCellData(j, "sellClntNo") == sellClntNo && ds_trusteeCertiInformation.getCellData(j, "choice") == "T") {
          var rowData = ds_trusteeCertiInformationDetail.getRowJSON(i);
          arr2.push(rowData);
          chkCnt2++;
          break;
        }
      }
    }
  }
  ds_saveTrusteeCertiInformationDetail.setJSON(arr2);
  ds_saveTrusteeCertiInformationDetail.modifyAllStatus("C");
  scwin.isFilter = true;
  // gr_trusteeCertiInformationDetail.DataID = '';
  // ds_trusteeCertiInformationDetail.filter();
  // gr_trusteeCertiInformationDetail.DataID = 'ds_trusteeCertiInformationDetail';

  // 필터 추가
  scwin.f_onFilter(ds_trusteeCertiInformation.getRowPosition());
  if (chkCnt < 1 || chkCnt2 < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["저장할 자료"]);
    return;
  }
  let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (!confirm) return;
  $c.sbm.execute($p, sbm_saveTrusteeCerti);
};
scwin.sbm_saveTrusteeCerti_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 비용취소
//-------------------------------------------------------------------------
scwin.f_Delete = async function (e) {
  if (ds_trusteeCertiInformation.getRowCount() < 1 || ds_trusteeCertiInformationDetail.getRowCount() < 1) {
    return;
  }
  var count = 0;
  for (var i = 0; i < ds_trusteeCertiInformation.getRowCount(); i++) {
    if (ds_trusteeCertiInformation.getCellData(i, "choice") == "T") {
      count++;
    }
  }
  if (count == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["저장할 자료"]);
    return;
  } else {
    let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (!confirm) return;
  }
  $c.sbm.execute($p, sbm_deleteTrusteeCerti);
};
scwin.sbm_deleteTrusteeCerti_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 확인일자 일괄적용
//-------------------------------------------------------------------------
scwin.f_adaptConfirmDt = async function (e) {
  var chkCnt = 0;
  var stPos = ds_trusteeCertiInformation.getRowPosition();
  var confirmDt = ds_trusteeCertiInformation.getCellData(stPos, "confirmDt");
  for (var i = 0; i < ds_trusteeCertiInformation.getRowCount(); i++) {
    if (ds_trusteeCertiInformation.getCellData(i, "choice") == "T") {
      ds_trusteeCertiInformation.setCellData(i, "confirmDt", confirmDt);
      chkCnt++;
    }
  }
  if (chkCnt == 0) {
    await $c.win.alert($p, "선택된 행이 없습니다. 일괄적용할 행들을 선택해 주십시오.");
    return false;
  }
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.udc_homeClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_homeClntNo, txt_homeClntNm, 1, true);
};
scwin.udc_homeClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_homeClntNo.getValue(), txt_homeClntNm.getValue(), 'F', 'F');
};
scwin.udc_homeClntNo_onviewchangeNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_homeClntNm, ed_homeClntNo, 1, false);
};
scwin.udc_selpchItemCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_selpchItemCd, txt_selpchItemNm, 2, true);
};
scwin.udc_selpchItemCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_selpchItemCd.getValue(), txt_selpchItemNm.getValue(), 'F', 'F');
};
scwin.udc_selpchItemCd_onviewchangeNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_selpchItemNm, ed_selpchItemCd, 2, false);
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      //소속거래처
      udc_homeClntNo.setSelectId("retrieveSubsidaryClntListJa");
      udc_homeClntNo.cfCommonPopUp(scwin.udc_homeClntNo_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , '150,170' // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "소속거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2  ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      //매출입항목
      udc_selpchItemCd.setSelectId("retrieveSelpchItemInfo");
      udc_selpchItemCd.cfCommonPopUp(scwin.udc_selpchItemCd_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , 'T' // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , ',,,,,' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부
      , null // 전체검색허용여부
      , null // POP-UP Window Title 검색어1,2(각화면에서 변경할경우)
      );
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.udc_homeClntNo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_homeClntNo, txt_homeClntNm);
  }
};
scwin.udc_selpchItemCd_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_selpchItemCd, txt_selpchItemNm);
  }
};
scwin.gr_trusteeCertiInformation_onrowindexchange = function (rowIndex, oldRow) {
  scwin.f_onFilter(rowIndex);
};

/*<!-- 청구처 그리드 데이터 선택에 따른 디테일 그리드 데이터 필터링 -->*/
scwin.f_onFilter = function (row) {
  if (scwin.isFilter) {
    let condition = "sellClntNo == '" + ds_trusteeCertiInformation.getCellData(ds_trusteeCertiInformation.getRowPosition(), "sellClntNo") + "'";
    ds_trusteeCertiInformationDetail.removeColumnFilterAll();
    $c.data.dataListFilter($p, ds_trusteeCertiInformationDetail, condition);
    ds_trusteeCertiInformationDetail.sort("rsltsMgntNo", 0);
    totalRowsDetail.setValue(ds_trusteeCertiInformationDetail.getRowCount());
  } else {
    return true;
  }
};

/*<!-- 럭스콤보 이벤트처리 -->*/
scwin.acb_lc_qryConKnd_onchange = function (info) {
  if (acb_lc_qryConKnd.getValue() == "YM") {
    ica_ed_adptYm.show('block');
    udc_qryConDt.show('none');
  } else {
    ica_ed_adptYm.show('none');
    udc_qryConDt.show('block');
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'acb_lc_qryConKnd',search:'start',style:'width:180px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_queryCondition.qryConKnd','ev:onchange':'scwin.acb_lc_qryConKnd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'실적일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RSLTS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'년월'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'YM'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'거래명세서일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CERTI'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'display:none',id:'ica_ed_adptYm',class:'',calendarValueType:'yearMonth',ref:'data:dma_queryCondition.adptYm'}},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_qryConDt',refDataMap:'dma_queryCondition',refEdDt:'qryConDtTo',refStDt:'qryConDtFm',style:'',edFromId:'ed_qryConDtFm',edToId:'ed_qryConDtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',allowCharCode:'0-9',maxlengthCode:'6',codeId:'ed_homeClntNo',nameId:'txt_homeClntNm',btnId:'btn_homeClntNo',id:'udc_homeClntNo',refDataCollection:'dma_queryCondition',code:'homeClntNo','ev:onblurCodeEvent':'scwin.udc_homeClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_homeClntNo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_homeClntNo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비용항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',allowCharCode:'0-9',maxlengthCode:'4',codeId:'ed_selpchItemCd',nameId:'txt_selpchItemNm',btnId:'btn_selpchItemCd',id:'udc_selpchItemCd',code:'selpchItemCd',refDataCollection:'dma_queryCondition','ev:onblurCodeEvent':'scwin.udc_selpchItemCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_selpchItemCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_selpchItemCd_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdInfo',gridDownUserAuth:'X',grdDownOpts:'{"fileName" : "대납비용집계내역.xlsx", "sheetName": "대납비용집계내역" }',gridID:'gr_trusteeCertiInformation',btnUser:'Y',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{rowStatusVisible:'true',visibleRowNumFix:'true',readOnly:'true',checkAllType:'false',dataList:'data:ds_trusteeCertiInformation',style:'',autoFit:'allColumn',id:'gr_trusteeCertiInformation',visibleRowNum:'5',class:'wq_gvw','ev:onrowindexchange':'scwin.gr_trusteeCertiInformation_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'column1',displayMode:'label',value:''}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column17',value:'거래명세서<br/>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column15',value:'소속거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'청구부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'청구부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column9',value:'지급처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column3',value:'지급처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column5',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column7',value:'매니저',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column19',value:'매니저명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column55',value:'과세<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column52',value:'과세<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column49',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column46',value:'매출입항목명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'대납금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column34',value:'확인일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column37',value:'적요',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'choice',displayMode:'label',valueType:'other',falseValue:'F',trueValue:'T',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'certiNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'homeClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgLodeptCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgLodeptNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'bilgClntNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sellClntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'taxnClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'taxnClsNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'selpchItemCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'selpchItemNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'confirmDt',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'summary',displayMode:'label',textAlign:'left',readOnly:'false'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column45',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'spplyAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column42',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'vatAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column33',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'bilgAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column39',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRowsInfo',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',id:'udc_topGrdDetail',grdDownOpts:'{"fileName" : "대납비용상세내역.xlsx", "sheetName": "대납비용상세내역" }',gridID:'gr_trusteeCertiInformationDetail',gridDownUserAuth:'X',btnUser:'Y',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{rowStatusVisible:'true',autoFit:'allColumn',readOnly:'true',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_trusteeCertiInformationDetail',id:'gr_trusteeCertiInformationDetail',style:'',visibleRowNum:'3',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',value:'',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'거래명세서<br/>번호',width:'150',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'소속거래처번호',width:'150',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'소속거래처',width:'130',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'지급처',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'지급처명',width:'150',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'매니저',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'매니저명',width:'150',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'실적일자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'매출입항목',width:'170',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'대납금액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'부가세',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'합계',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column40',value:'과세<br/>구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'비고',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column34',value:'차량번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'장비<br/>코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'관리번호',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'choice',inputType:'checkbox',width:'50',valueType:'other',falseValue:'F',trueValue:'T',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClntNo',inputType:'text',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClntNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNo',inputType:'text',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellClntNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellClntNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'calendar',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'selpchItemNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellVat',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'taxnClsCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'eqCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rsltsMgntNo',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column51',displayMode:'label',textAlign:'right',displayFormat:'#,##0',expression:'sum(\'sellAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column48',displayMode:'label',textAlign:'right',expression:'sum(\'sellVat\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column45',displayMode:'label',textAlign:'right',displayFormat:'#,##0',expression:'sum(\'totAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column69',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRowsDetail',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',label:'저장',type:'button',class:'btn white',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'비용확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_delete',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확정취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_adaptConfirmDt',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_adaptConfirmDt'},E:[{T:1,N:'xf:label',E:[{T:3,text:'일자일괄적용'}]}]}]}]}]}]}]}]}]})