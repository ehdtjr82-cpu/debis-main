/*amd /ui/tn/op/transwrkindict/cntr/tn_304_03_07b.xml 49215 544f406d25bf8bab755db37eb3e391333d03fe8c901b81939830d2f66633d089 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blckCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrSizCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrTypCd',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_block',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'blockNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blckCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutClsCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mngStDt',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mngEdDt',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtCd',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'priority',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtNm',name:'name14',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mngblck',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mngblck1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_mngblock',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_mngblck","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveBlock',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_block","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveBlock_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.op.transwrkindict.cntr.RetrieveCntrLocationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"}, {"id":"ds_block","key":"OUT_DS1"} ]',target:'data:json,{"id":"ds_block","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.retrieve_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_mngblock1',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_mngblck","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수

scwin.sDate;
scwin.strCurDate;

//사용자 정보 가져오기
scwin.memJson;
scwin.userClsCd;
scwin.userLobranCd;
scwin.sysAdminYn;
scwin.prevRow;
scwin.focusRow;
scwin.onpageload = async function () {
  scwin.initSetting();
  const codeOptions = [{
    grpCd: "OP317",
    compID: "acb_wrkPlCd"
  }, {
    grpCd: "OP101",
    compID: "acb_cntrSizCd, acb_cntrSizCd2"
  }, {
    grpCd: "OP102",
    compID: "acb_cntrTypCd, acb_cntrTypCd2"
  }];
  await $c.data.setCommonCode($p, codeOptions, scwin.callback01);
};
scwin.callback01 = async function () {
  if (scwin.userLobranCd == "4AA") {
    acb_wrkPlCd.setSelectedIndex(0);
  } else if (scwin.userLobranCd == "4BB") {
    acb_wrkPlCd.setSelectedIndex(1);
  } else if (scwin.userLobranCd == "5AA") {
    acb_wrkPlCd.setSelectedIndex(2);
  } else {
    acb_wrkPlCd.setSelectedIndex(1);
  }
  ;
  if (scwin.sysAdminYn == "1") {
    $c.gus.cfEnableObj($p, acb_wrkPlCd, true);
  } else {
    $c.gus.cfEnableObj($p, acb_wrkPlCd, false);
  }
  ;

  /*
      $p.getComponentById(acb_cntrSizCd2.getDataListInfo().id).insertRow(0);
      $p.getComponentById(acb_cntrSizCd2.getDataListInfo().id).setCellData(0,"","");
      $p.getComponentById(acb_cntrSizCd2.getDataListInfo().id).setCellData(0,"","");
      $p.getComponentById(acb_cntrTypCd2.getDataListInfo().id).insertRow(0);
      $p.getComponentById(acb_cntrTypCd2.getDataListInfo().id).setCellData(0,"","");
      $p.getComponentById(acb_cntrTypCd2.getDataListInfo().id).setCellData(0,"","");
  */

  sbm_mngblock.action = "/cm.zz.RetrieveComboCMD.do?sysCd=DsCommonEBC&queryId=retrieveMngBlockList&param1=" + acb_wrkPlCd.getValue();
  await $c.sbm.execute($p, sbm_mngblock);
  sbm_mngblock1.action = "/cm.zz.RetrieveComboCMD.do?sysCd=DsCommonEBC&queryId=retrieveMngBlockList&param1=" + acb_wrkPlCd.getValue();
  await $c.sbm.execute($p, sbm_mngblock1);
  ed_lineNm.hide();
};
scwin.chageVal = function (e) {
  var val;
  if (e == "1") {
    val = "사용";
  } else {
    val = "미사용";
  }
  return val;
};
scwin.chageVal2 = function (e) {
  var val;
  if (e == "I") {
    val = "하차";
  } else if (e == "O") {
    val = "상차";
  } else if (e == "A") {
    val = "전체";
  }
  return val;
};
scwin.initSetting = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.userClsCd = scwin.memJson.userClsCd;
  scwin.userLobranCd = scwin.memJson.lobranCd;
  scwin.sysAdminYn = scwin.memJson.sysAdminYn;
  scwin.sDate = WebSquare.date.getCurrentServerDate().substring(0, 6);
  scwin.strCurDate = WebSquare.date.getCurrentServerDate().substring(0, 8);
};

