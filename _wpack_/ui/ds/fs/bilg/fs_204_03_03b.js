/*amd /ui/ds/fs/bilg/fs_204_03_03b.xml 89740 0041aad1941d866403ed4356dde2c78b11395c0424a6a1889431c720701a258d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sellLodeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'headcomCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true','ev:ondataload':'scwin.ds_results_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'headcomCd',name:'본사;/지사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'관계사;/타사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'newYn',name:'기존;/신규',dataType:'text'}},{T:1,N:'w2:column',A:{id:'newCtrtYr',name:'계약년도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperClntNo',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperClntNm',name:'그룹거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEmpNm',name:'계약;담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomNm',name:'사업;영역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출귀속;부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'매출귀속;부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoClsCd',name:'화물구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repCommCd',name:'대표화종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'계약부서;코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'계약부서;명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellTotAmt',name:'A.매출합계;(관리회계투입;내부매출입미반영)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsTotAmt',name:'B.매입합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellProfitRate',name:'이익율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'A-1.;확정매출',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unSellThisMonth',name:'A-2.;미확정매출;증감',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'innerSellAmt',name:'A-3.;내부매출',dataType:'number'}},{T:1,N:'w2:column',A:{id:'innerPchsAmt',name:'A-4.;내부매입',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'B-1.;확정매입',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unPchsThisMonth',name:'B-2.;미확정매입;증감',dataType:'number'}},{T:1,N:'w2:column',A:{id:'innerSellAmtMgnt',name:'관리회계투입;내부매출',dataType:'number'}},{T:1,N:'w2:column',A:{id:'innerPchsAmtMgnt',name:'관리회계투입;내부매입',dataType:'number'}},{T:1,N:'w2:column',A:{id:'top1',name:'A-1.확정매출;/운송료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'top2',name:'A-1.확정매출;/자가반출관리비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'top3',name:'A-1.확정매출;/위탁-관리비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'top4',name:'A-1.확정매출;/임대료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'etcSell',name:'A-1.확정매출;/기타매출',dataType:'number'}},{T:1,N:'w2:column',A:{id:'top1Pchs',name:'B-1.확정매입;/변동비-용차료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'top2Pchs',name:'B-1.확정매입;/변동비-기타',dataType:'number'}},{T:1,N:'w2:column',A:{id:'top3Pchs',name:'B-1.확정매입;/고정비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'etcPchs',name:'B-1.확정매입;/기타매입',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoType',name:'화종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'VAT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'subTotalcheck',name:'name42',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctSlip',saveRemovedData:'true','ev:ondataload':'scwin.ds_acctSlip_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rsltsClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctFI',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rsltsClsCd',name:'실적구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctMGNT',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rsltsClsCd',name:'실적구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'varFixedClsNm',name:'변고정비;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtAcctNm',name:'발행계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fiAmt',name:'재무마감기준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fiCloseAmt',name:'재무이관금액;(A)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fiCtrlAmt',name:'재무이관조정;금액(B)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntCtrlAmt',name:'관리조정금액;(C)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntSumAmt',name:'관리회계금액;(A+B+C)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntDistAmt',name:'배부금액;(D)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distAftAmt',name:'배부후금액(A+B+C+D)',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchAcct'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYmAcct',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selPchsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_inner',saveRemovedData:'true','ev:ondataload':'scwin.ds_inner_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'innerSellAmt',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'innerPchsAmt',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctSlip',saveRemovedData:'true','ev:ondataload':'scwin.ds_acctSlip_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rsltsClsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'grpCheck',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctFI',saveRemovedData:'true','ev:ondataload':'scwin.ds_acctFI_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rsltsClsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctMGNT',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rsltsClsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtAcctNm',name:'계정과목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fiAmt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fiCloseAmt',name:'재무마감금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fiCtrlAmt',name:'재무조정금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mgntCtrlAmt',name:'관리조정금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mgntDistAmt',name:'관리배부금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mgntSumAmt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'distAftAmt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'varFixedClsNm',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.bilg.bilgrsltsmgnt.RetrieveInnerAcctCmprCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"},{"id":"ds_inner","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_results","key":"OUT_DS1"},{"id":"ds_inner","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveAcct',action:'/il.pfm.pefm.RetrieveProfitAndLossForCustomerAcctCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchAcct","key":"IN_DS1"},{"id":"ds_acctSlip","key":"OUT_DS1"},{"id":"ds_acctFI","key":"OUT_DS2"},{"id":"ds_acctMGNT","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_acctSlip","key":"OUT_DS1"},{"id":"ds_acctFI","key":"OUT_DS2"},{"id":"ds_acctMGNT","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveAcct_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수
//-------------------------------------------------------------------------
scwin.vCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.param = $c.data.getParameter($p);
scwin.sView = scwin.param.sView == null ? "" : scwin.param.sView; //싱글뷰에서 넘어온 값
scwin.hid_sacctDeptCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  ica_qryConDt.setValue(scwin.vCurDate);
  ica_closeYmAcct.setValue(scwin.vCurDate);
  if (scwin.sView == "Y") {
    ed_acctDeptCd.setValue("00047");
    scwin.udc_acctDept_onClick();
  }
};

//-------------------------------------------------------------------------
// 조회조건 클리어
//-------------------------------------------------------------------------
scwin.btn_init_onClick = function (e) {
  $c.gus.cfInitObjects($p, portCondtionPart, null);
};

//-------------------------------------------------------------------------
// 조회 / f_retrieve()
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = function (e) {
  dma_condition.set("acctDeptCd", ed_acctDeptCd.getValue());
  dma_condition.set("qryConDt", ica_qryConDt.getValue());
  dma_condition.set("headcomCd", acb_headcomCd.getValue());
  dma_condition.set("bilgClntNo", ed_bilgClntNo.getValue());
  if (dma_condition.get("acctDeptCd") == "") {
    $c.win.alert($p, "회계부서는 필수 조회 조건입니다.");
    return false;
  }
  if (dma_condition.get("qryConDt") == "") {
    $c.win.alert($p, "기준월은 필수 조회 조건입니다.");
    ica_qryConDt.focus();
    return false;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회 - 회계 / f_RetrieveAcct
//-------------------------------------------------------------------------
scwin.btn_retrieveAcct_onClick = async function (e) {
  if (!(await $c.gus.cfValidate($p, tb_searchCondAcct))) {
    return;
  }
  if (ica_closeYmAcct.getValue() == "") {
    $c.win.alert($p, "회계년월은 필수 입력 사항입니다.");
    return;
  }
  if (ed_sacctDeptCd.getValue() == "") {
    $c.win.alert($p, "귀속부서는 필수 입력 사항입니다.");
    return;
  }
  dma_searchAcct.set("closeYmAcct", ica_closeYmAcct.getValue());
  dma_searchAcct.set("lobranCd", ed_sacctDeptCd.getValue());
  dma_searchAcct.set("selPchsCd", acb_selPchsCd.getValue());
  dma_searchAcct.set("acctDeptCd", scwin.hid_sacctDeptCd);
  $c.sbm.execute($p, sbm_retrieveAcct);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (회계부서)
//-------------------------------------------------------------------------
scwin.udc_acctDept_onClick = async function (e) {
  scwin.f_openCommonPopUp(1, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'F');
};
scwin.udc_acctDept_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_acctDeptCd, ed_acctDeptNm, 1);
};
scwin.udc_acctDept_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_acctDeptNm, ed_acctDeptCd, 1, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (거래처번호)
//-------------------------------------------------------------------------
scwin.udc_bilgClnt_onClick = async function (e) {
  scwin.f_openCommonPopUp(2, ed_bilgClntNo.getValue(), ed_bilgClntNm.getValue(), 'F', 'F');
};
scwin.udc_bilgClnt_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, ed_bilgClntNm, 2);
};
scwin.udc_bilgClnt_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNm, ed_bilgClntNo, 2, false);
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

//-------------------------------------------------------------------------
// function name : f_openPopUp
// function desc : popup
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      //청구부서코드팝업          
      udc_acctDept.cfCommonPopUp(scwin.udc_acctDept_callBackFunc, pCode.trim(), pName, pClose, null, "코드, 명", null, null, null, null, null, null, null, null, pAllSearch, "부서, 코드, 명", null);
      break;
    case 2:
      //청구부서코드팝업          
      udc_bilgClnt.cfCommonPopUp(scwin.udc_bilgClnt_callBackFunc, pCode.trim(), pName, pClose, null, "거래처코드, 거래처명", null, null, null, null, null, null, null, null, pAllSearch, "거래처,거래처코드,거래처명", null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(회계부서)
//-------------------------------------------------------------------------
scwin.udc_acctDept_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_acctDeptCd, ed_acctDeptNm); // 청구부서코드, 청구부서명

  if (typeof rtnList != "undefined" && rtnList != null && rtnList.length > 0) {
    hid_sacctDeptCd = rtnList[0];
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(거래처번호)
//-------------------------------------------------------------------------
scwin.udc_bilgClnt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_bilgClntNo, ed_bilgClntNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (회계부서2)
//-------------------------------------------------------------------------
scwin.udc_sacctDept_onClick = async function (e) {
  scwin.f_PopUp('LOBRAN_ACCT', 'T', 'F', 'F');
};
scwin.udc_sacctDept_onblurCode = async function (e) {
  scwin.f_BeforePopUpEd(ed_sacctDeptNm, ed_sacctDeptCd, "LOBRAN_ACCT", "T", "F", "F");
};
scwin.udc_sacctDept_onChangeName = async function (info) {
  scwin.f_BeforePopUpEd2(ed_sacctDeptCd, ed_sacctDeptNm, 'LOBRAN_ACCT', 'T', 'F', 'F');
};

//-------------------------------------------------------------------------
// function	name : f_BeforePopUpEd
// function	desc : 공통팝업 열기 전에 체크- EMEDIT onKillFocus 이벤트	발생시
//					nmObj-코드명(text),	cdObj-코드(emedit),	gubun1
//-------------------------------------------------------------------------
scwin.f_BeforePopUpEd = function (nmObj, cdObj, gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var cdObjVal = cdObj.value;
  if (ed_sacctDeptCd.getValue() == "") {
    ed_sacctDeptNm.setValue("");
  } else {
    nmObj.value = "";
    scwin.f_PopUp(gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF, cdObj, nmObj);
  }
};
scwin.f_BeforePopUpEd2 = function (nmObj, cdObj, gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var cdObjVal = cdObj.value;
  if (ed_sacctDeptNm.getValue() == "") {
    nmObj.text = "";
    ed_sacctDeptCd.setValue("");
  } else {
    nmObj.text = "";
    var cd = ed_sacctDeptCd.getValue();
    var nm = ed_sacctDeptNm.getValue();
    scwin.f_PopUp(gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF, cd, nm);
  }
};

//-------------------------------------------------------------------------
// function	name : f_PopUpGrid
// function	desc : Grid popup
//-------------------------------------------------------------------------
scwin.f_PopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF, Code, Name) {
  // 선언부
  var rtnList;
  var pCode = "";
  var pName = "";
  switch (disGubun) {
    case "LOBRAN_ACCT":
      udc_sacctDept.cfCommonPopUp(scwin.udc_sacctDept_callBackFunc, ed_sacctDeptCd.getValue().trim(), ed_sacctDeptNm.getValue(), pWinCloseTF, '2', "코드, 명", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "부서,코드,명", pNoDataCloseTF);
      break;
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(회계부서2)
//-------------------------------------------------------------------------
scwin.udc_sacctDept_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_sacctDeptCd, ed_sacctDeptNm);
  if (typeof rtnList != "undefined" && rtnList != null && rtnList.length > 0) {
    hid_sacctDeptCd = rtnList[4];
  }
};

//-------------------------------------------------------------------------
// 국내손익 회계대사 조회 성공시
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitDone = function (e) {
  spa_totalRows.setValue(ds_results.getTotalRow());
  spa_innerSell.setValue(ds_inner.getCellData(0, "innerSellAmt"));
  spa_innerPchs.setValue(ds_inner.getCellData(0, "innerPchsAmt"));
  let options = {};
  options.sortIndex = "newYn coClsCd headcomCd";
  options.sortOrder = "1 1 1";
  ds_results.multisort(options);
  gr_results.setFixedColumn(9);
};

//-------------------------------------------------------------------------
// 하단 그리드 조회 성공시
//-------------------------------------------------------------------------
scwin.sbm_retrieveAcct_submitDone = function (e) {
  spa_totalRows_acctFi.setValue(ds_acctFI.getTotalRow());
  spa_totalRows_acctMgnt.setValue(ds_acctMGNT.getTotalRow());
  spa_totalRows_acctSlip.setValue(ds_acctSlip.getTotalRow());
  let rowCnt = ds_acctSlip.getTotalRow();
};

//-------------------------------------------------------------------------
// 국내손익 회계대사 클릭시
//-------------------------------------------------------------------------
scwin.gr_results_onClick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "sellAmt") {
    scwin.f_errorPopUp(rowIndex, "A");
  } else if (columnId == "pchsAmt") {
    scwin.f_errorPopUp(rowIndex, "B");
  }
};

//-------------------------------------------------------------------------
// 국내손익 회계대사 팝업
//-------------------------------------------------------------------------
scwin.f_errorPopUp = function (row, gubun) {
  //팝업 옵션 설정
  let options = {
    id: "taxPop",
    title: "국내손익 회계대사 상세조회",
    modal: true,
    // type: "borwserPopup",
    popupName: "국내손익 회계대사 상세조회",
    width: 1280,
    height: 580
  };
  let params = {
    qryConDt: dma_condition.get("qryConDt"),
    headcomCd: dma_condition.get("headcomCd"),
    acctDeptCd: dma_condition.get("acctDeptCd"),
    acctDeptNm: ed_acctDeptNm.getValue(),
    bilgClntNo: ds_results.getCellData(row, "bilgClntNo"),
    bilgClntNm: ds_results.getCellData(row, "bilgClntNm"),
    newCtrtYr: ds_results.getCellData(row, "newCtrtYr"),
    acctCd: ds_results.getCellData(row, "acctCd"),
    ctrtNo: ds_results.getCellData(row, "ctrtNo"),
    gubun: gubun
  };

  //상세화면 호출
  let rtn = $c.win.openPopup($p, "/ui/ds/fs/bilg/fs_204_03_03p.xml", options, params);
};
scwin.btn_init2_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_searchCondAcct);
};

//-------------------------------------------------------------------------
// 상단 조회 완료시
//-------------------------------------------------------------------------
scwin.ds_results_ondataload = function () {
  spa_totalRows.setValue(ds_results.getTotalRow());
  if (ds_results.getTotalRow() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
  let options = {
    sortIndex: "headcomCd coClsCd newYn",
    sortOrder: "0 0 0"
  };
  ds_results.multisort(options);
  for (i = 0; i < ds_results.getRowCount(); i++) {
    let coClsCd = ds_results.getCellData(i, "coClsCd");
    let newYn = ds_results.getCellData(i, "newYn");
    ds_results.setCellData(i, "subTotalcheck", coClsCd + "_" + newYn);
  }
};

//-------------------------------------------------------------------------
// 좌측 조회 완료시
//-------------------------------------------------------------------------
scwin.ds_acctSlip_ondataload = function () {
  let rowCnt = ds_acctSlip.getTotalRow();
  spa_totalRows_acctSlip.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, "조회된 전표내역이 없습니다.");
  }
  let options = {
    sortIndex: "rsltsClsCd slipKndNm",
    sortOrder: "1 1"
  };
  ds_acctSlip.multisort(options);
  for (i = 0; i < ds_acctSlip.getRowCount(); i++) {
    let rsltsClsCd = ds_acctSlip.getCellData(i, "rsltsClsCd");
    let slipKndNm = ds_acctSlip.getCellData(i, "slipKndNm");
    ds_acctSlip.setCellData(i, "grpCheck", rsltsClsCd + "_" + slipKndNm);
  }
  ;
};
scwin.acctSlip_RunExcel = async function () {
  let rowCnt = ds_acctSlip.getTotalRow();
  if (rowCnt == 0) {
    $c.win.alert($p, "조회결과가 없습니다.");
    return;
  } else {
    let options = {
      fileName: "전표기준.xlsx",
      sheetName: "전표기준",
      colMerge: true
    };
    let infoArr = [];
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, gr_acctSlip, options, infoArr);
    }
  }
};
scwin.accrFi_RunExcel = async function () {
  let rowCnt = ds_acctFI.getTotalRow();
  if (rowCnt == 0) {
    $c.win.alert($p, "조회결과가 없습니다.");
    return;
  } else {
    let options = {
      fileName: "재무마감기준.xlsx",
      sheetName: "재무마감기준",
      colMerge: true
    };
    let infoArr = [];
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, gr_acctFI, options, infoArr);
    }
  }
};
scwin.acctMgnt_RunExcel = async function () {
  let rowCnt = ds_acctMGNT.getTotalRow();
  if (rowCnt == 0) {
    $c.win.alert($p, "조회결과가 없습니다.");
    return;
  } else {
    let options = {
      fileName: "관리마감기준.xlsx",
      sheetName: "관리마감기준",
      colMerge: true,
      hiddenVisible: true
    };
    let infoArr = [];
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, gr_acctMGNT, options, infoArr);
    }
  }
};
scwin.ds_inner_ondataload = function () {
  spa_innerSell.setValue(ds_inner.getCellData(0, "innerSellAmt"));
  spa_innerPchs.setValue(ds_inner.getCellData(0, "innerPchsAmt"));
};

//-------------------------------------------------------------------------
// 재무 마감 기준 DataList 로드시 Sort
//-------------------------------------------------------------------------
scwin.ds_acctFI_ondataload = function () {
  let options = {
    sortIndex: "rsltsClsCd clntNm",
    sortOrder: "1 1"
  };
  ds_acctFI.multisort(options);
};

// scwin.grid_subTotal_custom = function(data, formattedData, rowIndex, colIndex) {
//     let coClsCd = ds_results.getCellData(rowIndex, "coClsCd");
//     let newYn = ds_results.getCellData(rowIndex, "newYn");

//     return (coClsCd + newYn);

// }

scwin.cutName = function (data, formattedData, rowIndex, colIndex) {
  let maxlength = data.length;
  let cutlength = maxlength - 2;
  let result = data.substring(cutlength, maxlength);
  console.log("check");
  console.log(data);
  console.log(result);
  return result;
};
scwin.runExcel = function () {
  // {"fileName":"국내손익 회계대사.xlsx", "sheetName" : "국내손익 회계대사"}

  let options = {
    fileName: "국내손익 회계대사.xlsx",
    sheetName: "국내손익 회계대사",
    useDataFormat: true
  };
  let grdObj = gr_results;
  let infoArr = {};
  $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
};
scwin.customFm = function (data, formattedData, rowIndex, colIndex) {
  if (formattedData == null || formattedData === "") return "";
  var num = Number(formattedData.replace(/,/g, ""));
  if (isNaN(num)) return formattedData;
  num = Math.floor(num * 100) / 100;
  return num.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'portCondtionPart',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_qryConDt',style:'',mandatory:'true',objType:'data',displayFormat:'yyyy/MM'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본사/지사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_headcomCd',search:'start',style:'width:100px;',submenuSize:'auto',chooseOption:'true',ref:'',displayMode:'label',allOption:'',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'본사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'본사'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'지사'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회계부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_acctDeptCd',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'6',objTypeCode:'Data',UpperFlagCode:'1',validExpCode:'매출물류부서:yes',nameId:'ed_acctDeptNm',id:'udc_acctDept',objTypeName:'key',mandatoryName:'false','ev:onclickEvent':'scwin.udc_acctDept_onClick','ev:onblurCodeEvent':'scwin.udc_acctDept_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_acctDept_onChangeName',selectID:'retrieveAcctDeptCdInfo4',popupGridHeadTitle:'코드,명',popupTitle:'부서,코드,명',mandatoryCode:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_bilgClntNo',nameId:'ed_bilgClntNm',id:'udc_bilgClnt',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'6',objTypeCode:'Data',UpperFlagCode:'1',readOnlyCode:'false',mandatoryName:'false',objTypeName:'key',popupGridHeadTitle:'거래처코드,거래처명',popupTitle:'거래처,거래처코드,거래처명',selectID:'retrieveClntInfo','ev:onclickEvent':'scwin.udc_bilgClnt_onClick','ev:onblurCodeEvent':'scwin.udc_bilgClnt_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_bilgClnt_onChangeName'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'국내손익 회계대사',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_results',grdDownOpts:'{"fileName":"국내손익 회계대사.xlsx", "sheetName" : "국내손익 회계대사"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_results',focusMode:'row',id:'gr_results',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true',fixedColumn:'',resize:'true',columnMove:'true','ev:oncellclick':'scwin.gr_results_onClick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'본사/지사'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column251',value:'',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'관계사/타사'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'기존/신규'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'100',value:'계약년도'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'그룹코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'그룹거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'거래처번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'거래처명',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'계약번호',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column68',value:'계약담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',value:'사업영역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column62',value:'매출귀속<br/>부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'매출귀속<br/>부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column56',value:'화물구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'대표화종',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column50',value:'계약부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column47',value:'계약부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column44',value:'A.매출합계<br/>(관리회계투입<br/>내부매출입미반영)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column41',value:'B.매입합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column32',value:'이익율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'A-1.<br/>확정매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column38',value:'A-2.<br/>미확정매출증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column116',value:'A-3.<br/>내부매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column113',value:'A-4.<br/>내부매입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column110',value:'B-1.<br/>확정매입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column107',value:'B-2.<br/>미확정매입 증감',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column104',value:'관리회계투입<br/>내부매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column101',value:'관리회계투입<br/>내부매입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column98',value:'A-1.확정매출<br/>/운송료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column95',value:'A-1.확정매출<br/>/자가반출관리비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column92',value:'A-1.확정매출<br/>/위탁-관리비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column89',value:'A-1.확정매출<br/>/임대료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column86',value:'A-1.확정매출<br/>/기타매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column83',value:'B-1.확정매입<br/>/변동비-용차료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column80',value:'B-1.확정매입<br/>/변동비-기타',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column71',value:'B-1.확정매입<br/>/고정비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column74',value:'B-1.확정매입<br/>/기타매입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column77',value:'품번',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column119',value:'화종',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column122',value:'오더번호',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column125',value:'VAT',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'headcomCd',inputType:'text',removeBorderStyle:'false',width:'100',colMerge:'true',upperColumn:'coClsCd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'subTotalcheck',value:'',displayMode:'label',hiddenCol:'true',colMerge:'true',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'coClsCd',inputType:'text',removeBorderStyle:'false',width:'100',colMerge:'true',upperColumn:'newYn'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'newYn',inputType:'text',removeBorderStyle:'false',width:'100',colMerge:'true',upperColumn:'coClsCd'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'newCtrtYr',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upperClntNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upperClntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',width:'160',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ctrtEmpNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bizDomNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellLodeptCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellLodeptNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cargoClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'repCommCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'acctDeptCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'acctDeptNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellTotAmt',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsTotAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'sellProfitRate',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00[floor]',customFormatter:'scwin.customFm'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',class:'underline',style:'color: blue;'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'unSellThisMonth',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'innerSellAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'innerPchsAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',class:'underline',style:'color: blue;'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'unPchsThisMonth',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'innerSellAmtMgnt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'innerPchsAmtMgnt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'top1',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'top2',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'top3',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'top4',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'etcSell',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'top1Pchs',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'top2Pchs',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'top3Pchs',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'etcPchs',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'commCd',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cargoType',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'odrNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vatAmt',value:'',displayMode:'label',textAlign:'right',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'subTotalcheck',style:'',id:'newYn_subTotal'},E:[{T:1,N:'w2:row',A:{style:'',id:'row8'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column250',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column253',value:'',displayMode:'label',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column249',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column248',value:'',displayMode:'label',customFormatter:'scwin.cutName',expression:'targetColValue().substring((targetColValue().length -2),targetColValue().length)'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column247',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column246',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column245',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column244',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column243',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column242',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column241',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column240',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column239',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column238',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column237',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column236',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column235',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column234',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column233',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("sellTotAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column232',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("pchsTotAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',style:'',id:'column231',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0.00[floor]',expression:'(sum("sellTotAmt")-sum("pchsTotAmt"))/sum("sellTotAmt") * 100',textAlign:'right',customFormatter:'scwin.customFm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column230',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("sellAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column229',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("unSellThisMonth")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column228',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("innerSellAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column227',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("innerPchsAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column226',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("pchsAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column225',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("unPchsThisMonth")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column224',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("innerSellAmtMgnt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column223',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("innerPchsAmtMgnt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column222',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("top1")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column221',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("top2")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column220',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("top3")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column219',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("top4")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column218',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("etcSell")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column217',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("top1Pchs")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column216',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("top2Pchs")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column215',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("top3Pchs")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column214',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("etcPchs")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column213',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column212',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column211',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column210',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'coClsCd',style:'',id:'coClsCd_subTotal'},E:[{T:1,N:'w2:row',A:{style:'',id:'row7'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column209',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column254',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column208',value:'',displayMode:'label',expression:'targetColValue()'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column207',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column206',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column205',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column204',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column203',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column202',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column201',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column200',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column199',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column198',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column197',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column196',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column195',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column194',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column193',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column192',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("sellTotAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column191',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("pchsTotAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',style:'',id:'column190',value:'',displayMode:'label',displayFormat:'#,##0.00[floor]',expression:'(sum("sellTotAmt")-sum("pchsTotAmt"))/sum("sellTotAmt") * 100',dataType:'number',textAlign:'right',customFormatter:'scwin.customFm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column189',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("sellAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column188',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("unSellThisMonth")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column187',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("innerSellAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column186',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("innerPchsAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column185',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("pchsAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column184',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("unPchsThisMonth")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column183',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("innerSellAmtMgnt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column182',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("innerPchsAmtMgnt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column181',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("top1")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column180',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("top2")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column179',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("top3")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column178',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("top4")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column177',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("etcSell")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column176',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("top1Pchs")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column175',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("top2Pchs")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column174',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("top3Pchs")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column173',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("etcPchs")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column172',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column171',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column170',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column169',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'headcomCd',style:'',id:'headcomCd_subTotal'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column168',value:'',displayMode:'label',expression:'targetColValue()'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column255',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column167',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column166',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column165',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column164',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column163',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column162',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column161',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column160',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column159',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column158',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column157',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column156',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column155',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column154',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column153',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column152',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column151',value:'',displayMode:'label',expression:'sum("sellTotAmt")',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column150',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum("pchsTotAmt")',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',style:'',id:'column149',value:'',displayMode:'label',expression:'(sum("sellTotAmt")-sum("pchsTotAmt"))/sum("sellTotAmt") * 100',displayFormat:'#,##0.00[floor]',dataType:'number',textAlign:'right',customFormatter:'scwin.customFm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column148',value:'',displayMode:'label',dataType:'number',expression:'sum("sellAmt")',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column147',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum("unSellThisMonth")',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column146',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("innerSellAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column145',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("innerPchsAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column144',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("pchsAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column143',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("unPchsThisMonth")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column142',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("innerSellAmtMgnt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column141',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("innerPchsAmtMgnt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column140',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("top1")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column139',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("top2")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column138',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("top3")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column137',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("top4")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column136',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("etcSell")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column135',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("top1Pchs")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column134',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("top2Pchs")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column133',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("top3Pchs")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column132',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("etcPchs")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column131',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column130',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column129',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column128',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column256',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column52',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column49',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column46',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("sellTotAmt")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column43',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("pchsTotAmt")'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column34',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00[floor]',expression:'(sum("sellTotAmt")-sum("pchsTotAmt"))/sum("sellTotAmt") * 100',customFormatter:'scwin.customFm'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column37',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("sellAmt")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column40',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("unSellThisMonth")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column118',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("innerSellAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column115',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("innerPchsAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column112',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("pchsAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column109',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("unPchsThisMonth")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column106',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("innerSellAmtMgnt")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column103',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("innerPchsAmtMgnt")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column100',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("top1")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column97',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("top2")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column94',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("top3")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column91',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("top4")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column88',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("etcSell")'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',id:'column85',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("top1Pchs")'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',id:'column82',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("top2Pchs")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column73',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("top3Pchs")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column76',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("etcPchs")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column79',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column121',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column124',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column127',value:'',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:170px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:170px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'내부매출(내부매출-합계)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',style:';text-align:right;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'spa_innerSell',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'내부매입(내부매입-합계) ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',style:';text-align:right;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'spa_innerPchs',label:'',ref:'',style:'',userData2:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchCondAcct',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회계년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_closeYmAcct',style:'',mandatory:'true',displayFormat:'yyyy/MM'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회계부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'회계부서',style:'',codeId:'ed_sacctDeptCd',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',mandatoryCode:'true',maxlengthCode:'6',UpperFlagCode:'1',btnId:'btn_img_PopUp5',nameId:'ed_sacctDeptNm',id:'udc_sacctDept',maxlengthName:'50',objTypeName:'data',selectID:'retrieveAcctDeptCdInfo4','ev:onclickEvent':'scwin.udc_sacctDept_onClick','ev:onviewchangeNameEvent':'scwin.udc_sacctDept_onChangeName','ev:onblurCodeEvent':'scwin.udc_sacctDept_onblurCode'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출입구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_selPchsCd',search:'start',style:'width:100px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',mandatory:'true',displayMode:'label',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'매출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SELL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'매입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PCHS'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init2',style:'',type:'button','ev:onclick':'scwin.btn_init2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieveAcct',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieveAcct_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no'},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'전표기준',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_acctSlip',gridDownFn:'scwin.acctSlip_RunExcel',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_acctSlip',focusMode:'row',id:'gr_acctSlip',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',ignoreStatus:'no',sortable:'true',columnMove:'true',columnMoveWithFooter:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'실적구분'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'120',value:'전표종류'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'120',value:'계정명'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'120',value:'금액'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'grpCheck',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'rsltsClsCd',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true',colMerge:'true',upperColumn:'slipKndNm'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'slipKndNm',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctNm',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'amt',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'grpCheck',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column35',value:'',displayMode:'label',expression:'targetColValue().substring(0,4)'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column34',value:'',displayMode:'label',textAlign:'left',expression:'targetColValue().substring(5,targetColValue().length)'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column32',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("amt")',textAlign:'right'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'rsltsClsCd',style:'',id:'subTotal2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row7'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column38',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column37',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column36',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("amt")',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column31',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'합계',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'expression',style:'',value:'',width:'120',textAlign:'right',expression:'sum("amt")',dataType:'number',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totalRows_acctSlip',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'재무마감기준',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridUpYn:'N',gridID:'gr_acctFI',gridDownFn:'scwin.accrFi_RunExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_acctFI',focusMode:'row',id:'gr_acctFI',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',resize:'true',editModeEvent:'onclick',columnMove:'true',mergeCells:'byrestriccol',mergeCol:'rsltsClsCd,clntNm'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'실적구분'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'120',value:'거래처명'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'120',value:'계정명'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'120',value:'금액'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'rsltsClsCd',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNm',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctNm',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'amt',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'rsltsClsCd',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column35',value:'',displayMode:'label',expression:'targetColValue()'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column34',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column32',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("amt")',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column31',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'합계',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'expression',style:'',value:'',width:'120',textAlign:'right',expression:'sum("amt")',dataType:'number',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totalRows_acctFi',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'관리마감기준',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section4',style:'',gridUpYn:'N',gridID:'gr_acctMGNT',gridDownFn:'scwin.acctMgnt_RunExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section4',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_acctMGNT',focusMode:'row',id:'gr_acctMGNT',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'4',visibleRowNumFix:'true',resize:'true',editModeEvent:'onclick',dataDragSelect:'true',dataDragSelectAutoScroll:'true',readOnly:'true',mergeCells:'byrestriccol',mergeCol:'rsltsClsCd',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'실적구분'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'120',value:'계정명',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'120',value:'변고정비구분'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'120',value:'발행계정명'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'재무마감기준',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'재무이관금액<br/>(A)',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'재무이관조정<br/>금액(B)',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'관리조정금액<br/>(C)',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'관리회계금액<br/>(A+B+C)',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column32',value:'배부금액<br/>(D)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column35',value:'배부후금액<br/>(A+B+C+D)',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'rsltsClsCd',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctNm',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'varFixedClsNm',inputType:'text',removeBorderStyle:'false',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'prtAcctNm',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fiAmt',inputType:'text',style:'',value:'',width:'120',readOnly:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fiCloseAmt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fiCtrlAmt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntCtrlAmt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntSumAmt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'mgntDistAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'distAftAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totalRows_acctMgnt',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})