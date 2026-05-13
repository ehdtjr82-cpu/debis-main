/*amd /ui/ds/fs/bilg/fs_201_02_06b.xml 75495 8616fca564988523300f8187186c3395faba9f372de6b4361991d3b26e1310e8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_formulalist_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLoofcCd',name:'청구물류지점코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_formulasellitemlist_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLoofcCd',name:'청구물류지점코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaPatternCd',name:'서식유형코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_formulalist',repeatNode:'map',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_formulalist_onrowpositionchange','ev:onbeforerowpositionchange':'scwin.ds_formulalist_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaNm',name:'서식명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lvlFmlaPatternCd',name:'청구서유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lvlFmlaNm',name:'청구서유형명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperFmlaClsCd',name:'상위서식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperFmlaPatternCd',name:'상위서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperFmlaNm',name:'상위서식명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPrtnYn',name:'서식출력여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizClsCd',name:'사업구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unqItm',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaClsCd',name:'표기서식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaPatternCd',name:'표기서식유형코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_formulacustomerlist',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_formulacustomerlist_onrowpositionchange','ev:onbeforerowpositionchange':'scwin.ds_formulacustomerlist_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgLoofcCd',name:'청구물류지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billbilgUnitclsCd',name:'BILL청구단위구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellitemnamelist',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgLoofcCd',name:'청구물류지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNoDesc',name:'품명(중기)코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNm',name:'품명(중기)명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellGoodsPatternCd',name:'매출품목유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiInscrpCommNm',name:'표기한글명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiInscrpCommEngNm',name:'표기영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commInscrpSeq',name:'품명표기순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commInscrpUnitCd',name:'품명표기단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommCd',name:'집계품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommCdNm',name:'집계품명명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_formulasellitemlist',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_formulasellitemlist_onrowpositionchange','ev:onbeforerowpositionchange':'scwin.ds_formulasellitemlist_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgLoofcCd',name:'청구물류지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemNm',name:'매출항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiInscrpSellItemNm',name:'표기한글명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiInscrpSellItemEngNm',name:'거래명세서표기매출항목영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemInscrpSeq',name:'매출항목표기순번',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'upperBilgLoofcCd',name:'상위청구물류지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperFmlaClsCd',name:'상위서식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperFmlaPatternCd',name:'상위서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperSellItemCd',name:'상위매출항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperSellItemNm',name:'상위매출항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'titleLineAddYn',name:'TITLELINE추가여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dcScYn',name:'할인할증여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prebilgAutoTrfYn',name:'선청구자동요율여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'prebilgNesTrfYn',name:'선청구필요요율여부',dataType:'number',defaultValue:'0'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_formulalist_retrieve',action:'/ds.fs.bilg.bilgcomncdmgnt.RetrieveFormulaListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_formulalist_con","key":"IN_DS1"},{"id":"ds_formulalist","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_formulalist","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_formulalist_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_formulacustomerlist_retrieve',action:'/ds.fs.bilg.bilgcomncdmgnt.RetrieveFormulaEachCustomerCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_formulasellitemlist_con","key":"IN_DS1"},{"id":"ds_formulacustomerlist","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_formulacustomerlist","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_formulacustomerlist_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_formulasellitemlist_retrieve',action:'/ds.fs.bilg.bilgcomncdmgnt.RetrieveFormulaEachSellingItemListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_formulasellitemlist_con","key":"IN_DS1"},{"id":"ds_formulasellitemlist","key":"OUT_DS1"},{"id":"ds_sellitemnamelist","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_formulasellitemlist","key":"OUT_DS1"},{"id":"ds_sellitemnamelist","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_formulasellitemlist_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_formulsellitem_save',action:'/ds.fs.bilg.bilgcomncdmgnt.SaveFormulaEachSellingItemCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_sellitemnamelist","key":"IN_DS1"},{"action":"modified","id":"ds_formulasellitemlist","key":"IN_DS2"},{"action":"modified","id":"ds_formulacustomerlist","key":"IN_DS3"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_formulsellitem_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};
//물류>청구>청구공통코드관리>청구서유형별매출항목관리
scwin.chk_flag = ""; // CanRowPosChange 이벤트 저장 구분

//메세지용 전역변수 SETTING
scwin.MSG_FS_WRN_007 = "존재하지않는 매출항목코드입니다.";
scwin.MSG_FS_WRN_008 = "저장된 코드가 아닙니다. 저장을 먼저 하십시오.";
scwin.MSG_FS_WRN_010 = "저장할 데이타가 존재하지 않습니다.";
scwin.MSG_FS_WRN_011 = "거래처코드를 먼저 입력하십시오.";
scwin.MSG_FS_WRN_012 = "매출항목을 먼저 입력하십시오.";
scwin.MSG_FS_WRN_013 = "청구서 유형코드가 존재하지 않습니다.";
scwin.formulalistChk = true;
scwin.customerlistChk = true;
scwin.sellitemlistChk = true;
scwin.sellGbn = "";

// [팝업 중복 방지]
// 돋보기 클릭 시 onafteredit(포커스 이탈) -> ontextimageclick 순으로 두 이벤트가 연속 발생하여 팝업이 2번 뜨는 문제
// 이를 방지하기 위해 onafteredit에서 팝업 호출을 지연 예약하고 ontextimageclick 발생 시 타이머 취소 후 직접 실행
// 키보드 포커스 이탈(Tab 등) 시에는 ontextimageclick이 발생하지 않으므로 지연 후 정상 실행
scwin.customerPopupTimer = "";
scwin.sellItemPopupTimer = "";
scwin.sellNamePopupTimer = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  ed_bilgLoofcCd.focus();
  rd_fmlaClsCd.setValue("01");
  rd_clntCd.setValue("공통");

  //구분 Disable 처리
  //rd_clntCd.Enable = "false";
  //rd_clntCd.Reset();

  //$c.gus.cfDisableObjects([btn_addRow, btn_deleteRow, btn_cancelRow, btn_addRow2, btn_deleteRow2, btn_cancelRow2]);
  //$c.gus.cfDisableBtn([bSave]);

  $c.gus.cfDisableObjects($p, [udc_addRow3, udc_addRow4]);
  $c.gus.cfDisableBtn($p, [btn_save]);
  grp_formulacustomerlist.hide();
  grp_sellitemnamelist.hide();
  gr_formulasellitemlist.setGridHeight(521);
  gr_formulalist.setGridHeight(521);
};
scwin.onUdcCompleted = function () {
  scwin.f_OnLoad();

  //공통코드 적용
  const codeOptions = [{
    grpCd: "LO102",
    compID: "gr_sellitemnamelist:commInscrpUnitCd"
  } //과세구분
  ];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// formulalist 조회조건 데이타셋 헤더 설정
//-------------------------------------------------------------------------
scwin.f_FormulaListSetDataHeader = function () {
  //var dsHeader = "bilgLoofcCd:STRING,fmlaClsCd:STRING";
  //ds_formulalist_con.SetDataHeader(dsHeader);
  //ds_formulalist_con.AddRow();

  ds_formulalist_con.set("bilgLoofcCd", ed_bilgLoofcCd.getValue());
  ds_formulalist_con.set("fmlaClsCd", rd_fmlaClsCd.getValue());
};

//-------------------------------------------------------------------------
// formulasellitemlist 조회조건 데이타셋 헤더 설정
//-------------------------------------------------------------------------
scwin.f_FormulaSellItemListSetDataHeader = function () {
  //var dsHeader = "bilgLoofcCd:STRING,fmlaPatternCd:STRING,fmlaClsCd:STRING,clntNo:STRING";
  //ds_formulasellitemlist_con.SetDataHeader(dsHeader);
  //ds_formulasellitemlist_con.AddRow();

  ds_formulasellitemlist_con.set("bilgLoofcCd", ed_bilgLoofcCd.getValue());
  ds_formulasellitemlist_con.set("fmlaPatternCd", ds_formulalist.getCellData(ds_formulalist.getRowPosition(), "fmlaPatternCd"));
  ds_formulasellitemlist_con.set("fmlaClsCd", ds_formulalist.getCellData(ds_formulalist.getRowPosition(), "fmlaClsCd"));
  if (rd_clntCd.getValue() == "거래처") {
    ds_formulasellitemlist_con.set("clntNo", ds_formulacustomerlist.getCellData(ds_formulacustomerlist.getRowPosition(), "clntNo"));
  } else {
    ds_formulasellitemlist_con.set("clntNo", "0");
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log('scwin.f_Retrieve~~');
  //validation check
  if (!(await $c.gus.cfValidate($p, [ed_bilgLoofcCd]))) {
    return;
  }
  console.log('scwin.cfValidate~~');
  /*
  		if(rd_fmlaClsCd.getValue() == "01"){
              grp_sellitemnamelist.hide();
              gr_formulasellitemlist.setGridHeight(509);
  		} else if(rd_fmlaClsCd.getValue() == "03"){
              grp_sellitemnamelist.show();
              gr_formulasellitemlist.setGridHeight(268);
              //gr_formulasellitemlist.setGridHeight(205);
  		}
  
  		if(rd_clntCd.getValue() == "거래처"){
              //gr_formulalist.setGridHeight(205);
              gr_formulalist.setGridHeight(268);
              grp_formulacustomerlist.show();
  		} else {
              //gr_formulalist.setGridHeight(440);
              gr_formulalist.setGridHeight(509);
              grp_formulacustomerlist.hide();
  		}
  */
  if (rd_fmlaClsCd.getValue() == "01") {
    grp_sellitemnamelist.hide();
    if (rd_clntCd.getValue() == "거래처") {
      console.log('거래명세서 거래처별~~');
      grp_formulacustomerlist.show();
      gr_formulalist.setGridHeight(236);
      gr_formulacustomerlist.setGridHeight(236);
      gr_formulasellitemlist.setGridHeight(521);
    } else if (rd_clntCd.getValue() == "공통") {
      console.log('거래명세서 공통~~');
      grp_formulacustomerlist.hide();
      gr_formulalist.setGridHeight(521);
      gr_formulasellitemlist.setGridHeight(521);
    }
  } else if (rd_fmlaClsCd.getValue() == "03") {
    grp_sellitemnamelist.show();
    if (rd_clntCd.getValue() == "거래처") {
      console.log('BILL 거래처별~~');
      grp_formulacustomerlist.show();
      gr_formulalist.setGridHeight(236);
      gr_formulacustomerlist.setGridHeight(236);
      gr_formulasellitemlist.setGridHeight(236);
      gr_sellitemnamelist.setGridHeight(236);
    } else if (rd_clntCd.getValue() == "공통") {
      console.log('BILL 공통~~');
      grp_formulacustomerlist.hide();
      gr_formulalist.setGridHeight(521);
      gr_formulasellitemlist.setGridHeight(236);
      gr_sellitemnamelist.setGridHeight(236);
    }
  }
  if (rd_clntCd.getValue() == "거래처") {
    //gr_formulalist.setGridHeight(205);
    gr_formulalist.setGridHeight(236);
    grp_formulacustomerlist.show();
  } else {
    //gr_formulalist.setGridHeight(440);
    gr_formulalist.setGridHeight(521);
    grp_formulacustomerlist.hide();
  }
  scwin.f_FormulaListSetDataHeader();
  ds_formulalist.setJSON([]);
  $c.sbm.execute($p, sbm_formulalist_retrieve);

  //tr_formulalist_retrieve.Action = "/ds.fs.bilg.bilgcomncdmgnt.RetrieveFormulaListCMD.do";
  //tr_formulalist_retrieve.Post();
};

