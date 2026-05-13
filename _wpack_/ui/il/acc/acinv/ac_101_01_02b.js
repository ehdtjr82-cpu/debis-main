/*amd /ui/il/acc/acinv/ac_101_01_02b.xml 35503 a460b5f84e2333f50bd066dc9283776747bb55719f242faeaa45649f2aa196aa */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_invoiceList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'Invoice No(G)',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bilgIntendDt',name:'Billing Date',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mblno',name:'Master B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'House B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL NO',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'seaair',name:'해운 항공 Trans 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iogb',name:'Import/Export 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'Code',dataType:'text',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'Customer Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgPicNo',name:'PIC Code',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bilgPicNm',name:'PIC Name',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dept',name:'부서코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'deptnm',name:'부서코드 명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stdt',name:'ETD/ETA',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'exdt',name:'EX-Date',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crcCd',name:'Currency',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'exRateTyp',name:'적용환율 TYPE',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'exRate',name:'EX-Rate',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dpcd',name:'출발지(DEPARTURE) 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpnm',name:'출발지(DEPARTURE) 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dstn',name:'도착지 코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dsnm1',name:'도착지 명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'fltno',name:'편명 / vessel',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mblHblCls',name:'MASTER/HOUSE구분 (M/H)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'Invoice No',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'odrNo',name:'Order No',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntBilgDocNo',name:'Cust.INV No',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'confirmDt',name:'확인일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'slipNo',name:'Slip No',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'fromArea',name:'운송 FROM 지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromAreaNm',name:'운송 FROM 지역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromDt',name:'운송 FROM 일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'fromTm',name:'운송 FROM 시간',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'toArea',name:'운송 TO 지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toAreaNm',name:'운송 TO 지역명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'toDt',name:'운송 TO 일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'toTm',name:'운송 TO 시간',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'transTyp',name:'운송 Type',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'sumSellAmtFcrc',name:'Amount',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'sumSellAmt',name:'Amount(W)',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'sumVatAmt',name:'VAT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiPatternCd',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'name45',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'seaair',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iogb',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblno',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhbkgno',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dept',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptnm',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNm',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dateFrom',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dateTo',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgIntendDtFrom',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgIntendDtTo',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name16',dataType:'text'}},{T:1,N:'w2:key',A:{id:'createInvoice',name:'name17',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kcomcd',name:'name18',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mhno',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.acc.acinv.RetrieveInvoiceListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_invoiceList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_invoiceList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_mhno',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_mhno","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_mhno_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/js/il/ilcommon.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.hid_kcomcd = "DBEX"; //대표거래처 코드
scwin.txt_countRow = ""; //검색 Count

scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.strPreDate = $c.date.addMonth($p, scwin.strCurDate, -1); //한달전

scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId; //사용자
scwin.processFlag = ""; //처리 결과를 체크하는 Flag

scwin.params = "";
scwin.seaair = "";
scwin.iogb = "";
scwin.onpageload = function () {
  //udc_fromToCalendar.setInitDate(scwin.strPreDate,scwin.strCurDate); //udc
  scwin.params = $c.data.getParameter($p);
  scwin.seaair = scwin.params.seaair;
  scwin.iogb = scwin.params.iogb;
  scwin.f_DefaultValue();
  scwin.processFlag = "INIT";
  cnd_ed_mblno.focus();
};
scwin.f_DefaultValue = function () {
  cnd_lc_seaair.setValue(scwin.seaair);
  cnd_lc_iogb.setValue(scwin.iogb);
  udc_fromToCalendar.setInitDate(scwin.strPreDate, scwin.strCurDate); //udc
};

//초기화
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
};

//customer pop(거래처)
scwin.udc_ilcomCode_bilg_onclickEvent = function (e) {
  udc_ilcomCode_bilg.ilCommonPopUp(scwin.udc_ilcomCode_bilg_callBackFunc, cnd_ed_bilgClntNo.getValue(), cnd_ed_bilgClntNm.getValue(), null, "5", "Customer", null, null, null, null, null, null, null, null, "F", null, null);
};
scwin.udc_ilcomCode_bilg_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, cnd_ed_bilgClntNo, cnd_ed_bilgClntNm);
  console.log(ret);
};
scwin.udc_ilcomCode_bilg_onblurCodeEvent = function (e) {
  if (cnd_ed_bilgClntNo.getValue() === "") {
    cnd_ed_bilgClntNm.setValue("");
  } else {
    udc_ilcomCode_bilg.ilCommonPopUp(scwin.udc_ilcomCode_bilg_callBackFunc, cnd_ed_bilgClntNo.getValue(), "", "T", "5", "Customer", null, null, null, null, null, null, null, null, "F", null, null);
  }
};
scwin.udc_ilcomCode_bilg_onviewchangeNameEvent = function (info) {
  if (cnd_ed_bilgClntNm.getValue() === "") {
    cnd_ed_bilgClntNo.setValue("");
  }
};

