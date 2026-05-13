/*amd /ui/cm/bc/comnmgnt/boardmgnt/core/zz_690_01_06b_2.xml 26272 85b83af2eb875d821fdbfccb140004a20d695ca32f08c50ee699c222950ba110 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'contents',name:'contents',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_basisItem',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_basisItem_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lvl',name:'lvl',dataType:'text'}},{T:1,N:'w2:column',A:{id:'boardId',name:'boardId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'boardTyp',name:'boardTyp',dataType:'text'}},{T:1,N:'w2:column',A:{id:'threadId',name:'threadId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperThreadId',name:'upperThreadId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'replyOrd',name:'replyOrd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'userId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'userNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'title',name:'title',dataType:'text'}},{T:1,N:'w2:column',A:{id:'contents',name:'contents',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hitCnt',name:'hitCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFileCnt',name:'attachFileCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commentCnt',name:'commentCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'foreColor',name:'foreColor',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_DetailData',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'boardId',name:'boardId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'boardTyp',name:'boardTyp',dataType:'text'}},{T:1,N:'w2:column',A:{id:'threadId',name:'threadId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFileId',name:'attachFileId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFileNm',name:'attachFileNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFilePath',name:'attachFilePath',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFileSiz',name:'attachFileSiz',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'regDtm',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_cond","key":"IN_DS1"},{"id":"ds_basisItem","key":"OUT_DS1"},{"id":"ds_DetailData","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_basisItem","key":"OUT_DS1"},{"id":"ds_DetailData","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_basisItem","key":"IN_DS1"},{"action":"modified","id":"ds_DetailData","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId;
scwin.userNm = scwin.memJson.userNm;
scwin.tempMenuID = 100000;
scwin.menuSts = "folded";
scwin.onpageload = function () {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  let debis = "";
  if (rd_debis.getValue() == "N") {
    debis = "ncall.";
  }
  dma_cond.set("contents", txt_contents_cond.getValue());
  sbm_retrieve.action = "/" + debis + "cm.bc.comnmgnt.boardmgnt.RetrieveGuideBoardListCMD.do";
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 체크
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  let ret = await $c.gus.cfValidate($p, [txt_title, txt_userNm, txt_contents]);
  return ret;
};

//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
  rd_debis.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_basisItem.getModifiedIndex().length == 0 && ds_DetailData.getModifiedIndex().length == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "데이타"));
    return;
  }
  let ret = await scwin.f_Validation();
  if (!scwin.f_Validation()) {
    return;
  }
  if (ds_basisItem.getModifiedIndex().length == 0 && ds_basisItem.getRowCount() != 0 && ds_DetailData.getModifiedIndex().length == 0 && ds_DetailData.getRowCount() != 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "데이타"));
    return;
  }
  for (i = 0; i < ds_DetailData.getRowCount(); i++) {
    if (ds_DetailData.getCellData(i, 'attachFileNm') == "" || ds_DetailData.getCellData(i, 'attachFilePath') == "" || ds_DetailData.getCellData(i, 'attachFileSiz') == "") {
      await $c.win.alert($p, i + " 행의 파일이 제대로 첨부 되지 않았습니다.\n\n " + i + "행을 삭제하거나 다시 첨부하여주세요");
      return false;
    }
  }
  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmResult) {
    // 적용기간 변경시 전부 변경
    // if (ds_basisItem.OrgNameValue(ds_basisItem.RowPosition,"adptTermStDt") != ds_basisItem.NameValue(ds_basisItem.RowPosition,"adptTermStDt")) {
    //     for (i=1; i<=ds_basisItem.CountRow; i++) {
    //         if (ds_basisItem.NameString(i,"upperAdmin") == ds_basisItem.NameValue(ds_basisItem.RowPosition,"userId")) {
    //             ds_basisItem.NameValue(i,"adptTermStDt") = ds_basisItem.NameValue(ds_basisItem.RowPosition,"adptTermStDt");
    //         }
    //     }
    // }

    let debis = "";
    if (rd_debis.getValue() == "N") {
      debis = "ncall.";
    }
    sbm_save.action = "/" + debis + "cm.bc.comnmgnt.boardmgnt.SaveGuideBoardListCMD.do";
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 항목 Tree 취소
//-------------------------------------------------------------------------
scwin.f_CancelClass = function () {
  ds_basisItem.undoAll();
  ds_DetailData.undoAll();
  tb_TreeView.spanAll(false);
  tb_TreeView.findNodeByIndex(1, true);
};

//-------------------------------------------------------------------------
// 행추가  
//-------------------------------------------------------------------------   
scwin.f_EventNew = function () {
  gr_detail.setReadOnly("grid", true);
  if (ds_basisItem.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, "상위계정코드");
    return;
  }
  if (ds_basisItem.getCellData(ds_basisItem.getRowPosition(), "threadId") == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, "현재ID");
    return;
  }
  let rowIndex = ds_DetailData.insertRow();
  ds_DetailData.setCellData(rowIndex, "threadId", ds_basisItem.getCellData(ds_basisItem.getRowPosition(), "threadId"));
  gr_detail.setReadOnly("cell", rowIndex, "attachFileNm", false);
  gr_detail.setFocusedCell(rowIndex, "attachFileNm", true);
};

//-------------------------------------------------------------------------
// 행삭제  
//-------------------------------------------------------------------------   
scwin.f_delMarked = function () {
  let row = ds_DetailData.getRowPosition();
  if (ds_DetailData.getRowStatus(row) == "C") {
    ds_DetailData.removeRow(row);
  } else {
    ds_DetailData.deleteRow(row);
  }
};

//-------------------------------------------------------------------------
// 취소  
//-------------------------------------------------------------------------   
scwin.f_Undo = function () {
  $c.data.undoRow($p, ds_DetailData, "Y");
};

//-------------------------------------------------------------------------
// scwin.name : f_Download
//-------------------------------------------------------------------------
scwin.f_Download = function () {
  let row = ds_DetailData.getRowPosition();
  if (ds_DetailData.getRowCount() < 1) {
    // cfAlertMsg(MSG_CM_ERR_056, ["첨부파일 행"]);
    $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_056, "첨부파일 행"));
    return;
  } else {
    let fileName = ds_DetailData.getCellData(row, "attachFileNm");
    let filePath = ds_DetailData.getCellData(row, "attachFilePath");
    if (filePath.trim().length == 0) {
      $c.win.alert($p, "선택하신 " + row + "행에 파일이 등록되어 있지 않습니다.");
    } else {
      if (filePath.indexOf(".") > 0) {
        fileName += filePath.substring(filePath.indexOf("."), filePath.indexOf(".") + 4);
        $c.gus.cfDownloadFile($p, fileName, filePath);
      }
    }
  }
};

//-------------------------------------------------------------------------
// function desc : 사고 파일 첨부하기
//-------------------------------------------------------------------------    
scwin.f_fileSet = async function (row) {
  let opt = {};
  opt.width = "1050";
  opt.height = "450";
  opt.modal = true;
  opt.title = "title";
  opt.id = "popup";
  opt.popupName = "사용자지침 첨부파일";
  let rtnList = await $c.win.openPopup($p, "/ui/cm/bc/comnmgnt/boardmgnt/core/zz_690_01_06p_2.xml", opt);
  if (rtnList != null) {
    if (rtnList[0] != "" && rtnList[0] != "undefined") {
      ds_DetailData.setCellData(row, "attachFileNm", rtnList[1]);
      ds_DetailData.setCellData(row, "attachFilePath", rtnList[0]);
      ds_DetailData.setCellData(row, "attachFileSiz", rtnList[2]);
      ds_DetailData.setCellData(row, "boardId", "01");
      ds_DetailData.setCellData(row, "boardTyp", "06");
    }
  }
};

//-------------------------------------------------------------------------
// function desc : 메뉴 트리 전체 펼치기
//-------------------------------------------------------------------------  
scwin.f_ReleaseTree = function () {
  if (scwin.menuSts == "folded") {
    tb_TreeView.spanAll(true);
    scwin.menuSts = "released";
  } else if (scwin.menuSts == "released") {
    tb_TreeView.spanAll(false);
    scwin.menuSts = "folded";
  }
};
scwin.sbm_retrieve_submitdone = function (e) {
  $c.gus.cfDisableBtn($p, [r_Add1, r_Delete1, r_Cancel1, btn_save]);
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfEnableObjects($p, [txt_contents_cond]);
  let rowCnt = ds_basisItem.getRowCount();
  if (rowCnt == 0) {
    ds_DetailData.setJSON([]);
  } else {
    for (let i = 0; i < rowCnt; i++) {
      let irow = ds_basisItem.getRowJSON(i);
      if ("BLUE" == irow.foreColor) {
        // console.log(irow.title);
        tb_TreeView.setNodeClass(irow.upperThreadId, "txt-blue");
      }
    }
  }
  tb_TreeView.findNodeByIndex(1, true);
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, "정상적으로 반영 되었습니다.");
  scwin.f_Retrieve();
};
scwin.tb_TreeView_onrightbuttonclick = function (node, positionX, topPosition) {
  btn_treeViewMenu.hide();
  if (ds_basisItem.getTotalRow() == 1) {
    btn_delMenu.hide();
    btn_addMenu.show();
  } else {
    // 하위메뉴가 있을 때
    if (ds_basisItem.getCellData(ds_basisItem.getRowPosition(), "lvl") < ds_basisItem.getCellData(ds_basisItem.getRowPosition() + 1, "lvl")) {
      // tv_menu.MenuData = "하위메뉴추가^1^1^1";
      btn_delMenu.hide();
      btn_addMenu.show();
    }
    // 하위메뉴가 없을 때
    else {
      btn_delMenu.show();
      btn_addMenu.show();
    }
  }
  btn_treeViewMenu.setPosition(positionX - 260, topPosition - 140);
  btn_treeViewMenu.show();
};
scwin.btn_addMenu_onclick = function (e) {
  btn_treeViewMenu.hide();
  let selIndex = ds_basisItem.getRowPosition();
  let rowIndex = ds_basisItem.getRowPosition() + 1;
  ds_basisItem.insertRow(rowIndex);
  ds_basisItem.setRowPosition(rowIndex);
  ds_basisItem.setCellData(rowIndex, "boardId", "01");
  ds_basisItem.setCellData(rowIndex, "boardTyp", "06");
  ds_basisItem.setCellData(rowIndex, "userNm", scwin.userNm);
  ds_basisItem.setCellData(rowIndex, "userId", scwin.userId);
  ds_basisItem.setCellData(rowIndex, "lvl", ds_basisItem.getCellData(selIndex, "lvl") + 1);
  ds_basisItem.setCellData(rowIndex, "threadId", "T" + scwin.tempMenuID++);
  ds_basisItem.setCellData(rowIndex, "upperThreadId", ds_basisItem.getCellData(selIndex, "threadId"));

  // ds_DetailData.Filter();	
  ds_basisItem.setCellData(rowIndex, "contentsClob", "");
  scwin.f_Filter();
};
scwin.btn_delMenu_onclick = async function (e) {
  btn_treeViewMenu.hide();
  // 메뉴삭제
  if (ds_basisItem.getCellData(ds_basisItem.getRowPosition(), "threadId") == "101") {
    await $c.win.alert($p, "ROOT는  삭제 불가합니다.");
    return false;
  }
  if (await $c.win.confirm($p, "'" + ds_basisItem.getCellData(ds_basisItem.getRowPosition(), "title") + "' 메뉴를 삭제하시겠습니까?")) {
    for (let j = 0; j < ds_DetailData.getRowCount(); j++) {
      if (ds_DetailData.getCellData(j, "threadId") == ds_basisItem.getCellData(ds_basisItem.getRowPosition(), "threadId")) {
        ds_DetailData.deleteRow(j);
      }
    }
    ds_basisItem.deleteRow(ds_basisItem.getRowPosition());
  }
};
scwin.f_Filter = function () {
  let rowVal = ds_basisItem.getCellData(ds_basisItem.getRowPosition(), "threadId");
  let rcolumnId = "threadId";
  ds_DetailData.removeColumnFilterAll();
  $c.data.dataListFilter($p, ds_DetailData, "LIKE", true, {
    colId: rcolumnId,
    func: function (cellData, tmpParam, rowIdx) {
      if (cellData.indexOf(rowVal) > -1) {
        return true;
      }
      return false; // return이 true인 경우 적용하고 false인 경우 넘김
    }
  });
  gr_detail.setFocusedCell(0, "attachFileNm", true);
  spanTotal.setLabel(ds_DetailData.getRowCount());
};
scwin.ds_basisItem_onrowpositionchange = function (info) {
  scwin.f_Filter();
};
scwin.tb_TreeView_onclick = function () {
  // ds_DetailData.Filter();
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableKey($p);
  $c.gus.cfEnableBtnOnly($p, [r_Add1, r_Delete1, r_Cancel1, btn_save]);
  // deleteCheckflag = "true";
};
scwin.gr_detail_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  var fname = ds_DetailData.getCellData(rowIndex, "attachFileNm");
  var fpath = ds_DetailData.getCellData(rowIndex, "attachFilePath");
  $c.gus.cfDownloadFile($p, fname, fpath);
};
scwin.gr_detail_ontextimageclick = function (rowIndex, columnIndex) {
  switch (gr_detail.getColumnID(columnIndex)) {
    case "attachFileNm":
      scwin.f_fileSet(rowIndex);
      break;
  }
};
scwin.txt_contents_cond_onkeypress = function (e) {
  if (e.keyCode == 13) {
    scwin.f_Retrieve();
  }
};
scwin.rd_debis_onviewchange = function (info) {
  // scwin.init();
  ds_basisItem.setJSON([]);
  ds_DetailData.setJSON([]);
  scwin.f_Retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:floatingLayer',A:{title:'',id:'btn_treeViewMenu',style:'display:none;',movable:'false',dragResizable:'false',class:'btn_addMenu'},E:[{T:1,N:'xf:group',A:{class:'my-menu','ev:onclick':'scwin.btn_addMenu_onclick',id:'btn_addMenu',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하위메뉴추가',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{'ev:onclick':'scwin.btn_delMenu_onclick',style:'',id:'btn_delMenu',class:'my-menu'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'메뉴삭제',class:''}}]}]},{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:56px;'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'','ev:onviewchange':'scwin.rd_debis_onviewchange',id:'rd_debis',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'0',style:'width:120px;'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DEBIS'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'NCALL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'제목 / 내용 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_contents_cond',placeholder:'',style:'width: 300px;',ref:'data:dma_cond.contents','ev:onkeypress':'scwin.txt_contents_cond_onkeypress'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_FieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'사용자지침 Tree (※ 항목추가 시 마우스 오른쪽 버튼)',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'bMenu01',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_ReleaseTree'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'메뉴펼침/접기'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',id:'',style:'',btnUser:'N',gridDownYn:'N',btnPlusYn:'Y',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{class:'tvw-wrap',id:'grd_section1',style:''},E:[{T:1,N:'w2:treeview',A:{dataType:'listed',id:'tb_TreeView',style:'height:100%;',tooltipGroupClass:'false',renderType:'virtual',showTreeDepth:'2',hierarchy:'true','ev:onrightbuttonclick':'scwin.tb_TreeView_onrightbuttonclick','ev:onclick':'scwin.tb_TreeView_onclick'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_basisItem'},E:[{T:1,N:'w2:label',A:{ref:'title'}},{T:1,N:'w2:value',A:{ref:'upperThreadId'}},{T:1,N:'w2:depth',A:{ref:'lvl'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'trigger9',type:'button',class:'btn sm white',disabled:' ','ev:onclick':'scwin.f_CancelClass'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 700px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'사용자지침 내용 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:'height: 100%'},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'height: 100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'제목',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_title',style:'',mandatory:'true',title:'제목',maxlength:'50',ref:'data:ds_basisItem.title',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'등록자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_userNm',style:'',maxlength:'50',title:'등록자',ref:'data:ds_basisItem.userNm',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'내용',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',style:'height: 100%;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:textarea',A:{class:'',id:'txt_contents',style:'height: 100%;',maxlength:'700',ref:'data:ds_basisItem.contents',objType:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'file-wrap  no-title',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'group2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_DetailData','ev:oneditend':'scwin.gr_closeControl_oneditend',focusMode:'cell',gridName:'마감통제',id:'gr_detail',rowStatusVisible:'true',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_detail_oncelldblclick','ev:ontextimageclick':'scwin.gr_detail_ontextimageclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'column22',value:'파일명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'파일크기',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'등록일자',width:'140'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'250',inputType:'textImage',style:'',id:'attachFileNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{allOption:'',chooseOption:'',displayMode:'label',id:'attachFileSiz',inputType:'',ref:'',style:'',textAlign:'right',value:'',width:'140',dataType:'number',displayFormat:'#,###,###'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'진행중'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미마감'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'마감완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',readOnly:'true',style:'',textAlign:'center',value:'',width:'140',displayFormat:'####/##/##'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm','ev:onclick':'scwin.f_Download',id:'btn_File05',style:'',type:'button',userAuth:'R',title:'DownLoad'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DownLoad'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',gridID:'gr_detail',rowAddUserAuth:'C',style:'',rowDelUserAuth:'D',cancelFunction:'scwin.f_Undo',rowDelFunction:'scwin.f_delMarked',rowAddFunction:'scwin.f_EventNew',btnRowAddObj:'r_Add1',btnRowDelObj:'r_Delete1',btnCancelObj:'r_Cancel1'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'해당 매뉴에 사용자 지침서 파일이 업로드 되어 있을 경우 매뉴가 파란색으로 표시됩니다 ',class:'txt-dot  txt-blue',escape:'false'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'ctrlBtn',userAuth:'C',title:'저장'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})