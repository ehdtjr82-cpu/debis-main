/*amd /ui/ac/fi/taxbiz/omissionmgnt/fi_406_01_02b.xml 38422 47e33bdc15d6aee28eac1a4a0d47547410a61851c8854d5de3471e21c4d07e5a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'startDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sapuCls',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'puExceptCls',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evid'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etaxId',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sapuCls',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etaxType',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etaxKind',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recverCrn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiClsNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyBusiNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyCompName',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supBusiNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supCompName',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'writeDate',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transferDate',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'supAmt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userStd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userFir',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userSec',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modPsblYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'puRegYn',name:'',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_evid","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_evid","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save1',action:'/ac.fi.taxbiz.omissionmgnt.SendEmailOmissionListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_search","key":"IN_DS1"}',target:'data:json,{"id":"dma_search","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save1_submitdone','ev:submiterror':'scwin.sbm_save1_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save2',action:'/ac.fi.taxbiz.omissionmgnt.CreateExceptEmailListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action" : "modified", "id":"ds_evid","key":"IN_DS1"}',target:'data:json,{"id":"ds_evid","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save2_submitdone','ev:submiterror':'scwin.sbm_save2_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save3',action:'/ac.fi.taxbiz.omissionmgnt.DeleteExceptEmailListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action" : "modified", "id":"ds_evid","key":"IN_DS1"}',target:'data:json,{"id":"ds_evid","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save3_submitdone','ev:submiterror':'scwin.sbm_save3_submiterror',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_406_01_02b
// 이름     : e메일발송(매출/매입)
// 경로     : 회계/재무회계/세무/세금계산서누락관리/
// 작 성 자 : 오영재
// 작 업 일 : 
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================
scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.gus.cfIsNull($p, scwin.memJson.privAdmin) ? '' : scwin.memJson.privAdmin;
scwin.today = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.strFromDate = scwin.today.substring(0, 6) + "01";
scwin.lastDay = scwin.today.substring(0, 4) + scwin.today.substring(4, 6) + new Date(scwin.today.substring(0, 4), scwin.today.substring(4, 6), 0).getDate();
scwin.strToDate = scwin.lastDay;
scwin.g_sCurrDate = scwin.today;
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; //소속 자회사
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = $c.gus.cfIsNull($p, scwin.memJson.userHomeClsCd) ? '' : scwin.memJson.userHomeClsCd; //사용자소속구분코드
scwin.isSubCompany = false;

//hidden
scwin.txt_coCd = "";
scwin.onpageload = function () {
  //gr_evid1.hide();

  const codeOptions = [{
    grpCd: "FI019",
    compID: "lc_sapuCls"
  }];
  // console.log(" codeOptions : "+ JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
  grp_round0.show();
  grp_round1.hide();
};
scwin.ondataload = function () {
  lc_sapuCls.setSelectedIndex(0);
};
scwin.onUdcCompleted = function () {
  scwin.f_setCalender();
  lc_puExceptCls.setSelectedIndex(0);
  scwin.txt_coCd = scwin.vLoginCoCd;
};

//-------------------------------------------------------------------------
// 조회조건 달력 셋팅
//-------------------------------------------------------------------------   	
scwin.f_setCalender = function () {
  ed_startDt.setValue(scwin.strFromDate);
  ed_endDt.setValue(scwin.strToDate);
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_reset_onclick = function (e) {
  scwin.f_FieldClear();
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [ed_startDt, ed_endDt]);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  // 시작, 종료일자 체크
  if (ed_startDt.getValue() == "" || ed_endDt.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["공급일자 "]);
    ed_startDt.focus();
    return;
  }

  //시작일자가 종료일자 이전인지 check
  if (!$c.gus.cfIsAfterDate($p, ed_startDt.getValue(), ed_endDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }

  //ds_search.UseChangeInfo = false;

  dma_search.set("startDt", ed_startDt.getValue());
  dma_search.set("endDt", ed_endDt.getValue());
  dma_search.set("sapuCls", lc_sapuCls.getValue());
  dma_search.set("puExceptCls", lc_puExceptCls.getValue());
  dma_search.set("coCd", scwin.txt_coCd);
  if (lc_sapuCls.getSelectedIndex() == '0') {
    //tr_search.Action="/ac.fi.taxbiz.omissionmgnt.RetrieveOmissionSaListCMD.do";
    sbm_search.action = "/ac.fi.taxbiz.omissionmgnt.RetrieveOmissionSaListCMD.do";
  } else {
    //tr_search.Action="/ac.fi.taxbiz.omissionmgnt.RetrieveOmissionPuListCMD.do";
    sbm_search.action = "/ac.fi.taxbiz.omissionmgnt.RetrieveOmissionPuListCMD.do";
  }
  //tr_search.post();
  $c.sbm.execute($p, sbm_search);
};
scwin.sbm_search_submitdone = function (e) {
  let rowCnt = ds_evid.getRowCount();
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  if (lc_sapuCls.getSelectedIndex() == 0) {
    //gr_title.setValue("전자세금계산서 누락 리스트(매출)");
    ed_totalRows.setValue(rowCnt);
    grp_round0.show();
    grp_round1.hide();
  } else {
    //gr_title.setValue("증빙 누락 리스트(매입)");
    ed_totalRows1.setValue(rowCnt);
    grp_round0.hide();
    grp_round1.show();
  }
};
scwin.sbm_search_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.sbm_save1_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.win.alert($p, "e메일 발송이 완료 되었습니다.");
  scwin.f_Retrieve();
};
scwin.sbm_save1_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.sbm_save2_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};
scwin.sbm_save2_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.sbm_save3_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};
scwin.sbm_save3_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

//-------------------------------------------------------------------------
// function name : f_SendEmail()
// function desc : 저장 
//-------------------------------------------------------------------------
scwin.f_SendEmail = async function () {
  // 시작, 종료일자 체크
  if (ed_startDt.getValue() == "" || ed_endDt.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["공급일자 "]);
    ed_startDt.focus();
    return;
  }

  //시작일자가 종료일자 이전인지 check
  if (!$c.gus.cfIsAfterDate($p, ed_startDt.getValue(), ed_endDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }
  let chkCnt = 0;
  for (i = 0; i < ds_evid.getRowCount(); i++) {
    if (ds_evid.getCellData(i, "userSec") != '') {
      chkCnt++;
    }
  }
  if (chkCnt == 0) {
    $c.win.alert($p, "2차대상에 등록된 이메일이 하나도 없습니다.\n\n'대체e메일등록' 화면에서 2차대상 이메일을 등록 하시기 바랍니다.");
    return;
  }

  //ds_search.UseChangeInfo = false;

  let ret;
  ret = await $c.win.confirm($p, "저장 하시겠습니까?");
  if (ret == true) {
    //tr_save1.post();
    $c.sbm.execute($p, sbm_save1);
  }
};

//-------------------------------------------------------------------------
// function name : f_CreateMailInfo()
// function desc : 저장 	tr_save2
//-------------------------------------------------------------------------
scwin.f_CreateMailInfo = async function () {
  for (i = 0; i < ds_evid.getRowCount(); i++) {
    if (ds_evid.getCellData(i, "chk") == 'T' && ds_evid.getCellData(i, "puRegYn") == 'Y') {
      $c.win.alert($p, i + "번째 행의 데이터는 이미 발송제외 등록이 되어 있습니다.");
      return;
    }
  }
  let chkCnt = 0;
  for (i = 0; i < ds_evid.getRowCount(); i++) {
    if (ds_evid.getCellData(i, "chk") == "T") {
      chkCnt++;
      break;
    }
  }
  if (chkCnt == 0) {
    $c.win.alert($p, "선택한 항목이 없습니다.");
    return false;
  }
  let ret;
  ret = await $c.win.confirm($p, "저장 하시겠습니까?");
  if (ret == true) {
    //tr_save2.post();
    $c.sbm.execute($p, sbm_save2);
  }
};

//-------------------------------------------------------------------------
// function name : f_DeleteMailInfo()
// function desc : 저장 	tr_save3
//-------------------------------------------------------------------------
scwin.f_DeleteMailInfo = async function () {
  for (i = 0; i < ds_evid.getRowCount(); i++) {
    if (ds_evid.getCellData(i, "chk") == 'T' && ds_evid.getCellData(i, "puRegYn") == 'N') {
      $c.win.alert($p, i + "번째 행의 데이터는 발송제외 등록이 되어 있지 않습니다.");
      return;
    }
  }
  let chkCnt = 0;
  for (i = 0; i < ds_evid.getRowCount(); i++) {
    if (ds_evid.getCellData(i, "chk") == "T") {
      chkCnt++;
      break;
    }
  }
  if (chkCnt == 0) {
    $c.win.alert($p, "선택한 항목이 없습니다.");
    return false;
  }
  let ret;
  ret = await $c.win.confirm($p, "저장 하시겠습니까?");
  if (ret == true) {
    ds_evid.setCellData(0, "userFir", 'e메일발송');
    //tr_save3.post();
    $c.sbm.execute($p, sbm_save3);
  }
};

//-------------------------------------------------------------------------
// 증빙내역
//-------------------------------------------------------------------------
scwin.f_Evidence = async function (row) {
  if (row >= 0) {
    let data = {
      "popupMode": "U",
      "coCd": ds_evid.getCellData(row, "coCd"),
      "coClsCd": ds_evid.getCellData(row, "coClsCd"),
      "postYn": ds_evid.getCellData(row, "postYn"),
      "modPsblYn": ds_evid.getCellData(row, "modPsblYn"),
      "delYn": ds_evid.getCellData(row, "delYn"),
      "pchsEvidNo": ds_evid.getCellData(row, "sellVatNo"),
      "pchsSellCls": "1"
    };
    let strPath = "/ui/ac/fi/taxbiz/vatctrl/fi_401_01_09p.xml";
    const options = {
      id: "fi_401_01_09p",
      type: "popup",
      modal: true,
      popupName: "부가세내역등록",
      title: "부가세내역등록",
      type: "browserPopup",
      width: 880
    };
    let returnValue;
    returnValue = await $c.win.openPopup($p, strPath, options, data);

    //다시 조회함    
    //	f_Retrieve();
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, Array("Row"));
  }
};

//-------------------------------------------------------------------------
// function name : f_GridToExcel
// function desc : 엑셀저장
// function Parameter : gr_groupCode : 그리드명, gridName : 엑셀저장명
//-------------------------------------------------------------------------
scwin.f_GridToExcel = function () {
  if (ds_evid.getRowCount() <= 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_009, Array("데이타")); // 출력할 @이(가) 없습니다.
    return false;
  }
  let gridId = lc_sapuCls.getSelectedIndex() == 0 ? gr_evid0 : gr_evid1;
  let sheetTitle = "누락 리스트";
  const infoArr = [];
  const options = {
    fileName: sheetTitle + ".xls",
    // + ".xls",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gridId, options, infoArr);
};
scwin.gr_evid0_oncellclick = function (rowIndex, columnIndex, columnId) {
  let Colid = columnId;
  let Row = rowIndex;
  if (Colid == "slipNo" && Row >= 0) {
    $c.gus.cfShowSlipInfo($p, ds_evid.getCellData(Row, "slipNo"));
  }
  if (Colid == "sellVatNo" && Row >= 0) {
    scwin.f_Evidence(Row);
  }
};
scwin.gr_evid1_oncellclick = function (rowIndex, columnIndex, columnId) {
  let Colid = columnId;
  let Row = rowIndex;
  if (Colid == "slipNo" && Row >= 0) {
    $c.gus.cfShowSlipInfo($p, ds_evid.getCellData(Row, "slipNo"));
  }
  if (Colid == "sellVatNo" && Row >= 0) {
    scwin.f_Evidence(Row);
  }
};
scwin.lc_sapuCls_onchange = function (info) {
  if (lc_sapuCls.getSelectedIndex() == 0) {
    //alert("매출");
    $c.gus.cfEnableObjects($p, [lc_puExceptCls, btn_CreateMailInfo, btn_DeleteMailInfo]);
    //f_Retrieve();
  } else {
    //alert("매입");
    $c.gus.cfEnableObjects($p, [lc_puExceptCls, btn_CreateMailInfo, btn_DeleteMailInfo]);
    //f_Retrieve();
  }
};
scwin.sapuCls = function (v) {
  return v == "SA" ? "매출" : "매입";
};
scwin.busiClsNm = function (v) {
  let busiMap = {
    "1": "법인사업자",
    "2": "개인사업자",
    "3": "주민등록신고자",
    "4": "기타",
    "5": "재외국인사업자"
  };
  return busiMap[v];
};
scwin.btn_CreateMailInfo_onclick = function (e) {
  scwin.f_CreateMailInfo();
};
scwin.btn_DeleteMailInfo_onclick = function (e) {
  scwin.f_DeleteMailInfo();
};
scwin.btn_SendEmail_onclick = function (e) {
  scwin.f_SendEmail();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'공급일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_fromToCalendar3',refEdDt:'',edFromId:'ed_startDt',edToId:'ed_endDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출/입',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_sapuCls',style:'width: 100px;',submenuSize:'fixed','ev:onchange':'scwin.lc_sapuCls_onchange',objType:'data',sortOption:'value'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'발송 제외 여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_puExceptCls',style:'width: 150px;',submenuSize:'fixed',ref:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'제외건 제외'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'제외건만'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.btn_reset_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'grp_round0',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'grp_title0',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'gr_title',label:'전자세금계산서 누락 리스트(매출)',class:'tit'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',btnUser:'Y',gridDownUserAuth:'X',gridID:'gr_evid0',grdDownOpts:'{"fileName":"누락리스트.xlsx", "sheetName":"누락리스트", "type":"1"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_evid',focusMode:'cell',id:'gr_evid0',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_evid0_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column121',value:'선택',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'매출입<br/>구분',width:'81'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'증빙구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'공급자<br/>사업자번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'공급자<br/>사업자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',value:'사업자</br>구분',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',value:'작성부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',value:'계산서</br>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'회계처리</br>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',value:'공급가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'부가세액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'부가세</br>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column118',value:'전표</br>등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column115',value:'전표등록자</br>e메일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column112',value:'1차대상',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column109',value:'2차대상',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column124',value:'발송제외<br/>등록여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'chk',value:'',displayMode:'label',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sapuCls',inputType:'text',width:'81',displayFormatter:'scwin.sapuCls',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'evidClsNm',inputType:'text',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'recverCrn',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'busiNm',inputType:'text',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'busiClsNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctDeptNm',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyDt',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'postDt',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vat',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sumAmt',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipNo',displayMode:'label',class:'underline',style:'color:blue;',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellVatNo',displayMode:'label',class:'underline',style:'color:blue;',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'email',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'userFir',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'userSec',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'puRegYn',value:'',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column123',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'81',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column66',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'spplyAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column63',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'vat\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column60',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'sum(\'sumAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column120',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column117',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column114',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column111',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column126',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white','ev:onclick':'scwin.btn_CreateMailInfo_onclick',id:'btn_CreateMailInfo',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'발송제외등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white','ev:onclick':'scwin.btn_DeleteMailInfo_onclick',id:'btn_DeleteMailInfo',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'발송제외삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white','ev:onclick':'scwin.btn_SendEmail_onclick',id:'btn_SendEmail',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2차 e메일발송'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'grp_round1',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'group5',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'textbox5',label:'증빙 누락 리스트(매입)',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{btnUser:'Y',gridDownUserAuth:'X',gridDownYn:'Y',gridID:'gr_evid1',gridUpYn:'N',grp:'grd_section2',style:'',templateYn:'N',grdDownOpts:'{"fileName":"누락리스트.xlsx", "sheetName":"누락리스트", "type":"1"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_evid','ev:oncellclick':'scwin.gr_evid1_oncellclick',focusMode:'cell',id:'gr_evid1',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column121',inputType:'text',style:'',value:'선택',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'매출입<br/>구분',width:'81'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'증빙구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'신고사업자<br/>번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'신고사업자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',value:'공급사업자<br/>번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column73',inputType:'text',value:'공급사업자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column70',inputType:'text',value:'공급사업자<br/>구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column67',inputType:'text',value:'공급금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column64',inputType:'text',value:'부가세액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column61',inputType:'text',value:'합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column58',inputType:'text',value:'작성일자',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column55',inputType:'text',value:'E메일<br/>수신자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column49',inputType:'text',value:'1차<br/>대상',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column118',inputType:'text',value:'2차<br/>대상',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column115',inputType:'text',value:'발송제외<br/>등록여부',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',falseValue:'F',id:'chk',inputType:'checkbox',style:'',trueValue:'T',value:'',valueType:'other',width:'70'}},{T:1,N:'w2:column',A:{displayFormatter:'scwin.sapuCls',displayMode:'label',id:'sapuCls',inputType:'text',readOnly:'true',width:'81'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'etaxKind',inputType:'text',readOnly:'true',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'buyBusiNo',inputType:'text',readOnly:'true',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'buyCompName',inputType:'text',readOnly:'true',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'supBusiNo',inputType:'text',readOnly:'true',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'supCompName',inputType:'text',readOnly:'true',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayFormatter:'scwin.busiClsNm',displayMode:'label',id:'busiClsNm',inputType:'text',readOnly:'true',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'supAmt',inputType:'text',readOnly:'true',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'vatAmt',inputType:'text',readOnly:'true',textAlign:'right',width:'100'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'totAmt',inputType:'text',readOnly:'true',textAlign:'right',width:'100'}},{T:1,N:'w2:column',A:{dataType:'date',displayFormat:'yyyy/MM/dd',displayMode:'label',id:'writeDate',inputType:'text',readOnly:'true',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userStd',inputType:'text',readOnly:'true',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userFir',inputType:'text',readOnly:'true',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userSec',inputType:'text',readOnly:'true',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'puRegYn',inputType:'text',readOnly:'true',width:'120'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column123',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column48',inputType:'text',width:'81'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column47',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column46',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column75',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column72',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum(\'supAmt\')',id:'column69',inputType:'expression',width:'100'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum(\'vatAmt\')',id:'column66',inputType:'expression',textAlign:'right',width:'100'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum(\'totAmt\')',id:'column63',inputType:'expression',textAlign:'right',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column60',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column57',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column51',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column120',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column117',inputType:'text',width:'120'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white','ev:onclick':'scwin.btn_CreateMailInfo_onclick',id:'trigger1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'발송제외등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white','ev:onclick':'scwin.btn_DeleteMailInfo_onclick',id:'trigger2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'발송제외삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white','ev:onclick':'scwin.btn_SendEmail_onclick',id:'trigger3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2차 e메일발송'}]}]}]}]}]}]}]}]}]})