/*amd /ui/ds/op/wrkplan/railroadwrkplan/op_203_01_12b.xml 43189 88c5682831f026a3dd929e31dda11075d6876d91bf28e9dfb594e22b77540510 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'check',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsCd',name:'전송구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'appDt',name:'전송;일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarSeq',name:'전송;순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarNo',name:'예약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docCd',name:'문서종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'요청;일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndStnCd',name:'발송역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndStnNm',name:'발송역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'운송작업;지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRsltsSeq',name:'운송실적;순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너;순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'작업경로;순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계;순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'CNTRNO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNrmCd',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'SealNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtNm1',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnNo',name:'열차번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarNo',name:'화차번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoNm',name:'운송사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnTrnsCoCd',name:'철도소;운송업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnTrnsCoNm',name:'철도소;운송업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvExpectDt',name:'도착예정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinClosingDt',name:'반입마감일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'snd',name:'송신자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcv',name:'수신자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndId',name:'송신자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvId',name:'수신자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkNo',name:'Booking No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doNo',name:'D/O',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expImpCls',name:'수출입;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customsCls',name:'세관검사;대상여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTrnsCls',name:'보세운송;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drtClrn',name:'직통관;유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'모선코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipCoCd',name:'선사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvPortYm',name:'입항년도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'QTY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'disPortCd',name:'양하항코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadPlCd',name:'철송장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadPlNm',name:'철송장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinPlCd',name:'반입터미널',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWgt',name:'총중량;(Kg)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vhclCd',name:'차량코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vhclNo',name:'실제차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvTelNo',name:'기사;핸드폰번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalCnt',name:'총개수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_send',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'check',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsCd',name:'전송구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'appDt',name:'전송;일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarSeq',name:'전송;순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarNo',name:'예약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docCd',name:'문서종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'요청;일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndStnCd',name:'발송역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndStnNm',name:'발송역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'운송작업;지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRsltsSeq',name:'운송실적;순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너;순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'작업경로;순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계;순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'CNTRNO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNrmCd',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'SealNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtNm1',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnNo',name:'열차번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarNo',name:'화차번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoNm',name:'운송사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnTrnsCoCd',name:'철도소;운송업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnTrnsCoNm',name:'철도소;운송업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvExpectDt',name:'도착예정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinClosingDt',name:'반입마감일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'snd',name:'송신자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcv',name:'수신자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndId',name:'송신자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvId',name:'수신자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkNo',name:'Booking No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doNo',name:'D/O',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expImpCls',name:'수출입;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customsCls',name:'세관검사;대상여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTrnsCls',name:'보세운송;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drtClrn',name:'직통관;유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'모선코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipCoCd',name:'선사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvPortYm',name:'입항년도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'QTY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'disPortCd',name:'양하항코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadPlCd',name:'철송장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadPlNm',name:'철송장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinPlCd',name:'반입터미널',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWgt',name:'총중량;(Kg)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vhclCd',name:'차량코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vhclNo',name:'실제차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvTelNo',name:'기사;핸드폰번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalCnt',name:'총개수',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'dptStnCd',name:'출발역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvStnCd',name:'도착역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDtFrom',name:'요청일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDtTo',name:'요청일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkplan.railroadwrkplan.RetrieveRailroadArrivalWorkPlanCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_retrieve_submit','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_sendEdi',action:'/ds.op.wrkplan.railroadwrkplan.SendRailroadArrivalWorkPlanEDICMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"all","id":"ds_send","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_sendEdi_submit','ev:submitdone':'scwin.sbm_sendEdi_submitdone','ev:submiterror':'scwin.sbm_sendEdi_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_203_01_12b 
// 이름     : 철송 도착예정정보 전송
// 경로     : 물류/작업계획/철송/
// 작 성 자 : 조성빈
// 작 업 일 : 2026-01-02
// 사용계정 : 내부
// 비고     : 
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.fromDay;
scwin.toDay;
scwin.loginDTO;
scwin.sUserId;
scwin.sUserNm;
scwin.sUserClsCd;
scwin.sClntNo;
scwin.sClntNm;
scwin.oldRowValue;
scwin.dateStr1;
scwin.dateStr2;
scwin.edisndYn;
scwin.gv_loabranCd;
scwin.onpageload = function () {
  // 현재일자
  scwin.fromDay = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.toDay = $c.date.addDate($p, scwin.fromDay, 7);
  scwin.loginDTO = $c.data.getMemInfo($p);
  scwin.sUserId = $c.data.getMemInfo($p, "userId").trim();
  scwin.sUserNm = $c.data.getMemInfo($p, "userNm").trim();
  scwin.sUserClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "userClsCd").trim()) ? "" : $c.data.getMemInfo($p, "userClsCd").trim();
  scwin.sClntNo = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "clntNo").trim()) ? "" : $c.data.getMemInfo($p, "clntNo").trim();
  scwin.sClntNm = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "clntNm").trim()) ? "" : $c.data.getMemInfo($p, "clntNm").trim();
  scwin.oldRowValue = 0;
  scwin.dateStr1 = scwin.fromDay;
  scwin.dateStr2 = scwin.toDay;
  scwin.edisndYn = "0";
  scwin.gv_loabranCd = $c.data.getMemInfo($p, "loUpperLobranCd");
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    // gr_master.titleHeight = "30";
    $c.gus.cfDisableBtn($p, [btn_save]);
    ed_dptStnCd.setValue("4R01");
    ed_dptStnNm.setValue("오봉역");
    ed_arvStnCd.setValue("6R12");
    ed_arvStnNm.setValue("부산신항역");
    ica_reqDtFrom.setValue(scwin.dateStr1);
    ica_reqDtTo.setValue(scwin.dateStr1);

    // ica_reqDtFrom.setValue("20140501");
    // ica_reqDtTo.setValue("20140501");

    $c.gus.cfEnableObj($p, ed_dptStnNm, false);
    $c.gus.cfEnableObj($p, ed_dptStnCd, false);
    $c.gus.cfEnableObj($p, ed_arvStnNm, false);
    $c.gus.cfEnableObj($p, ed_arvStnCd, false);
    scwin.f_qeryList();
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
//  조회
//-------------------------------------------------------------------------
scwin.f_qeryList = async function () {
  if (($c.gus.cfIsNull($p, ed_dptStnCd.getValue()) || ed_dptStnCd.getValue() == "") && ($c.gus.cfIsNull($p, ed_arvStnCd.getValue()) || ed_arvStnCd.getValue() == "")) {
    await $c.win.alert($p, "출발역 또는 도착역  둘중에 하나는 필수로 입력 하셔야 됩니다!!!");
    return false;
  }
  ds_condition.set("dptStnCd", ed_dptStnCd.getValue().trim()); // 출발역
  ds_condition.set("arvStnCd", ed_arvStnCd.getValue().trim()); // 도착역
  ds_condition.set("reqDtFrom", ica_reqDtFrom.getValue().trim()); // 요청일자
  ds_condition.set("reqDtTo", ica_reqDtTo.getValue().trim()); // 요청일    
  ds_condition.set("cntrNo", ed_cntrNo.getValue()); // 컨테이너번호         

  $c.sbm.execute($p, sbm_retrieve);
  $c.gus.cfEnableObjects($p, [btn_save]);
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
};

//-------------------------------------------------------------------------
// EDI 전송
//-------------------------------------------------------------------------
scwin.f_Send = async function () {
  ds_send.removeAll();
  var jsonData = [];
  for (var i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "expImpCls") == "E") {
      if (ds_master.getCellData(i, "bkNo") == "") {
        await $c.win.alert($p, "수출 건의 경우 Booking No 은(는) 필수입니다.");
        return false;
      }
    }
    if (ds_master.getCellData(i, "expImpCls") == "I") {
      if (ds_master.getCellData(i, "blNo") == "") {
        await $c.win.alert($p, "수입 건의 경우 B/L 은(는) 필수입니다.");
        return false;
      }
      if (ds_master.getCellData(i, "fullEmptyClsCd") == 5) {
        if (ds_master.getCellData(i, "doNo") == "") {
          await $c.win.alert($p, "수입 Full 컨테이너의 경우 D/O 은(는) 필수입니다.");
          return false;
        }
      }
    }
    if (ds_master.getCellData(i, "chk") == "T") {
      jsonData.push(ds_master.getAllJSON()[i]);
      // await scwin.f_CopyDataRow(ds_master, ds_send, i);  
    }
  }
  ds_send.setJSON(jsonData);
  $c.sbm.execute($p, sbm_sendEdi);
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
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 
  switch (disGubun) {
    case 1:
      // 출발역 역명 팝업	
      udc_dptStn.setSelectId('retrieveTrainWorkPlace');
      udc_dptStn.cfCommonPopUp(scwin.udc_dptStn_callBackFunc // XML상의 SELECT ID	
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
      , "역명조회,작업장코드,작업장명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 도착역 역명 팝업	
      udc_arvStn.setSelectId('retrieveTrainWorkPlace');
      udc_arvStn.cfCommonPopUp(scwin.udc_arvStn_callBackFunc // XML상의 SELECT ID	
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
      , "역명조회,작업장코드,작업장명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

//-------------------------------------------------------------------------
// 데이터셋 Row 복사
//-------------------------------------------------------------------------
scwin.f_CopyDataRow = async function (sourceDataset, targetDataset, sourceRow, targetRow, sourceColumns, targetColumns, actionAfterRowAdded) {
  try {
    if (sourceDataset == null) {
      throw "원본 데이터셋이 정의되지 않았습니다.";
    }
    if (targetDataset == null) {
      throw "대상 데이터셋이 정의되지 않았습니다.";
    }
    if (sourceColumns == null) {
      sourceColumns = await scwin.f_GetColumnNames(sourceDataset);
    }
    if (targetColumns == null) {
      targetColumns = sourceColumns;
    }
    if (sourceRow == null) {
      sourceRow = sourceDataset.getRowPosition();
    }
    if (targetRow == null) {
      targetRow = scwin.f_AddDataRow(targetDataset);
    }
    for (var i = 0; i < sourceColumns.length; i++) {
      if ($c.gus.cfIsNull($p, sourceColumns[i]) || $c.gus.cfIsNull($p, targetColumns[i])) continue;
      targetDataset.setCellData(targetRow, targetColumns[i], sourceDataset.getCellData(sourceRow, sourceColumns[i]));
      if (actionAfterRowAdded != null) eval(actionAfterRowAdded);
    }
    return targetRow;
  } catch (e) {
    await $c.gus.cfAlertMsg($p, "[scwin.f_CopyDataRow]" + e);
  }
};

//-------------------------------------------------------------------------
// 데이터셋의 모든 컬럼명을 배열로 반환
//-------------------------------------------------------------------------
scwin.f_GetColumnNames = async function (dataSet) {
  try {
    if (dataSet == null) throw "데이터셋이 정의되지 않았습니다.";
    if (dataSet.getColumnCount() == 0) return null;
    var rtnArray = new Array(dataSet.getColumnCount());
    for (var i = 0; i < dataSet.getColumnCount(); i++) {
      rtnArray[i] = dataSet.getColumnID(i);
    }
    if (rtnArray.length == 0) return null;else return rtnArray;
  } catch (e) {
    await $c.gus.cfAlertMsg($p, "[scwin.f_GetColumnNames] " + e.Description);
  }
};

//-------------------------------------------------------------------------
// 데이터셋의 행을 추가하고 RowPosition을 반환
//-------------------------------------------------------------------------
scwin.f_AddDataRow = function (dataSet) {
  var rowIdx = dataSet.insertRow();
  return rowIdx;
};
scwin.udc_dptStn_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_dptStnNm, ed_dptStnCd, 1, false);
};
scwin.udc_dptStn_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_dptStnCd.getValue(), ed_dptStnNm.getValue(), 'T', 'F');
};
scwin.udc_dptStn_onblurCodeEvent = function (e) {
  if (ed_dptStnCd.getValue() != "") {
    scwin.f_openCommonPopUp(1, ed_dptStnCd.getValue(), '', 'T', 'F');
  }
};
scwin.udc_arvStn_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_arvStnNm, ed_arvStnCd, 2, false);
};
scwin.udc_arvStn_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_arvStnCd.getValue(), ed_arvStnNm.getValue(), 'T', 'F');
};
scwin.udc_arvStn_onblurCodeEvent = function (e) {
  if (ed_arvStnCd.getValue() != "") {
    scwin.f_openCommonPopUp(2, ed_arvStnCd.getValue(), '', 'T', 'F');
  }
};
scwin.ed_cntrNo_onkeyup = function (e) {
  $c.gus.cfToUpper($p, this);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_qeryList();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Send();
};
scwin.sbm_retrieve_submit = function (e) {};
scwin.sbm_retrieve_submitdone = async function (e) {
  var rowCnt = ds_master.getRowCount();
  if (rowCnt > 0) {
    txt_totalRows.setValue(rowCnt);
    for (i = 0; i < rowCnt; i++) {
      ds_master.setCellData(i, "arvPortYm", '2018');
    }
    //cfShowTotalRows(totalRows, ds_master.RealCount(1,ds_master.getRowCount()));
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {};
scwin.sbm_sendEdi_submit = function (e) {};
scwin.sbm_sendEdi_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_qeryList();
};
scwin.sbm_sendEdi_submiterror = function (e) {};
scwin.gr_master_oncellclick = async function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "chk":
      if (ds_master.getCellData(rowIndex, "sndClsCd") != "미생성") {
        await $c.win.alert($p, "미생성인 건에 한하여 EDI 전송이 가능합니다.");
        ds_master.setCellData(rowIndex, "chk", "F");
        return false;
      }
      break;
  }
};
scwin.gr_master_onheaderclick = async function (headerId) {
  if (headerId == "header_chk") {
    var bCheck = gr_master.getHeaderValue("header_chk");
    var chk = bCheck ? "T" : "F";
    var cr = ds_master.getRowCount();
    if (cr > 0) {
      if (chk == "T") {
        for (var i = 0; i < cr; i++) {
          ds_master.setCellData(i, "chk", chk);
          if (ds_master.getCellData(i, "sndClsCd") != "미생성") {
            await $c.win.alert($p, "미생성인 건에 한하여 EDI 전송이 가능합니다.");
            for (var j = 0; j < cr; j++) {
              ds_master.setCellData(j, "chk", "F");
            }
            return false;
          }
        }
      }
    }
  }
};
scwin.udc_dptStn_callBackFunc = function (ref) {
  //도착지코드          도착지명
  $c.gus.cfSetReturnValue($p, ref, ed_dptStnCd, ed_dptStnNm);
  if (ref != null) {
    scwin.edisndYn = ref[2];
  }
};
scwin.udc_arvStn_callBackFunc = function (ref) {
  //도착지코드          도착지명
  $c.gus.cfSetReturnValue($p, ref, ed_arvStnCd, ed_arvStnNm);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_dptStn',codeId:'ed_dptStnCd',nameId:'ed_dptStnNm',validTitle:'출발역',maxlengthCode:'6',objTypeCode:'key',mandatoryCode:'true',UpperFlagCode:'1',objTypeName:'data',mandatoryName:'true','ev:onviewchangeNameEvent':'scwin.udc_dptStn_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_dptStn_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dptStn_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'도착역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_arvStnCd',nameId:'ed_arvStnNm',id:'udc_arvStn',validTitle:'도착역',mandatoryCode:'true',maxlengthCode:'6',objTypeCode:'key',UpperFlagCode:'1',mandatoryName:'true',objTypeName:'data','ev:onviewchangeNameEvent':'scwin.udc_arvStn_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_arvStn_onclickEvent','ev:onblurCodeEvent':'scwin.udc_arvStn_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_reqDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_reqDtFrom',edToId:'ica_reqDtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',placeholder:'',style:'width:150px;','ev:onkeyup':'scwin.ed_cntrNo_onkeyup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'철송내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_master',gridDownUserAuth:'X',id:'grd_topBtnArea',grdDownOpts:'{"fileName" : "컨테이너적재내역.xlsx","sheetName" : "컨테이너적재내역","type":"4+8+16" }'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_master_oncellclick','ev:onheaderclick':'scwin.gr_master_onheaderclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'header_chk',inputType:'checkbox',width:'50',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'전송구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'전송일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'전송<br/>순번',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'예약번호',width:'140',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'문서종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'요청일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'발송역코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'발송역명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'운송작업<br/>지시번호',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'운송실적<br/>순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'컨테이너<br/>순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'작업경로<br/>순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'작업단계<br/>순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column53',value:'CNTR NO',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column51',value:'SIZE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column49',value:'F/E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'Seal No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'화주명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'열차번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'화차번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'운송사명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'철도소<br/>운송업체',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'철도소<br/>운송업체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',value:'도착예정일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'반입마감일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'작업일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',value:'송신자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'수신자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'송신자ID',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column95',value:'수신자ID',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column93',value:'Booking No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column91',value:'B/L',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column89',value:'D/O',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column87',value:'수출입<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column85',value:'세관검사<br/>대상여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column83',value:'보세운송<br/>구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column81',value:'직통관<br/>유무',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',value:'모선코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column77',value:'항차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',value:'선사코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',value:'입항년도',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column71',value:'QTY',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',value:'양하항코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',value:'철송장코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',value:'철송장명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'반입터미널',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column105',value:'총중량<br/>(Kg)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column103',value:'차량코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column101',value:'실제 차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column97',value:'기사<br/>핸드폰번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column99',value:'총개수',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',falseValue:'F',valueType:'other',trueValue:'T'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sndClsCd',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'appDt',inputType:'text',width:'100',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarSeq',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'declarNo',inputType:'text',width:'140',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'docCd',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqDt',inputType:'text',width:'100',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sndStnCd',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sndStnNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transWrkIndictNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'transRsltsSeq',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrSeq',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkPathSeq',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStpSeq',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrNrmCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'fullEmptyClsCd',displayMode:'label',readOnly:'true',dataType:'text'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'E'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'F'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sealNo',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'odrNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mchtNm1',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'trnNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'frtcarNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'transCoNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'trnTrnsCoCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'trnTrnsCoNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvExpectDt',displayMode:'label',readOnly:'true',dataType:'text',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'crryinClosingDt',displayMode:'label',readOnly:'true',dataType:'text',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkDt',displayMode:'label',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'snd',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rcv',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sndId',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rcvId',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bkNo',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'blNo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'doNo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'expImpCls',displayMode:'label',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'customsCls',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bondTrnsCls',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'drtClrn',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'portCnt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shipCoCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvPortYm',displayMode:'label',readOnly:'true',displayFormat:'####',dataType:'date'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'disPortCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'railroadPlCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'railroadPlNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crryinPlCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'grossWgt',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vhclCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'vhclNo',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'drvTelNo',displayMode:'label',readOnly:'true',displayFormat:'###-####-####'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'totalCnt',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'EDI전송'}]}]}]}]}]}]}]}]}]})