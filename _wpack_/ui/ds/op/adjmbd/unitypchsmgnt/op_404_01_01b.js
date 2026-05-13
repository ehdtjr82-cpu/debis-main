/*amd /ui/ds/op/adjmbd/unitypchsmgnt/op_404_01_01b.xml 44188 b74fcad9bf68c5acab4761160bdf6f7c0736a8caa6f3bcec89e3eca601c57d62 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsltsStdDt1',name:'실적일자1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsltsStdDt2',name:'실적일자2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsDeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsDeptNm',name:'매입부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'매입거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNm',name:'매입거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNoList',name:'차량번호리스트',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNoList',name:'청구거래처리스트',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commNm',name:'품명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_update',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'매입순번',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'newClntNo',name:'신규거래처번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'newPchsUpr',name:'신규매입단가',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'newPchsAmt',name:'신규매입금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'newVat',name:'신규부가세',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_master_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',defaultValue:'',length:'13'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'매입순번',dataType:'number',defaultValue:'0',length:'7'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서코드',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'pchsDeptNm',name:'매입부서명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입거래처',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매입거래처명',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'협력업체거래처번호',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체거래처명',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'newClntNo',name:'신규거래처번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'vol',name:'물량',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit 코드',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'pchsUpr',name:'매입단가',dataType:'number',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입액',dataType:'number',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'number',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'총금액',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'newPchsUpr',name:'신규매입단가',dataType:'number',defaultValue:'0',length:'15'}},{T:1,N:'w2:column',A:{id:'newPchsAmt',name:'신규매입금액',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'newVat',name:'신규부가세',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'newTotAmt',name:'신규총금액',dataType:'number',defaultValue:'0',length:'20'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.adjmbd.unitypchsmgnt.RetrievePurchaseDataCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.adjmbd.unitypchsmgnt.SavePurchaseDataCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_update","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sUserId = $c.data.getMemInfo($p, "userClsCd"); // 사용자 구분코드
scwin.strDate = $c.date.getServerDateTime($p, "yyyyMM"); //현재월
scwin.strDate1 = scwin.strDate + "01"; //현재월의 첫날
scwin.strDate2 = scwin.strDate + $c.date.getLastDateOfMonth($p, scwin.strDate1); //현재월마지막일자

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  acb_clntNo.setSelectedIndex(0);
  acb_dcsnClsCd.setSelectedIndex(0);
  rd_gubun.setValue("0");

  // 입력 그리드 maxlength 설정
  scwin.f_SetGridColumnMaxLength(gr_master);
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    //소스
    ed_rsltsStdDt1.setValue(scwin.strDate1);
    ed_rsltsStdDt2.setValue(scwin.strDate2);

    //테스트 데이터
    // ds_search.set("pchsDeptCd", "4G1");
    // ds_search.set("rsltsStdDt1", "20250701");
    // ds_search.set("rsltsStdDt2", "20250730");
    // ds_search.set("clntNo", "000001");
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 입력 그리드 maxlength 설정
//-------------------------------------------------------------------------
scwin.f_SetGridColumnMaxLength = function (gridViewObj) {
  for (let i = 0; i < gridViewObj.getTotalCol(); i++) {
    let colNm = gridViewObj.getColumnID(i);
    let dataObj = $c.gus.object($p, gridViewObj.getDataList());
    let colInfo = dataObj.getColumnInfo(colNm);
    if (typeof colInfo != "undefined") {
      gridViewObj.setMaxLength(i, colInfo.length);
    }
  }
};

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_srchCond);
  acb_clntNo.setSelectedIndex(0);
  ed_rsltsStdDt1.setValue(scwin.strDate1);
  ed_rsltsStdDt2.setValue(scwin.strDate2);
  rd_gubun.setValue("0");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [tbl_srchCond]);
  if (!ret) return;
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 일괄셋팅 : new data 에 셋팅, check
//-------------------------------------------------------------------------
scwin.f_settingData = function () {
  var orgData = ed_orgData.getValue();
  var newData = ed_newData.getValue();
  var gubun = rd_gubun.getValue();
  var pchsClntNo, copCoClntNo;
  if (newData == "") {
    $c.win.alert($p, "변경할 데이터를 입력 해 주세요");
    return;
  }
  if (gubun == "0") {
    //거래처일때
    for (i = 0; i < ds_master.getRowCount(); i++) {
      pchsClntNo = ds_master.getCellData(i, "pchsClntNo");
      copCoClntNo = ds_master.getCellData(i, "copCoClntNo");
      if (orgData == pchsClntNo || orgData == copCoClntNo) {
        ds_master.setCellData(i, "newClntNo", newData);
        ds_master.setCellData(i, "chk", "T");
      }
    }
  } else {
    //단가일때
    if (!$c.num.isNumber($p, newData)) return; // 숫자가 아니면 빠져나가기

    for (i = 0; i < ds_master.getRowCount(); i++) {
      if (orgData == ds_master.getCellData(i, "pchsUpr")) {
        vol = ds_master.getCellData(i, "vol");
        if (vol < 0.1) {
          vol = ds_master.getCellData(i, "wt");
        }
        ds_master.setCellData(i, "newPchsUpr", newData);
        ds_master.setCellData(i, "newPchsAmt", $c.num.floor($p, newData * vol));
        ds_master.setCellData(i, "newVat", $c.num.floor($p, newData * vol * 0.1));
        ds_master.setCellData(i, "newTotAmt", $c.num.floor($p, newData * vol * 1.1));
        ds_master.setCellData(i, "chk", "T");
      }
    } //end-for
  }
};

//-------------------------------------------------------------------------
// 선택셋팅 : new data 에 셋팅, check
//-------------------------------------------------------------------------
scwin.f_selsettingData = function () {
  var newData = ed_newData.getValue();
  var gubun = rd_gubun.getValue();
  if (newData == "") {
    $c.win.alert($p, "변경할 데이터를 입력 해 주세요");
    return;
  }
  if (gubun == "0") {
    //거래처일때
    for (i = 0; i < ds_master.getRowCount(); i++) {
      pchsClntNo = ds_master.getCellData(i, "pchsClntNo");
      copCoClntNo = ds_master.getCellData(i, "copCoClntNo");
      if (ds_master.getCellData(i, "chk") == "T") {
        ds_master.setCellData(i, "newClntNo", newData);
      }
    }
  } else {
    //단가일때
    for (i = 0; i < ds_master.getRowCount(); i++) {
      if (ds_master.getCellData(i, "chk") == "T") {
        vol = ds_master.getCellData(i, "vol");
        if (vol < 0.1) {
          vol = ds_master.getCellData(i, "wt");
        }
        ds_master.setCellData(i, "newPchsUpr", newData);
        ds_master.setCellData(i, "newPchsAmt", $c.num.floor($p, newData * vol));
        ds_master.setCellData(i, "newVat", $c.num.floor($p, newData * vol * 0.1));
        ds_master.setCellData(i, "newTotAmt", $c.num.floor($p, newData * vol * 1.1));
        ds_master.setCellData(i, "chk", "T");
      }
    } //end-for
  }
};

//-------------------------------------------------------------------------
// 저장    insert into TB_SD450_BORAL
//-------------------------------------------------------------------------
scwin.f_save = async function () {
  ds_update.removeAll();
  ed_orgData.setValue("");
  ed_newData.setValue("");
  var cnt = 0;
  for (i = 0; i < ds_master.getRowCount(); i++) {
    if ("T" == ds_master.getCellData(i, "chk")) {
      var newRow = ds_update.insertRow();
      ds_update.setCellData(newRow, "odrNo", ds_master.getCellData(i, "odrNo"));
      ds_update.setCellData(newRow, "pchsSeq", ds_master.getCellData(i, "pchsSeq"));
      ds_update.setCellData(newRow, "newClntNo", ds_master.getCellData(i, "newClntNo"));
      ds_update.setCellData(newRow, "newPchsUpr", ds_master.getCellData(i, "newPchsUpr"));
      ds_update.setCellData(newRow, "newPchsAmt", ds_master.getCellData(i, "newPchsAmt"));
      ds_update.setCellData(newRow, "newVat", ds_master.getCellData(i, "newVat"));
      cnt++;
    }
  }
  let ret = await $c.win.confirm($p, cnt + "건의 변경된 데이터를 저장 하시겠습니까?");
  if (ret) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------------------------------------
scwin.f_runExcel = async function () {
  var totCnt = ds_master.getRowCount();
  var sheetTitle = "매입 데이터 일괄변경";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: sheetTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
        ,
        sheetName: sheetTitle //엑셀내 시트명 지정필요시
      };
      const infoArr = [];
      $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 매입부서 팝업            
      udc_pchsDeptCd.setSelectId("retrieveLobranInfo"); // XML상의 SELECT ID
      udc_pchsDeptCd.cfCommonPopUp(scwin.udc_pchsDeptCd_callBackFunc // 콜백 함수
      , pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      // 매입거래처 팝업            
      udc_pchsClntNo.setSelectId("retrieveClntList"); // XML상의 SELECT ID
      udc_pchsClntNo.cfCommonPopUp(scwin.udc_pchsClntNo_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } // inObj가 코드명 필드일 경우 팝업
  else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_master.getRowCount() == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  tbx_totalRows.setValue(ds_master.getRowCount());
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.

  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 매입부서 UDC START
//-------------------------------------------------------------------------
scwin.udc_pchsDeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_pchsDeptCd.getValue(), ed_pchsDeptNm.getValue(), 'F', 'F');
};
scwin.udc_pchsDeptCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptCd, ed_pchsDeptNm, 1);
};
scwin.udc_pchsDeptCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptNm, ed_pchsDeptCd, 1, false);
};
scwin.udc_pchsDeptCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_pchsDeptCd, ed_pchsDeptNm);
};
//-------------------------------------------------------------------------
// 매입부서 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 매입거래처 UDC START
//-------------------------------------------------------------------------
scwin.udc_pchsClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_pchsClntNo.getValue(), ed_pchsClntNm.getValue(), 'F', 'F');
};
scwin.udc_pchsClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNo, ed_pchsClntNm, 2);
};
scwin.udc_pchsClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNm, ed_pchsClntNo, 2, false);
};
scwin.udc_pchsClntNo_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_pchsClntNo, ed_pchsClntNm);
};
//-------------------------------------------------------------------------
// 매입부서 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 그리드 셀클릭
// ASIS : gr_master OnClick(Row,Colid)
//-------------------------------------------------------------------------
scwin.gr_master_oncellclick = function (rowIndex, columnIndex, columnId) {
  //매입거래처
  if (columnId == "pchsClntNo" || columnId == "pchsClntNm") {
    rd_gubun.setValue("0"); //거래처로 셋팅
    ed_orgData.setValue(ds_master.getCellData(rowIndex, "pchsClntNo"));
  } else if (columnId == "copCoClntNo" || columnId == "copCoClntNm") {
    rd_gubun.setValue("0"); //거래처로 셋팅
    ed_orgData.setValue(ds_master.getCellData(rowIndex, "copCoClntNo"));
  } else if (columnId == "pchsUpr") {
    rd_gubun.setValue("1"); //거래처로 셋팅
    ed_orgData.setValue(ds_master.getCellData(rowIndex, "pchsUpr"));
  }
};
scwin.gr_master_oneditend = function (rowIndex, columnIndex, value) {
  var vol, newData;
  var data = ds_master.getCellData(rowIndex, columnIndex);
  if (data != olddata) {
    if (columnIndex == 28) {
      //newPchsUpr
      vol = ds_master.getCellData(rowIndex, "vol");
      if (vol < 0.1) vol = ds_master.getCellData(rowIndex, "wt");
      newData = ds_master.getCellData(rowIndex, "newPchsUpr");
      ds_master.setCellData(rowIndex, "newPchsAmt", newData * vol);
      ds_master.setCellData(rowIndex, "newVat", parseFloat(newData * vol * 0.1));
      ds_master.setCellData(rowIndex, "newTotAmt", parseFloat(newData * vol * 1.1));
      ds_master.setCellData(rowIndex, "chk", "T");
    }
    if (columnIndex == 29) {
      //newPchsAmt
      vol = ds_master.getCellData(rowIndex, "vol");
      if (vol < 0.1) vol = ds_master.getCellData(rowIndex, "wt");
      newData = ds_master.getCellData(rowIndex, "newPchsAmt");
      ds_master.setCellData(rowIndex, "newVat", parseFloat(newData * 0.1));
      ds_master.setCellData(rowIndex, "newTotAmt", parseFloat(newData * 1.1));
      ds_master.setCellData(rowIndex, "chk", "T");
    }
  }
};

//-------------------------------------------------------------------------
// ds_master dataList 값 변경
// ASIS : gr_master OnExit(row,colid,olddata)
//-------------------------------------------------------------------------
scwin.ds_master_oncelldatachange = function (info) {
  var vol, newData;
  if (info.newValue != info.oldValue) {
    if (info.colID == "newPchsUpr") {
      vol = ds_master.getCellData(info.rowIndex, "vol");
      if (vol < 0.1) vol = ds_master.getCellData(info.rowIndex, "wt");
      newData = ds_master.getCellData(info.rowIndex, "newPchsUpr");
      ds_master.setCellData(info.rowIndex, "newPchsAmt", $c.num.floor($p, newData * vol));
      ds_master.setCellData(info.rowIndex, "newVat", $c.num.floor($p, newData * vol * 0.1));
      ds_master.setCellData(info.rowIndex, "newTotAmt", $c.num.floor($p, newData * vol * 1.1));
      ds_master.setCellData(info.rowIndex, "chk", "T");
    }
    if (info.colID == "newPchsAmt") {
      vol = ds_master.getCellData(info.rowIndex, "vol");
      if (vol < 0.1) vol = ds_master.getCellData(info.rowIndex, "wt");
      newData = ds_master.getCellData(info.rowIndex, "newPchsAmt");
      ds_master.setCellData(info.rowIndex, "newVat", $c.num.floor($p, newData * 0.1));
      ds_master.setCellData(info.rowIndex, "newTotAmt", $c.num.floor($p, newData * 1.1));
      ds_master.setCellData(info.rowIndex, "chk", "T");
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'\\',id:'',label:'거래처구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_clntNo',search:'start',style:'width: 230px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_search.clntNo'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'KPX'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'117299'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'크나우프'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'000001'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'실적일자  ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'rsltsStdDt1',refDataMap:'ds_search',style:'',id:'udc_fromToCalendar1',refEdDt:'rsltsStdDt2',edFromId:'ed_rsltsStdDt1',edToId:'ed_rsltsStdDt2',mandatoryTo:'true',mandatoryFrom:'true',titleFrom:'시작일자',titleTo:'종료일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'acb_dcsnClsCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_search.dcsnClsCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',validTitle:'매입부서',codeId:'ed_pchsDeptCd',nameId:'ed_pchsDeptNm',btnId:'btn_pchsDeptCd',id:'udc_pchsDeptCd',maxlengthCode:'6',mandatoryCode:'true',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',code:'pchsDeptCd',refDataCollection:'ds_search',name:'pchsDeptNm','ev:onclickEvent':'scwin.udc_pchsDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_pchsDeptCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_pchsDeptCd_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_pchsClntNo',nameId:'ed_pchsClntNm',btnId:'btn_pchsClntNo',id:'udc_pchsClntNo',UpperFlagCode:'1',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',code:'pchsClntNo',refDataCollection:'ds_search',name:'pchsClntNm','ev:onclickEvent':'scwin.udc_pchsClntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_pchsClntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_pchsClntNo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_schInput',A:{style:'',id:'udc_vehclNoList',refDataMap:'ds_search',iptNm:'vehclNoList'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_commNm',placeholder:'',style:'',ref:'data:ds_search.commNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'title row-gap-8'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'오더별 매입 현황 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'',id:'rd_gubun',renderType:'radiogroup',rows:'',class:'rdo-grp mt0 mr8',cols:'',selectedIndex:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래처'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단가'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:group',A:{class:'amt-wrap',id:'',tagname:'ul',style:''},E:[{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선택',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:' amt',id:'ed_orgData',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'변경',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:' amt',id:'ed_newData',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_allSetting',style:'',type:'button','ev:onclick':'scwin.f_settingData'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄셋팅'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_selSettion',style:'',type:'button','ev:onclick':'scwin.f_selsettingData'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택셋팅'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'section '}},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_runExcel',gridID:'gr_master',gridUpYn:'N',templateYn:'N',gridDownYn:'Y',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'13',visibleRowNumFix:'true',fixedColumn:'3',readOnly:'true','ev:oncellclick':'scwin.gr_master_oncellclick','ev:oneditend':'scwin.gr_master_oneditend',fixedColumnNoMove:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'column84',displayMode:'label',rowSpan:'2',fixColumnWidth:'true',value:' '}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'120',value:'오더번호',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'60',value:'순번',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column129',value:'매입부서',displayMode:'label',colSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column141',value:'매입항목',displayMode:'label',colSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'220',value:'매입거래처',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'협력업체',width:'170',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'거래처',width:'100',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column113',value:'차량번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column145',value:'확정구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column149',value:'품명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'품명',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'실적일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column157',value:'작업시작일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column153',value:'작업종료일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'출발작업장',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column121',value:'도착작업장',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'VOL',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'WT',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',value:'단위',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'440',inputType:'text',id:'column57',value:'기존',displayMode:'label',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'430',inputType:'text',id:'column116',value:'변경',displayMode:'label',colSpan:'4',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column130',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column138',value:'명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column142',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column134',value:'항목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column109',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column108',value:'명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column107',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column106',value:'명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column97',value:'단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column96',value:'매입액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column95',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column94',value:'합계금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column93',value:'단가',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column92',value:'매입액',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column91',value:'부가세',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column90',value:'합계금액',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'chk',displayMode:'label',fixColumnWidth:'true',falseValue:'F',trueValue:'T',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrNo',inputType:'text',removeBorderStyle:'false',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'pchsSeq',inputType:'text',removeBorderStyle:'false',width:'60'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsDeptCd ',displayMode:'label',hidden:'true',hiddenCol:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsDeptNm',displayMode:'label',hidden:'true',hiddenCol:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'selpchItemCd',displayMode:'label',hidden:'true',hiddenCol:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'selpchItemNm',displayMode:'label',hidden:'true',hiddenCol:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'pchsClntNo',inputType:'text',removeBorderStyle:'false',width:'90'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'pchsClntNm',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'copCoClntNo',inputType:'text',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'copCoClntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'newClntNo',inputType:'text',width:'100',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dcsnClsCd',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'commCd',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rsltsStdDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkStDt',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkEndDt',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptWrkPlNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vol',displayMode:'label',dataType:'number',displayFormat:'#,##0.##',textAlign:'right',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wt',displayMode:'label',dataType:'number',displayFormat:'#,##0.##',textAlign:'right',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'unitCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsUpr',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vat',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'newPchsUpr',displayMode:'label',readOnly:'false',textAlign:'right',dataType:'number',displayFormat:'#,##0.##',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'newPchsAmt',displayMode:'label',readOnly:'false',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'newVat',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'newTotAmt',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column86',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column83',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column82',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column132',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column140',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column144',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column136',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column81',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column80',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column79',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column78',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column77',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column76',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column148',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column152',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column74',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column160',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column156',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column124',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column71',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column70',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column68',displayMode:'label',expression:'sum(\'pchsAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column67',displayMode:'label',expression:'sum(\'vat\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',id:'column66',displayMode:'label',expression:'sum(\'totAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column64',displayMode:'label',expression:'sum(\'newPchsAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column63',displayMode:'label',expression:'sum(\'newVat\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column62',displayMode:'label',expression:'sum(\'newTotAmt\')',dataType:'number',displayFormat:'#,##0',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'info-list txt-red',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기존단가와 변경단가가 다른 경우 자동체크되며, 같은 경우 0으로 조회됩니다.',style:'',tagname:'p'}}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})