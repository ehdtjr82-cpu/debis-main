/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_01_09b.xml 71798 fca47447ae0130173d2753f90425645915c4f3df54f4f8b760ceaa541be6e431 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_exchRtSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crcCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_txn'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptNm',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawAcctDeptCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_txncontents',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_txncontents_onrowpositionchange','ev:onbeforerowpositionchange':'scwin.ds_txncontents_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipDt',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crnNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnDt',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNm',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptNm',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatCrn',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frchCrn',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frchNm',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDistYn',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'termMgntYn',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empMgntYn',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtMgntYn',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizMgntYn',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frchNoYn',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductClsYn',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'limitAmt',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntYn',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroTaxClsCd',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'name42',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evidac',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'txnNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnContSeq',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidEchAcctSeq',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'name14',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ds_slipNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exchRt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdExchRt',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_getMaxCloseYm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closeYm',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evidClsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_evidClsCd',action:'/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=retrieveEvidInfo&param3=PCHS',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_evidClsCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_evidClsCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getMaxCloseYm',action:'/cm.bc.comnmgnt.closemgnt.RetrieveMaxCloseYmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search2","key":"IN_DS1"},{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_getMaxCloseYm_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.gnrlaccount.slipmgnt.ProcessSubsidiarySellSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_txn","key":"IN_DS1"},{"action":"modified","id":"ds_txncontents","key":"IN_DS2"},{"id":"ds_evidac","key":"IN_DS3"},{"id":"ds_slipNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_slipNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_exchRt',action:'/ac.fm.stdinfomgnt.RetrieveExchangeRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_exchRtSearch","key":"IN_DS1"},{"id":"ds_exchRt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_exchRt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_exchRt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getMaxCloseYm',action:'/cm.bc.comnmgnt.closemgnt.RetrieveMaxCloseYmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search2","key":"IN_DS1"},{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_getMaxCloseYm_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//파라미터로 넘어온 데이터 : 자회사 회계시스템 추가사항 
scwin.certiNo;
scwin.crn;
scwin.crnNm;
scwin.spplyAmt;
scwin.vat;
scwin.bilgClntNo;
scwin.bilgClntNm;
scwin.summary;
scwin.spplyDt;
scwin.slipDt;
scwin.acctYn;

