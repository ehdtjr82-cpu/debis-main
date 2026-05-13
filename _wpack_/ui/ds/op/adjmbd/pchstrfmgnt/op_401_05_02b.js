/*amd /ui/ds/op/adjmbd/pchstrfmgnt/op_401_05_02b.xml 62567 a89e154e59f51cc0bc11cb562aea2b61d14d7cd61db1a9eb6d7e82d2c265439f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_QueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'transNmCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptStnWrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvStnWrkPlCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'retrieveDt',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adminfrtcar',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadFareBT',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dptStnWrkPlNm',name:'출발역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlNm',name:'도착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transNmCd',name:'운송;명의',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railRoadFareAdptClsCd',name:'화차;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empty20',name:'20E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'full20',name:'20F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empty40',name:'40E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'full40',name:'40F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empty45',name:'45E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'full45',name:'45F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStnWrkPlCd',name:'출발역code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlCd',name:'도착역code',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadFareBTForSave',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'flagOpration',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStnWrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expireDt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railRoadFare',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railRoadFareAdptClsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transNmCd',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadFareBTForCompare',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'tr_RailroadFarePresentConditionList',action:'/ds.op.adjmbd.pchstrfmgnt.RetrieveDistanceEachRailroadFareBTCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_QueryCondition","key":"IN_DS1"},{"action":"modified","id":"ds_RailroadFareBT","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_RailroadFareBT","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.tr_RailroadFarePresentConditionList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'tr_Save',action:'/ds.op.adjmbd.pchstrfmgnt.SaveDistanceEachRailroadFareBTCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_RailroadFareBTForSave","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.tr_Save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_401_05_02b
// 이름     : 저수요요율등록
// 경로     : 물류/공통(통합)/매입요율/운송/구간별 철송임 조회/[요율등록] 버튼
// 작 성 자 : 최지수
// 작 업 일 : 2026-04-09
//==================================================================================================================

scwin.onpageload = function () {
  // AS-IS 행추가는 최초 조회 후 수행 가능 하다.
  scwin.bAdd = false;
  scwin.toDay = WebSquare.date.getCurrentServerDate('yyyyMMdd');
  let oParamArr = $c.data.getParameter($p, 'data');
  scwin.req_startTrainWorkPlaceCd = oParamArr[0] || '';
  scwin.req_startTrainWorkPlaceNm = oParamArr[1] || '';
  scwin.req_endTrainWorkPlaceCd = oParamArr[2] || '';
  scwin.req_endTrainWorkPlaceNm = oParamArr[3] || '';

  // TO-BE 공통 코드 조회
  // 공통코드 조회 + UDC 완료가 끝나면 기존 body onLoad 를 수행 하는 것이 맞다.
  scwin.oAsyncResolver = new Promise((resolve, reject) => {
    let oOptions = [{
      grpCd: "OP147",
      compID: "co_lc_srchCode1,gr_selfInoutList:transNmCd"
    }];
    $c.data.setCommonCode($p, oOptions, resolve);
  });
};

// UDC 초기화 완료 후 호출 된다.
scwin.onUdcCompleted = function () {
  scwin.oAsyncResolver.then(() => {
    // 공통코드 조회 완료.
    scwin.f_OnLoad();
  });
};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  // f_HeaderCreate();

  let dateStr = scwin.toDay;
  ds_QueryCondition.set('transNmCd', 'DB');
  ds_QueryCondition.set('retrieveDt', dateStr);
  ed_startTrainWorkPlaceCd.setValue(scwin.req_startTrainWorkPlaceCd);
  txt_startTrainWorkPlaceNm.setValue(scwin.req_startTrainWorkPlaceNm);
  ed_endTrainWorkPlaceCd.setValue(scwin.req_endTrainWorkPlaceCd);
  txt_endTrainWorkPlaceNm.setValue(scwin.req_endTrainWorkPlaceNm);

  //로딩시 subtitle 초기화
  scwin.f_announce();
  subTitle.setValue("요율등록");
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  let dateStr = scwin.toDay;
  ed_srchFromDate.setValue(dateStr);
  co_lc_srchCode1.focus();
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
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (typeof isCode == 'undefined' || isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch, nRowInx) {
  // 그리드는 행이 변경되는 경우가 있어 nRowInx 를 추가로 받는다.

  let _promise = new Promise((resolve, reject) => {
    switch (disGubun) {
      case 1:
        // 출발역 작업장 팝업
        udc_comCode_starttrain.cfCommonPopUp(resolve // CallBack Function
        , pCode // 화면에서의 ??? Code Element의	Value
        , pName // 화면에서의 ??? Name Element의	Value
        , pClose // 결과가 1건 일때  원도우를 AutoClose 여부
        , null, null, null, null, null, null, null, null, null, null, pAllSearch, '출발역 작업장조회,작업장코드,작업장명');
        break;
      case 2:
        udc_comCode_endtrain.cfCommonPopUp(resolve // CallBack Function
        , pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch // 전체검색허용여부	("F")
        , "도착역 작업장조회,작업장코드,작업장명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
        );
        break;
      case 3:
        // 그리드의 출발역 작업장
        // 조회 영역의 출발역 UDC 를 사용함.
        udc_comCode_starttrain.cfCommonPopUp(resolve // CallBack Function
        , pCode // 화면에서의 ??? Code Element의	Value
        , pName // 화면에서의 ??? Name Element의	Value
        , pClose // 결과가 1건 일때  원도우를 AutoClose 여부
        , null, null, null, null, null, null, null, null, null, null, pAllSearch, '출발역 작업장조회,작업장코드,작업장명');
        break;
      case 4:
        // 그리드의 도착역 작업장
        // 조회 영역의 도착역 UDC 를 사용함.
        udc_comCode_endtrain.cfCommonPopUp(resolve // CallBack Function
        , pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch // 전체검색허용여부	("F")
        , "도착역 작업장조회,작업장코드,작업장명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
        );
        break;
      default:
        reject();
    }
  });
  _promise = _promise.then(resObj => {
    /*
    [
        "2R01",
        "동화역",
        "0",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ]
    */
    switch (disGubun) {
      case 1:
        $c.gus.cfSetReturnValue($p, resObj, ed_startTrainWorkPlaceCd, txt_startTrainWorkPlaceNm);
        break;
      case 2:
        $c.gus.cfSetReturnValue($p, resObj, ed_endTrainWorkPlaceCd, txt_endTrainWorkPlaceNm);
        break;
      case 3:
        // TO-BE 는 조건이 다르다..
        // if(rtnList != null){
        if (resObj && resObj.length && resObj[0] != 'N/A') {
          // ds_RailroadFareBT.setCellData(ds_RailroadFareBT.getRowPosition(), "dptStnWrkPlCd", resObj[0]);
          // ds_RailroadFareBT.setCellData(ds_RailroadFareBT.getRowPosition(), "dptStnWrkPlNm", resObj[1]);
          ds_RailroadFareBT.setCellData(nRowInx, "dptStnWrkPlCd", resObj[0]);
          ds_RailroadFareBT.setCellData(nRowInx, "dptStnWrkPlNm", resObj[1]);
        }
        gr_selfInoutList.setEventPause('ontextimageclick', false);
        break;
      case 4:
        // TO-BE 는 조건이 다르다..
        // if(rtnList != null){
        if (resObj && resObj.length && resObj[0] != 'N/A') {
          // ds_RailroadFareBT.setCellData(ds_RailroadFareBT.getRowPosition(), "arvStnWrkPlCd", resObj[0]);
          // ds_RailroadFareBT.setCellData(ds_RailroadFareBT.getRowPosition(), "arvStnWrkPlNm", resObj[1]);
          ds_RailroadFareBT.setCellData(nRowInx, "arvStnWrkPlCd", resObj[0]);
          ds_RailroadFareBT.setCellData(nRowInx, "arvStnWrkPlNm", resObj[1]);
        }
        gr_selfInoutList.setEventPause('ontextimageclick', false);
        break;
    }
  }, err => {
    console.log('scwin.f_openCommonPopUp... 올바른 값이 아님');
  });
};

