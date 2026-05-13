/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_10b.xml 40352 283f18090d9534b224e17840f0cdce2dbffc64fee61ee3bdfe9bc3ca460891fd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_commSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search','ev:onsetdata':'scwin.dma_search_onsetdata'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'요율항목코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_selpchItemCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'요율항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'요율항목명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tariff',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_tariff_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indpCtrtTrfSeq',name:'독립계약요율순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidCommNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf',name:'계약요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidLobranNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidWrkPlNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'aexpYn',name:'실비여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strAdptCondCd',name:'보관적용조건코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strAdptClsCd',name:'보관적용구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minEqNrmCd',name:'최소장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxEqNrmCd',name:'최대장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minUseCondHh',name:'최소사용조건_시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvRateIncluYn',name:'하역료포함여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portDistrictCd',name:'항구권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portDistrictNm',name:'항구권역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strFddAdptStdCd',name:'보관기일적용기준코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'monHhStdCd',name:'모니터링시간기준코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpAllClsCd',name:'수출입전체구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strBasisAdptDdCnt',name:'보관기본적용일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strMchtClntNo',name:'보관화주거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strMchtClntNm',name:'보관화주거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strMchtTrgtClntClsCd',name:'보관화주대상거래처구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strMchtCrcCd',name:'보관화주통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strMchtCtrtTrf',name:'보관화주계약요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strMchtAdptDdCnt',name:'보관화주적용일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strMchtImntDdCnt',name:'보관화주면제일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strMchtSellClntClsCd',name:'보관화주매출거래처구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prvsCtrtTrfYn',name:'가계약요율여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptCntCd',name:'요율적용횟수코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_compare'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'commCd',name:'품목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commNm',name:'품목품명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'unitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'작업점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranNm',name:'작업점소명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_contractWorkPath',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로Seq',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_commSearch',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_commSearch',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveIndependenceContractTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,["dma_search",{"id":"ds_tariff","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_tariff","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.salesactiv.ctrtmgnt.SaveIndependenceContractTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_tariff","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.pWinCloseTF = "";
scwin.divOnviewChange = false; //공통팝업 호출 2번 방지 변수

scwin.curIdx = 0;
scwin.colId = "";
scwin.keyVal = "";

