/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_19b.xml 52731 62f0a63bbf3e22d368af4c794d280f911da99f39243c6e9596a2a191bf07c7ba */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_commSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_page'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'targetRow',name:'targetRow',dataType:'text'}},{T:1,N:'w2:key',A:{id:'numOfRowPerPage',name:'numOfRowPerPage',dataType:'text'}},{T:1,N:'w2:key',A:{id:'numOfIndexPerPage',name:'numOfIndexPerPage',dataType:'text'}},{T:1,N:'w2:key',A:{id:'currentPage',name:'currentPage',dataType:'text'}},{T:1,N:'w2:key',A:{id:'totalPage',name:'totalPage',dataType:'text'}},{T:1,N:'w2:key',A:{id:'totalRecords',name:'totalRecords',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'targetRow',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'numOfRowPerPage',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtWrkPathSeq',name:'numOfIndexPerPage',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_selpchItemCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'요율항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'요율항목명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_contractWorkPath',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'작업경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'작업경로명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_contractWorkPathEachWorkStep',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'topWrkStpCd',name:'선작업단계명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tariff',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_tariff_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtInternalTrfSeq',name:'계약내부요율순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidCommNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtInternalTrf',name:'계약내부요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'작업점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'작업점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidLobranNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발권역코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidDptDistrictNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidArvDistrictNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dataMode',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpMode',name:'#N/A',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tmp_tariff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtInternalTrfSeq',name:'계약내부요율순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidCommNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtInternalTrf',name:'계약내부요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidLobranNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발권역코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidDptDistrictNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidArvDistrictNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dataMode',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpMode',name:'#N/A',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_compare'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'commCd',name:'품목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commNm',name:'품목품명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'unitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'작업점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranNm',name:'작업점소명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDistrictCd',name:'출발권역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDistrictNm',name:'출발권역명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvDistrictNm',name:'도착권역명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_commSearch',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_commSearch',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveContractInternalTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,["dma_retrieve",{"id":"dma_page","key":"IN_DS1"},{"id":"dma_page","key":"OUT_DS1"},{"id":"ds_tariff","key":"OUT_DS2"}]',target:'data:json,[{"id":"dma_page","key":"OUT_DS1"},{"id":"ds_tariff","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.salesactiv.ctrtmgnt.SaveContractInternalTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_tariff","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.pWinCloseTF = "";
scwin.divOnviewChange = false; //공통팝업 호출 2번 방지 변수
scwin.topWrkStpCd = "";

//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.MSG_SD_ERR_001 = "원화인 경우 소수점을 입력 할 수 없습니다.";
  scwin.MSG_SD_ERR_002 = "@행, @칼럼의 코드가 일치하지 않습니다.";
  scwin.parentFrame = $c.win.getParent($p);
  scwin.strCtrtNo = scwin.parentFrame.scwin.ctrtNo;

  //공통코드 조회
  const codeOptions = [{
    grpCd: "ZZ006",
    compID: "gr_tariff:crcCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCode);
};
scwin.callBackCode = function () {
  dma_commSearch.set("sysCd", "ContractEBC");
  dma_commSearch.set("queryId", "retrieveContractWorkStepTariffItemList");
  dma_commSearch.set("param1", scwin.strCtrtNo);
  $c.sbm.execute($p, sbm_commSearch).then(e => {
    console.log("scwin.sbm_commSearch : retrieveContractWorkStepTariffItemList");
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_selpchItemCd.setJSON(e.responseJSON.GAUCE);
    acb_selpchItemCd.setSelectedIndex(0);
  });
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  console.log("scwin.f_retrieve");
  if ($c.data.isModified($p, ds_tariff)) {
    let conf = await $c.win.confirm($p, MSG_CM_CRM_015);
    if (conf) {
      if (!scwin.parentFrame.scwin.f_isCompletedChk(6)) return false;
      scwin.f_Save('');
    }
  }
  if (acb_selpchItemCd.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("요율항목"));
    return;
  }
  if (acb_contractWorkPath.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("작업경로"));
    return;
  }
  scwin.moveToPage('');
};

//-------------------------------------------------------------------------
// 페이지 이동
//-------------------------------------------------------------------------
scwin.moveToPage = function (targetRow) {
  //cfSetTargetRow(oGDS_page, targetRow) ;  
  dma_retrieve.set("ctrtNo", scwin.strCtrtNo);
  dma_retrieve.set("selpchItemCd", acb_selpchItemCd.getValue());
  dma_retrieve.set("ctrtWrkPathSeq", acb_contractWorkPath.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (moveGb, callback) {
  if (!$c.data.isModified($p, ds_tariff)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, new Array("보관-내부요율"));
    scwin.parentFrame.TAB_MOVE_CONFIRM = false;
    scwin.parentFrame.PAGE_MOVE_CONFIRM = false;
    return false;
  } else {
    if (await scwin.f_reqFieldChk()) {
      if (moveGb == "") {
        let conf = await $c.win.confirm($p, MSG_CM_CRM_001);
        if (conf) {
          const res = await $c.sbm.execute($p, sbm_save);
          await scwin.sbm_save_submitdone(res);
          return true;
        } else {
          scwin.parentFrame.TAB_MOVE_CONFIRM = false;
          scwin.parentFrame.PAGE_MOVE_CONFIRM = false;
          return false;
        }
      } else {
        const res = await $c.sbm.execute($p, sbm_save);
        await scwin.sbm_save_submitdone(res, callback);
        scwin.parentFrame.TAB_MOVE_CONFIRM = false;
        scwin.parentFrame.PAGE_MOVE_CONFIRM = false;
        return true;
      }
    } else {
      scwin.parentFrame.TAB_MOVE_CONFIRM = false;
      scwin.parentFrame.PAGE_MOVE_CONFIRM = false;
      return false;
    }
  }
};

//-------------------------------------------------------------------------
// 필수항목 check
//-------------------------------------------------------------------------
scwin.f_reqFieldChk = async function () {
  let chkVal = await $c.gus.cfValidate($p, [gr_tariff]);
  if (!chkVal) return false;
  for (var i = 0; i < ds_tariff.getTotalRow(); i++) {
    if (ds_tariff.getCellData(i, "wrkStpMode") == "1" && (ds_tariff.getCellData(i, "dptDistrictCd") == "" || ds_tariff.getCellData(i, "arvDistrictCd") == "")) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("운송조건"));
      gr_tariff.setFocusedCell(i, "dptDistrictNm");
      return false;
    }
    if (ds_tariff.getCellData(i, "wrkStpMode") == "2" && ds_tariff.getCellData(i, "lobranCd") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("작업점소"));
      gr_tariff.setFocusedCell(i, "lobranNm");
      return false;
    }
    if (ds_tariff.getCellData(i, "crcCd") == "KRW" && Number(ds_tariff.getCellData(i, "ctrtInternalTrf")) % 1 > 0) {
      $c.gus.cfAlertMsg($p, "원화인 경우 소수점을 입력 할 수 없습니다.");
      gr_tariff.setFocusedCell(i, "ctrtTrf");
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 엑셀 업로드
//-------------------------------------------------------------------------
scwin.f_upload = function () {
  udc_topGrdBtn.uploadGridViewExcel(gr_tmp_tariff, {
    startRowIndex: 2
  });
};
scwin.gr_tmp_tariff_onfilereadend = async function (value) {
  console.log(value);
  ds_tariff.removeAll();
  scwin.row;
  for (var i = 0; i < ds_tmp_tariff.getTotalRow(); i++) {
    scwin.row = i;
    let insRow = ds_tariff.insertRow();
    ds_tariff.setCellData(insRow, "ctrtNo", scwin.strCtrtNo);
    ds_tariff.setCellData(insRow, "selpchItemCd", acb_selpchItemCd.getValue());
    ds_tariff.setCellData(insRow, "ctrtWrkPathSeq", acb_contractWorkPath.getValue());
    ds_tariff.setCellData(insRow, "wrkStpCd", ds_tmp_tariff.getCellData(i, "wrkStpCd"));
    ds_tariff.setCellData(insRow, "ctrtInternalTrf", "0");
    intRowPosition = ds_contractWorkPathEachWorkStep.getMatchedIndex("wrkStpCd", ds_tariff.getCellData(i, "wrkStpCd"));
    topWrkStpCd = ds_contractWorkPathEachWorkStep.getCellData(intRowPosition[0], "topWrkStpCd");
    ds_tariff.setCellData(i, "wrkStpMode", topWrkStpCd);
    if (topWrkStpCd == "1") {
      gr_tariff.setReadOnly("column", "lobranNm", true);
      gr_tariff.setReadOnly("column", "dptDistrictNm", false);
      gr_tariff.setReadOnly("column", "arvDistrictNm", false);
    } else if (topWrkStpCd == "2") {
      gr_tariff.setReadOnly("column", "lobranNm", false);
      gr_tariff.setReadOnly("column", "dptDistrictNm", true);
      gr_tariff.setReadOnly("column", "arvDistrictNm", true);
    }
    if (ds_tmp_tariff.getCellData(i, "commCd") != "") {
      udc_comCode.setSelectId("retrieveCommInfo");
      let rtnList = await udc_comCode.cfCommonPopUpAsync(null, ds_tmp_tariff.getCellData(i, "commCd"), ds_tmp_tariff.getCellData(i, "commNm"), "T", '3', "품목／품명코드,품목／품명,구분", '120,170,70', '4,5,6,7,8,9,10', "2,4,,," + "", null, null, null, null, null, "F", "품목／품명,품목／품명코드,품목／품명");
      if (rtnList == "N/A") {
        ds_tariff.setCellData(scwin.row, "commCd", "");
        ds_tariff.setCellData(scwin.row, "commNm", "");
        $c.gus.cfAlertMsg($p, scwin.MSG_SD_ERR_002, new Array(scwin.row, "품목"));
        ds_tariff.removeAll();
        ds_tmp_tariff.removeAll();
        return;
      } else {
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_tariff, scwin.row, "commCd", "commNm");
      }
    }
    if (ds_tmp_tariff.getCellData(i, "unitCd") != "") {
      udc_comCode.setSelectId("retrieveCommCdInfo");
      let rtnList = await udc_comCode.cfCommonPopUpAsync(null, ds_tmp_tariff.getCellData(i, "unitCd"), '', 'T', '7', null, '150,170', null, 'LO102,,', null, null, null, null, null, "F", null);
      if (rtnList == "N/A") {
        ds_tariff.setCellData(scwin.row, "unitCd", "");
        return;
      } else {
        ds_tariff.setCellData(i, "unitCd", ds_tmp_tariff.getCellData(i, "unitCd"));
        ds_tariff.setCellData(i, "crcCd", ds_tmp_tariff.getCellData(i, "crcCd"));
        ds_tariff.setCellData(i, "ctrtInternalTrf", ds_tmp_tariff.getCellData(i, "ctrtInternalTrf"));
      }
    }
    if (ds_tmp_tariff.getCellData(i, "lobranCd") != "") {
      udc_comCode.setSelectId("retrieveLobranInfo");
      let rtnList = await udc_comCode.cfCommonPopUpAsync(null, ds_tmp_tariff.getCellData(i, "lobranCd"), "", "T", '7', "작업점소코드,작업점소명", '150,170', null, "A,B", null, null, null, null, null, "F", "작업점소,작업점소코드,작업점소명");
      if (rtnList == "N/A") {
        ds_tariff.setCellData(scwin.row, "lobranCd", "");
        ds_tariff.setCellData(scwin.row, "lobranNm", "");
        $c.gus.cfAlertMsg($p, scwin.MSG_SD_ERR_002, new Array(scwin.row, "작업점소"));
        ds_tariff.removeAll();
        ds_tmp_tariff.removeAll();
        return;
      } else {
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_tariff, scwin.row, "lobranCd", "lobranNm");
      }
    }
    if (ds_tmp_tariff.getCellData(i, "dptDistrictCd") != "") {
      udc_comCode.setSelectId("retrieveDistrictList");
      let rtnList = await udc_comCode.cfCommonPopUpAsync(null, ds_tmp_tariff.getCellData(i, "dptDistrictCd"), "", "T", '5', "출발권역코드, 출발권역명", '150,170', null
      //, '1,3,'+ parent.hid_ctrtDistrictCd.value + ',,,,' + ds_tariff.nameValue(rowIndex,"commCd")
      , null, null, null, null, "F", '운송구간 정보,도착권역코드,도착권역명');
      if (rtnList == "N/A") {
        ds_tariff.setCellData(scwin.row, "dptDistrictCd", "");
        ds_tariff.setCellData(scwin.row, "dptDistrictNm", "");
        $c.gus.cfAlertMsg($p, scwin.MSG_SD_ERR_002, new Array(scwin.row, "출발권역"));
        ds_tariff.removeAll();
        ds_tmp_tariff.setCellData();
        return;
      } else {
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_tariff, scwin.row, "dptDistrictCd", "dptDistrictNm");
      }
    }
    if (ds_tmp_tariff.getCellData(i, "arvDistrictCd") != "") {
      udc_comCode.setSelectId("retrieveDistrictList");
      let rtnList = await udc_comCode.cfCommonPopUpAsync(null, ds_tmp_tariff.getCellData(i, "arvDistrictCd"), "", "T", '5', "도착권역코드, 도착권역명", '150,170', null
      // , '1,3,'+ parent.hid_ctrtDistrictCd.value + ',,,,' + ds_tariff.nameValue(rowIndex,"commCd")
      , null, null, null, null, "F", '운송구간 정보,도착권역코드,도착권역명');
      if (rtnList == "N/A") {
        ds_tariff.setCellData(scwin.row, "arvDistrictCd", "");
        ds_tariff.setCellData(scwin.row, "arvDistrictNm", "");
        $c.gus.cfAlertMsg($p, scwin.MSG_SD_ERR_002, new Array(scwin.row, "도착권역"));
        ds_tariff.removeAll();
        ds_tmp_tariff.removeAll();
        return;
      } else {
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_tariff, scwin.row, "arvDistrictCd", "arvDistrictNm");
      }
    }
  }
  ds_tmp_tariff.removeAll();
};
//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_addRow = function () {
  let insRow = ds_tariff.insertRow();
  if (ds_tariff.getTotalRow() == 1) {
    ds_tariff.setCellData(insRow, 'ctrtNo', scwin.strCtrtNo);
    ds_tariff.setCellData(insRow, 'ctrtWrkPathSeq', acb_contractWorkPath.getValue());
    ds_tariff.setCellData(insRow, 'selpchItemCd', acb_selpchItemCd.getValue());
    ds_tariff.setCellData(insRow, "crcCd", "KRW");
    ds_tariff.setCellData(insRow, "ctrtInternalTrf", "0"); //요율
  } else {
    $c.gus.f_CopyDataRow($p, ds_tariff, ds_tariff, ds_tariff.getRowPosition(), insRow);
    gr_tariff.setFocusedCell(insRow, 0);
  }
};

