/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_301_02_33b.xml 52142 f35901f31f47486b0958e4eec2655044e59bc9c91bd070a995c1d1098217d94b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selDate',name:'선택일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromDt',name:'FROM일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDt',name:'TO 일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'forceYn',name:'강제생성여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfClsCd',name:'SELF_구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_block',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_block'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라미터1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_op316Info',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'key1',name:'시스템코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key2',name:'쿼리ID'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key3',name:'파라미터1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key4',name:'파라미터2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key5',name:'파라미터3'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key6',name:'파라미터4'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key7',name:'파라미터5'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key8',name:'파라미터6'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_op316Info',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'컬럼1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',length:'1',defaultValue:''}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text',length:'7',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crryinoutIntendNo',name:'반출입예정번호',dataType:'text',length:'13',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crryinoutClsCd',name:'반출입구분코드',dataType:'text',length:'1',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crryinoutIntendDt',name:'반출입예정일자',dataType:'text',length:'8',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crryinoutIntendHh',name:'반출입예정시간',dataType:'text',length:'4',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text',length:'1',defaultValue:''}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text',length:'12',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text',length:'11',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text',length:'2',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text',length:'2',defaultValue:''}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULL/EMPTY구분코드',dataType:'text',length:'1',defaultValue:''}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'Integer',length:'18',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',length:'12',defaultValue:''}},{T:1,N:'w2:column',A:{id:'vehclIdCardNo',name:'차량ID번호',dataType:'text',length:'8',defaultValue:''}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text',length:'5',defaultValue:''}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',length:'13',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'Integer',length:'4',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'작업경로순번',dataType:'Integer',length:'3',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'Integer',length:'3',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'selfTransCoClntNo',name:'자가운송사거래처번호',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'cnclDtm',name:'취소일시',dataType:'text',length:'14'}},{T:1,N:'w2:column',A:{id:'cnclPicId',name:'취소담당자ID',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'wrkMemo',name:'작업메모',dataType:'text',length:'60'}},{T:1,N:'w2:column',A:{id:'blckCd',name:'BLOCK코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'forceYn',name:'강제생성여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'onoffNo',name:'상하차번호',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'wrkStsCd',name:'작업상태코드(R:대기,F:완료,C:취소)',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'SELF_구분코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'봉인번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'drvTelNo',name:'기사전화번호',dataType:'text',length:'20'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveMcomOnOffInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.cywrkrslts.SaveMcomOnOffInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_result","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_block',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_block',target:'data:json,{"id":"ds_block","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_op316Info',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : CY상/하차 차량확인
 * 메뉴경로 : 자가운송/CY현황관리/CY상/하차 차량확인
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ds/op/wrkrslts/cywrkrslts/op_301_02_33b.jsp
 * 작 성 자 : 유청아
 * 작 업 일 : 2026-03-09
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항

 * 수정이력 :
 *    - 2026-03-09      유청아    최초작성
 *    - 2026-04-22      이진우    T-2640 결함 조치
 */
// T-5735 최미현 차장
// 1. 조회시 작업일자 기간 체크 로직 추가
// 2. 조회조건 차량No 숫자입력만 가능하도록 수정요청

// 초기값 설정 - 날짜 (현재날짜)
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재년월일을 구한다.

//세션정보 가져오기
scwin.userClsCd = $c.data.getMemInfo($p, "userClsCd");
scwin.userLobranCd = $c.data.getMemInfo($p, "lobranCd");
scwin.sysAdminYn = $c.data.getMemInfo($p, "sysAdminYn");

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  lc_selDate.setSelectedIndex(0);
  const codeOptions = [{
    grpCd: "OP317",
    compID: "lc_wrkPlCd"
  } //작업장
  ];
  $c.data.setCommonCode($p, codeOptions);
  if (scwin.sysAdminYn == 1) {
    $c.gus.cfEnableObj($p, lc_wrkPlCd, true);
  } else {
    $c.gus.cfEnableObj($p, lc_wrkPlCd, false);
  }

  //scwin.f_getCntrInfo(); //사용되지 않음

  $c.gus.cfEnableObj($p, lc_selDate, false);
  scwin.f_SetGridColumnMaxLength(gr_result);
  scwin.f_SetGridColumnMaxLength(gr_result2);
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    scwin.f_settingDate();

    //ds_search.set("fromDt", "20250911");
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  //로그인부서로 CY세팅
  if (scwin.userLobranCd == "4AA") {
    lc_wrkPlCd.setSelectedIndex(0);
  } else if (scwin.userLobranCd == "4BB") {
    lc_wrkPlCd.setSelectedIndex(1);
  } else if (scwin.userLobranCd == "5AA") {
    lc_wrkPlCd.setSelectedIndex(2);
  } else {
    lc_wrkPlCd.setSelectedIndex(1);
  }
  scwin.f_getBlockInfo();
  scwin.f_bindHeader();
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
// 날짜 SET
//-------------------------------------------------------------------------
scwin.f_settingDate = function () {
  ed_onReqFromDt.setValue(scwin.strCurDate);
  ed_onReqToDt.setValue(scwin.strCurDate);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [tbl_search]);
  if (!ret) {
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_result.getModifiedIndex().length == 0) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  if (!scwin.f_checkValid()) {
    return;
  }
  if (ds_result.getCellData(ds_result.getRowPosition(), "wrkStsCd") == "F") {
    $c.win.alert($p, "상하차작업 종료건은 수정/삭제할 수 없습니다.");
    ds_result.undoRow(ds_result.getRowPosition());
    return;
  }
  let ret = await $c.win.confirm($p, "저장을 진행 하시겠습니까?");
  if (ret) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = function () {
  let row = ds_result.getRowPosition();
  if (ds_result.getCellData(ds_result.getRowPosition(), "onoffNo") == "") {
    $c.win.alert($p, "강제등록건이 아니어서 삭제 할 수 없습니다");

    //신규ROW는 삭제, 기존ROW는 상태값만 삭제
    if (ds_result.getRowStatus(ds_result.getRowPosition()) == "C") {
      ds_result.removeRow(ds_result.getRowPosition());
      if (ds_result.getRowCount() > 0) {
        if (lc_wrkPlCd.getValue() == "5C08") {
          gr_result2.setFocusedCell(row, "impExpClsCd", false);
        } else {
          gr_result.setFocusedCell(row, "impExpClsCd", false);
        }
      }
    } else {
      ds_result.undoRow(ds_result.getRowPosition());
    }
    return;
  }

  //신규ROW는 삭제, 기존ROW는 상태값만 삭제
  if (ds_result.getRowStatus(ds_result.getRowPosition()) == "C") {
    ds_result.removeRow(ds_result.getRowPosition());
  } else {
    ds_result.deleteRow(ds_result.getRowPosition());
    if (lc_wrkPlCd.getValue() == "5C08") {
      gr_result2.setFocusedCell(row, "impExpClsCd", false);
    } else {
      gr_result.setFocusedCell(row, "impExpClsCd", false);
    }
  }
};

//-------------------------------------------------------------------------
// Valid 체크
//-------------------------------------------------------------------------
scwin.f_checkValid = function () {
  var obj = ds_result;
  for (var dsRow = 0; dsRow < obj.getRowCount(); dsRow++) {
    if (obj.getRowStatus(dsRow) == "C" //1:입력 
    || obj.getRowStatus(dsRow) == "U" //3:수정
    ) {
      if (obj.getCellData(dsRow, "impExpClsCd") == "") {
        $c.win.alert($p, dsRow + 1 + "행에 수출/입 여부를 선택하셔야 합니다.");
        return false;
      }
      if (obj.getCellData(dsRow, "crryinoutClsCd") == "") {
        $c.win.alert($p, dsRow + 1 + "행에 구분을 선택하셔야 합니다.");
        return false;
      }

      //광주CY는 필수입력 확인 안하는 항목.
      //2015.09.11 hurrah
      if (lc_wrkPlCd.getValue() != "5C08") {
        if (obj.getCellData(dsRow, "cntrSizCd") == "") {
          $c.win.alert($p, dsRow + 1 + "행에 컨테이너 SIZE 값을 입력하셔야 합니다.");
          return false;
        }
        if (obj.getCellData(dsRow, "cntrTypCd") == "") {
          $c.win.alert($p, dsRow + 1 + "행에 컨테이너 TYPE 값을 입력하셔야 합니다.");
          return false;
        }
        if (obj.getCellData(dsRow, "lineCd") == "") {
          $c.win.alert($p, dsRow + 1 + "행에 LINE 값을 입력하셔야 합니다.");
          return false;
        }
      }
      if (obj.getCellData(dsRow, "fullEmptyClsCd") == "") {
        $c.win.alert($p, dsRow + 1 + "행에 FULL/EMPTY 값을 입력하셔야 합니다.");
        return false;
      }
      if (lc_wrkPlCd.getValue() == "5C08" // 광주CY 강제등록시 SEAL번호 필수입력 체크. 2015.08.27
      && obj.getCellData(dsRow, "sealNo") == "") {
        if (obj.getCellData(dsRow, "impExpClsCd") == "O" && obj.getCellData(dsRow, "fullEmptyClsCd") == "E" && obj.getCellData(dsRow, "crryinoutClsCd") == "O")
          // 수출 엠티 반출
          {
            $c.win.alert($p, dsRow + 1 + "행에 SEAL 번호를 입력하셔야 합니다.");
            return false;
          }
      }
      if (obj.getCellData(dsRow, "vehclNo") == "") {
        $c.win.alert($p, dsRow + 1 + "행에 차량번호를 입력하셔야 합니다.");
        return false;
      }
    } //end if obj.RowStatus check
  }
  return true;
};

//-------------------------------------------------------------------------
// 행복사
//-------------------------------------------------------------------------
scwin.f_copyRow = function () {
  let rowPositionValue = ds_result.getRowPosition();
  if (lc_wrkPlCd.getValue() == "5C08") {
    $c.data.insertRow($p, gr_result2);
  } else {
    $c.data.insertRow($p, gr_result);
  }
  let newRow = ds_result.getRowPosition();
  ds_result.setCellData(newRow, "wrkPlCd", ds_result.getCellData(rowPositionValue, "wrkPlCd"));
  ds_result.setCellData(newRow, "impExpClsCd", ds_result.getCellData(rowPositionValue, "impExpClsCd"));
  ds_result.setCellData(newRow, "crryinoutClsCd", ds_result.getCellData(rowPositionValue, "crryinoutClsCd"));
  ds_result.setCellData(newRow, "selfClsCd", ds_result.getCellData(rowPositionValue, "selfClsCd"));
  ds_result.setCellData(newRow, "cntrNo", ds_result.getCellData(rowPositionValue, "cntrNo"));
  ds_result.setCellData(newRow, "cntrSizCd", ds_result.getCellData(rowPositionValue, "cntrSizCd"));
  ds_result.setCellData(newRow, "cntrTypCd", ds_result.getCellData(rowPositionValue, "cntrTypCd"));
  ds_result.setCellData(newRow, "fullEmptyClsCd", ds_result.getCellData(rowPositionValue, "fullEmptyClsCd"));
  ds_result.setCellData(newRow, "blNo", ds_result.getCellData(rowPositionValue, "blNo"));
  ds_result.setCellData(newRow, "bookingNo", ds_result.getCellData(rowPositionValue, "bookingNo"));
  ds_result.setCellData(newRow, "lineCd", ds_result.getCellData(rowPositionValue, "lineCd"));
  ds_result.setCellData(newRow, "wrkMemo", ds_result.getCellData(rowPositionValue, "wrkMemo"));
  ds_result.setCellData(newRow, "blckCd", ds_result.getCellData(rowPositionValue, "blckCd"));
  ds_result.setCellData(newRow, "forceYn", "1");
  ds_result.setCellData(newRow, "crryinoutIntendDt", scwin.strCurDate);
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_addRow = function () {
  if (lc_wrkPlCd.getValue() == "5C08") {
    $c.data.insertRow($p, gr_result2);
  } else {
    $c.data.insertRow($p, gr_result);
  }
  let newRow = ds_result.getRowPosition();
  ds_result.setCellData(newRow, "wrkPlCd", lc_wrkPlCd.getValue());
  ds_result.setCellData(newRow, "forceYn", "1");
  ds_result.setCellData(newRow, "selfClsCd", "L");

  //광주CY는 당사, 수출, 상차로 기본세팅
  //2015.09.11 hurrah
  if (lc_wrkPlCd.getValue() == "5C08") {
    ds_result.setCellData(newRow, "impExpClsCd", "O");
    ds_result.setCellData(newRow, "crryinoutClsCd", "O");
  } else if (lc_wrkPlCd.getValue() == "4C02") {
    ds_result.setCellData(newRow, "lineCd", "HMM");
  }
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_deleteRow = function () {
  var cntrInfoRows = ds_result.getRowCount();
  if (cntrInfoRows > 0) {
    if (ds_result.getRowStatus(ds_result.getRowPosition()) == "C") {
      ds_result.removeRow(ds_result.getRowPosition());
    } else {
      ds_result.deleteRow(ds_result.getRowPosition());
    }
    tbx_totalRows.setValue(ds_result.getRowCount());
  }
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_undoRow = function () {
  let cntrInfoRows = ds_result.getRowCount();
  let row = ds_result.getRowPosition();

  //신규ROW는 삭제, 기존ROW는 상태값만 삭제
  if (ds_result.getRowStatus(ds_result.getRowPosition()) == "C") {
    ds_result.removeRow(ds_result.getRowPosition());
    if (cntrInfoRows > 0) {
      if (lc_wrkPlCd.getValue() == "5C08") {
        gr_result2.setFocusedCell(row - 1, "impExpClsCd", false);
      } else {
        gr_result.setFocusedCell(row - 1, "impExpClsCd", false);
      }
    }
  } else {
    ds_result.undoRow(ds_result.getRowPosition());
  }
};

//-------------------------------------------------------------------------
// 그리드 구역 콤보박스 조회
//-------------------------------------------------------------------------
scwin.f_getBlockInfo = function () {
  //작업장 블럭정보 조회    
  dma_block.set("sysCd", "DsCommonEBC");
  dma_block.set("queryId", "retrieveMngBlockList");
  dma_block.set("param1", lc_wrkPlCd.getValue());
  $c.sbm.execute($p, sbm_block);
};
scwin.f_retrieveBlockInfo = function (line, siz, typ, row, clscd) {
  dma_op316Info.set("sysCd", "CommonEBC");
  dma_op316Info.set("queryId", "retrieveCyBlockInfo");
  dma_op316Info.set("param1", lc_wrkPlCd.getValue());
  dma_op316Info.set("param2", line);
  dma_op316Info.set("param3", siz);
  dma_op316Info.set("param4", typ);
  dma_op316Info.set("param5", ds_result.getCellData(row, "fullEmptyClsCd"));
  dma_op316Info.set("param6", clscd);
  $c.sbm.execute($p, sbm_op316Info);
  if (ds_op316Info.getRowCount() > 0) {
    ds_result.setCellData(row, "blckCd", ds_op316Info.getCellData(0, "col1"));
  } else {
    if (ds_result.getCellData(row, "wrkPlCd") == "5C08") {
      ds_result.setCellData(row, "blckCd", "A1");
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 강제등록 displayFormatter
//-------------------------------------------------------------------------
scwin.forceYnExp = function (data) {
  return $c.gus.decode($p, data, "1", "Y", "2", "J", "N");
};

//-------------------------------------------------------------------------
// 그리드 헤더 SET
//-------------------------------------------------------------------------
scwin.f_bindHeader = function () {
  if (lc_wrkPlCd.getValue() == "5C08") {
    gr_result.setStyle("display", "none");
    gr_result2.setStyle("display", "");
    udc_topGrdBtn.setGridId("gr_result2");
    udc_bottomGrdBtn.setGridId("gr_result2");
  } else {
    gr_result.setStyle("display", "");
    gr_result2.setStyle("display", "none");
    udc_topGrdBtn.setGridId("gr_result");
    udc_bottomGrdBtn.setGridId("gr_result");
    if (lc_wrkPlCd.getValue() == "4C02") {
      //gr_result.Format += '<c> id=lineCd name=LINE Edit=None width=50 align=center </c>';
      gr_result.setReadOnly("column", "lineCd", true);
    } else {
      //gr_result.Format += '<c> id=lineCd name=LINE Edit=Upper width=50 align=center </c>';
      gr_result.setReadOnly("column", "lineCd", false);
    }
  }
};
scwin.lc_wrkPlCd_onviewchange = function (info) {
  scwin.f_bindHeader();
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    $c.gus.cfTurnCreateFlag($p, false);
  } else {
    if (ds_result.getRowCount() == 0) {
      $c.win.alert($p, "조회된 데이터가 없습니다");
    } else {
      ds_result.setRowPosition(0);
      if (lc_wrkPlCd.getValue() == "5C08") {
        gr_result2.setFocusedCell(0, "impExpClsCd", false);
      } else {
        gr_result.setFocusedCell(0, "impExpClsCd", false);
      }
      tbx_totalRows.setValue(ds_result.getRowCount());
    }
  }
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  await $c.win.alert($p, "적용 되었습니다.");
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 대문자 입력
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 그리드 대문자 입력
//-------------------------------------------------------------------------
scwin.gr_result_oneditkeyup = function (info) {
  const inputEl = event.target;
  switch (info.colID) {
    case "cntrNo":
    case "cntrSizCd":
    case "cntrTypCd":
    case "fullEmptyClsCd":
    case "sealNo":
    case "odrNo":
    case "blNo":
    case "bookingNo":
    case "lineCd":
      inputEl.value = info.newValue.toUpperCase();
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 그리드 대문자 입력
//-------------------------------------------------------------------------
scwin.gr_result2_oneditkeyup = function (info) {
  const inputEl = event.target;
  switch (info.colID) {
    case "cntrNo":
    case "cntrSizCd":
    case "cntrTypCd":
    case "fullEmptyClsCd":
    case "sealNo":
    case "odrNo":
    case "blNo":
    case "bookingNo":
    case "lineCd":
      inputEl.value = info.newValue.toUpperCase();
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------
scwin.btn_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.f_settingDate();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:55px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:250px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:250px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:45px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkPlCd',style:'width: 200px;',submenuSize:'auto',ref:'data:ds_search.wrkPlCd',textAlign:'left','ev:onviewchange':'scwin.lc_wrkPlCd_onviewchange',sortOption:'value'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' req ',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_selDate',style:'width: 110px;',submenuSize:'auto',ref:'data:ds_search.selDate',objType:'data',textAlign:'left',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업예정일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업요청일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'ds_search',refEdDt:'toDt',refStDt:'fromDt',style:'',objType:'Data',mandatory:'true',edFromId:'ed_onReqFromDt',edToId:'ed_onReqToDt',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'작업시작일자',titleTo:'작업종료일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량No ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNo',placeholder:'',style:'width: 70px;',allowChar:'0-9',maxlength:'4',editType:'select',readOnly:'false',objType:'Data',ref:'data:ds_search.vehclNo','ev:onkeyup':'scwin.onkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width: 150px;',allowChar:'a-zA-Z0-9',maxlength:'13',objType:'Data',editType:'select',ref:'data:ds_search.odrNo','ev:onkeyup':'scwin.onkeyup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_topGrdBtn',gridID:'gr_result',grdDownOpts:'{"fileName":"CY차량확인.xlsx","sheetName":"CY차량확인","type":"4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_result',id:'gr_result',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',autoFit:'allColumn','ev:oneditkeyup':'scwin.gr_result_oneditkeyup',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column105',value:'작업장코드',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column108',value:'반출입예정번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column111',value:'반출입예정시간',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'60',value:'수출입',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column114',value:'입항일시',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'구분',width:'60',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'컨테이너',width:'350',colSpan:'5',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column117',value:'중량',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column59',value:'자가<br/>구분',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column56',value:'차량번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column53',value:'ID카드번호',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column47',value:'오더번호',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column126',value:'컨테이너순번',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column123',value:'작업경로순번',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column120',value:'작업단계순번',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column65',value:'예정일자',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column129',value:'자가운송사거래처',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column71',value:'BL_NO',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column95',value:'BK_NO',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column98',value:'LINE',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column101',value:'구역',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column132',value:'취소일시',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column135',value:'취소담당자ID',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column104',value:'메모',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'40',inputType:'text',id:'column80',value:'강제<br/>등록',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column83',value:'상하차번호',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column86',value:'작업<br/>상태',displayMode:'label',rowSpan:'2',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column24',value:'SZ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column23',value:'TY',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column45',value:'EF',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column42',value:'SEAL',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkPlCd',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crryinoutIntendNo',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crryinoutIntendHh',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'impExpClsCd',inputType:'select',removeBorderStyle:'false',width:'60',textAlign:'left',chooseOption:'true',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'arrvlportDtm',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryinoutClsCd',inputType:'select',width:'60',chooseOption:'true',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'하차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'상차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'100',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',width:'60',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',width:'60',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'fullEmptyClsCd',displayMode:'label',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sealNo',displayMode:'label',textAlign:'left',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wt',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'select',id:'selfClsCd',displayMode:'label',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'당사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'L'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자가'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'J'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'vehclNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'vehclIdCardNo',displayMode:'label',class:'col-type1',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'odrNo',displayMode:'label',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSeq',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkPathSeq',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkStpSeq',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'crryinoutIntendDt',displayMode:'label',readOnly:'true',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'selfTransCoClntNo',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'blNo',displayMode:'label',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'bookingNo',displayMode:'label',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'lineCd',displayMode:'label',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'blckCd',displayMode:'label',chooseOption:'true',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_block'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cnclDtm',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column137',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'wrkMemo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'40',inputType:'text',id:'forceYn',displayMode:'label',readOnly:'true',displayFormatter:'scwin.forceYnExp'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'onoffNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'60',inputType:'select',id:'wrkStsCd',displayMode:'label',readOnly:'true',chooseOption:'true',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'대기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'R'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'취소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]}]}]}]}]}]},{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_result',id:'gr_result2',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',autoFit:'allColumn',rowStatusVisible:'true','ev:oneditkeyup':'scwin.gr_result2_oneditkeyup'},E:[{T:1,N:'w2:caption',A:{id:'caption12',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column112',value:'작업장코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column115',value:'반출입예정번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column118',value:'반출입예정시간',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',rowSpan:'2',value:'수출입',width:'60',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column121',value:'입항일시',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',rowSpan:'2',value:'구분',width:'60'}},{T:1,N:'w2:column',A:{colSpan:'5',displayMode:'label',id:'column17',inputType:'text',value:'컨테이너',width:'350'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column105',value:'LINE',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column108',value:'구역',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column111',value:'메모',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column124',value:'중량',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column59',inputType:'text',rowSpan:'2',value:'자가<br/>구분',width:'40',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column56',inputType:'text',rowSpan:'2',value:'차량번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column53',inputType:'text',rowSpan:'2',value:'ID카드번호',width:'90',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column47',inputType:'text',rowSpan:'2',value:'오더번호',width:'90',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column127',value:'컨테이너순번',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column133',value:'작업경로순번',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column130',value:'작업단계순번',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column65',inputType:'text',rowSpan:'2',value:'예정일자',width:'80',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column136',value:'자가운송사거래처',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column71',inputType:'text',rowSpan:'2',value:'BL_NO',width:'80',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column95',inputType:'text',rowSpan:'2',value:'BK_NO',width:'80',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column139',value:'취소일시',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column142',value:'취소담당자ID',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column80',inputType:'text',rowSpan:'2',value:'강제<br/>등록',width:'40',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column83',inputType:'text',rowSpan:'2',value:'상하차번호',width:'130',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column86',inputType:'text',rowSpan:'2',value:'작업<br/>상태',width:'60',sortable:'false'}}]},{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',value:'번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',value:'SZ',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',value:'TY',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',value:'EF',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'text',value:'SEAL',width:'80'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkPlCd',value:'',displayMode:'label',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crryinoutIntendNo',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crryinoutIntendHh',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{allOption:'',blockSelect:'false',chooseOption:'true',chooseOptionLabel:'$blank',displayMode:'label',id:'impExpClsCd',inputType:'select',ref:'',removeBorderStyle:'false',textAlign:'left',width:'60'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'arrvlportDtm',value:'',displayMode:'label',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'$blank',displayMode:'label',id:'crryinoutClsCd',inputType:'select',ref:'',width:'60'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'하차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'상차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]},{T:1,N:'w2:column',A:{allowChar:'a-zA-Z0-9',displayMode:'label',id:'cntrNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{allowChar:'a-zA-Z0-9',displayMode:'label',id:'cntrSizCd',inputType:'text',width:'60'}},{T:1,N:'w2:column',A:{allowChar:'a-zA-Z0-9',displayMode:'label',id:'cntrTypCd',inputType:'text',width:'60'}},{T:1,N:'w2:column',A:{allowChar:'a-zA-Z0-9',displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'60'}},{T:1,N:'w2:column',A:{allowChar:'a-zA-Z0-9',displayMode:'label',id:'sealNo',inputType:'text',textAlign:'left',width:'80'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'lineCd',value:'',displayMode:'label',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{width:'60',inputType:'select',style:'',id:'blckCd',value:'',displayMode:'label',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_block'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'wrkMemo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column126',value:'',displayMode:'label',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{allOption:'',chooseOption:'',displayMode:'label',id:'selfClsCd',inputType:'select',ref:'',textAlign:'left',width:'40'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'당사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'L'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자가'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'J'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',textAlign:'left',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclIdCardNo',inputType:'text',width:'90',class:'col-type1',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{allowChar:'a-zA-Z0-9',displayMode:'label',id:'odrNo',inputType:'text',width:'90'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrSeq',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkPathSeq',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkStpSeq',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayFormat:'####/##/##',displayMode:'label',id:'crryinoutIntendDt',inputType:'text',readOnly:'true',width:'80'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'selfTransCoClntNo',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{allowChar:'a-zA-Z0-9',displayMode:'label',id:'blNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{allowChar:'a-zA-Z0-9',displayMode:'label',id:'bookingNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cnclDtm',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cnclPicId',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayFormatter:'scwin.forceYnExp',displayMode:'label',id:'forceYn',inputType:'text',readOnly:'true',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onoffNo',inputType:'text',readOnly:'true',width:'130'}},{T:1,N:'w2:column',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'$blank',displayMode:'label',id:'wrkStsCd',inputType:'select',readOnly:'true',ref:'',width:'60'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'대기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'R'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'취소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{userAuth:'C',disabled:'',style:'',id:'',type:'button',class:'btn sm',escape:'false',objType:'ctrlBtn','ev:onclick':'scwin.f_copyRow'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',gridID:'gr_out',id:'udc_bottomGrdBtn',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',rowAddObjType:'ctrlBtn',rowDelObjType:'ctrlBtn',rowAddUserAuth:'C',rowDelUserAuth:'C',delObjType:'ctrlBtn',delUserAuth:'D',cancelObjType:'ctrlBtn',rowAddFunction:'scwin.f_addRow',rowDelFunction:'scwin.f_deleteRow',cancelFunction:'scwin.f_undoRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',label:'저장',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]}]}]}]}]}]})