//-------------------------------------------------------------------------
// 거래처 그리드 추가
//-------------------------------------------------------------------------
scwin.f_CustomerAddRow = async function () {
  console.log('scwin.f_CustomerAddRow~~~');
  if (ds_formulalist.getRowCount() < 1 || ds_formulalist.getCellData(ds_formulalist.getRowPosition(), "fmlaPatternCd") == "") {
    await $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_013);
    return;
  }
  scwin.chk_flag = "TRUE";
  var row = ds_formulacustomerlist.insertRow();
  ds_formulacustomerlist.setCellData(row, "bilgLoofcCd", ed_bilgLoofcCd.getValue());
  ds_formulacustomerlist.setCellData(row, "fmlaPatternCd", ds_formulalist.getCellData(ds_formulalist.getRowPosition(), "fmlaPatternCd"));
  ds_formulacustomerlist.setCellData(row, "fmlaClsCd", ds_formulalist.getCellData(ds_formulalist.getRowPosition(), "fmlaClsCd"));
  if (rd_clntCd.getValue() == "공통") {
    ds_formulacustomerlist.setCellData(row, "clntNo", "0");
    ds_formulacustomerlist.setCellData(row, "billbilgUnitclsCd", "01");
  }
  gr_formulacustomerlist.setFocusedCell(row, "clntNo", false);
};

//-------------------------------------------------------------------------
// 매출항목 그리드 추가
//-------------------------------------------------------------------------
scwin.f_SellItemAddRow = async function () {
  console.log('scwin.f_SellItemAddRow~~~');
  if (rd_clntCd.getValue() == "거래처") {
    if (ds_formulacustomerlist.getRowCount() < 1 || ds_formulacustomerlist.getCellData(ds_formulacustomerlist.getRowPosition(), "clntNo") == "") {
      await $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_011);
      return;
    }
  }
  if (rd_clntCd.getValue() == "공통" && ds_formulacustomerlist.getRowCount() < 1) {
    scwin.sellGbn = 'SELL_ADD';
    await scwin.f_CustomerAddRow();
  } else {
    //var row = $c.data.insertRow(gr_formulasellitemlist);

    var row = ds_formulasellitemlist.insertRow();
    ds_formulasellitemlist.setCellData(row, "bilgLoofcCd", ed_bilgLoofcCd.getValue());
    ds_formulasellitemlist.setCellData(row, "fmlaPatternCd", ds_formulalist.getCellData(ds_formulalist.getRowPosition(), "fmlaPatternCd"));
    ds_formulasellitemlist.setCellData(row, "fmlaClsCd", ds_formulalist.getCellData(ds_formulalist.getRowPosition(), "fmlaClsCd"));
    if (rd_clntCd.getValue() == "거래처") {
      ds_formulasellitemlist.setCellData(row, "clntNo", ds_formulacustomerlist.getCellData(ds_formulacustomerlist.getRowPosition(), "clntNo"));
    } else {
      ds_formulasellitemlist.setCellData(row, "clntNo", "0");
    }
    gr_formulasellitemlist.setFocusedCell(row, "sellItemCd", false);
    scwin.sellGbn = "";
    scwin.chk_flag = "TRUE";
  }
};

