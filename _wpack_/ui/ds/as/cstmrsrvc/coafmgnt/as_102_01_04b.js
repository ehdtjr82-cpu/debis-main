/*amd /ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_04b.xml 51877 d83bd44f52c88e314ea54c3217c6d2755c19e4ee4b75a64c7de32d3568b29321 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shpCo',name:'거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'line',name:'LINE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_BookingNumber',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'라인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'berthCd',name:'선석코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'berthNm',name:'선석명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_BookingNumberBulkContainer',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULL/EMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'lblock',name:'LBLOCK',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lbay',name:'LBAY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lrow',name:'LROW',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ltier',name:'LTIER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'현위치코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosNm',name:'현위치명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinDt',name:'반입일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrRetrvDt',name:'컨테이너회수일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Retrieve2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shpCo',name:'거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'line',name:'LINE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_BookingEachAmtInformation',saveRemovedData:'true','ev:ondataload':'scwin.ds_BookingEachAmtInformation_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemNm',name:'매출항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'매출단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'총합계금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrowDdCnt',name:'경과일수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'freeday',name:'FREEDAY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jdgAmt',name:'감정금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cstmdtAmt',name:'관세금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'매출순번',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_appendSellItem_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'outIntendNo',name:'출고예정번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaPatternCd',name:'서식유형코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outAdjmPatternCd',name:'출고정산유형코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outIntendDt',name:'출고예정일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outIntendHh',name:'출고예정시간',dataType:'text'}},{T:1,N:'w2:key',A:{id:'jdgAmt',name:'감정금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cstmdtAmt',name:'관세금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellItemCd',name:'매출코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commSeq',name:'품명순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellLodeptCd',name:'매출귀속',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_appendBl_con',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemNm',name:'매출항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'매출단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'총합계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrowDdCnt',name:'경과일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'freeday',name:'FREEDAY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jdgAmt',name:'감정금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmdtAmt',name:'관세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'매출순번',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_blNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라미터1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'파라미터2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'파라미터3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'파라미터4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_BlNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/ds.as.cstmrsrvc.coafmgnt.RetrieveBookingNumberTrackingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Retrieve","key":"IN_DS1"},{"id":"ds_BookingNumber","key":"OUT_DS1"},{"id":"ds_BookingNumberBulkContainer","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_BookingNumber","key":"OUT_DS1"},{"id":"ds_BookingNumberBulkContainer","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve2',action:'/ds.as.cstmrsrvc.coafmgnt.RetrieveBlEachAmtInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Retrieve2","key":"IN_DS1"},{"id":"ds_BookingEachAmtInformation","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_BookingEachAmtInformation","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Retrieve2_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_appendSellItem_retrieve',action:'/ds.sd.odrmgnt.odroutintend.RetrieveBlContainerSellingItemCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_appendSellItem_con","key":"IN_DS1"},{"id":"ds_appendBl_con","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_appendBl_con","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_appendSellItem_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveBlNo',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_blNo',target:'data:json,{"id":"ds_BlNo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveBlNo_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  acb_cargoClsCd.setSelectedIndex(0);
  scwin.f_Setting();
  $c.data.setPopupTitle($p, "수입화물 비용확인");

  // 테스트 데이터 
  //ed_cntrNo.setValue("DKOU2402413");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  if (!$c.gus.cfIsNull($p, ed_blNo.getValue()) || !$c.gus.cfIsNull($p, ed_cntrNo.getValue())) {
    dma_Retrieve.set("odrKndCd", "C1");
    $c.sbm.execute($p, sbm_Retrieve);
  } else {
    $c.win.alert($p, "BL_NO나 컨테이너 번호를 입력하십시오.");
  }
};

//-------------------------------------------------------------------------
// BL번호 조회
//-------------------------------------------------------------------------
scwin.getBlNo = function () {
  var cntrNo = ed_cntrNo.getValue();

  // SELECT 절
  if ("" == cntrNo) {
    $c.win.alert($p, "컨테이너 번호를 입력하세요.");
    return false;
  }
  var param1 = " BL_NO AS COL1 " + ",'' AS COL2 " + ",'' AS COL3 " + ",'' AS COL4 " + ",'' AS COL5 " + ",'' AS COL6 " + ",'' AS COL7 " + ",'' AS COL8 " + ",'' AS COL9 " + ",'' AS COL10 ";

  // 대상테이블
  var param2 = " TB_SD404 ";

  // 조건절
  var param3 = " AND 1=1 " + " AND CNTR_NO = '" + cntrNo + "'" + " AND MGNT_CLS_YN = 1 " + " AND ROWNUM = 1 ";

  // 정렬
  var param4 = " COL1 ";
  dma_blNo.set("sysCd", "CommonEBC");
  dma_blNo.set("queryId", "dinymicQueryTest");
  dma_blNo.set("param1", param1);
  dma_blNo.set("param2", param2);
  dma_blNo.set("param3", param3);
  dma_blNo.set("param4", param4);
  $c.sbm.execute($p, sbm_RetrieveBlNo);
};

//-------------------------------------------------------------------------
// 출하지시 오더 정보 화면에 셋팅
//-------------------------------------------------------------------------
scwin.f_settingContainerInfo = function (type) {
  if (type == '1') {
    tbx_vsslNm.setValue(ds_BookingNumber.getCellData(0, "vsslNm")); //모선
    tbx_portcnt.setValue(ds_BookingNumber.getCellData(0, "portcnt")); //항차
    tbx_lineNm.setValue(ds_BookingNumber.getCellData(0, "lineNm")); //LINE
    tbx_berthNm.setValue(ds_BookingNumber.getCellData(0, "berthNm")); // 양하항선석

    if (!$c.gus.cfIsNull($p, ds_BookingNumber.getCellData(0, "arrvlportDtm"))) tbx_arrvlportDtm.setValue(ds_BookingNumber.getCellData(0, "arrvlportDtm").toDate("YYYYMMDDHHmmss").format("YYYY/MM/DD HH:mm:ss")); // 양하일시

    tbx_booking2.setValue(ds_BookingNumber.getCellData(0, "blNo")); // 내용
  } else {
    tbx_vsslNm.setValue(""); //모선
    tbx_portcnt.setValue(""); //항차
    tbx_lineNm.setValue(""); //LINE
    tbx_berthNm.setValue(""); // 양하항선석
    tbx_arrvlportDtm.setValue(""); // 양하일시
    tbx_booking.setValue("");
    tbx_booking2.setValue("");
  }
};
scwin.f_ChkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  //값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    scwin.f_setLine();
    return;
  }

  //짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  //검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  //inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_OpenCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    //inObj가 코드명 필드일 경우 팝업
    scwin.f_OpenCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_OpenCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면
  switch (disGubun) {
    case 3:
      // 선사 팝업
      rtnList = cfCommonPopUp('retrieveClntInfo' // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , 'SHP' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "선사,선사코드,선사명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      $c.gus.cfSetReturnValue($p, rtnList, ed_shpCo, txt_shpCoNm);
      scwin.f_setLine();
      break;
  }
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_runExcel = async function (gubun) {
  debugger;
  var totCnt = 0;
  var sheetTitle = "BOOKING/BL번호추적정보";
  if (gubun == "1") {
    totCnt = ds_BookingNumberBulkContainer.getRowCount();
  } else {
    totCnt = ds_BookingEachAmtInformation.getRowCount();
  }
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: sheetTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
        ,

        sheetName: sheetTitle //엑셀내 시트명 지정필요시
      };
      if (gubun == "1") {
        $c.data.downloadGridViewExcel($p, gr_BookingNumberEachContainerInformation, options);
      } else {
        $c.data.downloadGridViewExcel($p, gr_BookingEachAmtInformation, options);
      }
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_retrieve, null);
};

//-------------------------------------------------------------------------
// Grid내역 표시여부 Setting
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  if (acb_cargoClsCd.getValue() == "01") {
    $c.gus.cfEnableObj($p, ed_cntrNo, true);
    ed_cntrNo.setValue("");
    ds_BookingNumberBulkContainer.setJSON([]);
    ds_BookingNumber.setJSON([]);
  }
  /* TOBE 화물구분에 컨테이너만 있음
  else if (acb_cargoClsCd.getValue() == "02") {
      container1.style.display = "none";
      container2.style.display = "none";
      bulk1.style.display = "inline";
      bulk2.style.display = "inline";
      $c.gus.cfEnableObj(ed_cntrNo, false);
      ed_cntrNo.setValue = "";
      ds_BookingNumberBulkContainer.removeAll();
      ds_BookingNumber.removeAll();
  }
  */
};

