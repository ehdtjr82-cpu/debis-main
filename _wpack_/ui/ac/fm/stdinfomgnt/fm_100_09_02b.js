/*amd /ui/ac/fm/stdinfomgnt/fm_100_09_02b.xml 32370 573d6be6ede21576eddb6a8a1253fdca55d73bbad258b325fb454c6893323d87 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'기준일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_billRecv',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bankNm',name:'금융기관',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befRamt',name:'전월말잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'addAmt',name:'증가금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'decAmt',name:'감소금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramt',name:'현재잔액',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_monBillRecv',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bankNm',name:'만기월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueMon',name:'dueMon',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befRamt',name:'bef_ramt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addAmt',name:'add_amt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'decAmt',name:'dec_amt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ramt',name:'합계',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fm.stdinfomgnt.RetrieveBillRecvCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_billRecv","key":"OUT_DS1"},{"id":"ds_monBillRecv","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_billRecv","key":"OUT_DS1"}, {"id":"ds_monBillRecv","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fm_100_09_02b
// 이름     : 받을어음잔액조회
// 경로     : 회계 > 자금관리 > 기준정보관리	
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================
scwin.onpageload = function () {
  scwin.dateStr = $c.date.getServerDateTime($p, "yyyyMMdd");
  ed_stdDt.setValue(scwin.dateStr);
  scwin.g_StdDt = "";
  scwin.vLoginCoCd = $c.data.getMemInfo($p, "coCd");
  scwin.vLoginCoClsCd = $c.data.getMemInfo($p, "coClsCd");
  scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd");
  scwin.vCoCd = $c.data.getMemInfo($p, "coCd");
  scwin.userId = $c.data.getMemInfo($p, "userId");
  scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin");
  scwin.empNo = $c.data.getMemInfo($p, "empNo");
  scwin.isSubCompany = false;
  console.log('----------------------------------');
  $c.data.setPopupTitle($p, '받을어음잔액 조회');
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  console.log("=== f_setCompanyInfo (자회사 회계 시스템 추가에 따른 설정)");

  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }

  //ed_coCd.text = vLoginCoCd;
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");

  // 2025-10-14 : 작성일자 포커스 위치 이동
  $p.setTimeout(function () {
    scwin.f_setCompanyInfo();
  }, {
    "delay": 50
  });
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
  if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
    // $c.gus.cfEnableObjects([udc_coCd ]);

    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  } else {
    // $c.gus.cfDisableObjects([udc_coCd ]);   
    // UDC 를 disable 처리
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  }
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  var pAllSearchTF = 'F';
  if (pWinCloseTF == 'F') {
    pAllSearchTF = 'T';
  }
  console.log(pAllSearchTF);
  udc_coCd.setSelectId("retrieveDongbuGroupCompanyInfo");
  udc_coCd.cfCommonPopUp(scwin.udc_coCd_cb, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null, null, pAllSearchTF);
};
scwin.udc_coCd_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_coCd_onblurNameEvent = function (e) {};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_stdDt]))) {
    return;
  }
  if (!(await $c.gus.cfValidate($p, [ed_coCd]))) return false;
  console.log("====== f_Retrieve ==================");
  const strParam = {
    coCd: ed_coCd.getValue() // 회사코드
    ,
    stdDt: ed_stdDt.getValue() // 기준일자
  };

  //데이터셋에 정보설정
  ds_search.setJSON(strParam);
  $c.sbm.execute($p, sbm_search);
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = function (e) {
  ed_totalRows.setValue(ds_billRecv.getRowCount());
  //ed_totalRows2.setValue(ds_monBillRecv.getRowCount());

  //console.log(" 건수 : " + ds_billRecv.getRowCount());

  //헤더에 일자세팅
  gr_monBillRecv.setHeaderValue("dueMon", ed_stdDt.getValue().substr(0, 4) + "-" + ed_stdDt.getValue().substr(4, 2), "");
  if (ds_billRecv.getRowCount() == 0) {
    $c.win.alert($p, MSG_CM_ERR_003);
  }
  if (ds_monBillRecv.getRowCount() > 0) {
    scwin.makeDynamic();
  } else {
    scwin.makeInitDynamic();
  }
};
scwin.makeDynamic = function () {
  //var info = ["btnCodes", "btnCount", "cscoId", "modiDttm", "modrId", "rgstDttm"];

  var info = new Array(); // ds 컬럼
  var infoType = new Array(); // ds 컬럼 dataType 엑셀용

  info.push('bankNm');
  infoType.push('text');
  var originData = ds_monBillRecv.getAllJSON();
  var bankNmArr = new Array();
  var dueMonArr = new Array();
  originData.forEach(function (data) {
    if (dueMonArr.indexOf(data.dueMon) < 0) {
      dueMonArr.push(data.dueMon);
    }
    if (bankNmArr.indexOf(data.bankNm) < 0) {
      bankNmArr.push(data.bankNm);
    }
  });
  dueMonArr.sort();
  dueMonArr.forEach(function (data) {
    info.push(data);
    infoType.push('number');
  });
  info.push('ramt');
  infoType.push('number');
  console.log(info);
  console.log(infoType);
  $c.data.createDataList($p, "ds_bankDueMonBill", info, infoType);
  ds_bankDueMonBill.insertRow();
  console.log(ds_bankDueMonBill.getAllJSON());
  var crossJsonArr = new Array();
  for (var idx = 0; idx < bankNmArr.length; idx++) {
    var temp = originData.filter(function (data) {
      return data.bankNm == bankNmArr[idx];
    });
    console.log(temp);
    var cross_bank_data = {};
    var cross_bank_ramt = 0;
    temp.forEach(function (data) {
      cross_bank_data['bankNm'] = data.bankNm;
      cross_bank_data[data.dueMon] = Number(data.ramt);
      cross_bank_ramt += Number(data.ramt);
    });
    cross_bank_data['ramt'] = cross_bank_ramt;
    console.log(cross_bank_data);
    dueMonArr.forEach(function (data) {
      if (!cross_bank_data[data]) {
        cross_bank_data[data] = 0;
      }
    });
    crossJsonArr.push(cross_bank_data);
  }
  ds_bankDueMonBill.setJSON(crossJsonArr);
  var gridHeader = '<w2:column blockSelect="false" id="hColSt" style="" inputType="text" width="100" value="만기월"></w2:column>';
  var headerIdx = 1;
  dueMonArr.forEach(function (data) {
    gridHeader += '<w2:column blockSelect="false" id="hCol' + headerIdx + '" style="" inputType="text" width="100" value="' + data + '"></w2:column>';
    headerIdx++;
  });
  gridHeader += '<w2:column blockSelect="false" id="hColEd" style="" inputType="text" width="100" value="합계"></w2:column>';
  var gridBody = '<w2:column blockSelect="false" id="bankNm" style="height:20px" inputType="text" width="100" textAlign="left"></w2:column>';
  dueMonArr.forEach(function (data) {
    gridBody += '<w2:column blockSelect="false" id="' + data + '" style="" inputType="text" width="100" value="" displayFormat="#,##0" dataType="number" textAlign="right"></w2:column>';
    headerIdx++;
  });
  gridBody += '<w2:column blockSelect="false" id="ramt" style="height:20px" inputType="text" width="100" displayFormat="#,##0" textAlign="right"></w2:column>';
  var subTotalIdx = 1;
  var gridSubTotal = '<w2:column width="100" inputType="text" id="column15" value="합계" displayMode="label"></w2:column>';
  dueMonArr.forEach(function (data) {
    gridSubTotal += '<w2:column width="100" inputType="expression" id="subTotalCol' + subTotalIdx + '" displayMode="label" expression="sum(\'' + data + '\')" displayFormat="#,##0" dataType="number" textAlign="right"></w2:column>';
    subTotalIdx++;
  });
  gridSubTotal += '<w2:column width="100" inputType="expression" id="column13" displayMode="label" textAlign="right" expression="sum(\'ramt\')" displayFormat="#,##0" dataType="number"></w2:column>';
  // /visibleRowNum="5" scrollByColumnAdaptive="false" focusMode="cell" visibleRowNumFix="true"'

  var gridWidth = gr_monBillRecv.getSize("width");
  var gridheight = gr_monBillRecv.getSize("height");

  /**
   * 
   * <w2:gridView scrollByColumnAdaptive="false" focusMode="cell" visibleRowNumFix="true"
                                      dataList="data:ds_monBillRecv" scrollByColumn="false" style="" autoFit="allColumn" id="gr_monBillRecv" visibleRowNum="5"
                                      class="wq_gvw" checkReadOnlyOnPasteEnable="">
   * 
   */

  var gridStr = '<w2:gridView xmlns:w2="http://www.inswave.com/websquare" xmlns:ev="http://www.w3.org/2001/xml-events" dataList="data:ds_bankDueMonBill" scrollByColumn="false" id="gr_monBillRecv" ' + 'fixedColumnWithHidden="true" autoFit="allColumn" class="wq_gvw" readOnly="true" visibleRowNumFix="true" visibleRowNum="5">' + '<w2:caption style="" id="caption10" value="this is a grid caption."></w2:caption>' + '<w2:header style="" id="header2">' + '<w2:row style="" id="row3">' + gridHeader + '</w2:row>' + '</w2:header>' + '<w2:gBody style="" id="gBody2">' + '<w2:row style="" id="row4">' + gridBody + '</w2:row>' + '</w2:gBody>' + '<w2:footer style="" id="footer1">' + '<w2:row style="" id="row5">' + gridSubTotal + '</w2:row>' + '</w2:footer>' + '</w2:gridView>';
  gr_monBillRecv.setGridStyle(WebSquare.xml.parse(gridStr, true));
  gr_monBillRecv.setGridWidth(gridWidth);
  gr_monBillRecv.setGridHeight(gridheight);
  //하단 총 건수
  ed_totalRows2.setValue(bankNmArr.length);
};
scwin.makeInitDynamic = function () {
  var gridStr = '<w2:gridView xmlns:w2="http://www.inswave.com/websquare" xmlns:ev="http://www.w3.org/2001/xml-events" scrollByColumnAdaptive="false" focusMode="cell" visibleRowNumFix="true"' + ' dataList="data:ds_monBillRecv" scrollByColumn="false" style="" autoFit="allColumn" id="gr_monBillRecv" visibleRowNum="5"' + ' class="wq_gvw" checkReadOnlyOnPasteEnable="">' + '<w2:caption style="" id="caption10" value="this is a grid caption."></w2:caption>' + '<w2:header style="" id="header2">' + '<w2:row style="" id="row3">' + '<w2:column removeBorderStyle="false" width="200" inputType="text" id="column12"' + ' blockSelect="false" displayMode="label" value="만기월">' + '</w2:column>' + '<w2:column removeBorderStyle="false" width="100" inputType="text" id="dueMon"' + ' blockSelect="false" displayMode="label">' + '</w2:column>' + '<w2:column removeBorderStyle="false" width="100" inputType="text" id="column10"' + ' blockSelect="false" displayMode="label" value="합계">' + '</w2:column>' + '</w2:row>' + '</w2:header>' + '<w2:gBody style="" id="gBody2">' + '<w2:row style="" id="row4">' + '<w2:column removeBorderStyle="false" width="200" inputType="text" id="bankNm"' + ' blockSelect="false" displayMode="label">' + '</w2:column>' + '<w2:column removeBorderStyle="false" width="100" inputType="expression" id="exp_ramt" blockSelect="false"' + ' displayMode="label" expression="sum(\'ramt\')" displayFormat="#,##0">' + '</w2:column>' + '<w2:column removeBorderStyle="false" width="100" inputType="text" id="ramt" blockSelect="false"' + ' displayMode="label" textAlign="right">' + '</w2:column>' + '</w2:row>' + '</w2:gBody>' + '<w2:footer style="" id="footer1">' + '<w2:row style="" id="row5">' + '<w2:column width="200" inputType="text" id="column15" value="합계" displayMode="label"></w2:column>' + '<w2:column width="100" inputType="expression" id="column14" displayMode="label" expression="sum(\'ramt\')"></w2:column>' + '<w2:column width="100" inputType="expression" id="column13" displayMode="label" textAlign="right" expression="sum(\'ramt\')"></w2:column>' + '</w2:row>' + '</w2:footer>' + '</w2:gridView>';
  console.log('init start -----');
  console.log(gridStr);
  gr_monBillRecv.setGridStyle(WebSquare.xml.parse(gridStr, true));
  ed_totalRows2.setValue(0);
};
scwin.sbm_search_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