//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.parentFrame = $c.win.getParent($p);
  scwin.strCtrtNo = scwin.parentFrame.scwin.ctrtNo;

  //공통코드 조회
  const codeOptions = [{
    grpCd: "ZZ006",
    compID: "gr_tariff:crcCd"
  }, {
    grpCd: "SD120",
    compID: "gr_tariff:strAdptCondCd"
  }, {
    grpCd: "SD170",
    compID: "gr_tariff:trfAdptCntCd"
  }, {
    grpCd: "SD121",
    compID: "gr_tariff:strAdptClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCode);
};
scwin.callBackCode = function () {
  dma_commSearch.set("sysCd", "SellpurchaseItemEBC");
  dma_commSearch.set("queryId", "retrieveContractSellpurchaseItemList");
  dma_commSearch.set("param1", "32");
  $c.sbm.execute($p, sbm_commSearch).then(e => {
    console.log("scwin.sbm_commSearch : retrieveContractSellpurchaseItemList");
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_selpchItemCd.setJSON(e.responseJSON.GAUCE);
    acb_selpchItemCd.setSelectedIndex(0);
  });
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
      //if(!scwin.parentFrame.scwin.f_isCompletedChk(6)) return false;
      let isCompleteChk = await scwin.parentFrame.scwin.f_isCompletedChk(5);
      if (!isCompleteChk) return;
      await scwin.f_Save("");
    }
  }
  if (acb_selpchItemCd.getValue() == null || acb_selpchItemCd.getValue() == "") {
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
  console.log("scwin.f_Save");
  if (!$c.data.isModified($p, ds_tariff)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, new Array("보관-추가요율"));
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
        scwin.sbm_save_submitdone(res, callback);
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
  let chkVal = await $c.gus.cfValidate($p, [gr_tariff]);
  if (!chkVal) return false;

  //chkVal = await $c.win.grdDupValid(gr_tariff, ["commNm", "lobranNm", "wrkPlNm"])
  //if(!chkVal) return false;

  for (var i = 0; i < ds_tariff.getTotalRow(); i++) {
    if (ds_tariff.getCellData(i, "selpchItemCd") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("운송조건"));
      return false;
    }
    if (ds_tariff.getCellData(i, "selpchItemCd") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("차량종류"));
      return false;
    }
    if (ds_tariff.getCellData(i, "aexpYn") == "0" && (ds_tariff.getCellData(i, "ctrtTrf") == "0" || ds_tariff.getCellData(i, "ctrtTrf") == "")) {
      $c.win.alert($p, "요율 최소금액은 0.01입니다.");
      gr_tariff.setFocusedCell(i, "ctrtTrf");
      return false;
    }
    if (ds_tariff.getCellData(i, "wrkPlCd") == "" && ds_tariff.getCellData(i, "lobranCd") == "") {
      $c.gus.cfAlertMsg($p, "작업점소 또는 작업장을 입력하십시오.");
      gr_tariff.setFocusedCell(i, "wrkPlCd");
      return false;
    }
    if (acb_selpchItemCd.getValue() == "0155") {
      if (ds_tariff.getCellData(i, "strAdptCondCd") == "B" && ds_tariff.getCellData(i, "trfAdptCntCd") == "") {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("요율적용"));
        gr_tariff.setFocusedCell(i, "trfAdptCntCd");
        return false;
      }
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
    ds_tariff.insertRow();
    ds_tariff.setCellData(0, "ctrtNo", scwin.strCtrtNo);
    ds_tariff.setCellData(0, "transMdCtrtTrfSeq", "1");
    ds_tariff.setCellData(0, "selpchItemCd", acb_selpchItemCd.getValue());
    ds_tariff.setCellData(0, "crcCd", "KRW");
    ds_tariff.setCellData(0, "aexpYn", "0");
    ds_tariff.setCellData(0, "ctrtTrf", "0");
    if (acb_selpchItemCd.getValue() == "0155") {
      ds_tariff.setCellData(0, "strAdptCondCd", "B");
      ds_tariff.setCellData(0, "trfAdptCntCd", "02");
    }
  } else {
    ds_tariff.setRowJSON(rowCnt, ds_tariff.getRowJSON(ds_tariff.getRowPosition()));
    gr_tariff.setFocusedCell(rowCnt, 0);
  }
};

