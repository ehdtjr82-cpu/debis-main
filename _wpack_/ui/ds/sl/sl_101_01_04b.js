/*amd /ui/ds/sl/sl_101_01_04b.xml 45763 ed592450ee72cf384279cddff58ba40f9ec5945eeb0e7c7fd009bafdb9d779f8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_search',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'arvStDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'arvEndDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'scalClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'clntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'scalCommCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'commCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'vsslCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'inoutStDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name9',id:'inoutEndDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name10',id:'cvsslMgntNo'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_stockInOutDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'clntClsNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'clntNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'vsslNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'arvIntendDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'commNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'stockInoutDt'}},{T:1,N:'w2:column',A:{dataType:'number',name:'name7',id:'inWt'}},{T:1,N:'w2:column',A:{dataType:'number',name:'name8',id:'outWt'}},{T:1,N:'w2:column',A:{dataType:'number',name:'name9',id:'transferWt'}},{T:1,N:'w2:column',A:{dataType:'number',name:'name10',id:'acquisitionWt'}},{T:1,N:'w2:column',A:{dataType:'number',name:'name11',id:'stockWt'}},{T:1,N:'w2:column',A:{dataType:'number',name:'name12',id:'surveyWt'}},{T:1,N:'w2:column',A:{dataType:'number',name:'name13',id:'preoutWt'}},{T:1,N:'w2:column',A:{dataType:'number',name:'name14',id:'realStockWt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name15',id:'clntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name16',id:'vsslCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name17',id:'commCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name18',id:'cvsslMgntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name19',id:'ordClsCd'}},{T:1,N:'w2:column',A:{id:'clntClsCd',name:'name20',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_stockAmt',encoding:'UTF-8',mediatype:'application/json',action:'/ds.sl.RetrieveScaleInOutStockAmtCMD.do',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_stockInOutDetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_stockInOutDetail","key":"OUT_DS1"}','ev:submitdone':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 화면 - Id: sl_101_01_04b.jsp,v 1.15 2016/07/07 07:43:45 guyorimi Exp 
// 설명 - 입출고내역을 조회한다.

scwin.nowDt = $c.date.getServerDateTime($p);
scwin.todayDt = $c.date.getDateAddMonthDirection($p, scwin.nowDt, 0, "F");
scwin.hd_vsslCd = "";
scwin.onpageload = function () {
  scwin.f_HeaderCreate(); // 조건문 Header Create
};
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableObjects($p, [ed_clntNo, ed_clntNm, ed_commCd, ed_commNm]);
  ed_inoutStDt.setValue(scwin.todayDt);
  ed_inoutEndDt.setValue(scwin.nowDt);
};
scwin.ondataload = function () {};

//-------------------------------------------------------------------------
// Function
//-------------------------------------------------------------------------
scwin.f_HeaderCreate = function () {
  ds_search.removeAll();
  ds_search.insertRow();
  ds_search.setRowPosition(0);
};

// 조회
scwin.f_Retrieve = async function () {
  let searchChk = await $c.gus.cfValidate($p, [tbl_condition]);
  if (!searchChk) {
    return;
  }
  let e = await $c.sbm.execute($p, sbm_stockAmt);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_stockAmt_submitdone(e);
  }
};

// 휴지통 처리
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_condition, []);
  ed_arvStDt.focus();
};

// 엑셀 출력
scwin.f_Excel = function () {
  var count = ds_stockInOutDetail.getRowCount();
  if (!(count > 0)) return;
  var infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 12,
    text: "입출고내역조회",
    textAlign: "center",
    fontName: "돋움체",
    fontSize: 12,
    bgColor: "#ffffff",
    drawBorder: false
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 12,
    text: "입출고일자" + " [" + $c.gus.cfGetFormatStr($p, ed_inoutStDt.getValue(), "####/##/##") + " ~ " + $c.gus.cfGetFormatStr($p, ed_inoutEndDt.getValue(), "####/##/##") + "]",
    textAlign: "left",
    fontName: "굴림체",
    fontSize: 10,
    bgColor: "#ffffff",
    drawBorder: false
  }, {
    rowIndex: 3,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 12,
    text: "화주" + " [" + ed_clntNm.getValue() + "]",
    textAlign: "left",
    fontName: "굴림체",
    fontSize: 10,
    bgColor: "#ffffff",
    drawBorder: false
  }, {
    rowIndex: 4,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 12,
    text: "품목" + " [" + ed_commNm.getValue() + "]",
    textAlign: "left",
    fontName: "굴림체",
    fontSize: 10,
    bgColor: "#ffffff",
    drawBorder: false
  }, {
    rowIndex: 5,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 12,
    text: "입항일자" + " [" + $c.gus.cfGetFormatStr($p, ed_arvStDt.getValue(), "####/##/##") + " ~ " + $c.gus.cfGetFormatStr($p, ed_arvEndDt.getValue(), "####/##/##") + "]",
    textAlign: "left",
    fontName: "굴림체",
    fontSize: 10,
    bgColor: "#ffffff",
    drawBorder: false
  }, {
    rowIndex: 6,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 12,
    text: "본선" + " [" + ed_vsslNm.getValue() + "]",
    textAlign: "left",
    fontName: "굴림체",
    fontSize: 10,
    bgColor: "#ffffff",
    drawBorder: false
  }];
  var options = {
    fileName: "입출고내역조회" + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: "입출고내역조회",
    type: 4 + 8 + 16,
    startRowIndex: 7,
    removeColumns: "11"
  };
  $c.data.downloadGridViewExcel($p, gr_stockInOutDetail, options, infoArr);
};

// 본선관리번호검색 팝업창 띄우기
scwin.f_openPopUp = async function () {
  var args = new Array();
  args[0] = ed_cvsslMgntNo.getValue(); // 본선관리번호
  args[1] = ""; // 수출입구분코드

  var opts = {
    id: "smpPop",
    popupName: "본선관리번호검색팝업",
    modal: true,
    type: "browserPopup",
    width: 1230,
    height: 550,
    title: "본선관리번호검색팝업"
  };
  var rtnList = await $c.win.openPopup($p, "/ui/ds/sl/sl_101_01_01p.xml", opts, args);
  if (rtnList != null) {
    ed_cvsslMgntNo.setValue(rtnList[0]);
    scwin.hd_vsslCd = rtnList[1];
    ed_vsslNm.setValue(rtnList[2]);
  }
};

// Pop up 
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 
  var pWhere; // 조회조건

  switch (disGubun) {
    case 1:
      // 화주Like조회
      var v_clntNo = "525083";
      var v_itemCd = "SCAL_CLNT"; // 사업장 조회
      var v_wrkPlCd = "6E03";
      var v_docCd = "SCL_H01";
      pWhere = v_clntNo + "," + v_itemCd + "," + v_wrkPlCd + "," + v_docCd;
      udc_clntNo.setSelectId("retrieveEdiMapping");
      rtnList = await udc_clntNo.cfCommonPopUpAsync('' // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "계근대;화주코드,화주명,데비스;화주코드" // Title순서	
      , "80,150,100" // 보여주는 각 컬럼들의 폭	
      , "4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "화주,화주코드,화주명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
        ed_scalClntNo.setValue(rtnList[0]);
        ed_clntNm.setValue(rtnList[1]);
        ed_clntNo.setValue(rtnList[2]);
      } else {
        ed_scalClntNo.setValue("");
        ed_clntNm.setValue("");
        ed_clntNo.setValue("");
      }
      break;
    case 2:
      // 화주단건조회
      var v_clntNo = "525083";
      var v_itemCd = "SCAL_CLNT"; // 사업장 조회
      var v_wrkPlCd = "6E03";
      var v_docCd = "SCL_H01";
      pWhere = v_clntNo + "," + v_itemCd + "," + v_wrkPlCd + "," + v_docCd;
      udc_clntNo.setSelectId("retrieveEdiMapping2016");
      rtnList = await udc_clntNo.cfCommonPopUpAsync('' // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "계근대;화주코드,화주명,데비스;화주코드" // Title순서	
      , "80,150,100" // 보여주는 각 컬럼들의 폭	
      , "4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "화주,화주코드,화주명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
        ed_scalClntNo.setValue(rtnList[0]);
        ed_clntNm.setValue(rtnList[1]);
        ed_clntNo.setValue(rtnList[2]);
      } else {
        ed_scalClntNo.setValue("");
        ed_clntNm.setValue("");
        ed_clntNo.setValue("");
      }
      break;
    case 3:
      // 품목like조회
      var v_clntNo = "525083";
      var v_itemCd = "SCAL_COMM"; // 사업장 조회
      var v_wrkPlCd = "6E03";
      var v_docCd = "SCL_H01";
      pWhere = v_clntNo + "," + v_itemCd + "," + v_wrkPlCd + "," + v_docCd;
      udc_commCd.setSelectId("retrieveEdiMapping");
      rtnList = await udc_commCd.cfCommonPopUpAsync('' // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "계근대;품명코드,품명,데비스;품명코드" // Title순서	
      , "80,150,100" // 보여주는 각 컬럼들의 폭	
      , "4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "품목,품명코드,품명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
        ed_scalCommCd.setValue(rtnList[0]);
        ed_commNm.setValue(rtnList[1]);
        ed_commCd.setValue(rtnList[2]);
      } else {
        ed_scalCommCd.setValue("");
        ed_commNm.setValue("");
        ed_commCd.setValue("");
      }
      break;
    case 4:
      // 품목단건 조회
      var v_clntNo = "525083";
      var v_itemCd = "SCAL_COMM"; // 사업장 조회
      var v_wrkPlCd = "6E03";
      var v_docCd = "SCL_H01";
      pWhere = v_clntNo + "," + v_itemCd + "," + v_wrkPlCd + "," + v_docCd;
      udc_commCd.setSelectId("retrieveEdiMapping2016");
      rtnList = await udc_commCd.cfCommonPopUpAsync('' // XML상의 SELECT ID	
      , pCode // 화`면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "계근대;품명코드,품명,데비스;품명코드" // Title순서	
      , "80,150,100" // 보여주는 각 컬럼들의 폭	
      , "4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "품목,품명코드,품명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
        ed_scalCommCd.setValue(rtnList[0]);
        ed_commNm.setValue(rtnList[1]);
        ed_commCd.setValue(rtnList[2]);
      } else {
        ed_scalCommCd.setValue("");
        ed_commNm.setValue("");
        ed_commCd.setValue("");
      }
      break;
  }
};

// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    // inObj가 코드 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_pringOz = async function () {
  var wrkPtrnClsCd = acb_wrkPtrnClsCd.getValue();
  var odiyn = ds_stockInOutDetail.getRowCount();
  if (odiyn == 0) {
    $c.win.alert($p, "조회를 한 이후에 화주를 선택후 발행버튼을 클릭해주세요");
    return;
  }
  var outWt = ds_stockInOutDetail.getCellData(ds_stockInOutDetail.getRowPosition(), "outWt");
  var inWt = ds_stockInOutDetail.getCellData(ds_stockInOutDetail.getRowPosition(), "inWt");
  var surveyWt = ds_stockInOutDetail.getCellData(ds_stockInOutDetail.getRowPosition(), "surveyWt");
  var preoutWt = ds_stockInOutDetail.getCellData(ds_stockInOutDetail.getRowPosition(), "preoutWt");
  if (wrkPtrnClsCd == 2) {
    if (inWt == 0) {
      $c.win.alert($p, "입고량이 0인 경우 발행할 수 없습니다.");
      return;
    }
  } else if (wrkPtrnClsCd == 3) {
    if (outWt == 0) {
      $c.win.alert($p, "출고량이 0인 경우 발행할 수 없습니다.");
      return;
    }
  } else if (wrkPtrnClsCd == 4) {
    if (surveyWt == 0) {
      $c.win.alert($p, "단순계근량이 0인 경우 발행할 수 없습니다.");
      return;
    }
  } else if (wrkPtrnClsCd == 5) {
    if (preoutWt == 0) {
      $c.win.alert($p, "개별출고량이 0인 경우 발행할 수 없습니다.");
      return;
    }
  }
  const data = {
    reportName: "/ds/sl/sl_101_01_05.ozr",
    odiName: "sl_101_01_05",
    odiParam: {
      stockStDt: ed_inoutStDt.getValue(),
      stockEndDt: ed_inoutEndDt.getValue(),
      clntNo: ds_stockInOutDetail.getCellData(ds_stockInOutDetail.getRowPosition(), "clntNo"),
      commCd: ds_stockInOutDetail.getCellData(ds_stockInOutDetail.getRowPosition(), "commCd"),
      cvsslMgntNo: ds_stockInOutDetail.getCellData(ds_stockInOutDetail.getRowPosition(), "cvsslMgntNo"),
      wrkPtrnClsCd: wrkPtrnClsCd
    },
    viewerParam: {
      mode: "preview",
      zoom: 100,
      useprogressbar: true
    },
    formParam: {}
  };
  await scwin.openPopup(data);
};
scwin.f_pringOz2 = async function () {
  var wrkPtrnClsCd = acb_wrkPtrnClsCd.getValue();
  if (acb_ozClsCd.getValue() == 1) {
    // 일괄 발행
    var odiyn = ds_stockInOutDetail.getRowCount();
    if (ed_cvsslMgntNo.getValue() == "") {
      if (wrkPtrnClsCd != 4 && wrkPtrnClsCd != 5) {
        $c.win.alert($p, "일괄발행시 본선관리번호는 필수 조회조건입니다.");
        return;
      }
    }
    if (odiyn == 0) {
      $c.win.alert($p, "조회를 한 이후에 발행버튼을 클릭해주세요");
      return;
    }
    const data = {
      reportName: "/ds/sl/sl_101_01_04_01.ozr",
      odiName: "sl_101_01_04_01",
      odiParam: {
        stockStDt: ed_inoutStDt.getValue(),
        stockEndDt: ed_inoutEndDt.getValue(),
        clntNo: ds_stockInOutDetail.getCellData(ds_stockInOutDetail.getRowPosition(), "clntNo"),
        commCd: ds_stockInOutDetail.getCellData(ds_stockInOutDetail.getRowPosition(), "commCd"),
        cvsslMgntNo: ds_stockInOutDetail.getCellData(ds_stockInOutDetail.getRowPosition(), "cvsslMgntNo"),
        wrkPtrnClsCd: wrkPtrnClsCd
      },
      viewerParam: {
        mode: "preview",
        zoom: 100,
        useprogressbar: true
      },
      formParam: {}
    };
    await scwin.openPopup(data);
  } else {
    // 개별 발행
    var odiyn = ds_stockInOutDetail.getRowCount();
    if (odiyn == 0) {
      $c.win.alert($p, "조회를 한 이후에 화주를 선택후 발행버튼을 클릭해주세요");
      return;
    }
    var outWt = ds_stockInOutDetail.getCellData(ds_stockInOutDetail.getRowPosition(), "outWt");
    var inWt = ds_stockInOutDetail.getCellData(ds_stockInOutDetail.getRowPosition(), "inWt");
    var surveyWt = ds_stockInOutDetail.getCellData(ds_stockInOutDetail.getRowPosition(), "surveyWt");
    var preoutWt = ds_stockInOutDetail.getCellData(ds_stockInOutDetail.getRowPosition(), "preoutWt");
    if (wrkPtrnClsCd == 2) {
      if (inWt == 0) {
        $c.win.alert($p, "입고량이 0인 경우 발행할 수 없습니다.");
        return;
      }
    } else if (wrkPtrnClsCd == 3) {
      if (outWt == 0) {
        $c.win.alert($p, "출고량이 0인 경우 발행할 수 없습니다.");
        return;
      }
    } else if (wrkPtrnClsCd == 4) {
      if (surveyWt == 0) {
        $c.win.alert($p, "단순계근량이 0인 경우 발행할 수 없습니다.");
        return;
      }
    } else if (wrkPtrnClsCd == 5) {
      if (preoutWt == 0) {
        $c.win.alert($p, "개별출고량이 0인 경우 발행할 수 없습니다.");
        return;
      }
    }
    const data = {
      reportName: "/ds/sl/sl_101_01_04.ozr",
      odiName: "sl_101_01_04",
      odiParam: {
        stockStDt: ed_inoutStDt.getValue(),
        stockEndDt: ed_inoutEndDt.getValue(),
        clntNo: ds_stockInOutDetail.getCellData(ds_stockInOutDetail.getRowPosition(), "clntNo"),
        commCd: ds_stockInOutDetail.getCellData(ds_stockInOutDetail.getRowPosition(), "commCd"),
        cvsslMgntNo: ds_stockInOutDetail.getCellData(ds_stockInOutDetail.getRowPosition(), "cvsslMgntNo"),
        wrkPtrnClsCd: wrkPtrnClsCd
      },
      viewerParam: {
        mode: "preview",
        zoom: 100,
        useprogressbar: true
      },
      formParam: {}
    };
    await scwin.openPopup(data);
  }
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
// Sbm submitdone
//-------------------------------------------------------------------------
scwin.sbm_stockAmt_submitdone = function (e) {
  if (ds_stockInOutDetail.getRowCount() == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
    return;
  } else {
    ds_stockInOutDetail.setRowPosition(0);
    let sort_options = {};
    sort_options.sortIndex = "clntClsCd ordClsCd clntNm vsslNm arvIntendDt commNm stockInoutDt";
    sort_options.sortOrder = "-1 1 1 1 1 1 1"; // 1: 오름차순
    ds_stockInOutDetail.multisort(sort_options);
  }
  totalRows.setValue(ds_stockInOutDetail.getRowCount());
};

//-------------------------------------------------------------------------
// Event onClick
//-------------------------------------------------------------------------
// 조회 버튼 클릭 이벤트 
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

// 초기화 버튼 클릭 이벤트 
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

// 화주 찾기 버튼 클릭 이벤트
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_scalClntNo.getValue(), ed_clntNm.getValue(), 'F', 'T');
};

// 품목 찾기 버튼 클릭 이벤트
scwin.udc_commCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_scalCommCd.getValue(), ed_commNm.getValue(), 'F', 'T');
};

// 본선 찾기 버튼 클릭 이벤트
scwin.udc_cvsslMgntNo_onclickEvent = function (e) {
  scwin.f_openPopUp();
};

// 본선별차량일보발행 버튼 클릭 이벤트
scwin.btn_report_onclick = function (e) {
  scwin.f_pringOz();
};

// 일일계근일보발행 버튼 클릭 이벤트
scwin.btn_report2_onclick = function (e) {
  scwin.f_pringOz2();
};

//-------------------------------------------------------------------------
// Event onblur
//-------------------------------------------------------------------------
// 화주 Onbluer(onKillFocus) 이벤트 발생시
scwin.ed_scalClntNo_onblur = function (e) {
  if (ed_scalClntNo.getValue() == "") {
    ed_scalClntNo.setValue("");
    ed_clntNm.setValue("");
    ed_clntNo.setValue("");
  } else {
    scwin.f_chkOpenCommonPopUp(ed_scalClntNo, ed_clntNm, 2);
  }
};

// 품목 Onbluer(onKillFocus) 이벤트 발생시
scwin.ed_scalCommCd_onblur = function (e) {
  if (ed_scalCommCd.getValue() == "") {
    ed_scalCommCd.setValue("");
    ed_commNm.setValue("");
    ed_commCd.setValue("");
  } else {
    scwin.f_chkOpenCommonPopUp(ed_scalCommCd, ed_commNm, 4);
  }
};

// 본선 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_cvsslMgntNo_onblurCodeEvent = function (e) {
  if (ed_cvsslMgntNo.getValue() == "") {
    ed_cvsslMgntNo.setValue("");
    ed_vsslNm.setValue("");
    scwin.hd_vsslCd = "";
  } else {
    scwin.f_openPopUp();
  }
};

//-------------------------------------------------------------------------
// Event onviewchange
//-------------------------------------------------------------------------
// 화주 onviewchange 이벤트 발생시
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_scalClntNo, 1, false);
};

// 품목 onviewchange 이벤트 발생시
scwin.udc_commCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_commNm, ed_scalCommCd, 3, false);
};

//-------------------------------------------------------------------------
// 그리드 이벤트
//-------------------------------------------------------------------------
scwin.gr_stockInOutDetail_CustomFormatter = function (data, formattedData, rowIndex, colIndex) {
  let columnId = $c.util.getComponent($p, this.id).getColumnID(colIndex);
  let val = data,
    color = "black";
  if (columnId == "stockWt") {
    val = "";
  }
  return val;
};

//-------------------------------------------------------------------------
// InputBox 대문자 설정
//-------------------------------------------------------------------------
scwin.ed_scalClntNo_onkeyup = function (e) {
  $c.win.chUpper($p, e);
};
scwin.ed_scalCommCd_onkeyup = function (e) {
  $c.win.chUpper($p, e);
};
scwin.getClntNmSubTotalLabel = function (data) {
  return data.substr(0, data.indexOf('|'));
};
scwin.getCommNmSubTotalLabel = function (data) {
  return data.substr(data.indexOf('|') + 1);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_condition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입출고일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_search',refEdDt:'inoutEndDt',refStDt:'inoutStDt',style:'',edFromId:'ed_inoutStDt',edToId:'ed_inoutEndDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'Data',objTypeTo:'Data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:50px;',id:'ed_scalClntNo',placeholder:'',class:'',objType:'Data',maxlength:'4','ev:onblur':'scwin.ed_scalClntNo_onblur',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.ed_scalClntNo_onkeyup'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',hideName:'Y',codeId:'ed_clntNo',nameId:'ed_clntNm',id:'udc_clntNo',btnId:'btn_clntNo',objTypeCode:'Data',objTypeName:'Data',mandatoryName:'false',mandatoryCode:'false',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent',maxlengthCode:'6',refDataCollection:'ds_search',code:'clntNo'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_scalCommCd',placeholder:'',style:'width:50px;',maxlength:'4','ev:onblur':'scwin.ed_scalCommCd_onblur',objType:'Data','ev:onkeyup':'scwin.ed_scalCommCd_onkeyup',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_commCd',btnId:'btn_commCd',id:'udc_commCd',nameId:'ed_commNm',objTypeName:'Data',UpperFlagCode:'1',mandatoryCode:'false',mandatoryName:'false','ev:onclickEvent':'scwin.udc_commCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_commCd_onviewchangeNameEvent',refDataCollection:'ds_search',maxlengthCode:'8',objTypeCode:'Data',code:'commCd'}}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입항일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_search',refEdDt:'arvEndDt',refStDt:'arvStDt',style:'',edFromId:'ed_arvStDt',edToId:'ed_arvEndDt',mandatoryFrom:'false',mandatoryTo:'false',objTypeFrom:'Data',objTypeTo:'Data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_cvsslMgntNo',id:'udc_cvsslMgntNo',nameId:'ed_vsslNm',btnId:'btn_cvsslMgntNo',objTypeCode:'Data',maxlengthCode:'8',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_cvsslMgntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_cvsslMgntNo_onblurCodeEvent',code:'cvsslMgntNo',refDataCollection:'ds_search',validExpCode:'본선관리번호',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'재고정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_stockInOutDetail',gridUpYn:'N',gridDownYn:'Y',templateYn:'N',btnUser:'Y',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_stockInOutDetail',id:'gr_stockInOutDetail',style:'',visibleRowNum:'15',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'subsum1',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'화주명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'모선명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'입항일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'품명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'입출고일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'입고량<br/>(kg)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'출고량<br/>(kg)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'양도량<br/>(kg)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'양수량<br/>(kg)',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'재고잔량<br/>(kg)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',value:'단순계근<br/>(kg)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'개별출고<br/>(kg)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'잔량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'화주코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'본선코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'품명코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column46',value:'본선관리번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',value:'기타조회순번',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'subsum1',value:'',displayMode:'label',hiddenCol:'true',expression:'display(\'clntNm\')+\'|\'+display(\'commNm\')',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntClsNm',inputType:'text',width:'70',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'150',textAlign:'left',readOnly:'true',colMerge:'true',upperColumn:'clntClsNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true',colMerge:'true',upperColumn:'clntNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvIntendDt',inputType:'calendar',width:'100',readOnly:'true',colMerge:'true',upperColumn:'vsslNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true',colMerge:'true',upperColumn:'arvIntendDt'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockInoutDt',inputType:'calendar',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inWt',inputType:'text',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outWt',inputType:'text',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transferWt',inputType:'text',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acquisitionWt',inputType:'text',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockWt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',value:'',displayFormatter:'scwin.fn_hideValue',customFormatter:'scwin.gr_stockInOutDetail_CustomFormatter'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'surveyWt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'preoutWt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'realStockWt',displayMode:'label',textAlign:'right',hidden:'true',hiddenCol:'true',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label',hidden:'true',hiddenCol:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslCd',displayMode:'label',hidden:'true',hiddenCol:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label',hidden:'true',hiddenCol:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cvsslMgntNo',displayMode:'label',hidden:'true',hiddenCol:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ordClsCd',displayMode:'label',hidden:'true',hiddenCol:'true',readOnly:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'subsum1',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'',style:'',id:'subsum1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column88',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'clntNm',value:'',displayMode:'label',expression:'scwin.getClntNmSubTotalLabel(targetColValue())',subTotalTextAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column86',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'commNm',value:'',displayMode:'label',expression:'scwin.getCommNmSubTotalLabel(targetColValue())'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column83',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'inWt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'inWt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'outWt',value:'',displayMode:'label',expression:'sum(\'outWt\')',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'transferWt',value:'',displayMode:'label',expression:'sum(\'transferWt\')',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'acquisitionWt',value:'',displayMode:'label',expression:'sum(\'acquisitionWt\')',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'stockWt',value:'',displayMode:'label',dataType:'number',textAlign:'right',expression:'sum(\'inWt\')-sum(\'outWt\')-sum(\'transferWt\')+sum(\'acquisitionWt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'surveyWt',value:'',displayMode:'label',expression:'sum(\'surveyWt\')',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'preoutWt',value:'',displayMode:'label',expression:'sum(\'preoutWt\')',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column30',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'inWt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'outWt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'transferWt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'acquisitionWt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column69',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'inWt\')-sum(\'outWt\')-sum(\'transferWt\')+sum(\'acquisitionWt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column66',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'surveyWt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column63',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'preoutWt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:100px;',id:'acb_wrkPtrnClsCd',class:'',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'입출고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'입고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'출고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'단순계근'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'개별출고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_report',label:'저장',type:'button',class:'btn white','ev:onclick':'scwin.btn_report_onclick',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'본선별차량일보발행'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:100px;',id:'acb_ozClsCd',class:'',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'일괄'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'개별'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_report2',label:'저장',type:'button',class:'btn white','ev:onclick':'scwin.btn_report2_onclick',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'일일계근일보발행'}]}]}]}]}]}]}]}]}]}]})