//-------------------------------------------------------------------------
// 구간별 철송임 조회
//-------------------------------------------------------------------------
scwin.f_qeryList = function () {
  if (co_lc_srchCode1.getValue() == "") {
    $c.win.alert($p, "운송명의는 필수입력항목 입니다.").then(() => {
      co_lc_srchCode1.focus();
    });
    return false;
  }
  scwin.bAdd = true;
  $c.sbm.execute($p, tr_RailroadFarePresentConditionList);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = function () {
  if (ds_RailroadFareBT.getModifiedIndex().length == 0) {
    $c.win.alert($p, "변경된 데이터가 없습니다.");
    return false;
  }
  for (var i = 0; i < ds_RailroadFareBT.getTotalRow(); i++) {
    if (ds_RailroadFareBT.getCellData(i, "dptStnWrkPlCd") == "" || ds_RailroadFareBT.getCellData(i, "arvStnWrkPlCd") == "" || ds_RailroadFareBT.getCellData(i, "adptDt") == "") {
      $c.win.alert($p, "출발역, 도착역, 적용일자는 필수 입력 항목입니다.");
      return false;
      break;
    }
    if (ds_RailroadFareBT.getCellData(i, "transNmCd") == "DB") {
      if (ds_RailroadFareBT.getCellData(i, "railRoadFareAdptClsCd") != "JN" && ds_RailroadFareBT.getCellData(i, "railRoadFareAdptClsCd") != "RV" && ds_RailroadFareBT.getCellData(i, "railRoadFareAdptClsCd") != "PN" && ds_RailroadFareBT.getCellData(i, "railRoadFareAdptClsCd") != "BT") {
        //전용, 예비
        $c.win.alert($p, i + 1 + "번째 행의 동부명의는 전용/예비/편도화차/저수요  요율만 등록 가능합니다.");
        return false;
        break;
      }
    } else {
      //2015.09.23 타사도 전용,저수요로 관리되도록 요청 - 이종훈
      //저장시 체크로직 넣지 말것 요청함.
      /*if(ds_RailroadFareBT.NameValue(i,"railRoadFareAdptClsCd") != "CH"		//공사
      && ds_RailroadFareBT.NameValue(i,"railRoadFareAdptClsCd") != "SA"){		//사유
          alert(i+"번째 행의 타사명의는 공사화차, 사유화차 요율만 등록 가능합니다.");
          return false;
      }*/
    }
  }

  //----------------------------------------------------------------
  //운송명의별 등록가능 화차구분 체크
  //동부명의: 전용, 저수요 요율등록 관리,  
  //타사명의: 공사화차 요율등록 관리(조작료 포함한 금액 입력키로 함)
  //0:사유,1:공사,2:저수요,3:전용
  //2015.01.07 hurrah015
  //4:예비화차(RV) 화차구분추가 - 동부명의 타사명의 저장가능. 2016.02.05
  //-----------------------------------------------------------start!
  var srchCode1 = co_lc_srchCode1.getValue();
  var srchCode2 = co_lc_srchCode2.getValue();
  if (srchCode2 == "") {
    $c.win.alert($p, "등록하실 화차구분을 선택 하셔야 합니다..");
    return false;
  }
  if (srchCode1 == "DB") {
    //동부명의
    if (srchCode2 != "JN" && srchCode2 != "RV" && srchCode2 != "PN" && srchCode2 != "BT") {
      //전용, 예비
      $c.win.alert($p, "동부명의는 전용/예비/편도화차/저수요 요율만 등록 가능합니다.\n\n조회 조건의 화차구분을 다시 선택해주세요.");
      return false;
    }
  } else {//타사명의
    //2015.09.23 타사도 전용,저수요로 관리되도록 요청 - 이종훈
    //저장시 체크로직 넣지 말것 요청함.
    /*if(srchCode2 != "CH"		//공사
    && srchCode2 != "SA"){		//사유
        alert("타사명의는 공사화차, 사유화차 요율만 등록 가능합니다.\n\n조회 조건의 화차구분을 다시 선택해주세요.");
        return false;
    }*/
  }
  //--------------------------------------------------------------end!

  scwin.f_makeDataForSave();
  $c.win.confirm($p, "저장 하시겠습니까?").then(bVal => {
    if (bVal) {
      $c.sbm.execute($p, tr_Save);
    }
  });
};

//-------------------------------------------------------------------------
// 저장시 데이터 재생성
//-------------------------------------------------------------------------
scwin.f_makeDataForSave = function () {
  // f_HeaderCreateForSave();
  ds_RailroadFareBTForSave.removeAll();

  // var countRow = 0;
  var countRow = -1;
  var transNmCd = co_lc_srchCode1.getValue();
  //동부명의: 전용, 저수요 요율등록 관리,  타사명의: 공사화차 요율등록 관리
  //기존에 BT(저수요)로만 등록되던 사항이 변경됨.
  //2015.01.17 hurrah
  var railRoadFareAdptClsCd = co_lc_srchCode2.getValue();
  for (var i = 0; i < ds_RailroadFareBT.getTotalRow(); i++) {
    //insert 체크후 복사
    // 행의 상태 숫자값
    // 0 : Normal 'R'
    // 1 : Insert 'C'
    // 2 : Delete 'D'
    // 3 : Update 'U'
    // 4 : Logical X
    if (ds_RailroadFareBT.getRowStatus(i) == 'C') {
      if (ds_RailroadFareBT.getCellData(i, "empty20") != 0) {
        ds_RailroadFareBTForSave.insertRow();
        countRow++;
        ds_RailroadFareBTForSave.setCellData(countRow, "flagOpration", 1);
        ds_RailroadFareBTForSave.setCellData(countRow, "dptStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "dptStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "arvStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "arvStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "adptDt", ds_RailroadFareBT.getCellData(i, "adptDt"));
        ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFare", ds_RailroadFareBT.getCellData(i, "empty20"));
        ds_RailroadFareBTForSave.setCellData(countRow, "cntrSizCd", "20");
        ds_RailroadFareBTForSave.setCellData(countRow, "fullEmptyClsCd", "E");
        ds_RailroadFareBTForSave.setCellData(countRow, "expireDt", "99999999");
        ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFareAdptClsCd", railRoadFareAdptClsCd); //"BT";
        ds_RailroadFareBTForSave.setCellData(countRow, "transNmCd", transNmCd);
      }
      if (ds_RailroadFareBT.getCellData(i, "full20") != 0) {
        ds_RailroadFareBTForSave.insertRow();
        countRow++;
        ds_RailroadFareBTForSave.setCellData(countRow, "flagOpration", 1);
        ds_RailroadFareBTForSave.setCellData(countRow, "dptStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "dptStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "arvStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "arvStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "adptDt", ds_RailroadFareBT.getCellData(i, "adptDt"));
        ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFare", ds_RailroadFareBT.getCellData(i, "full20"));
        ds_RailroadFareBTForSave.setCellData(countRow, "cntrSizCd", "20");
        ds_RailroadFareBTForSave.setCellData(countRow, "fullEmptyClsCd", "F");
        ds_RailroadFareBTForSave.setCellData(countRow, "expireDt", "99999999");
        ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFareAdptClsCd", railRoadFareAdptClsCd); //"BT";
        ds_RailroadFareBTForSave.setCellData(countRow, "transNmCd", transNmCd);
      }
      if (ds_RailroadFareBT.getCellData(i, "empty40") != 0) {
        ds_RailroadFareBTForSave.insertRow();
        countRow++;
        ds_RailroadFareBTForSave.setCellData(countRow, "flagOpration", 1);
        ds_RailroadFareBTForSave.setCellData(countRow, "dptStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "dptStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "arvStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "arvStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "adptDt", ds_RailroadFareBT.getCellData(i, "adptDt"));
        ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFare", ds_RailroadFareBT.getCellData(i, "empty40"));
        ds_RailroadFareBTForSave.setCellData(countRow, "cntrSizCd", "40");
        ds_RailroadFareBTForSave.setCellData(countRow, "fullEmptyClsCd", "E");
        ds_RailroadFareBTForSave.setCellData(countRow, "expireDt", "99999999");
        ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFareAdptClsCd", railRoadFareAdptClsCd); //"BT";
        ds_RailroadFareBTForSave.setCellData(countRow, "transNmCd", transNmCd);
      }
      if (ds_RailroadFareBT.getCellData(i, "full40") != 0) {
        ds_RailroadFareBTForSave.insertRow();
        countRow++;
        ds_RailroadFareBTForSave.setCellData(countRow, "flagOpration", 1);
        ds_RailroadFareBTForSave.setCellData(countRow, "dptStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "dptStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "arvStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "arvStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "adptDt", ds_RailroadFareBT.getCellData(i, "adptDt"));
        ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFare", ds_RailroadFareBT.getCellData(i, "full40"));
        ds_RailroadFareBTForSave.setCellData(countRow, "cntrSizCd", "40");
        ds_RailroadFareBTForSave.setCellData(countRow, "fullEmptyClsCd", "F");
        ds_RailroadFareBTForSave.setCellData(countRow, "expireDt", "99999999");
        ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFareAdptClsCd", railRoadFareAdptClsCd); //"BT";
        ds_RailroadFareBTForSave.setCellData(countRow, "transNmCd", transNmCd);
      }
      if (ds_RailroadFareBT.getCellData(i, "empty45") != 0) {
        ds_RailroadFareBTForSave.insertRow();
        countRow++;
        ds_RailroadFareBTForSave.setCellData(countRow, "flagOpration", 1);
        ds_RailroadFareBTForSave.setCellData(countRow, "dptStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "dptStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "arvStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "arvStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "adptDt", ds_RailroadFareBT.getCellData(i, "adptDt"));
        ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFare", ds_RailroadFareBT.getCellData(i, "empty45"));
        ds_RailroadFareBTForSave.setCellData(countRow, "cntrSizCd", "45");
        ds_RailroadFareBTForSave.setCellData(countRow, "fullEmptyClsCd", "E");
        ds_RailroadFareBTForSave.setCellData(countRow, "expireDt", "99999999");
        ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFareAdptClsCd", railRoadFareAdptClsCd); //"BT";
        ds_RailroadFareBTForSave.setCellData(countRow, "transNmCd", transNmCd);
      }
      if (ds_RailroadFareBT.getCellData(i, "full45") != 0) {
        ds_RailroadFareBTForSave.insertRow();
        countRow++;
        ds_RailroadFareBTForSave.setCellData(countRow, "flagOpration", 1);
        ds_RailroadFareBTForSave.setCellData(countRow, "dptStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "dptStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "arvStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "arvStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "adptDt", ds_RailroadFareBT.getCellData(i, "adptDt"));
        ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFare", ds_RailroadFareBT.getCellData(i, "full45"));
        ds_RailroadFareBTForSave.setCellData(countRow, "cntrSizCd", "45");
        ds_RailroadFareBTForSave.setCellData(countRow, "fullEmptyClsCd", "F");
        ds_RailroadFareBTForSave.setCellData(countRow, "expireDt", "99999999");
        ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFareAdptClsCd", railRoadFareAdptClsCd); //"BT";
        ds_RailroadFareBTForSave.setCellData(countRow, "transNmCd", transNmCd);
      }
    } //if(ds_RailroadFareBT.SysStatus(i) == 1)

    //update 체크후 복사
    // 행의 상태 숫자값
    // 0 : Normal 'R'
    // 1 : Insert 'C'
    // 2 : Delete 'D'
    // 3 : Update 'U'
    // 4 : Logical X
    if (ds_RailroadFareBT.getRowStatus(i) == 'U') {
      if (ds_RailroadFareBT.getCellData(i, "empty20") != ds_RailroadFareBTForCompare.getCellData(i, "empty20")) {
        ds_RailroadFareBTForSave.insertRow();
        countRow++;
        ds_RailroadFareBTForSave.setCellData(countRow, "flagOpration", 3);
        ds_RailroadFareBTForSave.setCellData(countRow, "dptStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "dptStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "arvStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "arvStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "adptDt", ds_RailroadFareBT.getCellData(i, "adptDt"));
        ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFare", ds_RailroadFareBT.getCellData(i, "empty20"));
        ds_RailroadFareBTForSave.setCellData(countRow, "cntrSizCd", "20");
        ds_RailroadFareBTForSave.setCellData(countRow, "fullEmptyClsCd", "E");
        if (ds_RailroadFareBTForCompare.getCellData(i, "empty20") == 0) {
          ds_RailroadFareBTForSave.setCellData(countRow, "flagOpration", 1);
          ds_RailroadFareBTForSave.setCellData(countRow, "expireDt", "99999999");
          ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFareAdptClsCd", railRoadFareAdptClsCd); //"BT";
          ds_RailroadFareBTForSave.setCellData(countRow, "transNmCd", transNmCd);
        } else {
          ds_RailroadFareBTForSave.setCellData(countRow, "expireDt", "99999999");
          ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFareAdptClsCd", railRoadFareAdptClsCd);
          ds_RailroadFareBTForSave.setCellData(countRow, "transNmCd", transNmCd);
        }
      }
      if (ds_RailroadFareBT.getCellData(i, "full20") != ds_RailroadFareBTForCompare.getCellData(i, "full20")) {
        ds_RailroadFareBTForSave.insertRow();
        countRow++;
        ds_RailroadFareBTForSave.setCellData(countRow, "flagOpration", 3);
        ds_RailroadFareBTForSave.setCellData(countRow, "dptStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "dptStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "arvStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "arvStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "adptDt", ds_RailroadFareBT.getCellData(i, "adptDt"));
        ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFare", ds_RailroadFareBT.getCellData(i, "full20"));
        ds_RailroadFareBTForSave.setCellData(countRow, "cntrSizCd", "20");
        ds_RailroadFareBTForSave.setCellData(countRow, "fullEmptyClsCd", "F");
        if (ds_RailroadFareBTForCompare.getCellData(i, "full20") == 0) {
          ds_RailroadFareBTForSave.setCellData(countRow, "flagOpration", 1);
          ds_RailroadFareBTForSave.setCellData(countRow, "expireDt", "99999999");
          ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFareAdptClsCd", railRoadFareAdptClsCd); //"BT";
          ds_RailroadFareBTForSave.setCellData(countRow, "transNmCd", transNmCd);
        } else {
          ds_RailroadFareBTForSave.setCellData(countRow, "expireDt", "99999999");
          ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFareAdptClsCd", railRoadFareAdptClsCd);
          ds_RailroadFareBTForSave.setCellData(countRow, "transNmCd", transNmCd);
        }
      }
      if (ds_RailroadFareBT.getCellData(i, "empty40") != ds_RailroadFareBTForCompare.getCellData(i, "empty40")) {
        ds_RailroadFareBTForSave.insertRow();
        countRow++;
        ds_RailroadFareBTForSave.setCellData(countRow, "flagOpration", 3);
        ds_RailroadFareBTForSave.setCellData(countRow, "dptStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "dptStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "arvStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "arvStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "adptDt", ds_RailroadFareBT.getCellData(i, "adptDt"));
        ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFare", ds_RailroadFareBT.getCellData(i, "empty40"));
        ds_RailroadFareBTForSave.setCellData(countRow, "cntrSizCd", "40");
        ds_RailroadFareBTForSave.setCellData(countRow, "fullEmptyClsCd", "E");
        if (ds_RailroadFareBTForCompare.getCellData(i, "empty40") == 0) {
          ds_RailroadFareBTForSave.setCellData(countRow, "flagOpration", 1);
          ds_RailroadFareBTForSave.setCellData(countRow, "expireDt", "99999999");
          ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFareAdptClsCd", railRoadFareAdptClsCd); //"BT";
          ds_RailroadFareBTForSave.setCellData(countRow, "transNmCd", transNmCd);
        } else {
          ds_RailroadFareBTForSave.setCellData(countRow, "expireDt", "99999999");
          ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFareAdptClsCd", railRoadFareAdptClsCd);
          ds_RailroadFareBTForSave.setCellData(countRow, "transNmCd", transNmCd);
        }
      }
      if (ds_RailroadFareBT.getCellData(i, "full40") != ds_RailroadFareBTForCompare.getCellData(i, "full40")) {
        ds_RailroadFareBTForSave.insertRow();
        countRow++;
        ds_RailroadFareBTForSave.setCellData(countRow, "flagOpration", 3);
        ds_RailroadFareBTForSave.setCellData(countRow, "dptStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "dptStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "arvStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "arvStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "adptDt", ds_RailroadFareBT.getCellData(i, "adptDt"));
        ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFare", ds_RailroadFareBT.getCellData(i, "full40"));
        ds_RailroadFareBTForSave.setCellData(countRow, "cntrSizCd", "40");
        ds_RailroadFareBTForSave.setCellData(countRow, "fullEmptyClsCd", "F");
        if (ds_RailroadFareBTForCompare.getCellData(i, "full40") == 0) {
          ds_RailroadFareBTForSave.setCellData(countRow, "flagOpration", 1);
          ds_RailroadFareBTForSave.setCellData(countRow, "expireDt", "99999999");
          ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFareAdptClsCd", railRoadFareAdptClsCd); //"BT";
          ds_RailroadFareBTForSave.setCellData(countRow, "transNmCd", transNmCd);
        } else {
          ds_RailroadFareBTForSave.setCellData(countRow, "expireDt", "99999999");
          ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFareAdptClsCd", railRoadFareAdptClsCd);
          ds_RailroadFareBTForSave.setCellData(countRow, "transNmCd", transNmCd);
        }
      }
      if (ds_RailroadFareBT.getCellData(i, "empty45") != ds_RailroadFareBTForCompare.getCellData(i, "empty45")) {
        ds_RailroadFareBTForSave.insertRow();
        countRow++;
        ds_RailroadFareBTForSave.setCellData(countRow, "flagOpration", 3);
        ds_RailroadFareBTForSave.setCellData(countRow, "dptStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "dptStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "arvStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "arvStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "adptDt", ds_RailroadFareBT.getCellData(i, "adptDt"));
        ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFare", ds_RailroadFareBT.getCellData(i, "empty45"));
        ds_RailroadFareBTForSave.setCellData(countRow, "cntrSizCd", "45");
        ds_RailroadFareBTForSave.setCellData(countRow, "fullEmptyClsCd", "E");
        if (ds_RailroadFareBTForCompare.getCellData(i, "empty45") == 0) {
          ds_RailroadFareBTForSave.setCellData(countRow, "flagOpration", 1);
          ds_RailroadFareBTForSave.setCellData(countRow, "expireDt", "99999999");
          ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFareAdptClsCd", railRoadFareAdptClsCd); //"BT";
          ds_RailroadFareBTForSave.setCellData(countRow, "transNmCd", transNmCd);
        } else {
          ds_RailroadFareBTForSave.setCellData(countRow, "expireDt", "99999999");
          ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFareAdptClsCd", railRoadFareAdptClsCd);
          ds_RailroadFareBTForSave.setCellData(countRow, "transNmCd", transNmCd);
        }
      }
      if (ds_RailroadFareBT.getCellData(i, "full45") != ds_RailroadFareBTForCompare.getCellData(i, "full45")) {
        ds_RailroadFareBTForSave.insertRow();
        countRow++;
        ds_RailroadFareBTForSave.setCellData(countRow, "flagOpration", 3);
        ds_RailroadFareBTForSave.setCellData(countRow, "dptStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "dptStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "arvStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "arvStnWrkPlCd"));
        ds_RailroadFareBTForSave.setCellData(countRow, "adptDt", ds_RailroadFareBT.getCellData(i, "adptDt"));
        ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFare", ds_RailroadFareBT.getCellData(i, "full45"));
        ds_RailroadFareBTForSave.setCellData(countRow, "cntrSizCd", "45");
        ds_RailroadFareBTForSave.setCellData(countRow, "fullEmptyClsCd", "F");
        if (ds_RailroadFareBTForCompare.getCellData(i, "full45") == 0) {
          ds_RailroadFareBTForSave.setCellData(countRow, "flagOpration", 1);
          ds_RailroadFareBTForSave.setCellData(countRow, "expireDt", "99999999");
          ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFareAdptClsCd", railRoadFareAdptClsCd); //"BT";
          ds_RailroadFareBTForSave.setCellData(countRow, "transNmCd", transNmCd);
        } else {
          ds_RailroadFareBTForSave.setCellData(countRow, "expireDt", "99999999");
          ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFareAdptClsCd", railRoadFareAdptClsCd);
          ds_RailroadFareBTForSave.setCellData(countRow, "transNmCd", transNmCd);
        }
      }
    } //if(ds_RailroadFareBT.SysStatus(i) == 3)

    //delete
    // 행의 상태 숫자값
    // 0 : Normal 'R'
    // 1 : Insert 'C'
    // 2 : Delete 'D'
    // 3 : Update 'U'
    // 4 : Logical X
    if (ds_RailroadFareBT.getRowStatus(i) == 'D') {
      ds_RailroadFareBTForSave.insertRow();
      countRow++;
      ds_RailroadFareBTForSave.setCellData(countRow, "flagOpration", 2);
      ds_RailroadFareBTForSave.setCellData(countRow, "dptStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "dptStnWrkPlCd"));
      ds_RailroadFareBTForSave.setCellData(countRow, "arvStnWrkPlCd", ds_RailroadFareBT.getCellData(i, "arvStnWrkPlCd"));
      ds_RailroadFareBTForSave.setCellData(countRow, "adptDt", ds_RailroadFareBT.getCellData(i, "adptDt"));
      ds_RailroadFareBTForSave.setCellData(countRow, "railRoadFareAdptClsCd", railRoadFareAdptClsCd);
      ds_RailroadFareBTForSave.setCellData(countRow, "transNmCd", transNmCd);
    }
  } //for
};

//-------------------------------------------------------------------------
// 조회내용 인쇄
//-------------------------------------------------------------------------
scwin.f_grPrint = function () {
  $c.win.alert($p, "현재 인쇄 표준 협의중.  아직 이용하지 못합니다. ");
};
scwin.f_toExcel = function () {
  if (ds_RailroadFareBT.getTotalRow() == 0) return;
  //sheet명       , 저장파일명            , 저장 다이얼로그
  $c.data.downloadGridViewExcel($p, gr_selfInoutList, {
    fileName: '구간별철송임조회.xls',
    sheetName: '구간별철송임조회',
    type: "1"
  });
};

//-------------------------------------------------------------------------
// 수정버튼
//-------------------------------------------------------------------------
scwin.f_update = function () {
  // gr_selfInoutList.Editable = "true";
  // gr_selfInoutList.ColumnProp('dptStnWrkPlNm', 'Edit') = "None";
  // gr_selfInoutList.ColumnProp('arvStnWrkPlNm', 'Edit') = "None";
  // gr_selfInoutList.ColumnProp('adptDt', 'Edit') 	= "None";
  // gr_selfInoutList.ColumnProp('empty20', 'Edit') 	= "Numeric";
  // gr_selfInoutList.ColumnProp('full20', 'Edit') 	= "Numeric";
  // gr_selfInoutList.ColumnProp('empty40', 'Edit') 	= "Numeric";
  // gr_selfInoutList.ColumnProp('full40', 'Edit') 	= "Numeric";
  // gr_selfInoutList.ColumnProp('empty45', 'Edit') 	= "Numeric";
  // gr_selfInoutList.ColumnProp('full45', 'Edit') 	= "Numeric";
  gr_selfInoutList.setGridReadOnly(false);
  gr_selfInoutList.setColumnReadOnly('dptStnWrkPlNm', true);
  gr_selfInoutList.setColumnReadOnly('arvStnWrkPlNm', true);
  gr_selfInoutList.setColumnReadOnly('adptDt', true);
  gr_selfInoutList.setColumnReadOnly('empty20', false);
  gr_selfInoutList.setColumnReadOnly('full20', false);
  gr_selfInoutList.setColumnReadOnly('empty40', false);
  gr_selfInoutList.setColumnReadOnly('full40', false);
  gr_selfInoutList.setColumnReadOnly('empty45', false);
  gr_selfInoutList.setColumnReadOnly('full45', false);
};

//-------------------------------------------------------------------------
// 행추가버튼
//-------------------------------------------------------------------------
scwin.f_PushAddRow = function () {
  //화차구분 validation check 2015.01.07 hurrah
  if (co_lc_srchCode2.getValue() == "") {
    $c.win.alert($p, "먼저 화차구분을 선택해주세요.");
    return;
  }

  // AS-IS 는 조회가 수행된 이후 추가 가능 하다.
  if (!scwin.bAdd) return;

  // gr_selfInoutList.Editable = "true";
  // gr_selfInoutList.ColumnProp('dptStnWrkPlNm', 'Edit') = "Any";
  // gr_selfInoutList.ColumnProp('arvStnWrkPlNm', 'Edit') = "Any";
  // gr_selfInoutList.ColumnProp('adptDt', 'Edit') 	= "Any";
  // gr_selfInoutList.ColumnProp('empty20', 'Edit') 	= "Numeric";
  // gr_selfInoutList.ColumnProp('full20', 'Edit') 	= "Numeric";
  // gr_selfInoutList.ColumnProp('empty40', 'Edit') 	= "Numeric";
  // gr_selfInoutList.ColumnProp('full40', 'Edit') 	= "Numeric";
  // gr_selfInoutList.ColumnProp('empty45', 'Edit') 	= "Numeric";
  // gr_selfInoutList.ColumnProp('full45', 'Edit') 	= "Numeric";

  gr_selfInoutList.setGridReadOnly(false);
  gr_selfInoutList.setColumnReadOnly('dptStnWrkPlNm', false);
  gr_selfInoutList.setColumnReadOnly('arvStnWrkPlNm', false);
  gr_selfInoutList.setColumnReadOnly('adptDt', false);
  gr_selfInoutList.setColumnReadOnly('empty20', false);
  gr_selfInoutList.setColumnReadOnly('full20', false);
  gr_selfInoutList.setColumnReadOnly('empty40', false);
  gr_selfInoutList.setColumnReadOnly('full40', false);
  gr_selfInoutList.setColumnReadOnly('empty45', false);
  gr_selfInoutList.setColumnReadOnly('full45', false);
  ds_RailroadFareBT.insertRow();
  let nInx = ds_RailroadFareBT.getTotalRow() - 1;
  ds_RailroadFareBT.setCellData(nInx, "dptStnWrkPlNm", txt_startTrainWorkPlaceNm.getValue());
  ds_RailroadFareBT.setCellData(nInx, "dptStnWrkPlCd", ed_startTrainWorkPlaceCd.getValue());
  ds_RailroadFareBT.setCellData(nInx, "arvStnWrkPlNm", txt_endTrainWorkPlaceNm.getValue());
  ds_RailroadFareBT.setCellData(nInx, "arvStnWrkPlCd", ed_endTrainWorkPlaceCd.getValue());
  ds_RailroadFareBT.setCellData(nInx, "adptDt", ed_srchFromDate.getValue());

  //운송명의,화차구분 세팅 2015.01.07 hurrah
  ds_RailroadFareBT.setCellData(nInx, "transNmCd", co_lc_srchCode1.getValue());
  ds_RailroadFareBT.setCellData(nInx, "railRoadFareAdptClsCd", co_lc_srchCode2.getValue());

  // 기본값 0 추가
  ds_RailroadFareBT.setCellData(nInx, "empty20", '0');
  ds_RailroadFareBT.setCellData(nInx, "full20", '0');
  ds_RailroadFareBT.setCellData(nInx, "empty40", '0');
  ds_RailroadFareBT.setCellData(nInx, "full40", '0');
  ds_RailroadFareBT.setCellData(nInx, "empty45", '0');
  ds_RailroadFareBT.setCellData(nInx, "full45", '0');
  gr_selfInoutList.setFocusedCell(nInx, 0);
};
scwin.f_announce = function () {
  let srchCode = co_lc_srchCode1.getValue();

  //2 015.09.23 타사도 전용,저수요 관리하도록 요청 - 이종훈대리
  if (srchCode == "DB") {
    //동부명의이면 
    foottitle.setValue("동부명의 : 전용화차, 예비화차, 저수요 요율 관리중입니다.");
    foottitle.setStyle("color", "blue");
  } else {
    //타사명의이면
    foottitle.setValue("타사명의 : 전용화차, 예비화차, 저수요 요율 관리중입니다.");
    foottitle.setStyle("color", "blue");
  }
};
scwin.f_titleSet = function () {
  let srchCode = co_lc_srchCode2.getValue();
  //alert(srchCode);	//3:전용(JN),2:저수요(BT),0:사유(SA),1:공사[청화차](CH)
  switch (srchCode) {
    case "SA":
      subTitle.setValue("사유화차 요율등록");
      break;
    case "CH":
      subTitle.setValue("공사화차 요율등록");
      break;
    case "BT":
      subTitle.setValue("저수요 요율등록");
      break;
    case "JN":
      subTitle.setValue("전용화차 요율등록");
      break;
    case "RV":
      subTitle.setValue("예비화차 요율등록");
      break;
    case "":
      subTitle.setValue("요율등록");
      break;
  }
};

//------------------------------------------------------------------------------
//    C O M P O N E N T' S   E V E N T S  
//------------------------------------------------------------------------------

// 조회버튼 클릭 이벤트
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_qeryList();
};

// 조회조건의 운송명의 변경 이벤트
// <script language=JavaScript for="co_lc_srchCode1" event=OnSelChange()>
scwin.co_lc_srchCode1_onchange = function (info) {
  let srchCode = co_lc_srchCode1.getValue();
  scwin.f_announce();
  if (srchCode == "DB") {
    scwin.f_titleSet();
    $c.gus.cfEnableObj($p, co_lc_srchCode2, true);
  } else {
    //2015.09.15 타사명의인 경우 공사, 사유화차 등록가능
    //co_lc_srchCode2.BindColVal = "CH";
    subTitle.setValue("타사 요율등록");
    //cfEnableObj(co_lc_srchCode2, false);
  }
  //출발역이 세팅되어 있으면 자동조회
  if (!$c.gus.cfIsNull($p, ed_startTrainWorkPlaceCd.getValue())) {
    scwin.f_qeryList();
  }
};

////////////////
// 조회조건의 출발역 이벤트
////////////////
// 출발역 blur 이벤트
// <script language="javascript"  for="ed_startTrainWorkPlaceCd" event="OnKillFocus()">
scwin.udc_comCode_starttrain_onblurCodeEvent = function (e) {
  //검색조회 - 출발역 작업장
  scwin.f_chkOpenCommonPopUp(ed_startTrainWorkPlaceCd, txt_startTrainWorkPlaceNm, 1);
};

// 출발역 돋보기 클릭 이벤트
scwin.udc_comCode_starttrain_onclickEvent = function (e) {
  // udc_comCode_starttrain.cfCommonPopUp(scwin.udc_comCode_starttrain_callBackFunc, ed_startTrainWorkPlaceCd.getValue(), txt_startTrainWorkPlaceNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  scwin.f_openCommonPopUp(1, ed_startTrainWorkPlaceCd.getValue(), txt_startTrainWorkPlaceNm.getValue(), 'F', 'T');
};

// 출발역 Name 변경 이벤트
scwin.udc_comCode_starttrain_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_startTrainWorkPlaceNm, ed_startTrainWorkPlaceCd, 1, false);
};

