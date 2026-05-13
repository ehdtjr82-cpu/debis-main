/*amd /ui/bp/fbp/op/ac/ez_208_01_06p.xml 77357 6bdc8f29bad8d02b095542ce1c276d518e1d6a705af5c5ba04895832e63e5fa0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_ApplyAlloccar',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'operFlag',name:'배차구분 : 1.배차, 2.용차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flFlag',name:'화물구분 : 1.벌크, 2.컨테이너',dataType:'text'}},{T:1,N:'w2:column',A:{id:'operDate',name:'배차일자(실제 배차되는 일자)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclIdx',name:'공차등록된 차량 idx',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flIdxs',name:'선택된 화물 idx',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flDtlIdxs',name:'화물상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentClntIdx',name:'용차사 idx(거래처)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentVehclIdx',name:'용차 idx (차량)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclDate',name:'공차등록일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'사용자 아이디',dataType:'text',defaultValue:'',encYN:'',length:'',nullYN:''}},{T:1,N:'w2:column',A:{id:'ez124Idx',name:'샤시등록번호',dataType:'text',defaultValue:'',encYN:'',length:'',nullYN:''}},{T:1,N:'w2:column',A:{id:'rentVehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentVehclKndCd',name:'차량종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentVehclNrmCd',name:'차량톤수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentVehclDrvNm',name:'기사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentVehclDrvPhone',name:'휴대전화',dataType:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'outMsg',name:'출력메시지',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'regDd',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'idx',name:'IDX',dataType:'text'}},{T:1,N:'w2:column',A:{id:'statuss',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ofcNm',name:'영업소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onDt',name:'상차시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onHh',name:'상차시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPos',name:'상차지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPosNm',name:'상차지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicTel',name:'담당자전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDt',name:'하차시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offHh',name:'하차시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPos',name:'하차지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPosNm',name:'하차지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicTel',name:'담당자전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goods',name:'품목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rotat',name:'회전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unit',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nrm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payReal',name:'실운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAdvn',name:'선불운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDvly',name:'착불운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'defrAmt',name:'지불운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strAmtClntNm',name:'지불처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strAmt',name:'고정보관비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmis',name:'수수료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'initAmt',name:'선수금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prePayAmt',name:'선급금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hirecarClntNm',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'undekYn',name:'인수증여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclPicNm',name:'기사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclTelNo2',name:'기사전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarDd',name:'배차일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_flc',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'regDd',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'idx',name:'주문번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmord',name:'동부오더',dataType:'text'}},{T:1,N:'w2:column',A:{id:'statuss',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ofcNm',name:'영업소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onDd',name:'상차일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onHh',name:'상차시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPos',name:'상차지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPosNm',name:'상차지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicTel',name:'담당자전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDd',name:'하차일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offHh',name:'하차시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPos',name:'하차지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPosNm',name:'하차지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicTel',name:'담당자전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoTel',name:'선사전화번호 Shipping Company Tel',dataType:'text'}},{T:1,N:'w2:column',A:{id:'line',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpNm',name:'선박명/항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNo',name:'포트번호 Port_NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrBookingNo',name:'컨테이너부킹번호 Booking_No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrOrdNo',name:'컨테이너주문번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSealNo',name:'컨테이너봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrDptDd',name:'컨테이너출발일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrArvDd',name:'컨테이너도착일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cyCmis',name:'CY수수료 Commission',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hndlCmisPl',name:'취급료 청구처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgHndlCmis',name:'청구취급수수료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payHndlCmis',name:'지불취급수수료를 기타비용으로 사용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmclrncCmis',name:'통관료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onCmis',name:'상차료 On Commission',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCmisPayfor',name:'상차료대납여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onCmisBilgFareInc',name:'상차료청구운임에 포함 여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offCmis',name:'하차료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSiz',name:'컨테이너SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizDisp',name:'컨테이너사이즈표시-동부기준코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTyp',name:'컨테이너TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypDisp',name:'컨테이너타입표시-동부기준코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emptyFull',name:'컨테이너 Empty/Full',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payReal',name:'실운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAdvn',name:'선불운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDvly',name:'착불운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'defrAmt',name:'지불운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strAmtClntNm',name:'지불처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strAmt',name:'고정보관비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmis',name:'수수료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hirecarClntNm',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'undekYn',name:'인수증여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclPicNm',name:'기사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclTelNo2',name:'기사전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarDd',name:'배차일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_vehclNrm'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라미터1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vehclNrm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_clntInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'carType',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_ApplyAlloccar',action:'/ncall.bp.fbp.op.ac.ApplyAlloccarCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_ApplyAlloccar","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ApplyAlloccar_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_vehclNrm',action:'/ncall.cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_vehclNrm',target:'data:json,{"id":"ds_vehclNrm","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 용차
 * 메뉴경로 : 엔콜/배차관리/용차
 * ASIS경로 : /dongwon-ntis-engine/src/main/webapp/bp/fbp/op/ac/ez_208_01_06p.jsp
 * 작 성 자 : 유청아
 * 작 업 일 : 2026-03-16
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항

 * 수정이력 :
 *    - 2026-03-16      유청아    최초작성
 *    - 2026-04-09      이진우    T-6012 조치완료(저장오류)
 *    - 2026-04-10      이진우    T-6365 조치완료(그리드 데이타 미조회)
 *    - 2026-04-20      이진우    T-7180 조치완료(용차등록 시 그리드에 떠 있는 데이터의 개수가 다릅)
 */

