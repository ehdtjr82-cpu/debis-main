/*amd /ui/ds/sd/odrmgnt/odrprewrk/sd_401_02_02b.xml 43871 1d7f00c23d75dad975ea2825155ed5d6eacb86935f16e0b3aa2278f824a4d7c4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieve',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_retrieve_onrowpositionchange','ev:oncelldatachange':'scwin.ds_retrieve_oncelldatachange','ev:onbeforecelldatachange':'scwin.ds_retrieve_onbeforecelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomLineCd',name:'당사LINE코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'라인명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shpCoMark',name:'선사부호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'msnTo',name:'MFCS수신예정',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcCd',name:'당사하선장소코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'bondZoneCd',name:'보세구역코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'reRcvYn',name:'재수신여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sndClsCd',name:'발송구분',dataType:'String'}},{T:1,N:'w2:column',A:{id:'rcvDt',name:'DTM(148):수신일시',dataType:'String'}},{T:1,N:'w2:column',A:{id:'rcvId',name:'수신자ID',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mfReplyCd',name:'적하목록응답코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ktklClsCd',name:'KTNETKLNET구분',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'String'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'rcvDtFrom',name:'수신시작일',dataType:'String',defaultValue:'2020/10/15'}},{T:1,N:'w2:key',A:{id:'rcvDtTo',name:'수신종료일',dataType:'String',defaultValue:'2025/10/15'}},{T:1,N:'w2:key',A:{id:'mrn',name:'MRN',dataType:'String'}},{T:1,N:'w2:key',A:{id:'mcomLineCd',name:'당사LINE코드',dataType:'String'}},{T:1,N:'w2:key',A:{id:'msn',name:'MSN',dataType:'number'}},{T:1,N:'w2:key',A:{id:'mcomDsmbrkPlcCd',name:'당사하선장소코드',dataType:'String'}},{T:1,N:'w2:key',A:{id:'rcvId',name:'수신자ID',dataType:'String'}},{T:1,N:'w2:key',A:{id:'procClsCd',name:'처리구분코드',dataType:'String'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_batchCndt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'batch_run',name:'batch_run',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvId',name:'rcvId',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_mrnCount',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mrnCount',name:'MRN 다운로드 횟수',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_klnetLine',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_managerYn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col2',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrprewrk.RetrieveManifestReceiveCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_retrieve","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieve","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/ds.sd.odrmgnt.odrprewrk.SaveManifestReceiveCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',id:'sbm_save',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'',replace:'',target:'',style:''}},{T:1,N:'xf:submission',A:{id:'sbm_regist',action:'/ds.sd.odrmgnt.odrprewrk.RegistMasterBillOfLadingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchCond","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_klnetLine',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_klnetLine","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_managerYn',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_managerYn","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_autoCncl',action:'/ds.sd.odrmgnt.odrprewrk.ExcuteAutoCnclManifestReceiveProcCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_batchCndt","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_mrnCount',action:'',method:'post',mediatype:'application/json',ref:'',target:'{"id":"ds_mrnCount","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 적하목록 수신EDI 등록
// 세션정보 가져오기
scwin.loginId = $c.data.getMemInfo($p, "userId");
// 현재일
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.sysDate = scwin.strCurDate;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  if (scwin.loginId != "281776") {
    btn_cnclBatch.setStyle("display", "none");
  }

  // 적하목록 수신인 통제구분
  scwin.f_RetrieveManagerYn();
  scwin.f_RetrieveKlnetLine();
};

//-------------------------------------------------------------------------
// function name : f_defaultValue
// function desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  // 수신기간 기본 날짜 설정
  udc_fromToCalendar1.setInitDate(scwin.sysDate, scwin.sysDate);

  //전체조건 추가
  lc_ediProcClsCd.setValue("");
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableKey($p);
  ed_msn.setValue("");
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.f_defaultValue();
};

// 적하목록 통제해제수신인
scwin.f_RetrieveManagerYn = function () {
  sbm_managerYn.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC" + "&queryId=retrieveCommCdInfo&param1=&param2=" + scwin.loginId + "&param3=SD307";
  $c.sbm.execute($p, sbm_managerYn);
};

//공통코드 조회
scwin.f_RetrieveKlnetLine = function () {
  // 공통코드 적용()
  const codeOptions = [{
    grpCd: "SD103",
    compID: "lc_ediProcClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  sbm_klnetLine.action = "/cm.zz.RetrieveCodeCMD.do?grpCd=OP294";
  $c.sbm.execute($p, sbm_klnetLine);
};

//KLNET 적하목록 라인 목록 체크
scwin.f_KlnetLineCheck = function (line) {
  if (ds_klnetLine.getRowCount() != 0) {
    for (i = 0; i <= ds_klnetLine.getRowCount(); i++) {
      rowData = ds_klnetLine.getRowJSON(i);
      if (rowData["cdNm"] == line) {
        return true;
      }
    }
  }
  return false;
};

//-------------------------------------------------------------------------
// 조회 - 적하목록 수신 EDI 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function (e) {
  // 조회 결과 초기화
  ds_retrieve.removeAll();
  tbx_totalRows.setValue(0);

  //dataMap setting
  dma_condition.set("mcomLineCd", ed_lineCd.getValue());
  dma_condition.set("mcomDsmbrkPlcCd", ed_mcomDsmbrkPlcCd.getValue());
  dma_condition.set("rcvId", ed_rcvId.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_main);
  scwin.f_defaultValue();
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.excelDw_gr_retrieve = async function () {
  let options = {
    fileName: "적하목록수신.xlsx",
    sheetName: "적하목록수신"
  };
  let grdObj = gr_retrieve;
  let infoArr = {};
  if (ds_retrieve.getTotalRow() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
    }
  }
};

// 강제종료
scwin.f_autoCnclBatch = function (e) {
  if (confirm("다운로드 지연 건 취소 배치를 돌리겠습니까?") == true) {
    ds_batchCndt.removeAll();
    ds_batchCndt.insertRow(0);
    ds_batchCndt.setCellData(1, "batch_run", "Y");
    ds_batchCndt.setCellData(1, "rcvId", scwin.loginId);
    $c.sbm.execute($p, sbm_autoCncl);
  }
};

//22.08.11 : 동일한 MRN으로 5회 이상 다운로드시 알림팝업
scwin.f_chkMrnCount = function () {
  for (i = 0; i <= ds_retrieve.getTotalRow(); i++) {
    if (ds_retrieve.getRowStatusValue(i) == 2) {
      // 신규 생성된 Row
      sbm_mrnCount.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ManifestEBC&queryId=retrieveManifestReceiveCount&param1=" + ds_retrieve.getCellData(i, "mrn");
      $c.sbm.execute($p, sbm_mrnCount);
      if (ds_mrnCount.getCellData(0, "rcvCnt") >= 5) {
        alert(ds_retrieve.getCellData(i, "mrn") + " : 동일한 MRN을 5회 이상 수신하였습니다.");
        break;
      }
    }
  }
};

// 저장
scwin.f_Save = function (e) {
  ds_retrieve.getModifiedIndex();
  if (ds_retrieve.getModifiedIndex().length <= 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["적하목록 수신"]);
    return;
  }
  let managerYn = $c.gus.cfIsNull($p, ds_managerYn.getCellData(0, "col2"));
  for (i = 0; i <= ds_retrieve.getTotalRow(); i++) {
    // 초기상태:0, 갱신:1, 삽입:2, 삭제:3, 삽입 후 삭제:4
    if (ds_retrieve.getRowStatusValue(i) == 2) {
      // 관리자 권한이 아닐 경우에만 MSN 입력 여부를 검증한다.	
      if (managerYn) {
        // 선사/라인 코드(mcomLineCd)가 없는 적하목록 건만 대상
        // (특정 선사가 지정된 건은 MSN 필수 대상에서 제외)
        if (ds_retrieve.getCellData(i, "mcomLineCd") == "") {
          // MSN FROM(msn)과 MSN TO(msnTo)가 모두 미입력(0) 상태인지 확인
          if (ds_retrieve.getCellData(i, "msnTo") == 0 && ds_retrieve.getCellData(i, "msn") == 0) {
            alert(i + 1 + "번째 적하목록의 MSN FROM을 입력하세요.");
            return;
          }
        }
      }
      if (ds_retrieve.getCellData(i, "wrkPlNm") == "") {
        ds_retrieve.setCellData(i, "mcomDsmbrkPlcCd", "");
        ds_retrieve.setCellData(i, "bondZoneCd", "");
      }
      if (ds_retrieve.getCellData(i, "mcomLineCd") == "") {
        ds_retrieve.setCellData(i, "lineNm", "");
        ds_retrieve.setCellData(i, "shpCoMark", "");
      }
      if (ds_retrieve.getCellData(i, "ktklClsCd") == "") {
        alert(i + 1 + "번째 수신업체 구분을 입력하세요.");
        gr_retrieve.setFocusedCell(i, "ktklClsCd", true);
        return;
      }
      if (ds_retrieve.getCellData(i, "mrn") == "") {
        alert(i + 1 + "번째 MRN을 입력하세요.");
        gr_retrieve.setFocusedCell(i, "mrn", true);
        return;
      } else {
        let subMrn = ds_retrieve.getCellData(i, "mrn");
        subMrn = subMrn.substring(0, 2);
        let tempMrn = "20" + subMrn;
        let sysMrn = scwin.sysDate.substring(0, 4);
        if (parseInt(sysMrn) - parseInt(tempMrn) >= 10) {
          alert("MRN 번호는 최근 10년간 데이타만 수신 가능합니다.");
          gr_retrieve.setFocusedCell(i, "mrn", true);
          return;
        }
      }
      if (ds_retrieve.getCellData(i, "msnTo") != 0) {
        if (ds_retrieve.getCellData(i, "msn") == 0) {
          alert(i + 1 + "번째 적하목록의 MSN FROM을 입력하세요.");
          return;
        }
        if (parseFloat(ds_retrieve.getCellData(i, "msnTo")) <= parseFloat(ds_retrieve.getCellData(i, "msn"))) {
          alert(i + 1 + "번째 적하목록의 MSN TO가 MSN FROM보다 작습니다.\n다시 입력해 주십시요.");
          return;
        }
      }
      if (ds_retrieve.getCellData(i, "msn") != 0) {
        if (ds_retrieve.getCellData(i, "mcomDsmbrkPlcCd") != "") {
          alert(i + 1 + "번째 적하목록의 MSN과 하선장소는 둘다입력할수 없습니다.");
          return;
        }
      }
      if (ds_retrieve.getCellData(i, "mcomDsmbrkPlcCd") != "") {
        if (ds_retrieve.getCellData(i, "msn") != 0) {
          alert(i + 1 + "번째 적하목록의 MSN과 하선장소는 둘다입력할수 없습니다.");
          return;
        }
      }
      if (ds_retrieve.getCellData(i, "shpCoMark") == "") {
        if (ds_retrieve.getCellData(i, "mcomLineCd") != "") {
          alert(i + 1 + "해당 라인에 선사 부호가 등록되어 있지 않습니다2. 해당 라인만 download 할수없습니다.");
          ds_retrieve.setRowPosition(i);
          gr_retrieve.setFocusedCell(i, "mcomLineCd", true);
          return;
        }
      }
    }
  } // end for

  scwin.f_chkMrnCount();
  if (confirm("저장하시겠습니까?") == true) {
    // 변경된 행 인덱스 (삽입:2, 수정:1, 삭제:3 포함)
    const modifiedIdx = ds_retrieve.getModifiedIndex();
    const modifiedRows = [];
    for (let i = 0; i < modifiedIdx.length; i++) {
      modifiedRows.push(ds_retrieve.getRowJSON(modifiedIdx[i]));
    }
    sbm_save.setRequestData({
      "IN_DS1": modifiedRows
    });
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_retrieve_submitdone = function (e) {
  // 그리드 조회건수
  let rowCnt = ds_retrieve.getRowCount();
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  } else {
    gr_retrieve.setFocusedCell(0, 0);
    tbx_totalRows.setValue(rowCnt);
  }
};

// 행삭제
scwin.f_delRow = function (e) {
  let curRow = ds_retrieve.getRowPosition();
  // 선택된 행이 없을 때
  if (curRow < 0 || curRow == null) {
    $c.gus.cfAlertMsg($p, "삭제할수 없습니다.");
    return;
  }

  // 행의 상태 숫자값 (초기상태:0, 갱신:1, 삽입:2, 삭제:3, 삽입 후 삭제:4)
  if (ds_retrieve.getRowStatusValue(curRow) == 2) {
    ds_retrieve.removeRow(curRow);
  } else {
    $c.gus.cfAlertMsg($p, "삭제할수 없습니다.");
  }
};

// 행추가
scwin.f_AddRow = function (e) {
  // 1. DataList에 행 추가
  ds_retrieve.insertRow(ds_retrieve.getTotalRow() + 1);

  // 2. 추가된 행 인덱스 (마지막 행)
  var newRowIndex = ds_retrieve.getRowCount() - 1;
  // 3. 그리드 해당 행으로 포커스 이동
  gr_retrieve.setFocusedCell(newRowIndex, "mrn");

  // msn, msnTo 기본값 0 셋팅 (defaultValue 설정 -> edit 시 숫자 사라짐)
  ds_retrieve.setCellData(newRowIndex, "msn", "0");
  ds_retrieve.setCellData(newRowIndex, "msnTo", "0");
};

// 취소
scwin.f_Cancel = function (e) {
  //ds_retrieve.undoAll()

  let row = ds_retrieve.getRowPosition(); // 클릭된 행 인덱스

  if (ds_retrieve.getRowStatusValue(row) == 2) {
    // 신규 생성 시에는 row 삭제
    ds_retrieve.removeRow(row);
  } else {
    ds_retrieve.undoRow(row);
  }
};
scwin.sbm_save_submitdone = function (e) {
  scwin.f_Retrieve();
};

// 행의 인덱스가 변경된 경우 (행추가/행삭제 등) - 동작 확인 필요
scwin.ds_retrieve_onrowpositionchange = function (info) {
  // 유효한 행 선택인지 체크
  if (info > 0 && ds_retrieve.getRowCount() >= info) {
    let ediProcClsCd = ds_retrieve.getCellData(row, "ediProcClsCd");
    switch (ediProcClsCd) {
      case "":
        $c.gus.cfEnableBtnOnly($p, [bDelete]);
        break;
      case "01":
      case "02":
        $c.gus.cfDisableBtnOnly($p, [bDelete]); // 프로젝트 공통함수 그대로 사용
        break;
      case "03":
        $c.gus.cfEnableBtnOnly($p, [bDelete]);
        break;
      default:
        break;
    }
  }
};

/* 당사 하선장소 - 포커스 이탈 시 */
scwin.udc_comCodeMcom_onblurCodeEvent = function (e) {
  var str = "";
  str = ed_mcomDsmbrkPlcCd.getValue().replace(/^\s*/, '');
  if (str != null && str != "") {
    scwin.f_openCommonPopUp(1, str, '', 'T');
  } else {
    ed_mcomDsmbrkPlcNm.setValue("");
    ed_mcomDsmbrkPlcCd.setValue(str);
  }
};

