/*amd /ui/ds/fs/consignmgnt/fs_402_01_02b.xml 48065 e203c7302fb1cb691f6babb41c076dad3a6b046d5a0b4746c387ac1aa695fec0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtDtMm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'receiptYn',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_trusteeCostInformation',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vehclNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffSlipNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvAdjmAmt',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_trusteeCostInformationDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'수탁자매입처사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'수탁자매입처사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilSubsidyPayStdDt',name:'유류보조금지급기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'calnDocDrawDt',name:'계산서작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'차량단축번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'기사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'합계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmAmt',name:'정산금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'지급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvAdjmAmt',name:'기사정산금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'viaPchsAmt',name:'경유매입금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'viaOilingVol',name:'경유주유량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'degMmAmt',name:'차월금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnCloseYn',name:'확정마감여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgOilSubsidyPayStdDt',name:'유류보조금지급기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgCalnDocDrawDt',name:'계산서작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgTaxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lastMmAmt',name:'전월이월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nonPayAmt',name:'미지급금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costItemCd',name:'비용항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costItemNm',name:'비용항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntceNo',name:'고지번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgCtrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgEqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilSubsidyStDt',name:'유류보조금시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgCrn',name:'수탁자매입처사업자번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.consignmgnt.trusteecostselladjm.RetrieveTrusteeDecisionCostCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_queryCondition","key":"IN_DS1"},{"id":"ds_trusteeCostInformation","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_trusteeCostInformation","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDetail',action:'/ds.fs.consignmgnt.trusteecostselladjm.RetrieveTrusteeDecisionCostDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_queryCondition","key":"IN_DS1"},{"id":"ds_trusteeCostInformationDetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_trusteeCostInformationDetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDetail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_UpdateConsignmentPurchase',action:'/ds.fs.consignmgnt.trusteecostselladjm.UpdateConsignmentPurchaseCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_trusteeCostInformationDetail","key":"IN_DS1", "action":"modified"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_UpdateConsignmentPurchase_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.hd_ctrtNo = "";
scwin.hd_eqCd = "";

//-------------------------------------------------------------------------
//메세지용 전역변수 SETTING
//-------------------------------------------------------------------------
scwin.MSG_CM_WRN_011 = "한개의 거래처에 한해 확정 가능합니다.";
scwin.MSG_CM_WRN_012 = "확정/미확정 구분이 모두 포함되어 있습니다.";
scwin.MSG_CM_WRN_013 = "미지급금액 0원인 것만 확정가능합니다..";
scwin.MSG_CM_WRN_014 = "동일한 거래명세서 번호만 전표생성 가능합니다.";
scwin.MSG_CM_WRN_015 = "한개의 비용항목에 한해 확정 가능합니다. ";
scwin.MSG_CM_WRN_016 = "전표 취소 후 확정취소가 가능합니다. ";

/*년월 setting*/
scwin.strCurYyMm = $c.date.getServerDateTime($p, "yyyyMM"); // 서버를 기준으로 현재 날짜 반환
scwin.trim = function (value) {
  var raw = String(value).replace(/[^a-zA-Z0-9]/g, "");
  return raw;
};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  ed_ctrtDtMm.setValue(scwin.strCurYyMm); //기준월

  ed_crn.visible(false); //사업자번호 inputbox hidden
  ed_eqCd.visible(false); //장비번호 inputbox hidden

  $c.gus.cfDisableBtn($p, [btn_confirmcost, btn_confirm]);

  // 달력 버튼 포커스 방지
  setTimeout(function () {
    document.querySelectorAll('.w2inputCalendar_div_img button').forEach(function (btn) {
      btn.tabIndex = -1;
    });
  }, 0);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let chkValid = await $c.gus.cfValidate($p, [ed_lobranCd, ed_ctrtDtMm, ed_vehclShortCd, ed_clntNo]); //필수check

  if (!chkValid) {
    return;
  }
  // 조회 시 Row에 따른 DetailInfo grid 초기화
  ds_trusteeCostInformation.removeAll();
  ds_trusteeCostInformationDetail.removeAll();

  //dataMap setting
  dma_queryCondition.set("lobranCd", ed_lobranCd.getValue());
  dma_queryCondition.set("ctrtDtMm", ed_ctrtDtMm.getValue());
  dma_queryCondition.set("crn", ed_crn.getValue());
  dma_queryCondition.set("clntNm", ed_clntNm.getValue());
  dma_queryCondition.set("vehclNo", ed_vehclNo.getValue());
  dma_queryCondition.set("receiptYn", lux_receiptYn.getValue());
  dma_queryCondition.set("pchsClntNo", "");
  dma_queryCondition.set("eqCd", scwin.hd_eqCd);
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.btn_search_onclick = e => scwin.f_Retrieve();

