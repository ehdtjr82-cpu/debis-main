/*amd /ui/tn/op/transwrkindict/cntr/tn_304_01_09b.xml 41654 8e7ba54b719a0e6f918b3a717cda30d7218f57c201f6fa9fb02aa0e9ac35d201 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptIntendDd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptIntendDd2',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'noClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrOdrNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrWrkKndCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userId',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryClsCd',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlNm',name:'name11',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'V',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'청구화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorNm',name:'DOOR명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrInfo',name:'CNTR',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortNo',name:'차량단축',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassShortNo',name:'샤시단축',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisEqCd',name:'샤시EQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdmaNo',name:'CDMA NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkShapeCd',name:'ON/BOB',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pdaYn',name:'PDA',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndHpNo',name:'보내는사람핸드폰번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'ODR_NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'작업물류점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'Size',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'Typ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qryClsCd',name:'운송구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'SEAL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weight',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totCnt',name:'회수대기건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnt',name:'지시건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'statCnt',name:'시대기건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'txa_odrRmk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRmk',name:'txa_transRmk',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.op.transwrkindict.cntr.RetriveCntrRetrievalTransWrkIndictCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.tn.op.transwrkindict.cntr.SaveCntrRetrievalTransWrkIndictCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_results","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',type:'text/javascript',scopeVariable:'DsConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.nowDt = $c.date.getServerDateTime($p);
scwin.afterSaveRetrieveYN = "YES";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = async function () {
  let memJson = $c.data.getMemInfo($p);
  scwin.sUserId = $c.data.getMemInfo($p, "userId");
  scwin.sLoUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd");
  scwin.params = $c.data.getParameter($p);
  scwin.lobranCd = scwin.params.lobranCd == null ? "" : scwin.params.lobranCd;
  scwin.odrNo = scwin.params.odrNo == null ? "" : scwin.params.odrNo;
  scwin.wrkStDt = scwin.params.wrkStDt == null ? "" : scwin.params.wrkStDt;
  scwin.wrkEndDt = scwin.params.wrkEndDt == null ? "" : scwin.params.wrkEndDt;
  scwin.cntrNo = scwin.params.cntrNo == null ? "" : scwin.params.cntrNo;
  scwin.strGu = scwin.params.strGu == null ? "" : scwin.params.strGu;
  const utilOptions = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "acb_lc_lobranCd"
  }];
  await $c.data.setGauceUtil($p, utilOptions, function () {
    if (scwin.lobranCd == "") {
      acb_lc_lobranCd.setValue(scwin.sLoUpperLobranCd);
    } else {
      acb_lc_lobranCd.setValue(scwin.lobranCd);
    }
  });
  acb_lc_qryClsCd.setValue("0002");
  if (scwin.strGu == "S") {
    if (scwin.wrkStDt != "" && scwin.wrkStDt != null) {
      if (scwin.wrkEndDt != "" && scwin.wrkEndDt != null) {
        em_dptIntendDd.setValue(scwin.wrkStDt);
        em_dptIntendDd2.setValue(scwin.wrkEndDt);
        scwin.btn_retrieve_onclick();
      }
    }
  }
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  if (scwin.wrkStDt == "") {
    udc_dptIntendDd.setInitDate(scwin.nowDt, scwin.nowDt);
  } else {
    udc_dptIntendDd.setInitDate(scwin.wrkStDt, scwin.wrkEndDt);
  }
  const codeOptions = [{
    grpCd: "OP196",
    compID: "acb_lc_cntrWrkKndCd,gr_results:cntrWrkShapeCd"
  } // ON/BOB
  ];
  $c.data.setCommonCode($p, codeOptions);
  acb_lc_cntrWrkKndCd.setDisabled(true);
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_condition, [acb_lc_lobranCd, em_dptIntendDd, em_dptIntendDd2]);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = function (e) {
  dma_search.set("userId", scwin.sUserId);
  if (!$c.gus.cfIsAfterDate($p, em_dptIntendDd.getValue(), em_dptIntendDd2.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    em_dptIntendDd.focus();
    return;
  }

  //tr_retrieve.Post();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (ds_results.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, "조회된 데이터가 없습니다.");
      return false;
    }

    // 조회 건수를 출력한다.
    totalRows.setValue(ds_results.getRowCount());
    gr_results.setFocusedCell(0, 0);
    var rowCount = ds_results.getRowCount();
    for (var i = 0; i < rowCount; i++) {
      scwin.fn_setChassisReadOnly(i); // 각 행마다 읽기전용 여부 설정
    }

    //gr_results.ColumnProp('vehclShortNo', 'Edit') =

    // 1. 현재 선택된 조건 값 가져오기
    var sQryClsCd = acb_lc_qryClsCd.getValue(); // 운송구분 (0002: 운송)
    var sCntrWrkKndCd = acb_lc_cntrWrkKndCd.getValue(); // ON/BOB 조건 값

    // 2. 조건 체크: 운송인데 ON/BOB 값이 설정되어 있는 경우
    // (가우스 소스상 0002일 때 비활성화되지만 값이 남아있는 경우를 타겟팅)
    if (sQryClsCd === "0002" && sCntrWrkKndCd !== "") {
      // 3. 데이터를 강제로 비움
      ds_results.removeAll();

      // 4. "조회된 데이터가 없습니다" 처리
      // 보통 alert을 띄우거나 그리드의 noResultMessage를 보여줍니다.
      $c.win.alert($p, "조회된 데이터가 없습니다.");

      // 하단 행 개수 표시가 있다면 초기화
      totalRows.setValue("0");
      return; // 로직 종료
    }

    // 5. 정상 조회 처리 (기존 로직)
    var rowCnt = ds_results.getRowCount();
    if (rowCnt === 0) {
      $c.win.alert($p, "조회된 데이터가 없습니다.");
    } else {
      totalRows.setValue(rowCnt);
    }
    "";
  }
};

/**
 * 샤시단축번호 셀의 편집 가능 여부를 설정하는 함수
 * @param {Number} rowIndex 대상 행 번호
 */