//-------------------------------------------------------------------------
// 항목 Enable
//-------------------------------------------------------------------------
scwin.f_ContentsEnable = function () {
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableObj($p, ed_lineCd, true);
  $c.gus.cfEnableObj($p, acb_blckCd2, true);
  $c.gus.cfEnableObj($p, acb_cntrSizCd2, true);
  $c.gus.cfEnableObj($p, acb_cntrTypCd2, true);
  $c.gus.cfEnableObj($p, acb_fullEmptyClsCd, true);
  $c.gus.cfEnableObj($p, ica_mngStDt, true);
  $c.gus.cfEnableObj($p, ica_mngEdDt, true);
  $c.gus.cfEnableObj($p, ed_mchtCd, false); //화주는 당분간 막는다.
  $c.gus.cfEnableObj($p, ed_mchtNm, false);
  $c.gus.cfEnableObj($p, acb_priority, true);
  $c.gus.cfEnableObj($p, acb_useYn, true);
  $c.gus.cfEnableObj($p, ed_mchtNm_search, true);
  $c.gus.cfEnableObj($p, acb_crryinoutClsCd, true);
};

//-------------------------------------------------------------------------
// 항목 Disable
//-------------------------------------------------------------------------
scwin.f_ContentsDisable = async function () {
  await $c.gus.cfDisableKeyData($p);
  $c.gus.cfEnableObj($p, ed_lineCd, false);
  $c.gus.cfEnableObj($p, acb_blckCd2, false);
  $c.gus.cfEnableObj($p, acb_cntrSizCd2, false);
  $c.gus.cfEnableObj($p, acb_cntrTypCd2, false);
  $c.gus.cfEnableObj($p, acb_fullEmptyClsCd, false);
  $c.gus.cfEnableObj($p, ica_mngStDt, false);
  $c.gus.cfEnableObj($p, ica_mngEdDt, false);
  $c.gus.cfEnableObj($p, ed_mchtCd, false);
  $c.gus.cfEnableObj($p, ed_mchtNm, false);
  $c.gus.cfEnableObj($p, acb_priority, false);
  $c.gus.cfEnableObj($p, acb_useYn, false);
  $c.gus.cfEnableObj($p, ed_mchtNm_search, false);
  $c.gus.cfEnableObj($p, acb_crryinoutClsCd, false);
};
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다. 	
  var returnArr = ds_block.getRowIndexByStatus('CUD');
  if (returnArr.length == 0) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  var vStatus = ds_block.getRowStatus(ds_block.getRowPosition());
  var vLineCd = ed_lineCd.getValue();
  var vBlockCd = acb_blckCd2.getValue();
  msgArr = new Array(2);
  msgArr[0] = "라인코드";
  msgArr[1] = "6";
  msgArr2 = new Array(1);
  msgArr2[0] = "블럭코드";
  if (vStatus != 2) {
    // 필수항목 체크
    if (!(await $c.gus.cfValidate($p, [regProgram]))) {
      return false;
    }

    // lineCd 입력이 없는경우
    if (acb_fullEmptyClsCd.getValue() == "E") {
      if (vLineCd == "" || vLineCd.length < 1) {
        var msgArr = new Array(1);
        msgArr[0] = "라인코드";
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, msgArr);
        ed_lineCd.focus();
        return false;
      }
    }
    // 블럭코드 입력이 없는경우
    if (vBlockCd == "" || vBlockCd.length < 1) {
      var msgArr = new Array(1);
      msgArr[0] = "블럭코드";
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, msgArr);
      acb_blckCd.focus();
      return false;
    }
    var vSaveType = ed_saveType.getValue(); // 저장타입
  }
  // 저장타입에 따라 저장
  var row = ds_block.getRowPosition();
  //alert(ds_block.NameValue(row, "wrkPlCd"));
  //dataSetDebug(ds_block, true);
  //alert(ds_block.IsUpdated+":"+vStatus);
  if (vStatus == "C") {
    // 신규등록
    ds_block.setCellData(row, "wrkPlCd", ed_wrkPlCd.getValue());
    sbm_saveBlock.action = "/ncall.tn.op.transwrkindict.cntr.SaveCntrLocationCMD.do";
  } else if (vStatus == "U") {
    // 수정
    //alert(ds_block.NameValue(row, "wrkPlCd"));
    sbm_saveBlock.action = "/ncall.tn.op.transwrkindict.cntr.UpdateCntrLocationCMD.do";
  } else if (vStatus == "D") {
    // 삭제
    sbm_saveBlock.action = "/ncall.tn.op.transwrkindict.cntr.DeleteCntrLocationCMD.do";
  }

  //dataSetDebug(ds_block, true);
  let rtn = await $c.win.confirm($p, "저장하시겠습니까?");
  if (rtn) {
    scwin.prevRow = ds_block.getRowPosition();
    $c.sbm.execute($p, sbm_saveBlock);
  }
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  scwin.f_ContentsEnable();
  ed_lineNm.show();
  ed_saveType.setValue("1"); // 저장타입이 신규인경우  (1:신규, 2: 수정, 3: 삭제)

  scwin.f_AddRow(); // 행추가
};

