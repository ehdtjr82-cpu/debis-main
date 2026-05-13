/*amd /ui/ds/op/rscconfirm/transrscconfirm/op_101_01_16b.xml 39342 da1d00cae1399cfd16a9127b96ffbc3ae578a7b2ad508ccdb8f3f2e46fa7eeef */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'eqCls',name:'장비구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'업체구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclShortCd',name:'장비단축코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'장비코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_equipmentList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNm',name:'장비명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisVehclNo',name:'샤시차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqDrvNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mp',name:'핸드폰',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClsCd',name:'장비구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClsNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currSts',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisKndCd',name:'샤시종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmpstcrgDistrictCd',name:'복화권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmpstcrgDistrictCd2',name:'복화권역코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcgCd1',name:'화종코드1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcgCd2',name:'화종코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcgNm1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcgNm2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nonusblStDtm',name:'비가용시작일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nonusblEndDtm',name:'비가용종료일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisEqPosWrkPlNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usblHh',name:'가용시간',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ep_insurance',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrSeq',name:'보험순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrCoCd',name:'보험사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrKndCd',name:'보험종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrStDt',name:'보험시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrEndDt',name:'보험만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrLimitAmt',name:'보험한도금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'psnl1EntryYn',name:'대인1가입여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'psnl2EntryYn',name:'대인2가입여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impsnlEntryYn',name:'대물가입여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfEntryYn',name:'자가가입여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sfdmgEntryYn',name:'자손가입여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDdCnt',name:'적용일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrSttCd',name:'보험상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exceptYn',name:'제외여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_ra_eqGubun'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ra_eqGubun',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_eqpInsurance'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'equipmentNumber',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveEquipmentListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_queryCondition","key":"IN_DS1"},{"id":"ds_equipmentList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_equipmentList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.rscconfirm.transrscconfirm.SaveEquipmentInsuranceInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_ep_insurance","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_eqGubun',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_ra_eqGubun","key":"IN_DS1"},{"id":"ds_ra_eqGubun","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ra_eqGubun","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_eqGubun_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_insurance',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveEquipmentInsuranceInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_eqpInsurance","key":"IN_DS1"},{"id":"ds_ep_insurance","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ep_insurance","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_insurance_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 상위물류점소코드
scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd") == null ? "" : $c.data.getMemInfo($p, "loUpperLobranCd");
if (scwin.loUpperLobranCd == null) scwin.loUpperLobranCd = "";
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP108",
    compID: "acb_coClsCd",
    opt: {
      "range": "1"
    }
  }, {
    grpCd: "OP199",
    compID: "gr_workImplement:vehclNo",
    opt: {
      "range": "1"
    }
  }, {
    grpCd: "ZZ208",
    compID: "gr_workImplement:eqNrmNm",
    opt: {
      "range": "1"
    }
  }, {
    grpCd: "ZZ102",
    compID: "gr_ep_insurance:insrCoCd",
    opt: {
      "range": "1"
    }
  },
  //보험회사코드
  {
    grpCd: "OP107",
    compID: "gr_ep_insurance:insrKndCd",
    opt: {
      "range": "1"
    }
  },
  //보험종류코드
  {
    grpCd: "OP112",
    compID: "gr_ep_insurance:insrSttCd",
    opt: {
      "range": "1"
    }
  },
  //보험상태코드

  {
    grpCd: "OP515",
    compID: "gr_ep_insurance:psnl1EntryYn",
    opt: {
      "range": "1"
    }
  },
  //대인1
  {
    grpCd: "OP515",
    compID: "gr_ep_insurance:psnl2EntryYn",
    opt: {
      "range": "1"
    }
  },
  //대인2
  {
    grpCd: "OP515",
    compID: "gr_ep_insurance:impsnlEntryYn",
    opt: {
      "range": "1"
    }
  },
  //대물
  {
    grpCd: "OP515",
    compID: "gr_ep_insurance:selfEntryYn",
    opt: {
      "range": "1"
    }
  },
  //자가
  {
    grpCd: "OP515",
    compID: "gr_ep_insurance:sfdmgEntryYn",
    opt: {
      "range": "1"
    }
  } //자손
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.commonCodeCallbackFunc);

  // 장비구분 라디오박스 조회
  dma_ra_eqGubun.set("sysCd", "EquipmentNonUsableEBC");
  dma_ra_eqGubun.set("queryId", "retriveEquipGubunCombo");
  $c.sbm.execute($p, sbm_eqGubun);

  // 넘어오는 파라미터 세팅
  scwin.params = $c.data.getParameter($p);
  scwin.paramEqClsCd = scwin.params.eqClsCd == null ? "" : scwin.params.eqClsCd; //장비구분코드
  scwin.paramEqCd = scwin.params.eqCd == null ? "" : scwin.params.eqCd; //장비코드
  scwin.paramVehclShortNo = scwin.params.vehclShortNo == null ? "" : scwin.params.vehclShortNo; //단축번호
  scwin.paramVehclNo = scwin.params.vehclNo == null ? "" : scwin.params.vehclNo; //풀번호
  scwin.paramLobranCd = scwin.params.lobranCd == null ? "" : scwin.params.lobranCd; //물류점소코드

  // 위수탁(지입) 장비보험료 현황화면 파라미터
  scwin.vehclNo = scwin.params.v_vehclNo == null ? "" : scwin.params.v_vehclNo;
  scwin.v_vehclNo = scwin.vehclNo.substring(scwin.vehclNo.length - 4, scwin.vehclNo.length);
  scwin.assgnLobranCd = scwin.params.v_assgnLobranCd == null ? "" : scwin.params.v_assgnLobranCd;
  scwin.type = scwin.params.type == null ? "" : scwin.params.type;

  // 상위물류점소코드
  // var loUpperLobranCd = scwin.loUpperLobranCd;
  const LobranCdOptions = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    compID: "acb_lobranCd"
  }];
  $c.data.setGauceUtil($p, LobranCdOptions, scwin.lobranCdCallback);
};
scwin.onUdcCompleted = function () {
  //------------------------------------------------------------
  // 파라미터에 의한 오프레이션
  //------------------------------------------------------------
  if (!$c.gus.cfIsNull($p, scwin.paramEqCd)) {
    dma_queryCondition.set("eqCd", scwin.paramEqCd);
  }

  // TO-BE: lobranCdCallback에서 수행
  // if(!$c.gus.cfIsNull(scwin.paramLobranCd)) {
  // 	acb_lobranCd.setValue(scwin.paramLobranCd);
  // }

  if (!$c.gus.cfIsNull($p, scwin.paramEqClsCd)) {
    ra_eqGubun.setValue(scwin.paramEqClsCd);
  }
  if (!$c.gus.cfIsNull($p, scwin.paramVehclShortNo)) {
    em_eqCd.setValue(scwin.paramVehclShortNo);
  }
  if (!$c.gus.cfIsNull($p, scwin.paramVehclNo)) {
    ed_eqNm.setValue(scwin.paramVehclNo);
  }
  if (!$c.gus.cfIsNull($p, scwin.paramEqCd) || !$c.gus.cfIsNull($p, scwin.paramVehclShortNo)) {
    scwin.f_Retrieve();
  }
  if (scwin.type == "retrieve") {
    ra_eqGubun.setValue("LV");
    em_eqCd.setValue(scwin.v_vehclNo);
    ed_eqNm.setValue(scwin.vehclNo);

    //acb_lobranCd.setValue(scwin.assgnLobranCd); // 시점때문에 점소코드 리스트 요청 콜백 함수에서 처리
    // scwin.f_Retrieve(); // 시점때문에 점소코드 리스트 요청 콜백 함수에서 처리
  }
};

