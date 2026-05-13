/*amd /ui/ps/eq/partmgnt/partbuyproc/eq_420_01_06b.xml 42185 068e217c342c1fb6a8dd5cf5f1ed047f31de09945f0a7e6847e9f7db658439e4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fixWrkPl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq420',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'체크박스',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyNo',name:'구매번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inReqDt',name:'입고예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyClsCd',name:'구매구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supplyUpr',name:'공급가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ttl',name:'합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stsNm',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtYn',name:'발주서발행',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emailSendDtm',name:'메일전송',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntEmail',name:'메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyPicEmail',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnCls',name:'일반과세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyReqDt',name:'구매요청일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'homeClsCd',name:'소속',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'정비작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inDtCls',name:'입고구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtFrom',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtTo',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntCd',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'buyCls',name:'구매구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stsCd',name:'상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'status',name:'부품구매 "요청"관리',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_sendMail'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cntn',name:'메일내용',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sendMail',name:'발신메일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sendNm',name:'발신자명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'receiveMail',name:'수신메일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'receiveNm',name:'수신자명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'subject',name:'제목',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'buyNo',name:'부품구매번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_MailCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'buyNo',name:'메일내용',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'발신메일',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fixWrkPl'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_MailContents',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.partmgnt.partbuyproc.RetrievePartsBuyingRequestManagementCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_eq420","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_eq420","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_fixWrkPl',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_fixWrkPl',target:'data:json,{"id":"ds_fixWrkPl","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_fixWrkPl_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_update',action:'/ps.eq.partmgnt.partbuyproc.UpdateBuyingRequestOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_eq420","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveMail',action:'/ps.eq.partmgnt.partbuyproc.RetrievePartsBuyingRequestMailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_MailCond","key":"IN_DS1"},{"id":"ds_MailContents","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_MailContents","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_sendMail',action:'/ps.eq.partmgnt.partbuyproc.SendPartsBuyingRequestMailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_sendMail","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/js/rc/rccommon.js',type:'text/javascript',scopeVariable:'rccommon'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p); // 세션 정보를 가지고 온다.

scwin.onpageload = function () {
  ed_status.hide();
  const codeOptions = [{
    grpCd: "EQ026",
    compID: "lc_buyCls,gr_eq420:buyClsCd"
  }, {
    grpCd: "EQ902",
    compID: "gr_eq420:stsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  const param = [{
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retriveHomeClsList",
    compID: "lc_homeClsCd"
  }, {
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retrievePartBuyStatus",
    compID: "acb_stsCd"
  }];
  $c.data.setGauceUtil($p, param);
};

//-------------------------------------------------------------------------
// UDC 로딩 완료 후
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.f_defaultValue();
  ica_dtFrom.setValue($c.date.getServerDateTime($p, "yyyyMM") + "01");
  ica_dtTo.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  //cfDisableObjects와 비슷한 형태로, 오브젝트의 값을 초기화시킨다.
  $c.gus.cfInitObjects($p, [ed_clntNo, ed_clntNm]);
  $c.gus.cfDisableObjects($p, [btn_detail]);
  acb_inDtCls.setSelectedIndex(0);
  lc_homeClsCd.setValue(scwin.memJson.eqHomeClsCd); //정비소속구분코드

  if (scwin.memJson.eqHomeClsCd === "null") {
    lc_homeClsCd.setSelectedIndex(0);
  }
  scwin.f_RetrieveFixWrkPl(lc_homeClsCd.getValue());
  lc_homeClsCd.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 필수입력항목 체크
  let ret = await $c.gus.cfValidate($p, [lc_homeClsCd, lc_fixWrkPlCd, acb_inDtCls, ica_dtFrom, ica_dtTo]);
  if (!ret) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_dtFrom.getValue(), ica_dtTo.getValue())) {
    await $c.win.alert($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ica_dtFrom.focus();
    return;
  }
  dma_search.set("dtFrom", ica_dtFrom.getValue().substring(0, 6) + "01");
  dma_search.set("dtTo", ica_dtTo.getValue());
  dma_search.set("status", "request");
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = async function () {
  // 팝업화면에, key값인 "정비작업장코드,구매번호,선입고여부" 를 넘겨준다.
  let valueObject = {
    create: true,
    // 신규/상세 구분
    fixWrkPlCd: lc_fixWrkPlCd.getValue() // 정비작업장코드
  };
  const options = {
    id: "eq_420_01_07p",
    popupName: "부품구매요청등록",
    width: 1400,
    height: 600
  };
  let result = await $c.win.openPopup($p, "/ui/ps/eq/partmgnt/partbuyproc/eq_420_01_07p.xml", options, valueObject);
  result = "RETRIEVE";

  // 다시 조회함
  if (result === "RETRIEVE") {
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 상세
//-------------------------------------------------------------------------
scwin.f_Detail = async function () {
  if (ds_eq420.getRowPosition() >= 0) {
    // 팝업화면에, key값인 "정비작업장코드,구매번호,선입고여부" 를 넘겨준다.
    let valueObject = {
      create: false,
      // 신규/상세 구분
      fixWrkPlCd: ds_eq420.getCellData(ds_eq420.getRowPosition(), 'fixWrkPlCd'),
      //정비작업장코드
      buyNo: ds_eq420.getCellData(ds_eq420.getRowPosition(), 'buyNo'),
      //구매번호
      stsCd: ds_eq420.getCellData(ds_eq420.getRowPosition(), 'stsCd'),
      //상태
      taxnCls: ds_eq420.getCellData(ds_eq420.getRowPosition(), 'taxnCls'),
      //일반과세
      buyReqDt: ds_eq420.getCellData(ds_eq420.getRowPosition(), 'buyReqDt'),
      //구매요청일자
      inReqDt: ds_eq420.getCellData(ds_eq420.getRowPosition(), 'inReqDt'),
      //입고입고요청일자
      clntNo: ds_eq420.getCellData(ds_eq420.getRowPosition(), 'clntNo'),
      //거래처코드
      clntNm: ds_eq420.getCellData(ds_eq420.getRowPosition(), 'clntNm') //거래처명
    };
    const options = {
      id: "eq_420_01_07p_detail",
      popupName: "부품구매요청등록",
      width: 1400,
      height: 600
    };
    let result = await $c.win.openPopup($p, "/ui/ps/eq/partmgnt/partbuyproc/eq_420_01_07p.xml", options, valueObject);
    result = "RETRIEVE";

    // 다시 조회함
    if (result === "RETRIEVE") {
      scwin.f_Retrieve();
    }
  } else {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_056, ["Row"]));
  }
};

//------------------------------------------------------------------------
// [작업장 콤보 조회] 소속 구분에 따른 작업장 리스트 콤보 변경 ( 조회조건 LuxCombo )
//------------------------------------------------------------------------
scwin.f_RetrieveFixWrkPl = function (homeClsCd) {
  const params = {
    sysCd: "PsCommonEBC",
    queryId: "retriveWrkplList",
    param1: homeClsCd
  };

  //데이터셋에 정보설정
  dma_fixWrkPl.setJSON(params);
  $c.sbm.execute($p, sbm_fixWrkPl);
};

//-------------------------------------------------------------------------
// 부품발주서발행
//-------------------------------------------------------------------------
scwin.f_partsOrderPublish = async function () {
  let fixWrkPlCd = ""; // 작업장코드
  let buyNo = ""; // 구매번호

  if (ds_eq420.getRowCount() === 0) {
    await $c.win.alert($p, "조회된 내용이 없습니다.");
    return;
  }
  let printCnt = 0;
  let updateCnt = 0;
  let reportDataList = [];
  for (let i = 0; i < ds_eq420.getRowCount(); i++) {
    if (ds_eq420.getCellData(i, "chk") === "1") {
      fixWrkPlCd = ds_eq420.getCellData(i, "fixWrkPlCd");
      buyNo = ds_eq420.getCellData(i, "buyNo");
      reportDataList.push({
        odiName: "eq_420_01_06p",
        reportName: "ps/eq/fixwrkmgnt/estmgnt/eq_420_01_06p.ozr",
        odiParam: {
          fixWrkPlCd,
          buyNo
        },
        viewerParam: {
          useprogressbar: false // 프로그레스바 쓸지 말지
        },
        formParam: {}
      });
      await $c.sbm.execute($p, sbm_update);
      updateCnt++;
    }
  }
  if (reportDataList.length === 0) {
    await $c.win.alert($p, "선택된 내역이 없습니다.");
    return;
  }
  if (cbx_previewCheck.getValue() == 0) {
    let opts = {
      type: 'print',
      // viewer, print, download
      viewerMode: 'print',
      printMode: 'silent' // silent, view
    };
    await $c.ext.openBatchOzReport($p, reportDataList, opts);
  } else if (cbx_previewCheck.getValue() == 1 && reportDataList.length == 1) {
    let opts = {
      type: 'viewer',
      // viewer, print, download
      printMode: 'silent' // silent, view
    };
    await $c.ext.openOzReport($p, reportDataList[0], opts);
  } else if (cbx_previewCheck.getValue() == 1 && reportDataList.length > 1) {
    let opts = {
      type: 'viewer',
      // viewer, print, download
      printMode: 'silent' // silent, view
    };
    await $c.ext.openOzReport($p, reportDataList[0], opts);
    reportDataList.shift();
    let opts2 = {
      type: 'print',
      // viewer, print, download
      viewerMode: 'print',
      printMode: 'silent' // silent, view
    };
    await $c.ext.openBatchOzReport($p, reportDataList, opts2);
  }
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
  ed_status.setValue("request");
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 거래처 팝업			
      rtnList = await udc_fixClntList.cfCommonPopUp(scwin.udc_fixClntList_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};
scwin.udc_fixClntList_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode === null || isCode === true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  }
  // inObj가 코드명 필드일 경우 팝업
  else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 발주내역 이메일 전송.
//-------------------------------------------------------------------------
scwin.f_SendMail = async function () {
  let chk = 0;
  let chkCount = 0;
  let mailCls = "";
  for (let j = 0; j < ds_eq420.getRowCount(); j++) {
    chk = ds_eq420.getCellData(j, "chk");
    if (chk === "1") {
      mailCls = gr_eq420.getCellDisplayData(j, "emailSendDtm");
      if (mailCls === "Y") {
        if (!(await $c.win.confirm($p, `${j + 1}행은 이미 메일이 전송되었습니다. 다시 전송하시겠습니까?`))) {
          return;
        }
      }
      chkCount++;
    }
  }

  // 메일 전송 여부 체크
  if (chkCount === 0) {
    await $c.win.alert($p, "메일전송 내역을 선택해 주세요.");
    return;
  } else {
    if (!(await $c.win.confirm($p, "Email을 발송하시겠습니까?"))) {
      return;
    }
  }
  let mailCount = 0; // 메일 성공 카운트
  for (let i = 0; i < ds_eq420.getRowCount(); i++) {
    chk = ds_eq420.getCellData(i, "chk");
    if (chk === "1") {
      if (ds_eq420.getCellData(i, "clntEmail") == null || ds_eq420.getCellData(i, "clntEmail") == "") {
        await $c.win.alert($p, `${i + 1}행의 거래처 메일주소가 존재하지 않습니다.`);
        return;
      }
      if (ds_eq420.getCellData(i, "buyPicEmail") == null || ds_eq420.getCellData(i, "buyPicEmail") == "") {
        await $c.win.alert($p, `${i + 1}행의 담당자 메일주소가 존재하지 않습니다.`);
        return;
      }
      dma_MailCond.set("buyNo", ds_eq420.getCellData(i, "buyNo"));
      dma_MailCond.set("fixWrkPlCd", ds_eq420.getCellData(i, "fixWrkPlCd"));
      await $c.sbm.execute($p, sbm_retrieveMail);
      let mailContent = scwin.f_MailSet(i);
      dma_sendMail.set("cntn", rccommon.RcfReplaceContents(mailContent));
      await $c.sbm.execute($p, sbm_sendMail);
      mailCount++;
    }
  }
  if (mailCount === chkCount) {
    await $c.win.alert($p, "성공적으로 메일을 전송하였습니다.");
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 발주내역 이메일 전송. 
//-------------------------------------------------------------------------
scwin.f_MailSet = function (row) {
  let cntn = "";
  let clntNm = ds_eq420.getCellData(row, "clntNm");
  let buyPicNm = ds_eq420.getCellData(row, "buyPicNm");
  let buyPicEmail = ds_eq420.getCellData(row, "buyPicEmail");
  let buyPicTel = ds_eq420.getCellData(row, "buyPicTel");
  let tempReqDt = ds_eq420.getCellData(row, "buyReqDt") == null ? "" : ds_eq420.getCellData(row, "buyReqDt");
  let reqDt = tempReqDt.substring(0, 4) + "." + tempReqDt.substring(4, 6) + "." + tempReqDt.substring(6, 8);
  let tempInDt = ds_eq420.getCellData(row, "inReqDt");
  let inDt = tempInDt.substring(0, 4) + "." + tempInDt.substring(4, 6) + "." + tempInDt.substring(6, 8);
  let telNo = ds_eq420.getCellData(row, "buyPicTel");
  cntn += "<table cellpadding='0' cellspacing='0' border='0' width='700'>";
  cntn += " <tr valign='top'> ";
  cntn += "  <td style='padding:5px 0 5px 15px'> ";
  cntn += "  <!-- 메일 내용 --> ";
  cntn += "  <table cellpadding='0' cellspacing='0' border='0' width='700'> ";
  cntn += "   <tr style='font-size:15px;font-weight:bold;color:#5C5C5C'> ";
  cntn += "    <td>";
  cntn += "     수  신   : " + clntNm + "<br/>";
  cntn += "     발  신   : 동원로엑스 <br/>";
  cntn += "     발신자   : " + buyPicNm + " " + buyPicTel + " " + buyPicEmail + "<br/>";
  cntn += "     제  목   : 부품발주의 건<br/>";
  cntn += "     발주일   : " + reqDt + "<br/>";
  cntn += "     입고일   : " + inDt + "<br/>";
  cntn += "     결제방법 : 당사 지급 조건<br/>";
  cntn += "     입고처   : 당사 지정처";
  cntn += "    </td>";
  cntn += "   </tr>";
  cntn += "   <tr><td height='10'></td></tr>";
  cntn += "   <tr style='font-size:15px;font-weight:bold;color:#5C5C5C'>";
  cntn += "    <td>";
  cntn += "     귀사의 무궁한 발전을 기원합니다.<br/>다음과 같이 정비부품을 발주하오니, 신속히 처리하여 주시기 바랍니다.<br/>";
  cntn += "    </td>";
  cntn += "   </tr>";
  cntn += "  </table>";
  cntn += "  <table cellpadding='0' cellspacing='0' border='0' width='700'> ";
  cntn += "   <tr><td height='10'></td></tr> ";
  cntn += "   <tr><td>";
  cntn += "    <table cellpadding='5' cellspacing='0' border='0' width='650'>";
  cntn += "     <tr height='30' style='font-size:15px;font-weight:bold;color:#5C5C5C'> ";
  cntn += "      <td colspan='3' align='left'>발주금액</td> ";
  cntn += "      <td colspan='3' align='right'>( " + $c.gus.cfInsertComma($p, ds_eq420.getCellData(row, "supplyUpr")) + " 원)</td> ";
  cntn += "      <td align='right'>VAT별도</td> ";
  cntn += "     </tr>";
  cntn += "    </table>";
  cntn += "   </td></tr>";
  cntn += "   <tr><td> ";
  cntn += "    <table cellpadding='5' cellspacing='0' border='1' width='650'> ";
  cntn += "     <tr height='30' align='center' style='font-size:15px;font-weight:bold;color:#5C5C5C'> ";
  cntn += "      <td>부품코드</td> ";
  cntn += "      <td>부품명</td> ";
  cntn += "      <td>수량</td> ";
  cntn += "      <td>단위</td> ";
  cntn += "      <td>단가</td> ";
  cntn += "      <td>금액</td> ";
  cntn += "      <td>비고</td> ";
  cntn += "     </tr> ";
  for (let i = 0; i < ds_MailContents.getRowCount(); i++) {
    cntn += "     <tr height='25' style='font-size:12px;font-weight:bold;color:#5C5C5C'> ";
    cntn += "      <td align='left'>" + ds_MailContents.getCellData(i, "partCd") + "</td> ";
    cntn += "      <td align='left'>" + ds_MailContents.getCellData(i, "partNm") + "</td> ";
    cntn += "      <td align='right'>" + ds_MailContents.getCellData(i, "inQty") + "</td> ";
    cntn += "      <td align='center'>" + ds_MailContents.getCellData(i, "unitNm") + "</td> ";
    cntn += "      <td align='right'>" + $c.gus.cfInsertComma($p, ds_MailContents.getCellData(i, "inUpr")) + "</td> ";
    cntn += "      <td align='right'>" + $c.gus.cfInsertComma($p, ds_MailContents.getCellData(i, "inAmt")) + "</td> ";
    cntn += "      <td></td> ";
    cntn += "     </tr> ";
  }
  cntn += "    </table> ";
  cntn += "   </td></tr> ";
  cntn += "   <tr><td height='10'></td></tr> ";
  cntn += "   <tr style='font-size:15px;font-weight:bold;color:#5C5C5C'><td> ";
  cntn += "    감사합니다. ";
  cntn += "   </td></tr></table>";
  cntn += "<!-- 메일 내용 END --> ";
  dma_sendMail.set("sendMail", buyPicEmail);
  dma_sendMail.set("sendNm", buyPicNm);
  dma_sendMail.set("receiveMail", ds_eq420.getCellData(row, "clntEmail"));
  dma_sendMail.set("receiveNm", clntNm);
  dma_sendMail.set("fixWrkPlCd", ds_eq420.getCellData(row, "fixWrkPlCd"));
  dma_sendMail.set("buyNo", ds_eq420.getCellData(row, "buyNo"));
  dma_sendMail.set("subject", "부품발주의 건 (" + inDt + ")");
  return cntn;
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  const options = {
    fileName: '부품구매요청목록.xlsx',
    sheetName: '부품구매요청목록',
    columnMove: true,
    columnMoveWithFooter: true
  };
  gr_eq420.setFooterStyle("column69", "text-align", "left");
  $c.data.downloadGridViewExcel($p, gr_eq420, options);
  gr_eq420.setFooterStyle("column69", "text-align", "center");
};
scwin.decodePrtYn = function (data) {
  return $c.gus.decode($p, data, "1", "Y", "N");
};
scwin.decodeEmailSendDtm = function (data) {
  return $c.gus.decode($p, data, "", "N", "Y");
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_eq420.getRowCount();
  if (rowCnt === 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    //Objects Control
    $c.gus.cfEnableObjects($p, [btn_create]);
  } else {
    totalRows.setValue(rowCnt);
    //Objects Control -- 조회건수가 있을때만 상세버튼 enable
    $c.gus.cfEnableObjects($p, [btn_create, btn_detail]);
    gr_eq420.setFocusedCell(0, 2);
  }
};
scwin.lc_homeClsCd_onchange = function (info) {
  let luxIndex = lc_homeClsCd.getValue();
  scwin.f_RetrieveFixWrkPl(luxIndex);
};
scwin.sbm_fixWrkPl_submitdone = function (e) {
  lc_fixWrkPlCd.setValue(scwin.memJson.fixWrkPlCd); // 정비작업장코드

  if (lc_fixWrkPlCd.getSelectedIndex() === -1) {
    lc_fixWrkPlCd.setSelectedIndex(0);
  }
};
scwin.udc_fixClntList_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 1, true);
};
scwin.udc_fixClntList_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 1, false);
};
scwin.udc_fixClntList_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_waitVehcl_onclick = function (e) {
  scwin.f_partsOrderPublish();
};
scwin.btn_sendMail_onclick = function (e) {
  scwin.f_SendMail();
};
scwin.btn_create_onclick = function (e) {
  scwin.f_Create();
};
scwin.btn_detail_onclick = async function (e) {
  if (ds_eq420.getRowPosition() != null) {
    scwin.f_Detail();
  } else {
    await $c.win.alert($p, "목록을 선택해주세요.");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 150px;',submenuSize:'fixed',objType:'data',mandatory:'true',validExp:'소속:yes',title:'소속',ref:'data:dma_search.homeClsCd','ev:onchange':'scwin.lc_homeClsCd_onchange'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixWrkPlCd',style:'width: 150px;',submenuSize:'fixed',objType:'key',mandatory:'true',ref:'data:dma_search.wrkPlCd',title:'작업장',visibleRowNum:'25'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_fixWrkPl'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'',selectID:'retrieveFixClntList',style:'',validTitle:'거래처',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',UpperFlagCode:'1',objTypeName:'data',mandatoryName:'false',btnId:'btn_clnt',id:'udc_fixClntList','ev:onblurCodeEvent':'scwin.udc_fixClntList_onblurCodeEvent',code:'clntCd',refDataCollection:'dma_search','ev:onclickEvent':'scwin.udc_fixClntList_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_fixClntList_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'acb_inDtCls',search:'start',style:'width:150px;',submenuSize:'fixed',allOption:'',chooseOption:'',ref:'data:dma_search.inDtCls',objType:'key',mandatory:'true',title:'구매예정일자'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'구매예정일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'입고예정일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'입고일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'dtFrom',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar2',refEdDt:'dtTo',class:'',edFromId:'ica_dtFrom',objTypeFrom:'key',mandatoryFrom:'true',edToId:'ica_dtTo',objTypeTo:'key',mandatoryTo:'true',objTypeBtn:'data'}}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구매구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_buyCls',style:'width: 150px;',submenuSize:'fixed',objType:'data',chooseOptionLabel:'전체',ref:'data:dma_search.buyCls',title:'구매구분',visibleRowNum:'25',displayMode:'value delim label'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_stsCd',search:'start',style:'width:150px;',submenuSize:'fixed',objType:'data',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.stsCd',title:'상태'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'부품구매요청목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_eq420',gridDownFn:'scwin.f_Excel',btnUser:'Y',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_eq420',id:'gr_eq420',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true',columnMove:'true',rowStatusVisible:'true',rowStatusWidth:'20',columnMoveWithFooter:'true',fixedColumn:'4',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'h_chk',displayMode:'label',fixColumnWidth:'true',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'정비작업장',width:'120',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'구매번호',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'거래처',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'거래처명',width:'150',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'입고</br>예정일자',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'입고일자',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',value:'구매구분',width:'120',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',value:'공급가',width:'120',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column44',value:'부가세',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column40',value:'합계',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column42',value:'상태',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column46',value:'상태',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column54',value:'발주서<br/>발행',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column52',value:'메일<br/>전송',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column50',value:'메일',displayMode:'label',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'chk',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlCd',inputType:'text',width:'120',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'buyNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'150',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inReqDt',inputType:'text',width:'100',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd',allowChar:'0-9',dateValidCheck:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inDt',inputType:'text',width:'100',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd',allowChar:'0-9',dateValidCheck:'true'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'buyClsCd',inputType:'select',width:'120',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'supplyUpr',inputType:'text',width:'120',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'vatAmt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'ttl',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',expression:'Number(display("supplyUpr")) + Number(display("vatAmt"))',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'stsCd',displayMode:'value delim label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'stsNm',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'prtYn',displayMode:'label',readOnly:'true',displayFormatter:'scwin.decodePrtYn'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'emailSendDtm',displayMode:'label',readOnly:'true',displayFormatter:'scwin.decodeEmailSendDtm'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntEmail',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column71',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column70',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column68',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column67',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column64',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column63',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum("supplyUpr")',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column62',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("vatAmt")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column61',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("ttl")'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column59',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column58',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column56',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_waitVehcl',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.btn_waitVehcl_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부품발주서발행'}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_sendMail',type:'button',class:'btn',userAuth:'C',objType:'bSave','ev:onclick':'scwin.btn_sendMail_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이메일발송'}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0',value:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_create',type:'button',class:'btn link white',userAuth:'C','ev:onclick':'scwin.btn_create_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_detail',type:'button',class:'btn link white',userAuth:'U','ev:onclick':'scwin.btn_detail_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상세'}]}]}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_status',style:'width:150px;visibility:hidden;',objType:'data',maxlength:'9',readOnly:'true',ref:'data:dma_search.status'}}]}]}]}]}]})