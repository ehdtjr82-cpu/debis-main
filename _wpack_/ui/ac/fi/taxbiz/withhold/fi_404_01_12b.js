/*amd /ui/ac/fi/taxbiz/withhold/fi_404_01_12b.xml 25474 1305b7489ae24b18c61e26f19cd3fd9795ec381eab67be48e206c301c6c68566 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_payHistory',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'declarYr',name:'작업년도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ver',name:'버전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStatementClsCd',name:'지급조서구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'withholdDeclarAcctDeptCd',name:'원천세신고부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'withholdDeclarAcctDeptNm',name:'원천세신고부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'작업자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'작업일시',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사부속코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'declarYr',name:'신고년도',dataType:'text'}},{T:1,N:'w2:key',A:{id:'withholdDeclarAcctDeptCd',name:'원천세신고부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'withholdDeclarAcctDeptNm',name:'원천세신고부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payStatementClsCd',name:'지급조서구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'submitDt',name:'생성일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_payStatement',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'flag1',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag2',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag3',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag4',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag5',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag6',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag7',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag8',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag9',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag10',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag11',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag12',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag13',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag14',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag15',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag16',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag17',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag18',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag19',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag20',name:'컬럼헤더명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag21',name:'컬럼헤더명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.taxbiz.withhold.RetrievePayStatementHistoryCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_payHistory","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_payHistory","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.taxbiz.withhold.CreatePayStatementFileCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_payStatement","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_payStatement","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p); // 로그인 정보를 가져온다.
scwin.privAdmin = scwin.memJson.privAdmin; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님

scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드
scwin.isSubCompany = false;
scwin.txtCoClsCd = "";
scwin.txtCoCd = "";
scwin.submitDt = "";
scwin.onpageload = function () {
  gr_pay.hide();
  const codeOptions = [{
    grpCd: "FI082",
    compID: "lc_payStatementClsCd, gr_payHistory:payStatementClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function () {
  lc_payStatementClsCd.setSelectedIndex(0); // 지급조서구분
};

/**
 * UDC값
 */
