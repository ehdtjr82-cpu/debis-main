/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_301_01_39b.xml 26790 3411136e66fcbc7b2f973aa7c1a10503972175d377d7ed7218b7cf816be73209 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkPlCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Grid1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsTrfClsCd',name:'보관매입 요율구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutPatternClsCd',name:'반출유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULL EMPTY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptUpr',name:'적용단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'freeday',name:'FREE DAY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shedTermStDdCnt',name:'FROM(이상)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shedTermEndDdCnt',name:'TO(미만)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매입거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptStDt',name:'적용시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldKey1',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldKey2',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldKey3',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldAdptUpr',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expireDt',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name37',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_vCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stDt',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_wrkPlCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_wrkPlCd',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_wrkPlCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_wrkPlCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveStorageChargePurchaseTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_vCond","key":"IN_DS1"},{"id":"ds_Grid1","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_Grid1","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.cywrkrslts.SaveStorageChargePurchaseTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_Grid1","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdonw','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.rowCountZeroCheck = true;
scwin.preValue = 0;
scwin.onpageload = async function () {
  //공통코드
  const codeOptions = [{
    grpCd: "OP236",
    compID: "gr_Grid1:pchsTrfClsCd"
  },
  //매입구분
  {
    grpCd: "OP237",
    compID: "gr_Grid1:crryoutPatternClsCd"
  },
  //반출유형
  {
    grpCd: "OP171",
    compID: "gr_Grid1:fullEmptyClsCd"
  } //full/empty
  ];
  $c.data.setCommonCode($p, codeOptions);

  /*작업장 setting*/
  sbm_wrkPlCd.action = "/cm.zz.RetrieveComboCMD.do?sysCd=CarryInAndCarryOutInformationEBC&queryId=retrivewrkPlCd";
  $c.sbm.execute($p, sbm_wrkPlCd);
  ica_ed_srchFromDate.setValue(scwin.strCurDate);
  acb_lc_wrkPlCd.focus();
  const codeOptions2 = [{
    method: "getLuxeComboData",
    param1: "CarryInAndCarryOutInformationEBC",
    param2: "retrievewrkPlCd",
    param3: [],
    compID: "gr_Grid1:wrkPlCd" //바인딩 할 컴포넌트 id
  }];
  await $c.data.setGauceUtil($p, codeOptions2);
};

//초기화
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_cond, [ica_ed_srchFromDate]);
};
scwin.f_Excel = function () {
  // if (ds_Grid1.getRowCount() == 0) return;

  let excelName = '보관료 매입요율';
  let options = {
    sheetName: excelName,
    fileName: excelName + ".xlsx"
  };
  $c.data.downloadGridViewExcel($p, gr_Grid1, options);
};