////////////////
// 조회조건의 회차구분 이벤트
////////////////
scwin.co_lc_srchCode2_onviewchange = function (info) {
  scwin.f_titleSet();
  //출발역이 세팅되어 있으면 자동조회
  if (!$c.gus.cfIsNull($p, ed_startTrainWorkPlaceCd.getValue())) {
    scwin.f_qeryList();
  }
};

////////////////
// 조회조건의 도착역 이벤트
////////////////
// 도착역 blur 이벤트
// <script language="javascript"  for="ed_endTrainWorkPlaceCd" event="OnKillFocus()">
scwin.udc_comCode_endtrain_onblurCodeEvent = function (e) {
  //검색조회 - 도착역 작업장
  scwin.f_chkOpenCommonPopUp(ed_endTrainWorkPlaceCd, txt_endTrainWorkPlaceNm, 2);
};

// 도착역 돋보기 클릭 이벤트
scwin.udc_comCode_endtrain_onclickEvent = function (e) {
  // udc_comCode_endtrain.cfCommonPopUp(scwin.udc_comCode_endtrain_callBackFunc, ed_endTrainWorkPlaceCd.getValue(), txt_endTrainWorkPlaceNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  scwin.f_openCommonPopUp(2, ed_endTrainWorkPlaceCd.getValue(), txt_endTrainWorkPlaceNm.getValue(), 'F', 'T');
};