//-------------------------------------------------------------------------
// 경과보관료 계산
//-------------------------------------------------------------------------
scwin.f_amt = async function () {
  if (ds_BookingNumberBulkContainer.getRowCount() == 0) {
    $c.win.alert($p, "컨테이너 정보를 조회 한 후 BL금액을 계산하길 바랍니다.");
    return false;
  }

  //ljw 추가
  $c.gus.setValidExp($p, ed_outIntendHh, "출고예정시간:yes:date=HHmm&length=4");

  // let ret = await $c.gus.cfValidate([ica_outIntendDt, ed_outIntendHh])
  let ret = await $c.gus.cfValidate($p, [ica_outIntendDt, ed_outIntendHh], null, true); //ljw 수정

  if (!ret) return false;
  ret = await $c.date.isDate($p, ica_outIntendDt.getValue());
  if (!ret) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_018, ["출고예정일"]); //은(는) 유효한 날자가 아님니다.
    ed_vehclStDt.focus();
    return;
  }
  dma_appendSellItem_con.set("bilgLodeptCd", "6C00");
  dma_appendSellItem_con.set("jdgAmt", "0");
  dma_appendSellItem_con.set("cstmdtAmt", "0");
  dma_appendSellItem_con.set("outIntendDt", ica_outIntendDt.getValue());
  dma_appendSellItem_con.set("outIntendHh", ed_outIntendHh.getValue());
  dma_appendSellItem_con.set("blNo", ds_BookingNumber.getCellData(0, "blNo"));
  dma_appendSellItem_con.set("cntrNo", ds_BookingNumberBulkContainer.getCellData(ds_BookingNumberBulkContainer.getRowPosition(), "cntrNo"));
  $c.sbm.execute($p, sbm_appendSellItem_retrieve);
};
scwin.f_settingAmt = function () {
  var features = "copyHeader=yes,rowFrom=0,rowCnt=" + ds_appendBl_con.getRowCount();
  $c.gus.cfCopyDataSet($p, ds_appendBl_con, ds_BookingEachAmtInformation, features);
};

