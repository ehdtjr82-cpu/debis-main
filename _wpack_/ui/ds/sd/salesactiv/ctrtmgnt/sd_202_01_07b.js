/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_07b.xml 28552 6f6ed14b0fd0673c9b1669071dc75a5627f8ce70475ca82d279152af035cf124 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_commSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search','ev:onsetdata':'scwin.dma_search_onsetdata'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'요율항목코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_selpchItemCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'요율항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'요율항목명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tariff',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_tariff_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indpCtrtTrfSeq',name:'독립계약요율순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidCommNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf',name:'계약요율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidLobranNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidWrkPlNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'aexpYn',name:'실비여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strAdptCondCd',name:'보관적용조건코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strAdptClsCd',name:'보관적용구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minEqNrmCd',name:'최소장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxEqNrmCd',name:'최대장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minUseCondHh',name:'최소사용조건_시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvRateIncluYn',name:'하역료포함여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portDistrictCd',name:'항구권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portDistrictNm',name:'항구권역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strFddAdptStdCd',name:'보관기일적용기준코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'monHhStdCd',name:'모니터링시간기준코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpAllClsCd',name:'수출입전체구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strBasisAdptDdCnt',name:'보관기본적용일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strMchtClntNo',name:'보관화주거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strMchtClntNm',name:'보관화주거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strMchtTrgtClntClsCd',name:'보관화주대상거래처구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strMchtCrcCd',name:'보관화주통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strMchtCtrtTrf',name:'보관화주계약요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strMchtAdptDdCnt',name:'보관화주적용일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strMchtImntDdCnt',name:'보관화주면제일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strMchtSellClntClsCd',name:'보관화주매출거래처구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prvsCtrtTrfYn',name:'가계약요율여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptCntCd',name:'요율적용횟수코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_commSearch',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_commSearch',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveIndependenceContractTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,["dma_search",{"id":"ds_tariff","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_tariff","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.salesactiv.ctrtmgnt.SaveIndependenceContractTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_tariff","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.parentFrame = $c.win.getParent($p);
  scwin.strCtrtNo = scwin.parentFrame.scwin.ctrtNo;

  //공통코드 조회
  const codeOptions = [{
    grpCd: "ZZ006",
    compID: "gr_tariff:crcCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCode);
};
scwin.callBackCode = function () {
  dma_commSearch.set("sysCd", "SellpurchaseItemEBC");
  dma_commSearch.set("queryId", "retrieveContractSellpurchaseItemList");
  dma_commSearch.set("param1", "13");
  $c.sbm.execute($p, sbm_commSearch).then(e => {
    console.log("scwin.sbm_commSearch : retrieveContractSellpurchaseItemList");
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_selpchItemCd.setJSON(e.responseJSON.GAUCE);
    acb_selpchItemCd.setSelectedIndex(0);
  });

  //scwin.f_retrieve();
  /*if(parent.iFrameRetrieveCheck[PAGE_IDX] == "") {
  f_Retrieve();
  }*/
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  if (scwin.parentFrame.wfm_ctrtComplete.getWindow().ds_completeYn.getCellData(0, "code") == "02") {
    $c.gus.cfDisableObjects($p, [btn_save, btn_add, btn_del, btn_cls]);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  console.log("scwin.f_retrieve");
  if ($c.data.isModified($p, ds_tariff)) {
    let conf = await $c.win.confirm($p, MSG_CM_CRM_015);
    if (conf) {
      if (!scwin.parentFrame.scwin.f_isCompletedChk(2)) return false;
      await scwin.f_Save("");
    }
  }
  if (acb_selpchItemCd.getValue() == "") {
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
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, new Array("하역-추가요율"));
    return false;
  } else {
    if (await scwin.f_reqFieldChk()) {
      if (moveGb == "") {
        let conf = await $c.win.confirm($p, MSG_CM_CRM_001);
        if (conf) {
          const e = await $c.sbm.execute($p, sbm_save);
          scwin.sbm_save_submitdone(e);
          return true;
        } else {
          return false;
        }
      } else {
        const e = await $c.sbm.execute($p, sbm_save);
        await scwin.sbm_save_submitdone(e, callback);
        return true;
      }
    } else {
      return false;
    }
  }
};

//-------------------------------------------------------------------------
// 필수 항목 확인
//-------------------------------------------------------------------------
scwin.f_reqFieldChk = async function () {
  let chkVal = await $c.gus.cfValidate($p, [gr_tariff], null, true);
  if (!chkVal) return false;
  for (var i = 0; i < ds_tariff.getTotalRow(); i++) {
    if (ds_tariff.getCellData(i, "selpchItemCd") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("운송조건"));
      return false;
    }
    if (ds_tariff.getCellData(i, "selpchItemCd") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("차량종류"));
      return false;
    }
    if (ds_tariff.getCellData(i, "aexpYn") == "0" && ds_tariff.getCellData(i, "ctrtTrf") == 0) {
      $c.win.alert($p, "요율 최소금액은 0.01입니다.");
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
  let rowCnt = ds_tariff.getTotalRow();
  if (rowCnt == 0) {
    ds_tariff.insertRow(0);
    ds_tariff.setCellData(0, "ctrtNo", scwin.strCtrtNo);
    ds_tariff.setCellData(0, "transMdCtrtTrfSeq", "1");
    ds_tariff.setCellData(0, "selpchItemCd", acb_selpchItemCd.getValue());
    ds_tariff.setCellData(0, "crcCd", "KRW");
    ds_tariff.getCellData(0, "ctrtTrf", "0");
    ds_tariff.setCellData(0, "aexpYn", "0");
    gr_tariff.setFocusedCell(0, "commNm");
  } else {
    ds_tariff.setRowJSON(rowCnt, ds_tariff.getRowJSON(ds_tariff.getRowPosition()));
    gr_tariff.setFocusedCell(rowCnt, 0);
  }
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;

  //parent.iFrameRetrieveCheck[PAGE_IDX] = "R";
  //pagingIndex.innerHTML = cfMakePagingIndex(oGDS_page,"moveToPage" ); 

  let rowCnt = ds_tariff.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  if (rowCnt > 0) {
    gr_tariff.setFocusedCell(0, 0);
    /*if(ds_tariff.getCellData(0, "dataMode") == "I") {
        backUpObj = ds_tariff.ExportData(1,rowCnt,true);
        ds_tariff.ClearData();
        ds_tariff.ImportData(backUpObj);
    }*/
  }

  /**
  if(scwin.parentFrame.chb_bizDivCntrYn.getValue() == "1") {
      gr_tariff.setColumnVisible("transCondCd", true);
      gr_tariff.setColumnVisible("cntrWtCondCd", true);
      gr_tariff.setColumnVisible("liftIncluYn", true);
  } else {
      gr_tariff.setColumnVisible("transCondCd", false);
      gr_tariff.setColumnVisible("cntrWtCondCd", false);
      gr_tariff.setColumnVisible("liftIncluYn", false);
  }
   if(scwin.parentFrame.chb_bizDivBulkYn.getValue() == "1") {
      gr_tariff.setColumnVisible("eqKndCd", true);
      gr_tariff.setColumnVisible("eqNrmCd", true);
  } else {
      gr_tariff.setColumnVisible("eqKndCd", false);
      gr_tariff.setColumnVisible("eqNrmCd", false);
  }
   if(acb_selpchItemCd.getValue() == "0155") {
      gr_tariff.setColumnVisible("strAdptCondCd", true);    
      gr_tariff.setColumnVisible("strAdptClsCd", true);
      gr_tariff.setColumnVisible("trfAdptCntCd", true);
  } else {
      gr_tariff.setColumnVisible("strAdptCondCd", false);    
      gr_tariff.setColumnVisible("strAdptClsCd", false);
      gr_tariff.setColumnVisible("trfAdptCntCd", false);
  }
   parent.iFrameRetrieveCheck[PAGE_IDX] = "R";
   */

  for (var i = 0; i < rowCnt; i++) {
    if (ds_tariff.getCellData(i, "aexpYn") == "1") {
      gr_tariff.setReadOnly("cell", i, "ctrtTrf", true);
      ds_tariff.getCellData(i, "ctrtTrf", "0");
    } else {
      gr_tariff.setReadOnly("cell", i, "ctrtTrf", false);
    }
  }
};

//저장 완료
scwin.sbm_save_submitdone = async function (e, callback) {
  console.log("scwin.sbm_save_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
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
//요율항목 값 변경 > 조회
scwin.acb_selpchItemCd_onchange = function (info) {
  scwin.f_retrieve();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  scwin.f_retrieve();
};

//그리드 textImage 클릭 > 그리드 공통 팝업 호출
scwin.gr_tariff_ontextimageclick = function (rowIndex, columnIndex) {
  scwin.pWinCloseTF = "F";
  scwin.gr_tariff_onviewchange();
};
scwin.gr_tariff_onviewchange = function (info) {
  let initFlag = info != null ? true : false;
  scwin.f_openCommonPopUp(ds_tariff.getRowPosition(), gr_tariff.getFocusedColumnID(), initFlag);
};

//-------------------------------------------------------------------------
// 공통 팝업 호출
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (rowIndex, columnId, initFlag) {
  debugger;
  let pWinCloseTF = $c.util.isEmpty($p, scwin.pWinCloseTF) ? "T" : "F";
  if (pWinCloseTF == "T" && $c.util.isEmpty($p, ds_tariff.getCellData(rowIndex, columnId))) return;
  switch (columnId) {
    case "commNm":
      let commNm = ds_tariff.getCellData(rowIndex, "commNm");
      if (initFlag) {
        ds_tariff.setCellData(rowIndex, "commNm", "");
      }
      udc_comCode.setSelectId("retrieveCommInfo");
      udc_comCode.cfCommonPopUp(scwin.callBackComm, ds_tariff.getCellData(rowIndex, "commCd"), commNm, pWinCloseTF, "3", "품목／품명코드,품목／품명,구분", "120,170,70", "4,5,6,7,8,9,10", "2,4,,," + "", null, null, null, null, null, "F", "품목／품명,품목／품명코드,품목／품명");
      break;
    case "lobranNm":
      //readonly일 때 팝업 호출 X
      if (gr_tariff.getCellReadOnly(rowIndex, columnId)) return;
      let lobranNm = ds_tariff.getCellData(rowIndex, "lobranNm");
      if (initFlag) {
        ds_tariff.setCellData(rowIndex, "lobranNm", "");
      }
      udc_comCode.setSelectId("retrieveLogisDeptInfo");
      udc_comCode.cfCommonPopUp(scwin.callBackDept, ds_tariff.getCellData(rowIndex, "lobranCd"), lobranNm, pWinCloseTF, "7", "작업점소코드,작업점소명", "150,170", null, "A,B", null, null, null, null, null, "F", "작업점소,작업점소코드,작업점소명");
      break;
    case "portDistrictNm":
      //항구권역
      //readonly일 때 팝업 호출 X
      if (gr_tariff.getCellReadOnly(rowIndex, columnId)) return;
      let portDistrictNm = ds_tariff.getCellData(rowIndex, "portDistrictNm");
      if (initFlag) {
        // "portDistrictNm" 데이터 변경으로 팝업 호출하는 경우 portDistrictCd "" 전송
        ds_tariff.setCellData(rowIndex, "portDistrictNm", "");
      }
      udc_comCode.setSelectId("retrieveDistrictList");
      udc_comCode.cfCommonPopUp(scwin.callBackWrkPl, ds_tariff.getCellData(rowIndex, "portDistrictCd"), portDistrictNm, pWinCloseTF, "7", null, "150,170", null, ",,PCD", null, null, null, null, null, "F", null);
      break;
    case "unitCd":
      //
      let unitCd = ds_tariff.getCellData(rowIndex, "unitCd");
      if (initFlag) {
        ds_tariff.setCellData(rowIndex, "unitCd", "");
      }
      udc_comCode.setSelectId("retrieveCommCdInfo");
      udc_comCode.cfCommonPopUp(scwin.callBackUnitCd, unitCd, "", pWinCloseTF, "7", null, "150,170", null, "LO102,,", null, null, null, null, null, "F", null);
      break;
    default:
      break;
  }
  scwin.pWinCloseTF = "";
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
//품목/품명
scwin.callBackComm = function (rtnList) {
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

//작업점소
scwin.callBackDept = function (rtnList) {
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
scwin.callBackWrkPl = function (rtnList) {
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
scwin.callBackUnitCd = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      $c.gus.cfSetGridReturnValue($p, rtnList, ds_tariff, ds_tariff.getRowPosition(), "unitCd", "");
    } else {
      ds_tariff.setCellData(ds_tariff.getRowPosition(), "unitCd", ds_tariff.getOriginalCellData(ds_tariff.getRowPosition(), "unitCd"));
    }
  } else ds_tariff.setCellData(ds_tariff.getRowPosition(), "unitCd", "");
};

//그리드 셀 선택 > 편집 설정
scwin.gr_tariff_oncellclick = function (rowIndex, columnIndex, columnId) {
  console.log("scwin.gr_tariff_oncellclick");
  switch (columnId) {
    case "aexpYn":
      if (ds_tariff.getCellData(rowIndex, "aexpYn") == "1") {
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrf", true);
        ds_tariff.setCellData(rowIndex, "ctrtTrf", "0");
      } else {
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrf", false);
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
        ds_tariff.setCellData(rowIndex, "wrkPlCd", "");
        gr_tariff.setReadOnly("cell", rowIndex, "lobranNm", false);
        gr_tariff.setReadOnly("cell", rowIndex, "portDistrictNm", false);
      } else {
        gr_tariff.setReadOnly("cell", rowIndex, "lobranNm", true);
        gr_tariff.setReadOnly("cell", rowIndex, "portDistrictNm", false);
      }
      break;
    default:
      break;
  }
};

//저장 버튼
scwin.btn_save_onclick = function (e) {
  scwin.f_Save('');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요율항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_selpchItemCd',search:'start',style:'width:200px;',submenuSize:'auto',objType:'data',allOption:'',chooseOption:'',ref:'data:dma_search.selpchItemCd',validExp:'요율항목:yes','ev:onchange':'scwin.acb_selpchItemCd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_selpchItemCd'},E:[{T:1,N:'w2:label',A:{ref:'selpchItemNm'}},{T:1,N:'w2:value',A:{ref:'selpchItemCd'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'하역-하역추가요율 등록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',gridID:'gr_tariff',gridDownUserAuth:'X',grdDownOpts:'{"fileName" : "하역추가요율xlsx", "sheetName" : "하역추가요율xlsx", "type":"2+4+8+16"}',gridUpYn:'N',templateYn:'N',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_tariff',id:'gr_tariff',style:'',dataName:'하역추가요율',validFeatures:'ignoreStatus=no',validExp:'commNm:품명:yes::key,unitCd:단위:yes,crcCd:통화:yes,ctrtTrf:요율:yes,lobranNm:작업점소:::key,aexpYn::no::key',visibleRowNum:'12',visibleRowNumFix:'true',rowStatusVisible:'true','ev:oncellclick':'scwin.gr_tariff_oncellclick',editModeEvent:'onclick','ev:onafteredit':'scwin.gr_tariff_onafteredit','ev:ontextimageclick':'scwin.gr_tariff_ontextimageclick','ev:onviewchange':'scwin.gr_tariff_onviewchange'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'품목/품명',width:'160',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'단위',width:'130',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'통화',width:'130',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'요율',width:'130',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'작업점소',width:'160',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'항구권역',width:'160',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'실비',width:'70',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'textImage',width:'160',textAlign:'left',validExp:'commNm:품명:yes::key',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'textImage',width:'130',textAlign:'left',validExp:'unitCd:단위:yes',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'select',width:'130',textAlign:'left',validExp:'crcCd:통화:yes',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtTrf',inputType:'text',width:'130',textAlign:'right',validExp:'ctrtTrf:요율:yes',displayFormat:'#,##0.00',dataType:'float',excelCellType:'number',defaultValue:'0',maxLength:'13.2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'textImage',width:'160',textAlign:'left',validExp:'lobranNm:작업점소:::key'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portDistrictNm',inputType:'textImage',width:'160',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'aexpYn',inputType:'checkbox',width:'70',validExp:'aexpYn::no::key',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spn_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_btGrdBtn',gridID:'gr_tariff',rowAddUserAuth:'C',rowDelUserAuth:'D',btnRowAddObj:'btn_add',btnRowDelObj:'btn_del',btnCancelObj:'btn_cls',rowAddFunction:'scwin.f_addRow',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',btnDelYn:'N'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'popupComCode',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%;height:px;display:none;',id:'udc_comCode',btnId:'btn_comCode'}}]}]}]})