//-------------------------------------------------------------------------
// 프로그램 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  ed_saveType.setValue("2"); // 수정인경우(1:신규, 2: 수정, 3: 삭제)
  ed_mchtCd.setReadOnly(true);
  ed_mchtNm.setReadOnly(true);
  scwin.f_ContentsEnable();
  ed_lineNm.hide();
  ed_lineCd.setDisabled(false);
  $c.gus.cfEnableObj($p, ed_lineCd, false);
  $c.gus.cfEnableObj($p, ed_lineNm, false);
  //cfEnableObj(pgmId_search, false); // 
};

//-------------------------------------------------------------------------
// 프로그램 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = async function () {
  // 취소 확인
  if (ds_block.getRowPosition() != null) {
    //ds_block.Undo(ds_block.RowPosition);
    ds_block.undoAll();
    await scwin.f_ContentsDisable();
    ed_lineNm.hide();
    if (ds_block.getRowStatus(ds_block.getRowPosition()) == "C") {
      ds_block.removeRow(ds_block.getRowPosition());
    }
    ed_saveType.setValue("0");

    //cfDisableBtn([b_Save,b_Cancel]);
  } else {
    //cfDisableBtn([b_Save,b_Cancel, b_Delete]);
  }
};

//-------------------------------------------------------------------------
// 프로그램 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = function () {
  ed_saveType.setValue("3"); // 수정인경우(1:신규, 2: 수정, 3: 삭제)	
  scwin.f_delRow();
  ed_lineNm.hide();

  //cfDisableBtn([b_Create, b_Update, b_Delete]);
};