// 전역 변수
scwin.edCoCd;
scwin.edCoClsCd;
scwin.strToDate = WebSquare.date.getCurrentServerDate();
scwin.login = $c.data.getMemInfo($p);
scwin.state = "Y";
scwin.delflag = "N";
scwin.slipKndCd = ACConstants.SLIPKNDCD_SUB_COMPANY_SELL; // 전표 종류 : 자회사 - 매출전표 
scwin.userHomeClsCd = scwin.login.userHomeClsCd; // 사용자소속구분코드  
scwin.vCoCd = scwin.login.coCd; // 회사코드 
scwin.slipKndNm = "경비전표";
scwin.slipDt = "";
scwin.vAcctYn = ""; // 항만안전관리비 계정 여부
scwin.vUpperAcctDeptCd = "";
scwin.vBizDomCd = ""; // 변동비구분
scwin.varCostClsCd = ""; // 소속구분
scwin.gBizDomCdClsCd = ""; // 구분값
scwin.rltSeq = 0; // 행복사여부
scwin.rowCopyYn = 0;
scwin.vCopyYn = 0;
scwin.vCoClsCd = scwin.login.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd; // 사용자소속구분코드   
scwin.isSubCompany = false;
scwin.acctDeptCdSub = "00698";
scwin.acctDeptNmSub = "인천북항 (타법인)";
scwin.onpageload = function () {
  scwin.certiNo = $c.data.getParameter($p, "certiNo");
  scwin.crn = $c.data.getParameter($p, "crn");
  scwin.crnNm = $c.data.getParameter($p, "crnNm");
  scwin.spplyAmt = $c.data.getParameter($p, "spplyAmt");
  scwin.vat = $c.data.getParameter($p, "vat");
  scwin.bilgClntNo = $c.data.getParameter($p, "bilgClntNo");
  scwin.bilgClntNm = $c.data.getParameter($p, "bilgClntNm");
  scwin.summary = $c.data.getParameter($p, "summary");
  scwin.spplyDt = $c.data.getParameter($p, "spplyDt");
  scwin.slipDt = $c.data.getParameter($p, "slipDt");
  scwin.acctYn = $c.data.getParameter($p, "acctYn");
  scwin.vAcctYn = scwin.acctYn;
  scwin.slipDt = scwin.slipDt;
};
scwin.onUdcCompleted = async function () {
  const codeOptions = [{
    grpCd: "FI004",
    compID: "acb_zeroTaxClsCd"
  }, {
    grpCd: "ZZ006",
    compID: "acb_crcCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = async function () {
  scwin.state = "Y";
  scwin.f_Header();
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableBtnOnly($p, [btn_bSave]);
  // img_crn.style.display = "none";
  $c.gus.cfDisableObjects($p, [img_acctCd, img_acctDeptCd, img_mgntEmpNo, img_vatDeclarAcctDeptCd, img_crn, img_mgntEmpNo]);
  $c.gus.cfDisableObjects($p, [ed_spplyAmtFcrc, ed_exchRt]);

  //증빙종류 조회
  $c.sbm.execute($p, sbm_evidClsCd);
  ed_slipAcctDeptCd.options.hidVal = "";
  scwin.f_checkPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, '1');
  scwin.f_AddRow();
  ed_slipDt.setValue(scwin.slipDt);
  scwin.getMaxCloseYm(); //마감년월 가져오기
  acb_crcCd.setValue(ACConstants.KOREA_WON);
  scwin.f_setCompanyInfo();
};
scwin.f_Header = function () {
  // 마감년월 조회 조건
  dma_search2.set("coCd", scwin.vCoCd);
  dma_txn.set("slipDt", scwin.slipDt);

  // Session 이용
  // dma_txn.set("slipAcctDeptCd", scwin.login.acctDeptCd);
  // dma_txn.set("slipAcctDeptNm", scwin.login.acctDeptNm);

  // 로그인사번,부서
  dma_txn.set("drawEmpNo", scwin.login.empNo);
  dma_txn.set("drawAcctDeptCd", scwin.acctDeptCdSub); //자회사 회계시스템 - 부서코드 셋팅
  dma_txn.set("certiNo", scwin.certiNo); //자회사 회계시스템 - 거래명세서번호

  ed_slipAcctDeptCd.options.hidVal = dma_txn.get("slipAcctDeptCd");

  // cfSetIMEModeActiveObjects([ed_summary]);
};

//-------------------------------------------------------------------------
// 전월 마감여부 
//-------------------------------------------------------------------------
scwin.getMaxCloseYm = function () {
  $c.sbm.execute($p, sbm_getMaxCloseYm);
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = async function () {
  // 사용자 구분이 자회사('SA')인 경우
  if (scwin.vUserHomeClsCd == ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.isSubCompany = true;
  } else {
    // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
    scwin.vCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  scwin.edCoCd = scwin.vCoCd;
  scwin.edCoClsCd = scwin.vCoClsCd;
};

//-------------------------------------------------------------------------
// Enable/Disable
//-------------------------------------------------------------------------
scwin.f_EnableYn = function (str) {
  if (str == 1) {
    $c.gus.cfEnableObjects($p, [ed_slipDt, ed_slipAcctDeptCd, ed_slipAcctDeptNm, img_slipAcctDeptCd]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_slipDt, ed_slipAcctDeptCd, ed_slipAcctDeptNm, img_slipAcctDeptCd]);
  }
};

//-------------------------------------------------------------------------
// 행추가체크
//-------------------------------------------------------------------------
scwin.f_AddRow = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_slipDt, ed_slipAcctDeptCd]))) return;
  if (ds_txncontents.getTotalRow() > 0) {
    scwin.f_Validation;
    if ((await scwin.f_Validation()) != true) return;
  }
  scwin.f_Add();
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_Add = function () {
  scwin.state = "N";
  scwin.delflag = "N";
  if (ds_txncontents.getCellData(ds_txncontents.getTotalRow(), "rltSeq") != 0 && ds_txncontents.getCellData(ds_txncontents.getTotalRow(), "rltSeq") != null) {
    scwin.rltSeq = parseInt(ds_txncontents.getCellData(ds_txncontents.getTotalRow(), "rltSeq")) + 1;
  } else {
    scwin.rltSeq = scwin.rltSeq + 1;
  }
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableBtnOnly($p, [btn_bSave]);
  $c.gus.cfDisableObjects($p, [ed_vatAmt, ed_vatDeclarAcctDeptNm, ed_crn, ed_crnNm, ed_mgntEmpNo, ed_mgntEmpNm, ed_vatCrn]);
  $c.gus.cfEnableObjects($p, [img_acctCd, img_acctDeptCd, img_vatDeclarAcctDeptCd]);
  var newRow;
  if (ds_txncontents.getTotalRow() <= 0) {
    newRow = ds_txncontents.insertRow();
  } else {
    newRow = ds_txncontents.insertRow(ds_txncontents.getTotalRow());
  }
  ds_txncontents.setRowPosition(newRow);
  ed_totalRow.setValue(ds_txncontents.getTotalRow());
  scwin.f_EnableYn(ds_txncontents.getTotalRow());
  acb_evidClsCd.setSelectedIndex(0);
  acb_crcCd.setValue("KRW");
  ed_vatYn.setValue(1);
  ed_rltSeq.setValue(scwin.rltSeq);

  //파라미터로 넘어온 데이터 : 자회사 회계시스템 추가사항   
  ed_slipAcctDeptCd.setValue(scwin.acctDeptCdSub); //발생부서    
  ed_slipAcctDeptNm.setValue(scwin.acctDeptNmSub);
  ed_crn.setValue(scwin.crn); //사업자등록번호  
  ed_crnNm.setValue(scwin.crnNm); //사업자명   
  ed_spplyAmt.setValue(scwin.spplyAmt); //공급가액 
  ed_vatAmt.setValue(scwin.vat); //부가세액  
  ed_acctDeptCd.setValue(scwin.acctDeptCdSub); //귀속부서코드 
  ed_acctDeptNm.setValue(scwin.acctDeptNmSub); //귀속부서명  
  ed_vatDeclarAcctDeptCd.setValue(scwin.acctDeptCdSub); //부가세신고부서코드 
  ed_vatDeclarAcctDeptNm.setValue(scwin.acctDeptNmSub); //부가세신고부명  
  ed_vatCrn.setValue("1218157774"); // 부가세사업자번호     	
  ed_mgntClntNo.setValue(scwin.bilgClntNo); //거래처번호 
  ed_mgntClntNm.setValue(scwin.bilgClntNm); //거래처명 
  ed_summary.setValue(scwin.summary); //적요   
  ed_txnDt.setValue(scwin.spplyDt); //거래일자   (2017.01.12 거래명세서 일자 -> 공급일자로 변경)

  // 항만안전관리비 계정여부에 따라 계정 설정
  if (scwin.vAcctYn == "Y") {
    ed_acctCd.setValue("4101250"); //계정코드
    ed_acctNm.setValue("항만안전관리매출"); //계정이름 
    ed_costClsCd.setValue("01"); //비용구분
    ed_acctClsCd.setValue("4"); //계정구분코드
  } else {
    ed_acctCd.setValue("4101010"); //계정코드
    ed_acctNm.setValue("일반매출"); //계정이름 
    ed_costClsCd.setValue("01"); //비용구분
    ed_acctClsCd.setValue("4"); //계정구분코드
  }

  //부가세액이 0 인경우 증빙종류는 영세율세금계산서로 셋팅
  if (ed_vatAmt.getValue() == "0" || ed_vatAmt.getValue() == "") {
    acb_evidClsCd.setValue("20");
  }
  ed_slipAcctDeptCd.options.hidVal = ed_slipAcctDeptCd.getValue();
  ed_crn.options.hidVal = ed_crn.getValue();
  ed_acctCd.options.hidVal = ed_acctCd.getValue(); //계정코드 
  ed_acctDeptCd.options.hidVal = ed_acctDeptCd.getValue();
  ed_vatDeclarAcctDeptCd.options.hidVal = ed_vatDeclarAcctDeptCd.getValue();
  ed_mgntClntNo.options.hidVal = ed_mgntClntNo.getValue();

  // scwin.f_SetGridFormat();
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_txncontents.getTotalRow() == 0) {
    await $c.win.alert($p, "데이타가 없습니다.");
    return;
  }
  if (dma_txn.getModifiedIndex().length == 0 && ds_txncontents.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  if (!(await scwin.f_Validation())) return;

  //증빙별금액체크
  for (i = 0; i < ds_txncontents.getTotalRow(); i++) {
    var spplayAmt = 0;
    var dcAmt = 0;
    var evidSum = 0;
    var vatAmt = 0;
    for (j = 0; j <= ds_evidac.getTotalRow(); j++) {
      if (ds_txncontents.getCellData(i, "rltSeq") == ds_evidac.getCellData(j, "rltSeq")) {
        evidSum = evidSum + Number(ds_evidac.getCellData(j, "amt"));
        spplyAmt = Number(ds_txncontents.getCellData(i, "spplyAmt"));
        vatAmt = Number(ds_txncontents.getCellData(i, "vatAmt"));
      }
    }
  }
  if ($c.gus.cfValidate($p, [gr_txncontents])) {
    if ((await $c.win.confirm($p, "발행하시겠습니까?")) == true) {
      // 증빙별계정구분 
      for (i = 0; i < ds_txncontents.getTotalRow(); i++) {
        if (ds_evidac.getTotalRow() == 0) {
          ds_txncontents.setCellData(i, "acctDistYn", "0");
        } else {
          for (j = 0; j < ds_evidac.getTotalRow(); j++) {
            if (ds_txncontents.getCellData(i, "rltSeq") == ds_evidac.getCellData(j, "rltSeq")) {
              ds_txncontents.setCellData(i, "acctDistYn", "1");
              break;
            } else {
              ds_txncontents.setCellData(i, "acctDistYn", "1");
            }
          }
        }
        ds_txncontents.setCellData(i, "coClsCd", scwin.vCoClsCd); // 회계_회사구분('CO035')
        ds_txncontents.setCellData(i, "coCd", scwin.vCoCd); // 소속 자회사  
      }
      ds_txncontents.setCellData(ds_txncontents.getTotalRow(), "slipKndCd", scwin.slipKndCd);
      if (scwin.vCoClsCd != "0" && $c.gus.cfIsNull($p, scwin.vCoCd)) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, Array("자회사인 경우는 귀속부서에 회사코드"));
        return;
      }
      dma_txn.set("slipKndCd", scwin.slipKndCd);
      ds_txncontents.setCellData(ds_txncontents.getTotalRow(), "deductClsCd", "2");
      $c.sbm.execute($p, sbm_save);
    }
  }
  scwin.varCostClsCd = "";
};

//-------------------------------------------------------------------------
// 히든값체크
//-------------------------------------------------------------------------

scwin.f_HiddenCheck = async function (str, msg) {
  if (str.getValue().trim() == "") return true;
  if (str.getValue().trim() != str.options.hidVal) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, [msg]);
    // str.SelectAll = "true";
    str.focus();
    return false;
  } else {
    return true;
  }
};

