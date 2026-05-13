/*amd /ui/tn/sd/odrmgnt/bulkodrreg/tn_202_02_07b.xml 67001 9570c01a499008e1edfdd5f12c52e72ceb6c59a7c9c2d15d75069b0effd79ab3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'uploadDtFrom',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'uploadDtTo',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result_FillUse',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'지사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출발일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKndCd',name:'차량종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrmNm',name:'차량규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptYn',name:'요율적용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minYn',name:'MIN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'marvYn',name:'다착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictYn',name:'스마트폰전송',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csctPrtYn',name:'화물위탁증',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Tmp_FillUse',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'uploadDt',name:'업로드일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'지사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출발일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKndCd',name:'차량종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrmNm',name:'차량규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptYn',name:'요율적용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minYn',name:'MIN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'marvYn',name:'다착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictYn',name:'스마트폰전송',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csctPrtYn',name:'화물위탁증',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKndNm',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrmCd',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'지사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name36',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'uploadDt',name:'업로드일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'지사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량(kg)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출발일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKndCd',name:'차량종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrmNm',name:'차량규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptYn',name:'요율적용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minYn',name:'MIN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'marvYn',name:'다착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictYn',name:'스마트폰전송',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csctPrtYn',name:'화물위탁증',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKndNm',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrmCd',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'지사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name36',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result_upload',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'uploadDt',name:'업로드일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'지사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량(kg)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출발일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKndCd',name:'차량종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrmNm',name:'차량규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptYn',name:'요율적용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minYn',name:'MIN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'marvYn',name:'다착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictYn',name:'스마트폰전송',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csctPrtYn',name:'화물위탁증',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKndNm',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrmCd',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'지사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name36',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.sd.odrmgnt.bulkodrreg.RetrieveOrderAlloccarWholeUploadCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.tn.sd.odrmgnt.bulkodrreg.RegistOrderAlloccarWholeUploadCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_result","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// NTIS/오더관리/오더배차업로드
// 조회조건 업로드일자 2020/01/02 ~ 2020/01/02 >> 106건
//                    2020/02/13 ~ 2020/02/13 >> 12건

scwin.strCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.memJson = $c.data.getMemInfo($p);
scwin.empNo = scwin.memJson.empNo;
scwin.regId = scwin.memJson.regId;
scwin.userId = scwin.memJson.userId;
scwin.showGrdNum = 2;

//-----------------------------------------------------------------------------
// 화면로딩시 
//-----------------------------------------------------------------------------
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  scwin.f_defaultValue();
};

//-----------------------------------------------------------------------------
// 조회조건 셋팅 
//-----------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  ed_uploadDtFrom.setValue(scwin.strCurrDate.substring(0, 6) + "01");
  ed_uploadDtTo.setValue(scwin.strCurrDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.strCurrDate.substring(0, 6)));
};

//-----------------------------------------------------------------------------
// 오더실적일괄생성 조회
//-----------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //날짜형식확인
  var rtn = await $c.gus.cfValidate($p, [ed_uploadDtFrom, ed_uploadDtTo]);
  if (!rtn) {
    return rtn;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_uploadDtFrom.getValue(), ed_uploadDtTo.getValue(), false)) {
    // 날짜 검사( 시작, 끝 , 검사 날짜)
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_061, ['시작범위[' + ed_uploadDtFrom.getValue() + '] ', '종료범위[' + ed_uploadDtTo.getValue() + '] 보다 이전 ']);
    ed_uploadDtTo.focus();
    return;
  }
  await $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 엑셀 다운로드 
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  var fileName = "오더배차일괄생성";
  if (ds_result.getTotalRow() == 0) {
    return;
  }
  var options = {
    fileName: fileName + ".xlsx",
    sheetName: fileName,
    hiddenVisible: true,
    type: "2"
  };
  await $c.data.downloadGridViewExcel($p, gr_result, options);
};
scwin.f_Excel2 = async function () {
  var fileName = "오더배차일괄생성";
  if (ds_result.getTotalRow() == 0) {
    return;
  }
  var options = {
    fileName: fileName + ".xlsx",
    sheetName: fileName,
    hiddenVisible: true,
    type: "2"
  };
  await $c.data.downloadGridViewExcel($p, gr_result_excel, options);
};

//-------------------------------------------------------------------------
// 엑셀 업로드 
//-------------------------------------------------------------------------
scwin.f_upload = async function () {
  var options = {
    // headerExist: 1,
    startRowIndex: 1,
    type: 1,
    status: "C",
    hidden: "0"
  };

  //파일업로드용 hide 그리드 새로 생성
  if (scwin.showGrdNum == 1) {
    await udc_grd1.uploadGridViewExcel(uploadGrid, options);
  } else if (scwin.showGrdNum == 2) {
    await udc_grd2.uploadGridViewExcel(uploadGrid, options);
  }
};

//-------------------------------------------------------------------------
// 엑셀 업로드 이후 발생 
//-------------------------------------------------------------------------
scwin.gr_result_onfilereadend = async function (value) {
  if (await scwin.f_AddRowUploaded()) {
    // $c.gus.cfProgressWinClose();
    await $c.gus.cfAlertMsg($p, "업로드작업이 완료되었습니다.");
    gr_result_excel.setColumnVisible("vehclKndCd", true); //차량종류cd
    gr_result_excel.setColumnVisible("vehclKndNm", false); //차량종류nm

    ds_result.removeAll();
    ds_Tmp_FillUse.removeAll();
    ds_result.setJSON(ds_result_upload.getAllJSON());
    ds_result.modifyAllStatus("C");
    totalRows_upload.setValue(ds_result.getTotalRow());
  }
  scwin.setGridDisplay(2);
};

//업로드 자료 추가
scwin.f_AddRowUploaded = async function () {
  // ds_Tmp_FillUse.ImportData(ds_result_FillUse.ExportData(1, ds_result_FillUse.CountRow, true));
  ds_Tmp_FillUse.setJSON(ds_result_FillUse.getAllJSON());
  ds_result_upload.removeAll(); //alertMsg 이후 ds_result setJSON 하기 위한 datalist

  for (var row = 0; row < ds_Tmp_FillUse.getTotalRow(); row++) {
    ds_result_upload.insertRow(row);
    ds_result_upload.setCellData(row, "odrKndCd", ds_Tmp_FillUse.getCellData(row, "odrKndCd"));
    ds_result_upload.setCellData(row, "lobranCd", ds_Tmp_FillUse.getCellData(row, "lobranCd"));
    ds_result_upload.setCellData(row, "bilgLodeptCd", ds_Tmp_FillUse.getCellData(row, "bilgLodeptCd"));
    ds_result_upload.setCellData(row, "sellLodeptCd", ds_Tmp_FillUse.getCellData(row, "sellLodeptCd"));
    ds_result_upload.setCellData(row, "bilgClntNo", ds_Tmp_FillUse.getCellData(row, "bilgClntNo"));
    ds_result_upload.setCellData(row, "commCd", ds_Tmp_FillUse.getCellData(row, "commCd"));
    ds_result_upload.setCellData(row, "wt", ds_Tmp_FillUse.getCellData(row, "wt"));
    ds_result_upload.setCellData(row, "unitCd", ds_Tmp_FillUse.getCellData(row, "unitCd"));
    ds_result_upload.setCellData(row, "dptWrkPlNm", ds_Tmp_FillUse.getCellData(row, "dptWrkPlNm"));
    ds_result_upload.setCellData(row, "arvWrkPlNm", ds_Tmp_FillUse.getCellData(row, "arvWrkPlNm"));
    ds_result_upload.setCellData(row, "dptDt", ds_Tmp_FillUse.getCellData(row, "dptDt"));
    ds_result_upload.setCellData(row, "arvDt", ds_Tmp_FillUse.getCellData(row, "arvDt"));
    ds_result_upload.setCellData(row, "clntNo", ds_Tmp_FillUse.getCellData(row, "clntNo"));
    ds_result_upload.setCellData(row, "vehclNo", ds_Tmp_FillUse.getCellData(row, "vehclNo"));
    ds_result_upload.setCellData(row, "vehclKndCd", ds_Tmp_FillUse.getCellData(row, "vehclKndCd"));
    ds_result_upload.setCellData(row, "vehclNrmNm", ds_Tmp_FillUse.getCellData(row, "vehclNrmNm"));

    //20180102 238975현대종합특수강 관련 추가_ 신현영 요청
    ds_result_upload.setCellData(row, "clntMgntNo", ds_Tmp_FillUse.getCellData(row, "clntMgntNo"));
    ds_result_upload.setCellData(row, "rmk", ds_Tmp_FillUse.getCellData(row, "rmk"));
    ds_result_upload.setCellData(row, "trfAdptYn", ds_Tmp_FillUse.getCellData(row, "trfAdptYn"));
    ds_result_upload.setCellData(row, "minYn", ds_Tmp_FillUse.getCellData(row, "minYn"));
    ds_result_upload.setCellData(row, "marvYn", ds_Tmp_FillUse.getCellData(row, "marvYn"));
    ds_result_upload.setCellData(row, "wrkIndictYn", ds_Tmp_FillUse.getCellData(row, "wrkIndictYn"));
    ds_result_upload.setCellData(row, "csctPrtYn", ds_Tmp_FillUse.getCellData(row, "csctPrtYn"));

    // 협력업체 빈 값일 때  
    if (ds_result_upload.getCellData(row, "clntNo") == "") {
      ds_result_upload.setCellData(row, "wrkIndictYn", "1");
      ds_result_upload.setCellData(row, "csctPrtYn", "1");
    } else {
      ds_result_upload.setCellData(row, "vehclNo", "");
      ds_result_upload.setCellData(row, "wrkIndictYn", "0");
      ds_result_upload.setCellData(row, "csctPrtYn", "0");
    }
    if (ds_result_upload.getCellData(row, "trfAdptYn") == "") {
      ds_result_upload.setCellData(row, "trfAdptYn", 0);
    }
    if (ds_result_upload.getCellData(row, "minYn") == "") {
      ds_result_upload.setCellData(row, "minYn", 0);
    }
    if (ds_result_upload.getCellData(row, "marvYn") == "") {
      ds_result_upload.setCellData(row, "marvYn", 0);
    }

    // 빈 값일 때  TON으로 셋팅 or 오늘날짜로 셋팅
    if (ds_result_upload.getCellData(row, "unitCd") == "") {
      //TON으로 셋팅
      ds_result_upload.setCellData(row, "unitCd", "TON");
    }
    if (ds_result_upload.getCellData(row, "dptDt") == "") {
      //오늘날짜로 셋팅
      ds_result_upload.setCellData(row, "dptDt", scwin.strCurrDate);
    } else if (!$c.date.isDate($p, ds_result_upload.getCellData(row, "dptDt").replaceAll("/", ""))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_018, [row + "번째 출발일"]);
    }
    if (ds_result_upload.getCellData(row, "arvDt") == "") {
      //오늘날짜로 셋팅
      ds_result_upload.setCellData(row, "arvDt", scwin.strCurrDate);
    } else if (!$c.date.isDate($p, ds_result_upload.getCellData(row, "arvDt").replaceAll("/", ""))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_018, [row + "번째 도착일"]);
    }
    if (ds_result_upload.getCellData(row, "dptDt").replaceAll("/", "") > ds_result_upload.getCellData(row, "arvDt").replaceAll("/", "")) {
      await $c.gus.cfAlertMsg($p, row + "번째 데이타에서 출발일자가 도착일자 이전이어야 합니다.");
    }
  }
  return true;
};

//그리드 팝업
scwin.f_openPopUpGrid = function (ds, row, cdColid, nmColid, gubun) {
  var pCode = "";
  var pName = "";
  var pWtitleSearch = null;
  var pWhere = ",,,T3,";
  var pNoDataCloseTF = null;
  var rtnList = [];
  pName = ds_result.getCellData(row, nmColid);
  if (gubun == 2) {
    pWhere = "";
    pWtitleSearch = "출발지,출발지코드/명";
  } else if (gubun == 3) {
    pWhere = "";
    pWtitleSearch = "도착지,도착지코드/명";
  }
  udc_WrkPlCd.cfCommonPopUp(scwin.udc_WrkPlCd_callBackFun, pName,
  //pCode
  "",
  //pName
  "T",
  //pWinCloseTF
  null,
  //pDispCnt
  null,
  //pTitle
  null,
  //pWidth
  null,
  //pHidden
  pWhere,
  //pWhere
  null,
  //pW
  null,
  //pH
  null,
  //pTop
  null,
  //pLeft
  null,
  //pExistTF - 중복체크여부 ("F")
  "F",
  //pAllSearchTF - 전체검색허용여부   ("F")
  pWtitleSearch,
  //pWtitleSearch - POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
  pNoDataCloseTF,
  //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
  null);
};
scwin.udc_WrkPlCd_callBackFun = function (rtnList) {
  var row, colNm, colIndex, colId;
  if (scwin.showGrdNum == 1) {
    row = ds_result.getRowPosition();
    colNm = gr_result.getFocusedColumnID();
    colIndex = gr_result.getFocusedColumnIndex() - 1;
    colId = gr_result.getColumnID(colIndex);
  } else if (scwin.showGrdNum == 2) {
    row = ds_result.getRowPosition();
    colNm = gr_result_excel.getFocusedColumnID();
    colId = "";
  }
  if (rtnList != null || rtnList[0] == "N/A") {
    ds_result.setCellData(row, colId, "");
    ds_result.setCellData(row, colNm, "");
  } else {
    $c.gus.cfSetGridReturnValue($p, rtnList, ds_result, row, colId, colNm);
  }
};

//-----------------------------------------------------------------------------
// 오더실적일괄생성 저장 
//-----------------------------------------------------------------------------
scwin.f_Save = async function () {
  //변경사항 확인
  if (ds_result.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, "변경사항이 없습니다."); //변경사항이 없습니다.
    return;
  }

  // 필수값 체크
  var ret = await $c.gus.cfValidate($p, [gr_result]);
  if (!ret) {
    return;
  }

  //출발일, 도착일, 단위코드 체크
  for (var i = 0; i < ds_result.getTotalRow(); i++) {
    // 빈 값일 때  TON으로 셋팅 or 오늘날짜로 셋팅
    if (ds_result.getCellData(i, "unitCd") == "") {
      //TON으로 셋팅
      ds_result.setCellData(i, "unitCd", "TON");
    }
    if (ds_result.getCellData(i, "dptDt") == "") {
      //오늘날짜로 셋팅
      ds_result.setCellData(i, "dptDt", scwin.strCurrDate);
    } else if (!$c.date.isDate($p, ds_result.getCellData(i, "dptDt").replaceAll("/", ""))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_018, [i + 1 + "번째 출발일"]);
      return;
    }
    if (ds_result.getCellData(i, "arvDt") == "") {
      //오늘날짜로 셋팅
      ds_result.setCellData(i, "arvDt", scwin.strCurrDate);
    } else if (!$c.date.isDate($p, ds_result.getCellData(i, "arvDt").replaceAll("/", ""))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_018, [i + 1 + "번째 도착일"]);
      return;
    }
    if (ds_result.getCellData(i, "dptDt").replaceAll("/", "") > ds_result.getCellData(i, "arvDt").replaceAll("/", "")) {
      await $c.gus.cfAlertMsg($p, i + 1 + "번째 , 출발일자가 도착일자 이전이어야 합니다.");
      return;
    }

    // 20180126 필수값체크
    if (ds_result.getCellData(i, "clntNo") == "" && ds_result.getCellData(i, "vehclNo") == "") {
      await $c.gus.cfAlertMsg($p, i + 1 + "번째, 협력업체코드나 차량번호는 필수입니다.");
      return;
    }
    if (ds_result.getCellData(i, "clntNo") != "" && (ds_result.getCellData(i, "vehclKndCd") == "" || ds_result.getCellData(i, "vehclNrmNm") == "")) {
      await $c.gus.cfAlertMsg($p, i + 1 + "번째, 협력업체인경우 차량종류, 규격은 필수입니다.");
      return;
    }
  }
  for (var i = 0; i < ds_result.getTotalRow(); i++) {
    ds_result.setCellData(i, "uploadDt", scwin.strCurrDate); //업로드일자
    ds_result.setCellData(i, "odrNo", ""); //오더번호
    ds_result.setCellData(i, "regId", scwin.userId); //등록자
    ds_result.setCellData(i, "regDtm", scwin.strCurrDate); //등록일시
  }

  //저장 여부 확인
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    // 저장 하시겠습니까?
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 행 추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  ds_result.insertRow(ds_result.getTotalRow());
  if (scwin.showGrdNum == 1) {
    gr_result.setFocusedCell(ds_result.getTotalRow() - 1, 0);
  } else if (scwin.showGrdNum == 2) {
    gr_result_excel.setFocusedCell(ds_result.getTotalRow() - 1, 0);
  }
  ds_result.setCellData(ds_result.getRowPosition(), "wt", "0.000");
};

//-------------------------------------------------------------------------
// 행 삭제
//-------------------------------------------------------------------------
scwin.f_DelRow = function () {
  // $c.data.deleteRow(ds_result);
  var rowIdx = ds_result.getRowPosition();
  if (ds_result.getRowStatus(rowIdx) == "C") {
    ds_result.removeRow(rowIdx);
  }
};

//-------------------------------------------------------------------------
// 엑셀양식다운 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_formDown = function (e) {
  var fileName = "엑셀업로드양식4.csv";
  var filePath = "tn/sd/odrmgnt/엑셀업로드양식4.csv";
  $c.gus.cfDownloadFile($p, fileName, filePath);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_result.getTotalRow();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, "조회결과가 존재하지 않습니다.");
  }
  scwin.setGridDisplay(1);
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, "정상적으로 반영되었습니다.");
};
scwin.gr_result_excel_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "dptWrkPlNm":
      // 출발지
      scwin.f_openPopUpGrid(ds_result, rowIndex, "dptWrkPlCd", "dptWrkPlNm", 2);
      break;
    case "arvWrkPlNm":
      // 도착지
      scwin.f_openPopUpGrid(ds_result, rowIndex, "arvWrkPlCd", "arvWrkPlNm", 3);
      break;
    default:
      break;
  }
};
scwin.gr_result_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "dptWrkPlNm":
      // 출발지
      scwin.f_openPopUpGrid(ds_result, rowIndex, "dptWrkPlCd", "dptWrkPlNm", 2);
      break;
    case "arvWrkPlNm":
      // 도착지
      scwin.f_openPopUpGrid(ds_result, rowIndex, "arvWrkPlCd", "arvWrkPlNm", 3);
      break;
    default:
      break;
  }
};
scwin.trigger7_onclick = function (e) {
  $c.data.uploadGridViewCSV($p, gr_result);
};

//-------------------------------------------------------------------------
// 그리드 show hide
//-------------------------------------------------------------------------
scwin.setGridDisplay = function (str) {
  switch (str) {
    case 1:
      //조회 
      grd1Box.show();
      grd2Box.hide();
      scwin.showGrdNum = 1;
      break;
    case 2:
      //엑셀업로드
      grd1Box.hide();
      grd2Box.show();
      scwin.showGrdNum = 2;
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table_bg_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속지사 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_lobranCd',mandatory:'true',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_search.lobranCd',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',searchTarget:'both',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'동해지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'당진평택지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부강사업소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3BB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'중부지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3CC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'의왕지점'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4BB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'안산지점'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4CC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'여주사업소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4DD'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'평택지점'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4FF'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'경기지점'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4HH'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전남지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'군산지점'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5BB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전북지점'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5CC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'대야사업소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5DD'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정읍사업소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5FF'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'광주지점'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5GG'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부산지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'영남지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6BB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'창원지점'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6CC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'포항지점'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'7AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아포사업소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'7BB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'대구지점'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'7CC'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'업로드일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'temp1',refDataMap:'ds_search',refEdDt:'uploadDtTo',refStDt:'uploadDtFrom',style:'',edFromId:'ed_uploadDtFrom',edToId:'ed_uploadDtTo',mandatoryFrom:'true',mandatoryTo:'true'}}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveWrkPlInfo_tpro',codeId:'',validTitle:'',nameId:'',style:'width: 200px;display: none;',id:'udc_WrkPlCd'}}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'trigger5',style:'',type:'button','ev:onclick':'scwin.f_defaultValue'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'trigger6',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'grd2Box'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'오더배차업로드 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.trigger7_onclick',style:'display: none;',id:'trigger16',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀업로드(CSV)'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'Y',grp:'grd_section2',style:'',gridID:'gr_result_excel',gridDownFn:'scwin.f_Excel2',id:'udc_grd2',gridUpFn:'scwin.f_upload',btnUser:'N',btnPlusYn:'Y',gridDownYn:'Y',templateYn:'N'}}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_result',id:'gr_result_excel',style:'',visibleRowNum:'17',visibleRowNumFix:'true','ev:onfilereadend':'scwin.gr_result_onfilereadend',rowStatusVisible:'true','ev:oncelldblclick':'scwin.gr_result_excel_oncelldblclick',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'종류',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'지사',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'청구부서',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'매출부서',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'청구처',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'품목',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'중량(kg)',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'단위코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'출발지',width:'150',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'도착지',width:'150',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'출발일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'도착일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column39',value:'협력업체',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'차량번호',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'차량종류',displayMode:'label',hidden:'true',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'차량종류',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'차량규격',displayMode:'label',hidden:'true',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'차량규격',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'등록자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'등록일시',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'거래처관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column23',value:'특이사항',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'요율적용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'MIN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'다착지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column47',value:'스마트폰전송',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',value:'화물위탁증',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgLodeptCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellLodeptCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'text',width:'100',textAlign:'right',excelCellType:'number',excelFormat:'#,###.##0',dataType:'number',displayFormat:'#,###.##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'select',width:'100',allOption:'',chooseOption:'',ref:'',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[GM]그램'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'GM'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[KG]킬로그램'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'KG'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[LBS]파운드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LBS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[LUB]루베'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LUB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[M/T]중량톤'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'M/T'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[TM]미터톤'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TM'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[TON]톤'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TON'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[CBM]용적'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CBM'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[MST]용적톤'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'MST'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[R/T]수입톤'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'R/T'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[RNT]수입톤(MST)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RNT'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[BBF]보드피트'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'BBF'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[BC]자루'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'BC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[BK]버킷'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'BK'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[BOX]박스'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'BOX'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[BUN]묶음'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'BUN'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[CAS]케이스'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CAS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[DRM]드럼'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DRM'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[E/A]개수'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E/A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[PC]수량'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[PLT]파렛트'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PLT'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[RL]롤'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[SHT]장당'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SHT'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[TEU]TEU'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TEU'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[VAN]VAN'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'VAN'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[VEH]대당'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'VEH'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[VSL]척당'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'VSL'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'dptDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'arvDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'clntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclKndCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclKndNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNrmCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNrmNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regId',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regDtm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntMgntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'rmk',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'trfAdptYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'minYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'marvYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'checkbox',id:'wrkIndictYn',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'checkbox',id:'csctPrtYn',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',columnMove:'false',dataList:'data:ds_result_FillUse','ev:oncelldblclick':'scwin.gr_result_excel_oncelldblclick','ev:onfilereadend':'scwin.gr_result_onfilereadend',id:'uploadGrid',style:'display: none;',visibleRowNum:'17',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption6',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column1',inputType:'text',value:'종류',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column17',inputType:'text',value:'지사',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'청구부서',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'매출부서',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column11',inputType:'text',value:'청구처',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column9',inputType:'text',value:'품목',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column3',inputType:'text',value:'중량(kg)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'단위코드',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column7',inputType:'text',value:'출발지',width:'150'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column19',inputType:'text',value:'도착지',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',value:'출발일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'text',value:'도착일',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column39',inputType:'text',value:'협력업체',width:'150'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column37',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column35',inputType:'text',value:'차량종류',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column29',inputType:'text',value:'차량규격',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',value:'등록자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',value:'등록일시',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'거래처관리번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',value:'특이사항',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column53',inputType:'text',value:'요율적용',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column51',inputType:'text',value:'MIN',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column49',inputType:'text',value:'다착지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column47',inputType:'text',value:'스마트폰전송',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',value:'화물위탁증',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgLodeptCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellLodeptCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###.##0',displayMode:'label',excelCellType:'number',excelFormat:'#,###.##0',id:'wt',inputType:'text',textAlign:'right',width:'100'}},{T:1,N:'w2:column',A:{allOption:'',chooseOption:'',displayMode:'label',emptyItem:'true',id:'unitCd',inputType:'select',ref:'',width:'100'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[GM]그램'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'GM'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[KG]킬로그램'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'KG'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[LBS]파운드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LBS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[LUB]루베'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LUB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[M/T]중량톤'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'M/T'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[TM]미터톤'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TM'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[TON]톤'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TON'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[CBM]용적'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CBM'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[MST]용적톤'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'MST'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[R/T]수입톤'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'R/T'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[RNT]수입톤(MST)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RNT'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[BBF]보드피트'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'BBF'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[BC]자루'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'BC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[BK]버킷'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'BK'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[BOX]박스'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'BOX'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[BUN]묶음'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'BUN'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[CAS]케이스'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CAS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[DRM]드럼'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DRM'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[E/A]개수'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E/A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[PC]수량'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[PLT]파렛트'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PLT'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[RL]롤'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[SHT]장당'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SHT'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[TEU]TEU'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TEU'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[VAN]VAN'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'VAN'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[VEH]대당'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'VEH'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[VSL]척당'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'VSL'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDt',inputType:'calendar',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDt',inputType:'calendar',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclKndCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNrmNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntMgntNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trfAdptYn',inputType:'checkbox',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'minYn',inputType:'checkbox',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'marvYn',inputType:'checkbox',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIndictYn',inputType:'checkbox',readOnly:'true',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'csctPrtYn',inputType:'checkbox',readOnly:'true',width:'120'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows_upload',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',btnDelYn:'N',style:'',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DelRow'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'display: none;',id:'grd1Box',class:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'오더배차업로드 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.trigger7_onclick',id:'trigger17',style:'display: none;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀업로드(CSV)'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{btnPlusYn:'Y',btnUser:'N',gridDownFn:'scwin.f_Excel',gridDownYn:'Y',gridID:'gr_result',gridUpFn:'scwin.f_upload',gridUpYn:'Y',grp:'grd_section1',id:'udc_grd1',style:'',templateYn:'N'}}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw ',columnMove:'false',dataList:'data:ds_result',dataName:'오더배차','ev:oncelldblclick':'scwin.gr_result_oncelldblclick','ev:onfilereadend':'scwin.gr_result_onfilereadend',focusMode:'row',id:'gr_result',readOnly:'true',rowStatusVisible:'true',style:'',validExp:'odrKndCd:종류:yes, lobranCd:지사:yes, bilgClntNo:청구처:yes, commCd:품목:yes, wt:중량:yes, dptWrkPlNm:출발지:yes, arvWrkPlNm:도착지:yes',visibleRowNum:'17',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption8',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column55',inputType:'text',value:'오더번호',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column57',inputType:'text',value:'오더',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column59',inputType:'text',value:'오더종류',width:'110'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column1',inputType:'text',value:'지사',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'지사',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'청구부서',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'매출부서',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column61',inputType:'text',value:'코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'청구처',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column9',inputType:'text',value:'품목',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column63',inputType:'text',value:'품목',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column3',inputType:'text',value:'중량(kg)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'단위코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column65',inputType:'text',value:'출발지',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column7',inputType:'text',value:'출발지',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column67',inputType:'text',value:'도착지',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column19',inputType:'text',value:'도착지',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',value:'출발일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'text',value:'도착일',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column39',inputType:'text',value:'협력업체',width:'150'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column69',inputType:'text',value:'협력업체',width:'150'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column37',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',hidden:'true',id:'column35',inputType:'text',value:'차량종류',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column33',inputType:'text',value:'차량종류',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',hidden:'true',id:'column31',inputType:'text',value:'차량규격',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column29',inputType:'text',value:'차량규격',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column71',inputType:'text',value:'업로드일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'등록자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column74',inputType:'text',value:'등록일시',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column73',inputType:'text',value:'거래처관리번호',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',value:'특이사항',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column53',inputType:'text',value:'요율적용',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column51',inputType:'text',value:'MIN',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column49',inputType:'text',value:'다착지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column47',inputType:'text',value:'스마트폰전송',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',value:'화물위탁증',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',readOnly:'false',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgLodeptCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellLodeptCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',excelCellType:'text',id:'bilgClntNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###.##0',displayMode:'label',excelCellType:'number',excelFormat:'#,###.##0',id:'wt',inputType:'text',textAlign:'right',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'select',readOnly:'false',width:'100'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[GM]그램'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'GM'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[KG]킬로그램'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'KG'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[LBS]파운드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LBS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[LUB]루베'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LUB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[M/T]중량톤'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'M/T'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[TM]미터톤'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TM'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[TON]톤'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TON'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[CBM]용적'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CBM'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[MST]용적톤'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'MST'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[R/T]수입톤'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'R/T'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[RNT]수입톤(MST)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RNT'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[BBF]보드피트'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'BBF'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[BC]자루'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'BC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[BK]버킷'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'BK'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[BOX]박스'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'BOX'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[BUN]묶음'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'BUN'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[CAS]케이스'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CAS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[DRM]드럼'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DRM'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[E/A]개수'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E/A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[PC]수량'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[PLT]파렛트'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PLT'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[RL]롤'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[SHT]장당'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SHT'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[TEU]TEU'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TEU'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[VAN]VAN'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'VAN'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[VEH]대당'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'VEH'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'[VSL]척당'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'VSL'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayFormat:'####/##/##',displayMode:'label',id:'dptDt',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayFormat:'####/##/##',displayMode:'label',id:'arvDt',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'vehclKndCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclKndNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'vehclNrmCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNrmNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayFormat:'####/##/##',displayMode:'label',id:'uploadDt',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'regDtm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntMgntNo',inputType:'text',readOnly:'false',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',readOnly:'false',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trfAdptYn',inputType:'checkbox',readOnly:'false',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'minYn',inputType:'checkbox',readOnly:'false',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'marvYn',inputType:'checkbox',readOnly:'false',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIndictYn',inputType:'checkbox',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'csctPrtYn',inputType:'checkbox',width:'120'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',btnDelYn:'N',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DelRow',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white','ev:onclick':'scwin.f_formDown',id:'330Upload',objType:'ctrlBtn',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀양식다운'}]}]},{T:1,N:'w2:textbox',A:{class:'txt-dot  txt-red',escape:'false',id:'',label:'파일이 CSV인 것만 Upload가 가능합니다 ',style:'display: none;'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'trigger15',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})