//-------------------------------------------------------------------------
// Formatter
//-------------------------------------------------------------------------
scwin.f_customFormatter = function (data, formattedData, rowIndex, colIndex) {
  console.log("scwin.f_customFormatter");
  if ($c.gus.cfIsNull($p, data)) return;
  let columnId = $c.util.getComponent($p, this.id).getColumnID(colIndex);
  let label;
  if (columnId == "wrkStpCd") {
    label = ds_contractWorkPathEachWorkStep.getMatchedJSON("wrkStpCd", data, true)[0].wrkStpNm;
  }
  return "[" + data + "] " + label;
};
/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  dma_compare.setJSON([]);
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_tariff.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  if (rowCnt > 0) {
    if (ds_tariff.getCellData(0, "dataMode") == "I") {
      ds_tariff.modifyAllStatus("C"); //AS-IS <script language=JavaScript for=ds_tariff event=OnLoadCompleted(rowCnt)>
    }
    gr_tariff.setFocusedCell(0, 0);
  }
};

//저장 완료
scwin.sbm_save_submitdone = async function (e) {
  console.log("scwin.sbm_save_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  //if ($c.gus.cfCheckCreateFlag())     $c.gus.cfTurnCreateFlag(false);
  ds_tariff.initRowStatus();
  scwin.f_retrieve();
  if (typeof callback === "function") {
    callback();
  }
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//요율항목 값 변경 > 작업경로 조회
scwin.acb_selpchItemCd_onchange = function (info) {
  console.log("scwin.acb_selpchItemCd");
  dma_commSearch.set("sysCd", "ContractEBC");
  dma_commSearch.set("queryId", "retrieveContractSelPchItemEachWorkPath");
  dma_commSearch.set("param1", scwin.strCtrtNo);
  dma_commSearch.set("param2", info.newValue);
  $c.sbm.execute($p, sbm_commSearch).then(e => {
    console.log("scwin.sbm_commSearch : retrieveContractSelPchItemEachWorkPath");
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_contractWorkPath.setJSON(e.responseJSON.GAUCE);
    if (ds_contractWorkPath.getCellData(0, "ctrtWrkPathNm") == "모든 경로") {
      ds_contractWorkPath.removeRow(0);
    }
    scwin.acb_contractWorkPath_onchange(); //작업경로
  });
};

//작업경로 값 변경 > 작업단계 조회
scwin.acb_contractWorkPath_onchange = function (info) {
  console.log("scwin.acb_contractWorkPath_onchange");
  dma_commSearch.set("sysCd", "ContractEBC");
  dma_commSearch.set("queryId", "retrieveContractWorkPathEachWorkStep");
  dma_commSearch.set("param1", scwin.strCtrtNo);
  dma_commSearch.set("param2", acb_contractWorkPath.getValue());
  dma_commSearch.set("param3", acb_selpchItemCd.getValue());
  $c.sbm.execute($p, sbm_commSearch).then(e => {
    console.log("scwin.sbm_commSearch : retrieveContractWorkPathEachWorkStep");
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_contractWorkPathEachWorkStep.setJSON(e.responseJSON.GAUCE);
    scwin.btn_search_onclick();
  });
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  console.log("scwin.btn_search_onclick");
  scwin.f_retrieve();
};

//그리드 공통 팝업 호출
scwin.gr_tariff_ontextimageclick = function (rowIndex, columnIndex) {
  console.log("scwin.gr_tariff_ontextimageclick");
  scwin.pWinCloseTF = "F";
  if (scwin.divOnviewChange == false) {
    scwin.gr_tariff_onviewchange();
  }
};

//그리드 OnViewCahnge - 공통 팝업 함수 호출
scwin.gr_tariff_onviewchange = function (info) {
  console.log("scwin.gr_tariff_onviewchange_Start");
  scwin.divOnviewChange = true;
  let rowIndex = ds_tariff.getRowPosition();
  let columnId = gr_tariff.getFocusedColumnID();
  pWinCloseTF = $c.util.isEmpty($p, scwin.pWinCloseTF) ? "T" : "F";
  let tmpCd = "";
  let tmpCdVal = "";
  if (columnId.trim().slice(-2) == "Nm") {
    tmpCd = columnId.replace(/Nm/g, "Cd");
    tmpCdVal = ds_tariff.getCellData(rowIndex, tmpCd);
    if (pWinCloseTF != "F") {
      tmpCdVal = "";
    }
  }
  let pTitle = "";
  let pWtitleSearch = "";
  if (columnId != "unitCd") {
    if (pWinCloseTF == "T" && columnId == "lobranNm" && ds_tariff.getCellData(rowIndex, columnId) == "") {
      // onBlur && 작업점소명 && 작업점소명이 ""일때
      let colIdx = 0;
      if (scwin.topWrkStpCd == "1") {
        colIdx = gr_tariff.getColumnIndex("dptDistrictNm");
        gr_tariff.setFocusedCell(rowIndex, colIdx, false); //출발권역
      } else if (scwin.topWrkStpCd == "2") {
        //다음row의 1번째 셀에 포커스
        colIdx = gr_tariff.getColumnIndex("wrkStpCd"); //selectBox
        if (rowIndex + 1 <= ds_tariff.getTotalRow()) {
          gr_tariff.setFocusedCell(rowIndex + 1, colIdx, false); //작업단계  
        }
      }
      return;
    }

    //onBlur일때 명칭 없어도 간혈적으로 호출되는 경우가 있어 추가함.(단위는 제외)
    if (pWinCloseTF == "T" && ds_tariff.getCellData(rowIndex, columnId) == "") {
      scwin.divOnviewChange = false;
      return;
    }
    ;
  }
  switch (columnId) {
    case "commNm":
      //품목품명 
      udc_comCode.setSelectId("retrieveCommInfo");
      udc_comCode.cfCommonPopUpAsync(scwin.callBackComm, tmpCdVal, ds_tariff.getCellData(rowIndex, "commNm"), pWinCloseTF, '3', "품목／품명코드,품목／품명,구분", '120,170,70', '4,5,6,7,8,9,10', "2,4,,," + "", null, null, null, null, null, "F", "품목／품명,품목／품명코드,품목／품명");
      break;
    case "lobranNm":
      //작업점소
      pTitle = pWinCloseTF == "T" ? "작업점소코드,작업점소명" : "물류점소코드,물류점소명";
      pWtitleSearch = pWinCloseTF == "T" ? "작업점소,작업점소코드,작업점소명" : "물류점소,물류점소코드,물류점소명";
      udc_comCode.setSelectId("retrieveLogisDeptInfo");
      udc_comCode.cfCommonPopUpAsync(scwin.callBackDept, tmpCdVal, ds_tariff.getCellData(rowIndex, "lobranNm").trim(), pWinCloseTF, '7', pTitle, '150,170', null, "A,B", null, null, null, null, null, "F", pWtitleSearch);
      break;
    case "dptDistrictNm":
      //출발권역

      pTitle = "출발권역코드, 출발권역명";
      pWtitleSearch = pWinCloseTF == "T" ? "운송구간 정보,도착권역코드,도착권역명" : "운송구간 정보,출발권역코드,출발권역명";
      udc_comCode.setSelectId("retrieveDistrictList");
      udc_comCode.cfCommonPopUp(scwin.callBackDptDistrict, tmpCdVal, ds_tariff.getCellData(rowIndex, "dptDistrictNm"), pWinCloseTF, '5', pTitle, '150,170', null
      //, '1,3,'+ parent.hid_ctrtDistrictCd.value + ',,,,' + ds_tariff.nameValue(rowIndex,"commCd")
      , '1,3,' + 'WDE' + ',,,,' + ds_tariff.getCellData(rowIndex, "commCd"), '440', '500', null, null, null, "F", pWtitleSearch);
      break;
    case "arvDistrictNm":
      //도착권역

      udc_comCode.setSelectId("retrieveDistrictList");
      udc_comCode.cfCommonPopUp(scwin.callBackArvDistrict, tmpCdVal, ds_tariff.getCellData(rowIndex, "arvDistrictNm"), pWinCloseTF, '5', "도착권역코드, 도착권역명", '150,170', null
      // , '1,3,'+ parent.hid_ctrtDistrictCd.value + ',,,,' + ds_tariff.nameValue(rowIndex,"commCd")
      , '1,3,' + 'WDE' + ',,,,' + ds_tariff.getCellData(rowIndex, "commCd"), '440', '500', null, null, null, "F", '운송구간 정보,도착권역코드,도착권역명');
      break;
    case "unitCd":
      udc_comCode.setSelectId("retrieveCommCdInfo");
      udc_comCode.cfCommonPopUpAsync(scwin.callBackUnitCd, ds_tariff.getCellData(rowIndex, "unitCd"), '', pWinCloseTF, '7', null, '150,170', null, 'LO102,,', null, null, null, null, null, "F", null);
      break;
    default:
      scwin.divOnviewChange = false;
      console.log("scwin.gr_tariff_onviewchange_default:scwin.divOnviewChange = false");
      break;
  }
  console.log("scwin.gr_tariff_onviewchange_End");
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
//품목/품명
scwin.callBackComm = function (rtnList) {
  console.log("scwin.callBackComm");
  if (rtnList == null) {
    //[X] 버튼
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "commCd", "");
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "commNm", "");
  } else if (rtnList == "N/A") {
    //[닫기] 버튼
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "commCd", dma_compare.get("commCd"));
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "commNm", dma_compare.get("commNm"));
  } else {
    //코드 선택
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "commCd", rtnList[0]);
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "commNm", rtnList[1]);
    dma_compare.set("commCd", rtnList[0]);
    dma_compare.set("commNm", rtnList[1]);
  }
  if (scwin.pWinCloseTF == "F") {
    // 팝업으로 호출된 경우
    gr_tariff.setFocusedCell(ds_tariff.getRowPosition(), "commNm", true);
  } else {
    // onBlur로 호출된 경우
    gr_tariff.setFocusedCell(ds_tariff.getRowPosition(), "unitCd", true);
  }
  scwin.divOnviewChange = false;
  scwin.pWinCloseTF = "";
  //$c.gus.cfSetGridReturnValue(rtnList, gr_tariff, gr_tariff.getFocusedRowIndex(), "commCd", "commNm");
};

