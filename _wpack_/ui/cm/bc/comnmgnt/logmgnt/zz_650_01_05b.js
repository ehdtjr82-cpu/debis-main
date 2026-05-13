/*amd /ui/cm/bc/comnmgnt/logmgnt/zz_650_01_05b.xml 35199 6c450e1c927afe41bcd83c1dfc5e8aed4e5f65b1c5a0277ab3602f1310cd62d2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_logQueryCon'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'logTimestampFrom',name:'logTimestampFrom',dataType:'text'}},{T:1,N:'w2:key',A:{id:'logTimestampTo',name:'logTimestampTo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'systemClsCd',name:'systemClsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userCd',name:'userCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'actPgmId',name:'actPgmId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptCd',name:'deptCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_thisDayUser',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'pgmNm',name:'pgmNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curCnt',name:'curCnt',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'userat',name:'userat',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_menuList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lvl',name:'메뉴레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'menuId',name:'메뉴ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperMenuId',name:'상위메뉴ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'menuNm',name:'메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'menuDesc',name:'메뉴설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actPgmId',name:'실행프로그램ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actPgmNm',name:'실행프로그램명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actPgmScrPath',name:'실행프로그램경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actPgmParam',name:'실행프로그램파라미터',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'menuStsCd',name:'메뉴상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'menuParam',name:'메뉴파라미터',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'정렬순번',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'foreColor',name:'foreColor',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prodstdCd',name:'산출물기준코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slaadptDt',name:'SLA적용일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_depEachSysAppStat',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'deptCd',name:'deptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptNm',name:'deptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptEchSysWrkCnt',name:'deptEchSysWrkCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptEchSysWrkRate',name:'deptEchSysWrkRate',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_empEachSysAppStat',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'empNm',name:'empNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empEchSysWrkCnt',name:'empEchSysWrkCnt',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'empEchSysWrkRate',name:'empEchSysWrkRate',dataType:'text',defaultValue:'0'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_menuList',action:'/cm.bc.comnmgnt.menumgnt.cmd.RetrieveMenuListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_logQueryCon',target:'data:json,{"id":"ds_menuList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveConStat',action:'/cm.bc.comnmgnt.logmgnt.RetrieveConnectStatisticsUserStatCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_logQueryCon","key":"IN_DS1"},{"id":"ds_thisDayUser","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_thisDayUser","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveConStat_submitdone','ev:submiterror':'scwin.sbm_RetrieveConStat_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveMenuDepEachSysAppStat',action:'/cm.bc.comnmgnt.logmgnt.RetrieveMenuDepEachSysAppStatCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_logQueryCon","key":"IN_DS1"},{"id":"ds_depEachSysAppStat","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_depEachSysAppStat","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveMenuDepEachSysAppStat_submitdone','ev:submiterror':'scwin.sbm_RetrieveMenuDepEachSysAppStat_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveMenuEmpEachSysAppStat',action:'/cm.bc.comnmgnt.logmgnt.RetrieveMenuEmpEachSysAppStatCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_logQueryCon","key":"IN_DS1"},{"id":"ds_empEachSysAppStat","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_empEachSysAppStat","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_RetrieveMenuEmpEachSysAppStat_submit','ev:submitdone':'scwin.sbm_RetrieveMenuEmpEachSysAppStat_submitdone','ev:submiterror':'scwin.sbm_RetrieveMenuEmpEachSysAppStat_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.currDate = WebSquare.date.getFormattedDate(new Date(), "yyyyMMdd");
scwin.onpageload = function () {
  dma_logQueryCon.set("logTimestampFrom", scwin.currDate);
  dma_logQueryCon.set("logTimestampTo", scwin.currDate);
  const codeOptions = [{
    grpCd: "ZZ010",
    compID: "lc_userCd"
  }, {
    grpCd: "ZZ019",
    compID: "lc_sysCd",
    opt: {
      "range": "1"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {
  lc_sysCd.setValue("CM");
  lc_userCd.setValue("01");
  lc_userCdNtis.hide();
  if (lc_userCd.getValue() == "01") {
    scwin.f_Retrieve(lc_sysCd.getValue());
  }
};

// UDC 셋팅이 이후..
scwin.onUdcCompleted = function () {};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function (sysCd) {
  var vsysCd;
  var systemClsCd = lc_systemClsCd.getValue();
  if (systemClsCd == "NTIS") {
    vsysCd = lc_userCdNtis.getValue();
  } else if (systemClsCd == "SHR") {
    vsysCd = "HR";
  } else if (systemClsCd == "BSC") {
    vsysCd = "BS";
  } else {
    vsysCd = sysCd;
  }
  dma_logQueryCon.set("sysCd", vsysCd);
  dma_logQueryCon.set("systemClsCd", systemClsCd);
  $c.sbm.execute($p, sbm_menuList);
};

//-------------------------------------------------------------------------
// 접속통계 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveConStat = async function () {
  var vLogTimestampFrom = ica_logTimestampFrom.getValue();
  var vLogTimestampTo = ica_logTimestampTo.getValue();
  if ("" == vLogTimestampFrom) {
    ica_logTimestampFrom.setValue(scwin.currDate);
  }
  if ("" == vLogTimestampTo) {
    ica_logTimestampTo.setValue(scwin.currDate);
  }
  var systemClsCd = lc_systemClsCd.getValue();
  var userCd = "";
  if (systemClsCd == "DEBIS") {
    userCd = lc_userCd.getValue();
  } else {
    userCd = lc_userCdNtis.getValue();
  }
  dma_logQueryCon.set("userCd", userCd);
  dma_logQueryCon.set("sysCd", lc_sysCd.getValue());
  dma_logQueryCon.set("systemClsCd", lc_systemClsCd.getValue());
  ds_depEachSysAppStat.setJSON([]);
  ds_empEachSysAppStat.setJSON([]);
  $c.sbm.execute($p, sbm_RetrieveConStat);
};

//-------------------------------------------------------------------------
// 메뉴 Validation 
//-------------------------------------------------------------------------
scwin.f_validateMenu = function (row) {
  if (row == currRow && isValid == false) {
    isValid = true;
    return false;
  } else {
    currRow = row;
    isValid = cfValidate([tbl_menuInfo]);
    return isValid;
  }
};

//-------------------------------------------------------------------------
// 로그조회조건 DataSet 헤더설정
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 그룹코드 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_toExcel = function (pGrid, pSheetNm, pXlsFileNm, pDate) {
  // pGrid.SetExcelTitle(0, ""); // 이전에 추가된 Title을 clear
  // var vSearchOption = ";font-face:굴림체;font-size:10pt;font-color:black;bgcolor:#ffffff;align: left;line-color:red;line-width:0pt;";
  // var vFromDt = logTimestampFrom.text ;
  // var vToDt = logTimestampTo.text ;

  // pGrid.SetExcelTitle(1, "value:"+pSheetNm+";"     // 표시할 타이틀
  // + "font-face:'돋움체';" // 폰트
  // + "font-size:12pt;"    // 폰트 크기
  // + "font-color:black;"  // 폰트 색깔
  // + "bgcolor:#ffffff;"   // 배경 색깔
  // + "align:center;"      // 정렬
  // + "line-color:white;"  // 타이틀 부분 테두리선 색깔
  // + "line-width:0pt;"    // 타이틀 테두리선 굵기
  // + "skiprow:1;");       // 타이틀 다음 떼는 로우 수

  // pGrid.SetExcelTitle(1, "value:(기간 " + vFromDt.replace(/:/g,'|').replace(/;/g,'') +"-" + vToDt.replace(/:/g,'|').replace(/;/g,'') + " )   계산일[" + pDate.replace(/:/g,'|').replace(/;/g,'') +"]" + vSearchOption );

  // //sheet명, 저장파일명,     저장 다이얼로그
  // cfGridToExcel(pGrid,pSheetNm,pXlsFileNm, 4+8+16);
};

// 이벤트 시작................
scwin.lc_systemClsCd_onchange = function (info) {
  var vSystemClsCd = info.newValue;
  if (vSystemClsCd == "DEBIS") {
    lc_userCd.show();
    lc_userCdNtis.hide();
    lc_sysCd.setDisabled(false);
    lc_sysCd.setValue("CM");
    lc_userCd.setValue("01");
    scwin.f_Retrieve(lc_sysCd.getValue());
    ds_thisDayUser.setJSON([]);
  } else if (vSystemClsCd == "NTIS") {
    lc_userCdNtis.show();
    lc_userCdNtis.setDisabled(false);
    lc_userCdNtis.setValue("DS");
    lc_userCd.hide();
    lc_sysCd.setDisabled(true);
    lc_sysCd.setValue("");
    lc_userCd.setValue("DM");
    scwin.f_Retrieve(lc_userCd.getValue());
    ds_thisDayUser.setJSON([]);
  } else {
    lc_userCdNtis.show();
    lc_userCdNtis.setDisabled(true);
    lc_userCdNtis.setValue("");
    lc_userCd.hide();
    lc_sysCd.setDisabled(true);
    lc_sysCd.setValue("");
    lc_userCd.setValue("");
    scwin.f_Retrieve(lc_userCd.getValue());
    ds_thisDayUser.setJSON([]);
  }
};
scwin.lc_userCd_onchange = function (info) {
  var vlc_userCd = info.newValue;
  if (ds_menuList.getModifiedIndex().length == 0) {
    if (vlc_userCd == "01") {
      ds_menuList.setJSON([]);
      lc_sysCd.setDisabled(false);
      lc_sysCd.focus();
    } else {
      if ("" != vlc_userCd) {
        scwin.f_Retrieve(vlc_userCd);
      }
      lc_sysCd.setValue("");
      lc_sysCd.setDisabled(true);
    }
  } else {
    if (vlc_userCd == "01") {
      ds_menuList.setJSON([]);
      lc_sysCd.setDisabled(false);
      lc_sysCd.focus();
    } else {
      // f_Retrieve(rd_userCd.BindColVal);
      if ("" != vlc_userCd) {
        scwin.f_Retrieve(vlc_userCd);
      }
    }
  }
};
scwin.lc_userCdNtis_onchange = function (info) {
  if (lc_systemClsCd.getValue() == "NTIS") {
    dma_logQueryCon.set("userCd", info.newValue);
    if ("" != lc_userCd.getValue()) {
      scwin.f_Retrieve(lc_userCd.getValue());
    }
  }
};
scwin.lc_sysCd_onchange = function (info) {
  if ("" != info.newValue) {
    scwin.f_Retrieve(info.newValue);
  }
};
scwin.tv_menu_onviewchange = function (info) {
  var rowIdx = tv_menu.getSelectedIndex();
  var vactPgmId = ds_menuList.getCellData(rowIdx - 1, "actPgmId");
  if (!$c.gus.cfIsNull($p, vactPgmId)) {
    dma_logQueryCon.set("actPgmId", vactPgmId);
    if (lc_systemClsCd.getValue() == "DEBIS") {
      dma_logQueryCon.set("userCd", lc_userCd.getValue());
    } else if (lc_systemClsCd.getValue() == "NTIS") {
      dma_logQueryCon.set("userCd", lc_userCdNtis.getValue());
    }
    dma_logQueryCon.set("systemClsCd", lc_systemClsCd.getValue());
    ds_empEachSysAppStat.setJSON([]);
    $c.sbm.execute($p, sbm_RetrieveMenuDepEachSysAppStat);
  }
};
scwin.gr_depEachSysAppStat_onrowindexchange = function (rowIndex, oldRow) {
  dma_logQueryCon.set("deptCd", ds_depEachSysAppStat.getCellData(rowIndex, "deptCd"));
  if (lc_systemClsCd.getValue() == "DEBIS") {
    dma_logQueryCon.set("userCd", lc_userCd.getValue());
  } else if (lc_systemClsCd.getValue() == "NTIS") {
    dma_logQueryCon.set("userCd", lc_userCdNtis.getValue());
  }
  dma_logQueryCon.set("systemClsCd", lc_systemClsCd.getValue());
  $c.sbm.execute($p, sbm_RetrieveMenuEmpEachSysAppStat);
};
scwin.sbm_RetrieveConStat_submitdone = function (e) {
  var rowCnt = ds_thisDayUser.getRowCount();
  gr_1spanTotal.setLabel(rowCnt);
  if (rowCnt == 0) {} else {
    gr_thisDayUser.setFocusedCell(0, 0);
  }
};
scwin.sbm_RetrieveConStat_submiterror = function (e) {};
scwin.sbm_RetrieveMenuDepEachSysAppStat_submitdone = function (e) {
  var rowCnt = ds_depEachSysAppStat.getRowCount();
  gr_2spanTotal.setLabel(rowCnt);
  if (rowCnt == 0) {} else {
    gr_depEachSysAppStat.setFocusedCell(0, 0);
  }
};
scwin.sbm_RetrieveMenuDepEachSysAppStat_submiterror = function (e) {};
scwin.sbm_RetrieveMenuEmpEachSysAppStat_submitdone = function (e) {
  var rowCnt = ds_empEachSysAppStat.getRowCount();
  gr_3spanTotal.setLabel(rowCnt);
  if (rowCnt == 0) {} else {
    gr_empEachSysAppStat.setFocusedCell(0, 0);
  }
};
scwin.sbm_RetrieveMenuEmpEachSysAppStat_submiterror = function (e) {};
scwin.btn_search1_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1);
};
scwin.udc_g1toExcel = async function () {
  //s
  if (ds_thisDayUser.getRowCount() == 0) {
    return;
  }
  let fileName = "접속통계 사용빈도";
  let options = {
    fileName: fileName + ".xlsx",
    sheetName: fileName,
    useSubTotal: "true",
    useSubTotalData: "true",
    startRowIndex: 3,
    startColumnIndex: 0,
    type: 1
  };
  var infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 3,
    text: fileName,
    textAlign: "center",
    fontSize: 12,
    drawBorder: false
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 3,
    text: `(기간 ${$c.date.formatDate($p, ica_logTimestampFrom.getValue(), "date")}-${$c.date.formatDate($p, ica_logTimestampTo.getValue(), "date")} )     계산일 [${$c.date.formatDate($p, ica_logTimestampTo.getValue(), "date")}]`,
    textAlign: "left",
    fontSize: 12,
    drawBorder: false
  }];
  await $c.data.downloadGridViewExcel($p, gr_thisDayUser, options, infoArr);
};
scwin.udc_g2toExcel = async function () {
  //s
  if (ds_depEachSysAppStat.getRowCount() == 0) {
    return;
  }
  let fileName = "부서별 접속횟수";
  let options = {
    fileName: fileName + ".xlsx",
    sheetName: fileName,
    useSubTotal: "true",
    useSubTotalData: "true",
    startRowIndex: 3,
    startColumnIndex: 0,
    type: 1
  };
  var infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 3,
    text: fileName,
    textAlign: "center",
    fontSize: 12,
    drawBorder: false
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 3,
    text: `(기간 ${$c.date.formatDate($p, ica_logTimestampFrom.getValue(), "date")}-${$c.date.formatDate($p, ica_logTimestampTo.getValue(), "date")} )     계산일 [${$c.date.formatDate($p, ica_logTimestampTo.getValue(), "date")}]`,
    textAlign: "left",
    fontSize: 12,
    drawBorder: false
  }];
  await $c.data.downloadGridViewExcel($p, gr_depEachSysAppStat, options, infoArr);
};
scwin.udc_g3toExcel = async function () {
  //s
  if (ds_empEachSysAppStat.getRowCount() == 0) {
    return;
  }
  let fileName = "인원별 접속횟수";
  let options = {
    fileName: fileName + ".xlsx",
    sheetName: fileName,
    useSubTotal: "true",
    useSubTotalData: "true",
    startRowIndex: 3,
    startColumnIndex: 0,
    type: 1
  };
  var infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 3,
    text: fileName,
    textAlign: "center",
    fontSize: 12,
    drawBorder: false
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 3,
    text: `(기간 ${$c.date.formatDate($p, ica_logTimestampFrom.getValue(), "date")}-${$c.date.formatDate($p, ica_logTimestampTo.getValue(), "date")} )     계산일 [${$c.date.formatDate($p, ica_logTimestampTo.getValue(), "date")}]`,
    textAlign: "left",
    fontSize: 12,
    drawBorder: false
  }];
  await $c.data.downloadGridViewExcel($p, gr_empEachSysAppStat, options, infoArr);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_systemClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_logQueryCon.systemClsCd','ev:onchange':'scwin.lc_systemClsCd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DEBIS'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DEBIS'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'NTIS'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'NTIS'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'SHR'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'SHR'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'BSC'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'BSC'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',class:'',disableEdit:'true',editType:'select',id:'lc_userCd',mandatory:'true',readOnly:'false',ref:'data:dma_logQueryCon.userCd',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'15',chooseOptionLabel:'$blank','ev:onchange':'scwin.lc_userCd_onchange'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',class:'',disableEdit:'true',editType:'select',id:'lc_userCdNtis',mandatory:'true',readOnly:'false',ref:'',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'15',chooseOptionLabel:'$blank','ev:onchange':'scwin.lc_userCdNtis_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'당사사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용자명'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'MB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'화주'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'선사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'포워더'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력업체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'협력업체2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'FB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'화주+협력'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'FM'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'차주'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'81'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'화주(신대양)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자가(데비스)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',class:'',disableEdit:'true',editType:'select',id:'lc_sysCd',mandatory:'true',readOnly:'false',ref:'',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'15',chooseOptionLabel:'$blank','ev:onchange':'scwin.lc_sysCd_onchange'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'로그일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ica_logTimestampFrom',edToId:'ica_logTimestampTo',id:'udc_fromToCalendar4',mandatoryFrom:'true',mandatoryTo:'true',refDataMap:'dma_logQueryCon',refEdDt:'logTimestampTo',refStDt:'logTimestampFrom',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_search1_init',style:'',type:'button','ev:onclick':'scwin.btn_search1_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_RetrieveConStat'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'접속통계 사용빈도',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',id:'udc_g1toExcel',gridDownFn:'scwin.udc_g1toExcel',gridID:'gr_thisDayUser'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_thisDayUser',focusMode:'row',id:'gr_thisDayUser',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'4',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'사용화면',width:'200'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'접속횟수',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'비율(%)',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'pgmNm',inputType:'text',removeBorderStyle:'false',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'curCnt',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'userat',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'right',excelCellType:'number',dataType:'float',displayFormat:'##0.00'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column15',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column14',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###',expression:'sum(\'curCnt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'gr_1spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''}}]},{T:1,N:'xf:group',A:{class:'lybox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'메뉴 Tree ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',btnPlusYn:'Y',btnUser:'N',gridDownYn:'N',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{class:'tvw-wrap',id:'grd_section2'},E:[{T:1,N:'w2:treeview',A:{dataType:'listed',id:'tv_menu',renderType:'virtual',style:'height: 100%',tooltipGroupClass:'false',class:'','ev:onviewchange':'scwin.tv_menu_onviewchange',toggleEvent:'onclick'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_menuList'},E:[{T:1,N:'w2:label',A:{ref:'menuNm'}},{T:1,N:'w2:value',A:{ref:'menuId'}},{T:1,N:'w2:depth',A:{ref:'lvl'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'부서별 접속횟수',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',id:'udc_g2toExcel',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.udc_g2toExcel',gridID:'gr_depEachSysAppStat'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_depEachSysAppStat',focusMode:'row',id:'gr_depEachSysAppStat',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true','ev:onrowindexchange':'scwin.gr_depEachSysAppStat_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'부서코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'부서명',width:'200'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'접속횟수',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'비율(%)',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'deptCd',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'deptNm',inputType:'text',removeBorderStyle:'false',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'deptEchSysWrkCnt',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'deptEchSysWrkRate',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'right',dataType:'number',displayFormat:'##0.00',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column16',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column15',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column14',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'deptEchSysWrkCnt\')',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'gr_2spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'인원별 접속횟수',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section4',style:'',id:'udc_g3toExcel',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',btnPlusYn:'Y',gridDownFn:'scwin.udc_g3toExcel',gridID:'gr_empEachSysAppStat'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section4',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_empEachSysAppStat',focusMode:'row',id:'gr_empEachSysAppStat',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'사원코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'사원명',width:'200'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'접속횟수',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'비율(%)',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col1',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'empNm',inputType:'text',removeBorderStyle:'false',width:'200',textAlign:'center'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'empEchSysWrkCnt',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'empEchSysWrkRate',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'right',dataType:'number',displayFormat:'##0.00',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column16',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column15',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column14',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'empEchSysWrkCnt\')',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'gr_3spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]}]}]})