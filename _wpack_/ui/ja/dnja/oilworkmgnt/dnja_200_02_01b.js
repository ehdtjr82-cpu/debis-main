/*amd /ui/ja/dnja/oilworkmgnt/dnja_200_02_01b.xml 41441 13739c805612af622b6b954b9fc8bebd1789e78c88e001d850f10595cc954569 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'소속거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilingMm',name:'배송일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqCd',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClntSeq',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilingSeq',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'degNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ton',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fleffcncy',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilingMm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAdptStdcd',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAdptStdnm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatCd',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilingUpr',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtc1',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtc2',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumDtc',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdOilingVol',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdAmt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdVatAmt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdAmtTot',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realOilingVol',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realAmt',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realVatAmt',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realAmtTot',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'profitVol',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'profitAmt',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'profitVatAmt',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'profitAmtTot',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductAmt',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductVatAmt',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductAmtTot',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payVatAmt',name:'name29',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmtTot',name:'name30',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNo',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name41',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilStatCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sortGub',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oilStatAvgUpr',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'oilingUpr',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ja.dnja.oilworkmgnt.RetrieveOilWorkInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_oilStatAvgUpr',action:'/ja.dnja.basisinfomgnt.RetrieveOilUprInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition2","key":"IN_DS1"},{"id":"ds_oilStatAvgUpr","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_oilStatAvgUpr","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ja.dnja.oilworkmgnt.SaveOilWorkInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_out","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sDate = $c.date.formatDateTime($p, new Date());
scwin.strCurDate = $c.date.getServerDateTime($p);
scwin.strQryStDt = $c.date.getDateAddMonthDirection($p, scwin.strCurDate, 0, "F"); // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log("### onpageload  Start :: " + scwin.sDate + " :: " + scwin.strCurDate + " :: " + scwin.strQryStDt);
  ica_ed_oilingMm.setValue(scwin.strQryStDt);
  const codeOptions = [{
    grpCd: "JA020",
    compID: "gr_out:oilStatCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_retrieveOilStatAvgUpr("200902", "AA", 2);
};

//-------------------------------------------------------------------------
// 주유소 평균단가 조회해오기
//-------------------------------------------------------------------------
scwin.f_retrieveOilStatAvgUpr = function (stDt, oilStatCd, sortGub) {
  dma_condition2.set("stDt", stDt);
  dma_condition2.set("oilStatCd", oilStatCd);
  dma_condition2.set("sortGub", sortGub);
  $c.sbm.execute($p, sbm_oilStatAvgUpr);
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_portCondtionPart, null);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = function (e) {
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    totalRows.setValue(ds_out.getRowCount());
    if (ds_out.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
      return false;
    }
    gr_out.setFocusedCell(0, 0, true);
  }
};

//-------------------------------------------------------------------------
// function name : f_openPopUp
// function desc : popup
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.udc_clntNo_openPopup('T');
};
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  scwin.udc_clntNo_openPopup('T');
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.udc_clntNo_openPopup('F');
};
scwin.udc_clntNo_openPopup = function (pClose) {
  let pCode = ed_clntNo.getValue();
  let pName = txt_clntNm.getValue();
  let pAllSearch = 'F';
  udc_clntNo.setSelectId("retrieveSubsidaryClntListJa");
  udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // XML상의 SELECT ID
  , pCode // 화면에서의 ??? Code Element의  Value
  , pName // 화면에서의 ??? Name Element의  Value
  , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
  , '5' // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , '150,170' // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는    컬럼 지정
  , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의   사용자 정의  폭
  , null // POP-UP뛰을때 우도우의   사용자 정의  높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부   ("F")
  , pAllSearch // 전체검색허용여부 ("F")
  , "소속거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};
scwin.udc_clntNo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_clntNo.setValue(rtnList[0]); //코드
    txt_clntNm.setValue(rtnList[1]); //명
  } else {
    ed_clntNo.setValue("");
    txt_clntNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.btn_save_onclick = async function (e) {
  let ret = await $c.gus.cfValidate($p, [tb_portCondtionPart]);
  if (!ret) return;
  for (var i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getRowStatus(i) == "C" || ds_out.getRowStatus(i) == "D" || ds_out.getRowStatus(i) == "U") {
      if (ds_out.getCellData(i, "fleffcncy") == "" || ds_out.getCellData(i, "fleffcncy") == 0) {
        await $c.win.alert($p, "기준연비는 필수 입력 항목 입니다.");
        return false;
        break;
      }
      if (ds_out.getCellData(i, "oilingMm") == "") {
        await $c.win.alert($p, "주유월은 필수 입력 항목 입니다.");
        return false;
        break;
      }
      if (ds_out.getCellData(i, "sellAdptStdcd") == "") {
        await $c.win.alert($p, "기준은 필수 입력 항목 입니다.");
        return false;
        break;
      }
      if (ds_out.getCellData(i, "oilStatCd") == "") {
        await $c.win.alert($p, "주유소는 필수 입력 항목 입니다.");
        return false;
        break;
      }
      if (ds_out.getCellData(i, "dtc1") == "" && ds_out.getCellData(i, "dtc2") == "" || ds_out.getCellData(i, "dtc1") == 0 && ds_out.getCellData(i, "dtc2") == 0) {
        await $c.win.alert($p, "신선과 공산 중 하나는 반드시 입력하셔야 합니다.");
        return false;
        break;
      }
      if (ds_out.getCellData(i, "realOilingVol") == "" || ds_out.getCellData(i, "realOilingVol") == 0) {
        await $c.win.alert($p, "주유량은 필수 입력 항목 입니다.");
        return false;
        break;
      }
      if (ds_out.getCellData(i, "realAmt") == "" || ds_out.getCellData(i, "realAmt") == 0) {
        await $c.win.alert($p, "실주유현황 공급가는 필수 입력 항목 입니다.");
        return false;
        break;
      }
      if (ds_out.getCellData(i, "deductAmt") == "" || ds_out.getCellData(i, "deductAmt") == 0) {
        await $c.win.alert($p, "공제 주유량은 필수 입력 항목 입니다.");
        return false;
        break;
      }
      ds_out.setCellData(i, "sellAdptStdnm", ds_out.getCellData(i, "sellAdptStdcd"));
      ds_out.setCellData(i, "oilStatNm", ds_out.getCellData(i, "oilStatCd"));
    }
  }
  let confirm = await $c.win.confirm($p, "저장하시겠습니까?");
  if (confirm) {
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submit = function (e) {
  var modiArr = ds_out.getModifiedIndex();
  for (var i = 0; i < modiArr.length; i++) {
    ds_out.setCellData(modiArr[i], "oilStatNm", ds_out.getCellData(modiArr[i], "oilStatCd"));
    ds_out.setCellData(modiArr[i], "sellAdptStdnm", ds_out.getCellData(modiArr[i], "sellAdptStdcd"));
  }
};
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.btn_retrieve_onclick();
  }
};
scwin.f_prflos = function (row) {
  if (ds_out.getCellData(row, "sellAdptStdcd") == 2) {
    //실비
    //$c.win.alert("실비");
    //손익
    ds_out.setCellData(row, "profitVol", 0);
    ds_out.setCellData(row, "profitAmt", 0);
    ds_out.setCellData(row, "profitVatAmt", 0);
    ds_out.setCellData(row, "profitAmtTot", 0);
    //공제
    ds_out.setCellData(row, "deductAmt", 0);
    ds_out.setCellData(row, "deductVatAmt", 0);
    ds_out.setCellData(row, "deductAmtTot", 0);
    //기사지급
    ds_out.setCellData(row, "payAmt", ds_out.getCellData(row, "realAmt"));
    ds_out.setCellData(row, "payVatAmt", ds_out.getCellData(row, "realVatAmt"));
    ds_out.setCellData(row, "payAmtTot", ds_out.getCellData(row, "realAmtTot"));
  } else if (ds_out.getCellData(row, "sellAdptStdcd") == 1) {
    //연비
    //$c.win.alert("연비");
    //손익
    ds_out.setCellData(row, "profitVol", parseFloat(ds_out.getCellData(row, "stdOilingVol")) - parseFloat(ds_out.getCellData(row, "realOilingVol")));
    ds_out.setCellData(row, "profitAmt", parseFloat(ds_out.getCellData(row, "stdAmt")) - parseFloat(ds_out.getCellData(row, "realAmt")));
    ds_out.setCellData(row, "profitVatAmt", Math.round(ds_out.getCellData(row, "profitAmt") * 0.1));
    ds_out.setCellData(row, "profitAmtTot", Math.round(ds_out.getCellData(row, "profitAmt") * 1.1));
    //공제
    if (ds_out.getCellData(row, "profitAmt") > 0) {
      ds_out.setCellData(row, "deductAmt", Math.round(ds_out.getCellData(row, "profitAmt") * 0.5));
    } else {
      ds_out.setCellData(row, "deductAmt", ds_out.getCellData(row, "profitAmt"));
    }

    //기사지급
    ds_out.setCellData(row, "payAmt", parseFloat(ds_out.getCellData(row, "realAmt")) + parseFloat(ds_out.getCellData(row, "deductAmt")));
    ds_out.setCellData(row, "payVatAmt", Math.round(ds_out.getCellData(row, "payAmt") * 0.1));
    ds_out.setCellData(row, "payAmtTot", Math.round(ds_out.getCellData(row, "payAmt") * 1.1));
  }
};

//공제_공급가 변경시
scwin.f_prflos2 = function (row) {
  //공제
  ds_out.setCellData(row, "deductVatAmt", Math.round(ds_out.getCellData(row, "deductAmt") * 0.1)); //세액
  ds_out.setCellData(row, "deductAmtTot", Math.round(ds_out.getCellData(row, "deductAmt") * 1.1)); //합계

  //기사지급
  ds_out.setCellData(row, "payAmt", parseFloat(ds_out.getCellData(row, "realAmt")) + parseFloat(ds_out.getCellData(row, "deductAmt"))); //공급가
  ds_out.setCellData(row, "payVatAmt", Math.round(ds_out.getCellData(row, "payAmt") * 0.1)); //세액
  ds_out.setCellData(row, "payAmtTot", Math.round(ds_out.getCellData(row, "payAmt") * 1.1)); //합계
};
scwin.gr_out_onafteredit = async function (rowIndex, columnIndex, value) {
  var colId = gr_out.getColumnID(columnIndex);
  if (colId == "oilStatNm") {
    //주유소 평균단가 조회
    if (ds_out.getCellData(rowIndex, "oilStatNm") != "") {
      // scwin.f_retrieveOilStatAvgUpr(ds_out.getCellData(rowIndex, "oilingMm"), ds_out.getCellData(rowIndex, "oilStatCd"), 2);
      dma_condition2.set("stDt", ds_out.getCellData(rowIndex, "oilingMm"));
      dma_condition2.set("oilStatCd", ds_out.getCellData(rowIndex, "oilStatNm"));
      dma_condition2.set("sortGub", 2);
      var rs = await $c.sbm.execute($p, sbm_oilStatAvgUpr);
      if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
        if (ds_oilStatAvgUpr.getRowCount() > 0) {
          ds_out.setCellData(rowIndex, "oilingUpr", ds_oilStatAvgUpr.getCellData(0, "oilingUpr"));
        }
      }
      ;
    }
  }
  if (colId == "dtc1" || colId == "dtc2") {
    //dtc1(신선), dtc2(공산)
    if ($c.util.isEmpty($p, ds_out.getCellData(rowIndex, "dtc1"))) {
      ds_out.setCellData(rowIndex, "dtc1", 0);
    } else if ($c.util.isEmpty($p, ds_out.getCellData(rowIndex, "dtc2"))) {
      ds_out.setCellData(rowIndex, "dtc2", 0);
    }
    ds_out.setCellData(rowIndex, "sumDtc", parseFloat(ds_out.getCellData(rowIndex, "dtc1")) + parseFloat(ds_out.getCellData(rowIndex, "dtc2")));
    if (ds_out.getCellData(rowIndex, "sumDtc") > 0) {
      if (ds_out.getCellData(rowIndex, "fleffcncy") != "" && ds_out.getCellData(rowIndex, "fleffcncy") != 0) {
        // 운행거리합계/연비
        var stdOilingVol = parseFloat(ds_out.getCellData(rowIndex, "sumDtc")) / parseFloat(ds_out.getCellData(rowIndex, "fleffcncy"));
        ds_out.setCellData(rowIndex, "stdOilingVol", Math.round(stdOilingVol));
      }
      scwin.f_prflos(rowIndex);
    }
  }
  if (colId == "oilingMm") {
    //주유월
    if (ds_out.getCellData(rowIndex, "oilStatNm") != "") {
      // scwin.f_retrieveOilStatAvgUpr(ds_out.getCellData(rowIndex, "oilingMm"), ds_out.getCellData(rowIndex, "oilStatCd"), 2);
      dma_condition2.set("stDt", ds_out.getCellData(rowIndex, "oilingMm"));
      dma_condition2.set("oilStatCd", ds_out.getCellData(rowIndex, "oilStatCd"));
      dma_condition2.set("sortGub", 2);
      var rs = await $c.sbm.execute($p, sbm_oilStatAvgUpr);
      if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
        if (ds_oilStatAvgUpr.getRowCount() > 0) {
          ds_out.setCellData(rowIndex, "oilingUpr", ds_oilStatAvgUpr.getCellData(0, "oilingUpr"));
        }
      }
      ;
    }
    scwin.f_prflos(rowIndex);
  } else if (colId == "fleffcncy") {
    //차량정보_기준연비
    if ($c.util.isEmpty($p, ds_out.getCellData(rowIndex, "fleffcncy"))) {
      ds_out.setCellData(rowIndex, "fleffcncy", 0);
    }
    if (ds_out.getCellData(rowIndex, "sumDtc") != "" && ds_out.getCellData(rowIndex, "sumDtc") != 0) {
      // 운행거리합계/연비
      var stdOilingVol = parseFloat(ds_out.getCellData(rowIndex, "sumDtc")) / parseFloat(ds_out.getCellData(rowIndex, "fleffcncy"));
      ds_out.setCellData(rowIndex, "stdOilingVol", Math.round(stdOilingVol));
    }
    scwin.f_prflos(rowIndex);
  } else if (colId == "sumDtc") {
    //운행거리_합계
    if (ds_out.getCellData(rowIndex, "fleffcncy") != "" && ds_out.getCellData(rowIndex, "fleffcncy") != 0) {
      // 운행거리합계/연비
      var stdOilingVol = parseFloat(ds_out.getCellData(rowIndex, "sumDtc")) / parseFloat(ds_out.getCellData(rowIndex, "fleffcncy"));
      ds_out.setCellData(rowIndex, "stdOilingVol", Math.round(stdOilingVol));
    }
    scwin.f_prflos(rowIndex);
  } else if (colId == "stdOilingVol") {
    //연비기준현황_주유량
    if (ds_out.getCellData(rowIndex, "oilingUpr") != "" && ds_out.getCellData(rowIndex, "oilingUpr") != 0) {
      var stdOilingVol = parseFloat(ds_out.getCellData(rowIndex, "stdOilingVol")); //주유량
      var oilingUpr = parseFloat(ds_out.getCellData(rowIndex, "oilingUpr")); //단가
      //주유공급가
      ds_out.setCellData(rowIndex, "stdAmt", stdOilingVol * oilingUpr);
      //주유세액
      ds_out.setCellData(rowIndex, "stdVatAmt", Math.round(stdOilingVol * oilingUpr * 0.1));
      //합계
      ds_out.setCellData(rowIndex, "stdAmtTot", Math.round(stdOilingVol * oilingUpr * 1.1));
    }
    scwin.f_prflos(rowIndex);
  } else if (colId == "realOilingVol") {
    //실주유현황_주유량
    if ($c.util.isEmpty($p, ds_out.getCellData(rowIndex, "realOilingVol"))) {
      ds_out.setCellData(rowIndex, "realOilingVol", 0);
    }
  } else if (colId == "realAmt") {
    //실주유현황_공급가
    if ($c.util.isEmpty($p, ds_out.getCellData(rowIndex, "realAmt"))) {
      ds_out.setCellData(rowIndex, "realAmt", 0);
    }
    var realAmt = ds_out.getCellData(rowIndex, "realAmt");
    ds_out.setCellData(rowIndex, "realVatAmt", Math.round(realAmt * 0.1));
    ds_out.setCellData(rowIndex, "realAmtTot", Math.round(realAmt * 1.1));
    scwin.f_prflos(rowIndex);
  } else if (colId == "deductAmt") {
    if ($c.util.isEmpty($p, ds_out.getCellData(rowIndex, "deductAmt"))) {
      ds_out.setCellData(rowIndex, "deductAmt", 0);
    }
    scwin.f_prflos2(rowIndex);
  }
};
scwin.f_delete = function () {
  let delRow = ds_out.getRowPosition();
  gr_out.setCellReadOnly(delRow, "fleffcncy", true);
  gr_out.setCellReadOnly(delRow, "oilingMm", true);
  gr_out.setCellReadOnly(delRow, "sellAdptStdcd", true);
  gr_out.setCellReadOnly(delRow, "oilStatCd", true);
  gr_out.setCellReadOnly(delRow, "dtc1", true);
  gr_out.setCellReadOnly(delRow, "dtc2", true);
  gr_out.setCellReadOnly(delRow, "realOilingVol", true);
  gr_out.setCellReadOnly(delRow, "realAmt", true);
  gr_out.setCellReadOnly(delRow, "deductAmt", true);
  $c.data.undoRow($p, gr_out);
  ds_out.deleteRow(delRow);
  gr_out.setFocusedCell(delRow, 0);
};
scwin.f_cancle = function () {
  let canRow = ds_out.getRowPosition();
  gr_out.setCellReadOnly(canRow, "fleffcncy", false);
  gr_out.setCellReadOnly(canRow, "oilingMm", false);
  gr_out.setCellReadOnly(canRow, "sellAdptStdcd", false);
  gr_out.setCellReadOnly(canRow, "oilStatCd", false);
  gr_out.setCellReadOnly(canRow, "dtc1", false);
  gr_out.setCellReadOnly(canRow, "dtc2", false);
  gr_out.setCellReadOnly(canRow, "realOilingVol", false);
  gr_out.setCellReadOnly(canRow, "realAmt", false);
  gr_out.setCellReadOnly(canRow, "deductAmt", false);
  $c.data.undoRow($p, gr_out);
  // ds_out.undoRow(canRow);
  gr_out.setFocusedCell(canRow, 0);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_portCondtionPart',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_ed_oilingMm',pickerType:'dynamic',style:'',mandatory:'true',displayFormat:'yyyy/MM',ref:'data:dma_condition.oilingMm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_clntNo',nameId:'txt_clntNm',btnId:'btn_clntNo',id:'udc_clntNo',code:'clntNo',refDataCollection:'dma_condition',allowCharCode:'0-9','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'주유소별 단가',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',grdDownOpts:'{"fileName" : "주유소별 단가내역.xlsx", "sheetName": "주유소별 단가내역", "useSubTotal" : "true", "useSubTotalData" : "true", "type" : "1"}',gridID:'gr_out',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',style:'',visibleRowNum:'12',visibleRowNumFix:'true',fixedColumn:'3','ev:onafteredit':'scwin.gr_out_onafteredit',rowStatusVisible:'true',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'차량정보',width:'210',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'소속거래처',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'매입거래처',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'주유월',width:'80',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'기준',width:'70',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'주유소정보',width:'140',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'운행거리',width:'210',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'column43',value:'연비기준현황',displayMode:'label',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'column37',value:'실주유현황',displayMode:'label',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'column89',value:'손익',displayMode:'label',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column73',value:'공제',displayMode:'label',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column105',value:'기사지급총액',displayMode:'label',colSpan:'3',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column68',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'차종',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column66',value:'기준연비',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'주유소',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',value:'평균단가',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column59',value:'신선',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column58',value:'공산',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column57',value:'합계',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column56',value:'주유량',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'주유공급가',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',value:'주유세액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column53',value:'합계',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column52',value:'주유량',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column102',value:'공급가',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column98',value:'세액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column94',value:'합계',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column90',value:'주유량',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column86',value:'공급가',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column82',value:'세액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column70',value:'합계',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column74',value:'공급가',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column78',value:'세액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column118',value:'합계',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column106',value:'공급가',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column110',value:'세액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column114',value:'합계',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'degNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fleffcncy',inputType:'text',width:'100',textAlign:'right',dataType:'float',displayFormat:'#,###.#0[floor]',maxLength:'2.2',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilingMm',inputType:'calendar',width:'80',calendarValueType:'yearMonth',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAdptStdcd',inputType:'select',width:'70'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'연비'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'실비'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:column',A:{chooseOption:'true',chooseOptionLabel:'$blank',displayMode:'value delim label',id:'oilStatCd',inputType:'select',width:'100',textAlign:'left',selectedData:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilingUpr',inputType:'text',width:'100',textAlign:'right',readOnly:'true',displayFormat:'#,###[floor]',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dtc1',inputType:'text',width:'70',textAlign:'right',dataType:'float',displayFormat:'#,###.0[floor]',maxLength:'7.0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dtc2',displayMode:'label',textAlign:'right',displayFormat:'#,###.0[floor]',dataType:'float',maxLength:'7.0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sumDtc',displayMode:'label',textAlign:'right',displayFormat:'#,###.#0[floor]',dataType:'number',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'stdOilingVol',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###[floor]',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stdAmt',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###[floor]',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stdVatAmt',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###[floor]',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'stdAmtTot',displayMode:'label',textAlign:'right',displayFormat:'#,###.#0[floor]',dataType:'number',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'realOilingVol',displayMode:'label',textAlign:'right',displayFormat:'#,###[floor]',allowChar:'0-9',dataType:'float',maxLength:'6.0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'realAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###[floor]',allowChar:'0-9',dataType:'float',maxLength:'13.0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'realVatAmt',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###[floor]',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'realAmtTot',displayMode:'label',textAlign:'right',displayFormat:'#,###.#0[floor]',dataType:'number',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'profitVol',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###[floor]',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'profitAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###[floor]',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'profitVatAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###[floor]',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'profitAmtTot',displayMode:'label',textAlign:'right',dataType:'number',readOnly:'true',displayFormat:'#,###[floor]',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'deductAmt',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###',allowChar:'0-9',maxLength:'13.0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'deductVatAmt',displayMode:'label',textAlign:'right',dataType:'number',readOnly:'true',displayFormat:'#,###[floor]',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'deductAmtTot',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###[floor]',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'payAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'payVatAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'payAmtTot',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column51',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column48',displayMode:'label',textAlign:'right',expression:'sum(\'sumDtc\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column45',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column36',displayMode:'label',textAlign:'right',expression:'sum(\'stdAmtTot\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column39',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column104',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column100',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column96',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'realAmtTot\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column92',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'profitVol\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column88',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'profitAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column84',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'profitVatAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column72',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'profitAmtTot\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column76',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'deductAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column80',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'deductVatAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column120',displayMode:'label',textAlign:'right',expression:'sum(\'deductAmtTot\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column108',displayMode:'label',textAlign:'right',expression:'sum(\'payAmt\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column112',displayMode:'label',textAlign:'right',expression:'sum(\'payVatAmt\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column116',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'payAmtTot\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdBtn',btnRowDelYn:'N',btnRowAddYn:'N',btnDelYn:'Y',btnCancelYn:'Y',EngYn:'N',cancelObjType:'ctrlBtn',delObjType:'ctrlBtn',delFunction:'scwin.f_delete',cancelFunction:'scwin.f_cancle'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'',popupID:'',nameId:'',style:'display: none;',id:'udc_comCodeGrid',hideName:'Y'}},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})