/*amd /ui/ds/op/adjmbd/wageadjmproc/op_403_01_09b.xml 37710 dd00e01e61c113f607f396026d3885ca9eb57b95b04b3c16a97a03203740e340 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_conversionUnitQueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'districtCd',name:'권역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'goodsCd',name:'품목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wageAgrmntDt',name:'노임협약일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'적용일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_conversionUnitDTOList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'districtCd',name:'권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goodsCd',name:'품목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goodsNm',name:'품목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptUnitCls',name:'적용단위구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptStDt',name:'적용시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptEndDt',name:'적용종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'basisVal',name:'기본',dataType:'number',defaultValue:'1'}},{T:1,N:'w2:column',A:{id:'basisUnit',name:'기본단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnvrsnVal',name:'환산',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cnvrsnUnit',name:'환산단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wageAgrmntDt',name:'노임협약일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranClsCd',name:'물류점소구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'상위물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wageAgrmntDt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dataList2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_wageCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_conversionUnitQueryCondition',action:'/ds.op.adjmbd.wageadjmproc.RetrieveStevedoringWagesConversionUnitCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_conversionUnitQueryCondition","key":"IN_DS1"},{"id":"ds_conversionUnitDTOList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_conversionUnitDTOList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_conversionUnitQueryCondition_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveConversionUnitDTOList',action:'/ds.op.adjmbd.wageadjmproc.SaveStevedoringWagesConversionUnitCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_conversionUnitDTOList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveConversionUnitDTOList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_wageAgrmntDt',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_wageCondition","key":"IN_DS1"}',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:'','ev:submitdone':'scwin.sbm_wageAgrmntDt_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.districtCd = "";
scwin.loUpperLobranCd = "";
scwin.loUpperLobranNm = "";
scwin.gubun = 0; // 중복 체크 flag
scwin.button = ""; // 버튼 체크 flag
scwin.selVal = ""; // 협약일자 선택 값

scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.districtCd = memJson.districtCd; // 권역
  scwin.loUpperLobranCd = memJson.loUpperLobranCd;
  scwin.loUpperLobranNm = memJson.loUpperLobranNm;
  const codeOptions = [{
    grpCd: "OP279",
    compID: "gr_conversionUnitDTOList:adptUnitCls"
  }, {
    grpCd: "LO102",
    compID: "gr_conversionUnitDTOList:basisUnit",
    opt: {
      "range": "2,L"
    }
  }, {
    grpCd: "LO102",
    compID: "gr_conversionUnitDTOList:cnvrsnUnit",
    opt: {
      "range": "2,L"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
  const codeOptions2 = [{
    method: "getLuxeComboData",
    param1: "GoodsSurchargeWorkStepEBC",
    param2: "retriveDistrictCodeList",
    //param3: ["CMP"],
    compID: "lc_districtCd"
  }];
  $c.data.setGauceUtil($p, codeOptions2);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    scwin.f_RetrieveWageAgrmntDt();
    scwin.f_SetDefaultData();
    ///임시
    //lc_districtCd.setValue("WPA");
    ///
  }, {
    "delay": 100
  });
};
scwin.f_RetrieveWageAgrmntDt = function () {
  const params = {
    sysCd: "StevedoringWagesConversionUnitEBC",
    queryId: "retriveWageAgrmntDtList"
    //param1 : "" ,
  };

  //데이터셋에 정보설정
  dma_wageCondition.setJSON(params);
  $c.sbm.execute($p, sbm_wageAgrmntDt);
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  //lc_districtCd.MaxLength = "3";
  lc_districtCd.setSelectedIndex(1); // 권역코드
  var districtCd = scwin.districtCd;
  lc_districtCd.setValue(districtCd);
  //lc_wageAgrmntDt.MaxLength = "8";
  lc_wageAgrmntDt.setSelectedIndex(0); // 노임협약일자
  //cfSetIMEModeActiveObjects([txt_goodsNm]);  // IME 한글입력
  $c.gus.cfDisableObjects($p, [udc_row]);
  lc_districtCd.focus();
};

//-------------------------------------------------------------------------
// 하역노임환산단위 조회
//-------------------------------------------------------------------------
scwin.f_StevedoringWagesConversionUnitDTOList = async function () {
  var chk = await $c.gus.cfValidate($p, [lc_districtCd]);
  if (!chk) {
    return;
  }
  //tr_conversionUnitQueryCondition.post();
  $c.sbm.execute($p, sbm_conversionUnitQueryCondition);
};

//-------------------------------------------------------------------------
// 그리드 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  // 행추가시 권역코드, 노임협약일자는 검색조건의 데이타 세팅하고, 적용종료일은 9999/99/99로 초기값 세팅
  ds_conversionUnitDTOList.insertRow();
  gr_conversionUnitDTOList.setFocusedCell(ds_conversionUnitDTOList.getRowCount() - 1, 0);
  ds_conversionUnitDTOList.setCellData(ds_conversionUnitDTOList.getRowPosition(), "districtCd", lc_districtCd.getValue()); // 권역코드    	
  ds_conversionUnitDTOList.setCellData(ds_conversionUnitDTOList.getRowPosition(), "adptEndDt", "99999999"); // 적용종료일자
  /*
  ds_conversionUnitDTOList.setCellData( ds_conversionUnitDTOList.getRowPosition(), "basisVal", 1);  //  
  ds_conversionUnitDTOList.setCellData( ds_conversionUnitDTOList.getRowPosition(), "cnvrsnVal", 0);  //
  */
};