//-------------------------------------------------------------------------
// 그리드 체크박스 선택된 ROW 카운트
//-------------------------------------------------------------------------
scwin.f_countSelected = function () {
  var cnt = 0;
  for (var i = 0; i < ds_BookingEachAmtInformation.getRowCount(); i++) {
    if (ds_BookingEachAmtInformation.getCellData(i, "chk") == true) {
      cnt++;
    }
  }
  return cnt;
};

//-------------------------------------------------------------------------
// 프린트
//-------------------------------------------------------------------------
scwin.f_print = function () {
  if ($c.gus.cfIsNull($p, ds_BookingNumber.getCellData(0, "blNo")) && $c.gus.cfIsNull($p, ds_BookingNumberBulkContainer.getCellData(ds_BookingNumberBulkContainer.getRowPosition(), "cntrNo"))) {
    $c.win.alert($p, "BL_NO나 컨테이너 번호를 입력하십시오.");
    return;
  }
  if (scwin.f_countSelected() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["금액 정보"]);
    return false;
  }
  var blNo = ds_BookingNumber.getCellData(0, "blNo");
  var cntrNo = "";

  //조회 조건에 컨테이너 넣고 조회했을 경우에만 해당 컨테이너만 조회되도록 함
  if (!$c.gus.cfIsNull($p, ed_cntrNo.getValue())) {
    cntrNo = ds_BookingNumberBulkContainer.getCellData(ds_BookingNumberBulkContainer.getRowPosition(), "cntrNo");
  }
  var cond = "";
  var cond2 = "";
  var sellSeq = "";
  for (var i = 0; i < ds_BookingEachAmtInformation.getRowCount(); i++) {
    if (ds_BookingEachAmtInformation.getCellData(i, "chk") == "1") {
      if (ds_BookingEachAmtInformation.getCellData(i, "sellSeq") == "0") {
        cond2 += ds_BookingEachAmtInformation.getCellData(i, "odrNo");
        cond2 += ds_BookingEachAmtInformation.getCellData(i, "sellCommNo");
        cond2 += ds_BookingEachAmtInformation.getCellData(i, "sellItemCd");
      } else {
        cond += ds_BookingEachAmtInformation.getCellData(i, "odrNo");
        sellSeq = ds_BookingEachAmtInformation.getCellData(i, "sellSeq");
        if (sellSeq.length == 1) {
          sellSeq = "00" + sellSeq;
        } else if (sellSeq.length == 2) {
          sellSeq = "0" + sellSeq;
        }
        cond += sellSeq;
      }
    }
  }
  var ozMode = "";
  if (cbx_printCheck.getValue() == "1" && cbx_previewCheck.getValue() == "1") {
    // 인쇄옵션, 미리보기 둘다 체크된 경우
    ozMode = "preview";
  } else if (cbx_printCheck.getValue() == "1") {
    // 인쇄옵션만 체크된 경우
    ozMode = "print";
  } else if (cbx_previewCheck.getValue() == "1") {
    // 미리보기만 체크된 경우
    ozMode = "preview";
  }
  var data = {
    reportName: "/ds/as/as_102_01_04_01.ozr",
    odiParam: {
      blNo: blNo,
      cntrNo: cntrNo,
      cond: cond,
      cond2: cond2
    },
    viewerParam: {
      useprogressbar: true,
      // 프로그레스바 쓸지 말지
      zoom: 100,
      // 배율 설정
      mode: ozMode
    },
    formParam: {}
  };
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
// 오즈 리포트 팝업
//------------------------------------------------------------------------- 
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
// 대문자 입력
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_Retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_BookingNumber.getRowCount() < 1) {
    ds_BookingNumberBulkContainer.setJSON([]);
    ds_BookingEachAmtInformation.setJSON([]);
  }
  tbx_totalRows1.setValue(ds_BookingNumberBulkContainer.getRowCount());
  scwin.f_settingContainerInfo("1");
  if (ds_BookingNumberBulkContainer.getRowCount() > 0) {
    gr_BookingNumberEachContainerInformation.setFocusedCell(0, "cntrNo", false);
    dma_Retrieve2.set("blNo", ds_BookingNumber.getCellData(0, "blNo"));

    //조회 조건에 컨테이너 넣고 조회했을 경우에만 해당 컨테이너만 조회되도록 함
    if (!$c.gus.cfIsNull($p, ed_cntrNo.getValue())) {
      dma_Retrieve2.set("cntrNo", ds_BookingNumberBulkContainer.getCellData(ds_BookingNumberBulkContainer.getRowPosition(), "cntrNo"));
    } else {
      dma_Retrieve2.set("cntrNo", "");
    }
    $c.sbm.execute($p, sbm_Retrieve2);
  } else {
    ds_BookingEachAmtInformation.setJSON([]);
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 조회2 submitdone
//-------------------------------------------------------------------------
scwin.sbm_Retrieve2_submitdone = function (e) {};

//-------------------------------------------------------------------------
// 매출항목조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_appendSellItem_retrieve_submitdone = function (e) {
  scwin.f_settingAmt();
};