// 도착역 Name 변경 이벤트
scwin.udc_comCode_endtrain_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_endTrainWorkPlaceNm, ed_endTrainWorkPlaceCd, 2, false);
};

////////////////
////////////////
// 초기화 클릭 이벤트
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

/////////////////////////////////
// 그리드 하단 버튼 이벤트
/////////////////////////////////
// 행추가 버튼 클릭 이벤트
scwin.btn_rowAdd_onclick = function () {
  scwin.f_PushAddRow();
};

// 행삭제 버튼 클릭 이벤트
scwin.btn_rowDel_onclick = function () {
  // ds_RailroadFareBT.DeleteMarked();
  let nRowInx = gr_selfInoutList.getFocusedRowIndex();
  if (ds_RailroadFareBT.getRowStatus(nRowInx) == 'C') {
    ds_RailroadFareBT.removeRow(nRowInx);
  } else {
    ds_RailroadFareBT.deleteRow(nRowInx);
    gr_selfInoutList.setFocusedCell(nRowInx, 0);
  }
};

// 취소 버튼 클릭 이벤트
scwin.btn_Cancel_onclick = function () {
  // ds_RailroadFareBT.UndoMarked()
  let nRowInx = gr_selfInoutList.getFocusedRowIndex();
  if (ds_RailroadFareBT.getRowStatus(nRowInx) == 'C') {
    ds_RailroadFareBT.removeRow(nRowInx);
  } else {
    ds_RailroadFareBT.undoRow(nRowInx);
  }
};