//-------------------------------------------------------------------------
// 점소코드 리스트 요청 콜백 함수 
//-------------------------------------------------------------------------
scwin.lobranCdCallback = function () {
  const lobranCd = !$c.gus.cfIsNull($p, scwin.paramLobranCd) ? scwin.paramLobranCd : scwin.type == "retrieve" ? scwin.assgnLobranCd : scwin.loUpperLobranCd;
  acb_lobranCd.setValue(lobranCd);
  if (scwin.type == "retrieve") {
    // 파라미터로 retrieve 받는 경우, 점소코드 세팅 후 조회 요청
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// function name : scwin.f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// Excel 업로드
//-------------------------------------------------------------------------
scwin.f_upload = function () {
  try {
    ds_ep_insurance.setJSON([]);
    let options = {
      "headerExist": "1",
      "status": "C",
      "type": "1",
      "startRowIndex": 2,
      "footerExist": "0"
    };
    udc_topGrdBtnUpAndPlus.uploadGridViewExcel(gr_ep_insurance, options);
  } catch (e) {}

  // AS-IS : f_upload()
  // ds_ep_insurance.DataID = document.all.file_url.value;
  // ds_ep_insurance.Reset();
  // ds_ep_insurance.UseChangeInfo = "false";
};

//-------------------------------------------------------------------------
// 상세 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve_detail = function (equipmentNumber) {
  dma_eqpInsurance.set("equipmentNumber", equipmentNumber);
  $c.sbm.execute($p, sbm_insurance);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  for (var i = 0; i < ds_ep_insurance.getRowCount(); i++) {
    if (ds_ep_insurance.getCellData(i, "insrStDt") == "") {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_018, "보험시작일자")); // @ 은(는) 유효한 날짜가 아닙니다.
      return;
    }
    if (ds_ep_insurance.getCellData(i, "insrEndDt") == "") {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_018, "보험종료일자")); // @ 은(는) 유효한 날짜가 아닙니다.
      return;
    }
    if (!$c.gus.cfIsAfterDate($p, ds_ep_insurance.getCellData(i, "insrStDt"), ds_ep_insurance.getCellData(i, "insrEndDt"))) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_039)); // 시작일자가 종료일자 이전이어야 합니다.
      return;
    }
  }
  let rtn = $c.gus.cfValidate($p, [gr_ep_insurance]);
  if (rtn) {
    let con = await $c.win.confirm($p, MSG_CM_CRM_001); // 저장하시겠습니까?
    if (con) {
      $c.sbm.execute($p, sbm_save);
    }
  }
};