//단위
scwin.callBackUnitCd = function (rtnList) {
  console.log("scwin.callBackUnitCd");
  if (rtnList == null) {
    //[X] 버튼
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "unitCd", "");
  } else if (rtnList == "N/A") {
    //[닫기] 버튼
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "unitCd", dma_compare.get("unitCd"));
  } else {
    //코드선택
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "unitCd", rtnList[0]);
    dma_compare.set("unitCd", rtnList[0]);
  }
  if (scwin.pWinCloseTF == "F") {
    // 팝업으로 호출된 경우
    gr_tariff.setFocusedCell(ds_tariff.getRowPosition(), "unitCd", true);
  } else {
    // onBlur로 호출된 경우
    gr_tariff.setFocusedCell(ds_tariff.getRowPosition(), "crcCd", true);
  }
  scwin.divOnviewChange = false;
  scwin.pWinCloseTF = "";
  //$c.gus.cfSetGridReturnValue(rtnList, gr_tariff, gr_tariff.getFocusedRowIndex(), "unitCd", "");
};

//작업점소 Callback
scwin.callBackDept = function (rtnList) {
  console.log("scwin.callBackDept");
  if (rtnList == null) {
    //[X] 버튼
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "lobranCd", "");
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "lobranNm", "");
  } else if (rtnList == "N/A") {
    //[닫기] 버튼
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "lobranCd", dma_compare.get("lobranCd"));
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "lobranNm", dma_compare.get("lobranNm"));
  } else {
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "lobranCd", rtnList[0]);
    ds_tariff.setCellData(ds_tariff.getRowPosition(), "lobranNm", rtnList[1]);
    dma_compare.set("lobranCd", rtnList[0]);
    dma_compare.set("lobranNm", rtnList[1]);
  }
  if (scwin.pWinCloseTF == "F") {
    // 팝업으로 호출된 경우
    gr_tariff.setFocusedCell(ds_tariff.getRowPosition(), "lobranNm", true);
  } else {
    //onblur로 호출된 경우
    if (scwin.topWrkStpCd == "1") {
      gr_tariff.setFocusedCell(ds_tariff.getRowPosition(), "dptDistrictNm", false); //출발권역
    } else if (scwin.topWrkStpCd == "2") {
      //다음row 1번째 셀
      // if (ds_tariff.getRowPosition() + 1 <= ds_tariff.getTotalRow()) {
      //     gr_tariff.setFocusedCell(ds_tariff.getRowPosition() + 1, "wrkStpCd", false);     //작업단계
      // }
    }
  }
  scwin.divOnviewChange = false;
  scwin.pWinCloseTF = "";
  //$c.gus.cfSetGridReturnValue(rtnList, gr_tariff, gr_tariff.getFocusedRowIndex(), "lobranCd", "lobranNm");
};