//-------------------------------------------------------------------------
// 화면 이동
//-------------------------------------------------------------------------
scwin.f_winOpen = async function (strIndex) {
  var strPath = "";
  var programId = "";
  var paramObj = {};
  strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_02b.xml";
  programId = "sd_202_01_02b.jsp";
  paramObj = {
    ctrtNo: scwin.strCtrtNo,
    completeYn: scwin.parentFrame.ds_completeYn.get("code")
  };
  $c.win.openMenu($p, "계약기본정보", strPath, programId, paramObj);
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  //dma_compare.setJSON([]);
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

  //요율항목 0155이면
  if (acb_selpchItemCd.getValue() == "0155") {
    //gr_ctrt.setColumnVisible("cntrCrcNm", true);
    gr_tariff.setColumnVisible("strAdptCondCd", true);
    gr_tariff.setColumnVisible("strAdptClsCd", true);
    gr_tariff.setColumnVisible("trfAdptCntCd", true);
  } else {
    gr_tariff.setColumnVisible("strAdptCondCd", false);
    gr_tariff.setColumnVisible("strAdptClsCd", false);
    gr_tariff.setColumnVisible("trfAdptCntCd", false);
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
};

//저장 완료
scwin.sbm_save_submitdone = async function (e) {
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
  //scwin.f_retrieve();
  dma_commSearch.setEmptyValue();
  dma_commSearch.set("sysCd", "ContractEBC");
  dma_commSearch.set("queryId", "retrieveContractSelPchItemEachWorkPath");
  dma_commSearch.set("param1", scwin.strCtrtNo);
  dma_commSearch.set("param2", acb_selpchItemCd.getValue());
  dma_commSearch.set("param3", 0);
  $c.sbm.execute($p, sbm_commSearch).then(e => {
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

//조회 버튼
scwin.btn_search_onclick = function (e) {
  scwin.f_retrieve();
};

//그리드 공통 팝업 호출
scwin.gr_tariff_ontextimageclick = function (rowIndex, columnIndex) {
  console.log("scwin.gr_tariff_ontextimageclick");
  scwin.pWinCloseTF = "F";
  console.log("gr_tariff_ontextimageclick_scwin.divOnviewChange : " + scwin.divOnviewChange);
  if (scwin.divOnviewChange == false) {
    scwin.gr_tariff_onviewchange();
  }
};
scwin.gr_tariff_onviewchange = async function (info) {
  console.log("gr_tariff_onviewchange");
  scwin.divOnviewChange = true;
  let rowIndex = ds_tariff.getRowPosition();
  let columnId = gr_tariff.getFocusedColumnID();
  //let pWinCloseTF = "";
  let pWinCloseTF = $c.util.isEmpty($p, scwin.pWinCloseTF) ? "T" : "F";
  //if(pWinCloseTF == "T" && $c.util.isEmpty(ds_tariff.getCellData(rowIndex, columnId))) return;

  let tmpCd = "";
  let tmpCdVal = "";
  if (columnId.trim().slice(-2) == "Nm") {
    tmpCd = columnId.replace(/Nm/g, "Cd");
    tmpCdVal = ds_tariff.getCellData(rowIndex, tmpCd);
    if (pWinCloseTF != "F") {
      tmpCdVal = "";
    }
  }
  if (columnId != "unitCd") {
    // if (pWinCloseTF == "T" && columnId == "lobranNm" && ds_tariff.getCellData(rowIndex, columnId) == "") {     
    //     // onBlur && 작업점소명 && 작업점소명이 ""일때
    //     let colIdx = 0;

    //     if (scwin.topWrkStpCd == "1") {
    //         colIdx = gr_tariff.getColumnIndex("dptDistrictNm");
    //         gr_tariff.setFocusedCell(rowIndex, colIdx, false);    //출발권역
    //     } else if (scwin.topWrkStpCd == "2") {
    //         //다음row의 1번째 셀에 포커스
    //         colIdx = gr_tariff.getColumnIndex("wrkStpCd");      //selectBox
    //         debugger;
    //         if (rowIndex + 1 <= ds_tariff.getTotalRow()) {
    //             gr_tariff.setFocusedCell(rowIndex + 1, colIdx, false);     //작업단계  
    //         }
    //     }
    //     return;
    // }

    //onBlur일때 명칭 없어도 간혈적으로 호출되는 경우가 있어 추가함.(단위는 제외)
    if (pWinCloseTF == "T" && ds_tariff.getCellData(rowIndex, columnId) == "") return;
  }
  switch (columnId) {
    //품목/품명
    case "commNm":
      udc_comCode.setSelectId("retrieveCommInfo");
      udc_comCode.cfCommonPopUpAsync(scwin.callBackComm, tmpCdVal, ds_tariff.getCellData(rowIndex, "commNm"), pWinCloseTF, "3", "품목／품명코드,품목／품명,구분", "120,170,70", "4,5,6,7,8,9,10", "2,4,,," + "", null, null, null, null, null, "F", "품목／품명,품목／품명코드,품목／품명");
      break;

    //작업점소(작업장코드)
    case "lobranNm":
      console.log("lobranNm getCellReadOnly : " + gr_tariff.getCellReadOnly(rowIndex, columnId));
      /* if(gr_tariff.getCellReadOnly(rowIndex, columnId)) {
          //readonly일 때 팝업 호출 X
          gr_tariff.setCellStyle(rowIndex, columnId, "cursor", "default");
          return;
      } */
      udc_comCode.setSelectId("retrieveLogisDeptInfo");
      udc_comCode.cfCommonPopUpAsync(scwin.callBackDept, tmpCdVal, ds_tariff.getCellData(rowIndex, "lobranNm").trim(), pWinCloseTF, "7", "작업점소코드,작업점소명", "150,170", null, "A,B", null, null, null, null, null, "F", "작업점소,작업점소코드,작업점소명");
      break;

    //작업장(실비)
    case "wrkPlNm":
      console.log("wrkPlNm getCellReadOnly : " + gr_tariff.getCellReadOnly(rowIndex, columnId));
      if (gr_tariff.getCellReadOnly(rowIndex, columnId)) {
        //readonly일 때 팝업 호출 X
        gr_tariff.setCellStyle(rowIndex, columnId, "cursor", "default");
        return;
      }
      udc_comCode.setSelectId("retrieveWrkPlInfo");
      udc_comCode.cfCommonPopUpAsync(scwin.callBackWrkPl, tmpCdVal, ds_tariff.getCellData(rowIndex, "wrkPlNm"), pWinCloseTF, "7", null, "150,170", null, null, null, null, null, null, null, "F", null);
      break;

    //단위
    case "unitCd":
      udc_comCode.setSelectId("retrieveCommCdInfo");
      udc_comCode.cfCommonPopUpAsync(scwin.callBackUnitCd, ds_tariff.getCellData(rowIndex, "unitCd"), "", pWinCloseTF, "7", null, "150,170", null, "LO102,,", null, null, null, null, null, "F", null);
      break;
    default:
      scwin.divOnviewChange = false;
      break;
  }

  //scwin.pWinCloseTF = "";   //21일 주석처리함.
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
//품목/품명
scwin.callBackComm = function (rtnList) {
  //let curRow = ds_tariff.getRowPosition();

  if (rtnList == null) {
    //[X] 버튼
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "commCd", "");
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "commNm", "");
  } else if (rtnList == "N/A") {
    //[닫기] 버튼
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "commCd", dma_compare.get("commCd"));
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "commNm", dma_compare.get("commNm"));
  } else {
    //코드 선택
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "commCd", rtnList[0]);
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "commNm", rtnList[1]);
    dma_compare.set("commCd", rtnList[0]);
    dma_compare.set("commNm", rtnList[1]);
  }
  if (scwin.pWinCloseTF == "F") {
    // 팝업으로 호출된 경우
    gr_tariff.setFocusedCell(ds_tariff.getRowPosition(), "commNm", true);
  } else {
    // onBlur로 호출된 경우
    gr_tariff.setFocusedCell(ds_tariff.getRowPosition(), "unitCd", true);
  }
  scwin.divOnviewChange = false;
  scwin.pWinCloseTF = "";
};

