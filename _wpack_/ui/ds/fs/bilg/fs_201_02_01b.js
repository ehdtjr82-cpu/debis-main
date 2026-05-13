/*amd /ui/ds/fs/bilg/fs_201_02_01b.xml 67266 ac3c099b2cf887d02424d31c491959fadf4832bda40a7b603b5599b2f33b66e5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:3,text:'\n		-->\n		'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_linelist_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLoofcCd',name:'청구지점코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgComnCdKnd',name:'청구공통코드종류',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_billcover_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLoofcCd',name:'청구지점코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'라인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgComnCdKnd',name:'청구공통코드종류',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_linelist',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgLoofcCd',name:'청구지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'LINE명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_billcover',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgLoofcCd',name:'청구지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'라인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billCoverPatternNm',name:'유형명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billCoverFmlaClsCd',name:'BILL COVER양식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billCoverPatternSeq',name:'BILLCOVER유형순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'messersLabel',name:'귀하라벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNmLabel',name:'선명라벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslInscrpYn',name:'선명기재여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsFvLabel',name:'T/S F/V라벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsFvInscrpYn',name:'T/S F/V기재여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDepPortDtLabel',name:'입출항일라벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDepPortDtInscrpYn',name:'입출항일기재여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcntLabel',name:'항차라벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcntInscrpYn',name:'항차기재여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'titleSortClsCd',name:'TITLE정렬구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsTransDstInscrpYn',name:'T/S운송구간기재여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntInfoInscrpYn',name:'은행계좌정보기재여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRtInscrpYn',name:'환율기재여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'signInscrpYn',name:'서명기재여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billAmtInscrpTitle1',name:'BILL금액기재TITLE1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billAmtInscrpTitle2',name:'BILL금액기재TITLE2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgComnCdKnd',name:'청구공통코드종류',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_linelist_retrieve',action:'/ds.fs.bilg.bilgcomncdmgnt.RetrieveBillingComnCdLineListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_linelist_con","key":"IN_DS1"},{"id":"ds_linelist","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_linelist","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_linelist_retrieve_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_billcover_retrieve',action:'/ds.fs.bilg.bilgcomncdmgnt.RetrieveBillCoverListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_billcover_con","key":"IN_DS1"},{"id":"ds_billcover","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_billcover","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_billcover_retrieve_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_billcover_save',action:'/ds.fs.bilg.bilgcomncdmgnt.RegistBillCoverCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_billcover","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_billcover_save_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.MSG_FS_WRN_004 = "저장되지 않은 건입니다.";
scwin.MSG_FS_WRN_005 = "공통코드는 삭제할 수 없습니다.";
scwin.addflag = ""; // 신규입력/수정 구분자
scwin.delflag = ""; // 삭제 구분자
scwin.billcover = "BILLCOVER"; // 청구공통코드 종류
scwin.condition = ""; // DataSet 구분자

// 내부 tab3개 동일한 UI로 id값 구분
scwin.tabCompIds = [{
  txt_billCoverPatternNm: "txt_billCoverPatternNm",
  rd_billCoverFmlaClsCd: "rd_billCoverFmlaClsCd",
  txt_messersLabel: "txt_messersLabel",
  txt_vsslNmLabel: "txt_vsslNmLabel",
  chb_vsslInscrpYn: "chb_vsslInscrpYn",
  txt_tsFvLabel: "txt_tsFvLabel",
  chb_tsFvInscrpYn: "chb_tsFvInscrpYn",
  txt_arDepPortDtLabel: "txt_arDepPortDtLabel",
  chb_arDepPortDtInscrpYn: "chb_arDepPortDtInscrpYn",
  txt_portcntLabel: "txt_portcntLabel",
  chb_portcntInscrpYn: "chb_portcntInscrpYn",
  rd_titleSortClsCd: "rd_titleSortClsCd",
  chb_tsTransDstInscrpYn: "chb_tsTransDstInscrpYn",
  chb_bankAcntInfoInscrpYn: "chb_bankAcntInfoInscrpYn",
  chb_exchRtInscrpYn: "chb_exchRtInscrpYn",
  chb_signInscrpYn: "chb_signInscrpYn",
  txt_billAmtInscrpTitle1: "txt_billAmtInscrpTitle1",
  txt_billAmtInscrpTitle2: "txt_billAmtInscrpTitle2"
}, {
  txt_billCoverPatternNm: "txt_billCoverPatternNm_2",
  rd_billCoverFmlaClsCd: "rd_billCoverFmlaClsCd_2",
  txt_messersLabel: "txt_messersLabel_2",
  txt_vsslNmLabel: "txt_vsslNmLabel_2",
  chb_vsslInscrpYn: "chb_vsslInscrpYn_2",
  txt_tsFvLabel: "txt_tsFvLabel_2",
  chb_tsFvInscrpYn: "chb_tsFvInscrpYn_2",
  txt_arDepPortDtLabel: "txt_arDepPortDtLabel_2",
  chb_arDepPortDtInscrpYn: "chb_arDepPortDtInscrpYn_2",
  txt_portcntLabel: "txt_portcntLabel_2",
  chb_portcntInscrpYn: "chb_portcntInscrpYn_2",
  rd_titleSortClsCd: "rd_titleSortClsCd_2",
  chb_tsTransDstInscrpYn: "chb_tsTransDstInscrpYn_2",
  chb_bankAcntInfoInscrpYn: "chb_bankAcntInfoInscrpYn_2",
  chb_exchRtInscrpYn: "chb_exchRtInscrpYn_2",
  chb_signInscrpYn: "chb_signInscrpYn_2",
  txt_billAmtInscrpTitle1: "txt_billAmtInscrpTitle1_2",
  txt_billAmtInscrpTitle2: "txt_billAmtInscrpTitle2_2"
}, {
  txt_billCoverPatternNm: "txt_billCoverPatternNm_3",
  rd_billCoverFmlaClsCd: "rd_billCoverFmlaClsCd_3",
  txt_messersLabel: "txt_messersLabel_3",
  txt_vsslNmLabel: "txt_vsslNmLabel_3",
  chb_vsslInscrpYn: "chb_vsslInscrpYn_3",
  txt_tsFvLabel: "txt_tsFvLabel_3",
  chb_tsFvInscrpYn: "chb_tsFvInscrpYn_3",
  txt_arDepPortDtLabel: "txt_arDepPortDtLabel_3",
  chb_arDepPortDtInscrpYn: "chb_arDepPortDtInscrpYn_3",
  txt_portcntLabel: "txt_portcntLabel_3",
  chb_portcntInscrpYn: "chb_portcntInscrpYn_3",
  rd_titleSortClsCd: "rd_titleSortClsCd_3",
  chb_tsTransDstInscrpYn: "chb_tsTransDstInscrpYn_3",
  chb_bankAcntInfoInscrpYn: "chb_bankAcntInfoInscrpYn_3",
  chb_exchRtInscrpYn: "chb_exchRtInscrpYn_3",
  chb_signInscrpYn: "chb_signInscrpYn_3",
  txt_billAmtInscrpTitle1: "txt_billAmtInscrpTitle1_3",
  txt_billAmtInscrpTitle2: "txt_billAmtInscrpTitle2_3"
}];

// 각 tab 에 맞는 ID 찾는
scwin._getComp = function (tabIdx, fieldKey) {
  let compId = scwin.tabCompIds[tabIdx][fieldKey];
  return $p.getComponentById(compId);
};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //$p.parent().scwin.mtoggle_onclick();

  for (let i = 0; i < 3; i++) {
    scwin._getComp(i, "rd_billCoverFmlaClsCd").setValue("T1");
    scwin._getComp(i, "rd_titleSortClsCd").setValue("C");
  }
};
scwin.onUdcCompleted = function () {
  ed_bilgLoofcCd.focus();
  $c.gus.cfDisableAllBtn($p);
  $c.gus.cfDisableObjects($p, [btn_addRow, btn_cancelRow]);
  //scwin.f_ViewTab(0);
};

//-------------------------------------------------------------------------
// 조건에 따라 DataSet 가져오기
//-------------------------------------------------------------------------
scwin.f_GetDataSet = async function (condition, row) {
  dma_linelist_con.setJSON([]); // dma 초기화

  if (condition == "LINE_CON") {
    dma_linelist_con.set("bilgLoofcCd", ed_bilgLoofcCd.getValue());
    dma_linelist_con.set("bilgComnCdKnd", scwin.billcover);
    sbm_linelist_retrieve.action = "/ds.fs.bilg.bilgcomncdmgnt.RetrieveBillingComnCdLineListCMD.do";
    await $c.sbm.execute($p, sbm_linelist_retrieve);
  } else if (condition == "BILGCOMNCD_CON") {
    dma_billcover_con.set("bilgLoofcCd", ds_linelist.getCellData(0, "bilgLoofcCd"));
    dma_billcover_con.set("lineCd", ds_linelist.getCellData(parseInt(row), "lineCd"));
    dma_billcover_con.set("bilgComnCdKnd", scwin.billcover);

    // BILL COVER DataSet(공통코드)
    if (row == "0") {
      sbm_billcover_retrieve.action = "/ds.fs.bilg.bilgcomncdmgnt.RetrieveBillCoverListCMD.do";
    } else {
      // BILL COVER DataSet(해당코드)
      sbm_billcover_retrieve.action = "/ds.fs.bilg.bilgcomncdmgnt.RetrieveBillCoverListCMD.do";
    }
    await $c.sbm.execute($p, sbm_billcover_retrieve);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let chk = await $c.gus.cfValidate($p, [ed_bilgLoofcCd]);
  if (!chk) return;

  // 조회시 기존 데이터는 모두 삭제
  ds_linelist.removeAll();
  ds_billcover.removeAll();

  // 조건에 따라 DataSet 분리하여 호출
  await scwin.f_GetDataSet("LINE_CON");
};

//-------------------------------------------------------------------------
// sbm_linelist_retrieve 완료 (가우스: ds_linelist OnLoadCompleted)
//-------------------------------------------------------------------------
scwin.sbm_linelist_retrieve_submitdone = async function (e) {
  let rowCnt = ds_linelist.getRowCount();
  totalCnt.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfInitObjects($p, tbl_search1);
    $c.gus.cfInitObjects($p, tbl_search2);
    $c.gus.cfInitObjects($p, tbl_search3);
    $c.gus.cfDisableAllBtn($p);
    $c.gus.cfDisableObjects($p, [btn_addRow, btn_cancelRow]);
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    $c.gus.cfEnableAllBtn($p);
    $c.gus.cfEnableObjects($p, [btn_addRow, btn_cancelRow]);
    //scwin.f_GetDataSet("BILGCOMNCD_CON", "0");
    // edit 불가능하게 처리
    scwin.f_Editable("false");
    gr_line.setFocusedCell(0, "lineCd", true);
  }
};

//-------------------------------------------------------------------------
// sbm_billcover_retrieve 완료 (가우스: tr_billcover_retrieve OnSuccess)
//-------------------------------------------------------------------------
scwin.sbm_billcover_retrieve_submitdone = function (e) {
  $c.gus.cfInitObjects($p, tbl_search1);
  $c.gus.cfInitObjects($p, tbl_search2);
  $c.gus.cfInitObjects($p, tbl_search3);
  let rowCnt = ds_billcover.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    if (!scwin.tabCompIds[i]) continue;
    scwin._getComp(i, "txt_billCoverPatternNm").setValue(ds_billcover.getCellData(i, "billCoverPatternNm"));
    scwin._getComp(i, "rd_billCoverFmlaClsCd").setValue(ds_billcover.getCellData(i, "billCoverFmlaClsCd"));
    scwin._getComp(i, "txt_messersLabel").setValue(ds_billcover.getCellData(i, "messersLabel"));
    scwin._getComp(i, "txt_vsslNmLabel").setValue(ds_billcover.getCellData(i, "vsslNmLabel"));
    scwin._getComp(i, "txt_tsFvLabel").setValue(ds_billcover.getCellData(i, "tsFvLabel"));
    scwin._getComp(i, "txt_arDepPortDtLabel").setValue(ds_billcover.getCellData(i, "arDepPortDtLabel"));
    scwin._getComp(i, "txt_portcntLabel").setValue(ds_billcover.getCellData(i, "portcntLabel"));
    scwin._getComp(i, "rd_titleSortClsCd").setValue(ds_billcover.getCellData(i, "titleSortClsCd"));
    scwin._getComp(i, "chb_vsslInscrpYn").setValue(scwin.f_SetChkValue(ds_billcover, i, "vsslInscrpYn") ? "1" : "");
    scwin._getComp(i, "chb_tsFvInscrpYn").setValue(scwin.f_SetChkValue(ds_billcover, i, "tsFvInscrpYn") ? "1" : "");
    scwin._getComp(i, "chb_arDepPortDtInscrpYn").setValue(scwin.f_SetChkValue(ds_billcover, i, "arDepPortDtInscrpYn") ? "1" : "");
    scwin._getComp(i, "chb_portcntInscrpYn").setValue(scwin.f_SetChkValue(ds_billcover, i, "portcntInscrpYn") ? "1" : "");
    scwin._getComp(i, "chb_tsTransDstInscrpYn").setValue(scwin.f_SetChkValue(ds_billcover, i, "tsTransDstInscrpYn") ? "1" : "");
    scwin._getComp(i, "chb_bankAcntInfoInscrpYn").setValue(scwin.f_SetChkValue(ds_billcover, i, "bankAcntInfoInscrpYn") ? "1" : "");
    scwin._getComp(i, "chb_exchRtInscrpYn").setValue(scwin.f_SetChkValue(ds_billcover, i, "exchRtInscrpYn") ? "1" : "");
    scwin._getComp(i, "chb_signInscrpYn").setValue(scwin.f_SetChkValue(ds_billcover, i, "signInscrpYn") ? "1" : "");
    scwin._getComp(i, "txt_billAmtInscrpTitle1").setValue(ds_billcover.getCellData(i, "billAmtInscrpTitle1"));
    scwin._getComp(i, "txt_billAmtInscrpTitle2").setValue(ds_billcover.getCellData(i, "billAmtInscrpTitle2"));
  }
};

//-------------------------------------------------------------------------
// sbm_billcover_save 완료
//-------------------------------------------------------------------------

scwin.sbm_billcover_save_submitdone = async function (e) {
  var result = e.responseJSON?.resultDataSet?.[0];
  if (!result) return;
  if (result.Msg === "SUCC") {
    scwin.addflag = "MOD";
    if (scwin.delflag == "DEL") {
      await $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
      await scwin.f_Retrieve();
    } else {
      // 저장, 수정 이후 재조회 프로세스가 없고, "R" 초기상태로 셋팅
      for (let i = 0; i < ds_linelist.getRowCount(); i++) {
        ds_linelist.modifyRowStatus(i, "R");
        gr_line.setCellInputType(i, "lineCd", {
          inputType: "text"
        });
      }
      for (let i = 0; i < ds_billcover.getRowCount(); i++) {
        ds_billcover.modifyRowStatus(i, "R");
      }
      await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    }
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  // 현재 탭만 검증 수행
  // (다른 탭은 인덱스 변경 시 이미 검증 완료된 것으로 가정)
  var currentIdx = tac_tabControl1.getSelectedTabIndex();

  // 26.04.06 >> AS-IS 필수값 체크X (제외시킴)
  // let chkValid = await scwin.checkValidation(currentIdx);
  // if (!chkValid) return;

  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (!confirmResult) return;
  let focusedRowIndex = gr_line.getFocusedRowIndex();
  const seqMap = ["A", "B", "C"];
  for (let j = 0; j < ds_billcover.getRowCount(); j++) {
    if (scwin.addflag == "REG") {
      ds_billcover.setCellData(j, "billCoverPatternSeq", seqMap[j]);
    }
    ds_billcover.setCellData(j, "bilgLoofcCd", ds_linelist.getCellData(0, "bilgLoofcCd"));
    ds_billcover.setCellData(j, "lineCd", ds_linelist.getCellData(focusedRowIndex, "lineCd"));
    ds_billcover.setCellData(j, "billCoverPatternNm", scwin._getComp(j, "txt_billCoverPatternNm").getValue());
    ds_billcover.setCellData(j, "billCoverFmlaClsCd", scwin._getComp(j, "rd_billCoverFmlaClsCd").getValue());
    ds_billcover.setCellData(j, "messersLabel", scwin._getComp(j, "txt_messersLabel").getValue());
    ds_billcover.setCellData(j, "vsslNmLabel", scwin._getComp(j, "txt_vsslNmLabel").getValue());
    ds_billcover.setCellData(j, "vsslInscrpYn", scwin.f_GetChkValue(scwin._getComp(j, "chb_vsslInscrpYn")));
    ds_billcover.setCellData(j, "tsFvLabel", scwin._getComp(j, "txt_tsFvLabel").getValue());
    ds_billcover.setCellData(j, "tsFvInscrpYn", scwin.f_GetChkValue(scwin._getComp(j, "chb_tsFvInscrpYn")));
    ds_billcover.setCellData(j, "arDepPortDtLabel", scwin._getComp(j, "txt_arDepPortDtLabel").getValue());
    ds_billcover.setCellData(j, "arDepPortDtInscrpYn", scwin.f_GetChkValue(scwin._getComp(j, "chb_arDepPortDtInscrpYn")));
    ds_billcover.setCellData(j, "portcntLabel", scwin._getComp(j, "txt_portcntLabel").getValue());
    ds_billcover.setCellData(j, "portcntInscrpYn", scwin.f_GetChkValue(scwin._getComp(j, "chb_portcntInscrpYn")));
    ds_billcover.setCellData(j, "titleSortClsCd", scwin._getComp(j, "rd_titleSortClsCd").getValue());
    ds_billcover.setCellData(j, "tsTransDstInscrpYn", scwin.f_GetChkValue(scwin._getComp(j, "chb_tsTransDstInscrpYn")));
    ds_billcover.setCellData(j, "bankAcntInfoInscrpYn", scwin.f_GetChkValue(scwin._getComp(j, "chb_bankAcntInfoInscrpYn")));
    ds_billcover.setCellData(j, "exchRtInscrpYn", scwin.f_GetChkValue(scwin._getComp(j, "chb_exchRtInscrpYn")));
    ds_billcover.setCellData(j, "signInscrpYn", scwin.f_GetChkValue(scwin._getComp(j, "chb_signInscrpYn")));
    ds_billcover.setCellData(j, "billAmtInscrpTitle1", scwin._getComp(j, "txt_billAmtInscrpTitle1").getValue());
    ds_billcover.setCellData(j, "billAmtInscrpTitle2", scwin._getComp(j, "txt_billAmtInscrpTitle2").getValue());
  }
  scwin.delflag = "";
  if (scwin.addflag == "REG") {
    sbm_billcover_save.action = "/ds.fs.bilg.bilgcomncdmgnt.RegistBillCoverCMD.do";
    sbm_billcover_save.ref = 'data:json,[{"id":"ds_billcover","key":"IN_DS1"}]';
  } else if (scwin.addflag == "" || scwin.addflag == "MOD") {
    sbm_billcover_save.action = "/ds.fs.bilg.bilgcomncdmgnt.UpdateBillCoverCMD.do";
    sbm_billcover_save.ref = 'data:json,[{"id":"ds_billcover","key":"IN_DS1", "action": "modified"}]';
  }
  await $c.sbm.execute($p, sbm_billcover_save);
};

//-------------------------------------------------------------------------
// 그리드 추가
//-------------------------------------------------------------------------
scwin.f_AddRow = async function () {
  let changePossible = await scwin.f_chkPosChange();
  if (!changePossible) return;
  let rowIndex = ds_linelist.insertRow();

  // 조건에 따라 DataSet 가져오기 
  scwin.f_GetDataSet("BILGCOMNCD_CON", "0");

  // 신규생성 row 일 경우.
  if (ds_linelist.getRowStatusValue(rowIndex) == 2) {
    scwin.addflag = "REG";
    gr_line.setFocusedCell(rowIndex, "lineCd", true);
    gr_line.setCellInputType(rowIndex, "lineCd", {
      inputType: "textImage",
      options: {
        viewType: "icon"
      }
    });
    scwin.f_Popup();
  }
};
scwin.f_chkPosChange = async function () {
  let chkEdit = ds_linelist.getModifiedIndex();
  if (chkEdit.length > 0) {
    let chkConfirm = await $c.win.confirm($p, "저장하지 않은 데이타를 취소하시겠습니까?");
    if (chkConfirm) {
      ds_linelist.removeRows(chkEdit);
    }
    return chkConfirm;
  } else {
    return true;
  }
};

// --------------------------------------------------------------------
// 그리드 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  if (gr_line.getFocusedRowStatus() === "C") {
    // 신규추가행
    ds_linelist.removeRow();
    scwin.addflag = "MOD";
    gr_line.setFocusedCell(0, "lineCd", true);
  }
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  if (ds_linelist.getRowStatusValue(ds_linelist.getRowPosition()) === 2) {
    await $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_004);
    return;
  } else {
    if (ds_linelist.getCellData(ds_linelist.getRowPosition(), "lineCd") == "0000") {
      await $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_005);
      return;
    }
    let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_004);
    if (confirmResult == true) {
      ds_linelist.deleteRow(ds_linelist.getRowPosition());
      ds_billcover.deleteRow(ds_billcover.getRowPosition());
      scwin.delflag = "DEL";
      sbm_billcover_save.action = "/ds.fs.bilg.bilgcomncdmgnt.DeleteBillCoverCMD.do";
      sbm_billcover_save.ref = 'data:json,[{"id":"ds_billcover","key":"IN_DS1", "action": "removed"}]';
      await $c.sbm.execute($p, sbm_billcover_save);
    }
  }
};

//-------------------------------------------------------------------------
// Disable 처리
//-------------------------------------------------------------------------
scwin.f_Editable = function (edit) {
  // if (edit == "true") {
  //     gr_line.setReadOnly("column", "lineCd", true);
  //     gr_line.setReadOnly("column", "lineNm", true);

  // } else {
  //     gr_line.setReadOnly("column", "lineCd", true);
  //     gr_line.setReadOnly("column", "lineNm", true);
  // }
};

//-------------------------------------------------------------------------
// Checkbox Value 값 가져오기
//-------------------------------------------------------------------------	
scwin.f_GetChkValue = function (chkComp) {
  let val = chkComp.getValue();
  if (val != null && val != "" && val.length > 0) {
    return "1";
  } else {
    return "0";
  }
};

//-------------------------------------------------------------------------
// Checkbox Value 값 세팅
//-------------------------------------------------------------------------	
scwin.f_SetChkValue = function (dsId, row, id) {
  if (dsId.getCellData(row, id) == "1") {
    return true;
  } else {
    return false;
  }
};

//-------------------------------------------------------------------------
// 팝업창 띄우기
//-------------------------------------------------------------------------	
scwin.f_Popup = async function () {
  let pCode = "";
  let pName = "";

  // LINE 목록 코드 조회 popup
  udc_line.setSelectId("retrieveLineInfo"); // XML상의 SELECT ID	
  await udc_line.cfCommonPopUp(scwin.udc_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
  , pName // 화면에서의 ??? Name Element의	Value
  , 'F' // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서	
  , null // 보여주는 각 컬럼들의 폭	
  , null // 컬럼중에서 숨기는	컬럼 지정	
  , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부
  , 'F' // 전체검색허용여부
  , null // POP-UP Window Title 검색어1,2(각화면에서 변경할경우)	  							
  );
};

//-------------------------------------------------------------------------	
// 그리드 내부 line Popup
//-------------------------------------------------------------------------	
scwin.udc_callBackFunc = function (rtnList) {
  let rowIndex = ds_linelist.getRowPosition();
  ds_linelist.setCellData(rowIndex, "lineCd", "");
  ds_linelist.setCellData(rowIndex, "lineNm", "");
  if (rtnList != null && rtnList[0] != "N/A") {
    ds_linelist.setCellData(ds_linelist.getRowPosition(), "lineCd", rtnList[0]); // 라인코드
    ds_linelist.setCellData(ds_linelist.getRowPosition(), "lineNm", rtnList[1]); // 라인명
  }
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      //청구지점코드팝업			
      udc_bilgLoofc.setSelectId('retrieveOpDeptCdInfo');
      udc_bilgLoofc.cfCommonPopUp(scwin.udc_bilgLoofc_callbackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};
scwin.udc_bilgLoofc_callbackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLoofcCd, txt_bilgLoofcNm); // 청구지점코드, 청구지점명	
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  let chk = await $c.gus.cfCanOpenPopup($p, inObj, pairObj);
  if (!chk) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin._revertingNode = false; // 되돌리기 중 재진입 방지용

//=========================================================================
// 그리드 이벤트 핸들러
//=========================================================================
// index change 이전 신규 추가된 행 저장 여부 확인
// gr_line 행 변경 (가우스: ds_linelist OnRowPosChanged)
scwin.gr_line_onrowindexchange = async function (rowIndex, oldRow) {
  if (scwin._revertingNode) return;
  if (ds_linelist.getRowStatusValue(oldRow) === 2) {
    let chkConfirm = await scwin.f_chkPosChange();
    if (!chkConfirm) {
      // 무한 반복 방지를 위해 _revertingNode flag 사용
      scwin._revertingNode = true;
      // gr_lo353List validtion 검증 실패 -> 원래 row로 복귀
      gr_line.setFocusedCell(oldRow, "lineCd");
      scwin._revertingNode = false;
      return false;
    }
  } else {
    gr_line.setCellInputType(rowIndex, "lineCd", {
      inputType: "text"
    });
  }
  if (ds_linelist.getRowStatusValue(rowIndex) !== 2) {
    scwin.f_Editable("false");
    await scwin.f_GetDataSet("BILGCOMNCD_CON", rowIndex);
    scwin.addflag = "MOD";
  } else {
    scwin.f_Editable("true");
    scwin.addflag = "REG";
  }
};

// gr_line lineCd 컬럼 팝업 클릭 (가우스: gr_line OnPopup)
scwin.gr_line_onpopup = function (rowIndex, colId) {
  scwin.f_Popup();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_del_onclick = function (e) {
  scwin.f_Delete();
};
scwin.udc_bilgLoofc_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLoofcCd, txt_bilgLoofcNm, 1);
};
scwin.udc_bilgLoofc_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_bilgLoofcNm, ed_bilgLoofcCd, 1, false);
};
scwin.udc_bilgLoofc_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgLoofcCd.getValue(), txt_bilgLoofcNm.getValue(), 'F', 'F');
};

// 탭 이동 제어를 위한 플래그 변수
scwin.isManualMove = false;
//-------------------------------------------------------------------------
// Tab Display 처리(가우스: f_ViewTab(idx))
//-------------------------------------------------------------------------
// 탭 이동 전 valid 체크
// selectedIndex: 현재 탭, index: 이동 대상 탭
scwin.tac_tabControl1_onbeforeselect = function (selectedIndex, index) {
  // 26.04.06 >> AS-IS 필수값 검증 X (제외시킴) T-6253 결함 처리
  // if (scwin.isManualMove) {
  //     return true;
  // }

  // // 2. 일단 false를 반환하여 사용자의 클릭에 의한 자동 이동을 차단
  // // 그 다음 비동기 검증 함수를 호출합니다.
  // scwin.fn_asyncTabValidation(selectedIndex, index);

  // return false;
};

/**
 * 비동기 유효성 검사 및 수동 탭 이동 처리
 * (가우스: f_ViewTab())
 */