//-------------------------------------------------------------------------
// 프로그램 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  if (ed_retrieveYn.getValue() == "0") {}
  ed_lineCd.setValue("");
  ds_block.insertRow(ds_block.getRowCount());
  gr_block.setFocusedCell(ds_block.getRowCount() - 1, 0);
  if (ds_block.getRowCount() > 1) {
    acb_blckCd2.setSelectedIndex(0);
    ds_block.setCellData(ds_block.getRowPosition(), "lineCd", acb_blckCd2.getValue());
    ed_wrkPlCd.setValue(acb_wrkPlCd.getValue());
    acb_cntrSizCd2.setSelectedIndex(1);
    ds_block.setCellData(ds_block.getRowPosition(), "cntrSizCd", acb_cntrSizCd2.getValue());
    acb_cntrTypCd2.setSelectedIndex(1);
    ds_block.setCellData(ds_block.getRowPosition(), "cntrTypCd", acb_cntrTypCd2.getValue());
    acb_fullEmptyClsCd.setSelectedIndex(1);
    ds_block.setCellData(ds_block.getRowPosition(), "fullEmptyClsCd", acb_fullEmptyClsCd.getValue());
    acb_priority.setSelectedIndex(1);
    ds_block.setCellData(ds_block.getRowPosition(), "priority", acb_priority.getValue());
    acb_crryinoutClsCd.setSelectedIndex(1);
    ds_block.setCellData(ds_block.getRowPosition(), "crryinoutClsCd", acb_crryinoutClsCd.getValue());
  }
  //alert(newDt.getYear()+""+addZero(eval(newDt.getMonth())+1)+""+newDt.getDate());
  acb_useYn.setSelectedIndex(1);
  ds_block.setCellData(ds_block.getRowPosition(), "useYn", acb_useYn.getValue());
  ica_mngStDt.setValue(scwin.strCurDate);
  ica_mngEdDt.setValue("99991231");
  $c.gus.cfEnableKeyData($p);
  ed_lineCd.focus();
  //cfDisableBtn([b_Create, b_Update, b_Delete]);
};
scwin.addZero = function (i) {
  var rtn = i + 100;
  return rtn.toString().substring(1, 3);
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_delRow = function () {
  scwin.focusRow = ds_block.getRowPosition();
  ds_block.deleteRow(ds_block.getRowPosition());
  ed_rowDelStat.setValue("1");
  gr_block.setFocusedCell(scwin.focusRow, 0);
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_Undo = function () {
  ds_block.undoRow(ds_block.getRowPosition());
  ed_rowDelStat.setValue("2");
};

//-------------------------------------------------------------------------
//공통팝업 열기 전에 체크 - EMEDIT onKillFocus 이벤트 발생시
//param설명 : nmObj-코드명(text), cdObj-코드(emedit), gubun1, gubun2
//-------------------------------------------------------------------------
scwin.f_beforeOpenCommonPopUpEd = function (nmObj, cdObj, gubun1, gubun2, pWinCloseTF, pAllSearchTF) {
  var cdObjVal = cdObj.getValue().toUpperCase();
  //if(!cfCanOpenPopup(cdObj, nmObj)) return;
  //if(cdObj.Modified){
  if (cdObjVal == "") {
    //alert("1");   
    nmObj.setValue("");
  } else {
    //alert("2::"+cdObj);           
    nmObj.setValue("");
    scwin.f_openCommonPopUp(gubun1, gubun2, pWinCloseTF, pAllSearchTF, 'F');
  }
  //}
};

//-------------------------------------------------------------------------
//공통팝업 열기
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (gubun1, gubun2, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var pCode = "";
  var pWhere = "";
  var pWtitleSearch = "";
  var pSelectID = "";
  var pWhere = "";
  var rtnList = new Array();
  switch (gubun1) {
    case 3:
      //Line조회 - Line코드, Line명, 선사코드, 선사코드명   
      pCode = ed_lineCd.getValue().toUpperCase();
      if (pNoDataCloseTF == "T") {
        ed_lineCd.options.hidVal = pCode;
        $c.gus.cfInitObjects($p, [ed_lineNm]);
        $c.gus.cfInitHidVal($p, [ed_lineNm]);
        pWhere = "T";
      }
      pWtitleSearch = "LINE,LINE코드,LINE명";
      ed_lineCom.setSelectId("retrieveLineInfoList_tpro");
      rtnList = ed_lineCom.cfCommonPopUp(scwin.retrieveListCb,
      //pSelectID
      pCode,
      //pCode
      pCode,
      //pName
      pWinCloseTF,
      //pWinCloseTF
      null,
      //pDispCnt
      null,
      //pTitle
      null,
      //pWidth
      null,
      //pHidden
      pWhere,
      //pWhere
      null,
      //pW
      null,
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF - 중복체크여부 ("F")
      pAllSearchTF,
      //pAllSearchTF - 전체검색허용여부   ("F")
      pWtitleSearch,
      //pWtitleSearch - POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
      pNoDataCloseTF,
      //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      null);
      break;
  }
};
scwin.retrieveListCb = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_lineCd.setValue(rtnList[0]);
      ed_lineCd.options.hidVal = rtnList[0];
      ed_lineNm.setValue(rtnList[1]);
      ed_lineNm.options.hidVal = rtnList[1];
      if (ds_block.getRowCount() > 1) {
        ds_block.setCellData(ds_block.getRowPosition(), "lineCd", ed_lineCd.getValue());
      }
    } else {
      $c.gus.cfInitObjects($p, [ed_lineNm]);
      $c.gus.cfInitHidVal($p, [ed_lineNm]);
      if (ds_block.getRowCount() > 1) {
        ds_block.setCellData(ds_block.getRowPosition(), "lineCd", ed_lineCd.getValue());
      }
    }
  } else {
    if (ds_block.getRowCount() > 1) {
      ds_block.setCellData(ds_block.getRowPosition(), "lineCd", ed_lineCd.getValue());
    }
    $c.gus.cfInitObjects($p, [ed_lineCd, ed_lineNm]);
    $c.gus.cfInitHidVal($p, [ed_lineCd, ed_lineNm]);
  }
};
scwin.f_openPopUp = function (disGubun, chgGubun) {
  var rtnList = new Array();
  var i;
  var chkCnt = 0;
  switch (disGubun) {
    case 1:
      ed_mchtNm_search.setSelectId("retrieveClntInfo");
      rtnList = ed_mchtNm_search.cfCommonPopUp(scwin.retrieveClntInfoCb, ed_mchtCd.getValue(), ed_mchtNm.getValue(), chgGubun, '9', "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,", '100,100,0,120,100,0,100,100,100,0', "3,10", 'LOGISCLNT1,,CTRT,0', '800', '600', null, null, null, "F", null);
      break;
    default:
      break;
  }
};
scwin.retrieveClntInfoCb = function (rtnList) {
  if (rtnList != null) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_mchtCd, ed_mchtNm);
  } else {
    ed_mchtCd.setValue(""); //조회부 거래처코드
    ed_mchtNm.setValue(""); //조회부 거래처명

    ed_mchtNm.options.hidVal = ""; //조회부 거래처명
  }
};
scwin.f_openOnoffInfo = function () {
  // cfTabMenuUpdate( "/tn/op/transwrkindict/cntr/tn_304_03_06b.jsp" , "CY상하차진행현황" ) ;
  let strUrl = "/ui/tn/op/transwrkindict/cntr/tn_304_03_06b.xml";
  let programId = "tn_304_03_06b";
  $c.win.openMenu($p, "CY상하차진행현황", strUrl, programId);
};
scwin.f_openMcomOnoffInfo = function () {
  // cfTabMenuUpdate( "/tn/op/transwrkindict/cntr/tn_304_03_10b.jsp" , "CY당사상하차차량확인" ) ;
  let strUrl = "/ui/tn/op/transwrkindict/cntr/tn_304_03_10b.xml";
  let programId = "tn_304_03_10b";
  $c.win.openMenu($p, "CY당사상하차차량확인", strUrl, programId);
};
scwin.f_clntInfo = function () {
  //cfTabMenuUpdate( "/tn/op/transwrkindict/cntr/tn_304_03_08b.jsp" , "CY후불정산거래처관리" ) ;
  let strUrl = "/ui/tn/op/transwrkindict/cntr/tn_304_03_08b.xml";
  let programId = "tn_304_03_08b";
  $c.win.openMenu($p, "CY후불정산거래처관리", strUrl, programId);
};
scwin.f_Excel = function (e) {
  if (ds_block.getRowCount() == 0) {
    $c.win.alert($p, "조회를 먼저 해주세요");
  } else {
    const options = {
      fileName: "로케이션관리(" + acb_wrkPlCd.getValue() + ").xlsx",
      sheetName: "로케이션관리",
      useStyle: true,
      oddRowBackgroundColor: "#CCFFCC"
    };
    $c.data.downloadGridViewExcel($p, gr_block, options);
  }
};
scwin.retrieve_submitDone = function () {
  ed_countRow.setValue(ds_block.getRowCount());
  //조회결과가 0인경우
  if (ds_block.getRowCount() == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다");
    //cfDisableBtn([b_Update,b_Save,b_Cancel,b_Delete]);
  } else if (ds_block.getRowCount() > 0) {
    //cfDisableBtn([b_Save,b_Cancel]);
    for (var i = 0; i <= ds_block.getRowCount(); i++) {
      if (ds_block.getCellData(i, "useYn") == "1") {
        //  ds_block.setcellStyle 
        gr_block.setCellStyle(i, "useYn", "color", "blue");
      } else {
        gr_block.setCellStyle(i, "useYn", "color", "red");
      }
    }
  }
  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  totalRows.setValue(ds_block.getRowCount());
  ed_retrieveYn.setValue("1");
  $c.gus.cfGoPrevPosition($p, gr_block, scwin.prevRow);
  scwin.gr_block_oncellclick(ds_block.getRowPosition(), "", "");
  scwin.f_ContentsDisable();
};
scwin.ed_qryLineCd_onkeyup = function (e) {
  var oldv = info.newValue;
  ed_qryLineCd.setValue(oldv.toUpperCase());
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.cfInitObjects(tbl_search);
};
scwin.ed_mcht_onblurCodeEvent = function (e) {};
scwin.ed_mcht_onclickEvent = function (e) {
  scwin.f_openPopUp(1, 'T');
};
scwin.ed_mcht_onviewchangeNameEvent = function (info) {};
scwin.btn_del_onclick = function (e) {
  scwin.f_Delete();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_trigger5_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.btn_edit_onclick = function (e) {
  scwin.f_Update();
};
scwin.btn_trigger4_onclick = function (e) {
  scwin.f_Create();
};
scwin.btn_trigger1_onclick = function (e) {
  scwin.f_openOnoffInfo();
};
scwin.btn_trigger2_onclick = function (e) {
  scwin.f_openMcomOnoffInfo();
};
scwin.btn_trigger3_onclick = function (e) {
  scwin.f_clntInfo();
};
scwin.gr_block_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_ContentsDisable();
  ed_lineNm.hide();
  ed_lineCd.setValue(ds_block.getCellData(ds_block.getRowPosition(), "lineCd"));
  acb_blckCd2.setValue(ds_block.getCellData(ds_block.getRowPosition(), "blckCd"));
  acb_cntrSizCd2.setValue(ds_block.getCellData(ds_block.getRowPosition(), "cntrSizCd"));
  acb_cntrTypCd2.setValue(ds_block.getCellData(ds_block.getRowPosition(), "cntrTypCd"));
  acb_fullEmptyClsCd.setValue(ds_block.getCellData(ds_block.getRowPosition(), "fullEmptyClsCd"));
  acb_crryinoutClsCd.setValue(ds_block.getCellData(ds_block.getRowPosition(), "crryinoutClsCd"));
  ed_mchtCd.setValue(ds_block.getCellData(ds_block.getRowPosition(), "mchtCd"));
  ed_mchtNm.setValue(ds_block.getCellData(ds_block.getRowPosition(), "mchtNm"));
  acb_priority.setValue(ds_block.getCellData(ds_block.getRowPosition(), "priority"));
  acb_useYn.setValue(ds_block.getCellData(ds_block.getRowPosition(), "useYn"));
  ica_mngStDt.setValue(ds_block.getCellData(ds_block.getRowPosition(), "mngStDt"));
  ica_mngEdDt.setValue(ds_block.getCellData(ds_block.getRowPosition(), "mngEdDt"));
  var row = rowIndex;
  var vRowPosition = ds_block.getRowPosition();
  var vCountRow = ed_countRow.getValue();
  var vRowStatus = ds_block.getRowStatus(ds_block.getRowPosition());
  ed_lineNm.setValue("");
  if (ds_block.getRowCount() > 0) {
    ed_blockNo.setValue(ds_block.getCellData(row, "blockNo"));
    if (vRowPosition > vCountRow) {
      scwin.f_ContentsEnable();
    } else {
      scwin.f_ContentsDisable();
    }

    /*if(ed_lineCd.Text!=""){
    	 f_beforeOpenCommonPopUpEd(ed_lineNm, this, 3, 'T', 'T', 'F');
    }*/

    var vCountRow1 = ds_block.getRowCount();
    var vChgCount = 0;
    var vChgRow = 0;
    for (var i = 0; i <= vCountRow1; i++) {
      var vCurRowStatus = ds_block.getRowStatus(i);
      if (vCurRowStatus == "C" || vCurRowStatus == "U") {
        vChgCount++;
        vChgRow = i;
      }
    }
    if (vChgCount > 0 && row != vChgRow) {
      $c.win.alert($p, "신규등록이나 수정사항을 저장하신 후에 다른 정보로 이동해주시기 바랍니다.");
      ds_block.setRowPosition(vChgRow);
      gr_block.setFocusedCell(vChgRow, 0);
      scwin.f_ContentsEnable();
      ed_lineCd.setDisabled(false);
      return false;
    }
    if (vRowStatus == 0) {
      scwin.f_ContentsDisable();
      //cfDisableBtn([b_Cancel, b_Save]);
    } else if (vRowStatus == 1) {
      scwin.f_ContentsEnable();
      //cfDisableBtn([b_Create, b_Update]);
    } else if (vRowStatus == 3) {
      scwin.f_ContentsEnable();
      //cfDisableBtn([b_Create, b_Update]);
    }
  }
};
scwin.sbm_saveBlock_submitDone = async function () {
  var vSaveType = ed_saveType.getValue();
  if (vSaveType == "3") {
    // 삭제인 경우
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_004); // 성공적으로 삭제 하였습니다
    if (ds_block.getRowCount() > 0) {
      scwin.f_Retrieve();
    } else {}
  } else if (vSaveType == "1") {
    // 등록, 수정인 경우
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_Retrieve();
  } else if (vSaveType == "2") {
    // 등록, 수정인 경우
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_ContentsDisable();
    scwin.f_Retrieve();
  }
  ed_lineNm.hide();
};
scwin.ed_lineCd_onblur = function (e) {
  if (ed_lineCd.getValue() == "") {
    $c.gus.cfInitObjects($p, [ed_lineNm]);
  } else {
    scwin.f_beforeOpenCommonPopUpEd(ed_lineNm, ed_lineCd, 3, '', 'T', 'F');
  }
};
scwin.acb_fullEmptyClsCd_onchange = function (info) {
  if (acb_fullEmptyClsCd.getValue() == "F") {
    ed_lineNm.setMandatory("false");
  } else {
    //ed_lineNm.setMandatory("true");
  }
  ;
  if (ds_block.getRowCount() > 1) {
    ds_block.setCellData(ds_block.getRowPosition(), "fullEmptyClsCd", info.newValue);
  }
};
scwin.acb_wrkPlCd_onchange = function (info) {
  ds_mngblck.removeAll();
  sbm_mngblock.action = "/cm.zz.RetrieveComboCMD.do?sysCd=DsCommonEBC&queryId=retrieveMngBlockList&param1=" + acb_wrkPlCd.getValue();
  ds_mngblck1.removeAll();
  sbm_mngblock1.action = "/cm.zz.RetrieveComboCMD.do?sysCd=DsCommonEBC&queryId=retrieveMngBlockList&param1=" + acb_wrkPlCd.getValue();
};
scwin.gr_block_oneditend = function (rowIndex, columnIndex, value) {
  var row = rowIndex;
  var vRowPosition = ds_block.getRowPosition();
  var vCountRow = ed_countRow.getValue();
  var vRowStatus = ds_block.getRowStatus(ds_block.getRowPosition());
  ed_lineNm.setValue("");

  //alert(txt_saveType.value);

  if (ds_block.getRowCount() > 0) {
    ed_blockNo.setValue(ds_block.getCellData(row, "blockNo"));
    if (vRowPosition > vCountRow) {
      scwin.f_ContentsEnable();
    } else {
      scwin.f_ContentsDisable();
    }

    /*if(ed_lineCd.Text!=""){
    	 f_beforeOpenCommonPopUpEd(ed_lineNm, this, 3, 'T', 'T', 'F');
    }*/

    var vCountRow1 = ds_block.getRowCount();
    var vChgCount = 0;
    var vChgRow = 0;
    for (var i = 0; i <= vCountRow1; i++) {
      var vCurRowStatus = ds_block.getRowStatus(i);
      if (vCurRowStatus == "C" || vCurRowStatus == "R") {
        vChgCount++;
        vChgRow = i;
      }
    }
    if (vChgCount > 0 && row != vChgRow) {
      alert("신규등록이나 수정사항을 저장하신 후에 다른 정보로 이동해주시기 바랍니다.");
      ds_block.setRowPosition(vChgRow);
      return false;
    }
    if (vRowStatus == 0) {
      scwin.f_ContentsDisable();
      //cfDisableBtn([b_Cancel, b_Save]);
    } else if (vRowStatus == 1) {
      scwin.f_ContentsEnable();
      //cfDisableBtn([b_Create, b_Update]);
    } else if (vRowStatus == 3) {
      scwin.f_ContentsEnable();
      //cfDisableBtn([b_Create, b_Update]);
    }
  }
};
scwin.acb_blckCd2_onchange = function (info) {
  if (ds_block.getRowCount() > 1) {
    ds_block.setCellData(ds_block.getRowPosition(), "blckCd", info.newValue);
  }
};
scwin.acb_cntrSizCd2_onchange = function (info) {
  if (ds_block.getRowCount() > 1) {
    ds_block.setCellData(ds_block.getRowPosition(), "cntrSizCd", info.newValue);
  }
};
scwin.acb_cntrTypCd2_onchange = function (info) {
  if (ds_block.getRowCount() > 1) {
    ds_block.setCellData(ds_block.getRowPosition(), "cntrTypCd", info.newValue);
  }
};
scwin.acb_crryinoutClsCd_onchange = function (info) {
  if (ds_block.getRowCount() > 1) {
    ds_block.setCellData(ds_block.getRowPosition(), "crryinoutClsCd", info.newValue);
  }
};
scwin.acb_priority_onchange = function (info) {
  if (ds_block.getRowCount() > 1) {
    ds_block.setCellData(ds_block.getRowPosition(), "priority", info.newValue);
  }
};
scwin.acb_useYn_onchange = function (info) {
  if (ds_block.getRowCount() > 1) {
    ds_block.setCellData(ds_block.getRowPosition(), "useYn", info.newValue);
  }
};
scwin.ed_lineCd_oneditkeyup = function (info, e) {
  var val = e;
  return val.toUpperCase();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_wrkPlCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:dma_search.wrkPlCd',sortOption:'value'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_qryLineCd',placeholder:'',style:'width:150px;','ev:onkeyup':'scwin.ed_qryLineCd_onkeyup',ref:'data:dma_search.lineCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'블럭',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_blckCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:dma_search.blckCd',sortOption:'label',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_mngblck'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Size',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cntrSizCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.cntrSizCd'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Type',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cntrTypCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.cntrTypCd'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'컨테이너 블럭현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_Excel',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',btnUser:'N',id:'btn_excel'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_block',style:'',autoFit:'allColumn',id:'gr_block',visibleRowNum:'15',class:'wq_gvw','ev:oncellclick':'scwin.gr_block_oncellclick',readOnly:'true',focusMode:'row','ev:oneditend':'scwin.gr_block_oneditend',columnMove:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column1',value:'BLOCKNO',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column17',value:'작업장코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column15',value:'라인',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column13',value:'블럭',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column11',value:'SIZ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'TYP',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column3',value:'EF',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column5',value:'상하',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'관리시작일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'관리종료일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'화주코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'우선순위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'사용',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'blockNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'wrkPlCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lineCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'blckCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSizCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrTypCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fullEmptyClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crryinoutClsCd',displayMode:'label',displayFormatter:'scwin.chageVal2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mngStDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mngEdDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mchtCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'priority',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'input',style:'',id:'useYn',value:'',displayMode:'label',escape:'false',displayFormatter:'scwin.chageVal'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'regProgram',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'LINE 코드',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{id:'grp_group2',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:70px;',id:'ed_lineCd',placeholder:'',class:'','ev:onblur':'scwin.ed_lineCd_onblur',ref:'',title:'Line',mandatory:'true'}},{T:1,N:'xf:input',A:{style:'width:140px;',id:'ed_lineNm',placeholder:'',class:''}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; display:none;',id:'ed_lineCom','ev:onclickEvent':'scwin.ed_lineCom_onclickEvent'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'블럭코드',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_blckCd2',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',chooseOptionLabel:'전체','ev:onchange':'scwin.acb_blckCd2_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_mngblck'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'컨테이너size',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cntrSizCd2',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:': 전체',ref:'','ev:onchange':'scwin.acb_cntrSizCd2_onchange'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'컨테이너type',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cntrTypCd2',search:'start',style:'width:250px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:': 전체',ref:'','ev:onchange':'scwin.acb_cntrTypCd2_onchange'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'E/F구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_fullEmptyClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',chooseOptionLabel:'           ','ev:onchange':'scwin.acb_fullEmptyClsCd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Empty'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Full'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상차/하차구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_crryinoutClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',chooseOptionLabel:'        ','ev:onchange':'scwin.acb_crryinoutClsCd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'상차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'하차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width: 250px;',codeId:'ed_mchtCd',nameId:'ed_mchtNm',btnId:'btn_mcht',id:'ed_mchtNm_search','ev:onblurCodeEvent':'scwin.ed_mcht_onblurCodeEvent','ev:onclickEvent':'scwin.ed_mcht_onclickEvent','ev:onviewchangeNameEvent':'scwin.ed_mcht_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'우선순위',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_priority',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',chooseOptionLabel:' ','ev:onchange':'scwin.acb_priority_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1순위'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2순위'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3순위'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4순위'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5순위'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_useYn',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',chooseOptionLabel:' ','ev:onchange':'scwin.acb_useYn_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리시작일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_mngStDt',pickerType:'dynamic',style:'',ref:'data:ds_block.mngStDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리종료일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_mngEdDt',pickerType:'dynamic',style:'',ref:'data:ds_block.mngEdDt'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_trigger1',label:'저장',type:'button',class:'btn link','ev:onclick':'scwin.btn_trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'상하차진행현황'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_trigger2',label:'저장',type:'button',class:'btn link','ev:onclick':'scwin.btn_trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'당사상하차차량확인'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_trigger3',label:'저장',type:'button',class:'btn link','ev:onclick':'scwin.btn_trigger3_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'후불정산거래처관리'}]}]},{T:1,N:'xf:input',A:{id:'ed_wrkPlCd',style:'width: 20px; height:21px; display :none'}},{T:1,N:'xf:input',A:{id:'ed_rowDelStat',style:'width: 20px; height:21px; display :none'}},{T:1,N:'xf:input',A:{id:'ed_countRow',style:'width: 20px; height:21px; display :none'}},{T:1,N:'xf:input',A:{id:'ed_blockNo',style:'width: 20px; height:21px; display :none'}},{T:1,N:'xf:input',A:{id:'ed_retrieveYn',style:'width: 20px; height:21px; display :none'}},{T:1,N:'xf:input',A:{id:'ed_saveType',style:'width: 20px; height:21px; display :none'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger4',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_trigger4_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_edit',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_edit_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_trigger5',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_trigger5_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_del',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_del_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]}]}]}]}]}]})