/* 수신인 EMEdit Focus 이동시 */
scwin.udc_comCodeRcv_onblurCodeEvent = function (e) {
  var strRecUser = "";
  strRecUser = ed_rcvId.getValue().replace(/^\s*/, '');
  if (strRecUser != null && strRecUser != "") {
    scwin.f_openCommonPopUp(2, strRecUser, '', 'T');
  } else {
    ed_rcvIdNm.setValue("");
    ed_rcvId.setValue(strRecUser);
  }
};

/* LINE EMEdit Focus 이동시 */
scwin.udc_comCodeLine_onblurCodeEvent = function (e) {
  var strLineCd = "";
  strLineCd = ed_lineCd.getValue().replace(/^\s*/, '');
  if (strLineCd != null && strLineCd != "") {
    scwin.f_openCommonPopUp(3, strLineCd, '', 'T');
  } else {
    ed_lineNm.setValue("");
    ed_lineCd.setValue(strLineCd);
  }
};

// LINE, 하선장소 그리드 팝업
scwin.gr_retrieveImageClickFunc = function (rowIndex, colId, nowValue) {
  var pName = ds_retrieve.getCellData(rowIndex, colId);
  pName = nowValue.replace(/^\s*/, '');
  switch (colId) {
    case "wrkPlNm":
      scwin.f_openCommPopUpGrid(1, rowIndex, '', pName, 'T', 'T');
      break;
    case "mcomLineCd":
      scwin.f_openCommPopUpGrid(2, rowIndex, pName, '', 'T', 'T');
      break;
    default:
      break;
  }
};

