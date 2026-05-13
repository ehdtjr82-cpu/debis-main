/*amd /ui/il/acc/acinv/ac_101_01_05b.xml 16377 42bd315f4ba409f4154a2262ef1ac45e3d5915f4634247751f749036d970e8f9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'mblno',name:'M B/L번호',dataType:'text',length:'20'}},{T:1,N:'w2:key',A:{id:'blno',name:'B/L번호',dataType:'text',length:'20'}},{T:1,N:'w2:key',A:{id:'mhno',name:'Consol No',dataType:'text',length:'20'}},{T:1,N:'w2:key',A:{id:'certiNo',name:'거래명세서번호',dataType:'text',length:'20'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'mblno',name:'M B/L번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'blno',name:'B/L번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'mhno',name:'Consol No',dataType:'text',length:'16'}},{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'cdDesc',name:'코드설명',dataType:'text',length:'200'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text',length:'14'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/il.acc.acinv.RetrieveEmartDocumentCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"}, {"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_master","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveBidcVat',action:'/il.acc.acinv.SaveEmartDocumentCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveBidcVat_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수 선언
//-------------------------------------------------------------------------
scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMM");
scwin.pKcomcd;
scwin.pMblno;
scwin.pBlno;
scwin.pMhno;
scwin.pCertiNo;
scwin.pUserId;
scwin.pPrtnGrpNo;
scwin.pType;
scwin.onpageload = function () {
  scwin.updateParam($c.data.getParameter($p));
  const codeOptions = [{
    grpCd: "IL093",
    compID: "gr_Master:cd"
  } // 상태
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.onloadCommonCodeCallbackFunc);
};
scwin.onloadCommonCodeCallbackFunc = function () {
  ed_input_textBlNo.setValue(scwin.pBlno);
  ds_search.set("kcomcd", scwin.pKcomcd);
  ds_search.set("mblno", scwin.pMblno);
  ds_search.set("mhno", scwin.pMhno);
  ds_search.set("certiNo", scwin.pCertiNo);
  scwin.f_Retrieve();
};
scwin.updateParam = function (value) {
  scwin.pKcomcd = value.kcomcd ?? "DBEX";
  scwin.pMblno = value.mblno ?? "";
  scwin.pBlno = value.blno ?? "";
  scwin.pMhno = value.mhno ?? "";
  scwin.pCertiNo = value.certiNo ?? "";
  scwin.pUserId = value.userId ?? "";
  scwin.pPrtnGrpNo = value.prtnGrpNo ?? "";
  scwin.pType = value.type ?? "";
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  ds_master.insertRow();
  ds_master.setRowPosition(ds_master.getRowCount() - 1);
  ds_master.setCellData(ds_master.getRowPosition(), "kcomcd", scwin.pKcomcd);
  ds_master.setCellData(ds_master.getRowPosition(), "mblno", scwin.pMblno);
  ds_master.setCellData(ds_master.getRowPosition(), "blno", ed_input_textBlNo.getValue());
  ds_master.setCellData(ds_master.getRowPosition(), "mhno", scwin.pMhno);
  ds_master.setCellData(ds_master.getRowPosition(), "certiNo", scwin.pCertiNo);
};

//-------------------------------------------------------------------------
//  행삭제
//-------------------------------------------------------------------------
scwin.f_DeleteRow = function () {
  let rowIndex = ds_master.getRowPosition();
  let status = ds_master.getRowStatus(rowIndex);
  if (status == "C") {
    ds_master.removeRow(rowIndex);
  } else {
    ds_master.deleteRow(rowIndex);
  }
};

//-------------------------------------------------------------------------
//  행전체삭제
//-------------------------------------------------------------------------
scwin.f_AllDeleteRow = function () {
  ds_master.DeleteAll();
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_UndoRow = function () {
  let rowIndex = ds_master.getRowPosition();
  let status = ds_master.getRowStatus(rowIndex);
  if (status == "C") {
    ds_master.removeRow(rowIndex);
  } else {
    ds_master.undoRow(rowIndex);
  }
};

//-------------------------------------------------------------------------
// 등록된 내역이 없을 때 Default AddRow
//-------------------------------------------------------------------------
scwin.f_AddRowDefault = function () {
  const cdValues = ["ITM", "PO", "LC"];
  for (let i = 0; i < cdValues.length; i++) {
    ds_master.insertRow();
    ds_master.setRowPosition(ds_master.getRowCount() - 1);
    ds_master.setCellData(ds_master.getRowPosition(), "kcomcd", scwin.pKcomcd);
    ds_master.setCellData(ds_master.getRowPosition(), "mblno", scwin.pMblno);
    ds_master.setCellData(ds_master.getRowPosition(), "blno", ed_input_textBlNo.getValue());
    ds_master.setCellData(ds_master.getRowPosition(), "mhno", scwin.pMhno);
    ds_master.setCellData(ds_master.getRowPosition(), "certiNo", scwin.pCertiNo);
    ds_master.setCellData(ds_master.getRowPosition(), "cd", cdValues[i]);
  }
};

//-------------------------------------------------------------------------
// 저장시
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  // 필수입력사항 확인
  let ret = await $c.gus.cfValidate($p, [gr_Master]);
  if (!ret) {
    return;
  }

  // 변경된 사항이 있는지 확인.
  if (ds_master.getModifiedIndex().length < 1) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  var msg = "저장하시겠습니까?";
  let rtn = await $c.win.confirm($p, msg);
  if (rtn == true) {
    $c.sbm.execute($p, sbm_saveBidcVat);
  }
};

// 조회 완료
scwin.sbm_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    // 그리드 조회건수 초기화
    tbx_totalRows.setValue(ds_master.getRowCount());
    console.log("sbm_search_submitdone = " + ds_master.getRowCount());
    if (ds_master.getRowCount() == 0) {
      // 		cfAlertMsg(MSG_CM_ERR_003);
      console.log("sbm_search_submitdone 00 = " + ds_master.getRowCount());
      scwin.f_AddRowDefault();
    }
    // 저장가능상태로 Flag변경함.
    check_select = true;
  }
};

// 저장 완료
scwin.sbm_saveBidcVat_submitdone = function (e) {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 오즈화면
//-------------------------------------------------------------------------
scwin.f_OzReport = function () {
  let reportName = "";
  let odiName = "ac_101_01_01_emart";
  if (scwin.pType === "S") {
    reportName = "/il/acc/ac_101_01_01_emart_sea.ozr";
  } else if (scwin.pType === "A") {
    reportName = "/il/acc/ac_101_01_01_emart_air.ozr";
  }
  if (reportName == "") {
    return;
  }
  let printMode = cb_printCheck.getValue() == "1" ? 'view' : 'silent'; //인쇄옵션처리
  let previewMode = cb_previewCheck1.getValue() == "1"; //미리보기처리

  let odiParam = {
    KCOMCD: scwin.pKcomcd,
    HHBLNO: scwin.pBlno,
    MHNO: scwin.pMhno,
    USER_ID: scwin.pUserId,
    CERTINO: scwin.pCertiNo,
    PRTNGRPNO: scwin.pPrtnGrpNo
  };
  if (previewMode) {
    //미리보기시
    let data = {
      "odiName": odiName,
      "reportName": reportName,
      "odiParam": odiParam,
      "viewerParam": {
        "useprogressbar": false,
        // 프로그레스바 쓸지 말지
        "printcommand": true,
        "zoom": 100 // 배율 설정
      },
      "formParam": {}
    };
    let opts = {
      "type": 'viewer',
      // viewer, print, download
      "printMode": printMode,
      "exportFilename": scwin.pBlno,
      "exportPath": 'C:\\OZExport',
      "exportFormat": 'pdf',
      "exportMode": 'view'
    };
    $c.ext.openOzReport($p, data, opts);
  } else {
    let data = {
      "odiName": odiName,
      "reportName": reportName,
      "odiParam": odiParam,
      "viewerParam": {
        "useprogressbar": true,
        "viewer": 100
      },
      "formParam": {}
    };
    let opts = {
      "type": 'print',
      "printMode": printMode
    };
    $c.ext.printOzReport($p, data, opts);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Reference No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_input_textBlNo',placeholder:'',style:'width:150px;',readOnly:'true',ref:'data:ds_search.blno','data-length':'20',maxByteLength:'20'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_Master',style:'',visibleRowNum:'10',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'15'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'Type',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Document No',width:'260'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'법인코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'MASTER B/L No',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'House B/L No',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'CONSOL No',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'Invoice No',width:'100',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cd',inputType:'select',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cdDesc',inputType:'text',width:'260',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'kcomcd',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mblno',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blno',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mhno',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiNo',inputType:'text',width:'100',textAlign:'center'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'260',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{id:'',class:'amt-wrap',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cb_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'0',class:'',cols:'1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cb_previewCheck1',renderType:'checkboxgroup',rows:'',selectedindex:'0',class:'',cols:'1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button','ev:onclick':'scwin.f_OzReport',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_Master',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DeleteRow',cancelFunction:'scwin.f_UndoRow',btnCancelYn:'Y',btnDelYn:'N'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})