//-------------------------------------------------------------------------
// BL조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_RetrieveBlNo_submitdone = function (e) {
  if (ds_BlNo.getRowCount() == 0) {
    ed_blNo.setValue("");
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  } else {
    ed_blNo.setValue(ds_BlNo.getCellData(0, "col1"));
    return;
  }
};

//-------------------------------------------------------------------------
// 컨테이너 정보 그리드 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.downExcel1 = function () {
  scwin.f_runExcel("1");
};

//-------------------------------------------------------------------------
// BL금액 정보 그리드 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.downExcel2 = function () {
  scwin.f_runExcel("2");
};

//-------------------------------------------------------------------------
// 컨테이너 정보 그리드 클릭 이벤트
//-------------------------------------------------------------------------
scwin.gr_BookingNumberEachContainerInformation_oncellclick = function (rowIndex, columnIndex, columnId) {
  console.log("셀 클릭 이벤트 발생");
  // 클릭 이벤트 로직 실행
  console.log("dma_Retrieve.cntrNo", dma_Retrieve.get("cntrNo"));
  if (!$c.gus.cfIsNull($p, ed_cntrNo.getValue())) {
    dma_Retrieve2.set("cntrNo", ds_BookingNumberBulkContainer.getCellData(ds_BookingNumberBulkContainer.getRowPosition(), "cntrNo"));
  } else {
    dma_Retrieve2.set("cntrNo", "");
  }
  $c.sbm.execute($p, sbm_Retrieve2); //ljw 컴멘트 풀어줌
};

