/*amd /ui/ds/lo/comninfomgnt/lo_100_07_01b.xml 106035 7c1fa3f1048d1daef12201ba06c5631008f9ac73a1910cb29e653842189f0940 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_view_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bondZoneCd',name:'보세구역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fltrCd1',name:'필터코드1',dataType:'text',defaultValue:'01'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkpl',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_wrkpl_onrowpositionchange','ev:oncelldatachange':'scwin.ds_wrkpl_oncelldatachange','ev:onbeforerowpositionchange':'scwin.ds_wrkpl_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidWrkPlNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlEngNm',name:'작업장영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperWrkPlCd',name:'상위작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperWrkPlNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr2',name:'주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqAtmtYn',name:'중기자동화여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'gateAtmtYn',name:'GATE자동화여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'gateInslYn',name:'GATE설치여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'mpProcYn',name:'핸드폰처리여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'preInfoSndYn',name:'사전정보전송여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkPlPosnClsCd',name:'작업장소유구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierPosnClsCd',name:'부두소유구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierOpClntNo',name:'부두운영거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierOpClntNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ownerCd',name:'소유주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondZoneCd',name:'보세구역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jrsdCstmCd',name:'관할세관코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'area',name:'면적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxCapa',name:'최대용량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxCapaUnitCd',name:'최대용량단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'propCapa',name:'적정용량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'propCapaUnitCd',name:'적정용량단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picTelNo',name:'담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picFaxNo',name:'담당자팩스번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldWaitHh',name:'상하차대기시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'whouseClsCd',name:'창고구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierYardYn',name:'부두장치장여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'lunionOrgCd',name:'노조조직코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'목적지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierYardWrkPlCd',name:'부두장치장작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierYardWrkPlNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ownRt',name:'지분율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'len',name:'길이',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wdpt',name:'수심',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alngpierAbltTonCnt',name:'접안능력TON수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'freeTradRgnYn',name:'자유무역지역여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'korailStnCd',name:'철도청역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fdrCd',name:'지선코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hndlRateOutbrYn',name:'조작료발생여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cgshfRateOutbrYn',name:'이적료발생여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockMgntYn',name:'재고관리여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'ioMgntYn',name:'입출고관리여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'xclsPierYn',name:'전용부두여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'depotYn',name:'DEPOT여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bldgStucClsCd',name:'건물구조구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preInfoGrpClsCd',name:'사전정보그룹구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndYn',name:'EDI전송여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cntrRgnWrkPlYn',name:'컨테이너지역작업장여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gatelogSndYn',name:'GATELOG전송여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'blngLobranCd',name:'귀속물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blngLobranNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkCmpstcrgBranCd',name:'벌크복화점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkCmpstcrgBranNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtClss',name:'작업권역',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_district',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtCd',name:'지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtNm',name:'지역명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.comninfomgnt.RetrieveWorkPlaceInformationListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_view_cond","key":"IN_DS1"} , {"id":"ds_wrkpl","key":"OUT_DS1"}, {"id":"ds_district","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_wrkpl","key":"OUT_DS1"}, {"id":"ds_district","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comninfomgnt.SaveWorkPlaceInformationListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_wrkpl","key":"IN_DS1"}, {"action":"modified","id":"ds_district","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/js/ds/dscommon.js',type:'text/javascript',scopeVariable:'dscommon'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//물류/공통(통합)/점소/작업장/작업장관리

scwin.onpageload = function () {
  //scwin.f_OnLoad();
};

//-------------------------------------------------------------------------
// function name :
// function desc : 전역변수 선언
//-------------------------------------------------------------------------
//scwin.MSG_LO_ERR_001 = "사용여부를 선택하십시오.";
//scwin.MSG_LO_ERR_002 = "작업장구분을 선택하십시오.";
scwin.MSG_LO_ERR_003 = "최대CAPA단위를 선택하십시오.";
scwin.MSG_LO_ERR_004 = "적정CAPA단위를 선택하십시오.";
scwin.MSG_LO_ERR_005 = "우편번호는 필수 입력사항입니다.";
scwin.MSG_LO_ERR_006 = "작업장 코드가 비어있습니다";
//scwin.MSG_LO_ERR_007 = "타사코드를 선택할 수 없습니다.";
scwin.MSG_LO_ERR_008 = "작업장코드 생성규칙이 적절하지 않습니다.";
scwin.MSG_LO_ERR_009 = "지역은 필수 입력 사항입니다.";
scwin.MSG_LO_ERR_010 = "소유구분을 선택하십시오.";
scwin.MSG_LO_ERR_011 = "귀속물류점소는 필수 입력사항입니다.";
scwin.clntNo;
scwin.clntNm;
scwin.pos_rowSts = 0;
scwin.serchFlag = false; //false 시 req 체크함.

scwin.rowChange = true;
scwin.chkSkip = false; // rowPosition 변경 시 사용

scwin.hid_ed_cnd_clntNo = "";
scwin.hid_ed_lobranCd = "";
scwin.hid_ed_upperWrkPlCd = "";
scwin.hid_ed_clntNo = "";
scwin.hid_ed_blngLobranCd = "";
scwin.hid_ed_bulkCmpstcrgBranCd = "";
//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  //scwin.params = {clntNo : "110662",clntNm : "테스트"};
  scwin.params = $c.data.getParameter($p);
  if (!$c.util.isEmpty($p, scwin.params["clntNo"]) || !$c.util.isEmpty($p, scwin.params["clntNm"])) {
    scwin.clntNo = scwin.params["clntNo"];
    scwin.clntNm = scwin.params["clntNm"];
  }
};
scwin.onUdcCompleted = function () {
  scwin.f_defaultValue();
  scwin.f_OnLoad();
};

//-------------------------------------------------------------------------
// function name : f_newCtrt
// function desc : 신규화면 클릭
//-------------------------------------------------------------------------
scwin.f_newCtrt = function () {};

//-------------------------------------------------------------------------
// function name : f_defaultValue
// function desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "LO121",
    compID: "lc_cnd_wrkPlClsCd,lc_wrkPlClsCd",
    opt: {
      "range": "1,01"
    }
  }, {
    grpCd: "LO131",
    compID: "lc_bldgStucClsCd"
  }, {
    grpCd: "LO115",
    compID: "lc_WrkPlPosnClsCd"
  }, {
    grpCd: "LO116",
    compID: "lc_OwnerCd"
  }, {
    grpCd: "SD108",
    compID: "lc_jrsdCstmCd"
  }, {
    grpCd: "LO102",
    compID: "lc_MaxCapaUnitCd,lc_PropCapaUnitCd"
  }, {
    grpCd: "LO119",
    compID: "lc_whouseClsCd"
  }, {
    grpCd: "LO310",
    compID: "lc_districtClss"
  }];
  $c.data.setCommonCode($p, codeOptions);
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableBtn($p, [btn_save]);
  $c.gus.cfDisableObjects($p, [oRecevInfo]);
  $c.gus.cfDisableObjects($p, [btn_adddistrict, btn_deldistrict, btn_clsdistrict]);

  //lc_wrkPlClsCd.Enable = "false";
  lc_wrkPlClsCd.setDisabled(true);

  /*
  // 입력 Object 중 한글입력 항목의 IME Mode를 설정한다.
  $c.gus.cfSetIMEModeActiveObjects([ed_cnd_wrkPlNm
  						, ed_cnd_lobranNm
  						, ed_wrkPlNm
  						, ed_lobranNm
  						, ed_upperWrkPlNm
  						, ed_clntNm
  						, ed_addr1
  						, ed_addr2
  						, ed_picNm
  						, ed_rmk
  						, ed_blngLobranNm]);
  */

  //lc_cnd_wrkPlClsCd.setSelectedIndex(0);
  lc_cnd_wrkPlClsCd.focus();
  if ("" != scwin.clntNo) {
    ed_cnd_clntNo.setValue(scwin.clntNo);
    ed_cnd_clntNm.setValue(scwin.clntNm);
  }
  if (ed_cnd_clntNo.getValue() != "") {
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// function name : f_Addrow
// function desc : 그리드 칼럼 추가
//-------------------------------------------------------------------------
scwin.f_Addrow1 = async function () {
  $c.gus.cfEnableBtnOnly($p, [btn_save, btn_adddistrict, btn_deldistrict, btn_clsdistrict]);
  if (ds_wrkpl.getModifiedIndex().length == 0) {
    scwin.chkSkip = true;
  } else {
    if (!(await scwin.f_ReqFieldChk(ds_wrkpl.getRowPosition()))) {
      return false;
    } else if (!(await $c.gus.cfValidate($p, [gr_district]))) {
      return false;
    }
  }
  scwin.serchFlag = true;
  var row = ds_wrkpl.insertRow();
  ds_wrkpl.setRowPosition(row);

  //if (ds_wrkpl.getRowStatus(ds_wrkpl.getRowPosition()) == "1") {
  lc_wrkPlClsCd.setDisabled(false);
  //lc_wrkPlClsCd.Enable = "true";
  //}

  ed_area.setValue("");
  ed_maxCapa.setValue("");
  ed_propCapa.setValue("");
  ed_lduldWaitHh.setValue("");
  ds_wrkpl.setCellData(row, "useYn", 1);
  ds_wrkpl.setCellData(row, "cntrRgnWrkPlYn", 1);
  gr_wrkpl.setFocusedCell(row, "wrkPlClsNm", false);
  scwin.serchFlag = false;
};

//-------------------------------------------------------------------------
// function name : f_Addrow
// function desc : 그리드 칼럼 추가
//-------------------------------------------------------------------------
scwin.f_Addrow2 = async function (dsGubun) {
  $c.gus.cfEnableBtnOnly($p, [btn_save, btn_adddistrict, btn_deldistrict, btn_clsdistrict]);
  if (ds_wrkpl.getCellData(ds_wrkpl.getRowPosition(), "wrkPlCd") == "") {
    await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_006);
    return;
  }

  //var rowCnt = ds_district.getRowCount();
  var row = ds_district.insertRow();
  gr_district.setFocusedCell(row, 0);
  ds_district.setCellData(row, "wrkPlCd", ds_wrkpl.getCellData(ds_wrkpl.getRowPosition(), "wrkPlCd"));
  ds_district.setCellData(row, "wrkPlNm", ds_wrkpl.getCellData(ds_wrkpl.getRowPosition(), "wrkPlNm"));
};

