/*amd /ui/ac/fm/fundemploy/dpsitsaveacctmgnt/fm_202_01_02b.xml 15968 7a42ed0a6dee3b02bc42e67234c2572c3f7151204fafeb60fbb191187680182e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_txnContents',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_txnContents_oncelldatachange','ev:onrowpositionchange':'scwin.ds_txnContents_onrowpositionchange','ev:oninsertrow':'scwin.ds_txnContents_oninsertrow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selYn',name:'선택여부',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dpsitSaveAcctNo',name:'예적금번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpsitSaveAcctSeq',name:'예적금순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpsitSaveAcctTxnClsCd',name:'예적금거래구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnDt',name:'거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankbookNo',name:'통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'intRt',name:'이자율',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cmis',name:'수수료',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'txnAmt',name:'거래금액',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpsitSaveAcctKndCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtAmt',name:'계약금액',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'paymtAmt',name:'불입금액',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'refDpsitSaveAcctNo',name:'참조예적금번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtIntRt',name:'이자 이율',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'corTaxRt',name:'법인세율',dataType:'text',defaultValue:'0'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'depositSavingAccountNumber',name:'depositSavingAccountNumber',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_txnContents',action:'/ac.fm.fundemploy.dpsitsaveacctmgnt.RetrieveDepositSavingAccountContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_txnContents","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_txnContents","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_txnContents_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.userInfo = $c.data.getMemInfo($p);
scwin.parent = $c.win.getParent($p);
scwin.PAYMENT = "01";
scwin.IMP_INT = "02";
scwin.COR_TAX = "04";
scwin.LOC_TAX = "07";
scwin.DUE_TERMINATION_TXN = "05";
scwin.MIDDLE_TERMINATION_TXN = "06";
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FM007",
    compID: "gr_txnContents:dpsitSaveAcctTxnClsCd",
    opt: {
      'range': '1,10'
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
  $c.gus.cfDisableKeyData($p);
};
scwin.onUdcCompleted = function () {};
scwin.ondataload = function () {
  scwin.rowBtnDisable();
  // scwin.f_Retrieve();
};
scwin.rowBtnEnable = function () {
  $c.gus.cfEnableObjects($p, [btn_rowAdd, btn_rowCancel]);
};
scwin.rowBtnDisable = function () {
  $c.gus.cfDisableObjects($p, [btn_rowAdd, btn_rowCancel]);
};

//-------------------------------------------------------------------------
// 예적금거래내역조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  // var condition = "?depositSavingAccountNumber="+parent.hidDpsitSaveAcctNo.value;
  // tr_txnContents.Action = "/ac.fm.fundemploy.dpsitsaveacctmgnt.RetrieveDepositSavingAccountContentsCMD.do"+condition;  //개발시 정정영역    
  // tr_txnContents.Post();
  dma_condition.set("depositSavingAccountNumber", scwin.parent.scwin.hidDpsitSaveAcctNo);
  $c.sbm.execute($p, sbm_txnContents);
};

//-------------------------------------------------------------------------
// 출금 통장조회 POPUP호출
//-------------------------------------------------------------------------
scwin.f_BankBookPopUp = async function (sFlag, sBankbookNo, sRow) {
  udc_comCode_Grid.setSelectId("retrieveBankBookCdInfo");
  await udc_comCode_Grid.cfCommonPopUp(scwin.udc_comCode_gr_txnContents_callBackFunc, sBankbookNo, '', sFlag, null, null, null, null, null, null, null, null, null); // 거래처
  // if (rtnList != null ) {
  //     if (rtnList[0] == "N/A") return;
  //     ds_txnContents.NameValue(sRow,"payBankbookNo") = rtnList[0];	//통장번호
  //     gr_txnContents.focus();
  // }
  // else {
  //     ds_txnContents.NameValue(sRow,"payBankbookNo") = "";	//통장번호
  // }
};
scwin.udc_comCode_gr_txnContents_callBackFunc = function (ret) {
  let rowIdx = gr_txnContents.getFocusedRowIndex();
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ds_txnContents.setCellData(rowIdx, "payBankbookNo", ret[0]); //통장번호
  } else {
    ds_txnContents.setCellData(rowIdx, "payBankbookNo", ""); //통장번호
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckBankBookPopUp = function (sBankbookNo, sRow) {
  // if (sBankbookNo != "" ) {
  scwin.f_BankBookPopUp("F", sBankbookNo, sRow);
  // } else {
  //     ds_txnContents.setCellData(sRow,"payBankbookNo","");	//통장번호
  // }
};
scwin.sbm_txnContents_submitdone = function (e) {
  var rowCnt = ds_txnContents.getRowCount();
  spanTotal.setLabel(rowCnt);
  gr_txnContents.setFocusedCell(0, 0);
};
scwin.gr_txnContents_oncellclick = async function (rowIndex, columnIndex, columnId) {
  // 전표 POPUP
  if (columnId == "slipNo") {
    var vslipNo = ds_txnContents.getCellData(rowIndex, columnId);
    if (!(vslipNo == null || vslipNo == "")) {
      await $c.gus.cfShowSlipInfo($p, vslipNo);
    }
  }
};
scwin.gr_txnContents_ontextimageclick = function (rowIndex, columnIndex) {
  var colid = gr_txnContents.getColumnID(columnIndex);
  if (colid == "payBankbookNo" && !gr_txnContents.getColumnReadOnly(colid)) {
    var data = ds_txnContents.getCellData(rowIndex, "payBankbookNo");
    scwin.f_CheckBankBookPopUp(data, rowIndex);
  }
};
scwin.ds_txnContents_oncelldatachange = function (info) {
  var row = info.rowIndex;
  var colid = gr_txnContents.getColumnID(info.colIndex);
  // if ( colid == "dpsitSaveAcctTxnClsCd")
  // {
  if (ds_txnContents.getCellAllData(row, colid) == scwin.COR_TAX) {
    ds_txnContents.setCellData(row, "intRt", scwin.parent.ds_dpsitSave.getCellData(scwin.parent.ds_dpsitSave.getRowPosition(), "corTaxRt"));
  } else if (ds_txnContents.getCellData(row, colid) == scwin.LOC_TAX) {
    ds_txnContents.setCellData(row, "intRt", scwin.parent.ds_dpsitSave.getCellData(scwin.parent.ds_dpsitSave.getRowPosition(), "corTaxRt") / 10);
  } else {
    if (ds_txnContents.getCellData(row, colid) == scwin.DUE_TERMINATION_TXN || ds_txnContents.getCellData(row, colid) == scwin.MIDDLE_TERMINATION_TXN) {
      if (scwin.parent.ds_dpsitSave.getCellData(scwin.parent.ds_dpsitSave.getRowPosition(), "newTerminationClsCd") == 1) {
        $c.win.alert($p, "재가입된 내역에선 해지할 수 없습니다.");
        ds_txnContents.Undo(row);
        return false;
      }
    }
    ds_txnContents.setCellData(row, "intRt", scwin.parent.ds_dpsitSave.getCellData(scwin.parent.ds_dpsitSave.getRowPosition(), "ctrtIntRt"));
  }
  if (!(scwin.parent.ds_dpsitSave.getCellData(scwin.parent.ds_dpsitSave.getRowPosition(), "refDpsitSaveAcctNo") == "" || scwin.parent.ds_dpsitSave.getCellData(scwin.parent.ds_dpsitSave.getRowPosition(), "refDpsitSaveAcctNo") == "") && ds_txnContents.getCellData(row, "dpsitSaveAcctTxnClsCd") == scwin.PAYMENT) {
    gr_txnContents.setColumnReadOnly("dpsitSaveAcctTxnClsCd", true);
  } else {
    gr_txnContents.setColumnReadOnly("dpsitSaveAcctTxnClsCd", false);
  }
  // }
};
scwin.ds_txnContents_onrowpositionchange = function (info) {
  var row = info.newRowIndex;
  if (!(ds_txnContents.getCellAllData(row, "slipNo") == null || ds_txnContents.getCellAllData(row, "slipNo") == "")) {
    gr_txnContents.setColumnReadOnly("dpsitSaveAcctTxnClsCd", true);
    gr_txnContents.setColumnReadOnly("txnDt", true);
    gr_txnContents.setColumnReadOnly("txnAmt", true);
    gr_txnContents.setColumnReadOnly("intRt", true);
    gr_txnContents.setColumnReadOnly("payBankbookNo", true);
    gr_txnContents.setColumnReadOnly("cmis", true);
    gr_txnContents.setColumnReadOnly("slipNo", true);
  } else {
    if (!(scwin.parent.ds_dpsitSave.getCellData(scwin.parent.ds_dpsitSave.getRowPosition(), "refDpsitSaveAcctNo") == "" || scwin.parent.ds_dpsitSave.getCellData(scwin.parent.ds_dpsitSave.getRowPosition(), "refDpsitSaveAcctNo") == "") && ds_txnContents.getCellData(row, "dpsitSaveAcctTxnClsCd") == scwin.PAYMENT && scwin.parent.ds_dpsitSave.getCellData(scwin.parent.ds_dpsitSave.getRowPosition(), "newTerminationClsCd") == 1) {
      gr_txnContents.setColumnReadOnly("payBankbookNo", true);
    } else {
      gr_txnContents.setColumnReadOnly("payBankbookNo", false);
    }
    gr_txnContents.setColumnReadOnly("dpsitSaveAcctTxnClsCd", false);
    gr_txnContents.setColumnReadOnly("txnDt", false);
    gr_txnContents.setColumnReadOnly("txnAmt", false);
    gr_txnContents.setColumnReadOnly("intRt", false);
    gr_txnContents.setColumnReadOnly("cmis", false);
    gr_txnContents.setColumnReadOnly("slipNo", true);
  }
};

//-------------------------------------------------------------------------
// 그리드 추가
//-------------------------------------------------------------------------
scwin.f_AddRow = async function () {
  scwin.parent.scwin.f_AddRow();
};

//-------------------------------------------------------------------------
// 그리드 취소
//-------------------------------------------------------------------------
scwin.f_Undo = function () {
  scwin.parent.scwin.f_Undo();
};
scwin.gr_txnContents_onkeyup = function (e) {
  let colid = gr_txnContents.getFocusedColumnID();
  let rowIndex = ds_txnContents.getRowPosition();
  if (e.keyCode == 13 && colid == "payBankbookNo") {
    var data = ds_txnContents.getCellData(rowIndex, "payBankbookNo");
    scwin.f_CheckBankBookPopUp(data, rowIndex);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',id:'udc_gr_txnContents',gridID:'gr_txnContents',gridDownYn:'N',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_txnContents',id:'gr_txnContents',style:'',visibleRowNum:'4',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_txnContents_oncellclick','ev:ontextimageclick':'scwin.gr_txnContents_ontextimageclick',sortable:'false',rowStatusVisible:'true',rowStatusWidth:'30','ev:onkeyup':'scwin.gr_txnContents_onkeyup','ev:onkeydown':'scwin.gr_txnContents_onkeydown'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'구분',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'거래일자',width:'80',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'거래금액',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'이율',width:'70',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'통장번호',width:'80',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'수수료',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'전표번호',width:'100',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selYn',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dpsitSaveAcctTxnClsCd',inputType:'select',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txnDt',inputType:'calendar',style:'',value:'',width:'80',mandatory:'true',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txnAmt',inputType:'text',style:'',value:'',width:'100',mandatory:'true',min:'1',dataType:'number',displayFormat:'#,##0',textAlign:'right',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'intRt',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,###.00',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payBankbookNo',inputType:'textImage',style:'',value:'',width:'80',readOnly:'true',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cmis',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',style:'color:blue;',value:'',width:'100',class:'underline',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'N',rowAddFunction:'scwin.f_AddRow',cancelFunction:'scwin.f_Undo',btnCancelObj:'btn_rowCancel',btnRowAddObj:'btn_rowAdd'}}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px;visibility:hidden;display: none;',id:'udc_comCode_Grid',skipOnBlurCodeValueEmpty:'N'}}]}]}]}]})