/*amd /ui/ac/fi/taxbiz/vatctrl/fi_100_01_20p.xml 39642 3bcc8967a14c83dc8c1789897c7f2229f81d06a2158691019d4683f365677a8f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'declarYr',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsSellClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatDeclarAcctDeptCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatDeclarAcctDeptNm',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'declarCrn',name:'name5',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'vatQuartYyClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'evidClsCd',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evid',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'declarYr',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatQuartYyClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiClsCd',name:'name3',dataType:'text',defaultValue:'',encYN:'nam'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSellClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarCrn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnCrn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnBusiNmCmpy',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'numSpplyAmt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'numVatAmt',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'numCnt',name:'name14',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_up_evid',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'declarYr',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vatQuartYyClsCd',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',defaultValue:'',encYN:'nam',id:'busiClsCd',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vatDeclarAcctDeptCd',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vatDeclarAcctDeptNm',name:'name5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsSellClsCd',name:'name6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'evidClsCd',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'evidClsNm',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'declarCrn',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'txnCrn',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'txnBusiNmCmpy',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'numSpplyAmt',name:'name12'}},{T:1,N:'w2:column',A:{dataType:'text',id:'numVatAmt',name:'name13'}},{T:1,N:'w2:column',A:{dataType:'text',id:'numCnt',name:'name14'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_tmp_evid',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'declarYr',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vatQuartYyClsCd',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',defaultValue:'',encYN:'nam',id:'busiClsCd',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vatDeclarAcctDeptCd',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vatDeclarAcctDeptNm',name:'name5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsSellClsCd',name:'name6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'evidClsCd',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'evidClsNm',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'declarCrn',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'txnCrn',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'txnBusiNmCmpy',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'numSpplyAmt',name:'name12'}},{T:1,N:'w2:column',A:{dataType:'text',id:'numVatAmt',name:'name13'}},{T:1,N:'w2:column',A:{dataType:'text',id:'numCnt',name:'name14'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.vatdeclar.RetrieveValueAddedTaxMonthCumDataCtrtCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_evid","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_evid","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.taxbiz.vatdeclar.CreateValueAddedTaxMonthCumDataCtrtCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_evid","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.sysAdminYn = scwin.login.sysAdminYn;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.isSubCompany;
scwin.txtCoClsCd;

// String systemPathKey =  DFWConstants.FILE_UPLOAD_SYSTEM_PATH ;
// String systemPathVal =  "common/csv/uploadTemp";
// String path = "/WEB-INF/struts_config/pt/co.xml";

scwin.onpageload = function () {};
scwin.onUdcCompleted = async function () {
  udc_bottom.getChildren()[0].getScope().scope.btn_rowDel.setLabel("전체삭제");
  // a.setValue("ddd")
  const codeOptions = [{
    grpCd: "FI019",
    compID: "acb_pchsSellClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  ica_declarYr.setValue(WebSquare.date.getCurrentServerDate().substring(0, 4));
  acb_vatQuartYyClsCd.getSelectedIndex(0);
  ica_declarYr.focus();
};

//-------------------------------------------------------------------------
// 조회 조건 검증
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  if (!(await $c.gus.cfValidate($p, [ica_declarYr]))) {
    return false;
  }
  if ($c.gus.cfIsNull($p, ed_declarYr.text)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["일자"]);
    ica_declarYr.focus();
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [ica_declarYr]);
  //f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------

scwin.f_openPopUp = function (flag, check) {
  ed_declarCrn.setValue("");
  var rtnList = new Array();
  // 부가세신고부서조회
  var param = ",,,,," + ica_declarYr.getValue().substring(0, 4);
  rtnList = udc_vatDeclarAcctDeptCd.cfCommonPopUp(scwin.udc_vatDeclarAcctDeptCd_callBackFunc, ed_vatDeclarAcctDeptCd.getValue().trim(), ed_vatDeclarAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
};
scwin.udc_vatDeclarAcctDeptCd_callBackFunc = function (rtnList) {
  scwin.f_resultPopEd(ed_vatDeclarAcctDeptCd, ed_vatDeclarAcctDeptNm, rtnList);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_vatDeclarAcctDeptCd.setValue(rtnList[2]); //부가세부서코드
    ed_vatDeclarAcctDeptNm.setValue(rtnList[3]); //부가세부서명
    ed_declarCrn.setValue(rtnList[5]); //부가세사업자번호
    ed_vatDeclarAcctDeptCd.options.hidVal = rtnList[2]; //히든값        
  } else {
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_vatDeclarAcctDeptNm.setValue("");
    ed_declarCrn.setValue("");
    ed_vatDeclarAcctDeptCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// function name : f_DeleteRow
// function desc : 행삭제
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_DeleteRow = function () {
  ds_evid.deleteRow(ds_evid.getRowPosition());
};

//-------------------------------------------------------------------------
// function name : f_DeleteRow
// function desc : 행전체삭제
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_DeleteAllRow = function () {
  for (let i = 0; i < ds_evid.getTotalRow(); i++) {
    ds_evid.deleteRow(i);
  }
};

//-------------------------------------------------------------------------
// function name : f_CancelRow
// function desc : 행취소
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_CancelRow = function () {
  ds_evid.undoRow(ds_evid.getRowPosition());
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
    strCd.options.hidVal = rtnList[0]; // 히든값
  } else {
    strCd.setValue("");
    strNm.setValue("");
    strCd.options.hidVal = "";
  }
};
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_vatDeclarAcctDeptCd, ed_vatDeclarAcctDeptNm, ed_declarCrn]); //  부가세 신고 부서  
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if ($c.gus.cfIsNull($p, ica_declarYr.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["일자"]);
    ica_declarYr.focus();
    return false;
  }
  dma_search.set("declarYr", ica_declarYr.getValue());
  dma_search.set("pchsSellClsCd", acb_pchsSellClsCd.getValue());
  dma_search.set("declarCrn", ed_declarCrn.getValue());
  dma_search.set("vatQuartYyClsCd", acb_vatQuartYyClsCd.getValue());
  dma_search.set("evidClsCd", acb_evidClsCd.getValue());
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장 
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다. 
  if (ds_evid.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("데이타"));
    return;
  }
  for (var i = 0; i < ds_evid.getTotalRow(); i++) {
    if (ds_evid.getCellData(i, "chk") == "1") {
      if (ds_evid.getCellData(i, "numSpplyAmt") == "" && ds_master.getCellData(i, "numSpplyAmt") != "0") {
        await $c.win.alert($p, "선택한 " + (i + 1) + "번째 행의 공급금액을(를) 입력하십시요");
        ds_evid.setRowPosition(i);
        gr_evid.setFocusedCell(i, "numSpplyAmt", true);
        return;
      }
      if (ds_evid.getCellData(i, "numVatAmt") == "" && ds_master.getCellData(i, "numVatAmt") != "0") {
        await $c.win.alert($p, "선택한 " + (i + 1) + "번째 행의 부가세을(를) 입력하십시요");
        ds_evid.setRowPosition(i);
        gr_evid.setFocusedCell(i, "numVatAmt", true);
        return;
      }
      if (ds_evid.getCellData(i, "numCnt") == "" && ds_master.getCellData(i, "numCnt") != "0") {
        await $c.win.alert($p, "선택한 " + i + "번째 행의 매수을(를) 입력하십시요");
        ds_evid.setRowPosition(i);
        gr_evid.setFocusedCell(i, "numCnt", true);
        return;
      }
    }
  }
  if ((await $c.win.confirm($p, "저장 하시겠습니까?")) == true) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// function name : f_GridToExcel
// function desc : 엑셀저장
// function Parameter : gr_groupCode : 그리드명, gridName : 엑셀저장명
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (ds_evid.getTotalRow() <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_009, Array("데이타")); // 출력할 @이(가) 없습니다.
    return false;
  }
  let options = {
    fileName: "부가세조정내역",
    // + ".xls",
    sheetName: "부가세조정내역",
    type: 1,
    headerColor: "#eeeeee" //"#E8E8E8", //연한회색 #33CCCC
  };
  //그리드에 대한 내용을 추가 옵션
  // let infoArr = [
  //     //제목
  //     {
  //         // rowIndex: 0               //제목을 표시할 행 index
  //         // , colIndex: 0               //제목을 표시할 열 index
  //         // , text: "대출상환 내역"          //표시할 내용(제목)
  //         // , textAlign: "center"       //표시할 내용의 정렬 방법(left, center, right)
  //         // , fontSize: "18px"          //폰트 size
  //         // , fontName: "돋움체"        //폰트이름 
  //         // , drawBorder: false         //cell의 border 지정(true, false)
  //         rowIndex : 0, 
  //         colIndex : 0, 
  //         rowSpan : 1,
  //         colSpan : 14, 
  //         text : "부가세조정내역" , 
  //         textAlign : "center",
  //         fontSize : 12,
  //         drawBorder:false
  //     }
  // ];

  $c.data.downloadGridViewExcel($p, gr_evid, options, "");
};

//-------------------------------------------------------------------------
// 파일 확장자 체크
//-------------------------------------------------------------------------
// scwin.f_CheckFileExt = function(ext, path){
//     ext = ext.toUpperCase();
//     path = path.toUpperCase();
//     elen = ext.length;
//     flen = path.length;
//     return (ext == path.substring((flen-elen), flen));
// }

//drmFileSubmit명 고정
// scwin.drmFileSubmit = function() {
//     var formObj = document.frm ; 
//     $c.gus.cfDrmUploadFile( formObj , fileUploadGDS, "f_Upload1");
// }

// 엑셀 Upload
scwin.f_Upload1 = async function () {
  ds_up_evid.removeAll();
  ds_evid.removeAll();

  // ds_up_evid.DataId = fileUploadGDS.NameValue( 0, "filePath" );
  // ds_up_evid.Reset();
  // resetForm('frm');
  // $c.gus.cfProgressWinOpen();
  // window.setTimeout("f_Upload()",1000);//시간

  if (lc_ext.getValue() == "1") {
    // xlsx, csv 선택값

    let options = {
      // "fileName": "gridDataUpload.csv",
      // "status": "C",
      // "header": 1,
      // "type": "1",
      // // "startRowIndex": 0,
      // //"delim":"||",     //[default: ',']CSV 파일에서 데이터를 구분할 구분자
      "header": 1,
      "type": "1",
      "startRowIndex": 1,
      // "footerExist": 1,
      "fileName": "gridDataUpload.csv"
    };
    await $c.data.uploadGridViewCSV($p, gr_evid_excel, options); // CSV를 선택하였을 경우
  } else {
    let options = {
      "fileName": "gridDataUpload.xlsx",
      "status": "C",
      "headerExist": 1,
      "useMaxByteLength": ",",
      "type": "1",
      "startRowIndex": 0,
      // "footerExist": 1,
      "hidden": 1
    };
    await $c.data.uploadGridViewExcel($p, gr_evid_excel, options); // XLSX를 선택하였을 경우
  }
};

//-------------------------------------------------------------------------
// function name : f_Upload
// function desc : Excel등록
//-------------------------------------------------------------------------
scwin.f_Upload = async function () {
  if (ds_up_evid.getTotalRow() == 0) {
    // $c.gus.cfProgressWinClose();
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }

  // ds_tmp_evid.ImportData(ds_up_evid.ExportData(1, ds_up_evid.CountRow, true));
  ds_evid.setJSON(ds_up_evid.getAllJSON());
  ds_evid.modifyAllStatus("C");
  for (let i = 0; i < ds_evid.getTotalRow(); i++) {
    if (!$c.num.isNumber($p, ds_evid.getCellData(i, "numSpplyAmt")) || ds_evid.getCellData(i, "numSpplyAmt") == 0) {
      ds_evid.setCellData(i, "numSpplyAmt", 0);
    }
    if (!$c.num.isNumber($p, ds_evid.getCellData(i, "numVatAmt")) || ds_evid.getCellData(i, "numVatAmt") == 0) {
      ds_evid.setCellData(i, "numVatAmt", 0);
    }
    if (!$c.num.isNumber($p, ds_evid.getCellData(i, "numCnt")) || ds_evid.getCellData(i, "numCnt") == 0) {
      ds_evid.setCellData(i, "numCnt", 0);
    }
  }

  // for(i=0 ;i < ds_tmp_evid.getTotalRow(); i++) {
  //     ds_evid.insertRow();  
  //     ds_evid.setCellData(i,"declarYr",ds_tmp_evid.getCellData(i,"declarYr"));       
  //     ds_evid.setCellData(i,"vatQuartYyClsCd",ds_tmp_evid.getCellData(i,"vatQuartYyClsCd"));                                     
  //     ds_evid.setCellData(i,"pchsSellClsCd",ds_tmp_evid.getCellData(i,"pchsSellClsCd"));                                     
  //     ds_evid.setCellData(i,"declarCrn",ds_tmp_evid.getCellData(i,"declarCrn"));                                            
  //     ds_evid.setCellData(i,"txnCrn",ds_tmp_evid.getCellData(i,"txnCrn"));                                                   
  //     ds_evid.setCellData(i,"numSpplyAmt",ds_tmp_evid.getCellData(i,"numSpplyAmt"));                                        
  //     ds_evid.setCellData(i,"numVatAmt",ds_tmp_evid.getCellData(i,"numVatAmt"));                                            
  //     ds_evid.setCellData(i,"numCnt",ds_tmp_evid.getCellData(i,"numCnt"));     
  // }

  // gr_evid.ReDraw = true;
  //ds_evid.DeleteRow(1);	
  ds_tmp_evid.removeAll();
  // $c.gus.cfProgressWinClose();

  ed_totalRow.setValue(ds_evid.getTotalRow());
  await $c.gus.cfAlertMsg($p, "업로드작업이 완료되었습니다.");
};
scwin.udc_c_vatDeclarAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('', 'F');
};
scwin.udc_c_vatDeclarAcctDeptCd_onblurCodeEvent = function (e) {
  if (ed_vatDeclarAcctDeptCd.getValue().trim() == ed_vatDeclarAcctDeptCd.options.hidVal) return;
  ed_vatDeclarAcctDeptNm.setValue("");
  ed_declarCrn.setValue("");
  ed_vatDeclarAcctDeptCd.options.hidVal = "";
  if (ed_vatDeclarAcctDeptCd.getValue().trim() != "") scwin.f_openPopUp('', 'T');
};
scwin.ica_declarYr_onblur = function (e) {
  if (ed_vatDeclarAcctDeptCd.getValue() == null || ed_vatDeclarAcctDeptCd.getValue() == "") {
    ed_vatDeclarAcctDeptCd.options.hidVal = "";
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_vatDeclarAcctDeptNm.setValue("");
    ed_declarCrn.setValue("");
  } else {
    scwin.f_openPopUp('', 'T');
  }
};
scwin.sbm_search_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    if (ds_evid.getTotalRow() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
  }
  ed_totalRow.setValue(ds_evid.getTotalRow());
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_Retrieve();
  }
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.busiClsCdFormat = function (value) {
  if (value == "1") {
    return "사업자";
  } else if (value == "2") {
    return "주민번호";
  } else {
    return value;
  }
};
scwin.pchsSellClsCdFormat = function (value) {
  if (value == ACConstants.SELL) {
    return "매출";
  } else if (value == ACConstants.PCHS) {
    return "매입";
  } else {
    return value;
  }
};
scwin.evidClsNmFormat = function (data, formattedData, rowIndex, colIndex) {
  var value = ds_evid.getCellData(rowIndex, "evidClsCd");
  if (value == "10") {
    return "세금계산서";
  } else if (value == "30") {
    return "계산서";
  } else {
    return data;
  }
};
scwin.gr_evid_excel_onfilereadend = function (value) {
  scwin.f_Upload();
};
scwin.btnUpload_onclick = function (e) {
  scwin.f_Upload1();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신고년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:'',id:'ica_declarYr',style:'',mandatory:'true',title:'신고년월','ev:onblur':'scwin.ica_declarYr_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입/출 구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_pchsSellClsCd',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세신고부서 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_vatDeclarAcctDeptCd',btnId:'btn_vatDeclarAcctDeptCd',codeId:'ed_vatDeclarAcctDeptCd',nameId:'ed_vatDeclarAcctDeptNm',popupID:'popup_c_vatDeclarAcctDeptCd',validTitle:'부가세관리부서',selectID:'retrieveVatDeclarAcctDeptCd',refDataCollection:'dma_search',code:'vatDeclarAcctDeptCd',name:'vatDeclarAcctDeptNm',maxlengthCode:'5',objTypeCode:'key',allowCharCode:'0-9',editTypeCode:'select',validExpCode:'부가세관리부서',maxlengthName:'30',objTypeName:'key',style:'','ev:onclickEvent':'scwin.udc_c_vatDeclarAcctDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_c_vatDeclarAcctDeptCd_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'xf:input',A:{style:'width: 80px;',id:'ed_declarCrn',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차수 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_vatQuartYyClsCd',style:'width: 100px;',submenuSize:'fixed',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'4차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'증빙구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'acb_evidClsCd',style:'width:148px; height:21px; ',submenuSize:'auto',search:'start',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'',emptyItem:'true',emptyValue:' '},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'세금계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'30'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_evid',gridDownFn:'scwin.f_GridToExcel',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_evid',focusMode:'row',id:'gr_evid',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'신고</br>년도',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'분기',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'사업자구분',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'신고부서</br>코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'신고부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'매출입</br>구분',width:'100'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column49',value:'증빙구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'증빙구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column43',value:'신고사업자</br>등록번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'거래사업자</br>등록번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column37',value:'거래사업자</br>상호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'공급가액',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'부가세',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'매수',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'declarYr',inputType:'text',style:'',value:'',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatQuartYyClsCd',inputType:'text',style:'',value:'',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'busiClsCd',inputType:'text',style:'',value:'',width:'120',hidden:'true',readOnly:'true',displayFormatter:'scwin.busiClsCdFormat'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatDeclarAcctDeptCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatDeclarAcctDeptNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSellClsCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true',displayFormatter:'scwin.pchsSellClsCdFormat',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'evidClsCd',value:'',displayMode:'label',hidden:'true',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'evidClsNm',value:'',displayMode:'label',readOnly:'true',customFormatter:'scwin.evidClsNmFormat',colMerge:'true',upperColumn:'pchsSellClsCd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'declarCrn',value:'',displayMode:'label',readOnly:'true',colMerge:'true',upperColumn:'pchsSellClsCd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'txnCrn',value:'',displayMode:'label',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'txnBusiNmCmpy',value:'',displayMode:'label',textAlign:'left',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'numSpplyAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',maxLength:'13.0',allowChar:'0-9',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'numVatAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',maxLength:'13.0',allowChar:'0-9',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'numCnt',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',maxLength:'13.0',allowChar:'0-9',displayFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column33',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'numSpplyAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column36',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'numVatAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column54',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'numCnt\')',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'N',EngYn:'N',btnDelYn:'Y',btnRowDelYn:'Y',id:'udc_bottom',cancelFunction:'scwin.f_CancelRow',rowDelFunction:'scwin.f_DeleteAllRow',delFunction:'scwin.f_DeleteRow',rowDelUserAuth:'D',delUserAuth:'D',cancelUserAuth:'C'}}]}]}]},{T:1,N:'w2:textbox',A:{class:'txt-dot txt-blue',id:'',label:'업로드파일 형식 : 파일명.CSV<br/>신고년도/분기/매출입구분:1(매출),2(매입)/신고사업자등록번호/거래사업자등록번호/공급가액/부가세/매수<br/>예) 2011/1/1/1208762427/6228121008/1000/100/1',style:'',escape:'false'}},{T:1,N:'xf:group',A:{class:'btnbox',id:'btnGroup',style:';padding-top:10px;'},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:select1',A:{appearance:'full',cols:'',id:'lc_ext',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'xlsx'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'csv'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btnUpload',style:'',type:'button','ev:onclick':'scwin.btnUpload_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀업로드(CSV)'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_up_evid',focusMode:'row',id:'gr_evid_excel',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'display: none;',visibleRowNum:'6',visibleRowNumFix:'true',rowStatusVisible:'true','ev:onfilereadend':'scwin.gr_evid_excel_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'신고</br>년도',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'분기',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'매출입</br>구분',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column43',value:'신고사업자</br>등록번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'거래사업자</br>등록번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'공급가액',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'부가세',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'매수',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'declarYr',inputType:'text',style:'',value:'',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatQuartYyClsCd',inputType:'text',style:'',value:'',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSellClsCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true',displayFormatter:'scwin.pchsSellClsCdFormat',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'declarCrn',value:'',displayMode:'label',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'txnCrn',value:'',displayMode:'label',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'numSpplyAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'numVatAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'numCnt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column33',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'numSpplyAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column36',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'numVatAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column54',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'numCnt\')'}}]}]}]}]}]}]}]})