//-------------------------------------------------------------------------
// 매출항목 그리드 삭제
//-------------------------------------------------------------------------
scwin.f_SellItemDelete = function () {
  console.log('scwin.f_SellItemDelete~~~');
  scwin.sellGbn = "SELL_DEL";
  if (rd_clntCd.getValue() == "공통") {
    if (ds_formulacustomerlist.getRowStatus(ds_formulacustomerlist.getRowPosition()) == 'C') {
      ds_formulacustomerlist.removeRow(ds_formulacustomerlist.getRowPosition());
    } else {
      ds_formulacustomerlist.deleteRow(ds_formulacustomerlist.getRowPosition());
    }
    if (ds_formulasellitemlist.getRowStatus(ds_formulasellitemlist.getRowPosition()) == 'C') {
      ds_formulasellitemlist.removeRow(ds_formulasellitemlist.getRowPosition());
    } else {
      ds_formulasellitemlist.deleteRow(ds_formulasellitemlist.getRowPosition());
    }
  } else {
    if (ds_formulasellitemlist.getRowStatus(ds_formulasellitemlist.getRowPosition()) == 'C') {
      ds_formulasellitemlist.removeRow(ds_formulasellitemlist.getRowPosition());
    } else {
      ds_formulasellitemlist.deleteRow(ds_formulasellitemlist.getRowPosition());
    }
  }
  scwin.chk_flag = "TRUE";
};

//-------------------------------------------------------------------------
// 매출항목 그리드 취소
//-------------------------------------------------------------------------
scwin.f_SellItemCancel = function () {
  if (rd_clntCd.getValue() == "공통") {
    $c.data.undoAll($p, ds_formulacustomerlist);
  }
  $c.data.undoAll($p, ds_formulasellitemlist);
};

