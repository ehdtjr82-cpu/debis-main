/*amd /ui/tn/os/carrslts/carrslts/tn_407_01_01b.xml 30743 00bfaddff5be8077ce912a4db2a0e564f5a9f304cc3d9fb91a9498c184f2a66f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'rsltsStdDt',name:'마감연월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmYn',name:'확인여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqCd',name:'NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmYn',name:'확인;여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'상호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm2',name:'상호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntCls',name:'화주구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntCrn',name:'사업자;등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'계약금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellTot',name:'합계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'실적주체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsMth',name:'계약연월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclPosnNm',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclRsltsMth',name:'운송완료;연월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclAmt',name:'운송료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclVat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclTot',name:'합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvQty',name:'운송완료;횟수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'협력업체명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntCrn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsRsltsMth',name:'계약연월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'위탁;계약금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsVat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsTot',name:'합계',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.os.carrslts.carrslts.RetrieveNewCargoTransRsltsDeclarCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.tn.os.carrslts.carrslts.SaveNewCargoTransRsltsDeclarCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_result","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cancel',action:'/ncall.tn.os.carrslts.carrslts.CancelNewCargoTransRsltsDeclarCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_search","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_cancel_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save2',action:'/ncall.tn.os.carrslts.carrslts.SaveNewCargoTransRsltsDeclarCMD2.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_search","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save2_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.strCurrDate = $c.date.getServerDateTime($p).substring(0, 6);
  scwin.prevRow = 0;
  $c.gus.cfDisableBtnOnly($p, [btn_save, btn_cancel]);
  const comboOptions = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "lc_wrkLobranCd"
  }];
  $c.data.setGauceUtil($p, comboOptions);
  ica_rsltsStdDt.setValue(scwin.strCurrDate);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  console.log("scwin.f_fieldClear");
  $c.gus.cfInitObjects($p, tbl_search);
  ica_rsltsStdDt.setValue(scwin.strCurrDate);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = function () {
  if (ica_rsltsStdDt.getValue() == "") {
    $c.win.alert($p, "마감연월은 입력 필수 항목 입니다.");
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 실적 확인
//-------------------------------------------------------------------------
scwin.f_check = function () {
  var num, confirmYn, bilgClntNm, vehclNo, pchsClntCrn, sellTot, vehclTot, pchsTot;
  var arr_confirm = [];
  var arr_sellTot = [];
  var arr_vehclTot = [];
  var arr_pchsTot = [];
  var flag = true;

  //전송된화물확인
  for (var i = 0; i < ds_result.getTotalRow(); i++) {
    num = ds_result.getCellData(i, "eqCd"); //No
    confirmYn = ds_result.getCellData(i, "confirmYn"); //확인여부
    bilgClntNm = ds_result.getCellData(i, "bilgClntNm"); //운송의뢰자상호
    vehclNo = ds_result.getCellData(i, "vehclNo"); //차량등록번호
    pchsClntCrn = ds_result.getCellData(i, "pchsClntCrn"); //위탁사업자등록번호
    sellTot = ds_result.getCellData(i, "sellTot"); //계약합계금액
    vehclTot = ds_result.getCellData(i, "vehclTot"); //배차합계금액
    pchsTot = ds_result.getCellData(i, "pchsTot"); //위탁합계금액

    //확인여부체크
    if (confirmYn != "1") {
      arr_confirm.push(" " + num + "번째");
      flag = false;
    }
    if (Number(sellTot) < 1) {
      arr_sellTot.push(" " + num + "번째");
      flag = false;
    }
    if (Number(vehclTot) < 1 && Number(pchsTot) < 1) {
      arr_vehclTot.push(" " + num + "번째");
      flag = false;
    }
    if (Number(ds_result.getCellData(i, "pchsTot")) > 0 && ds_result.getCellData(i, "pchsClntCrn") == "") {
      arr_pchsTot.push(" " + num + "번째");
      flag = false;
    }
  }
  if (flag) {
    $c.win.alert($p, "실적 이상 없습니다.");
  } else {
    if (arr_sellTot.length != 0) {
      $c.win.alert($p, arr_sellTot + " 계약정보의 합계금액을 확인해 주세요.");
      return;
    }
    if (arr_vehclTot.length != 0) {
      $c.win.alert($p, arr_vehclTot + " 배차정보나 위탁계약정보의 합계금액을 확인해 주세요.");
      return;
    }
    if (arr_pchsTot.length != 0) {
      $c.win.alert($p, arr_pchsTot + " 위탁계약정보의 사업자등록번호를 확인해주세요.");
      return;
    }
    if (arr_confirm.length != 0) {
      $c.win.alert($p, "이미 전송된 화물이 있습니다.");
      return;
    }
  }
};

//-------------------------------------------------------------------------
// 전송 취소
//-------------------------------------------------------------------------
scwin.f_cancel = async function () {
  let conf = await $c.win.confirm($p, "실적을 취소 하시겠습니까?");
  if (conf) {
    for (var i = 0; i < ds_result.getTotalRow(); i++) {
      if (ds_result.getRowStatus(i) == "C") {
        if (ds_result.getCellData(i, "confirmYn") != "2") {
          $c.win.alert($p, "전송되지 않은 화물입니다.");
          return;
        }
      }
    }
    $c.sbm.execute($p, sbm_cancel);
  } else {
    return;
  }
};

//-------------------------------------------------------------------------
// 전송 
//-------------------------------------------------------------------------
scwin.f_save = async function () {
  let conf = await $c.win.confirm($p, "실적을 전송 하시겠습니까?");
  if (!conf) return;
  var num, confirmYn, bilgClntNm, vehclNo, pchsClntCrn, sellTot, vehclTot, pchsTot;
  var flag = true;

  //전송된화물확인
  for (var i = 0; i < ds_result.getTotalRow(); i++) {
    num = ds_result.getCellData(i, "eqCd"); //No
    confirmYn = ds_result.getCellData(i, "confirmYn"); //확인여부
    bilgClntNm = ds_result.getCellData(i, "bilgClntNm"); //운송의뢰자상호
    vehclNo = ds_result.getCellData(i, "vehclNo"); //차량등록번호
    pchsClntCrn = ds_result.getCellData(i, "pchsClntCrn"); //위탁사업자등록번호
    sellTot = ds_result.getCellData(i, "sellTot"); //계약합계금액
    vehclTot = ds_result.getCellData(i, "vehclTot"); //배차합계금액
    pchsTot = ds_result.getCellData(i, "pchsTot"); //위탁합계금액

    //확인여부체크
    if (confirmYn != "1") {
      $c.win.alert($p, "이미 전송된 화물이 있습니다.");
      return;
    }
    if (Number(sellTot) < 1) {
      $c.win.alert($p, num + "번째 계약정보의 합계금액을 확인해 주세요");
      return;
    }
    if (Number(vehclTot) < 1 && Number(pchsTot) < 1) {
      $c.win.alert($p, num + "번째 배차정보나 위탁계약정보의 합계금액을 확인해 주세요");
      return;
    }
    if (Number(ds_result.getCellData(i, "pchsTot")) > 0 && ds_result.getCellData(i, "pchsClntCrn") == "") {
      $c.win.alert($p, num + "번째 위탁계약정보의 사업자등록번호를 확인해주세요");
      return;
    }
  }
  $c.sbm.execute($p, sbm_save2);
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.f_down = async function () {
  if (ds_result.getTotalRow() > 0) {
    let conf = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (conf) {
      var options = {
        fileName: "FPIS실적신고.xlsx",
        sheetName: "FPIS실적신고",
        type: "4+8+16",
        useSubTotal: "true",
        useSubTotalData: "true"
      };
      $c.data.downloadGridViewExcel($p, gr_result, options);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// Formatter
//-------------------------------------------------------------------------
scwin.f_customFormatter = function (data, formattedData, rowIndex, colIndex) {
  if ($c.gus.cfIsNull($p, data)) return;
  let columnId = $c.util.getComponent($p, this.id).getColumnID(colIndex);
  if (columnId == "confirmYn") {
    return $c.gus.decode($p, data, "0", "미확인", "1", "확인", "2", "전송");
  }
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_result.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    //ID중복 > 강제 값 설정
    for (var i = 0; i < ds_result.getTotalRow(); i++) {
      ds_result.setCellData(i, "bilgClntNm2", ds_result.getCellData(i, "bilgClntNm"));
    }
    gr_result.refreshColumn("bilgClntNm2");
    ds_result.sort("lobranCd", 0);
  }
  if (lc_wrkLobranCd.getValue() == "" && ds_result.getTotalRow() > 0) {
    $c.gus.cfEnableBtnOnly($p, [btn_save, btn_cancel]);
  } else {
    $c.gus.cfDisableBtnOnly($p, [btn_save, btn_cancel]);
  }
};

//전송취소 완료
scwin.sbm_cancel_submitdone = function (e) {
  console.log("scwin.sbm_cancel_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.win.alert($p, "정상 처리 되었습니다.");
  $c.sbm.execute($p, sbm_retrieve);
};

//전송 완료
scwin.sbm_save_submitdone = function (e) {
  console.log("scwin.sbm_save_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.win.alert($p, "정상 처리 되었습니다.");
  $c.sbm.execute($p, sbm_retrieve);
};

//전송 완료
scwin.sbm_save2_submitdone = function (e) {
  console.log("scwin.sbm_save_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.win.alert($p, "정상 처리 되었습니다.");
  $c.sbm.execute($p, sbm_retrieve);
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//조회조건 clear 버튼
scwin.btn_clear_onclick = function (e) {
  console.log("scwin.btn_clear_onclick");
  scwin.f_fieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  console.log("scwin.btn_search_onclick");
  scwin.f_retrieve();
};

//실적확인 버튼
scwin.btn_check_onclick = function (e) {
  scwin.f_check();
};

//실적취소 버튼
scwin.btn_cancel_onclick = function (e) {
  scwin.f_cancel();
};

//전송 버튼
scwin.btn_save_onclick = function (e) {
  scwin.f_save();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'마감연월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_rsltsStdDt',pickerType:'dynamic',style:'',ref:'data:dma_search.rsltsStdDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확인여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_confirmYn',search:'start',style:'width:150px;',submenuSize:'auto',searchTarget:'value',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.confirmYn'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkLobranCd',style:'width:200px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'data:dma_search.lobranCd'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1GG'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:'',validExp:'점소:yes'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_result',btnUser:'Y',gridDownFn:'scwin.f_down'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_result',id:'gr_result',style:'',visibleRowNum:'15',visibleRowNumFix:'true',fixedColumn:'3',resize:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true',readOnly:'true',fixedColumnNoMove:'true',dataDragDrop:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'NO',width:'60',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'확인<br/>여부',width:'60',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'점소',width:'115',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'운송의뢰자 정보',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'계약정보',width:'350',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'490',inputType:'text',style:'',id:'column81',value:'배차정보',displayMode:'label',colSpan:'7',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',style:'',id:'column53',value:'위탁계약정보',displayMode:'label',colSpan:'6',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'column37',value:'상호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column36',value:'화주구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'85',inputType:'text',style:'',id:'column35',value:'사업자<br/>등록번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column34',value:'계약금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column33',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column32',value:'합계금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column31',value:'실적주체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column86',value:'계약연월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column82',value:'차량등록번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column78',value:'소유구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column74',value:'운송완료<br/>연월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column70',value:'운송료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column66',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column62',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column58',value:'운송완료<br/>횟수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column54',value:'협력업체명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column42',value:'사업자등록번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'계약연월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column50',value:'위탁<br/>계약금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column94',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column90',value:'합계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCd',inputType:'text',style:'',value:'',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'confirmYn',inputType:'text',style:'',value:'',width:'60',customFormatter:'scwin.f_customFormatter'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',style:'',value:'',width:'115'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',style:'',value:'',width:'170',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntCls',inputType:'text',style:'',value:'',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntCrn',inputType:'text',style:'',value:'',width:'85',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellVat',inputType:'text',style:'',value:'',width:'110',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellTot',inputType:'text',style:'',value:'',width:'130',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm2',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rsltsMth',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vehclNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vehclPosnNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'vehclRsltsMth',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'vehclAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'vehclVat',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'vehclTot',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number',readOnly:'false',maxLength:'20'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'drvQty',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'pchsClntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'pchsClntCrn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pchsRsltsMth',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'pchsAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'pchsVat',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'pchsTot',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'115',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'85',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column24',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'sellAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column23',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'sellVat\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'column22',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'sellTot\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column88',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column72',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'vehclAmt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column68',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'vehclVat\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'column64',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'vehclTot\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column60',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column52',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'pchsAmt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column96',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'pchsVat\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'column92',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'pchsTot\')',dataType:'number',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spn_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:' 점소가 전체로 조회했을 때만 전송, 전송취소할 수 있습니다.',class:'txt-dot txt-blue'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_check',label:'저장',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_check_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'실적확인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_cancel',label:'저장',style:'',type:'button',userAuth:'U',objType:'ctrlBtn','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전송취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U',objType:'ctrlBtn','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전송'}]}]}]}]}]}]}]}]}]})