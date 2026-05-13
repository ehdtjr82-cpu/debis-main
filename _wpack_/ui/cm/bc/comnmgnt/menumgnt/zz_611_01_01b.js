/*amd /ui/cm/bc/comnmgnt/menumgnt/zz_611_01_01b.xml 36040 61a774c1c029a464f4f4a59bc3b2f160de3076cce83607471459209417baae5b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_menuList',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_menuList_onrowpositionchange','ev:onbeforerowpositionchange':'scwin.ds_menuList_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lvl',name:'메뉴레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'menuId',name:'메뉴ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperMenuId',name:'상위메뉴ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'menuNm',name:'메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'menuDesc',name:'메뉴설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actPgmId',name:'실행프로그램ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actPgmNm',name:'실행프로그램명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actPgmScrPath',name:'실행프로그램경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actPgmParam',name:'실행프로그램파라미터',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'menuStsCd',name:'메뉴상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'menuParam',name:'메뉴파라미터',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'정렬순번',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'foreColor',name:'foreColor',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prodstdCd',name:'산출물기준코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slaadptDt',name:'SLA적용일자',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_menuList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified", "id":"ds_menuList", "key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 임시 메뉴 ID
scwin.tempMenuID = 0;
// 현재 로우 위치
scwin.currRow = 0;
// valid 여부
scwin.isValid = false;
// 이전 인덱스
scwin.vPreIndex = 0;
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ010",
    compID: "rd_userCd"
  }, {
    grpCd: "ZZ109",
    compID: "lc_rptGrpCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

/**
 * UDC 셋팅이 이후..
 */
scwin.onUdcCompleted = function () {};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {
  scwin.init();
  if ($p.getAllParameter().paramData.menuInfo.menuId.indexOf("n") > -1) {
    rd_debis.setSelectedIndex(1);
    rd_debis.setDisabled(true);
    rd_userCd.setValue("");
    rd_userCd.setDisabled(true);
    rd_sysCd.setValue("");
    rd_sysCd.setDisabled(true);
    rd_sysCd2.setValue("");
    rd_sysCd2.setDisabled(false);
  }
};
scwin.init = function () {
  ed_RowStatus.hide();
  scwin.f_ContentsDisable();
  $c.gus.cfDisableBtn($p, [btn_Update, btn_Cancel, btn_save]);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function (sysCd) {
  let debis = "";
  if (rd_debis.getValue() == "N") {
    debis = "ncall.";
  }
  ds_menuList.setJSON([]);
  var arrJson = {
    sysCd: sysCd
  };
  sbm_retrieve.action = "/" + debis + "cm.bc.comnmgnt.menumgnt.cmd.RetrieveMenuMgntListCMD.do";
  $c.sbm.execute($p, sbm_retrieve, arrJson);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  let vUpperMenuId = ed_upperMenuId.getValue().trimAll();
  let vCanMoveMenuIdYn;

  // 공통 작업 후 진행함....
  if (vUpperMenuId != null && vUpperMenuId != "") {
    vCanMoveMenuIdYn = await scwin.f_chkMoveUpperMenu(vUpperMenuId);
    if (vCanMoveMenuIdYn != "T") {
      await $c.win.alert($p, "상위메뉴를 하위메뉴(또는 존재하지 않는 메뉴)로 이동할 수 없습니다.");
      ds_menuList.undoRow(ds_menuList.getRowPosition());
      ed_upperMenuId.focus();
      return;
    }
  }
  let ds_menuListModi = ds_menuList.getModifiedJSON();
  if (ds_menuListModi.length == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "메뉴"));
    return;
  }
  let ret = await $c.gus.cfValidate($p, [ed_menuNm]);
  if (!ret) return;
  scwin.vPreIndex = tv_menu.getSelectedValue();
  let debis = "";
  if (rd_debis.getValue() == "N") {
    debis = "ncall.";
  }
  sbm_save.action = "/" + debis + "cm.bc.comnmgnt.menumgnt.cmd.SaveMenuListCMD.do";
  $c.sbm.execute($p, sbm_save);
};

