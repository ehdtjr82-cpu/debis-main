/*amd /ui/ds/op/adjmbd/wageadjmproc/op_403_01_19b.xml 58591 13a3784ba39bf3564f18bf420fc7ca6bca03e3e43b59774ebd79774d25558253 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_oGDS_view_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'districtCd',name:'권역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveResult',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'districtCd',name:'권역코드',dataType:'text',defaultValue:' '}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text',defaultValue:' '}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'노임항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemSeq',name:'매출입항목순번',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'goodsCdAdptYn',name:'품목코드적용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wagePattern',name:'노임유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wageCalcStd',name:'노임산출기준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntLevel',name:'관리수준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntCyc',name:'관리주기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pepAdptYn',name:'기력적용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkMthdAdptYn',name:'작업방법적용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adptTermYn',name:'적용기간여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wtAdptYn',name:'중량적용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wtStdYn',name:'중량기준여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkPlDsgYn',name:'작업장지정여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkPlPosAdptYn',name:'작업장위치적용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adptTonCntYn',name:'적용톤수여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dupPattern',name:'중복유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dupPatternB',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpClsAdptYn',name:'수출입구분적용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vsslStucAdptYn',name:'선박구조적용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wholeWrkStpYn',name:'일괄작업단계여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'retroactUnsettledMgntYn',name:'소급미확정관리여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'autoReflectYn',name:'자동반영여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payClntCd',name:'지급거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'std',name:'기준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uprAdptStd',name:'단가적용기준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyAdptYn',name:'FULL/EMPTY적용여부',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveResult2',saveRemovedData:'true','ev:ondataload':'scwin.ds_retrieveResult2_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'districtCd',name:'권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemSeq',name:'매출입항목순번',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_con_SelpchCode',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_selpchCode',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dupPattern',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_selpchCode'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_dupPattern'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.adjmbd.wageadjmproc.RetrievePortEachWagesItemManagementPatternCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_oGDS_view_cond","key":"IN_DS1"},{"id":"ds_retrieveResult","key":"OUT_DS1"},{"id":"ds_retrieveResult2","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_retrieveResult","key":"OUT_DS1"},{"id":"ds_retrieveResult2","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.adjmbd.wageadjmproc.SavePortEachWagesItemManagementPatternCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieveResult","key":"IN_DS1"},{"id":"ds_retrieveResult2","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_selpchCode',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_selpchCode","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_selpchCode_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_dupPattern',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_dupPattern","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_dupPattern_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.bfValue = "";
scwin.districtCd = "";
scwin.rowFlag = "";
scwin.currow = "";
scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  //    console.log(memJson);
  scwin.districtCd = memJson.districtCd; // 권역

  const codeOptions = [{
    grpCd: "OP279",
    compID: "lc_uprAdptStd"
  }, {
    grpCd: "OP255",
    compID: "lc_wagePattern"
  }, {
    grpCd: "OP256",
    compID: "lc_wageCalcStd"
  }, {
    grpCd: "OP257",
    compID: "lc_mgntLevel"
  }, {
    grpCd: "OP258",
    compID: "lc_mgntCyc"
  }];
  $c.data.setCommonCode($p, codeOptions);
  const codeOptions2 = [{
    method: "getLuxeComboData",
    param1: "GoodsSurchargeWorkStepEBC",
    param2: "retriveDistrictCodeList",
    //param3: ["CMP"],
    compID: "lc_con_districtCd"
  }, {
    method: "getLuxeComboData",
    param1: "PortEachWagesItemManagementPatternEBC",
    param2: "retrivePayClntCdList",
    //param3: ["CMP"],
    compID: "lc_payClntCd"
  }, {
    method: "getLuxeComboData",
    param1: "StevedoringWagesResultsEBC",
    param2: "retriveWrkStpList",
    //param3: ["CMP"],
    compID: "gr_retrieveResult2:wrkStpCd"
  }];
  $c.data.setGauceUtil($p, codeOptions2);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    //scwin.f_GetSelpchCode();
    lc_con_districtCd.index = 0;
    lc_wagePattern.index = 0;
    lc_uprAdptStd.index = 0;
    var districtCd = scwin.districtCd;
    if (districtCd != null && districtCd != "") {
      lc_con_districtCd.setValue(districtCd);
    } else {
      lc_con_districtCd.setSelectedIndex(-1);
    }
    //lc_con_districtCd.setValue(districtCd);

    //$c.gus.cfDisableObjects([btn_addrow,btn_del, btn_cancel, btn_Save, btn_AddRowWork, btn_DeleteRowWork, btn_CancelRowWork]);
    $c.gus.cfDisableObjects($p, [btn_addrow, btn_del, btn_cancel, btn_Save, btn_AddRowWork, btn_DeleteRowWork, btn_CancelRowWork]);
    lc_con_districtCd.focus();

    ///임시
    //lc_con_districtCd.setValue("WPA");
    ///
    lc_con_districtCd.setSelectedIndex(-1);
  }, {
    "delay": 200
  });
};
scwin.f_GetSelpchCode = function () {
  var param1 = lc_con_districtCd.getValue();
  const params = {
    sysCd: "GoodsSurchargeWorkStepEBC",
    queryId: "retriveSelpchCodeList",
    param1: param1
  };

  //데이터셋에 정보설정
  dma_selpchCode.setJSON(params);
  $c.sbm.execute($p, sbm_selpchCode);
};
scwin.sbm_selpchCode_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    ds_selpchCode.setJSON(e.responseJSON.GAUCE);
  }
};
scwin.sbm_dupPattern_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    ds_dupPattern.setJSON(e.responseJSON.GAUCE);
  }
  var rows = ds_dupPattern.getRowCount();
  var textValue = "";
  if (rows > 0) {
    textValue = "선택";
  } else {
    textValue = "없음";
  }
  ds_dupPattern.insertRow(0);
  ds_dupPattern.setCellData(0, "name", textValue);
  ds_dupPattern.setCellData(0, "code", "");
  /*
      if ( scwin.bfValue == "" ) {
          if ( rows >= 0 ) {
              lc_dupPattern.index = lc_dupPattern.IndexOfColumn("name", "선택" );
          } else {
              lc_dupPattern.index = lc_dupPattern.IndexOfColumn("name", "없음" );
          }
      }
      else if ( scwin.bfValue != "" ) {
          lc_dupPattern.index = lc_dupPattern.IndexOfColumn("name", bfValue );
      }
  */

  if (scwin.bfValue != "") {
    //alert(scwin.bfValue);
    lc_dupPattern.setValue(scwin.bfValue);
  }
};
scwin.f_AddRow = function () {
  ds_retrieveResult.insertRow();
  gr_retrieveResult.setFocusedCell(ds_retrieveResult.getRowCount() - 1, 0);
  ds_retrieveResult.setCellData(ds_retrieveResult.getRowCount() - 1, "districtCd", lc_con_districtCd.getValue());
  var info = {
    rowIndex: ds_retrieveResult.getRowCount() - 1,
    colIndex: "selpchItemNm"
  };
  scwin.setCustomType();

  //ds_retrieveResult.modifyRowStatus(ds_retrieveResult.getRowCount()-1, "C");
};
scwin.f_AddRow2 = function () {
  ds_retrieveResult2.insertRow();
  gr_retrieveResult2.setFocusedCell(ds_retrieveResult2.getRowCount() - 1, 0);
  ds_retrieveResult2.setCellData(ds_retrieveResult2.getRowPosition(), "districtCd", ds_retrieveResult.getCellData(ds_retrieveResult.getRowPosition(), "districtCd"));
  ds_retrieveResult2.setCellData(ds_retrieveResult2.getRowPosition(), "selpchItemCd", ds_retrieveResult.getCellData(ds_retrieveResult.getRowPosition(), "selpchItemCd"));
  ds_retrieveResult2.setCellData(ds_retrieveResult2.getRowPosition(), "selpchItemSeq", ds_retrieveResult.getCellData(ds_retrieveResult.getRowPosition(), "selpchItemSeq"));
  ds_retrieveResult2.setCellData(ds_retrieveResult2.getRowPosition(), "wrkStpCd", "");
};
scwin.f_Delete = function () {
  if (ds_retrieveResult.getRowStatus(ds_retrieveResult.getRowPosition()) == "C") {
    ds_retrieveResult.removeRow(ds_retrieveResult.getRowPosition());
  } else {
    var row = ds_retrieveResult.getRowPosition();
    ds_retrieveResult.deleteRow(ds_retrieveResult.getRowPosition());
    ds_retrieveResult.setRowPosition(row);
  }
};
scwin.f_Undo = function () {
  if (ds_retrieveResult.getRowStatus(ds_retrieveResult.getRowPosition()) == "C") {
    ds_retrieveResult.removeRow(ds_retrieveResult.getRowPosition());
  } else {
    ds_retrieveResult.undoRow(ds_retrieveResult.getRowPosition());
  }
};
scwin.f_Delete2 = function () {
  if (ds_retrieveResult2.getRowStatus(ds_retrieveResult2.getRowPosition()) == "C") {
    ds_retrieveResult2.removeRow(ds_retrieveResult2.getRowPosition());
  } else {
    ds_retrieveResult2.deleteRow(ds_retrieveResult2.getRowPosition());
  }
};
scwin.f_Undo2 = function () {
  if (ds_retrieveResult2.getRowStatus(ds_retrieveResult2.getRowPosition()) == "C") {
    ds_retrieveResult2.removeRow(ds_retrieveResult2.getRowPosition());
  } else {
    ds_retrieveResult2.undoRow(ds_retrieveResult2.getRowPosition());
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  $c.gus.cfEnableObjects($p, [btn_addrow, btn_del, btn_cancel, btn_Save, btn_AddRowWork, btn_DeleteRowWork, btn_CancelRowWork]);
  //var strAtcion = "/ds.op.adjmbd.wageadjmproc.RetrievePortEachWagesItemManagementPatternCMD.do";

  //tr_retrieve.Action = strAtcion;
  //tr_retrieve.Post();
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  var chk = await $c.gus.cfValidate($p, [input_main]);
  var chk2 = await $c.gus.cfValidate($p, [gr_retrieveResult]);
  var chk3 = await $c.gus.cfValidate($p, [gr_retrieveResult2]);
  if (!chk || !chk2 || !chk3) return;
  scwin.currow = ds_retrieveResult.getRowPosition();
  var confirm = await $c.win.confirm($p, "저장하시겠습니까?");
  if (confirm) {
    //tr_save.Post();
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 조회 조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  lc_con_districtCd.setSelectedIndex(0);
  lc_wagePattern.setSelectedIndex(0);
  ed_selpchItemCd.text = "";
  txt_selpchItemNm.value = "";
  var districtCd = scwin.districtCd;
  lc_con_districtCd.setValue(districtCd);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면

  switch (disGubun) {
    case 1:
      var param1 = lc_con_districtCd.getValue();
      // 일용코드 팝업
      udc_selpchItemCd.cfCommonPopUp(scwin.callbackPortEachDistrictNoimList, pCode.trim(), pName, pClose, null, null, null, null, param1, null, null, null, null, null, pAllSearch, null);

      //cfSetReturnValue(rtnList, ed_selpchItemCd, txt_selpchItemNm);  // 노임항목코드, 노임항목명
      break;
    case 2:
      var param1 = lc_con_districtCd.getValue();
      // 일용코드 팝업
      udc_selpchItemCd.cfCommonPopUp(scwin.callbackPortEachDistrictNoimList2, pCode.trim(), pName, pClose, null, null, null, null, param1, null, null, null, null, null, pAllSearch, null);
      /*
                  if ( rtnList != null ) {
                      ds_retrieveResult.NameValue(ds_retrieveResult.RowPosition, "selpchItemCd") = rtnList[0];
                      ds_retrieveResult.NameValue(ds_retrieveResult.RowPosition, "selpchItemNm") = rtnList[1];
      
                      //var row = ds_retrieveResult.NameValueRow("selpchItemCd",rtnList[0]);
      
                      //if ( row != "" ) {
                      //    if ( ds_retrieveResult.RowPosition != row ) {
                      //        cfAlertMsg(row+"째 Row에 중복된 노임항목이 존재합니다.");
                      //        ds_retrieveResult.NameValue(ds_retrieveResult.RowPosition, "selpchItemCd") = "";
                      //        ds_retrieveResult.NameValue(ds_retrieveResult.RowPosition, "selpchItemNm") = "";
                      //    }
                      //}
      
                      ds_retrieveResult.NameValue(ds_retrieveResult.RowPosition, "selpchItemSeq") = f_Count(rtnList[1]);
      
                  } else {
                      ds_retrieveResult.NameValue(ds_retrieveResult.RowPosition, "selpchItemCd") = "";
                      ds_retrieveResult.NameValue(ds_retrieveResult.RowPosition, "selpchItemNm") = "";
                  }
      */
      break;
    default:
      break;
  }
};
scwin.callbackPortEachDistrictNoimList = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_selpchItemCd, ed_selpchItemNm); // 노임항목코드, 노임항목명
  ds_retrieveResult.setCellData(ds_retrieveResult.getRowPosition(), "selpchItemSeq", scwin.f_Count(rtnList[1]));
};
scwin.callbackPortEachDistrictNoimList2 = function (rtnList) {
  if (rtnList != null) {
    ds_retrieveResult.setCellData(ds_retrieveResult.getRowPosition(), "selpchItemCd", rtnList[0]);
    ds_retrieveResult.setCellData(ds_retrieveResult.getRowPosition(), "selpchItemNm", rtnList[1]);

    //var row = ds_retrieveResult.NameValueRow("selpchItemCd",rtnList[0]);

    //if ( row != "" ) {
    //    if ( ds_retrieveResult.RowPosition != row ) {
    //        cfAlertMsg(row+"째 Row에 중복된 노임항목이 존재합니다.");
    //        ds_retrieveResult.NameValue(ds_retrieveResult.RowPosition, "selpchItemCd") = "";
    //        ds_retrieveResult.NameValue(ds_retrieveResult.RowPosition, "selpchItemNm") = "";
    //    }
    //}

    ds_retrieveResult.setCellData(ds_retrieveResult.getRowPosition(), "selpchItemSeq", scwin.f_Count(rtnList[1]));
  } else {
    ds_retrieveResult.setCellData(ds_retrieveResult.getRowPosition(), "selpchItemCd", "");
    ds_retrieveResult.setCellData(ds_retrieveResult.getRowPosition(), "selpchItemNm", "");
  }
};

