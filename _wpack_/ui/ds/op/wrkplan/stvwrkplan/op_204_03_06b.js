/*amd /ui/ds/op/wrkplan/stvwrkplan/op_204_03_06b.xml 46980 dc64b56ac56b6ae4c8b59a0343f60b27c45eaabe6651bfee7eedb70c63f93a5d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_planList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_main',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIntendDt',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStTm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndTm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ectdYn',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ealyAtdYn',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeProcYn',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'name11',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkIntendDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shiftClsCd',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_shiftSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'지점코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkIntendDt',name:'작업예정일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shiftClsCd',name:'Shife코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_staffsave'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'shiftYN',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkIndictNo',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:aliasDataList',A:{studioSrc:'',scope:'../ds_staff1',id:'ds_staff1'}},{T:1,N:'w2:aliasDataList',A:{studioSrc:'',scope:'../ds_staff2',id:'ds_staff2'}},{T:1,N:'w2:aliasDataList',A:{studioSrc:'',scope:'../ds_staff3',id:'ds_staff3'}},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_planList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sysCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_staffSave',action:'/ds.op.wrkplan.stvwrkplan.cmd.SaveStaffInputPlanCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_staff1","key":"IN_DS1"},{"id":"ds_staff2","key":"IN_DS2"},{"id":"ds_staff3","key":"IN_DS3"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_staffSave_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_shiftsearch',action:'/ds.op.wrkplan.stvwrkplan.cmd.RetrieveDayShiftStaffInputPlanCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_shiftSearch","key":"IN_DS1"},{"id":"ds_staff1","key":"OUT_DS1"},{"id":"ds_staff2","key":"OUT_DS2"},{"id":"ds_staff3","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_staff1","key":"OUT_DS1"},{"id":"ds_staff2","key":"OUT_DS2"},{"id":"ds_staff3","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_shiftsearch_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_planList',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_planList',target:'data:json,{"id":"ds_planList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// hidden 컴포넌트 선언
//-------------------------------------------------------------------------
scwin.txtShiftYN = "";

//-------------------------------------------------------------------------
// 전역변수 선언
//-------------------------------------------------------------------------
scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.p_shiftSearch = "";
scwin.p_staff1RowCnt = "";
scwin.p_staff2RowCnt = "";

// 모화면에 접근
scwin.parentFrame = $c.win.getParent($p);

// 모화면 scwin 전역변수 호출
// 여긴 모화면 연결시 사용, 현재는 정의 안되어서 오류 값 뜸
scwin.parentscwin = scwin.parentFrame.scwin;
// scwin.txtCfmanYn = scwin.parentscwin.scwin.txtCfmanYn;
// dummy 데이터
scwin.searchKind = scwin.parentFrame.scwin.searchKind;
scwin.parentscwin = "";
scwin.txtWrkIndictNo = scwin.parentFrame.scwin.txtWrkIndictNo;
scwin.txtCfmanYn = "";
scwin.oldData = "";
scwin.eventCnt = 0;

//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const param = [{
    method: "getGridCombo",
    param1: "DailyStevedoringWorkIndicationEBC",
    param2: "retrieveWorkPlaceWorkStep",
    param3: false,
    compID: "gr_staff1:wrkStpCd"
  }, {
    method: "getGridCombo",
    param1: "DailyStevedoringWorkIndicationEBC",
    param2: "retrieveWorkPlaceWorkStep",
    param3: false,
    compID: "gr_staff2:wrkStpCd"
  }];
  $c.data.setGauceUtil($p, param);
  acb_planList.setDisabled(true);
  btn_shift.setDisabled(true);
  // 메인화면에서 작업지시번호 받아옴
  scwin.txtWrkIndictNo = scwin.parentFrame.scwin.txtWrkIndictNo;
};
scwin.ondataload = function () {};

//-------------------------------------------------------------------------
// 메인화면에서 호출시 보내는 파라미터를 통한 데이터 통신(op_204_03_02b)
//-------------------------------------------------------------------------
scwin.shift = function (wrkPlCd, wrkDt) {
  dma_planList.set("wrkPlCd", wrkPlCd);
  dma_planList.set("wrkDt", wrkDt);
  dma_planList.set("sysCd", "DailyStevedoringWorkIndicationEBC");
  dma_planList.set("queryId", "retrieveWorkPlanList");
  $c.sbm.execute($p, sbm_planList);
};

//-------------------------------------------------------------------------
// 정규직 Grid 행추가 버튼 클릭  f_AddRowStaff1
//-------------------------------------------------------------------------
scwin.btn_staff1_add_onClick = async function () {
  if (scwin.searchKind == "" && scwin.parentFrame.scwin.txtWrkIndictNo == "") {
    $c.win.alert($p, "먼저 기본정보를 조회해 주십시오.");
    return;
  } else if (scwin.searchKind == "E") {
    $c.win.alert($p, "기본 정보를 등록하십시오.");
    return;
  }
  let validArray = [{
    id: "staffNo",
    name: "사번",
    mandatory: true,
    length: 6
  }, {
    id: "staffNm",
    name: "성명",
    mandatory: true
  }, {
    id: "wrkStpCd",
    name: "작업단계",
    mandatory: true
  }];
  let ret = await $c.gus.cfValidateGrid($p, gr_staff1, null, null, validArray, "정규직");
  if (!ret) {
    return;
  }
  let row = ds_staff1.insertRow();
  ds_staff1.setCellData(row, "cfmanYn", scwin.txtCfmanYn);
  ds_staff1.setCellData(row, "wrkIndictNo", scwin.parentFrame.scwin.txtWrkIndictNo);
  gr_staff1.setFocusedCell(row, "staffNo");
  spa_totalRow1.setValue(ds_staff1.getTotalRow());
};

//-------------------------------------------------------------------------
// 정규직 Grid 행삭제 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_staff1_del_onClick = function () {
  let row = ds_staff1.getRowPosition();
  if (ds_staff1.getRowStatus(ds_staff1.getRowPosition()) == "C") {
    ds_staff1.removeRow(ds_staff1.getRowPosition());
  } else {
    ds_staff1.deleteRow(ds_staff1.getRowPosition());
    gr_staff1.setFocusedCell(row, 0);
  }
  ;
  spa_totalRow1.setValue(ds_staff1.getTotalRow());
};

//-------------------------------------------------------------------------
// 정규직 Grid 행 취소 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_staff1_cancle_onClick = function () {
  if (ds_staff1.getRowStatus(ds_staff1.getRowPosition()) == "C") {
    ds_staff1.removeRow(ds_staff1.getRowPosition());
    // gr_staff1.setFocusedCell(0, 0);
  } else {
    ds_staff1.undoRow(ds_staff1.getRowPosition());
  }
  ;
  spa_totalRow1.setValue(ds_staff1.getTotalRow());
};

//-------------------------------------------------------------------------
// 계약직 Grid 행추가 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_staff2_add_onClick = async function () {
  // 행추가 데이터 하드코딩

  if (scwin.searchKind == "" && scwin.parentFrame.scwin.txtWrkIndictNo == "") {
    $c.win.alert($p, "먼저 기본정보를 조회해 주십시오.");
    return;
  } else if (scwin.searchKind == "E") {
    $c.win.alert($p, "기본 정보를 등록하십시오.");
    return;
  }
  let validArray = [{
    id: "staffNo",
    name: "사번",
    mandatory: true,
    length: 6
  }, {
    id: "staffNm",
    name: "성명",
    mandatory: true
  }, {
    id: "wrkStpCd",
    name: "작업단계",
    mandatory: true
  }];
  ret = await $c.gus.cfValidateGrid($p, gr_staff2, null, null, validArray, "계약직");
  if (!(await ret)) {
    return;
  }
  let row = ds_staff2.insertRow();
  ds_staff2.setCellData(row, "cfmanYn", scwin.txtCfmanYn);
  ds_staff2.setCellData(row, "wrkIndictNo", scwin.parentFrame.scwin.txtWrkIndictNo);
  gr_staff2.setFocusedCell(0, "staffNo");
  spa_totalRow2.setValue(ds_staff2.getTotalRow());
};

//-------------------------------------------------------------------------
// 계약직 Grid 행삭제 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_staff2_del_onClick = function () {
  let row = ds_staff2.getRowPosition();
  if (ds_staff2.getRowStatus(ds_staff2.getRowPosition()) == "C") {
    ds_staff2.removeRow(ds_staff2.getRowPosition());
  } else {
    ds_staff2.deleteRow(ds_staff2.getRowPosition());
    gr_staff2.setFocusedCell(row, 0);
  }
  ;
  spa_totalRow2.setValue(ds_staff2.getTotalRow());
};

//-------------------------------------------------------------------------
// 계약직 Grid 행 취소 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_staff2_cancle_onClick = function () {
  if (ds_staff2.getRowStatus(ds_staff2.getRowPosition()) == "C") {
    ds_staff2.removeRow(ds_staff2.getRowPosition());
    gr_staff2.setFocusedCell(0, 0);
  } else {
    ds_staff2.undoRow(ds_staff1.getRowPosition());
  }
  ;
  spa_totalRow2.setValue(ds_staff2.getTotalRow());
};

//-------------------------------------------------------------------------
// staff저장 버튼 click시
//-------------------------------------------------------------------------
scwin.btn_save_onClick = async function (e) {
  if (scwin.searchKind == "" && scwin.parentFrame.scwin.txtWrkIndictNo == "") {
    $c.win.alert($p, "먼저 기본정보를 조회해 주십시오.");
    return;
  } else if (scwin.searchKind == "E") {
    $c.win.alert($p, "기본 정보를 등록하십시오.");
    return;
  }
  let validArray = [{
    id: "staffNo",
    name: "사번",
    mandatory: true,
    length: 6
  }, {
    id: "staffNm",
    name: "성명",
    mandatory: true
  }, {
    id: "wrkStpCd",
    name: "작업단계",
    mandatory: true
  }];
  let ret = await $c.gus.cfValidateGrid($p, gr_staff1, null, null, validArray, "정규직");
  if (!ret) {
    return;
  }

  // gr_staff2 valid (왼쪽 그리드)
  let validArray2 = [{
    id: "staffNo",
    name: "사번",
    mandatory: true,
    length: 6
  }, {
    id: "staffNm",
    name: "성명",
    mandatory: true
  }, {
    id: "wrkStpCd",
    name: "작업단계",
    mandatory: true
  }];
  let ret2 = await $c.gus.cfValidateGrid($p, gr_staff2, null, null, validArray2, "계약직");
  if (!ret2) {
    return;
  }
  if (!(await $c.gus.cfValidate($p, ed_lunionInputCnt))) {
    return;
  }

  //삭제를 제외한 Row Insert로 변경
  if (scwin.txtShiftYN == "Y") {
    scwin.f_flagSet();
  }
  let result = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (!result) {
    return;
  } else {
    // dma_staffsave.set("shiftYN", scwin.txtShiftYN);
    // dma_staffsave.set("wrkIndictNo", scwin.parentFrame.scwin.txtWrkIndictNo);

    $c.sbm.setAction($p, sbm_staffSave, "/ds.op.wrkplan.stvwrkplan.cmd.SaveStaffInputPlanCMD.do?shiftYN=" + scwin.txtShiftYN + "&wrkIndictNo=" + scwin.parentFrame.scwin.txtWrkIndictNo);
    ds_staff3.setCellData(0, "lunionInputCnt", ed_lunionInputCnt.getValue());
    ds_staff3.setCellData(0, "hveqDuseCnt", ed_hveqDuseCnt.getValue());
    $c.sbm.execute($p, sbm_staffSave);
  }
  ;
};

//-------------------------------------------------------------------------
// 삭제를 제외한 Row Insert로 변경
//-------------------------------------------------------------------------
scwin.f_flagSet = function () {
  for (i = 0; i < ds_staff1.getTotalRow(); i++) {
    if (ds_staff1.getRowStatus(i) == "D") {
      ds_staff1.modifyRowStatus(i, "D");
    } else {
      ds_staff1.modifyRowStatus(i, "C");
    }
  }
  for (i = 0; i < ds_staff2.getTotalRow(); i++) {
    if (ds_staff2.getRowStatus(i) == "D") {
      ds_staff2.modifyRowStatus(i, "D");
    } else {
      ds_staff2.modifyRowStatus(i, "C");
    }
  }
};

//-------------------------------------------------------------------------
// 주간 Shift 계획사용 클릭시 f_shift
//-------------------------------------------------------------------------
scwin.btn_shift_onClick = function (e) {
  if (scwin.searchKind == "" && scwin.parentFrame.scwin.txtWrkIndictNo == "") {
    $c.win.alert($p, "먼저 기본정보를 조회해 주십시오.");
    return;
  } else if (scwin.searchKind == "E") {
    $c.win.alert($p, "기본 정보를 등록하십시오.");
    return;
  }
  dma_shiftSearch.set("lobranCd", scwin.parentFrame.scwin.ab_lobranCd);
  dma_shiftSearch.set("wrkPlCd", $p.parent().ed_works_01.getValue());
  dma_shiftSearch.set("wrkIntendDt", $p.parent().ica_inqDt.getValue());
  dma_shiftSearch.set("shiftClsCd", "D"); //주간

  dma_shiftSearch.set("wrkIndictNo", acb_planList.getValue());
  scwin.p_shiftSearch = "Y";
  $c.sbm.execute($p, sbm_shiftsearch);
  scwin.txtShiftYN = "Y";
  ds_staff3.setCellData(0, "wrkIndictNo", $p.parent().txtWrkIndictNo);
};

//-------------------------------------------------------------------------
// 계약직 그리드 인원번호 팝업 클릭시 , 모화면 데이터가 필요해서 추후에 한번에 연결
//-------------------------------------------------------------------------
scwin.ds_staff2_staffNo_onClick = async function (rowIndex) {
  //(0)직종코드		
  //(1)직종명	        
  //(2)인원번호		
  //(3)인원명	                          
  //(4)직급		    
  //(5)직급명		    
  //(6)물류점소코드   
  //(7)물류점소명		
  //(8)상세직종코드	
  //(9)상세직종명		                  
  //(10)배치가능여부	
  //(11)본사계약직여부 
  //(12)연근여부		
  let arrParam = new Array();
  // let url = "/ui/ds/op/wrkplan/stvwrkplan/op_103_01_10p.xml";
  let url = "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml";
  let opts = "";
  arrParam[0] = ds_staff2.getCellData(rowIndex, "staffNo").replace(/\s*$/, ''); //사번
  arrParam[1] = ds_staff2.getCellData(rowIndex, "staffNm"); //사원명
  arrParam[2] = scwin.parentFrame.scwin.acb_lobranCd; //점소코드
  // arrParam[2] = ""; //점소코드
  arrParam[3] = scwin.parentFrame.scwin.acb_lobranNm; //점소명
  // arrParam[3] = "";  //점소명
  // arrParam[4] = scwin.parentFrame.scwin.hid_txt_wrkCd; //작업장코드
  arrParam[4] = ""; //작업장코드
  arrParam[5] = "02,D"; //직종  (계약직)
  arrParam[6] = "02,D"; //상세직종코드 (하역직)
  arrParam[7] = ''; //직급
  // arrParam[8] = "20180910" //작업일
  arrParam[8] = scwin.parentFrame.scwin.hid_txt_inqDt === "99999999" ? scwin.strCurDate : scwin.parentFrame.scwin.hid_txt_inqDt; //작업일
  // arrParam[8] = scwin.strCurDate;  //작업일
  arrParam[9] = 'Y'; //배치가능여부
  arrParam[10] = "F"; //WINDOW CLOSE 여부
  arrParam[11] = "1"; //상세직종Flag

  // 팝업 옵션 설정
  let options = {
    id: "taxPop",
    popupName: "인력검색",
    width: 1100,
    height: 650
  };
  let rtnList = await $c.win.openPopup($p, url, options, arrParam);
  if (rtnList != null) {
    ds_staff2.setCellData(rowIndex, "staffNo", rtnList[2]); //사원코드
    ds_staff2.setCellData(rowIndex, "staffNm", rtnList[3]); //사원명
    ds_staff2.setCellData(rowIndex, "occpgrdNm", rtnList[5]); //직급
    ds_staff2.setCellData(rowIndex, "occptypeNm", rtnList[9]); //상세직종 
  } else {
    ds_staff2.setCellData(rowIndex, "staffNo", ""); //사원코드
    ds_staff2.setCellData(rowIndex, "staffNm", ""); //사원명
    ds_staff2.setCellData(rowIndex, "occpgrdNm", ""); //직급
    ds_staff2.setCellData(rowIndex, "occptypeNm", ""); //상세직종
  }
};

//-------------------------------------------------------------------------
// 정규직 그리드 사번 팝업 클릭시 , 모화면 데이터가 필요해서 추후에 한번에 연결
//-------------------------------------------------------------------------
scwin.ds_staff1_staffNm_onClick = async function (rowIndex) {
  //(0)직종코드		
  //(1)직종명	        
  //(2)인원번호		
  //(3)인원명	                          
  //(4)직급		    
  //(5)직급명		    
  //(6)물류점소코드   
  //(7)물류점소명		
  //(8)상세직종코드	
  //(9)상세직종명		                  
  //(10)배치가능여부	
  //(11)본사계약직여부 
  //(12)연근여부		
  let arrParam = new Array();
  let url = "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml";
  // let url = "/ui/ds/op/wrkplan/stvwrkplan/op_103_01_10p.xml";
  let opts = "";
  arrParam[0] = ds_staff1.getCellData(rowIndex, "staffNo").replace(/\s*$/, ''); //사번
  arrParam[1] = ds_staff1.getCellData(rowIndex, "staffNm"); //사원명
  arrParam[2] = scwin.parentFrame.scwin.acb_lobranCd; //점소코드
  // arrParam[2] = ""; //점소코드
  arrParam[3] = scwin.parentFrame.scwin.acb_lobranNm; //점소명
  // arrParam[3] = "";  //점소명
  // arrParam[4] = scwin.parentFrame.scwin.hid_txt_wrkCd; //작업장코드
  arrParam[4] = ""; //작업장코드
  arrParam[5] = '01,D'; //직종  (정규직)
  arrParam[6] = '02,D'; //상세직종코드 (하역직)
  arrParam[7] = ''; //직급
  arrParam[8] = scwin.parentFrame.scwin.hid_txt_inqDt == '99999999' ? scwin.strCurDate : scwin.parentFrame.scwin.hid_txt_inqDt; //작업일
  // arrParam[8] = scwin.strCurDate;  //작업일
  arrParam[9] = 'Y'; //배치가능여부
  arrParam[10] = "F"; //WINDOW CLOSE 여부
  arrParam[11] = "1"; //상세직종Flag

  // 팝업 옵션 설정
  let options = {
    id: "taxPop",
    popupName: "인력검색",
    width: 1080,
    height: 650
  };
  let rtnList = await $c.win.openPopup($p, url, options, arrParam);
  if (rtnList != null) {
    4;
    ds_staff1.setCellData(rowIndex, "staffNo", rtnList[2]); //사원코드
    ds_staff1.setCellData(rowIndex, "staffNm", rtnList[3]); //사원명
    ds_staff1.setCellData(rowIndex, "occpgrdNm", rtnList[5]); //직급
    ds_staff1.setCellData(rowIndex, "occptypeNm", rtnList[9]); //상세직종 
  } else {
    ds_staff1.setCellData(rowIndex, "staffNo", ""); //사원코드
    ds_staff1.setCellData(rowIndex, "staffNm", ""); //사원명
    ds_staff1.setCellData(rowIndex, "occpgrdNm", ""); //직급
    ds_staff1.setCellData(rowIndex, "occptypeNm", ""); //상세직종
  }
};

//-------------------------------------------------------------------------
// 정규직 그리드 editable 제어12
//-------------------------------------------------------------------------
scwin.gr_staff_onCellClick = function (rowIndex, columnIndex, columnId) {
  gr_staff1.setCellReadOnly(rowIndex, "occpgrdNm", true);
  gr_staff1.setCellReadOnly(rowIndex, "occptypeNm", true);
  if (ds_staff1.getRowStatus(rowIndex) == "C") {
    gr_staff1.setCellReadOnly(rowIndex, "staffNo", false);
    gr_staff1.setCellReadOnly(rowIndex, "staffNm", false);
  } else {
    gr_staff1.setCellReadOnly(rowIndex, "staffNo", true);
    gr_staff1.setCellReadOnly(rowIndex, "staffNm", true);
  }
};

//-------------------------------------------------------------------------
// 계약직 그리드 editable 제어
//-------------------------------------------------------------------------
scwin.gr_staff2_onClick = function (rowIndex, columnIndex, columnId) {
  gr_staff2.setCellReadOnly(rowIndex, "occpgrdNm", true);
  gr_staff2.setCellReadOnly(rowIndex, "occptypeNm", true);
  if (ds_staff2.getRowStatus(rowIndex) == "C") {
    gr_staff2.setCellReadOnly(rowIndex, "staffNo", false);
    gr_staff2.setCellReadOnly(rowIndex, "staffNm", false);
  } else {
    gr_staff2.setCellReadOnly(rowIndex, "staffNo", true);
    gr_staff2.setCellReadOnly(rowIndex, "staffNm", true);
  }
};

//-------------------------------------------------------------------------
// 저장 서브미션 완료시
//-------------------------------------------------------------------------
scwin.sbm_staffSave_submitDone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    $c.win.alert($p, MSG_CM_INF_001);
    $p.parent().scwin.btn_retrieve_Onclick();
  } catch (e) {
    console.log("sbm_staffSave_submitDone : " + e);
  }
};

//-------------------------------------------------------------------------
// 계약직 서브미션 완료시
//-------------------------------------------------------------------------
scwin.sbm_shiftsearch_submitDone = function (e) {
  let totalrow2 = ds_staff2.getTotalRow();

  // if(totalrow2 == 0) {
  //     $c.win.alert(MSG_CM_WRN_002)
  //     return;
  // }
};

//-------------------------------------------------------------------------
// 정규직 그리드 셀 편집 진입시
//-------------------------------------------------------------------------
scwin.gr_staff1_onbeforeedit = function (rowIndex, columnIndex, value) {
  scwin.oldData = value;
};

//-------------------------------------------------------------------------
// 정규직 그리드 셀 편집시
//-------------------------------------------------------------------------
scwin.gr_staff1_onafteredit = function (rowIndex, columnIndex, value) {
  let colid = gr_staff1.getColumnID(columnIndex);
  var v_staffNo = ds_staff1.getCellData(ds_staff1.getRowPosition(), "staffNo");
  if (ds_staff1.getCellData(rowIndex, colid) != scwin.oldData) {
    //인서트일때 왼쪽 데이터가 바뀌면 오른쪽 그리드에도 적용해야한다
    if (colid == "staffNo") {
      ds_staff1.setCellData(ds_staff1.getRowPosition(), "staffNm", "");
      ds_staff1.setCellData(ds_staff1.getRowPosition(), "occpgrdNm", "");
      ds_staff1.setCellData(ds_staff1.getRowPosition(), "occptypeNm", "");
      v_staffNo = scwin.oldData;
      scwin.f_openCommonPopUp(1, "", value, "onafteredit");
    } else if (colid == "staffNm") {
      ds_staff1.setCellData(ds_staff1.getRowPosition(), "staffNo", "");
      ds_staff1.setCellData(ds_staff1.getRowPosition(), "occpgrdNm", "");
      ds_staff1.setCellData(ds_staff1.getRowPosition(), "occptypeNm", "");
      v_staffNo = scwin.oldData;
      scwin.f_openCommonPopUp(1, "", value, "onafteredit");
    }
  }
};

//-------------------------------------------------------------------------
// 정규직 그리드 textImage 클릭시
//-------------------------------------------------------------------------
scwin.gr_staff1_ontextimageclick = function (rowIndex, columnIndex) {
  let colid = gr_staff1.getColumnID(columnIndex);
  let value = ds_staff1.getCellData(rowIndex, colid);
  var v_staffNo = ds_staff1.getCellData(ds_staff1.getRowPosition(), "staffNo");

  // if (ds_staff1.getCellData(rowIndex, colid) != scwin.oldData) {	//인서트일때 왼쪽 데이터가 바뀌면 오른쪽 그리드에도 적용해야한다
  if (colid == "staffNo") {
    ds_staff1.setCellData(ds_staff1.getRowPosition(), "staffNm", "");
    ds_staff1.setCellData(ds_staff1.getRowPosition(), "occpgrdNm", "");
    ds_staff1.setCellData(ds_staff1.getRowPosition(), "occptypeNm", "");
    v_staffNo = scwin.oldData;
    scwin.f_openCommonPopUp(1, "", value, "ontextimageclick");
  } else if (colid == "staffNm") {
    ds_staff1.setCellData(ds_staff1.getRowPosition(), "staffNo", "");
    ds_staff1.setCellData(ds_staff1.getRowPosition(), "occpgrdNm", "");
    ds_staff1.setCellData(ds_staff1.getRowPosition(), "occptypeNm", "");
    v_staffNo = scwin.oldData;
    scwin.f_openCommonPopUp(1, "", value, "ontextimageclick");
  }
  // }
};

//-------------------------------------------------------------------------
// 계약직 그리드 셀 편집시
//-------------------------------------------------------------------------
scwin.gr_staff2_onbeforeedit = function (rowIndex, columnIndex, value) {
  scwin.oldData = value;
};

//-------------------------------------------------------------------------
// 계약직 그리드 셀 편집시
//-------------------------------------------------------------------------
scwin.gr_staff2_onafteredit = function (rowIndex, columnIndex, value) {
  let colid = gr_staff2.getColumnID(columnIndex);
  // ds_staff2.setCellData(rowIndex,colid, ds_staff2.getCellData(rowIndex,colid));
  var v_staffNo = ds_staff2.getCellData(ds_staff2.getRowPosition(), "staffNo");
  if (ds_staff2.getCellData(rowIndex, colid) != scwin.oldData) {
    //인서트일때 왼쪽 데이터가 바뀌면 오른쪽 그리드에도 적용해야한다
    if (colid == "staffNo") {
      ds_staff2.setCellData(ds_staff2.getRowPosition(), "staffNm", "");
      v_staffNo = scwin.oldData;
      scwin.f_openCommonPopUp(2, "", value, "onafteredit");
    } else if (colid == "staffNm") {
      ds_staff2.setCellData(ds_staff2.getRowPosition(), "staffNo", "");
      v_staffNo = scwin.oldData;
      scwin.f_openCommonPopUp(2, "", value, "onafteredit");
    }
  }
};
scwin.gr_staff2_ontextimageclick = function (rowIndex, columnIndex) {
  let colid = gr_staff2.getColumnID(columnIndex);
  let value = ds_staff2.getCellData(rowIndex, colid);

  // ds_staff2.setCellData(rowIndex,colid, ds_staff2.getCellData(rowIndex,colid));
  var v_staffNo = ds_staff2.getCellData(ds_staff2.getRowPosition(), "staffNo");

  // if (ds_staff2.getCellData(rowIndex, colid) != scwin.oldData) {	//인서트일때 왼쪽 데이터가 바뀌면 오른쪽 그리드에도 적용해야한다
  if (colid == "staffNo") {
    ds_staff2.setCellData(ds_staff2.getRowPosition(), "staffNm", "");
    v_staffNo = scwin.oldData;
    scwin.f_openCommonPopUp(2, "", value, "ontextimageclick");
  } else if (colid == "staffNm") {
    ds_staff2.setCellData(ds_staff2.getRowPosition(), "staffNo", "");
    v_staffNo = scwin.oldData;
    scwin.f_openCommonPopUp(2, "", value, "ontextimageclick");
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pWinCloseTF, value) {
  var sWinCloseTF = pWinCloseTF == null ? "T" : pWinCloseTF;
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 
  var pCode = "";
  var pName = "";
  var pWtitleSearch = "";
  var arrParam = new Array();
  let options = {};
  let evNm = arguments[3] || "";
  if (evNm && $c.win.getEventList($p, gr_staff1, evNm)) {
    scwin.eventCnt++;
  }
  $p.setTimeout(function () {
    scwin.eventCnt = 0;
  }, {
    delay: 1500
  });
  switch (disGubun) {
    case 1:
      //정규직(grid)
      if (value == "") {
        pCode = "";
        pName = "";
      } else {
        pCode = ds_staff1.getCellData(ds_staff1.getRowPosition(), "staffNo").replace(/\s*$/, '');
        pName = ds_staff1.getCellData(ds_staff1.getRowPosition(), "staffNm");
      }
      ds_staff2.setCellData(ds_staff2.getRowPosition(), "staffNo", ""); //사원코드
      ds_staff2.setCellData(ds_staff2.getRowPosition(), "staffNm", ""); //사원명
      ds_staff2.setCellData(ds_staff2.getRowPosition(), "occpgrdNm", ""); //직급
      ds_staff2.setCellData(ds_staff2.getRowPosition(), "occptypeNm", ""); //상세직종

      arrParam[0] = pCode; //사번
      arrParam[1] = pName; //사원명
      arrParam[2] = scwin.parentFrame.acb_lobranCd.getValue(); //점소코드
      arrParam[3] = scwin.parentFrame.acb_lobranCd.getText(true); //점소명
      arrParam[4] = ""; // scwin.parentFrame.scwin.hid_txt_wrkCd; //작업장코드
      arrParam[5] = '01,D'; //직종  (정규직)
      arrParam[6] = '02,D'; //상세직종코드 (하역직)
      arrParam[7] = ''; //직급
      arrParam[8] = scwin.parentFrame.scwin.hid_txt_inqDt.value == '99999999' ? scwin.strCurDate : scwin.parentFrame.scwin.hid_txt_inqDt; //작업일
      arrParam[9] = 'Y'; //배치가능여부
      arrParam[10] = sWinCloseTF; //WINDOW CLOSE 여부
      arrParam[11] = "1"; //상세직종Flag

      // 팝업 옵션 설정
      options = {
        id: "taxPop",
        popupName: "인력검색",
        width: 1080,
        height: 650
      };
      rtnList = await $c.win.openPopup($p, "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml", options, arrParam);
      // rtnList = $c.win.openPopup("/ui/ds/op/wrkplan/stvwrkplan/op_103_01_10p.xml", options, arrParam);

      //(0)직종코드		
      //(1)직종명	        
      //(2)인원번호		
      //(3)인원명	                          
      //(4)직급		    
      //(5)직급명		    
      //(6)물류점소코드   
      //(7)물류점소명		
      //(8)상세직종코드	
      //(9)상세직종명		                  
      //(10)배치가능여부	
      //(11)본사계약직여부 
      //(12)연근여부		

      if (rtnList != null) {
        ds_staff1.setCellData(ds_staff1.getRowPosition(), "staffNo", rtnList[2]); //사원코드
        ds_staff1.setCellData(ds_staff1.getRowPosition(), "staffNm", rtnList[3]); //사원명
        ds_staff1.setCellData(ds_staff1.getRowPosition(), "occpgrdNm", rtnList[5]); //직급
        ds_staff1.setCellData(ds_staff1.getRowPosition(), "occptypeNm", rtnList[9]); //상세직종
        return;
        break;
      } else {
        ds_staff1.setCellData(ds_staff1.getRowPosition(), "staffNo", ""); //사원코드
        ds_staff1.setCellData(ds_staff1.getRowPosition(), "staffNm", ""); //사원명
        ds_staff1.setCellData(ds_staff1.getRowPosition(), "occpgrdNm", ""); //직급
        ds_staff1.setCellData(ds_staff1.getRowPosition(), "occptypeNm", ""); //상세직종
        break;
      }
      break;
    case 2:
      //계약직(grid)
      if (value == "") {
        pCode = "";
        pName = "";
      } else if (value == "" && evNm == "onafteredit") {
        return;
      } else {
        pCode = ds_staff2.getCellData(ds_staff1.getRowPosition(), "staffNo").replace(/\s*$/, '');
        pName = ds_staff2.getCellData(ds_staff1.getRowPosition(), "staffNm");
      }
      arrParam[0] = pCode; //사번
      arrParam[1] = pName; //사원명
      arrParam[2] = scwin.parentFrame.acb_lobranCd.getValue(); //점소코드
      arrParam[3] = scwin.parentFrame.acb_lobranCd.getText(true); //점소명
      arrParam[4] = scwin.parentFrame.scwin.hid_txt_wrkCd; //작업장코드
      arrParam[5] = '02,D'; //직종  (계약직)
      arrParam[6] = '02,D'; //상세직종코드 (하역직)
      arrParam[7] = ''; //직급
      arrParam[8] = scwin.parentFrame.scwin.hid_txt_inqDt == '99999999' ? scwin.strCurDate : scwin.parentFrame.scwin.hid_txt_inqDt; //작업일
      arrParam[9] = 'Y'; //배치가능여부
      arrParam[10] = sWinCloseTF; //WINDOW CLOSE 여부
      arrParam[11] = "1"; //상세직종Flag

      // 팝업 옵션 설정
      options = {
        id: "taxPop",
        popupName: "인력검색",
        width: 1080,
        height: 650
      };
      rtnList = await $c.win.openPopup($p, "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml", options, arrParam);

      //(0)직종코드		
      //(1)직종명	        
      //(2)인원번호		
      //(3)인원명	                          
      //(4)직급		    
      //(5)직급명		    
      //(6)물류점소코드   
      //(7)물류점소명		
      //(8)상세직종코드	
      //(9)상세직종명		                  
      //(10)배치가능여부	
      //(11)본사계약직여부 
      //(12)연근여부		

      if (rtnList != null) {
        ds_staff2.setCellData(ds_staff2.getRowPosition(), "staffNo", rtnList[2]); //사원코드
        ds_staff2.setCellData(ds_staff2.getRowPosition(), "staffNm", rtnList[3]); //사원명
        ds_staff2.setCellData(ds_staff2.getRowPosition(), "occpgrdNm", rtnList[5]); //직급
        ds_staff2.setCellData(ds_staff2.getRowPosition(), "occptypeNm", rtnList[9]); //상세직종
      } else {
        ds_staff2.setCellData(ds_staff2.getRowPosition(), "staffNo", ""); //사원코드
        ds_staff2.setCellData(ds_staff2.getRowPosition(), "staffNm", ""); //사원명
        ds_staff2.setCellData(ds_staff2.getRowPosition(), "occpgrdNm", ""); //직급
        ds_staff2.setCellData(ds_staff2.getRowPosition(), "occptypeNm", ""); //상세직종
        break;
      }
      break;
    default:
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Shift',class:''}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'acb_planList',class:' w250',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_planList'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_shift',title:'엑셀 UP',type:'button',class:'btn','ev:onclick':'scwin.btn_shift_onClick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'주간 Shift 계획사용'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'계약직',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_staff2',gridDownFn:'scwin.runExcel_Staff2',grdDownOpts:'{"fileName":"계약직.xlsx", "sheetName": "계약직"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',dataList:'data:ds_staff2',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_staff2',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',visibleRowNum:'8',visibleRowNumFix:'true',resize:'true','ev:oncellclick':'scwin.gr_staff2_onClick','ev:onbeforeedit':'scwin.gr_staff2_onbeforeedit','ev:onafteredit':'scwin.gr_staff2_onafteredit',validExp:'staffNo:사번:yes:length=6:key&staffNm:성명:yes&wrkStpCd:작업단계:yes',rowStatusVisible:'true','ev:ontextimageclick':'scwin.gr_staff2_ontextimageclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',blockSelect:'false',displayMode:'label',value:'인원번호',class:'txt-red'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'column11',blockSelect:'false',displayMode:'label',value:'성명',class:'txt-red'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'column10',blockSelect:'false',displayMode:'label',value:'직급'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column9',blockSelect:'false',displayMode:'label',value:'상세직종'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'작업단계',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column19',value:'CHIEF포맨여부',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column17',value:'지시번호',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'textImage',id:'staffNo',blockSelect:'false',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'staffNm',blockSelect:'false',displayMode:'label',textAlign:'left',mandatory:''}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'occpgrdNm',blockSelect:'false',displayMode:'label',textAlign:'left',sortable:'false'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'occptypeNm',blockSelect:'false',displayMode:'label',textAlign:'left',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'wrkStpCd',value:'',displayMode:'label',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'cfmanYn',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'wrkIndictNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRow2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelObj:'btn_staff2_cancle',btnRowAddObj:'btn_staff2_add',btnRowDelObj:'btn_staff2_del',btnRowAddYn:'Y',btnRowDelYn:'Y',id:'udc_staff2_btn',rowAddFunction:'scwin.btn_staff2_add_onClick',rowDelFunction:'scwin.btn_staff2_del_onClick',btnCancelYn:'Y',btnDelYn:'N',cancelFunction:'scwin.btn_staff2_cancle_onClick',gridID:'gr_staff2',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'정규직',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_staff1',grdDownOpts:'{"fileName":"정규직.xlsx", "sheetName": "정규직"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',dataList:'data:ds_staff1',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_staff1',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',visibleRowNum:'5',visibleRowNumFix:'true',columnMove:'true',resize:'true','ev:oncellclick':'scwin.gr_staff_onCellClick','ev:onafteredit':'scwin.gr_staff1_onafteredit','ev:onbeforeedit':'scwin.gr_staff1_onbeforeedit',rowStatusVisible:'true',validExp:'staffNo:사번:yes:length=6:key&staffNm:성명:yes&wrkStpCd:작업단계:yes','ev:ontextimageclick':'scwin.gr_staff1_ontextimageclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'85',inputType:'text',id:'column12',blockSelect:'false',displayMode:'label',value:'사번',class:'txt-red'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'column11',blockSelect:'false',displayMode:'label',value:'성명',class:'txt-red'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'column10',blockSelect:'false',displayMode:'label',value:'직급'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column9',blockSelect:'false',displayMode:'label',value:'상세직종'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'작업단계',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column19',value:'CHIEF포맨여부',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column17',value:'지시번호',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'85',inputType:'textImage',id:'staffNo',blockSelect:'false',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'staffNm',blockSelect:'false',displayMode:'label',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'occpgrdNm',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'occptypeNm',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'wrkStpCd',value:'',displayMode:'label',textAlign:'left',mandatory:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'cfmanYn',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'wrkIndictNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spa_totalRow1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_staff1_btn',btnCancelObj:'btn_staff1_cancle',btnRowAddObj:'btn_staff1_add',btnRowDelObj:'btn_staff1_del',btnRowAddYn:'Y',btnRowDelYn:'Y',rowAddFunction:'scwin.btn_staff1_add_onClick',btnCancelYn:'Y',btnDelYn:'N',rowDelFunction:'scwin.btn_staff1_del_onClick',cancelFunction:'scwin.btn_staff1_cancle_onClick',gridID:'gr_staff1'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'일용노무원',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox multi'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'항운노조투입반수',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'중기일용 ',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group justify-center'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_lunionInputCnt',placeholder:'',class:' w100 tar',objType:'data',maxlength:'3',dataType:'number',initValue:'0',ref:'',allowChar:'0-9'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'반',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group justify-center'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_hveqDuseCnt',placeholder:'',class:' w100 tar',dataType:'number',objType:'data',maxlength:'3',ref:'',initValue:'0',allowChar:'0-9'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'명',class:''}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_save_onClick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]})