scwin.fn_setChassisReadOnly = function (rowIndex) {
  // 1. 데이터리스트에서 조건 값 추출
  var qryClsCd = ds_results.getCellData(rowIndex, "qryClsCd");
  var cntrWrkShapeCd = ds_results.getCellData(rowIndex, "cntrWrkShapeCd");
  var isReadOnly = false; // 기본은 편집 가능(false)

  // 2. 가우스의 decode 로직 적용
  // qryClsCd가 '0003'(회수)일 때, cntrWrkShapeCd가 'O'가 아니면 읽기 전용(true)
  if (qryClsCd === "0003") {
    if (cntrWrkShapeCd !== "O") {
      isReadOnly = true;
    }
  }

  // 3. 웹스퀘어 그리드 API로 적용 (컬럼ID: chassShortNo)
  gr_results.setCellReadOnly(rowIndex, "chassShortNo", isReadOnly);
};

// 데이터를 셋팅한 후 루프를 돌며 적용 예시
scwin.tr_retrieve_oncallback = function (e) {
  for (var i = 0; i < ds_results.getRowCount(); i++) {
    scwin.fn_setChassisReadOnly(i);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.btn_save_onclick = async function (e) {
  if (ds_results.getModifiedIndex().length == 0) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  var arryCnt = 0;
  for (var i = 0; i < ds_results.getRowCount(); i++) {
    if (ds_results.getCellData(i, "chk") == 1) {
      if (ds_results.getCellData(i, "pdaYn") == 0 || ds_results.getCellData(i, "vehclShortNo") == "") {
        $c.win.alert($p, "PDA 이용 차량이 아닙니다.");
        return;
      }
      if (acb_lc_qryClsCd.getValue() == "0002") {
        if (ds_results.getCellData(i, "chassShortNo") == "") {
          $c.win.alert($p, "샤시번호를 입력하세요.");
          return;
        }
      }
      arryCnt++;
    } else {}
  }
  if (arryCnt == 0) {
    $c.win.alert($p, "선택된 건이 없습니다.");
    return;
  }
  if (arryCnt > 1) {
    $c.win.alert($p, "1건만 선택할수 있습니다.");
    return;
  }
  scwin.afterSaveRetrieveYN = "YES"; //retrieveYn

  let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirm) {
    //저장하시겠습니까?
    //tr_save.Post();
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    if (scwin.afterSaveRetrieveYN == "YES") {
      //tr_retrieve.Post();
      $c.sbm.execute($p, sbm_retrieve);
    }
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 3:
      // 청구처
      udc_bilgClntNo.setSelectId('retrieveClntInfo_tpro');
      udc_bilgClntNo.cfCommonPopUp(scwin.udc_bilgClntNo_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "청구 거래처,청구 거래처코드/명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 5:
      //출발/도착 작업장 조회 - 코드/명 가져오기
      pCode = ed_dptWrkPlCd.getValue();
      pWtitleSearch = "작업지,작업장코드/명";
      pSelectID = "retrieveWrkPlInfo_tpro";
      pWhere = "";
      udc_dptWrkPlCd.setSelectId('retrieveWrkPlInfo_tpro');
      udc_dptWrkPlCd.cfCommonPopUp(scwin.udc_dptWrkPlCd2_callBackFunc,
      //pSelectID
      pCode,
      //pCode
      pCode,
      //pName
      pClose,
      //pWinCloseTF
      null,
      //pDispCnt
      null,
      //pTitle
      null,
      //pWidth
      null,
      //pHidden
      pWhere,
      //pWhere
      null,
      //pW
      null,
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF - 중복체크여부	("F")
      pAllSearch,
      //pAllSearchTF - 전체검색허용여부	("F")
      pWtitleSearch,
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      "F",
      //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      null);
      break;
    case 8:
      // 출발작업장 코드팝업
      pWhere = ",,,,,,," + ed_dptWrkPlNm.getValue();
      udc_dptWrkPlCd.setSelectId('retrieveWrkPlInfo_tpro');
      udc_dptWrkPlCd.cfCommonPopUp(scwin.udc_dptWrkPlCd_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "도착지,도착지코드/명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    default:
      break;
  }
};
scwin.udc_bilgClntNo_onblurCodeEvent = function (e) {
  //f_chkOpenCommonPopUp(this, txt_bilgClntNm, 3, true);
};
scwin.udc_bilgClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_bilgClntNo.getValue().toUpperCase(), txt_bilgClntNm.getValue().toUpperCase(), 'T', 'F');
};
scwin.udc_bilgClntNo_callBackFunc = function (rtnList) {
  if (rtnList.length <= 1 || rtnList[0] == "N/A") {
    ed_bilgClntNo.setValue("");
    txt_bilgClntNm.setValue("");
    return;
  }
  ed_bilgClntNo.setValue(rtnList[0]);
  txt_bilgClntNm.setValue(rtnList[1]);
};
scwin.udc_dptWrkPlCd_onblurCodeEvent = function (e) {
  //f_beforeOpenCommonPopUpEd(ed_dptWrkPlNm, this, 5, 'DPT', 'T', 'F');
  //f_beforeOpenCommonPopUpEd(nmObj, cdObj, gubun1, gubun2, pWinCloseTF, pAllSearchTF)
  //f_openCommonPopUp2( gubun1, gubun2, pWinCloseTF, pAllSearchTF, 'F' );
};
scwin.udc_dptWrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(8, ed_dptWrkPlCd.getValue().toUpperCase(), 'F', 'T', 'F');
};
scwin.udc_dptWrkPlCd_callBackFunc = function (rtnList) {
  if (rtnList.length <= 1 || rtnList[0] == "N/A") {
    ed_dptWrkPlCd.setValue("");
    ed_dptWrkPlNm.setValue("");
    return;
  }
  ed_dptWrkPlCd.setValue(rtnList[0]);
  ed_dptWrkPlNm.setValue(rtnList[1]);
};
scwin.udc_dptWrkPlCd2_callBackFunc = function (rtnList) {
  //cfSetReturnValue(rtnList, ed_dptWrkPlCd, ed_dptWrkPlNm);
  if (rtnList != null) {
    scwin.f_openCommonPopUp(10, 'DPT_ZIP', 'T', 'F', 'F');
  }
};

//-------------------------------------------------------------------------
// 그리드에서 입력된 코드/명칭 정보로  조회 (Grid PopUp)
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = function (disGubun, row, pClose) {
  // 선언부
  var pCode = "";
  var pName = "";
  switch (disGubun) {
    case 2:
      pCode = ds_results.getCellData(row, "chassShortNo");
      udc_comCodeGrid.setSelectId('retrieveChassisNo_tpro');
      udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는  컬럼 지정
      , 'C' // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의  사용자 정의 폭
      , null // POP-UP뛰을때 우도우의  사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , 'F' // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};
scwin.udc_comCodeGrid_callBackFunc = function (rtnList) {
  //cfSetGridReturnValue(rtnList, ds_results, row, "chassShortNo", "");
  let row = ds_results.getRowPosition();
  if (rtnList.length <= 1 || rtnList[0] == "N/A") {
    ds_results.setCellData(row, "chassShortNo", "");
    return;
  }
  ds_results.setCellData(row, "chassisEqCd", rtnList[4]);
  //ds_results.setCellData(row,"chassisKndCd", rtnList[2]);
  ds_results.setCellData(row, "chassShortNo", rtnList[0]);
  scwin.f_checkChasisNo(row);
  var vOdrNo = ds_results.getCellData(row, "odrNo");
  var vCntrSeq = ds_results.getCellData(row, "cntrSeq");
  var vChassisEqCd = ds_results.getCellData(row, "chassisEqCd");
  //var vChassisKndCd = ds_results.getCellData(row, "chassisKndCd");
  var vChassShortNo = ds_results.getCellData(row, "chassShortNo");

  /*
  for(var i = 0; i < ds_results.getRowCount(); i++) {
      if(vOdrNo == ds_results.getCellData(i, "odrNo") && vCntrSeq == ds_results.getCellData(i, "cntrSeq")) {
          ds_results.setCellData(i, "chassisEqCd", vChassisEqCd);
          //ds_results.setCellData(i, "chassisKndCd", vChassisKndCd);
          ds_results.setCellData(i, "chassShortNo", vChassShortNo);
      }
  }
  */
};

//-------------------------------------------------------------------------
// function name : f_checkChasisNo
// function desc : 샤시번호 1111 체크
//------------------------------------------------------------------------- 
scwin.f_checkChasisNo = function (row) {
  if (ds_results.getCellData(row, "posnClsCd") == "W" || ds_results.getCellData(row, "posnClsCd") == "J") {
    var vOdrNo = ds_results.getCellData(row, "odrNo");
    var vCntrSeq = ds_results.getCellData(row, "cntrSeq");
    if (ds_results.getCellData(row, "chassShortNo") == "1111") {
      $c.win.alert($p, "위수탁/자차인경우 샤시가 1111 올수가 없습니다. TR에 지정된 TL을 입력하세요");
      ds_results.setCellData(row, "chassShortNo", "");
      ds_results.setCellData(row, "chassisEqCd", "");
      //ds_results.setCellData(row, "chassisKndCd", "");

      for (var i = 0; i < ds_results.getRowCount(); i++) {
        if (vOdrNo == ds_results.getCellData(i, "odrNo") && vCntrSeq == ds_results.getCellData(i, "cntrSeq")) {
          ds_results.setCellData(i, "chassShortNo", "");
          //ds_results.setCellData(i, "chassisEqCd", "");
          //ds_results.setCellData(i, "chassisKndCd", "");
        }
      } //for
    }
  } //if
};
scwin.gr_results_ontextimageclick = function (rowIndex, columnIndex) {
  let colid = gr_results.getColumnID(columnIndex);
  switch (colid) {
    case "vehclShortNo":
      scwin.f_retrieveVehclInGrid();
      break;
    case "chassShortNo":
      scwin.f_openCommPopUpGrid(2, rowIndex, 'T');
      break;
    case "dcScNm":
      //scwin.f_dcScSearch();  // ASIS 에 없음.
      break;
    // case "cntrNo":
    // 	scwin.f_openCommPopUpGrid(1, rowIndex, 'T');
    // 	break;
  }
};

//-------------------------------------------------------------------------
// function name : f_retrieveVehclInGrid
// function desc : 그리드의 차량 조회시 연결
//-------------------------------------------------------------------------
scwin.f_retrieveVehclInGrid = function () {
  var row = ds_results.getRowPosition();
  var data = {
    vehclShortNo: ds_results.getCellData(row, "vehclShortNo"),
    whereAreYouFrom: "T",
    callbackFn: scwin.f_retrieveVehclInGrid_callBackFunc
  };
  var opts = {
    id: "smpPop",
    popupName: "차량정보",
    modal: true,
    type: "browserPopup" //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    ,
    title: "Win pop" //Layer pop
    ,
    width: 1210,
    height: 700
  };
  $c.win.openPopup($p, "/ui/tn/op/transwrkindict/cntr/tn_304_01_05p.xml", opts, data);
};
scwin.f_retrieveVehclInGrid_callBackFunc = function (rtnList) {
  var unCheckedRow = ds_results.getRowPosition();
  if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
    ds_results.setCellData(unCheckedRow, "vehclShortNo", rtnList[0]);
    ds_results.setCellData(unCheckedRow, "vehclNo", rtnList[1]);
    ds_results.setCellData(unCheckedRow, "chassShortNo", rtnList[14]);
    if (rtnList[19] == 1) {
      ds_results.setCellData(unCheckedRow, "pdaYn", 1);
      ds_results.setCellData(unCheckedRow, "cdmaNo", rtnList[20]);
    } else {
      ds_results.setCellData(unCheckedRow, "pdaYn", 0);
      ds_results.setCellData(unCheckedRow, "cdmaNo", "");
    }
  } else {
    ds_results.undoRow(unCheckedRow);
    return false;
  }
};

/* 컨테이너상세ETC 화면으로 이동하기 */
scwin.f_openPopUpUpdateCntrInfoEtc = function () {
  var arrParam = new Array(1);
  arrParam[0] = ds_results.getCellData(ds_results.getRowPosition(), "lineCd").trim(); //라인번호
  arrParam[1] = acb_lc_lobranCd.getValue(); //배차점소
  arrParam[2] = em_dptIntendDd.getValue(); //출발예정일from
  arrParam[3] = em_dptIntendDd2.getValue(); //출발예정일to
  arrParam[4] = ds_results.getCellData(ds_results.getRowPosition(), "cntrWrkShapeCd").trim(); //ON-GROUND/BOB 구분
  arrParam[5] = acb_lc_qryClsCd.getValue(); //운송구분
  arrParam[6] = ds_results.getCellData(ds_results.getRowPosition(), "odrNo").trim();
  var data = {
    arrParam: arrParam,
    callbackFn: scwin.f_openPopUpUpdateCntrInfoEtc_callBackFunc
  };
  var opts = {
    id: "smpPop",
    popupName: "",
    modal: true,
    type: "browserPopup" //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    ,
    title: "Win pop" //Layer pop
    ,
    width: 600,
    height: 400
  };

  //window.showModalDialog("/tn/op/transwrkindict/cntr/tn_304_01_09p.jsp",arrParam,"dialogWidth:600px; dialogHeight:400px; status:No");
  $c.win.openPopup($p, "/ui/tn/op/transwrkindict/cntr/tn_304_01_09p.xml", opts, data);
};
scwin.f_openPopUpUpdateCntrInfoEtc_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    ds_results.setCellData(ds_results.getRowPosition(), "cntrNo", rtnList[0]); //컨테이너번호
    ds_results.setCellData(ds_results.getRowPosition(), "cntrSizCd", rtnList[1]); //컨테이너사이즈
    ds_results.setCellData(ds_results.getRowPosition(), "cntrTypCd", rtnList[2]); //컨테이너타입
    ds_results.setCellData(ds_results.getRowPosition(), "odrWrkPathSeq", rtnList[3]); //컨테이너경로순번
    ds_results.setCellData(ds_results.getRowPosition(), "odrWrkStpSeq", rtnList[4]); //컨테이너작업단계순번
    ds_results.setCellData(ds_results.getRowPosition(), "weight", rtnList[5]); //중량
    ds_results.setCellData(ds_results.getRowPosition(), "odrNo", rtnList[6]); //오더번호
    ds_results.setCellData(ds_results.getRowPosition(), "transWrkIndictNo", rtnList[7]); //작업지시번호
    ds_results.setCellData(ds_results.getRowPosition(), "sealNo", rtnList[8]); //SEAL NO

    /*
    if(rtnList[0] == "N/A" && rtnList[1] == "Y") {
    	scwin.btn_retrieve_onclick();
    	
    	//탭선택시 재조회
       	//parent.iFrame1.hid_chkReterieve.value = "";
    }
    */
  }
};
scwin.gr_results_oncellclick = function (rowIndex, columnIndex, columnId) {
  let colid = gr_results.getColumnID(columnIndex);
  if (colid == "combine") {
    if (ds_results.getCellData(rowIndex, "combine") == 1) {
      if (ds_results.getCellData(rowIndex, "cmpstcrgNo") != "") {
        $c.win.alert($p, "컨테이너" + ds_results.getCellData(rowIndex, "cntrNo") + "는 이미 combine된 컨테이너입니다.");
        ds_results.undoRow(rowIndex);
        return false;
      }
    }
  }
  var v_odrNo = ds_results.getCellData(rowIndex, "odrNo");
  var v_cntrSeq = ds_results.getCellData(rowIndex, "cntrSeq");
  var v_chk = ds_results.getCellData(rowIndex, "chk");
};
scwin.gr_results_onafteredit = function (rowIndex, columnIndex, value) {
  let row = rowIndex;
  let colid = gr_results.getColumnID(columnIndex);
  switch (colid) {
    case "vehclShortNo":
      if (ds_results.getCellData(row, "vehclShortNo") == "") {
        ds_results.setCellData(row, "vehclShortNo", "");
        ds_results.setCellData(row, "vehclNo", "");
        ds_results.setCellData(row, "vehclClntNo", "");
        ds_results.setCellData(row, "vehclClntNm", "");
        ds_results.setCellData(row, "drvNm", "");
        ds_results.setCellData(row, "mpNo", "");
        ds_results.setCellData(row, "eqCd", "");
        ds_results.setCellData(row, "chassShortNo", "");
        ds_results.setCellData(row, "chassisEqCd", "");
        ds_results.setCellData(row, "chassisKndCd", "");
      } else {
        scwin.f_retrieveVehclInGrid();
      }
      break;
    case "chassShortNo":
      if (ds_results.getCellData(row, "chassShortNo") != "") {
        scwin.f_openCommPopUpGrid(2, row, 'T');
      }
      break;
    // case "cntrNo": 
    // 	scwin.f_openCommPopUpGrid(1, row, 'T');
    // 	break;
    case "cntrWrkShapeCd":
      if (acb_lc_qryClsCd.getValue() == "0002") {} else {
        $c.win.alert($p, "DOOR운송 단계만 선택할 수 있습니다.");
        $c.data.undoRow($p, ds_results, "Y");
        return false;
      }
      break;
  }
};