// Grid <LINE, 하선장소> 셀 데이터 변경 시 팝업 호출
// 그리드 내부 LINE, 하선장소 포커스 이탈 시 팝업 호출
scwin.gr_retrieve_oneditend = function (rowIndex, columnIndex, value) {
  if (value === "") return;
  let colID = gr_retrieve.getColumnID(columnIndex);
  let newVal = value;
  let oldVal = ds_retrieve.getOriginalCellData(rowIndex, colID); // 변경 전 값

  // -----------------------------------------------
  // msn과 wrkPlNm 동시 입력 체크
  // -----------------------------------------------
  /*
  var msnVal = ds_retrieve.getCellData(rowIndex, "msn");
  var wrkPlNm = ds_retrieve.getCellData(rowIndex, "wrkPlNm");
   // AS-IS 코드에서도 있는데 실제로 이 부분이 조건에 걸리지 않아서 주석.
   if (msnVal != "" && wrkPlNm != "") {
      $c.gus.cfAlertMsg("msn과 하선장소 둘 중에 하나만 입력가능합니다.");
      ds_retrieve.setCellData(rowIndex, "wrkPlNm", "");
      gr_retrieve.setFocusedCell(rowIndex, "wrkPlNm");
      return;
  }
  */

  var pName = value.replace(/^\s*/, '');
  switch (colID) {
    case "mrn":
      // 인덱스 2번 위치부터 4글자 추출
      var line = newVal.substr(2, 4);
      if (scwin.f_KlnetLineCheck(line) || line == "DOSC") {
        ds_retrieve.setCellData(rowIndex, "ktklClsCd", "L");
      } else {
        ds_retrieve.setCellData(rowIndex, "ktklClsCd", "T");
      }
      setTimeout(function () {
        ds_retrieve.setCellData(rowIndex, "mrn", newVal.toUpperCase());
      }, 0);
      break;
    case "wrkPlNm":
      scwin.f_openCommPopUpGrid(1, rowIndex, '', pName, 'T', 'T');
      setTimeout(function () {
        // 그리드 공통 팝업 호출 전에 컬럼 값 지우기
        ds_retrieve.setCellData(rowIndex, "mcomDsmbrkPlcCd", ""); //하선장소코드
        ds_retrieve.setCellData(rowIndex, "wrkPlNm", ""); //하선장소
        ds_retrieve.setCellData(rowIndex, "bondZoneCd", ""); //보세구분코드	
      }, 0);
      break;
    case "mcomLineCd":
      scwin.f_openCommPopUpGrid(2, rowIndex, pName, '', 'T', 'T');
      setTimeout(function () {
        // 그리드 공통 팝업 호출 전에 컬럼 값 지우기
        ds_retrieve.setCellData(rowIndex, "mcomLineCd", ""); //LINE코드
        ds_retrieve.setCellData(rowIndex, "shpCoMark", ""); //선사부호코드
      }, 0);
      break;
    default:
      break;
  }
};