// 차종 콤보박스에 선택해주세요. 추가 방법은??(공통문의중)

scwin.UserID = $c.data.getMemInfo($p, "userId");
; //사용자ID
scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  var flType = opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().scwin.CargoType; // 화물종류(벌크,컨테이너)
  var vFlCount = 0; // 선택된 화물의 수
  var vFlIdxs = "";
  var dmCoshippingNo = "";
  var rowIdx = 0;
  ica_regDd.setValue(scwin.vCurDate);

  // 벌크/컨테이너 화물정보 그리드 visible
  scwin.f_blkGrid(flType);

  // 화물구분
  if (flType == 'cargo') {
    vFlFlag = '1';
  } else {
    vFlFlag = '2';
  }
  ;
  if (vFlFlag == '1') {
    // 벌크 화물
    rowIdx = opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getRowPosition();
    dmCoshippingNo = opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(rowIdx, "dmCoshippingNo");

    // 동일 합적번호 배열
    // var matchArr = opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getMatchedIndex("dmCoshippingNo", dmCoshippingNo, true);
    // 현재 선택(포커스)된 모든 행의 인덱스를 배열 형태로 가져오는 API
    var matchArr = opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().gr_fl.getAllFocusedRowIndex();
    if (matchArr.length > 0) {
      for (let i = 0; i < matchArr.length; i++) {
        vFlIdxs += opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(matchArr[i], "idx") + ',';
        scwin.f_SetFlDtlInfo('cargo', matchArr[i]);
        vFlCount += 1;
      }
    } else {
      vFlIdxs += opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(rowIdx, "idx") + ',';
      scwin.f_SetFlDtlInfo('cargo', rowIdx);
      vFlCount += 1;
    }

    // var focusedRows = opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().gr_fl.getAllFocusedRowIndex();
    // for (var i = 0; i < focusedRows.length; i++) {
    //     var originRow = focusedRows[i];

    //     vFlIdxs += opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(originRow, "idx") + ',';
    //     scwin.f_SetFlDtlInfo('cargo', originRow);
    //     vFlCount += 1;
    // }

    tbx_totalRows.setValue(ds_fl.getRowCount());
  } else {
    // 컨테이너 화물
    rowIdx = opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getRowPosition();
    dmCoshippingNo = opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(rowIdx, "dmCoshippingNo");

    // 동일 합적번호 배열
    // var matchArr = opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getMatchedIndex("dmCoshippingNo", dmCoshippingNo, true);
    var matchArr = opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().gr_flc.getAllFocusedRowIndex();
    console.log("matchArr::", matchArr);
    if (matchArr.length > 0) {
      for (let i = 0; i < matchArr.length; i++) {
        vFlIdxs += opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(matchArr[i], "idx") + ',';
        scwin.f_SetFlDtlInfo('cont', matchArr[i]);
        vFlCount += 1;
      }
    } else {
      vFlIdxs += opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(rowIdx, "idx") + ',';
      scwin.f_SetFlDtlInfo('cont', rowIdx);
      vFlCount += 1;
    }

    // // 컨테이너 화물
    // var focusedRows = opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().gr_flc.getAllFocusedRowIndex();
    // for (var i = 0; i < focusedRows.length; i++) {
    //     var originRow = focusedRows[i];

    //     vFlIdxs += opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(originRow, "idx") + ',';
    //     scwin.f_SetFlDtlInfo('cont', originRow);
    //     vFlCount += 1;
    // }

    tbx_totalRows.setValue(ds_flc.getRowCount());
  }
  if (vFlIdxs == "") {
    $c.win.alert($p, '화물정보가 선택되지 않았습니다. 화물정보를 선택하여 주시기 바랍니다.');
    $c.win.closePopup($p);
  }
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    /*
    dlt_carType.insertRow(0);
    dlt_carType.setCellData(0, "code", "");
    dlt_carType.setCellData(0, "name", "선택해주세요.");
    */
  }, {
    "delay": 100
  });
};