//-------------------------------------------------------------------------
// function name : f_delrow
// function desc : 그리드 칼럼 삭제
//-------------------------------------------------------------------------
scwin.f_delrow1 = function (dsGubun) {
  var intRowPosition;
  var intRowCnt;
  var i = 0;
  scwin.chkSkip = true;
  intRowCnt = ds_district.getRowCount();
  for (i = 0; i < intRowCnt; i++) {
    if (ds_district.getRowStatus(i) == "C") {
      ds_district.removeRow(i);
    } else {
      ds_district.setRowPosition(i);
      ds_district.deleteRow(i);
    }
  }
  intRowPosition = ds_wrkpl.getRowPosition();
  if (ds_wrkpl.getRowStatus(intRowPosition) == "C") {
    // $c.data.undoRow(ds_wrkpl, "Y");
    ds_wrkpl.removeRow(intRowPosition);
  } else {
    ds_wrkpl.deleteRow(intRowPosition);
  }
  gr_wrkpl.setFocusedCell(intRowPosition - 1, "wrkPlClsNm", false);
  $c.gus.cfEnableBtnOnly($p, [btn_save, btn_adddistrict, btn_deldistrict, btn_clsdistrict]);
};

//-------------------------------------------------------------------------
// function name : f_delrow
// function desc : 그리드 칼럼 삭제
//-------------------------------------------------------------------------
scwin.f_delrow2 = function (dsGubun) {
  var intRowPosition;
  var intRowCnt;
  var i = 0;
  intRowPosition = ds_district.getRowPosition();
  if (ds_district.getRowStatus(intRowPosition) == "C") {
    $c.data.undoRow($p, ds_district, "Y");
  } else {
    ds_district.deleteRow(intRowPosition);
    if (intRowPosition > 0) {
      ds_district.setRowPosition(intRowPosition - 1);
    }
  }
  $c.gus.cfEnableBtnOnly($p, [btn_save, btn_adddistrict, btn_deldistrict, btn_clsdistrict]);
};

//-------------------------------------------------------------------------
// function name : f_undo
// function desc : 그리드 로우 취소
//-------------------------------------------------------------------------
scwin.f_undo1 = function () {
  var intRowCnt;
  var i = 1;
  scwin.chkSkip = true;
  $c.data.undoRow($p, ds_wrkpl, "Y");
  $c.data.undoAll($p, ds_district);
  if (ds_wrkpl.getRowPosition() == null) {
    gr_wrkpl.setFocusedCell(0, "wrkPlClsNm");
  }
};

