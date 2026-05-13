/*amd /AI/tp_201_01_04b.xml 52302 68cb2ced64d496dd666de865ce7ae973acc7d6c94d6d2dd21001736683084952 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_ediMappingSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'docCd',name:'문서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'itemCd',name:'항목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'osideCd',name:'외부코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_orderSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mchtOdrKndCd',name:'화주오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mchtOdrNo',name:'화주오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mchtOdrFromDt',name:'화주오더일자FROM',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mchtOdrToDt',name:'화주오더일자TO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dmndNo',name:'수요가번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizLongCd',name:'사업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrCreatCls',name:'오더생성구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrDcsnYn',name:'당사오더확정여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrCompleteYn',name:'당사오더완료여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvIntendDt',name:'도착예정일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dmndNm',name:'수요가명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizLongNm',name:'사업장명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tplSaleCls',name:'판매구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tplSendClsCd',name:'발송구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tplOrderClsCd',name:'발주구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shipBizLongCd',name:'플랜트',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dateQueryCond',name:'일자조회조건',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_contractOrderWorkPathQueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commSeq',name:'품명순번',dataType:'number'}},{T:1,N:'w2:key',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'number'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'number'}},{T:1,N:'w2:key',A:{id:'stdWrkPathNo',name:'표준작업경로번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtWrkPathSeqExcept',name:'계약작업경로순번제외',dataType:'number'}},{T:1,N:'w2:key',A:{id:'repClntNo',name:'대표거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfClsCd',name:'자가구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizLongCd',name:'사업장코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mchtOdrKndCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'docCd',name:'문서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itemCd',name:'항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'osideCd',name:'외부코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'osideCdNm',name:'외부코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalCd',name:'내부코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_shipmentIndicationOrderList'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coBilgClntNo',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrNo',name:'화주오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrKndCd',name:'화주오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrKndNm',name:'화주오더종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logSeq',name:'로그순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntSeq',name:'관리순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distchPath',name:'유통경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsNm',name:'자가구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'작업경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplMchtReqDt',name:'3자물류화주의뢰일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'수요가코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'수요가명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndTelNo',name:'수요가전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndRgnCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dlvyPlCd',name:'납품처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dlvyPlNm',name:'납품처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplArvAddr',name:'납품처상세주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptArvBizLongCd',name:'선적출발ZONE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipBizLongCd',name:'동부출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'사업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipCond',name:'출하조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unqItm',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrRecptDt',name:'오더접수일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrRecptHh',name:'오더접수시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplCommCd',name:'3자물류품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'ITEM수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'총중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'len',name:'길이',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptIntendDt',name:'출발예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptIntendHh',name:'출발예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendDt',name:'도착예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendHh',name:'도착예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomOdrNo',name:'당사오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCreatDt',name:'오더생성시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'당사오더확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnDt',name:'당사오더확정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnHh',name:'당사오더확정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnDtm',name:'당사오더확정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'당사오더완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteDt',name:'당사오더완료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteHh',name:'당사오더완료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteDtm',name:'당사오더완료일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictYn',name:'배차지시여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'beforeOdrTransWrkIndictYn',name:'이전오더배차지시여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zipWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zipWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stsClsCd',name:'선적번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipClsCd',name:'자가구분LookUp',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipClsNm',name:'제품구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_selfClsCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_contractWorkPathList'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_reterieveMchtOdrKnd',action:'/ds.tp.dongbusteel.odrmgnt.RetrieveEdiMappingCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_ediMappingSearch","key":"IN_DS1"},{"id":"ds_mchtOdrKndCd","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_mchtOdrKndCd","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_reterieveMchtOdrKnd_submitdone','ev:submiterror':'scwin.sbm_reterieveMchtOdrKnd_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_reterieve',action:'/ds.tp.dongbusteel.odrmgnt.RetrieveDongbusteelOutOrderCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_orderSearch","key":"IN_DS1"},{"id":"ds_shipmentIndicationOrderList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_shipmentIndicationOrderList","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_reterieve_submitdone','ev:submiterror':'scwin.sbm_reterieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_reterieveCtrtWrkPathSeq',action:'/ds.tp.dongbusteel.odrmgnt.RetrieveCtrtWrkPathSeqCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_contractOrderWorkPathQueryCondition","key":"IN_DS1"},{"id":"ds_contractWorkPathList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_contractWorkPathList","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_reterieveCtrtWrkPathSeq_submitdone','ev:submiterror':'scwin.sbm_reterieveCtrtWrkPathSeq_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.tp.dongbusteel.odrmgnt.RegistDongbusteelOutOrderCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_shipmentIndicationOrderList","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_selfClsCd',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=SD114',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_selfClsCd","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_selfClsCd","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_selfClsCd_submitdone','ev:submiterror':'scwin.sbm_selfClsCd_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.globalRow = 0;
scwin.pageTitle = "출고오더현황";
scwin.userClsCd = "";
scwin.loginClntNo = "";
scwin.loginClntNm = "";
scwin.strCurDate = "";
scwin.strPreDate = "";
scwin.strNextDate = "";
scwin.docCd = "ODRKND_001";
scwin.wrkPlCd = "999";
scwin.itemCd = "";
scwin.hid_chkDmndNo = "";
scwin.hid_chkArvWrkPlCd = "";
scwin.hid_chkCommCd = "";
scwin.hid_docCd = "";
scwin.hid_wrkPlCd = "";
scwin.hid_itemCd = "";
scwin.hid_osideCd = "";
scwin.hid_repClntNo = "";
scwin.ST_REPCLNTNO_STEEL = "";
scwin.onpageload = async function () {
  scwin.strCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.strPreDate = $c.date.addDate($p, scwin.strCurDate, -1);
  scwin.strNextDate = $c.date.addDate($p, scwin.strCurDate, 1);
  scwin.userClsCd = $c.ses.getUserClsCd() || "";
  scwin.loginClntNo = $c.ses.getClntNo() || "";
  scwin.loginClntNm = $c.ses.getClntNm() || "";
  if (scwin.userClsCd == "04") {
    scwin.pageTitle = "고객오더현황";
  }
  if (scwin.userClsCd == "01") {
    scwin.loginClntNo = "";
    scwin.loginClntNm = "";
  }
  scwin.ST_REPCLNTNO_STEEL = $c.ses.getStRepClntNoSteel() || "";
  scwin.f_defaultValue();
};
scwin.onUdcCompleted = function () {
  if (!$c.gus.cfIsNull($p, ed_clntNo.getValue())) {
    scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), "", "T", "F");
  }
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableKey($p);
  ed_clntNo.setFocus();
  scwin.f_retrieveGridLookup();
  if (scwin.userClsCd != "01") {
    $c.gus.cfDisableObjects($p, [ed_clntNo]);
  }
};
scwin.f_retrieveGridLookup = async function () {
  await $c.sbm.execute($p, sbm_selfClsCd);
};
scwin.f_defaultValue = function () {
  scwin.hid_docCd = scwin.docCd;
  scwin.hid_wrkPlCd = scwin.wrkPlCd;
  scwin.f_FieldClear();
  ed_clntNo.setValue(scwin.ST_REPCLNTNO_STEEL);
};
scwin.f_Retrieve = async function () {
  if ($c.gus.cfIsNull($p, ed_clntNo.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("거래처"));
    ed_clntNo.setFocus();
    return false;
  }
  if (ed_mchtOdrFromDt.getValue().replace(/\s*$/, '').trim() == "") {
    ed_mchtOdrFromDt.setValue("");
  }
  if (ed_mchtOdrToDt.getValue().replace(/\s*$/, '').trim() == "") {
    ed_mchtOdrToDt.setValue("");
  }
  if (ed_mchtOdrFromDt.getValue() != ed_mchtOdrToDt.getValue() && eval(ed_mchtOdrFromDt.getValue()) + 1 != ed_mchtOdrToDt.getValue() && eval(ed_mchtOdrFromDt.getValue()) + 2 != ed_mchtOdrToDt.getValue()) {
    await $c.win.alert($p, "출고의뢰(화주오더)일자 조회기간을 최대 2일까지만 조회해주세요.");
    ed_mchtOdrFromDt.setFocus();
    return;
  }
  let chkValid = await $c.gus.cfValidate($p, [ed_mchtOdrFromDt, ed_mchtOdrToDt]);
  if (!chkValid) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_mchtOdrFromDt.getValue(), ed_mchtOdrToDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_048, new Array("화주오더일자 From", "화주오더일자 To"));
    ed_mchtOdrFromDt.setFocus();
    return false;
  }
  let diffObj = $c.gus.cfDifferBetween($p, ed_mchtOdrFromDt.getValue(), ed_mchtOdrToDt.getValue());
  if (diffObj.year > 0 || diffObj.month > 0) {
    let chkConfirm = await $c.win.confirm($p, "화주오더기간 이 1개월이 넘습니다.조회하시겠습니까?");
    if (!chkConfirm) {
      ed_mchtOdrFromDt.setFocus();
      return false;
    }
  }
  $c.gus.cfShowDSWaitMsg($p, gr_shipmentIndicationOrderList);
  scwin.f_ProcessBinding();
  await $c.sbm.execute($p, sbm_reterieve);
};
scwin.f_ProcessBinding = function () {
  dma_orderSearch.set("clntNo", scwin.hid_repClntNo);
  dma_orderSearch.set("clntNm", "");
  dma_orderSearch.set("mchtOdrFromDt", ed_mchtOdrFromDt.getValue());
  dma_orderSearch.set("mchtOdrToDt", ed_mchtOdrToDt.getValue());
  dma_orderSearch.set("mchtOdrKndCd", lc_mchtOdrKndCd.getValue());
  dma_orderSearch.set("mchtOdrNo", ed_mchtOdrNo.getValue());
  dma_orderSearch.set("shipBizLongCd", ed_bizLongCd.getValue());
  dma_orderSearch.set("bizLongNm", "");
  dma_orderSearch.set("dmndNo", ed_dmndNo.getValue());
  dma_orderSearch.set("dmndNm", "");
  dma_orderSearch.set("odrCreatCls", lc_odrCreatCls.getValue());
  dma_orderSearch.set("odrDcsnYn", lc_odrDcsnYn.getValue());
  dma_orderSearch.set("odrCompleteYn", lc_odrCompleteYn.getValue());
  dma_orderSearch.set("arvIntendDt", ed_arvIntendDt.getValue());
  dma_orderSearch.set("dateQueryCond", lc_dateQueryCond.getValue());
};
scwin.f_Save = async function () {
  let chkValid = await $c.gus.cfValidate($p, [gr_shipmentIndicationOrderList]);
  if (!chkValid) {
    return;
  }
  let flag = 0;
  let countRow = ds_shipmentIndicationOrderList.getRowCount();
  let i = 0;
  while (i < countRow) {
    if (ds_shipmentIndicationOrderList.getCellData(i, "chk") == "T") {
      flag += 1;
      ++i;
    } else {
      ds_shipmentIndicationOrderList.removeRow(i);
      --countRow;
    }
  }
  if (flag == 0) {
    await $c.win.alert($p, "등록하실 오더데이터를 선택하십시요.");
    return;
  }
  let chkConfirm = await $c.win.confirm($p, "오더 일괄 등록을 실행 하시겠습니까?");
  if (chkConfirm) {
    await $c.sbm.execute($p, sbm_save);
  } else {
    scwin.f_Retrieve();
    return;
  }
};
scwin.f_RetrieveCtrtWrkPathSeq = async function (row) {
  dma_contractOrderWorkPathQueryCondition.set("odrKndCd", ds_shipmentIndicationOrderList.getCellData(row, "mchtOdrKndCd"));
  dma_contractOrderWorkPathQueryCondition.set("repClntNo", ds_shipmentIndicationOrderList.getCellData(row, "repClntNo"));
  dma_contractOrderWorkPathQueryCondition.set("selfClsCd", ds_shipmentIndicationOrderList.getCellData(row, "selfClsCd"));
  dma_contractOrderWorkPathQueryCondition.set("bizLongCd", ds_shipmentIndicationOrderList.getCellData(row, "coCd"));
  scwin.globalRow = row;
  await $c.sbm.execute($p, sbm_reterieveCtrtWrkPathSeq);
};
scwin.f_setCtrtWrkPathSeq = function (ctrtWrkPathSeq, ctrtWrkPathNm) {
  ds_shipmentIndicationOrderList.setCellData(scwin.globalRow, "ctrtWrkPathSeq", ctrtWrkPathSeq);
  ds_shipmentIndicationOrderList.setCellData(scwin.globalRow, "ctrtWrkPathNm", ctrtWrkPathNm);
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [ed_mchtOdrFromDt, ed_mchtOdrToDt, ed_arvIntendDt, ed_bizLongCd, ed_clntNo]);
  ed_mchtOdrFromDt.setValue(scwin.strPreDate);
  ed_mchtOdrToDt.setValue(scwin.strNextDate);
  ed_clntNo.setFocus();
};
scwin.f_EndDTClear = async function () {
  ed_arvIntendDt.setValue("");
  await $c.win.alert($p, "개발중입니다.");
  return;
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList;
  let pWhere;
  switch (disGubun) {
    case 1:
      udc_comCode_Grid.ilCommonPopUp(scwin.callbackClntInfo, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "계약 거래처,거래처코드,거래처명");
      break;
    case 2:
      let v_clntNo = ed_clntNo.getValue();
      let v_itemCd = "COMPANY";
      let v_wrkPlCd = scwin.wrkPlCd;
      if ($c.gus.cfIsNull($p, v_clntNo)) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("거래처"));
        ed_clntNo.setFocus();
        return false;
      }
      pWhere = v_clntNo + "," + v_itemCd + "," + v_wrkPlCd;
      udc_comCode_Grid.ilCommonPopUp(scwin.callbackBizLongInfo, pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, "공장,공장코드,공장명");
      break;
    case 3:
      if (!$c.gus.cfIsNull($p, ed_clntNo.getValue().trim())) {
        pWhere = ed_clntNo.getValue().trim();
      }
      udc_comCode_Grid.ilCommonPopUp(scwin.callbackDmndInfo, pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, "수요가,수요가번호,수요가명");
      break;
    case 4:
      pWhere = null;
      udc_comCode_Grid.ilCommonPopUp(scwin.callbackWrkPlInfo, pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, "도착작업장,작업장코드,작업장명");
      break;
  }
};
scwin.callbackClntInfo = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, null, null);
  if (rtnList != null && rtnList.length > 2) {
    scwin.hid_repClntNo = rtnList[2] || "";
  }
  if ($c.gus.cfIsNull($p, scwin.hid_repClntNo)) {
    scwin.hid_repClntNo = ed_clntNo.getValue();
  }
  if (rtnList != null && rtnList[0] != "N/A") {
    scwin.f_ProcessBindingEdiMapping();
    await $c.sbm.execute($p, sbm_reterieveMchtOdrKnd);
  }
};
scwin.f_ProcessBindingEdiMapping = function () {
  dma_ediMappingSearch.set("docCd", scwin.hid_docCd);
  dma_ediMappingSearch.set("clntNo", scwin.hid_repClntNo);
  dma_ediMappingSearch.set("wrkPlCd", scwin.hid_wrkPlCd);
  dma_ediMappingSearch.set("itemCd", scwin.hid_itemCd);
  dma_ediMappingSearch.set("osideCd", scwin.hid_osideCd);
};
scwin.callbackBizLongInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bizLongCd, null);
};
scwin.callbackDmndInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, null, null);
};
scwin.callbackWrkPlInfo = function (rtnList) {
  let row = ds_shipmentIndicationOrderList.getRowPosition();
  if (rtnList != null && rtnList[0] != "N/A") {
    ds_shipmentIndicationOrderList.setCellData(row, "zipWrkPlCd", rtnList[0] || "");
    ds_shipmentIndicationOrderList.setCellData(row, "zipWrkPlNm", rtnList[1] || "");
  }
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_orderRequestProcess = async function () {
  let row = ds_shipmentIndicationOrderList.getRowPosition();
  let strOrderRequestProcessUrl = "/ui/ds/tp/dongbusteel/odrmgnt/tp_201_01_02t.xml";
  if (row > -1) {
    let v_repClntNo = ds_shipmentIndicationOrderList.getCellData(row, "repClntNo");
    let v_clntNo = ds_shipmentIndicationOrderList.getCellData(row, "clntNo");
    let v_clntNm = ds_shipmentIndicationOrderList.getCellData(row, "clntNm");
    let v_mchtOdrKndCd = ds_shipmentIndicationOrderList.getCellData(row, "mchtOdrKndCd");
    let v_mchtOdrKndNm = ds_shipmentIndicationOrderList.getCellData(row, "mchtOdrKndNm");
    let v_mchtOdrNo = ds_shipmentIndicationOrderList.getCellData(row, "mchtOdrNo");
    let v_mcomOdrNo = ds_shipmentIndicationOrderList.getCellData(row, "mcomOdrNo");
    let v_logSeq = ds_shipmentIndicationOrderList.getCellData(row, "logSeq");
    if ($c.gus.cfIsNull($p, v_repClntNo)) {
      v_repClntNo = v_clntNo;
    }
    let param = {
      repClntNo: v_repClntNo,
      clntNo: v_clntNo,
      clntNm: v_clntNm,
      mchtOdrKndCd: v_mchtOdrKndCd,
      mchtOdrKndNm: v_mchtOdrKndNm,
      mchtOdrNo: v_mchtOdrNo,
      mcomOdrNo: v_mcomOdrNo,
      logSeq: v_logSeq,
      type: "retrieve"
    };
    $c.win.openMenu($p, "오더요청등록(제강)", strOrderRequestProcessUrl, "tp_201_01_02t.xml", param);
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, new Array("오더요청현황"));
    return;
  }
};
scwin.f_merchantOrderEachWorkPresentCondition = async function () {
  let row = ds_shipmentIndicationOrderList.getRowPosition();
  let strOrderRequestProcessUrl = "/ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_01b.xml";
  if (row > -1) {
    let v_repClntNo = ds_shipmentIndicationOrderList.getCellData(row, "repClntNo");
    let v_clntNo = ds_shipmentIndicationOrderList.getCellData(row, "clntNo");
    let v_mchtOdrNo = ds_shipmentIndicationOrderList.getCellData(row, "mchtOdrNo");
    let v_mchtOdrKndCd = ds_shipmentIndicationOrderList.getCellData(row, "mchtOdrKndCd");
    if ($c.gus.cfIsNull($p, v_repClntNo)) {
      v_repClntNo = v_clntNo;
    }
    let param = {
      clntNo: v_repClntNo,
      mchtOdrNo: v_mchtOdrNo,
      mchtOdrKndCd: v_mchtOdrKndCd
    };
    $c.win.openMenu($p, "화주오더별작업현황", strOrderRequestProcessUrl, "as_102_01_01b.xml", param);
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, new Array("오더요청현황"));
    return;
  }
};
scwin.sbm_reterieveMchtOdrKnd_submitdone = function (e) {
  lc_mchtOdrKndCd.setSelectedIndex(0);
};
scwin.sbm_reterieveMchtOdrKnd_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_reterieve_submitdone = async function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_shipmentIndicationOrderList);
  if (ds_shipmentIndicationOrderList.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, new Array("조회결과"));
  }
  spa_totalRow.setValue(ds_shipmentIndicationOrderList.getRowCount());
};
scwin.sbm_reterieve_submiterror = function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_shipmentIndicationOrderList);
  $c.gus.cfShowError($p, e);
};
scwin.sbm_save_submitdone = async function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_shipmentIndicationOrderList);
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_shipmentIndicationOrderList);
  $c.gus.cfShowError($p, e);
};
scwin.sbm_reterieveCtrtWrkPathSeq_submitdone = function (e) {
  if (ds_contractWorkPathList.getRowCount() > 0) {
    scwin.f_setCtrtWrkPathSeq(ds_contractWorkPathList.getCellData(0, "ctrtWrkPathSeq"), ds_contractWorkPathList.getCellData(0, "ctrtWrkPathNm"));
  }
};
scwin.sbm_reterieveCtrtWrkPathSeq_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_selfClsCd_submitdone = function (e) {};
scwin.sbm_selfClsCd_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.gr_shipmentIndicationOrderList_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (rowIndex == -1 && columnId == "chk") {
    for (let i = 0; i < ds_shipmentIndicationOrderList.getRowCount(); i++) {
      if (ds_shipmentIndicationOrderList.getCellData(i, "mcomOdrNo").trim() == '' && ds_shipmentIndicationOrderList.getCellData(i, "shipBizLongCd").trim() != '' && ds_shipmentIndicationOrderList.getCellData(i, "shipBizLongCd").trim() != '-' && ds_shipmentIndicationOrderList.getCellData(i, "dmndRgnCd").trim() != '' && ds_shipmentIndicationOrderList.getCellData(i, "bizLongCd").trim() != '' && ds_shipmentIndicationOrderList.getCellData(i, "ctrtNo").trim() != '' && ds_shipmentIndicationOrderList.getCellData(i, "ctrtWrkPathSeq") != '' && ds_shipmentIndicationOrderList.getCellData(i, "tplCommCd").trim() != '' && ds_shipmentIndicationOrderList.getCellData(i, "beforeOdrTransWrkIndictYn") == "0") {
        ds_shipmentIndicationOrderList.setCellData(i, "chk", "T");
      } else {
        ds_shipmentIndicationOrderList.setCellData(i, "chk", "F");
      }
    }
  } else if (columnId == "chk") {
    let currentMcomOdrNo = ds_shipmentIndicationOrderList.getCellData(rowIndex, "mcomOdrNo");
    if (currentMcomOdrNo != "") {
      await $c.win.alert($p, "오더가 이미 생성되어 있습니다.");
      ds_shipmentIndicationOrderList.setCellData(rowIndex, "chk", "F");
      return;
    }
    if (parseInt(ds_shipmentIndicationOrderList.getCellData(rowIndex, "beforeOdrTransWrkIndictYn")) > 0) {
      await $c.win.alert($p, "이전 오더가 이미 배차되었습니다.");
      ds_shipmentIndicationOrderList.setCellData(rowIndex, "chk", "F");
      return;
    }
    if (ds_shipmentIndicationOrderList.getCellData(rowIndex, "shipBizLongCd").trim() == '' || ds_shipmentIndicationOrderList.getCellData(rowIndex, "shipBizLongCd").trim() == '-') {
      await $c.win.alert($p, "출발작업장 데이터가 없습니다.");
      ds_shipmentIndicationOrderList.setCellData(rowIndex, "chk", "F");
      return;
    }
    if (ds_shipmentIndicationOrderList.getCellData(rowIndex, "bizLongCd").trim() == '') {
      await $c.win.alert($p, "사업장 데이터가 없습니다.");
      ds_shipmentIndicationOrderList.setCellData(rowIndex, "chk", "F");
      return;
    }
    if (ds_shipmentIndicationOrderList.getCellData(rowIndex, "dmndRgnCd").trim() == '') {
      await $c.win.alert($p, "도착작업장 데이터가 없습니다.");
      ds_shipmentIndicationOrderList.setCellData(rowIndex, "chk", "F");
      return;
    }
    if (ds_shipmentIndicationOrderList.getCellData(rowIndex, "ctrtNo").trim() == '') {
      await $c.win.alert($p, "계약 번호가 없습니다.");
      ds_shipmentIndicationOrderList.setCellData(rowIndex, "chk", "F");
      return;
    }
    if (ds_shipmentIndicationOrderList.getCellData(rowIndex, "ctrtWrkPathSeq") == '') {
      await $c.win.alert($p, "계약 작업 경로가 없습니다.");
      ds_shipmentIndicationOrderList.setCellData(rowIndex, "chk", "F");
      return;
    }
    if (ds_shipmentIndicationOrderList.getCellData(rowIndex, "tplCommCd").trim() == '') {
      await $c.win.alert($p, "제품코드가 없습니다.");
      ds_shipmentIndicationOrderList.setCellData(rowIndex, "chk", "F");
      return;
    }
    for (let i = 0; i < ds_shipmentIndicationOrderList.getRowCount(); i++) {
      if (rowIndex != i && ds_shipmentIndicationOrderList.getCellData(rowIndex, "mchtOdrNo") == ds_shipmentIndicationOrderList.getCellData(i, "mchtOdrNo") && ds_shipmentIndicationOrderList.getCellData(i, "mcomOdrNo").trim() == '') {
        ds_shipmentIndicationOrderList.setCellData(i, "chk", ds_shipmentIndicationOrderList.getCellData(rowIndex, "chk"));
      }
    }
  }
};
scwin.gr_shipmentIndicationOrderList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "chk" || columnId == "selfClsCd") {
    return;
  }
};
scwin.gr_shipmentIndicationOrderList_ontextimageclick = function (rowIndex, columnIndex) {
  let columnId = gr_shipmentIndicationOrderList.getColumnID(columnIndex);
  switch (columnId) {
    case "zipWrkPlNm":
      let pName = ds_shipmentIndicationOrderList.getCellData(ds_shipmentIndicationOrderList.getRowPosition(), "zipWrkPlNm");
      scwin.f_openCommonPopUp(4, '', pName, 'F', 'T');
      break;
    case "dptIntendDt":
      $c.gus.cfOpenCalendar($p, gr_shipmentIndicationOrderList, rowIndex, columnId);
      break;
    case "arvIntendDt":
      $c.gus.cfOpenCalendar($p, gr_shipmentIndicationOrderList, rowIndex, columnId);
      break;
  }
};
scwin.gr_shipmentIndicationOrderList_onaftercolumnmove = function (rowIndex, columnId) {
  switch (columnId) {
    case "chk":
      let value = ds_shipmentIndicationOrderList.getCellData(rowIndex, "mcomOdrNo");
      if (value != "") {
        ds_shipmentIndicationOrderList.setCellData(rowIndex, "chk", "F");
      }
      break;
  }
};
scwin.gr_shipmentIndicationOrderList_oncloseup = function (rowIndex, columnId) {
  if (columnId == "selfClsCd") {
    scwin.f_RetrieveCtrtWrkPathSeq(rowIndex);
  }
};
scwin.ed_clntNo_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, null, 1);
};
scwin.ed_bizLongCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bizLongCd, null, 2);
};
scwin.ed_arvIntendDt_onkeydown = function (e) {
  scwin.f_EndDTClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
  scwin.f_defaultValue();
};
scwin.btnSave_onclick = function (e) {
  scwin.f_Save();
};
scwin.ds_mchtOdrKndCd_onloadcompleted = function (e) {
  let rowCnt = ds_mchtOdrKndCd.getRowCount();
  if (rowCnt == 0) {} else {
    ds_mchtOdrKndCd.insertRow(0);
    ds_mchtOdrKndCd.setCellData(0, "osideCd", "");
    ds_mchtOdrKndCd.setCellData(0, "osideCdNm", "전체");
  }
};
scwin.ds_shipmentIndicationOrderList_onloadcompleted = async function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_shipmentIndicationOrderList);
  let rowCnt = ds_shipmentIndicationOrderList.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, new Array("조회결과"));
  }
  spa_totalRow.setValue(rowCnt);
};
scwin.ds_shipmentIndicationOrderList_onrowpositionchange = function (rowIndex) {
  let value = ds_shipmentIndicationOrderList.getCellData(rowIndex, "mcomOdrNo");
  // TODO: GAUCE 원본에서 주석 처리된 chk Edit 제어 로직 — 필요 시 구현
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_clntNo',placeholder:'',style:'width:150px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mchtOdrFromDt',placeholder:'',style:'width:150px;',ref:'data:ds_orderSearch.mchtOdrFromDt',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mchtOdrToDt',placeholder:'',style:'width:150px;',ref:'data:ds_orderSearch.mchtOdrToDt',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실화주',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_arvIntendDt',placeholder:'',style:'width:150px;',ref:'data:ds_orderSearch.arvIntendDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_bizLongCd',placeholder:'',style:'width:150px;',ref:'data:ds_orderSearch.shipBizLongCd'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'작업경로',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridDownYn:'N',gridUpYn:'N',grp:'grd_section1',style:'',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_shipmentIndicationOrderList',style:'',autoFit:'allColumn',id:'gr_shipmentIndicationOrderList',visibleRowNum:'7',class:'wq_gvw',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'chk',value:'오더번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stsClsCd',value:'오더품명순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mchtOdrNo',value:'품명코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'220',inputType:'text',id:'tplMchtReqDt',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mchtOdrKndCd',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'shipClsCd',value:'중량(KG)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'shipClsNm',value:'CBM',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ctrtNo',value:'출발작업장구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ctrtWrkPathSeq',value:'출발작업장코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'ctrtWrkPathNm',value:'출발작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dmndNo',value:'도착작업장구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dmndNm',value:'도착작업장코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'dmndTelNo',value:'도착작업장',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'odrDcsnDt',value:'오더작업경로순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'odrDcsnHh',value:'계약번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'odrCompleteDt',value:'작업경로',displayMode:'label',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'odrCompleteHh',value:'작업시작일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dmndNm',value:'작업시작시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dmndRgnCd',value:'작업종료일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dlvyPlCd',value:'작업종료시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'dlvyPlNm',value:'매출여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tplArvAddr',value:'실적번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'dptArvBizLongCd',value:'실적여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'checkbox',id:'chk',displayMode:'label',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stsClsCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mchtOdrNo',displayMode:'label',readOnly:'true',class:'underline',style:'color:{if(mcomodrno=;'}},{T:1,N:'w2:column',A:{width:'220',inputType:'text',id:'tplMchtReqDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mchtOdrKndCd',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'shipClsCd',displayMode:'label',textAlign:'center'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'cd:cdNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_selfClsCd'}]}]}]}]},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'shipClsNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ctrtNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ctrtWrkPathSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'ctrtWrkPathNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dmndNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dmndNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'dmndTelNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'odrDcsnDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'odrDcsnHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'odrCompleteDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'odrCompleteHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dmndNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dmndRgnCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dlvyPlCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'dlvyPlNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tplArvAddr',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'dptArvBizLongCd',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업단계',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{btnUser:'N',gridDownYn:'N',gridUpYn:'N',grp:'grd_section2',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'',id:'gr_gridView2',style:'',visibleRowNum:'7',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'오더번호',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'품명순번',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'작업경로순번',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'계약작업경로순번',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'작업경로',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'작업단계순번',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'작업장구분',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'작업단계',width:'140',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'사업영역코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'매출입항목코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column55',value:'매출입항목',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'출발작업장코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column51',value:'작업장',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'출발작업장',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'도착작업장코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'도착작업장',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'작업물류점소코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column41',value:'작업점소',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'작업물류점소',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'작업시작일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'작업시작시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'작업종료일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'작업종료시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'매출귀속부서코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column27',value:'매출귀속부서',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'매출귀속부서',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'선박코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'선박명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',value:'항차',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'선명항차',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'RegID',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'RegDTM',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column18',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column16',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column14',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column12',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column10',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column6',inputType:'text',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column8',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column20',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column56',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column52',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column50',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column38',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column32',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column62',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn link'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'할인할증'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업일시배분 조회 및 수정'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_edit',label:'저장',style:'',type:'button',disabled:'true'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btnSave',label:'저장',style:'',type:'button',disabled:'true'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})