//-------------------------------------------------------------------------
// 순번 Count
//-------------------------------------------------------------------------
scwin.f_Count = function (name) {
  console.log("f_Count  : " + name);
  var cnt = 0;
  var max = 0;
  var seq = 0;
  for (var i = 0; i < ds_retrieveResult.getRowCount(); i++) {
    console.log("i : " + i);
    if (ds_retrieveResult.getCellData(i, "selpchItemNm") == name) {
      console.log("ds_retrieveResult.getCellData : " + ds_retrieveResult.getCellData(i, "selpchItemNm"));
      seq = ds_retrieveResult.getCellData(i, "selpchItemSeq");
      console.log("max : " + max + "  seq : " + seq);
      if (max < seq) {
        max = seq;
        console.log("!@#$%^");
      }
      cnt++;
    }
  }
  max++;
  return max;
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.f_overCheck = function (row, colid) {
  var count = ds_retrieveResult2.getRowCount();
  var value = ds_retrieveResult2.getCellData(row, colid);
  for (var i = 0; i < count; i++) {
    var value2 = ds_retrieveResult2.getCellData(i, colid);
    if (row != i) {
      if (value == value2) {
        $c.win.alert($p, i + 1 + "번째 Row 작업단계와 중복됩니다.");
        if (ds_retrieveResult2.getRowStatus(ds_retrieveResult2.getRowPosition()) == "C") {
          ds_retrieveResult2.removeRow(ds_retrieveResult2.getRowPosition());
        } else {
          ds_retrieveResult2.undoRow(ds_retrieveResult2.getRowPosition());
        }

        //ds_retrieveResult2.undoRow(row);
        scwin.f_checkRow();
      }
    }
  }
};
scwin.f_checkRow = function () {
  var row = ds_retrieveResult2.getRowCount();
  var yn = ds_retrieveResult.getCellData(ds_retrieveResult.getRowPosition(), "wholeWrkStpYn");
  if (row == 4) {
    $c.gus.cfDisableObjects($p, [btn_AddRowWork]);
  } else {
    $c.gus.cfEnableObjects($p, [btn_AddRowWork]);
  }
  if (yn == 1) {
    $c.gus.cfDisableObjects($p, [btn_AddRowWork]);
  } else if (yn == 0) {
    $c.gus.cfEnableObjects($p, [btn_AddRowWork]);
  }
};
scwin.f_WholeWrkStpYn = async function () {
  if (ds_retrieveResult.getRowCount() > 0) {
    var yn = ds_retrieveResult.getCellData(ds_retrieveResult.getRowPosition(), "wholeWrkStpYn");
    if (yn == 1) {
      if (ds_retrieveResult2.getRowCount() > 0) {
        var chk = await $c.win.confirm($p, "일괄자동단계계 선택시 적용된 모든 작업단계는 삭제됩니다.");
        if (chk) {
          ds_retrieveResult2.removeAll();
          $c.gus.cfDisableObjects($p, [btn_AddRowWork]);
        }
      } else {
        $c.gus.cfDisableObjects($p, [btn_AddRowWork]);
      }
    } else if (yn == 0) {
      ds_retrieveResult2.undoAll();
      $c.gus.cfEnableObjects($p, [btn_AddRowWork]);
    }
  }
};
function f_changPayClntCd() {
  // retrivePayClntCdList   op545 권역 또는 작업장 코드 추가후 개발..
  var value = lc_con_districtCd.getValue(scwin.districtCd);
  //alert(value);
  //        ds_PayClnt.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=PortEachWagesItemManagementPatternEBC&queryId=retrivePayClntCdList&param1=" + param1;
  //        ds_PayClnt.Reset();
}

//-------------------------------------------------------------------------
// 중복유형 조회
//-------------------------------------------------------------------------

scwin.f_RetrieveDupPattern = function (param1) {
  /*
      scwin.bfValue = ds_retrieveResult.getCellData(ds_retrieveResult.getRowPosition(), "dupPattern" );
      $c.sbm.execute();
  
      ds_dupPattern.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=PortEachWagesItemManagementPatternEBC&queryId=duplicationPattern&param1="+param1;
      ds_dupPattern.Reset();
  */
  scwin.bfValue = ds_retrieveResult.getCellData(ds_retrieveResult.getRowPosition(), "dupPattern");
  const params = {
    sysCd: "PortEachWagesItemManagementPatternEBC",
    queryId: "duplicationPattern",
    param1: param1
  };

  //데이터셋에 정보설정
  dma_dupPattern.setJSON(params);
  $c.sbm.execute($p, sbm_dupPattern);
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_init_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.sbm_save_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    scwin.rowFlag = ""; // 초기화
    $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_Retrieve();
  }
};
scwin.sbm_retrieve_submitdone = function (e) {
  var rowcnt = ds_retrieveResult.getRowCount();
  if (rowcnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
  gr_retrieveResult.setFocusedCell(0, 0);
  scwin.retrieveResult2Filter();
  scwin.f_checkRow();
  for (var i = 0; i < ds_retrieveResult.getRowCount(); i++) {
    ds_retrieveResult.setCellData(i, "dupPatternB", ds_retrieveResult.getCellData(i, "dupPattern"));
    if ($c.gus.cfIsNull($p, ds_retrieveResult.getCellData(i, "std"))) {
      ds_retrieveResult.setCellData(i, "std", "");
    }
    if ($c.gus.cfIsNull($p, ds_retrieveResult.getCellData(i, "uprAdptStd"))) {
      ds_retrieveResult.setCellData(i, "uprAdptStd", "");
    }
    var info = {
      rowIndex: i,
      colIndex: "selpchItemNm"
    };
    scwin.setCustomType();
  }
  ds_retrieveResult.modifyAllStatus("R");
  ds_retrieveResult.reform();
  //gr_retrieveResult.redrawColumn("selpchItemNm");
  gr_retrieveResult.refreshColumn("selpchItemNm");
  for (var i = 0; i < ds_retrieveResult.getRowCount(); i++) {
    //gr_retrieveResult.refreshCell(i, "selpchItemNm");
    //gr_retrieveResult.refreshColumn("selpchItemNm");
  }
  spa_cnt1.setValue(ds_retrieveResult.getRowCount());
  spa_cnt2.setValue(ds_retrieveResult2.getRowCount());
  if (scwin.currow != "" && scwin.currow != null) {
    gr_retrieveResult.setFocusedCell(scwin.currow, 0);
  }

  //gr_retrieveResult.setFocusedCell(0, 0);
};
scwin.udc_selpchItemCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_selpchItemCd.getValue(), ed_selpchItemNm.getValue(), 'F', 'T');
};
scwin.udc_selpchItemCd_onviewchangeCodeEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_selpchItemCd, ed_selpchItemNm, 1);
};
scwin.udc_selpchItemCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_selpchItemNm, ed_selpchItemCd, 1, false);
};
scwin.gr_retrieveResult_ontextimageclick = function (rowIndex, columnIndex) {
  var colid = gr_retrieveResult.getColumnID(columnIndex);
  if (colid == "selpchItemNm") {
    scwin.f_openCommonPopUp(2, "", "", "T", "T");
  }
};
scwin.lc_con_districtCd_onviewchange = function (info) {
  scwin.f_GetSelpchCode();
  $c.gus.cfDisableObjects($p, [btn_addrow, btn_del, btn_cancel, btn_Save, btn_AddRowWork, btn_DeleteRowWork, btn_CancelRowWork]);
};
scwin.retrieveResult2Filter = function () {
  var districtCd = ds_retrieveResult.getCellData(ds_retrieveResult.getRowPosition(), "districtCd");
  var selpchItemCd = ds_retrieveResult.getCellData(ds_retrieveResult.getRowPosition(), "selpchItemCd");
  var selpchItemSeq = ds_retrieveResult.getCellData(ds_retrieveResult.getRowPosition(), "selpchItemSeq");
  ds_retrieveResult2.clearFilter();
  console.log("districtCd : " + districtCd + "   selpchItemCd : " + selpchItemCd + "   selpchItemSeq :" + selpchItemSeq);
  /*     ds_retrieveResult2.setColumnFilter( 
          {type:'func', colIndex:'districtCd', key:scwin.setFilter1, condition:'and'},
          {type:'func', colIndex:'selpchItemCd', key:scwin.setFilter2, condition:'and'},
          {type:'func', colIndex:'selpchItemSeq', key:scwin.setFilter3, condition:'and'}
      ); */
  ds_retrieveResult2.setColumnFilter({
    type: 'row',
    colIndex: 'districtCd',
    key: districtCd,
    condition: 'and'
  });
  ds_retrieveResult2.setColumnFilter({
    type: 'row',
    colIndex: 'selpchItemCd',
    key: selpchItemCd,
    condition: 'and'
  });
  ds_retrieveResult2.setColumnFilter({
    type: 'row',
    colIndex: 'selpchItemSeq',
    key: selpchItemSeq,
    condition: 'and'
  });
};
scwin.gr_retrieveResult_onrowindexchange = function (rowIndex, oldRow) {
  scwin.f_RetrieveDupPattern(ds_retrieveResult.getCellData(rowIndex, "selpchItemCd"));
  /*
      ds_retrieveResult2.UseFilter = "true";
      ds_retrieveResult2.filter();
  */
  scwin.retrieveResult2Filter();
  scwin.f_checkRow();

  //ds_retrieveResult.setCellData(rowIndex, "dupPatternB", ds_retrieveResult.getCellData(rowIndex, "dupPattern"));
  $p.setTimeout(function () {
    //ds_retrieveResult.modifyRowStatus(rowIndex, "R");
  }, {
    "delay": 30
  });
  spa_cnt2.setValue(ds_retrieveResult2.getRowCount());
};
scwin.gr_retrieveResult_oncellclick = function (rowIndex, columnIndex, columnId) {
  console.log("상태값 테스트 : " + ds_retrieveResult.getRowStatus(rowIndex));
  // for(let i=0; i<ds_retrieveResult.getTotalCol(); i++) {
  //     console.log("겟데이터 " + ds_retrieveResult.getColumnID(i) + " : " + ds_retrieveResult.getCellData(9, ds_retrieveResult.getColumnID(i)));
  //     console.log("오리지날데어터 " + ds_retrieveResult.getColumnID(i) + " : " + ds_retrieveResult.getOriginalCellData(9, ds_retrieveResult.getColumnID(i)));
  // }
  if (ds_retrieveResult.getRowStatus(rowIndex) == "C") {
    //gr_retrieveResult.setCellReadOnly(rowIndex, 'selpchItemNm', false); 
    // 아이콘만 살리고 텍스트는 readOnly 상태로 하기위해 변경
    gr_retrieveResult.setCellReadOnly(rowIndex, 'selpchItemNm', true);
    gr_retrieveResult.setCellReadOnly(rowIndex, 'selpchItemSeq', false);
  } else {
    gr_retrieveResult.setCellReadOnly(rowIndex, 'selpchItemNm', true);
    gr_retrieveResult.setCellReadOnly(rowIndex, 'selpchItemSeq', true);
  }
};
scwin.gr_retrieveResult2_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_retrieveResult2.getRowStatus(rowIndex) == "C") {
    gr_retrieveResult.setCellReadOnly(rowIndex, 'wrkStpCd', false);
  } else {
    gr_retrieveResult.setCellReadOnly(rowIndex, 'wrkStpCd', true);
  }
};
scwin.lc_dupPattern_onchange = function (info) {
  // console.log("여기타면 나 화낸다....dupPattern : "+lc_dupPattern.getValue());
  //     console.log(info);
  //     var dupPattern = lc_dupPattern.getValue();
  // console.log("1onchange안에서 상태값  : " + ds_retrieveResult.getRowStatus(ds_retrieveResult.getRowPosition()));
  // console.log("dupPatternB  : " +ds_retrieveResult.getCellData(ds_retrieveResult.getRowPosition(), "dupPatternB"));
  //     ds_retrieveResult.setCellData(ds_retrieveResult.getRowPosition(), "dupPattern", dupPattern);
  // console.log("2onchange안에서 상태값  : " + ds_retrieveResult.getRowStatus(ds_retrieveResult.getRowPosition()));
  // console.log("dupPatternB  : " +ds_retrieveResult.getCellData(ds_retrieveResult.getRowPosition(), "dupPatternB"));
};
/*
scwin.setCustomType = function(info) { 
    console.log("start scwin.setCustomType");
    var rowIndex = info.rowIndex;
    var colIndex = info.colIndex;
    var returnInfo;
    var inputType = ds_retrieveResult.getCellData( rowIndex, colIndex );
    var chk = ds_retrieveResult.setCellData(rowIndex, "new");
    var rowStatus = ds_retrieveResult.getRowStatus(rowIndex);
    

    switch(rowStatus) {
        case "C": 
            returnInfo = {
                id : "dynamic_select_" + rowIndex + "_" + colIndex,
                inputType : "textImage",
                //readOnly : true,
                options : {viewType : "icon"},
                
                //itemSet : {
                //    nodeset: "data:dataList1", 
                //    label: "label",
                //    value: "value"
                //}
                
            }
            console.log("C");
            break;

        case "R": 
            returnInfo = {
                id : "dynamic_select_" + rowIndex + "_" + colIndex,
                inputType : "text"
                
                //itemSet : {
                //    nodeset: "data:dataList1", 
                //    label: "label",
                //   value: "value"
                //}
                
            }
            console.log("R");
            break;

        default :
            returnInfo = {
                //id : "dynamic_select_" + rowIndex + "_" + colIndex,
                inputType : "text",
                //options : {viewType: "icon", textAlign : "left", displayMode : "value"},
            }
        break;

        
    }
    return returnInfo;
};
*/