//-------------------------------------------------------------------------
// 컨테이너 정보 그리드 더블 클릭 이벤트
//-------------------------------------------------------------------------
scwin.gr_BookingNumberEachContainerInformation_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  console.log("더블 클릭 이벤트 발생");
  console.log("columnId::", columnId);
  console.log("rowIndex::", rowIndex);
  console.log("ds_BookingNumberBulkContainer.getCellData:cntrNo:", ds_BookingNumberBulkContainer.getCellData(rowIndex, "cntrNo"));
  debugger;

  // 더블 클릭 이벤트 로직 실행
  if (columnId == "cntrNo") {
    var cntrNo = ds_BookingNumberBulkContainer.getCellData(rowIndex, "cntrNo"); // 컨테이너 번호
    var strUrl = "/ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_02b.xml";
    var pgmId = "as_102_01_02b.jsp";
    var paramObj = {
      cntrNo: cntrNo,
      openAction: "exist"
    };
    $c.win.openMenu($p, "컨테이너화물추적", strUrl, pgmId, paramObj);
  }
};

//-------------------------------------------------------------------------
// 컨테이너 정보 그리드 : 확정구분 컬럼 displayFormatter
//-------------------------------------------------------------------------
scwin.dcsnClsCdExp = function (data) {
  return $c.gus.decode($p, data, "전표확정", "정산완료", "미생성", "미생성", "미정산");
};

//-------------------------------------------------------------------------
// 컨테이너 정보 그리드 : 경과일수 컬럼 displayFormatter(displayFormat와 충돌하여 제외)
//-------------------------------------------------------------------------
scwin.arrowDdCntExp = function (data) {
  return $c.gus.decode($p, data, 0, "", data);
};

