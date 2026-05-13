/*amd /ui/ps/eq/partmgnt/partbuyproc/eq_420_01_05b.xml 48646 7ef7c84fa69fa2e56082033a80b6db98e5e57ee84fa4f0131b07d9760197e5be */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_repFixWrkPl'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cmd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'strVal',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'intVal',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'intVal2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'intVal3',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_repFixWrkPl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'code02',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name02',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'code03',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name03',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPl',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDtFrom',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDtTo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'status',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'autoAdmitYn',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvStsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdYm',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkClsCd',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'allAdptYn',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPl',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDtFrom',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDtTo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'status',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'autoAdmitYn',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvStsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdYm',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkClsCd',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'allAdptYn',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq412',saveRemovedData:'true','ev:onbeforecelldatachange':'scwin.ds_eq412_onbeforecelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntCd',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partUpr',name:'변경후 단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqId',name:'요청자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitTrgtYn',name:'승인여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'autoAdmitYn',name:'자동승인여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'admitId',name:'승인자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitDt',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partUnitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgBfUpr',name:'변경전 단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'difference',name:'차이',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrlUpr',name:'조정단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stsCd',name:'상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'결제상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chkYn',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'allAdptYn',name:'전체적용',dataType:'number'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd_H',name:'작업장',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_repFixWrkPl',action:'/ps.co.RetrievePsCboCmmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_repFixWrkPl","key":"IN_DS1"},{"id":"ds_repFixWrkPl","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_repFixWrkPl","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.partmgnt.partbuyproc.RetrieveUnitPriceRequestCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_eq412","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_eq412","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ps.eq.partmgnt.partbuyproc.UpdateUnitPriceChangeAdmissionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_eq412","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_confirm',action:'/ps.eq.partmgnt.partbuyproc.ConfirmUnitPriceCloseYnCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_cond","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson;
scwin.strDate;
scwin.strCurDate;
scwin.chkFlag;
scwin.g_nm;
scwin.udc_objNm;
scwin.interval01;
scwin.comboRtnFlag01;
scwin.comboRtnFlag02;
scwin.comboRtnFlag03;
scwin.ds_eq412DataFlag;
scwin.ds_eq412DataCd;
scwin.onpageload = function () {
  //전역변수값 셋팅함수.
  scwin.initSetVal();
  scwin.initSetMap();

  //소속콤보
  const codeOptions = [{
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retriveHomeClsList",
    param3: ["CMP"],
    //고정?
    compID: "lc_homeClsCd" //바인딩 할 컴포넌트 id
  }];
  $c.data.setGauceUtil($p, codeOptions, scwin.commonCodeCallBack01);

  //결제상태 콤보 및 그리드의 결재상태 콤보에 공통코드셋팅처리.
  const codeOptions2 = [{
    grpCd: "ZZ021",
    compID: "lc_apprvStsCd, gr_eq412:apprvStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions2, scwin.commonCodeCallBack02);

  //상태콤보
  const codeOptions3 = [{
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retriveStatusCode",
    param3: ["CMP"],
    //고정?
    compID: "acb_stsCd" //바인딩 할 컴포넌트 id
  }];
  $c.data.setGauceUtil($p, codeOptions3, scwin.commonCodeCallBack03);
  scwin.interval01 = setInterval(async function () {
    if (scwin.comboRtnFlag01 == true && scwin.comboRtnFlag02 == true && scwin.comboRtnFlag03 == true) {
      clearInterval(scwin.interval01);
      //초기화
      await scwin.initOnload();
    }
  }, 300);
};
scwin.commonCodeCallBack01 = async function () {
  scwin.comboRtnFlag01 = true;
};
scwin.commonCodeCallBack02 = async function () {
  let ds_comCode = $p.getComponentById(lc_apprvStsCd.getDataListInfo().id);
  for (var i = 0; i < ds_comCode.getColCnt(); i++) {
    if (ds_comCode.getColumnInfo(i).id == "sortSeq") {
      ds_comCode.getCellInfo(i).options["dataType"] = "number";
    }
  }
  ds_comCode.insertRow(0);
  ds_comCode.setCellData(0, "cd", "");
  ds_comCode.setCellData(0, "cdNm", "전체");
  var nRow = ds_comCode.getRowCount();
  ds_comCode.insertRow(nRow);
  ds_comCode.setCellData(nRow, "cd", "06");
  ds_comCode.setCellData(nRow, "cdNm", "미승인");
  //ds_comCode.setCellData(nRow,"sortSeq",-1);

  var options = {};
  options.sortIndex = "cd sortSeq";
  options.sortOrder = "1 1";

  //ds_comCode.sort("sortSeq",0);
  ds_comCode.multisort(options);
  ds_primecost.reform();
  lc_apprvStsCd.setSelectedIndex(0);
  scwin.comboRtnFlag02 = true;
};
scwin.commonCodeCallBack03 = async function () {
  $p.getComponentById(acb_stsCd.getDataListInfo().id).insertRow(0);
  $p.getComponentById(acb_stsCd.getDataListInfo().id).setCellData(0, "code", "");
  $p.getComponentById(acb_stsCd.getDataListInfo().id).setCellData(0, "name", "전체");
  scwin.comboRtnFlag03 = true;
};
scwin.onUdcCompleted = function () {
  ed_reqDtFrom.options.title = "요청 시작일자";
  ed_reqDtTo.options.title = "요청 종료일자";
};
scwin.initOnload = async function () {
  await scwin.f_defaultValue();
  await scwin.f_JobCloseYN();
};
scwin.initSetVal = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.strDate = WebSquare.date.getCurrentServerDate().substring(0, 6);
  scwin.strCurDate = WebSquare.date.getCurrentServerDate().substring(0, 8);
  scwin.chkFlag = ""; //체크박스값_초기화

  scwin.comboRtnFlag01 = false;
  scwin.comboRtnFlag02 = false;
  scwin.comboRtnFlag03 = false;
  scwin.ds_eq412DataFlag = true;
};
scwin.initSetMap = function () {
  dma_search.set("reqDtFrom", scwin.strDate + "01");
  dma_search.set("reqDtTo", scwin.strCurDate);
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_defaultValue = async function () {
  if (scwin.memJson.eqHomeClsCd == undefined || scwin.memJson.eqHomeClsCd == null || scwin.memJson.eqHomeClsCd == "") {
    lc_homeClsCd.setSelectedIndex(0);
  } else {
    lc_homeClsCd.setValue(scwin.memJson.eqHomeClsCd);
  }
  await scwin.f_RetrieveRepFixWrkPl(lc_homeClsCd.getValue());
  $c.gus.cfInitObjects($p, [ed_clntNo, ed_clntNm]);
  $c.gus.cfDisableBtnOnly($p, [btn_save, btn_con_c, btn_con_d]);
  scwin.chkFlag = "N";
  lc_autoAdmit.setValue("9");
  lc_allAdptYn.setValue("9");
  lc_homeClsCd.focus();
  ica_standardYearMonth.setValue(scwin.strDate);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  dma_search.set("homeClsCd", lc_homeClsCd.getValue());
  dma_search.set("wrkPl", lc_fixWrkPlCd.getValue());
  dma_search.set("clntCd", ed_clntNo.getValue());
  dma_search.set("stsCd", acb_stsCd.getValue());
  var sStatus = ibx_status.getValue();
  if (sStatus == undefined || sStatus == null || sStatus == "") {
    sStatus = "admission";
  }
  dma_search.set("status", sStatus);
  dma_search.set("autoAdmitYn", lc_autoAdmit.getValue());
  dma_search.set("apprvStsCd", lc_apprvStsCd.getValue());
  dma_search.set("allAdptYn", lc_allAdptYn.getValue());
  let ret = await $c.gus.cfValidate($p, [lc_homeClsCd, ed_reqDtFrom, ed_reqDtTo]);
  if (!ret) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_reqDtFrom.getValue(), ed_reqDtTo.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_reqDtFrom.focus();
    return;
  }
  ds_eq412.removeAll();

  //submit 처리.
  let objSubmit = await $c.sbm.execute($p, sbm_retrieve);
  if (objSubmit.responseJSON.resultDataSet[0].Msg == "SUCC") {
    await scwin.sbm_retrieve_submitdone();
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_eq412.getRowCount() == 0) {
    $c.gus.cfDisableBtnOnly($p, [btn_save, btn_con_c, btn_con_d]);
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    $c.gus.cfEnableBtnOnly($p, [btn_save, btn_con_c, btn_con_d]);
  }
  totalRows.setValue(ds_eq412.getRowCount());
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_eq412, null);
  scwin.chkFlag = "N";
  lc_autoAdmit.setValue("9");
  ibx_status.setValue("admission");
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_eq412.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['단가변경승인']);
    return;
  }
  let ret = await $c.gus.cfValidate($p, [gr_eq412]);
  if (!ret) {
    return;
  }
  for (var j = 0; j < ds_eq412.getRowCount(); j++) {
    if (Number(ds_eq412.getCellData(j, 'partUpr')) < Number(ds_eq412.getCellData(j, 'ctrlUpr'))) {
      //( 변경후단가 < 조정단가 )
      await $c.gus.cfAlertMsg($p, "'변경후단가'보다 '조정단가'가 클 수 없습니다.");
      return;
    } else {
      if (ds_eq412.getCellData(j, "ctrlUpr") != ds_eq412.getOriginalCellData(j, "ctrlUpr")) {
        if (ds_eq412.getCellData(j, "admitTrgtYn") == "0") {
          //"승인여부==0"-->미승인
          await $c.gus.cfAlertMsg($p, j + 1 + "행(Row)에 '승인여부'를 체크해 주세요.");
          return;
        }
      }
    }
  }
  let rtn = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (rtn) {
    //submit 처리.
    let objSubmit = await $c.sbm.execute($p, sbm_save);
    if (objSubmit.responseJSON.resultDataSet[0].Msg == "SUCC") {
      await scwin.sbm_save_submitdone();
    }
  }
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  await scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
//  체크박스 - 자동승인여부
//-------------------------------------------------------------------------
/*
//호출부 없음.
scwin.f_chkAutoAdmitYn = function() {
    if ( chkFlag == "N") {	//------- chkFlag=='N'인 경우(체크안 된 경우), 체크박스 chechk해준다.
		chkFlag = "Y";
		chk_autoAdmitYn.value = 1;	
	} else {                //------- chkFlag=='Y'인 경우(체크된 경우), 체크박스 unchechk해준다.
		chkFlag = "N";
		chk_autoAdmitYn.value = 0;
	}
};
*/