//-------------------------------------------------------------------------
// 벌크/컨테이너 화물정보 데이터 그리드 visible
//-------------------------------------------------------------------------
scwin.f_blkGrid = function (str) {
  if (str == "cargo") {
    gr_cargo.setStyle("display", "");
    gr_cont.setStyle("display", "none");
  } else {
    gr_cargo.setStyle("display", "none");
    gr_cont.setStyle("display", "");
  }
  ;
  //carTyp_combo.Text="선택해주세요.";
};

//-------------------------------------------------------------------------
// 화물정보 SET
//-------------------------------------------------------------------------
scwin.f_SetFlDtlInfo = function (flType, lclRow) {
  let newRow = 0;
  if (flType == "cargo") {
    $c.data.insertRow($p, gr_cargo);
    newRow = ds_fl.getRowCount() - 1;
    //ds_fl.setCellData(ds_fl.getRowPosition(), "regDd", win.parent.order_top.document.ds_fl.getCellData(lclRow, "regDd"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "regDd", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "regDd"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "idx", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "idx"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "statuss", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "statuss"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "ofcNm", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "ofcNm"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "clntNm", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "clntNm"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "picNm", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "picNm"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "telNo", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "telNo"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "onDt", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "onDt"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "onHh", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "onHh"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "onPos", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "onPos"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "onPosNm", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "onPosNm"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "onPicTel", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "onPicTel"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "offDt", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "offDt"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "offHh", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "offHh"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "offPos", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "offPos"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "offPosNm", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "offPosNm"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "offPicNm", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "offPicNm"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "offPicTel", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "offPicTel"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "goods", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "goods"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "rotat", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "rotat"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "wt", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "wt"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "unit", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "unit"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "qty", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "qty"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "nrm", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "nrm"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "payReal", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "payReal"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "bilgAmt", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "bilgAmt"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "payAdvn", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "payAdvn"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "payDvly", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "payDvly"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "defrAmt", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "defrAmt"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "strAmtClntNm", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "strAmtClntNm"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "strAmt", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "strAmt"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "cmis", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "cmis"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "initAmt", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "initAmt"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "prePayAmt", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "prePayAmt"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "rmk", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "rmk"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "hirecarClntNm", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "hirecarClntNm"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "undekYn", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "undekYn"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "vehclNo", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "vehclNo"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "vehclPicNm", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "vehclPicNm"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "vehclTelNo2", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "vehclTelNo2"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "alloccarDd", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "alloccarDd"));
    ds_fl.setCellData(ds_fl.getRowPosition(), "regId", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_fl.getCellData(lclRow, "regId"));
  } else {
    $c.data.insertRow($p, gr_cont);
    newRow = ds_flc.getRowCount() - 1;
    ds_flc.setCellData(ds_flc.getRowPosition(), "idx", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "idx"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "dmord", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "dmord"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "statuss", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "statuss"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "ofcNm", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "ofcNm"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "clntNm", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "clntNm"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "telNo", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "telNo"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "onDd", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "onDd"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "onHh", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "onHh"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "onPos", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "onPos"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "onPosNm", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "onPosNm"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "onPicNm", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "onPicNm"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "onPicTel", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "onPicTel"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "offDd", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "offDd"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "offHh", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "offHh"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "offPos", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "offPos"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "offPosNm", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "offPosNm"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "offPicNm", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "offPicNm"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "offPicTel", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "offPicTel"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "shpCo", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "shpCo"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "shpCoTel", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "shpCoTel"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "line", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "line"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "shpNm", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "shpNm"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "portNo", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "portNo"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "cntrBookingNo", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "cntrBookingNo"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "cntrOrdNo", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "cntrOrdNo"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "cntrNo", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "cntrNo"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "cntrSealNo", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "cntrSealNo"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "cntrDptDd", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "cntrDptDd"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "cntrArvDd", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "cntrArvDd"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "cyCmis", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "cyCmis"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "hndlCmisPl", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "hndlCmisPl"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "bilgHndlCmis", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "bilgHndlCmis"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "payHndlCmis", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "payHndlCmis"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "cstmclrncCmis", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "cstmclrncCmis"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "onCmis", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "onCmis"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "payCmisPayfor", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "payCmisPayfor"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "onCmisBilgFareInc", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "onCmisBilgFareInc"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "offCmis", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "offCmis"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "cntrSiz", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "cntrSiz"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "cntrSizDisp", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "cntrSizDisp"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "cntrTyp", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "cntrTyp"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "cntrTypDisp", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "cntrTypDisp"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "emptyFull", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "emptyFull"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "payReal", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "payReal"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "bilgAmt", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "bilgAmt"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "payAdvn", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "payAdvn"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "payDvly", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "payDvly"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "defrAmt", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "defrAmt"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "strAmtClntNm", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "strAmtClntNm"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "strAmt", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "strAmt"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "cmis", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "cmis"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "rmk", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "rmk"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "hirecarClntNm", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "hirecarClntNm"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "undekYn", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "undekYn"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "vehclNo", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "vehclNo"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "vehclPicNm", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "vehclPicNm"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "vehclTelNo2", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "vehclTelNo2"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "alloccarDd", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "alloccarDd"));
    ds_flc.setCellData(ds_flc.getRowPosition(), "regId", opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_flc.getCellData(lclRow, "regId"));
  }
};