//-------------------------------------------------------------------------
// 상세 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveDetail = async function (rowIndex) {
  let ret = await $c.gus.cfValidate($p, [ed_lobranCd, ed_ctrtDtMm, ed_vehclShortCd, ed_crn]); //필수check

  if (!ret) {
    return;
  }

  //dataMap setting
  dma_queryCondition.set("lobranCd", ed_lobranCd.getValue());
  dma_queryCondition.set("ctrtDtMm", ed_ctrtDtMm.getValue());
  dma_queryCondition.set("crn", scwin.trim(ed_crn.getValue()));
  dma_queryCondition.set("clntNm", ed_clntNm.getValue());
  dma_queryCondition.set("vehclNo", ed_vehclNo.getValue());
  dma_queryCondition.set("pchsClntNo", ds_trusteeCostInformation.getCellData(rowIndex, "pchsClntNo"));
  dma_queryCondition.set("eqCd", ed_eqCd.getValue());
  $c.sbm.execute($p, sbm_retrieveDetail);
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopup = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  switch (disGubun) {
    case 1:
      // 청구지점코드팝업
      udc_comCode_lobran.setSelectId("retrieveLobranInfo");
      await udc_comCode_lobran.cfCommonPopUp(scwin.udc_comCode_lobran_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      // 매입거래처공통팝업
      udc_comCode_clnt.setSelectId("retrieveClntList");
      await udc_comCode_clnt.cfCommonPopUp(scwin.udc_comCode_clnt_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 3:
      // 차량번호 조회 팝업화면
      if (!(await $c.gus.cfValidate($p, [ed_ctrtDtMm]))) return;
      var data = {
        param1: ed_ctrtDtMm.getValue(),
        // 기준년월
        param2: pCode,
        // 차량번호 Code
        param3: pName,
        // 차량번호 Name
        param4: ed_clntNo.getValue() // 청구지점 Code
      };

      // 팝업 옵션 설정
      let options = {
        id: "searchpop",
        popupName: "수탁자 차량 계약정보 조회 팝업",
        modal: true,
        type: "",
        width: 800,
        height: 600,
        title: "Win pop"
      };

      //상세화면 호출
      rtnList = await $c.win.openPopup($p, "/ui/ds/fs/consignmgnt/fs_402_01_04p.xml", options, data);
      $c.gus.cfSetReturnValue($p, rtnList);

      //차량번호 조회 팝업 결과값 
      if (rtnList != null) {
        ed_ctrtDtMm.setValue(rtnList.ctrtDtMm);
        ed_crn.setValue(rtnList.crn);
        ed_clntNo.setValue(rtnList.clntNo);
        ed_clntNm.setValue(rtnList.clntNm);
        ed_vehclNo.setValue(rtnList.vehclNo);
        ed_vehclShortCd.setValue(rtnList.vehclShortCd);
        scwin.hd_ctrtNo = rtnList.ctrtNo;
        ed_eqCd.setValue(rtnList.eqCd);
        scwin.hd_eqCd = rtnList.eqCd;
      } else {
        ed_crn.setValue("");
        ed_clntNo.setValue("");
        ed_clntNm.setValue("");
        ed_vehclNo.setValue("");
        ed_vehclShortCd.setValue("");
        ed_eqCd.setValue("");
        scwin.hd_ctrtNo = "";
        scwin.hd_eqCd = "";
      }
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopup = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopup(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopup(disGubun, '', pVal, 'T', 'T');
};

//청구지점pop
scwin.udc_comCode_lobran_onclickEvent = async function (e) {
  scwin.f_openCommonPopup(1, ed_lobranCd.getValue(), ed_lobranNm.getValue(), "F", "F");
};
//청구지점 팝업callback
scwin.udc_comCode_lobran_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lobranCd, ed_lobranNm);
};

//매입거래처
scwin.udc_comCode_clnt_onclickEvent = function (e) {
  scwin.f_openCommonPopup(2, ed_clntNo.getValue(), ed_clntNm.getValue(), "F", "F");
};

//매입팝업callback
scwin.udc_comCode_clnt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_clntNo, ed_clntNm);
};
scwin.udc_comCode_lobran_onblurCodeEvent = e => scwin.f_chkOpenCommonPopup(ed_lobranCd, ed_lobranNm, 1);
scwin.udc_comCode_clnt_onblurCodeEvent = e => scwin.f_chkOpenCommonPopup(ed_clntNo, ed_clntNm, 2);
scwin.udc_comCode_lobran_onviewchangeNameEvent = info => scwin.f_chkOpenCommonPopup(ed_lobranNm, ed_lobranCd, 1, false);
scwin.udc_comCode_clnt_onviewchangeNameEvent = info => scwin.f_chkOpenCommonPopup(ed_clntNm, ed_clntNo, 2, false);