//-------------------------------------------------------------------------
// 체크
//------------------------------------------------------------------------- 
scwin.f_Validation = async function () {
  // 사업자번호 체크
  scwin.f_BizCheck();
  if (!(await $c.gus.cfValidate($p, [acb_evidClsCd, ed_slipDt, ed_slipAcctDeptCd, ed_acctCd, ed_acctDeptCd, ed_summary, ed_spplyAmt, ed_vatAmt, ed_crn, ed_mgntEmpNo, ed_txnDt, ed_crnNm, ed_vatDeclarAcctDeptCd, ed_mgntClntNo]))) return false;
  if (!(await scwin.f_HiddenCheck(ed_slipAcctDeptCd, "발행부서"))) return false;
  if (!(await scwin.f_HiddenCheck(ed_crn, "사업자번호"))) return false;
  if (!(await scwin.f_HiddenCheck(ed_acctCd, "계정"))) return false;
  if (!(await scwin.f_HiddenCheck(ed_acctDeptCd, "귀속부서"))) return false;
  if (!(await scwin.f_HiddenCheck(ed_vatDeclarAcctDeptCd, "부가세신고부서"))) return false;
  if (!(await scwin.f_HiddenCheck(ed_mgntEmpNo, "사원번호"))) return false;
  if (!(await scwin.f_HiddenCheck(ed_mgntClntNo, "거래처"))) return false;

  //증빙구분이 세금계산서일때 거래처 필수
  if (acb_evidClsCd.getValue() == "10") {
    if (!(await $c.gus.cfValidate($p, [ed_mgntEmpNo]))) return false;
  }

  //금액체크(금액=공급금액+부가세액)
  var amt = 0;
  amt = Number(Number(ed_spplyAmt.getValue().trim()) + Number(ed_vatAmt.getValue().trim()));
  if (Number(amt) > Number(ed_limitAmt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_048, Array("금액(공급금액+부가세액)", "한도액(" + ed_limitAmt.getValue() + ") "));
    ed_spplyAmt.focus();
    return false;
  }

  // 계정코드와 부서체크
  // ed_acctClsCd.value  :: 1^자산,2^부채,3^자본,4^수익,5^비용,6^원가
  // ed_costClsCd.value  :: 비용구분 : 01^원가,02^판관비,03^원가+판관비
  if (ed_costClsCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_018, Array("부서에 따른 비용구분코드", "비용구분코드를 등록"));
    ed_acctDeptCd.focus();
    return false;
  }
  if (ed_costClsCd.getValue() == "01" && ed_acctClsCd.getValue().trim() != "4") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, Array("부서와 계정"));
    ed_acctCd.focus();
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------

scwin.f_openPopUp = async function (flag, check, isCdYn) {
  var rtnList = new Array();
  switch (flag) {
    case '1':
      // 부서   
      var param = ed_slipDt.getValue().trim() + ",," + scwin.vCoCd + "," + scwin.vCoClsCd;
      rtnList = udc_retrieveAcctDeptCdInfo3.cfCommonPopUp(scwin.udc_retrieveAcctDeptCdInfo3_callBack, ed_slipAcctDeptCd.getValue().trim(), ed_slipAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '3':
      // 계정조회
      if (ed_acctDeptCd.getValue() == "") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, Array("귀속부서"));
        ed_acctDeptCd.focus();
        return;
      }
      var param = "";
      var pSqlId = "";
      param = "T," + ed_slipDt.getValue().trim() + ",4,,,," + ed_bizDomCd.getValue(); // 렌터카 고속일경우는 변고정비 다조회되도록 수정 - 08.04.21-신종민
      pSqlId = "retrieveAcctCdInfo";
      rtnList = udc_retrieveAcctCdInfo.cfCommonPopUp(scwin.udc_retrieveAcctCdInfo_callBack, ed_acctCd.getValue().trim(), ed_acctNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '4':
      // 부서
      var param = "," + ed_slipDt.getValue().trim() + ",0,," + scwin.vCoCd + "," + scwin.vCoClsCd;
      rtnList = udc_retrieveAcctDeptCdInfo2.cfCommonPopUp(scwin.udc_retrieveAcctDeptCdInfo2_callBack, ed_acctDeptCd.getValue().trim(), ed_acctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '7':
      // 사업자번호
      var param = '';
      var selectID = 'retrieveCrnInfo';
      rtnList = udc_retrieveCrnInfo.cfCommonPopUp(scwin.udc_retrieveCrnInfo_callBack, ed_crn.getValue().trim(), ed_crnNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '8':
      // 거래처
      var param = scwin.vCoCd + "," + scwin.vCoClsCd;
      rtnList = udc_retrieveAcEmpInfo.cfCommonPopUp(scwin.retrieveAcEmpInfo_callBack, ed_mgntEmpNo.getValue().trim(), ed_mgntEmpNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '10':
      // 거래처
      var param = ",,," + scwin.vCoCd;
      rtnList = udc_retrieveClntList.cfCommonPopUp(scwin.udc_retrieveClntList_callBack, ed_mgntClntNo.getValue().trim(), ed_mgntClntNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.udc_retrieveAcctDeptCdInfo3_callBack = async function (rtnList) {
  scwin.f_resultPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, rtnList);
  if (rtnList != null) {
    $c.gus.cfEnableObjects($p, [ed_acctCd, ed_acctNm, ed_acctDeptCd, ed_acctDeptNm, img_acctCd, img_acctDeptCd]);
    if (scwin.vBizDomCd == null || scwin.vBizDomCd == "") {
      if (rtnList[3] == "210" || rtnList[3] == "220") {
        scwin.gBizDomCdClsCd = "1";
      } else {
        scwin.gBizDomCdClsCd = "0";
      }
    } else {
      if (!(ed_acctCd.getValue() == null || ed_acctCd.getValue() == "")) {
        await $c.gus.cfAlertMsg($p, "발행부서를 수정할 경우에는 계정코드를 재입력하셔야 합니다.");
        ed_acctCd.setValue("");
        ed_acctCd.options.hidVal = "";
        ed_acctNm.setValue("");
      }
    }
    scwin.vUpperAcctDeptCd = rtnList[2];
    scwin.vBizDomCd = rtnList[3];
  }
  // scwin.f_SetGridFormat();
};
scwin.udc_retrieveAcctCdInfo_callBack = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_acctCd.setValue(rtnList[0]); //계정코드
    ed_acctNm.setValue(rtnList[1]); //계정명
    ed_acctCd.options.hidVal = rtnList[0]; // 히든값
    ed_acctClsCd.setValue(rtnList[2]); //계정구분
    //r_empMgntYn,r_termMgntYn,r_dtMgntYn,r_clntMgntYn
    scwin.f_AcctCd(rtnList[7], rtnList[6], rtnList[8], rtnList[5]);
  } else {
    ed_acctCd.setValue("");
    ed_acctNm.setValue("");
    ed_acctCd.options.hidVal = "";
    ed_acctClsCd.setValue("");
  }
};
scwin.udc_retrieveAcctDeptCdInfo2_callBack = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_acctDeptCd.setValue(rtnList[0]); //부서코드
    ed_acctDeptNm.setValue(rtnList[1]); //부서명
    //ed_vatDeclarAcctDeptCd.text  = rtnList[7];		//부가세신고부서
    ed_acctDeptCd.options.hidVal = rtnList[0]; // 히든값

    $c.gus.cfEnableObjects($p, [ed_vatDeclarAcctDeptCd, img_vatDeclarAcctDeptCd]);
    ed_costClsCd.setValue("" + rtnList[9]); //비용구분코드
    ed_bizDomCd.setValue("" + rtnList[3]); //사업영역코드 (변동비 계정 조회안되도록 수정-06.12.22-박병길)
    scwin.f_VatDeclarAcctDeptCd('2');
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
    ed_acctDeptCd.options.hidVal = "";
    ed_costClsCd.setValue("");
    ed_bizDomCd.setValue(""); //사업영역코드 (변동비 계정 조회안되도록 수정-06.12.22-박병길
  }
};
scwin.udc_retrieveCrnInfo_callBack = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_crn.setValue(rtnList[0]); //사업자번호
    ed_crnNm.setValue(rtnList[1]); //사업자명
    ed_crn.options.hidVal = rtnList[0]; // 히든값
    if (ed_frchNoYn.getValue() == "1") {
      ed_frchCrn.setValue(ed_crn.getValue().trim());
      ed_frchNm.setValue(ed_crnNm.getValue().trim());
    } else {
      ed_frchCrn.setValue("");
      ed_frchNm.setValue("");
    }
  } else {
    ed_crn.setValue("");
    ed_crnNm.setValue("");
    ed_crn.options.hidVal = "";
  }
};
scwin.retrieveAcEmpInfo_callBack = function (rtnList) {
  scwin.f_resultPopEd(ed_mgntEmpNo, ed_mgntEmpNm, rtnList);
};
scwin.udc_retrieveClntList_callBack = function (rtnList) {
  scwin.f_resultPopEd(ed_mgntClntNo, ed_mgntClntNm, rtnList);
};

