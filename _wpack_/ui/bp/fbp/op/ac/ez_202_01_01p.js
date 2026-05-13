/*amd /ui/bp/fbp/op/ac/ez_202_01_01p.xml 94799 5eb5240aacf3d384fa70bb52f8092b4e32454d872eb7752d5d67958115d0ccca */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_master'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'masterIdx',name:'마스터IDX',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDd',name:'등록일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transReqDtlCnt',name:'운송의뢰상세건수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sumQty',name:'총수량',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sumWt',name:'총중량',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sumCbm',name:'총CBM',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDt',name:'등록일시',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modDt',name:'수정일시',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ez112Idx',name:'거래처IDX',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ez108Idx',name:'담당자IDX',dataType:'text'}},{T:1,N:'w2:key',A:{id:'orgFareRate',name:'원청수수료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'picNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'picTel',name:'담당자전화',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ez202Idx',name:'운송의뢰IDX',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'idx1',name:'idx1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'idx2',name:'idx2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'col2',name:'col2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_master',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'masterIdx',name:'마스터IDX',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDd',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transReqDtlCnt',name:'운송의뢰상세건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumQty',name:'총수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumWt',name:'총중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumCbm',name:'총CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDt',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDt',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ez112Idx',name:'거래처IDX',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ez108Idx',name:'담당자IDX',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgFareRate',name:'원청수수료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picTel',name:'담당자전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ez202Idx',name:'운송의뢰IDX',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cargo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'idx',name:'IDX',dataType:'text'}},{T:1,N:'w2:column',A:{id:'masterIdx',name:'마스터IDX',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoType',name:'화물타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoSts',name:'화물상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoIdx',name:'화물번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDd',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarDd',name:'배차일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId2',name:'배차등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picNm',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPos',name:'상차지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPosNm',name:'상차지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPosDistrict',name:'상차지권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPosDistrictCd',name:'상차지권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onDt',name:'상차요청일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onHh',name:'상차요청시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPos',name:'하차지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPosNm',name:'하차지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDt',name:'하차요청일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offHh',name:'하차요청시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPosDistrict',name:'하차지권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPosDistrictCd',name:'하차지권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구운임',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'payReal',name:'실운임',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'defrAmt',name:'지불운임',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'payAdvn',name:'선불운임',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'payDvly',name:'착불운임',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'strAmtDefr',name:'보관금지불처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strAmtClntNmTx',name:'보관금지불처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strAmt',name:'보관금',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cmis',name:'수수료',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rmk',name:'요구사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicNm',name:'상차담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicTel',name:'상차담당전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicNm',name:'하차담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicTel',name:'하차담당전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareCalcTyp',name:'운임계산방법',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goods',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'openYn',name:'공개여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'unit',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'nrm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'initAmt',name:'선수금',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'prePayAmt',name:'선급금',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'ez112Idx',name:'거래처IDX',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realClntNm',name:'실화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'statuss',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onDd',name:'상차일(컨테이너)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDd',name:'하차일(컨테이너)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCo',name:'선사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpNm',name:'선박명항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNo',name:'포트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrBookingNo',name:'부킹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrOrdNo',name:'주문번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSealNo',name:'실번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSiz',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTyp',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrCloseDt',name:'컨테이너마감일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emptyFull',name:'EMPTYFULL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cyCmis',name:'cy수수료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCmisPayfor',name:'상차료대납여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onCmisBilgFareInc',name:'상차료청구운임포함',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onCmis',name:'상차료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmclrncCmis',name:'통관료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offCmis',name:'하차료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payHndlCmis',name:'기타료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmOrdNo',name:'동부ORDNO',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AlloccarFlDelete',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'flIdxs',name:'화물번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flDtlIdxs',name:'화물상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flFlag',name:'화물구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'사용자ID',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Result'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'outMsg',name:'결과메시지',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_amt'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'outMoney',name:'운임',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_udc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'code',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ncall.bp.fbp.op.ac.cmd.CargoMasterCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_master","key":"IN_DS1"},{"id":"ds_cargo","key":"IN_DS2"}]',target:'data:json','ev:submitdone':'scwin.sbm_master_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_AlloccarFlDelete',action:'/ncall.bp.fbp.op.ac.AlloccarFlDeleteCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_AlloccarFlDelete","key":"IN_ALLOCCAR_FL_DELETE"},{"id":"ds_Result","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_Result","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_AlloccarFlDelete_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_amt',action:'/bp.fbp.op.ac.cmd.CalcCargoAmtCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_amt","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_amt","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_amt_submitdone','ev:submiterror':'scwin.sbm_amt_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCargoMaster',action:'/ncall.bp.fbp.op.ac.cmd.RetrieveCargoMasterCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_master","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_master","key":"GAUCE"}]','ev:submitdone':'scwin.sbm_retrieveCargoMaster_submitdone','ev:submiterror':'scwin.sbm_retrieveCargoMaster_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBlkInfo',action:'/ncall.bp.fbp.op.ac.cmd.RetrieveBlkInfoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_cargo","key":"GAUCE"}]','ev:submitdone':'scwin.sbm_retrieveBlkInfo_submitdone','ev:submiterror':'scwin.sbm_retrieveBlkInfo_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCntrInfo',action:'/ncall.bp.fbp.op.ac.cmd.RetrieveCntrInfoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_cargo","key":"GAUCE"}]','ev:submitdone':'scwin.sbm_retrieveCntrInfo_submitdone','ev:submiterror':'scwin.sbm_retrieveCntrInfo_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.OpenParam = "";
scwin.CargoType = "";
scwin.idx = "0-0";
scwin.mode = "";
scwin.idxs = ["0", "0"];
scwin.UserID = "";
scwin.UserName = "";
scwin.vCurDate = "";
scwin.vCurTime = "0000";
scwin.h_consNm = "";
scwin.h_picNm = "";
scwin.h_telNo = "";
scwin.h_clntIdx = "";
scwin.clntIdx = "";
scwin.ez108Idx = "";
scwin.m = "0";
scwin.mm = "";
scwin.cc1 = "";
scwin.m9 = "";
scwin.m11 = "";
scwin.m15 = "";
scwin.m19 = "";
scwin.clntNm_hidden = "";
scwin.onpageload = async function () {};
scwin.onUdcCompleted = async function () {
  const codeOptions = [{
    method: "getComboDTOArray",
    param1: "UNIT",
    param2: $c.data.getMemInfo($p, "userId"),
    compID: "unit"
  }];
  $c.data.setCommonComboUtil($p, codeOptions, scwin.fn_onload);
};

/**
 * @event 
 * @name ondataload 
 * @description 코드 완료
 */
scwin.ondataload = function () {
  //scwin.fn_onload();
};
scwin.fn_onload = async function () {
  apDiv2.hide();
  scwin.params = $c.data.getParameter($p);
  scwin.UserID = $c.data.getMemInfo($p, "userId");
  scwin.UserName = $c.data.getMemInfo($p, "userNm");
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  if ($c.gus.cfIsNull($p, scwin.params.menuInfo)) {
    $c.data.setPopupTitle($p, "운송의뢰접수");
    scwin.initMaster();
    scwin.initCargo();
    grpCloseBox.hide("");
  } else {
    if (!$c.gus.cfIsNull($p, scwin.params)) {
      if (scwin.params["openflag"] != null) {
        scwin.OpenParam = "0";
      }
      if (scwin.params["CargoType"] != null) {
        scwin.CargoType = scwin.params["CargoType"];
      }
      if (scwin.params["idx"] != null && scwin.params["idx"] != "") {
        scwin.idx = scwin.params["idx"];
      }
      if (scwin.params["mode"] != null && scwin.params["mode"] != "") {
        scwin.mode = scwin.params["mode"];
      }
      scwin.idxs = scwin.idx.split("-");
      scwin.m = scwin.idxs[0];
      await scwin.retrieveCarnfo();
    }
  }
};
scwin.retrieveCarnfo = async function () {
  if (!["", "0", undefined].includes(scwin.idxs[0])) {
    let condition_idx1 = scwin.idxs[0];
    let condition_idx2 = scwin.idxs[1];
    let ret = "";
    dma_master.set("ez202Idx", condition_idx1);
    $c.sbm.execute($p, sbm_retrieveCargoMaster);
    dma_condition.set("idx1", condition_idx1);
    dma_condition.set("idx2", condition_idx2);
    if (scwin.mode == "scwin.mode") {
      dma_condition.set("col2", condition_idx2);
    }
    if (scwin.CargoType == "cargo") {
      scwin.cc1 = "blk";
      grp_group10.hide("");
      scwin.fn_gridblkvisibleSetting(true);
      dma_master.set("ez202Idx", condition_idx1);
      $c.sbm.execute($p, sbm_retrieveBlkInfo);
    } else if (scwin.CargoType == "cont") {
      scwin.cc1 = "cntr";
      grp_group10.show("");
      scwin.fn_gridblkvisibleSetting(false);
      scwin.sbm_retrieveCntrInfo_execute(condition_idx1, condition_idx2);
    }
    if (ds_cargo.getRowCount() > 0) {
      clntIdx.setValue(ds_cargo.getCellData(0, "ez112Idx"));
      h_clntIdx.setValue(ds_cargo.getCellData(0, "ez112Idx"));
      let curRow = ds_cargo.getRowPosition();
      m6.setValue(ds_cargo.getCellData(curRow, "picNm"));
      m7.setValue(ds_cargo.getCellData(curRow, "telNo"));
    }
  } else {
    scwin.initMaster();
    scwin.initCargo();
    grpCloseBox.hide("");
  }
};
scwin.sbm_retrieveBlkInfo_execute = async function (idx1, idx2) {
  // TODO: pass idx1, idx2 as parameters to submission
  await $c.sbm.execute($p, sbm_retrieveBlkInfo);
};
scwin.sbm_retrieveCntrInfo_execute = async function (idx1, idx2) {
  // TODO: pass idx1, idx2 as parameters to submission
  await $c.sbm.execute($p, sbm_retrieveCntrInfo);
};
scwin.sbm_retrieveCargoMaster_submitdone = function (e) {};
scwin.sbm_retrieveCargoMaster_submiterror = function (e) {};
scwin.sbm_retrieveBlkInfo_submitdone = function (e) {
  let rowCnt = ds_cargo.getRowCount();
  if (rowCnt > 0) {
    //ds_cargo.setRowPosition(0);
    gr_cargo_blk.setFocusedCell(0, "cargoIdx", false);
    consNm_textbox.setValue(ds_cargo.getCellData(0, "clntNm"));
    consNm_textbox.setDisabled(true);
    if (scwin.idx != "" && scwin.idx != null) {
      let targetRow = parseInt(scwin.idxs[1], 10);
      if (targetRow > 0) {
        //ds_cargo.setRowPosition(targetRow - 1);
        gr_cargo_blk.setFocusedCell(targetRow - 1, "cargoIdx", false);
      }
    }
    if (scwin.mode == "reset") {
      let curRow = ds_cargo.getRowPosition();
      ds_cargo.setRowStatus(curRow, "C");
      dma_master.set("ez202Idx", "");
      ds_cargo.setCellData(curRow, "idx", "");
      ds_cargo.setCellData(curRow, "masterIdx", "");
      ds_cargo.setCellData(curRow, "cargoIdx", "1");
      ds_cargo.setCellData(curRow, "regId2", "");
      ds_cargo.setCellData(curRow, "regId", "");
      ds_cargo.setCellData(curRow, "openYn", "0");
      ica_m3.setValue("");
      ica_m1.setValue(scwin.vCurDate);
      ica_m12.setValue(scwin.vCurDate);
      ica_m16.setValue(scwin.vCurDate);
      ds_cargo.setCellData(curRow, "statuss", "대기");
      ds_cargo.setCellData(curRow, "cargoSts", "1");
    }

    //scwin.syncCargoToForm();
  }
};
scwin.sbm_retrieveBlkInfo_submiterror = function (e) {};
scwin.sbm_retrieveCntrInfo_submitdone = function (e) {
  let rowCnt = ds_cargo.getRowCount();
  if (rowCnt > 0) {
    gr_cargo_blk.setFocusedCell(0, "cargoIdx", false);
    consNm_textbox.setValue(ds_cargo.getCellData(0, "clntNm"));
    consNm_textbox.setDisabled(true);
    if (scwin.idx != "" && scwin.idx != null) {
      let targetRow = parseInt(scwin.idxs[1], 10);
      if (targetRow > 0) {
        ds_cargo.setRowPosition(targetRow - 1);
      }
    }
    if (scwin.mode == "reset") {
      let curRow = ds_cargo.getRowPosition();
      ds_cargo.setRowStatus(curRow, "C");
      dma_master.set("ez202Idx", "");
      ds_cargo.setCellData(curRow, "idx", "");
      ds_cargo.setCellData(curRow, "masterIdx", "");
      ds_cargo.setCellData(curRow, "cargoIdx", "1");
      ds_cargo.setCellData(curRow, "regId2", "");
      ds_cargo.setCellData(curRow, "regId", "");
      ds_cargo.setCellData(curRow, "openYn", "0");
      ica_m3.setValue("");
      ica_m1.setValue(scwin.vCurDate);
      ica_m12.setValue(scwin.vCurDate);
      ica_m16.setValue(scwin.vCurDate);
      ds_cargo.setCellData(curRow, "statuss", "대기");
      ds_cargo.setCellData(curRow, "cargoSts", "1");
    }

    //scwin.syncCargoToForm();
  }
};
scwin.sbm_retrieveCntrInfo_submiterror = function (e) {};

/* 그리드 동적 컬럼 셋팅 
 * @param boolean 벌크여부   
 * @desc true 면 벌크만 보이는 컬럼셋팅 
 *       false 면 컨테이너만 보이는 컬럼셋팅      
 */
scwin.fn_gridblkvisibleSetting = function (boolean) {
  gr_cargo_blk.setColumnVisible("fareCalcTyp", boolean);
  gr_cargo_blk.setColumnVisible("goods", boolean);
  gr_cargo_blk.setColumnVisible("unit", boolean);
  gr_cargo_blk.setColumnVisible("qty", boolean);
  gr_cargo_blk.setColumnVisible("nrm", boolean);
  gr_cargo_blk.setColumnVisible("initAmt", boolean);
  gr_cargo_blk.setColumnVisible("prePayAmt", boolean);
  gr_cargo_blk.setColumnVisible("cstmclrncCmis", !boolean);
  gr_cargo_blk.setColumnVisible("onCmis", !boolean);
  gr_cargo_blk.setColumnVisible("offCmis", !boolean);
  gr_cargo_blk.setColumnVisible("shpCo", !boolean);
  gr_cargo_blk.setColumnVisible("shpNm", !boolean);
  gr_cargo_blk.setColumnVisible("portNo", !boolean);
  gr_cargo_blk.setColumnVisible("cntrBookingNo", !boolean);
  gr_cargo_blk.setColumnVisible("cntrOrdNo", !boolean);
  gr_cargo_blk.setColumnVisible("cntrNo", !boolean);
  gr_cargo_blk.setColumnVisible("cntrSealNo", !boolean);
  gr_cargo_blk.setColumnVisible("cntrSiz", !boolean);
  gr_cargo_blk.setColumnVisible("cntrTyp", !boolean);
  gr_cargo_blk.setColumnVisible("cntrCloseDt", !boolean);
  gr_cargo_blk.setColumnVisible("emptyFull", !boolean);
  gr_cargo_blk.setColumnVisible("cyCmis", !boolean);
  gr_cargo_blk.setColumnVisible("payCmisPayfor", !boolean);
  gr_cargo_blk.setColumnVisible("onCmisBilgFareInc", !boolean);
  gr_cargo_blk.setColumnVisible("payHndlCmis", !boolean);
};
scwin.syncCargoToForm = function () {
  let row = ds_cargo.getRowPosition();
  if (row < 0) return;
  scwin.m = ds_cargo.getCellData(row, "masterIdx");
  scwin.cc1 = ds_cargo.getCellData(row, "cargoType");
  ica_m1.setValue(ds_cargo.getCellData(row, "regDd"));
  m2.setValue(ds_cargo.getCellData(row, "regId"));
  ica_m3.setValue(ds_cargo.getCellData(row, "alloccarDd"));
  m4.setValue(ds_cargo.getCellData(row, "regId2"));
  consNm_textbox.setValue(ds_cargo.getCellData(row, "clntNm"));
  m6.setValue(ds_cargo.getCellData(row, "picNm"));
  m7.setValue(ds_cargo.getCellData(row, "telNo"));
  m8.setValue(ds_cargo.getCellData(row, "onPos"));
  allAddr_textbox.setValue(ds_cargo.getCellData(row, "onPosNm"));
  m10.setValue(ds_cargo.getCellData(row, "onPosDistrict"));
  scwin.m11 = ds_cargo.getCellData(row, "onPosDistrictCd");
  if (scwin.cc1 == "blk") {
    ica_m12.setValue(ds_cargo.getCellData(row, "onDt"));
  } else {
    ica_m12.setValue(ds_cargo.getCellData(row, "onDd"));
  }
  m13.setValue(ds_cargo.getCellData(row, "onHh"));
  m14.setValue(ds_cargo.getCellData(row, "offPos"));
  allAddr2_textbox.setValue(ds_cargo.getCellData(row, "offPosNm"));
  if (scwin.cc1 == "blk") {
    ica_m16.setValue(ds_cargo.getCellData(row, "offDt"));
  } else {
    ica_m16.setValue(ds_cargo.getCellData(row, "offDd"));
  }
  m17.setValue(ds_cargo.getCellData(row, "offHh"));
  m18.setValue(ds_cargo.getCellData(row, "offPosDistrict"));
  scwin.m19 = ds_cargo.getCellData(row, "offPosDistrictCd");
  m20.setValue(ds_cargo.getCellData(row, "bilgAmt"));
  m22.setValue(ds_cargo.getCellData(row, "defrAmt"));
  m23.setValue(ds_cargo.getCellData(row, "payAdvn"));
  m24.setValue(ds_cargo.getCellData(row, "payDvly"));
  scwin.clntNm_hidden = ds_cargo.getCellData(row, "strAmtDefr");
  clntNm_textbox.setValue(ds_cargo.getCellData(row, "strAmtClntNmTx"));
  m26.setValue(ds_cargo.getCellData(row, "strAmt"));
  m27.setValue(ds_cargo.getCellData(row, "cmis"));
  m28.setValue(ds_cargo.getCellData(row, "rmk"));
  m29.setValue(ds_cargo.getCellData(row, "onPicNm"));
  m30.setValue(ds_cargo.getCellData(row, "onPicTel"));
  m31.setValue(ds_cargo.getCellData(row, "offPicNm"));
  m32.setValue(ds_cargo.getCellData(row, "offPicTel"));
  txt_realClntNm.setValue(ds_cargo.getCellData(row, "realClntNm"));
  if (scwin.cc1 == "blk") {
    b1.setValue(ds_cargo.getCellData(row, "fareCalcTyp"));
    b2.setValue(ds_cargo.getCellData(row, "goods"));
    b3.setValue(ds_cargo.getCellData(row, "wt"));
    unit.setValue(ds_cargo.getCellData(row, "unit"));
    b5.setValue(ds_cargo.getCellData(row, "qty"));
    b6.setValue(ds_cargo.getCellData(row, "nrm"));
    b7.setValue(ds_cargo.getCellData(row, "initAmt"));
    b8.setValue(ds_cargo.getCellData(row, "prePayAmt"));
  }
  if (scwin.cc1 == "cntr") {
    c1.setValue(ds_cargo.getCellData(row, "shpCo"));
    c2.setValue(ds_cargo.getCellData(row, "shpNm"));
    c3.setValue(ds_cargo.getCellData(row, "portNo"));
    c4.setValue(ds_cargo.getCellData(row, "cntrBookingNo"));
    c5.setValue(ds_cargo.getCellData(row, "dmOrdNo"));
    c6.setValue(ds_cargo.getCellData(row, "cntrNo"));
    c7.setValue(ds_cargo.getCellData(row, "cntrSealNo"));
    c8.setValue(ds_cargo.getCellData(row, "cntrSiz"));
    c18.setValue(ds_cargo.getCellData(row, "cntrTyp"));
    ica_c9.setValue(ds_cargo.getCellData(row, "cntrCloseDt"));
    c11.setValue(ds_cargo.getCellData(row, "cyCmis"));
    c14.setValue(ds_cargo.getCellData(row, "onCmis"));
    c15.setValue(ds_cargo.getCellData(row, "cstmclrncCmis"));
    c16.setValue(ds_cargo.getCellData(row, "offCmis"));
    c17.setValue(ds_cargo.getCellData(row, "payHndlCmis"));
    txt_cntrWt.setValue(ds_cargo.getCellData(row, "wt"));
    b7.setValue(ds_cargo.getCellData(row, "initAmt"));
    b8.setValue(ds_cargo.getCellData(row, "prePayAmt"));
  }
  scwin.h_clntIdx = ds_cargo.getCellData(row, "ez112Idx");
};
scwin.syncFormToCargo = function () {
  let row = ds_cargo.getRowPosition();
  if (row < 0) return;
  ds_cargo.setCellData(row, "masterIdx", scwin.m);
  ds_cargo.setCellData(row, "cargoType", scwin.cc1);
  ds_cargo.setCellData(row, "regDd", ica_m1.getValue());
  ds_cargo.setCellData(row, "regId", m2.getValue());
  ds_cargo.setCellData(row, "alloccarDd", ica_m3.getValue());
  ds_cargo.setCellData(row, "regId2", m4.getValue());
  ds_cargo.setCellData(row, "clntNm", consNm_textbox.getValue());
  ds_cargo.setCellData(row, "picNm", m6.getValue());
  ds_cargo.setCellData(row, "telNo", m7.getValue());
  ds_cargo.setCellData(row, "onPos", m8.getValue());
  ds_cargo.setCellData(row, "onPosNm", allAddr_textbox.getValue());
  ds_cargo.setCellData(row, "onPosDistrict", m10.getValue());
  ds_cargo.setCellData(row, "onPosDistrictCd", scwin.m11);
  if (scwin.cc1 == "blk") {
    ds_cargo.setCellData(row, "onDt", ica_m12.getValue());
  } else {
    ds_cargo.setCellData(row, "onDd", ica_m12.getValue());
  }
  ds_cargo.setCellData(row, "onHh", m13.getValue());
  ds_cargo.setCellData(row, "offPos", m14.getValue());
  ds_cargo.setCellData(row, "offPosNm", allAddr2_textbox.getValue());
  if (scwin.cc1 == "blk") {
    ds_cargo.setCellData(row, "offDt", ica_m16.getValue());
  } else {
    ds_cargo.setCellData(row, "offDd", ica_m16.getValue());
  }
  ds_cargo.setCellData(row, "offHh", m17.getValue());
  ds_cargo.setCellData(row, "offPosDistrict", m18.getValue());
  ds_cargo.setCellData(row, "offPosDistrictCd", scwin.m19);
  ds_cargo.setCellData(row, "bilgAmt", m20.getValue());
  ds_cargo.setCellData(row, "defrAmt", m22.getValue());
  ds_cargo.setCellData(row, "payAdvn", m23.getValue());
  ds_cargo.setCellData(row, "payDvly", m24.getValue());
  ds_cargo.setCellData(row, "strAmtDefr", scwin.clntNm_hidden);
  ds_cargo.setCellData(row, "strAmtClntNmTx", clntNm_textbox.getValue());
  ds_cargo.setCellData(row, "strAmt", m26.getValue());
  ds_cargo.setCellData(row, "cmis", m27.getValue());
  ds_cargo.setCellData(row, "rmk", m28.getValue());
  ds_cargo.setCellData(row, "onPicNm", m29.getValue());
  ds_cargo.setCellData(row, "onPicTel", m30.getValue());
  ds_cargo.setCellData(row, "offPicNm", m31.getValue());
  ds_cargo.setCellData(row, "offPicTel", m32.getValue());
  ds_cargo.setCellData(row, "realClntNm", txt_realClntNm.getValue());
  ds_cargo.setCellData(row, "ez112Idx", scwin.h_clntIdx);
  if (scwin.cc1 == "blk") {
    ds_cargo.setCellData(row, "fareCalcTyp", b1.getValue());
    ds_cargo.setCellData(row, "goods", b2.getValue());
    ds_cargo.setCellData(row, "wt", b3.getValue());
    ds_cargo.setCellData(row, "unit", unit.getValue());
    ds_cargo.setCellData(row, "qty", b5.getValue());
    ds_cargo.setCellData(row, "nrm", b6.getValue());
    ds_cargo.setCellData(row, "initAmt", b7.getValue());
    ds_cargo.setCellData(row, "prePayAmt", b8.getValue());
  }
  if (scwin.cc1 == "cntr") {
    ds_cargo.setCellData(row, "shpCo", c1.getValue());
    ds_cargo.setCellData(row, "shpNm", c2.getValue());
    ds_cargo.setCellData(row, "portNo", c3.getValue());
    ds_cargo.setCellData(row, "cntrBookingNo", c4.getValue());
    ds_cargo.setCellData(row, "dmOrdNo", c5.getValue());
    ds_cargo.setCellData(row, "cntrNo", c6.getValue());
    ds_cargo.setCellData(row, "cntrSealNo", c7.getValue());
    ds_cargo.setCellData(row, "cntrSiz", c8.getValue());
    ds_cargo.setCellData(row, "cntrTyp", c18.getValue());
    ds_cargo.setCellData(row, "cntrCloseDt", ica_c9.getValue());
    ds_cargo.setCellData(row, "cyCmis", c11.getValue());
    ds_cargo.setCellData(row, "onCmis", c14.getValue());
    ds_cargo.setCellData(row, "cstmclrncCmis", c15.getValue());
    ds_cargo.setCellData(row, "offCmis", c16.getValue());
    ds_cargo.setCellData(row, "payHndlCmis", c17.getValue());
    ds_cargo.setCellData(row, "wt", txt_cntrWt.getValue());
    ds_cargo.setCellData(row, "initAmt", b7.getValue());
    ds_cargo.setCellData(row, "prePayAmt", b8.getValue());
  }
};
scwin.initMaster = function () {
  dma_master.setEmptyValue();
  ds_master.removeAll();
  ds_master.insertRow();
};
scwin.initCargo = function () {
  ds_cargo.removeAll();
};
scwin.initAmt = function () {
  ds_amt.removeAll();
};
scwin.newinput = function () {
  //$c.win.openMenu("운송의뢰 화면", "/ui/bp/fbp/op/ac/ez_202_01_01p.xml", "ez_202_01_01p.xml", {CargoType: "", idx: ""});
  scwin.CargoType = "";
  scwin.idxs = "";
  m1.setDisabled(false);
  consNm_textbox.setDisabled(false);
  grp_group10.show("");
  apDiv2.hide("");
};

//신규버튼 클릭
scwin.btn_clear_onclick = function (e) {
  scwin.newinput();
  scwin.retrieveCarnfo();
};
scwin.savethis = async function () {
  //scwin.syncFormToCargo();    
  if (ds_master.getRowCount() == 0 || ds_cargo.getRowCount() == 0) {
    await $c.win.alert($p, "화주 및 화물 정보를 입력해주세요.");
    return false;
  }
  if (ds_cargo.getRowCount() == 0) {
    await $c.win.alert($p, "화주 및 화물 정보를 입력해주세요.");
    return false;
  }
  let m12Val = ica_m12.getValue();
  let m16Val = ica_m16.getValue();
  if (m12Val > m16Val && m16Val != "") {
    await $c.win.alert($p, "상/하차 일자가 잘못되었습니다.");
    return;
  }
  let sumQty = 0;
  let sumWt = 0;
  let sumCbm = 0;
  if (scwin.cc1 == "blk") {
    for (let i = 0; i < ds_cargo.getRowCount(); i++) {
      sumQty = sumQty + Number(ds_cargo.getCellData(i, "qty"));
      sumWt = sumWt + Number(ds_cargo.getCellData(i, "wt"));
      sumCbm = sumCbm + Number(ds_cargo.getCellData(i, "nrm"));
    }
  }
  ds_master.setCellData(0, "sumQty", sumQty);
  ds_master.setCellData(0, "sumWt", sumWt);
  ds_master.setCellData(0, "sumCbm", sumCbm);
  ds_master.setCellData(0, "transReqDtlCnt", ds_cargo.getRowCount());
  ds_master.setCellData(0, "picNm", ds_cargo.getCellData(0, "picNm"));
  ds_master.setCellData(0, "picTel", ds_cargo.getCellData(0, "telNo"));
  let now = new Date();
  let mils = now.getMilliseconds();
  ds_master.setCellData(0, "regDt", mils);
  let cnt = 0;
  for (let i = 0; i < ds_cargo.getRowCount(); i++) {
    let rowStatus = ds_cargo.getRowStatus(i);
    if (rowStatus == "D") {
      cnt++;
    }
    if (ds_cargo.getCellData(i, "cargoSts") != "1") {
      if (rowStatus == "D" || rowStatus == "U") {
        await $c.win.alert($p, "배차 혹은 용차상태의 화물은 수정 및 삭제가 불가능합니다.");
        ds_cargo.undoRow(i);
        return false;
      }
    }
  }
  if (cnt > 0) {
    await scwin.deletefl();
  }
  let cnt2 = 0;
  for (let i = 0; i < ds_cargo.getRowCount(); i++) {
    let rowStatus = ds_cargo.getRowStatus(i);
    if (rowStatus != "R") {
      cnt2++;
    }
  }
  if (cnt2 == 0) {
    return false;
  }
  if (scwin.mode == "reset") {
    for (let i = 0; i < ds_cargo.getRowCount(); i++) {
      ds_cargo.setRowStatus(i, "C");
    }
  }
  let ret = "";
  ret = await $c.sbm.execute($p, sbm_master);
  console.log("sbm_master after");
};
scwin.btn_save_onclick = function (e) {
  scwin.savethis();
};
scwin.deletethis = async function () {
  if (ds_master.getRowCount() == 0 || ds_cargo.getRowCount() == 0) {
    await $c.win.alert($p, "화물정보가 없습니다.");
    return false;
  }
  let cnt = 0;
  for (let i = 0; i < ds_cargo.getRowCount(); i++) {
    if (ds_cargo.getCellData(i, "cargoSts") != "1") {
      await $c.win.alert($p, "배차 혹은 용차상태의 화물은 삭제가 불가능합니다.");
      ds_cargo.undoRow(i);
      return false;
    }
  }
  if (cnt > 0) {
    await $c.win.alert($p, "대기중인 화물만 삭제할수 있습니다.");
  } else {
    let chk = await $c.win.confirm($p, "삭제하시겠습니까?");
    if (chk) {
      await scwin.deletefl();
      if (scwin.OpenParam == "0") {
        scwin.reflashdata();
      } else {
        scwin.newinput();
      }
    }
  }
};
scwin.btn_delete_onclick = async function (e) {
  await scwin.deletethis();
};
scwin.deletefl = async function () {
  let vFlIdxs;
  let vFlFlag;
  let vUserId;
  if (scwin.cc1 == "blk") {
    vFlFlag = "1";
  } else {
    vFlFlag = "2";
  }
  vFlIdxs = "";
  for (let i = 0; i < ds_cargo.getRowCount(); i++) {
    let rowStatus = ds_cargo.getRowStatus(i);
    if (rowStatus == "D") {
      vFlIdxs += ds_cargo.getCellData(i, "idx") + ",";
      if (ds_cargo.getCellData(i, "statuss") != "대기") {
        await $c.win.alert($p, "[TMS오류]배차된 화물을 삭제할 수 없습니다. 배차 취소 후 삭제 가능합니다.");
        scwin.reflashdata();
        return;
      }
    }
  }
  vFlIdxs = vFlIdxs.substring(0, vFlIdxs.length - 1);
  vUserId = scwin.UserID;
  ds_AlloccarFlDelete.removeAll();
  let loop = vFlIdxs.replace(/-/g, ",");
  let loopArr = loop.split(",");
  for (let i = 0; i < loopArr.length; i += 2) {
    let newRow = ds_AlloccarFlDelete.insertRow();
    ds_AlloccarFlDelete.setCellData(newRow, "flIdxs", loopArr[i]);
    if (i + 1 < loopArr.length) {
      ds_AlloccarFlDelete.setCellData(newRow, "flDtlIdxs", loopArr[i + 1]);
    }
    ds_AlloccarFlDelete.setCellData(newRow, "flFlag", vFlFlag);
    ds_AlloccarFlDelete.setCellData(newRow, "userId", vUserId);
  }
  await $c.sbm.execute($p, sbm_AlloccarFlDelete);
};
scwin.sbm_AlloccarFlDelete_submitdone = async function (e) {
  let curRow = ds_Result.getRowCount() - 1;
  if (curRow < 0 || ds_Result.getCellData(curRow, "outMsg") == null || ds_Result.getCellData(curRow, "outMsg") == "") {
    await $c.win.alert($p, "화물삭제 처리중 장애가 발생하였습니다.");
  } else {
    debugger;
    await $c.win.alert($p, ds_Result.getCellData(curRow, "outMsg"));
    await $c.sbm.execute($p, sbm_master);
  }
};
scwin.reflashdata = function () {
  scwin.retrieveCarnfo();
};
scwin.cType = async function (str) {
  scwin.cc1 = str;
  await scwin.addDataRow();
  if (str == "blk") {
    blk1.addClass("req");
    blk2.addClass("req");
  } else if (str == "cntr") {
    blk1.removeClass("req");
    blk2.removeClass("req");
  }
  ica_m1.setValue(scwin.vCurDate);
  m2.setValue(scwin.UserName);
  ica_m12.setValue(scwin.vCurDate);
  ica_m16.setValue(scwin.vCurDate);
  m13.setValue("0000");
  m17.setValue("0000");
  ds_cargo.setCellData(ds_cargo.getRowPosition(), "statuss", "대기");
};
scwin.addDataRow = async function () {
  if (scwin.cc1 != "") {
    if (ds_cargo.getRowCount() > 0) {
      //scwin.syncFormToCargo();                        
      let newRow = ds_cargo.insertRow();
      gr_cargo_blk.setFocusedCell(newRow, 0, false);
      ds_cargo.setCellData(newRow, "masterIdx", ds_cargo.getCellData(newRow - 1, "masterIdx"));
      ds_cargo.setCellData(newRow, "ez112Idx", ds_cargo.getCellData(newRow - 1, "ez112Idx"));
      ds_cargo.setCellData(newRow, "cargoIdx", String(Number(ds_cargo.getCellData(newRow - 1, "cargoIdx")) + 1));
      ds_cargo.setCellData(newRow, "clntNm", ds_cargo.getCellData(newRow - 1, "clntNm"));
      ds_cargo.setCellData(newRow, "picNm", ds_cargo.getCellData(newRow - 1, "picNm"));
      ds_cargo.setCellData(newRow, "telNo", ds_cargo.getCellData(newRow - 1, "telNo"));
      ds_cargo.setCellData(newRow, "regId", ds_cargo.getCellData(newRow - 1, "regId"));
      ds_cargo.setCellData(newRow, "cargoType", ds_cargo.getCellData(newRow - 1, "cargoType"));
    } else {
      scwin.initMaster();
      scwin.initCargo();
      let newRow = ds_cargo.insertRow();
      ds_cargo.setCellData(newRow, "masterIdx", ds_cargo.getCellData(0, "masterIdx"));
      ds_cargo.setCellData(newRow, "cargoIdx", "1");
      ds_cargo.setCellData(newRow, "cargoType", scwin.cc1);
      gr_cargo_blk.setFocusedCell(newRow, 0, false);
    }
    ica_m1.setValue(scwin.vCurDate);
    ica_m12.setValue(scwin.vCurDate);
    ica_m16.setValue(scwin.vCurDate);
    m13.setValue("0000");
    m17.setValue("0000");
    ds_cargo.setCellData(ds_cargo.getRowPosition(), "statuss", "대기");
    ds_cargo.setCellData(ds_cargo.getRowPosition(), "cargoSts", "1");
  } else {
    await $c.win.alert($p, "화물형태를 선택해주세요");
  }
};
scwin.btn_trigger7_onclick = async function (e) {
  await scwin.addDataRow();
};
scwin.delDataRow = async function () {
  let curRow = ds_cargo.getRowPosition();
  if (curRow < 0) return;
  let rowStatus = ds_cargo.getRowStatus(curRow);
  if (rowStatus == "D") {
    ds_cargo.deleteRow(curRow);
    return false;
  } else if (ds_cargo.getRowCount() > 0) {
    if (ds_cargo.getCellData(curRow, "statuss") != "대기") {
      await $c.win.alert($p, "대기상태의 화물만 삭제 가능합니다.");
    }
  }
  if (ds_cargo.getRowCount() == 1) {
    await $c.win.alert($p, "화물정보를 모두 삭제하실때에는 상단의 [삭제하기]버튼을 눌러주세요.");
  }
};
scwin.btn_trigger8_onclick = async function (e) {
  await scwin.delDataRow();
};
scwin.btn_trigger9_onclick = function (e) {
  let gridVisible = gr_cargo_blk.getVisible();
  gr_cargo_blk.setVisible(!gridVisible);
};
scwin.calcAmt = async function () {
  if (b1.getValue() == "0" || b1.getValue() == "") {
    await $c.win.alert($p, "운임계산 유형을 선택해주세요.");
  } else {
    // TODO: pass parameters to sbm_amt action URL or as submission parameters
    await $c.sbm.execute($p, sbm_amt);
  }
};
scwin.sbm_amt_submitdone = async function (e) {
  if (ds_amt.getRowCount() > 0) {
    // m21 was commented out in original
  } else {
    await $c.win.alert($p, "운임계산에 실패했습니다.");
  }
};
scwin.sbm_amt_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.getClnt = function () {
  let curRow = ds_cargo.getRowPosition();
  if (curRow < 0) return;
  ds_cargo.setCellData(curRow, "clntNm", consNm_textbox.getValue());
  ds_cargo.setCellData(curRow, "picNm", m6.getValue());
  ds_cargo.setCellData(curRow, "telNo", m7.getValue());
};
scwin.openTransfer = async function () {
  let sUrl = "/ui/bp/fbp/op/ac/ez_202_01_03p.xml";
  let paramObj = {
    cargoType: scwin.cc1
  };
  if (scwin.h_clntIdx != "") {
    paramObj.ez112Idx = scwin.h_clntIdx;
  }
  if (consNm_textbox.getValue() != "") {
    paramObj.consNm = consNm_textbox.getValue();
  }
  await $c.win.openPopup($p, sUrl, {
    width: 670,
    height: 300,
    modal: true,
    data: paramObj
  });
};
scwin.btn_trigger1_onclick = async function (e) {
  await scwin.openTransfer();
};
scwin.openUrp = async function () {
  if (scwin.h_clntIdx == "" || consNm_textbox.getValue() == "") {
    await $c.win.alert($p, "화주정보를 먼저 선택해주세요.");
  } else {
    let paramObj = {
      consNm: consNm_textbox.getValue(),
      consIdx: scwin.h_clntIdx,
      consPic: m6.getValue(),
      consTel: m7.getValue()
    };
    let sUrl = "/ui/bp/fbp/op/ac/ez_202_01_04p.xml";
    await $c.win.openPopup($p, sUrl, {
      width: 670,
      height: 550,
      modal: true,
      data: paramObj
    });
  }
};
scwin.btn_trigger2_onclick = async function (e) {
  await scwin.openUrp();
};
scwin.sbm_master_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code > 0) {
    await $c.win.alert($p, "성공적으로 저장되었습니다.");
  }
  if (scwin.OpenParam == "0") {
    scwin.reflashdata();
  } else {
    scwin.newinput();
    scwin.initMaster();
    scwin.initCargo();
    grpCloseBox.hide("");
  }
};
scwin.gr_cargo_blk_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex < 0) return;
  let unitVal = ds_cargo.getCellData(rowIndex, "unit");
  unit.setValue(unitVal);
  //scwin.syncCargoToForm();
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};