//-------------------------------------------------------------------------
// 품명 그리드 추가
//-------------------------------------------------------------------------
scwin.f_ItemNameAddRow = async function () {
  if (ds_formulasellitemlist.getRowCount() < 1 || ds_formulasellitemlist.getCellData(ds_formulasellitemlist.getRowPosition(), "sellItemCd") == "") {
    await $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_012);
    return;
  }
  //var row = $c.data.insertRow(gr_sellitemnamelist);

  var row = ds_sellitemnamelist.insertRow();
  ds_sellitemnamelist.setCellData(row, "bilgLoofcCd", ed_bilgLoofcCd.getValue());
  ds_sellitemnamelist.setCellData(row, "selpchItemCd", ds_formulasellitemlist.getCellData(ds_formulasellitemlist.getRowPosition(), "sellItemCd"));
  if (rd_clntCd.getValue() == "거래처") {
    ds_sellitemnamelist.setCellData(row, "clntNo", ds_formulacustomerlist.getCellData(ds_formulacustomerlist.getRowPosition(), "clntNo"));
  } else {
    ds_sellitemnamelist.setCellData(row, "clntNo", "0");
  }
  ds_sellitemnamelist.setCellData(row, "sellGoodsPatternCd", "02");
  gr_sellitemnamelist.setFocusedCell(row, "sellGoodsPatternCd", false);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  // CanRowPosChange 이벤트 저장 구분
  scwin.chk_flag = "TRUE";

  //if(!ds_formulacustomerlist.IsUpdated && !ds_formulasellitemlist.IsUpdated && !ds_sellitemnamelist.IsUpdated){
  if (ds_formulacustomerlist.getModifiedIndex().length == 0 && ds_formulasellitemlist.getModifiedIndex().length == 0 && ds_sellitemnamelist.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["청구서유형별 매출항목 관리"]);
    return;
  }

  // Grid의 필수 입력 항목에 대해서 Check 한다.
  if (!(await $c.gus.cfValidate($p, [gr_formulacustomerlist], null, true))) {
    return;
  }

  // Grid의 필수 입력 항목에 대해서 Check 한다.
  if (!(await $c.gus.cfValidate($p, [gr_formulasellitemlist], null, true))) {
    return;
  }

  // Grid의 필수 입력 항목에 대해서 Check 한다.
  if (!(await $c.gus.cfValidate($p, [gr_sellitemnamelist], null, true))) {
    return;
  }
  if (!(await $c.win.confirm($p, MSG_CM_CRM_001))) {
    return;
  }
  for (var i = 0; i < ds_formulasellitemlist.getRowCount(); i++) {
    var stat = ds_formulasellitemlist.getRowStatus(i);
    if (stat == "C" || stat == "U") {
      if ($c.gus.cfIsNull($p, ds_formulasellitemlist.getCellData(i, "sellItemInscrpSeq"))) {
        ds_formulasellitemlist.setCellData(i, "sellItemInscrpSeq", "1");
      }
    }
  }
  for (var i = 0; i < ds_sellitemnamelist.getRowCount(); i++) {
    var stat = ds_sellitemnamelist.getRowStatus(i);
    if (stat == "C" || stat == "U") {
      if ($c.gus.cfIsNull($p, ds_sellitemnamelist.getCellData(i, "commInscrpSeq"))) {
        ds_sellitemnamelist.setCellData(i, "commInscrpSeq", "0");
      }
    }
  }

  //tr_formulsellitem_save.Action = "/ds.fs.bilg.bilgcomncdmgnt.SaveFormulaEachSellingItemCMD.do";
  //tr_formulsellitem_save.Post();

  //ds_formulasellitemlist.setJSON([]);
  //ds_sellitemnamelist.setJSON([]);

  $c.sbm.execute($p, sbm_formulsellitem_save);
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면

  switch (disGubun) {
    case 1:
      //청구지점코드팝업
      udc_bilgLoofcCd.setSelectId('retrieveLobranInfo');
      rtnList = udc_bilgLoofcCd.cfCommonPopUp(scwin.udc_bilgLoofcCdCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //rtnList = udc_bilgLoofcCd.cfCommonPopUp('retrieveLobranInfo',pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null);
      //$c.gus.cfSetReturnValue(rtnList, ed_bilgLoofcCd, ed_bilgLoofcNm);  // 청구지점코드, 청구지점명
      break;
    default:
      break;
  }
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
// 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_Popup = async function (disGubun) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면
  var pCode = "";
  var pName = "";
  switch (disGubun) {
    case 1:
      //매출항목ID 팝업
      pCode = ds_formulasellitemlist.getCellData(ds_formulasellitemlist.getRowPosition(), "sellItemCd").replace(/\s*$/, ''); // 매출항목ID

      //rtnList = udc_comCodeGrid.cfCommonPopUp('retrieveSelpchItemInfo'	// XML상의 SELECT ID

      udc_comCodeGrid.setSelectId('retrieveSelpchItemInfo');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.sellItemCdCallback // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , 'F' // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , ',,,,,04' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부
      , null // 전체검색허용여부
      , null // POP-UP Window Title 검색어1,2(각화면에서 변경할경우)
      );
      ds_formulasellitemlist.getCellData(ds_formulasellitemlist.getRowPosition(), "sellItemCd", "");
      ds_formulasellitemlist.getCellData(ds_formulasellitemlist.getRowPosition(), "sellItemNm", "");
      ds_formulasellitemlist.setCellData(ds_formulasellitemlist.getRowPosition(), "certiInscrpSellItemNm", ""); //표기한글명
      /*
      				if ( rtnList != null && rtnList[0] != "N/A") {
      					//return value Assign
      					ds_formulasellitemlist.setCellData(ds_formulasellitemlist.getRowPosition(),"sellItemCd", rtnList[0]);	//매출항목ID
      					ds_formulasellitemlist.setCellData(ds_formulasellitemlist.getRowPosition(),"sellItemNm", rtnList[1]);	//매출항목명
      					ds_formulasellitemlist.setCellData(ds_formulasellitemlist.getRowPosition(),"certiInscrpSellItemNm", rtnList[1]);	//표기한글명
      				}
      */
      break;
    case 2:
      //거래처코드 팝업
      pCode = ds_formulacustomerlist.getCellData(ds_formulacustomerlist.getRowPosition(), "clntNo").replace(/\s*$/, ''); // 거래처코드

      //rtnList = udc_comCodeGrid.cfCommonPopUp('retrieveClntList'	// XML상의 SELECT ID
      udc_comCodeGrid.setSelectId('retrieveClntList');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.clntNoCallback, pCode // 화면에서의 ??? Code Element의	Value
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
      , null // 전체검색허용여부
      , null // POP-UP Window Title 검색어1,2(각화면에서 변경할경우)
      );
      ds_formulacustomerlist.getCellData(ds_formulacustomerlist.getRowPosition(), "clntNo", "0");
      ds_formulacustomerlist.getCellData(ds_formulacustomerlist.getRowPosition(), "clntNm", "");

      /* if ( rtnList != null && rtnList[0] != "N/A") {
      	//return value Assign
      	if(rtnList[0] == "000000"){//공통
      		ds_formulacustomerlist.setCellData(ds_formulacustomerlist.getRowPosition(),"clntNo", "0");	//거래처코드
      		ds_formulacustomerlist.setCellData(ds_formulacustomerlist.getRowPosition(),"clntNm", "공통");	//거래처명
      	} else {
      		ds_formulacustomerlist.setCellData(ds_formulacustomerlist.getRowPosition(),"clntNo", rtnList[0]);	//거래처코드
      		ds_formulacustomerlist.setCellData(ds_formulacustomerlist.getRowPosition(),"clntNm", rtnList[1]);	//거래처명
      	}
      } */

      break;
    case 3:
      //품명코드 팝업
      pCode = ds_sellitemnamelist.getCellData(ds_sellitemnamelist.getRowPosition(), "sellCommNoDesc").replace(/\s*$/, ''); // 품명코드

      //rtnList = udc_comCodeGrid.cfCommonPopUp('retrieveCommInfo'	// XML상의 SELECT ID
      udc_comCodeGrid.setSelectId('retrieveCommInfo');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.sellCommNoDescCallback, pCode // 화면에서의 ??? Code Element의	Value
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
      , null // 전체검색허용여부
      , null // POP-UP Window Title 검색어1,2(각화면에서 변경할경우)
      );
      ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommNoDesc", ""); //품명코드
      ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommNo", ""); //품명코드
      ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommNm", ""); //품명명
      /*
      				if ( rtnList != null && rtnList[0] != "N/A") {
      					//return value Assign
      					ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(),"sellCommNoDesc", rtnList[0]);	//품명코드
      					ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(),"sellCommNo", rtnList[0]);	//품명코드
      					ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(),"sellCommNm", rtnList[1]);	//품명명
      				}
      */
      break;
    case 4:
      //장비코드 팝업
      pCode = ds_sellitemnamelist.getCellData(ds_sellitemnamelist.getRowPosition(), "sellCommNoDesc").replace(/\s*$/, ''); // 장비코드

      var arrParam = new Array();
      arrParam[0] = ""; //assgnLobranCd점소코드
      arrParam[1] = ""; //eqKndCd중기종류
      arrParam[2] = ""; //clntCd거래처코드
      arrParam[3] = ""; //usblDt작업계획일지
      arrParam[4] = pCode; //eqNo
      arrParam[5] = ""; //eqNm
      arrParam[6] = 'T'; //T,F구분
      arrParam[7] = 'T'; //T,F구분

      var options = {
        'type': 'browserPopup',
        'width': '950px',
        'height': '430px',
        'popupName': '중기조회'
      };
      var url = '/ui/ds/op/rscconfirm/transrscconfirm/op_101_01_12p.xml';
      rtnList = await $c.win.openPopup($p, url, options, arrParam);
      ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommNoDesc", ""); //차량번호
      ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommNo", ""); //장비코드
      ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommNm", ""); //종류+규격
      if (rtnList != null && rtnList[0] != "N/A") {
        //return value Assign
        ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommNoDesc", rtnList[1]); //차량번호
        ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommNo", rtnList[12]); //장비코드
        ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommNm", rtnList[2] + '(' + rtnList[3] + ')'); //종류+규격
      }
      break;
    case 5:
      //매출항목ID 팝업
      pCode = ds_formulasellitemlist.getCellData(ds_formulasellitemlist.getRowPosition(), "upperSellItemCd").replace(/\s*$/, ''); // 매출항목ID

      //rtnList = udc_comCodeGrid.cfCommonPopUp('retrieveSelpchItemInfo'	// XML상의 SELECT ID

      udc_comCodeGrid.setSelectId('retrieveSelpchItemInfo');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.upperSellItemCdCallback, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , 'F' // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , ',,,,,04' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부
      , null // 전체검색허용여부
      , null // POP-UP Window Title 검색어1,2(각화면에서 변경할경우)
      );
      ds_formulasellitemlist.setCellData(ds_formulasellitemlist.getRowPosition(), "upperSellItemCd", ""); //매출항목ID
      ds_formulasellitemlist.setCellData(ds_formulasellitemlist.getRowPosition(), "upperSellItemNm", ""); //매출항목명
      /*
      				if ( rtnList != null && rtnList[0] != "N/A") {
      					//return value Assign
      					ds_formulasellitemlist.setCellData(ds_formulasellitemlist.getRowPosition(),"upperSellItemCd", rtnList[0]);	//매출항목ID
      					ds_formulasellitemlist.setCellData(ds_formulasellitemlist.getRowPosition(),"upperSellItemNm", rtnList[1]);	//매출항목명
      
      					var vrow = ds_formulasellitemlist.NameValueRow("sellItemCd",ds_formulasellitemlist.getCellData(ds_formulasellitemlist.getRowPosition(),"upperSellItemCd"));
      					if(vrow == 0 && ds_formulasellitemlist.getCellData(ds_formulasellitemlist.getRowPosition(),"upperSellItemCd") != ""){
      						$c.gus.cfAlertMsg(MSG_FS_WRN_007);
      						ds_formulasellitemlist.Undo(ds_formulasellitemlist.RowPositon);
      					}
      				}
      */
      break;
    case 6:
      //품명코드 팝업
      pCode = ds_sellitemnamelist.getCellData(ds_sellitemnamelist.getRowPosition(), "sellCommCd").replace(/\s*$/, ''); // 품명코드

      rtnList = udc_comCodeGrid.setSelectId('retrieveCommInfo');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.sellCommCdCallback, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , 'F' // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , ',,,T3' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부
      , null // 전체검색허용여부
      , null // POP-UP Window Title 검색어1,2(각화면에서 변경할경우)
      );
      ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommCd", ""); //품명코드
      ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommCdNm", ""); //품명명

      /*
      				if ( rtnList != null && rtnList[0] != "N/A") {
      					//return value Assign
      					ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(),"sellCommCd", rtnList[0]);	//품명코드
      					ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(),"sellCommCdNm", rtnList[1]);	//품명명
      				}
      */
      break;
    default:
      break;
  }
};
scwin.sellItemCdCallback = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    //return value Assign
    ds_formulasellitemlist.setCellData(ds_formulasellitemlist.getRowPosition(), "sellItemCd", rtnList[0]); //매출항목ID
    ds_formulasellitemlist.setCellData(ds_formulasellitemlist.getRowPosition(), "sellItemNm", rtnList[1]); //매출항목명
    ds_formulasellitemlist.setCellData(ds_formulasellitemlist.getRowPosition(), "certiInscrpSellItemNm", rtnList[1]); //표기한글명
  }
};
scwin.upperSellItemCdCallback = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    //return value Assign
    ds_formulasellitemlist.setCellData(ds_formulasellitemlist.getRowPosition(), "upperSellItemCd", rtnList[0]); //매출항목ID
    ds_formulasellitemlist.setCellData(ds_formulasellitemlist.getRowPosition(), "upperSellItemNm", rtnList[1]); //매출항목명

    //var vrow = ds_formulasellitemlist.NameValueRow("sellItemCd",ds_formulasellitemlist.getCellData(ds_formulasellitemlist.getRowPosition(),"upperSellItemCd"));

    var upperSellItemCd = ds_formulasellitemlist.getCellData(ds_formulasellitemlist.getRowPosition(), "upperSellItemCd");
    var vrow = ds_formulasellitemlist.getMatchedJSON("sellItemCd", upperSellItemCd).length;
    if (vrow == 0 && ds_formulasellitemlist.getCellData(ds_formulasellitemlist.getRowPosition(), "upperSellItemCd") != "") {
      $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_007);
      ds_formulasellitemlist.undoRow(ds_formulasellitemlist.getRowPosition());
    }
  }
};
scwin.sellCommNoDescCallback = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    //return value Assign
    ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommNoDesc", rtnList[0]); //품명코드
    ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommNo", rtnList[0]); //품명코드
    ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommNm", rtnList[1]); //품명명
  }
};
scwin.sellCommCdCallback = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    //return value Assign
    ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommCd", rtnList[0]); //품명코드
    ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommCdNm", rtnList[1]); //품명명
  }
};
scwin.clntNoCallback = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    //return value Assign
    if (rtnList[0] == "000000") {
      //공통
      ds_formulacustomerlist.setCellData(ds_formulacustomerlist.getRowPosition(), "clntNo", "0"); //거래처코드
      ds_formulacustomerlist.setCellData(ds_formulacustomerlist.getRowPosition(), "clntNm", "공통"); //거래처명
    } else {
      ds_formulacustomerlist.setCellData(ds_formulacustomerlist.getRowPosition(), "clntNo", rtnList[0]); //거래처코드
      ds_formulacustomerlist.setCellData(ds_formulacustomerlist.getRowPosition(), "clntNm", rtnList[1]); //거래처명
    }
  }
};
scwin.udc_bilgLoofcCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLoofcCd, ed_bilgLoofcNm, 1);
};
scwin.udc_bilgLoofcCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLoofcNm, ed_bilgLoofcCd, 1, false);
};
scwin.udc_bilgLoofcCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgLoofcCd.getValue(), ed_bilgLoofcNm.value, 'F', 'F');
};
scwin.udc_bilgLoofcCdCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLoofcCd, ed_bilgLoofcNm); // 청구지점코드, 청구지점명
};
scwin.gr_formulacustomerlist_onafteredit = function (rowIndex, columnIndex, value) {
  var colid = gr_formulacustomerlist.getColumnID(columnIndex);

  // onafteredit 중복 방지 - 지연 예약 (상단 주석 참고)
  if (colid == "clntNo") {
    scwin.customerPopupTimer = setTimeout(function () {
      scwin.f_Popup(2);
    }, 50);
  }
};
scwin.gr_formulacustomerlist_ontextimageclick = function (rowIndex, columnIndex) {
  var colid = gr_formulacustomerlist.getColumnID(columnIndex);

  // onafteredit 타이머 취소 후 직접 실행
  if (scwin.customerPopupTimer) {
    clearTimeout(scwin.customerPopupTimer);
    scwin.customerPopupTimer = "";
  }
  if (colid == "clntNo") {
    scwin.f_Popup(2);
  }
};
scwin.gr_formulasellitemlist_onafteredit = function (rowIndex, columnIndex, value) {
  var colid = gr_formulasellitemlist.getColumnID(columnIndex);

  // onafteredit 중복 방지 - 지연 예약 (상단 주석 참고)
  if (colid == "sellItemCd") {
    scwin.sellItemPopupTimer = setTimeout(function () {
      scwin.f_Popup(1);
    }, 50);
  } else if (colid == "upperSellItemCd") {
    scwin.sellItemPopupTimer = setTimeout(function () {
      scwin.f_Popup(5);
    }, 50);
  }
};
scwin.gr_formulasellitemlist_ontextimageclick = function (rowIndex, columnIndex) {
  var colid = gr_formulasellitemlist.getColumnID(columnIndex);

  // onafteredit 타이머 취소 후 직접 실행
  if (scwin.sellItemPopupTimer) {
    clearTimeout(scwin.sellItemPopupTimer);
    scwin.sellItemPopupTimer = "";
  }
  if (colid == "sellItemCd") {
    scwin.f_Popup(1);
  } else if (colid == "upperSellItemCd") {
    scwin.f_Popup(5);
  }
};
scwin.gr_sellitemnamelist_onafteredit = function (rowIndex, columnIndex, value) {
  var colid = gr_sellitemnamelist.getColumnID(columnIndex);

  // onafteredit 중복 방지 - 지연 예약 (상단 주석 참고)
  if (colid == "sellCommNoDesc") {
    if (ds_sellitemnamelist.getCellData(rowIndex, "sellGoodsPatternCd") == "02") {
      scwin.sellNamePopupTimer = setTimeout(function () {
        scwin.f_Popup(3);
      }, 50);
    } else {
      scwin.sellNamePopupTimer = setTimeout(function () {
        scwin.f_Popup(4);
      }, 50);
    }
  } else if (colid == "sellCommCd") {
    scwin.sellNamePopupTimer = setTimeout(function () {
      scwin.f_Popup(6);
    }, 50);
  }
};
scwin.gr_sellitemnamelist_ontextimageclick = function (rowIndex, columnIndex) {
  var colid = gr_sellitemnamelist.getColumnID(columnIndex);

  // onafteredit 타이머 취소 후 직접 실행
  if (scwin.sellNamePopupTimer) {
    clearTimeout(scwin.sellNamePopupTimer);
    scwin.sellNamePopupTimer = "";
  }
  if (colid == "sellCommNoDesc") {
    if (ds_sellitemnamelist.getCellData(rowIndex, "sellGoodsPatternCd") == "02") {
      scwin.f_Popup(3);
    } else {
      scwin.f_Popup(4);
    }
  } else if (colid == "sellCommCd") {
    scwin.f_Popup(6);
  }
};
scwin.gr_formulacustomerlist_oncellclick = function (rowIndex, columnIndex, columnId) {
  //if(ds_formulacustomerlist.RowStatus(row) == 1){
  if (ds_formulacustomerlist.getRowStatus(rowIndex) == 'C') {
    gr_formulacustomerlist.setReadOnly('cell', rowIndex, 'clntNo', false);
    gr_formulacustomerlist.setReadOnly('cell', rowIndex, 'billbilgUnitclsCd', false);
  } else {
    gr_formulacustomerlist.setReadOnly('cell', rowIndex, 'clntNo', true);
    if (ds_formulacustomerlist.getCellData(rowIndex, "clntNo") == '0') {
      gr_formulacustomerlist.setReadOnly('cell', rowIndex, 'billbilgUnitclsCd', true);
    } else {
      gr_formulacustomerlist.setReadOnly('cell', rowIndex, 'billbilgUnitclsCd', false);
    }
  }
  console.log('gr_formulacustomerlist_oncellclick==>');
  gr_formulacustomerlist.setReadOnly('cell', rowIndex, 'clntNm', true);
};
scwin.gr_formulasellitemlist_onrowindexchange = function (rowIndex, oldRow) {
  //if(ds_formulasellitemlist.RowStatus(row) == 1){
  if (ds_formulasellitemlist.getRowStatus(rowIndex) == 'C') {
    gr_formulasellitemlist.setReadOnly('cell', rowIndex, 'sellItemCd', false);
  } else {
    gr_formulasellitemlist.setReadOnly('cell', rowIndex, 'sellItemCd', true);
  }
  gr_formulasellitemlist.setReadOnly('cell', rowIndex, 'sellItemNm', true);
  gr_formulasellitemlist.setReadOnly('cell', rowIndex, 'upperSellItemNm', true);
};
scwin.gr_sellitemnamelist_onrowindexchange = function (rowIndex, oldRow) {
  //if(ds_sellitemnamelist.RowStatus(row) == 1){
  if (ds_sellitemnamelist.getRowStatus(rowIndex) == 'C') {
    gr_sellitemnamelist.setReadOnly('cell', rowIndex, 'sellGoodsPatternCd', false);
    gr_sellitemnamelist.setReadOnly('cell', rowIndex, 'sellCommNoDesc', false);
  } else {
    gr_sellitemnamelist.setReadOnly('cell', rowIndex, 'sellGoodsPatternCd', true);
    gr_sellitemnamelist.setReadOnly('cell', rowIndex, 'sellCommNoDesc', true);
  }
  gr_sellitemnamelist.setReadOnly('cell', rowIndex, 'sellCommNm', true);
};
scwin.sbm_formulalist_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  var rowcnt = ds_formulalist.getRowCount();
  tbx_totalRows.setValue(rowcnt);
  if (rowcnt == 0) {
    $c.gus.cfDisableAllBtn($p);
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  } else {
    console.log('scwin.sbm_formulalist_retrieve_submitdone~~~');
    $c.gus.cfEnableObjects($p, [udc_addRow3, udc_addRow4]);
    $c.gus.cfEnableAllBtn($p);
    gr_formulalist.setFocusedCell(0, "lvlFmlaPatternCd", false);
  }
  scwin.chk_flag = "";
};
scwin.sbm_formulsellitem_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

  console.log(e);
  scwin.sellGbn = "";
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);

  // 거래처코드 추가시 저장후 조회
  if (ds_formulacustomerlist.getRowStatus(ds_formulacustomerlist.getRowPosition()) == "C") {
    scwin.f_FormulaSellItemListSetDataHeader();
    ds_formulacustomerlist.setJSON([]);
    ds_formulasellitemlist.initRowStatus();
    $c.sbm.execute($p, sbm_formulacustomerlist_retrieve);

    //tr_formulacustomerlist_retrieve.Action = "/ds.fs.bilg.bilgcomncdmgnt.RetrieveFormulaEachCustomerCMD.do";
    //tr_formulacustomerlist_retrieve.Post();					
  }

  //scwin.f_Retrieve();
  //scwin.ds_formulalist_onrowpositionchange();

  // ASIS(Gauce)     : 저장 성공 후 Delete 행을 DataSet에서 자동 제거
  // TOBE(WebSquare5): initRowStatus만으로는 제거되지 않으므로 직접 삭제
  [ds_formulasellitemlist, ds_sellitemnamelist, ds_formulacustomerlist].forEach(function (ds) {
    for (var i = ds.getRowCount() - 1; i >= 0; i--) {
      if (ds.getRowStatus(i) == "D") {
        ds.removeRow(i);
      }
    }
  });

  // 저장 후 DataSet 모든 행 RowStatus 초기화
  ds_formulasellitemlist.initRowStatus();
  ds_sellitemnamelist.initRowStatus();
  ds_formulacustomerlist.initRowStatus();
};
scwin.sbm_formulacustomerlist_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  var rowcnt = ds_formulacustomerlist.getRowCount();
  tbx_totalRows2.setValue(rowcnt);
  if (rowcnt > 0) {
    gr_formulacustomerlist.setFocusedCell(0, "clntNo", false);
    //ds_formulacustomerlist.setRowPosition(0);
  } else {
    // rowcnt=0이면 setFocusedCell이 이벤트를 발동하지 않으므로 직접 호출
    scwin.f_RetrieveFormulaSellItemList();
  }
};
scwin.sbm_formulasellitemlist_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  var rowcnt = ds_formulasellitemlist.getRowCount();
  tbx_totalRows3.setValue(rowcnt);
  if (rowcnt > 0) {
    //ds_formulasellitemlist.setRowPosition(0);
    gr_formulasellitemlist.setFocusedCell(0, "sellItemCd", false);
    if (scwin.sellGbn == 'SELL_ADD') {
      scwin.f_SellItemAddRow();
    }
    /*
    else if(scwin.sellGbn == 'SELL_DEL'){
        scwin.sellGbn = '';
        //return;
    }
    */
  } else {
    scwin.fn_setSellitemnamelistFilter();
  }
};