//-------------------------------------------------------------------------
//  그리드추가 - 코드 적용
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  if (ds_equipmentList.getRowCount() == 0) return;
  let row = ds_ep_insurance.insertRow();
  let eqRow = ds_equipmentList.getRowPosition();
  let eqCd = ds_equipmentList.getCellData(eqRow, "eqCd");
  ds_ep_insurance.setCellData(row, "insrCoCd", "DB");
  ds_ep_insurance.setCellData(row, "eqCd", eqCd);
  ds_ep_insurance.setCellData(row, "psnl1EntryYn", "1");
  ds_ep_insurance.setCellData(row, "psnl2EntryYn", "1");
  ds_ep_insurance.setCellData(row, "impsnlEntryYn", "1");
  ds_ep_insurance.setCellData(row, "selfEntryYn", "1");
  ds_ep_insurance.setCellData(row, "sfdmgEntryYn", "1");
  ds_ep_insurance.setCellData(row, "exceptYn", "0");
  ds_ep_insurance.setRowPosition(row);
  gr_ep_insurance.setFocusedCell(row, "insrCoCd");
};

//-------------------------------------------------------------------------
// 그리드 행삭제
//-------------------------------------------------------------------------
scwin.f_DeleteRow = function () {
  let rowStatus = ds_ep_insurance.getRowStatus(ds_ep_insurance.getRowPosition());
  if (rowStatus == "C" || rowStatus == "V") ds_ep_insurance.removeRow(ds_ep_insurance.getRowPosition()); // 삽입(C), 삽입 후 삭제(V) 상태인 경우 완전 삭제
  else ds_ep_insurance.deleteRow(ds_ep_insurance.getRowPosition());
};

//-------------------------------------------------------------------------
// 그리드 취소
//-------------------------------------------------------------------------
scwin.f_CancelRow = function () {
  let rowStatus = ds_ep_insurance.getRowStatus(ds_ep_insurance.getRowPosition());
  if (rowStatus == "C" || rowStatus == "V") ds_ep_insurance.removeRow(ds_ep_insurance.getRowPosition()); // 삽입(C), 삽입 후 삭제(V) 상태인 경우 완전 삭제
  else $c.data.undoRow($p, ds_ep_insurance, "Y");
};

