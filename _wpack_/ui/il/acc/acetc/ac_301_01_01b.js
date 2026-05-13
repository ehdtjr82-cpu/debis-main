/*amd /ui/il/acc/acetc/ac_301_01_01b.xml 21593 506346d1a513f0f7fc1e00cb600ce9a16cafb9ef10e7b9cfdf57e7dfb1a591e9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'payStsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDept',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payMthdCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_paymgnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'요청금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outbrAcctNm',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payMthdCd',name:'지불방법',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSlipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'지급은행',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankAcntNo',name:'지급계좌',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'어음수표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'환종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payExchRt',name:'환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmtFcrc',name:'외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'전표적요',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrievePaymgnt',action:'/il.acc.acetc.RetrieveIlPaymentContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition", "key":"IN_DS1"}, {"id":"ds_paymgnt", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_paymgnt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrievePaymgnt_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 지급조회
 * 메뉴경로 : 국제물류/Accounting/Slip Management
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/il/acc/acetc/ac_301_01_01b.jsp
 * 작 성 자 : 이진우
 * 작 업 일 : 2026-02-09
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항

 * 수정이력 :
 *    - 2026-02-09      이진우    최초작성
 */

//---------------------------------------------------------
// 전역변수
//---------------------------------------------------------   
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FM017",
    compID: "lc_payStsCd,gr_paymgnt:payStsCd"
  },
  //GauceUtil.getCodeList("FM018",1,"00") %>,<%= GauceUtil.getCodeList("FM018",1,"10") %>
  {
    grpCd: "FM018",
    compID: "lc_payMthdCd,gr_paymgnt:payMthdCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------    
scwin.onUdcCompleted = function () {
  today = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  ed_reqStartDt.setValue(today.substr(0, 6) + "01");
  ed_reqEndDt.setValue(today);
  lc_payStsCd.setSelectedIndex(0);
  lc_payMthdCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  // debugger;
  //GauceUtil.getCodeList("FM018",1,"00") %>,<%= GauceUtil.getCodeList("FM018",1,"10") %>)
  let dltStr = "dlt_commonCodeFM018"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
  //$c.gus.copy(dltStr, "dlt_commonCodeFM018_1", true); // dlt_commonCodeFM018_1 으로 dataList 을 복사
  let dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
  $c.data.dataListFilter($p, dlt, "fltrCd1 == '00' || fltrCd1 == '10'"); //$c.data.dataListFilter 함수를 이용해서 필터
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (select_code, txtCode, txtName, sFlag) {
  //   debugger;

  switch (select_code) {
    // 관리부서 PopUp 호출
    case '1':
      udc_dept.setSelectId("retrieveAcctDeptCdInfo");
      udc_dept.ilCommonPopUp(scwin.udc_dept_callbackFunc, txtCode.getValue().trim(), txtName.getValue(), sFlag, null, null, null, null, null, null, null, null, null);
      break;

    // 거래처 PopUp 호출
    case '2':
      udc_clntNo.setSelectId("retrieveClntList");
      udc_clntNo.ilCommonPopUp(scwin.udc_clntNo_callbackFunc, txtCode.getValue().trim(), txtName.getValue(), sFlag, null, null, null, null, null, null, null, null, null, null, "F", null, null);
      break;
  }
};
scwin.udc_clntNo_callbackFunc = function (rtnList) {
  scwin.f_resultPopEd(ed_clntNo, txt_clntNm, rtnList);
};
scwin.udc_dept_callbackFunc = function (rtnList) {
  scwin.f_resultPopEd(ed_reqAcctDeptCd, txt_reqAcctDeptNm, rtnList);
};
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
scwin.f_CheckPopUp = function (strCd, strNm, flag) {
  // debugger;
  if (strCd.getValue() != "") scwin.f_openPopUp(flag, strCd, strNm, 'T');else strNm.setValue("");
};
scwin.udc_dept_onblurCodeEvent = function (e) {
  // debugger;
  scwin.f_CheckPopUp(ed_reqAcctDeptCd, txt_reqAcctDeptNm, '1');
};
scwin.udc_dept_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUp('1', ed_reqAcctDeptCd, txt_reqAcctDeptNm, 'F');
};
scwin.udc_dept_onclickEvent = function (e) {
  //  debugger;
  scwin.f_openPopUp('1', ed_reqAcctDeptCd, txt_reqAcctDeptNm, 'F');
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, txt_clntNm, '2');
};
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUp('2', ed_clntNo, txt_clntNm, 'F');
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_clntNo, txt_clntNm, 'F');
};
scwin.btn_clear_onclick = function (e) {
  ds_condition.setEmptyValue();
  txt_clntNm.setValue("");
  txt_reqAcctDeptNm.setValue("");
  today = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  ed_reqStartDt.setValue(today.substr(0, 6) + "01");
  ed_reqEndDt.setValue(today);
};
scwin.btn_retrieve_onclick = function (e) {
  //조회시작일자가 더 클경우 체크
  if (!$c.gus.cfIsAfterDate($p, ed_reqStartDt.getValue(), ed_reqEndDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }
  $c.sbm.execute($p, sbm_retrievePaymgnt);
};
scwin.sbm_retrievePaymgnt_submitdone = function (e) {
  if (ds_paymgnt.getRowCount() == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다");
  } else {
    ed_totalRow.setValue(ds_paymgnt.getRowCount());
    ds_paymgnt.sort("payNo", 0); //내림차순
  }
};

/**
 * 그리드 셀 클릭 이벤트
 */
scwin.gr_paymgnt_oncellclick = async function (rowIndex, columnIndex, columnId) {
  //debugger;

  //전표팝업조회
  if (columnId == "outbrSlipNo") {
    let slipNo = ds_paymgnt.getCellData(rowIndex, "outbrSlipNo");
    if (!$c.gus.cfIsNull($p, slipNo)) {
      //cfShowSlipInfo(ds_paymgnt.NameValue(Row,"outbrSlipNo"));
      await $c.gus.cfShowSlipInfo($p, slipNo);
    }
  }
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function (e) {
  if (ds_paymgnt.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  let fileName = '지급조회';
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    await $c.data.downloadGridViewExcel($p, gr_paymgnt, {
      fileName: fileName + ".xlsx",
      sheetName: fileName
    });
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'전체',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_payStsCd',ref:'data:ds_condition.payStsCd',style:'width: 150px;',submenuSize:'fixed'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지불방법',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'전체',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'lc_payMthdCd',objType:'data',style:'width: 150px;',submenuSize:'auto',visibleRowNum:'10',ref:'data:ds_condition.payMthdCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_dcsnDt',refDataMap:'ds_condition',refEdDt:'qryEndDt',refStDt:'qryStDt',style:'',edFromId:'ed_reqStartDt',edToId:'ed_reqEndDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',selectID:'',codeId:'ed_reqAcctDeptCd',validTitle:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',nameId:'txt_reqAcctDeptNm',style:'width:%; height:px; ',code:'reqDept',refDataCollection:'ds_condition',id:'udc_dept',allowCharCode:'0-9',maxlengthCode:'5','ev:onblurCodeEvent':'scwin.udc_dept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_dept_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_dept_onclickEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',selectID:'',codeId:'ed_clntNo',validTitle:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',nameId:'txt_clntNm',style:'width:%; height:px; ',code:'clntNo',refDataCollection:'ds_condition',btnId:'img_clntNo',id:'udc_clntNo',allowCharCode:'0-9',maxlengthCode:'6','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'Y',gridID:'gr_paymgnt',gridDownFn:'scwin.f_GridToExcel',id:'udc_excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{class:'wq_gvw',dataList:'data:ds_paymgnt',id:'gr_paymgnt',style:'',visibleRowNum:'15',visibleRowNumFix:'true',fixedColumn:'4',autoFit:'none',columnMove:'true',focusMode:'row','ev:oncellclick':'scwin.gr_paymgnt_oncellclick',readOnly:'true',scrollByColumn:'false',scrollByColumnAdaptive:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'거래처',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'요청금액',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'계정',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'귀속부서',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'상태',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'지불방법',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'요청일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'전표번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'지급번호',width:'150'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column55',value:'지급은행',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',width:'150',value:'지급계좌',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column52',value:'어음수표번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column49',value:'환종',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'환율',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'외화',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'거래처번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column34',value:'사업자번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'column37',value:'전표적요',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payAmt',inputType:'text',width:'140',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outbrAcctNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outbrAcctDeptNm',inputType:'text',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payStsCd',inputType:'select',width:'80',textAlign:'center',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payMthdCd',inputType:'select',width:'80',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnDt',inputType:'text',width:'80',displayFormat:'####/##/##',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outbrSlipNo',inputType:'link',width:'140',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'bankNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payBankAcntNo',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'draftCheckNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'payCrcCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'payExchRt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.0000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'payAmtFcrc',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'clntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'crn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'outbrSummary',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column30',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column29',displayMode:'label',dataType:'number',textAlign:'right',displayFormat:'#,##0',expression:'SUM("payAmt")'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'195',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column39',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})