//단위
scwin.callBackUnitCd = function (rtnList) {
  let curRow = ds_tariff.getRowPosition();
  if (rtnList == null || rtnList == 'N/A') {
    ds_tariff.setCellData(curRow, "unitCd", "");
  } else {
    ds_tariff.setCellData(curRow, "unitCd", rtnList[0]);
    dma_compare.set("unitCd", rtnList[0]);
  }
  if (scwin.pWinCloseTF == "F") {
    // 팝업으로 호출된 경우
    gr_tariff.setFocusedCell(curRow, "unitCd", true);
  } else {
    gr_tariff.setFocusedCell(curRow, "crcCd", false);
  }
  scwin.divOnviewChange = false;
  scwin.pWinCloseTF = "";
};

//작업점소
scwin.callBackDept = function (rtnList) {
  if (rtnList == null) {
    //[X] 버튼
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "lobranCd", "");
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "lobranNm", "");
  } else if (rtnList == "N/A") {
    //[닫기] 버튼
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "lobranCd", dma_compare.get("lobranCd"));
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "lobranNm", dma_compare.get("lobranNm"));
  } else {
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "lobranCd", rtnList[0]);
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "lobranNm", rtnList[1]);
    dma_compare.set("lobranCd", rtnList[0]);
    dma_compare.set("lobranNm", rtnList[1]);
  }
  if (scwin.pWinCloseTF == "F") {
    // 팝업으로 호출된 경우
    gr_tariff.setFocusedCell(ds_tariff.getRowPosition(), "lobranNm", true);
  } else {
    //onblur로 호출된 경우
    if (gr_tariff.getCellReadOnly(ds_tariff.getRowPosition(), "wrkPlNm") == true) {
      gr_tariff.setFocusedCell(ds_tariff.getRowPosition(), "aexpYn", false); //작업단계            
    } else {
      gr_tariff.setFocusedCell(ds_tariff.getRowPosition(), "wrkPlNm", false); //작업장        
    }
  }
  scwin.divOnviewChange = false;
  scwin.pWinCloseTF = "";
};