// 닫기
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};

//수정버튼 클릭시
scwin.btn_Update_onclick = function (e) {
  scwin.f_update();
};

// 저장
scwin.btn_save_onclick = async function (e) {
  scwin.f_Save();
};

// 조회callback
scwin.tr_RailroadFarePresentConditionList_submitdone = function () {
  let rowCnt = ds_RailroadFareBT.getTotalRow();
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    // Focus 를 줘야 한다.
    // gr_selfInoutList.setFocusedCell(0, 0);
    ds_RailroadFareBT.setRowPosition(0);
  }
  let features = "copyHeader=yes,rowFrom=0,rowCnt=" + rowCnt;
  $c.gus.cfCopyDataSet($p, ds_RailroadFareBT, ds_RailroadFareBTForCompare, features);
  gr_selfInoutList.setGridReadOnly(true);
  total.setValue(rowCnt);
};
scwin.tr_Save_submitdone = function () {
  $c.gus.cfAlertMsg($p, "성공적으로 저장하였습니다.").then(() => {
    $c.sbm.execute($p, tr_RailroadFarePresentConditionList);
    gr_selfInoutList.setGridReadOnly(true);
  });
};

// 그리드의 출발역/도착역 돋보기 버튼 클릭 이벤트
// <script language=JavaScript for=gr_selfInoutList event=OnPopup(row,colid,data)>
scwin.gr_selfInoutList_ontextimageclick = function (nRowInx, nColInx) {
  let sColId = gr_selfInoutList.getColumnID(nColInx);
  switch (sColId) {
    case "dptStnWrkPlNm":
      scwin.f_openCommonPopUp(3, ds_RailroadFareBT.getCellData(nRowInx, "dptStnWrkPlCd"), ds_RailroadFareBT.getCellData(nRowInx, "dptStnWrkPlNm"), 'T', 'T', nRowInx);
      break;
    case "arvStnWrkPlNm":
      scwin.f_openCommonPopUp(4, ds_RailroadFareBT.getCellData(nRowInx, "arvStnWrkPlCd"), ds_RailroadFareBT.getCellData(nRowInx, "arvStnWrkPlNm"), 'T', 'T', nRowInx);
      break;
  }
};