//Department pop
scwin.udc_ilcomCode_dept_onclickEvent = function (e) {
  udc_ilcomCode_dept.ilCommonPopUp(scwin.udc_ilcomCode_dept_callBackFunc, cnd_ed_dept.getValue(), cnd_ed_deptnm.getValue(), null, "2", "Code, Name", null, null, null, null, null, null, null, null, "F", "Department,Code,Name", null);
};
scwin.udc_ilcomCode_dept_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, cnd_ed_dept, cnd_ed_deptnm);
  console.log(ret);
};
scwin.udc_ilcomCode_dept_onblurCodeEvent = function (e) {
  if (cnd_ed_dept.getValue() === "") {
    cnd_ed_deptnm.setValue("");
  } else {
    udc_ilcomCode_dept.ilCommonPopUp(scwin.udc_ilcomCode_dept_callBackFunc, cnd_ed_dept.getValue(), "", "T", "2", "Code, Name", null, null, null, null, null, null, null, null, "F", "Department,Code,Name", null);
  }
};
scwin.udc_ilcomCode_dept_onviewchangeNameEvent = function (info) {
  if (cnd_ed_deptnm.getValue() === "") {
    cnd_ed_dept.setValue("");
  }
};

//조회
scwin.btn_retrieve_onclick = async function (e) {
  if (cnd_ed_dateFrom.getValue() == "" || cnd_ed_dateTo.getValue() == "") {
    //$c.gus.cfAlertMsg(E_MSG_CM_ERR_002, Array("ETD/ETA")); //il공통의 값을 표출함.
    await $c.win.alert($p, "ETD/ETA is mandatory.");
    cnd_ed_dateFrom.focus();
    return;
  }

  //dataMap Binding...
  dma_search.set("kcomcd", scwin.hid_kcomcd);
  dma_search.set("seaair", cnd_lc_seaair.getValue());
  dma_search.set("iogb", cnd_lc_iogb.getValue());
  dma_search.set("mhno", cnd_lc_mhno.getValue());
  dma_search.set("mblno", cnd_ed_mblno.getValue());
  dma_search.set("blno", cnd_ed_blno.getValue());
  dma_search.set("hhbkgno", cnd_ed_hhbkgno.getValue());
  dma_search.set("certiNo", cnd_ed_certiNo.getValue());
  dma_search.set("dept", cnd_ed_dept.getValue());
  dma_search.set("deptnm", cnd_ed_deptnm.getValue());
  dma_search.set("bilgClntNo", cnd_ed_bilgClntNo.getValue());
  dma_search.set("bilgClntNm", cnd_ed_bilgClntNm.getValue());
  dma_search.set("dateFrom", cnd_ed_dateFrom.getValue());
  dma_search.set("dateTo", cnd_ed_dateTo.getValue());
  dma_search.set("bilgIntendDtFrom", cnd_ed_bilgIntendDtFrom.getValue());
  dma_search.set("bilgIntendDtTo", cnd_ed_bilgIntendDtTo.getValue());
  dma_search.set("odrNo", cnd_ed_odrNo.getValue());
  dma_search.set("createInvoice", cnd_lc_createInvoice.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//조회callback
scwin.sbm_retrieve_submitdone = function () {
  let nCnt = ds_invoiceList.getRowCount();
  if (nCnt == 0) {
    $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
    total.setValue(nCnt);
    scwin.processFlag = "INIT";
  } else {
    gr_invoiceList.setFocusedCell(0, 0);
    total.setValue(nCnt);
  }
};

//House B/L No kill focus event
scwin.cnd_ed_blno_onblur = function (e) {
  scwin.f_MhnoLoading("H", cnd_ed_blno.getValue());
};
scwin.cnd_ed_mblno_onblur = function (e) {
  scwin.f_MhnoLoading("M", cnd_ed_mblno.getValue());
};
scwin.f_MhnoLoading = async function (mhgb, blno) {
  let strClntNo = "";
  strClntNo = blno;
  if (strClntNo.length > 0) {
    param1 = strClntNo;
    if (cnd_lc_seaair.getValue() == "A") {
      if (mhgb == "M") {
        sbm_mhno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveAirMasterMhnoListCombo&param1=" + param1 + "&param2=" + cnd_lc_iogb.getValue();
        await $c.sbm.execute($p, sbm_mhno);
      } else {
        sbm_mhno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveAirHouseMhnoListCombo&param1=" + param1 + "&param2=" + cnd_lc_iogb.getValue();
        await $c.sbm.execute($p, sbm_mhno);
      }
    } else {
      if (mhgb == "M") {
        sbm_mhno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveSeaMasterMhnoListCombo&param1=" + param1 + "&param2=" + cnd_lc_iogb.getValue();
        await $c.sbm.execute($p, sbm_mhno);
      } else {
        sbm_mhno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveSeaHouseMhnoListCombo&param1=" + param1 + "&param2=" + cnd_lc_iogb.getValue();
        await $c.sbm.execute($p, sbm_mhno);
      }
    }
  }
};

//grid DB click event
scwin.gr_invoiceList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex > -1) {
    let paramJson = {
      seaair: ds_invoiceList.getCellData(rowIndex, "seaair"),
      iogb: ds_invoiceList.getCellData(rowIndex, "iogb"),
      mblno: ds_invoiceList.getCellData(rowIndex, "mblno"),
      blno: ds_invoiceList.getCellData(rowIndex, "blno"),
      mhno: ds_invoiceList.getCellData(rowIndex, "mhno"),
      prtnGrpNo: ds_invoiceList.getCellData(rowIndex, "prtnGrpNo"),
      bilgClntNo: ds_invoiceList.getCellData(rowIndex, "bilgClntNo")
    };

    //let strPath = "/il/acc/acinv/ac_101_01_01b.xml?seaair="+seaair+"&iogb="+iogb+"&mblno="+mblno+"&blno="+blno+"&mhno="+mhno+"&prtnGrpNo="+prtnGrpNo+"&bilgClntNo="+bilgClntNo;
    $c.win.openMenu($p, "Invoice", "/ui/il/acc/acinv/ac_101_01_01b.xml", "ac_101_01_01b.xml", paramJson, {
      openAction: "exist"
    });
  }
};
scwin.excelDw = async function () {
  let options = {
    fileName: "Invoice List.xlsx",
    sheetName: "Invoice List"
  };
  let grdObj = gr_invoiceList;
  let infoArr = {};
  if (ds_invoiceList.getTotalRow() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
    }
  }
};
scwin.cnd_ed_hhbkgno_oneditkeyup = function (info, e) {
  let val = info.newValue;
  this.setValue(val.toUpperCase());
};
scwin.cnd_ed_mblno_oneditkeyup = function (info, e) {
  let val = info.newValue;
  this.setValue(val.toUpperCase());
};
scwin.cnd_ed_odrNo_oneditkeyup = function (info, e) {
  let val = info.newValue;
  this.setValue(val.toUpperCase());
};
scwin.cnd_ed_certiNo_oneditkeyup = function (info, e) {
  let val = info.newValue;
  this.setValue(val.toUpperCase());
};
scwin.cnd_ed_blno_oneditkeyup = function (info, e) {
  let val = info.newValue;
  this.setValue(val.toUpperCase());
};
scwin.cnd_ed_prtnGrpNo_oneditkeyup = function (info, e) {
  let val = info.newValue;
  this.setValue(val.toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_retrieve',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Job Type',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'cnd_lc_seaair',chooseOption:'',style:'width:110px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Sea'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Air'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Trans'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'T'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Export/Import',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'cnd_lc_iogb',chooseOption:'',style:'width:208px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Booking No ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_hhbkgno',placeholder:'',style:'width:150px;',maxlength:'16',allowChar:'a-zA-Z0-9',validateOnInput:'','ev:oneditkeyup':'scwin.cnd_ed_hhbkgno_oneditkeyup'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'','ev:onblur':'scwin.cnd_ed_mblno_onblur',id:'cnd_ed_mblno',maxlength:'20',placeholder:'',style:'width:150px;',allowChar:'a-zA-Z0-9','ev:oneditkeyup':'scwin.cnd_ed_mblno_oneditkeyup'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House B/L No ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'','ev:onblur':'scwin.cnd_ed_blno_onblur',id:'cnd_ed_blno',maxlength:'20',placeholder:'',style:'width:150px;',allowChar:'a-zA-Z0-9','ev:oneditkeyup':'scwin.cnd_ed_blno_oneditkeyup'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'0-9a-zA-Z',codeId:'cnd_ed_bilgClntNo','ev:onblurCodeEvent':'scwin.udc_ilcomCode_bilg_onblurCodeEvent','ev:onclickEvent':'scwin.udc_ilcomCode_bilg_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_ilcomCode_bilg_onviewchangeNameEvent',id:'udc_ilcomCode_bilg',nameId:'cnd_ed_bilgClntNm',popupID:'',selectID:'retrieveEngClntInfo',style:'',validTitle:'',maxlengthCode:'6',codeWidth:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'ETD/ETA ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'cnd_ed_dateFrom',edToId:'cnd_ed_dateTo',id:'udc_fromToCalendar',mandatoryFrom:'true',mandatoryTo:'true',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Console No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'cnd_lc_mhno',ref:'',style:'width:150px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_mhno'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Order No ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_odrNo',maxlength:'14',placeholder:'',style:'width:150px;',allowChar:'a-zA-Z0-9','ev:oneditkeyup':'scwin.cnd_ed_odrNo_oneditkeyup'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Department',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'0-9a-zA-Z',codeId:'cnd_ed_dept','ev:onblurCodeEvent':'scwin.udc_ilcomCode_dept_onblurCodeEvent','ev:onclickEvent':'scwin.udc_ilcomCode_dept_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_ilcomCode_dept_onviewchangeNameEvent',id:'udc_ilcomCode_dept',maxlengthCode:'6',nameId:'cnd_ed_deptnm',popupID:'',selectID:'retrieveOpDeptCdInfo',style:'',validTitle:'',codeWidth:'50'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Billing Date ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'cnd_ed_bilgIntendDtFrom',edToId:'cnd_ed_bilgIntendDtTo',id:'udc_fromToCalendar_bill',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Invoice No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_certiNo',maxlength:'14',placeholder:'',style:'width:150px;',allowChar:'a-zA-Z0-9','ev:oneditkeyup':'scwin.cnd_ed_certiNo_oneditkeyup'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Invoice Create ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'cnd_lc_createInvoice',ref:'',style:'width:148px; height:21px; ',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ALL'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Not Create'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Create'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Invoice Group No ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_prtnGrpNo',maxlength:'14',placeholder:'',style:'width:150px;',allowChar:'a-zA-Z0-9','ev:oneditkeyup':'scwin.cnd_ed_prtnGrpNo_oneditkeyup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'Y',gridUpYn:'N',gridID:'gr_invoiceList',grdDownOpts:'{"fileName":"Invoice List.xlsx", "sheetName": "Invoice List"}',gridDownFn:'scwin.excelDw',gridDownUserAuth:'X',btnPlusYn:'Y',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_invoiceList',id:'gr_invoiceList',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',focusMode:'row',focusMove:'true','ev:oncelldblclick':'scwin.gr_invoiceList_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'법인코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Invoice No(G)',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'Billing Date',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'Master B/L No',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'House B/L No',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'CONSOL NO',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'해운 항공 Trans 구분',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'Import/Export 구분',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'Code',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'Customer Name',width:'130',sortable:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column75',value:'PIC Code',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column73',value:'PIC Name',displayMode:'label',sortable:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column71',value:'부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',value:'부서코드 명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'ETD/ETA',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',value:'EX-Date',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',value:'Currency',displayMode:'label',sortable:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column61',value:'적용환율 TYPE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'EX-Rate',displayMode:'label',sortable:''}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column57',value:'출발지(DEPARTURE) 코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column55',value:'출발지(DEPARTURE) 명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column53',value:'도착지 코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'도착지 명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column49',value:'편명 / vessel',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column47',value:'MASTER/HOUSE구분 (M/H)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',value:'Invoice No',displayMode:'label',sortable:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',value:'Order No',displayMode:'label',sortable:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column41',value:'Cust.INV No',displayMode:'label',sortable:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',value:'확인일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'Slip No',displayMode:'label',sortable:''}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column35',value:'운송 FROM 지역코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column33',value:'운송 FROM 지역명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column31',value:'운송 FROM 일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column29',value:'운송 FROM 시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column27',value:'운송 TO 지역코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column21',value:'운송 TO 지역명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column23',value:'운송 TO 일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column25',value:'운송 TO 시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column83',value:'운송 Type',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column81',value:'Amount',displayMode:'label',sortable:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column77',value:'Amount(W)',displayMode:'label',sortable:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',value:'VAT',displayMode:'label',sortable:''}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'kcomcd',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prtnGrpNo',inputType:'text',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgIntendDt',inputType:'text',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mblno',inputType:'text',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blno',inputType:'text',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mhno',inputType:'text',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seaair',inputType:'text',width:'140',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'iogb',inputType:'text',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',width:'130'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgPicNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgPicNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dept',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'deptnm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stdt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'exdt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crcCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'exRateTyp',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'exRate',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'dpcd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'dpnm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dstn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dsnm1',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'fltno',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'mblHblCls',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'certiNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'odrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntBilgDocNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'confirmDt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'slipNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'fromArea',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'fromAreaNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'fromDt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'fromTm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'toArea',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'toAreaNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'toDt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'toTm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'transTyp',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sumSellAmtFcrc',displayMode:'label',dataType:'number',displayFormat:'#,##0.##',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sumSellAmt',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sumVatAmt',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})