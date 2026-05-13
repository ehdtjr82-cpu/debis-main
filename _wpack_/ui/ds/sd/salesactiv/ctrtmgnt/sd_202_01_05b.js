/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_05b.xml 29230 1803ed60b0428eb205f5dcb07577489b84b229cea80213e98884f40e6dc08d4a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_comSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search','ev:onsetdata':'scwin.dma_search_onsetdata'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'요율항목코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tariff',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_tariff_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgCtrtWrkPathSeq',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNodeCtrtTrfSeq',name:'작업노드계약요율순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidCommNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf',name:'계약요율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'ctrtTrfRt',name:'계약요율_비율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strAdptUnitCd',name:'보관적용단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptPtimeDd',name:'적용시점_일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'freeday',name:'FREEDAY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'basisStrTrf',name:'기본보관요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'basisStockUnitCd',name:'기본재고단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'basisStockQty',name:'기본재고_수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strFddAdptStdCd',name:'보관기일적용기준코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strTrfAdptStdCd',name:'보관요율적용기준코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfsWrkfClsCd',name:'CFS작업비구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidLobranNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidWrkPlNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvWrkClsCd',name:'하역작업구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portDistrictCd',name:'항구권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portDistrictNm',name:'항구권역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prvsCtrtTrfYn',name:'가계약요율여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_selpchItemCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'요율항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'요율항목명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_contractWorkPath',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로Seq',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_comSearch',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_comSearch',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveWorkNodeTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,["dma_search",{"id":"ds_tariff","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_tariff","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.salesactiv.ctrtmgnt.SaveWorkNodeTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_tariff","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.parentFrame = $c.win.getParent($p);
  scwin.strCtrtNo = scwin.parentFrame.scwin.ctrtNo;

  //공통코드 설정
  const codeOptions = [{
    grpCd: "ZZ006",
    compID: "gr_tariff:crcCd"
  }, {
    grpCd: "SD119",
    compID: "gr_tariff:stvWrkClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCode);
};
scwin.onUdcCompleted = function () {
  //부모창 호출 > iframe > datalist에 값 확인 
  if (scwin.parentFrame.wfm_ctrtComplete.getWindow().ds_completeYn.getCellData(0, "code") === "02") {
    $c.gus.cfDisableObjects($p, [btn_save, btn_add, btn_del, btn_cls]);
  }
};
scwin.callBackCode = function () {
  dma_comSearch.set("sysCd", "ContractEBC");
  dma_comSearch.set("queryId", "retrieveContractWorkStepTariffItemList");
  dma_comSearch.set("param1", scwin.strCtrtNo);
  dma_comSearch.set("param2", "11");
  $c.sbm.execute($p, sbm_comSearch).then(e => {
    console.log("scwin.sbm_comSearch_submitdone");
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_selpchItemCd.setJSON(e.responseJSON.GAUCE);
    abc_selpchItemCd.setSelectedIndex(0);
  });
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  console.log("scwin.f_retrieve");
  if ($c.data.isModified($p, ds_tariff)) {
    let conf = await $c.win.confirm($p, MSG_CM_CRM_015);
    if (conf) {
      let isCompleteChk = await scwin.parentFrame.scwin.f_isCompletedChk(0);
      if (!isCompleteChk) return;
      await scwin.f_Save("");
    }
  }
  if (abc_selpchItemCd.getValue() == null || abc_selpchItemCd.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("요율항목"));
    return;
  }
  dma_search.set("ctrtNo", scwin.strCtrtNo);
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (moveGb, callback) {
  if (!$c.data.isModified($p, ds_tariff)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, new Array("하역요율"));
    scwin.parentFrame.TAB_MOVE_CONFIRM = false;
    scwin.parentFrame.PAGE_MOVE_CONFIRM = false;
    return false;
  } else {
    if (await scwin.f_reqFieldChk()) {
      if (moveGb == "") {
        let conf = await $c.win.confirm($p, MSG_CM_CRM_001);
        if (conf) {
          const res = await $c.sbm.execute($p, sbm_save);
          scwin.sbm_save_submitdone(res);
          return true;
        } else {
          scwin.parentFrame.TAB_MOVE_CONFIRM = false;
          scwin.parentFrame.PAGE_MOVE_CONFIRM = false;
          return false;
        }
      } else {
        const res = await $c.sbm.execute($p, sbm_save);
        await scwin.sbm_save_submitdone(res, callback);
        scwin.parentFrame.TAB_MOVE_CONFIRM = false;
        scwin.parentFrame.PAGE_MOVE_CONFIRM = false;
        return true;
      }
    } else {
      scwin.parentFrame.TAB_MOVE_CONFIRM = false;
      scwin.parentFrame.PAGE_MOVE_CONFIRM = false;
      return false;
    }
  }
};