// cell 수정 가능 여부 체크
// <script language=JavaScript for=gr_retrieve event=OnExit(row,colid,olddata)>
scwin.gr_retrieve_oncellclick = function (rowIndex, columnIndex, columnId) {
  var rowStatus = ds_retrieve.getRowStatus(rowIndex); // "R: 초기상태", "C: 신규생성"

  var editCols = ["mrn", "mcomLineCd", "msn", "msnTo", "wrkPlNm", "reRcvYn", "ktklClsCd"];
  if (rowStatus === "C") {
    // 신규행 → 편집 가능
    for (var i = 0; i < editCols.length; i++) {
      gr_retrieve.setCellReadOnly(rowIndex, editCols[i], false);
    }
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose) {
  // 선언부
  var pCode = "";
  var pName = "";
  switch (disGubun) {
    // 하선장소코드팝업
    case 1:
      // 하선장소코드팝업	- 물류점소 - 보세구분코드 	
      pCode = ed_mcomDsmbrkPlcCd.getValue();
      pName = ed_mcomDsmbrkPlcNm.getValue();
      udc_comCodeMcom.setSelectId('retrieveBondZone'); // XML상의 SELECT ID	
      udc_comCodeMcom.cfCommonPopUp(scwin.udc_comCodeMcom_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , "04" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null, null, "하선장소,하선장코드,하선장명");
      break;
    case 2:
      // 수신인 정보 팝업	- 사원
      pCode = ed_rcvId.getValue().replace(/\s*$/, ''); // 수신인 ID
      pName = ed_rcvIdNm.getValue(); // 수신인

      udc_comCodeRcv.setSelectId('retrieveEmpInfo'); // XML상의 SELECT ID	
      udc_comCodeRcv.cfCommonPopUp(scwin.udc_comCodeRcv_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null, null);
      break;
    case 3:
      pCode = ed_lineCd.getValue().replace(/\s*$/, ''); // LINE 코드
      pName = ed_lineNm.getValue(); // LINE명

      udc_comCodeLine.setSelectId('retrieveLineInfo');
      udc_comCodeLine.cfCommonPopUp(scwin.udc_comCodeLine_callBackFunc, pCode, pName, pClose, '5', null, '150,170', null, null, '440', '500', null, null, null, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = async function (disGubun, row, pCode, pName, pClose, pAllSearch, callback) {
  let rowIdx = ds_retrieve.getRowPosition();
  let mComName = "wrkPlNm";
  let lineName = "mcomLineCd";
  switch (disGubun) {
    // 하선장소코드팝업
    case 1:
      // 하선장소코드팝업	- 물류점소 - 보세구분코드 	
      udc_comCodeGrid.setSelectId('retrieveBondZone'); // XML상의 SELECT ID	
      await udc_comCodeGrid.cfCommonPopUp(udc_comCodeGrid_mcom_callbackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , "04" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null, pAllSearch, "하선장소,하선장코드,하선장명");
      break;
    case 2:
      // line코드 팝업
      udc_comCodeGrid.setSelectId('retrieveLineInfoOrigin'); // XML상의 SELECT ID	
      await udc_comCodeGrid.cfCommonPopUp(udc_comCodeGrid_line_callbackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , pAllSearch // 윈도우 위치 X좌표
      );
      break;
    default:
      break;
  }

  // 콜백 실행 -> 플래그 OFF
  if (typeof callback === "function") {
    callback();
  }
};

/* udc_comCOdeGrid 공통팝업 콜백 */
// 하선장소 코드팝업
udc_comCodeGrid_mcom_callbackFunc = function (rtnList) {
  let row = ds_retrieve.getRowPosition();
  if (rtnList != null) {
    ds_retrieve.setCellData(row, "mcomDsmbrkPlcCd", rtnList[7]); //하선장소코드
    ds_retrieve.setCellData(row, "wrkPlNm", rtnList[1]); //하선장소
    ds_retrieve.setCellData(row, "bondZoneCd", rtnList[0]); //보세구분코드
  } else {
    ds_retrieve.setCellData(row, "mcomDsmbrkPlcCd", ""); //하선장소코드
    ds_retrieve.setCellData(row, "wrkPlNm", ""); //하선장소
    ds_retrieve.setCellData(row, "bondZoneCd", ""); //보세구분코드				
  }
};

// LINE 코드 팝업
udc_comCodeGrid_line_callbackFunc = function (rtnList) {
  let row = ds_retrieve.getRowPosition();
  if (rtnList != null) {
    ds_retrieve.setCellData(row, "mcomLineCd", rtnList[0]); //LINE코드
    if (rtnList[3] != "") {
      $c.gus.cfAlertMsg($p, "해당 라인에 선사 부호가 등록되어 있습니다. 해당 라인만 download 할수있습니다.");
      ds_retrieve.setCellData(row, "shpCoMark", rtnList[3]); //선사부호코드 
    } else {
      $c.gus.cfAlertMsg($p, "해당 라인에 선사 부호가 등록되어 있지 않습니다1. 해당 라인만 download 할수없습니다.");
      ds_retrieve.setCellData(row, "shpCoMark", rtnList[3]); //선사부호코드
    }
  } else {
    ds_retrieve.setCellData(row, "mcomLineCd", ""); //LINE코드
    ds_retrieve.setCellData(row, "shpCoMark", ""); //선사부호코드
  }
};

/* udc_ 공통팝업 콜백 */
// 하선장소 코드팝업 콜백
scwin.udc_comCodeMcom_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    //return value Assign
    ed_mcomDsmbrkPlcCd.setValue(rtnList[7]); //하선장소코드
    ed_mcomDsmbrkPlcNm.setValue(rtnList[1]); //하선장소

    return true;
  } else {
    ed_mcomDsmbrkPlcCd.setValue(""); //하선장소코드
    ed_mcomDsmbrkPlcNm.setValue(""); //하선장소
  }
};

// 수신인 정보 팝업 - 사원 콜백
scwin.udc_comCodeRcv_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    ed_rcvId.setValue(rtnList[0]); // 수신인 ID
    ed_rcvIdNm.setValue(rtnList[1]); // 수신인
    ed_rcvIdNm.options.hidVal = rtnList[1]; // 수신인 hidden값
  } else {
    ed_rcvId.setValue("");
    ed_rcvIdNm.setValue("");
    ed_rcvIdNm.setAttribute("hidVal", "");
  }
};

