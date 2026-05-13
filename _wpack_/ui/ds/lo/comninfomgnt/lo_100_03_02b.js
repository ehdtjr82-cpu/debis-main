/*amd /ui/ds/lo/comninfomgnt/lo_100_03_02b.xml 20380 7fe7c78be853442b6c7e1904add571b46a2fe4532db841a95d6238117901d5ba */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_kindOfCargoList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcgCd',name:'화종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperKcgCd',name:'상위화종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcgNm',name:'화종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcgEngNm',name:'화종영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lvl',name:'레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_kindOfCargo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcgCd',name:'화종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperKcgCd',name:'상위화종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcgNm',name:'화종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcgEngNm',name:'화종영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lvl',name:'레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_kindOfCargo_o',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcgCd',name:'화종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperKcgCd',name:'상위화종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcgNm',name:'화종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcgEngNm',name:'화종영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lvl',name:'레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_commodityList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명명',dataType:'text',length:'50'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchMap'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcgCd',name:'화종코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upperKcgCd',name:'상위화종코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lvl',name:'레벨',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_kindOfCargo_o',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'kcgCd',name:'화종코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'upperKcgCd',name:'상위화종코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'kcgNm',name:'화종명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'kcgEngNm',name:'화종영문명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lvl',name:'레벨'}},{T:1,N:'w2:column',A:{dataType:'text',id:'useYn',name:'사용여부'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comninfomgnt.SaveKindOfCargoListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_kindOfCargoList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveTree',action:'/ds.lo.comninfomgnt.RetrieveKindOfCargoTreeCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_kindOfCargo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveTree_submitdone','ev:submiterror':'scwin.sbm_retrieveTree_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveComm',action:'/ds.lo.comninfomgnt.RetrieveCommodityListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_searchMap","key":"GAUCE"}',target:'data:json,{"id":"ds_commodityList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveComm_submitdone','ev:submiterror':'scwin.sbm_retrieveComm_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveList',action:'/ds.lo.comninfomgnt.RetrieveKindOfCargoListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_searchMap","key":"GAUCE"}',target:'data:json,{"id":"ds_kindOfCargoList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveList_submitdone','ev:submiterror':'scwin.sbm_retrieveList_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.MSG_LO_WRN_001 = "'@' 은(는) 필수 입력항목입니다.";
scwin.MSG_LO_WRN_002 = "하위 레벨이 존재하여 삭제할 수 없습니다.";
scwin.hid_tv_index = 0;
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// scwin.name : f_OnLoad
// scwin.desc : 화면로딩시 
//-------------------------------------------------------------------------   
scwin.f_OnLoad = function () {};
scwin.onUdcCompleted = function () {
  scwin.f_defaultValue();
  scwin.f_createTree();
};

//-------------------------------------------------------------------------
// scwin.name : f_defaultValue
// scwin.desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  $c.gus.cfDisableKey($p);
};
//-------------------------------------------------------------------------
// scwin.name : f_createTree
// scwin.desc : 화면 우측 Tree데이타 조회
//-------------------------------------------------------------------------
scwin.f_createTree = function () {
  $c.sbm.execute($p, sbm_retrieveTree);
};

//-------------------------------------------------------------------------
// scwin.name : f_Addrow
// scwin.desc : 그리드 칼럼 추가
//-------------------------------------------------------------------------
scwin.f_Addrow = function () {
  var row = ds_kindOfCargoList.getRowCount();
  var dsPos = scwin.f_getKcgCdPos();
  ds_kindOfCargoList.insertRow(row);
  ds_kindOfCargoList.setCellData(row, "upperKcgCd", ds_kindOfCargo.getCellData(dsPos, "kcgCd"));
  ds_kindOfCargoList.setCellData(row, "lvl", parseInt(ds_kindOfCargo.getCellData(dsPos, "lvl")) + 1);
  ds_kindOfCargoList.setCellData(row, "useYn", 1);
  gr_kindOfCargoList.setFocusedCell(row, "kcgCd", false);
};

//-------------------------------------------------------------------------
// scwin.name : f_Delrow
// scwin.desc : 메인 그리드를 삭제했을 경우 sub그리드의 데이타까지 삭제
//-------------------------------------------------------------------------
scwin.f_Delrow = function () {
  var row = ds_kindOfCargoList.getRowPosition();
  if (ds_kindOfCargoList.getRowCount() > 0) {
    if (ds_kindOfCargoList.getRowStatus(row) == "C") {
      ds_kindOfCargoList.removeRow(row);
    } else {
      ds_kindOfCargoList.deleteRow(row);
    }
  } else {
    $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_002);
    return;
  }
};