scwin.fn_asyncTabValidation = async function (oldIdx, newIdx) {
  // 필수 입력항목 체크
  let isOk = await scwin.checkValidation(oldIdx);
  if (isOk) {
    // 4. 검증 통과 시 플래그를 true로 바꾸고 수동으로 탭 이동 실행
    scwin.isManualMove = true;

    // TabControl의 API를 사용하여 해당 인덱스로 이동 [2]
    // (이 함수 호출 시 다시 onbeforeselect가 발생하지만, 플래그에 의해 위에서 true가 반환됨)
    tac_tabControl1.setSelectedTabIndex(newIdx);

    // 5. 이동 완료 후 플래그 초기화
    scwin.isManualMove = false;
  }
};

// 각 필드를 점검해야되는건지..? AS-IS 에서는 검증 동작을 안하는 거 같은데.
scwin.checkValidation = async function (tabIndex) {
  let ids = scwin.tabCompIds[tabIndex]; // 현재 보고있던 tabIndex
  let comps = [gr_line, $p.getComponentById(ids.txt_billCoverPatternNm), $p.getComponentById(ids.txt_messersLabel), $p.getComponentById(ids.txt_vsslNmLabel), $p.getComponentById(ids.txt_tsFvLabel), $p.getComponentById(ids.txt_arDepPortDtLabel), $p.getComponentById(ids.txt_portcntLabel)];
  let chk = await $c.gus.cfValidate($p, comps, null, true);
  if (!chk) {
    // 검증 실패 시 false 반환
    return false;
  }

  // 검증 성공 시 true 반환
  return true;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구지점',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_bilgLoofc',codeId:'ed_bilgLoofcCd',nameId:'txt_bilgLoofcNm',popupID:'',style:'',validTitle:'청구지점',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'4',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onblurCodeEvent':'scwin.udc_bilgLoofc_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_bilgLoofc_onblurNameEvent','ev:onclickEvent':'scwin.udc_bilgLoofc_onclickEvent',mandatoryCode:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox wfix flex_no'},E:[{T:1,N:'xf:group',A:{style:'width: 40%;',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox gvwflex'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'ds_linelist',style:'',autoFit:'allColumn',dataName:'LINE',validFeatures:'ignoreStatus=yes',validExp:'lineCd:LINE:yes:string&maxlength=5:key',id:'gr_line',class:'wq_gvw',readOnly:'false',rowStatusVisible:'true',setCellInputTypeCustom:'true','ev:onrowindexchange':'scwin.gr_line_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgLoofcCd',value:'청구지점코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lineCd',value:'LINE',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'lineNm',value:'LINE명',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgLoofcCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'custom',id:'lineCd',displayMode:'label',readOnly:'true',imageClickFunction:'scwin.f_Popup',viewType:'icon',viewTypeIconImage:'true'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'lineNm',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalCnt',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnDelYn:'N',btnRowDelYn:'N',gridID:'gr_line',rowAddFunction:'scwin.f_AddRow',cancelFunction:'scwin.f_Cancel',rowAddUserAuth:'C',btnRowAddObj:'btn_addRow',btnCancelObj:'btn_cancelRow',btnCancelYn:'Y',btnRowAddYn:'Y'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tabbox'},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'true',style:'',id:'tac_tabControl1',class:'wq_tab','ev:onbeforeselect':'scwin.tac_tabControl1_onbeforeselect'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs1',label:'A TYPE'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs2',label:'B TYPE'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs3',label:'C TYPE'}},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'content1'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BILL',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DATE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:' BILL-NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'유형명 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'txt_billCoverPatternNm',placeholder:'',class:'',mandatory:'true',maxlength:'30',title:'유형명'}},{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'',id:'rd_billCoverFmlaClsCd',renderType:'radiogroup',rows:'',class:'',cols:'',selectedIndex:'-1',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Normal'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Table(1)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'T1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Table(2)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'T2'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀하',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_messersLabel',placeholder:'',style:'width:150px;',mandatory:'true',maxlength:'30',title:'귀하'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'txt_vsslNmLabel',placeholder:'',class:'',title:'선명',maxlength:'30',mandatory:'true'}},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_vsslInscrpYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'T/S F/V',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_tsFvLabel',placeholder:'',style:'width:150px;',mandatory:'true',maxlength:'30',title:'T/S F/V'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_tsFvInscrpYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입출항일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_arDepPortDtLabel',placeholder:'',style:'width:150px;',mandatory:'true',maxlength:'30',title:'입출항일'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_arDepPortDtInscrpYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_portcntLabel',placeholder:'',style:'width:150px;',mandatory:'true',maxlength:'30',title:'항차'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_portcntInscrpYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th pa16'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-10 tac'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'We herby request the payment for the following service rendered to you',class:''}},{T:1,N:'xf:group',A:{id:'',class:'form-group tac'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'TITLE',class:''}},{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'',id:'rd_titleSortClsCd',renderType:'radiogroup',rows:'',class:'',cols:'',selectedIndex:'-1',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'왼쪽정렬'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'L'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중앙정렬'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_tsTransDstInscrpYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'tac',cols:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'(P#C ~ P#2) T/S 운송구간 출력여부 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14 tac'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'TITLE1',class:''}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'txt_billAmtInscrpTitle1',placeholder:'',class:'',maxlength:'30'}}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'TITLE2',class:''}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'txt_billAmtInscrpTitle2',placeholder:'',class:'',maxlength:'30'}}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'BILL 내역',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th pa16'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14 tac'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_bankAcntInfoInscrpYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ACCOUNT INFO'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_exchRtInscrpYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'환율'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th pa16'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-10 tac'},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-2'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'"We certify that above is true and correct"',class:''}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'DONGBU CORPORATION',class:''}}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_signInscrpYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'tac',cols:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'SIGN'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'content2'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search2',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BILL',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DATE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:' BILL-NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유형명 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_billCoverPatternNm_2',placeholder:'',style:'width:150px;',mandatory:'true',maxlength:'30',title:'유형명'}},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_billCoverFmlaClsCd_2',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Normal'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Table(1)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'T1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Table(2)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'T2'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀하',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_messersLabel_2',placeholder:'',style:'width:150px;',mandatory:'true',maxlength:'30',title:'귀하'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_vsslNmLabel_2',placeholder:'',style:'width:150px;',title:'선명',maxlength:'30',mandatory:'true'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_vsslInscrpYn_2',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'T/S F/V',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_tsFvLabel_2',placeholder:'',style:'width:150px;',mandatory:'true',maxlength:'30',title:'T/S F/V'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_tsFvInscrpYn_2',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입출항일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_arDepPortDtLabel_2',placeholder:'',style:'width:150px;',mandatory:'true',maxlength:'30',title:'입출항일'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_arDepPortDtInscrpYn_2',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_portcntLabel_2',placeholder:'',style:'width:150px;',mandatory:'true',maxlength:'30',title:'항차'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_portcntInscrpYn_2',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th pa16',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'row-gap-10 tac',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'We herby request the payment for the following service rendered to you',ref:'',style:'',userData2:''}},{T:1,N:'xf:group',A:{class:'form-group tac',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TITLE',ref:'',style:'',userData2:''}},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_titleSortClsCd_2',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'왼쪽정렬'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'L'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중앙정렬'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'tac',cols:'',id:'chb_tsTransDstInscrpYn_2',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'(P#C ~ P#2) T/S 운송구간 출력여부 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:group',A:{class:'col-gap-14 tac',id:''},E:[{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TITLE1',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'txt_billAmtInscrpTitle1_2',placeholder:'',style:'width:150px;',maxlength:'30'}}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TITLE2',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'txt_billAmtInscrpTitle2_2',placeholder:'',style:'width:150px;',maxlength:'30'}}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BILL 내역',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th pa16',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'col-gap-14 tac',id:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_bankAcntInfoInscrpYn_2',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ACCOUNT INFO'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_exchRtInscrpYn_2',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'환율'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th pa16',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'row-gap-10 tac',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-2',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'"We certify that above is true and correct"',ref:'',style:'',userData2:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DONGBU CORPORATION',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:select',A:{appearance:'full',class:'tac',cols:'',id:'chb_signInscrpYn_2',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'SIGN'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'content3'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search3',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BILL',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DATE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:' BILL-NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유형명 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_billCoverPatternNm_3',placeholder:'',style:'width:150px;',mandatory:'true',maxlength:'30',title:'유형명'}},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_billCoverFmlaClsCd_3',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Normal'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Table(1)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'T1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Table(2)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'T2'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀하',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_messersLabel_3',placeholder:'',style:'width:150px;',mandatory:'true',maxlength:'30',title:'귀하'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_vsslNmLabel_3',placeholder:'',style:'width:150px;',title:'선명',maxlength:'30',mandatory:'true'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_vsslInscrpYn_3',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'T/S F/V',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_tsFvLabel_3',placeholder:'',style:'width:150px;',mandatory:'true',maxlength:'30',title:'T/S F/V'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_tsFvInscrpYn_3',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입출항일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_arDepPortDtLabel_3',placeholder:'',style:'width:150px;',mandatory:'true',maxlength:'30',title:'입출항일'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_arDepPortDtInscrpYn_3',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_portcntLabel_3',placeholder:'',style:'width:150px;',mandatory:'true',maxlength:'30',title:'항차'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_portcntInscrpYn_3',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th pa16',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'row-gap-10 tac',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'We herby request the payment for the following service rendered to you',ref:'',style:'',userData2:''}},{T:1,N:'xf:group',A:{class:'form-group tac',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TITLE',ref:'',style:'',userData2:''}},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_titleSortClsCd_3',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'왼쪽정렬'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'L'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중앙정렬'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'tac',cols:'',id:'chb_tsTransDstInscrpYn_3',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'(P#C ~ P#2) T/S 운송구간 출력여부 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:group',A:{class:'col-gap-14 tac',id:''},E:[{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TITLE1',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'txt_billAmtInscrpTitle1_3',placeholder:'',style:'width:150px;',maxlength:'30'}}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TITLE2',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'txt_billAmtInscrpTitle2_3',placeholder:'',style:'width:150px;',maxlength:'30'}}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BILL 내역',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th pa16',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'col-gap-14 tac',id:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_bankAcntInfoInscrpYn_3',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ACCOUNT INFO'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_exchRtInscrpYn_3',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'환율'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th pa16',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'row-gap-10 tac',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-2',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'"We certify that above is true and correct"',ref:'',style:'',userData2:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DONGBU CORPORATION',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:select',A:{appearance:'full',class:'tac',cols:'',id:'chb_signInscrpYn_3',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'SIGN'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_save_onclick',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_del',label:'저장',style:'',type:'button',userAuth:'D','ev:onclick':'scwin.btn_del_onclick',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',nameId:'',style:'display:none;',id:'udc_line'}}]}]}]}]}]}]}]})