//출발권역(작업장)
scwin.callBackWrkPl = function (rtnList) {
  if (rtnList == null) {
    //[X] 버튼
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "wrkPlCd", "");
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "wrkPlNm", "");
  } else if (rtnList == "N/A") {
    //[닫기] 버튼
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "wrkPlCd", dma_compare.get("wrkPlCd"));
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "wrkPlNm", dma_compare.get("wrkPlNm"));
  } else {
    //코드 선택
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "wrkPlCd", rtnList[0]);
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "wrkPlNm", rtnList[1]);
    dma_compare.set("wrkPlCd", rtnList[0]);
    dma_compare.set("wrkPlNm", rtnList[1]);
  }
  if (scwin.pWinCloseTF == "F") {
    // 팝업으로 호출된 경우
    gr_tariff.setFocusedCell(ds_tariff.getRowPosition(), "wrkPlNm", true);
  } else {
    // onBlur로 호출된 경우
    gr_tariff.setFocusedCell(ds_tariff.getRowPosition(), "aexpYn", true);
  }
  scwin.divOnviewChange = false;
  scwin.pWinCloseTF = "";
};

//그리드 셀 선택 > 편집 설정
scwin.gr_tariff_oncellclick = function (rowIndex, columnIndex, columnId) {
  console.log("scwin.gr_tariff_oncellclick");
  switch (columnId) {
    case "aexpYn":
    case "ctrtTrf":
      if (ds_tariff.getCellData(rowIndex, "aexpYn") == "1") {
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrf", true);
        ds_tariff.setCellData(rowIndex, "ctrtTrf", "0");
      } else {
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrf", false);
      }
      break;
    case "lobranNm":
      //작업점소(작업장코드)		
      //작업장/물류점소 중에 하나만 입력
      if (ds_tariff.getCellData(rowIndex, "wrkPlNm") == "") {
        //작업장
        gr_tariff.setReadOnly("cell", rowIndex, "lobranNm", false);
        gr_tariff.setReadOnly("cell", rowIndex, "wrkPlNm", true);
      } else {
        gr_tariff.setReadOnly("cell", rowIndex, "lobranNm", true);
        gr_tariff.setReadOnly("cell", rowIndex, "wrkPlNm", false);
      }
      break;
    case "wrkPlNm":
      //작업장(실비)
      //작업장/물류점소 중에 하나만 입력
      if (ds_tariff.getCellData(rowIndex, "lobranNm") == "") {
        //작업점소
        gr_tariff.setReadOnly("cell", rowIndex, "lobranNm", true);
        gr_tariff.setReadOnly("cell", rowIndex, "wrkPlNm", false);
      } else {
        gr_tariff.setReadOnly("cell", rowIndex, "lobranNm", false);
        gr_tariff.setReadOnly("cell", rowIndex, "wrkPlNm", true);
      }
      break;
    default:
      break;
  }
};
scwin.gr_tariff_onafteredit = function (rowIndex, columnIndex, value) {
  scwin.curIdx = rowIndex;
  scwin.colId = gr_tariff.getColumnID(columnIndex);
  if (scwin.colId == "ctrtTrf" && value == "") {
    //요율 디폴트값이 안들어가는 경우 있어서 추가함.
    ds_tariff.setCellData(rowIndex, scwin.colId, "0");
  }
  if (event === undefined || event.key === undefined) return;
  scwin.keyVal = event.key != undefined ? event.key : "";

  //여기서도 ds_tariff_oncelldatachange 호출 ()
  if (scwin.keyVal == "Enter" || scwin.keyVal == "Tab") {
    scwin.ds_tariff_oncelldatachange();
  }
};