// 매출항목 그리드데이터 선택에 따른 품명 그리드 데이터 필터링
//  - ASIS: ds_sellitemnamelist > event=OnFilter(row)
scwin.fn_setSellitemnamelistFilter = function () {
  var v_val = "";
  if (!$c.gus.cfIsNull($p, ds_formulasellitemlist.getRowPosition())) {
    v_val = ds_formulasellitemlist.getCellData(ds_formulasellitemlist.getRowPosition(), "sellItemCd");
  }
  ;
  ds_sellitemnamelist.clearFilter();
  ds_sellitemnamelist.setColumnFilter({
    type: 'func',
    colIndex: 'selpchItemCd',
    key: function (cellData, param) {
      return cellData == param;
    },
    condition: 'and',
    param: v_val
  });

  // sellitemnamelist 포커스 초기화
  ds_sellitemnamelist.setRowPosition(-1); // 필터 후 dataset position 초기화
  gr_sellitemnamelist.removeFocusedCell(); // 그리드 시각적 포커스도 초기화

  tbx_totalRows4.setValue(ds_sellitemnamelist.getRowCount());
};
scwin.ds_formulalist_onrowpositionchange = function (info) {
  console.log("ds_formulalist_onrowpositionchange111~~");
  if (!scwin.formulalistChk) {
    scwin.formulalistChk = true;
    return;
  }
  ;
  if (ds_formulalist.getRowCount() > 0) {
    scwin.f_FormulaSellItemListSetDataHeader();
    ds_formulacustomerlist.setJSON([]);
    ds_sellitemnamelist.setJSON([]);
    ds_formulasellitemlist.setJSON([]);
    $c.sbm.execute($p, sbm_formulacustomerlist_retrieve);
  }
};