//-------------------------------------------------------------------------
// function name : f_undo
// function desc : 그리드 로우 취소
//-------------------------------------------------------------------------
scwin.f_undo2 = function () {
  intRowPosition = ds_district.getRowPosition();
  //ds_district.Undo(intRowPosition);
  $c.data.undoRow($p, ds_district, "Y");
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------

scwin.f_Retrieve = function () {
  $c.gus.cfDisableBtn($p, [btn_save, btn_adddistrict, btn_deldistrict, btn_clsdistrict]);
  ds_wrkpl.setEventPause("", true); //submitDone에서 false 처리
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장
//-------------------------------------------------------------------------

scwin.f_Save = async function () {
  scwin.pos_rowSts = ds_wrkpl.getRowPosition();
  ed_wrkPlNm.setValue(ed_wrkPlNm.getValue().replace(" ", ""));
  if (ds_wrkpl.getModifiedJSON().length < 1 && ds_district.getModifiedJSON().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["작업장"]);
    return false;
  }
  if (await scwin.f_ReqFieldChk(ds_wrkpl.getRowPosition())) {
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      $c.sbm.execute($p, sbm_save);
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_ReqFieldChk
// function desc : 필수입력항목 체크
//-------------------------------------------------------------------------
scwin.f_ReqFieldChk = async function (row) {
  //필수입력항목 체크

  if (rd_UseYn.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["사용여부"]);
    return false;
  }
  if (lc_wrkPlClsCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["작업장구분"]);
    return false;
  }
  if (ed_maxCapa.getValue().trim() != "" && ed_maxCapa.getValue() != "0" && lc_MaxCapaUnitCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_003);
    return false;
  }
  if (ed_propCapa.getValue().trim() != "" && ed_propCapa.getValue() != "0" && lc_PropCapaUnitCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_004);
    return false;
  }
  if (lc_wrkPlClsCd.getValue() != "G" && ed_zip.getValue() == "") {
    await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_005);
    return false;
  }
  if (lc_wrkPlClsCd.getValue() != "G" && ed_blngLobranCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_011);
    ed_blngLobranCd.focus();
    return false;
  }
  /*
  if (lc_wrkPlClsCd.BindColVal != "G" && ed_bulkCmpstcrgBranCd.getValue() == "") {
      $c.gus.cfAlertMsg(scwin.MSG_LO_ERR_006);
      ed_bulkCmpstcrgBranCd.focus();
      return false;
  }*/

  if ((lc_wrkPlClsCd.getValue() == "W" || lc_wrkPlClsCd.getValue() == "E") && lc_WrkPlPosnClsCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_010);
    lc_WrkPlPosnClsCd.focus();
    return false;
  }

  /*
  if (ed_picTelNo.getValue() != "" && !$c.gus.cf_PhoneCheck(ed_picTelNo)){
      return false;
  }
   if (ed_picFaxNo.getValue() != "" && !$c.gus.cf_PhoneCheck(ed_picFaxNo,"팩스번호")){
      return false;
  }
  */
  if (ed_picTelNo.getValue() != "" && !dscommon.cf_PhoneCheck(ed_picTelNo)) {
    return false;
  }
  if (ed_picFaxNo.getValue() != "" && !dscommon.cf_PhoneCheck(ed_picFaxNo, "팩스번호")) {
    return false;
  }

  /*
  if (lc_wrkPlClsCd.BindColVal == "W" && lc_WrkPlPosnClsCd.BindColVal == "T" && ed_blngLobranCd.getValue().trim() == "") {
      $c.gus.cfAlertMsg(MSG_CM_ERR_002,["귀속점소"]);
      ed_blngLobranCd.focus();
      return false;
  }
   if (rd_PreInfoSndYn.CodeValue == "1" && lc_preInfoGrpClsCd.BindColVal == "" ) {
      $c.gus.cfAlertMsg(MSG_CM_WRN_007, new Array("사전정보전송여부가 Yes인 경우 사전정보그룹구분"));
      return false;
  }
  */

  if (!(await $c.gus.cfValidate($p, [oRecevInfo]))) {
    return false;
  }

  //grid validate
  if (!(await $c.gus.cfValidate($p, [gr_district], null, true))) {
    return false;
  }
  var blngLobranCd = ds_wrkpl.getCellData(row, "blngLobranCd"); //ed_blngLobranCd 귀속물류점소
  var wrkPlClsCd = ds_wrkpl.getCellData(row, "wrkPlClsCd"); //lc_wrkPlClsCd.getValue() 작업장구분
  var wrkPlCd = ds_wrkpl.getCellData(row, "wrkPlCd"); //ed_wrkPlCd.getValue() 작업장코드
  if (ds_wrkpl.getRowStatus(row) == 'C' && blngLobranCd.substr(0, 1) + wrkPlClsCd != wrkPlCd.substr(0, 2) && wrkPlClsCd != "G") {
    await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_008);
    ds_wrkpl.setCellData(row, "wrkPlCd", blngLobranCd.substr(0, 1) + wrkPlClsCd + wrkPlCd.substr(2, 3));
    var i = 0;
    for (i = 0; i < ds_district.getRowCount(); i++) {
      //ds_district.NameValue(i,"wrkPlCd") = ed_blngLobranCd.getValue().substr(0,1) + lc_wrkPlClsCd.BindColVal + ed_wrkPlCd.getValue().substr(2,3);
      ds_district.setCellData(i, "wrkPlCd", blngLobranCd.substr(0, 1) + wrkPlClsCd + wrkPlCd.substr(2, 3));
    }
    return false;
  }

  // ds_district.RealCount(1,ds_district.CountRow) == 0)
  var realCount = 0;
  for (var i = 0; i < ds_district.getRowCount(); i++) {
    if (ds_district.getRowStatus(i) != "D") {
      realCount++;
    }
  }

  //if(ds_wrkpl.getRowStatus(ds_wrkpl.getRowPosition()) != 2 && ds_district.RealCount(1,ds_district.getRowCount()) == 0) {
  if (ds_wrkpl.getRowStatus(row) != "D" && realCount == 0) {
    await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_009);
    return false;
  }
  return true;
};
scwin.f_chkField = function (chgValue1, chgValue2, disGubun) {
  var chgObj1 = eval(chgValue1);
  var chgObj2 = eval(chgValue2);

  //var objType1 = chgValue1.substr(0,2)
  //var objType2 = chgValue2.substr(0,2)
  var objType1 = chgValue1;
  var objType2 = chgValue2;

  //if(objType1=="ed") {
  if (objType1.indexOf("Nm") < 0) {
    if (chgObj1.getValue().trim() == "") {
      chgObj2.setValue("");
    } else {
      chgObj2.setValue("");
      scwin.f_openPopUp(disGubun, "T");
    }
  } else {
    if (chgObj1.getValue().trim() == "") {
      //if (objType2 == "ed" ) {
      if (objType2.indexOf("Nm") < 0) {
        chgObj2.setValue("");
      } else {
        chgObj2.setValue("");
      }
    } else {
      //if (objType2 == "ed" ) {
      if (objType2.indexOf("Nm") < 0) {
        chgObj2.setValue("");
      } else {
        chgObj2.setValue("");
      }
      scwin.f_openPopUp(disGubun, "T");
    }
  }
};
scwin.f_openPopUp = async function (disGubun, chgGubun) {
  var rtnList = new Array();
  switch (disGubun) {
    case 1:
      strParam1 = ed_lobranCd.getValue().trim();
      strParam2 = ed_lobranNm.getValue().trim();

      //rtnList = cfCommonPopUp('retrieveLogisDeptInfo',
      udc_lobranCd.setSelectId('retrieveLogisDeptInfo');
      rtnList = udc_lobranCd.cfCommonPopUp(scwin.udc_lobranCd_callBackFunc, strParam1, strParam2, chgGubun, '5', null, '150,170', null, 'A,B', '440', '500', null, null, null, "F", null);

      //$c.gus.cfSetReturnValue(rtnList, ed_lobranCd, ed_lobranNm);
      break;
    case 2:
      //rtnList = cfCommonPopUp('retrieveWrkPlInfo',

      udc_upperWrkPlCd.setSelectId('retrieveWrkPlInfo');
      rtnList = udc_upperWrkPlCd.cfCommonPopUp(scwin.udc_upperWrkPlCd_callBackFunc, ed_upperWrkPlCd.getValue().trim(), ed_upperWrkPlNm.getValue(), chgGubun, '5', null, '150,170', null, null, '440', '500', null, null, null, "F", null);

      //$c.gus.cfSetReturnValue(rtnList, ed_upperWrkPlCd, ed_upperWrkPlNm);
      break;
    case 3:
      /*
      popupResult = window.showModalDialog("/cm/zz/newzipcodePopup.jsp", "",
      "dialogHeight:400px;dialogWidth:530px;center:yes;scroll:no;status:no;help:no");
      */

      let v_url = "/ui/cm/zz/newzipcodePopup.xml";
      let popupResult;
      let opt = {
        id: "pupup",
        popupName: "우편번호 검색",
        modal: true,
        type: "browserPopup",
        width: 500,
        height: 550,
        title: "우편번호 검색"
      };
      let data = {};
      popupResult = await $c.win.openPopup($p, v_url, opt, data);

      // Modal Dialog를 리턴값 없이 닫을 경우에 대비해
      if (popupResult != null) {
        ed_zip.setValue(popupResult.zip);
        ed_addr1.setValue(popupResult.addr1);
      } else {
        ed_zip.setValue("");
        ed_addr1.setValue("");
      }
      break;
    case 4:
      //rtnList = cfCommonPopUp('retrieveClntInfo',
      udc_cnd_clntNo.setSelectId('retrieveClntInfo');
      rtnList = udc_cnd_clntNo.cfCommonPopUp(scwin.udc_cnd_clntNo_callBackFunc, ed_cnd_clntNo.getValue().trim(), ed_cnd_clntNm.getValue(), chgGubun, '5', null, '150,170', null, null, '440', '500', null, null, null, "F", null);

      //$c.gus.cfSetReturnValue(rtnList, ed_cnd_clntNo, ed_cnd_clntNm);
      break;
    case 5:
      //rtnList = cfCommonPopUp('retrieveClntInfo',
      udc_clntNo.setSelectId('retrieveClntInfo');
      rtnList = udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc, ed_clntNo.getValue().trim(), ed_clntNm.getValue(), chgGubun, '5', null, '150,170', null, null, '440', '500', null, null, null, "F", null);

      //$c.gus.cfSetReturnValue(rtnList, ed_clntNo, ed_clntNm);
      break;
    case 6:
      strParam1 = ed_cnd_lobranCd.getValue().trim();
      strParam2 = ed_cnd_lobranNm.getValue().trim();

      //rtnList = cfCommonPopUp('retrieveLogisDeptInfo',
      udc_cnd_lobranCd.setSelectId('retrieveLogisDeptInfo');
      rtnList = udc_cnd_lobranCd.cfCommonPopUp(scwin.udc_cnd_lobranCd_callBackFunc, strParam1, strParam2, chgGubun, '5', null, '150,170', null, 'A,B', '440', '500', null, null, null, "F", null);

      //$c.gus.cfSetReturnValue(rtnList, ed_cnd_lobranCd, ed_cnd_lobranNm);
      break;
    case 7:
      strParam1 = ed_blngLobranCd.getValue().trim();
      strParam2 = ed_blngLobranNm.getValue().trim();

      //rtnList = cfCommonPopUp('retrieveLogisDeptInfo',
      udc_blngLobranCd.setSelectId('retrieveLogisDeptInfo');
      rtnList = udc_blngLobranCd.cfCommonPopUp(scwin.udc_blngLobranCd_callBackFunc, strParam1, strParam2, chgGubun, '5', null, '150,170', null, ',,,,,,1', '440', '500', null, null, null, "F", null);

      //$c.gus.cfSetReturnValue(rtnList, ed_blngLobranCd, ed_blngLobranNm);

      break;
    case 8:
      strParam1 = ed_bulkCmpstcrgBranCd.getValue().trim();
      strParam2 = ed_bulkCmpstcrgBranNm.getValue().trim();

      //rtnList = cfCommonPopUp('retrieveLogisDeptInfo',
      udc_bulkCmpstcrgBranCd.setSelectId('retrieveLogisDeptInfo');
      rtnList = udc_bulkCmpstcrgBranCd.cfCommonPopUp(scwin.udc_bulkCmpstcrgBranCd_callBackFunc, strParam1, strParam2, chgGubun, '5', null, '150,170', null, 'A,B', '440', '500', null, null, null, "F", null);

      //$c.gus.cfSetReturnValue(rtnList, ed_bulkCmpstcrgBranCd, ed_bulkCmpstcrgBranNm);

      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// function name : f_winOpen
// function desc : 화면이동
//-------------------------------------------------------------------------
/*
scwin.f_winOpen = function() {

  	var strPath = "";
  	var style = "";
  	var vRtnValue = 0;
  	var parObject = new Object();

  	if (ed_wrkPlCd.getValue().trim() == "") {
  		$c.gus.cfAlertMsg(scwin.MSG_LO_ERR_006);	// 작업장 코드가 비어있습니다.
		return;
	} else {
		parObject.wrkPlCd = ed_wrkPlCd.getValue().trim();
		parObject.wrkPlNm = ed_wrkPlNm.getValue().trim();

		style = "center:yes; dialogwidth:440px; dialogheight:600px; dialogleft:300px; dialogtop:150px; scroll:yes; resizable:no; status:yes;";
		strPath = "lo_100_07_06p.jsp";
		vRtnValue = window.showModalDialog(strPath, parObject,style )
	}
};
*/
//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  //f_defaultValue();
};