// 차량번호 조회 팝업 실행
scwin.udc_comCode_vehcl_onclickEvent = function (e) {
  scwin.f_openCommonPopup(3, scwin.trim(ed_vehclShortCd.getValue()), ed_vehclNo.getValue(), "T", "T");
};
scwin.udc_comCode_vehcl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopup(ed_vehclShortCd, ed_vehclNo, 3);
};
scwin.udc_comCode_vehcl_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopup(ed_vehclNo, ed_vehclShortCd, 3, false);
};

//-------------------------------------------------------------------------
// 조회조건 Clear
//-------------------------------------------------------------------------
scwin.btn_undo_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
  ed_ctrtDtMm.setValue(scwin.strCurYyMm); //현재날짜
};

//첫째 그리드 변경시
scwin.gr_trusteeCostSummary_onrowindexchange = function (rowIndex, oldRow) {
  let nRow = ds_trusteeCostInformation.getRowCount();
  if (nRow > 0) {
    scwin.f_RetrieveDetail(rowIndex);
  } else {
    ds_trusteeCostInformationDetail.removeAll();
  }
};

//-------------------------------------------------------------------------
// 조회 실행 완료
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function () {
  let nRow = ds_trusteeCostInformation.getRowCount();
  if (nRow == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
    $c.gus.cfDisableBtn($p, [btn_confirmcost, btn_confirm]);
    return;
  } else {
    let nCnt = ds_trusteeCostInformation.getRowCount();
    gr_trusteeCostSummary.setFocusedCell(0, 0);
    total.setValue(nCnt);
    $c.gus.cfEnableBtnOnly($p, [btn_confirmcost, btn_confirm]);
  }
};
scwin.sbm_retrieveDetail_submitdone = function () {
  let nRow = ds_trusteeCostInformationDetail.getRowCount();
  if (nRow == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
    $c.gus.cfEnableBtnOnly($p, [btn_confirmcost, btn_confirm]);
    return;
  } else {
    let nCnt = ds_trusteeCostInformationDetail.getRowCount();
    gr_trusteeCostInformation.setFocusedCell(0, 0);
    total2.setValue(nCnt);
    $c.gus.cfEnableBtnOnly($p, [btn_confirmcost, btn_confirm]);
  }
};

