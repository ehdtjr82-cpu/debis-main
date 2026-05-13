/*amd /ui/ps/eq/fmsmgnt/fmsoilmgnt/eq_610_01_01b.xml 66924 78b4f2f51561d7bb9da6b77d25970a33f405389556dbd0024ce31ac3af140e31 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_oilStatInfoTreeCon'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'useYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConKnd',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oilStatInfoTree',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_oilStatInfoTree_onrowpositionchange','ev:onbeforerowpositionchange':'scwin.ds_oilStatInfoTree_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'oilOilStatNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperOilStrPlcNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperOilStrPlcNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatLvlClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilSelfClsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spotsaleYn',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNm',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockAcctDeptCd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockAcctDeptNm',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opnOfcDt',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closOfcDt',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picNm',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilTskClsCd',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsaleYn',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntClsCd',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frchNo',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frchNoSh',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgKndCd',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lvl',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pcostAcctDeptCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pcostAcctDeptNm',name:'name26',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_chkOilStatNoDup',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'oilOilStatNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperOilStrPlcNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperOilStrPlcNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatLvlClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilSelfClsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spotsaleYn',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNm',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockAcctDeptCd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockAcctDeptNm',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opnOfcDt',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closOfcDt',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picNm',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilTskClsCd',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsaleYn',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntClsCd',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frchNo',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frchNoSh',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgKndCd',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lvl',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pcostAcctDeptCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pcostAcctDeptNm',name:'name26',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_oilStatInfoCon'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'oilOilStatNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oilPch',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'oilOilStatNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardTrmnlNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_oilStatInfoBySave'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'oilOilStatNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilStatNm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upperOilStrPlcNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upperOilStrPlcNm',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilStatLvlClsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilSelfClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spotsaleYn',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repClntNo',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repClntNm',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgAcctDeptCd',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgAcctDeptNm',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stockAcctDeptCd',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stockAcctDeptNm',name:'name16',dataType:'text'}},{T:1,N:'w2:key',A:{id:'opnOfcDt',name:'name17',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closOfcDt',name:'name18',dataType:'text'}},{T:1,N:'w2:key',A:{id:'picNm',name:'name19',dataType:'text'}},{T:1,N:'w2:key',A:{id:'telNo',name:'name20',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'name21',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilTskClsCd',name:'name22',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rmk',name:'name23',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dsaleYn',name:'name24',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pcostAcctDeptCd',name:'name25',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pcostAcctDeptNm',name:'name26',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntClsCd',name:'name27',dataType:'text'}},{T:1,N:'w2:key',A:{id:'frchNo',name:'name28',dataType:'text'}},{T:1,N:'w2:key',A:{id:'frchNoSh',name:'name29',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgKndCd',name:'name30',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lvl',name:'name29',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveOilStatInfoList',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveOilStationInfoListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_oilStatInfoTreeCon","key":"IN_DS1"},{"id":"ds_oilStatInfoTree","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_oilStatInfoTree","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveOilStatInfoListByDupChk',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveOilStationInfoListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_oilStatInfoTreeCon","key":"IN_DS1"},{"id":"ds_chkOilStatNoDup","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_chkOilStatNoDup","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveOilStatContentsList',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveOilStationContentsListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_oilStatInfoCon","key":"IN_DS1"},{"id":"ds_oilPch","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_oilPch","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_updateOilStatInfo',action:'/ps.eq.fmsmgnt.fmsoilmgnt.UpdateOilStationInformationListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_oilStatInfoBySave","key":"IN_DS1"},{"id":"ds_oilPch","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_createOilStatInfo',action:'/ps.eq.fmsmgnt.fmsoilmgnt.CreateOilStationInformationListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_oilStatInfoBySave","key":"IN_DS1"},{"id":"ds_oilPch","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/js/ps/pscommon.js',type:'text/javascript',scopeVariable:'pscommon'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.oilOilStatNo = "";
scwin.strCurDate = "";
scwin.isRetrieveTree = false; //TreeView의 데이터셋 조회여부
scwin.EXPEND_FG = 0;
scwin.preRow = 0;
scwin.viewMode = "S";
scwin.createRow = 0;
scwin.saveBranchCd = "";
scwin.dupChkOilStatNo = "";
scwin.isDupchk = false;
scwin.savePatternCd = "";
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.oilOilStatNo = scwin.params.oilStatNo || "";
  scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  const codeOptions = [{
    grpCd: "TL108",
    compID: "lc_oilStatLvlClsCd"
  } // 셀렉트
  , {
    grpCd: "TL112",
    compID: "lc_clntClsCd"
  } // 셀렉트
  , {
    grpCd: "TL109",
    compID: "lc_bilgKndCd"
  } // 부가세분기구분
  ];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  lc_useYn.setValue(9);
  await scwin.f_retrieveOilStatInfoTree();
  scwin.f_ContentsDisable();
  if (scwin.oilOilStatNo != "") {
    ed_oilStatNo.setValue(scwin.oilOilStatNo);
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 화면 좌측 Tree데이타 조회
//-------------------------------------------------------------------------
scwin.f_retrieveOilStatInfoTree = async function () {
  scwin.isRetrieveTree = false;
  dma_oilStatInfoTreeCon.set("useYn", lc_useYn.getValue());
  dma_oilStatInfoTreeCon.set("qryConKnd", "ALL");
  ds_oilStatInfoTree.removeAll();
  var result = await $c.sbm.execute($p, sbm_retrieveOilStatInfoList);
  if (result.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    //for=ds_oilStatInfoTree event=OnLoadCompleted(rowCnt)
    var rowCnt = ds_oilStatInfoTree.getRowCount();
    scwin.isRetrieveTree = true;
    if (rowCnt > 0) {
      tv_oilStatInfoTree.spanNode(1, true, false);
      tv_oilStatInfoTree.findNodeByIndex(hid_tvIndex.getValue(), true);
    }
  } else {
    scwin.isRetrieveTree = false;
  }
};

//-------------------------------------------------------------------------
// 좌측 지점 트리 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  if (!(await $c.gus.cfValidate($p, [ed_oilStatNo]))) {
    return;
  }
  var oilStatNo = ed_oilStatNo.getValue();
  if (ds_oilStatInfoTree.getMatchedIndex("oilOilStatNo", oilStatNo) > 0) {
    //if (ds_oilStatInfoTree.NameValueRow("oilOilStatNo", oilStatNo) > 0) {
    if (ds_oilStatInfoTree.getRowPosition() == ds_oilStatInfoTree.getMatchedIndex("oilOilStatNo", oilStatNo)) {
      //ds_oilStatInfoTree.NameValueRow("oilOilStatNo", oilStatNo)) {
      if (scwin.viewMode == "U" || scwin.viewMode == "C") {
        if (!(await $c.win.confirm($p, "현재 작업중 입니다. 취소 하시겠습니까?"))) {
          return;
        }
      }
      if (scwin.viewMode == "C" && ds_oilStatInfoTree.getRowStatus(scwin.createRow) == "C") {
        ds_oilStatInfoTree.deleteRow(scwin.createRow);
      }
      sub_title.setValue(ds_oilStatInfoTree.getCellData(ds_oilStatInfoTree.getRowPosition(), "oilStatNm"));
      scwin.f_getOilStatInfo(ds_oilStatInfoTree.getRowPosition());
      scwin.f_RetrieveOilStatInfo(ds_oilStatInfoTree.getRowPosition());
    } else {
      scwin.preRow = 0; //scwin.preRow = -1;

      // tobe추가:조회부분에 주유소 값이 있을시, 상위주유소펼쳐지고 해당 주유소로 포커스 셋팅
      var oilcd = ds_oilStatInfoTree.getMatchedJSON("oilOilStatNo", ed_oilStatNo.getValue());
      tv_oilStatInfoTree.expandNode(oilcd[0].upperOilStrPlcNo);
      tv_oilStatInfoTree.findNodeByValue(ed_oilStatNo.getValue(), true);
      ds_oilStatInfoTree.setRowPosition(ds_oilStatInfoTree.getMatchedIndex("oilOilStatNo", oilStatNo));
    }
    $c.gus.cfDisableBtn($p, [b_Cancel2, b_Save2]); //$c.gus.cfDisableBtn([b_Cancel1, b_Cancel2, b_Save1, b_Save2]);
    $c.gus.cfEnableObjects($p, [b_Create2, b_Update2]); //$c.gus.cfEnableObjects([b_Create1, b_Create2, b_Update1, b_Update2]);
  }
};

//-------------------------------------------------------------------------
// 지점  현황 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveOilStatInfo = async function (row) {
  dma_oilStatInfoCon.set("oilOilStatNo", ds_oilStatInfoTree.getCellData(row, "oilOilStatNo"));
  ds_oilPch.removeAll();
  var result = await $c.sbm.execute($p, sbm_retrieveOilStatContentsList);

  //for=ds_oilPch event=OnLoadCompleted(rowcnt)
  if (result.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    var rowCnt = ds_oilPch.getRowCount();
    totalRows1.setValue(rowCnt);
  }
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Clear = async function (e) {
  var row = 0;
  if (ds_oilStatInfoTree.getRowPosition() > 0) {
    row = ds_oilStatInfoTree.getRowPosition();
  }
  var oilStatNo = ds_oilStatInfoTree.getCellData(row, "oilOilStatNo");
  var oilStatNm = ds_oilStatInfoTree.getCellData(row, "oilStatNm");
  var curLevel = $c.num.parseInt($p, tv_oilStatInfoTree.getSelectedElement().lvl); //tv_oilStatInfoTree.ItemLevel;

  if (curLevel > 2) {
    await $c.gus.cfAlertMsg($p, "지점 밑으로는 추가 할 수 없습니다.");
    return false;
  }
  if (!(await $c.win.confirm($p, oilStatNm + "의 하위 점소를 새로 등록 하시겠습니까?"))) {
    return;
  }
  var oilStatNm = curLevel == 0 ? "신규지사" : "신규지점";
  var rowJson = {
    "lvl": curLevel + 1,
    "oilStatNm": oilStatNm,
    "upperOilStrPlcNo": oilStatNo
  };
  if (ds_oilStatInfoTree.getRowPosition() == ds_oilStatInfoTree.getRowCount() - 1 || ds_oilStatInfoTree.getRowPosition() <= 0) {
    // 처음이나 마지막 로우인 경우
    ds_oilStatInfoTree.setRowJSON(ds_oilStatInfoTree.getRowCount(), rowJson);
  } else {
    // 중간로우인 경우
    ds_oilStatInfoTree.setRowJSON(row + 1, rowJson);
  }
  scwin.createRow = ds_oilStatInfoTree.getRowPosition() <= 0 ? 0 : ds_oilStatInfoTree.getRowPosition();
  tv_oilStatInfoTree.findNodeByIndex(scwin.createRow + 2, true);
  scwin.viewMode = "C";
  $c.gus.cfInitObjects($p, tbl_content);
  chb_useYn.checkAll(true); //chb_useYn.checked = true;

  ed_opnOfcDt.setValue(scwin.strCurDate);
  ed_upperOilStrPlcNo.setValue(oilStatNo);
  txt_upperOilStrPlcNm.setValue(oilStatNm);
  scwin.f_ContentsEnable();
  txt_oilStatNo.focus();
  ds_oilPch.removeAll();
  sub_title.setValue("신규지점 등록");
  ed_oilStatNo.setValue("");
  txt_oilStatNm.setValue("");
  if (curLevel == 0) {
    scwin.savePatternCd = "S";
  } else if (curLevel == 1) {
    scwin.savePatternCd = "J";
  } else if (curLevel == 2) {
    scwin.savePatternCd = "O";
  } else {
    await $c.gus.cfAlertMsg($p, "주유소 구분 코드  에러입니다.");
    return false;
  }
  lc_oilStatLvlClsCd.setValue(scwin.savePatternCd);
  lc_bilgKndCd.setValue("M"); // 청구종류 : 월단위청구

  $c.gus.cfDisableBtn($p, [b_Create2, b_Update2]); //$c.gus.cfDisableBtn([b_Create1, b_Create2, b_Update1, b_Update2]);
  $c.gus.cfEnableObjects($p, [b_Cancel2, b_Save2]); //$c.gus.cfEnableObjects([b_Cancel1, b_Cancel2, b_Save1, b_Save2]);
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = async function (e) {
  if (ds_oilStatInfoTree.getCellData(ds_oilStatInfoTree.getRowPosition(), "oilOilStatNo") == "AAA") {
    await $c.gus.cfAlertMsg($p, "전체는 수정 할 수 없습니다.");
    return;
  }
  scwin.viewMode = "U";
  scwin.f_ContentsEnable();
  $c.gus.cfDisableBtn($p, [b_Create2, b_Update2]); //$c.gus.cfDisableBtn([b_Create1, b_Create2, b_Update1, b_Update2]);
  $c.gus.cfEnableObjects($p, [b_Cancel2, b_Save2]); //$c.gus.cfEnableObjects([b_Cancel1, b_Cancel2, b_Save1, b_Save2]);
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = async function (e) {
  var row = ds_oilStatInfoTree.getRowPosition();
  if (scwin.viewMode == "U") {
    if (scwin.isRetrieveTree) {
      if (!(await $c.win.confirm($p, "현재 작업중 입니다. 취소 하시겠습니까?"))) {
        return;
      }
      sub_title.setValue(ds_oilStatInfoTree.getCellData(row, "oilStatNm"));
      scwin.f_getOilStatInfo(row);
      scwin.f_RetrieveOilStatInfo(row);
      scwin.viewMode = "S";
    }
    scwin.f_ContentsDisable();
  } else if (scwin.viewMode == "C") {
    scwin.preRow = 0; //scwin.preRow = -1;
    ds_oilStatInfoTree.setRowPosition(0);
  }
  $c.gus.cfDisableBtn($p, [b_Cancel2, b_Save2]); //$c.gus.cfDisableBtn([b_Cancel1, b_Cancel2, b_Save1, b_Save2]);
  $c.gus.cfEnableObjects($p, [b_Create2, b_Update2]); //$c.gus.cfEnableObjects([b_Create1, b_Create2, b_Update1, b_Update2]);
};

//-------------------------------------------------------------------------
// 중복체크
//-------------------------------------------------------------------------
scwin.f_chkOilStatNoDup = async function (e) {
  if (!(await $c.gus.cfValidate($p, [txt_oilStatNo]))) {
    return;
  }
  scwin.isDupchk = false;
  scwin.dupChkOilStatNo = txt_oilStatNo.getValue();
  ds_chkOilStatNoDup.removeAll();
  var result = await $c.sbm.execute($p, sbm_retrieveOilStatInfoListByDupChk);

  //for=ds_chkOilStatNoDup event=OnLoadCompleted(rowCnt)
  if (result.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    if (ds_oilStatInfoTree.getMatchedIndex("oilOilStatNo", scwin.dupChkOilStatNo) > 0) {
      await $c.gus.cfAlertMsg($p, scwin.dupChkOilStatNo + "는 이미 등록된 점소코드 입니다.");
      scwin.isDupchk = false;
      //cfCopyDataSet(ds_chkOilStatNoDup, ds_oilStatInfoTree);
      //tv_oilStatInfoTree.reset();
    } else {
      scwin.isDupchk = true;
      await $c.gus.cfAlertMsg($p, scwin.dupChkOilStatNo + "는 등록 가능 합니다.");
    }
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  if (!(await $c.gus.cfValidate($p, [txt_oilStatNo, txt_oilStatNm, ed_upperOilStrPlcNo, lc_oilStatLvlClsCd, lc_homeClsCd, lc_oilSelfClsCd, chb_spotsaleYn, ed_clntNo, ed_bilgAcctDeptCd, ed_stockAcctDeptCd, ed_opnOfcDt, txt_picNm, txt_telNo, chb_useYn, lc_oilTskClsCd, txt_telNo, lc_clntClsCd, txt_frchNoSh, ed_repClntNo]))) {
    return;
  }

  //saveOilStatCd = txt_oilStatNo.value; //tobe 삭제 : 호출하는곳 미존재

  if (!(await scwin.f_setOilStatInfo())) {
    return;
  }
  var oilStatNo = dma_oilStatInfoBySave.get(0, "oilOilStatNo");
  for (var i = 0; i < ds_oilPch.getRowCount(); i++) {
    if (ds_oilPch.getRowStatus(i) == "C") {
      ds_oilPch.setCellData(i, "oilOilStatNo", oilStatNo);
    }
  }
  if (scwin.viewMode == "U") {
    var result = await $c.sbm.execute($p, sbm_updateOilStatInfo);

    //for="tr_updateOilStatInfo" event="OnSuccess()
    if (result.responseJSON.resultDataSet[0].Msg != 'FAIL') {
      await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
      scwin.f_retrieveOilStatInfoTree();
    }
  } else if (scwin.viewMode == "C") {
    if (!scwin.isDupchk || txt_oilStatNo.getValue() != scwin.dupChkOilStatNo) {
      await $c.gus.cfAlertMsg($p, "중복체크를 하셔야 합니다.");
      return;
    }
    var result = await $c.sbm.execute($p, sbm_createOilStatInfo);

    //for="tr_createOilStatInfo" event="OnSuccess()"
    if (result.responseJSON.resultDataSet[0].Msg != 'FAIL') {
      await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
      scwin.f_retrieveOilStatInfoTree();
    }
  }
};

//-------------------------------------------------------------------------
// 항목 Disable
//-------------------------------------------------------------------------
scwin.f_ContentsDisable = function () {
  $c.gus.cfEnableObj($p, txt_oilStatNo, false);
  $c.gus.cfEnableObj($p, txt_oilStatNm, false);
  $c.gus.cfEnableObj($p, btn_oilStatNoDup, false);
  $c.gus.cfEnableObj($p, ed_upperOilStrPlcNo, false);
  $c.gus.cfEnableObj($p, txt_upperOilStrPlcNm, false);
  $c.gus.cfEnableObj($p, btn_upperOilStrPlcNo, false);
  $c.gus.cfEnableObj($p, lc_oilStatLvlClsCd, false);
  $c.gus.cfEnableObj($p, lc_homeClsCd, false);
  $c.gus.cfEnableObj($p, lc_oilSelfClsCd, false);
  $c.gus.cfEnableObj($p, chb_spotsaleYn, false);
  $c.gus.cfEnableObj($p, ed_clntNo, false);
  $c.gus.cfEnableObj($p, txt_clntNm, false);
  $c.gus.cfEnableObj($p, btn_clntNo, false);
  $c.gus.cfEnableObj($p, ed_repClntNo, false);
  $c.gus.cfEnableObj($p, txt_repClntNm, false);
  $c.gus.cfEnableObj($p, btn_repClntNo, false);
  $c.gus.cfEnableObj($p, ed_bilgAcctDeptCd, false);
  $c.gus.cfEnableObj($p, txt_bilgAcctDeptNm, false);
  $c.gus.cfEnableObj($p, btn_bilgAcctDeptCd, false);
  $c.gus.cfEnableObj($p, ed_stockAcctDeptCd, false);
  $c.gus.cfEnableObj($p, txt_stockAcctDeptNm, false);
  $c.gus.cfEnableObj($p, btn_stockAcctDeptCd, false);
  $c.gus.cfEnableObj($p, ed_opnOfcDt, false);
  //$c.gus.cfEnableObj(btn_opnOfcDt, false);
  $c.gus.cfEnableObj($p, ed_closOfcDt, false);
  //$c.gus.cfEnableObj(btn_closOfcDt, false);
  $c.gus.cfEnableObj($p, txt_picNm, false);
  $c.gus.cfEnableObj($p, txt_telNo, false);
  $c.gus.cfEnableObj($p, chb_useYn, false);
  $c.gus.cfEnableObj($p, lc_oilTskClsCd, false);
  $c.gus.cfEnableObj($p, txt_rmk, false);
  $c.gus.cfEnableObj($p, chb_dsaleYn, false);
  $c.gus.cfEnableObj($p, lc_clntClsCd, false); // 거래처구분
  $c.gus.cfEnableObj($p, txt_frchNoSh, false);
  $c.gus.cfEnableObj($p, lc_bilgKndCd, false);
  $c.gus.cfEnableObj($p, btn_addRow1, false);
  $c.gus.cfEnableObj($p, btn_deleteRow1, false);
  $c.gus.cfEnableObj($p, btn_cancelRow1, false);
  gr_oilPch.setGridReadOnly(true);
};

//-------------------------------------------------------------------------
// 항목 Disable
//-------------------------------------------------------------------------
scwin.f_ContentsEnable = function () {
  if (scwin.viewMode == "C") {
    $c.gus.cfEnableObj($p, txt_oilStatNo, true);
    $c.gus.cfEnableObj($p, btn_oilStatNoDup, true);
  }
  if (scwin.viewMode == "U") {
    $c.gus.cfEnableObj($p, ed_upperOilStrPlcNo, true);
    $c.gus.cfEnableObj($p, txt_upperOilStrPlcNm, true);
    $c.gus.cfEnableObj($p, btn_upperOilStrPlcNo, true);
    $c.gus.cfEnableObj($p, lc_oilStatLvlClsCd, true);
  }
  $c.gus.cfEnableObj($p, txt_oilStatNm, true);
  $c.gus.cfEnableObj($p, lc_homeClsCd, true);
  $c.gus.cfEnableObj($p, lc_oilSelfClsCd, true);
  $c.gus.cfEnableObj($p, chb_spotsaleYn, true);
  $c.gus.cfEnableObj($p, ed_clntNo, true);
  $c.gus.cfEnableObj($p, txt_clntNm, true);
  $c.gus.cfEnableObj($p, btn_clntNo, true);
  $c.gus.cfEnableObj($p, ed_repClntNo, true);
  $c.gus.cfEnableObj($p, txt_repClntNm, true);
  $c.gus.cfEnableObj($p, btn_repClntNo, true);
  $c.gus.cfEnableObj($p, ed_bilgAcctDeptCd, true);
  $c.gus.cfEnableObj($p, txt_bilgAcctDeptNm, true);
  $c.gus.cfEnableObj($p, btn_bilgAcctDeptCd, true);
  $c.gus.cfEnableObj($p, ed_stockAcctDeptCd, true);
  $c.gus.cfEnableObj($p, txt_stockAcctDeptNm, true);
  $c.gus.cfEnableObj($p, btn_stockAcctDeptCd, true);
  $c.gus.cfEnableObj($p, ed_opnOfcDt, true);
  //$c.gus.cfEnableObj(btn_opnOfcDt, true);
  $c.gus.cfEnableObj($p, ed_closOfcDt, true);
  //$c.gus.cfEnableObj(btn_closOfcDt, true);
  $c.gus.cfEnableObj($p, txt_picNm, true);
  $c.gus.cfEnableObj($p, txt_telNo, true);
  $c.gus.cfEnableObj($p, chb_useYn, true);
  $c.gus.cfEnableObj($p, lc_oilTskClsCd, true);
  $c.gus.cfEnableObj($p, txt_rmk, true);
  $c.gus.cfEnableObj($p, chb_dsaleYn, true);
  $c.gus.cfEnableObj($p, lc_clntClsCd, true); // 거래처구분
  $c.gus.cfEnableObj($p, txt_frchNoSh, true);
  $c.gus.cfEnableObj($p, lc_bilgKndCd, true);
  $c.gus.cfEnableObj($p, btn_addRow1, true);
  $c.gus.cfEnableObj($p, btn_deleteRow1, true);
  $c.gus.cfEnableObj($p, btn_cancelRow1, true);
  gr_oilPch.setGridReadOnly(false);
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 정산귀속부서코드팝업
      udc_bilgAcctDept.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_bilgAcctDeptCd, txt_bilgAcctDeptNm); // 부서코드, 부서명
      }, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      // 재고귀속부서코드팝업
      udc_stockAcctDept.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_stockAcctDeptCd, txt_stockAcctDeptNm); // 부서코드, 부서명
      }, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 3:
      // 거래처코드팝업
      udc_clnt.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, txt_clntNm); // 거래처코드, 거래처명
      }, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;

    //tobe 삭제 : 호출부분 미존재
    // case 4:
    //     // 주유소팝업
    //     rtnList = cfCommonPopUp('retrieveFmsOilStationInfo', pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
    //     cfSetReturnValue(rtnList, ed_oilStatNo, txt_oilStaNm);  // 주유소코드, 주유소명
    //     break;

    // case 5:
    //     // 상위주유소팝업
    //     rtnList = cfCommonPopUp('retrieveFmsOilStationInfo', pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
    //     cfSetReturnValue(rtnList, ed_upperOilStrPlcNo, txt_upperOilStrPlcNm);  // 주유소코드, 주유소명
    //     break;

    // case 6:
    //     // 원가귀속부서코드팝업
    //     rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo', pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
    //     cfSetReturnValue(rtnList, ed_pcostAcctDeptCd, txt_pcostAcctDeptNm);  // 부서코드, 부서명
    //     break;

    case 7:
      // 대표거래처코드팝업
      udc_repClnt.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_repClntNo, txt_repClntNm); // 대표거래처코드, 거래처명
      }, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
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
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 트리에서 선택된 지점정보 set 
//-------------------------------------------------------------------------
scwin.f_getOilStatInfo = function (row) {
  scwin.f_ContentsDisable();
  txt_oilStatNo.setValue(ds_oilStatInfoTree.getCellData(row, "oilOilStatNo"));
  txt_oilStatNm.setValue(ds_oilStatInfoTree.getCellData(row, "oilStatNm"));
  //ed_oilStatNo.setValue(ds_oilStatInfoTree.getCellData(row, "oilOilStatNo"));
  //txt_oilStatNm.setValue(ds_oilStatInfoTree.getCellData(row, "oilStatNm"));
  ed_upperOilStrPlcNo.setValue(ds_oilStatInfoTree.getCellData(row, "upperOilStrPlcNo"));
  txt_upperOilStrPlcNm.setValue(ds_oilStatInfoTree.getCellData(row, "upperOilStrPlcNm"));
  lc_oilStatLvlClsCd.setValue(ds_oilStatInfoTree.getCellData(row, "oilStatLvlClsCd"));
  lc_homeClsCd.setValue(ds_oilStatInfoTree.getCellData(row, "homeClsCd"));
  lc_oilSelfClsCd.setValue(ds_oilStatInfoTree.getCellData(row, "oilSelfClsCd"));
  chb_spotsaleYn.setValue(ds_oilStatInfoTree.getCellData(row, "spotsaleYn"));
  ed_clntNo.setValue(ds_oilStatInfoTree.getCellData(row, "clntNo"));
  txt_clntNm.setValue(ds_oilStatInfoTree.getCellData(row, "clntNm"));
  ed_repClntNo.setValue(ds_oilStatInfoTree.getCellData(row, "repClntNo"));
  txt_repClntNm.setValue(ds_oilStatInfoTree.getCellData(row, "repClntNm"));
  ed_bilgAcctDeptCd.setValue(ds_oilStatInfoTree.getCellData(row, "bilgAcctDeptCd"));
  txt_bilgAcctDeptNm.setValue(ds_oilStatInfoTree.getCellData(row, "bilgAcctDeptNm"));
  ed_stockAcctDeptCd.setValue(ds_oilStatInfoTree.getCellData(row, "stockAcctDeptCd"));
  txt_stockAcctDeptNm.setValue(ds_oilStatInfoTree.getCellData(row, "stockAcctDeptNm"));
  ed_opnOfcDt.setValue(ds_oilStatInfoTree.getCellData(row, "opnOfcDt"));
  ed_closOfcDt.setValue(ds_oilStatInfoTree.getCellData(row, "closOfcDt"));
  txt_picNm.setValue(ds_oilStatInfoTree.getCellData(row, "picNm"));
  txt_telNo.setValue(ds_oilStatInfoTree.getCellData(row, "telNo"));
  chb_useYn.setValue(ds_oilStatInfoTree.getCellData(row, "useYn"));
  lc_oilTskClsCd.setValue(ds_oilStatInfoTree.getCellData(row, "oilTskClsCd"));
  txt_rmk.setValue(ds_oilStatInfoTree.getCellData(row, "rmk"));
  chb_dsaleYn.setValue(ds_oilStatInfoTree.getCellData(row, "dsaleYn"));
  lc_clntClsCd.setValue(ds_oilStatInfoTree.getCellData(row, "clntClsCd")); // 거래처구분
  txt_frchNo.setValue(ds_oilStatInfoTree.getCellData(row, "frchNo"));
  txt_frchNoSh.setValue(ds_oilStatInfoTree.getCellData(row, "frchNoSh"));
  lc_bilgKndCd.setValue(ds_oilStatInfoTree.getCellData(row, "bilgKndCd"));
};

//-------------------------------------------------------------------------
// 저장할  지점정보 get
//-------------------------------------------------------------------------
scwin.f_setOilStatInfo = async function () {
  //cfCopyDataSetHeader(ds_oilStatInfoTree, ds_oilStatInfoBySave);
  //ds_oilStatInfoBySave.addRow();

  var upperOilStrPlcNo = ed_upperOilStrPlcNo.getValue();
  var upperLevel = ds_oilStatInfoTree.getCellData(ds_oilStatInfoTree.getCellData("oilOilStatNo", upperOilStrPlcNo), "lvl");
  if (upperLevel == 0) {
    scwin.savePatternCd = "S";
  } else if (upperLevel == 1) {
    scwin.savePatternCd = "J";
  } else if (upperLevel == 2) {
    scwin.savePatternCd = "O";
  } else {
    await $c.gus.cfAlertMsg($p, "지점 구분 코드 에러입니다.");
    return false;
  }
  dma_oilStatInfoBySave.set("oilOilStatNo", txt_oilStatNo.getValue());
  dma_oilStatInfoBySave.set("oilStatNm", txt_oilStatNm.getValue());
  dma_oilStatInfoBySave.set("upperOilStrPlcNo", ed_upperOilStrPlcNo.getValue());
  dma_oilStatInfoBySave.set("upperOilStrPlcNm", txt_upperOilStrPlcNm.getValue());
  dma_oilStatInfoBySave.set("oilStatLvlClsCd", scwin.savePatternCd);
  dma_oilStatInfoBySave.set("homeClsCd", lc_homeClsCd.getValue());
  dma_oilStatInfoBySave.set("oilSelfClsCd", lc_oilSelfClsCd.getValue());
  dma_oilStatInfoBySave.set("spotsaleYn", chb_spotsaleYn.getValue());
  dma_oilStatInfoBySave.set("clntNo", ed_clntNo.getValue());
  dma_oilStatInfoBySave.set("clntNm", txt_clntNm.getValue());
  dma_oilStatInfoBySave.set("repClntNo", ed_repClntNo.getValue());
  dma_oilStatInfoBySave.set("repClntNm", txt_repClntNm.getValue());
  dma_oilStatInfoBySave.set("bilgAcctDeptCd", ed_bilgAcctDeptCd.getValue());
  dma_oilStatInfoBySave.set("bilgAcctDeptNm", txt_bilgAcctDeptNm.getValue());
  dma_oilStatInfoBySave.set("stockAcctDeptCd", ed_stockAcctDeptCd.getValue());
  dma_oilStatInfoBySave.set("stockAcctDeptNm", txt_stockAcctDeptNm.getValue());
  dma_oilStatInfoBySave.set("opnOfcDt", ed_opnOfcDt.getValue());
  dma_oilStatInfoBySave.set("closOfcDt", ed_closOfcDt.getValue());
  dma_oilStatInfoBySave.set("picNm", txt_picNm.getValue());
  dma_oilStatInfoBySave.set("telNo", txt_telNo.getValue());
  dma_oilStatInfoBySave.set("useYn", chb_useYn.getValue());
  dma_oilStatInfoBySave.set("oilTskClsCd", lc_oilTskClsCd.getValue());
  dma_oilStatInfoBySave.set("rmk", txt_rmk.getValue());
  dma_oilStatInfoBySave.set("dsaleYn", chb_dsaleYn.getValue());
  dma_oilStatInfoBySave.set("pcostAcctDeptCd", "00276"); // 원가귀속 의미없음 : ed_pcostAcctDeptCd.text)
  dma_oilStatInfoBySave.set("pcostAcctDeptNm", "FMS운영"); // 원가귀속 의미없음 : txt_pcostAcctDeptNm.value;
  dma_oilStatInfoBySave.set("clntClsCd", lc_clntClsCd.getValue()); // 거래처구분
  dma_oilStatInfoBySave.set("frchNo", txt_frchNo.getValue());
  dma_oilStatInfoBySave.set("frchNoSh", txt_frchNoSh.getValue());
  dma_oilStatInfoBySave.set("bilgKndCd", lc_bilgKndCd.getValue());
  dma_oilStatInfoBySave.set("frchNo", "0"); // 가맹점번호(신한카드) 제거

  return true;
};

//-------------------------------------------------------------------------
// 트리의 LEVLE확장/축소
//-------------------------------------------------------------------------
scwin.f_Expend = function (e) {
  var focusRow = ds_oilStatInfoTree.getRowPosition() == -1 ? 1 : ds_oilStatInfoTree.getRowPosition();
  if (scwin.EXPEND_FG == 1) {
    tv_oilStatInfoTree.spanNode(1, false, true);
    scwin.EXPEND_FG = 0;
    btn_Expend.setValue("확장");
  } else {
    tv_oilStatInfoTree.spanNode(1, true, true);
    scwin.EXPEND_FG = 1;
    btn_Expend.setValue("접기");
  }
  tv_oilStatInfoTree.findNodeByIndex(focusRow, true);
};

//-------------------------------------------------------------------------
// 조회조건 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
};

//-------------------------------------------------------------------------
// 그리드 추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  ds_oilPch.insertRow();
  gr_oilPch.setFocusedCell(ds_oilPch.getRowCount() - 1, "cardTrmnlNo");
};

//-------------------------------------------------------------------------
// 그리드 행삭제
//-------------------------------------------------------------------------
scwin.f_DeleteRow = function () {
  var focusRow = gr_oilPch.getFocusedRowIndex(); //현재 포커스 되어있는 row

  if (ds_oilPch.getRowStatus(focusRow) == "C") {
    //추가된 행
    ds_oilPch.removeRow(focusRow);
  } else {
    ds_oilPch.deleteRow(focusRow);
  }
};

//-------------------------------------------------------------------------
// 그리드 취소
//-------------------------------------------------------------------------
scwin.f_CancelRow = function () {
  ds_oilPch.undoAll();
};
scwin.txt_oilStatNo_onkeypress = function (e) {
  $c.gus.cfToUpper($p, txt_oilStatNo);
};
scwin.udc_oilStat_onviewchangeNameEvent = async function (info) {
  await pscommon.RcfOilStatPop(ed_oilStatNo, txt_oilStaNm, 'NM', '전체', '전체');
};
scwin.udc_oilStat_onclickEvent = async function (e) {
  await pscommon.RcfOilStatPop(ed_oilStatNo, txt_oilStaNm, 'IMG', '전체', '전체');
};
scwin.udc_upperOilStrPlc_onviewchangeNameEvent = async function (info) {
  await pscommon.RcfOilStatPop(ed_upperOilStrPlcNo, txt_upperOilStrPlcNm, 'NM', '전체', '전체');
};
scwin.udc_upperOilStrPlc_onclickEvent = async function (e) {
  await pscommon.RcfOilStatPop(ed_upperOilStrPlcNo, txt_upperOilStrPlcNm, 'IMG', '전체', '전체');
};
scwin.udc_clnt_onviewchangeCodeEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_clntNm, ed_clntNo, 3, false);
};
scwin.udc_clnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_clntNo.getValue(), txt_clntNm.getValue(), 'F', 'F');
};
scwin.udc_bilgAcctDept_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_bilgAcctDeptNm, ed_bilgAcctDeptCd, 1, false);
};
scwin.udc_bilgAcctDept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgAcctDeptCd.getValue(), txt_bilgAcctDeptNm.getValue(), 'F', 'F');
};
scwin.udc_stockAcctDept_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_stockAcctDeptNm, ed_stockAcctDeptCd, 2, false);
};
scwin.udc_stockAcctDept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_stockAcctDeptCd.getValue(), txt_stockAcctDeptNm.getValue(), 'F', 'F');
};
scwin.udc_repClnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_repClntNm, ed_repClntNo, 7, false);
};
scwin.udc_repClnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(7, ed_repClntNo.getValue(), txt_repClntNm.getValue(), 'F', 'F');
};
scwin.ds_oilStatInfoTree_onrowpositionchange = async function (info) {
  var row = info.newRowIndex;
  if (row >= 0 && scwin.isRetrieveTree) {
    sub_title.setValue(ds_oilStatInfoTree.getCellData(row, "oilStatNm"));
    if (ds_oilStatInfoTree.getCellData(row, "oilOilStatNo") == "AAA") {
      scwin.f_ContentsDisable();
      ds_oilPch.removeAll();
      $c.gus.cfInitObjects($p, tbl_content);
    } else {
      scwin.f_getOilStatInfo(row);
      scwin.f_RetrieveOilStatInfo(row);
    }
    if (scwin.viewMode == "C" && ds_oilStatInfoTree.getRowStatus(scwin.createRow) == "C") {
      ds_oilStatInfoTree.deleteRow(scwin.createRow);
    }
    $c.gus.cfDisableBtn($p, [b_Cancel2, b_Save2]); //$c.gus.cfDisableBtn([b_Cancel1, b_Cancel2, b_Save1, b_Save2]);
    $c.gus.cfEnableObjects($p, [b_Create2, b_Update2]); //$c.gus.cfEnableObjects([b_Create1, b_Create2, b_Update1, b_Update2]);
    scwin.viewMode = "S";
  }
};
scwin.ds_oilStatInfoTree_onbeforerowpositionchange = async function (info) {
  var Row = info.newRowIndex;
  if (scwin.preRow == Row) {
    scwin.preRow = 0; //scwin.preRow = -1;
    return false;
  }
  if (scwin.viewMode == "U" || scwin.viewMode == "C") {
    if (!(await $c.win.confirm($p, "현재 작업중 입니다. 취소 하시겠습니까?"))) {
      scwin.preRow = Row;
      return false;
    } else {
      return true;
    }
  }
};

//tobe 삭제 : 그리드에 clntNo라는 컬럼 미존재 
//for=gr_oilPch event=OnPopup(row,colid,olddata)
//팝업관련
// var rtnList = new Array();
// if (colid == "clntNo") {
//     var ClntNo = ds_oilPch.NameValue(row, "clntNo");
//     var ClntNm = ds_oilPch.NameValue(row, "clntNm");

//     rtnList = cfCommonPopUp('retrieveClntList', ClntNo.trim(), ClntNm, "F", null, null, null, null, null, null, null, null, null, null, "F", null);

//     ds_oilPch.NameValue(row, "clntNo") = rtnList[0];
//     ds_oilPch.NameValue(row, "clntNm") = rtnList[1];
// }

scwin.udc_oilStat_onblurCodeEvent = async function (e) {
  await pscommon.RcfOilStatPop(ed_oilStatNo, txt_oilStaNm, 'CD', '전체', '전체');
};
scwin.udc_stockAcctDept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_stockAcctDeptCd, txt_stockAcctDeptNm, 2);
};
scwin.udc_bilgAcctDept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgAcctDeptCd, txt_bilgAcctDeptNm, 1);
};
scwin.udc_upperOilStrPlc_onblurCodeEvent = async function (e) {
  await pscommon.RcfOilStatPop(ed_upperOilStrPlcNo, txt_upperOilStrPlcNm, 'CD', '전체', '전체');
};
scwin.udc_clnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, txt_clntNm, 3);
};
scwin.udc_repClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_repClntNo, txt_repClntNm, 7);
};

//for=lc_useYn event=OnCloseUp()
scwin.lc_useYn_onchange = function (info) {
  scwin.f_retrieveOilStatInfoTree();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_useYn',style:'width: 150px;',submenuSize:'fixed',ref:'','ev:onchange':'scwin.lc_useYn_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'9'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'주유소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_oilStatNo',validTitle:'주유소',nameId:'txt_oilStaNm',style:'',id:'udc_oilStat',mandatoryCode:'true',UpperFlagCode:'1',maxlengthCode:'3',objTypeName:'key','ev:onviewchangeNameEvent':'scwin.udc_oilStat_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_oilStat_onclickEvent','ev:onblurCodeEvent':'scwin.udc_oilStat_onblurCodeEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'주유소지점 Tree ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Expend',style:'',type:'button','ev:onclick':'scwin.f_Expend',objType:'data'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확장'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tvw-wrap',id:''},E:[{T:1,N:'w2:treeview',A:{dataType:'listed',id:'tv_oilStatInfoTree',renderType:'virtual',style:'',tooltipGroupClass:'false',class:'h-full'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_oilStatInfoTree'},E:[{T:1,N:'w2:label',A:{ref:'oilStatNm'}},{T:1,N:'w2:value',A:{ref:'oilOilStatNo'}},{T:1,N:'w2:depth',A:{ref:'lvl'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'sub_title',label:'전체 ',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_content',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'주유소번호',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 80px;',id:'txt_oilStatNo',class:'',maxlength:'3',mandatory:'true',validExp:'주유소번호:yes:length=3',title:'주유소번호',objType:'key',ref:'','ev:onkeypress':'scwin.txt_oilStatNo_onkeypress'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_oilStatNoDup',type:'button',class:'btn','ev:onclick':'scwin.f_chkOilStatNoDup'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중복'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'주유소명',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_oilStatNm',style:'width: 150px;',objType:'key',mandatory:'true',validExp:'주유소명:yes',ref:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상위주유소',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_upperOilStrPlcNo',validTitle:'상위주유소',nameId:'txt_upperOilStrPlcNm',style:'',mandatoryCode:'true',validExp:'상위주유소:yes',UpperFlagCode:'1',id:'udc_upperOilStrPlc',objTypeName:'key',mandatoryName:'true','ev:onviewchangeNameEvent':'scwin.udc_upperOilStrPlc_onviewchangeNameEvent',btnId:'btn_upperOilStrPlcNo','ev:onclickEvent':'scwin.udc_upperOilStrPlc_onclickEvent',code:'upperOilStrPlcNo',name:'upperOilStrPlcNm','ev:onblurCodeEvent':'scwin.udc_upperOilStrPlc_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'주유소레벨',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_oilStatLvlClsCd',style:'width: 150px;',submenuSize:'fixed',mandatory:'true',objType:'data',validExp:'주유소레벨:yes',title:'주유소레벨',ref:'',chooseOptionLabel:'선택'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'소속구분',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'',title:'소속구분',mandatory:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고속'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'유류자가구분',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_oilSelfClsCd',style:'width: 150px;',submenuSize:'fixed',mandatory:'true',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'타사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'T'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'직판여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_dsaleYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',mandatory:'true',title:'직판여부',falseValue:'0',refInitSync:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'txt_clntNm',popupID:'',selectID:'retrieveClntList',style:'',validTitle:'거래처',id:'udc_clnt',mandatoryCode:'true',objTypeCode:'Data',objTypeName:'key',validExpCode:'거래처:yes',UpperFlagCode:'1',allowCharCode:'A-Z0-9',maxlengthCode:'6','ev:onviewchangeCodeEvent':'scwin.udc_clnt_onviewchangeCodeEvent',btnId:'btn_clntNo','ev:onclickEvent':'scwin.udc_clnt_onclickEvent',code:'clntNo',name:'clntNm','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정산귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_bilgAcctDeptCd',nameId:'txt_bilgAcctDeptNm',popupID:'',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'정산귀속부서',objTypeCode:'Data',objTypeName:'key',id:'udc_bilgAcctDept',btnId:'btn_bilgAcctDeptCd',mandatoryCode:'true',validExpCode:'정산귀속부서:yes',allowCharCode:'A-Z0-9',maxlengthCode:'5',UpperFlagCode:'1','ev:onviewchangeNameEvent':'scwin.udc_bilgAcctDept_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_bilgAcctDept_onclickEvent',code:'bilgAcctDeptCd',name:'bilgAcctDeptNm','ev:onblurCodeEvent':'scwin.udc_bilgAcctDept_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'재고귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_stockAcctDeptCd',nameId:'txt_stockAcctDeptNm',popupID:'',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'재고귀속부서',objTypeCode:'Data',objTypeName:'key',id:'udc_stockAcctDept',mandatoryCode:'true',validExpCode:'재고귀속부서:yes',maxlengthCode:'5',UpperFlagCode:'1',allowCharCode:'A-Z0-9','ev:onviewchangeNameEvent':'scwin.udc_stockAcctDept_onviewchangeNameEvent',btnId:'btn_stockAcctDeptCd','ev:onclickEvent':'scwin.udc_stockAcctDept_onclickEvent',name:'stockAcctDeptNm',code:'stockAcctDeptCd','ev:onblurCodeEvent':'scwin.udc_stockAcctDept_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'유류업무구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_oilTskClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'',mandatory:'true',objType:'data',validExp:'유류업무구분:yes',title:'유류업무구분'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_rmk',style:'',objtype:'data',ref:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'개소일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_opnOfcDt',style:'',objType:'data',mandatory:'true',validExp:'개소일자:yes:date=YYYYMMDD',title:'개소일자',displayFormat:'yyyy/MM/dd',ref:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'폐소일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_closOfcDt',style:'',displayFormat:'yyyy/MM/dd',objType:'data',validExp:'폐소일자:no:date=YYYYMMDD',ref:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'담당자성명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_picNm',style:'width: 150px;',objtype:'key',mandatory:'true',validExp:'담당자성명:yes',title:'담당자성명',ref:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_telNo',style:'width: 150px;',title:'전화번호',objtype:'key',mandatory:'true',validExp:'전화번호:yes',ref:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_useYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',title:'사용여부',mandatory:'true',falseValue:'0',refInitSync:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'직매여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_spotsaleYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',title:'직매여부',falseValue:'0',refInitSync:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_clntClsCd',style:'width: 150px;',submenuSize:'fixed',objType:'data',chooseOptionLabel:'선택',ref:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'가맹점번호(신한카드)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_frchNoSh',style:'width: 150px;',objtype:'data',ref:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'판매단가할증거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_repClntNo',nameId:'txt_repClntNm',popupID:'',selectID:'retrieveClntList',style:'',validTitle:'판매단가할증거래처',id:'udc_repClnt',objTypeCode:'Data',objTypeName:'data',maxlengthCode:'6',allowCharCode:'A-Z0-9',UpperFlagCode:'1',btnId:'btn_repClntNo','ev:onviewchangeNameEvent':'scwin.udc_repClnt_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_repClnt_onclickEvent',name:'repClntNm',code:'repClntNo','ev:onblurCodeEvent':'scwin.udc_repClnt_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bilgKndCd',style:'width: 150px;',submenuSize:'fixed',title:'청구종류',mandatory:'true',objType:'data',validExp:'청구기준:yes',ref:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'신용카드 단말기 번호 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridDownYn:'N',gridUpYn:'N',grp:'grd_section1',templateYn:'N',style:'',gridID:'gr_oilPch',btnUser:'Y',btnPlusYn:'Y',id:'udc_topGrd'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_oilPch',id:'gr_oilPch',style:'',visibleRowNum:'5',visibleRowNumFix:'true',gridName:'신용카드 단말기 번호',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'10'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'단말기번호',width:'90',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'비고',width:'160',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'삭제',width:'70',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cardTrmnlNo',inputType:'text',style:'',value:'',width:'90',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',style:'',value:'',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'delYn',inputType:'select',style:'',value:'',width:'70',allOption:'',chooseOption:'',ref:'',hidden:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정상'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',style:'',btnDelYn:'N',gridID:'gr_oilPch',id:'udc_bottomGrd',btnCancelObj:'btn_cancelRow1',btnRowAddObj:'btn_addRow1',btnRowDelObj:'btn_deleteRow1',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DeleteRow',cancelFunction:'scwin.f_CancelRow',rowAddUserAuth:'C',rowDelObjType:'D'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'hid_tvIndex',style:'display:none;',initValue:'1'}},{T:1,N:'xf:input',A:{id:'txt_frchNo',style:'display:none;',initValue:'X'}},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'b_Create2',type:'button',class:'btn','ev:onclick':'scwin.f_Clear',objType:'bCreate',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'b_Update2',type:'button',class:'btn','ev:onclick':'scwin.f_Update',objType:'bCreate',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Cancel2',style:'',type:'button','ev:onclick':'scwin.f_Cancel',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Save2',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})