//-------------------------------------------------------------------------
// 그리드에서 입력된 코드/명칭 정보로  조회 (Grid PopUp)
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = function (disGubun, row, pClose) {
  // 선언부
  var rtnList;
  var pCode = "";
  var pName = "";
  var pWhere = "2,3,,,RG";
  switch (disGubun) {
    case 1:
      pCode = ds_district.getCellData(row, "districtCd"); // 지역코드
      pName = ds_district.getCellData(row, "districtNm"); // 지역코드
      //rtnList = cfCommonPopUp('retrieveDistrictList'	// XML상의 SELECT ID

      udc_comCodeGrid.setSelectId('retrieveDistrictList');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "지역코드,지역명" // Title순서
      , '150,210' // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , '440' // POP-UP뛰을때 원도우의	사용자 정의	폭
      , '500' // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , 'F' // 전체검색허용여부	("F")
      , "지역,지역코드,지역명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      //$c.gus.cfSetGridReturnValue(rtnList, ds_district, row, "districtCd", "districtNm");
      break;
    case 2:
      pCode = ds_district.getCellData(row, "districtCd"); // 지역코드
      pName = ds_district.getCellData(row, "districtNm"); // 지역코드

      //rtnList = cfCommonPopUp('retrieveDistrictList'	// XML상의 SELECT ID
      udc_comCodeGrid.setSelectId('retrieveDistrictList');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "지역코드,지역명" // Title순서
      , '150,210' // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , '440' // POP-UP뛰을때 원도우의	사용자 정의	폭
      , '500' // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , 'F' // 전체검색허용여부	("F")
      , "지역,지역코드,지역명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      //$c.gus.cfSetGridReturnValue(rtnList, ds_district, row, "districtCd", "districtNm");
      break;
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  ds_wrkpl.setEventPause("", false);
  await scwin.ds_wrkpl_OnLoadCompleted();

  // for="tr_retrieve" event="OnSuccess()"
  gr_district.setFocusedCell(0, 0);
  tbx_totalRows2.setValue(ds_district.getRowCount());
  btn_Srch.focus();
};

// for=ds_wrkpl event=OnLoadCompleted(rowcnt)
scwin.ds_wrkpl_OnLoadCompleted = async function () {
  var rowcnt = ds_wrkpl.getRowCount();
  tbx_totalRows.setValue(rowcnt);
  if (ds_wrkpl.getRowCount() - 1 < scwin.pos_rowSts) {
    // $c.gus.cfGoPrevPosition(gr_wrkpl, ds_wrkpl.getRowCount() - 1);
    gr_wrkpl.setFocusedCell(ds_wrkpl.getRowCount() - 1, "wrkPlClsNm");
  } else {
    // $c.gus.cfGoPrevPosition(gr_wrkpl, scwin.pos_rowSts);
    gr_wrkpl.setFocusedCell(scwin.pos_rowSts, "wrkPlClsNm");
  }
  if (rowcnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    $c.gus.cfEnableObjects($p, [oRecevInfo, btn_adddistrict, btn_deldistrict, btn_clsdistrict]);
    $c.gus.cfDisableKey($p);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    return;
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};
scwin.open_popup = async function () {
  // 하위작업장 호출
  let data = {
    wrkPlCd: ed_wrkPlCd.getValue(),
    wrkPlNm: ed_wrkPlNm.getValue()
  };
  let win_url = "/ui/ds/lo/comninfomgnt/lo_100_07_06p.xml";
  let opts = {
    id: "smpPop",
    popupName: "하위작업장관리",
    modal: true,
    type: "browserPopup",
    width: 700,
    height: 600
    /*
    , title : "하위 작업장"
    , menuInfo:{
        pgmId : "lo_100_07_01b"
    }
    */
  };
  var rt = await $c.win.openPopup($p, win_url, opts, data);
};
scwin.udc_cnd_lobranCd_onblurCodeEvent = function (e) {
  scwin.f_chkField('ed_cnd_lobranCd', 'ed_cnd_lobranNm', 6);
};
scwin.udc_cnd_lobranCd_onblurNameEvent = function (e) {
  scwin.f_chkField('ed_cnd_lobranNm', 'ed_cnd_lobranCd', 6);
};
scwin.udc_cnd_lobranCd_onclickEvent = function (e) {
  scwin.f_openPopUp(6, 'F');
  /*
  let param = ",04";
  let check = 'F';
   udc_cnd_lobranCd.cfCommonPopUp("retrieveLogisDeptInfo",scwin.udc_cnd_lobranCd_callBackFunc,ed_cnd_lobranCd.getValue(),ed_cnd_lobranNm.getValue(),check,"5",null,"150,170",null,param,"A,B","440","500",null,null,null,"F",null);
  */
  //retrieveLogisDeptInfo
};
scwin.udc_cnd_clntNo_onblurCodeEvent = function (e) {
  var strClntNo = "";
  strClntNo = ed_cnd_clntNo.getValue().trim();

  //if (ed_cnd_clntNo.Modified )
  if (strClntNo != "" && strClntNo != scwin.hid_ed_cnd_clntNo) {
    if (strClntNo.length > 0) {
      scwin.f_openPopUp(4, 'T');
    } else {
      ed_cnd_clntNm.setValue("");
    }
  }
};
scwin.udc_cnd_clntNo_onblurNameEvent = function (e) {
  scwin.f_chkField('ed_cnd_clntNm', 'ed_cnd_clntNo', 4);
};
scwin.udc_cnd_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp(4, 'F');
};
scwin.udc_cnd_lobranCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cnd_lobranCd, ed_cnd_lobranNm);
};
scwin.udc_cnd_clntNo_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cnd_clntNo, ed_cnd_clntNm);
};
scwin.udc_lobranCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lobranCd, ed_lobranNm);
};
scwin.udc_upperWrkPlCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_upperWrkPlCd, ed_upperWrkPlNm);
};
scwin.udc_clntNo_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
};
scwin.udc_comCodeGrid_callBackFunc = function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_district, ds_district.getRowPosition(), "districtCd", "districtNm");
};
scwin.udc_blngLobranCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_blngLobranCd, ed_blngLobranNm);
};
scwin.udc_bulkCmpstcrgBranCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bulkCmpstcrgBranCd, ed_bulkCmpstcrgBranNm);
};
scwin.btn_refresh_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_Srch_onclick = function (e) {
  scwin.pos_rowSts = 0;
  scwin.serchFlag = true;
  scwin.f_Retrieve();
};
scwin.btn_rgnEachDistrict_onclick = async function (e) {
  if (ed_wrkPlCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_006); // 작업장 코드가 비어있습니다.
    return;
  } else {
    scwin.open_popup();
  }
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.udc_lobranCd_onblurCodeEvent = function (e) {
  //if (ed_lobranCd.Modified) {
  if (ed_lobranCd.getValue() != "" && ed_lobranCd.getValue() != scwin.hid_ed_lobranCd) {
    scwin.f_chkField('ed_lobranCd', 'ed_lobranNm', 1);
  }
};
scwin.udc_lobranCd_onblurNameEvent = function (e) {
  scwin.f_chkField('ed_lobranNm', 'ed_lobranCd', 1);
};
scwin.udc_lobranCd_onclickEvent = function (e) {
  scwin.f_openPopUp(1, 'F');
};
scwin.udc_upperWrkPlCd_onblurCodeEvent = function (e) {
  //if (ed_upperWrkPlCd.Modified) {
  if (ed_upperWrkPlCd.getValue() != "" && ed_upperWrkPlCd.getValue() != scwin.hid_ed_upperWrkPlCd) {
    scwin.f_chkField('ed_upperWrkPlCd', 'ed_upperWrkPlNm', 2);
  }
};
scwin.udc_upperWrkPlCd_onblurNameEvent = function (e) {
  scwin.f_chkField('ed_upperWrkPlNm', 'ed_upperWrkPlCd', 2);
};
scwin.udc_upperWrkPlCd_onclickEvent = function (e) {
  scwin.f_openPopUp(2, 'F');
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  var strClntNo = "";
  strClntNo = ed_clntNo.getValue().trim();

  //if (ed_clntNo.Modified )
  if (strClntNo != "" && strClntNo != scwin.hid_ed_clntNo) {
    if (strClntNo.length > 0) {
      scwin.f_openPopUp(5, 'T');
    } else {
      ed_clntNm.setValue("");
    }
  }
};
scwin.udc_clntNo_onblurNameEvent = function (e) {
  scwin.f_chkField('ed_clntNm', 'ed_clntNo', 5);
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp(5, 'F');
};
scwin.udc_blngLobranCd_onblurCodeEvent = function (e) {
  //if (ed_blngLobranCd.Modified) {
  if (ed_blngLobranCd.getValue() != "" && ed_blngLobranCd.getValue() != scwin.hid_ed_blngLobranCd) {
    scwin.f_chkField('ed_blngLobranCd', 'ed_blngLobranNm', 7);
  }
};
scwin.udc_blngLobranCd_onblurNameEvent = function (e) {
  scwin.f_chkField('ed_blngLobranNm', 'ed_blngLobranCd', 7);
};
scwin.udc_blngLobranCd_onclickEvent = function (e) {
  scwin.f_openPopUp(7, 'F');
};
scwin.udc_bulkCmpstcrgBranCd_onblurCodeEvent = function (e) {
  //if (ed_bulkCmpstcrgBranCd.Modified) {
  if (ed_bulkCmpstcrgBranCd.getValue() != "" && ed_bulkCmpstcrgBranCd.getValue() != scwin.hid_ed_bulkCmpstcrgBranCd) {
    scwin.f_chkField('ed_bulkCmpstcrgBranCd', 'ed_bulkCmpstcrgBranNm', 8);
  }
};
scwin.udc_bulkCmpstcrgBranCd_onblurNameEvent = function (e) {
  scwin.f_chkField('ed_bulkCmpstcrgBranNm', 'ed_bulkCmpstcrgBranCd', 8);
};
scwin.udc_bulkCmpstcrgBranCd_onclickEvent = function (e) {
  scwin.f_openPopUp(8, 'F');
};
scwin.udc_cnd_clntNo_onviewchangeCodeEvent = function (info) {
  scwin.hid_ed_cnd_clntNo = info.oldValue;
};
scwin.udc_lobranCd_onviewchangeCodeEvent = function (info) {
  scwin.hid_ed_lobranCd = info.oldValue;
};
scwin.udc_upperWrkPlCd_onviewchangeCodeEvent = function (info) {
  scwin.hid_ed_upperWrkPlCd = info.oldValue;
};
scwin.udc_clntNo_onviewchangeCodeEvent = function (info) {
  scwin.hid_ed_clntNo = info.oldValue;
};
scwin.udc_blngLobranCd_onviewchangeCodeEvent = function (info) {
  scwin.hid_ed_blngLobranCd = info.oldValue;
  1;
};
scwin.udc_bulkCmpstcrgBranCd_onviewchangeCodeEvent = function (info) {
  scwin.hid_ed_bulkCmpstcrgBranCd = info.oldValue;
};
scwin.btn_zip_onclick = function (e) {
  scwin.f_openPopUp(3, 'T');
};
scwin.gr_district_onviewchange = function (info) {
  /*
  colId: "districtCd"
  colIndex: 0
  newValue:"321"
  oldValue: "320"
  rowIndex: 6
  */

  var Row = info.rowIndex;
  var Colid = info.colId;
  var olddata = info.oldValue;

  //if (Row > 0 && ds_district.CountRow >= Row){
  switch (Colid) {
    case "districtCd":
      if (ds_district.getCellData(Row, Colid) != "" && ds_district.getCellData(Row, Colid) != olddata) {
        ds_district.setCellData(Row, "districtNm", "");
        scwin.f_openCommPopUpGrid(1, Row, 'T');
      } else if (ds_district.getCellData(Row, Colid) == "") {
        ds_district.setCellData(Row, "districtCd", "");
        ds_district.setCellData(Row, "districtNm", "");
      }
      break;
    case "districtNm":
      if (ds_district.getCellData(Row, Colid) != "" && ds_district.getCellData(Row, Colid) != olddata) {
        ds_district.setCellData(Row, "districtCd", "");
        scwin.f_openCommPopUpGrid(2, Row, 'T');
      } else if (ds_district.getCellData(Row, Colid) == "") {
        ds_district.setCellData(Row, "districtCd", "");
        ds_district.setCellData(Row, "districtNm", "");
      }
      break;
  }
  //}
  //<!-- 데이타셋 칼럼 변경후 이벤트 -->
  //JavaScript for=ds_district event=OnColumnChanged(row,colid)>
  $c.gus.cfEnableBtnOnly($p, [btn_save, btn_adddistrict, btn_deldistrict, btn_clsdistrict]);
};
scwin.gr_district_ontextimageclick = function (rowIndex, columnIndex) {
  var colid = gr_district.getColumnID(columnIndex);
  switch (colid) {
    //권역
    case "districtCd":
      scwin.f_openCommPopUpGrid(1, rowIndex, 'F');
      break;
    case "districtNm":
      scwin.f_openCommPopUpGrid(2, rowIndex, 'F');
      break;
  }
};
scwin.gr_district_oneditkeyup = function (info) {
  /*
      var colId = info.colID;
      var row = info.rowIndex;
      var val = info.newValue;
      if(val != "") val = val.toUpperCase();
      
      if(colId == "districtCd"){
         ds_district.setCellData(row, colId, val);
      }
  */
  const inputEl = event.target;
  switch (info.colID) {
    case "districtCd":
      inputEl.value = info.newValue.toUpperCase();
      break;
    default:
      break;
  }
};
scwin.gr_district_onrowindexchange = function (rowIndex, oldRow) {
  //var row = ds_district.getRowPosition();
  if (ds_district.getRowStatus(rowIndex) == "C") {
    gr_district.setReadOnly('row', rowIndex, false);
  } else {
    gr_district.setReadOnly('row', rowIndex, true);
  }
};
scwin.rd_stockMgntYn_onviewchange = function (info) {
  var stockMgntYn = rd_stockMgntYn.getValue();
  if (stockMgntYn == "1") {
    //yes
    rd_ioMgntYn.setValue("1");
  } else if (stockMgntYn == "0") {
    //no
    rd_ioMgntYn.setValue("0");
  }
};
scwin.f_setDistrictFilter = function () {
  var row = ds_wrkpl.getRowPosition() || 0;
  var wrkPlCd = ds_wrkpl.getCellData(row, "wrkPlCd");
  var condition = "wrkPlCd=='" + wrkPlCd + "'";
  ds_district.removeColumnFilterAll();
  $c.data.dataListFilter($p, "ds_district", condition);
};