//------------------------------------------------------------------------
// [작업장  콤보 조회] 소속 구분에 따른 작업장 리스트 콤보 변경 ( 조회조건 LuxCombo )
//------------------------------------------------------------------------
scwin.f_RetrieveRepFixWrkPl = async function (homeClsCd) {
  dma_repFixWrkPl.set("cmd", "retriveFixWrkList");
  dma_repFixWrkPl.set("strVal", homeClsCd);
  dma_repFixWrkPl.set("intVal", "0");
  dma_repFixWrkPl.set("intVal2", "0");
  dma_repFixWrkPl.set("intVal3", "0");
  ds_repFixWrkPl.removeAll();

  //submit 처리.
  let objSubmit = await $c.sbm.execute($p, sbm_repFixWrkPl);
  if (objSubmit.responseJSON.resultDataSet[0].Msg == "SUCC") {
    await scwin.sbm_repFixWrkPl_submitdone();
  }
};
scwin.sbm_repFixWrkPl_submitdone = async function (e) {
  // 전체조건 추가
  ds_repFixWrkPl.insertRow(0);
  ds_repFixWrkPl.setCellData(0, "code", "");
  ds_repFixWrkPl.setCellData(0, "name", "전체");
  ds_repFixWrkPl.sort("code", 0);
  lc_fixWrkPlCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 확정여부 조회 
//-------------------------------------------------------------------------
scwin.f_JobCloseYN = async function () {
  var sCloseYM = "";
  sCloseYM = ica_standardYearMonth.getValue();
  var isClose = await udc_closeYn.cfJobCloseYN("CUR", sCloseYM, "00", "EQ08", "00", "");
  if (isClose == "" || isClose == null || isClose == "DNF") {
    ed_closeYn.setValue("N");
  } else if (isClose == "1") {
    ed_closeYn.setValue("N");
  } else if (isClose == "2") {
    ed_closeYn.setValue("Y");
  }
};

//-------------------------------------------------------------------------
// 확정/취소 : C/D
// 확정 : 전 주유소에 대해 재고집계가 생성되어 있어야 한다.
//-------------------------------------------------------------------------
scwin.f_Confirm = async function (cls) {
  await scwin.f_JobCloseYN();
  let sRtn = await scwin.f_validChk(cls);
  if (sRtn) {
    var JobYn = "";
    if (cls == "C") {
      // 마감시 마감했는지 체크 : 마감후면 마감 불가(마감취소 후 확정 가능)
      JobYn = await udc_closeYn.cfJobCloseYN("CUR", dma_cond.get("stdYm"), "00", "EQ08", "00", null, "N"); // 마감여부 체크(월)
      if (JobYn == "0" || JobYn == "2") {
        await $c.gus.cfAlertMsg($p, ica_standardYearMonth.getValue() + "월 단가 마감이 이미 승인 되었습니다. \n승인할 수 없습니다.");
        return;
      }
    }
    dma_cond.set("wrkNo", "EQ08");
    dma_cond.set("wrkClsCd", cls); // 생성/취소구분(C/D)		

    let rtn = await $c.win.confirm($p, "단가 마감을 " + scwin.g_nm + "하시겠습니까?");
    if (rtn) {
      if (dma_cond.get("wrkClsCd") == "D" && ed_closeYn.getValue() == "N") {
        await $c.gus.cfAlertMsg($p, ica_standardYearMonth.getValue() + "월 단가 마감이 아직 승인 되지 않았습니다.");
        return;
      }

      //submit 처리.
      let objSubmit = await $c.sbm.execute($p, sbm_confirm);
      if (objSubmit.responseJSON.resultDataSet[0].Msg == "SUCC") {
        await scwin.sbm_confirm_submitdone();
      } else {
        await scwin.sbm_confirm_submiterror();
      }
    }
  }
};
scwin.sbm_confirm_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_012, ["단가변경승인/취소"]);
  await scwin.f_JobCloseYN(); // 확정여부 조회
};
scwin.sbm_confirm_submiterror = async function (e) {
  await scwin.f_JobCloseYN(); // 확정여부 조회
};