//-------------------------------------------------------------------------
// 용차 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_ApplyAlloccar = function () {
  //var lclRow = opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().scwin.selectedLclRow;       // 선택된 차량정보
  //var vehclRow = opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().scwin.selectedvehclRow;   // 선택된 차량정보
  var flType = opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().scwin.CargoType; // 화물종류(벌크,컨테이너)		
  //var vehclType = opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().scwin.vehclType;		    // 차량종류    
  var vOpenFlag = '2'; // 배차구분 : 1.배차, 2.용차(현재 화면은 용차 화면)
  var vFlFlag = ""; // 화물구분 : 1.벌크, 2.컨테이너
  var vOperDate; // 배차일자(실제 배차되는 일자)
  var vVehclIdx = ''; // 공차등록된 차량 idx(현재 화면은 용차)
  var vFlIdxs = ""; // 선택된 화물 idx
  var vRentClntIdx; // 용차사 idx(거래처)
  var vRentVehclIdx; // 용차 idx (차량)
  var vVehclDate; // 공차등록일
  var vRmk; // 비고
  var vUserId; // 사용자 아이디
  var vEz124Idx; // 샤시등록번호

  // 화물구분
  if (flType == 'cargo') {
    vFlFlag = '1';
  } else {
    vFlFlag = '2';
  }
  ;

  // 배차일자 (실제 배차되는 일자)
  vOperDate = ica_regDd.getValue();

  // 선택된 화물 번호
  if (vFlFlag == '1') {
    // 벌크 화물
    // var focusedRows = gr_cargo.getAllFocusedRowIndex();
    // for (var i = 0; i < focusedRows.length; i++) {
    //     var originRow = focusedRows[i];

    //     vFlIdxs += ds_fl.getCellData(originRow, "idx") + ',';
    // }
    for (var i = 0; i < ds_fl.getRowCount(); i++) {
      vFlIdxs += ds_fl.getCellData(i, "idx") + ',';
    }
  } else {
    // 컨테이너 화물
    // var focusedRows = gr_cont.getAllFocusedRowIndex();
    // for (var i = 0; i < focusedRows.length; i++) {
    //     var originRow = focusedRows[i];

    //     vFlIdxs += ds_flc.getCellData(originRow, "idx") + ',';
    // }
    for (var i = 0; i < ds_flc.getRowCount(); i++) {
      vFlIdxs += ds_flc.getCellData(i, "idx") + ',';
    }
  }
  vFlIdxs = vFlIdxs.substring(0, vFlIdxs.length - 1);

  // 용차사 IDX (현재 화면은 배차 화면 이므로 '')
  vRentClntIdx = dma_clntInfo.get("clntNm");

  // 용차 IDX (현재 화면은 배차 화면이므로 '')
  vRentVehclIdx = '';

  // 공차등록일 - 현재 화면은 용차이므로 배차 일자와 동일하게 맞추어 준다.
  vVehclDate = ica_regDd.getValue();
  vVehclDate = vVehclDate.substring(0, 4) + '-' + vVehclDate.substring(4, 6) + '-' + vVehclDate.substring(6, 8);

  // 비고
  vRmk = "";

  // 사용자
  vUserId = scwin.UserID;

  // 샤시정보 - 일단 없다.
  vEz124Idx = "";
  ds_ApplyAlloccar.setJSON([]);
  var loop = vFlIdxs.replaceAll("-", ",");
  loop = loop.split(",");
  let newRow = 0;
  for (i = 0; i < loop.length; i += 2) {
    let newRow = ds_ApplyAlloccar.insertRow();
    ds_ApplyAlloccar.setRowPosition(newRow);
    ds_ApplyAlloccar.setCellData(ds_ApplyAlloccar.getRowPosition(), "operFlag", vOpenFlag);
    ds_ApplyAlloccar.setCellData(ds_ApplyAlloccar.getRowPosition(), "flFlag", vFlFlag);
    ds_ApplyAlloccar.setCellData(ds_ApplyAlloccar.getRowPosition(), "operDate", vOperDate);
    ds_ApplyAlloccar.setCellData(ds_ApplyAlloccar.getRowPosition(), "vehclIdx", vVehclIdx);
    ds_ApplyAlloccar.setCellData(ds_ApplyAlloccar.getRowPosition(), "flIdxs", loop[i]);
    ds_ApplyAlloccar.setCellData(ds_ApplyAlloccar.getRowPosition(), "flDtlIdxs", loop[i + 1]);
    ds_ApplyAlloccar.setCellData(ds_ApplyAlloccar.getRowPosition(), "rentClntIdx", vRentClntIdx);
    ds_ApplyAlloccar.setCellData(ds_ApplyAlloccar.getRowPosition(), "rentVehclIdx", vRentVehclIdx);
    ds_ApplyAlloccar.setCellData(ds_ApplyAlloccar.getRowPosition(), "vehclDate", vVehclDate);
    ds_ApplyAlloccar.setCellData(ds_ApplyAlloccar.getRowPosition(), "rmk", vRmk);
    ds_ApplyAlloccar.setCellData(ds_ApplyAlloccar.getRowPosition(), "userId", vUserId);
    ds_ApplyAlloccar.setCellData(ds_ApplyAlloccar.getRowPosition(), "ez124Idx", vEz124Idx);
    ds_ApplyAlloccar.setCellData(ds_ApplyAlloccar.getRowPosition(), "rentVehclNo", ed_rentVehclNo.getValue());
    ds_ApplyAlloccar.setCellData(ds_ApplyAlloccar.getRowPosition(), "rentVehclKndCd", dma_clntInfo.get("carType"));
    ds_ApplyAlloccar.setCellData(ds_ApplyAlloccar.getRowPosition(), "rentVehclNrmCd", acb_carTon.getValue());
    ds_ApplyAlloccar.setCellData(ds_ApplyAlloccar.getRowPosition(), "rentVehclDrvNm", ed_rentVehclDrvNm.getValue());
    ds_ApplyAlloccar.setCellData(ds_ApplyAlloccar.getRowPosition(), "rentVehclDrvPhone", ed_rentVehclDrvPhone.getValue());
  }

  // 차량번호 체크
  scwin.chkVehclNo();
  $c.sbm.execute($p, sbm_ApplyAlloccar);
};