//-------------------------------------------------------------------------
// 그리드 취소
//-------------------------------------------------------------------------
scwin.f_CancelRow = function () {
  if (ds_conversionUnitDTOList.getRowStatus(ds_conversionUnitDTOList.getRowPosition()) == "C") {
    ds_conversionUnitDTOList.removeRow(ds_conversionUnitDTOList.getRowPosition());
  } else {
    ds_conversionUnitDTOList.undoRow(ds_conversionUnitDTOList.getRowPosition());
  }
};

//-------------------------------------------------------------------------
// 하역노임환산단위 저장
//-------------------------------------------------------------------------
scwin.f_SaveDailyUseTariffList = async function () {
  scwin.button = "SAVE";

  // Data 변경 여부 조회
  if (ds_conversionUnitDTOList.getModifiedIndex().length < 1) {
    //$c.win.alert(MSG_CM_ERR_001, ["자료"]);
    $c.win.alert($p, "자료은(는) 변경된 사항이 없습니다.");
    return;
  }

  // 하역노임환산단위 Grid 체크
  var chkGrid = await $c.gus.cfValidate($p, [gr_conversionUnitDTOList]);
  if (!chkGrid) {
    return;
  }
  for (var i = 0; i < ds_conversionUnitDTOList.getRowCount(); i++) {
    for (var j = 0; j < ds_conversionUnitDTOList.getTotalCol(); j++) {
      var colid = ds_conversionUnitDTOList.getColumnID(j);
      if (colid == "goodsCd") {
        // 품명				
        if (ds_conversionUnitDTOList.getCellData(i, "goodsCd") == "") {
          $c.win.alert($p, "선택된 품명이(가) 없습니다."); //선택된 @이(가) 없습니다.
          ds_conversionUnitDTOList.setRowPosition(i);
          gr_conversionUnitDTOList.setFocusedCell(i, "goodsCd");
          return;
        }
      }
      if (colid == "wageAgrmntDt") {
        // 노임협약일자
        //var chkDate = await $c.gus.cfValidateValue(ds_conversionUnitDTOList.getCellData(i, "wageAgrmntDt"), "date=YYYYMMDD");
        var chkDate = $c.date.isDate($p, ds_conversionUnitDTOList.getCellData(i, "wageAgrmntDt"));
        if (!chkDate) {
          $c.win.alert($p, "노임협약일자은(는) 유효한 날자가 아닙니다."); //은(는) 유효한 날자가 아님니다.
          ds_conversionUnitDTOList.setRowPosition(i);
          gr_conversionUnitDTOList.setFocusedCell(i, "wageAgrmntDt");
          return;
        }
      }
      if (colid == "adptStDt") {
        // 적용시작일
        //var chkDate2 = await $c.gus.cfValidateValue(ds_conversionUnitDTOList.getCellData(i, "adptStDt"), "date=YYYYMMDD");                
        var chkDate2 = $c.date.isDate($p, ds_conversionUnitDTOList.getCellData(i, "adptStDt"));
        if (!chkDate2) {
          $c.win.alert($p, "적용시작일은(는) 유효한 날자가 아닙니다."); //은(는) 유효한 날자가 아님니다.
          ds_conversionUnitDTOList.setRowPosition(i);
          gr_conversionUnitDTOList.setFocusedCell(i, "adptStDt");
          return;
        }
      }
      if (colid == "adptEndDt" && ds_conversionUnitDTOList.getCellData(i, "adptEndDt") != "99999999") {
        // 적용종료일
        //var chkDate3 = await $c.gus.cfValidateValue(ds_conversionUnitDTOList.getCellData(i, "adptEndDt"), "date=YYYYMMDD");
        var chkDate3 = $c.date.isDate($p, ds_conversionUnitDTOList.getCellData(i, "adptEndDt"));
        if (!chkDate3) {
          $c.win.alert($p, "적용종료일은(는) 유효한 날자가 아닙니다."); //은(는) 유효한 날자가 아님니다.
          ds_conversionUnitDTOList.setRowPosition(i);
          gr_conversionUnitDTOList.setFocusedCell(i, "adptEndDt");
          return;
        }
      }
    }
  }

  // 적용기간 from ~ to 체크
  for (var i = 0; i < ds_conversionUnitDTOList.getRowCount(); i++) {
    var goodsCd = ds_conversionUnitDTOList.getCellData(i, "goodsCd");
    var adptStDt = ds_conversionUnitDTOList.getCellData(i, "adptStDt");
    var adptEndDt = ds_conversionUnitDTOList.getCellData(i, "adptEndDt");
    var chkDate4 = await $c.gus.cfIsAfterDate($p, adptStDt, adptEndDt);
    if (!chkDate4) {
      $c.win.alert($p, "시작일자가 종료일자 이전이어야 합니다."); // 시작일자가 종료일자 이전이어야 합니다.
      ds_conversionUnitDTOList.setRowPosition(i);
      gr_conversionUnitDTOList.setFocusedCell(i, "adptEndDt");
      return;
    }
  }

  // 적용기간 중복 체크
  await scwin.f_CheckFlag(ds_conversionUnitDTOList.getRowPosition());
  if (scwin.gubun != 1) {
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      // 저장하시겠습니까?
      scwin.selVal = lc_wageAgrmntDt.getValue();
      //tr_saveConversionUnitDTOList.Post();
      $c.sbm.execute($p, sbm_saveConversionUnitDTOList);
    }
  } else {
    $c.win.alert($p, "적용기간은(는) 중복될 수 없습니다."); // @은(는) 중복될 수 없습니다.
  }
};