// <!-- 데이타셋 로우 변경후 이벤트 -->
// <script language="javascript"  for=ds_wrkpl event=OnRowPosChanged(row)>
scwin.ds_wrkpl_onrowpositionchange = async function (info) {
  var row = info.newRowIndex;
  if (!scwin.rowChange) {
    scwin.rowChange = true;
    return;
  }
  if (ds_wrkpl.getRowStatus(row) == "C") {
    lc_wrkPlClsCd.setDisabled(false);
  } else {
    lc_wrkPlClsCd.setDisabled(true);
  }
  $c.gus.cfPrepareObjectHidVal($p, ds_wrkpl, row, ["lobranCd", "lobranNm", "upperWrkPlCd", "upperWrkPlNm", "zip", "addr1"], [ed_lobranCd, ed_lobranNm, ed_upperWrkPlCd, ed_upperWrkPlNm, ed_zip, ed_addr1]);
  $c.gus.cfEnableObjects($p, [oRecevInfo]);
  if (ds_wrkpl.getRowStatus(row) == "C") {
    $c.gus.cfDisableObjects($p, [ed_zip, ed_addr1]);
  } else {
    $c.gus.cfDisableKey($p);
    $c.gus.cfDisableObjects($p, [ed_zip, ed_addr1]);
  }
  $c.gus.cfDisableObjects($p, [rd_depotYn]);
  //cfDisableObjects([lc_preInfoGrpClsCd]);

  if (ds_wrkpl.getCellData(row, "wrkPlClsCd") == "C") {
    $c.gus.cfEnableObjects($p, [rd_depotYn]);
  }
  scwin.f_setReqCol();
  scwin.f_setDistrictFilter();
  tbx_totalRows2.setValue(ds_district.getRowCount());
  scwin.serchFlag = false;
};
scwin.ds_wrkpl_onbeforerowpositionchange = async function (info) {
  var row = info.oldRowIndex;
  var newRow = info.newRowIndex;
  if (scwin.chkSkip) {
    scwin.chkSkip = false;
    return false;
  }
  if (ds_wrkpl.getModifiedIndex().length != 0) {
    //필수입력항목 체크
    scwin.rowChange = false;
    if (row != null) {
      if (!(await scwin.f_ReqFieldChk(row))) {
        ds_wrkpl.setEventPause("", true);
        gr_wrkpl.setFocusedCell(row, "wrkPlClsNm");
        ds_wrkpl.setEventPause("", false);
        return false;
      }
    }
    scwin.rowChange = true;

    //return cfValidate([gr_district])
    let validArray = [{
      id: "districtCd",
      name: "지역코드",
      mandatory: true
    }];
    var ret = await $c.gus.cfValidateGrid($p, gr_district, null, null, validArray, "소속지역");
    // return ret;
    if (ret) {
      scwin.ds_wrkpl_onrowpositionchange(info);
    }
  }
};
scwin.ds_wrkpl_oncelldatachange = function (info) {
  /*
  colId: "districtCd"
  colIndex: 0
  newValue:"321"
  oldValue: "320"
  rowIndex: 6
  */
  $c.gus.cfEnableBtnOnly($p, [btn_save, btn_adddistrict, btn_deldistrict, btn_clsdistrict]);
  var colid = info.colId;
  if (colid == "wrkPlClsCd") {
    scwin.f_setReqCol();
  }
};
scwin.f_setReqCol = function () {
  var row = ds_wrkpl.getRowPosition();
  if (ds_wrkpl.getCellData(row, "wrkPlClsCd") == "G") {
    lab_zip.removeClass("req");
    lab_addr1.removeClass("req");

    //document.all.divZip.style.display="none";
    //document.all.divAddr1.style.display="none";
  } else {
    //document.all.divZip.style.display="";
    //document.all.divAddr1.style.display="";

    lab_zip.addClass("req");
    lab_addr1.addClass("req");
  }
  if (ds_wrkpl.getCellData(row, "wrkPlClsCd") == "W" || ds_wrkpl.getCellData(row, "wrkPlClsCd") == "E") {
    //document.all.divWrkPlPosnClsCd.style.display="";

    lab_wrkPlPosnClsCd.addClass("req");
  } else {
    //document.all.divWrkPlPosnClsCd.style.display="none";

    lab_wrkPlPosnClsCd.removeClass("req");
  }
};
scwin.lc_WrkPlPosnClsCd_onviewchange = function (info) {
  var strPosClsCd = "";
  strPosClsCd = lc_WrkPlPosnClsCd.getValue().trim();
  if (strPosClsCd == "T" || strPosClsCd == "L") {
    lc_OwnerCd.setReadOnly(false);
    //lc_OwnerCd.Enable = true;

    if (strPosClsCd == "T" && (lc_wrkPlClsCd.getValue() == "C" || /* lc_wrkPlClsCd.getValue() == "F" || */
    lc_wrkPlClsCd.getValue() == "L"
    /*|| lc_wrkPlClsCd.getValue() == "M" */)) {
      $c.gus.cfAlertMsg($p, MSG_LO_ERR_007);
      lc_WrkPlPosnClsCdsetValue("");
    }
  } else {
    lc_OwnerCd.setReadOnly(true);
    //lc_OwnerCd.Enable = false;
    lc_OwnerCd.setValue("");
  }
};
scwin.lc_wrkPlClsCd_onviewchange = function (info) {
  if (lc_WrkPlPosnClsCd.getValue() == "T" && (lc_wrkPlClsCd.getValue() == "C" || lc_wrkPlClsCd.getValue() == "F" || lc_wrkPlClsCd.getValue() == "L" || lc_wrkPlClsCd.getValue() == "M")) {
    lc_WrkPlPosnClsCd.setValue("");
  }
};