//-------------------------------------------------------------------------
// 메뉴 Validation 
//-------------------------------------------------------------------------
scwin.f_validateMenu = function (row) {
  if (row == scwin.currRow && scwin.isValid == false) {
    scwin.isValid = true;
    // return false;
  } else {
    scwin.currRow = row;
    // scwin.isValid = $c.gus.cfValidate([tbl_menuInfo]);
    // return scwin.isValid;
  }
};

//-------------------------------------------------------------------------
// 미리보기
//-------------------------------------------------------------------------
scwin.f_Preview = async function () {
  var rowIndex = ds_menuList.getRowPosition();
  var rowJson = ds_menuList.getRowJSON(rowIndex);
  var previewURL = rowJson.actPgmScrPath + rowJson.actPgmId.split(".")[0];
  if (previewURL == "") {
    $c.win.alert($p, "메뉴를 선택하세요");
    return;
  }
  previewURL = "/ui" + previewURL + ".xml";

  // 프로그램 파라미터가 있을 경우
  if (!$c.gus.cfIsNull($p, rowJson.actPgmParam)) {
    previewURL += rowJson.actPgmScrpath;

    // 메뉴 파라미터가 있을 경우
    if (!$c.gus.cfIsNull($p, rowJson.menuParam)) {
      previewURL += "&" + rowJson.menuParam;
    }
  }
  // 프로그램 파라미터가 없을 경우
  else {
    // 메뉴 파라미터가 있을 경우
    if (!$c.gus.cfIsNull($p, rowJson.menuParam)) {
      previewURL += "?" + rowJson.menuParam;
    }
  }
  var data = {
    className: "view_pop"
  };
  var opts = {
    id: "menuGrpMgntPop",
    popupName: rowJson.actPgmNm,
    modal: true,
    // type : "pageFramePopup",// browserPopup
    type: "browserPopup",
    width: 1700,
    height: 800,
    title: rowJson.actPgmNm,
    className: "shbox pop_contents"
  };
  await $c.win.openPopup($p, previewURL, opts, data);
};

//-------------------------------------------------------------------------
// Grid 높이 수정
//-------------------------------------------------------------------------
scwin.f_grdHeiht = function (objGrd, size) {
  var objGrd = eval(objGrd);
  var strHeight = objGrd.style.height;
  var intHeight = parseInt(strHeight.replace("px", ""));
  intHeight = intHeight + size;
  if (intHeight > 0) {
    objGrd.style.height = intHeight + "px";
  }
};

//-------------------------------------------------------------------------
// Tree Node 이동 체크
//-------------------------------------------------------------------------
scwin.f_chkMoveUpperMenu = async function (upperMenuId) {
  let vCurrentMenuID = ds_menuList.getCellData(ds_menuList.getRowPosition(), "menuId");
  // 확인 필요
  let vResult = await udc_closeYn.cfNodeMoveChkOfTreeMenu(vCurrentMenuID, upperMenuId, "getMenuMoveCheck");
  return vResult;
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
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'F');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'F');
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 
  var selectId;
  if (rd_debis.getValue() == "D") {
    selectId = "retrievePgmInfo";
  } else {
    selectId = "retrievePgmInfo_tpro";
  }
  switch (disGubun) {
    case 1:
      // 프로그램  팝업
      udc_actPgmId.setSelectId(selectId);
      rtnList = await udc_actPgmId.cfCommonPopUp(scwin.udc_actPgmId_callback, pCode, pName, pClose, null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearch, null, null); // 프로그램ID

      break;
  }
};
scwin.udc_actPgmId_callback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_actPgmId.setValue(rtnList[0]);
      ed_actPgmId.options.hidVal = rtnList[0];
      ed_actPgmNm.setValue(rtnList[1]);
      ed_menuNm.setValue(rtnList[1]);
    }
  } else {
    ed_actPgmId.setValue("");
    ed_actPgmId.options.hidVal = "";
    ed_actPgmNm.setValue("");
    ed_menuNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 항목 Enable
//-------------------------------------------------------------------------
scwin.f_ContentsEnable = function () {
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableObj($p, btn_actPgmId, true); // 연결프로그램
  $c.gus.cfEnableObj($p, ed_sortSeq, true); // 정렬순번
  $c.gus.cfEnableObj($p, ed_upperMenuId, true); // 상위메뉴
};

//-------------------------------------------------------------------------
// 항목 Disable
//-------------------------------------------------------------------------
scwin.f_ContentsDisable = function () {
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfEnableObj($p, btn_actPgmId, false); // 연결프로그램
  $c.gus.cfEnableObj($p, ed_sortSeq, false); // 정렬순번
  $c.gus.cfEnableObj($p, ed_upperMenuId, false); // 상위메뉴
};

//-------------------------------------------------------------------------
// 메뉴 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  scwin.f_ContentsEnable();
  $c.gus.cfDisableBtn($p, [btn_Update]);
};