//조회
scwin.btn_retrieve_onclick = function (e) {
  if (!$c.gus.cfValidate($p, [acb_lc_wrkPlCd, ica_ed_srchFromDate])) {
    // 문서코드, 송수신업체, 항목코드
    return;
  }

  //dataMap setting
  dma_vCond.set("wrkPlCd", acb_lc_wrkPlCd.getValue());
  dma_vCond.set("stDt", ica_ed_srchFromDate.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//조회 callback
scwin.sbm_retrieve_submitdone = async function () {
  let nCnt = ds_Grid1.getRowCount();
  if (nCnt > 0) {
    gr_Grid1.setFocusedCell(0, 0);
    total.setValue(nCnt);
    scwin.rowCountZeroCheck = false;
    for (var i = 0; i < nCnt; i++) {
      if (ds_Grid1.getCellData(i, "pchsTrfClsCd") != "1") {
        gr_Grid1.setCellReadOnly(i, "freeday", false);
        gr_Grid1.setCellReadOnly(i, "shedTermStDdCnt", false);
        gr_Grid1.setCellReadOnly(i, "shedTermEndDdCnt", false);
      }
    }
  } else {
    scwin.rowCountZeroCheck = true;
    total.setValue(nCnt);
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  ;
};

//저장
scwin.btn_Save_onclick = async function (e) {
  let oValidExp = {
    dataName: "보관료 매입요율 그리드",
    validFeatures: "ignoreStatus=no,",
    validExp: `
                wrkPlCd:작업장:yes::key,
                pchsTrfClsCd:요율구분:yes::key,
                crryoutPatternClsCd:반출유형:yes::key,
                pchsClntNo:매입거래처:yes::key,
                adptStDt:적용시작일:yes:date=YYYYMMDD&length=8:key
                `
  };
  $c.gus.setValidExp($p, gr_Grid1, oValidExp);
  if (!(await $c.gus.cfValidate($p, [gr_Grid1], null, true))) return;
  if (ds_Grid1.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다."); //변경된 정보가 없습니다.
    return;
  }
  let confirm = await $c.win.confirm($p, "저장 하시겠습니까?");
  if (confirm) {
    $c.sbm.execute($p, sbm_save);
  }
};

//grid 매입거래처 pop
scwin.pchsClntNm_pop = function () {
  udc_comCode_clnt.cfCommonPopUp(scwin.udc_comCode_clnt_callBackFunc2, "", ds_Grid1.getCellData(ds_Grid1.getRowPosition(), "pchsClntNm"), "F", null, null, null, null, null, null, null, null, null, null, null, null, null);
};

//grid 거래처callback
scwin.udc_comCode_clnt_callBackFunc2 = function (ret) {
  if (ret == null) {
    ds_Grid1.setCellData(ds_Grid1.getRowPosition(), "pchsClntNo", "");
    ds_Grid1.setCellData(ds_Grid1.getRowPosition(), "pchsClntNm", "");
  } else {
    ds_Grid1.setCellData(ds_Grid1.getRowPosition(), "pchsClntNo", ret[[0]]);
    ds_Grid1.setCellData(ds_Grid1.getRowPosition(), "pchsClntNm", ret[[1]]);
  }
};
scwin.gr_Grid1_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  if (gr_Grid1.getCellReadOnly(rowIndex, columnIndex) == true) {
    if (rowIndex != oldRow) {
      if (oldColumnIndex == 0 || oldColumnIndex == 1 || oldColumnIndex == 2 || oldColumnIndex == 4 || oldColumnIndex == 5) {
        gr_Grid1.setFocusedCell(oldRow, oldColumnIndex);
      } else {
        gr_Grid1.setFocusedCell(oldRow, oldColumnIndex);
      }
    }
  }
  ;
};
scwin.addRow = function () {
  if (ds_Grid1.getRowStatus(ds_Grid1.getRowCount() - 1) == "C" && scwin.rowCountZeroCheck == false) {
    gr_Grid1.setFocusedCell(ds_Grid1.getRowCount() - 1, "wrkPlCd");
    return;
  }
  var insertCount = ds_Grid1.getRowCount();
  let nRow = ds_Grid1.insertRow(insertCount);
  if (scwin.rowCountZeroCheck == true) {
    for (var i = 0; i < ds_Grid1.getRowCount(); i++) {
      gr_Grid1.setCellReadOnly(i, "wrkPlCd", false);
      gr_Grid1.setCellReadOnly(i, "pchsTrfClsCd", false);
      gr_Grid1.setCellReadOnly(i, "crryoutPatternClsCd", false);
      gr_Grid1.setCellReadOnly(i, "cntrSizCd", false);
      gr_Grid1.setCellReadOnly(i, "fullEmptyClsCd", false);
      gr_Grid1.setCellReadOnly(i, "unitCd", false);
      gr_Grid1.setCellReadOnly(i, "adptUpr", false);
      gr_Grid1.setCellReadOnly(i, "freeday", false);
      gr_Grid1.setCellReadOnly(i, "shedTermStDdCnt", false);
      gr_Grid1.setCellReadOnly(i, "shedTermEndDdCnt", false);
      gr_Grid1.setCellReadOnly(i, "pchsClntNm", false);
      gr_Grid1.setCellReadOnly(i, "adptStDt", false);
    }
    ;
  } else {
    for (var i = 0; i < ds_Grid1.getRowCount(); i++) {
      if (ds_Grid1.getRowStatus(i) == "D") {
        ds_Grid1.modifyRowStatus(i, "R");
      }
      gr_Grid1.setCellReadOnly(i, "wrkPlCd", true);
      gr_Grid1.setCellReadOnly(i, "pchsTrfClsCd", true);
      gr_Grid1.setCellReadOnly(i, "crryoutPatternClsCd", true);
      gr_Grid1.setCellReadOnly(i, "cntrSizCd", true);
      gr_Grid1.setCellReadOnly(i, "fullEmptyClsCd", true);
      gr_Grid1.setCellReadOnly(i, "unitCd", true);
      gr_Grid1.setCellReadOnly(i, "adptUpr", true);
      gr_Grid1.setCellReadOnly(i, "freeday", true);
      gr_Grid1.setCellReadOnly(i, "shedTermStDdCnt", true);
      gr_Grid1.setCellReadOnly(i, "shedTermEndDdCnt", true);
      gr_Grid1.setCellReadOnly(i, "pchsClntNm", true);
      gr_Grid1.setCellReadOnly(i, "adptStDt", true);
    }
    ;
    gr_Grid1.setCellReadOnly(nRow, "wrkPlCd", false);
    gr_Grid1.setCellReadOnly(nRow, "pchsTrfClsCd", false);
    gr_Grid1.setCellReadOnly(nRow, "crryoutPatternClsCd", false);
    gr_Grid1.setCellReadOnly(nRow, "cntrSizCd", false);
    gr_Grid1.setCellReadOnly(nRow, "fullEmptyClsCd", false);
    gr_Grid1.setCellReadOnly(nRow, "unitCd", false);
    gr_Grid1.setCellReadOnly(nRow, "adptUpr", false);
    gr_Grid1.setCellReadOnly(nRow, "freeday", false);
    gr_Grid1.setCellReadOnly(nRow, "shedTermStDdCnt", false);
    gr_Grid1.setCellReadOnly(nRow, "shedTermEndDdCnt", false);
    gr_Grid1.setCellReadOnly(nRow, "pchsClntNm", false);
    gr_Grid1.setCellReadOnly(nRow, "adptStDt", false);
  }
  ds_Grid1.setCellData(nRow, "wrkPlCd", acb_lc_wrkPlCd.getValue());
  ds_Grid1.setCellData(nRow, "trfSeq", 600 + ds_Grid1.getRowPosition()); //가우스 데이타셋 헤더 PK정의 맞춰주기 위한 임시 순번(XML에서 순번채번)
  gr_Grid1.setFocusedCell(nRow, "wrkPlCd"); //포커스의 컬럼위치
};
scwin.delRow = function () {
  if (ds_Grid1.getRowStatus(ds_Grid1.getRowPosition()) == "C") {
    ds_Grid1.removeRow(ds_Grid1.getRowCount() - 1);
    for (var i = 0; i < ds_Grid1.getRowCount(); i++) {
      gr_Grid1.setCellReadOnly(i, "wrkPlCd", true);
      gr_Grid1.setCellReadOnly(i, "pchsTrfClsCd", true);
      gr_Grid1.setCellReadOnly(i, "crryoutPatternClsCd", false);
      gr_Grid1.setCellReadOnly(i, "cntrSizCd", false);
      gr_Grid1.setCellReadOnly(i, "fullEmptyClsCd", false);
      gr_Grid1.setCellReadOnly(i, "unitCd", false);
      gr_Grid1.setCellReadOnly(i, "adptUpr", false);
      gr_Grid1.setCellReadOnly(i, "freeday", false);
      gr_Grid1.setCellReadOnly(i, "shedTermStDdCnt", true);
      gr_Grid1.setCellReadOnly(i, "shedTermEndDdCnt", true);
      gr_Grid1.setCellReadOnly(i, "pchsClntNm", false);
      gr_Grid1.setCellReadOnly(i, "adptStDt", false);
    }
    ;
  } else {
    var rowFoc = ds_Grid1.getRowPosition();
    ds_Grid1.deleteRow(ds_Grid1.getRowPosition());
    gr_Grid1.setFocusedCell(rowFoc, 0);
  }
};
scwin.cancelRow = function () {
  if (ds_Grid1.getRowStatus(ds_Grid1.getRowPosition()) == "C") {
    ds_Grid1.removeRow(ds_Grid1.getRowCount() - 1);
    for (var i = 0; i < ds_Grid1.getRowCount(); i++) {
      gr_Grid1.setCellReadOnly(i, "wrkPlCd", true);
      gr_Grid1.setCellReadOnly(i, "pchsTrfClsCd", true);
      gr_Grid1.setCellReadOnly(i, "crryoutPatternClsCd", false);
      gr_Grid1.setCellReadOnly(i, "cntrSizCd", false);
      gr_Grid1.setCellReadOnly(i, "fullEmptyClsCd", false);
      gr_Grid1.setCellReadOnly(i, "unitCd", false);
      gr_Grid1.setCellReadOnly(i, "adptUpr", false);
      gr_Grid1.setCellReadOnly(i, "freeday", false);
      gr_Grid1.setCellReadOnly(i, "shedTermStDdCnt", true);
      gr_Grid1.setCellReadOnly(i, "shedTermEndDdCnt", true);
      gr_Grid1.setCellReadOnly(i, "pchsClntNm", false);
      gr_Grid1.setCellReadOnly(i, "adptStDt", false);
    }
    ;
  } else {
    ds_Grid1.undoRow(ds_Grid1.getRowPosition());
  }
};
scwin.gr_Grid1_onafteredit = async function (rowIndex, columnIndex, value) {
  if (columnIndex == 1) {
    if (value == 1) {
      gr_Grid1.setCellReadOnly(rowIndex, "freeday", true);
      gr_Grid1.setCellReadOnly(rowIndex, "shedTermStDdCnt", true);
      gr_Grid1.setCellReadOnly(rowIndex, "shedTermEndDdCnt", true);
    } else {
      gr_Grid1.setCellReadOnly(rowIndex, "freeday", false);
      gr_Grid1.setCellReadOnly(rowIndex, "shedTermStDdCnt", false);
      gr_Grid1.setCellReadOnly(rowIndex, "shedTermEndDdCnt", false);
    }
  }
  if (columnIndex == 6) {
    if (value == "" || value == undefined) {
      ds_Grid1.setCellData(rowIndex, columnIndex, 0);
    }
  } else if (columnIndex == 7) {
    if (value == "" || value == undefined) {
      ds_Grid1.setCellData(rowIndex, columnIndex, 0);
    }
    ;
    if (value > 0) {
      gr_Grid1.setCellReadOnly(rowIndex, "shedTermStDdCnt", true);
      gr_Grid1.setCellReadOnly(rowIndex, "shedTermEndDdCnt", true);
    } else {
      gr_Grid1.setCellReadOnly(rowIndex, "shedTermStDdCnt", false);
      gr_Grid1.setCellReadOnly(rowIndex, "shedTermEndDdCnt", false);
    }
  } else if (columnIndex == 8) {
    if (value == "" || value == undefined) {
      ds_Grid1.setCellData(rowIndex, columnIndex, 0);
    }
    ;
  } else if (columnIndex == 9) {
    if (value == "" || value == undefined) {
      ds_Grid1.setCellData(rowIndex, columnIndex, 0);
    }
    ;
    if (ds_Grid1.getCellData(rowIndex, "shedTermStDdCnt") > ds_Grid1.getCellData(rowIndex, "shedTermEndDdCnt")) {
      await $c.win.alert($p, "FROM(이상) 값이 TO(미만) 값보다 큽니다.");
      ds_Grid1.setCellData(rowIndex, "shedTermEndDdCnt", scwin.preValue);
      return;
    }
    ;
    if (ds_Grid1.getCellData(rowIndex, "shedTermEndDdCnt") > 0 && ds_Grid1.getCellData(rowIndex, "shedTermStDdCnt") == 0) {
      await $c.win.alert($p, "FROM(이상)에 0이 아닌 값을 입력해야 합니다.");
      return;
    }
    ;
    scwin.preValue = value;
  } else if (columnIndex == 10) {
    var nmVal = value;
    if (value == "") {
      ds_Grid1.setCellData(rowIndex, "pchsClntNo", "");
    } else {
      if (value != ds_Grid1.getOriginalCellData(rowIndex, "pchsClntNm")) {
        ds_Grid1.setCellData(rowIndex, "pchsClntNo", "");
        udc_comCode_clnt.cfCommonPopUpAsync(scwin.udc_comCode_clnt_callBackFunc2, "", ds_Grid1.getCellData(ds_Grid1.getRowPosition(), "pchsClntNm"), "F", null, null, null, null, null, null, null, null, null, null, null, null, null);
      }
    }
  }
};
scwin.sbm_save_submitdonw = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다 
  dma_vCond.set("wrkPlCd", acb_lc_wrkPlCd.getValue());
  dma_vCond.set("stDt", ica_ed_srchFromDate.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.gr_Grid1_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "freeday") {
    if (ds_Grid1.getCellData(rowIndex, "pchsTrfClsCd") == "1") {
      ds_Grid1.setCellData(rowIndex, columnIndex, 0);
    }
  }
  if (ds_Grid1.getCellData(rowIndex, 'wrkPlCd') == "6C01") {
    //작업장이 PECT(6C01) 인경우 요율구분이 이용료(1)와 경과보관료(3)만 가능하고, 반출유형은 선택불가.
    ds_Grid1.setCellData(rowIndex, 'crryoutPatternClsCd', "9");
    gr_Grid1.setCellReadOnly(rowIndex, "crryoutPatternClsCd", true);
  } else {
    gr_Grid1.setCellReadOnly(rowIndex, "crryoutPatternClsCd", false);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_cond',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_wrkPlCd',search:'start',style:'width:200px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',visibleRowNum:'15'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wrkPlCd'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_ed_srchFromDate',pickerType:'dynamic',style:'',displayFormat:'yyyy/MM/dd',mandatory:'true',title:'적용일자'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'보관료 매입요율',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_Grid1',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_Grid1',id:'gr_Grid1',style:'',visibleRowNum:'15',visibleRowNumFix:'true',focusMove:'true',rowStatusVisible:'true','ev:oncellindexchange':'scwin.gr_Grid1_oncellindexchange','ev:onafteredit':'scwin.gr_Grid1_onafteredit','ev:oncellclick':'scwin.gr_Grid1_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'작업장',width:'100',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'보관매입<br/>요율구분',width:'100',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'반출유형',width:'100',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'SIZE',width:'70',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'FULL<br/>EMPTY',width:'80',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'단위',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'적용단가',width:'100',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'FREE<br/>DAY',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'장치기간(일수)',width:'140',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'매입거래처',displayMode:'label',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'적용시작일',displayMode:'label',rowSpan:'2',class:'txt-red'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'FROM(이상)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',value:'TO(미만)',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlCd',inputType:'select',width:'100',textAlign:'center',mandatory:'true',readOnly:'true',emptyItem:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsTrfClsCd',inputType:'select',width:'100',textAlign:'center',mandatory:'true',readOnly:'true',emptyItem:'true'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryoutPatternClsCd',inputType:'select',width:'100',textAlign:'center',mandatory:'true',emptyItem:'true'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'select',width:'70',textAlign:'center',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'20Feet'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'20'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'40Feet'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'40'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'select',width:'80',textAlign:'center',emptyItem:'true'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'select',width:'70',textAlign:'center',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'VAN'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'VAN'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'TEU'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TEU'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptUpr',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',allowChar:'0-9',defaultValue:'0',excelCellType:'number',emptyValue:'0',maxLength:'7'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'freeday',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',allowChar:'0-9',defaultValue:'0',excelCellType:'number',emptyValue:'0',readOnly:'true',maxLength:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shedTermStDdCnt',inputType:'text',width:'100',dataType:'number',displayFormat:'#,##0',allowChar:'0-9',maxLength:'3',defaultValue:'0',readOnly:'true',textAlign:'right',excelCellType:'number',emptyValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shedTermEndDdCnt',inputType:'text',width:'100',dataType:'number',allowChar:'0-9',maxLength:'3',defaultValue:'0',readOnly:'true',displayFormat:'#,##0',textAlign:'right',excelCellType:'number',emptyValue:'0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'pchsClntNm',displayMode:'label',textAlign:'left',viewType:'default',mandatory:'true',imageClickFunction:'scwin.pchsClntNm_pop'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'adptStDt',displayMode:'label',displayFormat:'yyyy/MM/dd',allowChar:'0-9',maxLength:'8',mandatory:'true',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',gridID:'gr_Grid1',rowAddFunction:'scwin.addRow',rowDelFunction:'scwin.delRow',cancelFunction:'scwin.cancelRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntList',codeId:'pchsClntNo',validTitle:'',nameId:'pchsClntNm',style:'width:%; height:px;display: none',id:'udc_comCode_clnt'}}]}]}]}]}]})