/**
 * @event  onkeyup
 * @name upperFlag 
 * @description  소문자 입력 시 대문자로 변경
 */
scwin.upperFlag = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.f_runExcel = function () {
  let sheetTitle;
  sheetTitle = "작업장목록";
  const options = {
    fileName: sheetTitle + "xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: sheetTitle,
    //엑셀내시트명지정필요시
    hiddenVisible: true
  };
  let infoArr = [];

  //if(await $c.win.confirm("EXCEL로 다운로드 받으시겠습니까?")) {
  $c.data.downloadGridViewExcel($p, gr_wrkpl, options, infoArr);
  //}
};
scwin.f_setTimeFormatter = function (value) {
  if (value.length > 3) {
    const hour = String(value).substr(0, 2);
    const minute = String(value).substr(2, 2);
    const output = hour + ":" + minute;
    return output;
  } else {
    return value;
  }
};
scwin.ed_lduldWaitHh_onkeyup = function (e) {
  this.setValue(e.target.value.replaceAll(":", ''));
};
scwin.gr_wrkpl_onkeydown = function (e) {
  let keyCode = e.keyCode || e.which;
  if (keyCode === 9) {
    // Tab 키
    //btn_rowAdd.focus();
    setTimeout(function () {
      btn_rowAdd.focus(); //행추가버튼으로 이동
    }, 10);
    return false; // 기본 탭 동작 방지
  }
};