// 그리드의 수정 후 이벤트
// <script language=JavaScript for=gr_selfInoutList event=OnExit(row,colid,olddata)>
scwin.gr_selfInoutList_oneditend = function (nRowInx, nColInx, sCellVal) {
  let sColId = gr_selfInoutList.getColumnID(nColInx);
  if ((sColId == 'dptStnWrkPlNm' || sColId == 'arvStnWrkPlNm') && sCellVal.trim() == '') {
    // AS-IS 구현이 이상하다.
    // dptStnWrkPlCd 는 이미 입력 되어있는 값이 넘어간다.

    // 에디트 모드에서 값 변경 후 돋보기를 누르면 중복 발생 방지
    gr_selfInoutList.setEventPause('ontextimageclick', true);
    switch (sColId) {
      case "dptStnWrkPlNm":
        // scwin.f_openCommonPopUp(3, ds_RailroadFareBT.getCellData(nRowInx, "dptStnWrkPlCd"), ds_RailroadFareBT.getCellData(nRowInx, "dptStnWrkPlNm"), 'T', 'T');
        scwin.f_openCommonPopUp(3, ds_RailroadFareBT.getCellData(nRowInx, "dptStnWrkPlCd"), sCellVal, 'T', 'T', nRowInx);
        break;
      case "arvStnWrkPlNm":
        // scwin.f_openCommonPopUp(4, ds_RailroadFareBT.getCellData(nRowInx, "arvStnWrkPlCd"), ds_RailroadFareBT.getCellData(nRowInx, "arvStnWrkPlNm"), 'T', 'T');
        scwin.f_openCommonPopUp(4, ds_RailroadFareBT.getCellData(nRowInx, "arvStnWrkPlCd"), sCellVal, 'T', 'T', nRowInx);
        break;
    }
  }
};

