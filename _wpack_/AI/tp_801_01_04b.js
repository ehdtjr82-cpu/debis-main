/*amd /AI/tp_801_01_04b.xml 58615 eff03a204f7ed921f20e71d4236ee602dc4004b2db518336290ff34c9e7f9b7a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPl',name:'작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntCd',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inDtFrom',name:'입고일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inDtTo',name:'입고일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spplyNm',name:'공급업체명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPl',name:'작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntCd',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inDtFrom',name:'입고일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inDtTo',name:'입고일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spplyNm',name:'공급업체명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_DetailRetrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'uploadNo',name:'업로드번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'체크',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uploadNo',name:'업로드번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPl',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntCd',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inSchedStDt',name:'입고예정시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inSchedEndDt',name:'입고예정종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uploadDt',name:'업로드일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uploadHh',name:'업로드시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyCmpyNm',name:'공급업체명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deg',name:'선박차수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totCnt',name:'총수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'confirmCnt',name:'확정수량',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_DetailResult',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'체크',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uploadNo',name:'업로드번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uploadSeq',name:'업로드seq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inDcsnYn',name:'확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'savePos',name:'저장위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prdtCls',name:'제품구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyCoNm',name:'공급업체명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repQltyNm',name:'대표재질명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realThick',name:'실두께',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mat',name:'자재',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrange',name:'배치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyCoArrange',name:'공급업체배치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wgt',name:'코일중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsvStock',name:'예약재고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipwgtPos',name:'적재위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usblReLen',name:'가용재길이',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invoiceNo',name:'송장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lmtStock',name:'제한재고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mtrlShipDd',name:'원료출하일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyOrder',name:'구매오더',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyCo',name:'공급업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'saleOrder',name:'판매오더',dataType:'text'}},{T:1,N:'w2:column',A:{id:'plant',name:'플랜트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'plantNm',name:'플랜트명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyOrderItemNo',name:'구매오더ITEM번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargen',name:'CHARGEN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfStock',name:'이전중재고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goodsInsp',name:'품질검사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlGrdCls',name:'강종구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rstTerm',name:'발청기간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rstIndct',name:'발청표시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rstChgDd',name:'발청변경일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mtrlCls',name:'소재구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'saleOrderItemNo',name:'판매오더ITEM번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmrCo',name:'고객사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmrCoNm',name:'고객사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mtrlSpllyDd',name:'원료충당일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trance',name:'무상',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_DetailResult_FillUse',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'inDcsnYn',name:'확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'savePos',name:'저장위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prdtCls',name:'제품구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyCoNm',name:'공급업체명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repQltyNm',name:'대표재질명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realThick',name:'실두께',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mat',name:'자재',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrange',name:'배치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyCoArrange',name:'공급업체배치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wgt',name:'코일중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsvStock',name:'예약재고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipwgtPos',name:'적재위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usblReLen',name:'가용재길이',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invoiceNo',name:'송장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lmtStock',name:'제한재고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mtrlShipDd',name:'원료출하일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyOrder',name:'구매오더',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyCo',name:'공급업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'saleOrder',name:'판매오더',dataType:'text'}},{T:1,N:'w2:column',A:{id:'plant',name:'플랜트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'plantNm',name:'플랜트명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyOrderItemNo',name:'구매오더ITEM번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargen',name:'CHARGEN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfStock',name:'이전중재고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goodsInsp',name:'품질검사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlGrdCls',name:'강종구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rstTerm',name:'발청기간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rstIndct',name:'발청표시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rstChgDd',name:'발청변경일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mtrlCls',name:'소재구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'saleOrderItemNo',name:'판매오더ITEM번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmrCo',name:'고객사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmrCoNm',name:'고객사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mtrlSpllyDd',name:'원료충당일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trance',name:'무상',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Tmp_FillUse',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'inDcsnYn',name:'확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'savePos',name:'저장위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prdtCls',name:'제품구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyCoNm',name:'공급업체명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repQltyNm',name:'대표재질명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realThick',name:'실두께',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mat',name:'자재',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrange',name:'배치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyCoArrange',name:'공급업체배치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wgt',name:'코일중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsvStock',name:'예약재고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipwgtPos',name:'적재위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usblReLen',name:'가용재길이',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invoiceNo',name:'송장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lmtStock',name:'제한재고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mtrlShipDd',name:'원료출하일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyOrder',name:'구매오더',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyCo',name:'공급업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'saleOrder',name:'판매오더',dataType:'text'}},{T:1,N:'w2:column',A:{id:'plant',name:'플랜트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'plantNm',name:'플랜트명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyOrderItemNo',name:'구매오더ITEM번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargen',name:'CHARGEN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfStock',name:'이전중재고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goodsInsp',name:'품질검사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlGrdCls',name:'강종구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rstTerm',name:'발청기간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rstIndct',name:'발청표시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rstChgDd',name:'발청변경일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mtrlCls',name:'소재구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'saleOrderItemNo',name:'판매오더ITEM번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmrCo',name:'고객사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmrCoNm',name:'고객사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mtrlSpllyDd',name:'원료충당일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trance',name:'무상',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.tp.specialsteel.RetrieveReceivingScheduledInfoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_result","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_DetailRetrieve',action:'/ds.tp.specialsteel.RetrieveReceivingScheduledInfoDetailCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_DetailRetrieve","key":"IN_DS1"},{"id":"ds_DetailResult","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_DetailResult","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_DetailRetrieve_submitdone','ev:submiterror':'scwin.sbm_DetailRetrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.tp.specialsteel.SaveReceivingScheduledInfoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_result","key":"IN_DS1"},{"id":"ds_DetailResult","key":"IN_DS2"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = "";
scwin.vPreDate = "";
scwin.hid_chkCtrtClntNo = "";
scwin.hid_chkBilgClntNo = "";
scwin.hid_repClntNo = "";
scwin.hid_ctrtNo = "";
scwin.hid_odrJobType = "";
scwin.isOnPopup = false;
scwin.onpageload = function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.vPreDate = $c.date.addDay($p, scwin.vCurDate, -7);
  dma_condition.set("inDtTo", scwin.vCurDate);
  dma_condition.set("inDtFrom", scwin.vPreDate);
  ed_wrkPlCd.setFocus();
};
scwin.onUdcCompleted = function () {
  dma_condition.set("inDtTo", scwin.vCurDate);
  dma_condition.set("inDtFrom", scwin.vPreDate);
  ed_wrkPlCd.setFocus();
};
scwin.f_Retrieve = async function () {
  if (ed_wrkPlCd.getValue() == "") {
    await $c.win.alert($p, "작업장은 필수입력값입니다.");
    return;
  }
  if (dma_condition.get("inDtTo") == "" || dma_condition.get("inDtFrom") == "") {
    await $c.win.alert($p, "입고예정일은 필수입력값 입니다.");
    return;
  }
  dma_condition.set("wrkPl", ed_wrkPlCd.getValue());
  dma_condition.set("spplyNm", ed_spply.getValue());
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_DetailRetrieve = async function () {
  await $c.sbm.execute($p, sbm_DetailRetrieve);
};
scwin.f_AddRow = function () {
  ds_DetailResult.removeAll();
  ds_result.insertRow();
  let pos = ds_result.getRowPosition();
  ds_result.setCellData(pos, "wrkPl", ed_wrkPlCd.getValue());
  ds_result.setCellData(pos, "clntCd", "238975");
};
scwin.f_CopyRow = function () {
  let resultPos = ds_result.getRowPosition();
  ds_result.setCellData(resultPos, "chk", "1");
  let row = ds_DetailResult.getRowPosition();
  if (ds_DetailResult.getRowCount() > 0) {
    ds_DetailResult.insertRow();
    let addAfterRow = ds_DetailResult.getRowPosition();
    ds_DetailResult.setCellData(addAfterRow, "uploadNo", ds_DetailResult.getCellData(row, "uploadNo"));
    ds_DetailResult.setCellData(addAfterRow, "inDcsnYn", "0");
    ds_DetailResult.setCellData(addAfterRow, "savePos", ds_DetailResult.getCellData(row, "savePos"));
    ds_DetailResult.setCellData(addAfterRow, "prdtCls", ds_DetailResult.getCellData(row, "prdtCls"));
    ds_DetailResult.setCellData(addAfterRow, "spplyCoNm", ds_DetailResult.getCellData(row, "spplyCoNm"));
    ds_DetailResult.setCellData(addAfterRow, "repQltyNm", ds_DetailResult.getCellData(row, "repQltyNm"));
    ds_DetailResult.setCellData(addAfterRow, "realThick", ds_DetailResult.getCellData(row, "realThick"));
    ds_DetailResult.setCellData(addAfterRow, "mat", ds_DetailResult.getCellData(row, "mat"));
    ds_DetailResult.setCellData(addAfterRow, "arrange", ds_DetailResult.getCellData(row, "arrange"));
    ds_DetailResult.setCellData(addAfterRow, "spplyCoArrange", ds_DetailResult.getCellData(row, "spplyCoArrange"));
    ds_DetailResult.setCellData(addAfterRow, "wgt", ds_DetailResult.getCellData(row, "wgt"));
    ds_DetailResult.setCellData(addAfterRow, "rsvStock", ds_DetailResult.getCellData(row, "rsvStock"));
    ds_DetailResult.setCellData(addAfterRow, "shipwgtPos", ds_DetailResult.getCellData(row, "shipwgtPos"));
    ds_DetailResult.setCellData(addAfterRow, "usblReLen", ds_DetailResult.getCellData(row, "usblReLen"));
    ds_DetailResult.setCellData(addAfterRow, "vsslNm", ds_DetailResult.getCellData(row, "vsslNm"));
    ds_DetailResult.setCellData(addAfterRow, "invoiceNo", ds_DetailResult.getCellData(row, "invoiceNo"));
    ds_DetailResult.setCellData(addAfterRow, "lmtStock", ds_DetailResult.getCellData(row, "lmtStock"));
    ds_DetailResult.setCellData(addAfterRow, "mtrlShipDd", ds_DetailResult.getCellData(row, "mtrlShipDd"));
    ds_DetailResult.setCellData(addAfterRow, "inDt", ds_DetailResult.getCellData(row, "inDt"));
    ds_DetailResult.setCellData(addAfterRow, "buyOrder", ds_DetailResult.getCellData(row, "buyOrder"));
    ds_DetailResult.setCellData(addAfterRow, "spplyCo", ds_DetailResult.getCellData(row, "spplyCo"));
    ds_DetailResult.setCellData(addAfterRow, "saleOrder", ds_DetailResult.getCellData(row, "saleOrder"));
    ds_DetailResult.setCellData(addAfterRow, "plant", ds_DetailResult.getCellData(row, "plant"));
    ds_DetailResult.setCellData(addAfterRow, "plantNm", ds_DetailResult.getCellData(row, "plantNm"));
    ds_DetailResult.setCellData(addAfterRow, "buyOrderItemNo", ds_DetailResult.getCellData(row, "buyOrderItemNo"));
    ds_DetailResult.setCellData(addAfterRow, "blNo", ds_DetailResult.getCellData(row, "blNo"));
    ds_DetailResult.setCellData(addAfterRow, "chargen", ds_DetailResult.getCellData(row, "chargen"));
    ds_DetailResult.setCellData(addAfterRow, "bfStock", ds_DetailResult.getCellData(row, "bfStock"));
    ds_DetailResult.setCellData(addAfterRow, "goodsInsp", ds_DetailResult.getCellData(row, "goodsInsp"));
    ds_DetailResult.setCellData(addAfterRow, "stlGrdCls", ds_DetailResult.getCellData(row, "stlGrdCls"));
    ds_DetailResult.setCellData(addAfterRow, "rstTerm", ds_DetailResult.getCellData(row, "rstTerm"));
    ds_DetailResult.setCellData(addAfterRow, "rstIndct", ds_DetailResult.getCellData(row, "rstIndct"));
    ds_DetailResult.setCellData(addAfterRow, "rstChgDd", ds_DetailResult.getCellData(row, "rstChgDd"));
    ds_DetailResult.setCellData(addAfterRow, "mtrlCls", ds_DetailResult.getCellData(row, "mtrlCls"));
    ds_DetailResult.setCellData(addAfterRow, "saleOrderItemNo", ds_DetailResult.getCellData(row, "saleOrderItemNo"));
    ds_DetailResult.setCellData(addAfterRow, "cstmrCo", ds_DetailResult.getCellData(row, "cstmrCo"));
    ds_DetailResult.setCellData(addAfterRow, "cstmrCoNm", ds_DetailResult.getCellData(row, "cstmrCoNm"));
    ds_DetailResult.setCellData(addAfterRow, "mtrlSpllyDd", ds_DetailResult.getCellData(row, "mtrlSpllyDd"));
    ds_DetailResult.setCellData(addAfterRow, "trance", ds_DetailResult.getCellData(row, "trance"));
  }
};
scwin.f_delRow = function () {
  let countRow = ds_result.getRowCount();
  for (let i = countRow - 1; i >= 0; i--) {
    if (ds_result.getCellData(i, "chk") == "1" || ds_result.getCellData(i, "chk") == "T") {
      ds_result.removeRow(i);
    }
  }
};
scwin.f_delRowDetail = async function () {
  let resultPos = ds_result.getRowPosition();
  ds_result.setCellData(resultPos, "chk", "1");
  let countRow = ds_DetailResult.getRowCount();
  for (let i = countRow - 1; i >= 0; i--) {
    if (ds_DetailResult.getCellData(i, "chk") == "1" || ds_DetailResult.getCellData(i, "chk") == "T") {
      if (ds_DetailResult.getCellData(i, "inDcsnYn") == "1") {
        await $c.win.alert($p, "확정된 행은 삭제 할 수 없습니다.");
        return;
      }
      ds_DetailResult.removeRow(i);
    }
  }
};
scwin.f_upload = async function () {
  if (ds_DetailResult.getUpdatedIndex().length > 0) {
    let chk = await $c.win.confirm($p, "변경사항이 없습니다. 계속하시겠습니까?");
    if (!chk) {
      return;
    }
  }

  // TODO: CSV 파일 업로드 — WebSquare 파일 업로드 컴포넌트로 대체 필요
  // GAUCE inputF.Open() → WebSquare 파일 업로드 API 사용
  // 아래는 CSV 파싱 후 데이터를 ds_DetailResult에 적재하는 로직

  ds_DetailResult.removeAll();
  ds_Tmp_FillUse.removeAll();
  for (let i = 0; i < ds_DetailResult_FillUse.getRowCount(); i++) {
    ds_Tmp_FillUse.insertRow();
    ds_Tmp_FillUse.setCellData(i, "inDcsnYn", ds_DetailResult_FillUse.getCellData(i, "inDcsnYn"));
    ds_Tmp_FillUse.setCellData(i, "savePos", ds_DetailResult_FillUse.getCellData(i, "savePos"));
    ds_Tmp_FillUse.setCellData(i, "prdtCls", ds_DetailResult_FillUse.getCellData(i, "prdtCls"));
    ds_Tmp_FillUse.setCellData(i, "spplyCoNm", ds_DetailResult_FillUse.getCellData(i, "spplyCoNm"));
    ds_Tmp_FillUse.setCellData(i, "repQltyNm", ds_DetailResult_FillUse.getCellData(i, "repQltyNm"));
    ds_Tmp_FillUse.setCellData(i, "realThick", ds_DetailResult_FillUse.getCellData(i, "realThick"));
    ds_Tmp_FillUse.setCellData(i, "mat", ds_DetailResult_FillUse.getCellData(i, "mat"));
    ds_Tmp_FillUse.setCellData(i, "arrange", ds_DetailResult_FillUse.getCellData(i, "arrange"));
    ds_Tmp_FillUse.setCellData(i, "spplyCoArrange", ds_DetailResult_FillUse.getCellData(i, "spplyCoArrange"));
    ds_Tmp_FillUse.setCellData(i, "wgt", ds_DetailResult_FillUse.getCellData(i, "wgt"));
    ds_Tmp_FillUse.setCellData(i, "rsvStock", ds_DetailResult_FillUse.getCellData(i, "rsvStock"));
    ds_Tmp_FillUse.setCellData(i, "shipwgtPos", ds_DetailResult_FillUse.getCellData(i, "shipwgtPos"));
    ds_Tmp_FillUse.setCellData(i, "usblReLen", ds_DetailResult_FillUse.getCellData(i, "usblReLen"));
    ds_Tmp_FillUse.setCellData(i, "vsslNm", ds_DetailResult_FillUse.getCellData(i, "vsslNm"));
    ds_Tmp_FillUse.setCellData(i, "invoiceNo", ds_DetailResult_FillUse.getCellData(i, "invoiceNo"));
    ds_Tmp_FillUse.setCellData(i, "lmtStock", ds_DetailResult_FillUse.getCellData(i, "lmtStock"));
    ds_Tmp_FillUse.setCellData(i, "mtrlShipDd", ds_DetailResult_FillUse.getCellData(i, "mtrlShipDd"));
    ds_Tmp_FillUse.setCellData(i, "inDt", ds_DetailResult_FillUse.getCellData(i, "inDt"));
    ds_Tmp_FillUse.setCellData(i, "buyOrder", ds_DetailResult_FillUse.getCellData(i, "buyOrder"));
    ds_Tmp_FillUse.setCellData(i, "spplyCo", ds_DetailResult_FillUse.getCellData(i, "spplyCo"));
    ds_Tmp_FillUse.setCellData(i, "saleOrder", ds_DetailResult_FillUse.getCellData(i, "saleOrder"));
    ds_Tmp_FillUse.setCellData(i, "plant", ds_DetailResult_FillUse.getCellData(i, "plant"));
    ds_Tmp_FillUse.setCellData(i, "plantNm", ds_DetailResult_FillUse.getCellData(i, "plantNm"));
    ds_Tmp_FillUse.setCellData(i, "buyOrderItemNo", ds_DetailResult_FillUse.getCellData(i, "buyOrderItemNo"));
    ds_Tmp_FillUse.setCellData(i, "blNo", ds_DetailResult_FillUse.getCellData(i, "blNo"));
    ds_Tmp_FillUse.setCellData(i, "chargen", ds_DetailResult_FillUse.getCellData(i, "chargen"));
    ds_Tmp_FillUse.setCellData(i, "bfStock", ds_DetailResult_FillUse.getCellData(i, "bfStock"));
    ds_Tmp_FillUse.setCellData(i, "goodsInsp", ds_DetailResult_FillUse.getCellData(i, "goodsInsp"));
    ds_Tmp_FillUse.setCellData(i, "stlGrdCls", ds_DetailResult_FillUse.getCellData(i, "stlGrdCls"));
    ds_Tmp_FillUse.setCellData(i, "rstTerm", ds_DetailResult_FillUse.getCellData(i, "rstTerm"));
    ds_Tmp_FillUse.setCellData(i, "rstIndct", ds_DetailResult_FillUse.getCellData(i, "rstIndct"));
    ds_Tmp_FillUse.setCellData(i, "rstChgDd", ds_DetailResult_FillUse.getCellData(i, "rstChgDd"));
    ds_Tmp_FillUse.setCellData(i, "mtrlCls", ds_DetailResult_FillUse.getCellData(i, "mtrlCls"));
    ds_Tmp_FillUse.setCellData(i, "saleOrderItemNo", ds_DetailResult_FillUse.getCellData(i, "saleOrderItemNo"));
    ds_Tmp_FillUse.setCellData(i, "cstmrCo", ds_DetailResult_FillUse.getCellData(i, "cstmrCo"));
    ds_Tmp_FillUse.setCellData(i, "cstmrCoNm", ds_DetailResult_FillUse.getCellData(i, "cstmrCoNm"));
    ds_Tmp_FillUse.setCellData(i, "mtrlSpllyDd", ds_DetailResult_FillUse.getCellData(i, "mtrlSpllyDd"));
    ds_Tmp_FillUse.setCellData(i, "trance", ds_DetailResult_FillUse.getCellData(i, "trance"));
  }
  for (let i = 0; i < ds_Tmp_FillUse.getRowCount(); i++) {
    ds_DetailResult.insertRow();
    ds_DetailResult.setCellData(i, "inDcsnYn", ds_Tmp_FillUse.getCellData(i, "inDcsnYn"));
    ds_DetailResult.setCellData(i, "savePos", ds_Tmp_FillUse.getCellData(i, "savePos"));
    ds_DetailResult.setCellData(i, "prdtCls", ds_Tmp_FillUse.getCellData(i, "prdtCls"));
    ds_DetailResult.setCellData(i, "spplyCoNm", ds_Tmp_FillUse.getCellData(i, "spplyCoNm"));
    ds_DetailResult.setCellData(i, "repQltyNm", ds_Tmp_FillUse.getCellData(i, "repQltyNm"));
    ds_DetailResult.setCellData(i, "realThick", ds_Tmp_FillUse.getCellData(i, "realThick"));
    ds_DetailResult.setCellData(i, "mat", ds_Tmp_FillUse.getCellData(i, "mat"));
    ds_DetailResult.setCellData(i, "arrange", ds_Tmp_FillUse.getCellData(i, "arrange"));
    ds_DetailResult.setCellData(i, "spplyCoArrange", ds_Tmp_FillUse.getCellData(i, "spplyCoArrange"));
    ds_DetailResult.setCellData(i, "wgt", ds_Tmp_FillUse.getCellData(i, "wgt"));
    ds_DetailResult.setCellData(i, "rsvStock", ds_Tmp_FillUse.getCellData(i, "rsvStock"));
    ds_DetailResult.setCellData(i, "shipwgtPos", ds_Tmp_FillUse.getCellData(i, "shipwgtPos"));
    ds_DetailResult.setCellData(i, "usblReLen", ds_Tmp_FillUse.getCellData(i, "usblReLen"));
    ds_DetailResult.setCellData(i, "vsslNm", ds_Tmp_FillUse.getCellData(i, "vsslNm"));
    ds_DetailResult.setCellData(i, "invoiceNo", ds_Tmp_FillUse.getCellData(i, "invoiceNo"));
    ds_DetailResult.setCellData(i, "lmtStock", ds_Tmp_FillUse.getCellData(i, "lmtStock"));
    ds_DetailResult.setCellData(i, "mtrlShipDd", ds_Tmp_FillUse.getCellData(i, "mtrlShipDd"));
    ds_DetailResult.setCellData(i, "inDt", ds_Tmp_FillUse.getCellData(i, "inDt"));
    ds_DetailResult.setCellData(i, "buyOrder", ds_Tmp_FillUse.getCellData(i, "buyOrder"));
    ds_DetailResult.setCellData(i, "spplyCo", ds_Tmp_FillUse.getCellData(i, "spplyCo"));
    ds_DetailResult.setCellData(i, "saleOrder", ds_Tmp_FillUse.getCellData(i, "saleOrder"));
    ds_DetailResult.setCellData(i, "plant", ds_Tmp_FillUse.getCellData(i, "plant"));
    ds_DetailResult.setCellData(i, "plantNm", ds_Tmp_FillUse.getCellData(i, "plantNm"));
    ds_DetailResult.setCellData(i, "buyOrderItemNo", ds_Tmp_FillUse.getCellData(i, "buyOrderItemNo"));
    ds_DetailResult.setCellData(i, "blNo", ds_Tmp_FillUse.getCellData(i, "blNo"));
    ds_DetailResult.setCellData(i, "chargen", ds_Tmp_FillUse.getCellData(i, "chargen"));
    ds_DetailResult.setCellData(i, "bfStock", ds_Tmp_FillUse.getCellData(i, "bfStock"));
    ds_DetailResult.setCellData(i, "goodsInsp", ds_Tmp_FillUse.getCellData(i, "goodsInsp"));
    ds_DetailResult.setCellData(i, "stlGrdCls", ds_Tmp_FillUse.getCellData(i, "stlGrdCls"));
    ds_DetailResult.setCellData(i, "rstTerm", ds_Tmp_FillUse.getCellData(i, "rstTerm"));
    ds_DetailResult.setCellData(i, "rstIndct", ds_Tmp_FillUse.getCellData(i, "rstIndct"));
    ds_DetailResult.setCellData(i, "rstChgDd", ds_Tmp_FillUse.getCellData(i, "rstChgDd"));
    ds_DetailResult.setCellData(i, "mtrlCls", ds_Tmp_FillUse.getCellData(i, "mtrlCls"));
    ds_DetailResult.setCellData(i, "saleOrderItemNo", ds_Tmp_FillUse.getCellData(i, "saleOrderItemNo"));
    ds_DetailResult.setCellData(i, "cstmrCo", ds_Tmp_FillUse.getCellData(i, "cstmrCo"));
    ds_DetailResult.setCellData(i, "cstmrCoNm", ds_Tmp_FillUse.getCellData(i, "cstmrCoNm"));
    ds_DetailResult.setCellData(i, "mtrlSpllyDd", ds_Tmp_FillUse.getCellData(i, "mtrlSpllyDd"));
    ds_DetailResult.setCellData(i, "trance", ds_Tmp_FillUse.getCellData(i, "trance"));
  }
  ds_Tmp_FillUse.removeAll();
  gr_DetailResult.refresh();
};
scwin.f_CheckFileExt = function (ext, path) {
  ext = ext.toUpperCase();
  path = path.toUpperCase();
  let elen = ext.length;
  let flen = path.length;
  return ext == path.substring(flen - elen, flen);
};
scwin.f_Save = async function () {
  if (ds_result.getRowCount() == 0) return;
  let chkValid = await $c.gus.cfValidate($p, [gr_result]);
  if (!chkValid) return;
  let pos = ds_result.getRowPosition();
  ds_result.setCellData(pos, "spplyCmpyNm", ds_DetailResult.getCellData(0, "spplyCoNm"));
  ds_result.setCellData(pos, "vsslNm", ds_DetailResult.getCellData(0, "vsslNm"));
  let chk = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (chk) {
    await $c.sbm.execute($p, sbm_save);
  }
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_condition, null);
  dma_condition.set("inDtTo", scwin.vCurDate);
  dma_condition.set("inDtFrom", scwin.vPreDate);
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");else scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList;
  switch (disGubun) {
    case 1:
      udc_wrkPl.ilCommonPopUp(scwin.callbackWrkPl, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명");
      break;
    case 2:
      // TODO: 입고화주 팝업 — udc_comCode 컴포넌트 필요
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveClntInfo", pCode, pName, pClose, "9", "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,", "100,100,0,120,100,0,100,100,100,0", "3,10", "LOGISCLNT1,,CTRT,0", "800", "600", null, null, null, pAllSearch, null);
      break;
    case 3:
      // TODO: 품명 팝업 — udc_comCode 컴포넌트 필요
      rtnList = $c.gus.cfCommonPopUp($p, "retrieveCommInfo", pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "품명,품명코드,품명");
      break;
  }
};
scwin.callbackWrkPl = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, txt_wrkPlNm);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_Add_onclick = function (e) {
  scwin.f_AddRow();
};
scwin.btn_Delete_onclick = function (e) {
  scwin.f_delRow();
};
scwin.btn_Copy_onclick = function (e) {
  scwin.f_CopyRow();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.sbm_retrieve_submitdone = function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_result);
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_result);
  $c.gus.cfShowError($p, e);
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_DetailRetrieve_submitdone = async function (e) {
  let rowCnt = ds_DetailResult.getRowCount();
  if (rowCnt < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
};
scwin.sbm_DetailRetrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ds_result_onloadcompleted = function (e) {
  dma_DetailRetrieve.set("uploadNo", ds_result.getCellData(ds_result.getRowPosition(), "uploadNo"));
  scwin.f_DetailRetrieve();
};
scwin.ds_result_onrowpositionchange = function (e) {
  let row = ds_result.getRowPosition();
  if (row < 0) return;
  let status = ds_result.getRowStatus(row);
  if (status == "C") {
    gr_result.setCellReadOnly(row, "inSchedStDt", false);
    gr_result.setCellReadOnly(row, "inSchedEndDt", false);
  } else {
    gr_result.setCellReadOnly(row, "inSchedStDt", true);
    gr_result.setCellReadOnly(row, "inSchedEndDt", true);
  }
};
scwin.gr_result_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex < 0) return;
  dma_DetailRetrieve.set("uploadNo", ds_result.getCellData(rowIndex, "uploadNo"));
  scwin.f_DetailRetrieve();
};
scwin.ed_wrkPlCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, txt_wrkPlNm, 1, true);
};
scwin.gr_result_onheaderclick = function (columnIndex, columnId) {
  if (columnId == "chk") {
    let cr = ds_result.getRowCount();
    if (cr > 0) {
      let allChecked = true;
      for (let i = 0; i < cr; i++) {
        if (ds_result.getCellData(i, "chk") != "T") {
          allChecked = false;
          break;
        }
      }
      let chkVal = allChecked ? "F" : "T";
      for (let i = 0; i < cr; i++) {
        ds_result.setCellData(i, "chk", chkVal);
        if (chkVal == "F") {
          ds_result.undoRow(i);
        }
      }
    }
  }
};
scwin.gr_DetailResult_onheaderclick = function (columnIndex, columnId) {
  if (columnId == "chk") {
    let cr = ds_DetailResult.getRowCount();
    if (cr > 0) {
      let allChecked = true;
      for (let i = 0; i < cr; i++) {
        if (ds_DetailResult.getCellData(i, "chk") != "T") {
          allChecked = false;
          break;
        }
      }
      let chkVal = allChecked ? "F" : "T";
      for (let i = 0; i < cr; i++) {
        ds_DetailResult.setCellData(i, "chk", chkVal);
        if (chkVal == "F") {
          ds_DetailResult.undoRow(i);
        }
      }
    }
  }
};
scwin.btn_upload_onclick = function (e) {
  scwin.f_upload();
};
scwin.btn_delRowDetail_onclick = function (e) {
  scwin.f_delRowDetail();
};
scwin.f_runExcel = function (gridObj) {
  $c.data.downloadGridViewExcel($p, gridObj, {
    "fileName": "입고예정정보업로드.xlsx",
    "sheetName": "입고예정정보업로드"
  });
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_wrkPl',codeId:'ed_wrkPlCd',nameId:'txt_wrkPlNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_autoComplete1',search:'start',style:'width:200px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_spply',placeholder:'',style:'width:150px;',ref:'data:ds_condition.spplyNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당사오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_input2',placeholder:'',style:'width:150px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_autoComplete3',search:'start',style:'width:250px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_autoComplete4',search:'start',style:'width:250px;',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요청처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_input3',placeholder:'',style:'width: 85px;'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_trigger6',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_autoComplete6',search:'start',style:'',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_input4',placeholder:'',style:'width: 85px;'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_trigger7',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_autoComplete7',search:'start',style:'',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수요가',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_wrkPlNm',hideName:'Y',popupID:'',style:'width:250px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width:250px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width:250px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가/합적/확정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'/',class:''}},{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'',id:'rd_radio1',renderType:'radiogroup',rows:'',class:'',cols:'',selectedIndex:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'/',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'From ~ To',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width:250px;',hideName:'Y'}},{T:1,N:'xf:input',A:{style:'width:200px;',id:'ed_input13',placeholder:'',class:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~',ref:'',style:'',userData2:''}},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width:250px;'}},{T:1,N:'xf:input',A:{class:'',id:'ed_input14',placeholder:'',style:'width:200px;'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_inputCalendar1',pickerType:'dynamic',style:''}},{T:1,N:'xf:input',A:{class:'tac',dataType:'time',id:'ed_input5',style:'width: 50px;'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger8',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전일'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger9',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당일'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'도착일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_inputCalendar2',pickerType:'dynamic',style:''}},{T:1,N:'xf:input',A:{class:'tac',dataType:'time',id:'ed_input6',style:'width: 50px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업유형',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_autoComplete5',search:'start',style:'width:150px;',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상차담당',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_input7',placeholder:'',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_input8',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하차담당',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_input9',placeholder:'',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_input10',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더담당',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_input11',placeholder:'',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_input12',placeholder:'',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'특이사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'txt_textarea1',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀책사유',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_autoComplete2',search:'start',style:'width:150px;',submenuSize:'auto'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'오더요청 기본정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'납품처명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'발주처명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'전표번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'로그순번',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_autoComplete8',search:'start',style:'width:150px;',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'화주오더종류',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'화주오더번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'화주오더일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'출하수량',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'출발권역',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'도착권역',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'도착예정일시',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상태구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상세주소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'특기사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'오더요청 품명목록 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_result',style:'',autoFit:'allColumn',id:'gr_result',visibleRowNum:'3',class:'wq_gvw',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'chk',value:'거래처번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'uploadNo',value:'화주오더종류코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkPl',value:'화주오더번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntCd',value:'로그순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'delYn',value:'순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inSchedStDt',value:'라인순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inSchedEndDt',value:'ITEM코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'uploadDt',value:'ITEM명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'uploadHh',value:'계약작업경로순번',displayMode:'label',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyCmpyNm',value:'중량단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslNm',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'deg',value:'포장단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totCnt',value:'포장구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'confirmCnt',value:'포장수량',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'chk',displayMode:'label',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'uploadNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkPl',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'delYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'inSchedStDt',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'inSchedEndDt',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'uploadDt',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'uploadHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyCmpyNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslNm',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'deg',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totCnt',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'confirmCnt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:''}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Add',type:'button',class:'btn','ev:onclick':'scwin.btn_Add_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'제품변경저장'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_Delete',label:'저장',type:'button',class:'btn link','ev:onclick':'scwin.btn_Delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'오더 Sheet발행'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Copy',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_Copy_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'작업경로'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_trigger4',label:'저장',type:'button',class:'btn '},E:[{T:1,N:'xf:label',E:[{T:3,text:'계약요율'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_edit',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_del',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]}]}]}]}]})