//-------------------------------------------------------------------------
// 차량종류 규격 콤보 조회(중량)
//-------------------------------------------------------------------------
scwin.f_vehclNrm = function (param1) {
  dma_vehclNrm.set("sysCd", "NcallEquipmentNonUsableEBC");
  dma_vehclNrm.set("queryId", "retrivecComboNrmCodeList");
  dma_vehclNrm.set("param1", param1);
  $c.sbm.execute($p, sbm_vehclNrm);
};

//-------------------------------------------------------------------------
// 차량번호 숫자 체크
//-------------------------------------------------------------------------
scwin.chkVehclNo = async function () {
  var vno = ed_rentVehclNo.getValue().trim();
  var vnoLen = vno.length;
  var vno4 = vno.substring(vnoLen - 4, vnoLen);
  var num = "0123456789";
  for (i = 0; i < 4; i++) {
    if (num.indexOf(vno4.substring(i, i + 1)) < 0) {
      await $c.win.alert($p, "잘못된 차량번호 입니다.");
      ed_rentVehclNo.focus();
      return false;
    }
  }
};

//-------------------------------------------------------------------------
// 닫기
//-------------------------------------------------------------------------
scwin.f_close = function () {
  $c.win.closePopup($p);
};

//-------------------------------------------------------------------------
// 용차 submitdone
//-------------------------------------------------------------------------
scwin.sbm_ApplyAlloccar_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().scwin.reflashdata();
  if (ds_result.getRowCount() > 0 && !$c.util.isEmpty($p, ds_result.getCellData(0, "outMsg"))) {
    $c.win.alert($p, ds_result.getCellData(0, "outMsg"));
  }
  $c.win.closePopup($p);
};