// ds_formulaSellItemList 조회
scwin.f_RetrieveFormulaSellItemList = function () {
  scwin.f_FormulaSellItemListSetDataHeader();
  ds_formulasellitemlist.setJSON([]);
  ds_sellitemnamelist.setJSON([]);
  $c.sbm.execute($p, sbm_formulasellitemlist_retrieve);
};
scwin.ds_formulacustomerlist_onrowpositionchange = function (info) {
  if (!scwin.customerlistChk) {
    scwin.customerlistChk = true;
    return;
  }
  ;
  scwin.f_RetrieveFormulaSellItemList();
};
scwin.ds_formulasellitemlist_onrowpositionchange = function (info) {
  console.log("ds_formulasellitemlist_onrowpositionchange333~~");
  if (!scwin.sellitemlistChk) {
    scwin.sellitemlistChk = true;
    return;
  }
  ;
  scwin.fn_setSellitemnamelistFilter();
};

// ASIS: ds_formulalist > CanRowPosChange
scwin.ds_formulalist_onbeforerowpositionchange = async function (info) {
  if (ds_formulacustomerlist.getRowStatus(ds_formulacustomerlist.getRowPosition()) == "C") {
    scwin.formulalistChk = false;
    var con = await $c.win.confirm($p, "저장하지 않은 거래처 데이타를 취소하시겠습니까?");
    if (con) {
      ds_formulacustomerlist.removeRow(ds_formulacustomerlist.getRowPosition());
      ds_formulasellitemlist.removeRow(ds_formulasellitemlist.getRowPosition());
      ds_sellitemnamelist.removeRow(ds_sellitemnamelist.getRowPosition());
      scwin.formulalistChk = true;
      scwin.chk_flag = "";
    } else {
      ds_formulalist.setEventPause("", true);
      gr_formulalist.setFocusedCell(info.oldRowIndex, 0);
      ds_formulalist.setEventPause("", false);
      scwin.chk_flag = "TRUE";
      return;
    }
  }
  if (ds_formulasellitemlist.getRowStatus(ds_formulasellitemlist.getRowPosition()) == "C") {
    scwin.formulalistChk = false;
    var con = await $c.win.confirm($p, "저장하지 않은 매출항목 데이타를 취소하시겠습니까?");
    if (con) {
      ds_formulacustomerlist.removeRow(ds_formulacustomerlist.getRowPosition());
      ds_formulasellitemlist.removeRow(ds_formulasellitemlist.getRowPosition());
      ds_sellitemnamelist.removeRow(ds_sellitemnamelist.getRowPosition());
      scwin.formulalistChk = true;
      scwin.chk_flag = "";
    } else {
      ds_formulalist.setEventPause("", true);
      gr_formulalist.setFocusedCell(info.oldRowIndex, 0);
      ds_formulalist.setEventPause("", false);
      scwin.chk_flag = "TRUE";
      return;
    }
  }
  if (ds_sellitemnamelist.getRowStatus(ds_sellitemnamelist.getRowPosition()) == "C") {
    scwin.formulalistChk = false;
    var con = await $c.win.confirm($p, "저장하지 않은 품명 데이타를 취소하시겠습니까?");
    if (con) {
      ds_sellitemnamelist.removeRow(ds_sellitemnamelist.getRowPosition());
      scwin.formulalistChk = true;
      scwin.chk_flag = "";
    } else {
      ds_formulalist.setEventPause("", true);
      gr_formulalist.setFocusedCell(info.oldRowIndex, 0);
      ds_formulalist.setEventPause("", false);
      scwin.chk_flag = "TRUE";
      return;
    }
  }

  //scwin.formulalistChk = true;
};