scwin.setCustomType = function () {
  var infoC = {
    inputType: "textImage",
    options: {
      viewType: "icon"
    }
  };
  var infoR = {
    inputType: "text"
  };
  for (var i = 0; i < ds_retrieveResult.getRowCount(); i++) {
    if (ds_retrieveResult.getRowStatus(i) == "C") {
      gr_retrieveResult.setCellInputType(i, "selpchItemNm", infoC);
    } else {
      gr_retrieveResult.setCellInputType(i, "selpchItemNm", infoR);
    }
  }
};
scwin.chb_wholeWrkStpYn_onviewchange = function (info) {
  scwin.f_WholeWrkStpYn();
};
scwin.gr_retrieveResult2_onafteredit = function (row, columnIndex, value) {
  var colid = gr_retrieveResult2.getColumnID(columnIndex);
  if (colid == "wrkStpCd") {
    scwin.f_overCheck(row, colid);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'권역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:' w200',editType:'select',id:'lc_con_districtCd',search:'start',style:'',submenuSize:'auto',ref:'data:dma_oGDS_view_cond.districtCd','ev:onviewchange':'scwin.lc_con_districtCd_onviewchange',emptyItem:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'노임항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_selpchItemCd',btnId:'btn_selpchItemCd',id:'udc_selpchItemCd',nameId:'ed_selpchItemNm',selectID:'retrievePortEachDistrictNoimList',refDataCollection:'dma_oGDS_view_cond',code:'selpchItemCd','ev:onclickEvent':'scwin.udc_selpchItemCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_selpchItemCd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_selpchItemCd_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 450px;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'노임항목',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',dataList:'data:ds_retrieveResult',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_retrieveResult',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',visibleRowNum:'7',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_retrieveResult_ontextimageclick','ev:onrowindexchange':'scwin.gr_retrieveResult_onrowindexchange','ev:oncellclick':'scwin.gr_retrieveResult_oncellclick',rowStatusVisible:'true',setCellInputTypeCustom:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column12',blockSelect:'false',displayMode:'label',value:'권역'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column11',blockSelect:'false',displayMode:'label',value:'노임항목'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'140',inputType:'text',id:'column10',blockSelect:'false',displayMode:'label',value:'노임항목'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'text',id:'column9',blockSelect:'false',displayMode:'label',value:'유형'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column21',value:'순번',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'districtCd',blockSelect:'false',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'custom',id:'selpchItemNm',blockSelect:'false',displayMode:'label',viewTypeIconImage:'true',viewType:'icon',mandatory:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'140',inputType:'text',id:'selpchItemCd',blockSelect:'false',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'text',id:'dupPattern',blockSelect:'false',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'selpchItemSeq',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'spa_cnt1',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'Y',EngYn:'N',btnRowDelYn:'N',btnCancelYn:'Y',style:'',btnRowAddYn:'Y',id:'udc_row1',gridID:'gr_retrieveResult',rowAddFunction:'scwin.f_AddRow',cancelFunction:'scwin.f_Undo',delFunction:'scwin.f_Delete',btnRowAddObj:'btn_addrow',btnDelObj:'btn_del',btnCancelObj:'btn_cancel'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:' row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:' 작업단계적용',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',visibleRowNumFix:'true',dataList:'data:ds_retrieveResult2',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_retrieveResult2',visibleRowNum:'6',class:'wq_gvw',checkReadOnlyOnPasteEnable:'','ev:oncellclick':'scwin.gr_retrieveResult2_oncellclick','ev:onafteredit':'scwin.gr_retrieveResult2_onafteredit'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',blockSelect:'false',displayMode:'label',value:'권역코드'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'column11',blockSelect:'false',displayMode:'label',value:'매출입항목코드'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'column10',blockSelect:'false',displayMode:'label',value:'작업단계'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'districtCd',blockSelect:'false',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'selpchItemCd',blockSelect:'false',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'select',id:'wrkStpCd',blockSelect:'false',displayMode:'label',mandatory:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'spa_cnt2',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',style:'',id:'udc_row2',rowAddFunction:'scwin.f_AddRow2',rowDelFunction:'scwin.f_Delete2',cancelFunction:'scwin.f_Undo2',btnRowAddObj:'btn_AddRowWork',btnRowDelObj:'btn_DeleteRowWork',btnCancelObj:'btn_CancelRowWork'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'노임항목상세',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'input_main',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'8'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'노임적용유형',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품목적용 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_goodsCdAdptYn',ref:'data:ds_retrieveResult.goodsCdAdptYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기력적용 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_pepAdptYn',ref:'data:ds_retrieveResult.pepAdptYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업방법 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_wrkMthdAdptYn',ref:'data:ds_retrieveResult.wrkMthdAdptYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용기간 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_adptTermYn',ref:'data:ds_retrieveResult.adptTermYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중량구간 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_wtAdptYn',ref:'data:ds_retrieveResult.wtAdptYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중량기준 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_wtStdYn',ref:'data:ds_retrieveResult.wtStdYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장지정 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_wrkPlDsgYn',ref:'data:ds_retrieveResult.wrkPlDsgYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장위치 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_wrkPlPosAdptYn',ref:'data:ds_retrieveResult.wrkPlPosAdptYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용톤수 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_adptTonCntYn',ref:'data:ds_retrieveResult.adptTonCntYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중복유형 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w100',editType:'select',id:'lc_dupPattern',search:'start',style:'',submenuSize:'auto',allOption:'',ref:'',displayMode:'label',chooseOptionLabel:'$blank',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_dupPattern'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_expimpClsAdptYn',ref:'data:ds_retrieveResult.expimpClsAdptYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박구조 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_vsslStucAdptYn',ref:'data:ds_retrieveResult.vsslStucAdptYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_fullEmptyAdptYn',ref:'data:ds_retrieveResult.fullEmptyAdptYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CNTR단가적용기준 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w100',editType:'select',id:'lc_uprAdptStd',search:'start',style:'',submenuSize:'auto',ref:'data:ds_retrieveResult.uprAdptStd',emptyItem:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일괄작업단계 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_wholeWrkStpYn',ref:'data:ds_retrieveResult.wholeWrkStpYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0','ev:onviewchange':'scwin.chb_wholeWrkStpYn_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소급미확정관리여부 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_retroactUnsettledMgntYn',ref:'data:ds_retrieveResult.retroactUnsettledMgntYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자동반영 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_autoReflectYn',ref:'data:ds_retrieveResult.autoReflectYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'8'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'노임생성방법',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'노임유형 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_wagePattern',search:'start',style:'',submenuSize:'auto',ref:'data:ds_retrieveResult.wagePattern',displayMode:'label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'노임산출기준 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_wageCalcStd',search:'start',style:'',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'선택',ref:'data:ds_retrieveResult.wageCalcStd',displayMode:'label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리수준 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_mgntLevel',search:'start',style:'',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'선택',ref:'data:ds_retrieveResult.mgntLevel',displayMode:'label'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리주기 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_mgntCyc',search:'start',style:'',submenuSize:'auto',chooseOptionLabel:'선택',chooseOption:'true',ref:'data:ds_retrieveResult.mgntCyc',displayMode:'label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급거래처 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w200',editType:'select',id:'lc_payClntCd',search:'start',style:'',submenuSize:'auto',ref:'data:ds_retrieveResult.payClntCd',displayMode:'label',chooseOption:'true',chooseOptionLabel:'선택'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'8'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'7'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'ed_std',placeholder:'',style:'',ref:'data:ds_retrieveResult.std'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})