// 소속지역 그리드 정렬 시 filter 풀리는 거 방지
scwin.gr_district_onsort = function () {
  scwin.f_setDistrictFilter();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_cnd_wrkPlClsCd',style:'width: 230px;',submenuSize:'auto',chooseOptionLabel:'전체',ref:'data:ds_view_cond.wrkPlClsCd',objType:'data',visibleRowNum:'10'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장 코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cnd_wrkPlCd',style:'width: 230px;',ref:'data:ds_view_cond.wrkPlCd',objType:'Data',maxlength:'5',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.upperFlag'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cnd_wrkPlNm',style:'width: 150px;',ref:'data:ds_view_cond.wrkPlNm',objType:'Data',maxlength:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보세구역코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cnd_bondZoneCd',style:'width: 150px;',ref:'data:ds_view_cond.bondZoneCd',objType:'Data',maxlength:'10'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_cnd_lobranCd',popupTitle:'',nameId:'ed_cnd_lobranNm',style:'',id:'udc_cnd_lobranCd',btnId:'btn_cnd_lobranCd','ev:onclickEvent':'scwin.udc_cnd_lobranCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_cnd_lobranCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_cnd_lobranCd_onblurNameEvent',refDataCollection:'ds_view_cond',code:'lobranCd',validTitle:'소속점소',objTypeCode:'Data',objTypeName:'Data',maxlengthCode:'6',maxlengthName:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_cnd_clntNo',nameId:'ed_cnd_clntNm',popupID:'pop_cnd_clntNo',popupTitle:'',selectID:'',style:'',id:'udc_cnd_clntNo','ev:onblurCodeEvent':'scwin.udc_cnd_clntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_cnd_clntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_cnd_clntNo_onclickEvent',refDataCollection:'ds_view_cond',code:'clntNo','ev:onviewchangeCodeEvent':'scwin.udc_cnd_clntNo_onviewchangeCodeEvent',validTitle:'거래처',maxlengthCode:'6',maxlengthName:'50',objTypeCode:'Data',objTypeName:'data',allowCharCode:'0-9',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.btn_refresh_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Srch',style:'',type:'button','ev:onclick':'scwin.btn_Srch_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 50%;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'작업장 목록',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',style:'',gridID:'gr_wrkpl',gridDownUserAuth:'X',grdDownOpts:'{"fileName":"작업장목록.xlsx","sheetName": "작업장목록","hiddenVisible":"true"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_wrkpl',style:'',id:'gr_wrkpl',visibleRowNum:'26',class:'wq_gvw',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'40','ev:onkeydown':'scwin.gr_wrkpl_onkeydown',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column1',value:'작업장구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column15',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column13',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column11',value:'작업장코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column9',value:'작업장명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column3',value:'작업장영문명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column5',value:'물류점소코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column7',value:'물류점소명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column19',value:'상위작업장코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column59',value:'상위작업장명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'우편번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column55',value:'주소1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column53',value:'주소2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column51',value:'중기자동화여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column49',value:'GATE자동화여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column47',value:'GATE설치여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column45',value:'핸드폰처리여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column43',value:'사전정보전송여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column41',value:'작업장소유구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column39',value:'부두소유구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column37',value:'소유주코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column35',value:'부두운영거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column33',value:'부두운영거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column31',value:'보세구역코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column29',value:'관할세관코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'면적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'최대용량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column23',value:'최대용량단위코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'적정용량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column67',value:'적정용량단위코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'담당자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column63',value:'담당자전화번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column65',value:'담당자팩스번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column83',value:'상하차대기시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column81',value:'창고구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column79',value:'부두장치장여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column77',value:'노조조직코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'항구코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'항구명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column69',value:'부두장치장작업장코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'지분율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column91',value:'길이',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column85',value:'수심',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column87',value:'접안능력TON수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column89',value:'자유무역지역여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column93',value:'철도청역코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column95',value:'지선코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column97',value:'조작료발생여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column107',value:'이적료발생여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column105',value:'비고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column103',value:'CNTR작업장여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column99',value:'사용여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column101',value:'재고관리여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column125',value:'입출고관리여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column123',value:'전용부두여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column121',value:'건물구조구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column119',value:'GateLog전송여부코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column117',value:'귀속물류점소코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column115',value:'귀속물류점소명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column113',value:'벌크복화점소코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column109',value:'벌크복화점소명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column111',value:'작업권역',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{displayType:'hidden',width:'130',inputType:'text',style:'',id:'wrkPlClsCd',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkPlClsNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'wrkPlCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkPlNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'130',inputType:'text',style:'',id:'wrkPlEngNm',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'130',inputType:'text',style:'',id:'lobranCd',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'120',inputType:'text',style:'',id:'lobranNm',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'upperWrkPlCd',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'130',inputType:'text',style:'',id:'upperWrkPlNm',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'100',inputType:'text',style:'',id:'zip',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'addr1',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'70',inputType:'text',style:'',id:'addr2',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'hveqAtmtYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'gateAtmtYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'gateInslYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'mpProcYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'preInfoSndYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'wrkPlPosnClsCd',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'pierPosnClsCd',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'120',inputType:'text',style:'',id:'ownerCd',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'pierOpClntNo',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'pierOpClntNm',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'130',inputType:'text',style:'',id:'bondZoneCd',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'jrsdCstmCd',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'70',inputType:'text',style:'',id:'area',value:'',displayMode:'label',hidden:'true',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'100',inputType:'text',style:'',id:'maxCapa',value:'',displayMode:'label',hidden:'true',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'maxCapaUnitCd',value:'',displayMode:'label',hidden:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'100',inputType:'text',style:'',id:'propCapa',value:'',displayMode:'label',hidden:'true',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'propCapaUnitCd',value:'',displayMode:'label',hidden:'true',textAlign:'left',dataType:'number',excelCellType:'text'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'100',inputType:'text',style:'',id:'picNm',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'picTelNo',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'picFaxNo',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'lduldWaitHh',value:'',displayMode:'label',hidden:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'whouseClsCd',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'pierYardYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'lunionOrgCd',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'100',inputType:'text',style:'',id:'portCd',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'100',inputType:'text',style:'',id:'portNm',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'200',inputType:'text',style:'',id:'pierYardWrkPlCd',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'100',inputType:'text',style:'',id:'ownRt',value:'',displayMode:'label',hidden:'true',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'70',inputType:'text',style:'',id:'len',value:'',displayMode:'label',hidden:'true',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'70',inputType:'text',style:'',id:'wdpt',value:'',displayMode:'label',hidden:'true',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'alngpierAbltTonCnt',value:'',displayMode:'label',hidden:'true',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'freeTradRgnYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'korailStnCd',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'100',inputType:'text',style:'',id:'fdrCd',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'hndlRateOutbrYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'cgshfRateOutbrYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'70',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'cntrRgnWrkPlYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'100',inputType:'text',style:'',id:'useYn',value:'',displayMode:'label',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'stockMgntYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'ioMgntYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'xclsPierYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'bldgStucClsCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'200',inputType:'text',style:'',id:'gatelogSndYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'blngLobranCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'blngLobranNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'200',inputType:'text',style:'',id:'bulkCmpstcrgBranCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'150',inputType:'text',style:'',id:'bulkCmpstcrgBranNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayType:'hidden',width:'100',inputType:'text',style:'',id:'districClss',value:'',displayMode:'label',hidden:'true',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{rowDelFunction:'scwin.f_delrow1',cancelFunction:'scwin.f_undo1',rowAddFunction:'scwin.f_Addrow1',btnCancelYn:'Y',style:'',gridID:'gr_wrkpl',id:'udc_addRow1',btnDelYn:'N',rowAddObjType:'data',rowDelObjType:'data',cancelObjType:'data',rowAddUserAuth:'C',rowDelUserAuth:'D',btnRowAddObj:'btn_rowAdd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col mt30',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'oRecevInfo',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkPlClsCd',style:'',submenuSize:'auto',ref:'data:ds_wrkpl.wrkPlClsCd',mandatory:'true',title:'작업장구분',objType:'key','ev:onviewchange':'scwin.lc_wrkPlClsCd_onviewchange',chooseOptionLabel:'-전체-',visibleRowNum:'12',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_wrkPlCd',style:'',ref:'data:ds_wrkpl.wrkPlCd',mandatory:'true',title:'작업장코드',objType:'key',maxlength:'5',allowChar:'A-Za-z0-9','ev:onkeyup':'scwin.upperFlag'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_wrkPlNm',style:'',ref:'data:ds_wrkpl.wrkPlNm',mandatory:'true',maxlength:'50',title:'작업장명',objType:'Data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장영문명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_wrkPlEngNm',style:'',ref:'data:ds_wrkpl.wrkPlEngNm',maxlength:'50',title:'작업장영문명',objType:'Data',allowChar:'A-Za-z0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속점소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'pop_lobranNm',selectID:'',codeId:'ed_lobranCd',popupTitle:'',nameId:'ed_lobranNm',style:'',id:'udc_lobranCd','ev:onblurCodeEvent':'scwin.udc_lobranCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_lobranCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_lobranCd_onviewchangeCodeEvent',objTypeCode:'Data',objTypeName:'data',maxlengthCode:'5',maxlengthName:'50',validTitle:'소속점소',UpperFlagCode:'1',allowCharCode:'A-Za-z0-9',refDataCollection:'ds_wrkpl',code:'lobranCd',name:'lobranNm','ev:onviewchangeNameEvent':'scwin.udc_lobranCd_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상위작업장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_upperWrkPlCd',nameId:'ed_upperWrkPlNm',popupID:'pop_upperWrkPlNm',popupTitle:'',selectID:'',style:'',id:'udc_upperWrkPlCd','ev:onblurCodeEvent':'scwin.udc_upperWrkPlCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_upperWrkPlCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_upperWrkPlCd_onviewchangeCodeEvent',maxlengthCode:'5',maxlengthName:'50',objTypeCode:'Data',objTypeName:'data',validTitle:'상위작업장',UpperFlagCode:'1',allowCharCode:'A-Za-z0-9',refDataCollection:'ds_wrkpl',code:'upperWrkPlCd',name:'upperWrkPlNm','ev:onviewchangeNameEvent':'scwin.udc_upperWrkPlCd_onblurNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'lab_zip',label:'우편번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w100',id:'ed_zip',placeholder:'',style:'',ref:'data:ds_wrkpl.zip',allowChar:'0-9',maxlength:'6',title:'우편번호',objType:'data'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_zip',style:'',type:'button','ev:onclick':'scwin.btn_zip_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'lab_addr1',label:'주소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_addr1',style:'',ref:'data:ds_wrkpl.addr1',objType:'key',maxlength:'100',title:'주소'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상세주소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_addr2',style:'',ref:'data:ds_wrkpl.addr2',title:'상세주소',maxlength:'100',objType:'Data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보세구역코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_bondZoneCd',style:'',ref:'data:ds_wrkpl.bondZoneCd',title:'보세구역코드',objType:'Data',maxlength:'10'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'pop_clntNo',popupTitle:'',selectID:'',style:'',id:'udc_clntNo','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_clntNo_onviewchangeCodeEvent',objTypeCode:'Data',objTypeName:'data',maxlengthCode:'6',allowCharCode:'0-9',validTitle:'거래처',maxlengthName:'50',refDataCollection:'ds_wrkpl',code:'clntNo',name:'clntNm','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건물구조구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bldgStucClsCd',style:'',submenuSize:'auto',ref:'data:ds_wrkpl.bldgStucClsCd',objType:'data',chooseOptionLabel:'[ ]'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'lab_wrkPlPosnClsCd',label:'소유구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_WrkPlPosnClsCd',style:'',submenuSize:'auto',objType:'data','ev:onviewchange':'scwin.lc_WrkPlPosnClsCd_onviewchange',chooseOptionLabel:'[ ]',ref:'data:ds_wrkpl.wrkPlPosnClsCd'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소유주',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_OwnerCd',style:'',submenuSize:'auto',ref:'data:ds_wrkpl.ownerCd',objType:'data',chooseOptionLabel:'[ ]'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속물류점소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_blngLobranCd',nameId:'ed_blngLobranNm',popupID:'pop_blngLobranCd',popupTitle:'',selectID:'',style:'',id:'udc_blngLobranCd','ev:onblurCodeEvent':'scwin.udc_blngLobranCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_blngLobranCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_blngLobranCd_onviewchangeCodeEvent',mandatoryCode:'true',objTypeCode:'Data',objTypeName:'data',maxlengthCode:'5',maxlengthName:'50',allowCharCode:'A-Za-z0-9',UpperFlagCode:'1',validTitle:'귀속물류점소',refDataCollection:'ds_wrkpl',code:'blngLobranCd',name:'blngLobranNm','ev:onviewchangeNameEvent':'scwin.udc_blngLobranCd_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'벌크복화점소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_bulkCmpstcrgBranCd',nameId:'ed_bulkCmpstcrgBranNm',popupID:'pop_bulkCmpstcrgBranCd',popupTitle:'',selectID:'',style:'',id:'udc_bulkCmpstcrgBranCd',btnId:'btn_bulkCmpstcrgBranCd','ev:onblurCodeEvent':'scwin.udc_bulkCmpstcrgBranCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bulkCmpstcrgBranCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_bulkCmpstcrgBranCd_onviewchangeCodeEvent',maxlengthCode:'5',maxlengthName:'50',objTypeCode:'Data',objTypeName:'data',UpperFlagCode:'1',allowCharCode:'A-Za-z0-9',validTitle:'벌크복화점소',refDataCollection:'ds_wrkpl',code:'bulkCmpstcrgBranCd',name:'bulkCmpstcrgBranNm','ev:onviewchangeNameEvent':'scwin.udc_bulkCmpstcrgBranCd_onblurNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관할세관코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_jrsdCstmCd',style:'',submenuSize:'auto',ref:'data:ds_wrkpl.jrsdCstmCd',objType:'data',chooseOptionLabel:'[ ]'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부두장치장여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_PierYardYn',ref:'data:ds_wrkpl.pierYardYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'면적',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'text-align:right;',id:'ed_area',class:'form-control w150',ref:'data:ds_wrkpl.area',objType:'Data',maxlength:'9.2',dataType:'float',allowChar:'0-9.',displayFormat:'#,##0.##'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'평방미터',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최대Capa',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_maxCapa',style:'text-align:right;',ref:'data:ds_wrkpl.maxCapa',objType:'Data',maxlength:'11',allowChar:'0-9',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_MaxCapaUnitCd',style:'',submenuSize:'auto',objType:'data',sortOption:'value',ref:'data:ds_wrkpl.maxCapaUnitCd',chooseOptionLabel:''},E:[{T:1,N:'xf:choices'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적정Capa',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'text-align:right;',id:'ed_propCapa',class:'form-control w150',ref:'data:ds_wrkpl.propCapa',objType:'Data',allowChar:'0-9',maxlength:'11',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'',allOption:'',id:'lc_PropCapaUnitCd',class:'form-control w150',direction:'auto',objType:'data',sortOption:'value',ref:'data:ds_wrkpl.propCapaUnitCd',chooseOptionLabel:''},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상하차대기시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w50 tac',id:'ed_lduldWaitHh',style:'',dataType:'time',ref:'data:ds_wrkpl.lduldWaitHh',objType:'Data',maxlength:'4',allowChar:'0-9:',displayFormatter:'scwin.f_setTimeFormatter ','ev:onkeyup':'scwin.ed_lduldWaitHh_onkeyup'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'창고구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_whouseClsCd',style:'',submenuSize:'auto',ref:'data:ds_wrkpl.whouseClsCd',objType:'data',chooseOptionLabel:'[ ]'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CNTR작업장여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_cntrRgnWrkPlYn',ref:'data:ds_wrkpl.cntrRgnWrkPlYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_picNm',style:'',ref:'data:ds_wrkpl.picNm',objType:'Data',maxlength:'20'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_picTelNo',style:'',ref:'data:ds_wrkpl.picTelNo',objType:'Data',maxlength:'20',allowChar:'0-9-'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자팩스번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_picFaxNo',style:'',ref:'data:ds_wrkpl.picFaxNo',objType:'Data',maxlength:'20',allowChar:'0-9-'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_rmk',style:'',ref:'data:ds_wrkpl.rmk',objType:'Data',maxlength:'500'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중기자동화여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_hveqAtmtYn',ref:'data:ds_wrkpl.hveqAtmtYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자유지역여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_freeTradRgnYn',ref:'data:ds_wrkpl.freeTradRgnYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'GATE자동화여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_gateAtmtYn',ref:'data:ds_wrkpl.gateAtmtYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'GATE설치여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_gateInslYn',ref:'data:ds_wrkpl.gateInslYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'재고관리여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_stockMgntYn',ref:'data:ds_wrkpl.stockMgntYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data','ev:onviewchange':'scwin.rd_stockMgntYn_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입출고관리여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_ioMgntYn',ref:'data:ds_wrkpl.ioMgntYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사전정보전송여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_PreInfoSndYn',ref:'data:ds_wrkpl.preInfoSndYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'GateLog전송여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_gatelogSndYn',ref:'data:ds_wrkpl.gatelogSndYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DEPOT여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_depotYn',ref:'data:ds_wrkpl.depotYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_UseYn',ref:'data:ds_wrkpl.useYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업권역',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_districtClss',style:'',submenuSize:'auto',ref:'data:ds_wrkpl.districtClss',objType:'data',chooseOptionLabel:'[ ]'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'소속 지역',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox ',id:'grp_group4',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_district',id:'gr_district',style:'',visibleRowNum:'5','ev:ontextimageclick':'scwin.gr_district_ontextimageclick','ev:onviewchange':'scwin.gr_district_onviewchange',visibleRowNumFix:'true','ev:oneditkeyup':'scwin.gr_district_oneditkeyup',readOnly:'true','ev:onrowindexchange':'scwin.gr_district_onrowindexchange',rowStatusVisible:'true',rowStatusWidth:'40','ev:onsort':'scwin.gr_district_onsort',dataName:'소속지역',validFeatures:'ignoreStatus=no',validExp:'districtCd::yes::key'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'지역코드',width:'200',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'지역명',width:'250',class:'col-type1'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'districtCd',inputType:'text',width:'200',mandatory:'true',allowChar:'A-Za-z0-9',maxLength:'7',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'districtNm',inputType:'textImage',width:'250',maxLength:'50',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_addRow2',gridID:'gr_district',rowAddFunction:'scwin.f_Addrow2',rowDelFunction:'scwin.f_delrow2',btnDelYn:'N',btnCancelYn:'Y',cancelFunction:'scwin.f_undo2',rowAddUserAuth:'C',rowDelUserAuth:'D',rowDelObjType:'data',rowAddObjType:'data',cancelUserAuth:'',btnRowAddObj:'btn_adddistrict',btnRowDelObj:'btn_deldistrict',btnCancelObj:'btn_clsdistrict',cancelObjType:'data'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_rgnEachDistrict',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.btn_rgnEachDistrict_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하위작업장'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]})