//-------------------------------------------------------------------------
// 컨테이너 정보 그리드 : 출고예정일 컬럼 displayFormatter
//-------------------------------------------------------------------------
scwin.wrkEndDtExp = function (data) {
  return $c.gus.decode($p, data, 0, "", $c.date.formatDateTime($p, data, "yyyy/MM/dd"));
};
scwin.ds_BookingEachAmtInformation_ondataload = function () {
  console.log("ds_BookingEachAmtInformation_ondataload");
  tbx_totalRows2.setValue(ds_BookingEachAmtInformation.getRowCount());
  var dcsnClsCd = "";
  for (var i = 0; i < ds_BookingEachAmtInformation.getRowCount(); i++) {
    var dcsnClsCd = ds_BookingEachAmtInformation.getCellData(i, "dcsnClsCd");
    if (dcsnClsCd == "미생성") {
      gr_BookingEachAmtInformation.setCellStyle(i, "dcsnClsCd", "color", "red");
    } else {
      gr_BookingEachAmtInformation.setCellStyle(i, "dcsnClsCd", "color", "black");
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cargoClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_Retrieve.cargoClsCd',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BL번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_blNo',placeholder:'',style:'width:150px;','ev:onkeyup':'scwin.onkeyup',maxlength:'20',allowChar:'a-zA-Z0-9',ref:'data:dma_Retrieve.blNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',placeholder:'',style:'width:150px;',maxlength:'11',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.onkeyup',ref:'data:dma_Retrieve.cntrNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BL번호확인',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_blNo',style:'',type:'button','ev:onclick':'scwin.getBlNo'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'선박 정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'모선',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_vsslNm',label:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'항차',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_portcnt',label:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'LINE',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_lineNm',label:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'양하항선석',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_berthNm',label:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'양하일시',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_arrvlportDtm',label:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_booking',label:'BL',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_booking2',label:'',style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'컨테이너 정보 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_BookingNumberEachContainerInformation',gridDownUserAuth:'X',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.downExcel1'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox gvwfix'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',dataList:'data:ds_BookingNumberBulkContainer',style:'',autoFit:'none',id:'gr_BookingNumberEachContainerInformation',visibleRowNum:'3',class:'wq_gvw','ev:oncelldblclick':'scwin.gr_BookingNumberEachContainerInformation_oncelldblclick',readOnly:'true','ev:oncellclick':'scwin.gr_BookingNumberEachContainerInformation_oncellclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column1',value:'컨테이너',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'SIZE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'TYPE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'F/E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column11',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column9',value:'현재위치',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'반입일',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'cntrNo',displayMode:'label',class:'underline'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrSizCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrTypCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'fullEmptyClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'wt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.##0',excelFormat:'#,###.##0'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'currPosNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'125',inputType:'text',id:'cntrRetrvDt',displayMode:'label',displayFormat:'####/##/##'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'BL금액 정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_BookingEachAmtInformation',gridDownUserAuth:'X',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.downExcel2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_BookingEachAmtInformation',id:'gr_BookingEachAmtInformation',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',fixColumnWidth:'true',value:' '}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column58',value:'BL번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column61',value:'청구 거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'청구거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'매출 항목코드',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'컨테이너번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'매출항목명',width:'130'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column70',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'단가',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'금액',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'통화코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'확정구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'경과일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'출고예정일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'감정가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'관세가',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',fixColumnWidth:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'blNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'bilgClntNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bilgClntNm',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellItemCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellCommNo',inputType:'text',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellItemNm',inputType:'text',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellUpr',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sumAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crcCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcsnClsCd',displayMode:'label',displayFormatter:'scwin.dcsnClsCdExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arrowDdCnt',displayMode:'label',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkEndDt',displayMode:'label',displayFormatter:'scwin.wrkEndDtExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'jdgAmt',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cstmdtAmt',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'sellAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column57',displayMode:'label',textAlign:'right',expression:'sum(\'vatAmt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column54',displayMode:'label',textAlign:'right',expression:'sum(\'sumAmt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120.00px;'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 70px;',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'경과보관료 계산',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req bold',id:'',label:'출고예정일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_outIntendDt',pickerType:'dynamic',style:'',mandatory:'true',title:'출고예정일자',calendarDisplayFormat:'yyyy/MM/dd',displayFormat:'yyyy/MM/dd'}},{T:1,N:'xf:input',A:{class:'tac',dataType:'time',id:'ed_outIntendHh',style:'width: 50px;',mandatory:'true',title:'출고예정시간',allowChar:'0-9',maxlength:'4'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_CntrSellingItem',style:'',type:'button','ev:onclick':'scwin.f_amt',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'계산하기'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'list-box'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'보관료 확인시 출고예정일 입력 후 계산하기 버튼을 누르세요!',class:'txt-dot txt-red mb8',escape:'false'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'1. 담당자/연락처 : 정다영 (Tel.051-630-3636)',class:'txt-blue',escape:'false'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'2. 납부방법 : 합계(부가세 포함) 금액 입금 [외환은행 630-005118-137 동원로엑스]',class:'txt-blue',escape:'false'}},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'',label:'3. 이체증에 계산서 발행할 사업자등록번호 & E-Mail 기재하신 후, FAX 보내 주십시오. (FAX. 051-461-0953, 051-630-3705)',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'0',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_OutIndication',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_print'},E:[{T:1,N:'xf:label',E:[{T:3,text:'인쇄'}]}]}]}]}]}]}]}]}]})