//-------------------------------------------------------------------------
// 메뉴 등록취소
//-------------------------------------------------------------------------
scwin.f_Undo = function () {
  let rowIdx = tv_menu.getSelectedIndex();
  tv_menu.spanNode(1, true, true);
  $c.data.undoRow($p, ds_menuList);
  tv_menu.spanNode(1, true, true);
  scwin.f_ContentsDisable();
  $c.gus.cfDisableBtn($p, [btn_Cancel, btn_save]);
};

//-----------------------------------------------------------------------------
//    C O M P O N E N T' S   E V E N T S  
//------------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  // tv_menu.Focus();
  tv_menu.focus();
  scwin.f_ContentsDisable();
  let rowCnt = ds_menuList.getRowCount();
  if (rowCnt > 0) {
    for (let i = 0; i < ds_menuList.getTotalRow(); i++) {
      let irow = ds_menuList.getRowJSON(i);
      if ("0" == irow.useYn) {
        tv_menu.setNodeClass(irow.menuId, "txt-red");
      }
    }
    if (scwin.vPreIndex != 0) {
      tv_menu.findNodeByValue(scwin.vPreIndex, true);
    } else {
      tv_menu.findNodeByValue(ds_menuList.getCellData(0, "menuId"), true);
    }
    $c.gus.cfDisableBtn($p, [btn_Cancel, btn_save]);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  // $c.gus.cfShowError(ds_menuList);
};
scwin.ds_menuList_onrowpositionchange = function (info) {
  // $c.gus.cfPrepareObjectHidVal(ds_menuList, row, 
  // 	["actPgmId", "actPgmNm", "actPgmScrpath", "actPgmParam"], 
  // 	[txt_actPgmId, txt_actPgmNm, hid_actPgmScrpath, hid_actPgmParam]);
};
scwin.ed_upperMenuId_onblur = function (e) {
  var vUpperMenuId = ed_upperMenuId.getValue();
  var vMenuID = ds_menuList.getCellData(ds_menuList.getRowPosition(), "menuId");
  if (vMenuID != "" && vUpperMenuId == vMenuID) {
    $c.win.alert($p, "상위메뉴가 자기자신 일순 없습니다.");
    ed_upperMenuId.focus();
  }
};
scwin.ds_menuList_onbeforerowpositionchange = function (info) {
  if (rd_debis.getValue() == "D") {
    var row = info.newRowIndex;
    if (row == 0 && ds_menuList.getCellData(row, "upperMenuId") != "ROOT") {
      $c.win.alert($p, "이 메뉴는 상위메뉴아이디가 'ROOT'여야 합니다");
      ds_menuList.setCellData(row, "upperMenuId", "ROOT");
      return false;
    } else if (row != 0 && ds_menuList.getCellData(row, "upperMenuId") == "ROOT") {
      $c.win.alert($p, "이 메뉴는 상위메뉴아이디가 'ROOT'일 수 없습니다");
      // ds_menuList.NameValue(row, "upperMenuId") = ds_menuList.OrgNameValue(row, "upperMenuId");
      ds_menuList.setCellData(row, "upperMenuId", ds_menuList.getCellData(info.oldRowIndex, "upperMenuId"));
      return false;
    }
  }
  ed_RowStatus.setValue(ds_menuList.getRowStatus(ds_menuList.getRowPosition()));
  return scwin.f_validateMenu(row);
};
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (rd_debis.getValue() == "N") {
    scwin.f_Retrieve(rd_sysCd2.getValue());
  } else {
    if (rd_userCd.getValue() == "01") {
      scwin.f_Retrieve(rd_sysCd.getValue());
    } else {
      scwin.f_Retrieve(rd_userCd.getValue());
    }
  }
};
scwin.sbm_save_submiterror = function (e) {
  // $c.gus.cfShowError(tr_save);
};
scwin.rd_userCd_onchange = function (info) {
  if (rd_debis.getValue() == "D") {
    scwin.vPreIndex = 0;
    var ds_menuListModi = ds_menuList.getModifiedJSON();
    if (ds_menuListModi.length == 0) {
      if (rd_userCd.getValue() == "01") {
        ds_menuList.setJSON([]);
        // tv_menu.ClearAll();
        rd_sysCd.setDisabled(false);
        rd_sysCd.focus();
      } else {
        rd_sysCd.setValue("");
        rd_sysCd.setDisabled(true);
        scwin.f_Retrieve(rd_userCd.getValue());
      }
    } else {
      if ($c.win.confirm($p, MSG_CM_CRM_015)) {
        scwin.f_Save();
      } else {
        if (rd_userCd.getValue() == "01") {
          ds_menuList.setJSON([]);
          // tv_menu.ClearAll();
          rd_sysCd.setDisabled(false);
          rd_sysCd.focus();
        } else {
          scwin.f_Retrieve(rd_userCd.getValue());
        }
      }
    }
  }
};
scwin.rd_sysCd_onchange = function (info) {
  if (rd_debis.getValue() == "D") {
    scwin.vPreIndex = 0;
    var ds_menuListModi = ds_menuList.getModifiedJSON();
    if (ds_menuListModi.length == 0) {
      scwin.f_Retrieve(rd_sysCd.getValue());
    } else {
      if ($c.win.confirm($p, MSG_CM_CRM_015)) scwin.f_Save();else scwin.f_Retrieve(rd_sysCd.getValue());
    }
  }
};
scwin.tv_menu_onclick = function () {
  // scwin.f_ContentsEnable();
  // $c.gus.cfDisableBtn([btn_Update]);    
};
scwin.udc_actPgmId_onblurCodeEvent = function (e) {
  ed_menuNm.setValue("");
  scwin.f_openCommonPopUp(1, ed_actPgmId.getValue(), ed_actPgmNm.getValue(), 'F', 'F');
};
scwin.udc_actPgmId_onclickEvent = function (e) {
  ed_menuNm.setValue("");
  scwin.f_openCommonPopUp(1, ed_actPgmId.getValue(), ed_actPgmNm.getValue(), 'F', 'F');
};
scwin.tv_menu_onrightbuttonclick = function (node, positionX, topPosition) {
  // var rowIdx = tv_menu.getSelectedIndex();
  btn_treeViewMenu.hide();
  if (ds_menuList.getTotalRow() == 1) {
    // tv_menu.MenuData = "하위메뉴추가^1^1^1";
    btn_delMenu.hide();
    btn_addMenu.show();
  } else {
    // 하위메뉴가 있을 때
    if (ds_menuList.getCellData(ds_menuList.getRowPosition(), "lvl") < ds_menuList.getCellData(ds_menuList.getRowPosition() + 1, "lvl")) {
      // tv_menu.MenuData = "하위메뉴추가^1^1^1";
      btn_delMenu.hide();
      btn_addMenu.show();
    }
    // 하위메뉴가 없을 때
    else {
      // tv_menu.MenuData = "하위메뉴추가^1^1^1,메뉴삭제^1^2^1";
      btn_delMenu.show();
      btn_addMenu.show();
    }
  }

  // tv_menu.TrackPopupMenu(x,y);

  btn_treeViewMenu.setPosition(positionX - 260, topPosition - 140);
  btn_treeViewMenu.show();
};
scwin.btn_addMenu_onclick = function (e) {
  btn_treeViewMenu.hide();
  let selIndex = ds_menuList.getRowPosition();
  let rowIndex = ds_menuList.getRowPosition() + 1;
  ds_menuList.insertRow(rowIndex);
  ds_menuList.setRowPosition(rowIndex);
  ds_menuList.setCellData(rowIndex, "lvl", ds_menuList.getCellData(selIndex, "lvl") + 1);
  ds_menuList.setCellData(rowIndex, "menuId", "T" + scwin.tempMenuID++);
  ds_menuList.setCellData(rowIndex, "upperMenuId", ds_menuList.getCellData(selIndex, "menuId"));
  ds_menuList.setCellData(rowIndex, "sortSeq", "0");
  if (rd_debis.getValue() == "N") {
    ds_menuList.setCellData(rowIndex, "sysCd", rd_sysCd2.getValue());
  } else {
    if (rd_sysCd.getDisabled()) {
      ds_menuList.setCellData(rowIndex, "sysCd", rd_userCd.getValue());
    } else {
      ds_menuList.setCellData(rowIndex, "sysCd", rd_sysCd.getValue());
    }
  }
  tv_menu.findNodeByValue(ds_menuList.getCellData(rowIndex, "menuId"), true);
  scwin.f_ContentsEnable();
  $c.gus.cfDisableBtn($p, [btn_Update]);
};
scwin.btn_delMenu_onclick = async function (e) {
  btn_treeViewMenu.hide();
  // 메뉴삭제
  if (await $c.win.confirm($p, "'" + ds_menuList.getCellData(ds_menuList.getRowPosition(), "menuNm") + "' 메뉴를 삭제하시겠습니까?")) {
    // ds_menuList.deleteRow(ds_menuList.getRowPosition());
    ds_menuList.removeRow(ds_menuList.getRowPosition());
    let debis = "";
    if (rd_debis.getValue() == "N") {
      debis = "ncall.";
    }
    sbm_save.action = "/" + debis + "cm.bc.comnmgnt.menumgnt.cmd.SaveMenuListCMD.do";
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.rd_debis_onviewchange = function (info) {
  scwin.init();
  ds_menuList.setJSON([]);
  if (rd_debis.getValue() == "D") {
    rd_userCd.setValue("");
    rd_userCd.setDisabled(false);
    rd_sysCd.setValue("");
    rd_sysCd.setDisabled(true);
    rd_sysCd2.setValue("");
    rd_sysCd2.setDisabled(true);
  } else {
    rd_userCd.setValue("");
    rd_userCd.setDisabled(true);
    rd_sysCd.setValue("");
    rd_sysCd.setDisabled(true);
    rd_sysCd2.setValue("");
    rd_sysCd2.setDisabled(false);
  }
};
scwin.rd_sysCd2_onchange = function (info) {
  if (rd_debis.getValue() == "N") {
    scwin.f_Retrieve(rd_sysCd2.getValue());
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:floatingLayer',A:{title:'',id:'btn_treeViewMenu',style:'display:none;',movable:'false',dragResizable:'false',class:'btn_addMenu'},E:[{T:1,N:'xf:group',A:{class:'my-menu','ev:onclick':'scwin.btn_addMenu_onclick',id:'btn_addMenu',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하위메뉴추가',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{'ev:onclick':'scwin.btn_delMenu_onclick',style:'',id:'btn_delMenu',class:'my-menu'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'메뉴삭제',class:''}}]}]},{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_td pa10',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'','ev:onviewchange':'scwin.rd_debis_onviewchange',id:'rd_debis',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'0',style:'width:150px;',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DEBIS'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'NCALL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용자구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td pa10',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'grid col5',cols:'5',id:'rd_userCd',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onchange':'scwin.rd_userCd_onchange'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'시스템구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_sysCd',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onchange':'scwin.rd_sysCd_onchange',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공통'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CM'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DS'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고속'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'TR'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'렌터카'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'RC'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'EQ'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'회계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'AC'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FW'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사회계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'SA'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'JL'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'해외법인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'LA'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',disabled:'true','ev:onchange':'scwin.rd_sysCd2_onchange',id:'rd_sysCd2',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당사사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DS'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매칭서비스화주'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'MB'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화주'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'포워더'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력업체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력업체2'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FB'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화주+협력'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FM'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차주'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'81'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화주(신대양)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자가(데비스)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'05'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox ',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'메뉴 Tree (※ 메뉴추가 시 마우스오른쪽 버튼) ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'N',btnUser:'N',btnPlusYn:'Y',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{class:'tvw-wrap',id:'grd_section1'},E:[{T:1,N:'w2:treeview',A:{dataType:'listed',id:'tv_menu',style:'height:100%;',tooltipGroupClass:'false',renderType:'virtual','ev:onrightbuttonclick':'scwin.tv_menu_onrightbuttonclick','ev:onclick':'scwin.tv_menu_onclick',class:'',hierarchy:'true'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_menuList'},E:[{T:1,N:'w2:label',A:{ref:'menuNm'}},{T:1,N:'w2:value',A:{ref:'menuId'}},{T:1,N:'w2:depth',A:{ref:'lvl'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'메뉴 내용',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:input',A:{class:' w250',id:'ed_RowStatus',maxlength:'50',ref:'',style:''}}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_menuInfo',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'메뉴명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w250',id:'ed_menuNm',style:'',ref:'data:ds_menuList.menuNm',objType:'key',mandatory:'true',maxlength:'50',validExp:'메뉴명:yes:maxByteLength=50',title:'메뉴명'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'연결프로그램',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_actPgmId',code:'actPgmId',codeId:'ed_actPgmId',editTypeName:'focus',id:'udc_actPgmId',maxlengthCode:'100',maxlengthName:'100',name:'actPgmNm',nameId:'ed_actPgmNm',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'',style:'',validExpCode:'프로그램명:no:maxByteLength=100',refDataCollection:'ds_menuList','ev:onblurCodeEvent':'scwin.udc_actPgmId_onblurCodeEvent','ev:onclickEvent':'scwin.udc_actPgmId_onclickEvent',codeWidth:'200'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'메뉴설명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w250',id:'ed_menuDesc',style:'',ref:'data:ds_menuList.menuDesc',objType:'data',validExp:'메뉴설명:no:maxByteLength=100',maxlength:'100'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'메뉴파라미터',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_menuParam',class:' w150',ref:'data:ds_menuList.menuParam',objType:'data',validExp:'메뉴파라미터:no:maxLength=30'}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_rptGrpCd',ref:'rpt',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',visibleRowNum:'10',objType:'data',chooseOption:'true',chooseOptionLabel:'선택'},E:[{T:1,N:'w2:choices'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_useYn',ref:'data:ds_menuList.useYn',renderType:'checkboxgroup',rows:'',selectedindex:'',style:'',objType:'data',value:'1',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'메뉴상태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{chooseOption:'true',chooseOptionLabel:'$blank',class:'',editType:'select',id:'lc_menuStsCd',ref:'data:ds_menuList.menuStsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'실행가능\n'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RUN'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'개발중'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DEV'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용중지'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SLP'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정렬순번',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w50',id:'ed_sortSeq',style:'text-align:right;',ref:'data:ds_menuList.sortSeq',objType:'data',validExp:'정렬순번:no:number=(3.0)'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상위메뉴ID',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w100',id:'ed_upperMenuId',style:'',ref:'data:ds_menuList.upperMenuId',objType:'data',validExp:'상위메뉴ID:yes:maxLength=5','ev:onblur':'scwin.ed_upperMenuId_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'산출물기준',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{chooseOption:'true',chooseOptionLabel:'전체',class:'',editType:'select',id:'lc_prodstdCd',ref:'data:ds_menuList.prodstdCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'산출물대상'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'산출물제외'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SLA적용일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_slaadptDt',style:'',delimiter:'/',ref:'data:ds_menuList.slaadptDt',objType:'data'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Preview',style:'',type:'button','ev:onclick':'scwin.f_Preview',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Update',style:'',type:'button','ev:onclick':'scwin.f_Update',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',style:'',type:'button','ev:onclick':'scwin.f_Undo',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;',id:'udc_closeYn'}}]}]}]}]}]})