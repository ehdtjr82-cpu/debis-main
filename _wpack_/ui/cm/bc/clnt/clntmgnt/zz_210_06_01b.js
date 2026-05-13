/*amd /ui/cm/bc/clnt/clntmgnt/zz_210_06_01b.xml 58821 6ae1cd55867163d9b4f0db4046897c585e3b797e8b6be5b827d2b9d0555c76a2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_customer',repeatNode:'map',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_customer_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addCrn',name:'종사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'아이디',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empEmail',name:'담당자Email',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empTelNo',name:'담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empFaxNo',name:'담당자Fax번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPersNm',name:'직원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntTelNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntEmail',name:'Email',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_customerM'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seq',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'addCrn',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empNm',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empEmail',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empTelNo',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empFaxNo',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntPersNm',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntDeptNm',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntTelNo',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntEmail',name:'name14',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_customerD',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_customerD_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docSeq',name:'계약서순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docClsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndYn',name:'전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDtm',name:'전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtYear',name:'계약기간(년)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStrdCd',name:'지급기준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDd',name:'지급일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payMthdCd',name:'지급수단',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docNm',name:'문서명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_file',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileNm',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seq',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveFileList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_customer'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seq',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'addCrn',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empNm',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empEmail',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empTelNo',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empFaxNo',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntPersNm',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntDeptNm',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntTelNo',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntEmail',name:'name14',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_payStrdCd',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'grpCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_payDd',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'grpCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_payStrdCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cdNm',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_customerD'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'chk',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'docClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'docNm',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seq',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'docSeq',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtStDt',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtEndDt',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtYear',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payStrdCd',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payDd',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payMthdCd',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sndYn',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sndDtm',name:'name14',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_payDd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cdNm',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_customer',action:'/cm.bc.clnt.clntmgnt.RetrieveCustomerInfoList2CMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_customer',target:'data:json,{"id":"ds_customer","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_customerD',action:'/cm.bc.clnt.clntmgnt.RetrieveCustomerDocInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_customerD',target:'data:json,{"id":"ds_customerD","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_Save',action:'/cm.bc.clnt.clntmgnt.SaveCustomerDetailInformation2CMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_customer","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_email',action:'/cm.bc.clnt.clntmgnt.SendCustomerContractDocEmailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_customerM","key":"IN_DS1"},{"id":"ds_customerD","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_email_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_payStrdCd',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_payStrdCd',target:'data:json,{"id":"ds_payStrdCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_payDd',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_payDd',target:'data:json,{"id":"ds_payDd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_payDd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_SaveDoc',action:'/cm.bc.clnt.clntmgnt.SaveCustomerDocInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_customerD","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_SaveDoc_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveFileList',action:'/cm.bc.clnt.clntmgnt.RetrieveContractDocFileListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_file","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_file","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId;
scwin.userNm = scwin.memJson.userNm;
scwin.search = "";
scwin.onpageload = function () {};

// UDC에 값 세팅 방법
// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = async function () {
  // console.log("----------- onUdcCompleted");
  // payMthdCd
  const codeOptions = [{
    grpCd: "ZZ960",
    compID: "gr_customerD:docClsCd"
  }, {
    grpCd: "FM041",
    compID: "gr_customerD:payStrdCd"
  }, {
    grpCd: "FM018",
    compID: "gr_customerD:payMthdCd",
    opt: {
      "range": "3, 99"
    }
  }
  // { grpCd: "ZZ522", compID: "gr_customerD:payDd" }, // 지급일 세팅이 안되어서 추가함
  ];
  $c.data.setCommonCode($p, codeOptions);

  // 조회된 지급일 값이 화면에 라벨로 보이도록 ds_payDd를 미리 세팅
  await scwin.f_payDdDsSet("ZZ522");
  scwin.f_EventInit();
};

//------------------------------------------------------------------------------------------
// 버튼이벤트(초기화,조회후,신규,수정,저장,삭제) 선택에 따른. 입력항목,버튼상태 설정, Start
//------------------------------------------------------------------------------------------
scwin.f_EventInit = function () {
  $c.gus.cfDisableObjects($p, [btn_AddRow]);
  $c.gus.cfDisableObjects($p, [btn_CanRow]);
  $c.gus.cfDisableObjects($p, [btn_DelRow]);
  $c.gus.cfDisableObjects($p, [btn_save]);
  $c.gus.cfDisableObjects($p, [btn_submit]);
  $c.gus.cfDisableObjects($p, [txt_clntNm, txt_crnNm, txt_empNm]);
};
scwin.f_EventSearch = function () {
  $c.gus.cfEnableObjects($p, [btn_AddRow]);
  $c.gus.cfEnableObjects($p, [btn_CanRow]);
  $c.gus.cfEnableObjects($p, [btn_DelRow]);
  $c.gus.cfEnableObjects($p, [btn_save]);
  $c.gus.cfEnableObjects($p, [btn_submit]);
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
};
scwin.btn_retrieve_onclick = async function () {
  await scwin.f_Retrieve("btn_click"); // 조회 버튼으로 조회했을때 첫번째 그리드의 첫번째 행이 선택되어야됨.
};

//-------------------------------------------------------------------------
// 거래처 정보 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (init) {
  if (init == "btn_click") {
    dma_customer.set("crn", ed_crn.getValue()); // ds_customer -> dma_customer
    dma_customer.set("clntNo", ed_clntNo.getValue());
    dma_customer.set("empNo", ed_empNo.getValue());
    scwin.search = "1";
    await scwin.submitExcute(sbm_customer);
  } else {
    dma_customer.set("crn", ed_crn.getValue()); // ds_customer -> dma_customer
    dma_customer.set("clntNo", ed_clntNo.getValue());
    dma_customer.set("empNo", ed_empNo.getValue());
    await scwin.submitExcute(sbm_customer);
  }
};

//-------------------------------------------------------------------------
//거래처 문서종류 조회
//-------------------------------------------------------------------------
scwin.f_retrieveDetail = async function (rowIndex) {
  let row = typeof rowIndex === "number" ? rowIndex : ds_customer.getRowPosition();
  if (row < 0 || ds_customer.getTotalRow() === 0) {
    ds_customerD.removeAll();
    return;
  }
  dma_customerD.set("clntNo", ds_customer.getCellData(row, "clntNo"));
  dma_customerD.set("seq", ds_customer.getCellData(row, "seq"));
  await scwin.submitExcute(sbm_customerD);
};

//-------------------------------------------------------------------------
//거래처 문서종류 조회
//-------------------------------------------------------------------------
scwin.f_retrieveFile = async function () {
  dma_customer.set("clntNo", dma_customer.get("clntNo")); // ds_condition -> dma_customer
  dma_customer.set("seq", dma_customer.get("seq"));
  await $c.sbm.execute($p, sbm_retrieveFileList);
};

//-------------------------------------------------------------------------
// 엑셀 출력 
//-------------------------------------------------------------------------
scwin.f_Excel = function () {
  if (ds_customer.getTotalRow() == 0) {
    $c.win.alert($p, "조회된 거래처 정보가 없습니다.");
    return;
  }
  if (ds_customer.getTotalRow() > 0) {
    // cfGridToExcel(gr_customer, '거래처 정보', 'C:\\거래처 정보.xls', 1 + 4 + 8 + 16);
    let sheetNameExcel = "거래처 정보";
    const grdObj = gr_customer;
    const infoArr = [];
    const options = {
      fileName: sheetNameExcel + ".xlsx",
      //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      sheetName: sheetNameExcel
    };
    $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
  }
};

//-------------------------------------------------------------------------
// 엑셀 출력2
//-------------------------------------------------------------------------
scwin.f_Excel2 = function () {
  if (ds_customerD.getTotalRow() == 0) {
    $c.win.alert($p, "조회된 거래처 문서가  없습니다.");
    return;
  }
  if (ds_customerD.getTotalRow() > 0) {
    // cfGridToExcel(gr_customerD, '거래처 문서', 'C:\거래처 문서.xls', 1 + 4 + 8 + 16);
    let sheetNameExcel = "거래처 문서";
    const grdObj = gr_customerD;
    const infoArr = [];
    const options = {
      fileName: sheetNameExcel + ".xlsx",
      //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      sheetName: sheetNameExcel
    };
    $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
  }
};
scwin.udc_empNo_onclickEvent = function (e) {
  scwin.f_openPopUp("", "empNo", "");
};

// 사업자
// for=ed_crn event=OnKillFocus()
scwin.udc_crn_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_crn, txt_crnNm, '2');
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (row, colid, sFlag) {
  //ed_coCd.text = vLoginCoCd;
  let rtnList = new Array();
  let param = "";
  switch (colid) {
    case '1':
      // 거래처
      //let param=",,,"+ed_coCd.text;
      param = "";
      rtnList = udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_noGrid_callback, ed_clntNo.getValue().trim(), txt_clntNm.getValue(), sFlag, null, null, null, null, param, null, null, null, null);
      scwin.f_resultPopEd(ed_clntNo, txt_clntNm, rtnList);
      break;
    case '2':
      // 사업자번호
      param = '';
      rtnList = udc_crn.cfCommonPopUp(scwin.udc_crn_udcCallback, ed_crn.getValue().trim(), txt_crnNm.getValue(), sFlag, null, null, null, null, param, null, null, null, null);
      scwin.f_resultPopEd(ed_crn, txt_crnNm, rtnList);
      break;
    case '3':
      // 사업자번호
      param = '';
      rtnList = udc_empNo.cfCommonPopUp(scwin.udc_empNo_callback, ed_empNo.getValue().trim(), txt_empNm.getValue(), sFlag, null, null, null, null, param, null, null, null, null);
      scwin.f_resultPopEd(ed_empNo, txt_empNm, rtnList);
      break;
    case 'clntNo':
      // 거래처
      rtnList = udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callback, ed_clntNo.getValue(), txt_clntNm.getValue(), 'F', null, null, null, null, null, "410", null, null, null);
      break;
    case 'acctDeptCd':
      // 귀속부서
      rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo6', ds_out.getValue(row, "acctDeptCd"), ds_out.getValue(row, "acctDeptNm"), 'F', null, null, null, null, null, null, null, null, null);
      if (rtnList != null) {
        if (rtnList[0] == "N/A") return;
        ds_out.setValue(row, "acctDeptCd", rtnList[0]); //계정코드
        ds_out.setValue(row, "acctDeptNm", rtnList[1]); //계정명
      } else {
        ds_out.setValue(row, "acctDeptCd", ""); //계정코드
        ds_out.setValue(row, "acctDeptNm", ""); //계정명
      }
      break;
    case 'empNo':
      // 작성자사번
      rtnList = udc_empNo.cfCommonPopUp(scwin.udc_empNo_callback,
      // , ds_out.getValue(row, "empNo")
      // , ds_out.getValue(row, "empNm")
      ed_empNo.getValue(), txt_empNm.getValue(), 'F', null, null, null, null, null, null, null, null, null);
      break;
    default:
      break;
  }
};

// 사업자번호 팝업 콜백
scwin.udc_crn_udcCallback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_crn.setValue(rtnList[0]); //거래처코드
    txt_crnNm.setValue(rtnList[1]); //거래처명명
  } else {
    ed_crn.setValue(""); //거래처코드
    txt_crnNm.setValue(""); //거래처명명
  }
};

// 사업자번호 팝업 (udc) 콜백
scwin.udc_clntNo_noGrid_callback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_clntNo.setValue(rtnList[0]); //거래처코드
    txt_clntNm.setValue(rtnList[1]); //거래처명명
  } else {
    ed_clntNo.setValue(""); //거래처코드
    txt_clntNm.setValue(""); //거래처명명
  }
};

// 거래처번호 팝업(그리드) 콜백
scwin.udc_clntNo_callback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ds_out.setValue(row, "clntNo", rtnList[0]); //계정코드
    ds_out.setValue(row, "clntNm", rtnList[1]); //계정명
  } else {
    ds_out.setValue(row, "clntNo", ""); //계정코드
    ds_out.setValue(row, "clntNm", ""); //계정명
  }
};
scwin.udc_empNo_callback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    // ds_out.setValue(row, "empNo", rtnList[0]);	//계정코드
    // ds_out.setValue(row, "empNm", rtnList[1]);	//계정명
    ed_empNo.setValue(rtnList[0]);
    txt_empNm.setValue(rtnList[1]);
  } else {
    // ds_out.setValue(row, "empNo", "");	//계정코드
    // ds_out.setValue(row, "empNm", "");	//계정명
    ed_empNo.setValue("");
    txt_empNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명
    strCd.setValue(rtnList[0]); // 히든값
  } else {
    strCd.setValue("");
    strNm.setValue("");
    strCd.setValue("");
  }
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  //setFileHeader();
  ds_customer.insertRow();
  let rowCnt = ds_customer.getTotalRow() - 1;
  ds_customer.setCellData(rowCnt, "clntNo", ed_clntNo.getValue());
  gr_customer.setFocusedCell(rowCnt, "clntNo", false);
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_Delete = function () {
  let row = ds_customer.rowPosition;
  let rowStatus = ds_customer.getRowStatusValue(row);
  if (rowStatus == "0") {
    ds_customer.deleteRow(row);
    gr_customer.setFocusedCell(row, "clntNo", false);
  } else if (rowStatus == "2") {
    ds_customer.deleteRow(row);
    ds_customer.removeRow(row);
    gr_customer.setFocusedCell(row - 1, "clntNo", false);
  }
};

// btn_CanRow2 행취소
scwin.cancelFunc = function () {
  ds_customer.undoRow(ds_customer.rowPosition);
  let row = ds_customer.rowPosition;
  let rowStatus = ds_customer.getRowStatusValue(row);
  if (rowStatus == "2") {
    ds_customer.deleteRow(row);
    ds_customer.removeRow(row);
    gr_customer.setFocusedCell(row - 1, "clntNo", false);
  }
};

//-------------------------------------------------------------------------
// 행추가 하단 detail 그리드
//-------------------------------------------------------------------------
scwin.f_detailAddRow = function () {
  //setFileHeader();
  ds_customerD.insertRow(); // ds_customerD.AddRow();
  let rowPos = ds_customer.getRowPosition();
  let rowDPos = ds_customerD.getTotalRow() - 1;
  let clntNoVal = ds_customer.getCellData(rowPos, "clntNo");
  let seqVal = ds_customer.getCellData(rowPos, "seq");
  ds_customerD.setCellData(rowDPos, "clntNo", clntNoVal);
  ds_customerD.setCellData(rowDPos, "seq", seqVal);
  let rowCnt = ds_customerD.getTotalRow() - 1;
  gr_customerD.setFocusedCell(rowCnt, "docNm", false);
};

//-------------------------------------------------------------------------
// 행삭제 하단 detail 그리드
//-------------------------------------------------------------------------
scwin.f_detailDelete = function () {
  let row = ds_customerD.rowPosition;
  let rowStatus = ds_customerD.getRowStatusValue(row);
  if (rowStatus == "0") {
    ds_customerD.deleteRow(row);
    gr_customer.setFocusedCell(row, "clntNo", false);
  } else if (rowStatus == "2") {
    ds_customerD.deleteRow(row);
    ds_customerD.removeRow(row);
    gr_customerD.setFocusedCell(row - 1, "docNm", false);
  }
};
scwin.cancel2 = function () {
  ds_customerD.undoRow(ds_customerD.rowPosition);
  let row = ds_customerD.rowPosition;
  let rowStatus = ds_customerD.getRowStatusValue(row);
  if (rowStatus == "2") {
    ds_customerD.deleteRow(row);
    ds_customerD.removeRow(row);
    gr_customerD.setFocusedCell(row - 1, "docNm", false);
  }
};

// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (!ds_customer.getModifiedIndex().length) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  let ret = await $c.gus.cfValidate($p, [gr_customer], null, true);
  if (!ret) {
    return;
  }
  if (ds_customer.getCellData(ds_customer.rowPosition, "clntNo") == "") {
    $c.win.alert($p, "거래처명은 필수값입니다.");
    return;
  }
  if (ds_customer.getCellData(ds_customer.rowPosition, "crn") == "") {
    $c.win.alert($p, "사업자번호는 필수값입니다.");
    return;
  }
  for (i = 0; i < ds_customer.getTotalRow(); i++) {
    if (ds_customer.getCellData(i, "empNm") == "") {
      ds_customer.setCellData(i, "empNo", "");
    }
  }
  let confirmVal = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmVal == true) {
    $c.sbm.execute($p, sbm_Save); // tr_Save.Post();
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_SaveDetail = async function () {
  if (!ds_customerD.getModifiedIndex().length) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  let ret = await $c.gus.cfValidate($p, [gr_customerD], null, true);
  if (!ret) {
    return;
  }
  for (let i = 0; i < ds_customerD.getTotalRow(); i++) {
    let v_stDt = ds_customerD.getCellData(i, "ctrtStDt");
    let v_ctrtEndDt = ds_customerD.getCellData(i, "ctrtEndDt");
    if (v_stDt.trim().length != 8 || v_ctrtEndDt.trim().length != 8 || !$c.gus.cfIsAfterDate($p, v_stDt, v_ctrtEndDt, false)) {
      $c.win.alert($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
      return false;
    }
  }
  let confirmVal = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmVal == true) {
    $c.sbm.execute($p, sbm_SaveDoc); // tr_SaveDoc.Post();
  }
};

//-------------------------------------------------------------------------
// 팝업체크
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  // if (strCd.getValue().trim() == strCd.getValue()) {
  //     return;
  // }
  strNm.setValue("");
  // strCd.setValue("");
  if (strCd.getValue() != "") {
    scwin.f_openPopUp('', flag, 'T');
  }
};

//-------------------------------------------------------------------------
// function name : f_openPopUpEmpNo
// function desc : GRID 담당자 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUpEmpNo = function () {
  let rtnList = new Array();
  rtnList = udc_grid_empNm.cfCommonPopUp(scwin.udc_grid_empNm_callback, '', ds_customer.getCellData(ds_customer.rowPosition, "empNm"), "T", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, null);
};
scwin.udc_grid_empNm_onblurNameEvent = function (e) {
  scwin.f_openPopUpEmpNo(gr_customer, ds_customer.getRowPosition(), "empNm");
};
scwin.gr_customer_ontextimageclick = function (rowIndex, columnIndex) {

  // scwin.f_openPopUpEmpNo(gr_customer, rowIndex, colId); // 담당자
};

// popup 호출 연결해야됨 그리드
scwin.empNm_imageClickFunction = function (rowIndex, colId, nowValue) {

  // scwin.f_openPopUpEmpNo(gr_customer, rowIndex, colId); // 담당자
};
scwin.gr_customer_onafteredit = function (rowIndex, columnIndex, value) {
  let colId = gr_customer.getColumnID(columnIndex);
  switch (colId) {
    case "clntNm":
      scwin.f_openPopUpClntNo(gr_customer, rowIndex, colId);
      break;
    case "crn":
      scwin.f_openPopUpCrn(gr_customer, rowIndex, colId); // 사업자등록번호
      break;
    case "empNm":
      scwin.f_openPopUpEmpNo(gr_customer, rowIndex, "empNm");
      break;
    default:
      break;
  }
};
scwin.udc_grid_empNm_callback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    ds_customer.setCellData(ds_customer.rowPosition, "empNo", rtnList[0]); //관리자ID
    ds_customer.setCellData(ds_customer.rowPosition, "empNm", rtnList[1]); //사용자명
  }
};

//-------------------------------------------------------------------------
// function name : f_openPopUpClntNo
// function desc : GRID 거래처 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUpClntNo = function () {
  let rtnList = new Array();
  rtnList = udc_grid_clntNm.cfCommonPopUp(scwin.udc_grid_clntNm_callback, '', ds_customer.getCellData(ds_customer.rowPosition, "clntNm"), 'T', null, null, null, null, null, "410", null, null, null);
};
scwin.udc_grid_clntNm_callback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    let rowPos = ds_customer.getRowPosition();
    ds_customer.setCellData(rowPos, "clntNo", rtnList[0]); //관리자ID
    ds_customer.setCellData(rowPos, "clntNm", rtnList[1]); //사용자명
    ds_customer.setCellData(rowPos, "crn", rtnList[4]); //사용자명
    ds_customer.setCellData(rowPos, "clntPersNm", rtnList[6]); //사용자명
  }
};

//-------------------------------------------------------------------------
// function name : f_openPopUpCrn
// function desc : GRID 사업자등록번호 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUpCrn = function () {
  let rtnList = new Array();
  rtnList = udc_crn.cfCommonPopUp(scwin.udc_crn_callback, ds_customer.getCellData(ds_customer.rowPosition, "crn"), '', 'T', null, null, null, null, null, null, null, null, null);
};
scwin.udc_crn_callback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    ds_customer.setCellData(ds_customer.rowPosition, "crn", rtnList[0]); // 관리자ID
  }
};

// popup 호출 연결해야됨 그리드
scwin.crn_imageClickFunction = function (rowIndex, colId, nowValue) {
  // scwin.f_openPopUpCrn(gr_customer, rowIndex, colId); // 사업자등록번호
};

//-------------------------------------------------------------------------
// 이메일  전송
//-------------------------------------------------------------------------
scwin.f_Submit = async function () {
  ds_customerM.setEmptyValue(); //ds_customerM.ClearData();
  scwin.f_CopyDataRow(ds_customer, ds_customerM, ds_customer.rowPosition);
  let confirmVal = await $c.win.confirm($p, "메일을 전송하시겠습니까?");
  if (confirmVal) {
    $c.sbm.execute($p, sbm_email); // tr_email.Post();
  }
};

//-------------------------------------------------------------------------
// File Download
//-------------------------------------------------------------------------
scwin.f_Download = function () {
  for (i = 0; i < ds_file.getTotalRow(); i++) {
    if (ds_file.getCellData(i, "chk") == "T") {
      $c.gus.cfDownloadFile($p, ds_file.getCellData(i, "docClsCd") + '.docx', 'cm/bc/clnt/contract/' + ds_file.getCellData(i, "docClsCd") + '.docx');
    }
  }
};

//-------------------------------------------------------------------------
// 데이터셋 Row 복사
//-------------------------------------------------------------------------
scwin.f_CopyDataRow = function (sourceDataset, targetDataset, sourceRow, targetRow, sourceColumns, targetColumns, actionAfterRowAdded) {
  try {
    if (sourceDataset == null) throw "원본 데이터셋이 정의되지 않았습니다.";
    if (targetDataset == null) throw "대상 데이터셋이 정의되지 않았습니다.";
    if (sourceColumns == null) sourceColumns = scwin.f_GetColumnNames(sourceDataset);
    if (targetColumns == null) targetColumns = sourceColumns;
    if (sourceRow == null) sourceRow = sourceDataset.rowPosition;
    if (targetRow == null) targetRow = scwin.f_AddDataRow(targetDataset);
    for (let i = 0; i < sourceColumns.length; i++) {
      if ($c.gus.cfIsNull($p, sourceColumns[i]) || $c.gus.cfIsNull($p, targetColumns[i])) continue;

      // targetDataset.getCellData(targetRow, targetColuㄴmns[i]) = sourceDataset.getCellData(sourceRow, sourceColumns[i]);
      if (actionAfterRowAdded != null) $p.getComponentById(actionAfterRowAdded);
    }
    return targetRow;
  } catch (e) {
    $c.win.alert($p, "[scwin.f_CopyDataRow]" + e);
  }
};

//-------------------------------------------------------------------------
// 데이터셋의 모든 컬럼명을 배열로 반환
//-------------------------------------------------------------------------
scwin.f_GetColumnNames = function (dataSet) {
  try {
    if (dataSet == null) throw "데이터셋이 정의되지 않았습니다.";
    if (dataSet.getTotalCol() == 0) return null; // CountColumn -> ds_customer.getTotalCol();

    let rtnArray = new Array(dataSet.getTotalCol());
    for (let i = 0; i < dataSet.getTotalCol(); i++) {
      rtnArray[i] = dataSet.getColumnID(i); // ColumnID -> ds_customer.getColumnID()
    }
    if (rtnArray.length == 0) return null;else return rtnArray;
  } catch (e) {
    $c.win.alert($p, "[scwin.f_GetColumnNames] " + e.Description); // Description -> ????
  }
};

//-------------------------------------------------------------------------
// 데이터셋의 행을 추가하고 RowPosition을 반환
//-------------------------------------------------------------------------
scwin.f_AddDataRow = function (dataSet) {
  if (dataSet.initializeType == "dataMap") {} else {
    dataSet.insertRow(); // dataSet.AddRow();
    return dataSet.rowPosition;
  }
};

//-----------------------------------------------------------------------------
//  지급주기 조회.
//-----------------------------------------------------------------------------
scwin.f_payStrdCdDsSet = async function (grpCd) {
  // 상의 하의 일체형 구분 별로 사이즈  조회.
  dma_payStrdCd.set("grpCd", grpCd);
  dma_payStrdCd.set("cd", "");
  dma_payStrdCd.set("cdNm", "");
  await scwin.submitExcute(sbm_payStrdCd);

  // const e = await $c.sbm.execute(sbm_payStrdCd); // ds_payStrdCd.Reset();

  // if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
  //     await scwin.submitdone(e);
  // };
};

//-----------------------------------------------------------------------------
//  지급일자 조회.
//-----------------------------------------------------------------------------
scwin.f_payDdDsSet = async function (grpCd) {
  // 상의 하의 일체형 구분 별로 사이즈  조회.
  // ds_payDd.SyncLoad = true;
  // ds_payDd.DataID = "/cm.zz.RetrieveCodeCMD.do?grpCd=" + grpCd + "&cd=&cdNm=";

  dma_payDd.set("grpCd", grpCd);
  dma_payDd.set("cd", "");
  dma_payDd.set("cdNm", "");
  await scwin.submitExcute(sbm_payDd);
};

// for=tr_Save event=OnSuccess()
scwin.sbm_Save_submitdone = function (e) {
  $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

// for=tr_SaveDoc event=OnSuccess()
scwin.sbm_SaveDoc_submitdone = function (e) {
  $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

// for=tr_email event=OnSuccess()
scwin.sbm_email_submitdone = function (e) {
  $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_retrieveDetail();
};

// for=ds_customer event=OnLoadCompleted(rowCnt)
scwin.sbm_customer_submitdone = async function (e) {
  let rowCnt = ds_customer.getTotalRow();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    scwin.f_EventInit();
    ds_customerD.removeAll();
    return;
  }
  scwin.f_EventSearch();
  ds_customer.setRowPosition(0);
  await scwin.f_retrieveDetail(0);
  await scwin.f_retrieveFile();
};

// 첫번째 그리드 선택에 따른 두번째 그리드 필터링
// for=ds_customer event=OnRowPosChanged(row)
scwin.ds_customer_onrowpositionchange = function (info) {
  let row = info.newRowIndex;
  if (ds_customer.getTotalRow() == 0) {
    ds_customerD.removeAll(); // ds_customerD.ClearData();
    return;
  }
  if (ds_customer.getRowStatusValue(row) == 2) {
    // 1 -> 2로 수정하였음
    gr_customer.setCellReadOnly(row, 'clntNm', false);
    gr_customer.setCellReadOnly(row, 'crn', false);
  } else {
    gr_customer.setCellReadOnly(row, 'clntNm', true);
    gr_customer.setCellReadOnly(row, 'crn', true);
  }
};

// Grid를 Mouse로 Click할 때 발생
// for=gr_customer event=OnClick(row,colid)
scwin.gr_customer_oncellclick = async function (rowIndex, columnIndex, columnId) {
  // dma_customerD.set("clntNo", ds_customer.getCellData(rowIndex, "clntNo"))
  // dma_customerD.set("seq", ds_customer.getCellData(rowIndex, "seq"))
  // scwin.search = "0"
  // scwin.f_retrieveDetail();
  ds_customer.setRowPosition(rowIndex);
  await scwin.f_retrieveDetail(rowIndex);
};

// popup 호출 연결해야됨 그리드
scwin.clntNm_imageClickFunction = function (rowIndex, colId, nowValue) {
  // scwin.f_openPopUpClntNo(gr_customer, rowIndex, colId); // 거래처명
};
scwin.udc_grid_clntNm_onblurNameEvent = function (e) {
  scwin.f_openPopUpClntNo();
};

// 거래처
// for=ed_clntNo event=OnKillFocus()
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_clntNo, txt_clntNm, '1');
};

// 동부담당자
// for=ed_empNo event=OnKillFocus()
scwin.udc_empNo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_empNo, txt_empNm, '3');
};

// for=ds_customerD event=OnRowPosChanged(row)
scwin.ds_customerD_onrowpositionchange = async function (info) {
  // let row = info.newRowIndex;
  // if (ds_customerD.getRowStatusValue(row) == 2) { // 1 -> 2 로 수정하였음. 갱신이 아니고 삽입으로 수정
  //     gr_customerD.setCellReadOnly(row, 'docClsCd', false); // false -> true
  // }
  // else {
  //     gr_customerD.setCellReadOnly(row, 'docClsCd', true); // true -> false
  // }

  let row = info.newRowIndex;
  if (row < 0) return;
  if (ds_customerD.getRowStatusValue(row) == 2) {
    gr_customerD.setCellReadOnly(row, "docClsCd", false);
  } else {
    gr_customerD.setCellReadOnly(row, "docClsCd", true);
  }

  // await scwin.f_applyPayDdState(row);
};

// 지급주기 Combo 선택
// for=gr_customerD event=OnDropDown(row,colid)
scwin.gr_customerD_onbeforeedit = async function (rowIndex, columnIndex, value) {
  // debugger

  return;
  let colid = ds_customerD.getColumnID(columnIndex + 1);
  if (colid == "payDd") {
    await scwin.f_applyPayDdState(rowIndex);
  }
};

// 지급일 Combo 선택 
// for=gr_customerD event=OnCloseUp(row,colid)
scwin.gr_customerD_onafteredit = async function (rowIndex, columnIndex, value) {
  let colid = ds_customerD.getColumnID(columnIndex + 1);
  if (colid == "payStrdCd") {
    let payStrdCd = ds_customerD.getCellData(rowIndex, "payStrdCd");
    if (payStrdCd == null || payStrdCd == "" || payStrdCd == "0" || payStrdCd == 0) {
      gr_customerD.setCellReadOnly(rowIndex, "payDd", true);
      ds_customerD.setCellData(rowIndex, "payDd", "");
      return;
    }
    if (!ds_customerD.getCellData(rowIndex, "payDd")) {
      ds_customerD.setCellData(rowIndex, "payDd", "30");
    }
    await scwin.f_applyPayDdState(rowIndex);
  }
};
scwin.udc_crn_onclickEvent = function (e) {
  // 상단 그리드 사업자번호
  scwin.f_openPopUp("", "2", "T");
};
scwin.udc_clntNm_onclickEvent = function (e) {
  // 상단 그리드 거래처명
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp("", "clntNo");
};
scwin.sbm_customerD_submitdone = async function (e) {
  totalRow2.setValue(ds_customerD.getTotalRow());
  if (ds_customerD.getTotalRow() == 0) return;
  ds_customerD.setRowPosition(0);
  await scwin.f_applyPayDdState(0);
};
scwin.f_applyPayDdState = async function (rowIndex) {
  debugger;
  if (rowIndex < 0 || ds_customerD.getTotalRow() == 0) return;
  let payStrdCd = String(ds_customerD.getCellData(rowIndex, "payStrdCd") || "");
  let checkNum = "";
  let payDd = ds_customerD.getCellData(rowIndex, "payDd");
  if (payStrdCd == "" || payStrdCd == "0") {
    gr_customerD.setCellReadOnly(rowIndex, "payDd", true);
    ds_customerD.setCellData(rowIndex, "payDd", "");
    return;
  }
  gr_customerD.setCellReadOnly(rowIndex, "payDd", false);
  await scwin.f_payStrdCdDsSet("FM041");
  for (let i = 0; i < ds_payStrdCd.getTotalRow(); i++) {
    if (payStrdCd == String(ds_payStrdCd.getCellData(i, "cd"))) {
      checkNum = String(ds_payStrdCd.getCellData(i, "fltrCd1"));
      break;
    }
  }
  if (checkNum == "1") {
    await scwin.f_payDdDsSet("ZZ522");
  } else if (checkNum == "2") {
    await scwin.f_payDdDsSet("ZZ548");
  }

  // redraw() 대신 값 재세팅으로 화면 갱신 유도
  if (payDd != null && payDd !== "") {
    ds_customerD.setCellData(rowIndex, "payDd", "");
    ds_customerD.setCellData(rowIndex, "payDd", payDd);
  }
};

/**
 * @method 
 * @name submitExcute 
 * @description submit 처리
 */