// ASIS: ds_formulacustomerlist > CanRowPosChange
scwin.ds_formulacustomerlist_onbeforerowpositionchange = async function (info) {
  console.log("ds_formulacustomerlist_onbeforerowpositionchange~~");
  console.log(info);

  //저장하지않은 상태로 로우 변경 체크
  if (scwin.chk_flag != "TRUE") {
    if (ds_formulasellitemlist.getRowStatus(ds_formulasellitemlist.getRowPosition()) == "C") {
      var con = await $c.win.confirm($p, "저장하지 않은 매출항목 데이타를 취소하시겠습니까?");
      if (con) {
        ds_formulacustomerlist.removeRow(ds_formulacustomerlist.getRowPosition());
        ds_formulasellitemlist.removeRow(ds_formulasellitemlist.getRowPosition());
        ds_sellitemnamelist.removeRow(ds_sellitemnamelist.getRowPosition());
        scwin.chk_flag = "";
      } else {
        ds_formulacustomerlist.setEventPause("", true);
        gr_formulacustomerlist.setFocusedCell(info.oldRowIndex, 0);
        ds_formulacustomerlist.setEventPause("", false);
        scwin.chk_flag = "TRUE";
        return;
      }
    } else if (ds_sellitemnamelist.getRowStatus(ds_sellitemnamelist.getRowPosition()) == "C") {
      var con = await $c.win.confirm($p, "저장하지 않은 품명 데이타를 취소하시겠습니까?");
      if (con) {
        ds_sellitemnamelist.removeRow(ds_sellitemnamelist.getRowPosition());
        scwin.chk_flag = "";
      } else {
        ds_formulacustomerlist.setEventPause("", true);
        gr_formulacustomerlist.setFocusedCell(info.oldRowIndex, 0);
        ds_formulacustomerlist.setEventPause("", false);
        scwin.chk_flag = "TRUE";
        return;
      }
    }
  }

  //scwin.customerlistChk = true;
};