// 그리드 데이터가 사용자에 행위로 변경시
scwin.gr_selfInoutList_onviewchange = function (info) {
  /*
  {
      "oldValue": "",
      "newValue": "강릉",
      "rowIndex": 107,
      "colIndex": 0,
      "colId": "dptStnWrkPlNm"
  }
  */
  let sColId = gr_selfInoutList.getColumnID(info.colIndex);
  let nRowInx = info.rowIndex;
  let sCellVal = info.newValue;
  if ((sColId == 'dptStnWrkPlNm' || sColId == 'arvStnWrkPlNm') && sCellVal.trim() != '') {
    // 에디트 모드에서 값 변경 후 돋보기를 누르면 중복 발생 방지
    gr_selfInoutList.setEventPause('ontextimageclick', true);
    switch (sColId) {
      case "dptStnWrkPlNm":
        scwin.f_openCommonPopUp(3, ds_RailroadFareBT.getCellData(nRowInx, "dptStnWrkPlCd"), sCellVal, 'T', 'T', nRowInx);
        break;
      case "arvStnWrkPlNm":
        scwin.f_openCommonPopUp(4, ds_RailroadFareBT.getCellData(nRowInx, "arvStnWrkPlCd"), sCellVal, 'T', 'T', nRowInx);
        break;
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'운송명의',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'co_lc_srchCode1',search:'start',style:'',submenuSize:'auto',mandatory:'true','ev:onchange':'scwin.co_lc_srchCode1_onchange',ref:'data:ds_QueryCondition.transNmCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_startTrainWorkPlaceCd',nameId:'txt_startTrainWorkPlaceNm',id:'udc_comCode_starttrain',maxlengthCode:'5',objTypeCode:'Data',selectID:'retrieveTrainWorkPlace','ev:onclickEvent':'scwin.udc_comCode_starttrain_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_starttrain_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_starttrain_onviewchangeNameEvent',refDataCollection:'ds_QueryCondition',code:'dptStnWrkPlCd',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'화차구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'co_lc_srchCode2',search:'start',style:'',submenuSize:'auto',mandatory:'true',allOption:'',chooseOption:'true',ref:'data:ds_QueryCondition.adminfrtcar',chooseOptionLabel:'전체','ev:onviewchange':'scwin.co_lc_srchCode2_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'JN'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'편도'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PN'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'저수요'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'BT'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사유'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'공사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CH'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예비'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RV'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_endTrainWorkPlaceCd',nameId:'txt_endTrainWorkPlaceNm',id:'udc_comCode_endtrain',maxlengthCode:'5',selectID:'retrieveTrainWorkPlace','ev:onclickEvent':'scwin.udc_comCode_endtrain_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_endtrain_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_endtrain_onviewchangeNameEvent',code:'arvStnWrkPlCd',refDataCollection:'ds_QueryCondition',objTypeCode:'Data',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ed_srchFromDate',style:'',mandatory:'false',displayFormat:'yyyy/MM/dd',ref:'data:ds_QueryCondition.retrieveDt'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:' 조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'subTitle',label:'요율등록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_selfInoutList',gridDownFn:'scwin.f_toExcel',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_RailroadFareBT',id:'gr_selfInoutList',style:'',visibleRowNum:'12',defaultCellHeight:'20',readOnly:'true',rowStatusVisible:'true',focusMode:'row',focusMove:'true',visibleRowNumFix:'true','ev:oneditend':'scwin.gr_selfInoutList_oneditend',editModeEvent:'onclick',syncRowPositionOption:'style','ev:ontextimageclick':'scwin.gr_selfInoutList_ontextimageclick','ev:onviewchange':'scwin.gr_selfInoutList_onviewchange',sortable:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:'height:20px !important;'},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'구간',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'운송<br/>명의',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column38',value:'화차<br/>구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'적용일자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'규격별 단가',width:'420',colSpan:'6',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'출발역code',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'도착역code',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true',hiddenCol:'true'}}]},{T:1,N:'w2:row',A:{style:'height:20px !important;',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column30',value:'출발역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column29',value:'도착역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'20E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'20F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'40E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'40F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'45E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column32',value:'45F',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'dptStnWrkPlNm',inputType:'textImage',style:'',value:'',width:'90',textAlign:'left',colMerge:'true',editModeEvent:'onsecondclick'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvStnWrkPlNm',inputType:'textImage',style:'',value:'',width:'90',textAlign:'left',viewType:'default',colMerge:'true',upperColumn:'dptStnWrkPlNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transNmCd',inputType:'select',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'railRoadFareAdptClsCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'JN'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'편도'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PN'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'저수요'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'BT'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사유'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'공사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CH'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예비'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RV'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empty20',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',allowChar:'0-9',editModeEvent:'ondblclick',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'full20',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',allowChar:'0-9',editModeEvent:'ondblclick',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empty40',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',allowChar:'0-9',editModeEvent:'ondblclick',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'full40',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',allowChar:'0-9',editModeEvent:'ondblclick',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empty45',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',allowChar:'0-9',editModeEvent:'ondblclick',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'full45',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',allowChar:'0-9',editModeEvent:'ondblclick',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dptStnWrkPlCd',value:'',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvStnWrkPlCd',value:'',displayMode:'label',hiddenCol:'true',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',gridID:'gr_selfInoutList',id:'udc_bottomGrdBtn',btnDelYn:'N',rowAddFunction:'scwin.btn_rowAdd_onclick',btnRowAddYn:'Y',btnRowDelYn:'Y',rowDelFunction:'scwin.btn_rowDel_onclick',cancelFunction:'scwin.btn_Cancel_onclick'}}]}]}]},{T:1,N:'xf:group',A:{class:'info-list',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'foottitle',label:'',style:'',tagname:'p'}}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Update',style:'',type:'button','ev:onclick':'scwin.btn_Update_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})