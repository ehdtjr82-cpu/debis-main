/*amd /ui/ja/dnja/bilg/dnja_210_01_01b.xml 40123 d31e70610e32cbba59ec64ca8eb9b8143d694caa1a32bb212cd27f89f39a95a9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtFm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtTo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConKnd',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'매니저',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'매니저명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsNm',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'confirmDt',name:'확인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiPatternCd',name:'서식패턴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWt',name:'총중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totCbm',name:'총CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnYn',name:'확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billCoverPatternSeq',name:'청구서커버패턴순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'공식패턴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'공식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNo',name:'본사거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmId',name:'프로그램ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNoInscrpYn',name:'계좌번호기재여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndTrgtYn',name:'EDI전송대상여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediClntYn',name:'EDI거래처여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prebilgYn',name:'사전청구여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'적용환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'포장수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgAmtFcrc',name:'청구금액외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'공급금액외화',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_detail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNo',name:'소속거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNm',name:'소속거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNo',name:'매니저코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNm',name:'매니저명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'공급금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellVat',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'청구금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsMgntNo',name:'결과관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsSeq',name:'결과순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adptYm',name:'적용년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnNm',name:'확정여부명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiPatternCd',name:'서식패턴코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_saveOut',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'매니저',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'매니저명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsNm',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'confirmDt',name:'확인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiPatternCd',name:'서식패턴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWt',name:'총중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totCbm',name:'총CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnYn',name:'확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billCoverPatternSeq',name:'청구서커버패턴순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'공식패턴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'공식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNo',name:'본사거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmId',name:'프로그램ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNoInscrpYn',name:'계좌번호기재여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndTrgtYn',name:'EDI전송대상여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediClntYn',name:'EDI거래처여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prebilgYn',name:'사전청구여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'적용환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'포장수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgAmtFcrc',name:'청구금액외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'공급금액외화',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_saveDetail',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNo',name:'소속거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNm',name:'소속거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNo',name:'매니저코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNm',name:'매니저명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'공급금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellVat',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'청구금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsMgntNo',name:'결과관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsSeq',name:'결과순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adptYm',name:'적용년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnNm',name:'확정여부명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiPatternCd',name:'서식패턴코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ja.dnja.bilg.RetrieveCertiListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"},{"id":"ds_detail","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_out","key":"OUT_DS1"},{"id":"ds_detail","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ja.dnja.bilg.SaveCertiListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_saveOut","key":"IN_DS1"},{"action":"modified","id":"ds_saveDetail","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ja.dnja.bilg.DeleteCertiListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_out","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sDate = $c.date.formatDateTime($p, new Date());
scwin.strCurDate = $c.date.getServerDateTime($p);
scwin.strQryStDt = $c.date.getDateAddMonthDirection($p, scwin.strCurDate, 0, "F"); // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)

scwin.isFilter = true;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  ica_ed_adptYm.setValue(scwin.strQryStDt);
  acb_lc_qryConKnd.setValue("YM");
  $c.gus.cfDisableBtn($p, [btn_save, btn_delete]);
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  udc_qryConDt.setInitDate(scwin.strQryStDt, scwin.strCurDate);
  ed_homeClntNo.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = async function (e) {
  //validation check
  if (acb_lc_qryConKnd.getValue() == "YM") {
    let ret1 = await $c.gus.cfValidate($p, [ed_homeClntNo, ica_ed_adptYm]);
    if (!ret1) {
      return;
    }
  } else {
    let ret2 = await $c.gus.cfValidate($p, [ed_homeClntNo, ed_qryConDtFm, ed_qryConDtTo]);
    if (!ret2) {
      return;
    }

    //조회시작일자가 더 클경우 체크
    let ret3 = $c.gus.cfIsAfterDate($p, ed_qryConDtFm.getValue(), ed_qryConDtTo.getValue());
    if (!ret3) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      return;
    }
  }
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  let ds_out_count = ds_out.getRowCount();
  totalRowsOut.setValue(ds_out_count);
  if (ds_out_count < 1) {
    totalRowsDetail.setValue("0");
  }
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (ds_out_count == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      $c.gus.cfDisableBtn($p, [btn_save, btn_delete]);
    } else if (ds_out_count > 0) {
      //ds_out.UseFilter = true;
      gr_out.setFocusedCell(0, 0);
      if (acb_lc_qryConKnd.getValue() == "YM") {
        $c.gus.cfEnableBtnOnly($p, [btn_save]);
        $c.gus.cfDisableBtn($p, [btn_delete]);
      } else if (acb_lc_qryConKnd.getValue() == "CERTI") {
        $c.gus.cfEnableBtnOnly($p, [btn_delete]);
        $c.gus.cfDisableBtn($p, [btn_save]);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 조회조건 Clear
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, null);
  ica_ed_adptYm.setValue(scwin.strQryStDt);
  udc_qryConDt.setInitDate(scwin.strQryStDt, scwin.strCurDate);
  acb_lc_qryConKnd.setValue("YM");
  ed_homeClntNo.focus();
};

//-------------------------------------------------------------------------
// 비용확정
//-------------------------------------------------------------------------
scwin.btn_save_onclick = async function (e) {
  if (ds_out.getRowCount() < 1 || ds_detail.getRowCount() < 1) {
    return;
  }
  ds_saveOut.removeAll();
  for (let i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, "choice") == "T") {
      ds_saveOut.setJSON([ds_out.getRowJSON(i)], true);
    }
  }
  ds_saveDetail.removeAll();
  ds_detail.getAllJSON().forEach(function (row) {
    if (row.choice == "T") {
      let matchedIndexList = ds_saveOut.getMatchedIndex('bilgClntNo', row.sellClntNo) ?? [];
      if (matchedIndexList.length > 0) {
        ds_saveDetail.setJSON([row], true);
      }
    }
  });
  if (ds_saveOut.getRowCount() < 1 || ds_saveDetail.getRowCount() < 1) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_007, "저장할 자료"));
    return;
  }
  let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (!confirm) return;
  ds_saveOut.modifyAllStatus("C");
  ds_saveDetail.modifyAllStatus("C");
  $c.sbm.execute($p, sbm_save);
};
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.btn_retrieve_onclick();
  }
};

//-------------------------------------------------------------------------
// 비용취소
//-------------------------------------------------------------------------
scwin.btn_delete_onclick = async function (e) {
  if (ds_out.getRowCount() < 1 || ds_detail.getRowCount() < 1) {
    return;
  }
  let count = 0;
  for (let i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, "choice") == "T") {
      count++;
    }
  }
  if (count == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_007, "저장할 자료"));
    return;
  } else {
    let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (!confirm) return;
  }
  $c.sbm.execute($p, sbm_delete);
};
scwin.sbm_delete_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.btn_retrieve_onclick();
  }
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.udc_homeClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_homeClntNo, txt_homeClntNm, 1);
};
scwin.udc_homeClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_homeClntNo.getValue(), txt_homeClntNm.getValue(), 'F', 'F');
};
scwin.udc_homeClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_homeClntNm, ed_homeClntNo, 1, false);
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
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
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
      , "소속거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};
scwin.udc_homeClntNo_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_homeClntNo, txt_homeClntNm);
};
scwin.gr_out_onrowindexchange = function (rowIndex, oldRow) {
  scwin.f_onFilter(rowIndex);
};
scwin.gr_out_oncellclick = function (rowIndex, columnIndex, columnId) {
  // gr_detail.DataID = '';
  // ds_detail.filter();
  // gr_detail.DataID = 'ds_detail';
};
scwin.acb_lc_qryConKnd_onchange = function (info) {
  if (acb_lc_qryConKnd.getValue() == "YM") {
    ica_ed_adptYm.show();
    udc_qryConDt.hide();
  } else {
    ica_ed_adptYm.hide();
    udc_qryConDt.show();
  }
};

/* 청구처 그리드데이터 선택에 따른 디테일 그리드 데이터 필터링 */
scwin.f_onFilter = function (row) {
  if (scwin.isFilter) {
    // let v_val;
    // v_val = ds_out.getCellData(ds_out.getRowPosition(), "bilgClntNo");

    // if(ds_detail.getCellData(row, "sellClntNo") == v_val ) {
    // 	return true;
    // } else {
    //    	return false;
    // }
    let condition = "sellClntNo == '" + ds_out.getCellData(ds_out.getRowPosition(), "bilgClntNo") + "'";
    //console.log("#### f_onFilter : row = " + row + " : condition " + condition);
    ds_detail.removeColumnFilterAll();
    $c.data.dataListFilter($p, ds_detail, condition);
    totalRowsDetail.setValue(ds_detail.getRowCount());
  } else {
    return true;
  }
};
scwin.gr_out_onheaderclick = function (headerId) {
  let i = 0;
  let bCheck = gr_out.getHeaderValue(headerId);
  if (headerId == "column1") {
    if (bCheck == "1") {
      for (i = 0; i < ds_out.getRowCount(); i++) {
        ds_out.setCellData(i, "choice", "T");
      }
    } else {
      for (i = 0; i < ds_out.getRowCount(); i++) {
        ds_out.setCellData(i, "choice", "F");
      }
    }
  }
};
scwin.gr_detail_onheaderclick = function (headerId) {
  let i = 0;
  let bCheck = gr_detail.getHeaderValue(headerId);
  if (headerId == "column1") {
    if (bCheck == "1") {
      for (i = 0; i < ds_detail.getRowCount(); i++) {
        ds_detail.setCellData(i, "choice", "T");
      }
    } else {
      for (i = 0; i < ds_detail.getRowCount(); i++) {
        ds_detail.setCellData(i, "choice", "F");
      }
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',letiableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',letiableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',letiableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',letiableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_homeClntNo',nameId:'txt_homeClntNm',btnId:'btn_homeClntNo',id:'udc_homeClntNo',mandatoryCode:'true',refDataCollection:'dma_condition',code:'homeClntNo','ev:onblurCodeEvent':'scwin.udc_homeClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_homeClntNo_onclickEvent',UpperFlagCode:'0',allowCharCode:'0-9',maxlengthCode:'6','ev:onviewchangeNameEvent':'scwin.udc_homeClntNo_onviewchangeNameEvent',validTitle:'소속거래처'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'acb_lc_qryConKnd',search:'start',style:'width:160px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_condition.qryConKnd','ev:onchange':'scwin.acb_lc_qryConKnd_onchange',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'년월'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'YM'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'거래명세서일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CERTI'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_ed_adptYm',pickerType:'dynamic',style:'',mandatory:'true',ref:'data:dma_condition.adptYm',title:'년월'}},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_qryConDt',refDataMap:'dma_condition',refEdDt:'qryConDtTo',refStDt:'qryConDtFm',style:'display:none',edFromId:'ed_qryConDtFm',edToId:'ed_qryConDtTo',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'시작일자',titleTo:'종료일자'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdOut',gridID:'gr_out',grdDownOpts:'{"fileName" : "거래명세서내역.xlsx", "sheetName":"거래명세서내역" }',gridDownUserAuth:'X',btnUser:'Y',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_out',style:'',autoFit:'allColumn',id:'gr_out',visibleRowNum:'5',class:'wq_gvw','ev:oncellclick':'scwin.gr_out_oncellclick','ev:onrowindexchange':'scwin.gr_out_onrowindexchange','ev:onheaderclick':'scwin.gr_out_onheaderclick',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'column1',displayMode:'label',fixColumnWidth:'true',trueValue:'T',falseValue:'F',emptyValue:'F',defaultValue:'F',value:' '}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'거래명세서<br/>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'청구부서코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'청구부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column9',value:'매니저',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column3',value:'매니저명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column5',value:'과세<br/>구분 코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column7',value:'과세<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'공급금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'청구금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'확인일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column40',value:'적요',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'choice',displayMode:'label',fixColumnWidth:'true',valueType:'other',trueValue:'T',falseValue:'F'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'certiNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgLodeptCd',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgLodeptNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'bilgClntNo',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'bilgClntNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'taxnClsCd',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'taxnClsNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'confirmDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'summary',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column33',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'spplyAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column36',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'vatAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',expression:'sum(\'bilgAmt\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRowsOut',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_detail',id:'udc_topGrdDetail',grdDownOpts:'{"fileName" : "거래명세서상세내역.xlsx", "sheetName":"거래명세서상세내역" }',btnUser:'Y',gridUpYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_detail',id:'gr_detail',style:'',visibleRowNum:'3',visibleRowNumFix:'true','ev:onheaderclick':'scwin.gr_detail_onheaderclick',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',colSpan:'',rowSpan:'2',fixColumnWidth:'true',falseValue:'F',trueValue:'T',emptyValue:'F',defaultValue:'F',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'거래명세서<br/>번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'소속거래처번호',width:'120',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'소속거래처',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'매니저<br/>코드',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'매니저명',width:'140',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'실적일자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'매출입항목',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'공급금액',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'부가세',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'청구금액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column43',value:'과세<br/>구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'비고',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'차량번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column34',value:'장비<br/>코드',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column61',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'choice',inputType:'checkbox',width:'50',fixColumnWidth:'true',valueType:'other',falseValue:'F',trueValue:'T'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClntNo',inputType:'text',width:'120',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClntNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellClntNo',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellClntNm',inputType:'text',width:'140',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'calendar',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellVat',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'taxnClsCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'eqCd',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'expression',width:'100',textAlign:'right',expression:'sum(\'sellAmt\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column51',displayMode:'label',textAlign:'right',expression:'sum(\'sellVat\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column48',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'totAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column36',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRowsDetail',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{userAuth:'U',style:'',id:'btn_save',label:'저장',type:'button',class:'btn white','ev:onclick':'scwin.btn_save_onclick',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'비용확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_delete',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_delete_onclick',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확정취소'}]}]}]}]}]}]}]}]}]})