//-------------------------------------------------------------------------
// 회사코드
//-------------------------------------------------------------------------
scwin.udc_coCd_onclickEvent = async function (e) {
  console.log("====== udc_coCd_onclickEvent ==================");
  /*
          var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
                                      ,ed_coCd.text, txt_coNm.value
                                      ,pWinCloseTF,null,null,null,null
                                      ,null,null,null,null,null);   
          // SET	 
          if(rtnList != null ) { 
              if (rtnList[0] == "N/A") return; 
                
              ed_coCd.text = rtnList[0];	// 코드
              txt_coNm.value = rtnList[5]; // 회사명 
              ed_coCd.hidVal = rtnList[0];  // 히든값
              txtCoClsCd.value =rtnList[1];	// 회사구분   
              f_initObj();
          }else{
              ed_coCd.text   = "";
              txt_coNm.value = "";
              ed_coCd.hidVal = ""; 
              txtCoClsCd.value ="";
          }
  */
  rtnList = udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc, "retrieveDongbuGroupCompanyInfo", ed_coCd.text, txt_coNm.value, pWinCloseTF, null, null, null, null, null, null, null, null, null);
};

//-------------------------------------------------------------------------
// 회사코드 버튼 클릭 callBackFunc
//-------------------------------------------------------------------------
scwin.udc_coCd_callBackFunc = function (rtnList) {
  // 배열로 리턴 받음
  //    let rtnList = await udc_coCd.openPopup(ed_coCd.getValue(), ed_coNm.getValue(), "");

  console.log(" rtnList : " + rtnList);

  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;

    // ed_coCd.text = rtnList[0];  // 코드
    // txt_coNm.value = rtnList[5]; // 회사명
    // ed_coCd.hidVal = rtnList[0];  // 히든값
    // txtCoClsCd.value =rtnList[1];   // 회사구분

    ed_coCd.setValue(rtnList[0]); // 회사코드
    ed_coNm.setValue(rtnList[5]); // 회사명
    scwin.txtCoClsCd = rtnList[1]; // 회사구분코드

    //        f_initObj();
  } else {
    // ed_coCd.text   = "";
    // txt_coNm.value = "";
    // ed_coCd.hidVal = "";
    // txtCoClsCd.value ="";

    ed_coCd.setValue(""); // 회사코드
    ed_coNm.setValue(""); // 회사명
    scwin.txtCoClsCd = ""; // 회사구분코드
  }
  console.log(" 회사코드 [" + ed_coCd.getValue() + "] 회사명 [" + ed_coNm.getValue() + "]  회사구분 [" + scwin.txtCoClsCd + "]");
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Export1 = async function () {
  if (ds_billRecv.getRowCount() <= 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  $c.data.downloadMultipleGri;
  var options = {
    common: {
      fileName: "받을어음.xlsx",
      showProcess: true,
      useStyle: "true"
    },
    excelInfo: [{
      gridId: gr_billRecv.getID(),
      sheetName: "받을어음 잔액",
      type: "1",
      startRowIndex: 0,
      startColumnIndex: 0
    }, {
      gridId: gr_monBillRecv.getID(),
      sheetName: "월별 받을어음 잔액",
      type: "1",
      startRowIndex: 0,
      startColumnIndex: 0
    }]
  };
  let ret;
  ret = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (ret == true) {
    $c.data.downloadMultipleGridView($p, options);
  }
  ;
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Export2 = async function () {
  if (ds_monBillRecv.getRowCount() <= 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  let ret;
  ret = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (ret == true) {
    let sheetTitle = "월별 받을어음 잔액";
    let gridId = gr_monBillRecv;
    let infoArr = [];
    let options = {
      fileName: sheetTitle + ".xlsx",
      // + ".xls",
      sheetName: sheetTitle,
      startRowIndex: 3 // 내용 앞으로 몇 row 띄우는지...
    };
    var calcaulatedColnum = 0;
    for (var idx = 0; idx < ds_bankDueMonBill.getTotalCol(); idx++) {
      if (gr_monBillRecv.getColumnVisible(gr_monBillRecv.getColumnID(idx))) {
        calcaulatedColnum++;
      }
    }
    infoArr = [
    //제목
    {
      rowIndex: 0 //제목을 표시할 행 index
      ,
      colIndex: 0 //제목을 표시할 열 index
      ,
      rowSpan: 1 //병합할 행의 수
      ,
      colSpan: calcaulatedColnum //병합할 열의 수
      ,
      text: sheetTitle //표시할 내용(제목)
      ,
      textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
      ,
      fontSize: "18px" //폰트 size
      ,
      fontName: "돋움체" //폰트이름 
      ,
      drawBorder: false //cell의 border 지정(true, false)
      // ,useFooter:"true"        //다운로드시 Footer를 출력 할지 여부( "true"인경우 출력, "false"인경우 미출력)
    }];
    $c.data.downloadGridViewExcel($p, gridId, options, infoArr);
  }
};
scwin.btn_reset_onclick = function (e) {
  scwin.f_FieldClear();
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  ed_stdDt.setValue(scwin.dateStr); // 검색조건 - 현재일자
  //scwin.f_setCompanyInfo();         
  // 초기 포커스 이동
  ed_stdDt.focus();
};
scwin.udc_subsidiaryCoCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_subsidiaryCoCd_onblurCodeEvent = function (e) {
  ed_coNm.setValue('');
  scwin.f_PopUpCompanyInfo('T');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveDongbuGroupCompanyInfoPopup',onloadCallbackFunc:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'회사조회,회사코드,회사명',nameId:'ed_coNm',style:'',id:'udc_coCd',btnId:'btn_company',code:'coCd','ev:onclickEvent':'scwin.udc_subsidiaryCoCd_onclickEvent',UpperFlagCode:'1',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'3',objTypeCode:'data',objTypeName:'data',validExpCode:'회사코드:yes',popupGridHeadTitle:'회사코드,회사명',name:'coNm',popupGridHiddenColumn:'2,3,4,5,7,8,9,10','ev:onblurCodeEvent':'scwin.udc_subsidiaryCoCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_subsidiaryCoCd_onblurNameEvent',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_stdDt',style:'',objType:'data',displayFormat:'yyyy/MM/dd',title:'기준일자',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.btn_reset_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'받을어음 잔액',class:'tit',tagname:'h3'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',btnPlusYn:'Y',gridDownYn:'Y',templateYn:'N',gridDownFn:'scwin.f_Export1',gridDownUserAuth:'X',btnUser:'Y',gridID:'gr_billRecv'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_billRecv',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_billRecv',visibleRowNum:'5',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'bankNm',blockSelect:'false',displayMode:'label',value:'금융기관'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'250',inputType:'text',id:'busiNm',blockSelect:'false',displayMode:'label',value:'거래처명'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'befRamt',blockSelect:'false',displayMode:'label',value:'전월말잔액'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'addAmt',blockSelect:'false',displayMode:'label',value:'증가금액'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'decAmt',value:'감소금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ramt',value:'현재잔액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'bankNm',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'250',inputType:'text',id:'busiNm',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'befRamt',blockSelect:'false',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'addAmt',blockSelect:'false',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'decAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ramt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',value:'총합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column20',displayMode:'label',textAlign:'right',expression:'sum(\'befRamt\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column19',displayMode:'label',textAlign:'right',expression:'sum(\'addAmt\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column18',displayMode:'label',textAlign:'right',expression:'sum(\'decAmt\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column17',displayMode:'label',textAlign:'right',expression:'sum(\'ramt\')',displayFormat:'#,###',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'ed_totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'(단위 : 원)',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'월별 받을어음 잔액',class:'tit'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',btnPlusYn:'Y',btnUser:'N',gridDownYn:'Y',templateYn:'N',gridDownFn:'scwin.f_Export2',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'xf:group',A:{id:'',class:''},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_monBillRecv',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_monBillRecv',visibleRowNum:'5',class:'wq_gvw',checkReadOnlyOnPasteEnable:''},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'200',inputType:'text',id:'column12',blockSelect:'false',displayMode:'label',value:'만기월'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'dueMon',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column10',blockSelect:'false',displayMode:'label',value:'합계'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'200',inputType:'text',id:'bankNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'expression',id:'exp_ramt',blockSelect:'false',displayMode:'label',expression:'sum(\'ramt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'ramt',blockSelect:'false',displayMode:'label',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column15',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column14',displayMode:'label',expression:'sum(\'ramt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column13',displayMode:'label',textAlign:'right',expression:'sum(\'ramt\')'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'ed_totalRows2',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(단위 : 원)',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})