//화물형태 타입 변경
scwin.m1_onchange = function (info) {
  m1.setDisabled(true);
  if (m1.getValue() == "cntr") {
    //컨테이너 선택시 hide
    apDiv6.hide("");
    blkDt1.hide("");
    apDiv2.show("");
    grp_group10.hide("");
    scwin.fn_gridblkvisibleSetting(false);
    scwin.cType('cntr');
  } else {
    apDiv6.show("");
    blkDt1.show("");
    grp_group10.hide("");
    apDiv2.hide("");
    scwin.fn_gridblkvisibleSetting(true);
    scwin.cType('blk');
  }
};
scwin.MM_showHideLayers = function () {
  var i,
    p,
    v,
    obj,
    args = MM_showHideLayers.arguments;
  for (i = 0; i < args.length - 2; i += 3) with (document) if (getElementById && (obj = getElementById(args[i])) != null) {
    v = args[i + 2];
    if (obj.style) {
      obj = obj.style;
      v = v == 'show' ? 'visible' : v == 'hide' ? 'hidden' : v;
    }
    obj.visibility = v;
  }
  if (document.getElementById("apDiv1").style.visibility == 'visible') {
    apDiv6.hide("");
    blkDt1.hide("");
    document.getElementById("apDiv6").style.display = 'block';
    document.getElementById("blkDt1").style.display = 'block';
    document.getElementById("blkDt2").style.display = 'block';
    document.getElementById("apDiv7").style.display = 'none';
    document.getElementById("apDiv8").style.display = 'none';
  } else {
    document.getElementById("apDiv6").style.display = 'none';
    document.getElementById("blkDt1").style.display = 'none';
    document.getElementById("blkDt2").style.display = 'none';
    document.getElementById("apDiv7").style.display = 'none';
    document.getElementById("apDiv8").style.display = 'none';
  }
};
scwin.btn_gridView_onclick = function (e) {
  if (grp_group10._getVisible()) {
    grp_group10.hide("");
  } else {
    grp_group10.show("");
  }
};