/* 운송구분 선택 시 */
scwin.acb_lc_qryClsCd_onchange = function (info) {
  if (acb_lc_qryClsCd.getValue() == "0002") {
    acb_lc_cntrWrkKndCd.setDisabled(true); //Enable = false;
  } else {
    acb_lc_cntrWrkKndCd.setDisabled(false); //Enable = true;
  }
};

/* 선택에 따른 그리드 데이터 필터링 */
scwin.f_onFilter = function () {
  var v_ret = true;
  var condition = "";

  //ON/BOB 필터링
  if (acb_lc_cntrWrkKndCd.getValue() != "") {
    if (acb_lc_cntrWrkKndCd.getValue() == DsConstants.CNTR_WRK_KND_CD_BOBTAIL) {
      //&& ds_results.getCellData(row, "cntrWrkShapeCd") != DsConstants.CNTR_WRK_KND_CD_BOBTAIL ) {
      condition = "cntrWrkShapeCd == '" + DsConstants.CNTR_WRK_KND_CD_BOBTAIL + "'";
      ds_results.removeColumnFilterAll();
      $c.data.dataListFilter($p, ds_results, condition);
      return false;
    } else if (acb_lc_cntrWrkKndCd.getValue() == DsConstants.CNTR_WRK_KND_CD_ONGROUND) {
      //&& ds_results.getCellData(row, "cntrWrkShapeCd") != DsConstants.CNTR_WRK_KND_CD_ONGROUND ) {
      condition = "cntrWrkShapeCd == '" + DsConstants.CNTR_WRK_KND_CD_ONGROUND + "'";
      ds_results.removeColumnFilterAll();
      $c.data.dataListFilter($p, ds_results, condition);
      return false;
    }
  }
  return v_ret;
};
scwin.acb_lc_cntrWrkKndCd_onchange = function (info) {
  scwin.f_onFilter();
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.btn_cancel_onclick = function (e) {
  var row = ds_results.getRowPosition();
  ds_results.undoRow(row);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_condition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배차점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_lobranCd',search:'start',style:'width: 230px;',submenuSize:'auto',ref:'data:dma_search.lobranCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발예정일 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_dptIntendDd',refDataMap:'dma_search',refEdDt:'dptIntendDd2',refStDt:'dptIntendDd',style:'',edFromId:'em_dptIntendDd',edToId:'em_dptIntendDd2'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ON/BOB',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_cntrWrkKndCd',search:'start',style:'width:150px;',submenuSize:'auto','ev:onviewchange':'scwin.acb_lc_cntrWrkKndCd_onviewchange','ev:onchange':'scwin.acb_lc_cntrWrkKndCd_onchange',ref:'data:dma_search.cntrWrkKndCd',allOption:'',chooseOption:'true',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_qryClsCd',search:'start',style:'width: 100px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_search.qryClsCd','ev:onchange':'scwin.acb_lc_qryClsCd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'운송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0002'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'회수'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0003'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구화주 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_bilgClntNo',nameId:'txt_bilgClntNm',id:'udc_bilgClntNo','ev:onblurCodeEvent':'scwin.udc_bilgClntNo_onclickEvent','ev:onclickEvent':'scwin.udc_bilgClntNo_onclickEvent',refDataCollection:'dma_search',code:'bilgClntNo','ev:onblurNameEvent':'scwin.udc_bilgClntNo_onclickEvent',readOnlyName:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착지 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_dptWrkPlCd',nameId:'ed_dptWrkPlNm',id:'udc_dptWrkPlCd','ev:onblurCodeEvent':'scwin.udc_dptWrkPlCd_onclickEvent','ev:onclickEvent':'scwin.udc_dptWrkPlCd_onclickEvent',refDataCollection:'dma_search',code:'dptWrkPlCd','ev:onblurNameEvent':'scwin.udc_dptWrkPlCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DOOR',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_dptDtl',placeholder:'',style:'width:150px;',ref:'data:dma_search.dptWrkPlNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'운송물량',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridID:'gr_results',gridUpYn:'N',gridDownYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_results_ontextimageclick','ev:oncellclick':'scwin.gr_results_oncellclick','ev:onafteredit':'scwin.gr_results_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',value:'',class:'col-type2',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'청구화주',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'출발지',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'도착지',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'DOOR명',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'CNTR',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'컨테이너',width:'100',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'차량<br/>단축',width:'70',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'샤시<br/>단축',width:'70',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column43',value:'LINE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column41',value:'ON/<br/>BOB',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'회수<br/>대기건수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'지시건수',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realMchtClntNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'doorNm',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrInfo',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclShortNo',inputType:'textImage',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chassShortNo',inputType:'textImage',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lineCd',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'cntrWrkShapeCd',displayMode:'label',textAlign:'left',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:' '}]},{T:1,N:'w2:value',E:[{T:4,cdata:' '}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totCnt',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrCnt',displayMode:'label',displayFormat:'#,###',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''}}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'w2:udc_comCode',A:{'ev:onclickEvent':'scwin.udc_bilgClntNo_onclickEvent',codeId:'',popupID:'',nameId:'',style:'display: none;',id:'udc_comCodeGrid','ev:onblurCodeEvent':'scwin.udc_bilgClntNo_onclickEvent'}},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'특이사항',class:''}},{T:1,N:'xf:textarea',A:{style:'height: 22px;min-height: auto;',id:'txt_txa_transRmk',class:' w200',ref:'data:ds_results.transRmk'}}]},{T:1,N:'xf:trigger',A:{class:'btn white','ev:onclick':'scwin.btn_cancel_onclick',id:'trigger1',label:'취소',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})