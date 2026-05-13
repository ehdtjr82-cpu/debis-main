/*amd /ui/ja/dnja/adjm/dnja_210_02_01b.xml 42525 3b4a050a69f1202d4c302f7baf3008f63fd7484201e1d8e87484c1047a086654 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptNm',name:'매입부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매니저',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매니저명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsNm',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsIntendDt',name:'매입예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsGoodsPatternCd',name:'매입품목유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'text'}},{T:1,N:'w2:column',A:{dataType:'text',name:'매입금액외화',id:'pchsAmtFcrc'}},{T:1,N:'w2:column',A:{dataType:'text',name:'부가세',id:'vat'}},{T:1,N:'w2:column',A:{dataType:'text',name:'합계금액',id:'pchsTotAmt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'확정구분',id:'dcsnClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'확정구분명',id:'dcsnClsCdNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'증빙정상구분',id:'evidRglClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'OFFSET번호1',id:'offsetNo1'}},{T:1,N:'w2:column',A:{dataType:'text',name:'OFFSET번호2',id:'offsetNo2'}},{T:1,N:'w2:column',A:{dataType:'text',name:'비고',id:'rmk'}},{T:1,N:'w2:column',A:{dataType:'text',name:'소속거래처',id:'clntBilgDocNo'}},{T:1,N:'w2:column',A:{id:'curRow',name:'name25',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_detail',saveRemovedData:'true','ev:onaftercolumnfilterchange':'scwin.ds_detail_onaftercolumnfilterchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNo',name:'소속거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNm',name:'소속거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매니저코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매니저명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsVat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'합계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnNm',name:'확정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{dataType:'text',name:'장비코드',id:'eqCd'}},{T:1,N:'w2:column',A:{id:'adptYm',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsMgntNo',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsSeq',name:'name20',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_saveOut',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'choice'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'certiNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'pchsDeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'pchsDeptNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'vehclNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'pchsClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'pchsClntNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'taxnClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name9',id:'taxnClsNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name10',id:'pchsIntendDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name11',id:'selpchItemCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name12',id:'pchsGoodsPatternCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name13',id:'crcCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name14',id:'pchsAmt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name15',id:'pchsAmtFcrc'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name16',id:'vat'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name17',id:'pchsTotAmt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name18',id:'dcsnClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name19',id:'dcsnClsCdNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name20',id:'evidRglClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name21',id:'offsetNo1'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name22',id:'offsetNo2'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name23',id:'rmk'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name24',id:'clntBilgDocNo'}},{T:1,N:'w2:column',A:{id:'curRow',name:'name25',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_saveDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'choice'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'certiNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'homeClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'homeClntNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'pchsClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'pchsClntNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'rsltsStdDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'selpchItemCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name9',id:'selpchItemNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name10',id:'pchsAmt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name11',id:'pchsVat'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name12',id:'totAmt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name13',id:'taxnClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name14',id:'dcsnNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name15',id:'rmk'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name16',id:'vehclNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name17',id:'eqCd'}},{T:1,N:'w2:column',A:{id:'adptYm',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsMgntNo',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsSeq',name:'name20',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_condition',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'adptYm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'qryConDtFm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'qryConDtTo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'homeClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'qryConKnd'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_retrieve',encoding:'UTF-8',mediatype:'application/json',action:'/ja.dnja.adjm.RetrieveCustomerEachUnsettledDaeseongPurchaseCertiListCMD.do',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"},{"id":"ds_detail","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_out","key":"OUT_DS1"},{"id":"ds_detail","key":"OUT_DS2"}]','ev:submitdone':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_save',encoding:'UTF-8',mediatype:'application/json',action:'/ja.dnja.adjm.SaveDaeseongPurchaseCertiListCMD.do',ref:'data:json,[{"action":"all","id":"ds_saveOut","key":"IN_DS1"},{"action":"all","id":"ds_saveDetail","key":"IN_DS2"}]','ev:submitdone':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_delete',encoding:'UTF-8',mediatype:'application/json',action:'/ja.dnja.adjm.DeleteDaeseongPurchaseCertiListCMD.do',ref:'data:json,{"id":"ds_out","key":"IN_DS1"}','ev:submitdone':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sDate = $c.date.formatDateTime($p, new Date());
scwin.strCurDate = $c.date.getServerDateTime($p);
scwin.strQryStDt = $c.date.getDateAddMonthDirection($p, scwin.strCurDate, 0, "F"); // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)

scwin.isFilter = true;
scwin.onpageload = function () {
  ds_condition.insertRow();
  ds_condition.setRowPosition(0);
};
scwin.onUdcCompleted = function () {
  ica_ed_adptYm.setValue(scwin.strQryStDt);
  udc_qryConDt.setInitDate(scwin.strQryStDt, scwin.strCurDate);
  acb_qryConKnd.setValue("YM");
  ed_homeClntNo.focus();
  $c.gus.cfDisableBtn($p, [btn_save, btn_delete]);

  // 테스트 데이터
  // ed_homeClntNo.setValue( "292816");
  // ed_homeClntNm.setValue("(주)신강물류");
  // udc_qryConDt.setInitDate("20191130" , "20191130");
};
scwin.ondataload = function () {};

//-------------------------------------------------------------------------
// Function
//-------------------------------------------------------------------------
// 조회
scwin.f_Retrieve = async function () {
  if (acb_qryConKnd.getValue() == "YM") {
    //     if(!await $c.gus.cfValidate([ed_homeClntNo, ica_ed_adptYm])){
    //         return;
    //    }
    if (!(await $c.gus.cfValidate($p, [ed_homeClntNo]))) {
      return;
    }
  } else {
    //  if(!await $c.gus.cfValidate([ed_homeClntNo, ed_qryConDtFm, ed_qryConDtTo])){
    //      return;
    //  }

    if (!(await $c.gus.cfValidate($p, [ed_homeClntNo]))) {
      return;
    }

    // 조회시작일자가 더 클경우 체크
    if (!(await $c.gus.cfIsAfterDate($p, ed_qryConDtFm.getValue(), ed_qryConDtTo.getValue()))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      return;
    }
  }
  let e = await $c.sbm.execute($p, sbm_retrieve);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_retrieve_submitdone(e);
  }
};

// 조회조건 Clear
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  ica_ed_adptYm.setValue(scwin.strQryStDt);
  udc_qryConDt.setInitDate(scwin.strQryStDt, scwin.strCurDate);
  acb_qryConKnd.setValue("YM");
  ed_homeClntNo.focus();
};

// 비용확정
scwin.f_Save = async function () {
  debugger;
  if (ds_out.getRowCount() < 1 || ds_detail.getRowCount() < 1) {
    return;
  }
  $c.gus.cfCopyDataSetHeader($p, ds_out, ds_saveOut);
  ds_saveOut.removeAll();
  var transRow;
  var chkCnt = 0;
  for (var i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, "choice") == "T") {
      transRow = ds_out.getRowJSON(i);
      var idx = ds_saveOut.insertRow();
      ds_saveOut.setRowJSON(idx, transRow, true);
      chkCnt++;
      ds_saveOut.setCellData(idx, "curRow", i + 1);
    }
  }
  scwin.isFilter = false;
  $c.gus.cfCopyDataSetHeader($p, ds_detail, ds_saveDetail);
  ds_saveDetail.removeAll();
  var transRow2;
  var chkCnt2 = 0;
  for (var i = 0; i < ds_detail.getRowCount(); i++) {
    if (ds_detail.getCellData(i, "choice") == "T") {
      if (ds_out.getCellData(ds_out.getMatchedIndex("pchsClntNo", ds_detail.getCellData(i, "pchsClntNo")), "choice") == "T") {
        transRow2 = ds_detail.getRowJSON(i);
        var idx = ds_saveDetail.insertRow();
        ds_saveDetail.setRowJSON(idx, transRow2, true);
        chkCnt2++;
      }
    }
  }
  scwin.isFilter = true;
  if (chkCnt < 1 || chkCnt2 < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["저장할 자료"]);
    return;
  }
  let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (!confirm) return;
  let e = await $c.sbm.execute($p, sbm_save);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_save_submitdone(e);
  }
};

// 비용취소
scwin.f_Delete = async function () {
  if (ds_out.getRowCount() < 1 || ds_detail.getRowCount() < 1) {
    return;
  }
  var count = 0;
  for (var i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, "choice") == "T") {
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
  let e = await $c.sbm.execute($p, sbm_delete);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_delete_submitdone(e);
  }
};

// 팝업창 처리
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면
  switch (disGubun) {
    case 1:
      // 소속거래처 
      udc_homeClntNo.setSelectId("retrieveSubsidaryClntListJa");
      rtnList = await udc_homeClntNo.cfCommonPopUpAsync('' // XML상의 SELECT ID
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
      if (rtnList != null) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_homeClntNo, ed_homeClntNm);
      }
      break;
    default:
      break;
  }
};

// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    // inObj가 코드 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

// 청구처 그리드데이터 선택에 따른 디테일 그리드 데이터 필터링
scwin.f_onFilter = function (row) {
  if (scwin.isFilter) {
    let condition = "pchsClntNo == '" + ds_out.getCellData($c.gus.cfIsNull($p, ds_out.getRowPosition()) ? 0 : ds_out.getRowPosition(), "pchsClntNo") + "'";
    ds_detail.removeColumnFilterAll();
    $c.data.dataListFilter($p, ds_detail, condition);
    totalRowsDetail.setValue(ds_detail.getRowCount());
  } else {
    return true;
  }
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
// 계약거래처

//-------------------------------------------------------------------------
// Sbm submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {
  totalRowsOut.setValue(ds_out.getRowCount());
  if (ds_out.getRowCount() == 0) {
    if (await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002)) {
      $c.gus.cfDisableBtn($p, [btn_save, btn_delete]);
    }
  } else if (ds_out.getRowCount() > 0) {
    gr_out.setFocusedCell(0, 0);

    //ds_out.UseFilter = true;
    scwin.f_onFilter(0);
    totalRowsDetail.setValue(ds_detail.getRowCount());
    ds_detail.sort("pchsAmt", 1);
    $(gr_detail.render).find(".w2grid_head_sort_desc").addClass("w2grid_head_sort_none").removeClass("w2grid_head_sort_desc");
    if (acb_qryConKnd.getValue() == "YM") {
      $c.gus.cfEnableBtnOnly($p, [btn_save]);
      $c.gus.cfDisableBtn($p, [btn_delete]);
    } else if (acb_qryConKnd.getValue() == "CERTI") {
      $c.gus.cfEnableBtnOnly($p, [btn_delete]);
      $c.gus.cfDisableBtn($p, [btn_save]);
    }
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (await $c.gus.cfAlertMsg($p, MSG_CM_INF_001)) {
    // 성공적으로 저장하였습니다
    scwin.f_Retrieve();
  }
};
scwin.sbm_delete_submitdone = async function (e) {
  if (await $c.gus.cfAlertMsg($p, MSG_CM_INF_001)) {
    // 성공적으로 저장하였습니다
    scwin.f_Retrieve();
  }
};
//-------------------------------------------------------------------------
// Event onClick
//-------------------------------------------------------------------------
// 조회 버튼 클릭 이벤트 
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

// 초기화 버튼 클릭 이벤트 
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

// 소속거래처 찾기 버튼 클릭 이벤트 
scwin.udc_homeClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_homeClntNo.getValue(), ed_homeClntNm.getValue(), 'F', 'F');
};

// 비용확정 버튼 클릭 이벤트 
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};

// 비용취소 버튼 클릭 이벤트 
scwin.btn_delete_onclick = function (e) {
  scwin.f_Delete();
};

//-------------------------------------------------------------------------
// Event onchange
//-------------------------------------------------------------------------
scwin.acb_qryConKnd_onchange = function (info) {
  if (acb_qryConKnd.getValue() == "YM") {
    ica_ed_adptYm.show('block');
    udc_qryConDt.show('none');
  } else {
    ica_ed_adptYm.show('none');
    udc_qryConDt.show('block');
  }
};

//-------------------------------------------------------------------------
// Event onblur
//-------------------------------------------------------------------------
// 소속거래처 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_homeClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_homeClntNo, ed_homeClntNm, 1);
};

//-------------------------------------------------------------------------
// Event onviewchange
//-------------------------------------------------------------------------
// 소속거래처 onviewchange 이벤트 발생시
scwin.udc_homeClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_homeClntNm, ed_homeClntNo, 1, false);
};

//-------------------------------------------------------------------------
// DataSet 이벤트
//-------------------------------------------------------------------------
scwin.ds_detail_onaftercolumnfilterchange = function () {
  totalRowsDetail.setValue(ds_detail.getRowCount());
};

//-------------------------------------------------------------------------
// 그리드 이벤트
//-------------------------------------------------------------------------
scwin.gr_out_onrowindexchange = function (rowIndex, oldRow) {
  scwin.f_onFilter(rowIndex);
};

//-------------------------------------------------------------------------
// InputBox 대문자 설정
//-------------------------------------------------------------------------
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_homeClntNo',nameId:'ed_homeClntNm',btnId:'btn_homeClntNo',id:'udc_homeClntNo',mandatoryCode:'true',refDataCollection:'ds_condition',code:'homeClntNo','ev:onblurCodeEvent':'scwin.udc_homeClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_homeClntNo_onclickEvent',validTitle:'소속거래처',maxlengthCode:'6',maxlengthName:'100','ev:onviewchangeNameEvent':'scwin.udc_homeClntNo_onviewchangeNameEvent',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'acb_qryConKnd',search:'start',style:'width:120px;',submenuSize:'auto',ref:'data:ds_condition.qryConKnd',allOption:'',chooseOption:'','ev:onchange':'scwin.acb_qryConKnd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'년월'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'YM'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'거래명세서일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CERTI'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_ed_adptYm',pickerType:'dynamic',style:'',mandatory:'true',ref:'data:ds_condition.adptYm',title:'년월'}},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_qryConDt',refDataMap:'ds_condition',refEdDt:'qryConDtTo',refStDt:'qryConDtFm',style:'display:none',edFromId:'ed_qryConDtFm',edToId:'ed_qryConDtTo',mandatoryFrom:'true',mandatoryTo:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_out',grdDownOpts:'{"fileName":"거래명세서내역.xlsx","sheetName":"거래명세서내역","useHeaderCheckBoxLabel":"true","type":"4+8+16"}',gridUpYn:'N',id:'udc_topGrdOut',btnUser:'Y',templateYn:'N',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_out',style:'',id:'gr_out',visibleRowNum:'5',class:'wq_gvw','ev:onrowindexchange':'scwin.gr_out_onrowindexchange',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'column1',displayMode:'label',fixColumnWidth:'true',checkboxLabel:' '}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'거래명세서<br/>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'매입부서코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'매입부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'매니저',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column3',value:'매니저명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column5',value:'과세<br/>구분',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column7',value:'과세<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'매입<br/>예정일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column52',value:'매입항목',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column49',value:'매입품목유형',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'통화코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'매입금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'매입금액<br/>외화',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',value:'합계금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'확정구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',value:'확정구분명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column61',value:'증빙정상구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column58',value:'OFFSET번호1',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column55',value:'OFFSET번호2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column67',value:'비고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',value:'소속거래처',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'choice',displayMode:'label',fixColumnWidth:'true',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'certiNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsDeptCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsDeptNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsClntNo',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'pchsClntNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'taxnClsCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'taxnClsNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'pchsIntendDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'selpchItemCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsGoodsPatternCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crcCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmtFcrc',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',hidden:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vat',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsTotAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcsnClsCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcsnClsCdNm',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'evidRglClsCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'offsetNo1',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'offsetNo2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntBilgDocNo',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column45',displayMode:'label',textAlign:'right',expression:'sum(\'pchsAmt\')',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column42',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'pchsAmtFcrc\')',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column33',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'vat\')',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column36',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'pchsTotAmt\')',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRowsOut',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_detail',grdDownOpts:'{"fileName":"거래명세서상세내역.xlsx","sheetName":"거래명세서상세내역","useHeaderCheckBoxLabel":"true","type":"4+8+16"}',gridUpYn:'N',id:'udc_topGrdDetail',templateYn:'N',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'ds_detail',id:'gr_detail',style:'',visibleRowNum:'5',visibleRowNumFix:'true',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',rowSpan:'2',fixColumnWidth:'true',checkboxLabel:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'거래명세서<br/>번호',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'소속<br/>거래처번호',width:'120',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'소속<br/>거래처명',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'매니저<br/>코드',width:'80',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'매니저명',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'실적일자',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'매입항목',width:'140',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'매입금액',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'부가세',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'합계금액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'과세<br/>구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',value:'확정구분',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'비고',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'차량번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'장비코드',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column61',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',value:'명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'choice',inputType:'checkbox',width:'50',fixColumnWidth:'true',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClntNo',inputType:'text',width:'120',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClntNm',inputType:'text',width:'120',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNo',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'calendar',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsVat',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'taxnClsCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcsnNm',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqCd',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'120',value:'합계'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'expression',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'pchsAmt\')',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column45',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'pchsVat\')',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column42',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'totAmt\')',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRowsDetail',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'비용확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_delete',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_delete_onclick',userAuth:'U',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확정취소'}]}]}]}]}]}]}]}]}]})