//그리드에 바인딩 된 ds_tariff 값 Nm 변경 > 각 셀 cd 값 초기화 
scwin.ds_tariff_oncelldatachange = async function (info) {
  console.log("scwin.ds_tariff_oncelldatachange");
  //let columnId = info == undefined ? scwin.colId : info.colID;
  //let rowIndex = info == undefined ? scwin.curIdx : info.rowIndex;
  // let pWinCloseTF = $c.util.isEmpty(scwin.pWinCloseTF) ? "T" : "F";
  // pWinCloseTF = event.type === "click" ? "F" : "T";
  if (info === undefined) return;
  let columnId = info.colID;
  let rowIndex = info.rowIndex;
  switch (columnId) {
    case "commNm":
      //품목명
      if (ds_tariff.getCellData(rowIndex, columnId) == "") {
        ds_tariff.setCellData(rowIndex, "commCd", "");
      }
      break;
    case "lobranNm":
      //작업점소
      if (ds_tariff.getCellData(rowIndex, columnId) == "") {
        ds_tariff.setCellData(rowIndex, "lobranCd", "");
        gr_tariff.setReadOnly("cell", rowIndex, "lobranNm", false);
        gr_tariff.setReadOnly("cell", rowIndex, "wrkPlNm", false);
      } else {
        gr_tariff.setReadOnly("cell", rowIndex, "lobranNm", false);
        gr_tariff.setReadOnly("cell", rowIndex, "wrkPlNm", true);
      }
      break;
    case "wrkPlNm":
      //작업장
      if (ds_tariff.getCellData(rowIndex, columnId) == "") {
        ds_tariff.setCellData(rowIndex, "wrkPlCd", "");
        gr_tariff.setReadOnly("cell", rowIndex, "lobranNm", false);
        gr_tariff.setReadOnly("cell", rowIndex, "wrkPlNm", false);
      } else {
        gr_tariff.setReadOnly("cell", rowIndex, "lobranNm", true);
        gr_tariff.setReadOnly("cell", rowIndex, "wrkPlNm", false);
      }
      break;
    case "unitCd":
      //단위
      break;
    default:
      break;
  }
};

//저장 버튼
scwin.btn_save_onclick = function (e) {
  scwin.f_Save('');
};

