/*amd /ui/ds/op/wrkplan/railroadwrkplan/op_203_01_14b.xml 26700 5a998c02eab2806bc342913131f95bd6994175f86f5a77f1b179202406130861 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_condition',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'planActCls',name:'구분(0:예정,1:실행)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromDt',name:'FROM일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toDt',name:'TO 일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supplier',name:'공급사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shippingNo',name:'선적번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsYn',name:'실적생성여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cancleYn',name:'선적취소분제외여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_EmptvehclInIntend',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'shippingNo',name:'선적번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'planActCls',name:'구분(0:예정,1:실행)',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'supplier',name:'공급사',dataType:'text',defaultValue:'',length:'10'}},{T:1,N:'w2:column',A:{id:'vol',name:'물량',dataType:'number',defaultValue:'0',length:'17'}},{T:1,N:'w2:column',A:{id:'shippingPort',name:'선적항(ZZ002:OP652)',dataType:'text',defaultValue:'',length:'10'}},{T:1,N:'w2:column',A:{id:'shippingIntendDt',name:'선적예정일',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'arrvPort',name:'도착항(ZZ002:OP653)',dataType:'text',defaultValue:'',length:'10'}},{T:1,N:'w2:column',A:{id:'arvIntendDt',name:'도착예정일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'qurntCompDt',name:'검역완료일',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'qltStdInspDt',name:'품질규격검사일',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'cstmclrncDt',name:'통관완료일',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'averageWt',name:'평균중량',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'vslVyg',name:'선명항차',dataType:'text',defaultValue:'',length:'44'}},{T:1,N:'w2:column',A:{id:'regYn',name:'등록여부',dataType:'text',defaultValue:'',length:'8'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'planActCls',name:'구분(0:예정,1:실행)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromDt',name:'FROM일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDt',name:'TO 일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'supplier',name:'공급사',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shippingNo',name:'선적번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsltsYn',name:'실적생성여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_shippingd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'shippingNo',name:'선적번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'planActCls',name:'구분(0:예정,1:실행)',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'shippingSeq',name:'순번',dataType:'number',defaultValue:'0',length:'4'}},{T:1,N:'w2:column',A:{id:'transMd',name:'운송모드',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'pathCd',name:'경로(ZZ002:OP654)',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출발일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'dptVol',name:'출발지물량',dataType:'number',defaultValue:'0',length:'17'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'arvVol',name:'도착지물량',dataType:'number',defaultValue:'0',length:'17'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_InIntendInformation',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'supplier',name:'공급사',dataType:'text',defaultValue:'',length:'10'}},{T:1,N:'w2:column',A:{id:'base',name:'거점',dataType:'text',defaultValue:'',length:'10'}},{T:1,N:'w2:column',A:{id:'volDt',name:'일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'planActCls',name:'구분(0:예정,1:실행)',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'inQty',name:'입고수량',dataType:'number',defaultValue:'0',length:'17'}},{T:1,N:'w2:column',A:{id:'outQty',name:'납품 수량',dataType:'number',defaultValue:'0',length:'17'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'재고',dataType:'number',defaultValue:'0',length:'17'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkplan.railroadwrkplan.RetrieveKoenTransPlanInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_EmptvehclInIntend","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_EmptvehclInIntend","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve2',action:'/ds.op.wrkplan.railroadwrkplan.RetrieveKoenInoutInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_InIntendInformation","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_InIntendInformation","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve2_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_detail',action:'/ds.op.wrkplan.railroadwrkplan.RetrieveKoenTransPlanDetailInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition2","key":"IN_DS1"},{"id":"ds_shippingd","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_shippingd","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_detail_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// ASIS : 조회 후 해운내역 데이터를 sort하는데 ASIS는 sort안된 상태의 ds_EmptvehclInIntend 첫번째행의 데이터로 상세내역을 조회함(오류임)
// TOBE : sort된 첫번째행의 데이터로 상세내역을 조회하도록 개선함(2026.02.23 박주령PM 협의)
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); //현재일자

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP651",
    compID: "acb_supplier"
  } //공급사
  ];
  $c.data.setCommonCode($p, codeOptions);
  ds_condition.insertRow(0);
  ds_condition.setRowPosition(0);
  ds_condition.setCellData(0, "planActCls", "0");
  ds_condition.setCellData(0, "supplier", "");
  ds_condition.setCellData(0, "fromDt", scwin.strCurDate);
  ds_condition.setCellData(0, "toDt", scwin.strCurDate);
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  //테스트 데이터
  // ds_condition.setCellData(0, "fromDt", "20180101");
  // ds_condition.setCellData(0, "toDt", "20180131");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [tbl_condition]);
  if (!ret) return;
  if (tac_tabControl1.getSelectedTabIndex() == 0) {
    if (!scwin.f_BetweenCheck(ed_fromDt.getValue().trim(), ed_toDt.getValue().trim())) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_057, new Array("일자To", "일자From"));
      ed_fromDt.focus();
      return false;
    }
    if (cbx_rsltsYn.getValue()) {
      ds_condition.setCellData(0, "rsltsYn", "Y");
    } else {
      ds_condition.setCellData(0, "rsltsYn", "");
    }
    if (cbx_cancleYn.getValue()) {
      ds_condition.setCellData(0, "cancleYn", "Y");
    } else {
      ds_condition.setCellData(0, "cancleYn", "");
    }
    $c.sbm.execute($p, sbm_retrieve);
  } else {
    if (!scwin.f_BetweenCheck(ed_fromDt.getValue().trim(), ed_toDt.getValue().trim())) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_057, Array("일자To", "일자From"));
      ed_fromDt.focus();
      return false;
    }
    $c.sbm.execute($p, sbm_retrieve2);
  }
};

//-------------------------------------------------------------------------
// 숫자 차이체크
//-------------------------------------------------------------------------
scwin.f_BetweenCheck = function (str1, str2) {
  if (str1 == "" && str2 != "" || str1 != "" && str2 == "") {
    return false;
  }
  if (parseInt(str2) - parseInt(str1) < 0) {
    return false;
  }
  return true;
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
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  /* ASIS 사용안되는것 같아 일단 주석처리
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면    
   switch (disGubun) {
      case 1:
           // 작업장 팝업
          rtnList = cfCommonPopUp('retrieveWrkPlInfo' // XML상의 SELECT ID
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
              , "작업장,작업장코드,작업장명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
          );
           //수요가코드 수요가명
          $c.gus.cfSetReturnValue(rtnList, em_wrkPlCd, txt_wrkPlNm);
          break;
       case 2:
           // 수요가 팝업
          rtnList = cfCommonPopUp('retrieveCommInfo' // XML상의 SELECT ID
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
              , "품명,품명코드,품명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
          );
           //수요가코드 수요가명
          $c.gus.cfSetReturnValue(rtnList, em_commCd, txt_commNm);
          break;
       case 3:
           // 수요가 팝업
          rtnList = cfCommonPopUp('retrieveVehclList' // XML상의 SELECT ID
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
              , "장비,장비코드,장비명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
          );
           //수요가코드 수요가명
          $c.gus.cfSetReturnValue(rtnList, em_eqCd, txt_eqNm);
          break;
       case 4:
           // 수요가 팝업
          rtnList = cfCommonPopUp('retrieveWrkPlInfo' // XML상의 SELECT ID
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
              , "작업장,작업장코드,작업장명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
          );
           //수요가코드 수요가명
          $c.gus.cfSetReturnValue(rtnList, em_dptWrkPlCd, txt_dptWrkPlNm);
          break;
       case 5:
           // 수요가 팝업
          rtnList = cfCommonPopUp('retrieveClntList' // XML상의 SELECT ID
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
              , "작업장,작업장코드,작업장명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
          );
           //수요가코드 수요가명
          $c.gus.cfSetReturnValue(rtnList, scwin.em_bilgClntCd, scwin.ed_bilgClntNm);
          break;
  }
  */
};

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  //$c.gus.cfInitObjects(tbl_condition, [ed_fromDt, ed_toDt]);
  $c.gus.cfInitObjects($p, tbl_condition);
  rd_planActCls.setValue("0");
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_EmptvehclInIntend.getRowCount() == 0 && tac_tabControl1.getSelectedTabIndex() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    tac_tabControl1.getWindow(0).ds_shippingd.setJSON([]);
  }
  ds_EmptvehclInIntend.sort("arvIntendDt", 0);
  $c.gus.cfCopyDataSet($p, ds_EmptvehclInIntend, tac_tabControl1.getWindow(0).ds_shippingm, "copyHeader=yes");
  tac_tabControl1.getWindow(0).ds_shippingm.reform();
  $c.gus.cfCopyDataSet($p, ds_condition, tac_tabControl1.getWindow(0).ds_condition, "copyHeader=yes");
  if (ds_EmptvehclInIntend.getRowCount() > 0) {
    tac_tabControl1.getWindow(0).gr_shippingm.setFocusedCell(0, "regYn", false);
  }
  ds_condition2.set("shippingNo", ds_EmptvehclInIntend.getCellData(0, "shippingNo"));
  ds_condition2.set("planActCls", ds_EmptvehclInIntend.getCellData(0, "planActCls"));
  $c.sbm.execute($p, sbm_detail);
  tac_tabControl1.getWindow(0).tbx_totalRows1.setValue(ds_EmptvehclInIntend.getRowCount());
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve2_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_InIntendInformation.getRowCount() == 0 && tac_tabControl1.getSelectedTabIndex() == 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    tac_tabControl1.getWindow(1).ds_inoutInfo.setJSON([]);
  }
  $c.gus.cfCopyDataSet($p, ds_InIntendInformation, tac_tabControl1.getWindow(1).ds_inoutInfo, "copyHeader=yes");
  tac_tabControl1.getWindow(1).ds_inoutInfo.reform();
  $c.gus.cfCopyDataSet($p, ds_condition, tac_tabControl1.getWindow(1).ds_condition, "copyHeader=yes");
  if (ds_InIntendInformation.getRowCount() > 0) {
    tac_tabControl1.getWindow(1).gr_inoutInfo.setFocusedCell(0, "planActCls", false);
  }
  tac_tabControl1.getWindow(1).tbx_totalRows.setValue(ds_InIntendInformation.getRowCount());
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_detail_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfCopyDataSet($p, ds_shippingd, tac_tabControl1.getWindow(0).ds_shippingd, "copyHeader=yes");
  if (ds_shippingd.getRowCount() > 0) {
    tac_tabControl1.getWindow(0).gr_shippingd.setFocusedCell(0, "planActCls", false);
  }
  tac_tabControl1.getWindow(0).tbx_totalRows2.setValue(ds_shippingd.getRowCount());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_condition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_planActCls',ref:'data:ds_condition.planActCls',renderType:'radiogroup',rows:'',selectedIndex:'0',style:'','ev:onviewchange':'scwin.f_Retrieve'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계획'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선적예정일/일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_condition',refEdDt:'toDt',refStDt:'fromDt',style:'',edFromId:'ed_fromDt',edToId:'ed_toDt',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'일자From',titleTo:'일자To'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공급사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'acb_supplier',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:ds_condition.supplier'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선적번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_shippingNo',placeholder:'',style:'',ref:'data:ds_condition.shippingNo'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'col-gap-14',id:'',style:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_rsltsYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계획조회시실행내역 생성 선적번호 제외'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_cancleYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선적취소분 제외'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tab',id:'tac_tabControl1',style:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'운송계획/실행',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'물동량계획/실행',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:'',src:'/ui/ds/op/wrkplan/railroadwrkplan/op_203_01_14f.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',style:'',src:'/ui/ds/op/wrkplan/railroadwrkplan/op_203_01_15f.xml'}}]}]}]}]}]}]}]})