//-------------------------------------------------------------------------
// scwin.name : f_Retrieve
// scwin.desc : 조회
//-------------------------------------------------------------------------

scwin.f_Retrieve = function (strKcgCd) {
  ds_searchMap.setEmptyValue();
  ds_searchMap.set("upperKcgCd", strKcgCd);
  $c.sbm.execute($p, sbm_retrieveList);
};

//-------------------------------------------------------------------------
// scwin.name : f_retrieveComm
// scwin.desc : 품목 조회 
//-------------------------------------------------------------------------
scwin.f_retrieveComm = function (strKcgCd) {
  ds_searchMap.setEmptyValue();
  ds_searchMap.set("kcgCd", strKcgCd);
  ds_searchMap.set("lvl", "4");
  $c.sbm.execute($p, sbm_retrieveComm);
};
//-------------------------------------------------------------------------
// scwin.name : f_Save
// scwin.desc : 저장
//-------------------------------------------------------------------------

scwin.f_Save = async function () {
  if (ds_kindOfCargoList.getModifiedJSON().length < 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["품명"]); //변경된 정보가 없습니다.
    return;
  }
  scwin.hid_tv_index = tv_kindOfCargo.getSelectedIndex();
  if (scwin.f_ReqFieldChk()) {
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      $c.sbm.execute($p, sbm_save);
    }
  }
};
scwin.f_ReqFieldChk = function () {
  if ($c.gus.cfValidate($p, [gr_kindOfCargoList])) {
    return true;
  } else {
    return false;
  }
};
scwin.f_openPopUp = function (disGubun, chgGubun) {};
scwin.tv_kindOfCargo_onviewchange = async function (info) {
  var oldVal = "";
  var newVal = "";
  if (undefined != info) {
    oldVal = info.oldNode.value;
    newVal = info.newNode.value;
    newLab = info.newNode.label;
    if (ds_kindOfCargo.getModifiedJSON().length > 0) {
      if (!(await $c.win.confirm($p, MSG_CM_CRM_005))) {
        if (oldVal != "") {
          tv_kindOfCargo.findNodeByValue(oldVal, true);
        } else {
          tv_kindOfCargo.findNodeByIndex(1, true);
        }
        return;
      }
    }
  } else {
    tv_kindOfCargo.findNodeByIndex(1, true);
  }

  //그리드 타이틀 설정
  var kcgCd = newVal;
  if (kcgCd == "") {
    tbx_sub_title.setValue("화종");
  } else {
    tbx_sub_title.setValue(newLab);
  }

  //그리드 헤더 설정
  var dsPos = scwin.f_getKcgCdPos();
  var lvl = ds_kindOfCargo.getCellData(dsPos, "lvl");
  if (lvl == 2) {
    $c.gus.cfDisableBtnOnly($p, [btn_addrow]);
    ds_kindOfCargoList.removeAll();
    ds_commodityList.removeAll();
  } else if (lvl == 1) {
    gr_kindOfCargoList.setHeaderValue("kcgCdH", "화종코드", false);
    gr_kindOfCargoList.setHeaderValue("kcgNmH", "화종명", false);
    $c.gus.cfEnableBtnOnly($p, [btn_addrow]);
    scwin.f_Retrieve(kcgCd);
  } else {
    gr_kindOfCargoList.setHeaderValue("kcgCdH", "화종군코드", false);
    gr_kindOfCargoList.setHeaderValue("kcgNmH", "화종군명", false);
    $c.gus.cfEnableBtnOnly($p, [btn_addrow]);
    scwin.f_Retrieve(kcgCd);
  }
};
scwin.gr_kindOfCargoList_onrowindexchange = function (rowIndex, oldRow) {
  // console.log("gr_kindOfCargoList_onrowindexchange~~");
  var kcgCd = ds_kindOfCargoList.getCellData(rowIndex, "kcgCd");
  scwin.f_retrieveComm(kcgCd);
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_comm_onclick = function (e) {
  $c.win.openMenu($p, "품명관리", "/ui/ds/lo/comninfomgnt/lo_100_03_01b.xml", "lo_100_03_01b.xml");
};
scwin.sbm_retrieveTree_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

  var rowcnt = ds_kindOfCargo.getRowCount();
  if (rowcnt == 0) {
    //$c.gus.cfAlertMsg(MSG_CM_WRN_002);
  } else {
    ds_kindOfCargo.insertRow(0);
    ds_kindOfCargo.setCellData(0, "kcgCd", "");
    ds_kindOfCargo.setCellData(0, "kcgNm", "화종");
    ds_kindOfCargo.setCellData(0, "lvl", 0);
    const treeList = ds_kindOfCargo.getAllJSON();
    console.table(treeList);
    ds_kindOfCargo_o.setJSON(treeList);

    // const treeList = ds_kindOfCargo.getAllJSON();

    // ds_kindOfCargo_o.setJSON(treeList);

    ds_kindOfCargo.reform();
    tv_kindOfCargo.spanNode(1, true, true);
    scwin.tv_kindOfCargo_onviewchange();
  }
};
scwin.sbm_retrieveTree_submiterror = function (e) {};
scwin.sbm_retrieveList_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

  var rowcnt = ds_kindOfCargoList.getRowCount();
  tbx_totalRows.setValue(rowcnt);
  ds_kindOfCargoList.sort("kcgCd", 0);
  gr_kindOfCargoList.setFocusedCell(0, "kcgCd", false);
  scwin.f_retrieveComm(ds_kindOfCargoList.getCellData(0, "kcgCd"));
};
scwin.sbm_retrieveList_submiterror = function (e) {};
scwin.sbm_retrieveComm_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  var rowcnt = ds_commodityList.getRowCount();
  tbx_totalRows2.setValue(rowcnt);

  //ds_commodityList.sort("kcgCd",0);
  gr_commodityList.setFocusedCell(0, "commCd", false);
};
scwin.sbm_retrieveComm_submiterror = function (e) {};
scwin.sbm_save_submitdone = function (e) {
  var dsPos = scwin.f_getKcgCdPos();
  scwin.f_Retrieve(ds_kindOfCargo.getCellData(dsPos, "kcgCd"));
};
scwin.sbm_save_submiterror = function (e) {};
scwin.f_getKcgCdPos = function () {
  var tvPos = tv_kindOfCargo.getSelectedIndex();
  var dsPos = 0;
  if (tvPos == "") {
    tvPos = 0;
  }
  if (tvPos > 0) {
    dsPos = tvPos - 1;
  }
  return dsPos;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox col3 wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 400px'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'화종Tree',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'N',gridUpYn:'N',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{id:'grd_section1',class:'tvw-wrap'},E:[{T:1,N:'w2:treeview',A:{tooltipGroupClass:'false',dataType:'listed',style:'height: 100%',id:'tv_kindOfCargo',renderType:'virtual',class:'','ev:onviewchange':'scwin.tv_kindOfCargo_onviewchange'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_kindOfCargo_o'},E:[{T:1,N:'w2:label',A:{ref:'kcgNm'}},{T:1,N:'w2:value',A:{ref:'kcgCd'}},{T:1,N:'w2:depth',A:{ref:'lvl'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'tbx_sub_title',label:'화종',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',grdDownOpts:'{"fileName":"화종등록.xlsx","type":"4+8+16"}',gridID:'gr_kindOfCargoList',id:'udc_topGrdBtn2',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'flex:1;',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_kindOfCargoList',style:'',autoFit:'allColumn',id:'gr_kindOfCargoList',class:'wq_gvw',visibleRowNumFix:'true','ev:onrowindexchange':'scwin.gr_kindOfCargoList_onrowindexchange',rowStatusVisible:'true',visibleRowNum:'20'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'kcgCdH',value:'화종군코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'kcgNmH',value:'화종군명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'영문명',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'사용여부',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'kcgCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'kcgNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'kcgEngNm',displayMode:'label',textAlign:'left',allowChar:'A-Za-z0-9'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'useYn',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'margin-top:auto;',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_addRow',gridID:'gr_kindOfCargoList',rowAddFunction:'scwin.f_Addrow',rowDelFunction:'scwin.f_Delrow',btnDelYn:'N',btnCancelYn:'Y',btnRowAddObj:'btn_addrow',rowDelUserAuth:'D',rowAddUserAuth:'C',rowAddObjType:'data',rowDelObjType:'data',cancelObjType:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'소속품명리스트',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridUpYn:'N',id:'udc_topGrdBtn3',gridID:'gr_commodityList',grdDownOpts:'{"fileName":"소속품명리스트.xlsx","type":"4+8+16"}',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:'flex:1;'},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_commodityList',id:'gr_commodityList',style:'',visibleRowNumFix:'true',readOnly:'true',visibleRowNum:'20'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'품명코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'품명명',width:'130'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',style:'',value:'',width:'130',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:'margin-top:auto;'},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_comm',label:'저장',type:'button',class:'btn ','ev:onclick':'scwin.btn_comm_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'품명관리'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})