/*amd /ui/ds/fs/bilg/fs_202_05_21b.xml 62620 12ab103d1f4ea97f1c132691334187b7198efc11a33d0e820c6c06b69d3084dd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fmlapattern',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_billPrint',saveRemovedData:'true','ev:ondataload':'scwin.ds_billPrint_ondataload','ev:onrowpositionchange':'scwin.ds_billPrint_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaNm',name:'서식명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaPatternCd',name:'표기;서식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaNm',name:'표기서식명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'BILL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmDt',name:'BILL일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDepPortDt',name:'입출항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsNm',name:'수출입;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslcdPortcnt',name:'모선;항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'원화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'합계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'세금계산서;번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billCoverFmlaClsCd',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperFmlaPatternCd',name:'name20',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_certiPrint',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_certiPrint_onRowPositionChange','ev:ondataload':'scwin.ds_certiPrint_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaNm',name:'서식명',dataType:'서식명'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaPatternCd',name:'표기;서식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaNm',name:'표기서식명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'CERTI번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCertiNo',name:'BILL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmDt',name:'CERTI일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'원화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'"부가세',dataType:'"'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'세금계산서;번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BLNO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperFmlaPatternCd',name:'name19',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fmlapattern'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pgmId',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaClsCd',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConKnd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmDtFm',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmDtTo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'billNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modId',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'printFg',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaPatternCd',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnClsCd',name:'name11',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_ds_fmlapattern',action:'/ds.fs.bilg.bilgcomncdmgnt.RetrieveProgramEachCertiFormulaCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_fmlapattern',target:'data:json,{"id":"ds_fmlapattern","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_fmlapattern_submit_Done','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_shpcoCertiOutbreakTarget',action:'/ds.fs.bilg.bilg.RetrieveShpcoCertiOutbreakTargetCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_queryCondition","key":"IN_DS1"},{"id":"ds_certiPrint","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_certiPrint","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_shpcoCertiOutbreakTarget_submit_Done','ev:submiterror':'scwin.sbm_shpcoCertiOutbreakTarget_submit_Error',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_billUnityPrintTarget',action:'/ds.fs.bilg.bilg.RetrieveBillUnityPrintTargetCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_queryCondition","key":"IN_DS1"},{"id":"ds_billPrint","key":"OUT_DS1"},{"id":"ds_certiPrint","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_billPrint","key":"OUT_DS1"},{"id":"ds_certiPrint","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_billUnityPrintTarget_submit_Done','ev:submiterror':'scwin.sbm_billUnityPrintTarget_submit_Error',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// hidden 컴포넌트 선언
scwin.hid_ed_lineNm = "";

// 날짜 가져오기
scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.strFrDate = scwin.strCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)

scwin.pgmId = "fs_202_05_21b.jsp"; // 프로그램ID     
scwin.fmlaClsCd = "03"; // 서식구분코드  
scwin.isTotPrint = false;

//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // 달력 UDC 날짜세팅

  // 기본값 세팅
  rd_printFg.setValue("03");
  ed_printPage.setValue("1");
  gr_certiPrint.setColumnVisible("choice", false);
  cbx_dspDotYn.setValue("1"); //소수점 표시 유무 
  cbx_bondedTransDeclar.setValue("0");
  cbx_bondedTransDeclar.setDisabled(true);
  div_qryConKnd2.setStyle("display", "none");
  div_qryConKnd3.setStyle("display", "none");
  cbx_slipCheck.setValue("1");

  //공통코드데이터 호출 , 지금 안됨    
  const codeOptions = [{
    grpCd: "FS500",
    compID: "acb_dcsnClsCd"
  } // 셀렉트
  ];
  $c.data.setCommonCode($p, codeOptions);
  scwin.onUdcCompleted();
};

//-------------------------------------------------------------------------
// UDC 기본값 세팅 함수
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  div_qryConKnd1.setInitDate(scwin.strFrDate, scwin.strCurDate);
  // ed_lineNm.hide();
};
scwin.onUdcCompleted1 = function () {
  div_qryConKnd1.setInitDate("", "");
  scwin.f_RetrieveFmalPattern();
};
scwin.acb_qryConKnd_onChange = function (info) {
  if (acb_qryConKnd.getValue() == "01" || acb_qryConKnd.getValue() == "03") {
    div_qryConKnd.setStyle("display", "block");
    div_qryConKnd2.setStyle("display", "none");
    div_qryConKnd3.setStyle("display", "none");
  }
  if (acb_qryConKnd.getValue() == "02") {
    div_qryConKnd.setStyle("display", "none");
    div_qryConKnd2.setStyle("display", "none");
    div_qryConKnd3.setStyle("display", "block");
  }
  if (acb_qryConKnd.getValue() == "04") {
    div_qryConKnd.setStyle("display", "none");
    div_qryConKnd2.setStyle("display", "block");
    div_qryConKnd3.setStyle("display", "none");
  }
};

//-------------------------------------------------------------------------
// 조건 서식구분 콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveFmalPattern = function () {
  // let p_bilgLodeptCd  = "";
  let p_bilgLodeptCd = ed_bilgLodeptCd.getValue();
  let p_pgmId = scwin.pgmId;
  let p_fmlaClsCd = scwin.fmlaClsCd;
  dma_fmlapattern.set("sysCd", "CertiFormulaEBC");
  dma_fmlapattern.set("queryId", "retrieveProgramEachCertiFormulaList");
  dma_fmlapattern.set("bilgLodeptCd", p_bilgLodeptCd);
  dma_fmlapattern.set("pgmId", p_pgmId);
  dma_fmlapattern.set("fmlaClsCd", p_fmlaClsCd);
  $c.sbm.execute($p, sbm_ds_fmlapattern);
};

//-------------------------------------------------------------------------
// 거래명세서 팝업
//-------------------------------------------------------------------------
scwin.btn_certiNo_onClick = async function (e) {
  // 팝업 옵션 설정
  let options = {
    id: "taxPop",
    type: "browserPopup",
    modal: "true",
    popupName: "CERTI 팝업",
    width: 1280,
    height: 750,
    scroll: "no"
  };
  let args = [];
  args[0] = ed_bilgLodeptCd.getValue(); // 화면에서의 ??? Code Element의	Value
  args[1] = ed_bilgLodeptNm.getValue(); // 화면에서의 ??? Name Element의	Value

  let rtn = await $c.win.openPopup($p, "/ui/ds/fs/bilg/fs_204_02_52p.xml", options, args);
  // let rtn = await $c.win.openPopup("/pub/ds/fs/bilg/fs_204_02_52p.xml", options, args);       
  //alert(rtn);

  // $c.gus.cfSetReturnValue(rtn, ed_cvsslMgntNo);

  if (rtn != null) {
    ed_certiNo.setValue(rtn);
  }
};

//-------------------------------------------------------------------------
// BILL 번호 팝업
//-------------------------------------------------------------------------
scwin.ed_billNo_onClick = async function (e) {
  // 팝업 옵션 설정
  let options = {
    id: "taxPop",
    type: "browserPopup",
    modal: true,
    popupName: "BILL 팝업",
    width: 1280,
    height: 730,
    scroll: "no"
  };
  let args = [];
  args[0] = ed_bilgLodeptCd.getValue(); // 화면에서의 ??? Code Element의	Value
  args[1] = ed_bilgLodeptNm.getValue(); // 화면에서의 ??? Name Element의	Value

  let rtn = await $c.win.openPopup($p, "/ui/ds/fs/bilg/fs_204_02_53p.xml", options, args);
  //alert(rtn);

  // $c.gus.cfSetReturnValue(rtn, ed_cvsslMgntNo);

  if (rtn != null) {
    ed_billNo.setValue(rtn);
  }
};

//-------------------------------------------------------------------------
// 조회 (먼저 서버에서 조회조건을 가져온다) f_Retrieve
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = function (e) {
  dma_queryCondition.set("bilgLodeptCd", ed_bilgLodeptCd.getValue());
  dma_queryCondition.set("lineCd", ed_lineCd.getValue());
  dma_queryCondition.set("qryConKnd", acb_qryConKnd.getValue());
  dma_queryCondition.set("modId", ed_modId.getValue());
  dma_queryCondition.set("printFg", rd_printFg.getValue());
  dma_queryCondition.set("fmlaPatternCd", acb_fmlaPatternCd.getValue());
  dma_queryCondition.set("dcsnClsCd", "");
  if (acb_qryConKnd.getValue() == "01" || acb_qryConKnd.getValue() == "03") {
    ed_certiNo.setMandatory(false);
    ed_billNo.setMandatory(false);

    // let result = $c.gus.cfValidate([ed_bilgLodeptCd,ed_confirmDtFm,ed_confirmDtTo]);
    // if(!result){
    //     return;
    // } else {
    dma_queryCondition.set("confirmDtFm", ed_confirmDtFm.getValue());
    dma_queryCondition.set("confirmDtTo", ed_confirmDtTo.getValue());
    // }
  } else if (acb_qryConKnd.getValue() == "02") {
    ed_certiNo.setMandatory(false);
    ed_billNo.setMandatory(true);
    if (dma_queryCondition.get("confirmDtFm") == "" || dma_queryCondition.get("confirmDtTo")) {
      dma_queryCondition.set("confirmDtFm", scwin.strFrDate);
      dma_queryCondition.set("confirmDtTo", scwin.strCurDate);
    }
    // if(!result){
    //     return;
    // } else {
    dma_queryCondition.set("billNo", ed_billNo.getValue());
    // }
  } else if (acb_qryConKnd.getValue() == "04") {
    ed_billNo.setMandatory(false);
    ed_certiNo.setMandatory(true);
    if (dma_queryCondition.get("confirmDtFm") == "" || dma_queryCondition.get("confirmDtTo")) {
      dma_queryCondition.set("confirmDtFm", scwin.strFrDate);
      dma_queryCondition.set("confirmDtTo", scwin.strCurDate);
    }
    // let result = $c.gus.cfValidate([ed_bilgLodeptCd,ed_certiNo]);    
    // if(!result){
    //     return;
    // } else {
    dma_queryCondition.set("certiNo", ed_certiNo.getValue());
    // }												
  }

  //상세화면 데이타 Clear
  ds_billPrint.removeAll();
  ds_certiPrint.removeAll();
  if (acb_qryConKnd.getValue() == "03" || acb_qryConKnd.getValue() == "04") {
    $c.sbm.execute($p, sbm_shpcoCertiOutbreakTarget);
  } else {
    $c.sbm.execute($p, sbm_billUnityPrintTarget);
  }
};

//-------------------------------------------------------------------------
// 서브미션 결과 여부에 따른 동작
//-------------------------------------------------------------------------
scwin.sbm_ds_fmlapattern_submit_Done = function (e) {
  // ds_fmlapatternCd.insertData(0, ["", "전체-"]);
};

//-------------------------------------------------------------------------
// 서브미션 결과 여부에 따른 동작
//-------------------------------------------------------------------------
scwin.ds_certiPrint_ondataload = function () {
  if (gr_billPrint.getFocusedRowIndex() == null) {
    return;
  }
  ds_certiPrint.clearFilter();
  let totalRow = ds_certiPrint.getRowCount();
  spa_totalRow2.setValue(totalRow);
  if (totalRow > 0) {
    scwin.f_certiPrint_Filter();
  } else {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
};

// 매출항목 그리드데이터 선택에 따른 품명 그리드 데이터 필터링
scwin.f_certiPrint_Filter = function (info) {
  ds_certiPrint.clearFilter();
  let fn_tmpDeptFilter = function (cellData, tmpParam, rowIdx) {
    if (ds_certiPrint.getCellData(rowIdx, "upperCertiNo") == ds_billPrint.getCellData(ds_billPrint.getRowPosition(), "certiNo")) {
      return true;
    } else {
      return false; // return이 true인 경우 적용하고 false인 경우 넘김
    }
  };
  ds_certiPrint.setColumnFilter({
    type: 'func',
    colIndex: "upperCertiNo",
    key: fn_tmpDeptFilter,
    condition: 'and'
  });
  let options = {
    sortIndex: "fmlaNm certiNo upperCertiNo bilgClntNo bilgClntNm confirmDt spplyDt sellVatNo slipNo",
    sortOrder: "0 0 0 0 0 0 0 0 0"
  };
  ds_certiPrint.multisort(options);
  spa_totalRow2.setValue(ds_certiPrint.getRowCount());
};
scwin.sbm_billUnityPrintTarget_submit_Done = function (e) {
  let totalRow = ds_billPrint.getTotalRow();
  spa_totalRows1.setValue(totalRow);
};

//-------------------------------------------------------------------------
// 인쇄 (조건에 따라 출력물을 분기한다.) f_Print
//-------------------------------------------------------------------------
scwin.btn_print_onClick = function (e) {
  if (rd_printFg.getValue() == "01") {
    scwin.f_billPrint();
  } else if (rd_printFg.getValue() == "02") {
    scwin.f_certiPrint();
  } else if (rd_printFg.getValue() == "03") {
    scwin.f_totalPrint();
  }
};

//-------------------------------------------------------------------------
// 인쇄 (BILL)
//-------------------------------------------------------------------------
scwin.f_billPrint = async function () {
  let printCnt = 0;
  let odi = "";
  let ozr = "";
  for (i = 0; i < ds_billPrint.getTotalRow(); i++) {
    if (ds_billPrint.getCellData(i, "choice") == "T") {
      printCnt++;
      let oz = ds_billPrint.getCellData(i, "inscrpFmlaPatternCd");
      let odi;
      let ozr;

      //양식 데이터 저장
      odi = oz;

      //기본 공통양식(04)
      if (oz == "04") {
        ozr = odi + "_" + ds_billPrint.getCellData(i, "billCoverFmlaClsCd");
        //개별양식(31,32)
      } else {
        ozr = oz;
      }
      let dspDotYnChk = "";
      if (cbx_dspDotYn.getValue() == "1") {
        dspDotYnChk = "Y";
      } else {
        dspDotYnChk = "N";
      }

      // 쿼리(ODI)에 적용할 파라미터를 설정(OdiParam)
      let data = {
        odiName: "fs_202_05_21_" + odi,
        reportName: "/ds/fs/fs_202_05_21_" + ozr + ".ozr",
        odiParam: {
          bilgLodeptCd: ds_billPrint.getCellData(i, "bilgLodeptCd"),
          certiNo: ds_billPrint.getCellData(i, "certiNo"),
          type: ds_billPrint.getCellData(i, "billCoverFmlaClsCd"),
          dspDotYn: dspDotYnChk
        }
      };
      let opts = {};
      // 미리보기 체크시
      if (cbx_previewCheck.getValue() == "1") {
        opts = {
          type: 'viewer',
          // viewer, print, download
          printMode: 'view' // silent, view
        };
        $c.ext.openOzReport($p, data, opts);
      } else {
        // 다운로드 창으로 바로 가기
        opts = {
          printCopies: ed_printPage.getValue()
          // exportMode: 'view'
        };
        $c.ext.printOzReport($p, data, opts);
      }
    }
  }
  if (printCnt == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_007, "발행할 BILL"));
    return;
  }
};

// -------------------------------------------------------------------------
// 인쇄 (CERTI)
// -------------------------------------------------------------------------
scwin.f_certiPrint = async function () {
  let printCnt = 0;
  for (i = 0; i < ds_certiPrint.getRowCount(); i++) {
    if (ds_certiPrint.getCellData(i, "choice") == "T") {
      if (cbx_bondedTransDeclar.getValue() == "1") {
        // 보세운송신고필증 체크 O
        if ($c.gus.cfIsNull($p, ds_certiPrint.getCellData(i, "blNo"))) {
          continue;
        }
        if (i == 0 || i > 0 && ds_certiPrint.getCellData(i, "blNo") != ds_certiPrint.getCellData(i - 1, "blNo")) {
          // 쿼리(ODI)에 적용할 파라미터를 설정(OdiParam)
          let data = {
            odiName: "sd_401_05_01",
            reportName: "/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_2.ozr",
            odiParam: {
              blNo: ds_certiPrint.getCellData(i, "blNo"),
              declarDt: "",
              declarSeq: ""
            }
          };
          let opts = {};
          // 미리보기 체크시
          if (cbx_previewCheck.getValue() == "1") {
            opts = {
              type: 'viewer',
              // viewer, print, download
              printMode: 'view' // silent, view
            };
            $c.ext.openOzReport($p, data, opts);
          } else {
            // 다운로드 창으로 바로 가기
            opts = {
              // exportMode: 'view'
              printCopies: ed_printPage.getValue()
            };
            $c.ext.printOzReport($p, data, opts);
          }
        }
      } else {
        // 보세운송신고필증 체크 X
        let ozr = ds_certiPrint.getCellData(i, "upperFmlaPatternCd");
        if (ozr == null || ozr == "") continue;
        let odi = "fs_202_05_21_C";
        if (ozr == "16") {
          odi = odi + ozr;
        }
        let data = {
          odiName: "fs_202_05_21_C",
          reportName: "/ds/fs/fs_202_05_21_C" + ozr + ".ozr",
          odiParam: {
            certiNo: ds_certiPrint.getCellData(i, "certiNo")
          }
        };
        let opts = {};
        // 미리보기 체크시
        if (cbx_previewCheck.getValue() == "1") {
          opts = {
            type: 'viewer',
            // viewer, print, download
            printMode: 'view' // silent, view
          };
          $c.ext.openOzReport($p, data, opts);
        } else {
          // 다운로드 창으로 바로 가기
          opts = {
            // exportMode: 'view'
          };
          $c.ext.printOzReport($p, data, opts);
        }
      }
      printCnt++;
    }
  }
  if (printCnt == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_007, "발행할 CERTI"));
    return;
  }
};

//-------------------------------------------------------------------------
// 인쇄 (통합발행)
//-------------------------------------------------------------------------
scwin.f_totalPrint = async function () {
  // 여기는 ext 이전에 사용하던 batch 버전
  // let printCnt = 0;
  // let param = "";

  // for (j = 0; j < ds_billPrint.getRowCount(); j++){
  //     if(ds_billPrint.getCellData(j, "choice") == "T") {
  //         if(ds_billPrint.getCellData(j, "sellVatNo") != ""){
  //             param = param+","+ ds_billPrint.getCellData(j, "sellVatNo");
  //         }
  //         printCnt++;
  //         let oz = ds_billPrint.getCellData(j, "inscrpFmlaPatternCd");
  //         let odi;
  //         let ozr;
  //         odi = oz;

  //         //기본 공통양식(04)
  //         if(oz == "04"){
  //             ozr = odi+"_"+ds_billPrint.getCellData(j, "billCoverFmlaClsCd");
  //         //개별양식(31,32)
  //         }else{
  //             ozr = oz;
  //         }

  //         let dspDotYnChk = "";

  //         if(cbx_dspDotYn.getValue() == "1") {
  //             dspDotYnChk = "Y"
  //         } else {
  //             dspDotYnChk = "N"
  //         }

  //         let data = {
  //             odiName : "fs_202_05_21_"+odi,

  //             reportName: "/ds/fs/fs_202_05_21_"+ozr+".ozr",

  //             // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  //             odiParam : {
  //                 bilgLodeptCd : ds_billPrint.getCellData(j, "bilgLodeptCd"),
  //                 certiNo : ds_billPrint.getCellData(j, "certiNo"),
  //                 type : ds_billPrint.getCellData(j, "billCoverFmlaClsCd"),
  //                 dspDotYn : dspDotYnChk
  //             }
  //         };

  //         let opts = {};
  //         // 미리보기 체크시
  //         if(cbx_previewCheck.getValue() == "1") {
  //             opts = {
  //                 type: 'viewer', // viewer, print, download
  //                 printMode: 'view', // silent, view
  //             };
  //             await $c.ext.openOzReport(data, opts);
  //         } else {
  //             // 다운로드 창으로 바로 가기
  //             opts = {
  //                 // exportMode: 'view'
  //             }
  //             await $c.ext.printOzReport(data, opts);
  //         }

  //         let ozr2 = ds_billPrint.getCellData(j, "upperFmlaPatternCd");
  //         let odi2 = "fs_202_05_21_C";
  //         if(ozr2 == "16"){
  //             odi2 = odi2 + ozr2;
  //         }
  //         if(ozr2 == null || ozr2 == "") continue;

  //         let data2 = {
  //             odiName : "fs_202_05_21_"+odi2,

  //             reportName: "/ds/fs/fs_202_05_21_"+ozr2+".ozr",

  //             // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  //             odiParam : {
  //                 certiNo : ds_billPrint.getCellData(j, "certiNo"),
  //                 dspDotYn : dspDotYnChk
  //             }
  //         };

  //         if(cbx_dspDotYn.getValue() == "1") {
  //             dspDotYnChk = "Y"
  //         } else {
  //             dspDotYnChk = "N"
  //         }

  //         opts = {};
  //         // 미리보기 체크시
  //         if(cbx_previewCheck.getValue() == "1") {
  //             opts = {
  //                 type: 'viewer', // viewer, print, download
  //                 printMode: 'view', // silent, view
  //             };
  //             await $c.ext.openOzReport(data2, opts);
  //         } else {
  //             // 다운로드 창으로 바로 가기
  //             opts = {
  //                 // exportMode: 'view'
  //             }
  //             await $c.ext.printOzReport(data, opts);
  //         }
  //     }
  // }

  // if(cbx_slipCheck.getValue() == "1" && param != ""){

  //     let data3 = {
  //         odiName : "fi_401_01_02p",

  //         reportName: "/ac/fi/taxbiz/vatctrl/fi_401_01_02p.ozr",

  //         // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  //         odiParam : {
  //             pchsSellCls : param.substring(0,1),
  //         }
  //     };

  //         opts = {};
  //         // 미리보기 체크시
  //         if(cbx_previewCheck.getValue() == "1") {
  //             opts = {
  //                 type: 'viewer', // viewer, print, download
  //                 printMode: 'view', // silent, view
  //             };
  //             $c.ext.openOzReport(data3, opts);
  //         } else {
  //             // 다운로드 창으로 바로 가기
  //         opts = {
  //             // exportMode: 'view'
  //         }
  //         await $c.ext.printOzReport(data, opts);
  //     }
  // }

  // if(printCnt == 0){
  //     await $c.win.alert($c.data.getMessage(MSG_CM_WRN_007, "발행할 통합발행내역"));
  // }

  //-------------------------------------------------------------------------
  // ext로 변경된 후에 오즈리포트 batch 호출코드
  //-------------------------------------------------------------------------
  let printCnt = 0;
  let param = "";

  // 최종적으로 넘길 배열
  let dataList = [];
  for (let j = 0; j < ds_billPrint.getRowCount(); j++) {
    if (ds_billPrint.getCellData(j, "choice") == "T") {
      if (ds_billPrint.getCellData(j, "sellVatNo") != "") {
        param = param + "," + ds_billPrint.getCellData(j, "sellVatNo");
      }
      printCnt++;
      let oz = ds_billPrint.getCellData(j, "inscrpFmlaPatternCd");
      let odi = oz;
      let ozr;

      // 기본 공통양식(04)
      if (oz == "04") {
        ozr = odi + "_" + ds_billPrint.getCellData(j, "billCoverFmlaClsCd");
      } else {
        ozr = oz;
      }
      let dspDotYnChk = cbx_dspDotYn.getValue() == "1" ? "Y" : "N";
      let dspTotAmt = cbx_dspTotAmt.getValue() == "1" ? "Y" : "N";

      // 메인 리포트
      dataList.push({
        odiName: "fs_202_05_21_" + odi,
        reportName: "/ds/fs/fs_202_05_21_" + ozr + ".ozr",
        odiParam: {
          bilgLodeptCd: ds_billPrint.getCellData(j, "bilgLodeptCd"),
          certiNo: ds_billPrint.getCellData(j, "certiNo"),
          type: ds_billPrint.getCellData(j, "billCoverFmlaClsCd"),
          dspDotYn: dspDotYnChk
        }
      });

      // 추가 리포트 (data2)
      let ozr2 = ds_billPrint.getCellData(j, "upperFmlaPatternCd");
      if (ozr2 != null && ozr2 != "") {
        let odi2 = "fs_202_05_21_C";
        if (ozr2 == "16") {
          odi2 += ozr2;
        }
        dataList.push({
          // odiName: "fs_202_05_21_" + odi2,
          odiName: odi2,
          reportName: "/ds/fs/fs_202_05_21_C" + ozr2 + ".ozr",
          odiParam: {
            certiNo: ds_billPrint.getCellData(j, "certiNo"),
            dspTotAmt: dspTotAmt
          }
        });
      }
    }
  }

  // 계산서 발행  체크시 세금계산서 리포트 (data3)
  if (cbx_slipCheck.getValue() == "1" && param != "") {
    dataList.push({
      odiName: "fi_401_01_02p",
      reportName: "/ac/fi/taxbiz/vatctrl/fi_401_01_02p.ozr",
      odiParam: {
        pchsSellCls: param.substring(1)
      }
    });
  }
  if (printCnt == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_007, "발행할 통합발행내역"));
    return;
  }
  let opts = {};
  if (cbx_previewCheck.getValue() == "1") {
    // 미리보기
    opts = {
      // viewerMode:'export',
      exportMode: 'view',
      exportConfirmsave: 'false',
      //viewerMode:'print',
      printMode: 'silent',
      printCopies: ed_printPage.getValue(),
      // printSize:'A5',
      // exportFilename:'DEBIS_SAMPLE_OZ_DOWNLOAD',
      // exportPath:'C:\\OZExport',
      exportFormat: 'pdf'
      // viewerMode: 'view'
    };
  } else {
    // 다운로드 or 바로 출력
    opts = {
      type: "print",
      viewerMode: 'print',
      exportMode: 'view',
      exportConfirmsave: 'false',
      //viewerMode:'print',
      printMode: 'silent',
      printCopies: ed_printPage.getValue(),
      // printSize:'A5',
      exportFormat: 'pdf'
    };
  }
  $c.ext.openBatchOzReport($p, dataList, opts);
};

//-------------------------------------------------------------------------
// 리포트 발행 (ext로 옮기며 불필요해진 코드)
//-------------------------------------------------------------------------
scwin.openPopup = function (data) {
  return new Promise(resolve => {
    let opts = {
      id: "ozReportPopup_" + new Date().getTime(),
      // 충돌 방지 (중요)
      popupName: "오즈 리포트",
      modal: false,
      type: "browserPopup",
      width: 1000,
      height: 600,
      title: "오즈 리포트",
      closeAction: function () {
        resolve();
      }
    };
    $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
  });
};
scwin.btn_trigger5_onClick = function (e) {};

//-------------------------------------------------------------------------
// 대문자 변경
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// showModalDialog(modal이라 현재는 사용처 불분명)
//-------------------------------------------------------------------------
// function modal(filename, mesAry, width, height ) {
//     var top = (screen.height - height ) / 2 ;
//     var position = "dialogTop:"+ top +"px;dialogWidth:"+ width +"px; dialogHeight:" + height + "px; center:yes; resizable:no; help:no; status:no";
//     var data = window.showModalDialog(filename, mesAry, position);
//     return data;
// }

scwin.ds_certiPrint_onRowPositionChange = function (row) {
  if (ds_certiPrint.getCellData(row, "upperFmlaPatternCd") == null || ds_certiPrint.getCellData(row, "upperFmlaPatternCd") == "") {
    ds_certiPrint.setCellData(row, "choice", "F");
    gr_certiPrint.setColumnEnableColumn("choice", false);
  } else {
    gr_certiPrint.setColumnEnableColumn("choice", true);
  }
};

//-------------------------------------------------------------------------
// 발행 라디오 버튼 변경시
//-------------------------------------------------------------------------
scwin.rd_printFg_onChange = function (info) {
  if (gr_billPrint.getFocusedRowIndex() == null) {
    return;
  }
  if (rd_printFg.getValue() == "01") {
    scwin.f_certiPrint_Filter();
    gr_billPrint.setGridHeight(370);
    grp_spanGrid1.setStyle("display", "block");
    grp_spanGrid2.setStyle("display", "none");
    cbx_bondedTransDeclar.checkAll(false);
    cbx_bondedTransDeclar.setDisabled(true);
  } else if (rd_printFg.getValue() == "02") {
    scwin.f_certiPrint_Filter();
    ds_certiPrint.clearFilter();
    gr_certiPrint.setColumnVisible("choice", true);
    gr_certiPrint.setGridHeight(370);
    grp_spanGrid1.setStyle("display", "none");
    grp_spanGrid2.setStyle("display", "block");
    cbx_bondedTransDeclar.setDisabled(false);
    let options = {
      sortIndex: "fmlaNm certiNo upperCertiNo bilgClntNo bilgClntNm confirmDt spplyDt sellVatNo slipNo",
      sortOrder: "0 0 0 0 0 0 0 0 0"
    };
    ds_certiPrint.multisort(options);
    spa_totalRow2.setValue(ds_certiPrint.getRowCount());
  } else {
    //필터링
    scwin.f_certiPrint_Filter();
    gr_certiPrint.setColumnVisible("choice", false);
    gr_certiPrint.setGridHeight(160);
    gr_billPrint.setGridHeight(160);
    grp_spanGrid1.setStyle("display", "block");
    grp_spanGrid2.setStyle("display", "block");
    cbx_bondedTransDeclar.checkAll(false);
    cbx_bondedTransDeclar.setDisabled(true);
  }
};

// BILL 그리드 헤더 체크박스 선택시
// scwin.gr_billPrint_onHeadCheckClick = function (headerId) {
//     let i = 0;
//     if(headerId == "choice") {
//         if(bCheck == 1) {
//             for(i=1; i < ds_billPrint.getTotalRow(); i++){
//                 ds_billPrint.setCellData(i, "choice", "T");
//             }
//         } else {
//                 ds_billPrint.setCellData(i, "choice", "F");
//         }
//     }
// };

//-------------------------------------------------------------------------
// UDC 청구부서
//-------------------------------------------------------------------------
scwin.udc_bilgLode_onClick = function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgLodeptCd.getValue(), ed_bilgLodeptNm.getValue(), 'F', 'F');
};
scwin.udc_bilgLode_onBlur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, ed_bilgLodeptNm, 1);
};
scwin.udc_bilgLode_onViewChange = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptNm, ed_bilgLodeptCd, 1, false);
};

//-------------------------------------------------------------------------
// LINE
//-------------------------------------------------------------------------
scwin.udc_line_onClick = function (e) {
  scwin.f_openCommonPopUp(2, ed_lineCd.getValue(), ed_lineNm.getValue(), 'F', 'F');
};

//-------------------------------------------------------------------------
// UDC 청구 담당자
//-------------------------------------------------------------------------
scwin.udc_emp_onClick = function (e) {
  scwin.f_openCommonPopUp(3, ed_modId.getValue(), ed_empNm.getValue(), 'F', 'F');
};
scwin.udc_emp_onBlur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_modId, ed_empNm, 3);
};
scwin.udc_emp_onViewChange = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_empNm, ed_modId, 3, false);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  switch (disGubun) {
    case 1:
      //청구부서코드팝업			
      udc_bilgLode.cfCommonPopUp(scwin.udc_bilgLode_CallBack, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      // 라인코드팝업			
      udc_line.cfCommonPopUp(scwin.udc_line_CallBack, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 3:
      //청구담당자코드팝업			
      udc_emp.cfCommonPopUp(scwin.udc_emp_CallBack, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 청구 부서 CallBack
//-------------------------------------------------------------------------
scwin.udc_bilgLode_CallBack = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLodeptCd, ed_bilgLodeptNm); // 청구부서코드, 청구부서명

  if (rtnList != null && rtnList[0] != "N/A") {
    //거래명세서 유형 가져오기
    scwin.f_RetrieveFmalPattern();
  }
};

//-------------------------------------------------------------------------
// Line CallBack
//-------------------------------------------------------------------------
scwin.udc_line_CallBack = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd, ed_lineNm); // 라인코드, 라인명
};

//-------------------------------------------------------------------------
// 청구담당자 CallBack
//-------------------------------------------------------------------------
scwin.udc_emp_CallBack = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_modId, ed_empNm); // 청구담당자코드, 청구담당자명
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.f_downBillPrint = async function () {
  let options = {
    fileName: "BILL 내역.xlsx",
    sheetName: "BILL 내역"
  };
  let grdObj = gr_billPrint;
  let infoArr = {};
  if (ds_mobileLog.getTotalRow() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
    }
  }
};
scwin.f_downCertiPrint = async function () {
  let options = {
    fileName: "거래명세서 내역.xlsx",
    sheetName: "거래명세서 내역"
  };
  let grdObj = gr_certiPrint;
  let infoArr = {};
  if (ds_mobileLog.getTotalRow() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
    }
  }
};

//-------------------------------------------------------------------------
// 데이터 필터 걸기 위함
//-------------------------------------------------------------------------
scwin.ds_billPrint_ondataload = function () {
  gr_billPrint.setFocusedCell(0, 0);
  spa_totalRows1.setValue(ds_billPrint.getTotalRow());
  let options = {
    sortIndex: "fmlaNm certiNo bilgClntNo bilgClntNm confirmDt arDepPortDt impExpDomesticClsNm vsslcdPortcnt sellVatNo slipNo",
    sortOrder: "0 0 0 0 0 0 0 0 0 0"
  };
  ds_billPrint.multisort(options);
  scwin.f_certiPrint_Filter();
};
scwin.ds_billPrint_onrowpositionchange = function (info) {
  scwin.f_certiPrint_Filter();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_bilgLode',codeId:'ed_bilgLodeptCd',nameId:'ed_bilgLodeptNm',maxlengthCode:'4',UpperFlagCode:'1',allowCharCode:'A-Za-z0-9',objTypeCode:'data',validExpCode:'청구부서:yes',mandatoryCode:'true',objTypeName:'key',selectID:'retrieveOpDeptCdInfo','ev:onclickEvent':'scwin.udc_bilgLode_onClick','ev:onblurCodeEvent':'scwin.udc_bilgLode_onBlur','ev:onviewchangeNameEvent':'scwin.udc_bilgLode_onViewChange',popupGridHeadTitle:'부서코드,부서명,"","","","","","","",""',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',popupTitle:'부서조회,부서코드,부서명'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'라인',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'5',objTypeCode:'Data','ev:onviewchangeNameEvent':'scwin.udc_line_onViewChange',popupID:'',UpperFlagCode:'1',mandatoryCode:'false','ev:onclickEvent':'scwin.udc_line_onClick',allowCharCode:'A-Za-z0-9',codeId:'ed_lineCd',selectID:'retrieveLineInfo',popupGridHiddenColumn:'6,7,8,9,10',popupGridHeadTitle:'LINE코드,LINE명,COL3,COL4,COL5',popupTitle:'LINE조회,LINE코드,LINE명',objTypeName:'key',nameId:'ed_lineNm',style:'',id:'udc_line','ev:onblurCodeEvent':'scwin.udc_line_onBlur',hideName:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' req',editType:'select',id:'acb_qryConKnd',search:'start',style:'width: 130px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',displayMode:'value delim label','ev:onchange':'scwin.acb_qryConKnd_onChange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'BILL일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'BILL번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CERTI일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CERTI번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'div_qryConKnd',class:'form-group'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',edFromId:'ed_confirmDtFm',edToId:'ed_confirmDtTo',style:'',id:'div_qryConKnd1',refEdDt:''}}]},{T:1,N:'xf:group',A:{class:'form-group',id:'div_qryConKnd2',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_certiNo',placeholder:'',style:'width:85px;',objType:'Data',maxlength:'11',editType:'select','ev:onkeyup':'scwin.onkeyup'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_certiNo',style:'',type:'button','ev:onclick':'scwin.btn_certiNo_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'div_qryConKnd3',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_billNo',placeholder:'',style:'width:85px;',editType:'select',maxlength:'11','ev:onkeyup':'scwin.onkeyup'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_BillNo',style:'',type:'button','ev:onclick':'scwin.ed_billNo_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구담당자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_modId',maxlengthCode:'8',id:'udc_emp',nameId:'ed_empNm',objTypeCode:'Data',allowCharCode:'A-Za-z0-9',UpperFlagCode:'1',objTypeName:'data',selectID:'retrieveEmpInfo','ev:onclickEvent':'scwin.udc_emp_onClick','ev:onblurCodeEvent':'scwin.udc_emp_onBlur','ev:onviewchangeNameEvent':'scwin.udc_emp_onViewChange',popupGridHeadTitle:'사번,사원명,부서명,"","","","","","",""',popupGridHiddenColumn:'4,5,6,7,8,9,10',popupTitle:'사번,사원,사원명'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BILL종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_fmlaPatternCd',search:'start',style:'width:150px;',submenuSize:'auto','ev:oneditkeyup':'scwin.onkeyup',allOption:'',chooseOption:'true',ref:'',delimiter:'-',visibleRowNum:'20',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_fmlapattern'},E:[{T:1,N:'w2:label',A:{ref:'fmlaNm'}},{T:1,N:'w2:value',A:{ref:'fmlaPatternCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_dcsnClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'',visibleRowNum:'13'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:'grp_spanGrid1',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'BILL내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:'padding-bottom: 10px;'},E:[{T:1,N:'xf:trigger',A:{class:'btn align',id:'btn_trigger5',style:';visibility:hidden;',type:'button','ev:onclick':'scwin.btn_trigger5_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정렬'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'N',gridUpYn:'N',gridID:'gr_billPrint',gridDownFn:'scwin.f_downBillPrint'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_billPrint',id:'gr_billPrint',style:'',autoFit:'allColumn',autoFitMinWidth:'1700',resize:'true','ev:onheaderclick':'scwin.gr_billPrint_onHeadCheckClick',visibleRowNum:'5',visibleRowNumFix:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',value:'',fixColumnWidth:'true',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'서식명',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'표기<br/>서식',width:'70',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'표기서식명',width:'100',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'BILL번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'청구처',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'청구처명',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'BILL일자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'입출항일자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'수출입<br/>구분',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'모선<br/>항차',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column29',value:'공급금액',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'부가세',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'합계금액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'세금계산서<br/>번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'전표번호',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'외화',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'원화',displayMode:'label',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'choice',inputType:'checkbox',width:'50',fixColumnWidth:'true',valueType:'other',trueValue:'T',falseValue:'F'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fmlaNm',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inscrpFmlaPatternCd',inputType:'text',width:'70',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inscrpFmlaNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiNo',inputType:'text',width:'100',maxLength:'14'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'confirmDt',inputType:'text',width:'100',displayFormat:'####/##/##',maxLength:'8'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arDepPortDt',inputType:'text',width:'100',displayFormat:'####/##/##',maxLength:'8'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpDomesticClsNm',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vsslcdPortcnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyAmtFcrc',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'13.2',displayFormat:'#,###.00[floor]'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',maxLength:'13'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',maxLength:'13'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totAmt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellVatNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'grp_spanGrid2',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'CERTI내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:'padding-bottom: 10px;'},E:[{T:1,N:'xf:trigger',A:{class:'btn align',id:'btn_trigger6',style:';visibility:hidden;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정렬'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridDownYn:'N',gridID:'gr_certiPrint',gridDownFn:'scwin.f_downCertiPrint'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_certiPrint',id:'gr_certiPrint',style:'',autoFit:'allColumn',autoFitMinWidth:'1700',visibleRowNum:'4',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',fixColumnWidth:'true',id:'choice',inputType:'checkbox',rowSpan:'2',value:'',width:'50'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column17',inputType:'text',rowSpan:'2',value:'서식명',width:'80'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column15',inputType:'text',rowSpan:'2',value:'표기<br/>서식',width:'70',sortable:'true'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column13',inputType:'text',rowSpan:'2',value:'표기서식명',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'CERTI번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column11',inputType:'text',rowSpan:'2',value:'BILL번호',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column9',inputType:'text',rowSpan:'2',value:'청구처',width:'80'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column3',inputType:'text',rowSpan:'2',value:'청구처명',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column5',inputType:'text',rowSpan:'2',value:'CERTI일자',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'2',displayMode:'label',id:'column29',inputType:'text',rowSpan:'',value:'공급금액',width:'140',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column21',inputType:'text',rowSpan:'2',value:'부가세',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column23',inputType:'text',rowSpan:'2',value:'금액',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'공급일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'적요',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column25',inputType:'text',rowSpan:'2',value:'세금계산서<br/>번호',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column33',inputType:'text',rowSpan:'2',style:'',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column53',value:'BLNO',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column40',inputType:'text',style:'',value:'원화',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column39',inputType:'text',style:'',value:'외화',width:'100',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'choice',inputType:'checkbox',width:'50',valueType:'other',trueValue:'T',falseValue:'F'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fmlaNm',inputType:'text',textAlign:'left',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inscrpFmlaPatternCd',inputType:'text',width:'70',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inscrpFmlaNm',inputType:'text',textAlign:'left',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'certiNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upperCertiNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',textAlign:'left',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'confirmDt',inputType:'text',width:'100',displayFormat:'####/##/##',maxLength:'8'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyAmt',inputType:'text',textAlign:'right',width:'100',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyAmtFcrc',inputType:'text',textAlign:'right',width:'100',readOnly:'true',dataType:'float',displayFormat:'#,###.00[floor]',maxLength:'18.2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatAmt',inputType:'text',textAlign:'right',width:'100',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumAmt',inputType:'text',textAlign:'right',width:'100',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'spplyDt',value:'',displayMode:'label',displayFormat:'####/##/##',maxLength:'8'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellVatNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'blNo',value:'',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'',id:'spa_totalRow2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'}},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'인쇄관리',class:''}},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_printFg',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onchange':'scwin.rd_printFg_onChange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'BILL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CERTI'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통합발행'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_slipCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계산서발행'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_dspTotAmt',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'합계표시유무'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_dspDotYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'소수점표기유무'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_previewCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_bondedTransDeclar',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보세운송신고필증'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'발행부수',class:''}},{T:1,N:'xf:input',A:{style:'width: 50px;',id:'ed_printPage',placeholder:'',class:' tar',objType:'data'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'부',class:''}}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_print',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_print_onClick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:3,text:'발행'}]}]}]}]}]}]}]}]}]})