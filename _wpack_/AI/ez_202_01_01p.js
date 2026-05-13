/*amd /AI/ez_202_01_01p.xml 79739 96afc7b9e577c6d45479daf5ad40113028ecad65f51074f7b06221494d238ea5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_master'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'masterIdx',name:'마스터IDX',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDd',name:'등록일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transReqDtlCnt',name:'운송의뢰상세건수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sumQty',name:'총수량',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sumWt',name:'총중량',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sumCbm',name:'총CBM',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDt',name:'등록일시',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modDt',name:'수정일시',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ez112Idx',name:'거래처IDX',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ez108Idx',name:'담당자IDX',dataType:'text'}},{T:1,N:'w2:key',A:{id:'orgFareRate',name:'원청수수료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'picNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'picTel',name:'담당자전화',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ez202Idx',name:'운송의뢰IDX',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cargo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'idx',name:'IDX',dataType:'text'}},{T:1,N:'w2:column',A:{id:'masterIdx',name:'마스터IDX',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoType',name:'화물타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoSts',name:'화물상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoIdx',name:'화물번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDd',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarDd',name:'배차일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId2',name:'배차등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picNm',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPos',name:'상차지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPosNm',name:'상차지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPosDistrict',name:'상차지권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPosDistrictCd',name:'상차지권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onDt',name:'상차요청일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onHh',name:'상차요청시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPos',name:'하차지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPosNm',name:'하차지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDt',name:'하차요청일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offHh',name:'하차요청시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPosDistrict',name:'하차지권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPosDistrictCd',name:'하차지권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payReal',name:'실운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'defrAmt',name:'지불운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAdvn',name:'선불운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDvly',name:'착불운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strAmtDefr',name:'보관금지불처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strAmtClntNmTx',name:'보관금지불처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strAmt',name:'보관금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmis',name:'수수료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'요구사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicNm',name:'상차담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicTel',name:'상차담당전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicNm',name:'하차담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicTel',name:'하차담당전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareCalcTyp',name:'운임계산방법',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goods',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'openYn',name:'공개여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unit',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nrm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'initAmt',name:'선수금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prePayAmt',name:'선급금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ez112Idx',name:'거래처IDX',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realClntNm',name:'실화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'statuss',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onDd',name:'상차일(컨테이너)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDd',name:'하차일(컨테이너)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCo',name:'선사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpNm',name:'선박명항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNo',name:'포트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrBookingNo',name:'부킹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrOrdNo',name:'주문번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSealNo',name:'실번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSiz',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTyp',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrCloseDt',name:'컨테이너마감일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emptyFull',name:'EMPTYFULL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cyCmis',name:'cy수수료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCmisPayfor',name:'상차료대납여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onCmisBilgFareInc',name:'상차료청구운임포함',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onCmis',name:'상차료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmclrncCmis',name:'통관료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offCmis',name:'하차료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payHndlCmis',name:'기타료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmOrdNo',name:'동부ORDNO',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AlloccarFlDelete',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'flIdxs',name:'화물번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flDtlIdxs',name:'화물상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flFlag',name:'화물구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'사용자ID',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Result'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'outMsg',name:'결과메시지',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_amt'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'outMoney',name:'운임',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/bp.fbp.op.ac.cmd.CargoMasterCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_master","key":"IN_DS1"},{"id":"ds_cargo","key":"IN_DS2"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_master_submitdone','ev:submiterror':'scwin.sbm_master_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_AlloccarFlDelete',action:'/bp.fbp.op.ac.AlloccarFlDeleteCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_AlloccarFlDelete","key":"IN_ALLOCCAR_FL_DELETE"},{"id":"ds_Result","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_Result","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_AlloccarFlDelete_submitdone','ev:submiterror':'scwin.sbm_AlloccarFlDelete_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_amt',action:'/bp.fbp.op.ac.cmd.CalcCargoAmtCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_amt","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_amt","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_amt_submitdone','ev:submiterror':'scwin.sbm_amt_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCargoMaster',action:'/bp.fbp.op.ac.cmd.RetrieveCargoMasterCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_master","key":"IN_DS1"},{"id":"dma_master","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_master","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveCargoMaster_submitdone','ev:submiterror':'scwin.sbm_retrieveCargoMaster_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBlkInfo',action:'/bp.fbp.op.ac.cmd.RetrieveBlkInfoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_cargo","key":"IN_DS1"},{"id":"ds_cargo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_cargo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveBlkInfo_submitdone','ev:submiterror':'scwin.sbm_retrieveBlkInfo_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCntrInfo',action:'/bp.fbp.op.ac.cmd.RetrieveCntrInfoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_cargo","key":"IN_DS1"},{"id":"ds_cargo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_cargo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveCntrInfo_submitdone','ev:submiterror':'scwin.sbm_retrieveCntrInfo_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.OpenParam = "";
scwin.CargoType = "";
scwin.idx = "0-0";
scwin.mode = "";
scwin.idxs = ["0", "0"];
scwin.UserID = "";
scwin.UserName = "";
scwin.vCurDate = "";
scwin.vCurTime = "00:00";
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
scwin.onpageload = async function () {
  scwin.params = $c.data.getParameter($p);
  scwin.UserID = $c.ses.getUserId();
  scwin.UserName = $c.ses.getUserNm();
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  if (scwin.params != null) {
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
  }
  scwin.idxs = scwin.idx.split("-");
  scwin.m = scwin.idxs[0];
  scwin.retrieveCarnfo();
};
scwin.retrieveCarnfo = async function () {
  if (scwin.idxs[0] != "0" && scwin.idxs[0] != "") {
    let condition_idx1 = scwin.idxs[0];
    let condition_idx2 = scwin.idxs[1];
    await scwin.sbm_retrieveCargoMaster_execute(condition_idx1);
    if (scwin.CargoType == "cargo") {
      scwin.cc1 = "blk";
      scwin.showBlkSection();
      await scwin.sbm_retrieveBlkInfo_execute(condition_idx1, condition_idx2);
    } else if (scwin.CargoType == "cont") {
      scwin.cc1 = "cntr";
      scwin.showCntrSection();
      await scwin.sbm_retrieveCntrInfo_execute(condition_idx1, condition_idx2);
    }
    if (ds_cargo.getRowCount() > 0) {
      scwin.clntIdx = ds_cargo.getCellData(0, "ez112Idx");
      scwin.h_clntIdx = ds_cargo.getCellData(0, "ez112Idx");
      let curRow = ds_cargo.getRowPosition();
      m6.setValue(ds_cargo.getCellData(curRow, "picNm"));
      m7.setValue(ds_cargo.getCellData(curRow, "telNo"));
    }
  } else {
    scwin.initMaster();
    scwin.initCargo();
    scwin.addDataRow();
  }
};
scwin.sbm_retrieveCargoMaster_execute = async function (ez202Idx) {
  // TODO: pass ez202Idx as parameter to submission
  await $c.sbm.execute($p, sbm_retrieveCargoMaster);
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
scwin.sbm_retrieveCargoMaster_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveBlkInfo_submitdone = function (e) {
  let rowCnt = ds_cargo.getRowCount();
  if (rowCnt > 0) {
    consNm_textbox.setValue(ds_cargo.getCellData(0, "clntNm"));
    consNm_textbox.setDisabled(true);
    consNm_search_ico.setDisabled(true);
    let unitVal = ds_cargo.getCellData(ds_cargo.getRowPosition(), "unit");
    unit.setValue(unitVal);
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
    scwin.syncCargoToForm();
  }
};
scwin.sbm_retrieveBlkInfo_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveCntrInfo_submitdone = function (e) {
  let rowCnt = ds_cargo.getRowCount();
  if (rowCnt > 0) {
    consNm_textbox.setValue(ds_cargo.getCellData(0, "clntNm"));
    consNm_textbox.setDisabled(true);
    consNm_search_ico.setDisabled(true);
    let unitVal = ds_cargo.getCellData(ds_cargo.getRowPosition(), "unit");
    unit.setValue(unitVal);
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
    scwin.syncCargoToForm();
  }
};
scwin.sbm_retrieveCntrInfo_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.showBlkSection = function () {
  grp_group10.setVisible(true);
  gr_cargo_blk.setVisible(true);
};
scwin.showCntrSection = function () {
  grp_group10.setVisible(true);
  gr_cargo_blk.setVisible(true);
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
  dma_master.undo();
};
scwin.initCargo = function () {
  ds_cargo.removeAll();
};
scwin.initAmt = function () {
  ds_amt.removeAll();
};
scwin.newinput = function () {
  $c.win.openMenu($p, "운송의뢰 화면", "/ui/bp/fbp/op/ac/ez_202_01_01p.xml", "ez_202_01_01p.xml", {
    CargoType: "",
    idx: ""
  });
};
scwin.btn_clear_onclick = function (e) {
  scwin.newinput();
};
scwin.savethis = async function () {
  scwin.syncFormToCargo();
  if (dma_master.get("masterIdx") == "" && ds_cargo.getRowCount() == 0) {
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
  dma_master.set("sumQty", sumQty);
  dma_master.set("sumWt", sumWt);
  dma_master.set("sumCbm", sumCbm);
  dma_master.set("transReqDtlCnt", ds_cargo.getRowCount());
  dma_master.set("picNm", ds_cargo.getCellData(0, "picNm"));
  dma_master.set("picTel", ds_cargo.getCellData(0, "telNo"));
  let now = new Date();
  let mils = now.getMilliseconds();
  dma_master.set("regDt", mils);
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
  await $c.sbm.execute($p, sbm_master);
};
scwin.btn_save_onclick = async function (e) {
  await scwin.savethis();
};
scwin.deletethis = async function () {
  if (ds_cargo.getRowCount() == 0) {
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
  for (let i = 1; i < loopArr.length; i += 2) {
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
  let curRow = ds_Result.getRowPosition();
  if (curRow < 0 || ds_Result.getCellData(curRow, "outMsg") == null || ds_Result.getCellData(curRow, "outMsg") == "") {
    await $c.win.alert($p, "화물삭제 처리중 장애가 발생하였습니다.");
  } else {
    await $c.win.alert($p, ds_Result.getCellData(curRow, "outMsg"));
    await $c.sbm.execute($p, sbm_master);
  }
};
scwin.sbm_AlloccarFlDelete_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.reflashdata = function () {
  scwin.retrieveCarnfo();
};
scwin.cType = async function (str) {
  scwin.cc1 = str;
  await scwin.addDataRow();
  if (str == "blk") {
    scwin.showBlkSection();
  } else if (str == "cntr") {
    scwin.showCntrSection();
  }
  ica_m1.setValue(scwin.vCurDate);
  m2.setValue(scwin.UserName);
  ica_m12.setValue(scwin.vCurDate);
  ica_m16.setValue(scwin.vCurDate);
  m13.setValue("00:00");
  m17.setValue("00:00");
  ds_cargo.setCellData(ds_cargo.getRowPosition(), "statuss", "대기");
};
scwin.addDataRow = async function () {
  if (scwin.cc1 != "") {
    if (ds_cargo.getRowCount() > 0) {
      scwin.syncFormToCargo();
      let prevRow = ds_cargo.getRowPosition();
      let newRow = ds_cargo.insertRow();
      ds_cargo.setCellData(newRow, "masterIdx", ds_cargo.getCellData(prevRow, "masterIdx"));
      ds_cargo.setCellData(newRow, "ez112Idx", ds_cargo.getCellData(prevRow, "ez112Idx"));
      ds_cargo.setCellData(newRow, "cargoIdx", String(Number(ds_cargo.getCellData(prevRow, "cargoIdx")) + 1));
      ds_cargo.setCellData(newRow, "clntNm", ds_cargo.getCellData(prevRow, "clntNm"));
      ds_cargo.setCellData(newRow, "picNm", ds_cargo.getCellData(prevRow, "picNm"));
      ds_cargo.setCellData(newRow, "telNo", ds_cargo.getCellData(prevRow, "telNo"));
      ds_cargo.setCellData(newRow, "regId", ds_cargo.getCellData(prevRow, "regId"));
      ds_cargo.setCellData(newRow, "cargoType", ds_cargo.getCellData(prevRow, "cargoType"));
    } else {
      scwin.initMaster();
      scwin.initCargo();
      let newRow = ds_cargo.insertRow();
      ds_cargo.setCellData(newRow, "masterIdx", ds_cargo.getCellData(0, "masterIdx"));
      ds_cargo.setCellData(newRow, "cargoIdx", "1");
      ds_cargo.setCellData(newRow, "cargoType", scwin.cc1);
    }
    ica_m1.setValue(scwin.vCurDate);
    ica_m12.setValue(scwin.vCurDate);
    ica_m16.setValue(scwin.vCurDate);
    m13.setValue("00:00");
    m17.setValue("00:00");
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
    ds_cargo.removeRow(curRow);
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
  await $c.win.alert($p, "성공적으로 저장되었습니다.");
  if (scwin.OpenParam == "0") {
    scwin.reflashdata();
  } else {
    scwin.newinput();
  }
};
scwin.sbm_master_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.gr_cargo_blk_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex < 0) return;
  let unitVal = ds_cargo.getCellData(rowIndex, "unit");
  unit.setValue(unitVal);
  scwin.syncCargoToForm();
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ncall-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ncall nc17',id:'btn_clear',style:'',title:'운송차량',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ncall nc20',id:'btn_save',style:'',title:'운송차량',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ncall nc18',id:'btn_delete',style:'',title:'운송차량',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제하기'}]}]}]},{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:170px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:170px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물형태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'',id:'b1',renderType:'radiogroup',rows:'',class:'',cols:'',selectedIndex:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_trigger1',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이전거래자료'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_trigger2',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운임단가표'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'등록일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'',id:'ica_m1',class:'',calendarValueType:'yearMonthDate'}},{T:1,N:'xf:input',A:{style:'width:200px;',id:'m2',placeholder:'',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'openYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화물정보 공개Pool등록'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_m3',pickerType:'dynamic',style:''}},{T:1,N:'xf:input',A:{class:'',id:'m4',placeholder:'',style:'width:200px;'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:90px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:90px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'벌크 운송운임 계산',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'b1',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'없음'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'구간'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화물'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'합산'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조합'}]},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'화주정보',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'화주',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'consNm_textbox',placeholder:'',style:''}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'consNm_search_ico',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'담당자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'m6',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'전화번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'m7',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'8'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상하차지<br/>정보',class:'',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차지',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'m8',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차권역코드',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'m10',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차지역',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'allAddr_textbox',placeholder:'',style:''}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'allAddr_search_ico',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차지담당',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'m29',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차지전화',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'m30',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_m12',pickerType:'dynamic',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차시간',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tac',dataType:'time',id:'m13',style:'width: 50px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차지',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'m14',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차권역코드',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'m18',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차지역',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'allAddr2_textbox',placeholder:'',style:''}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'allAddr2_search_ico',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차지담당',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'m31',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차지전화',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'m32',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_m16',pickerType:'dynamic',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차시간',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tac',dataType:'time',id:'m17',style:'width: 50px;'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:90px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:90px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'화물정보',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:90px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:90px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'화물품명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'b2',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'중량',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'b3',placeholder:'',class:'tar'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Kg',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수량',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width:80px;',allOption:'false',id:'unit',class:'flex_no',direction:'auto'}},{T:1,N:'xf:input',A:{style:'',id:'b5',placeholder:'',class:'tar'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'CBM',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'b6',placeholder:'',style:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'청구',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'운임',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'tar',id:'m20',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'실화주명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_realClntNm',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'차량운임',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지불운임',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'m22',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td bl0',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'선불운임',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'m23',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'착불운임',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'m24',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'3'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수수료',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'보관금지불처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'clntNm_textbox',placeholder:'',style:''}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'clntNm_search_ico',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'보관금',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'m26',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수수료',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'m27',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'선수금',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'b7',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'선급금',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'b8',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'비고/기타',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'m28',style:'height: 78px;'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'3'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너<br/>정보',ref:'',style:'',userData2:'',escape:'false'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE/선사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'c1',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박/항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'c2',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'포트',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'c3',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BK/BL No',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'c4',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'동부ORDNO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'c5',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'c6',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SEAL번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td br0',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'c7',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td bl0',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'마감일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_c9',pickerType:'dynamic',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Empty/Full',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'c10',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사이즈',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'c8',search:'start',style:'width:80px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'타입',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'c18',search:'start',style:'width:80px;',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기타비용',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CY수수료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'c11',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상차료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'c14',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통관료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'c15',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하차료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'c16',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기타료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'c17',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상하차료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'c12',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차량대납'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'c13',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'청구운임포함'}]},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'txt_cntrWt',placeholder:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_trigger7',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'추가'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_trigger8',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_trigger9',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록내용보기'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group10',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_cargo',style:'',id:'gr_cargo_blk',visibleRowNum:'15',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cargoIdx',value:'번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cargoType',value:'화물타입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regDd',value:'등록일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'regId',value:'등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'alloccarDd',value:'배차일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'regId2',value:'배차등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ez112Idx',value:'거래처코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNm',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'picNm',value:'담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'telNo',value:'전화번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'onPos',value:'상차지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'onPosNm',value:'상차지역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'onPosDistrict',value:'상차지권역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'onPosDistrictCd',value:'상차지권역코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onPicNm',value:'상차담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'onPicTel',value:'상차담당전화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onDt',value:'상차요청일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onHh',value:'상차요청시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'offPos',value:'하차지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'offPosNm',value:'하차지역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offDt',value:'하차요청일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offHh',value:'하차요청시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'offPosDistrict',value:'하차지권역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'offPosDistrictCd',value:'하차지권역코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'offPicNm',value:'하차담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'offPicTel',value:'하차담당전화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgAmt',value:'청구운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'payReal',value:'실운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'defrAmt',value:'지불운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'payAdvn',value:'선불운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'payDvly',value:'착불운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'strAmtClntNmTx',value:'보관금지불처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'strAmt',value:'보관금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cmis',value:'수수료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rmk',value:'요구사항',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cstmclrncCmis',value:'통관료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onCmis',value:'상차료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offCmis',value:'하차료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'shpCo',value:'선사명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shpNm',value:'선박명항차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'portNo',value:'포트',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrBookingNo',value:'부킹번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrOrdNo',value:'주문번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrNo',value:'컨테이너번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrSealNo',value:'실번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrSiz',value:'컨테이너사이즈',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrTyp',value:'컨테이너타입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrCloseDt',value:'컨테이너마감일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'emptyFull',value:'EMPTYFULL',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cyCmis',value:'cy수수료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'payCmisPayfor',value:'상차료대납여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'onCmisBilgFareInc',value:'상차료청구운임에 포함',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'payHndlCmis',value:'기타료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'realClntNm',value:'실화주',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wt',value:'중량',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column18',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column16',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column14',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column12',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column10',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column4',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column6',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column8',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column20',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column68',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column66',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column64',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column62',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column58',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column56',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column52',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column50',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column44',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column38',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column36',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column32',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column104',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column102',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column100',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column98',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column96',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column94',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column92',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column90',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column88',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column86',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column84',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column82',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column80',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column78',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column76',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column74',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column110',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column106',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column108',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})