//출발권역
scwin.callBackDptDistrict = function (rtnList) {
  ds_tariff.setCellData(ds_tariff.getRowPosition(), "dptDistrictCd", rtnList[0]);
  ds_tariff.setCellData(ds_tariff.getRowPosition(), "dptDistrictNm", rtnList[1]);
  scwin.divOnviewChange = false;
  scwin.pWinCloseTF = "";
  //$c.gus.cfSetGridReturnValue(rtnList, gr_tariff, gr_tariff.getFocusedRowIndex(), "dptDistrictCd", "dptDistrictNm");
};

//도착권역
scwin.callBackArvDistrict = function (rtnList) {
  ds_tariff.setCellData(ds_tariff.getRowPosition(), "arvDistrictCd", rtnList[0]);
  ds_tariff.setCellData(ds_tariff.getRowPosition(), "arvDistrictNm", rtnList[1]);
  scwin.divOnviewChange = false;
  scwin.pWinCloseTF = "";
  //$c.gus.cfSetGridReturnValue(rtnList, gr_tariff, gr_tariff.getFocusedRowIndex(), "arvDistrictCd", "arvDistrictNm");
};

//저장 버튼
scwin.btn_save_onclick = function (e) {
  console.log("scwin.btn_save_onclick");
  scwin.f_Save('');
};