//-------------------------------------------------------------------------
// 필수 항목 확인
//-------------------------------------------------------------------------
scwin.f_reqFieldChk = async function () {
  let chkVal = await $c.gus.cfValidate($p, [gr_tariff], null, 2);
  if (!chkVal) return false;
  for (var i = 0; i < ds_tariff.getTotalRow(); i++) {
    if (ds_tariff.getCellData(i, "ctrtTrf") == "0" && ds_tariff.getCellData(i, "ctrtTrfRt") == "0") {
      $c.win.alert($p, "정액요율 또는 정률요율(%)중 하나를 단드시 입력하십시오.");
      gr_tariff.setFocusedCell(i, "ctrtTrf");
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_addRow = function () {
  let insRow = ds_tariff.insertRow();
  if (ds_tariff.getTotalRow() == 0) {
    ds_tariff.setCellData(insRow, 'ctrtNo', scwin.strCtrtNo);
    ds_tariff.setCellData(insRow, 'transMdCtrtTrfSeq', "1");
    ds_tariff.setCellData(insRow, 'selpchItemCd', abc_selpchItemCd.getValue());
    ds_tariff.setCellData(insRow, 'crcCd', "KRW");
  } else {
    ds_tariff.setRowJSON(insRow, ds_tariff.getRowJSON(ds_tariff.getRowPosition()), true);
  }
  gr_tariff.setFocusedCell(insRow, 0);
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//공통코드 조회 완료
scwin.sbm_comSearch_submitdone = function (e) {};

//조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_tariff.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  gr_tariff.setFocusedCell(0, 0);

  //scwin.parentFrame.iFrameRetrieveCheck[scwin.pageIdx] = "R";
};

//저장 완료
scwin.sbm_save_submitdone = async function (e, callback) {
  console.log("scwin.sbm_save_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_tariff.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  ds_tariff.initRowStatus();
  scwin.f_retrieve();
  if (typeof callback === "function") {
    callback();
  }
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//조회 버튼
scwin.btn_search_onclick = function (e) {
  console.log("scwin.btn_search_onclick");
  scwin.f_retrieve();
};

//저장 버튼
scwin.btn_save_onclick = function (e) {
  scwin.f_Save("");
};

//그리드 셀 선택 > 수정 설정
scwin.gr_tariff_oncellclick = function (rowIndex, columnIndex, columnId) {
  console.log("scwin.gr_tariff_oncellclick");
  switch (columnId) {
    case "ctrtWrkPathSeq":
      //행추가 때 계약작업경로명 선택
      if (ds_tariff.getRowStatus(rowIndex) == "C") {
        gr_tariff.setReadOnly("cell", rowIndex, columnId, false);
      } else {
        gr_tariff.setReadOnly("cell", rowIndex, columnId, true);
      }

    //정액요율/정률요율 중 하나만 입력
    case "ctrtTrf":
    case "ctrtTrfRt":
      if (ds_tariff.getCellData(rowIndex, "ctrtTrf") > 0) {
        gr_tariff.setReadOnly("cell", rowIndex, 'ctrtTrf', false);
        gr_tariff.setReadOnly("cell", rowIndex, 'ctrtTrfRt', true);
        ds_tariff.setCellData(rowIndex, "ctrtTrfRt", "0");
        ds_tariff.setCellData(rowIndex, "famtFratClsCd", "FM");
      } else if (ds_tariff.getCellData(rowIndex, "ctrtTrfRt") > 0) {
        gr_tariff.setReadOnly("cell", rowIndex, 'ctrtTrf', true);
        gr_tariff.setReadOnly("cell", rowIndex, 'ctrtTrfRt', false);
        ds_tariff.setCellData(rowIndex, "ctrtTrf", "0");
        ds_tariff.setCellData(rowIndex, "famtFratClsCd", "FR");
      } else if (ds_tariff.getCellData(rowIndex, "ctrtTrf") == 0) {
        gr_tariff.setReadOnly("cell", rowIndex, 'ctrtTrf', false);
        gr_tariff.setReadOnly("cell", rowIndex, 'ctrtTrfRt', false);
      } else if (ds_tariff.getCellData(rowIndex, "ctrtTrfRt") == 0) {
        gr_tariff.setReadOnly("cell", rowIndex, 'ctrtTrf', false);
        gr_tariff.setReadOnly("cell", rowIndex, 'ctrtTrfRt', false);
      }
      break;
    case "lobranNm":
      //작업장/물류점소 중에 하나만 입력
      if (ds_tariff.getCellData(rowIndex, "portDistrictNm") == "") {
        gr_tariff.setReadOnly("cell", rowIndex, "lobranNm", false);
      } else {
        gr_tariff.setReadOnly("cell", rowIndex, "lobranNm", true);
      }
      break;
    case "portDistrictNm":
      //작업장/물류점소 중에 하나만 입력
      if (ds_tariff.getCellData(rowIndex, "lobranNm") == "") {
        gr_tariff.setReadOnly("cell", rowIndex, "portDistrictNm", false);
      } else {
        gr_tariff.setReadOnly("cell", rowIndex, "portDistrictNm", true);
      }
      break;
    default:
      break;
  }
};

//그리드에 바인딩 된 ds_tariff 값 Nm 변경 > 각 셀 cd 값 초기화 
scwin.ds_tariff_oncelldatachange = function (info) {
  console.log("scwin.ds_tariff_oncelldatachange");
  console.log(info);
  let columnId = info.colID;
  let rowIndex = info.rowIndex;
  switch (columnId) {
    case "commNm":
      if (ds_tariff.getCellData(rowIndex, columnId) == "") {
        ds_tariff.setCellData(rowIndex, "commCd", "");
      }
      break;
    case "lobranNm":
      if (ds_tariff.getCellData(rowIndex, columnId) == "") {
        ds_tariff.setCellData(rowIndex, "lobranCd", "");
        gr_tariff.setReadOnly("cell", rowIndex, "lobranNm", false);
        gr_tariff.setReadOnly("cell", rowIndex, "portDistrictNm", false);
      } else {
        gr_tariff.setReadOnly("cell", rowIndex, "lobranNm", false);
        gr_tariff.setReadOnly("cell", rowIndex, "portDistrictNm", true);
      }
      break;
    case "portDistrictNm":
      if (ds_tariff.getCellData(rowIndex, columnId) == "") {
        ds_tariff.setCellData(rowIndex, "portDistrictCd", "");
      }
      break;
    default:
      break;
  }
};

//그리드 팝업 호출
scwin.gr_tariff_ontextimageclick = function (rowIndex, columnIndex) {
  scwin.pWinCloseTF = "F";
  scwin.gr_tariff_onviewchange();
};
scwin.gr_tariff_onviewchange = function (info) {
  let rowIndex = ds_tariff.getRowPosition();
  let columnId = gr_tariff.getFocusedColumnID();
  let pWinCloseTF = $c.util.isEmpty($p, scwin.pWinCloseTF) ? "T" : "F";
  if (pWinCloseTF == "T" && $c.util.isEmpty($p, ds_tariff.getCellData(rowIndex, columnId))) return;
  switch (columnId) {
    case "commNm":
      //품목,품명
      let commNm = ds_tariff.getCellData(rowIndex, "commNm");
      if (info != null) {
        // "commNm" 데이터 변경으로 팝업 호출하는 경우 commCd "" 전송
        ds_tariff.setCellData(rowIndex, "commNm", "");
      }
      udc_comCodeGrd.setSelectId("retrieveCommInfo");
      udc_comCodeGrd.cfCommonPopUp(scwin.callBackGrdComm, ds_tariff.getCellData(rowIndex, "commCd") ?? "", commNm, pWinCloseTF, '3', "품목／품명코드,품목／품명,구분", '120,170,70', '4,5,6,7,8,9,10', "2,4,,," + "", null, null, null, null, null, "F", "품목／품명,품목／품명코드,품목／품명");
      break;
    case "lobranNm":
      //작업점소코드
      if (gr_tariff.getCellReadOnly(rowIndex, columnId)) {
        //readonly일 때 팝업 호출 X
        gr_tariff.setCellStyle(rowIndex, columnId, "cursor", "default");
        return;
      }
      let lobranNm = ds_tariff.getCellData(rowIndex, "lobranNm");
      if (info != null) {
        // "lobranNm" 데이터 변경으로 팝업 호출하는 경우 lobranCd "" 전송
        ds_tariff.setCellData(rowIndex, "lobranNm", "");
      }
      udc_comCodeGrd.setSelectId("retrieveLogisDeptInfo");
      udc_comCodeGrd.cfCommonPopUp(scwin.callBackGrdDept, ds_tariff.getCellData(rowIndex, "lobranCd") ?? "", lobranNm, pWinCloseTF, '7', "작업점소코드,작업점소명", '150,170', null, "A,B", null, null, null, null, null, "F", "작업점소,작업점소코드,작업점소명");
      break;
    case "portDistrictNm":
      //항구권역
      if (gr_tariff.getCellReadOnly(rowIndex, columnId)) {
        //readonly일 때 팝업 호출 X
        gr_tariff.setCellStyle(rowIndex, columnId, "cursor", "default");
        return;
      }
      let portDistrictNm = ds_tariff.getCellData(rowIndex, "portDistrictNm");
      if (info != null) {
        // "portDistrictNm" 데이터 변경으로 팝업 호출하는 경우 portDistrictCd "" 전송
        ds_tariff.setCellData(rowIndex, "portDistrictNm", "");
      }
      udc_comCodeGrd.setSelectId("retrieveDistrictList");
      udc_comCodeGrd.cfCommonPopUp(scwin.callBackGrdDistrict, ds_tariff.getCellData(rowIndex, "portDistrictCd"), portDistrictNm, pWinCloseTF, '7', null, '150,170', null, ',,PCD', null, null, null, null, null, "F", null);
      break;
    case "unitCd":
      //단위
      let unitCd = ds_tariff.getCellData(rowIndex, "unitCd");
      if (info != null) {
        ds_tariff.setCellData(rowIndex, "unitCd", "");
      }
      udc_comCodeGrd.setSelectId("retrieveCommCdInfo");
      udc_comCodeGrd.cfCommonPopUp(scwin.callBackGrdCommCd, unitCd, '', pWinCloseTF, '7', null, '150,170', null, 'LO102,,', null, null, null, null, null, "F", null);
      break;
    default:
      break;
  }
  scwin.pWinCloseTF = "";
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
//요율항목 값 변경 
scwin.abc_selpchItemCd_onchange = function (info) {
  dma_comSearch.setEmptyValue();
  dma_comSearch.set("sysCd", "ContractEBC");
  dma_comSearch.set("queryId", "retrieveContractSelPchItemEachWorkPath");
  dma_comSearch.set("param1", scwin.strCtrtNo);
  dma_comSearch.set("param2", abc_selpchItemCd.getValue());
  dma_comSearch.set("param3", 0);
  $c.sbm.execute($p, sbm_comSearch).then(e => {
    console.log("scwin.sbm_comSearch_submitdone");
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_contractWorkPath.setJSON(e.responseJSON.GAUCE);
    //[value] label 값 강제 설정
    for (var i = 0; i < ds_contractWorkPath.getTotalRow(); i++) {
      ds_contractWorkPath.setCellData(i, "ctrtWrkPathNm", "[" + ds_contractWorkPath.getCellData(i, "ctrtWrkPathSeq") + "] " + ds_contractWorkPath.getCellData(i, "ctrtWrkPathNm"));
    }
    scwin.f_retrieve();
  });
};

//품목,품명
scwin.callBackGrdComm = function (rtnList) {
  if (rtnList != null) {
    // 현재 행 번호를 변수에 할당
    const rowIdx = ds_tariff.getRowPosition();
    if (rtnList[0] === "N/A") {
      ds_tariff.setCellData(rowIdx, "commCd", ds_tariff.getOriginalCellData(rowIdx, "commCd"));
      ds_tariff.setCellData(rowIdx, "commNm", ds_tariff.getOriginalCellData(rowIdx, "commNm"));
    } else {
      $c.gus.cfSetGridReturnValue($p, rtnList, ds_tariff, rowIdx, "commCd", "commNm");
    }
  }
};

//작업점소코드
scwin.callBackGrdDept = function (rtnList) {
  if (rtnList != null) {
    const rowIdx = ds_tariff.getRowPosition();
    if (rtnList[0] === "N/A") {
      ds_tariff.setCellData(rowIdx, "lobranCd", ds_tariff.getOriginalCellData(rowIdx, "lobranCd"));
      ds_tariff.setCellData(rowIdx, "lobranNm", ds_tariff.getOriginalCellData(rowIdx, "lobranNm"));
    } else {
      $c.gus.cfSetGridReturnValue($p, rtnList, ds_tariff, rowIdx, "lobranCd", "lobranNm");
    }
  }
};

//항구권역
scwin.callBackGrdDistrict = function (rtnList) {
  if (rtnList != null) {
    const rowIdx = ds_tariff.getRowPosition();
    if (rtnList[0] === "N/A") {
      ds_tariff.setCellData(rowIdx, "portDistrictCd", ds_tariff.getOriginalCellData(rowIdx, "portDistrictCd"));
      ds_tariff.setCellData(rowIdx, "portDistrictNm", ds_tariff.getOriginalCellData(rowIdx, "portDistrictNm"));
    } else {
      $c.gus.cfSetGridReturnValue($p, rtnList, ds_tariff, ds_tariff.getRowPosition(), "portDistrictCd", "portDistrictNm");
    }
  }
};

//단위
scwin.callBackGrdCommCd = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      $c.gus.cfSetGridReturnValue($p, rtnList, ds_tariff, ds_tariff.getRowPosition(), "unitCd", "");
    } else {
      ds_tariff.setCellData(ds_tariff.getRowPosition(), "unitCd", ds_tariff.getOriginalCellData(ds_tariff.getRowPosition(), "unitCd"));
    }
  } else ds_tariff.setCellData(ds_tariff.getRowPosition(), "unitCd", "");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요율항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'abc_selpchItemCd',search:'start',style:'width: 200px;',submenuSize:'auto',objType:'data',searchTarget:'value',allOption:'',ref:'data:dma_search.selpchItemCd',validExp:'요율항목:yes','ev:onselected':'scwin.abc_selpchItemCd_onselected','ev:onchange':'scwin.abc_selpchItemCd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_selpchItemCd'},E:[{T:1,N:'w2:label',A:{ref:'selpchItemNm'}},{T:1,N:'w2:value',A:{ref:'selpchItemCd'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'하역요율 등록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topTGrdBtn',gridID:'gr_tariff',grdDownOpts:'{"fileName" : "하역요율.xlsx", "sheetName" : "하역요율", "type":"2+4+8+16", "hiddenVisible" : "true", "useDataFormat": "true"}',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_tariff',id:'gr_tariff',style:'',dataName:'하역요율',validFeatures:'ignoreStatus=no',validExp:'ctrtWrkPathSeq:계약작업경로:yes::key,commNm:품명:yes::key,unitCd:단위:yes::key,crcCd:통화:yes::key,lobranNm::no::key,portDistrictNm::no::key,stvWrkClsCd::no::key',visibleRowNum:'12',visibleRowNumFix:'true',resize:'true',dataDragDrop:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true','ev:ontextimageclick':'scwin.gr_tariff_ontextimageclick',rowStatusVisible:'true',editModeEvent:'onclick','ev:oncellclick':'scwin.gr_tariff_oncellclick','ev:onviewchange':'scwin.gr_tariff_onviewchange',gridName:'하역요율'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'계약작업경로명',width:'170',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'품목/품명',width:'140',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'단위',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'통화',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'요율',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'정률요율(%)',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'작업점소',width:'110',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'항구권역',width:'110',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'작업구분',width:'110',class:'col-type2'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtWrkPathSeq',inputType:'select',width:'170',textAlign:'left',allOption:'',chooseOption:'',ref:'',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_contractWorkPath'},E:[{T:1,N:'w2:label',A:{ref:'ctrtWrkPathNm'}},{T:1,N:'w2:value',A:{ref:'ctrtWrkPathSeq'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'textImage',width:'140',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'textImage',width:'100',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'select',width:'100',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtTrf',inputType:'text',width:'100',textAlign:'right',excelCellType:'number',dataType:'float',excelFormat:'#,##0.00',mandatory:'true',displayFormat:'#,###.#0',maxLength:'13.2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtTrfRt',inputType:'text',width:'100',textAlign:'right',hidden:'true',displayFormat:'#,##0.#0',excelCellType:'number',dataType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'textImage',width:'110',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portDistrictNm',inputType:'textImage',width:'110',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'stvWrkClsCd',inputType:'select',width:'110',textAlign:'left',chooseOption:'true',chooseOptionLabel:'$blank',ref:''},E:[{T:1,N:'w2:choices'}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spn_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_tariff',id:'udc_btGrdBtn',btnCancelYn:'Y',btnDelYn:'N',rowAddUserAuth:'C',rowDelUserAuth:'D',rowAddFunction:'scwin.f_addRow',btnRowAddObj:'btn_add',btnCancelObj:'btn_cls',btnRowDelObj:'btn_del'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'popupComCodeGrd',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px;display: none;',id:'udc_comCodeGrd',btnId:'btn_comCodeGrd'}}]}]}]})