scwin.onUdcCompleted = function () {
  scwin.f_Setting();
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// function name : f_Setting
// function desc : 조회조건 셋팅
// function Parameter : null 
//-------------------------------------------------------------------------   
scwin.f_Setting = function () {
  ica_declarYr.setValue($c.date.getServerDateTime($p, "yyyy")); //신고년도
  scwin.submitDt = $c.date.getServerDateTime($p, "yyyyMMdd"); //생성일자
  ed_withholdDeclarAcctDeptCd.focus();
};

//-------------------------------------------------------------------------
// function name : f_setCompanyInfo
// function desc : 자회사 회계 시스템 추가에 따른 설정
// function Parameter : null 
//-------------------------------------------------------------------------   
scwin.f_setCompanyInfo = function () {
  let vCoCd = "";
  let vCoClsCd = "";

  // 사용자 구분이 자회사('SA')인 경우 
  if (scwin.vUserHomeClsCd == ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.isSubCompany = true;
  } else {
    // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
    vCoCd = ACConstants.CO_CD_DONGBU;
    vCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  scwin.txtCoCd = vCoCd;
  scwin.txtCoClsCd = vCoClsCd;
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
// function Parameter : null 
//-------------------------------------------------------------------------   
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ica_declarYr]);
  if (!ret) return false;
  dma_search.set("coCd", scwin.txtCoCd);
  dma_search.set("coClsCd", scwin.txtCoClsCd);
  dma_search.set("submitDt", scwin.submitDt);
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// function name : f_CreateFile
// function desc : 생성
// function Parameter : null 
//-------------------------------------------------------------------------     
scwin.f_CreateFile = async function () {
  let ret = await $c.gus.cfValidate($p, [ica_declarYr]);
  if (!ret) return false;
  if (ed_withholdDeclarAcctDeptCd.getValue() == "") {
    await $c.win.alert($p, "신고부서은(는) 필수 입력 항목입니다.");
    return false;
  }
  ret = await $c.gus.cfValidate($p, [ed_withholdDeclarAcctDeptCd]);
  if (!ret) return false;
  $c.sbm.execute($p, sbm_save);
};

//-------------------------------------------------------------------------
// function name : f_openPopUp
// function desc : 팝업
// function Parameter : flag : 팝업구분, check : 팝업여부 
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (flag, check) {
  switch (flag) {
    case '1':
      // 신고부서
      let param = "";

      // 자회사 회계 시스템인 경우,  
      if (scwin.isSubCompany) {
        param = scwin.txtCoCd + "," + scwin.txtCoClsCd;
      }
      udc_withHoldInfo.cfCommonPopUp(scwin.udc_withHoldInfo_callBackFunc, ed_withholdDeclarAcctDeptCd.getValue().trim(), ed_withholdDeclarAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
  }
};
scwin.udc_withHoldInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_withholdDeclarAcctDeptCd.setValue(rtnList[1]); // 코드
    ed_withholdDeclarAcctDeptNm.setValue(rtnList[2]); // 명
    if (!ed_withholdDeclarAcctDeptCd.options) ed_withholdDeclarAcctDeptCd.options = {};
    ed_withholdDeclarAcctDeptCd.options.hidVal = rtnList[1]; // 히든값

    //회사 정보 set
    scwin.txtCoCd = rtnList[3]; //회사코드 
    scwin.txtCoClsCd = rtnList[4]; //회사구분코드  
  } else {
    ed_withholdDeclarAcctDeptCd.setValue("");
    ed_withholdDeclarAcctDeptNm.setValue("");
    if (!ed_withholdDeclarAcctDeptCd.options) ed_withholdDeclarAcctDeptCd.options = {};
    ed_withholdDeclarAcctDeptCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업체크
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  if (!strCd.options) strCd.options = {};
  if (strCd.getValue().trim() == strCd.options.hidVal) return;
  strNm.setValue("");
  strCd.options.hidVal = "";
  if (strCd.getValue().trim() != "") scwin.f_openPopUp(flag, 'T');
};

//-------------------------------------------------------------------------
// function name : f_DeptNmChanged
// function desc : 신고부서명 입력창
// function Parameter : deptCd : 코드값, deptNm : 코드명
//-------------------------------------------------------------------------
scwin.f_DeptNmChanged = async function (deptCd, deptNm) {
  // 거래처코드 입력창을 지운다
  deptCd.setValue("");

  // 거래처명를 가져온다.
  let sName = deptNm.getValue().trim();
  let param = "";

  // 자회사 회계 시스템인 경우,
  if (scwin.isSubCompany) {
    param = scwin.txtCoCd + "," + scwin.txtCoClsCd;
  }
  udc_withHoldInfo.cfCommonPopUp(scwin.udc_withHoldInfo_callBackFunc, ed_withholdDeclarAcctDeptCd.getValue().trim(), ed_withholdDeclarAcctDeptNm.getValue(), "T", null, null, null, null, param, null, null, null, null);
};

//-------------------------------------------------------------------------
// function name : f_Excel
// function desc : 엑셀 파일 다운로드
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  let objGridName = gr_payHistory;
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    const options = {
      fileName: "지급조서전산매체파일생성.xlsx",
      sheetName: "지급조서전산매체파일생성"
    };
    await $c.data.downloadGridViewExcel($p, objGridName, options);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    let rowCnt = ds_payStatement.getRowCount();
    if (rowCnt == 0) {
      await $c.win.alert($p, MSG_CM_WRN_002);
    } else {
      //파일제목생성
      //기타소득지급명세서 => G1234567.890 ('23')
      //사업소득지급명세서 => F1234567.890 ('24')
      let title = "";
      let flag9 = ds_payStatement.getCellData(0, "flag9");

      //기타소득지급명세서
      if (lc_payStatementClsCd.getValue() == '23') {
        title = "G" + flag9.substring(0, 7) + "." + flag9.substring(7);
        let options = {
          fileName: title + ".txt",
          type: "1",
          delim: "\u200B",
          header: "0",
          removeQuotation: "0"
        };
        gr_pay.saveCSV(options);

        //사업소득지급명세서
      } else if (lc_payStatementClsCd.getValue() == '24') {
        title = "F" + flag9.substring(0, 7) + "." + flag9.substring(7);
        let options = {
          fileName: title + ".txt",
          type: "1",
          delim: "\u200B",
          header: "0",
          removeQuotation: "0"
        };
        gr_pay.saveCSV(options);
      }
      // 생성후 조회
      scwin.f_Retrieve();
    }
  }
};
scwin.udc_withHoldInfo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_withholdDeclarAcctDeptCd, ed_withholdDeclarAcctDeptNm, '1');
};
scwin.udc_withHoldInfo_onviewchangeNameEvent = function (info) {
  scwin.f_DeptNmChanged(ed_withholdDeclarAcctDeptCd, ed_withholdDeclarAcctDeptNm);
};
scwin.udc_withHoldInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};
scwin.btn_create_onclick = function (e) {
  scwin.f_CreateFile();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_search_submitdone = async function (e) {
  let rowCnt = ds_payHistory.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'searchTable',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신고년도 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:'',id:'ica_declarYr',style:'',pickerType:'dynamic',objType:'data',mandatory:'true',displayFormat:'yyyy',ioFormat:'yyyy',editType:'focus',ref:'data:dma_search.declarYr'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신고부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_withholdDeclarAcctDeptCd',objTypeCode:'data',mandatoryCode:'false',validExpCode:'신고부서:yes:format=00000',allowCharCode:'0-9',maxlengthCode:'5',UpperFlagCode:'1',nameId:'ed_withholdDeclarAcctDeptNm',objTypeName:'data',btnId:'btn_slipAcctDeptCdst',code:'withholdDeclarAcctDeptCd',name:'withholdDeclarAcctDeptNm',refDataCollection:'dma_search',selectID:'retrieveWithHoldInfo',id:'udc_withHoldInfo','ev:onblurCodeEvent':'scwin.udc_withHoldInfo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_withHoldInfo_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_withHoldInfo_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급조서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_payStatementClsCd',style:'width: 150px;',submenuSize:'fixed',mandatory:'true',objType:'data',ref:'data:dma_search.payStatementClsCd',sortOption:'value'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_Excel',gridDownUserAuth:'X',btnUser:'Y',gridUpYn:'N',gridID:'gr_payHistory'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_payHistory',id:'gr_payHistory',style:'',visibleRowNum:'13',visibleRowNumFix:'true',columnMove:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'작업년도',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'버전',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'지급조서구분',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'사업자번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'원천세신고부서',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'원천세신고부서명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'작업자ID',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'작업일시',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'declarYr',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ver',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payStatementClsCd',inputType:'select',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'withholdDeclarAcctDeptCd',inputType:'text',style:'',value:'',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'withholdDeclarAcctDeptNm',inputType:'text',style:'',value:'',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',style:'',value:'',width:'150'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_create',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.btn_create_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group4',style:';display:none;'},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_payStatement',id:'gr_pay',style:'',visibleRowNum:'15',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column20',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column19',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column18',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column17',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column16',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column15',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column14',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column13',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column12',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column11',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column10',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column8',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column7',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column6',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column5',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column4',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column3',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column2',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column1',value:'컬럼헤더명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'flag1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'flag2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'flag3',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'flag4',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'flag5',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'flag6',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'flag7',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'flag8',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'flag9',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'flag10',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'flag11',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'flag12',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'flag13',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'flag14',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'flag15',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'flag16',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'flag17',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'flag18',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'flag19',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'flag20',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'flag21',displayMode:'label'}}]}]}]}]}]}]}]}]}]})