/*amd /ui/il/acc/acpay/ac_106_01_02b.xml 40938 744e36f69067be036abf917fdcff2689271fb21d9c8699b917fbb9767abcf9a5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mhno',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_paymentInvoiceList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'Invoice No(G)',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pchsIntendDt',name:'Billing Date',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mblno',name:'Master B/L No',dataType:''}},{T:1,N:'w2:column',A:{id:'blno',name:'House B/L No',dataType:''}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL NO',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'seaair',name:'해운 항공 Trans 구분',dataType:''}},{T:1,N:'w2:column',A:{id:'iogb',name:'Import/Export 구분',dataType:''}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'Code',dataType:'',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'Customer Name',dataType:''}},{T:1,N:'w2:column',A:{id:'pchsPicNo',name:'PIC Code',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pchsPicNm',name:'PIC Name',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dept',name:'부서코드',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'deptnm',name:'부서코드 명',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stdt',name:'ETD/ETA',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'exdt',name:'EX-Date',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crcCd',name:'Currency',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'exRateTyp',name:'적용환율 TYPE',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'exRate',name:'EX-Rate',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dpcd',name:'출발지(DEPARTURE) 코드',dataType:''}},{T:1,N:'w2:column',A:{id:'dpnm',name:'출발지(DEPARTURE) 명',dataType:''}},{T:1,N:'w2:column',A:{id:'dstn',name:'도착지 코드',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dsnm1',name:'도착지 명',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'fltno',name:'편명 / vessel',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mblHblCls',name:'MASTER/HOUSE구분 (M/H)',dataType:''}},{T:1,N:'w2:column',A:{id:'certiNo',name:'Invoice No',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'odrNo',name:'Order No',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntBilgDocNo',name:'Cust.INV No',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'prtnGrpNo_1',name:'Print No',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'confirmDt',name:'확인일자',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'slipNo',name:'Slip No',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'fromArea',name:'운송 FROM 지역코드',dataType:''}},{T:1,N:'w2:column',A:{id:'fromAreaNm',name:'운송 FROM 지역명',dataType:''}},{T:1,N:'w2:column',A:{id:'fromDt',name:'운송 FROM 일자',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'fromTm',name:'운송 FROM 시간',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'toArea',name:'운송 TO 지역코드',dataType:''}},{T:1,N:'w2:column',A:{id:'toAreaNm',name:'운송 TO 지역명',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'toDt',name:'운송 TO 일자',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'toTm',name:'운송 TO 시간',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'transTyp',name:'운송 Type',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'sumSellAmtFcrc',name:'Amount',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'sumSellAmt',name:'Amount(W)',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'sumVatAmt',name:'VAT',dataType:'',defaultValue:''}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'seaair',name:'해운 항공 Trans 구분',dataType:''}},{T:1,N:'w2:key',A:{id:'iogb',name:'Import/Export',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblno',name:'MASTER B/L NO',dataType:''}},{T:1,N:'w2:key',A:{id:'blno',name:'HOUSE B/L NO',dataType:''}},{T:1,N:'w2:key',A:{id:'mhno',name:'M/H NO',dataType:''}},{T:1,N:'w2:key',A:{id:'certiNo',name:'거래명세서번호',dataType:''}},{T:1,N:'w2:key',A:{id:'dept',name:'부서 코드',dataType:''}},{T:1,N:'w2:key',A:{id:'deptnm',name:'부서 코드명',dataType:''}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'청구처 코드',dataType:''}},{T:1,N:'w2:key',A:{id:'pchsClntNm',name:'청구처 코드명',dataType:''}},{T:1,N:'w2:key',A:{id:'dateFrom',name:'ETD/ETA From',dataType:''}},{T:1,N:'w2:key',A:{id:'dateTo',name:'ETD/ETA To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsIntendDtFrom',name:'Billing Date From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsIntendDtTo',name:'Billing Date To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:''}},{T:1,N:'w2:key',A:{id:'createPayment',name:'Payment 생성 유무',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dvgb',name:'전도금 구분',dataType:''}},{T:1,N:'w2:key',A:{id:'kcomcd',name:'대표거래처 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prtnGrpNo',name:'출력그룹번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_mhno',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_mhno","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_mhno_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.acc.acpay.RetrievePaymentInvoiceListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_paymentInvoiceList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_paymentInvoiceList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.hid_kcomcd = "DBEX"; //대표거래처 코드
scwin.txt_countRow = ""; //검색 Count

scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.strPreDate = $c.date.addMonth($p, scwin.strCurDate, -1); //한달전

scwin.userId = $c.data.getMemInfo($p, "userId"); //사용자
scwin.processFlag = ""; //처리 결과를 체크하는 Flag

scwin.params = "";
scwin.seaair = "";
scwin.iogb = "";
scwin.onpageload = function () {
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
  $c.gus.cfInitObjects($p, tb_retrieve, [cnd_rd_dvgb]);
};

//customer pop(거래처)
scwin.udc_ilcomCode_pchs_onclickEvent = function (e) {
  udc_ilcomCode_pchs.setSelectId('retrieveEngClntInfo');
  udc_ilcomCode_pchs.ilCommonPopUp(scwin.udc_ilcomCode_pchs_callBackFunc, cnd_ed_pchsClntNo.getValue(), cnd_ed_schsClntNm.getValue(), 'F',
  // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
  '5',
  // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  'Customer',
  // Title순서	                                                           
  '140,300',
  // 보여주는 각 컬럼들의 폭	                                               
  null,
  // 컬럼중에서 숨기는	컬럼 지정	                                       
  null,
  // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
  '500',
  // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
  '500',
  // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
  null,
  // 윈도우 위치 Y좌표	                                                   
  null,
  // 윈도우 위치 X좌표                                                       
  null,
  // 중복체크여부	("F")                                                      
  'F',
  // 전체검색허용여부	("F")                                                  
  'Customer Search,Customer Code,Customer Name'); // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")  
};
scwin.udc_ilcomCode_pchs_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, cnd_ed_pchsClntNo, cnd_ed_schsClntNm);
};
scwin.udc_ilcomCode_pchs_onblurCodeEvent = function (e) {
  if (cnd_ed_pchsClntNo.getValue() === "") {
    cnd_ed_schsClntNm.setValue("");
  } else {
    udc_ilcomCode_pchs.setSelectId('retrieveEngClntInfo');
    udc_ilcomCode_pchs.ilCommonPopUp(scwin.udc_ilcomCode_pchs_callBackFunc, cnd_ed_pchsClntNo.getValue(), cnd_ed_schsClntNm.getValue(), 'T',
    // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
    '5',
    // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
    'Customer',
    // Title순서	                                                           
    '140,300',
    // 보여주는 각 컬럼들의 폭	                                               
    null,
    // 컬럼중에서 숨기는	컬럼 지정	                                       
    null,
    // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
    '500',
    // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
    '500',
    // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
    null,
    // 윈도우 위치 Y좌표	                                                   
    null,
    // 윈도우 위치 X좌표                                                       
    null,
    // 중복체크여부	("F")                                                      
    'F',
    // 전체검색허용여부	("F")                                                  
    'Customer Search,Customer Code,Customer Name'); // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")  
  }
};
scwin.udc_ilcomCode_pchs_onviewchangeNameEvent = function (info) {
  udc_ilcomCode_pchs.setSelectId('retrieveEngClntInfo');
  udc_ilcomCode_pchs.ilCommonPopUp(scwin.udc_ilcomCode_pchs_callBackFunc, cnd_ed_pchsClntNo.getValue(), cnd_ed_schsClntNm.getValue(), 'T',
  // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
  '5',
  // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  'Customer',
  // Title순서	                                                           
  '140,300',
  // 보여주는 각 컬럼들의 폭	                                               
  null,
  // 컬럼중에서 숨기는	컬럼 지정	                                       
  null,
  // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
  '500',
  // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
  '500',
  // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
  null,
  // 윈도우 위치 Y좌표	                                                   
  null,
  // 윈도우 위치 X좌표                                                       
  null,
  // 중복체크여부	("F")                                                      
  'F',
  // 전체검색허용여부	("F")                                                  
  'Customer Search,Customer Code,Customer Name'); // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm") 
};

//Department pop
scwin.udc_ilcomCode_dept_onclickEvent = function (e) {
  udc_ilcomCode_dept.setSelectId('retrieveOpDeptCdInfo');
  udc_ilcomCode_dept.ilCommonPopUp(scwin.udc_ilcomCode_dept_callBackFunc, cnd_ed_dept.getValue(), cnd_ed_deptnm.getValue(), 'T', '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", "Department,Code,Name", "F");
};
scwin.udc_ilcomCode_dept_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, cnd_ed_dept, cnd_ed_deptnm);
};
scwin.udc_ilcomCode_dept_onblurCodeEvent = function (e) {
  if (cnd_ed_dept.getValue() === "") {
    cnd_ed_deptnm.setValue("");
  } else {
    udc_ilcomCode_dept.setSelectId('retrieveOpDeptCdInfo');
    udc_ilcomCode_dept.ilCommonPopUp(scwin.udc_ilcomCode_dept_callBackFunc, cnd_ed_dept.getValue(), cnd_ed_deptnm.getValue(), "T", '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", "Department,Code,Name", "F");
  }
};
scwin.udc_ilcomCode_dept_onviewchangeNameEvent = function (info) {
  udc_ilcomCode_dept.setSelectId('retrieveOpDeptCdInfo');
  udc_ilcomCode_dept.ilCommonPopUp(scwin.udc_ilcomCode_dept_callBackFunc, cnd_ed_dept.getValue(), cnd_ed_deptnm.getValue(), "T", '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", "Department,Code,Name", "F");
};

//조회
scwin.btn_retrieve_onclick = function (e) {
  console.log("조회 클릭!!!");
  if (cnd_ed_dateFrom.getValue() == "" || cnd_ed_dateTo.getValue() == "") {
    $c.win.alert($p, "ETD/ETA is mandatory.");
    cnd_ed_dateFrom.focus();
    return;
  }

  //dataMap Binding...
  dma_search.set("kcomcd", scwin.hid_kcomcd);
  dma_search.set("seaair", cnd_lc_seaair.getValue());
  dma_search.set("iogb", cnd_lc_iogb.getValue());
  dma_search.set("mblno", cnd_ed_mblno.getValue());
  dma_search.set("blno", cnd_ed_blno.getValue());
  dma_search.set("mhno", cnd_lc_mhno.getValue());
  dma_search.set("certiNo", cnd_ed_certiNo.getValue());
  dma_search.set("dept", cnd_ed_dept.getValue());
  dma_search.set("deptnm", cnd_ed_deptnm.getValue());
  dma_search.set("pchsClntNo", cnd_ed_pchsClntNo.getValue());
  dma_search.set("pchsClntNm", cnd_ed_schsClntNm.getValue());
  dma_search.set("dateFrom", cnd_ed_dateFrom.getValue());
  dma_search.set("dateTo", cnd_ed_dateTo.getValue());
  dma_search.set("pchsIntendDtFrom", cnd_ed_schsIntendDtFrom.getValue());
  dma_search.set("pchsIntendDtTo", cnd_ed_schsIntendDtTo.getValue());
  dma_search.set("odrNo", cnd_ed_odrNo.getValue());
  dma_search.set("createPayment", cnd_lc_createPayment.getValue());
  dma_search.set("dvgb", cnd_rd_dvgb.getValue());
  //README : ASIS에 보내지 않아서 서버코드 보고 추가했는데, 검색조건을 찾을 수 없어서 우선 주석처리. 이후 필요하면 활성화 할 것.
  //dma_search.set("prtnGrpNo",cnd_ed_prtnGrpNo.getValue());

  $c.sbm.execute($p, sbm_retrieve);
};

//조회callback
scwin.sbm_retrieve_submitdone = function () {
  let nCnt = ds_paymentInvoiceList.getRowCount();
  if (nCnt == 0) {
    $c.win.alert($p, E_MSG_CM_WRN_002);
    scwin.processFlag = "INIT";
  } else {
    gr_paymentInvoiceList.setFocusedCell(0, 0);
    total.setValue(nCnt);
  }
};
scwin.cnd_ed_blno_onblur = async function (e) {
  let val = cnd_ed_blno.getValue().toUpperCase();
  cnd_ed_blno.setValue(val);
  await scwin.f_MhnoLoading("H", val);
};
scwin.cnd_ed_mblno_onblur = async function (e) {
  let val = cnd_ed_mblno.getValue().toUpperCase();
  cnd_ed_mblno.setValue(val);
  await scwin.f_MhnoLoading("M", val);
};
scwin.f_MhnoLoading = async function (mhgb, blno) {
  //README : ASIS 버그를 방지하고자 추가
  //입력값이 비어서 오면 Console No 데이터 날림.(이후 조회에 영향을 미침)
  if (blno == null || blno.length < 1) {
    if (mhgb == "M" && cnd_ed_blno.getValue() != "") {
      //Master B/L No 값이 없이 왔을때.
      return; //House B/L No 는 있는데 Master B/L No 가 없을때는 House B/L No 기준으로 Console No 조회한걸로 인지하고 클리어하지 않음.
    } else if (mhgb == "H" && cnd_ed_mblno.getValue() != "") {
      //House B/L No 값이 없이 왔을때.
      return; //Master B/L No 는 있는데 House B/L No 가 없을때는 Master B/L No 기준으로 Console No 조회한걸로 인지하고 클리어하지 않음.
    }
    ds_mhno.removeAll();
    return;
  }
  if (cnd_lc_seaair.getValue() == "A") {
    if (mhgb == "M") {
      sbm_mhno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveAirMasterMhnoListCombo&param1=" + blno + "&param2=" + cnd_lc_iogb.getValue();
      await $c.sbm.execute($p, sbm_mhno);
    } else {
      sbm_mhno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveAirHouseMhnoListCombo&param1=" + blno + "&param2=" + cnd_lc_iogb.getValue();
      await $c.sbm.execute($p, sbm_mhno);
    }
  } else {
    if (mhgb == "M") {
      sbm_mhno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveSeaMasterMhnoListCombo&param1=" + blno + "&param2=" + cnd_lc_iogb.getValue();
      await $c.sbm.execute($p, sbm_mhno);
    } else {
      sbm_mhno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveSeaHouseMhnoListCombo&param1=" + blno + "&param2=" + cnd_lc_iogb.getValue();
      await $c.sbm.execute($p, sbm_mhno);
    }
  }
};

//grid DB click event
scwin.gr_paymentInvoiceList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex > -1) {
    let paramJson = {
      seaair: ds_paymentInvoiceList.getCellData(rowIndex, "seaair"),
      iogb: ds_paymentInvoiceList.getCellData(rowIndex, "iogb"),
      mblno: ds_paymentInvoiceList.getCellData(rowIndex, "mblno"),
      blno: ds_paymentInvoiceList.getCellData(rowIndex, "blno"),
      mhno: ds_paymentInvoiceList.getCellData(rowIndex, "mhno"),
      prtnGrpNo: ds_paymentInvoiceList.getCellData(rowIndex, "prtnGrpNo"),
      pchsClntNo: ds_paymentInvoiceList.getCellData(rowIndex, "pchsClntNo")
    };

    //let strPath = "/il/acc/acpay/ac_106_01_01b.jsp?seaair="+seaair+"&iogb="+iogb+"&mblno="+mblno+"&blno="+blno+"&prtnGrpNo="+prtnGrpNo+"&pchsClntNo="+pchsClntNo;
    $c.win.openMenu($p, "Payment Invoice", "/ui/il/acc/acpay/ac_106_01_01b.xml", "ac_106_01_01b.xml", paramJson, {
      openAction: "exist"
    });
    console.log(paramJson);
  }
};
scwin.excelDw = async function () {
  let options = {
    fileName: "Payment Invoice List.xlsx",
    sheetName: "Payment Invoice List"
  };
  let grdObj = gr_paymentInvoiceList;
  let infoArr = {};
  let rtn = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (rtn) {
    $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
  }
};
scwin.cnd_ed_certiNo_onblur = function (e) {
  cnd_ed_certiNo.setValue(cnd_ed_certiNo.getValue().toUpperCase());
};
scwin.cnd_ed_odrNo_onblur = function (e) {
  cnd_ed_odrNo.setValue(cnd_ed_odrNo.getValue().toUpperCase());
};
scwin.cnd_ed_prtnGrpNo_onblur = function (e) {
  cnd_ed_prtnGrpNo.setValue(cnd_ed_prtnGrpNo.getValue().toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_retrieve',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Job Type',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'cnd_lc_seaair',chooseOption:'',style:'width:85px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Sea'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Air'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Trans'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'T'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Export/Import',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'cnd_lc_iogb',chooseOption:'',style:'width:230px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'cnd_rd_dvgb',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ALL'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Credit'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전도금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Payment No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_certiNo',maxlength:'14',placeholder:'',style:'width:150px;text-transform:uppercase;',allowChar:'0-9a-zA-Z','ev:onblur':'scwin.cnd_ed_certiNo_onblur'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_mblno',placeholder:'',style:'width:208px;text-transform:uppercase;',maxlength:'20','ev:onblur':'scwin.cnd_ed_mblno_onblur',allowChar:'0-9a-zA-Z'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_blno',placeholder:'',style:'width:230px;text-transform:uppercase;',maxlength:'20','ev:onblur':'scwin.cnd_ed_blno_onblur',allowChar:'0-9a-zA-Z'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Console No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{id:'cnd_lc_mhno',chooseOption:'',style:'width:148px; height:21px; ',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_mhno'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETD/ETA',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'cnd_ed_dateFrom',edToId:'cnd_ed_dateTo'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',codeId:'cnd_ed_pchsClntNo','ev:onblurCodeEvent':'scwin.udc_ilcomCode_pchs_onblurCodeEvent','ev:onclickEvent':'scwin.udc_ilcomCode_pchs_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_ilcomCode_pchs_onviewchangeNameEvent',id:'udc_ilcomCode_pchs',maxlengthCode:'6',nameId:'cnd_ed_schsClntNm',popupID:'',selectID:'retrieveEngClntInfo',style:'',validTitle:'',allowCharCode:'0-9a-zA-Z'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Order No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_odrNo',maxlength:'14',placeholder:'',style:'width:150px;text-transform:uppercase;',allowChar:'0-9a-zA-Z','ev:onblur':'scwin.cnd_ed_odrNo_onblur'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Billing Date',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'cnd_ed_schsIntendDtFrom',edToId:'cnd_ed_schsIntendDtTo',id:'udc_fromToCalendar_sch',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Department',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',codeId:'cnd_ed_dept','ev:onblurCodeEvent':'scwin.udc_ilcomCode_dept_onblurCodeEvent','ev:onclickEvent':'scwin.udc_ilcomCode_dept_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_ilcomCode_dept_onviewchangeNameEvent',id:'udc_ilcomCode_dept',maxlengthCode:'6',nameId:'cnd_ed_deptnm',popupID:'',selectID:'retrieveOpDeptCdInfo',style:'',validTitle:'',allowCharCode:'0-9a-zA-Z'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Invoice Group No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_prtnGrpNo',maxlength:'14',placeholder:'',style:'width:150px;text-transform:uppercase;',allowChar:'0-9a-zA-Z','ev:onblur':'scwin.cnd_ed_prtnGrpNo_onblur'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Invoice Create',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'cnd_lc_createPayment',ref:'',style:'width:148px; height:21px; ',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ALL'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Not Create'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Create'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_paymentInvoiceList',grdDownOpts:'{"fileName":"Payment Invoice List.xlsx", "sheetName": "Payment Invoice List"}',btnPlusYn:'Y',gridDownYn:'Y',gridDownFn:'scwin.excelDw',btnUser:'Y',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_paymentInvoiceList',id:'gr_paymentInvoiceList',style:'',visibleRowNum:'13',visibleRowNumFix:'true',focusMove:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_paymentInvoiceList_oncelldblclick',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'법인코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Invoice No(G)',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'Billing Date',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'Master B/L No',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'House B/L No',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'CONSOL NO',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'해운 항공 Trans 구분',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'Import/Export 구분',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'Code',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'Customer Name',width:'150'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'PIC Code',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column57',value:'PIC Name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'부서코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'부서코드 명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'ETD/ETA',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'EX-Date',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'Currency',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',value:'적용환율 TYPE',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'EX-Rate',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column41',value:'출발지(DEPARTURE) 코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column39',value:'출발지(DEPARTURE) 명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'도착지 코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'도착지 명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'편명 / vessel',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column31',value:'MASTER/HOUSE구분 (M/H)',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'Invoice No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'Order No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'Cust.INV No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'Print No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'확인일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column77',value:'Slip No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column75',value:'운송 FROM 지역코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column73',value:'운송 FROM 지역명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column71',value:'운송 FROM 일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column69',value:'운송 FROM 시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column67',value:'운송 TO 지역코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column61',value:'운송 TO 지역명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column63',value:'운송 TO 일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column65',value:'운송 TO 시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column85',value:'운송 Type',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column83',value:'Amount',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',value:'Amount(W)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column81',value:'VAT',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'kcomcd',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prtnGrpNo',inputType:'text',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsIntendDt',inputType:'calendar',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mblno',inputType:'text',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blno',inputType:'text',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mhno',inputType:'text',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seaair',inputType:'text',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'iogb',inputType:'text',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsPicNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsPicNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dept',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'deptnm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'stdt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'exdt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crcCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'exRateTyp',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'exRate',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'dpcd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'dpnm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dstn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dsnm1',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fltno',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'mblHblCls',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'certiNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntBilgDocNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'prtnGrpNo_1',displayMode:'label',expression:'datalist(\'prtnGrpNo\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'confirmDt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'fromArea',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'fromAreaNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'fromDt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'fromTm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'toArea',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'toAreaNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'toDt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'toTm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'transTyp',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sumSellAmtFcrc',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sumSellAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sumVatAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})