//-------------------------------------------------------------------------
// 팝업 열기
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (disGubun, pCode, pName, pClose) {
  switch (disGubun) {
    case 1:
      // 협력업체
      // Select ID : retrieveCarKindClntInfo
      udc_comCodeClnt.cfCommonPopUp(scwin.udc_comCodeClnt_callBackFunc // 팝업 콜백 리턴결과 Array 형태로 SQL Select 순서로 Return
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) 	MAX:10     null(2)   "5"
      , null // Title명's                         	null    "100,200"
      , null // 보여주는 각 컬럼들의 폭               null    "100,200"
      , null // 컬럼중에서 숨기는 컬럼 지정           null    "7,8,9,10"		
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:12개까지 가능     null    "SHIP"
      , null // POP-UP 띄울때 원도우의 사용자 정의 폭              null    "500"
      , null // POP-UP 띄울때 윈도우의 사용자 정의 높이             null    "600"
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표  
      , null // 중복체크여부
      , null // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2(각화면에서 변경할경우)        null    "Win타이틀,검색어1,검색어2"
      , null // Data건수가 0건일때 Window를 띄우지 않음 리턴
      );
      break;
    case 2:
      // 장비번호
      // Select ID : retrieveKndVehclListInfo
      udc_comCodeEq.cfCommonPopUp(scwin.udc_comCodeEq_callBackFunc, pCode, pName, pClose, null, null, null, null, "LO",
      // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:12개까지 가능     null    "SHIP"
      null, null, null, null, null, null, null, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 그리드뷰 코드 콜백함수 
//-------------------------------------------------------------------------
scwin.commonCodeCallbackFunc = function () {
  let grid = gr_ep_insurance; // 그리드뷰 객체
  // [코드:코드명]으로 보여야하는 컬럼 리스트
  const columnList = ["insrCoCd", "insrKndCd", "insrSttCd", "psnl1EntryYn", "psnl2EntryYn", "impsnlEntryYn", "selfEntryYn", "sfdmgEntryYn"];
  columnList.forEach(function (columnID) {
    let dataListInfo = grid.getColumnDataListInfo(columnID); // DataList 정보
    if (!dataListInfo) return;
    let dataList = $p.getComponentById(dataListInfo.id); // DataList 객체
    if (!dataList) return;
    let valueID = dataListInfo.value;
    let labelID = dataListInfo.label;
    let rowCount = dataList.getRowCount();
    for (let i = 0; i < rowCount; i++) {
      let value = dataList.getCellData(i, valueID);
      let label = dataList.getCellData(i, labelID);

      // 중복 방지
      if (label && label.indexOf(value + " : ") === 0) continue;
      dataList.setCellData(i, labelID, value + " : " + label);
    }
  });
};
///////////////////////////////////////////// S U B M I S S I O N    E V E N T /////////////////////////////////////////

// 조회
scwin.sbm_retrieve_submitdone = function (e) {
  ds_ep_insurance.removeAll(); // 보험정보는 장비 선택 시마다 새로 조회하기 때문에 초기화

  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_equipmentList.getRowCount() == 0) return;
  totalRowsEquipment.setValue(ds_equipmentList.getRowCount());
  ds_equipmentList.setRowPosition(0);
  gr_workImplement.setFocusedCell(0, "vehclNo");
  scwin.f_Retrieve_detail(ds_equipmentList.getCellData(0, "eqCd"));
};

// 장비보험 조회
scwin.sbm_insurance_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRowsInsurance.setValue(ds_ep_insurance.getRowCount());
};

// 저장
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.win.alert($p, $c.data.getMessage($p, MSG_CM_INF_001)); // 성공적으로 저장하였습니다

  scwin.f_Retrieve_detail(ed_eqCd.getValue());
};

// 장비구분 조회
scwin.sbm_eqGubun_submitdone = function (e) {
  ra_eqGubun.setValue("LV");
};

///////////////////////////////////////////// U D C   E V E N T /////////////////////////////////////////

// ==================== 협력업체 ====================
// 협력업체 onClick
scwin.udc_comCodeClnt_onclickEvent = function (e) {
  scwin.f_openPopUp(1, em_clntNo.getValue(), ed_clntNm.getValue(), "T");
};

// 협력업체 팝업 콜백 함수
scwin.udc_comCodeClnt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, em_clntNo, ed_clntNm);
};

// 협력업체 코드 FocusOut
scwin.udc_comCodeClnt_onblurCodeEvent = function (e) {
  if (em_clntNo.getValue() === "") {
    ed_clntNm.setValue("");
    return;
  }
  scwin.f_openPopUp(1, em_clntNo.getValue(), ed_clntNm.getValue(), "T");
};

// ==================== 장비번호 ====================
// 장비번호 OnClick
scwin.udc_comCodeEq_onclickEvent = function (e) {
  scwin.f_openPopUp(2, em_eqCd.getValue(), ed_eqNm.getValue(), "T");
};

// 장비번호 팝업 콜백함수
scwin.udc_comCodeEq_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, em_eqCd, ed_eqNm);
};

// 장비번호 FocusOut
scwin.udc_comCodeEq_onblurCodeEvent = function (e) {
  if (em_eqCd.getValue() === "") {
    ed_eqNm.setValue("");
    return;
  }
  scwin.f_openPopUp(2, em_eqCd.getValue(), ed_eqNm.getValue(), "T");
};

///////////////////////////////////////////// C O M P O N E N T   E V E N T /////////////////////////////////////////

