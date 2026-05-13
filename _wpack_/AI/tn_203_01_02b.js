/*amd /AI/tn_203_01_02b.xml 50201 3c12ffc45045b735c9bf1cb4ae6417872873cdae06adbbce85688a82118fdd25 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrSearchGubun',name:'오더조회조건구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrDtFrom',name:'오더기간From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrDtTo',name:'오더기간To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regId',name:'등록자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regBranCd',name:'등록점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrDcsnYn',name:'오더확정여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfClsCd',name:'자가구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'railroadAdptDstCd',name:'운송구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgCho',name:'사용자선택',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgVal',name:'사용자값',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntNo',name:'관리번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'WEB/EDI',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'오더구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'오더등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsNm',name:'자가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNn',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blBkNo',name:'BL/BK',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtl',name:'출발상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'도착상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr20e',name:'20E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr20f',name:'20F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr40e',name:'40E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr40f',name:'40F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrRf',name:'RF',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrDc',name:'DC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrSellamt',name:'매출금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrPchsamt',name:'매입금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkStDtm',name:'출발예정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDtm',name:'도착예정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnDtm',name:'확정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteDtm',name:'완료일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'확정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'화물구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadAdptDstCd',name:'운송구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclYn',name:'취소여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdPortcnt',name:'선박/항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blBk',name:'BL(BK)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'수요가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPatternNm',name:'작업유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclItemNm',name:'취소항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr4he',name:'4HE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr4hf',name:'4HF',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr45e',name:'45E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr45f',name:'45F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uncompleteCntr45f',name:'미완료45F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uncompleteCntr20e',name:'미완료20E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uncompleteCntr20f',name:'미완료20F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uncompleteCntr40e',name:'미완료40E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uncompleteCntr40f',name:'미완료40F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uncompleteCntr4he',name:'미완료4HE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uncompleteCntr4hf',name:'미완료4HF',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uncompleteCntr45e',name:'미완료45E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uncompleteCntr45f2',name:'미완료45F2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hayukYn',name:'하역완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'수출입구분코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/tn.sd.odrmgnt.odrregprscond.RetrieveOdrPrsCondCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_cond","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_out","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submiterror':'scwin.sbm_Retrieve_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.lobranCd = "";
scwin.lobranNm = "";
scwin.strCurDate = "";
scwin.strPreDate = "";
scwin.strCntrOdrRegUrlC1 = "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_05b.xml";
scwin.strCntrOdrRegUrlC2 = "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_03b.xml";
scwin.strCntrOdrRegUrlC3 = "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_06b.xml";
scwin.strCntrOdrRegUrlC4 = "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_04b.xml";
scwin.strCntrOdrRegUrlC5 = "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_07b.xml";
scwin.strBulkOdrRegUrl = "/ui/tn/sd/odrmgnt/bulkodrreg/tn_202_02_05b.xml";
scwin.hid_chkCvsslMgntNo = "";
scwin.hid_chkLineCd = "";
scwin.hid_chkBilgClntNo = "";
scwin.hid_chkRegId = "";
scwin.hid_chkRegBranCd = "";
scwin.hid_autoOrderYn = "";
scwin.hid_autoOdrYn = "";
scwin.hid_checkOrder = "";
scwin.DOMESTIC_CD = "D";
scwin.ODR_BULK = "B";
scwin.ODR_CNTR = "C";
scwin.OPTIONAL_COLOR = "#000000";
scwin.MANDATORY_COLOR = "#FF0000";
scwin.onpageload = async function () {
  scwin.lobranCd = $c.ses.getLobranCd();
  scwin.lobranNm = $c.ses.getLobranNm();
  if (scwin.lobranCd == null) scwin.lobranCd = "";
  if (scwin.lobranNm == null) scwin.lobranNm = "";
  scwin.strCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.strPreDate = $c.date.addDate($p, scwin.strCurDate, -3);
  scwin.f_defaultValue();
};
scwin.onUdcCompleted = async function () {
  udc_odrDt.setInitDate(scwin.strPreDate, scwin.strCurDate);
  ed_regBranCd.setValue(scwin.lobranCd);
  txt_regBranNm.setValue(scwin.lobranNm);
};
scwin.dataSetDebug = async function (dataList, isDebug) {
  if (isDebug == true) {
    let obj = dataList;
    let str = "[[[[" + obj.getID() + "]]]]]\n";
    let colInfoArr = obj.getColumnIDs();
    for (let dsRow = 0; dsRow < obj.getRowCount(); dsRow++) {
      for (let dsCol = 0; dsCol < colInfoArr.length; dsCol++) {
        str += "[" + colInfoArr[dsCol] + "] " + obj.getCellData(dsRow, colInfoArr[dsCol]) + ", ";
      }
      str += "\n\n";
    }
    await $c.win.alert($p, str);
  }
};
scwin.f_dsOrderRetrieveClear = function () {
  ds_cond.set("odrDtFrom", "");
  ds_cond.set("odrDtTo", "");
  ds_cond.set("odrNo", "");
  ds_cond.set("odrDcsnYn", "");
  ds_cond.set("odrKndCd", "");
  ds_cond.set("transCargoClsCd", "");
  ds_cond.set("impExpDomesticClsCd", "");
  ds_cond.set("cvsslMgntNo", "");
  ds_cond.set("lineCd", "");
  ds_cond.set("bilgClntNo", "");
  ds_cond.set("selfClsCd", "");
  ds_cond.set("regId", "");
  ds_cond.set("regBranCd", "");
  ds_cond.set("bilgVal", "");
  ds_cond.set("bilgCho", "");
  ds_cond.set("mgntNo", "");
};
scwin.f_Retrieve = async function () {
  if (acb_odrSearchGubun.getValue() == "0") {
    let chk = await $c.gus.cfValidate($p, [ica_odrDtFrom, ica_odrDtTo]);
    if (!chk) {
      return;
    }
    if (!$c.gus.cfIsAfterDate($p, ica_odrDtFrom.getValue(), ica_odrDtTo.getValue())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_048, ["오더기간 From", "오더기간 To"]);
      ica_odrDtFrom.setFocus();
      return false;
    }
    let diffObj = $c.gus.cfDifferBetween($p, ica_odrDtFrom.getValue(), ica_odrDtTo.getValue());
    if (diffObj.year > 0 || diffObj.month > 0) {
      let confirmResult = await $c.win.confirm($p, "오더기간 이 1개월이 넘습니다.조회하시겠습니까?");
      if (!confirmResult) {
        ica_odrDtFrom.setFocus();
        return false;
      }
    }
  }
  if (txt_bilgClntNm.getValue() == "") {
    ed_bilgClntNo.setValue("");
  }
  ds_cond.set("odrDtFrom", ica_odrDtFrom.getValue());
  ds_cond.set("odrDtTo", ica_odrDtTo.getValue());
  await $c.sbm.execute($p, sbm_Retrieve);
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [tb_searchCondition]);
  acb_odrSearchGubun.setValue("0");
  udc_odrDt.setInitDate(scwin.strPreDate, scwin.strCurDate);
  ed_regBranCd.setValue(scwin.lobranCd);
  txt_regBranNm.setValue(scwin.lobranNm);
  acb_odrKndCd.setFocus();
};
scwin.f_defaultValue = function () {
  scwin.f_dsOrderRetrieveClear();
  scwin.f_FieldClear();
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableKey($p);
  scwin.f_setGridColumn();
};
scwin.f_setGridColumn = function (code) {
  switch (code) {
    case scwin.DOMESTIC_CD:
      gr_orderList.setColumnVisible("cvsslMgntNo", false);
      gr_orderList.setColumnVisible("vsslCd", false);
      gr_orderList.setColumnVisible("portcnt", false);
      gr_orderList.setColumnVisible("lineCd", false);
      gr_orderList.setColumnVisible("dmndNm", true);
      gr_orderList.setColumnVisible("blBkNo", false);
      gr_orderList.setColumnVisible("clntMgntNo", true);
      gr_orderList.setColumnVisible("wrkPatternNm", true);
      gr_orderList.setColumnVisible("odrCnclYn", true);
      gr_orderList.setColumnVisible("odrCnclItemNm", true);
      gr_orderList.setColumnVisible("cntr20e", false);
      gr_orderList.setColumnVisible("cntr20f", false);
      gr_orderList.setColumnVisible("cntr40e", false);
      gr_orderList.setColumnVisible("cntr40f", false);
      gr_orderList.setColumnVisible("cntrRf", false);
      gr_orderList.setColumnVisible("cntrDc", false);
      gr_orderList.setColumnVisible("odrSellamt", false);
      gr_orderList.setColumnVisible("odrPchsamt", false);
      gr_orderList.setColumnVisible("hayukYn", true);
      break;
    case scwin.ODR_BULK:
      gr_orderList.setColumnVisible("cvsslMgntNo", true);
      gr_orderList.setColumnVisible("vsslCd", true);
      gr_orderList.setColumnVisible("portcnt", true);
      gr_orderList.setColumnVisible("lineCd", true);
      gr_orderList.setColumnVisible("dmndNm", false);
      gr_orderList.setColumnVisible("blBkNo", false);
      gr_orderList.setColumnVisible("clntMgntNo", false);
      gr_orderList.setColumnVisible("wrkPatternNm", false);
      gr_orderList.setColumnVisible("odrCnclYn", false);
      gr_orderList.setColumnVisible("odrCnclItemNm", false);
      gr_orderList.setColumnVisible("cntr20e", false);
      gr_orderList.setColumnVisible("cntr20f", false);
      gr_orderList.setColumnVisible("cntr40e", false);
      gr_orderList.setColumnVisible("cntr40f", false);
      gr_orderList.setColumnVisible("cntrRf", false);
      gr_orderList.setColumnVisible("cntrDc", false);
      gr_orderList.setColumnVisible("odrSellamt", false);
      gr_orderList.setColumnVisible("odrPchsamt", false);
      gr_orderList.setColumnVisible("hayukYn", true);
      break;
    case scwin.ODR_CNTR:
      gr_orderList.setColumnVisible("cvsslMgntNo", true);
      gr_orderList.setColumnVisible("vsslCd", true);
      gr_orderList.setColumnVisible("portcnt", true);
      gr_orderList.setColumnVisible("lineCd", true);
      gr_orderList.setColumnVisible("dmndNm", false);
      gr_orderList.setColumnVisible("blBkNo", false);
      gr_orderList.setColumnVisible("clntMgntNo", true);
      gr_orderList.setColumnVisible("wrkPatternNm", false);
      gr_orderList.setColumnVisible("odrCnclYn", false);
      gr_orderList.setColumnVisible("odrCnclItemNm", false);
      gr_orderList.setColumnVisible("cntr20e", true);
      gr_orderList.setColumnVisible("cntr20f", true);
      gr_orderList.setColumnVisible("cntr40e", true);
      gr_orderList.setColumnVisible("cntr40f", true);
      gr_orderList.setColumnVisible("cntrRf", true);
      gr_orderList.setColumnVisible("cntrDc", true);
      gr_orderList.setColumnVisible("odrSellamt", true);
      gr_orderList.setColumnVisible("odrPchsamt", true);
      gr_orderList.setColumnVisible("hayukYn", true);
      break;
    default:
      gr_orderList.setColumnVisible("cvsslMgntNo", true);
      gr_orderList.setColumnVisible("vsslCd", true);
      gr_orderList.setColumnVisible("portcnt", true);
      gr_orderList.setColumnVisible("lineCd", true);
      gr_orderList.setColumnVisible("dmndNm", false);
      gr_orderList.setColumnVisible("blBkNo", false);
      gr_orderList.setColumnVisible("clntMgntNo", true);
      gr_orderList.setColumnVisible("wrkPatternNm", false);
      gr_orderList.setColumnVisible("odrCnclYn", false);
      gr_orderList.setColumnVisible("odrCnclItemNm", false);
      gr_orderList.setColumnVisible("cntr20e", false);
      gr_orderList.setColumnVisible("cntr20f", false);
      gr_orderList.setColumnVisible("cntr40e", true);
      gr_orderList.setColumnVisible("cntr40f", true);
      gr_orderList.setColumnVisible("cntrRf", true);
      gr_orderList.setColumnVisible("cntrDc", true);
      gr_orderList.setColumnVisible("odrSellamt", true);
      gr_orderList.setColumnVisible("odrPchsamt", true);
      gr_orderList.setColumnVisible("hayukYn", true);
      break;
  }
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList = [];
  let pWhere = "";
  switch (disGubun) {
    case 1:
      pWhere = acb_odrKndCd.getItemValue(acb_odrKndCd.getSelectedIndex(), "fltrCd2");
      let arrParam = [];
      arrParam[0] = pCode;
      arrParam[1] = pWhere;
      let popupResult = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", {
        width: 900,
        height: 400,
        modal: true,
        data: {
          paramTitle: "본선관리번호검색팝업",
          param: arrParam
        }
      });
      if (popupResult != null) {
        rtnList = popupResult;
        $c.gus.cfSetReturnValue($p, rtnList, ed_cvsslMgntNo, null, [scwin.hid_chkCvsslMgntNo]);
      }
      break;
    case 3:
      udc_bilgClnt.ilCommonPopUp(scwin.callbackBilgClnt, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "청구 거래처,청구 거래처코드/명");
      break;
    case 4:
      udc_reg.ilCommonPopUp(scwin.callbackRegId, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "등록자,사용자ID/명");
      break;
    case 5:
      pWhere = ",,,T";
      udc_regBran.ilCommonPopUp(scwin.callbackRegBranCd, pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, "등록점소,점소코드/명");
      break;
    case 6:
      udc_line.ilCommonPopUp(scwin.callbackLineCd, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "Line,Line코드/명");
      break;
    default:
      break;
  }
};
scwin.callbackBilgClnt = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgClntNo, txt_bilgClntNm);
};
scwin.callbackRegId = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_regId, txt_regNm);
};
scwin.callbackRegBranCd = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_regBranCd, txt_regBranNm);
};
scwin.callbackLineCd = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd, txt_lineNm);
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");
  } else {
    scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
  }
};
scwin.f_countSuppressCol = function (colid) {
  let count_row = 0;
  let t_colValue = "";
  for (let i = 0; i < ds_out.getRowCount(); i++) {
    if (t_colValue != ds_out.getCellData(i, colid)) {
      count_row++;
      t_colValue = ds_out.getCellData(i, colid);
    }
  }
  return count_row;
};
scwin.f_checkAutoOrder = function () {
  if (scwin.hid_autoOrderYn == "0") {
    scwin.hid_autoOrderYn = "1";
  } else {
    scwin.hid_autoOrderYn = "0";
  }
  acb_odrKndCd.setSelectedIndex(0);
};
scwin.f_orderCntrDetail = async function () {
  let condition = "?PARAM_MAINTAIN_YN=N&";
  let row = ds_out.getRowPosition();
  let strOrderDetailUrl = "/ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_06b.xml";
  if (row > -1) {
    let v_odrNo = ds_out.getCellData(row, "odrNo");
    let v_transCargoClsCd = ds_out.getCellData(row, "transCargoClsCd");
    let param = {
      odrNo: v_odrNo,
      type: "retrieve"
    };
    if (v_transCargoClsCd == scwin.ODR_CNTR) {
      $c.win.openMenu($p, "오더별 컨테이너 작업현황", strOrderDetailUrl, "as_102_01_06b.xml", param);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["오더"]);
    return;
  }
};
scwin.f_cntrWebOdr = function () {
  $c.win.openMenu($p, "컨테이너 웹오더 등록", "/ui/tn/sd/webodrmgnt/cntrwebodrmgnt/tn_201_01_01b.xml", "tn_201_01_01b.xml");
};
scwin.f_bulkWebOdr = function () {
  $c.win.openMenu($p, "벌크 웹오더 등록", "/ui/tn/sd/webodrmgnt/bulkwebodrmgnt/tn_202_01_01b.xml", "tn_202_01_01b.xml");
};
scwin.f_odrCopy = async function () {
  let row = ds_out.getRowPosition();
  if (row < 0) {
    await $c.win.alert($p, "오더를 선택하세요.");
    return;
  }
  let strOrderDetailUrl = "";
  let v_odrNo = ds_out.getCellData(row, "odrNo");
  let v_odrKndCd = ds_out.getCellData(row, "odrKndCd");
  let param = {
    odrNo: v_odrNo,
    linkPage: "odrList",
    odrCopy: "copy",
    PARAM_MAINTAIN_YN: "N"
  };
  if (v_odrKndCd == "C1" || v_odrKndCd == "CS" || v_odrKndCd == "CT") {
    strOrderDetailUrl = scwin.strCntrOdrRegUrlC1;
    $c.win.openMenu($p, "수입본선오더", strOrderDetailUrl, "tn_201_02_05b.xml", param);
  } else if (v_odrKndCd == "C2" || v_odrKndCd == "CX") {
    strOrderDetailUrl = scwin.strCntrOdrRegUrlC2;
    $c.win.openMenu($p, "수입일반오더", strOrderDetailUrl, "tn_201_02_03b.xml", param);
  } else if (v_odrKndCd == "C3" || v_odrKndCd == "CW" || v_odrKndCd == "CR" || v_odrKndCd == "CP") {
    strOrderDetailUrl = scwin.strCntrOdrRegUrlC3;
    $c.win.openMenu($p, "수출본선오더", strOrderDetailUrl, "tn_201_02_06b.xml", param);
  } else if (v_odrKndCd == "C4") {
    strOrderDetailUrl = scwin.strCntrOdrRegUrlC4;
    $c.win.openMenu($p, "수출일반오더", strOrderDetailUrl, "tn_201_02_04b.xml", param);
  } else if (v_odrKndCd == "C5" || v_odrKndCd == "C6" || v_odrKndCd == "C7") {
    strOrderDetailUrl = scwin.strCntrOdrRegUrlC5;
    $c.win.openMenu($p, "기타오더", strOrderDetailUrl, "tn_201_02_07b.xml", param);
  } else if (v_odrKndCd == "B2" || v_odrKndCd == "B4" || v_odrKndCd == "D1" || v_odrKndCd == "D2" || v_odrKndCd == "D3" || v_odrKndCd == "D4" || v_odrKndCd == "D6") {
    strOrderDetailUrl = scwin.strBulkOdrRegUrl;
    $c.win.openMenu($p, "벌크오더", strOrderDetailUrl, "tn_202_02_05b.xml", param);
  } else {
    await $c.win.alert($p, "오더종류를 확인하세요.");
  }
};
scwin.sbm_Retrieve_submitdone = async function (e) {
  let rowCnt = ds_out.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, ["조회결과"]);
    spa_totalRow.setValue(rowCnt);
  } else {
    spa_totalRow.setValue(scwin.f_countSuppressCol("odrNo"));
    ds_out.setRowPosition(0);
    scwin.hid_checkOrder = scwin.hid_autoOrderYn;
  }
};
scwin.sbm_Retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.gr_orderList_oncelldblclick = async function (rowIndex, columnIndex, columnId) {
  let row = ds_out.getRowPosition();
  if (row < 0) return;
  let strOrderDetailUrl = "";
  let v_odrNo = ds_out.getCellData(row, "odrNo");
  let v_odrKndCd = ds_out.getCellData(row, "odrKndCd");
  if (ds_out.getCellData(row, "odrDelYn") == "1") {
    await $c.win.alert($p, "삭제된 주문입니다.");
    return;
  }
  if (ds_out.getCellData(row, "odrCnclYn") == "1") {
    await $c.win.alert($p, "취소된 주문입니다.");
    return;
  }
  let param = {
    odrNo: v_odrNo,
    linkPage: "odrList",
    PARAM_MAINTAIN_YN: "N"
  };
  switch (columnId) {
    case "odrNo":
      if (v_odrKndCd == "C1" || v_odrKndCd == "CS" || v_odrKndCd == "CT") {
        strOrderDetailUrl = scwin.strCntrOdrRegUrlC1;
        $c.win.openMenu($p, "수입본선오더", strOrderDetailUrl, "tn_201_02_05b.xml", param);
      } else if (v_odrKndCd == "C2" || v_odrKndCd == "CX") {
        strOrderDetailUrl = scwin.strCntrOdrRegUrlC2;
        $c.win.openMenu($p, "수입일반오더", strOrderDetailUrl, "tn_201_02_03b.xml", param);
      } else if (v_odrKndCd == "C3" || v_odrKndCd == "CW" || v_odrKndCd == "CR" || v_odrKndCd == "CP") {
        strOrderDetailUrl = scwin.strCntrOdrRegUrlC3;
        $c.win.openMenu($p, "수출본선오더", strOrderDetailUrl, "tn_201_02_06b.xml", param);
      } else if (v_odrKndCd == "C4") {
        strOrderDetailUrl = scwin.strCntrOdrRegUrlC4;
        $c.win.openMenu($p, "수출일반오더", strOrderDetailUrl, "tn_201_02_04b.xml", param);
      } else if (v_odrKndCd == "C5" || v_odrKndCd == "C6" || v_odrKndCd == "C7") {
        strOrderDetailUrl = scwin.strCntrOdrRegUrlC5;
        $c.win.openMenu($p, "기타오더", strOrderDetailUrl, "tn_201_02_07b.xml", param);
      } else if (v_odrKndCd == "B2" || v_odrKndCd == "B4" || v_odrKndCd == "D1" || v_odrKndCd == "D2" || v_odrKndCd == "D3" || v_odrKndCd == "D4" || v_odrKndCd == "D6") {
        strOrderDetailUrl = scwin.strBulkOdrRegUrl;
        $c.win.openMenu($p, "벌크오더", strOrderDetailUrl, "tn_202_02_05b.xml", param);
      } else {
        await $c.win.alert($p, "오더종류를 확인하세요.");
      }
      break;
  }
};
scwin.ed_cvsslMgntNo_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_cvsslMgntNo, "", 1, true);
};
scwin.ed_lineCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, txt_lineNm, 6, true);
};
scwin.ed_bilgClntNo_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, txt_bilgClntNm, 3, true);
};
scwin.ed_regId_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_regId, txt_regNm, 4, true);
};
scwin.ed_regBranCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_regBranCd, txt_regBranNm, 5, true);
};
scwin.acb_odrKndCd_onchange = function (e) {
  let v_index = acb_odrKndCd.getSelectedIndex();
};
scwin.acb_odrSearchGubun_onchange = function (e) {
  let v_index = acb_odrSearchGubun.getValue();
  if (v_index == "0") {
    $c.gus.cf_ShowObject($p, [udc_odrDt]);
    $c.gus.cf_HideObject($p, [ed_odrNo]);
    udc_odrDt.setInitDate(scwin.strPreDate, scwin.strCurDate);
  } else {
    $c.gus.cf_HideObject($p, [udc_odrDt]);
    $c.gus.cf_ShowObject($p, [ed_odrNo]);
    ica_odrDtFrom.setValue("");
    ica_odrDtTo.setValue("");
  }
};
scwin.acb_transCargoClsCd_onchange = function (e) {
  if (acb_transCargoClsCd.getValue() != "C") {
    gr_orderList.setColumnVisible("regNm", false);
    gr_orderList.setColumnVisible("lineCd", false);
    gr_orderList.setColumnVisible("dptDtl", false);
    gr_orderList.setColumnVisible("arvDtl", false);
    gr_orderList.setColumnVisible("bilgClntNo", false);
    gr_orderList.setColumnVisible("bilgClntNn", false);
    gr_orderList.setColumnVisible("cntr20e", false);
    gr_orderList.setColumnVisible("cntr20f", false);
    gr_orderList.setColumnVisible("cntr40e", false);
    gr_orderList.setColumnVisible("cntr40f", false);
    gr_orderList.setColumnVisible("cntrRf", false);
    gr_orderList.setColumnVisible("cntrDc", false);
    gr_orderList.setColumnVisible("odrSellamt", false);
    gr_orderList.setColumnVisible("odrPchsamt", false);
  } else {
    gr_orderList.setColumnVisible("regNm", true);
    gr_orderList.setColumnVisible("lineCd", true);
    gr_orderList.setColumnVisible("dptDtl", true);
    gr_orderList.setColumnVisible("arvDtl", true);
    gr_orderList.setColumnVisible("bilgClntNo", true);
    gr_orderList.setColumnVisible("bilgClntNn", true);
    gr_orderList.setColumnVisible("cntr20e", true);
    gr_orderList.setColumnVisible("cntr20f", true);
    gr_orderList.setColumnVisible("cntr40e", true);
    gr_orderList.setColumnVisible("cntr40f", true);
    gr_orderList.setColumnVisible("cntrRf", true);
    gr_orderList.setColumnVisible("cntrDc", true);
    gr_orderList.setColumnVisible("odrSellamt", true);
    gr_orderList.setColumnVisible("odrPchsamt", true);
  }
};
scwin.ds_out_onrowpositionchange = function (rowIndex, oldRowIndex) {
  if (rowIndex > -1) {
    let v_transCargoClsCd = ds_out.getCellData(rowIndex, "transCargoClsCd");
    if (v_transCargoClsCd == scwin.ODR_CNTR) {
      // TODO: btnOdrCntrDetail 활성화 처리
    } else {
      // TODO: btnOdrCntrDetail 비활성화 처리
    }
  } else {
    // TODO: btnOdrCntrDetail 비활성화 처리
  }
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_cntrWebOdr_onclick = function (e) {
  scwin.f_odrCopy();
};
scwin.btn_trigger2_onclick = function (e) {
  scwin.f_openCommonPopUp(1, ed_cvsslMgntNo.getValue(), "", "F", "F");
};
scwin.btn_trigger3_onclick = function (e) {
  scwin.f_openCommonPopUp(1, ed_cvsslMgntNo.getValue(), "", "F", "F");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'req',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_odrSearchGubun',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_cond.odrSearchGubun'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_odrDt',refEdDt:'',edFromId:'ica_odrDtFrom',edToId:'ica_odrDtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'}},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'}},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_impExpDomesticClsCd',style:'width: 150px',submenuSize:'fixed',ref:'data:ds_cond.impExpDomesticClsCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_selfClsCd',style:'width: 150px',submenuSize:'fixed',ref:'data:ds_cond.selfClsCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 150px',allOption:'false',id:'lc_odrKndCd',class:'',direction:'auto',ref:'data:ds_cond.odrKndCd'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_trigger2',type:'button',class:'btn ico sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_cvsslMgntNo',style:'width: 150px;',ref:'data:ds_cond.cvsslMgntNo'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_trigger3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_line',codeId:'ed_lineCd',nameId:'txt_lineNm',popupID:'',selectID:'',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_odrDcsnYn',style:'width: 150px',submenuSize:'fixed',ref:'data:ds_cond.odrDcsnYn'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'ed_bilgClnt',style:'width: 150px',submenuSize:'fixed',ref:'data:ds_cond.bilgCho'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_bilgClnt',style:'width: 150px;',ref:'data:ds_cond.bilgVal'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_bilgClnt',codeId:'ed_bilgClntNo',nameId:'txt_bilgClntNm',popupID:'',selectID:'',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록점소 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_regBran',codeId:'ed_regBranCd',nameId:'txt_regBranNm',popupID:'',selectID:'',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_reg',popupID:'',selectID:'',codeId:'ed_regId',validTitle:'',nameId:'txt_regNm',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_transKndCd',style:'width: 100px;',submenuSize:'fixed'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'txt_mgntNo',style:'width: 150px;',ref:'data:ds_cond.mgntNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_transCargoClsCd',style:'width: 150px',submenuSize:'fixed',ref:'data:ds_cond.transCargoClsCd'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'오더등록현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_out',focusMode:'row',id:'gr_orderList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',style:'',value:'오더번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndCd',inputType:'text',style:'',value:'오더</br>종류',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntMgntNo',inputType:'text',style:'',value:'WEB/EDI',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndNm',inputType:'text',style:'',value:'오더구분명',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'regNm',value:'오더등록자',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lineCd',value:'LINE',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'selfClsCd',value:'자가구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'selfClsNm',value:'자가구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'bilgClntNo',value:'청구거래처',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'bilgClntNn',value:'청구거래처',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'cvsslMgntNo',value:'본선관리번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vsslCd',value:'선박',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'portcnt',value:'항차',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'blBkNo',value:'BL/BK',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'text',style:'',value:'출발작업장코드',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',style:'',value:'출발지',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDtl',inputType:'text',style:'',value:'출발상세',width:'100',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlCd',inputType:'text',style:'',value:'도착작업장코드',width:'130',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',style:'',value:'도착지',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvDtl',value:'도착상세',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'bilgClntNo',value:'청구거래처',displayMode:'label',colSpan:'2',rowSpan:'',hidden:'true'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',style:'',id:'bilgClntNn',value:'오더물량',displayMode:'label',colSpan:'6',rowSpan:'',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cntr20e',value:'매출금액',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cntr20f',value:'매입금액',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'cntr40e',value:'출발예정일시',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'cntr40f',value:'도착예정일시',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cntrRf',value:'확정일시',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cntrDc',value:'완료일시',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'odrSellamt',value:'비고',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'odrPchsamt',value:'확정',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkStDtm',value:'계약번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'wrkEndDtm',value:'대표거래처번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrDcsnDtm',value:'화물구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'odrCompleteDtm',value:'수출입구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rmk',value:'출발지상세',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'odrDcsnYn',value:'도착지상세',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ctrtNo',value:'운송구분',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'odrNo',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'odrKndCd',value:'명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'clntMgntNo',value:'20F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'odrKndNm',value:'20E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'regNm',value:'40F',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lineCd',value:'40E',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'selfClsCd',value:'RF',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'selfClsNm',value:'DC',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true',class:'underline'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntMgntNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndNm',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'regNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lineCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'selfClsCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'selfClsNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'bilgClntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'bilgClntNn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'cvsslMgntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vsslCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'portcnt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'blBkNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDtl',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlCd',inputType:'text',style:'',value:'',width:'130',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvDtl',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bilgClntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bilgClntNn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntr20e',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntr20f',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntr40e',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntr40f',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrRf',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrDc',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrSellamt',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrPchsamt',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'wrkStDtm',value:'',displayMode:'label',readOnly:'true',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'wrkEndDtm',value:'',displayMode:'label',readOnly:'true',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrDcsnDtm',value:'',displayMode:'label',readOnly:'true',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrCompleteDtm',value:'',displayMode:'label',readOnly:'true',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'odrDcsnYn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ctrtNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'repClntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'transCargoClsCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'impExpDomesticClsCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'dptDtl',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'arvDtl',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'railroadAdptDstCd',value:'',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_cntrWebOdr',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더복사'}]}]}]}]}]}]}]}]}]})