//-------------------------------------------------------------------------
// 부가세귀속부서popup
//-------------------------------------------------------------------------

scwin.f_VatDeclarAcctDeptCd = async function (str) {
  if (ed_acctDeptCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, Array("귀속부서"));
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_acctDeptCd.focus();
    return;
  }
  ed_vatCrn.setValue("");
  var param = "," + ed_acctDeptCd.getValue() + ",1";
  var sqlID = "";
  var check = "";
  var popTemp = "";

  // popup 버튼 눌렀을경우
  if (str == "1") {
    param = "," + ed_acctDeptCd.getValue() + ",1," + scwin.vCoCd + "," + scwin.vCoClsCd + "," + ed_txnDt.getValue().substring(0, 4);
    check = "F";
    sqlID = "retrieveVatDeclarAcctDeptCd";
    popTemp = "";
    // 부서에서 넘어왔을 경우
  } else if (str == "2") {
    param = "," + ed_acctDeptCd.getValue() + "," + scwin.vCoCd + "," + scwin.vCoClsCd + "," + ed_txnDt.getValue().substring(0, 4);
    check = "T";
    ed_vatDeclarAcctDeptCd.setValue("");
    sqlID = "retrieveVatDeclarAcctDeptCdAcctDeptCd";
    popTemp = "ZZ";
    // 부가세신고부서에 값을넣고 명을 찾을 경우
  } else if (str == "3") {
    param = "," + ed_acctDeptCd.getValue() + ",1," + scwin.vCoCd + "," + scwin.vCoClsCd + "," + ed_txnDt.getValue().substring(0, 4);
    check = "T";
    sqlID = "retrieveVatDeclarAcctDeptCd";
    popTemp = "";
  }
  udc_retrieveVatDeclarAcctDeptCd.setSelectId(sqlID);
  rtnList = udc_retrieveVatDeclarAcctDeptCd.cfCommonPopUp(scwin.udc_retrieveVatDeclarAcctDeptCd_callBack, ed_vatDeclarAcctDeptCd.getValue().trim(), popTemp, check, null, null, null, null, param, null, null, null, null, null, null);
};
scwin.udc_retrieveVatDeclarAcctDeptCd_callBack = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_vatDeclarAcctDeptCd.setValue(rtnList[2]); //부가세부서코드
    ed_vatDeclarAcctDeptNm.setValue(rtnList[3]); //부가세부서명
    ed_vatCrn.setValue(rtnList[5]); //부가세사업자번호
    ed_vatDeclarAcctDeptCd.options.hidVal = rtnList[2]; //히든값
  } else {
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_vatDeclarAcctDeptNm.setValue("");
    ed_vatCrn.setValue("");
    ed_vatDeclarAcctDeptCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업체크
//------------------------------------------------------------------------- 
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  if (strCd.getValue().trim() == strCd.options.hidVal) return;
  strNm.setValue("");
  strCd.options.hidVal = "";
  if (strCd.getValue().trim() != "") scwin.f_openPopUp(flag, 'T');
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------

scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명
    strCd.options.hidVal = rtnList[0]; // 히든값
  } else {
    strCd.setValue("");
    strNm.setValue("");
    strCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
//  증빙구분조회시화면셋팅
//  r_bizMgntYn - 거래처관리여부=>사업자관리여부
//  r_vatYn - 부가세여부
//  r_cardNoYn - 카드번호여부
//  r_frchNoYn - 가맹점번호여부
//  r_deductClsYn - 공제구분여부
//  r_limitAmt - 한도금액
//-------------------------------------------------------------------------

scwin.f_EvidClsCd = function (r_bizMgntYn, r_vatYn, r_cardNoYn, r_frchNoYn, r_deductClsYn, r_limitAmt) {
  ed_bizMgntYn.setValue(r_bizMgntYn);
  if (acb_crcCd.getValue() == ACConstants.KOREA_WON) ed_vatYn.setValue(r_vatYn);else ed_vatYn.setValue(0);
  ed_frchNoYn.setValue(r_frchNoYn);
  ed_deductClsYn.setValue(r_deductClsYn);
  ed_limitAmt.setValue(r_limitAmt);

  // 부가세여부
  if (r_vatYn == "1") {
    ed_vatAmt.options.validExp = "부가세액:yes";
    $c.gus.cfEnableObjects($p, [ed_vatAmt]);
    //setAmt();
    //setSupplyAmt();
  } else {
    ed_vatAmt.setValue(0);
    ed_vatAmt.options.validExp = "부가세액:no";
    $c.gus.cfDisableObjects($p, [ed_vatAmt]);
    //setAmt();
  }

  // 사업자번호

  if (r_frchNoYn == "1" && r_bizMgntYn == "1" || r_frchNoYn == "0" && r_bizMgntYn == "1") {
    ed_frchCrn.setValue(ed_crn.getValue().trim());
    ed_frchNm.setValue(ed_crnNm.getValue().trim());
    // img_crn.style.display = "inline";
    ed_crn.options.validExp = "사업자번호:yes";
    ed_crnNm.options.validExp = "사업자명:yes:maxByteLength=50";
    $c.gus.cfEnableObjects($p, [ed_crn, img_crn]);
    $c.gus.cfDisableObjects($p, [ed_crnNm]);
    // alert("1");
  }
  if (r_frchNoYn == "1" && r_bizMgntYn == "0") {
    // img_crn.style.display = "none";
    ed_frchCrn.setValue(ed_crn.getValue().trim());
    //ed_frchNm.value=ed_crnNm.value.trim();
    ed_crn.options.validExp = "사업자번호:yes";
    ed_crnNm.options.validExp = "사업자명:yes:maxByteLength=50";
    // alert("2");
    $c.gus.cfEnableObjects($p, [ed_crn, ed_crnNm]);
  }
  if (r_frchNoYn == "0" && r_bizMgntYn == "0") {
    // img_crn.style.display = "none";
    ed_crn.setValue("");
    ed_crnNm.setValue("");
    ed_frchCrn.setValue("");
    ed_frchNm.setValue("");
    ed_crn.options.validExp = "사업자번호:no";
    ed_crnNm.options.validExp = "사업자명:no:maxByteLength=50";
    //alert("3");
    $c.gus.cfDisableObjects($p, [ed_crn, img_crn, ed_crnNm]);
  }
};

//-------------------------------------------------------------------------
//  사업자번호 체크
//-------------------------------------------------------------------------

scwin.f_BizCheck = function () {
  var r_bizMgntYn = ed_bizMgntYn.getValue();
  var r_frchNoYn = ed_frchNoYn.getValue();
  var r_crnLen = ed_crn.getValue().length;
  if (r_frchNoYn == "1" && r_bizMgntYn == "1" || r_frchNoYn == "0" && r_bizMgntYn == "1") {
    ed_crn.options.validExp = "사업자번호:yes";
  }
  if (r_frchNoYn == "1" && r_bizMgntYn == "0") {
    if (r_crnLen == 13) {
      ed_crn.options.validExp = "사업자번호:yes:ssn";
    } else if (r_crnLen == 10) {
      ed_crn.options.validExp = "사업자번호:yes:csn";
    }
  }
  if (r_frchNoYn == "0" && r_bizMgntYn == "0") {
    ed_crn.options.validExp = "사업자번호:no";
  }
};

//-------------------------------------------------------------------------
//  계정조회시화면셋팅
//  r_termMgntYn - 기간관리여부
//  r_empMgntYn - 사원관리여부
//  r_dtMgntYn - 일자관리여부
//  r_clntMgntYn - 거래처여부
//-------------------------------------------------------------------------

scwin.f_AcctCd = function (r_empMgntYn, r_termMgntYn, r_dtMgntYn, r_clntMgntYn) {
  ed_empMgntYn.setValue(r_empMgntYn);
  ed_termMgntYn.setValue(r_termMgntYn);
  ed_dtMgntYn.setValue(r_dtMgntYn);
  ed_clntMgntYn.setValue(r_clntMgntYn);

  // 사원번호여부
  if (r_empMgntYn == "1") {
    ed_mgntEmpNo.options.validExp = "사원번호:yes:format=000000";
    $c.gus.cfEnableObjects($p, [ed_mgntEmpNo, img_mgntEmpNo]);
  } else {
    ed_mgntEmpNo.setValue("");
    ed_mgntEmpNm.setValue("");
    ed_mgntEmpNo.options.validExp = "사원번호:no:format=000000";
    $c.gus.cfDisableObjects($p, [ed_mgntEmpNo, img_mgntEmpNo]);
  }

  // 기간관리여부
  /*
  if(r_termMgntYn=="1"){
           ed_mgntTermStDt.validExp="경비기간:yes:date=YYYYMMDD"
           ed_mgntTermEndDt.validExp="경비기간:yes:date=YYYYMMDD"
           cfEnableObjects([ed_mgntTermStDt, ed_mgntTermEndDt, img_mgntTermStDt, img_mgntTermEndDt]);
  }else{
           ed_mgntTermStDt.text="";
           ed_mgntTermEndDt.text="";
           ed_mgntTermStDt.validExp="경비기간:no:date=YYYYMMDD"
           ed_mgntTermEndDt.validExp="경비기간:no:date=YYYYMMDD"
           cfDisableObjects([ed_mgntTermStDt, ed_mgntTermEndDt, img_mgntTermStDt, img_mgntTermEndDt]);
  }
  */
  // 거래처여부
  /*
  if(r_clntMgntYn=="1"){
           ed_mgntClntNo.validExp="거래처:yes:format=000000"
           cfEnableObjects([ed_mgntClntNo, img_mgntClntNo]);
  }else{
               ed_mgntClntNo.text="";
             ed_mgntClntNm.value="";
             ed_mgntClntNo.validExp="거래처:no:format=000000"
               cfDisableObjects([ed_mgntClntNo, img_mgntClntNo]);
   }
   */
  // 일자관리여부  	
  /*
  if(parseInt(r_dtMgntYn)== "1"){
           ed_mgntDt.validExp="관리일자:yes:date=YYYYMMDD";
           cfEnableObjects([ed_mgntDt, img_mgntDt]);
   }else{
           ed_mgntDt.text="";
           ed_mgntDt.validExp="관리일자:no:date=YYYYMMDD";
           cfDisableObjects([ed_mgntDt, img_mgntDt]);
  }
  */
};

//-------------------------------------------------------------------------
// 그리드 포맷설정
//-------------------------------------------------------------------------
// function f_SetGridFormat() {
//     var className = gr_txncontents.className;

//     gr_txncontents.Redraw = 'false';

//     gr_txncontents.Format = '' +
//         ' <C> id=row    		value={currow}    	width=20   align=center </C>                    ' +
//         ' <C> id=evidClsNm  	name=증빙       	width=70   align=left </C>                              ' +
//         ' <C> id=txnDt  		name=계산서일자    	width=80   align=center Mask="XXXX/XX/XX" </C>      ' +
//         ' <C> id=acctCd       name=계정       	width=60   align=center </C>                            ' +
//         ' <C> id=acctNm       name=계정명         width=100  align=left   </C>                            ' +
//         ' <C> id=acctDeptNm   name=귀속부서       width=80   align=left   </C>                           ' +
//         ' <C> id=spplyAmt     name=공급가액       width=70   align=right   sumtext=@sum </C>             ' +
//         ' <C> id=vatAmt     	name=부가세액       width=70   align=right   sumtext=@sum </C>           ' +
//         ' <C> id=summary   	name=적요         	width=139  align=left   </C>                            ' +
//         ' <H> id=evidClsCd </H>                                                                     ' +
//         ' <H> id=vatDeclarAcctDeptCd </H>          ';

//     cfStyleGrid(gr_txncontents, className);
//     gr_txncontents.Redraw = "true";

// }  

//-------------------------------------------------------------------------
//  부가세액 셋팅
//-------------------------------------------------------------------------
scwin.setAmt = function () {
  // 부가세여부가 셋팅시 
  if (ed_vatYn.getValue() == "1") {
    //ed_vatAmt.text = Math.floor(ed_spplyAmt.text.trim() *(0.1/1));
    ed_vatAmt.setValue(Math.round(ed_spplyAmt.getValue().trim() * 0.1)); //버림->반올림 수정. 2012.07.09
  } else {
    ed_vatAmt.setValue(0);
  }
};

//-------------------------------------------------------------------------
//  공급금액 셋팅
//-------------------------------------------------------------------------
scwin.setSupplyAmt = function () {
  // 부가세여부가 셋팅시

  if (ed_vatYn.getValue() == "1") {
    ed_spplyAmt.setValue(Math.floor(ed_vatAmt.getValue().trim() * 10));
  }
};

//-------------------------------------------------------------------------
//  사업자명 입력시
//-------------------------------------------------------------------------

scwin.SetCrnNm = function () {
  if (ed_frchNoYn.getValue() == "1") {
    ed_frchNm.setValue(ed_crnNm.getValue().trim());
  }
};
scwin.f_CrnNm = function (row) {
  if (ed_crnNm.getValue() == "" && typeof ds_txncontents.getCellData(row, "frchNm") != "undefined") {
    ed_crnNm.setValue(ds_txncontents.getCellData(row, "frchNm"));
  }
};

//-------------------------------------------------------------------------
//  통화코드변경시
//-------------------------------------------------------------------------
scwin.crcCdChange = function () {
  //alert(lc_crcCd.BindColVal);

  if (acb_crcCd.getValue() == "" || acb_crcCd.getValue() == ACConstants.KOREA_WON) {
    $c.gus.cfDisableObjects($p, [ed_spplyAmtFcrc]);
    $c.gus.cfEnableObjects($p, [ed_spplyAmt, ed_vatAmt]);
    ed_exchRt.setValue(0);
    ed_spplyAmtFcrc.setValue(0);
    ed_spplyAmtFcrc.options.validExp = "외화금액:no:maxLength=13";
    //ed_amt.focus();
  } else {
    // 자금의 환율테이블 조회(통화코드,작성일자)
    // 통화코드가 외화일경우 외화금액 필수
    ed_spplyAmtFcrc.options.validExp = "외화금액:yes:notAllowed=0&maxLength=13";
    $c.gus.cfEnableObjects($p, [ed_spplyAmtFcrc]);
    $c.gus.cfDisableObjects($p, [ed_spplyAmt, ed_vatAmt]);
    ed_vatAmt.setValue(0);
    dma_exchRtSearch.set("crcCd", acb_crcCd.getValue());
    dma_exchRtSearch.set("stdDt", ed_slipDt.getValue());
    $c.sbm.execute($p, sbm_exchRt);
  }
};
scwin.udc_retrieveAcctDeptCdInfo3_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};
scwin.udc_retrieveAcctDeptCdInfo3_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, '1');
};
scwin.udc_retrieveCrnInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('7', 'F');
};
scwin.udc_retrieveCrnInfo_onblurCodeEvent = function (e) {
  if (ed_crn.getValue().trim() == ed_crn.options.hidVal) return;
  if (ed_frchNoYn.getValue() == "1") {
    ed_frchCrn.setValue(ed_crn.getValue().trim());
  } else {
    ed_frchCrn.setValue("");
  }
  if (ed_clntMgntYn.getValue() != "1" && ed_frchNoYn.getValue() == "1") {
    ed_crn.options.hidVal = ed_crn.getValue().trim();
  } else {
    ed_crnNm.setValue("");
    ed_crn.options.hidVal = "";
    if (ed_crn.getValue().trim() != "") scwin.f_openPopUp('7', 'T');
  }
};
scwin.udc_retrieveAcEmpInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('8', 'F');
};
scwin.udc_retrieveAcEmpInfo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_mgntEmpNo, ed_mgntEmpNm, '8');
};
scwin.udc_retrieveAcctDeptCdInfo2_onclickEvent = function (e) {
  scwin.f_openPopUp('4', 'F');
};
scwin.udc_retrieveAcctDeptCdInfo2_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_acctDeptCd, ed_acctDeptNm, '4');
};
scwin.udc_retrieveVatDeclarAcctDeptCd_onclickEvent = function (e) {
  scwin.f_VatDeclarAcctDeptCd('1');
};
scwin.udc_retrieveVatDeclarAcctDeptCd_onblurCodeEvent = function (e) {
  if (ed_vatDeclarAcctDeptCd.getValue().trim() == ed_vatDeclarAcctDeptCd.options.hidVal) return;
  ed_vatDeclarAcctDeptNm.setValue("");
  ed_vatCrn.setValue("");
  ed_vatDeclarAcctDeptCd.options.hidVal = "";
  if (ed_vatDeclarAcctDeptCd.getValue().trim() != "") scwin.f_VatDeclarAcctDeptCd('3');
};
scwin.udc_retrieveClntList_onclickEvent = function (e) {
  scwin.f_openPopUp('10', 'F');
};
scwin.udc_retrieveClntList_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_mgntClntNo, ed_mgntClntNm, '10');
};
scwin.udc_retrieveAcctCdInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('3', 'F');
};
scwin.udc_retrieveAcctCdInfo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_acctCd, ed_acctNm, '3');
};
scwin.ed_spplyAmtFcrc_onblur = function (e) {
  if (scwin.vCopyYn == 0) ed_spplyAmt.setValue(Math.floor(ed_spplyAmtFcrc.getValue().trim() * ed_exchRt.getValue().trim()));
};
scwin.ed_exchRt_onblur = function (e) {
  if (scwin.vCopyYn == 0) ed_spplyAmt.setValue(Math.floor(ed_spplyAmtFcrc.getValue().trim() * ed_exchRt.getValue().trim()));
};
scwin.acb_crcCd_onchange = function (info) {
  scwin.crcCdChange();
  if (acb_crcCd.getValue() == "" || acb_crcCd.getValue() == ACConstants.KOREA_WON) {
    $c.gus.cfDisableObjects($p, [ed_spplyAmtFcrc, ed_exchRt]);
    $c.gus.cfEnableObjects($p, [ed_spplyAmt]);
  } else {
    $c.gus.cfEnableObjects($p, [ed_spplyAmtFcrc, ed_exchRt]);
    $c.gus.cfDisableObjects($p, [ed_spplyAmt]);
  }
};
scwin.sbm_exchRt_submitdone = function (e) {
  ed_exchRt.setValue(ds_exchRt.getCellData(0, "stdExchRt"));
  if (acb_crcCd.getValue() == "" || acb_crcCd.getValue() == ACConstants.KOREA_WON) {
    $c.gus.cfDisableObjects($p, [ed_spplyAmtFcrc]);
    // $c.gus.cfDisableObj([ed_spplyAmtFcrc], true);
  } else {
    $c.gus.cfEnableObjects($p, [ed_spplyAmtFcrc]);
    // $c.gus.cfEnableObj([ed_spplyAmtFcrc], true);
  }
  ed_spplyAmtFcrc.focus();
  acb_crcCd.focus();
};
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    if (ds_slipNo.getCellData(0, "slipNo") != "") {
      $c.gus.cfShowSlipInfo($p, ds_slipNo.getCellData(0, "slipNo"));
    }
    scwin.state = "Y";
    scwin.delflag = "N";
    ds_txncontents.removeAll();
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfEnableAllBtn($p);
    scwin.slipDt = ed_slipDt.getValue();
    scwin.onpageload();

    // $c.gus.cfEnableObj([ed_slipDt], true);
    // $c.gus.cfEnableObj([ed_slipAcctDeptCd], true);
    // $c.gus.cfEnableObj([ed_slipAcctDeptNm], true);
    $c.gus.cfEnableObjects($p, [ed_slipDt]);
    $c.gus.cfEnableObjects($p, [ed_slipAcctDeptCd]);
    $c.gus.cfEnableObjects($p, [ed_slipAcctDeptNm]);
    scwin.rltSeq = 0;
  }
};
scwin.ds_txncontents_onrowpositionchange = function (info) {
  var row = info.newRowIndex;
  scwin.f_EvidClsCd(ds_txncontents.getCellData(row, "bizMgntYn"), ds_txncontents.getCellData(row, "vatYn"), ds_txncontents.getCellData(row, "cardNoYn"), ds_txncontents.getCellData(row, "frchNoYn"), ds_txncontents.getCellData(row, "deductClsYn"), ds_txncontents.getCellData(row, "limitAmt"));
  scwin.f_AcctCd(ds_txncontents.getCellData(row, "empMgntYn"), ds_txncontents.getCellData(row, "termMgntYn"), ds_txncontents.getCellData(row, "dtMgntYn"), ds_txncontents.getCellData(row, "clntMgntYn"));
  $c.gus.cfDisableObjects($p, [ed_acctNm, ed_acctDeptNm, ed_vatDeclarAcctDeptNm, ed_mgntEmpNm, ed_vatCrn, ed_mgntClntNm]);
  scwin.f_CrnNm(row);
  ed_slipAcctDeptCd.options.hidVal = dma_txn.get("slipAcctDeptCd");
  ed_crn.options.hidVal = ds_txncontents.getCellData(row, "crn");
  ed_acctCd.options.hidVal = ds_txncontents.getCellData(row, "acctCd");
  ed_acctDeptCd.options.hidVal = ds_txncontents.getCellData(row, "acctDeptCd");
  ed_vatDeclarAcctDeptCd.options.hidVal = ds_txncontents.getCellData(row, "vatDeclarAcctDeptCd");
  ed_mgntEmpNo.options.hidVal = ds_txncontents.getCellData(row, "mgntEmpNo");
  ed_mgntClntNo.options.hidVal = ds_txncontents.getCellData(row, "mgntClntNo");
  ed_slipAcctDeptCd.setValue(dma_txn.get("slipAcctDeptCd"));
  ed_crn.setValue(ds_txncontents.getCellData(row, "crn"));
  ed_acctCd.setValue(ds_txncontents.getCellData(row, "acctCd"));
  ed_acctDeptCd.setValue(ds_txncontents.getCellData(row, "acctDeptCd"));
  ed_vatDeclarAcctDeptCd.setValue(ds_txncontents.getCellData(row, "vatDeclarAcctDeptCd"));
  ed_mgntEmpNo.setValue(ds_txncontents.getCellData(row, "mgntEmpNo"));
  ed_mgntClntNo.setValue(ds_txncontents.getCellData(row, "mgntClntNo"));
  ed_mgntClntNm.setValue(ds_txncontents.getCellData(row, "mgntClntNm"));
};
scwin.ds_txncontents_onbeforerowpositionchange = async function (info) {
  if (ds_txncontents.getTotalRow() != 0 && scwin.delflag == "N") {
    scwin.state = "N";
    scwin.delflag = "N";
    return false;
  } else {
    scwin.state = "N";
    scwin.delflag = "N";
    return true;
  }
};
scwin.acb_evidClsCd_onchange = function (info) {
  var row = ds_evidClsCd.getMatchedIndex("col1", acb_evidClsCd.getValue());
  ed_evidClsNm.setValue(ds_evidClsCd.getCellData(row, "col2")); //증빙명
  scwin.f_EvidClsCd(ds_evidClsCd.getCellData(row, "col3"), ds_evidClsCd.getCellData(row, "col4"), ds_evidClsCd.getCellData(row, "col5"), ds_evidClsCd.getCellData(row, "col6"), ds_evidClsCd.getCellData(row, "col7"), ds_evidClsCd.getCellData(row, "col9"));
  if (acb_evidClsCd.getValue() == "10") {
    ed_mgntClntNo.options.validExp = "거래처:yes:format=000000";
    ed_mgntClntNo.options.mandatory = "true";
  } else {
    ed_mgntClntNo.options.validExp = "거래처:no:format=000000";
    ed_mgntClntNo.options.mandatory = "false";
  }

  //영세율계산서서인 경우, 영세율구분 선택가능 
  if (acb_evidClsCd.getValue() == "20") {
    $c.gus.cfEnableObjects($p, [acb_zeroTaxClsCd]);
    acb_zeroTaxClsCd.setSelectedIndex(0);
  } else {
    acb_zeroTaxClsCd.setValue("");
    $c.gus.cfDisableObjects($p, [acb_zeroTaxClsCd]);
  }
};
scwin.ed_txnDt_onblur = function (e) {
  // if(ed_vatDeclarAcctDeptCd.getValue() == null || ed_vatDeclarAcctDeptCd.getValue() == ""){
  //     ed_vatDeclarAcctDeptCd.options.hidVal = ""
  //     ed_vatDeclarAcctDeptCd.setValue("")
  //     ed_vatDeclarAcctDeptNm.setValue("")
  //     ed_vatCrn.setValue("")
  // }else{
  //     scwin.f_VatDeclarAcctDeptCd('2');
  // }

  ed_vatDeclarAcctDeptCd.options.hidVal = "";
  ed_vatDeclarAcctDeptCd.setValue("");
  ed_vatDeclarAcctDeptNm.setValue("");
  ed_vatCrn.setValue("");
};
scwin.sbm_getMaxCloseYm_submitdone = function (e) {
  var thisYm = WebSquare.date.getCurrentServerDate(); // 오늘일자 가져오기
  //최소 미마감월이 당월이 아닐때
  if (ds_getMaxCloseYm.getCellData(0, "closeYm") != thisYm.substr(0, 6)) {
    var closeYm = ds_getMaxCloseYm.getCellData(0, "closeYm");
    var firstDay = closeYm.substr(0, 4) + "/" + closeYm.substr(4, 2) + "/" + "01"; // 1일
    let lastDD = $c.date.getLastDateOfMonth($p, closeYm);
    // var lastDay =  closeYm.substr(0,4)+"/"+closeYm.substr(4,2)+"/" + new Date(closeYm.substr(0,4),closeYm.substr(4,2),0).getDate(); // 마지막날
    ed_slipDt.setValue(scwin.slipDt); //작성일자 셋팅
  } else {
    // var firstDay = thisYm.substr(0,4)+"/"+thisYm.substr(4,2)+"/"+"01";  //당월 1일
    // let lastDD    = $c.date.getLastDateOfMonth(thisYm.substr(0,6));
    // // var lastDay = thisYm.substr(0,4)+"/"+thisYm.substr(4,2)+"/"+ new Date(thisYm.substr(0,4),thisYm.substr(4,2),0).getDate(); //당월 마지막날
    // ica_postDt.setValue(lastDD);;
    ed_slipDt.setValue(scwin.slipDt); //작성일자 셋팅
  }
};
scwin.btn_bSave_onclick = function (e) {
  scwin.f_Save();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_slipDt',style:'',ref:'data:dma_txn.slipDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'발행부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo3',codeId:'ed_slipAcctDeptCd',validTitle:'발행부서',nameId:'ed_slipAcctDeptNm',style:'',refDataCollection:'dma_txn',code:'slipAcctDeptCd',name:'slipAcctDeptNm',mandatoryName:'true',maxlengthName:'12',allowCharCode:'0-9',maxlengthCode:'5',id:'udc_retrieveAcctDeptCdInfo3',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onclickEvent':'scwin.udc_retrieveAcctDeptCdInfo3_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveAcctDeptCdInfo3_onblurCodeEvent',btnId:'img_slipAcctDeptCd'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'증빙종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 150px;',allOption:'',id:'acb_evidClsCd',class:'',direction:'auto',ref:'data:ds_txncontents.evidClsCd',title:'증빙종류','ev:onchange':'scwin.acb_evidClsCd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_evidClsCd'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 150px;',allOption:'false',id:'acb_zeroTaxClsCd',class:'',direction:'auto',ref:'data:ds_txncontents.zeroTaxClsCd'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCrnInfo',codeId:'ed_crn',validTitle:'사업자번호',nameId:'ed_crnNm',style:'',mandatoryName:'true',allowCharCode:'0-9',maxlengthCode:'13',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',btnId:'img_crn',id:'udc_retrieveCrnInfo',refDataCollection:'ds_txncontents',code:'crn',name:'crnNm','ev:onclickEvent':'scwin.udc_retrieveCrnInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveCrnInfo_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'통화코드/환율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 150px;',allOption:'false',id:'acb_crcCd',class:'',direction:'auto',mandatory:'true',title:'통화코드',ref:'data:ds_txncontents.crcCd','ev:onchange':'scwin.acb_crcCd_onchange'}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_exchRt',class:'tar',dataType:'float',maxlength:'13',displayFormat:'#,###.##',ref:'data:ds_txncontents.exchRt','ev:onblur':'scwin.ed_exchRt_onblur'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'외화금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_spplyAmtFcrc',style:'width:200px;',dataType:'float',maxlength:'13',displayFormat:'#,###',ref:'data:ds_txncontents.spplyAmtFcrc','ev:onblur':'scwin.ed_spplyAmtFcrc_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계산서일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_txnDt',style:'',mandatory:'true',title:'계산서일자',ref:'data:ds_txncontents.txnDt','ev:onblur':'scwin.ed_txnDt_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'공급금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_spplyAmt',style:'width:200px;',dataType:'float',maxlength:'13',displayFormat:'#,###',title:'공급금액',mandatory:'true',ref:'data:ds_txncontents.spplyAmt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_vatAmt',style:'width: 302px;',dataType:'float',maxlength:'13',displayFormat:'#,###',ref:'data:ds_txncontents.vatAmt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사원번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcEmpInfo',codeId:'ed_mgntEmpNo',validTitle:'',nameId:'ed_mgntEmpNm',style:'',allowCharCode:'0-9',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',btnId:'img_mgntEmpNo',id:'udc_retrieveAcEmpInfo',refDataCollection:'ds_txncontents',code:'mgntEmpNo',name:'mgntEmpNm','ev:onclickEvent':'scwin.udc_retrieveAcEmpInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveAcEmpInfo_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo2',codeId:'ed_acctDeptCd',validTitle:'귀속부서',nameId:'ed_acctDeptNm',style:'',allowCharCode:'0-9',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',id:'udc_retrieveAcctDeptCdInfo2',btnId:'img_acctDeptCd',mandatoryCode:'true',maxlengthCode:'5',refDataCollection:'ds_txncontents',name:'acctDeptNm',code:'acctDeptCd','ev:onclickEvent':'scwin.udc_retrieveAcctDeptCdInfo2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveAcctDeptCdInfo2_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부가세신고부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveVatDeclarAcctDeptCd',codeId:'ed_vatDeclarAcctDeptCd',validTitle:'부가세신고부서',nameId:'ed_vatDeclarAcctDeptNm',style:'',allowCharCode:'0-9',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',mandatoryCode:'true',maxlengthCode:'5',btnId:'img_vatDeclarAcctDeptCd',id:'udc_retrieveVatDeclarAcctDeptCd',maxlengthName:'12',refDataCollection:'ds_txncontents',code:'vatDeclarAcctDeptCd',name:'vatDeclarAcctDeptNm','ev:onclickEvent':'scwin.udc_retrieveVatDeclarAcctDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveVatDeclarAcctDeptCd_onblurCodeEvent'}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_vatCrn',class:'',ref:'data:ds_txncontents.vatCrn'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntList',codeId:'ed_mgntClntNo',validTitle:'거래처',nameId:'ed_mgntClntNm',style:'',allowCharCode:'0-9',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',mandatoryCode:'true',maxlengthCode:'6',btnId:'img_mgntClntNo',id:'udc_retrieveClntList',refDataCollection:'ds_txncontents',name:'mgntClntNm',code:'mgntClntNo','ev:onclickEvent':'scwin.udc_retrieveClntList_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveClntList_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctCdInfo',codeId:'ed_acctCd',validTitle:'계정코드',nameId:'ed_acctNm',style:'',allowCharCode:'0-9',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',mandatoryCode:'true',maxlengthCode:'7',btnId:'img_acctCd',id:'udc_retrieveAcctCdInfo',refDataCollection:'ds_txncontents',code:'acctCd',name:'acctNm','ev:onclickEvent':'scwin.udc_retrieveAcctCdInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveAcctCdInfo_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_summary',style:'',maxlength:'100',mandatory:'true',maxByteLength:'100',title:'적요',ref:'data:ds_txncontents.summary'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td  bl0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'hideGroup',style:'display:none;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_rltSeq',style:'',maxlength:'100',mandatory:'',maxByteLength:'100',title:'',ref:'data:ds_txncontents.rltSeq'}},{T:1,N:'xf:input',A:{class:'',id:'ed_vatYn',style:'',maxlength:'100',mandatory:'',maxByteLength:'100',title:'',ref:'data:ds_txncontents.vatYn'}},{T:1,N:'xf:input',A:{class:'',id:'ed_frchNoYn',style:'',maxlength:'100',mandatory:'',maxByteLength:'100',title:'',ref:'data:ds_txncontents.frchNoYn'}},{T:1,N:'xf:input',A:{class:'',id:'ed_deductClsYn',style:'',maxlength:'100',mandatory:'',maxByteLength:'100',title:'',ref:'data:ds_txncontents.deductClsYn'}},{T:1,N:'xf:input',A:{class:'',id:'ed_limitAmt',style:'',maxlength:'100',mandatory:'',maxByteLength:'100',title:'',ref:'data:ds_txncontents.limitAmt'}},{T:1,N:'xf:input',A:{class:'',id:'ed_frchCrn',style:'',maxlength:'100',mandatory:'',maxByteLength:'100',title:'',ref:'data:ds_txncontents.frchCrn'}},{T:1,N:'xf:input',A:{class:'',id:'ed_frchNm',style:'',maxlength:'100',mandatory:'',maxByteLength:'100',title:'',ref:'data:ds_txncontents.frchNm'}},{T:1,N:'xf:input',A:{class:'',id:'ed_termMgntYn',style:'',maxlength:'100',mandatory:'',maxByteLength:'100',title:'',ref:'data:ds_txncontents.termMgntYn'}},{T:1,N:'xf:input',A:{class:'',id:'ed_clntMgntYn',style:'',maxlength:'100',mandatory:'',maxByteLength:'100',title:'',ref:'data:ds_txncontents.clntMgntYn'}},{T:1,N:'xf:input',A:{class:'',id:'ed_dtMgntYn',style:'',maxlength:'100',mandatory:'',maxByteLength:'100',title:'',ref:'data:ds_txncontents.dtMgntYn'}},{T:1,N:'xf:input',A:{class:'',id:'ed_bizMgntYn',style:'',maxlength:'100',mandatory:'',maxByteLength:'100',title:'',ref:'data:ds_txncontents.bizMgntYn'}},{T:1,N:'xf:input',A:{class:'',id:'ed_amt',style:'',maxlength:'100',mandatory:'',maxByteLength:'100',title:'',ref:'data:ds_txncontents.amt'}},{T:1,N:'xf:input',A:{class:'',id:'ed_empMgntYn',style:'',maxlength:'100',mandatory:'',maxByteLength:'100',title:'',ref:'data:ds_txncontents.empMgntYn'}},{T:1,N:'xf:input',A:{class:'',id:'ed_costClsCd',style:'',maxlength:'100',mandatory:'',maxByteLength:'100',title:'',ref:'data:ds_txncontents.costClsCd'}},{T:1,N:'xf:input',A:{class:'',id:'ed_acctClsCd',style:'',maxlength:'100',mandatory:'',maxByteLength:'100',title:'',ref:'data:ds_txncontents.acctClsCd'}},{T:1,N:'xf:input',A:{class:'',id:'ed_bizDomCd',style:'',maxlength:'100',mandatory:'',maxByteLength:'100',title:'',ref:'data:ds_txncontents.bizDomCd'}},{T:1,N:'xf:input',A:{class:'',id:'ed_evidClsNm',style:'',maxlength:'100',mandatory:'',maxByteLength:'100',title:'',ref:'data:ds_txncontents.evidClsNm'}}]}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',visibleRowNumFix:'true',dataList:'data:ds_txncontents',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_txncontents',visibleRowNum:'10',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',gridName:'매출전표',rowNumVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'증빙',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column38',value:'계산서일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'계정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column34',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column32',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'공급가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'부가세액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column22',value:'적요',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'evidClsNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'txnDt',value:'',displayMode:'label',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'spplyAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vatAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'spplyAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column41',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'vatAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRow',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'txt-dot txt-red',id:'',label:'차변계정은 외상매출금-일반으로 생성되고, 채권도 생성됨. ',style:''}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_bSave',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_bSave_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표발행'}]}]}]}]}]}]}]}]}]})