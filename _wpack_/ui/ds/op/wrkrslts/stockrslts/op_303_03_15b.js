/*amd /ui/ds/op/wrkrslts/stockrslts/op_303_03_15b.xml 55909 156160cc3ab193e3c1a4364e58c3e5550723339e5e478f0619a3e06ba0a8a69f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expimpDomesticCls',name:'수출입',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslCd',name:'본선코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mcht',name:'화주',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kcg',name:'화종',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commStsCd',name:'품명상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stockPosBlck',name:'재고위치BLOCK',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stockPosBay',name:'재고위치BAY',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userClsCd',name:'사용자구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upperClntNo',name:'그룹거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'include0',name:'0포함',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveWorkPlaceEachGoods',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsNm',name:'수입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoPortcnt',name:'선사항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltNo',name:'PO번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockClntNo',name:'재고거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockClntNm',name:'재고거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcgCd',name:'화종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcgNm',name:'화종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commStsCd',name:'품명상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'normalSts',name:'정상상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockStat',name:'재고상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'재고',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockWt',name:'재고중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockCbm',name:'재고CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltsWt',name:'실적중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inStdDt',name:'입고기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inTerm',name:'장치일',dataType:'number'}},{T:1,N:'w2:column',A:{id:'lblock',name:'LBLOCK',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lbay',name:'LBAY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lrow',name:'LROW',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ltier',name:'LTIER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'loc',name:'위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockMgntNo',name:'재고관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prodDt',name:'생산일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alngvsslStockClsCd',name:'선측재고구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'badMgntNo',name:'불량관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'badRsn',name:'불량사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'badOutbrDt',name:'불량발생일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'사업장코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_second'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라미터1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'파라미터2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_blockList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bayList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_portcntList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.stockrslts.RetrieveYardEachStockPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_retrieveWorkPlaceEachGoods","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieveWorkPlaceEachGoods","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_blockList',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_second',target:'data:json,{"id":"ds_blockList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_blockList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_bayList',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_second',target:'data:json,{"id":"ds_bayList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_bayList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_portcntList',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_second',target:'data:json,{"id":"ds_portcntList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_portcntList_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.userClsCd = $c.data.getMemInfo($p, "userClsCd"); // 사용자구분코드 ( 01:그룹사, 02:협력업체(운송), 03:선사, 04:화주, 05:자가운송업체, 06:렌터카(고객), 07:정비(고객) )
scwin.loginClntNo = $c.data.getMemInfo($p, "clntNo"); // 거래처번호
scwin.loginClntNm = $c.data.getMemInfo($p, "clntNm"); // 거래처명
scwin.upperClntNo = $c.data.getMemInfo($p, "upperClntNo"); // 상위거래처번호
scwin.userId = $c.data.getMemInfo($p, "userId");

//scwin.txt_userClsCd = ""; 사용되지 않음
//scwin.txt_upperClntNo = ""; 사용되지 않음
//scwin.cur_unitState = "02"; 사용되지 않음

//-------------------------------------------------------------------------
// 페이지로드
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP194",
    compID: "acb_con_expimpDomesticCls"
  } //수출입
  ];
  $c.data.setCommonCode($p, codeOptions);
  acb_con_unitCd.setSelectedIndex(1);
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------

scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    //소스
    $c.gus.cfDisableAllBtn($p);
    ed_con_wrkPlCd.focus();
    var userId = scwin.userId;
    var userClsCd = scwin.userClsCd;
    if (userClsCd != "01" && userId != "kh1472") {
      ed_stockClntCd.setValue(scwin.loginClntNo);
      ed_stockClntNm.setValue(scwin.loginClntNm);
      ed_stockClntCd.setReadOnly(false);
      ed_stockClntNm.setDisabled(true);
      btn_stockClntCd.setDisabled(true);
    }
    if (userId == "kh1472")
      //7W01
      {
        ed_con_wrkPlCd.setValue("7W01");
        ed_con_wrkPlNm.setValue("보랄대구창고");
        $c.gus.cfDisableObjects($p, [ed_con_wrkPlCd, ed_con_wrkPlNm]);
      }

    // 테스트 데이터
    // ds_search.set("wrkPlCd", "6F02");
    // ds_search.set("commCd", "30000042");
    // ds_search.set("expimpDomesticCls", "I");

    // ds_search.set("wrkPlCd", "1W04");
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  var userClsCd = scwin.userClsCd;
  var userId = scwin.userId;
  if (userId == "230117")
    //5W01 보랄광주창고
    {
      ed_con_wrkPlCd.setValue("5W01");
      ed_con_wrkPlNm.setValue("보랄광주창고");
      $c.gus.cfDisableObjects($p, [ed_con_wrkPlCd, ed_con_wrkPlNm]);
      userClsCd = "01";
    }
  if (ed_con_wrkPlCd.getValue() == "") {
    $c.gus.cfAlertMsg($p, "장치장은 필수입력입니다.");
    ed_con_wrkPlCd.focus();
    return;
  }
  if (cbx_include0.getValue() == "1" && ed_con_commCd.getValue() == "") {
    $c.win.alert($p, "0 재고조회시 품명을 입력하여 주십시오.");
    ed_con_commCd.focus();
    return;
  }
  ds_search.set("userClsCd", userClsCd);
  ds_search.set("upperClntNo", scwin.upperClntNo);

  // 송무시스템 Mail보내기 테스트해봄
  //var strAtcion = "/cm.bc.comnmgnt.mailmgnt.RetrieveScheduledMailCMD.do"

  ds_retrieveWorkPlaceEachGoods.setJSON([]);
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회 조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  ds_portcntList.removeAll();
  acb_con_expimpDomesticCls.setSelectedIndex(0);
  acb_con_commStsCd.setSelectedIndex(0);
  var userClsCd = scwin.userClsCd;
  if (userClsCd != "01") {
    $c.gus.cfInitObjects($p, [ed_con_wrkPlCd, ed_con_wrkPlNm, ed_con_cvsslCd, ed_con_cvsslNm, ed_con_kcg, ed_con_kcgNm, ed_con_commCd, ed_con_commNm, ed_cvsslMgntNo]);
  } else {
    $c.gus.cfInitObjects($p, [ed_con_wrkPlCd, ed_con_wrkPlNm, ed_con_cvsslCd, ed_con_cvsslNm, ed_con_kcg, ed_con_kcgNm, ed_con_commCd, ed_con_commNm, ed_stockClntCd, ed_stockClntNm, ed_cvsslMgntNo]);
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 장치장 팝업
      udc_con_wrkPlCd.setSelectId("retrieveWrkPlInfo"); // XML상의 SELECT ID
      udc_con_wrkPlCd.cfCommonPopUp(scwin.udc_con_wrkPlCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , ',,,5' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "장치장,장치장코드,장치장명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 도착지 팝업
      udc_con_cvsslCd.setSelectId("retrieveVsslCdInfo"); // XML상의 SELECT ID
      udc_con_cvsslCd.cfCommonPopUp(scwin.udc_con_cvsslCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "본선명조회,본선코드,본선명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      // 화종 팝업
      udc_con_kcg.setSelectId("retrieveKcgInfo"); // XML상의 SELECT ID
      udc_con_kcg.cfCommonPopUp(scwin.udc_con_kcg_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "화종조회,화종코드,화종명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      // 품명 팝업
      udc_con_commCd.setSelectId("retrieveCommInfo"); // XML상의 SELECT ID
      udc_con_commCd.cfCommonPopUp(scwin.udc_con_commCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      //,"3,4,,,ZZZZ" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      //20161017 석고보드(936)을 검색할수없어 검색레벨 변경
      , "2,4,,,ZZZZ" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "품명조회,품명코드,품명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 5:
      // 화주 팝업
      udc_stockClntCd.setSelectId("retrieveClntList"); // XML상의 SELECT ID
      udc_stockClntCd.cfCommonPopUp(scwin.udc_stockClntCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "화주,화주코드,화주명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
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

//-------------------------------------------------------------------------
// 본선관리번호검색 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function () {
  var args = new Array();
  args[0] = ed_cvsslMgntNo.getValue(); //본선관리번호
  args[1] = ""; //수출입구분코드

  let win_url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml";
  let opts = {
    id: "op_204_01_07p",
    popupName: "본선관리번호검색팝업",
    modal: true,
    type: "browserPopup",
    width: 1200,
    height: 650,
    title: "본선관리번호검색팝업"
  };
  let rtnValues = await $c.win.openPopup($p, win_url, opts, args);
  if (rtnValues != null) {
    ed_cvsslMgntNo.setValue(rtnValues[0]); //본선관리번호
    //rtnValues[0]; 본선관리번호
    //rtnValues[1]; 선박코드
    //rtnValues[2]; 선박명
    //rtnValues[3]; 마감일자
    //rtnValues[4]; 마감시간
    //rtnValues[5]; 도착(입항)일자
    //rtnValues[6]; 도착(입항)시간
    //rtnValues[7]; 출발(출항)일자
    //rtnValues[8]; 출발(출항)시간
    //rtnValues[9]; 선사항차
    //rtnValues[10]; 항로
    //rtnValues[11]; 항구코드
    //rtnValues[12]; 부두코드
    //rtnValues[13]; 부두코드명
  }
};

//-------------------------------------------------------------------------
// BLOCK 콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveSecond = function (param1) {
  //dma_second.setEmptyValue();
  dma_second.set("sysCd", "WorkPlaceEachGoodsEBC");
  dma_second.set("queryId", "retrivecBlockList");
  dma_second.set("param1", param1);
  dma_second.set("param2", "");
  $c.sbm.execute($p, sbm_blockList);
};

//-------------------------------------------------------------------------
// BAY 콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveSecond2 = function (param1, param2) {
  //dma_second.setEmptyValue();
  dma_second.set("sysCd", "WorkPlaceEachGoodsEBC");
  dma_second.set("queryId", "retrivecBayList");
  dma_second.set("param1", param1);
  dma_second.set("param2", param2);
  $c.sbm.execute($p, sbm_bayList);
};

//-------------------------------------------------------------------------
// 항차 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveSecond3 = function (param1) {
  //dma_second.setEmptyValue();
  dma_second.set("sysCd", "WorkPlaceEachGoodsEBC");
  dma_second.set("queryId", "retrivecPortcntList");
  dma_second.set("param1", param1);
  dma_second.set("param2", "");
  $c.sbm.execute($p, sbm_portcntList);
};

//-------------------------------------------------------------------------
// 장치장재고 조정화면으로 이동
//-------------------------------------------------------------------------
scwin.f_linkModify = async function () {
  var row = ds_retrieveWorkPlaceEachGoods.getRowPosition();
  var args = new Array();
  args[0] = ds_retrieveWorkPlaceEachGoods.getCellData(row, "wrkPlCd");
  args[1] = ds_retrieveWorkPlaceEachGoods.getCellData(row, "lblock");
  args[2] = ds_retrieveWorkPlaceEachGoods.getCellData(row, "stockStat");
  args[3] = ds_retrieveWorkPlaceEachGoods.getCellData(row, "stockMgntNo");
  args[4] = ds_retrieveWorkPlaceEachGoods.getCellData(row, "badMgntNo");
  args[5] = ds_retrieveWorkPlaceEachGoods.getCellData(row, "rltNo");
  args[6] = ds_retrieveWorkPlaceEachGoods.getCellData(row, "commCd");
  args[7] = ds_retrieveWorkPlaceEachGoods.getCellData(row, "cvsslMgntNo");
  let win_url = "/ui/ds/op/wrkrslts/stockrslts/op_303_02_03p.xml";
  let opts = {
    id: "op_303_02_03p",
    popupName: "장치장 재고조정",
    modal: true,
    type: "browserPopup",
    width: 1300,
    height: 960,
    title: "장치장 재고조정"
  };
  let ret = await $c.win.openPopup($p, win_url, opts, args);
  if (ret) {
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 중량단위 바꿨을 때 처리
//-------------------------------------------------------------------------
scwin.f_UnitChage = function (flag) {
  // cfConvert2Weight(값,"From 단위","To 단위")
  // 벌크일때만....
  var change_unitState = acb_con_unitCd.getValue(); // "01"-->"TON", "02"-->"KG"

  if (change_unitState == "01") {
    gr_retrieveWorkPlaceEachGoods.setHeaderValue("stockWtHd", "중량(Ton)");
  } else {
    gr_retrieveWorkPlaceEachGoods.setHeaderValue("stockWtHd", "중량(Kg)");
  }
};
scwin.f_gridToExcel = function (argGrid, argTitle) {
  // 검색조건
  var con_portcnt = "";
  var con_stockPosBay = "";
  if (acb_con_portcnt.getText() != null) {
    con_portcnt = acb_con_portcnt.getText(true);
  }
  if (acb_con_stockPosBay.getText() != null) {
    con_stockPosBay = acb_con_stockPosBay.getText(true);
  }
  var vDay = "장치장 | " + ed_con_wrkPlNm.getValue() + " | " + "본선명 | " + ed_con_cvsslNm.getValue() + " | " + "본선관리번호 | " + ed_cvsslMgntNo.getValue() + " | " + "항차 | " + con_portcnt + " | " + "화주 | " + ed_stockClntNm.getValue() + " | " + "품명 | " + ed_con_commNm.getValue() + " | " + "화종 | " + ed_con_kcgNm.getValue() + " | " + "수출입 | " + acb_con_expimpDomesticCls.getText(true) + " | " + "불량상태 | " + acb_con_commStsCd.getText(true) + " | " + "재고위치 | " + acb_con_stockPosBlck.getText(true) + " / " + con_stockPosBay + " | " + "작업단위 | " + acb_con_unitCd.getText(true);
  const options = {
    fileName: "장치장별 재고현황.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "장치장별 재고현황",
    startRowIndex: 3,
    startColumnIndex: 0
  };

  // 타이틀
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 23,
    text: "장치장별 재고현황",
    textAlign: "center",
    drawBorder: false,
    fontSize: "18px"
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 23,
    text: vDay,
    textAlign: "left",
    drawBorder: false
  }];
  $c.data.downloadGridViewExcel($p, gr_retrieveWorkPlaceEachGoods, options, infoArr);
};
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  tbx_totalRows.setValue(ds_retrieveWorkPlaceEachGoods.getRowCount());
  if (ds_retrieveWorkPlaceEachGoods.getRowCount() == 0) {
    $c.gus.cfDisableAllBtn($p);
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
  } else {
    $c.gus.cfEnableAllBtn($p);
    gr_retrieveWorkPlaceEachGoods.setFocusedCell(0, "impExpClsNm", false);
  }
  if (acb_con_unitCd.getValue() == 01) {
    for (i = 0; i < ds_retrieveWorkPlaceEachGoods.getRowCount(); i++) {
      var a = ds_retrieveWorkPlaceEachGoods.getCellData(i, "stockWt") / 1000;
      ds_retrieveWorkPlaceEachGoods.setCellData(i, "stockWt", a);
    }
  }
};
scwin.acb_con_expimpDomesticCls_onviewchange = function (info) {
  var code = acb_con_expimpDomesticCls.getValue();
  if (code == "D") {
    $c.gus.cfEnableObj($p, ed_con_cvsslCd, false);
    $c.gus.cfEnableObj($p, ed_con_cvsslNm, false);
    $c.gus.cfEnableObj($p, ed_con_cvsslNm, false);
    $c.gus.cfEnableObj($p, btn_con_cvsslCd, false);
    ed_con_cvsslCd.setValue("");
    ed_con_cvsslNm.setValue("");
    acb_con_portcnt.setSelectedIndex(0);
  } else if (code != "D") {
    $c.gus.cfEnableObj($p, ed_con_cvsslCd, true);
    $c.gus.cfEnableObj($p, ed_con_cvsslNm, true);
    $c.gus.cfEnableObj($p, acb_con_portcnt, true);
    $c.gus.cfEnableObj($p, btn_con_cvsslCd, true);
  }
};

//-------------------------------------------------------------------------
// 재고위치1 콤보박스 onviewchange 이벤트
//-------------------------------------------------------------------------
scwin.acb_con_stockPosBlck_onviewchange = function (info) {
  var param1 = ed_con_wrkPlCd.getValue();
  var param2 = acb_con_stockPosBlck.getValue();
  scwin.f_RetrieveSecond2(param1, param2);
};
scwin.sbm_blockList_submitdone = function (e) {
  ds_blockList.insertRow(0);
  ds_blockList.setCellData(0, "name", "전체");
  ds_blockList.setCellData(0, "code", "");
  scwin.acb_con_stockPosBlck_onviewchange();
};
scwin.sbm_bayList_submitdone = function (e) {
  ds_bayList.insertRow(0);
  ds_bayList.setCellData(0, "name", "전체");
  ds_bayList.setCellData(0, "code", "");
};
scwin.sbm_portcntList_submitdone = function (e) {
  ds_portcntList.insertRow(0);
  ds_portcntList.setCellData(0, "name", "전체");
  ds_portcntList.setCellData(0, "code", "");
};
scwin.gr_retrieveWorkPlaceEachGoods_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_linkModify();
};
scwin.acb_con_unitCd_onviewchange = function (info) {};

//-------------------------------------------------------------------------
// 작업단위 콤보박스 onchange 이벤트
//-------------------------------------------------------------------------
scwin.acb_con_unitCd_onchange = function (info) {
  scwin.f_UnitChage(2);
};

//-------------------------------------------------------------------------
// 장치장 UDC START
//-------------------------------------------------------------------------
scwin.udc_con_wrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_con_wrkPlCd.getValue(), ed_con_wrkPlNm.getValue(), 'T', 'T');
};
scwin.udc_con_wrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_con_wrkPlCd, ed_con_wrkPlNm, 1);
};
scwin.udc_con_wrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_con_wrkPlNm, ed_con_wrkPlCd, 1, false);
};
scwin.udc_con_wrkPlCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_con_wrkPlCd, ed_con_wrkPlNm);
  if (ret != null) {
    scwin.f_RetrieveSecond(ret[0]);
  }
};
//-------------------------------------------------------------------------
// 장치장 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 본선 UDC START
//-------------------------------------------------------------------------
scwin.udc_con_cvsslCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_con_cvsslCd.getValue(), ed_con_cvsslNm.getValue(), 'T', 'T');
};
scwin.udc_con_cvsslCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_con_cvsslCd, ed_con_cvsslNm, 2);
};
scwin.udc_con_cvsslCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_con_cvsslNm, ed_con_cvsslCd, 2, false);
};
scwin.udc_con_cvsslCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_con_cvsslCd, ed_con_cvsslNm);
  if (ret != null) {
    scwin.f_RetrieveSecond3(ret[0]);
  }
};
//-------------------------------------------------------------------------
// 본선 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 화주 UDC START
//-------------------------------------------------------------------------
scwin.udc_stockClntCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_stockClntCd.getValue(), ed_stockClntNm.getValue(), 'T', 'T');
};
scwin.udc_stockClntCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_stockClntCd, ed_stockClntNm, 5);
};
scwin.udc_stockClntCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_stockClntNm, ed_stockClntCd, 5, false);
};
scwin.udc_stockClntCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_stockClntCd, ed_stockClntNm);
};
//-------------------------------------------------------------------------
// 화주 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 품명 UDC START
//-------------------------------------------------------------------------
scwin.udc_con_commCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_con_commCd.getValue(), ed_con_commNm.getValue(), 'T', 'T');
};
scwin.udc_con_commCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_con_commCd, ed_con_commNm, 4);
};
scwin.udc_con_commCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_con_commNm, ed_con_commCd, 4, false);
};
scwin.udc_con_commCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_con_commCd, ed_con_commNm);
};
//-------------------------------------------------------------------------
// 품명 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 화종 UDC START
//-------------------------------------------------------------------------
scwin.udc_con_kcg_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_con_kcg.getValue(), ed_con_kcgNm.getValue(), 'T', 'T');
};
scwin.udc_con_kcg_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_con_kcg, ed_con_kcgNm, 3);
};
scwin.udc_con_kcg_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_con_kcgNm, ed_con_kcg, 3, false);
};
scwin.udc_con_kcg_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_con_kcg, ed_con_kcgNm);
};
//-------------------------------------------------------------------------
// 화종 UDC END
//-------------------------------------------------------------------------
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'장치장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_con_wrkPlCd',id:'udc_con_wrkPlCd',btnId:'btn_con_wrkPlCd',nameId:'ed_con_wrkPlNm',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9','ev:onclickEvent':'scwin.udc_con_wrkPlCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_con_wrkPlCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_con_wrkPlCd_onviewchangeNameEvent',mandatoryCode:'true',refDataCollection:'ds_search',code:'wrkPlCd',validTitle:'장치장'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_con_cvsslCd',id:'udc_con_cvsslCd',btnId:'btn_con_cvsslCd',nameId:'ed_con_cvsslNm',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',maxlengthCode:'6','ev:onclickEvent':'scwin.udc_con_cvsslCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_con_cvsslCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_con_cvsslCd_onviewchangeNameEvent',refDataCollection:'ds_search',code:'cvsslCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w85',id:'ed_cvsslMgntNo',placeholder:'',style:'',maxlength:'8',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.onkeyup',ref:'data:ds_search.cvsslMgntNo'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.f_openPopUp'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'acb_con_portcnt',search:'start',style:'',submenuSize:'auto',ref:'data:ds_search.portcnt',allOption:'',chooseOption:'',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_portcntList'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_stockClntCd',nameId:'ed_stockClntNm',id:'udc_stockClntCd',btnId:'btn_stockClntCd',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',maxlengthCode:'6','ev:onclickEvent':'scwin.udc_stockClntCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_stockClntCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_stockClntCd_onviewchangeNameEvent',refDataCollection:'ds_search',code:'clntNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',maxlengthCode:'8',codeId:'ed_con_commCd',nameId:'ed_con_commNm',id:'udc_con_commCd',btnId:'btn_con_commCd',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_con_commCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_con_commCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_con_commCd_onviewchangeNameEvent',refDataCollection:'ds_search',code:'commCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화종 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_con_kcg',btnId:'btn_con_kcg',id:'udc_con_kcg',nameId:'ed_con_kcgNm',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_con_kcg_onclickEvent','ev:onblurCodeEvent':'scwin.udc_con_kcg_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_con_kcg_onviewchangeNameEvent',refDataCollection:'ds_search',code:'kcg'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'acb_con_expimpDomesticCls',search:'start',style:'',submenuSize:'auto','ev:onviewchange':'scwin.acb_con_expimpDomesticCls_onviewchange',ref:'data:ds_search.expimpDomesticCls',allOption:'',chooseOption:'true',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'재고상태 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'acb_con_commStsCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:ds_search.commStsCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'가용재고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'품질판정대기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'불용재고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B4'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'재고위치',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'acb_con_stockPosBlck',class:' w85',allOption:'',chooseOption:'',chooseOptionLabel:'전체',ref:'data:ds_search.stockPosBlck','ev:onviewchange':'scwin.acb_con_stockPosBlck_onviewchange',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_blockList'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'/',class:''}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'acb_con_stockPosBay',class:' w85',allOption:'',chooseOption:'',ref:'data:ds_search.stockPosBay',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_bayList'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업단위',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w85',editType:'select',id:'acb_con_unitCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'','ev:onchange':'scwin.acb_con_unitCd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'TON'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'KG'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'0 재고포함',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_include0',ref:'data:ds_search.include0',renderType:'checkboxgroup',rows:'',selectedindex:'',style:'',value:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_retrieveWorkPlaceEachGoods',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_gridToExcel',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_retrieveWorkPlaceEachGoods',id:'gr_retrieveWorkPlaceEachGoods',style:'',visibleRowNum:'12',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_retrieveWorkPlaceEachGoods_oncelldblclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column103',value:'장치장 ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column100',value:'수입수출구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'수출입',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'본선<br/>관리번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'BL/BK/<br/>출하지시번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'재고<br/>거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'화주',width:'150'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column106',value:'화종',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'품명코드',value:'품명코드',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'품명',width:'150'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'입고일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'재고<br/>관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column46',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'stockWtHd',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column40',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column112',value:'본선코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column34',value:'본선명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',value:'항차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',value:'입항일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column76',value:'재고상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column73',value:'회사',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column70',value:'사업장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'장치일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column115',value:'LBAY',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column121',value:'LROW',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column118',value:'LTIER',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column94',value:'로케이션',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column124',value:'위치정보',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column88',value:'거래처관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column82',value:'생산일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column85',value:'선측재고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column97',value:'불량관리번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkPlNm ',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'impExpClsCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsNm',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rltNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockClntNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockClntNm',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'kcgNm',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'commCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inStdDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockMgntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'stockQty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'stockWt',displayMode:'label',textAlign:'right',displayFormat:'#,##0.000',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'stockCbm',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'vsslNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'shpCoPortcnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'commStsCd',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'가용재고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'품질판정대기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'불용재고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B4'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'coCd',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'bizLongCd',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inTerm',displayMode:'label',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lbay',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lrow',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ltier',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lblock',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'loc',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntMgntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'prodDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'alngvsslStockClsCd',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'badMgntNo',displayMode:'label',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column105',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column102',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column28',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column108',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column111',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column48',displayMode:'label',textAlign:'right',expression:'sum(\'stockQty\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',id:'column45',displayMode:'label',textAlign:'right',expression:'sum(\'stockWt\')',dataType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column42',displayMode:'label',textAlign:'right',expression:'sum(\'stockCbm\')',dataType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column114',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column81',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column78',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column75',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column72',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column117',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column123',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column120',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column96',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column126',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column90',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column84',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column87',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column99',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_linkModify',style:'',type:'button','ev:onclick':'scwin.f_linkModify',objType:'bUpdate',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:3,text:'장치장 재고조정'}]}]}]}]}]}]}]}]}]})