//-------------------------------------------------------------------------
// 적용기간 중복 체크
//-------------------------------------------------------------------------	
scwin.f_CheckFlag = async function (row) {
  //var chkDate = await $c.gus.cfValidateValue(ds_conversionUnitDTOList.getCellData(row, "adptStDt"), "date=YYYYMMDD");
  //var chkDate = ds_conversionUnitDTOList.getCellData(i, "adptStDt").length;
  var chkDate = $c.date.isDate($p, ds_conversionUnitDTOList.getCellData(row, "adptStDt"));
  if (chkDate) {
    var nowDuseCd = ds_conversionUnitDTOList.getCellData(row, "goodsCd");
    var nowAdptUnitCls = ds_conversionUnitDTOList.getCellData(row, "adptUnitCls");
    var nowAdptStDt = ds_conversionUnitDTOList.getCellData(row, "adptStDt");
    var nowAdptEndDt = ds_conversionUnitDTOList.getCellData(row, "adptEndDt");
    for (var i = 0; i < ds_conversionUnitDTOList.getRowCount(); i++) {
      if (row != i) {
        var goodsCd = ds_conversionUnitDTOList.getCellData(i, "goodsCd");
        var adptUnitCls = ds_conversionUnitDTOList.getCellData(i, "adptUnitCls");
        var adptStDt = ds_conversionUnitDTOList.getCellData(i, "adptStDt");
        var adptEndDt = ds_conversionUnitDTOList.getCellData(i, "adptEndDt");
        console.log("nowDuseCd  : " + nowDuseCd + "  goodsCd : " + goodsCd);
        console.log("nowAdptUnitCls  : " + nowAdptUnitCls + "  adptUnitCls : " + adptUnitCls);
        if (nowDuseCd == goodsCd && nowAdptUnitCls == adptUnitCls) {
          var chkDate2 = await scwin.f_IsAfterDate(nowAdptStDt, nowAdptEndDt, adptStDt, adptEndDt);
          if (!chkDate2) {
            if (scwin.button != "SAVE") {
              $c.win.alert($p, "적용기간은(는) 중복될 수 없습니다."); // @은(는) 중복될 수 없습니다.
            }
            scwin.gubun = 1;
            return;
          }
          scwin.gubun = 0;
        } else {
          scwin.gubun = 0;
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
// 비가용기간 중복  체크 함수(등록적용시작일, 등록적용종료일, 기존적용시작일, 기존적용종료일)
//-------------------------------------------------------------------------
scwin.f_IsAfterDate = async function (nowStart, nowEnd, compDate1, compDate2) {
  var nowStart = nowStart.toDate("YYYYMMDD");
  var nowEnd = nowEnd.toDate("YYYYMMDD");
  var compDate1 = compDate1.toDate("YYYYMMDD");
  var compDate2 = compDate2.toDate("YYYYMMDD");
  if (compDate1 <= nowStart && compDate2 > nowStart) {
    return false;
  }
  if (compDate1 < nowEnd && compDate2 > nowEnd) {
    return false;
  }
  if ((compDate1 > nowStart || compDate2 >= nowStart) && (compDate1 <= nowEnd || compDate2 < nowEnd)) {
    return false;
  }
  if (compDate1 > nowEnd && compDate2 < nowEnd) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 그리드의 품목 PopUp
//-------------------------------------------------------------------------	
scwin.f_GoodsCdPopup = function (pClose) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 
  var pCode = "";
  var pName = "";

  // 품목 코드를 가져온다			
  pCode = ds_conversionUnitDTOList.getCellData(ds_conversionUnitDTOList.getRowPosition(), "goodsCd");

  // 품목 PopUp 호출
  udc_goodsCd.cfCommonPopUp(scwin.callbackCommGoodsInfo, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, 'T', null);
  /*
      if (rtnList != null && rtnList[0] != "") {
          //return value Assign
          ds_conversionUnitDTOList.setCellData(ds_conversionUnitDTOList.getRowPosition(), "goodsCd", rtnList[0]);  // 품목코드
          ds_conversionUnitDTOList.setCellData(ds_conversionUnitDTOList.getRowPosition(), "goodsNm", rtnList[1]);  // 품목명					
      } else {
          ds_conversionUnitDTOList.setCellData(ds_conversionUnitDTOList.getRowPosition(), "goodsCd", "");
          ds_conversionUnitDTOList.setCellData(ds_conversionUnitDTOList.getRowPosition(), "goodsNm", "");
      }
  */
};
scwin.callbackCommGoodsInfo = function (rtnList) {
  if (rtnList != null && rtnList[0] != "" && rtnList != "N/A") {
    //return value Assign
    ds_conversionUnitDTOList.setCellData(ds_conversionUnitDTOList.getRowPosition(), "goodsCd", rtnList[0]); // 품목코드
    ds_conversionUnitDTOList.setCellData(ds_conversionUnitDTOList.getRowPosition(), "goodsNm", rtnList[1]); // 품목명					
  } else {
    ds_conversionUnitDTOList.setCellData(ds_conversionUnitDTOList.getRowPosition(), "goodsCd", "");
    ds_conversionUnitDTOList.setCellData(ds_conversionUnitDTOList.getRowPosition(), "goodsNm", "");
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      // 품목/품명 팝업			
      udc_goodsCd.cfCommonPopUp(scwin.callbackCommGoodsInfo2, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //cfSetReturnValue(rtnList, ed_goodsCd, txt_goodsNm);  // 품목코드, 품목명								
      break;
    default:
      break;
  }
};
scwin.callbackCommGoodsInfo2 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_goodsCd, ed_goodsNm); // 품목코드, 품목명								
};
scwin.sbm_lobran_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    ds_lobran.setJSON(e.responseJSON.GAUCE);
    lc_lobran.setValue(scwin.loUpperLobranCd);
    ///임시
    //lc_lobran.setValue("6AA");
    ///임시
    /*
            var cnt = ds_lobran.getRowCount();
            if(cnt == 0){
                $c.win.alert("점소 자료 조회에 실패하였습니다");
                return;
            } else {
                lc_lobran.setValue(scwin.loUpperLobranCd);
                ed_lodeptCd.setValue(scwin.loUpperLobranCd);
                ed_lodeptNm.setValue(scwin.loUpperLobranNm);
                
            }
    */
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
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 검색영역 Field Clear함.
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  scwin.selVal = "";
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};
scwin.udc_goodsCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_goodsCd.getValue(), ed_goodsNm.getValue(), 'F', 'T');
};
scwin.udc_goodsCd_onviewchangeCodeEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_goodsCd, ed_goodsNm, 1);
  ;
};
scwin.udc_goodsCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_goodsNm, ed_goodsCd, 1, false);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_StevedoringWagesConversionUnitDTOList();
};
scwin.sbm_wageAgrmntDt_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    ds_wageAgrmntDt.setJSON(e.responseJSON.GAUCE);
  }
  lc_wageAgrmntDt.setValue(scwin.selVal);
  scwin.selVal = "";
};
scwin.sbm_conversionUnitQueryCondition_submitdone = function (e) {
  var rowCnt = ds_conversionUnitDTOList.getRowCount();
  $c.gus.cfEnableObjects($p, [udc_row]);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
  }
  spa_cnt.setValue(rowCnt);
};
scwin.sbm_saveConversionUnitDTOList_submitdone = function (e) {
  //$c.sbm.execute(sbm_wageAgrmntDt);
  scwin.f_RetrieveWageAgrmntDt();
  scwin.f_StevedoringWagesConversionUnitDTOList();
  $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
};
scwin.gr_conversionUnitDTOList_ontextimageclick = function (rowIndex, columnIndex) {
  var row = rowIndex;
  var columnId = gr_conversionUnitDTOList.getColumnID(columnIndex);
  switch (columnId) {
    case "goodsCd":
      scwin.f_GoodsCdPopup('T');
      break;
    /*            
            case "wageAgrmntDt":  // 노임협약일자
                cfOpenCalendar(gr_conversionUnitDTOList, row, columnId);
                break;		
            case "adptStDt":  // 적용시작일
                cfOpenCalendar(gr_conversionUnitDTOList, row, columnId);
                break;
            case "adptEndDt":  // 적용종료일
                cfOpenCalendar(gr_conversionUnitDTOList, row, columnId);
                break;
    */
  }
};
scwin.gr_conversionUnitDTOList_onviewchange = function (info) {
  console.log(info);
  var rowIndex = info.rowIndex;
  var columnId = info.colId;
  switch (columnId) {
    case "basisVal":
      console.log(ds_conversionUnitDTOList.getCellData(rowIndex, "basisVal"));
      if (ds_conversionUnitDTOList.getCellData(rowIndex, "basisVal") == "") {
        ds_conversionUnitDTOList.setCellData(rowIndex, "basisVal", 0);
        break;
      }
    case "cnvrsnVal":
      if (ds_conversionUnitDTOList.getCellData(rowIndex, "cnvrsnVal") == "") {
        ds_conversionUnitDTOList.setCellData(rowIndex, "cnvrsnVal", 0);
        break;
      }
    case "goodsCd":
      scwin.f_GoodsCdPopup('T');
      break;
  }
};
scwin.gr_conversionUnitDTOList_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  var row = rowIndex;
  var colid = gr_conversionUnitDTOList.getColumnID(columnIndex);
  scwin.button = "";

  // 품목코드
  if (colid == "goodsCd") {
    //gr_conversionUnitDTOList.UrlImages = SEARCH_BTN;
  }

  // 협약일자, 적용시작일, 적용종료일
  if (colid == "wageAgrmntDt" || colid == "adptStDt" || colid == "adptEndDt") {
    //gr_conversionUnitDTOList.UrlImages = CALENDAR_BTN;
  }

  // 해당 Row의 상태가 insert(1)가 아닌 경우 적용종료일자가 99999999인 경우 가능, 아닌 경우 수정불가
  var adptEndDt = ds_conversionUnitDTOList.getCellData(row, "adptEndDt");
  if (ds_conversionUnitDTOList.getRowStatus(ds_conversionUnitDTOList.getRowPosition()) != "C") {
    //gr_conversionUnitDTOList.ColumnProp('goodsCd', 'Edit') = "None";  // 품명
    gr_conversionUnitDTOList.setColumnReadOnly("goodsCd", true);
    //gr_conversionUnitDTOList.ColumnProp('adptUnitCls', 'Edit') = "None";  // 적용단위
    gr_conversionUnitDTOList.setColumnReadOnly("adptUnitCls", true);
    if (adptEndDt == "99999999") {
      /*
      gr_conversionUnitDTOList.ColumnProp('basisVal', 'Edit') = "Numeric";  // 기본값
      gr_conversionUnitDTOList.ColumnProp('basisUnit', 'Edit') = "Numeric";  // 기본단위
      gr_conversionUnitDTOList.ColumnProp('cnvrsnVal', 'Edit') = "RealNumeric";  // 환산값
      gr_conversionUnitDTOList.ColumnProp('cnvrsnUnit', 'Edit') = "Numeric";  // 환산단위
      gr_conversionUnitDTOList.ColumnProp('adptEndDt', 'Edit') = "Numeric";  // 적용종료일
      */
      gr_conversionUnitDTOList.setColumnReadOnly("basisVal", false); // 기본값
      gr_conversionUnitDTOList.setColumnReadOnly("basisUnit", false); // 기본단위
      gr_conversionUnitDTOList.setColumnReadOnly("cnvrsnVal", false); // 환산값
      gr_conversionUnitDTOList.setColumnReadOnly("cnvrsnUnit", false); // 환산단위
      gr_conversionUnitDTOList.setColumnReadOnly("adptEndDt", false); // 적용종료일
    } else {
      /*
      gr_conversionUnitDTOList.ColumnProp('basisVal', 'Edit') = "None";  // 기본값
      gr_conversionUnitDTOList.ColumnProp('basisUnit', 'Edit') = "None";  // 기본단위
      gr_conversionUnitDTOList.ColumnProp('cnvrsnVal', 'Edit') = "None";  // 환산값
      gr_conversionUnitDTOList.ColumnProp('cnvrsnUnit', 'Edit') = "None";  // 환산단위
      gr_conversionUnitDTOList.ColumnProp('adptEndDt', 'Edit') = "None";  // 적용종료일
      */
      gr_conversionUnitDTOList.setColumnReadOnly("basisVal", true); // 기본값
      gr_conversionUnitDTOList.setColumnReadOnly("basisUnit", true); // 기본단위
      gr_conversionUnitDTOList.setColumnReadOnly("cnvrsnVal", true); // 환산값
      gr_conversionUnitDTOList.setColumnReadOnly("cnvrsnUnit", true); // 환산단위
      gr_conversionUnitDTOList.setColumnReadOnly("adptEndDt", true); // 적용종료일
    }
    /*
    gr_conversionUnitDTOList.ColumnProp('wageAgrmntDt', 'Edit') = "None";  // 협약일자
    gr_conversionUnitDTOList.ColumnProp('adptStDt', 'Edit') = "None";  // 적용시작일
    */
    gr_conversionUnitDTOList.setColumnReadOnly("wageAgrmntDt", true); // 협약일자
    gr_conversionUnitDTOList.setColumnReadOnly("adptStDt", true); // 적용시작일
  } else {
    /*
    gr_conversionUnitDTOList.ColumnProp('goodsCd', 'Edit') = "ANY";  // 품명
    gr_conversionUnitDTOList.ColumnProp('adptUnitCls', 'Edit') = "Numeric";  // 적용단위
    gr_conversionUnitDTOList.ColumnProp('basisVal', 'Edit') = "ANY";  // 기본값
    gr_conversionUnitDTOList.ColumnProp('basisUnit', 'Edit') = "Numeric";  // 기본단위
    gr_conversionUnitDTOList.ColumnProp('cnvrsnVal', 'Edit') = "RealNumeric";  // 환산값
    gr_conversionUnitDTOList.ColumnProp('cnvrsnUnit', 'Edit') = "Numeric";  // 환산단위
    gr_conversionUnitDTOList.ColumnProp('wageAgrmntDt', 'Edit') = "Numeric";  // 협약일자
    gr_conversionUnitDTOList.ColumnProp('adptStDt', 'Edit') = "Numeric";  // 적용시작일			
    gr_conversionUnitDTOList.ColumnProp('adptEndDt', 'Edit') = "Numeric";  // 적용종료일
    */

    gr_conversionUnitDTOList.setColumnReadOnly("goodsCd", false);
    gr_conversionUnitDTOList.setColumnReadOnly("adptUnitCls", false);
    gr_conversionUnitDTOList.setColumnReadOnly("basisVal", false);
    gr_conversionUnitDTOList.setColumnReadOnly("basisUnit", false);
    gr_conversionUnitDTOList.setColumnReadOnly("cnvrsnVal", false);
    gr_conversionUnitDTOList.setColumnReadOnly("cnvrsnUnit", false);
    gr_conversionUnitDTOList.setColumnReadOnly("wageAgrmntDt", false);
    gr_conversionUnitDTOList.setColumnReadOnly("adptStDt", false);
    gr_conversionUnitDTOList.setColumnReadOnly("adptEndDt", false);
  }

  // 적용기간 중복 체크
  scwin.f_CheckFlag(row);
};
scwin.btn_save_onclick = function (e) {
  scwin.f_SaveDailyUseTariffList();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'권역코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_districtCd',search:'start',style:'width:200px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:dma_conversionUnitQueryCondition.districtCd',chooseOptionLabel:'선택',mandatory:'true',title:'권역코드 '},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품목/품명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_goodsCd',btnId:'btn_goodsCd',id:'udc_goodsCd',nameId:'ed_goodsNm','ev:onclickEvent':'scwin.udc_goodsCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_goodsCd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_goodsCd_onviewchangeNameEvent',selectID:'retrieveCommGoodsInfo',refDataCollection:'dma_conversionUnitQueryCondition',code:'goodsCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협약일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_wageAgrmntDt',search:'start',style:'width:120px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:dma_conversionUnitQueryCondition.wageAgrmntDt',chooseOptionLabel:'전체',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wageAgrmntDt'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_adptDt',pickerType:'dynamic',style:'',ref:'data:dma_conversionUnitQueryCondition.adptDt'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''}}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_conversionUnitDTOList',id:'gr_conversionUnitDTOList',style:'',visibleRowNum:'16',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_conversionUnitDTOList_ontextimageclick','ev:oncellindexchange':'scwin.gr_conversionUnitDTOList_oncellindexchange','ev:onviewchange':'scwin.gr_conversionUnitDTOList_onviewchange'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'품목코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'품목명',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'적용단위',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'기본',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'기본단위',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'환산',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'환산단위',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'협약일자',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'적용시작일',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'적용종료일',width:'100',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'goodsCd',inputType:'textImage',width:'100',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'goodsNm',inputType:'text',width:'130',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptUnitCls',inputType:'select',width:'100',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'basisVal',inputType:'text',width:'100',textAlign:'right',maxByteLength:'13',maxLength:'3.2',allowChar:'0-9,.',dataType:'float',validateOnInput:'true',displayFormat:'#,##0.00',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'basisUnit',inputType:'select',width:'100',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnvrsnVal',inputType:'text',width:'100',textAlign:'right',maxByteLength:'13',maxLength:'3.2',allowChar:'0-9,.',dataType:'float',displayFormat:'#,##0.00',validateOnInput:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnvrsnUnit',inputType:'select',width:'100',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wageAgrmntDt',inputType:'calendar',width:'100',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptStDt',inputType:'calendar',width:'100',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptEndDt',inputType:'calendar',width:'100',mandatory:'true',validateOnInput:'false',dateValidCheck:'false'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_conversionUnitDTOList',id:'udc_row',btnDelYn:'N',btnCancelYn:'Y',btnRowDelYn:'N',rowAddFunction:'scwin.f_AddRow',cancelFunction:'scwin.f_CancelRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})