//-------------------------------------------------------------------------
// 차종 콤보박스 값 변경 이벤트
//-------------------------------------------------------------------------
scwin.acb_carType_onviewchange = function (info) {
  scwin.f_vehclNrm(acb_carType.getValue());
};
scwin.ed_rentVehclDrvPhone_onkeypress = function (e) {
  $c.data.onlyNumber($p, e);
};
scwin.ed_rentVehclDrvPhone_onblur = function (e) {
  // $c.data.PhoneChk(ed_rentVehclDrvPhone.getValue());
  scwin.f_PhoneChk(ed_rentVehclDrvPhone);
};
scwin.formatTime = function (data) {
  if (!data || data.length < 4) return data; // 데이터가 없거나 짧으면 그대로 반환

  var hh = data.substring(0, 2);
  var mm = data.substring(2, 4);
  return hh + ":" + mm; // "12:30" 형태로 반환
};
scwin.zeroFormatter = function (data) {
  // 데이터가 빈 문자열("")이거나 null, undefined인 경우 "0" 반환
  if (data === "" || data === null || typeof data === "undefined") {
    return "0";
  }
  return data; // 값이 있으면 그대로 표시
};

//=============================================================================
// [유틸] 전화번호 유효성 검사 
//=============================================================================
scwin.f_PhoneChk = async function (comp) {
  let val = comp.getValue();
  if (val === "") return true;

  // 1. 숫자만 있는지 체크 (AS-IS의 containsCharsOnly 역할)
  let isOnlyDigits = /^[0-9]+$/.test(val);
  if (isOnlyDigits) {
    let len = val.length;
    if (len === 11) {
      if (val.substring(0, 2) === '02') {
        val = val.substring(0, 2) + '-' + val.substring(2, 6) + '-' + val.substring(6, 10);
      } else {
        val = val.substring(0, 3) + '-' + val.substring(3, 7) + '-' + val.substring(7, 11);
      }
    } else if (len === 10) {
      if (val.substring(0, 2) === '02') {
        val = val.substring(0, 2) + '-' + val.substring(2, 6) + '-' + val.substring(6, 10);
      } else {
        val = val.substring(0, 3) + '-' + val.substring(3, 6) + '-' + val.substring(6, 10);
      }
    } else if (len === 9) {
      if (val.substring(0, 2) === '02') {
        val = val.substring(0, 2) + '-' + val.substring(2, 5) + '-' + val.substring(5, 9);
      } else {
        val = val.substring(0, 3) + '-' + val.substring(3, 6) + '-' + val.substring(6, 10);
      }
    } else {
      await $c.win.alert($p, "전화번호 입력이 잘못되었습니다.");
      comp.focus();
      return false;
    }
    comp.setValue(val);
  }

  // 포맷팅 된 값 다시 가져오기
  val = comp.getValue();

  // 2. 정규식 체크 (AS-IS와 동일)
  let phonestr = /^0\d{1,2}-\d{3,4}-\d{4}$/;
  if (!phonestr.test(val)) {
    await $c.win.alert($p, "번호 형식이 올바르지 않거나 '-'를 생략하셨습니다.");
    comp.focus();
    return false;
  }

  // 3. 지역번호/통신사 식별번호 체크
  let str = val.substring(1, 3); // 010- 이면 '10' 추출, 02- 이면 '2-' 추출
  let validPrefixes = ["10", "11", "13", "16", "17", "18", "19", "2-", "31", "32", "33", "41", "42", "43", "51", "52", "53", "54", "55", "61", "62", "63", "64"];
  if (!validPrefixes.includes(str)) {
    await $c.win.alert($p, "지역 번호를 정확하게 입력하세요.");
    comp.focus();
    return false;
  }
  return true;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_common_textbox',type:'page',variableClone:'true',src:'/cm/udc/common_textbox.xml'}},{T:1,N:'w2:require',A:{as:'udc_commonCombo',type:'page',variableClone:'true',src:'/cm/udc/commonCombo.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'위탁/용차사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_common_textbox',A:{columnIdList:'clntNm,clntInTel,ofcNm',gridHeadTitle:'용차사명,전화번호,소속',id:'udc_rentClntInfo',nameId:'clntNm',selectID:'RentClntInfo',style:'',widthList:'150,120,180',refDataCollection:'dma_clntInfo',code:'clntNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_rentVehclNo',style:'',maxlength:'20'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차종',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_commonCombo',A:{code:'carType',cond:'carType',id:'udc_carTyp',refDataCollection:'dma_clntInfo',style:'',parentDataListId:'dlt_carType',chooseOption:'Y'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량톤수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',editType:'select','ev:onchange':'scwin.acb_cargoClsCd_onchange',id:'acb_carTon',objType:'data',ref:'',search:'start',style:'',submenuSize:'auto',textAlign:'left',nextTabID:'ed_rentVehclDrvNm'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_vehclNrm'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기사성명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_rentVehclDrvNm',style:'',maxlength:'20',nextTabID:'ed_rentVehclDrvPhone'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'휴대전화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_rentVehclDrvPhone',style:'',maxlength:'14',nextTabID:'ica_regDd','ev:onblur':'scwin.ed_rentVehclDrvPhone_onblur',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_regDd',style:'',calendarDisplayFormat:'yyyy-MM-dd',displayFormat:'yyyy-MM-dd'}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'TopDiv1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_fl',style:'',id:'gr_cargo',visibleRowNum:'15',class:'wq_gvw',autoFit:'none',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column17',value:'등록일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column13',value:'소속점',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column11',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column9',value:'담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column3',value:'담당전화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column5',value:'상차<br/>요청일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column7',value:'상차<br/>요청시간',class:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'상차지역',class:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column43',value:'상차지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'상차<br/>담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'상차담당전화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'하차<br/>요청일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'하차<br/>요청시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column27',value:'하차지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'하차지역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'하차<br/>담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'하차담당전화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column69',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'회전',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'규격',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'실운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'청구<br/>운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'선불<br/>운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'착불<br/>운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'지불<br/>운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column47',value:'보관금<br/>지불처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'보관금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column97',value:'수수료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column95',value:'선수금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column93',value:'선급금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column91',value:'요구사항',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column89',value:'인수증',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column87',value:'차량번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'기사명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column83',value:'기사휴대폰',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'배차일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'등록자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'regDd',value:'',displayMode:'label',displayFormat:'####-##-##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'statuss',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'ofcNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'picNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'telNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'onDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'onHh',value:'',displayMode:'label',displayFormat:'HH:mm',ioFormat:'HHmmss',dataType:'time'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'onPosNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'onPos',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'onPicNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'onPicTel',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'offDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'offHh',value:'',displayMode:'label',displayFormat:'HH:mm',dataType:'time',ioFormat:'HHmmss'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'offPosNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'offPos',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'offPicNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'offPicTel',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'goods',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rotat',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'unit',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'qty',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'nrm',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payReal',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bilgAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payAdvn',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payDvly',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'defrAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'strAmtClntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'strAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cmis',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'initAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'prePayAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'undekYn',value:'',displayMode:'label',hidden:'true',textAlign:'left',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vehclNo',value:'',displayMode:'label',hidden:'true',textAlign:'left',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vehclPicNm',value:'',displayMode:'label',hidden:'true',textAlign:'left',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vehclTelNo2',value:'',displayMode:'label',hidden:'true',textAlign:'left',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'alloccarDt',value:'',displayMode:'label',hidden:'true',textAlign:'left',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regId',value:'',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_flc',id:'gr_cont',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'주문번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'동부<br/>오더No',width:'120'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column101',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'소속점',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'거래처명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'담당자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'담당전화',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'상차<br/>요청일',width:'100'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'column7',inputType:'text',style:'',value:'상차<br/>요청시간',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',style:'',value:'상차지',width:'150'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'column19',inputType:'text',style:'',value:'상차지역',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'text',style:'',value:'상차<br/>담당자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column33',inputType:'text',style:'',value:'상차<br/>담당전화',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column31',inputType:'text',style:'',value:'하차<br/>요청일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'하차<br/>요청시간',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'하차지',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column75',inputType:'text',style:'',value:'하차지역',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column73',inputType:'text',style:'',value:'하차<br/>담당자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column71',inputType:'text',style:'',value:'하차<br/>담당전화',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column69',inputType:'text',style:'',value:'선사명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column67',inputType:'text',style:'',value:'선사<br/>전화',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column65',inputType:'text',style:'',value:'라인',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column63',inputType:'text',style:'',value:'선박명<br/>항차',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column61',inputType:'text',style:'',value:'포트',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column59',inputType:'text',style:'',value:'부킹<br/>번호',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column57',inputType:'text',style:'',value:'주문<br/>번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column55',inputType:'text',style:'',value:'컨테이너<br/>번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column53',inputType:'text',style:'',value:'실번호',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column51',inputType:'text',style:'',value:'컨테이너<br/>출발일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column49',inputType:'text',style:'',value:'컨테이너<br/>도착일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column47',inputType:'text',style:'',value:'cy<br/>수수료',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',style:'',value:'취급료<br/>청구처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column97',inputType:'text',style:'',value:'청구<br/>취급료',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column95',inputType:'text',style:'',value:'지불<br/>취급료',width:'100'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column102',value:'통관료',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column93',inputType:'text',style:'',value:'상차료',width:'80'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column104',value:'상차료<br/>대납여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column106',value:'상차료청구<br/>운임에포함',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column108',value:'하차료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column110',value:'컨테이너<br/>사이즈',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column112',value:'컨테이너<br/>사이즈표시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column114',value:'컨테이너<br/>타입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column116',value:'컨테이너<br/>타입표시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column118',value:'EMPTY/FULL',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column120',value:'실운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column122',value:'청구운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column124',value:'선불<br/>',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column126',value:'착불<br/>운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column128',value:'지불<br/>운임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column130',value:'보관금<br/>지불처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column132',value:'보관금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column134',value:'수수료',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column91',inputType:'text',style:'',value:'요구사항',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column99',inputType:'text',style:'',value:'용차사',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column89',inputType:'text',style:'',value:'인수증',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column87',inputType:'text',style:'',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column85',inputType:'text',style:'',value:'기사명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column83',inputType:'text',style:'',value:'기사휴대전화',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column81',inputType:'text',style:'',value:'배차일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column79',inputType:'text',style:'',value:'등록자',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'idx',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dmord',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'statuss',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ofcNm',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'picNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'telNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onDd',inputType:'text',style:'',value:'',width:'100',displayFormat:'####-##-##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onHh',inputType:'text',style:'',value:'',width:'100',maxLength:'4',allowChar:'0-9',displayFormatter:'scwin.formatTime'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onPos',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onPosNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onPicNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onPicTel',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offDd',inputType:'text',style:'',value:'',width:'100',displayFormat:'####-##-##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offHh',inputType:'text',style:'',value:'',width:'100',displayFormatter:'scwin.formatTime'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offPos',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offPosNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offPicNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offPicTel',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shpCo',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shpCoTel',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'line',inputType:'text',style:'',textAlign:'left',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shpNm',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portNo',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrBookingNo',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrOrdNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSealNo',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrDptDd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrArvDd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cyCmis',inputType:'text',style:'',value:'',width:'80',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hndlCmisPl',inputType:'text',style:'',textAlign:'right',value:'',width:'100',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgHndlCmis',inputType:'text',style:'',textAlign:'right',value:'',width:'100',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payHndlCmis',inputType:'text',style:'',textAlign:'right',value:'',width:'100',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'cstmclrncCmis',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onCmis',inputType:'text',style:'',textAlign:'right',value:'',width:'80',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'payCmisPayfor',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'onCmisBilgFareInc',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'offCmis',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'cntrSiz',value:'',displayMode:'label',displayFormatter:'scwin.zeroFormatter'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'cntrSizDisp',value:'',displayMode:'label',textAlign:'left',displayFormatter:'scwin.zeroFormatter'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'cntrTyp',value:'',displayMode:'label',displayFormatter:'scwin.zeroFormatter'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'cntrTypDisp',value:'',displayMode:'label',displayFormatter:'scwin.zeroFormatter'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'emptyFull',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'payReal',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bilgAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'payAdvn',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'payDvly',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'defrAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'strAmtClntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'strAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cmis',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',style:'',textAlign:'left',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hirecarClntNm',inputType:'text',style:'',value:'',width:'100',hidden:'true',hiddenCol:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'undekYn',inputType:'text',style:'',value:'',width:'100',hidden:'true',hiddenCol:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'100',hidden:'true',hiddenCol:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclPicNm',inputType:'text',style:'',value:'',width:'100',hidden:'true',hiddenCol:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclTelNo2',inputType:'text',style:'',value:'',width:'100',hidden:'true',hiddenCol:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'alloccarDd',inputType:'text',style:'',value:'',width:'100',hidden:'true',hiddenCol:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'trigger26',style:'',type:'button','ev:onclick':'scwin.f_ApplyAlloccar'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'용차'}]}]}]}]}]}]}]})