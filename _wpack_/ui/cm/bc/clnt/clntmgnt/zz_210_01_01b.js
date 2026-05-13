/*amd /ui/cm/bc/clnt/clntmgnt/zz_210_01_01b.xml 61685 104b47c3bf167a5e151fa04ef0d76ef654b3206be86af21f0bc7402d7caa7ff3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_tmpGroup',repeatNode:'map',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_tmpGroup_onrowpositionchange','ev:ondataload':'scwin.ds_tmpGroup_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'viewClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntKndCd',name:'거래처소속',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grpClntLvl',name:'관리레벨',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_lowerClnt',repeatNode:'map',saveRemovedData:'true','ev:ondataload':'scwin.ds_lowerClnt_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'viewClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntKndCd',name:'소속',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'대표자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntTelNo',name:'대표전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr',name:'주소',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_group',repeatNode:'map',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_group_onrowpositionchange','ev:oninsertrow':'scwin.ds_group_oninsertrow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'grpClntLvl',name:'레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntKndCd',name:'거래처소속(콤보)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntTelNo',name:'연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr1',name:'주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr2',name:'상세주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'지정자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'지정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'level',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntBusiClsCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chkCommYn',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chkDmndYn',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperClntNo',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'viewClntNm',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'forecolor',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizcondNm',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'biztypeNm',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'name36',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_group'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lupContents',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lupCond',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_saveGroup',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_group","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_group',action:'/cm.bc.clnt.clntmgnt.RetrieveGroupCustomerListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_group',target:'data:json,{"id":"ds_group","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_group_submit','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 조회데이터 신규그룹거래처 지정기간: 20260213
// 트리뷰 우클릭 버튼 생성 참고화면 zz_690_01_06b_2.xml

scwin.memJson = $c.data.getMemInfo($p);
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사  

// hidden 컴포넌트
scwin.txt_retrieveYn = "0";
scwin.txt_saveType = "";
scwin.txt_countRow = 0;
scwin.txt_rdTo = "";
scwin.txt_fromRowPosi = "";
scwin.txt_toRowPosi = "";
scwin.txt_addItemYn = "";
scwin.txt_addRowNo = "";
scwin.txt_lastTreeRowPosi = "";
scwin.onpageload = function () {};

// UDC에 값 세팅 방법
// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  console.log("----------- onUdcCompleted");
  // ds_group.rowPosition = 2; // 확인 필요

  let codeOptions = [{
    grpCd: "ZZ544",
    compID: "grpClntLvl, gr_tmpGroup:grpClntLvl"
  }, {
    grpCd: "ZZ009",
    compID: "clntKndCd,gr_tmpGroup:clntKndCd,gr_lowerClnt:clntKndCd"
  } //거래처소속
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.f_load);
};
scwin.f_load = async function () {
  await scwin.f_Retrieve();
  // ds_group.rowPosition = 2; // 확인 필요
  $c.gus.cfDisableBtnOnly($p, [b_Adapt]);
};

//-------------------------------------------------------------------------
// 프로그램목록 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  var vLupContents = ed_lupContents.getValue();
  if (vLupContents.trim() != "" && vLupContents.length < 8) {
    $c.win.alert($p, "지정기간을 정확히 입력해주십시오.");
    ed_lupContents.focus();
    return false;
  }

  // var condition = "?lupContents=" + vLupContents;
  // condition = condition + "&lupCond=" + scwin.vCoCd;
  // ds_group.DataID = "/cm.bc.clnt.clntmgnt.RetrieveGroupCustomerListCMD.do" + condition;
  // ds_group.Reset();
  dma_group.set("lupContents", vLupContents); // 신규그룹거래처 지정기간
  dma_group.set("lupCond", scwin.vCoCd); // 소속 자회사 

  await scwin.submitExcute(sbm_group);
  // ids_tvImage.DataID = "/common/jsp/menuTreeImg.jsp";
  // ids_tvImage.Reset();
};
scwin.sbm_group_submit = function (e) {
  // ds_group
  let rowData = ds_group.getAllJSON();
  // grpClntLvl
  // clntKndCd
};

// to-do
// for=ds_group event=OnLoadCompleted(rowCnt)
scwin.sbm_group_submitdone = function (e) {
  var vLastTreePosi = scwin.txt_lastTreeRowPosi;
  // let rowCnt = scwin.txt_countRow;
  let rowCnt = ds_group.getTotalRow();
  for (var i = 0; i < rowCnt; i++) {
    ds_group.setCellData(i, "imgC", "imgClose");
    ds_group.setCellData(i, "imgD", "imgPage");
    ds_group.setCellData(i, "imgO", "imgOpen");
  }
  if (rowCnt > 0) {
    $c.gus.cfDisableBtn($p, [b_Cancel, b_Save]);

    //조회결과가 0이상인경우
    scwin.f_ContentsDisable();
    $c.gus.cfDisableBtn($p, [b_Cancel, b_Save]);
    scwin.txt_retrieveYn = "1";
  }
  scwin.txt_retrieveYn = "1";
  if (vLastTreePosi == "") {
    tv_group.findNodeByIndex(2, true);
  } else {
    tv_group.findNodeByIndex(scwin.txt_lastTreeRowPosi, true);
  }
  ds_group.modifyAllStatus("R");
  // tv_group.findNodeByIndex(2, true);
  tv_group.focus();

  // 로딩 조회후 데이터 바인딩
  let lvlData = ds_group.getCellData(ds_group.getRowPosition(), "grpClntLvl");
  let kndData = ds_group.getCellData(ds_group.getRowPosition(), "clntKndCd");
  console.log("lvlData=[" + lvlData + "]");
  console.log("kndData=[" + kndData + "]");
  grpClntLvl.setValue(lvlData);
  clntKndCd.setValue(kndData);

  // 조회후 label에 색상 추가 
  for (var i = 0; i < ds_group.getTotalRow(); i++) {
    if (ds_group.getAllJSON()[i].forecolor == "black") {
      tv_group.setLabelStyle(i + 1, "color", "black");
    } else if (ds_group.getAllJSON()[i].forecolor == "red") {
      tv_group.setLabelStyle(i + 1, "color", "red");
    }
  }
};

//-------------------------------------------------------------------------
// 항목 Enable
//-------------------------------------------------------------------------
scwin.f_ContentsEnable = function () {
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableObj($p, clntNo, false); // 거래처번호
  $c.gus.cfEnableObj($p, regId, false); // 
  $c.gus.cfEnableObj($p, regDtm, false); // 
  $c.gus.cfEnableObj($p, clntNm, true); // 거래처명
  $c.gus.cfEnableObj($p, grpClntLvl, true); // 그룹거래처레벨
  $c.gus.cfEnableObj($p, clntKndCd, true); //거래처종류
  $c.gus.cfEnableObj($p, txt_fromNm, false); //
  $c.gus.cfEnableObj($p, txt_toNm, false); //
};

//-------------------------------------------------------------------------
// 항목 Disable
//-------------------------------------------------------------------------
scwin.f_ContentsDisable = function () {
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfEnableObj($p, clntNo, false); // 거래처번호
  $c.gus.cfEnableObj($p, regId, false); // 
  $c.gus.cfEnableObj($p, regDtm, false); // 
  $c.gus.cfEnableObj($p, clntNm, false); // 거래처명
  $c.gus.cfEnableObj($p, grpClntLvl, false); // 그룹거래처레벨
  $c.gus.cfEnableObj($p, clntKndCd, false); //거래처종류
  $c.gus.cfEnableObj($p, txt_fromNm, false); //
  $c.gus.cfEnableObj($p, txt_toNm, false); //
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  scwin.f_ContentsEnable();
  clntKndCd.setSelectedIndex(0);
  scwin.txt_saveType = "1"; // 저장타입이 신규인경우  (1:신규, 2: 수정, 3: 삭제)
};

//-------------------------------------------------------------------------
// 거래처정보 수정
//-------------------------------------------------------------------------
scwin.f_Update = async function () {
  let rowPos = ds_group.getRowPosition();
  var vGroupCnltNo = ds_group.getCellData(rowPos, "clntNo");
  var vGrpClntLvl = ds_group.getCellData(rowPos, "grpClntLvl");
  if (vGroupCnltNo == "000000") {
    await $c.win.alert($p, "그룹거래처루트는 수정할 수 없습니다.");
    return false;
  }
  if (vGrpClntLvl == "4") {
    await $c.win.alert($p, "거래처정보는 해당 거래처화면에서 수정가능합니다.");
    return false;
  } else {
    scwin.f_ContentsEnable();
  }
  scwin.txt_saveType = "2"; // 수정인경우(1:신규, 2: 수정, 3: 삭제)
  $c.gus.cfDisableBtn($p, [b_Update]);
  b_Cancel.setDisabled(false);
};

//-------------------------------------------------------------------------
// 거래처정보 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  var pCurrentGroupClntNo = ds_group.getCellData(ds_group.rowPosition, "clntNo");
  var vCurrentRowStatus = ds_group.getRowStatusValue(ds_group.rowPosition);
  var vChkLowerGrpClntExistYn = await scwin.f_chkDeleteGroupClnt(pCurrentGroupClntNo);
  if (vCurrentRowStatus != "1" && vChkLowerGrpClntExistYn == "T") {
    $c.win.alert($p, "삭제하려는 그룹거래처의 하위거래처가 존재합니다.");
    return false;
  }
  ds_group.deleteRow(ds_group.rowPosition);
  scwin.f_Save('DELETE');
};

// to-do
//-------------------------------------------------------------------------
// 그룹거래처 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  var vAddedItemYn = scwin.txt_addItemYn;
  var vCurrentSysLevel = ds_group.getCellData(ds_group.rowPosition, "level");
  var vCurrentGrpClntLvl = ds_group.getCellData(ds_group.rowPosition, "grpClntLvl");
  var vAddGrpClntLvl = "";

  // 현재 그룹거래처 레벨이 그룹(1L)인 경우

  switch (vCurrentGrpClntLvl) {
    case "1":
      vAddGrpClntLvl = "2";
      break;
    case "2":
      vAddGrpClntLvl = "3";
      break;
    case "0":
      vAddGrpClntLvl = "1";
      break;
    default:
      grpClntLvl.setValue(0);
      break;
  }
  if (vAddedItemYn == "1") {
    $c.win.alert($p, "저장되지않은 그룹거래처 정보가 있습니다. 저장 후 그룹거래처를 추가해 주십시오.");
    return false;
  }

  // 시스템 레벨이 4이상인 경우
  if (vCurrentSysLevel > 3) {
    $c.win.alert($p, "그룹거래처는 시스템레벨을 4레벨 이상 추가할 수 없습니다.");
    return false;
  }

  // 그룹거래처레벨이 3이상인 경우
  if (vCurrentGrpClntLvl > 3) {
    $c.win.alert($p, "그룹거래처 관리레벨이 거래처(4L)인 경우에는 그룹거래처를 추가할 수 없습니다.");
    return false;
  }
  scwin.txt_addItemYn = "1";
  var upperClntNo = "";
  var tmpLevel = "1";
  var tmpClntNm = "신규그룹거래처명";
  var addRow = -1;
  upperClntNo = ds_group.getCellData(ds_group.rowPosition, "clntNo");
  // tmpLevel = tv_group.ItemLevel + 1;
  tmpLevel = Number(tv_group.getSelectedElement().level) + 1;
  let rowPos = 0;
  if (ds_group.rowPosition == ds_group.getTotalRow() - 1 || ds_group.rowPosition == 0) {
    // 처음이나 마지막 로우인 경우
    addRow = ds_group.insertRow();
    rowPos = ds_group.getTotalRow() - 1;
    ds_group.setCellData(rowPos, "level", tmpLevel);
    ds_group.setCellData(rowPos, "clntNm", tmpClntNm);
    ds_group.setCellData(rowPos, "viewClntNm", tmpClntNm);
    ds_group.setCellData(rowPos, "grpClntLvl", vAddGrpClntLvl);
    tv_group.Index = ds_group.getTotalRow();
  } else {
    // 중간로우인 경우
    addRow = ds_group.insertRow(ds_group.rowPosition + 1);
    tv_group.Index = ds_group.rowPosition;
    rowPos = ds_group.getRowPosition() + 1;
    ds_group.setCellData(rowPos, "level", tmpLevel);
    ds_group.setCellData(rowPos, "clntNm", tmpClntNm);
    ds_group.setCellData(rowPos, "viewClntNm", tmpClntNm);
    ds_group.setCellData(rowPos, "grpClntLvl", vAddGrpClntLvl);
  }
  scwin.txt_addRowNo = addRow;

  //	신규등록정보 확인
  scwin.f_Create();
  grpClntLvl.mandatory = "true";
  grpClntLvl.validExp = "사업자번호:yes";
  clntKndCd.mandatory = "true";
  clntKndCd.validExp = "거래처종류:yes";

  // $c.gus.cfRefreshMandSign();
  $c.gus.cfDisableBtn($p, [b_Update, b_Delete]);
  b_Cancel.setDisabled(false);
  b_Save.setDisabled(false);
  tv_group.findNodeByIndex(rowPos + 1, true);

  //tobe추가 : asis는 행추가시 FROM 부분 빈값임. but 현재 tobe는 포커스 셋팅하면서 값이 셋팅되어 초기화시켜줌. 
  txt_fromNm.setValue("");
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_delRow = function () {
  // ds_group.Undo(ds_group.rowPosition);
  $c.data.undoRow($p, ds_group, "Y");
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  // ds_group.Undo();
  $c.data.undoRow($p, ds_group, "Y");
  $c.gus.cfDisableBtn($p, [b_Cancel, b_Save]);
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_Undo = function () {
  var vAddItemYn = scwin.txt_addItemYn;
  var vAddRowNo = scwin.txt_addRowNo;
  if (vAddRowNo == ds_group.rowPosition) {
    // ds_group.Undo(ds_group.rowPosition);
    $c.data.undoRow($p, ds_group, "Y");
    // tv_treeView.findNodeByIndex(vAddRowNo + 1, true);
    tv_group.findNodeByIndex(vAddRowNo + 1, true);
  }
  scwin.f_ContentsDisable();
  grpClntLvl.mandatory = "false";
  grpClntLvl.validExp = "";
  clntKndCd.mandatory = "false";
  clntKndCd.validExp = "";

  // $c.gus.cfRefreshMandSign();
  scwin.txt_addItemYn = "";
  $c.gus.cfDisableBtn($p, [b_Cancel, b_Save]);
  b_Update.setDisabled(false);
};

//-------------------------------------------------------------------------
// 하위거래처 행추가
//-------------------------------------------------------------------------
scwin.f_LowerClntAddRow = function (pClntNo, pClntNm, pUpperClntNo) {
  // var tmpLevel = tv_group.ItemLevel + 1;
  var tmpLevel = Number(tv_group.getSelectedElement().level) + 1;
  var vInsertRowPosition = ds_group.rowPosition + 1;

  // grpClntLvl.CBData = '<%= GauceUtil.getCodeList("ZZ544") %>';
  // grpClntLvl.ResetData();

  // let codeOptions = [
  //     { grpCd: "ZZ544", compID: "grpClntLvl" }
  // ];

  // $c.data.setCommonCode(codeOptions);

  if (ds_group.rowPosition == ds_group.getTotalRow() - 1 || ds_group.getTotalRow() - 1 == 0) {
    // 처음이나 마지막 로우인 경우
    var addRow = ds_group.insertRow();
    tv_group.findNodeByIndex(addRow + 1, true);
    let rowPos = ds_group.getTotalRow() - 1;
    ds_group.setCellData(addRow, "level", tmpLevel);
    ds_group.setCellData(addRow, "clntNo", pClntNo);
    ds_group.setCellData(addRow, "viewClntNm", pClntNm);
    ds_group.setCellData(addRow, "clntNm", pClntNm);
    ds_group.setCellData(addRow, "upperClntNo", pUpperClntNo);
    ds_group.setCellData(addRow, "grpClntLvl", "4");
    grpClntLvl.setValue(3);
  } else {
    // 중간로우인 경우
    var addRow = ds_group.insertRow(vInsertRowPosition);
    let rowPos = ds_group.getRowPosition();
    ds_group.setCellData(addRow, "level", tmpLevel);
    ds_group.setCellData(addRow, "clntNo", pClntNo);
    ds_group.setCellData(addRow, "viewClntNm", pClntNm);
    ds_group.setCellData(addRow, "clntNm", pClntNm);
    ds_group.setCellData(addRow, "upperClntNo", pUpperClntNo);
    ds_group.setCellData(addRow, "grpClntLvl", "4");
    tv_group.findNodeByIndex(addRow + 1, true);
  }
  $c.gus.cfEnableObj($p, grpClntLvl, false);
  $c.gus.cfDisableBtn($p, [b_Update, b_Delete]);
};

//-------------------------------------------------------------------------
// 추가하는 하위거래처 중복등록 체크
//-------------------------------------------------------------------------
scwin.f_CheckRegistLowerClnt = function (pCompareClntNo) {
  var vGrpClntCountRow = ds_group.getTotalRow();
  var vDuplCount = 0;
  var vTmpCompareClntNo = "";
  for (i = 0; i < vGrpClntCountRow; i++) {
    vTmpCompareClntNo = ds_group.getCellData(i, "clntNo");
    if (vTmpCompareClntNo == pCompareClntNo) vDuplCount++;
  }
  return vDuplCount;
};

//-------------------------------------------------------------------------
// Tree Node 이동 체크
//-------------------------------------------------------------------------
scwin.f_chkMoveUpperGroupClnt = async function (pCurrentGroupClntNo, pUpperGroupClntNo) {
  // to-do cfNodeMoveChkOfTreeMenuRequest 전환방법 문의 완료 사용방법 확인해야됨
  var vResultDataSet = await $c.data.cfNodeMoveChkOfTreeMenuRequest($p, pCurrentGroupClntNo, pUpperGroupClntNo, "getGrpClntMoveCheck");
  // var vResult = vResultDataSet.get("col1");
  let vResult = JSON.parse(vResultDataSet).GAUCE[0]["col1"];
  return vResult;
};

//-------------------------------------------------------------------------
// Tree Node 이동 체크
//-------------------------------------------------------------------------
scwin.f_chkDeleteGroupClnt = async function (pCurrentGroupClntNo) {
  // to-do cfNodeMoveChkOfTreeMenuRequest 전환방법 문의 완료 사용방법 확인해야됨
  var vResultDataSet = await $c.data.cfNodeMoveChkOfTreeMenuRequest($p, pCurrentGroupClntNo, null, "getGrpClntDeleteCheck");
  // var vResult = vResultDataSet.get("col1");
  let vResult = JSON.parse(vResultDataSet).GAUCE[0]["col1"];
  return vResult;
};

//-------------------------------------------------------------------------
// 그룹거래처 이동
//-------------------------------------------------------------------------
scwin.f_Apply = async function () {
  // 이동할 거래처 선택체크
  var vMoveToGroupClnt = txt_toNm.getValue().trimAll();
  var vMoveFromGroupClnt = txt_fromNm.getValue().trimAll();
  if (vMoveFromGroupClnt == "" || vMoveFromGroupClnt.length < 1) {
    $c.win.alert($p, "이동할 그룹거래처를 선택해주십시오.");
    return false;
  }
  if (vMoveToGroupClnt == "" || vMoveToGroupClnt.length < 1) {
    $c.win.alert($p, "이동할 그룹거래처의 상위그룹거래처를 선택해주십시오.");
    // chk_to.checked = true;
    chk_to.setValue("Y");
    return false;
  }

  // From, To 거래처 번호 체크
  let vFrom = scwin.txt_fromRowPosi;
  let vTo = scwin.txt_toRowPosi;

  // To의 레벨이 From의 레벨보다 낮은 경우
  let vToLevel = ds_group.getCellData(vTo, "level");
  let vFromLevel = ds_group.getCellData(vFrom, "level");
  let vFromClntNo = ds_group.getCellData(vFrom, "clntNo");
  let vToClntNo = ds_group.getCellData(vTo, "clntNo");
  let vFromUpperClntNo = ds_group.getCellData(vFrom, "upperClntNo");

  // 품명체크여부,  수요가체크여부 확인
  var vChkCommYn = ds_group.getCellData(vFrom, "chkCommYn"); // 품명체크여부
  var vChkDmndYn = ds_group.getCellData(vFrom, "chkDmndYn"); // 수요가체크여부 

  if (vChkCommYn == "Y") {
    $c.win.alert($p, "품명연결이 있는 경우 그룹거래처를 이동하실 수 없습니다.");
    return false;
  }
  if (vChkDmndYn == "Y") {
    $c.win.alert($p, "수요가연결이 있는 경우 그룹거래처를 이동하실 수 없습니다.");
    return false;
  }

  // 이동하려는 거래처의 하위거래처로 이동하려는 경우 체크
  var vMoveCheck = scwin.f_chkMoveUpperGroupClnt(vFromClntNo, vToClntNo);
  if (vMoveCheck == "F") {
    $c.win.alert($p, "하위에 있는 거래처로 이동할 수 없습니다.");
    return false;
  }
  let vToClntChk = txt_fromNm.getValue().trimAll();
  if (vToClntChk == "" || vToClntChk.length < 1) {
    $c.win.alert($p, "이동할 그룹거래처 정보를 선택해 주십시오. ");
    // chk_to.checked = true;
    chk_to.setValue("T");
    return false;
  }
  if (vFrom == vTo) {
    $c.win.alert($p, "동일한 거래처번호로 이동할 수 없습니다. 이동할 그룹거래처를 재선택 해주십시오.");
    return false;
  }

  // 그룹거래처가 아니면서 하위레벨로 이동하려는 경우
  if (vFromUpperClntNo != "000000" && vToLevel > vFromLevel) {
    $c.win.alert($p, "현재 거래처의 상위거래처를 하위거래처로 이동할수 없습니다.");
    return false;
  }
  ds_group.setCellData(vFrom, "upperClntNo", ds_group.getCellData(vTo, "clntNo"));
  if (ds_group.getModifiedIndex().length == false) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  arrMove = new Array(1);
  arrMove[0] = "거래처이동";

  // 저장확인 
  // let confirmVal = await $c.win.confirm(MSG_CM_CRM_010,arrMove[0]);
  let confirmVal = await $c.win.confirm($p, "거래처이동을(를) 적용하시겠습니까?");
  if (confirmVal) {
    scwin.txt_lastTreeRowPosi = ds_group.rowPosition;
    sbm_saveGroup.action = "/cm.bc.clnt.clntmgnt.UpdateGroupCustomerMoveInformationCMD.do";

    // tr_saveGroup.Post();
    await scwin.submitExcute(sbm_saveGroup);
  }

  // tv_group.Index = txt_lastTreeRowPosi.value; // to-do 아래처럼 전환하는건지 확인해야됨.
  tv_group.findNodeByIndex(scwin.txt_lastTreeRowPosi, true);

  // chk_to.checked = false;
  chk_to.setValue("N");
  // txt_rdTo.setValue("0");
  scwin.txt_rdTo = "0";
  $c.gus.cfDisableBtn($p, [b_Adapt]);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (type) {
  var vDelYn = 0;
  //변경한 데이터가 있는지 체크한다. 	
  if (!ds_group.getModifiedIndex().length) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  var vCurrentRow = ds_group.rowPosition;
  // var vRowStatus = ds_group.getRowStatusValue(vCurrentRow);

  // 저장확인 
  var vConfirmText = "저장하시겠습니까?";
  if (type != "" && type == "DELETE") {
    vConfirmText = "삭제하시겠습니까?";
    scwin.txt_lastTreeRowPosi = tv_group.findNodeByIndex(tv_group.rowPosition + 1, true) - 1;
    vDelYn = 1;
  } else {
    scwin.txt_lastTreeRowPosi = tv_group.findNodeByIndex(tv_group.rowPosition + 1, true);
  }
  let confirmText = await $c.win.confirm($p, vConfirmText);
  if (confirmText) {
    ds_group.setCellData(ds_group.rowPosition, "clntBusiClsCd", "0");
    if (vDelYn == 0) {
      // 추가인경우
      let selectedVal = Number(tv_group.getSelectedElement().level) + 1;
      if (selectedVal == 2) {
        ds_group.setCellData(ds_group.rowPosition, "upperClntNo", "000000");
      } else if (selectedVal > 2) {
        let pos = ds_group.getCellData(ds_group.rowPosition - 1, "clntNo");
        ds_group.setCellData(ds_group.rowPosition, "upperClntNo", pos);
      }
    } else {
      // 삭제인경우
      ds_group.setCellData(ds_group.rowPosition, "upperClntNo", "");
    }
    scwin.txt_lastTreeRowPosi = ds_group.rowPosition;
    sbm_saveGroup.action = "/cm.bc.clnt.clntmgnt.SaveGroupCustomerInformationCMD.do";
    scwin.submitExcute(sbm_saveGroup);
  } else {
    ds_group.undoAll();
    ds_group.rowPosition = vCurrentRow;
    return false;
  }
};

//-------------------------------------------------------------------------
// 바이트 크기 체크
//-------------------------------------------------------------------------
scwin.bytelength = function (bstr) {
  let len = bstr.length;
  for (ii = 0; ii < bstr.length; ii++) {
    xx = bstr.substr(ii, 1).charCodeAt(0);
    if (xx > 127) {
      len++;
    }
  }
  return len;
};

//그리드 높이 늘리기
scwin.f_grdHeiht = async function (size) {
  let objGrd = "tv_group";
  objGrd = $p.getComponentById(objGrd);
  var strHeight = objGrd.style.height;
  var intHeight = parseInt(strHeight.replace("px", ""));
  intHeight = intHeight + size;
  if (intHeight > 0) {
    objGrd.style.height = intHeight + "px";
  }
};
scwin.f_downExcelSheet = async function () {
  var vObjGrd;
  var sheetTitle;
  var cntRow = scwin.txt_countRow;
  if (cntRow != "0") {
    cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      vObjGrd = "gr_program";
      sheetTitle = "그룹거래처목록";
      var objGrd = $p.getComponentById(vObjGrd);
      // cfGridToExcel(objGrd, sheetTitle, sheetTitle, 2 + 4 + 8 + 16);

      let grdObj = objGrd;
      let infoArr = [];
      let options = {
        fileName: "downLoadExcel.xlsx",
        //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
        sheetName: sheetTitle
      };
      $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 우편번호팝업
//-------------------------------------------------------------------------
scwin.f_openZipPopUp = function () {
  var rtnList = new Array();
  // var popupResult = window.showModalDialog("/cm/zz/zipcodePopup.jsp", "",
  //     "dialogHeight:400px;dialogWidth:735px;center:yes;scroll:no;status:no;help:no");

  let v_url = "/ui/cm/zz/zipcodePopup.xml";
  let opts = {
    id: "pupup",
    popupName: "",
    modal: true,
    type: "browserPopup",
    width: 735,
    height: 400,
    title: ""
  };
  let popupResult = $c.win.openPopup($p, v_url, opts);

  // Modal Dialog를 리턴값 없이 닫을 경우에 대비해
  if (popupResult != null) {
    zip.setValue(popupResult.zip);
    addr1.setValue(popupResult.addr1);
    addr2.focus();
  }
};

// to-do
//-------------------------------------------------------------------------
// 사업자등록정보 공통팝업
//-------------------------------------------------------------------------
scwin.f_openCrnPopUp = function () {
  var rtnList = new Array();
  rtnList = cfCommonPopUp('retrieveCrnInfo', '', '', "F", null, null, null, null, null, null, null, null, null, null, null, null); //  사업자등록번호
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    crn.setValue(rtnList[0]); //사업자등록번호
    clntNm.setValue(rtnList[1]); //사업자명
    repstNm.setValue(rtnList[3]);
    bizcondNm.setValue(rtnList[4]);
    biztypeNm.setValue(rtnList[5]);
  }
  logisClntTelNo.focus();
};

//-------------------------------------------------------------------------
// 이동할 거래처 체크
//-------------------------------------------------------------------------
scwin.f_toClntChk = function () {
  if (chk_to.getValue() == "1") {
    // 
    scwin.txt_rdTo = "1";
    $c.gus.cfEnableBtnOnly($p, [b_Adapt]);
  } else {
    scwin.txt_rdTo = "0";
    txt_toNm.setValue("");
    $c.gus.cfDisableBtnOnly($p, [b_Adapt]);
  }
};

//-------------------------------------------------------------------------
// 레벨검색결과
//-------------------------------------------------------------------------
scwin.f_searchGrpLevel = function () {
  if (vSearchContents == "") {
    $c.win.alert($p, "레벨검색 내용을 입력해주십시오.");
    searchContents.focus();
    return false;
  } else {
    ds_tmpGroup.removeAll();

    // 검색결과
    var vGroupCountRow = ds_group.getTotalRow();
    var vSearchLevel = searchLevel.getValue().trim();
    var vSearchContents = searchContents.getValue().trim();
    for (k = 0; k < vGroupCountRow; k++) {
      let rowData = ds_group.getRowJSON(k);
      var vLevel = rowData["level"];
      var vClntNo = rowData["clntNo"];
      var vClntNm = rowData["clntNm"];
      var vViewClntNm = rowData["viewClntNm"];
      var vClntKndCd = rowData["clntKndCd"];
      var vGrpClntLvl = rowData["grpClntLvl"];
      if (vGrpClntLvl == vSearchLevel) {
        if (vClntNm.indexOf(vSearchContents) >= 0) {
          ds_tmpGroup.insertRow();
          let focusIdx = ds_tmpGroup.getTotalRow() - 1;
          gr_tmpGroup.setFocusedCell(focusIdx, "clntNo", false);
          let rowPos = ds_tmpGroup.getRowPosition();
          ds_tmpGroup.setCellData(rowPos, "clntNo", vClntNo);
          ds_tmpGroup.setCellData(rowPos, "viewClntNm", vViewClntNm);
          ds_tmpGroup.setCellData(rowPos, "clntKndCd", vClntKndCd);
          ds_tmpGroup.setCellData(rowPos, "grpClntLvl", vGrpClntLvl);
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
// 레벨검색결과 로우선택시
//-------------------------------------------------------------------------
scwin.f_selectTmpGroupRow = async function (vTmpGroupClntNo, pDataSetCountRows) {
  // mxTab.setSelectedTabIndex(0); // <<< 이런식으로 전환해야될듯 참고화면 (zz_210_02_02b)
  await mxTab.setSelectedTabIndex(0); // mxTab.ActiveIndex = 1
  for (i = 0; i < pDataSetCountRows; i++) {
    var vGroupClntNo = ds_group.getCellData(i, "clntNo");
    if (vTmpGroupClntNo == vGroupClntNo) {
      // tv_group.Index = i; // to-do
      // tv_treeView.findNodeByIndex(i + 1, true);
      tv_group.findNodeByIndex(i + 1, true);
      tv_group.focus();
      break;
    }
  }
};

//-------------------------------------------------------------------------
// 그룹거래처(3L) 선택시 하위거래처 검색
//-------------------------------------------------------------------------
scwin.f_searchLowerClnt = async function () {
  let rowPos = ds_group.getRowPosition();
  var vGrpClntLevel = ds_group.getCellData(rowPos, "grpClntLvl");
  var vCurrClntNo = ds_group.getCellData(rowPos, "clntNo");
  var vCurrRowPosition = rowPos;
  var vCountRow = ds_group.getTotalRow();
  if (vGrpClntLevel == "3") {
    for (var i = vCurrRowPosition + 1; i < vCountRow; i++) {
      var vUpperClntNo = ds_group.getCellData(i, "upperClntNo");
      if (vCurrClntNo != vUpperClntNo) {
        break;
      } else {
        // 하위거래처에 추가 
        ds_lowerClnt.insertRow();
        // let rowPos = ds_lowerClnt.getRowPosition();
        let rowPos = ds_lowerClnt.getTotalRow() - 1;
        let rowData = ds_group.getRowJSON(i);
        ds_lowerClnt.setCellData(rowPos, "clntNo", rowData["clntNo"]);
        ds_lowerClnt.setCellData(rowPos, "viewClntNm", rowData["viewClntNm"]);
        ds_lowerClnt.setCellData(rowPos, "clntKndCd", rowData["clntKndCd"]);
        ds_lowerClnt.setCellData(rowPos, "repstNm", rowData["repstNm"]);
        ds_lowerClnt.setCellData(rowPos, "clntTelNo", rowData["clntTelNo"]);
        var vZip = rowData["zip"];
        var vAddr = "";
        if (vZip.trim() != "") {
          vAddr = "(" + vZip.substring(0, 3) + "-" + vZip.substring(3, 6) + ")";
        }
        let addrVal = vAddr + rowData["addr1"] + rowData["addr2"];
        ds_lowerClnt.setCellData(rowPos, "addr", addrVal);
      }
    }
  }
};

// to-do
//-------------------------------------------------------------------------
// 로우이동시 신규등록이나 수정시 체크
//-------------------------------------------------------------------------
scwin.f_CheckRowPositionMove = function () {
  var vCountRow = ds_group.getTotalRow();
  var vChgCount = 0;
  var vChgRow = 0;
  var vReturn = true;
  var vCurrentRow = ds_group.rowPosition;
  for (var i = 0; i < vCountRow; i++) {
    var vCurRowStatus = ds_group.getRowStatusValue(i);
    if (["1", "3"].includes(vCurRowStatus)) {
      vChgCount++;
      vChgRow = i;
    }
  }
  if (vChgCount > 0 && vCurrentRow != vChgRow) {
    $c.win.alert($p, "그룹거래처 신규등록이나 수정사항을 저장하신 후에 다른 그룹거래처정보로 이동하실수 있습니다.");
    ds_group.setRowPosition(vChgRow);
    //	tv_group.Index = vChgRow;
  }
};

// 거래처 등록이 성공했을 경우
// 저장 TR       
// for=tr_saveGroup event=OnSuccess()
scwin.sbm_saveGroup_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.txt_addItemYn = "";
  await scwin.f_Retrieve();
  ds_group.rowPosition = scwin.txt_lastTreeRowPosi;
};

// to-do
// 거래처 로우가 선택된 경우
// for=ds_group event=OnRowPosChanged(row)
scwin.ds_group_onrowpositionchange = async function (info) {
  let row = info.newRowIndex;
  var vRowStatus = ds_group.getRowStatusValue(row);
  var vGrpClntLevel = ds_group.getCellData(row, "grpClntLvl");
  ds_lowerClnt.removeAll();
  if (vRowStatus == "1") {
    grpClntLvl.mandatory = "true";
    grpClntLvl.validExp = "사업자번호:yes";
    clntKndCd.mandatory = "true";
    clntKndCd.validExp = "거래처종류:yes";

    // $c.gus.cfRefreshMandSign();
    $c.gus.cfDisableBtn($p, [b_Update, b_Delete]);
    b_Cancel.setDisabled(false);
    b_Save.setDisabled(false);

    // let codeOptions = ""
    if (vGrpClntLevel != "4") {
      // codeOptions = [
      //     { grpCd: "ZZ544", compID: "grpClntLvl", opt: { "range": "1, G" } }
      // ];

      $c.gus.cfEnableObj($p, grpClntLvl, true);
    } else {
      scwin.f_ContentsEnable();
      // codeOptions = [
      //     { grpCd: "ZZ544", compID: "grpClntLvl" }
      // ];

      $c.gus.cfEnableObj($p, grpClntLvl, false);
    }

    // $c.data.setCommonCode(codeOptions);
  } else if (vRowStatus == "3") {
    grpClntLvl.mandatory = "true";
    grpClntLvl.validExp = "사업자번호:yes";
    clntKndCd.mandatory = "true";
    clntKndCd.validExp = "거래처종류:yes";

    // $c.gus.cfRefreshMandSign();
    $c.gus.cfDisableBtn($p, [b_Update, b_Delete]);
    b_Cancel.setDisabled(false);
    b_Save.setDisabled(false);
    // grpClntLvl.ResetData();
    // let codeOptions = [
    //     { grpCd: "ZZ544", compID: "grpClntLvl", opt: { "range": "1, G" } }
    // ];

    // $c.data.setCommonCode(codeOptions);
  } else if (vRowStatus == "0") {
    if (vGrpClntLevel == "3") {
      await scwin.f_searchLowerClnt();
      await mxTab.setSelectedTabIndex(1); // mxTab.ActiveIndex = 2;
    } else {
      await mxTab.setSelectedTabIndex(0); //  mxTab.ActiveIndex = 1;
    }
    scwin.f_ContentsDisable();
    grpClntLvl.mandatory = "false";
    grpClntLvl.validExp = "";
    clntKndCd.mandatory = "false";
    clntKndCd.validExp = "";
    // $c.gus.cfRefreshMandSign();
    $c.gus.cfDisableBtn($p, [b_Cancel, b_Save]);
    b_Update.setDisabled(false);
    b_Delete.setDisabled(false);

    // let codeOptions = [{ grpCd: "ZZ544", compID: "grpClntLvl" }];

    // $c.data.setCommonCode(codeOptions);
  }
  var chkToYn = chk_to.getValue();
  if (chkToYn == "1") {
    scwin.txt_toRowPosi = ds_group.rowPosition;
    txt_to.setValue(ds_group.getCellData(ds_group.rowPosition, "clntNo"));
    txt_toNm.setValue(ds_group.getCellData(ds_group.rowPosition, "clntNm"));
  } else {
    scwin.txt_fromRowPosi = ds_group.rowPosition;
    txt_from.setValue(ds_group.getCellData(ds_group.rowPosition, "clntNo"));
    txt_fromNm.setValue(ds_group.getCellData(ds_group.rowPosition, "clntNm"));
  }
  var vCountRow = ds_group.getTotalRow();
  if (vCountRow > 0 && [1, 2, 3].includes(vRowStatus)) {
    $c.gus.cfDisableBtn($p, [b_Update, b_Delete]);
    b_Cancel.setDisabled(false);
    b_Save.setDisabled(false);
  } else {
    scwin.f_ContentsDisable();
    $c.gus.cfDisableBtn($p, [b_Cancel, b_Save]);
    b_Update.setDisabled(false);
    b_Delete.setDisabled(false);
  }
};

// 레벨검색결과 로우 선택시
// for=ds_tmpGroup event=OnRowPosChanged(row)
scwin.ds_tmpGroup_onrowpositionchange = function (info) {
  let row = info.newRowIndex;
  var vTmpGroupClntNo = ds_tmpGroup.getCellData(row, "clntNo");
  var vCountRow = ds_group.getTotalRow();
  if (row >= 0) {
    scwin.f_selectTmpGroupRow(vTmpGroupClntNo, vCountRow);
  }
};

// 거래처 번호 입력시
// for=clntNo event=OnKillFocus()
scwin.clntNo_onblur = function () {
  clntNo.setValue($c.gus.cfGetLeftPad($p, clntNo.getValue(), '6'));
  if (clntNo.getValue() == "000000") {
    $c.win.alert($p, "거래처번호로 000000을 입력하실수 없습니다.다시 입력해 주십시오.");
    clntNo.setValue("");
    return false;
  }
  if (clntNo.getValue().substr(0, 1) == "0") {
    $c.win.alert($p, "법인은 거래처번호를 1로 시작해야 합니다. 재입력해 주십시오.");
    clntNo.setValue("");
    return false;
  }
};

// 거래처 로우가 INSERT된 경우
// for=ds_group event=OnRowInserted(row)
// txt_addRowNo.value = row
scwin.ds_group_oninsertrow = function (info, b, c, d, f) {
  // scwin.txt_addRowNo = info.newRowIndex;
};

// 우측마우스버튼 클릭시 거래처등록 메뉴
// for=tv_group event=OnContextMenu(x,y,row)
scwin.tv_group_onrightbuttonclick = function (node, positionX, topPosition) {
  btn_treeViewMenu.hide();
  let vGroupLevel = ds_group.getCellData(ds_group.getRowPosition(), "grpClntLvl");
  let vUpperClntNo = ds_group.getCellData(ds_group.getRowPosition(), "clntNo");
  let vMenuData = "▶ 거래처등록^4^" + vUpperClntNo + "^1";
  switch (vGroupLevel) {
    case '3':
      tv_group.MenuData = vMenuData;
      // tv_group.TrackPopupMenu(x, y);
      btn_treeViewMenu.setPosition(positionX - 260, topPosition - 140);
      btn_treeViewMenu.show();
      break;
    default:
      break;
  }
};

// 우측마우스버튼 클릭시 
// for=tv_group event=OnCommand(code, text) << 해당 이벤트 tobe 어떤 이벤트인지 모르겠음.
scwin.btn_addMenu_onclick = function (e) {
  btn_treeViewMenu.hide();
  let code = ds_group.getCellData(ds_group.getRowPosition(), "clntNo");
  scwin.f_openLowerClntPopUp(code);
  $c.gus.cfEnableObj($p, grpClntLvl, false); // 그룹거래처레벨
};

//-------------------------------------------------------------------------
// 하위거래처팝업
//-------------------------------------------------------------------------
scwin.f_openLowerClntPopUp = async function (pUpperClntNo) {
  var rtnList = new Array();
  udc_LowerClnt.setSelectId('retrieveClntList');
  await udc_LowerClnt.cfCommonPopUpAsync(async rtnList => {
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return false;
      var vClntNo = rtnList[0];
      var vClntNm = rtnList[1];
      var vDuplCount = scwin.f_CheckRegistLowerClnt(vClntNo);
      if (vDuplCount > 0) {
        $c.win.alert($p, "선택하신 거래처는 다른 그룹거래처에 이미 등록되어 있습니다.");
        return false;
      } else {
        scwin.f_LowerClntAddRow(vClntNo, vClntNm, pUpperClntNo);
        clntKndCd.setValue(rtnList[5]);
      }
    }
  }, '', '', 'F', null, null, null, null, ",GRP_CLNT", null, null, null, null, null, null, null); //  하위거래처 정보조회
};
scwin.btn_clear1_onclick = function (e) {
  searchContents.setValue("");
};
scwin.btn_clear2_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
};
scwin.btn_retrieve1_onclick = function (e) {
  scwin.f_searchGrpLevel();
};
scwin.btn_retrieve2_onclick = async function (e) {
  await scwin.f_Retrieve();
};
scwin.b_Save_onclick = function (e) {
  scwin.f_Save('SAVE');
};
scwin.tv_group_onlabelclick = function (value, node, index) {};
scwin.closeTreeViewMenu = function () {
  btn_treeViewMenu.hide();
};

/**
 * @method 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_saveGroup:
      await scwin.sbm_saveGroup_submitdone(e);
      break;
    case sbm_group:
      await scwin.sbm_group_submitdone(e);
      break;
    default:
      break;
  }
};

/**
 * @method 
 * @name submitExcute 
 * @description submit 처리
 */