//ds_tariff에 저장된 데이터 Backup
scwin.gr_tariff_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  let curColId = gr_tariff.getColumnID(columnIndex);
  if (ds_tariff.getCellData(rowIndex, curColId) == "") return; //공백은 dma_compare에 저장할 필요 없지.

  switch (curColId) {
    case "commNm":
      //품목품명
      dma_compare.set("commNm", ds_tariff.getCellData(rowIndex, curColId)); //기존품목품명
      dma_compare.set("commCd", ds_tariff.getCellData(rowIndex, "commCd")); //기존품목품명코드
      break;
    case "unitCd":
      //단위
      dma_compare.set("unitCd", ds_tariff.getCellData(rowIndex, curColId)); //단위
      break;
    case "lobranNm":
      //작업점소
      dma_compare.set("lobranNm", ds_tariff.getCellData(rowIndex, curColId)); //작업점소명
      dma_compare.set("lobranCd", ds_tariff.getCellData(rowIndex, "lobranCd")); //작업점소코드
      break;
    case "wrkPlNm":
      //작업장 wrkPlCd(작업장코드)
      dma_compare.set("wrkPlNm", ds_tariff.getCellData(rowIndex, curColId)); //작업점소명
      dma_compare.set("wrkPlCd", ds_tariff.getCellData(rowIndex, "wrkPlCd")); //작업점소코드
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  let fileName = "보관추가요율";
  let sheetTitle = "보관추가요율";

  // gr_tariff.setColumnVisible("wrkPlCd", true);

  await $c.data.downloadGridViewExcel($p, gr_tariff, {
    fileName: fileName + ".xlsx",
    sheetName: sheetTitle,
    hiddenVisible: "true"
  });
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요율항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_selpchItemCd',search:'start',style:'width:200px;',submenuSize:'auto',objType:'data',allOption:'',chooseOption:'',ref:'data:dma_search.selpchItemCd',validExp:'요율항목:yes','ev:onchange':'scwin.acb_selpchItemCd_onchange',visibleRowNum:'20'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_selpchItemCd'},E:[{T:1,N:'w2:label',A:{ref:'selpchItemNm'}},{T:1,N:'w2:value',A:{ref:'selpchItemCd'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'보관-추가요율 등록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',gridID:'gr_tariff',gridUpYn:'N',templateYn:'N',btnPlusYn:'Y',gridDownYn:'Y',btnUser:'N',gridDownUserAuth:'X',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_tariff',id:'gr_tariff',style:'',visibleRowNum:'12',visibleRowNumFix:'true',resize:'true',dataDragDrop:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true',rowStatusVisible:'true',editModeEvent:'onclick','ev:oncellclick':'scwin.gr_tariff_oncellclick',gridName:'보관추가요율','ev:ontextimageclick':'scwin.gr_tariff_ontextimageclick','ev:onviewchange':'scwin.gr_tariff_onviewchange','ev:oncellindexchange':'scwin.gr_tariff_oncellindexchange','ev:onafteredit':'scwin.gr_tariff_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column1',inputType:'text',value:'품목/품명',width:'200'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column17',inputType:'text',value:'단위',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column15',inputType:'text',value:'통화',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column13',inputType:'text',value:'요율',width:'150'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'적용조건',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'요율적용',displayMode:'label'}},{T:1,N:'w2:column',A:{class:'txt-blue',width:'100',inputType:'text',style:'',id:'column19',value:'적용구분',displayMode:'label'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column11',inputType:'text',value:'작업점소',width:'160'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column9',inputType:'text',value:'작업장',width:'160'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column3',inputType:'text',value:'실비',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'textImage',textAlign:'left',width:'200',validExp:'commNm:품명:yes::key',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'textImage',width:'100',textAlign:'left',mandatory:'true',validExp:'unitCd:단위:yes::key',maxLength:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'select',width:'100',textAlign:'left',validExp:'crcCd:통화:yes',mandatory:'true',checkcomboboxVisibleRowNum:'0',visibleRowNum:'10'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtTrf',inputType:'text',textAlign:'right',width:'150',validExp:'ctrtTrf:요율:yes',displayFormat:'#,###.#0',defaultValue:'0',dataType:'float',excelCellType:'number',excelFormat:'#,##0.00',maxLength:'13.2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'strAdptCondCd',value:'',displayMode:'value delim label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'trfAdptCntCd',value:'',displayMode:'value delim label',textAlign:'left',hidden:'true',emptyValue:'""',emptyItem:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'strAdptClsCd',value:'',displayMode:'label',textAlign:'left',hidden:'true',emptyValue:'""',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'textImage',textAlign:'left',width:'160',validExp:'lobranNm:작업점소:no::key'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkPlCd',value:'',displayMode:'label',textAlign:'left',validExp:'wrkPlCd:작업장:no::key',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'textImage',textAlign:'left',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'aexpYn',inputType:'checkbox',width:'70',validExp:'aexpYn::no',valueType:'binary',excelFormat:'#,##0',excelCellType:'number',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spn_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_btGrdBtn',gridID:'gr_tariff',rowAddUserAuth:'C',rowDelUserAuth:'D',btnCancelYn:'Y',btnDelYn:'N',EngYn:'N',btnRowDelYn:'Y',btnRowAddYn:'Y',rowAddFunction:'scwin.f_addRow',btnRowAddObj:'btn_add',btnRowDelObj:'btn_del',btnCancelObj:'btn_cls'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'popupComCode',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%;height:px;display:none;',id:'udc_comCode',btnId:'btn_comCode'}}]}]}]})