scwin.gr_workImplement_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_Retrieve_detail(ds_equipmentList.getCellData(rowIndex, "eqCd"));
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'ra_eqGubun',ref:'data:dma_queryCondition.eqCls',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',mandatory:'true',objType:'data',validExp:'구분:yes'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_ra_eqGubun'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배정점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:' w200',editType:'select',id:'acb_lobranCd',search:'start',style:'',submenuSize:'auto',ref:'data:dma_queryCondition.lobranCd',allOption:'',chooseOption:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운영형태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w120',editType:'select',id:'acb_coClsCd',search:'start',style:'',submenuSize:'auto',chooseOption:'true',ref:'data:dma_queryCondition.coClsCd',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_comCodeClnt',codeId:'em_clntNo',nameId:'ed_clntNm',selectID:'retrieveCarKindClntInfo',refDataCollection:'dma_queryCondition',code:'clntNo',maxlengthCode:'6','ev:onblurCodeEvent':'scwin.udc_comCodeClnt_onblurCodeEvent','ev:onclickEvent':'scwin.udc_comCodeClnt_onclickEvent',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_comCodeEq',nameId:'ed_eqNm',codeId:'em_eqCd',selectID:'retrieveKndVehclListInfo',refDataCollection:'dma_queryCondition',code:'vehclShortCd',maxlengthCode:'6',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_comCodeEq_onblurCodeEvent','ev:onclickEvent':'scwin.udc_comCodeEq_onclickEvent',allowCharCode:'a-zA-Z0-9'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{id:'udc_topGrdBtnUpAndPlus',gridDownYn:'N',gridUpYn:'Y',gridUpFn:'scwin.f_upload',grp:'grp_group4',templateYn:'N',gridID:'gr_ep_insurance',btnUser:'N',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox wfix flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 400px;'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_equipmentList',style:'',autoFit:'allColumn',id:'gr_workImplement',class:'wq_gvw',visibleRowNum:'16',visibleRowNumFix:'true',readOnly:'true','ev:oncellclick':'scwin.gr_workImplement_oncellclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'장비번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'장비종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column15',value:'규격',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'eqKndNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'eqNrmNm',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRowsEquipment',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'장비코드',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_eqCd',placeholder:'',style:'',objType:'data',ref:'data:ds_equipmentList.eqCd',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'장비번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_vehclNo',placeholder:'',style:'',objType:'data',ref:'data:ds_equipmentList.vehclNo',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'장비기사',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' w150',id:'ed_eqDrvNm',placeholder:'',style:'',objType:'data',ref:'data:ds_equipmentList.eqDrvNm',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'장비기사 연락처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_mp',placeholder:'',style:'',objType:'data',ref:'data:ds_equipmentList.mp',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'장비구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_eqClsNm',placeholder:'',style:'',objType:'data',ref:'data:ds_equipmentList.eqClsNm',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'배정점소',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_lobranNm',placeholder:'',style:'',objType:'data',ref:'data:ds_equipmentList.lobranNm',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_eqKndNm',placeholder:'',style:'',objType:'data',ref:'data:ds_equipmentList.eqKndNm',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'규격',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_eqNrmNm',placeholder:'',style:'',objType:'data',ref:'data:ds_equipmentList.eqNrmNm',readOnly:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group4',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_ep_insurance',id:'gr_ep_insurance',style:'',visibleRowNum:'11',visibleRowNumFix:'true',readOnly:'false',columnMove:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'장비코드',width:'120',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'보험회사코드',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'보험종류코드',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'보험료',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'보험시작일자',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'보험종료일자',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'적용<br/>일수',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'보험상태<br/>코드',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'가입여부',width:'350',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column27',value:'비고',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'제외<br/>여부',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'대인1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column36',value:'대인2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'대물',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column34',value:'자가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'자손',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'insrCoCd',inputType:'select',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'insrKndCd',inputType:'select',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'insrLimitAmt',inputType:'text',width:'80',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'insrStDt',inputType:'calendar',width:'120',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'insrEndDt',inputType:'calendar',width:'120',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDdCnt',inputType:'text',width:'70',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'insrSttCd',inputType:'select',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'psnl1EntryYn',inputType:'select',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'psnl2EntryYn',inputType:'select',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'impsnlEntryYn',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'selfEntryYn',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'sfdmgEntryYn',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'exceptYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'No'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRowsInsurance',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{id:'udc_bottom',btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DeleteRow',cancelFunction:'scwin.f_CancelRow'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})