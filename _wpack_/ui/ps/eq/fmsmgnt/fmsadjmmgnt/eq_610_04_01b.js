/*amd /ui/ps/eq/fmsmgnt/fmsadjmmgnt/eq_610_04_01b.xml 42991 7533d82a09ed318e1969440b104f2ae3d966156d204c70f2b239dd7949d88729 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_slipCreatTargetCon'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipKndCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adjmPrgsStsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdYm',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgKndCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'osideClsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgAcctDeptCd',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_certiCommon',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'choice',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payClsCd',name:'거래구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgDt',name:'공급일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilkndCd',name:'유종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDate',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcNo',name:'세금계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'osideClsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmPrgsStsCd',name:'진행상태',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_saveCertiCommon',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'choice',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payClsCd',name:'거래구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgDt',name:'공급일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilkndCd',name:'유종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDate',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcNo',name:'세금계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'osideClsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmPrgsStsCd',name:'진행상태',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_billingCommonMessage',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'msg',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_exceptClnt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text',defaultValue:'PsCommonEBC'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text',defaultValue:'retriveExceptClntList'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exceptClnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipTaxCloseYm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipCloseYm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxCloseYm',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_retrieveSlipCreatTarget',encoding:'UTF-8',mediatype:'application/json',ref:'data:json,[{"id":"dma_slipCreatTargetCon","key":"IN_DS1"},{"id":"ds_certiCommon","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_certiCommon","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveSlipCreatTarget_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_createSlip',action:'/ps.eq.fmsmgnt.fmsadjmmgnt.CreateFMSOilSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_saveCertiCommon","key":"IN_DS1"},{"id":"ds_billingCommonMessage","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_billingCommonMessage","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_createSlip_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_deleteSlip',action:'/ps.eq.fmsmgnt.fmsadjmmgnt.DeleteSellingSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_saveCertiCommon","key":"IN_DS1"},{"id":"ds_billingCommonMessage","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_billingCommonMessage","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_deleteSlip_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_exceptClnt',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_exceptClnt',target:'data:json,{"id":"ds_exceptClnt","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_exceptClnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_slipTaxCloseYm',action:'/ps.rc.sales.bilgmgnt.RetrieveSlipTaxCloseYmCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_slipTaxCloseYm","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_slipTaxCloseYm_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.strDate = "";

//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = async function () {
  scwin.strDate = $c.date.getServerDateTime($p, "yyyyMM");
  ica_stdYm.setValue(scwin.strDate);
  lc_adjmPrgsStsCd.setValue("2");
  $c.gus.cfEnableObj($p, ed_slipCloseYm, false);
  $c.gus.cfEnableObj($p, ed_taxCloseYm, false);
  scwin.f_RetrieveSlipTaxCloseYm();
  $c.gus.cfDisableBtn($p, [btn_save, btn_delete]);
  var codeOptions = [{
    grpCd: "TL203",
    compID: "lc_slipKndCd,gr_certiCommon:slipKndCd"
  },
  //전표종류
  {
    grpCd: "TL109",
    compID: "lc_bilgKndCd"
  },
  // 청구종류
  {
    grpCd: "TL113",
    compID: "gr_certiCommon:payClsCd"
  }, {
    grpCd: "TL105",
    compID: "gr_certiCommon:oilkndCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function () {
  lc_bilgKndCd.setSelectedIndex(0);
  lc_osideClsCd.setSelectedIndex(0);
  lc_bilgKndCd.setDisabled(true);
  lc_osideClsCd.setDisabled(true);
  $c.sbm.execute($p, sbm_exceptClnt);
  scwin.f_JobCloseYN();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  //validation check       
  //combo의 조건에 따라 조회 필수 입력값이 달라짐 
  if (!(await $c.gus.cfValidate($p, [lc_slipKndCd, lc_adjmPrgsStsCd, ica_stdYm]))) {
    return;
  }
  var slipKndCd = "";
  slipKndCd = lc_slipKndCd.getValue();

  //조회데이터셋팅
  var json = {
    "slipKndCd": slipKndCd,
    "adjmPrgsStsCd": lc_adjmPrgsStsCd.getValue(),
    "stdYm": ica_stdYm.getValue(),
    "bilgKndCd": "",
    "osideClsCd": "",
    "bilgAcctDeptCd": ed_bilgAcctDeptCd.getValue()
  };

  // 매출전표만 정산종류 조건 포함
  if (slipKndCd == "H12") {
    json.bilgKndCd = lc_bilgKndCd.getValue();
    json.osideClsCd = lc_osideClsCd.getValue();
  }
  dma_slipCreatTargetCon.setJSON(json);
  if (lc_adjmPrgsStsCd.getValue() == '2') {
    sbm_retrieveSlipCreatTarget.action = "/ps.eq.fmsmgnt.fmsadjmmgnt.RetrieveSlipCreationTargetCMD.do";
  } else if (lc_adjmPrgsStsCd.getValue() == '4') {
    sbm_retrieveSlipCreatTarget.action = "/ps.eq.fmsmgnt.fmsadjmmgnt.RetrieveSlipDeleteTargetCMD.do";
  } else if (lc_adjmPrgsStsCd.getValue() == '5') {
    sbm_retrieveSlipCreatTarget.action = "/ps.eq.fmsmgnt.fmsadjmmgnt.RetrieveSlipCreationTargetCMD.do";
  } else if (lc_adjmPrgsStsCd.getValue() == '9') {
    sbm_retrieveSlipCreatTarget.action = "/ps.eq.fmsmgnt.fmsadjmmgnt.RetrieveSlipDeleteTargetCMD.do";
  }
  $c.sbm.execute($p, sbm_retrieveSlipCreatTarget);
};
scwin.sbm_retrieveSlipCreatTarget_submitdone = async function (e) {
  var rowCnt;
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    //성공시
    rowCnt = ds_certiCommon.getRowCount();
    if (rowCnt > 0) {
      if (dma_slipCreatTargetCon.get("adjmPrgsStsCd") == "4" || dma_slipCreatTargetCon.get("adjmPrgsStsCd") == "9") {
        gr_certiCommon.setColumnVisible("choice", true);
        gr_certiCommon.setColumnReadOnly("bilgDt", true);
        gr_certiCommon.setColumnReadOnly("slipDt", true);
        gr_certiCommon.setColumnReadOnly("rmk", true);
        $c.gus.cfDisableBtn($p, [btn_save, btn_delete]);
        $c.gus.cfEnableBtnOnly($p, [btn_delete]);
      } else if (dma_slipCreatTargetCon.get("adjmPrgsStsCd") == "2") {
        gr_certiCommon.setColumnVisible("choice", true);
        gr_certiCommon.setColumnReadOnly("bilgDt", false);
        gr_certiCommon.setColumnReadOnly("slipDt", false);
        gr_certiCommon.setColumnReadOnly("rmk", false);
        $c.gus.cfDisableBtn($p, [btn_save, btn_delete]);
        $c.gus.cfEnableBtnOnly($p, [btn_save]);
      } else {
        gr_certiCommon.setColumnVisible("choice", false);
        gr_certiCommon.setColumnReadOnly("bilgDt", true);
        gr_certiCommon.setColumnReadOnly("slipDt", true);
        gr_certiCommon.setColumnReadOnly("rmk", true);
        $c.gus.cfDisableBtn($p, [btn_save, btn_delete]);
      }
      gr_certiCommon.setFocusedCell(0, 0); //그리드 로우 초기포커스
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      gr_certiCommon.setColumnVisible("choice", false);
      gr_certiCommon.setColumnReadOnly("bilgDt", true);
      gr_certiCommon.setColumnReadOnly("slipDt", true);
      gr_certiCommon.setColumnReadOnly("rmk", true);
      $c.gus.cfDisableBtn($p, [btn_save, btn_delete]);
    }
  } else {
    //실패시
    rowCnt = 0;
    gr_certiCommon.setColumnVisible("choice", false);
    gr_certiCommon.setColumnReadOnly("bilgDt", true);
    gr_certiCommon.setColumnReadOnly("slipDt", true);
    gr_certiCommon.setColumnReadOnly("rmk", true);
    $c.gus.cfDisableBtn($p, [btn_save, btn_delete]);
  }
  totalRows.setValue(rowCnt);
  scwin.f_JobCloseYN();
};

//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, true);
  ica_stdYm.setValue(scwin.strDate);

  //tobe추가 : 클리어가 안돼서 아래 소스 추가.
  lc_slipKndCd.setSelectedIndex(0);
  scwin.lc_slipKndCd_onviewchange();
  lc_adjmPrgsStsCd.setSelectedIndex(0);
  ed_bilgAcctDeptCd.setValue("");
  ed_bilgAcctDeptNm.setValue("");
  scwin.f_RetrieveSlipTaxCloseYm();
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  if (ds_certiCommon.getRowCount() < 1) {
    return;
  }
  scwin.f_JobCloseYN();
  ds_saveCertiCommon.removeAll(); //초기화

  //await $c.gus.cfCopyDataSetHeader("ds_certiCommon", "ds_saveCertiCommon")

  var transRow;
  var chkCnt = -1;
  var choiceCnt = 0;
  var slipKndCd = {};
  var clntNo = {};
  var slipKndCdList = {};
  var clntNoList = {};
  for (var i = 0; i < ds_exceptClnt.getRowCount(); i++) {
    slipKndCd = ds_exceptClnt.getRowJSON(i).code;
    clntNo = ds_exceptClnt.getRowJSON(i).name;
    clntNoList = clntNo + "," + clntNoList;
    slipKndCdList = slipKndCd + "," + slipKndCdList;
  }
  clntNo = clntNoList.split(",");
  slipKndCd = slipKndCdList.split(",");
  var checkRow = gr_certiCommon.getCheckedJSON("choice"); //체크표시한 데이터들만 추출
  var checkRowIndex = gr_certiCommon.getCheckedIndex("choice"); //체크표시한 rowIndex

  for (var i = 0; i < checkRow.length; i++) {
    if ($c.gus.cfIsNull($p, ds_certiCommon.getRowJSON(checkRowIndex[i]).bilgDt) || ds_certiCommon.getRowJSON(checkRowIndex[i]).bilgDt == "") {
      await $c.gus.cfAlertMsg($p, "" + (checkRowIndex[i] + 1) + "번째 데이터에 공급일자는 필수입력 항목입니다.");
      return;
    }
    if (!$c.date.isDate($p, ds_certiCommon.getRowJSON(checkRowIndex[i]).bilgDt)) {
      await $c.gus.cfAlertMsg($p, "" + (checkRowIndex[i] + 1) + "번째 데이터에 공급일자는 유효한 날짜 형식이 아닙니다.");
      return;
    }
    if ($c.gus.cfIsNull($p, ds_certiCommon.getRowJSON(checkRowIndex[i]).slipDt) || ds_certiCommon.getRowJSON(checkRowIndex[i]).slipDt == "") {
      await $c.gus.cfAlertMsg($p, "" + (checkRowIndex[i] + 1) + "번째 데이터에 전표일자는 필수입력 항목입니다.");
      return;
    }
    if (!$c.date.isDate($p, ds_certiCommon.getRowJSON(checkRowIndex[i]).slipDt)) {
      await $c.gus.cfAlertMsg($p, "" + (checkRowIndex[i] + 1) + "번째 데이터에 전표일자는 유효한 날짜 형식이 아닙니다.");
      return;
    }
    if ($c.gus.cfIsNull($p, ds_certiCommon.getRowJSON(checkRowIndex[i]).rmk) || ds_certiCommon.getRowJSON(checkRowIndex[i]).rmk == "") {
      await $c.gus.cfAlertMsg($p, "" + (checkRowIndex[i] + 1) + "번째 데이터에 비고는 필수입력 항목입니다.");
      return;
    }

    //확정여부 N && 특정전표 && 특정거래처
    if (ed_closeYn.getValue() == "N") {
      if ($c.gus.cfIsIn($p, ds_certiCommon.getRowJSON(checkRowIndex[i]).slipKndCd, slipKndCd) && $c.gus.cfIsIn($p, ds_certiCommon.getRowJSON(checkRowIndex[i]).bilgClntNo, clntNo)) {
        //ds_saveCertiCommon.ImportData(ds_certiCommon.ExportData(i,1,false));
        ds_saveCertiCommon.setRowJSON(chkCnt + 1, checkRow[i]);
        chkCnt++;
      } else {
        await $c.gus.cfAlertMsg($p, ica_stdYm.getValue() + "월 유류재고는 아직 확정작업이 완료 되지 않았습니다.");
        return;
      }
    } else {
      //ds_saveCertiCommon.ImportData(ds_certiCommon.ExportData(i,1,false));
      ds_saveCertiCommon.setRowJSON(chkCnt + 1, checkRow[i]);
      chkCnt++;
    }
  }
  if (chkCnt < 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["전표생성할 자료"]);
    return;
  }

  //tobe변경 : 공통 alert창 asis와 상이하게 나옴
  //if (!await $c.win.confirm(MSG_CM_CRM_009,["전표"])) return;  // @을(를) 생성하시겠습니까? 
  if (!(await $c.win.confirm($p, "전표을(를) 생성하시겠습니까?"))) return;
  $c.sbm.execute($p, sbm_createSlip);
};
scwin.sbm_createSlip_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    var rowCnt = ds_billingCommonMessage.getRowCount();
    if (rowCnt > 0) {
      await $c.gus.cfAlertMsg($p, ds_billingCommonMessage.getRowJSON(0).msg);
    }
    scwin.f_Retrieve();
  }
  ;
};

//-------------------------------------------------------------------------
// 확정여부 조회 
//-------------------------------------------------------------------------
scwin.f_JobCloseYN = async function () {
  var sCloseYM = "";
  sCloseYM = ica_stdYm.getValue();
  var isClose = await udc_jobClose.cfJobCloseYN("CUR", sCloseYM, "00", "EQ07", "00", "");
  if (isClose == "" || $c.gus.cfIsNull($p, isClose) || isClose == "DNF") {
    ed_closeYn.setValue("N");
  } else if (isClose == "1") {
    ed_closeYn.setValue("N");
  } else if (isClose == "2") {
    ed_closeYn.setValue("Y");
  }
};

//-------------------------------------------------------------------------
// 전표삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function (e) {
  if (ds_certiCommon.getRowCount() < 1) {
    return;
  }
  ds_saveCertiCommon.removeAll(); //초기화

  await $c.gus.cfCopyDataSetHeader($p, "ds_certiCommon", "ds_saveCertiCommon");
  var transRow;
  var chkCnt = -1;
  var checkRow = gr_certiCommon.getCheckedJSON("choice");
  for (var i = 0; i < checkRow.length; i++) {
    transRow = checkRow[i]; //ds_certiCommon.ExportData(i,1,false);
    ds_saveCertiCommon.setRowJSON(chkCnt + 1, transRow);
    chkCnt++;
  }
  if (chkCnt < 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["전표삭제할 자료"]);
    return;
  }
  if (!(await $c.win.confirm($p, MSG_CM_CRM_004))) return;
  $c.sbm.execute($p, sbm_deleteSlip);
};
scwin.sbm_deleteSlip_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    $c.win.alert($p, ds_billingCommonMessage.getCellData(0, "msg"));
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 전표일자 및 비고 복사
//-------------------------------------------------------------------------
scwin.f_copyList = function (e) {
  if (ds_certiCommon.getRowCount() < 1) {
    return;
  }
  var row = ds_certiCommon.getRowPosition();
  var bilgDt = ds_certiCommon.getCellData(row, "bilgDt");
  var slipDt = ds_certiCommon.getCellData(row, "slipDt");
  var rmk = ds_certiCommon.getCellData(row, "rmk");
  for (var i = row; i < ds_certiCommon.getRowCount(); i++) {
    ds_certiCommon.setCellData(i, "bilgDt", bilgDt);
    ds_certiCommon.setCellData(i, "slipDt", slipDt);
    ds_certiCommon.setCellData(i, "rmk", rmk);
  }
};

//-------------------------------------------------------------------------
// 조건 서식구분 콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveSlipTaxCloseYm = function () {
  $c.sbm.execute($p, sbm_slipTaxCloseYm);
};
scwin.sbm_slipTaxCloseYm_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    var rowCnt = ds_slipTaxCloseYm.getRowCount();
    if (rowCnt > 0) {
      ed_slipCloseYm.setValue(ds_slipTaxCloseYm.getCellData(0, "slipCloseYm"));
      ed_taxCloseYm.setValue(ds_slipTaxCloseYm.getCellData(0, "taxCloseYm"));
    } else {
      await $c.gus.cfAlertMsg($p, "전표 및 계산서의 마감월을 가져올 수 없습니다.");
      return;
    }
  }
  ;
};

//-------------------------------------------------------------------------
// 	팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 2:
      // 청구부서
      await udc_bilgAcctDept.cfCommonPopUp(scwin.udc_bilgAcctDept_callbackFunc, pCode, pName, 'T', null, null, null, null, null, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.udc_bilgAcctDept_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgAcctDeptCd, ed_bilgAcctDeptNm);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return; // 짝이 되는 오브젝트의 값 제거

  $c.gus.cfClearPairObj($p, pairObj); // 검색어 세팅

  var pVal = $c.gus.cfGetValue($p, inObj); // inObj가 코드 필드일 경우 팝업

  if ($c.gus.cfIsNull($p, isCode) || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.ExcelDown = function () {
  var options = {
    fileName: "렌터카전표내역.xlsx",
    sheetName: "렌터카전표내역",
    columnMove: true,
    //그리드 컬럼이동시 이동된 상태로 다운로드 유무 ( "true"인경우 컬럼이동 순서대로 출력 )
    //evenRowBackgroundColor : "#f5fff5"//excel파일에서 그리드 body의 짝수줄의 배경색
    type: 1
  };
  $c.data.downloadGridViewExcel($p, gr_certiCommon, options);
};
scwin.udc_bilgAcctDept_onblurCodeEvent = async function (e) {
  await scwin.f_openCommonPopUp(2, ed_bilgAcctDeptCd.getValue(), "", 'F', 'F');
};
scwin.ica_stdYm_onblur = function (e) {
  scwin.f_JobCloseYN();
};
scwin.gr_certiCommon_oncellclick = function (rowIndex, columnIndex, columnId) {
  var rowCnt = ds_certiCommon.getRowCount();
  if (rowCnt > 0) {
    if (columnId == "slipNo" && ds_certiCommon.getRowJSON(rowIndex).slipNo != "") {
      $c.gus.cfShowSlipInfo($p, ds_certiCommon.getRowJSON(rowIndex).slipNo);
    }
    if (columnId == "choice") {
      if (ds_certiCommon.getCellData(rowIndex, "choice") == "F") {
        ds_certiCommon.setCellData(rowIndex, "choice", "");
      }
    }
  }
};
scwin.lc_slipKndCd_onviewchange = function (info) {
  var slipKndCd = "";
  slipKndCd = lc_slipKndCd.getValue();
  if (slipKndCd == "H12") {
    lc_bilgKndCd.setSelectedIndex(0);
    lc_bilgKndCd.setDisabled(false);
    lc_osideClsCd.setSelectedIndex(0);
    lc_osideClsCd.setDisabled(false);
  } else {
    lc_bilgKndCd.setSelectedIndex(0);
    lc_bilgKndCd.setDisabled(true);
    lc_osideClsCd.setSelectedIndex(0);
    lc_osideClsCd.setDisabled(true);
  }
};
scwin.udc_bilgAcctDept_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_bilgAcctDeptNm, ed_bilgAcctDeptCd, 2, false);
};
scwin.udc_bilgAcctDept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_bilgAcctDeptCd.getValue(), ed_bilgAcctDeptNm.getValue(), 'F', 'F');
};
scwin.gr_certiCommon_onheaderclick = function (headerId) {
  if (headerId == "chk") {
    if (gr_certiCommon.getHeaderValue("chk") == false) {
      for (var i = 0; i < ds_certiCommon.getRowCount(); i++) {
        ds_certiCommon.setCellData(i, "choice", "");
      }
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_slipKndCd',style:'width: 200px',submenuSize:'auto','ev:onviewchange':'scwin.lc_slipKndCd_onviewchange',chooseOptionLabel:'전체',displayMode:'value delim label',editType:'select',search:'start',ref:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'진행상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_adjmPrgsStsCd',style:'width: 230px;',submenuSize:'fixed',ref:'',mandatory:'true',validExp:'정산진행상태:yes',displayMode:'value delim label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'청구확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전표생성'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전표확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'9'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'lc_bilgKndCd',style:'width: 150px;',submenuSize:'auto',search:'start',chooseOption:'true',chooseOptionLabel:'선택'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_stdYm',style:'',mandatory:'true',objType:'key',validExp:'기준년월:yes','ev:onblur':'scwin.ica_stdYm_onblur',displayFormat:'yyyy/MM',pickerType:'dynamic',title:'기준년월'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{chooseOption:'true',chooseOptionLabel:'전체',editType:'select',id:'lc_osideClsCd',search:'start',style:'width: 200px;',submenuSize:'auto',allOption:'',ref:''},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo',codeId:'ed_bilgAcctDeptCd',validTitle:'',nameId:'ed_bilgAcctDeptNm',style:'',id:'udc_bilgAcctDept',btnId:'btn_bilgAcctDeptNm',objTypeCode:'data',objTypeName:'data','ev:onviewchangeNameEvent':'scwin.udc_bilgAcctDept_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_bilgAcctDept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bilgAcctDept_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_addRow',style:'',type:'button','ev:onclick':'scwin.f_copyList',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'복사'}]}]},{T:1,N:'xf:trigger',A:{class:'btn align',id:'',style:'display: none;',title:'정렬',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정렬'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',templateYn:'N',gridID:'gr_certiCommon',gridDownFn:'scwin.ExcelDown',id:'udc_topGrd'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_certiCommon',id:'gr_certiCommon',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'13',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_certiCommon_oncellclick',fixedColumn:'2',rowStatusVisible:'true',columnMove:'true',readOnly:'true',fixedColumnNoMove:'true','ev:onheaderclick':'scwin.gr_certiCommon_onheaderclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column35',inputType:'text',style:'',value:'전표종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'청구부서코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'청구부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'거래</br>구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'공급금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'부가세',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'공급일',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'전표일',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column67',value:'비고',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column61',value:'유종',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column58',value:'등록자ID',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'등록일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column52',value:'회계처리일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column76',value:'세금계산서번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column79',value:'구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column80',value:'청구금액',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column81',value:'기준년월',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column82',value:'거래명세서번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column83',value:'진행상태',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'choice',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',trueValue:'T',valueType:'other',readOnly:'false',falseValue:'F'}},{T:1,N:'w2:column',A:{id:'slipKndCd',inputType:'select',style:'',value:'',width:'100',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAcctDeptCd',inputType:'text',style:'',value:'',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAcctDeptNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payClsCd',inputType:'select',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bilgDt',value:'',displayMode:'label',displayFormat:'####/##/##',mandatory:'true',editModeEvent:'onclick'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'slipDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',mandatory:'true',editModeEvent:'onclick'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',mandatory:'true',editModeEvent:'onclick',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',style:'',id:'slipNo',value:'',displayMode:'label',class:'linktype'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'oilkndCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'regId',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regDate',value:'',displayMode:'label',displayFormat:'####/##/## ##:##:##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'postDt',value:'',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'taxinvcNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'osideClsCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bilgAmt',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stdYm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'certiNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'adjmPrgsStsCd',value:'',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'총계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column41',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',textAlign:'right',expression:'SUM("spplyAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column40',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',textAlign:'right',expression:'SUM("vatAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유류재고 확정여부 ',style:''}},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:input',A:{style:'width: 30px;',id:'ed_closeYn',class:'tac vam',readOnly:'true',objType:'Data'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_save',style:'',type:'button',userAuth:'C',objType:'bSave','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_delete',style:'',type:'button','ev:onclick':'scwin.f_Delete',userAuth:'D',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표삭제'}]}]}]}]},{T:1,N:'xf:group',A:{id:'tb_btnArea',style:'display: none'},E:[{T:1,N:'xf:input',A:{style:'width:144px; height:21px; ',id:'ed_slipCloseYm'}},{T:1,N:'xf:input',A:{id:'ed_taxCloseYm',style:'width:144px; height:21px; '}},{T:1,N:'xf:select1',A:{id:'lc_exceptClnt',chooseOption:'',style:'width:148px; height:21px; ',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_exceptClnt'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:'',id:'udc_jobClose'}}]}]}]}]}]}]})