//-------------------------------------------------------------------------
// 매입생성 - 위수탁
// 전표생성 (f_Confirm())
//-------------------------------------------------------------------------
scwin.btn_confirm_onclick = async function (e) {
  // CERTI_NO 생성조건 : 확정구분 동일, 동일 거래처
  let questionNm = "";
  let nCnt = ds_trusteeCostInformationDetail.getRowCount();

  // 확정구분 or 거래처 관련 Check
  for (var k = 0; k < nCnt + 1; k++) {
    if (ds_trusteeCostInformationDetail.getCellData(k, "choice") == "T") {
      // 확정여부 구분			
      if (ds_trusteeCostInformationDetail.getCellData(k, "slipNo") == "") {
        questionNm = "확정";
      } else {
        questionNm = "확정취소";
      }
    }
  }
  let confirm = await $c.win.confirm($p, "[위수탁]매입생성 " + questionNm + " 하시겠습니까?");
  if (confirm) {
    await scwin.f_SetValueObject(); //전표생성
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 매입비용확정(f_ConfirmCost())
//-------------------------------------------------------------------------
scwin.btn_confirmcost_onclick = async function (e) {
  // CERTI_NO 생성조건 : 확정구분 동일, 동일 거래처
  let pchsClntNo = "";
  let dcsnCloseYn = "";
  let dcsnCloseYnNm = "";
  let costItemCd = "";
  let chkCnt = ds_trusteeCostInformationDetail.getMatchedColumnData("choice", "T", "orgSeq");
  if (chkCnt.length === 0) {
    $c.win.alert($p, "비용확정할 항목을 선택해주세요.");
    return;
  }
  let nCnt = ds_trusteeCostInformationDetail.getRowCount();

  // 확정구분 or 거래처 관련 Check
  for (var k = 0; k < nCnt; k++) {
    if (ds_trusteeCostInformationDetail.getCellData(k, "choice") == "T") {
      // 전표 Check
      if (ds_trusteeCostInformationDetail.getCellData(k, "slipNo") != "") {
        $c.gus.cfAlertMsg($p, scwin.MSG_CM_WRN_016);
        return;
      }

      // 미지급금액 Check
      if (ds_trusteeCostInformationDetail.getCellData(k, "nonPayAmt") != "0") {
        $c.gus.cfAlertMsg($p, scwin.MSG_CM_WRN_013);
        return;
      }

      // 확정여부 구분			
      if (pchsClntNo == "") {
        pchsClntNo = ds_trusteeCostInformationDetail.getCellData(k, "pchsClntNo");
        dcsnCloseYn = ds_trusteeCostInformationDetail.getCellData(k, "dcsnCloseYn");
        costItemCd = ds_trusteeCostInformationDetail.getCellData(k, "costItemCd");

        // 확인 팝업을 위한 Name
        if (dcsnCloseYn == "1") {
          dcsnCloseYnNm = "확정";
        } else {
          dcsnCloseYnNm = "확정취소";
        }
      }

      // 거래처 관련 Check
      if (pchsClntNo != ds_trusteeCostInformationDetail.getCellData(k, "pchsClntNo")) {
        $c.gus.cfAlertMsg($p, scwin.MSG_CM_WRN_011);
        return;
      }

      // 확정구분 Check
      if (dcsnCloseYn != ds_trusteeCostInformationDetail.getCellData(k, "dcsnCloseYn")) {
        $c.gus.cfAlertMsg($p, scwin.MSG_CM_WRN_012);
        return;
      }

      // 확정구분 Check
      if (costItemCd != ds_trusteeCostInformationDetail.getCellData(k, "costItemCd")) {
        $c.gus.cfAlertMsg($p, scwin.MSG_CM_WRN_015);
        return;
      }
    }
  }
  $c.sbm.execute($p, sbm_UpdateConsignmentPurchase);
};

//매입비용확정 callback
scwin.sbm_UpdateConsignmentPurchase_submitdone = async function (e) {
  var result = e.responseJSON?.resultDataSet?.[0];
  if (!result) return;
  if (result.Msg === "SUCC") await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

// 확정구분(decode처리)
scwin.dcsnYn = function (data) {
  return $c.gus.decode($p, data, 0, "미확정", "확정");
};

//grid pop -> asis 사용안함
scwin.grid_pop = function () {};

//-------------------------------------------------------------------------
// 전표생성 Popup 호출
//-------------------------------------------------------------------------
scwin.f_SetValueObject = async function () {
  let valueObject = new Array();
  let certiNo = "";
  let paramJson = "";

  // 전표번호 존재여부
  if (ds_trusteeCostInformationDetail.getCellData(0, "slipNo") == "N" || ds_trusteeCostInformationDetail.getCellData(0, "slipNo") == "") {
    valueObject.slipNo = ""; // 전표번호(매출증빙 내역 존재시...)
  } else {
    valueObject.slipNo = ds_trusteeCostInformationDetail.getCellData(0, "slipNo"); // 전표번호(매출증빙 내역 존재시...)
  }
  for (var k = 0; k < ds_trusteeCostInformationDetail.getRowCount() + 1; k++) {
    if (ds_trusteeCostInformationDetail.getCellData(k, "choice") == "T") {
      if (certiNo == "") {
        certiNo = ds_trusteeCostInformationDetail.getCellData(k, "certiNo");
      }

      // 확정여부 구분			
      if (certiNo == "") {
        pchsClntNo = ds_trusteeCostInformationDetail.getCellData(k, "certiNo");
      }

      // 거래처 관련 Check
      if (certiNo != ds_trusteeCostInformationDetail.getCellData(k, "certiNo")) {
        $c.gus.cfAlertMsg($p, scwin.MSG_CM_WRN_011);
        return;
      }
      paramJson = {
        param1: ds_trusteeCostInformationDetail.getCellData(k, "pchsClntNo"),
        param2: ds_trusteeCostInformationDetail.getCellData(k, "ctrtNo"),
        param3: ds_trusteeCostInformationDetail.getCellData(k, "eqCd"),
        param4: ds_trusteeCostInformationDetail.getCellData(k, "crn"),
        param5: ds_trusteeCostInformationDetail.getCellData(k, "oilSubsidyPayStdDt"),
        param6: ds_trusteeCostInformationDetail.getCellData(k, "calnDocDrawDt"),
        param7: ds_trusteeCostInformationDetail.getCellData(k, "seq"),
        param8: ds_trusteeCostInformationDetail.getCellData(k, "taxnClsCd"),
        param9: ds_trusteeCostInformationDetail.getCellData(k, "drvAdjmAmt"),
        param10: ds_trusteeCostInformationDetail.getCellData(k, "payAmt"),
        param11: ds_trusteeCostInformationDetail.getCellData(k, "certiNo"),
        param12: ds_trusteeCostInformationDetail.getCellData(k, "costItemCd"),
        param13: ed_clntNo.getValue(),
        param14: ed_crn.getValue(),
        param15: ds_trusteeCostInformationDetail.getCellData(k, "drvNm")
      };
    }
  }
  let opts = {
    id: "fs_402_01_02p",
    popupName: "위수탁 세금계산서 생성",
    modal: true,
    type: "browserPopup",
    width: 700,
    height: 560,
    title: "위수탁 세금계산서 생성"
  };
  await $c.win.openPopup($p, "/ui/ds/fs/consignmgnt/fs_402_01_02p.xml", opts, paramJson);
};

//이벤트처리(as-is)
// 비용 정보 상세 조회
scwin.gr_trusteeCostInformation_oncellclick = function (rowIndex, columnIndex, columnId) {
  //확정과 미확정데이타를 동시 선택했을경우 validate

  if (columnId == "choice") {
    //chk box 선택
    let choice = ds_trusteeCostInformationDetail.getCellData(rowIndex, "choice");
    let dcsnCloseYn = ds_trusteeCostInformationDetail.getCellData(rowIndex, "dcsnCloseYn");
    let certiNo = "";
    if (choice == "T") {
      for (var i = 0; i < ds_trusteeCostInformationDetail.getRowCount(); i++) {
        if (ds_trusteeCostInformationDetail.getCellData(i, "choice") == "T") {
          if (ds_trusteeCostInformationDetail.getCellData(i, "dcsnCloseYn") != dcsnCloseYn) {
            $c.gux.cfAlertMsg("확정자료와 미확정자료를 동시에 선택할 수 없습니다.");
            ds_trusteeCostInformationDetail.setCellData(i, "choice", "F");
            return;
          }
        }
      }
    }
    certiNo = ds_trusteeCostInformationDetail.getCellData(rowIndex, "certiNo");
    if (!$c.util.isEmpty($p, certiNo)) {
      for (var i = 0; i < ds_trusteeCostInformationDetail.getRowCount(); i++) {
        // 동일한 거래명세서 선택
        if (ds_trusteeCostInformationDetail.getCellData(i, "certiNo") == certiNo) {
          ds_trusteeCostInformationDetail.setCellData(i, "choice", "T");
        } else {
          ds_trusteeCostInformationDetail.setCellData(i, "choice", "F");
        }
      }
    }
  }
};

// 사업자번호 display 포맷 설정
scwin.f_applyMask = function (value) {
  if (!value) return value;
  var mask = "XXX-XX-XXXXX";
  var raw = scwin.trim(value);
  var result = "";
  var vi = 0;
  for (var i = 0; i < mask.length; i++) {
    if (mask[i] === "X") {
      if (vi < raw.length) result += raw[vi++];
    } else {
      result += mask[i];
    }
  }
  return result;
};

//그리드 포커스 exit event
// 공급가액에 의한 세액 및 합계 계산
scwin.gr_trusteeCostInformation_onafteredit = function (rowIndex, columnIndex, value) {
  let columnId = gr_trusteeCostInformation.getColumnID(columnIndex);

  //그리드 공급가액에 의한 세액 및 합계 계산
  if (columnId == "drvAdjmAmt" || columnId == "payAmt") {
    let drvAdjmAmt = ds_trusteeCostInformationDetail.getCellData(rowIndex, "drvAdjmAmt"); //기사정산금액	
    let lastMmAmt = ds_trusteeCostInformationDetail.getCellData(rowIndex, "lastMmAmt"); //전월발생
    let totAmt = ds_trusteeCostInformationDetail.getCellData(rowIndex, "totAmt"); //당월발생
    let payAmt = ds_trusteeCostInformationDetail.getCellData(rowIndex, "payAmt"); //당월지급

    let nonPayAmt = 0;
    nonPayAmt = lastMmAmt + totAmt - drvAdjmAmt - payAmt;
    ds_trusteeCostInformationDetail.setCellData(rowIndex, "nonPayAmt", nonPayAmt); //미지급금 계산값 세팅
  }
};

// Detail 정보 중 매입점소 edit 시에 숫자만 입력 가능하도록 설정(복사 붙여넣기는 글자를 허용해서 키보드 이벤트로 처리)
scwin.gr_trusteeCostInformation_onkeydown = function (e) {
  var keyCode = e.keyCode || e.which;

  // 2. GridView API를 사용하여 현재 포커스된 컬럼 인덱스 및 ID 가져오기
  var colIdx = this.getFocusedColumnIndex(); // 'this'는 호출한 GridView 객체
  var colId = this.getColumnID(colIdx);

  // Ctrl 키(또는 Mac의 Command 키)가 눌려있는지 확인
  var isCtrl = e.ctrlKey || e.metaKey;

  // 3. 특정 컬럼(예: ntceFullNo)인 경우에만 숫자 체크 로직 수행
  if (colId === "pchsDeptCd") {
    // Ctrl 조합 키는 허용
    if (isCtrl) return true;

    // 허용 키 목록: 숫자(48-57, 96-105), 백스페이스(8), 탭(9), 엔터(13), 화살표(37, 39), 삭제(46)
    if (!(keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105 || keyCode == 8 || keyCode == 9 || keyCode == 13 || keyCode == 37 || keyCode == 39 || keyCode == 46)) {
      // 허용되지 않은 키 입력 시 기본 동작 차단
      if (e.preventDefault) e.preventDefault();
      return false;
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구지점',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'btn_lobran',onloadCallbackFunc:'',selectID:'retrieveLobranInfo',codeId:'ed_lobranCd',popupTitle:'소속점소,소속점소코드,소속점소명',nameId:'ed_lobranNm',style:'',id:'udc_comCode_lobran',objTypeName:'key',mandatoryCode:'true',UpperFlagCode:'1',popupGridHeadTitle:'소속점소코드,소속점소명','ev:onclickEvent':'scwin.udc_comCode_lobran_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_lobran_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_lobran_onviewchangeNameEvent',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',allowCharCode:'0-9a-zA-Z',maxlengthCode:'4',validTitle:'청구지점'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_ctrtDtMm',style:'',mandatory:'true',displayFormat:'yyyy/MM',title:'기준월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'접수',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lux_receiptYn',search:'start',style:'width: 100px;',submenuSize:'auto',allOption:'true',chooseOption:'',ref:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미접수'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'접수'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]}]}]},{T:1,N:'xf:input',A:{id:'ed_crn',style:'width:100px;'}},{T:1,N:'xf:input',A:{id:'ed_eqCd',style:'width:100px;'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_vehclShortCd',nameId:'ed_vehclNo',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'',style:'',id:'udc_comCode_vehcl','ev:onclickEvent':'scwin.udc_comCode_vehcl_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_vehcl_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_vehcl_onviewchangeNameEvent',UpperFlagCode:'1',maxlengthCode:'4',allowCharCode:'0-9a-zA-Z',validTitle:'차량번호',mandatoryCode:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',onloadCallbackFunc:'',popupID:'btn_clnt',popupTitle:'거래처팝업,거래처코드,거래처명',selectID:'retrieveClntList',style:'',id:'udc_comCode_clnt',mandatoryCode:'true',objTypeCode:'data',readOnlyCode:'false',validExpCode:'사업자번호:csn',popupGridHeadTitle:'거래처코드,거래처명,"","",사업자번호,"",거래처직원,주소,요율연결여부,""','ev:onclickEvent':'scwin.udc_comCode_clnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_clnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_clnt_onviewchangeNameEvent',popupGridHiddenColumn:'3,4,6,10',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'0-9a-zA-Z'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_undo',style:'',type:'button','ev:onclick':'scwin.btn_undo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'N',gridUpYn:'N',gridID:'gr_trusteeCostSummary'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_trusteeCostInformation',id:'gr_trusteeCostSummary',style:'',visibleRowNum:'3',visibleRowNumFix:'true','ev:onrowindexchange':'scwin.gr_trusteeCostSummary_onrowindexchange',readOnly:'true',focusMode:'cell',focusMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'상계전표',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'매입점소',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'거래처코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'상호',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'공급금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'부가세',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'기사정산',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'setoffSlipNo',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsDeptCd',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNo',inputType:'text',style:'',value:'',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvAdjmAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column24',value:'',displayMode:'label',textAlign:'right',expression:'SUM("spplyAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column23',value:'',displayMode:'label',textAlign:'right',expression:'SUM("vatAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column22',value:'',displayMode:'label',expression:'SUM("drvAdjmAmt")',displayFormat:'#,##0',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'total',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_trusteeCostInformation',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'N',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_trusteeCostInformationDetail',id:'gr_trusteeCostInformation',style:'',visibleRowNum:'4',focusMode:'cell','ev:oncellclick':'scwin.gr_trusteeCostInformation_oncellclick','ev:onafteredit':'scwin.gr_trusteeCostInformation_onafteredit',focusMove:'true',rowStatusVisible:'true','ev:onkeydown':'scwin.gr_trusteeCostInformation_onkeydown'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column39',value:'선택',displayMode:'label',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{width:'490',inputType:'text',style:'',id:'column38',value:'전표정보',displayMode:'label',colSpan:'5',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'1740',inputType:'text',style:'',id:'column33',value:'수탁자 잔액 정보',displayMode:'label',colSpan:'18',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'차량번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column41',value:'성명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'계약번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'장비코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column66',value:'거래처코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column62',value:'유류보조금</br>지급일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column58',value:'계산서</br>작성일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',value:'순번',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'과세</br>구분코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column94',value:'사업자번호</br>(매입처)',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column90',value:'비용항목',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column82',value:'상호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'전월이월',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'당월발생',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column114',value:'기사정산',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column110',value:'당월지급',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column106',value:'미지급금',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'확정구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'거래명세서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'매입점소',width:'120',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'적요',width:'70',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column91',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column87',value:'코드명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'choice',inputType:'checkbox',style:'',value:'',width:'50',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnCloseYn',inputType:'text',style:'',value:'',width:'100',textAlign:'center',displayFormatter:'scwin.dcsnYn',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',style:'',value:'',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiNo',inputType:'text',style:'',value:'',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsDeptCd',inputType:'textImage',style:'',value:'',width:'120',textAlign:'center',readOnly:'false',viewType:'default',mandatory:'true',imageClickFunction:'scwin.grid_pop',maxLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',style:'',value:'',width:'70',textAlign:'center',readOnly:'false',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvNm',inputType:'text',style:'',value:'',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',style:'',value:'',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'eqCd',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'pchsClntNo',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'oilSubsidyPayStdDt',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'calnDocDrawDt',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'seq',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'taxnClsCd',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label',textAlign:'center',readOnly:'true',displayFormatter:'scwin.f_applyMask'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'costItemCd',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'costItemNm',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'lastMmAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'totAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'drvAdjmAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'false',dataType:'number',allowChar:'0-9',displayFormat:'#,##0',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'false',dataType:'number',allowChar:'0-9',displayFormat:'#,##0',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'nonPayAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'total2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_confirmcost',style:'',type:'button','ev:onclick':'scwin.btn_confirmcost_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비용확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_confirm',style:'',type:'button','ev:onclick':'scwin.btn_confirm_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표생성'}]}]}]}]}]}]}]}]}]})