// LINE 코드 팝업
scwin.udc_comCodeLine_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd, ed_lineNm);
  }
};

// 당사 하선장소
scwin.udc_comCodeMcom_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_mcomDsmbrkPlcCd.getValue(), ed_mcomDsmbrkPlcNm.getValue(), 'F');
};
scwin.udc_comCodeRcv_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_rcvId.getValue(), ed_rcvIdNm.getValue(), 'F');
};
scwin.udc_comCodeLine_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_lineCd.getValue(), ed_lineNm.getValue(), 'F');
};

// MRN, MSN 입력 -> 대문자 변환, grid mrn
scwin.capitalMask = function (value) {
  var filteredVal = value.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, ''); // 한글만 제거
  return filteredVal.toUpperCase();
};

// 수신업체 구분 value 포맷 변경 
scwin.sbFormat = function (value) {
  if (value.trim() === "선택" || value === ":") {
    return ":";
  } else {
    return value;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_main',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'\\',id:'',label:'수신기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar1',refDataMap:'dma_condition',refEdDt:'rcvDtTo',refStDt:'rcvDtFrom',style:'',objType:'Data',edFromId:'ed_rcvDtFrom',edToId:'ed_rcvDtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_lineCd',objType:'data',maxlengthCode:'6',UpperFlagCode:'1',nameId:'ed_lineNm',id:'udc_comCodeLine',btnId:'btn_line','ev:onblurCodeEvent':'scwin.udc_comCodeLine_onblurCodeEvent','ev:onclickEvent':'scwin.udc_comCodeLine_onclickEvent',allowCharCode:'a-zA-z0-9',objTypeName:'key',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MRN ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',placeholder:'',style:'width:150px;',objType:'Data',maxlength:'11',allowChar:'a-zA-Z0-9',ref:'data:dma_condition.mrn',displayFormatter:'scwin.capitalMask',applyFormat:'all'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MSN ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_msn',placeholder:'',style:'width: 100px;',objType:'Data',maxlength:'4',allowChar:'a-zA-Z0-9',ref:'data:dma_condition.msn',displayFormatter:'scwin.capitalMask',applyFormat:'all'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당사 하선장소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_mcomDsmbrkPlcCd',validExp:'작업장 코드:yes:',maxlengthCode:'6',UpperFlagCode:'1',nameId:'ed_mcomDsmbrkPlcNm',id:'udc_comCodeMcom',objTypeName:'key',btnId:'btn_wrkPlCd','ev:onblurCodeEvent':'scwin.udc_comCodeMcom_onblurCodeEvent','ev:onclickEvent':'scwin.udc_comCodeMcom_onclickEvent',allowCharCode:'a-zA-z0-9',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수신자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_rcvId',objTypeCode:'Data',maxlengthCode:'8',UpperFlagCode:'1',objTypeName:'key',nameId:'ed_rcvIdNm',id:'udc_comCodeRcv','ev:onblurCodeEvent':'scwin.udc_comCodeRcv_onblurCodeEvent','ev:onclickEvent':'scwin.udc_comCodeRcv_onclickEvent',allowCharCode:'a-zA-Z0-9',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'처리구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_ediProcClsCd',search:'start',style:'width:150px;',submenuSize:'auto',objType:'data',ref:'data:dma_condition.procClsCd',chooseOption:'true',chooseOptionLabel:'전체'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'적하목록수신 ',class:'tit'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_retrieve',grdDownOpts:'{"fileName" : "적하목록수신.xlsx" ,"type" : "4+8+16" }',id:'udc_topGrd',gridDownFn:'excelDw_gr_retrieve',gridDownYn:'Y',btnPlusYn:'Y',gridUpYn:'N',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_retrieve',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_retrieve',visibleRowNum:'14',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true','ev:oncellclick':'scwin.gr_retrieve_oncellclick','ev:oneditend':'scwin.gr_retrieve_oneditend'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{colSpan:'7',width:'490',inputType:'text',id:'column31',value:'적하목록 수신기준',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'250',inputType:'text',id:'column24',value:'처리구분',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column23',value:'수신일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'수신자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column32',value:'본선관리번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',displayMode:'label',rowSpan:'2',value:'선사부호코드'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label',rowSpan:'2',value:'하선장소코드'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',displayMode:'label',rowSpan:'2',value:'보세구역코드'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column12',value:'MRN',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column11',value:'수신업체 구분',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column10',value:'LINE',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column9',value:'MSN FROM',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'MSN TO',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'하선장소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'재수신여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'mrn',blockSelect:'false',displayMode:'label',displayFormatter:'scwin.capitalMask',applyFormat:'all',maxLength:'11'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'autoComplete',id:'ktklClsCd',blockSelect:'false',displayMode:'label',allOption:'',ref:'',chooseOption:'',chooseOptionLabel:'선택',displayFormatter:'scwin.sbFormat',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'선택'}]},{T:1,N:'w2:value',E:[{T:4,cdata:':'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'KTNET'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'T'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'KLNET'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'L'}]}]}]}]},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'textImage',id:'mcomLineCd',blockSelect:'false',displayMode:'label',imageClickFunction:'scwin.gr_retrieveImageClickFunc',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'msn',blockSelect:'false',displayMode:'label',dataType:'number',defaultValue:'0',maxLength:'4',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'msnTo',displayMode:'label',defaultValue:'0',maxLength:'4',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'wrkPlNm',displayMode:'label',imageClickFunction:'scwin.gr_retrieveImageClickFunc'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'reRcvYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'sndClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'rcvDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rcvId',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cvsslMgntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'shpCoMark',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcomDsmbrkPlcCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bondZoneCd',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',cancelFunction:'f_Cancel',rowAddFunction:'f_AddRow',rowDelFunction:'f_delRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:textbox',A:{class:'info-txt txt-red',id:'',label:'적하목록을 MRN과 MSN(from~to) 구간으로 다운 받으실 수 있습니다.',style:'',tagname:'p'}},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_cnclBatch',label:'강제종료',objType:'bDelete',style:'',type:'button','ev:onclick':'scwin.f_autoCnclBatch'},E:[{T:1,N:'xf:label',E:[{T:3,text:'강제종료'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',objType:'bDelete','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'display:none;',id:'udc_comCodeGrid',objTypeCode:'data'}}]}]}]})