//그리드 cargoType formatter
scwin.fn_gridCargoTypeFormatter = function (value) {
  return value == "blk" ? "벌크" : "컨테이너";
};

//거래처번호
scwin.clntIdx_onchange = function (info) {
  scwin.getClnt();
};

//전화번호 
scwin.m7_onblur = function (e) {
  $c.data.PhoneChk($p, m7.getValue());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_common_textbox',type:'page',variableClone:'',src:'/cm/udc/common_textbox.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ncall-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ncall nc17',id:'btn_clear',style:'',title:'운송차량',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ncall nc20',id:'btn_save',style:'',title:'운송차량',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ncall nc18',id:'btn_delete',style:'',title:'운송차량',type:'button','ev:onclick':'scwin.btn_delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제하기'}]}]}]},{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:170px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:170px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물형태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{ref:'data:ds_cargo.cargoType',appearance:'full',style:'',id:'m1',renderType:'radiogroup',rows:'',class:'',cols:'',selectedIndex:'-1',value:'-1','ev:onviewchange':'scwin.m1_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'blk'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'cntr'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'등록일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'',id:'ica_m1',class:'tac',calendarValueType:'yearMonthDate',ref:'data:ds_cargo.regDd'}},{T:1,N:'xf:input',A:{style:'width:200px;',id:'m2',placeholder:'',class:'',ref:'data:ds_cargo.regId',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'openYn',ref:'data:ds_cargo.openYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화물정보 공개Pool등록'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_m3',pickerType:'dynamic',style:'',ref:'data:ds_cargo.alloccarDd'}},{T:1,N:'xf:input',A:{class:'',id:'m4',placeholder:'',style:'width:200px;',ref:'data:ds_cargo.regId2',readOnly:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:90px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:90px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'apDiv6',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'벌크 운송운임 계산',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'b1',ref:'data:ds_cargo.fareCalcTyp',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',value:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'없음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'구간'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'합산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조합'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'화주정보',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'화주',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_common_textbox',A:{columnIdList:'consNm,picNm,telNo,orgFareRate',compList:'m6,m7,mm,clntIdx,ez108Idx,h_consNm,h_picNm,h_telNo,h_clntIdx',gridHeadTitle:'거래처명,담당자명,전화번호,원청수수료',id:'consNm_textbox',nameId:'consNm',refDataCollection:'ds_cargo',selectID:'Consignor',style:'width:100%; height:px; ',widthList:'150,100,100,100',name:'clntNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'mm',placeholder:'',ref:'',style:'display: none;'}},{T:1,N:'xf:input',A:{class:'',id:'clntIdx',placeholder:'',ref:'',style:'display: none;','ev:onchange':'scwin.clntIdx_onchange'}},{T:1,N:'xf:input',A:{class:'',id:'ez108Idx',placeholder:'',ref:'',style:'display: none;'}},{T:1,N:'xf:input',A:{class:'',id:'h_consNm',placeholder:'',ref:'',style:'display: none;'}},{T:1,N:'xf:input',A:{class:'',id:'h_picNm',placeholder:'',ref:'',style:'display: none;'}},{T:1,N:'xf:input',A:{class:'',id:'h_telNo',placeholder:'',ref:'',style:'display: none;'}},{T:1,N:'xf:input',A:{class:'',id:'h_clntIdx',placeholder:'',ref:'data:ds_cargo.ez112Idx',style:'display: none;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'담당자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'m6',placeholder:'',style:'',ref:'data:ds_cargo.picNm',maxlength:'20'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'전화번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'m7',placeholder:'',style:'',ref:'data:ds_cargo.telNo',maxlength:'20',allowChar:'0-9','ev:onblur':'scwin.m7_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'8'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상하차지<br/>정보',class:'',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차지',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'m8',placeholder:'',style:'',ref:'data:ds_cargo.onPos',maxlength:'100'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차권역코드',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'m10',placeholder:'',style:'',ref:'data:ds_cargo.onPosDistrict',maxlength:'100',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'blk1',label:'상차지역',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_common_textbox',A:{columnIdList:'allAddr,areaCd,zip',selectID:'Pos',nameId:'allAddr',style:'width:100%; height:px; ',compList:'allAddr,areaCd,zip',gridHeadTitle:'주소',widthList:'300',id:'allAddr_textbox',refDataCollection:'ds_cargo',name:'onPosNm',code:'onPosDistrict '}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차지담당',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'m29',placeholder:'',style:'',ref:'data:ds_cargo.onPicNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차지전화',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'m30',placeholder:'',style:'',ref:'data:ds_cargo.onPicTel',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'blk2',label:'상차일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'tac',id:'ica_m12',pickerType:'dynamic',style:'',ref:'data:ds_cargo.onDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차시간',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tac',dataType:'time',id:'m13',style:'width: 50px;',applyFormat:'all',ref:'data:ds_cargo.onHh'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차지',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'m14',placeholder:'',style:'',ref:'data:ds_cargo.offPos'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차권역코드',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'m18',placeholder:'',style:'',ref:'data:ds_cargo.offPosDistrict',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차지역',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_common_textbox',A:{code:'offPosDistrict',columnIdList:'allAddr,areaCd,zip',compList:'allAddr,areaCd,zip',gridHeadTitle:'주소',id:'allAddr2_textbox',name:'offPosNm',nameId:'allAddr',refDataCollection:'ds_cargo',selectID:'Pos',style:'width:100%; height:px; ',widthList:'300'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차지담당',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'m31',placeholder:'',style:'',ref:'data:ds_cargo.offPicNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차지전화',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'m32',placeholder:'',style:'',ref:'data:ds_cargo.offPicTel',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'tac',id:'ica_m16',pickerType:'dynamic',style:'',ref:'data:ds_cargo.offDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차시간',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tac',dataType:'time',id:'m17',style:'width: 50px;',applyFormat:'all',ref:'data:ds_cargo.offHh'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:90px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:90px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'blkDt1',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'화물정보',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:90px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:90px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'화물품명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'b2',placeholder:'',style:'',ref:'data:ds_cargo.goods'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'중량',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'b3',placeholder:'',class:'tar',ref:'data:ds_cargo.wt',displayFormat:'#,###.##',dataType:'number'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Kg',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수량',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'width:80px;',allOption:'',id:'unit',class:'flex_no',direction:'auto',chooseOptionLabel:'--',ref:'data:ds_cargo.unit',displayMode:'label'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:input',A:{style:'',id:'b5',placeholder:'',class:'tar',ref:'data:ds_cargo.qty',dataType:'number',displayFormat:'#,###'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'CBM',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'b6',placeholder:'',style:'',ref:'data:ds_cargo.nrm'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'청구',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'운임',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'tar',id:'m20',placeholder:'',style:'',ref:'data:ds_cargo.bilgAmt',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'실화주명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_realClntNm',placeholder:'',style:'',ref:'data:ds_cargo.realClntNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'차량운임',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지불운임',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'m22',placeholder:'',style:'',ref:'data:ds_cargo.defrAmt',displayFormat:'#,##0',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td bl0',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'선불운임',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'m23',placeholder:'',style:'',ref:'data:ds_cargo.payAdvn',displayFormat:'#,##0',dataType:'number'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'착불운임',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'m24',placeholder:'',style:'',ref:'data:ds_cargo.payDvly',displayFormat:'#,##0',dataType:'number'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'3'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수수료',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'보관금지불처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_common_textbox',A:{columnIdList:'clntNm,picNm,catBusi',compList:'',gridHeadTitle:'거래처명,담당자명,담당자전화',id:'clntNm_textbox',name:'strAmtClntNmTx',nameId:'clntNm',refDataCollection:'ds_cargo',selectID:'Client2',style:'width:100%; height:px; ',widthList:'100,100,100'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'보관금',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'m26',placeholder:'',style:'',displayFormat:'#,##0',ref:'data:ds_cargo.strAmt',dataType:'number'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수수료',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'m27',placeholder:'',style:'',displayFormat:'#,##0',ref:'data:ds_cargo.cmis',dataType:'number'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'선수금',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'b7',placeholder:'',style:'',displayFormat:'#,##0',ref:'data:ds_cargo.initAmt',dataType:'number'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'선급금',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'b8',placeholder:'',style:'',displayFormat:'#,##0',ref:'data:ds_cargo.initAmt',dataType:'number'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'비고/기타',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'m28',style:'height: 78px;',ref:'data:ds_cargo.rmk'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'apDiv2',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'3'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너<br/>정보',ref:'',style:'',userData2:'',escape:'false'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE/선사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'c1',placeholder:'',style:'',ref:'data:ds_cargo.shpCo',maxlength:'100'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박/항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'c2',placeholder:'',style:'',ref:'data:ds_cargo.shpNm',maxlength:'100'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'포트',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'c3',placeholder:'',style:'',ref:'data:ds_cargo.portNo',maxlength:'100'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BK/BL No',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'c4',placeholder:'',style:'',ref:'data:ds_cargo.cntrBookingNo',maxlength:'100'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'동부ORDNO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'c5',placeholder:'',style:'',ref:'data:ds_cargo.dmOrdNo',maxlength:'100'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'c6',placeholder:'',style:'',ref:'data:ds_cargo.cntrNo',maxlength:'100'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SEAL번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td br0',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'c7',placeholder:'',style:'',ref:'data:ds_cargo.cntrSealNo',maxlength:'100'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td bl0',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'마감일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'tac',id:'ica_c9',pickerType:'dynamic',style:'',ref:'data:ds_cargo.cntrCloseDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Empty/Full',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'c10',ref:'data:ds_cargo.emptyFull',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사이즈',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'c8',search:'start',style:'width:80px;',submenuSize:'auto',ref:'data:ds_cargo.cntrSiz',allOption:'',chooseOption:'true',chooseOptionLabel:'선택',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'20'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'20'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'40'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'40'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'45'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'45'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'타입',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'c18',search:'start',style:'width:80px;',submenuSize:'auto',ref:'data:ds_cargo.cntrTyp',allOption:'',chooseOption:'',chooseOptionLabel:'선택',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'선택'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DC'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ET'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ET'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'FR'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'FR'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'HC'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'HC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'JB'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'JB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'OT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'OT'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'PF'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PF'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'RF'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RF'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'RH'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RH'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'TK'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TK'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기타비용',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CY수수료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'c11',placeholder:'',style:'',ref:'data:ds_cargo.cyCmis',dataType:'number',displayFormat:'#,###',maxByteLength:'15',byteCheckIgnoreChar:','}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상차료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'c14',placeholder:'',style:'',ref:'data:ds_cargo.onCmis',dataType:'number',displayFormat:'#,###',maxByteLength:'15',byteCheckIgnoreChar:','}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통관료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'c15',placeholder:'',style:'',ref:'data:ds_cargo.cstmclrncCmis',dataType:'number',displayFormat:'#,###',maxByteLength:'15',byteCheckIgnoreChar:','}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하차료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'c16',placeholder:'',style:'',ref:'data:ds_cargo.offCmis',dataType:'number',displayFormat:'#,###',maxByteLength:'15',byteCheckIgnoreChar:','}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기타료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'c17',placeholder:'',style:'',ref:'data:ds_cargo.payHndlCmis',displayFormat:'#,###',maxByteLength:'15',byteCheckIgnoreChar:','}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상하차료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'data:ds_cargo.payCmisPayfor',appearance:'full',style:'',id:'c12',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차량대납'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'data:ds_cargo.onCmisBilgFareInc',appearance:'full',style:'',id:'c13',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'청구운임포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'txt_cntrWt',placeholder:'',style:'',ref:'data:ds_cargo.wt',displayFormat:'#,###',maxByteLength:'15',byteCheckIgnoreChar:','}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_trigger7',type:'button',class:'btn','ev:onclick':'scwin.btn_trigger7_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'추가'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_trigger8',type:'button',class:'btn','ev:onclick':'scwin.btn_trigger8_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_gridView',type:'button',class:'btn','ev:onclick':'scwin.btn_gridView_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록내용보기'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group10',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_cargo',style:'',id:'gr_cargo_blk',visibleRowNum:'3',class:'wq_gvw',readOnly:'true',focusMode:'row',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cargoIdx',value:'번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cargoType',value:'화물타입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regDd',value:'등록일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'regId',value:'등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'alloccarDd',value:'배차일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'regId2',value:'배차등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNm',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'picNm',value:'담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'telNo',value:'전화번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'onPos',value:'상차지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'onPosNm',value:'상차지역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'onPosDistrict',value:'상차지권역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'onPosDistrictCd',value:'상차지권역코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onPicNm',value:'상차담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'onPicTel',value:'상차담당전화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onDt',value:'상차요청일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onHh',value:'상차요청시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'offPos',value:'하차지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'offPosNm',value:'하차지역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offDt',value:'하차요청일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offHh',value:'하차요청시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'offPosDistrict',value:'하차지권역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'offPosDistrictCd',value:'하차지권역코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'offPicNm',value:'하차담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'offPicTel',value:'하차담당전화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgAmt',value:'청구운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'payReal',value:'실운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'defrAmt',value:'지불운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'payAdvn',value:'선불운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'payDvly',value:'착불운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'strAmtClntNmTx',value:'보관금지불처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'strAmt',value:'보관금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cmis',value:'수수료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rmk',value:'요구사항',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cstmclrncCmis',value:'운임계산방법',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onCmis',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offCmis',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'shpCo',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shpNm',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'portNo',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrBookingNo',value:'선수금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrOrdNo',value:'선급금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrNo',value:'실화주',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'cstmclrncCmis',width:'80',inputType:'text',displayMode:'label',value:'통관료'}},{T:1,N:'w2:column',A:{id:'onCmis',width:'80',inputType:'text',displayMode:'label',value:'상차료'}},{T:1,N:'w2:column',A:{id:'offCmis',width:'80',inputType:'text',displayMode:'label',value:'하차료'}},{T:1,N:'w2:column',A:{id:'shpCo',width:'100',inputType:'text',displayMode:'label',value:'선사명'}},{T:1,N:'w2:column',A:{id:'shpNm',width:'100',inputType:'text',displayMode:'label',value:'선박명항차'}},{T:1,N:'w2:column',A:{id:'portNo',width:'80',inputType:'text',displayMode:'label',value:'포트'}},{T:1,N:'w2:column',A:{id:'cntrBookingNo',width:'80',inputType:'text',displayMode:'label',value:'부킹번호'}},{T:1,N:'w2:column',A:{id:'cntrOrdNo',width:'80',inputType:'text',displayMode:'label',value:'주문번호'}},{T:1,N:'w2:column',A:{id:'cntrNo',width:'100',inputType:'text',displayMode:'label',value:'컨테이너번호'}},{T:1,N:'w2:column',A:{id:'cntrSealNo',width:'100',inputType:'text',displayMode:'label',value:'실번호'}},{T:1,N:'w2:column',A:{id:'cntrSiz',width:'110',inputType:'text',displayMode:'label',value:'컨테이너사이즈'}},{T:1,N:'w2:column',A:{id:'cntrTyp',width:'110',inputType:'text',displayMode:'label',value:'컨테이너타입'}},{T:1,N:'w2:column',A:{id:'cntrCloseDt',width:'120',inputType:'text',displayMode:'label',mask:'yyyy-MM-dd',value:'컨테이너마감일'}},{T:1,N:'w2:column',A:{id:'emptyFull',width:'120',inputType:'text',displayMode:'label',value:'EMPTYFULL'}},{T:1,N:'w2:column',A:{id:'cyCmis',width:'80',inputType:'text',displayMode:'label',value:'cy수수료'}},{T:1,N:'w2:column',A:{id:'payCmisPayfor',width:'120',inputType:'text',displayMode:'label',value:'상차료대납여부'}},{T:1,N:'w2:column',A:{id:'onCmisBilgFareInc',width:'140',inputType:'text',displayMode:'label',value:'상차료청구운임에 포함'}},{T:1,N:'w2:column',A:{id:'payHndlCmis',width:'80',inputType:'text',displayMode:'label',value:'기타료'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cargoIdx',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cargoType',displayMode:'label',textAlign:'center',customFormatter:'scwin.fn_gridCargoTypeFormatter'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regDd',displayMode:'label',dataType:'date',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'regId',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'alloccarDd',displayMode:'label',dataType:'date',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'regId2',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'picNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'telNo',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'onPos',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'onPosNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'onPosDistrict',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'onPosDistrictCd',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onPicNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'onPicTel',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onDt',displayMode:'label',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onHh',displayMode:'label',dataType:'time'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'offPos',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'offPosNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offDt',displayMode:'label',textAlign:'center',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offHh',displayMode:'label',textAlign:'center',dataType:'time'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'offPosDistrict',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'offPosDistrictCd',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'offPicNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'offPicTel',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'payReal',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'defrAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'payAdvn',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'payDvly',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00000'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'strAmtClntNmTx',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'strAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cmis',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00000'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fareCalcTyp',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'goods',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00000'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'unit',displayMode:'label',textAlign:'right',dataType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'qty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'nrm',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'initAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'prePayAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00000'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'realClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{id:'cstmclrncCmis',width:'80',inputType:'text',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{id:'onCmis',width:'80',inputType:'text',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{id:'offCmis',width:'80',inputType:'text',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{id:'shpCo',width:'100',inputType:'text',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'shpNm',width:'100',inputType:'text',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'portNo',width:'80',inputType:'text',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'cntrBookingNo',width:'80',inputType:'text',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'cntrOrdNo',width:'80',inputType:'text',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'cntrNo',width:'100',inputType:'text',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'cntrSealNo',width:'100',inputType:'text',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'cntrSiz',width:'110',inputType:'text',displayMode:'label',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntrTyp',width:'110',inputType:'text',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'cntrCloseDt',width:'120',inputType:'text',displayMode:'label',mask:'yyyy-MM-dd',dataType:'date'}},{T:1,N:'w2:column',A:{id:'emptyFull',width:'120',inputType:'text',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'cyCmis',width:'80',inputType:'text',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{id:'payCmisPayfor',width:'120',inputType:'text',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'onCmisBilgFareInc',width:'140',inputType:'text',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'payHndlCmis',width:'80',inputType:'text',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'grpCloseBox',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})