scwin.submitExcute = async function (sbmObj) {
  const e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    await scwin.submitdone(e);
  }
  ;
};

/**
 * @method 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_payStrdCd:
      break;
    case sbm_payDd:
      await scwin.sbm_payDd_submitdone(e);
      break;
    case sbm_customerD:
      await scwin.sbm_customerD_submitdone(e);
      break;
    case sbm_customer:
      await scwin.sbm_customer_submitdone(e);
      break;
    default:
      break;
  }
};
scwin.sbm_payDd_submitdone = async function (e) {
  // debugger
  let data = ds_payDd.getAllJSON();

  // [추가] 지급일 cd 값을 숫자로 변환해서 오름차순 정렬
  data.sort(function (a, b) {
    return Number(a.cd) - Number(b.cd);
  });

  // [추가] 정렬된 데이터를 다시 ds_payDd에 반영
  ds_payDd.setJSON(data);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_crn',nameId:'txt_crnNm',id:'udc_crn','ev:onblurCodeEvent':'scwin.udc_crn_onblurCodeEvent','ev:onclickEvent':'scwin.udc_crn_onclickEvent',selectID:'retrieveCrnInfo',allowCharCode:'A-Z, 0-9',maxlengthCode:'13'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_clntNo',btnId:'img_mgntClntNo',nameId:'txt_clntNm',id:'udc_clntNo','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',selectID:'retrieveClntList',maxlengthCode:'6',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'동부 담당자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_empNo',nameId:'txt_empNm',btnId:'img_empNo',id:'udc_empNo','ev:onblurCodeEvent':'scwin.udc_empNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_empNo_onclickEvent',selectID:'retrieveEmpInfo',maxlengthCode:'6',allowCharCode:'0-9'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'매입거래처 정보',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_customer',gridDownYn:'Y',gridUpYn:'N',btnPlusYn:'Y',templateYn:'N',btnUser:'Y',gridDownFn:'scwin.f_Excel',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_customer',style:'',autoFit:'none',id:'gr_customer',visibleRowNum:'5',class:'wq_gvw','ev:oncellclick':'scwin.gr_customer_oncellclick',sortable:'true',rowStatusVisible:'true','ev:onafteredit':'scwin.gr_customer_onafteredit','ev:ontextimageclick':'scwin.gr_customer_ontextimageclick',validExp:'clntNm:거래처명:yes,clntNo:거래처번호:yes,crn:사업자번호:yes,clntPersNm:직원명:yes,clntEmail:Email:yes,empNm:담당자:yes,empNo:사원번호:yes',dataName:'매입거래처정보'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'거래처<br/>번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column61',value:'거래처명',displayMode:'label',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'사업자번호',displayMode:'label',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column13',value:'순번',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column11',value:'종사업자번호',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'430',inputType:'text',id:'column3',value:'거래처 정보',displayMode:'label',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{width:'550',inputType:'text',id:'column53',value:'담당자 정보',displayMode:'label',colSpan:'5',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column34',value:'직원명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'부서명',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column32',value:'전화번호',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column31',value:'Email',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column54',value:'담당자',displayMode:'label',class:'txt-red',hidden:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column50',value:'아이디',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column42',value:'담당자Email',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column46',value:'담당자전화번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column58',value:'담당자Fax번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'textImage',id:'clntNm',displayMode:'label',textAlign:'left',imageClickFunction:'scwin.clntNm_imageClickFunction',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'crn',displayMode:'label',imageClickFunction:'scwin.crn_imageClickFunction',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'seq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'addCrn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'clntPersNm',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntDeptNm',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntTelNo',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'clntEmail',displayMode:'label',textAlign:'left',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'textImage',id:'empNm',displayMode:'label',imageClickFunction:'scwin.empNm_imageClickFunction',hidden:'false',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'empNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'empEmail',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'empTelNo',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'empFaxNo',displayMode:'label',readOnly:'true',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_customer',btnRowAddYn:'Y',rowAddFunction:'scwin.f_AddRow',btnRowAddObj:'btn_AddRow2',rowDelFunction:'scwin.f_Delete',btnRowDelObj:'btn_DelRow2',rowDelUserAuth:'D',btnCancelObj:'btn_CanRow2',btnCancelYn:'Y',btnRowDelYn:'Y',cancelFunction:'scwin.cancelFunc',btnDelYn:'N',EngYn:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save2',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'계약 상세 정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_customerD',gridDownFn:'scwin.f_Excel2',gridDownUserAuth:'X',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_customerD',id:'gr_customerD',style:'',visibleRowNum:'5',visibleRowNumFix:'true',columnMove:'true','ev:onbeforeedit':'scwin.gr_customerD_onbeforeedit',rowStatusVisible:'true',readOnly:'false','ev:onafteredit':'scwin.gr_customerD_onafteredit',validExp:'docClsCd:구분:yes,ctrtStDt:계약시작일자:yes:date=YYYYMMDD&amp;length=8,ctrtEndDt:계약종료일자:yes:date=YYYYMMDD&amp;length=8,ctrtYear:계약기간:yes,payStrdCd:지급기준:yes,payMthdCd:지급수단:yes',validFeatures:'ignoreStatus=yes',dataName:'문서 종류'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',emptyItem:'true',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'구분',width:'170',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'문서명',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'거래처번호',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'순번',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'계약서순번',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'계약</br>시작일자',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'계약</br>종료일자',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'계약</br>기간(년)',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'지급</br>기준',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'지급일',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',value:'지급</br>수단',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column43',value:'전송</br>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column41',value:'전송</br>일자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'docClsCd',inputType:'select',width:'170',textAlign:'left',mandatory:'true',readOnly:'true',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'docNm',inputType:'text',width:'120',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'docSeq',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtStDt',inputType:'calendar',width:'120',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtEndDt',inputType:'calendar',width:'120',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtYear',inputType:'text',width:'100',dataType:'number',maxLength:'2',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'payStrdCd',inputType:'select',width:'100',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'payDd',displayMode:'label',textAlign:'left',allOption:'',chooseOption:'',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_payDd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'payMthdCd',displayMode:'label',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sndYn',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'sndDtm',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRow2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_customerD',btnRowAddYn:'Y',rowAddFunction:'scwin.f_detailAddRow',btnRowAddObj:'btn_AddRow',btnRowDelYn:'Y',rowDelFunction:'scwin.f_detailDelete',btnRowDelObj:'btn_DelRow',rowDelUserAuth:'D',btnCancelYn:'Y',btnCancelObj:'btn_CanRow',cancelFunction:'scwin.cancel2',id:'btn_AddRow',btnDelYn:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_submit',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Submit'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Email전송'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_SaveDetail'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcEmpInfo',codeId:'',validTitle:'',nameId:'',style:'display: none;',id:'udc_grid_empNm','ev:onblurNameEvent':'scwin.udc_grid_empNm_onblurNameEvent'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntList',codeId:'',validTitle:'',nameId:'',style:'display: none;',id:'udc_grid_clntNm','ev:onblurNameEvent':'scwin.udc_grid_clntNm_onblurNameEvent'}}]}]}]}]}]}]}]})