//내부요율 등록 DataSet cellDataChange
scwin.ds_tariff_oncelldatachange = function (info) {
  console.debug("scwin.ds_tariff_oncelldatachange");
  if (info === undefined) return;
  let columnId = info.colID;
  let rowIndex = info.rowIndex;
  switch (columnId) {
    case "commNm":
      //품목품명
      if (ds_tariff.getCellData(rowIndex, columnId) == "") {
        ds_tariff.setCellData(rowIndex, "commCd", "");
      }
      break;
    case "lobranNm":
      //작업점소

      if (ds_tariff.getCellData(rowIndex, columnId) == "") {
        ds_tariff.setCellData(rowIndex, "lobranCd", "");
      }
      break;
    default:
      break;
  }
};
scwin.gr_tariff_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  console.log("scwin.callBackDept");
  //여기서 최초값 저장...
  let curColId = gr_tariff.getColumnID(columnIndex);

  //<script language=JavaScript for=ds_tariff event=OnRowPosChanged(row)>
  var intRowPosition = ds_contractWorkPathEachWorkStep.getMatchedIndex("wrkStpCd", ds_tariff.getCellData(rowIndex, "wrkStpCd"));
  scwin.topWrkStpCd = ds_contractWorkPathEachWorkStep.getCellData(intRowPosition[0], "topWrkStpCd");
  if (scwin.topWrkStpCd == "1") {
    gr_tariff.setReadOnly("column", "lobranNm", true);
    gr_tariff.setReadOnly("column", "dptDistrictNm", false);
    gr_tariff.setReadOnly("column", "arvDistrictNm", false);
  } else if (scwin.topWrkStpCd == "2") {
    gr_tariff.setReadOnly("column", "lobranNm", false);
    gr_tariff.setReadOnly("column", "dptDistrictNm", true);
    gr_tariff.setReadOnly("column", "arvDistrictNm", true);
  }
  if (ds_tariff.getCellData(rowIndex, curColId) == "") return; //공백은 dma_compare에 저장할 필요 없지.

  switch (curColId) {
    case "commNm":
      //품목품명
      dma_compare.set("commNm", ds_tariff.getCellData(rowIndex, curColId)); //기존품목품명
      dma_compare.set("commCd", ds_tariff.getCellData(rowIndex, "commCd")); //기존품목품명코드
      break;
    case "unitCd":
      //단위
      dma_compare.set("unitCd", ds_tariff.getCellData(rowIndex, curColId)); //단위
      break;
    case "lobranNm":
      //작업점소
      dma_compare.set("lobranNm", ds_tariff.getCellData(rowIndex, curColId)); //작업점소명
      dma_compare.set("lobranCd", ds_tariff.getCellData(rowIndex, "lobranCd")); //작업점소코드
      break;
    case "dptDistrictNm":
      //출발권역명
      dma_compare.set("dptDistrictNm", ds_tariff.getCellData(rowIndex, curColId)); //출발권역명
      dma_compare.set("dptDistrictCd", ds_tariff.getCellData(rowIndex, "dptDistrictCd")); //출발권역코드
      break;
    case "arvDistrictNm":
      //도착권역명
      dma_compare.set("arvDistrictNm", ds_tariff.getCellData(rowIndex, curColId)); //도착권역명
      dma_compare.set("arvDistrictCd", ds_tariff.getCellData(rowIndex, "arvDistrictCd")); //도착권역코드
      break;
  }
};
scwin.gr_tariff_oncellclick = function (rowIndex, columnIndex, columnId) {
  //작업단계 DataSet 필터 적용
  // if (columnId === "wrkStpCd") {
  //     let currentVal = gr_tariff.getCellData(rowIndex, "wrkStpCd"); // 현재 행의 코드값
  //     ds_contractWorkPathEachWorkStep.setColumnFilter({
  //           type: 'row'
  //         , colIndex: 'wrkStpCd'
  //         , key: currentVal 
  //         , condition: 'and'
  //     });
  //     gr_tariff.refreshCell(rowIndex, columnIndex);
  // }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'',class:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th '},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'요율항목 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_selpchItemCd',search:'start',style:'width:250px;',submenuSize:'auto',objType:'data',validExp:'요율항목:yes',mandatory:'true',allOption:'',chooseOption:'',ref:'',textAlign:'left',delimiter:'-',displayMode:'value delim label','ev:onchange':'scwin.acb_selpchItemCd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_selpchItemCd'},E:[{T:1,N:'w2:label',A:{ref:'selpchItemNm'}},{T:1,N:'w2:value',A:{ref:'selpchItemCd'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th '},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'작업경로 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_contractWorkPath',search:'start',style:'width:250px;',submenuSize:'auto',objType:'data',mandatory:'true',allOption:'',chooseOption:'',ref:'',textAlign:'left',delimiter:'-',displayMode:'value delim label','ev:onchange':'scwin.acb_contractWorkPath_onchange',emptyIndex:'-1',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_contractWorkPath'},E:[{T:1,N:'w2:label',A:{ref:'ctrtWrkPathNm'}},{T:1,N:'w2:value',A:{ref:'ctrtWrkPathSeq'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_search',type:'button',class:'btn_cm sch',escape:'false',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'내부요율 등록 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',gridID:'gr_tariff',templateYn:'N',gridDownUserAuth:'X',grdDownOpts:'{"fileName" : "내부요율.xlsx", "sheetName" : "내부요율", "type" : "2+4+8+16"}',gridUpYn:'Y',gridUpFn:'scwin.f_upload',btnPlusYn:'Y',btnUser:'N',gridUpUserAuth:'C'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'both',visibleRowNumFix:'true',dataList:'data:ds_tariff',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_tariff',visibleRowNum:'11',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',resize:'true',dataDragDrop:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true',editModeEvent:'onclick',rowStatusVisible:'true','ev:ontextimageclick':'scwin.gr_tariff_ontextimageclick','ev:onviewchange':'scwin.gr_tariff_onviewchange','ev:oncellindexchange':'scwin.gr_tariff_oncellindexchange','ev:oncellclick':'scwin.gr_tariff_oncellclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',removeBorderStyle:'false',width:'130',inputType:'text',id:'column12',class:'col-type1',value:'작업단계',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'품목/품명코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',removeBorderStyle:'false',width:'140',inputType:'text',id:'column11',class:'col-type1',value:'품목/품명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',removeBorderStyle:'false',width:'110',inputType:'text',id:'column10',class:'col-type1',value:'단위',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',removeBorderStyle:'false',width:'70',inputType:'text',id:'column9',class:'col-type1',value:'통화',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'70',inputType:'text',style:'',id:'column15',class:'col-type1',value:'요율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'작업점소코드',displayMode:'label',hidden:'true',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'135',inputType:'text',style:'',id:'column13',class:'col-type2',value:'작업점소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',style:'',id:'column46',value:'운송구간',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'출발권역코드',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'125',inputType:'text',style:'',id:'column39',value:'출발권역',class:'col-type2',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',value:'도착권역코드',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'125',inputType:'text',style:'',id:'column21',class:'col-type2',value:'도착권역',displayMode:'label',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'130',inputType:'select',id:'wrkStpCd',blockSelect:'false',displayMode:'value delim label',textAlign:'left',allOption:'',chooseOption:'',ref:'',customFormatter:'scwin.f_customFormatter',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_contractWorkPathEachWorkStep'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'140',inputType:'textImage',id:'commNm',blockSelect:'false',displayMode:'label',textAlign:'left',validExp:'commNm:품명:yes::key',mandatory:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'110',inputType:'textImage',id:'unitCd',blockSelect:'false',displayMode:'label',textAlign:'left',validExp:'unitCd:단위:yes',mandatory:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'select',id:'crcCd',blockSelect:'false',displayMode:'label',textAlign:'left',validExp:'crcCd:통화:yes',allOption:'',chooseOption:'',ref:'',mandatory:'true',chooseOptionLabel:'""',emptyValue:'true',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_commonCodeZZ006'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ctrtInternalTrf',value:'',displayMode:'label',textAlign:'right',validExp:'ctrtInternalTrf:요율:yes:minNumber=0.01',dataType:'float',excelCellType:'number',maxLength:'13.2',minNumber:'0.01',displayFormat:'#,###.#0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lobranCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'135',inputType:'textImage',style:'',id:'lobranNm',value:'',displayMode:'label',textAlign:'left',validExp:'lobranNm::no::key',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dptDistrictCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'125',inputType:'textImage',style:'',id:'dptDistrictNm',value:'',displayMode:'label',textAlign:'left',validExp:'dptDistrictNm::no::key'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'arvDistrictCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'125',inputType:'textImage',style:'',id:'arvDistrictNm',value:'',displayMode:'label',textAlign:'left',validExp:'arvDistrictNm::no::key'}}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; '}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'spn_totalRow',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',rowAddFunction:'scwin.f_addRow',btnDelYn:'N',id:'udc_btGrdBtn',gridID:'gr_tariff',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataDragDrop:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true',dataList:'data:ds_tmp_tariff',editModeEvent:'onclick',focusMode:'row',id:'gr_tmp_tariff',resize:'true',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'display: none;',visibleRowNum:'15',visibleRowNumFix:'true','ev:onfilereadend':'scwin.gr_tmp_tariff_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption12',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type1',colSpan:'',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',rowSpan:'2',value:'작업단계',width:'130'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column40',inputType:'text',rowSpan:'2',style:'',value:'품목/품명코드',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type1',colSpan:'',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',rowSpan:'2',value:'품목/품명',width:'140'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type1',colSpan:'',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',rowSpan:'2',value:'단위',width:'110'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type1',colSpan:'',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',rowSpan:'2',value:'통화',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type1',colSpan:'',displayMode:'label',id:'column15',inputType:'text',rowSpan:'2',style:'',value:'요율',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'false',id:'column43',inputType:'text',rowSpan:'2',style:'',value:'작업점소코드',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',colSpan:'',displayMode:'label',id:'column13',inputType:'text',rowSpan:'2',style:'',value:'작업점소',width:'135'}},{T:1,N:'w2:column',A:{colSpan:'4',displayMode:'label',id:'column46',inputType:'text',rowSpan:'',style:'',value:'운송구간',width:'420'}}]},{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column47',inputType:'text',style:'',value:'출발권역코드',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column39',inputType:'text',style:'',value:'출발권역',width:'125'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column50',inputType:'text',style:'',value:'도착권역코드',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column21',inputType:'text',style:'',value:'도착권역',width:'125'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{allOption:'',blockSelect:'false',chooseOption:'',displayMode:'label',id:'wrkStpCd',inputType:'text',ref:'',removeBorderStyle:'false',textAlign:'left',width:'130'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_contractWorkPathEachWorkStep'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'false',id:'commCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commNm',inputType:'textImage',removeBorderStyle:'false',textAlign:'left',validExp:'commNm:품명:yes::key',width:'140'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'unitCd',inputType:'textImage',removeBorderStyle:'false',textAlign:'left',validExp:'unitCd:단위:yes',width:'110'}},{T:1,N:'w2:column',A:{allOption:'',blockSelect:'false',chooseOption:'',displayMode:'label',id:'crcCd',inputType:'select',ref:'',removeBorderStyle:'false',textAlign:'left',validExp:'crcCd:통화:yes',width:'70'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_commonCodeZZ006'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{dataType:'number',displayMode:'label',excelCellType:'number',id:'ctrtInternalTrf',inputType:'text',style:'',textAlign:'right',validExp:'ctrtInternalTrf:요율:yes:minNumber=0.01',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'textImage',style:'',textAlign:'left',validExp:'lobranNm::no::key',value:'',width:'135'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'false',id:'dptDistrictCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictNm',inputType:'textImage',style:'',textAlign:'left',validExp:'dptDistrictNm::no::key',value:'',width:'125'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'false',id:'arvDistrictCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictNm',inputType:'textImage',style:'',textAlign:'left',validExp:'arvDistrictNm::no::key',value:'',width:'125'}}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'',nameId:'',popupID:'',selectID:'',style:'width:%; height:px; ',validTitle:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'display: none;',id:'btn_xls',label:'삭제',type:'button',class:'btn white',userAuth:'C','ev:onclick':'scwin.btn_xls_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Excel등록'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',label:'저장',type:'button',class:'btn',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'popupComCode',selectID:'',codeId:'ed_comCode',validTitle:'',nameId:'ed_comCodeNm',style:'width:%; height:px;display: none;',id:'udc_comCode',btnId:'btn_comCode'}}]}]}]})