//-------------------------------------------------------------------------
// f_validChk()
//-------------------------------------------------------------------------
scwin.f_validChk = async function (cls) {
  if (ica_standardYearMonth.getValue().length != 6) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["기준년월"]);
    ica_standardYearMonth.focus();
    return false;
  }
  if (cls == "C") {
    scwin.g_nm = "승인";
  } else if (cls == "D") {
    scwin.g_nm = "취소";
  }
  dma_cond.set("stdYm", ica_standardYearMonth.getValue());
  return true;
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (callObj, disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    // 거래처 팝업
    case 1:
      callObj.setSelectId("retrieveFixClntList");
      scwin.udc_objNm = "udc_clnt";
      await callObj.cfCommonPopUp(scwin.udc_AllInOne_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};
scwin.udc_AllInOne_callBackFunc = function (rtnList) {
  let codeObj;
  let nameObj;
  if (scwin.udc_objNm == "udc_eqModel") {
    codeObj = ed_eqModelCd;
    nameObj = ed_eqModelNm;
  } else if (scwin.udc_objNm == "udc_clnt") {
    codeObj = ed_clntNo;
    nameObj = ed_clntNm;
  } else if (scwin.udc_objNm == "udc_part") {
    codeObj = ed_partCd;
    nameObj = ed_partNm;
  }
  $c.gus.cfSetReturnValue($p, rtnList, codeObj, nameObj);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (callObj, inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == undefined || isCode == true) {
    await scwin.f_openCommonPopUp(callObj, disGubun, pVal, '', 'T', 'T');
  }
  // inObj가 코드명 필드일 경우 팝업
  else {
    await scwin.f_openCommonPopUp(callObj, disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 그리드에서, 칼럼이 PK일 경우 : update 막기, insert는 입력가능하도록 하는 함수
//-------------------------------------------------------------------------	
scwin.f_EditControl = async function (Row, Colidx) {
  if (ds_eq412.getCellData(Row, 'admitTrgtYn') == "1") {
    //승인여부
    if (Colidx == 15 || Colidx == 12 || Colidx == 13) {
      //--------------------------------------------------------------------------------------------
      // [동일 작업장/거래처/부품]별로  승인된 데이타 중에서, max(적용일자)보다  '이전의 적용일자'는 승인취소 못하도록!
      //--------------------------------------------------------------------------------------------
      var fixWrkPlCd = "";
      var clntCd = "";
      var partCd = "";
      var reqDt = "";
      var ls_fixWrkPlCd = ds_eq412.getCellData(Row, "fixWrkPlCd"); //현재 선택한 Row의 '작업장'
      var ls_clntCd = ds_eq412.getCellData(Row, "clntCd"); //현재 선택한 Row의 '거래처번호'
      var ls_partCd = ds_eq412.getCellData(Row, "partCd"); //현재 선택한 Row의 '부품코드'
      var ls_reqDt = ds_eq412.getCellData(Row, "reqDt"); //현재 선택한 Row의 '요청일자'

      for (j = 0; j < ds_eq412.getRowCount(); j++) {
        fixWrkPlCd = ds_eq412.getCellData(j, "fixWrkPlCd"); //기입력 데이타 '작업장'
        clntCd = ds_eq412.getCellData(j, "clntCd"); //기입력 데이타 '거래처번호'
        partCd = ds_eq412.getCellData(j, "partCd"); //기입력 데이타 '부품코드'
        reqDt = ds_eq412.getCellData(j, "reqDt"); //기입력 데이타 '요청일자'

        if (ls_fixWrkPlCd == fixWrkPlCd && ls_clntCd == clntCd && ls_partCd == partCd) {
          if (j != Row) {
            if (Number(reqDt) > Number(ls_reqDt)) {
              gr_eq412.setReadOnly("cell", Row, "admitTrgtYn", true);
              gr_eq412.setReadOnly("cell", Row, "ctrlUpr", true);
              gr_eq412.setReadOnly("cell", Row, "adptDt", true);
              if (Colidx == 15) {
                //승인여부
                await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ['요청일자가 가장 최근이 아닌 경우', '[승인취소]']);
              }
              if (Colidx == 12) {
                //조정단가
                await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ['요청일자가 가장 최근이 아닌 경우', '[조정단가]를 수정']);
              }
              if (Colidx == 13) {
                //적용일자
                await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ['요청일자가 가장 최근이 아닌 경우', '[적용일자]를 수정']);
              }
            } else {
              gr_eq412.setReadOnly("cell", Row, "admitTrgtYn", false);
              gr_eq412.setReadOnly("cell", Row, "ctrlUpr", false);
              gr_eq412.setReadOnly("cell", Row, "adptDt", false);
            }
          }
          //---------------------------2006.04.07 add
          else {
            gr_eq412.setReadOnly("cell", Row, "admitTrgtYn", false);
            gr_eq412.setReadOnly("cell", Row, "ctrlUpr", false);
            gr_eq412.setReadOnly("cell", Row, "adptDt", false);
          }
          //---------------------------2006.04.07 end
        } //end if
      } //end for
    }
  } else {
    gr_eq412.setReadOnly("cell", Row, "admitTrgtYn", false);
    gr_eq412.setReadOnly("cell", Row, "ctrlUpr", true);
    gr_eq412.setReadOnly("cell", Row, "adptDt", true);
  }
};
scwin.lc_homeClsCd_onchange = async function (info) {
  var luxIndex = lc_homeClsCd.getValue();
  await scwin.f_RetrieveRepFixWrkPl(luxIndex);
};
scwin.udc_clnt_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(udc_clnt, ed_clntNo, ed_clntNm, 1);
};
scwin.udc_clnt_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(udc_clnt, 1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_clnt_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(udc_clnt, ed_clntNm, ed_clntNo, 1, false);
};
scwin.f_Excel = function () {
  debugger;
  var sheetTitle = "부품단가변경목록";
  const options = {
    fileName: sheetTitle,
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gr_eq412, options);
};
scwin.gr_eq412_oncellindexchange = async function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  await scwin.f_EditControl(rowIndex, columnIndex);
};
scwin.gr_eq412_onafteredit = async function (row, columnIndex, value) {
  //조정단가
  if (columnIndex == 12) {
    if (!scwin.ds_eq412DataFlag) {
      if (scwin.ds_eq412DataCd == "ctrlUpr_E00") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_013, ['조정단가', '1']); //"@은(는) @ 이상으로 입력하십시오.";
      } else if (scwin.ds_eq412DataCd == "ctrlUpr_E01") {
        await $c.gus.cfAlertMsg($p, "'변경후단가'보다 '조정단가'가 클 수 없습니다.");
      } else if (scwin.ds_eq412DataCd == "ctrlUpr_E02") {
        await $c.gus.cfAlertMsg($p, "'승인여부'를 체크해 주세요.");
      }
    }
  }

  //적용일자
  if (columnIndex == 13) {
    if (!scwin.ds_eq412DataFlag) {
      if (scwin.ds_eq412DataCd == "adptDt_E00") {
        await $c.gus.cfAlertMsg($p, "적용일자는 요청일자보다 크거나 같아야 합니다.");
        ds_eq412.setCellData(row, "adptDt", "");
      } else if (scwin.ds_eq412DataCd == "adptDt_E01") {
        await $c.gus.cfAlertMsg($p, "적용일자는 기 등록된 테이터의 적용일자보다 커야합니다.");
      }
    }
  }
};
scwin.ds_eq412_onbeforecelldatachange = function (info) {
  debugger;
  scwin.ds_eq412DataFlag = true;
  scwin.ds_eq412DataCd = "";
  if (info.colID == "ctrlUpr") {
    if (info.newValue == "0") {
      scwin.ds_eq412DataCd = "ctrlUpr_E00";
      scwin.ds_eq412DataFlag = false;
      return scwin.ds_eq412DataFlag;
    } else {
      if (Number(ds_eq412.getCellData(info.rowIndex, 'partUpr')) < Number(info.newValue)) {
        //( 변경후단가 < 조정단가 )
        scwin.ds_eq412DataCd = "ctrlUpr_E01";
        scwin.ds_eq412DataFlag = false;
        return scwin.ds_eq412DataFlag;
      } else {
        if (info.newValue != info.oldValue) {
          if (ds_eq412.getCellData(info.rowIndex, "admitTrgtYn") == "0") {
            //"승인여부==0"-->미승인
            scwin.ds_eq412DataCd = "ctrlUpr_E02";
            scwin.ds_eq412DataFlag = false;
            return;
          }
        }
      }
    }
  }
  if (info.colID == "adptDt") {
    var ls_fixWrkPlCd = ds_eq412.getCellData(info.rowIndex, "fixWrkPlCd"); //현재 선택한 Row의 '작업장'
    var ls_clntCd = ds_eq412.getCellData(info.rowIndex, "clntCd"); //현재 선택한 Row의 '거래처번호'
    var ls_partCd = ds_eq412.getCellData(info.rowIndex, "partCd"); //현재 선택한 Row의 '부품코드'
    var ls_adptDt = info.newValue; //현재 선택한 Row의 '적용일자'
    var ls_reqDt = ds_eq412.getCellData(info.rowIndex, "reqDt"); //현재 선택한 Row의 '요청일자'	
    var fixWrkPlCd = "";
    var clntCd = "";
    var partCd = "";
    var adptDt = "";

    //1. ('적용일자>=요청일자') check!
    if (ls_adptDt != "") {
      if (Number(ls_adptDt) < Number(ls_reqDt)) {
        scwin.ds_eq412DataCd = "adptDt_E00";
        scwin.ds_eq412DataFlag = false;
        return scwin.ds_eq412DataFlag;
      }
    }

    //2. ('동일 거래처/부품코드'의 기등록 적용일자<신규등록할 적용일자) check!
    for (j = 0; j < ds_eq412.getRowCount(); j++) {
      fixWrkPlCd = ds_eq412.getCellData(j, "fixWrkPlCd"); //기입력 데이타 '작업장'
      clntCd = ds_eq412.getCellData(j, "clntCd"); //기입력 데이타 '거래처번호'
      partCd = ds_eq412.getCellData(j, "partCd"); //기입력 데이타 '부품코드'
      adptDt = ds_eq412.getCellData(j, "adptDt"); //기입력 데이타 '적용일자'		

      if (ls_fixWrkPlCd == fixWrkPlCd && ls_clntCd == clntCd && ls_partCd == partCd) {
        if (ls_adptDt != "") {
          if (j != info.rowIndex) {
            if (Number(adptDt) >= Number(ls_adptDt)) {
              scwin.ds_eq412DataCd = "adptDt_E01";
              scwin.ds_eq412DataFlag = false;
              return scwin.ds_eq412DataFlag;
            }
          }
        }
      }
    } //end for
  }
};
scwin.btn_con_c_onclick = async function (e) {
  await scwin.f_Confirm('C');
};
scwin.btn_con_d_onclick = async function (e) {
  await scwin.f_Confirm('D');
};
scwin.ddd_onclick = function (e) {
  debugger;
};
scwin.ica_standardYearMonth_onblur = async function (e) {
  await scwin.f_JobCloseYN();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_eq412',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 150px;',submenuSize:'fixed',mandatory:'true','ev:onchange':'scwin.lc_homeClsCd_onchange',displayMode:'value delim label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixWrkPlCd',style:'width: 150px;',submenuSize:'fixed',ref:'',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_repFixWrkPl'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요청일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'reqDtFrom',refDataMap:'dma_search',style:'',id:'udc_reqDt',refEdDt:'reqDtTo',edFromId:'ed_reqDtFrom',edToId:'ed_reqDtTo',objTypeFrom:'data',objTypeTo:'data',objTypeBtn:'data',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자동승인 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_autoAdmit',style:'width: 150px;',submenuSize:'fixed',ref:'',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'9'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결재상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_apprvStsCd',style:'width: 150px;',submenuSize:'fixed',displayMode:'value delim label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control',editType:'select',id:'acb_stsCd',search:'start',style:'width:150px;',submenuSize:'auto',disabled:'false',allOption:'',chooseOption:'',displayMode:'value delim label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_clntNo',validTitle:'',nameId:'ed_clntNm',style:'',id:'udc_clnt',btnId:'btn_PopUp1',objTypeCode:'data',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clnt_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_clnt_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전체적용 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_allAdptYn',style:'width: 150px;',submenuSize:'fixed',ref:'',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'9'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'ddd',label:'부품단가변경 목록 ',style:'',tagname:'h3','ev:onclick':'scwin.ddd_onclick'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_group1',style:'',id:'udc_topGrd',btnUser:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_eq412',gridDownFn:'scwin.f_Excel',gridDownYn:'Y',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_eq412',focusMode:'row',id:'gr_eq412',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true',fixedColumn:'7','ev:oncellindexchange':'scwin.gr_eq412_oncellindexchange',readOnly:'true','ev:onafteredit':'scwin.gr_eq412_onafteredit',fixedColumnNoMove:'true',columnMove:'true',rowStatusVisible:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'작업장코드',width:'120',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'작업장명',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'요청일자',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'요청자ID',width:'100',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'작업장',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column55',value:'거래처',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column52',value:'거래처명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column49',value:'부품코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'부품명',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'단위',width:'90',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'단가',width:'470',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column61',value:'승인</br>여부',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column64',value:'전체</br>적용',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column85',value:'장비모델명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column82',value:'자동승인</br>여부',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'승인일자',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'승인자ID',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'상태코드',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column88',value:'결재</br>상태',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column42',value:'변경전</br>단가',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column41',value:'변경후</br>단가',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'조정단가',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column71',value:'적용일자',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column68',value:'차이',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlCd',inputType:'text',style:'',value:'',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlNm',inputType:'text',style:'',value:'',width:'120',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqDt',inputType:'text',style:'',value:'',width:'120',colMerge:'true',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqId',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fixWrkPlCd_H',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntCd',value:'',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'partCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partUnitCd',inputType:'text',style:'',value:'',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chgBfUpr',inputType:'text',style:'',value:'',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partUpr',inputType:'text',style:'',value:'',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrlUpr',inputType:'text',style:'',value:'',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',style:'',id:'adptDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'false',viewTypeIconImage:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'difference',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'90',inputType:'checkbox',style:'',id:'admitTrgtYn',value:'',displayMode:'label',falseValue:'0',trueValue:'1',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'checkbox',style:'',id:'allAdptYn',value:'',displayMode:'label',falseValue:'0',trueValue:'1'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'eqModelNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'autoAdmitYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'admitDt',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'admitId',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'stsCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'autoComplete',style:'',id:'apprvStsCd',value:'',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_con_c',style:'',type:'button','ev:onclick':'scwin.btn_con_c_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단가마감'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_con_d',style:'',type:'button','ev:onclick':'scwin.btn_con_d_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'마감취소'}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'기준년월 ',class:''}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_standardYearMonth',class:'',calendarValueType:'yearMonth',displayFormat:'yyyy/MM','ev:onblur':'scwin.ica_standardYearMonth_onblur'}}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'마감여부 ',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_closeYn',style:'width: 50px;',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'grp_group2',style:'display:none;'},E:[{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:'',id:'udc_closeYn'}},{T:1,N:'xf:input',A:{id:'ibx_status',style:'width:144px; height:21px; ',ref:'data:dma_search.status'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_partCd',validTitle:'',nameId:'ed_partNm',style:'',btnId:'',id:'udc_part',objTypeCode:'data',objTypeName:'data',validExpCode:''}}]}]}]}]})