// ASIS: ds_formulasellitemlist > CanRowPosChange
scwin.ds_formulasellitemlist_onbeforerowpositionchange = async function (info) {
  let row = ds_sellitemnamelist.getRowPosition();
  if (scwin.chk_flag != "TRUE" && ds_sellitemnamelist.getRowStatus(row) == "C") {
    scwin.sellitemlistChk = false;
    var con = await $c.win.confirm($p, "저장하지 않은 품명 데이타를 취소하시겠습니까?");
    if (con) {
      ds_sellitemnamelist.removeRow(row);
      scwin.sellitemlistChk = true;
      // scwin.chk_flag = "";

      scwin.fn_setSellitemnamelistFilter(); // 행변경 후 filter 직접 적용
    } else {
      ds_formulasellitemlist.setEventPause("", true);
      gr_formulasellitemlist.setFocusedCell(info.oldRowIndex, 0);
      ds_formulasellitemlist.setEventPause("", false);

      // scwin.chk_flag = "TRUE";
      return;
    }
  }

  //scwin.sellitemlistChk = true;
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.gridColUpperCase_oneditkeyup = function (info) {
  const inputEl = event.target;
  switch (info.colID) {
    case "upperSellItemCd":
      inputEl.value = info.newValue.toUpperCase();
      break;
    case "sellItemInscrpSeq":
      inputEl.value = info.newValue == "" ? "0" : info.newValue;
      break;
    default:
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구지점',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'pop_bilgLoofcCd',style:'',id:'udc_bilgLoofcCd',codeId:'ed_bilgLoofcCd',btnId:'btn_bilgLoofcCd',nameId:'ed_bilgLoofcNm',validTitle:'청구지점',UpperFlagCode:'1',maxlengthCode:'4',mandatoryCode:'true',maxlengthName:'20','ev:onblurCodeEvent':'scwin.udc_bilgLoofcCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bilgLoofcCd_onclickEvent',objTypeName:'key',allowCharCode:'A-Za-z0-9','ev:onviewchangeNameEvent':'scwin.udc_bilgLoofcCd_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구서유형구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_fmlaClsCd',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래명세서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'BILL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_clntCd',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공통'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'공통'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래처별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'거래처'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 350px;'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_formulalist',id:'gr_formulalist',style:'height: 236px;',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'청구서<br/>유형코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'유형명',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'lvlFmlaPatternCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lvlFmlaNm',inputType:'text',style:'',value:'',width:'200',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_formulacustomerlist',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_formulacustomerlist',id:'gr_formulacustomerlist',style:'height: 236px;',readOnly:'false','ev:onafteredit':'scwin.gr_formulacustomerlist_onafteredit','ev:ontextimageclick':'scwin.gr_formulacustomerlist_ontextimageclick',rowStatusVisible:'true',dataName:'거래처',validFeatures:'ignoreStatus=yes',validExp:'clntNo:거래처코드:yes:string&maxlength=6:key','ev:oncellclick':'scwin.gr_formulacustomerlist_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'거래처코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'거래처명',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'BILL청구단위<br/>구분코드',width:'140',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'textImage',style:'',value:'',width:'100',mandatory:'true',maxLength:'6'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',maxByteLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'billbilgUnitclsCd',inputType:'select',style:'',value:'',width:'140',allOption:'',chooseOption:'',ref:'',maxLength:'20'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'품명'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'B/L'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',style:'',gridID:'gr_formulacustomerlist',btnDelYn:'N',id:'udc_addRow2',rowDelUserAuth:'D',rowAddUserAuth:'C',rowAddFunction:'scwin.f_CustomerAddRow'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_formulasellitemlist',id:'gr_formulasellitemlist',style:'height: 236px;',readOnly:'false','ev:ontextimageclick':'scwin.gr_formulasellitemlist_ontextimageclick','ev:onafteredit':'scwin.gr_formulasellitemlist_onafteredit','ev:onrowindexchange':'scwin.gr_formulasellitemlist_onrowindexchange',rowStatusVisible:'true','ev:oneditkeyup':'scwin.gridColUpperCase_oneditkeyup',dataName:'매출항목',validFeatures:'ignoreStatus=yes',validExp:'sellItemCd:매출항목:yes:string&maxlength=4:key,sellItemNm:매출항목명:yes:string&maxlength=50,certiInscrpSellItemNm:표기한글명:yes:string&maxlength=50'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'매출항목',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'매출항목명',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'표기한글명',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'표기영문명',width:'120',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'상위<br/>매출항목',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'상위<br/>매출항목명',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'출력<br/>순서',width:'70',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'TITLELINE<br/>추가여부',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'선청구자동<br/>요율여부',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',width:'100',class:'txt-blue',value:'선청구필요<br/>요율여부'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sellItemCd',inputType:'textImage',width:'100',mandatory:'true',maxLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellItemNm',inputType:'text',width:'120',textAlign:'left',mandatory:'true',maxByteLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiInscrpSellItemNm',inputType:'text',width:'120',textAlign:'left',mandatory:'true',maxByteLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiInscrpSellItemEngNm',inputType:'text',width:'120',textAlign:'left',maxByteLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upperSellItemCd',inputType:'textImage',width:'100',maxLength:'4',allowChar:'A-Za-z0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upperSellItemNm',inputType:'text',width:'100',textAlign:'left',maxLength:'20'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellItemInscrpSeq',inputType:'text',width:'70',maxLength:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'titleLineAddYn',inputType:'select',width:'100',allOption:'',chooseOption:'',ref:'',maxLength:'20'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'No'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'prebilgAutoTrfYn',inputType:'select',width:'100',allOption:'',chooseOption:'',ref:'',maxLength:'20'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'No'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'prebilgNesTrfYn',inputType:'select',width:'100',allOption:'',chooseOption:'',ref:'',maxLength:'20'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'No'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows3',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',EngYn:'N',btnRowDelYn:'Y',btnCancelYn:'Y',style:'',btnRowAddYn:'Y',gridID:'gr_formulasellitemlist',id:'udc_addRow3',rowDelUserAuth:'D',rowAddUserAuth:'C',rowAddFunction:'scwin.f_SellItemAddRow',rowDelFunction:'scwin.f_SellItemDelete',cancelFunction:'scwin.f_SellItemCancel'}}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_sellitemnamelist',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_sellitemnamelist',id:'gr_sellitemnamelist',style:'height: 236px;',readOnly:'false','ev:onafteredit':'scwin.gr_sellitemnamelist_onafteredit','ev:ontextimageclick':'scwin.gr_sellitemnamelist_ontextimageclick','ev:onrowindexchange':'scwin.gr_sellitemnamelist_onrowindexchange',rowStatusVisible:'true',dataName:'품명',validFeatures:'ignoreStatus=yes',validExp:'sellGoodsPatternCd:구분:yes:string&maxlength=2,selpchItemCd:매출입항목코드:yes:string&maxlength=4:key,sellCommNoDesc:품명(중기)코드:yes:string&maxlength=20:key,sellCommNm:품명(중기)명:yes:string&maxlength=50, sellCommCd:집계품명코드:yes:string&maxlength=8,sellCommCdNm:집계품명명:yes:string&maxlength=50,certiInscrpCommNm:표기한글명:yes:string&maxlength=50'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'구분',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'품명(중기)코드',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'품명(중기)명',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'집계품명코드',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'집계품명명',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'표기한글명',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'표기영문명',width:'120',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'출력<br/>순서',width:'70',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'품명표기<br/>단위코드',width:'100',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sellGoodsPatternCd',inputType:'select',width:'70',allOption:'',chooseOption:'',ref:'',mandatory:'true',maxLength:'2'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'화물'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'중기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellCommNoDesc',inputType:'textImage',width:'120',mandatory:'true',maxLength:'20'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellCommNm',inputType:'text',width:'120',textAlign:'left',mandatory:'true',maxByteLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellCommCd',inputType:'textImage',width:'120',mandatory:'true',maxLength:'8'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellCommCdNm',inputType:'text',width:'120',textAlign:'left',mandatory:'true',maxByteLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiInscrpCommNm',inputType:'text',width:'120',textAlign:'left',mandatory:'true',maxByteLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiInscrpCommEngNm',inputType:'text',width:'120',textAlign:'left',maxByteLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commInscrpSeq',inputType:'text',width:'70',maxLength:'3',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commInscrpUnitCd',inputType:'select',width:'100',chooseOption:'true',chooseOptionLabel:'&nbsp;'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows4',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',style:'',gridID:'gr_sellitemnamelist',btnCancelYn:'Y',id:'udc_addRow4',rowDelUserAuth:'D',rowAddUserAuth:'C',rowAddFunction:'scwin.f_ItemNameAddRow'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_gridTariff',codeId:'',id:'udc_comCodeGrid',nameId:'',objTypeCode:'data',popupID:'gridTariffPopup',selectID:'',style:'display:none;visibility:none;'}}]}]}]})