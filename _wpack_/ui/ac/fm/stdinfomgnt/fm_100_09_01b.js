/*amd /ui/ac/fm/stdinfomgnt/fm_100_09_01b.xml 28370 b6177d162ade09e5995ad3c4500f7caf9253544fb3812072d64f93cbbb0cd4d5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{id:'dma_search',baseNode:'map'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_payment',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bankCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befRamt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'addAmt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'decAmt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramt',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_monPayment',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',dataType:'text',name:'은행명'}},{T:1,N:'w2:column',A:{id:'dueMon',dataType:'text',name:'만기월'}},{T:1,N:'w2:column',A:{id:'ramt',dataType:'number',name:'잔액'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_monPaymentRamt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueMon01',name:'만기월01',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dueMon02',name:'만기월02',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dueMon03',name:'만기월03',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dueMon04',name:'만기월04',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dueMon05',name:'만기월05',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dueMon06',name:'만기월06',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dueMon07',name:'만기월07',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dueMon08',name:'만기월08',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dueMon09',name:'만기월09',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dueMon10',name:'만기월10',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dueMon11',name:'만기월11',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dueMon12',name:'만기월12',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totalRamt',name:'은행잔액',dataType:'number'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fm.stdinfomgnt.RetrieveBalanceOfExchangeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_payment","key":"OUT_DS1"},{"id":"ds_monPayment","key":"OUT_DS2"}]',target:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_payment","key":"OUT_DS1"},{"id":"ds_monPayment","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fm_100_09_01b
// 이름     : 지급어음잔액조회
// 경로     : 회계/자금관리/기준정보관리/
// 작 성 자 : 오영재
// 작 업 일 : 2025-12-30
// 사용계정 : 내부
// 비고     :
//
// 업로드   : 
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================

scwin.privAdmin = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "privAdmin")) ? '' : $c.data.getMemInfo($p, "privAdmin");
scwin.vLoginCoCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd"); // 소속 자회사
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd"); //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "userHomeClsCd")) ? '' : $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드 

scwin.isSubCompany = false;
scwin.txtCoClsCd = "";
scwin.today = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.onpageload = function () {
  // gr_paymentRamt.hide();
  // btn_excelDown.hide();
  // pivotTable1.hide();
};
scwin.f_initMonPaymentPivotRow = function (rowIndex) {
  ds_monPaymentRamt.setCellData(rowIndex, "bankCd", "");
  ds_monPaymentRamt.setCellData(rowIndex, "bankNm", "");
  ds_monPaymentRamt.setCellData(rowIndex, "dueMon01", 0);
  ds_monPaymentRamt.setCellData(rowIndex, "dueMon02", 0);
  ds_monPaymentRamt.setCellData(rowIndex, "dueMon03", 0);
  ds_monPaymentRamt.setCellData(rowIndex, "dueMon04", 0);
  ds_monPaymentRamt.setCellData(rowIndex, "dueMon05", 0);
  ds_monPaymentRamt.setCellData(rowIndex, "dueMon06", 0);
  ds_monPaymentRamt.setCellData(rowIndex, "dueMon07", 0);
  ds_monPaymentRamt.setCellData(rowIndex, "dueMon08", 0);
  ds_monPaymentRamt.setCellData(rowIndex, "dueMon09", 0);
  ds_monPaymentRamt.setCellData(rowIndex, "dueMon10", 0);
  ds_monPaymentRamt.setCellData(rowIndex, "dueMon11", 0);
  ds_monPaymentRamt.setCellData(rowIndex, "dueMon12", 0);
  ds_monPaymentRamt.setCellData(rowIndex, "totalRamt", 0);
};

//-------------------------------------------------------------------------
// 저장 완료후 화면 Reset시 사용하는 함수 
//-------------------------------------------------------------------------
scwin.f_Reset = function () {
  scwin.f_setCompanyInfo();
  ed_stdDt.setValue(scwin.today);
};
scwin.onUdcCompleted = function () {
  scwin.f_Reset();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret;
  ret = await $c.gus.cfValidate($p, [ed_stdDt]);
  if (!ret) {
    return;
  }
  ret = await $c.gus.cfValidate($p, [ed_coCd]);
  if (!ret) return false;

  //tr_search.Post();

  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  ed_stdDt.setValue(scwin.today); // 검색조건 - 현재일자

  // 초기 포커스 이동
  ed_stdDt.focus();
};

/**
 * 자회사 회계 시스템 추가에 따른 설정 
 */
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
  if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  }
};
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.btn_reset_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.udc_coCd_cb = function (rtnList) {
  // SET	 
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    ed_coCd.options.hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분   
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > '0') {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_coCd.setSelectId("retrieveDongbuGroupCompanyInfo");
  udc_coCd.cfCommonPopUp(scwin.udc_coCd_cb, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.sbm_search_submitdone = function (e) {
  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  let rowCnt = ds_payment.getRowCount();
  let rowCnt2 = ds_monPayment.getRowCount();
  ed_totalRows.setValue(rowCnt);
  ed_totalRows2.setValue(ds_monPayment.getColumnDistinctDataArray("bankNm").length);
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }

  //Pivot 자료 생성
  scwin.f_pivotCreate();
};
scwin.f_pivotCreate = function () {
  //01. Pivot 자료 삭제
  ds_monPaymentRamt.removeAll();

  //02. Pivot DataSet 생성
  let monCnt = ds_monPayment.getRowCount();
  var gridHeader = '';
  var gridBody = '';
  var gridFooter = '';
  if (monCnt > 0) {
    var bankCd = "";
    var bankNm = "";
    var dueMon = "";
    var ramt = 0;
    var oldBankCd = "";
    var monSub = "";
    var ramtIndex = 0;
    var totalRamt = 0;
    for (var i = 0; i < monCnt; i++) {
      bankCd = ds_monPayment.getCellData(i, "bankCd");
      bankNm = ds_monPayment.getCellData(i, "bankNm");
      dueMon = ds_monPayment.getCellData(i, "dueMon");
      ramt = ds_monPayment.getCellData(i, "ramt");
      monSub = dueMon.substring(5);
      if (i == 0) {
        ds_monPaymentRamt.insertRow();
        scwin.f_initMonPaymentPivotRow(ds_monPaymentRamt.getRowPosition());
        oldBankCd = bankCd;
      }
      if (bankCd != oldBankCd) {
        ramtIndex++;
        totalRamt = 0;
        ds_monPaymentRamt.insertRow();
        scwin.f_initMonPaymentPivotRow(ds_monPaymentRamt.getRowPosition());
      }
      totalRamt = parseFloat(totalRamt) + parseFloat(ramt);

      //debugger;
      ds_monPaymentRamt.setCellData(ramtIndex, "bankCd", bankCd);
      ds_monPaymentRamt.setCellData(ramtIndex, "bankNm", bankNm);
      ds_monPaymentRamt.setCellData(ramtIndex, "dueMon" + monSub, ramt);
      ds_monPaymentRamt.setCellData(ramtIndex, "totalRamt", totalRamt);
      oldBankCd = bankCd;
    }
    var filterArr = ds_monPayment.getColumnDistinctDataArray("dueMon");
    for (var j = 0; j < filterArr.length; j++) {
      dueMon = filterArr[j];
      monSub = dueMon.substring(5, 7);
      gridHeader += '<w2:column removeBorderStyle="false" width="120" inputType="text" id="column15' + monSub + '" value="' + dueMon + '" blockSelect="false" displayMode="label"></w2:column>\n';
      gridBody += '<w2:column textAlign="right" dataType="number" removeBorderStyle="false" width="120" displayFormat="#,##0" inputType="text" id="' + 'dueMon' + monSub + '" blockSelect="false" displayMode="label"></w2:column>\n';
      gridFooter += '<w2:column expression="sum(\'' + 'dueMon' + monSub + '\')" textAlign="right" dataType="number" width="120" displayFormat="#,##0" id="footer_' + 'dueMon' + monSub + '" inputType="expression" style="" value="" displayMode="label"></w2:column>\n';
    }

    //Grid 생성
    var gridStr = '<w2:gridView  xmlns="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:w2="http://www.inswave.com/websquare" xmlns:xf="http://www.w3.org/2002/xforms" focusMode="row" visibleRowNumFix="true" dataList="data:ds_monPaymentRamt" style="" readOnly="true" \n' + '		autoFit="allColumn" id="gr_paymentRamt" visibleRowNum="6" class="wq_gvw" checkReadOnlyOnPasteEnable="">\n' + '		<w2:caption style="" id="caption11" value="this is a grid caption."></w2:caption>\n' + '		<w2:header style="" id="header2">\n' + '			<w2:row style="" id="row3">\n' + '				<w2:column removeBorderStyle="false" width="120" inputType="text" id="column11" value="은행" blockSelect="false" displayMode="label"></w2:column>\n' + '				<w2:column removeBorderStyle="false" width="200" inputType="text" id="column12" value="금융기관" blockSelect="false" displayMode="label"></w2:column>\n' + gridHeader + '				<w2:column removeBorderStyle="false" width="120" inputType="text" id="column10" value="합계" blockSelect="false" displayMode="label"></w2:column>\n' + '			</w2:row>\n' + '		</w2:header>\n' + '		<w2:gBody style="" id="gBody2">\n' + '			<w2:row style="" id="row4">\n' + '				<w2:column textAlign="left" removeBorderStyle="false" width="120" inputType="text" readOnly="true" id="bankCd" blockSelect="false" displayMode="label" hidden="true"></w2:column>\n' + '				<w2:column textAlign="left" removeBorderStyle="false" width="200" inputType="text" id="bankNm" blockSelect="false" displayMode="label"></w2:column>\n' + gridBody + '				<w2:column textAlign="right" dataType="number" removeBorderStyle="false" width="120" displayFormat="#,##0" inputType="text" id="totalRamt" blockSelect="false" displayMode="label"></w2:column>\n' + '			</w2:row>\n' + '		</w2:gBody>\n' + '		<w2:footer style="" id="footer1">\n' + '			<w2:row style="" id="row5">\n' + '				<w2:column colSpan="" width="104" inputType="text" style="" id="column21" value="" displayMode="label"></w2:column>\n' + '				<w2:column colSpan="" width="200" inputType="text" style="" id="column22" value="합계" displayMode="label"> </w2:column>\n' + gridFooter + '				<w2:column expression="sum(\'totalRamt\')" textAlign="right" dataType="number" width="120" displayFormat="#,##0" inputType="expression" style="" id="column20" value="" displayMode="label"></w2:column>\n' + '			</w2:row>\n' + '		</w2:footer>\n' + '	</w2:gridView>\n';
    ds_monPaymentRamt.sort("bankNm", 0); //0 asc, 1 desc

    //TODO Pivot 항목 
    //console.log(gridStr);
    gr_paymentRamt.setGridStyle(WebSquare.xml.parse(gridStr, true));
  }

  //03. Pivot Grid 생성
};
scwin.sbm_search_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.udc_coCd_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.f_Export1 = function () {
  if (ds_payment.getRowCount() <= 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  let sheetTitle = "지급어음  잔액";
  const infoArr = [];
  const options = {
    fileName: "지급어음.xlsx",
    // + ".xls",
    sheetName: sheetTitle
    // fileName : "총계정원장집계표(외화).xls" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
  };
  $c.data.downloadGridViewExcel($p, gr_payment, options, infoArr);
};
scwin.f_Export2 = async function (e) {
  if (ds_monPayment.getRowCount() <= 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  let ret;
  ret = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (ret) {
    const infoArr = [{
      rowIndex: 0,
      colIndex: 0,
      colSpan: 5,
      rowSpan: 1,
      text: "월별 지급어음 잔액",
      textAlign: "center",
      fontSize: 18,
      drawBorder: false,
      color: "black",
      backgroundColor: "#ffffff"
    }];
    let options = {
      fileName: '월별 지급어음 잔액.xlsx',
      sheetName: '월별 지급어음 잔액',
      startRowIndex: 3,
      startColumnIndex: 0,
      type: "1"
    };
    //options.fileName = "월별 지급어음 잔액";
    // pivotTable1.pivotExcelDownload( options );
    $c.data.downloadGridViewExcel($p, gr_paymentRamt, options, infoArr);
  }
};
scwin.btn_excelDown_onclick = function (e) {
  var options = {
    common: {
      fileName: "지급어음.xlsx",
      showProcess: true,
      useStyle: "true"
    },
    excelInfo: [{
      gridId: gr_payment.getID(),
      sheetName: "지급어음  잔액",
      useDataFormat: true,
      decimal: "auto",
      rowNumVisible: true,
      type: "1",
      startRowIndex: 0,
      startColumnIndex: 0,
      mergeCell: true,
      // backgroundColor : "#ffffff" ,
      // headerColor : "#eeeeee",
      // subTotalColor : "#eff8ff",
      // footerColor : "#eff8ff",
      infoArr: [
        // { 
        // rowIndex : 1, colIndex : 1, rowSpan : 1, colSpan : 2, text : "첫번째 시트" , textAlign : "center" 
        // } 
      ]
    }, {
      gridId: gr_paymentRamt.getID(),
      sheetName: "월별 지급어음 잔액",
      type: "1",
      startRowIndex: 3,
      startColumnIndex: 0,
      mergeCell: true,
      // backgroundColor : "#ffffff" ,
      // headerColor : "#eeeeee",
      // subTotalColor : "#eff8ff",
      // footerColor : "#eff8ff",
      infoArr: [{
        rowIndex: 0,
        colIndex: 0,
        colSpan: 5,
        rowSpan: 1,
        text: "월별 지급어음 잔액",
        textAlign: "center",
        fontSize: 18,
        drawBorder: false,
        color: "black"
        // backgroundColor : "#ffffff" 
      }]
    }]
  };
  $c.data.downloadMultipleGridView($p, options); //, infoArr); 
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_company',class:'col7',codeId:'ed_coCd',mandatoryCode:'true',maxlengthCode:'3',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'data',popupID:'',style:'',id:'udc_coCd','ev:onclickEvent':'scwin.udc_coCd_onclickEvent',code:'coCd',refDataCollection:'dma_search','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ed_stdDt',style:'',displayFormat:'yyyy/MM/dd',mandatory:'true',ref:'data:dma_search.stdDt',objType:'data',title:'기준일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.btn_reset_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'지급어음 잔액',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.btn_excelDown_onclick',gridID:'gr_payment',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_payment',focusMode:'row',id:'gr_payment',style:'',visibleRowNum:'6',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'은행',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'금융기관',width:'200'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'전월말잔액',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'증가금액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'감소금액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'현재잔액',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bankCd',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bankNm',inputType:'text',removeBorderStyle:'false',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'befRamt',inputType:'text',removeBorderStyle:'false',textAlign:'right',width:'120',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'addAmt',inputType:'text',removeBorderStyle:'false',textAlign:'right',width:'120',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'decAmt',inputType:'text',style:'',textAlign:'right',value:'',width:'120',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ramt',inputType:'text',style:'',textAlign:'right',value:'',width:'120',displayFormat:'#,##0',dataType:'number'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'',width:'100',colSpan:'',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'총합계',width:'405',colSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column20',inputType:'expression',style:'',textAlign:'right',value:'',width:'120',displayFormat:'#,##0',dataType:'number',expression:'sum(\'befRamt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'expression',style:'',textAlign:'right',value:'',width:'120',displayFormat:'#,##0',dataType:'number',expression:'sum(\'addAmt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column18',inputType:'expression',style:'',textAlign:'right',value:'',width:'120',displayFormat:'#,##0',dataType:'number',expression:'sum(\'decAmt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'expression',style:'',textAlign:'right',value:'',width:'120',displayFormat:'#,##0',dataType:'number',expression:'sum(\'ramt\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(단위 : 원)',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'월별 지급어음 잔액',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridDownFn:'scwin.f_Export2',gridID:'',btnPlusYn:'N',btnUser:'N',templateYn:'N',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{focusMode:'row',visibleRowNumFix:'true',dataList:'data:ds_monPaymentRamt',style:'',readOnly:'true',dynamic:'true',autoFit:'allColumn',id:'gr_paymentRamt',visibleRowNum:'6',class:'wq_gvw',checkReadOnlyOnPasteEnable:''},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption11',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{rowSpan:'',removeBorderStyle:'false',width:'104',inputType:'text',id:'column11',value:'은행',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'405',inputType:'text',id:'column12',value:'금융기관',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',rowspan:'1',width:'120',inputType:'text',id:'column10',value:'합계',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'104',inputType:'text',readOnly:'true',id:'bankCd',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'405',inputType:'text',id:'bankNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'120',displayFormat:'#,##0',inputType:'text',id:'totalRamt',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{colSpan:'',width:'104',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'',width:'405',inputType:'text',style:'',id:'column22',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'totalRamt\')',textAlign:'right',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',style:'',id:'column20',value:'',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalRows2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(단위 : 원)',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})