scwin.submitExcute = async function (sbmObj) {
  const e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    if (e.responseJSON.resultDataSet[0].Code == -1) return;
    await scwin.submitdone(e);
  }
  ;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onclick':'scwin.closeTreeViewMenu'},E:[{T:1,N:'w2:floatingLayer',A:{movable:'false',dragResizable:'false',style:'display:none;',id:'btn_treeViewMenu',title:'',class:'btn_addMenu'},E:[{T:1,N:'xf:group',A:{style:'',id:'btn_addMenu',class:'my-menu','ev:onclick':'scwin.btn_addMenu_onclick'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'▶ 거래처등록',class:''}}]}]},{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'lybox flex_no',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LEVEL ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 50px;',allOption:'',id:'searchLevel',class:'',direction:'auto',ref:'',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'4'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]}]}]},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'searchContents',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear1',style:'',type:'button','ev:onclick':'scwin.btn_clear1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve1',style:'',type:'button','ev:onclick':'scwin.btn_retrieve1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신규그룹거래처 지정기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_lupContents',style:'',displayFormat:'yyyy/MM/dd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear2',style:'',type:'button','ev:onclick':'scwin.btn_clear2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve2',style:'',type:'button','ev:onclick':'scwin.btn_retrieve2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'그룹거래처 TreeView',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'bAddRow',type:'button',class:'btn','ev:onclick':'scwin.f_AddRow',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'bUndoRow',type:'button',class:'btn','ev:onclick':'scwin.f_Undo',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_group2',style:'',gridDownYn:'N',gridUpYn:'N',templateYn:'N',gridID:'',btnUser:'N',id:'topGrd'}}]}]},{T:1,N:'xf:group',A:{class:'tvw-wrap',id:'grp_group2'},E:[{T:1,N:'w2:treeview',A:{id:'tv_group',renderType:'virtual',style:'height:100%;',tooltipGroupClass:'false',class:'',showTreeDepth:'1',dataType:'listed','ev:onlabelclick':'scwin.tv_group_onlabelclick','ev:onrightbuttonclick':'scwin.tv_group_onrightbuttonclick'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_group'},E:[{T:1,N:'w2:label',A:{ref:'viewClntNm'}},{T:1,N:'w2:value',A:{ref:'clntNo'}},{T:1,N:'w2:depth',A:{ref:'level'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'그룹거래처지정',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 150px;',id:'clntNo',class:'','ev:onblur':'scwin.clntNo_onblur',ref:'data:ds_group.clntNo'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'(자동부여)',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'clntNm',style:'width: 200px;',ref:'data:ds_group.clntNm',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'레벨',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'grpClntLvl',style:'width: 200px;',submenuSize:'fixed',ref:'data:ds_group.grpClntLvl',chooseOptionLabel:'',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처소속',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'clntKndCd',style:'width: 200px;',submenuSize:'fixed',ref:'data:ds_group.clntKndCd',chooseOptionLabel:'선택',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지정일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_group6',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'regDtm',style:'width: 200px',readOnly:'true',ref:'data:ds_group.regDtm'}},{T:1,N:'xf:input',A:{class:'tac',dataType:'time',id:'',style:'width: 77px;display: none;',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지정자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'regId',style:'width: 200px;',ref:'data:ds_group.regId'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 그룹거래처 이동정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'FROM ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_from',style:'display:none;azimuth:'}},{T:1,N:'xf:input',A:{class:'',id:'txt_fromNm',style:'width: 150px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_to',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'','ev:onviewchange':'scwin.f_toClntChk',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'TO'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'display: none;',id:'txt_to',class:''}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'txt_toNm',class:''}},{T:1,N:'xf:trigger',A:{style:'',id:'b_Adapt',type:'button',class:'btn','ev:onclick':'scwin.f_Apply',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이동'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:'height: 300px;'},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tab',id:'mxTab',style:'height: 100%'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'mxTab_page1',label:'레벨검색결과',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'mxTab_page2',label:'하위거래처',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:'height:calc(100% - 35px);'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:'height:100%;'},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_tmpGroup',id:'gr_tmpGroup',style:'',visibleRowNum:'5',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'거래처번호',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'관리레벨',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'거래처소속',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'viewClntNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'grpClntLvl',inputType:'select',style:'',value:'',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'그룹'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'법인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사업자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'거래처'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntKndCd',inputType:'select',style:'',value:'',width:'120',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'회계'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'AC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정비'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'EQ'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'택배'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'HD'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LO'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'렌터카'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'고속'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TR'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:'display: none;'},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelYn:'Y',btnRowAddYn:'Y',btnDelYn:'N',btnRowDelYn:'N',style:'display: none;',rowAddFunction:'scwin.f_AddRow'}}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',style:'height:calc(100% - 35px)'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:'height:100%'},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_lowerClnt',id:'gr_lowerClnt',style:'',visibleRowNum:'5',readOnly:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption6',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'거래처번호',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'소속',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'대표자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'대표전화',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'주소',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'viewClntNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntKndCd',inputType:'select',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'repstNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntTelNo',inputType:'text',style:'',value:'',width:'100',displayFormat:'###-####-####'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'addr',inputType:'text',style:'',value:'',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:'display: none;'},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'N',style:'',rowAddFunction:'scwin.f_AddRow',cancelFunction:'scwin.f_Undo',rowAddUserAuth:'C'}}]}]}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'txt-dot txt-blue',id:'',label:'하위거래처 등록은 그룹거래처 3레벨(3L)에서 오른쪽 마우스버튼을 눌러주십시오.',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Update',style:'',type:'button','ev:onclick':'scwin.f_Update',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Cancel',style:'',type:'button','ev:onclick':'scwin.f_Undo',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Save',style:'',type:'button','ev:onclick':'scwin.b_Save_onclick',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Delete',id:'b_Delete',style:'',type:'button',objType:'ctrlBtn',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',nameId:'',style:'width:%; height:px;display: none;',id:'udc_LowerClnt'}}]}]}]}]}]}]}]})