/*amd /ui/cm/bc/comnmgnt/usermgnt/zz_620_01_06b.xml 19415 cb192ba012d2d5bbe18ba4bb9149b8d9648a0e7ab0cb343f1518757c2480c196 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_menuList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'menuId',name:'메뉴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'menuNm',name:'메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actPgmScrPath',name:'메뉴경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperMenuId',name:'부모메뉴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lvl',name:'메뉴레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'정렬순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'programCd',name:'프로그램코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'engNm',name:'영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'menuDesc',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'menuStsCd',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sysCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actPgmId',name:'파일명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_menuList2',saveRemovedData:'true','ev:ondataload':'scwin.ds_menuList2_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'menuId',name:'메뉴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'menuNm',name:'메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actPgmScrPath',name:'메뉴경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actPgmId',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'sortSeq',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_fav'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'method',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'data',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'coCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'menuNm',name:'menuNm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userId',name:'userId',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_menuList',action:'/cm.bc.comnmgnt.menumgnt.cmd.RetrieveAllActiveMenuListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_search',target:'data:json,{"id":"ds_menuList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_menuList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveInitPage',action:'/FavorMenuService',method:'post',mediatype:'application/json',ref:'data:json,ds_fav',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveInitPage_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getInitPage',action:'/FavorMenuService',method:'post',mediatype:'application/json',ref:'data:json,ds_fav',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_getInitPage_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**********************************************************************************
* 초기화면 설정
* @date 2025-12-08 
* @author 김팔수
* @description 
* 초기화면을 등록하는 페이지로 등록이 되어 있지 않으면, 해당 페이지가 메인로딩시 호출
* 등록된 화면이 있으면 등록된 페이지가 메인페이지 호출시 출력이 된다.
***********************************************************************************/

scwin.onpageload = function () {
  scwin.alignAllMenuTreeOptions();
  scwin.getAllMenu();
  ds_fav.set("method", "list");
  $c.sbm.execute($p, sbm_getInitPage);
};
scwin.alignAllMenuTreeOptions = function () {
  try {
    tv_allMenu.options.hierarchy = true;
    tv_allMenu.options.showTreeDepth = "0";
    tv_allMenu.options.toggleEvent = "onclick";
  } catch (e) {}
};
scwin.filterSubCompanyNcallMenu = function (menuList) {
  const coClsCd = scwin.getMemValue("coClsCd");
  if (coClsCd == "0" || coClsCd == "") {
    return menuList || [];
  }
  return (menuList || []).filter(function (menu) {
    const menuId = (menu && menu.menuId || "").toLowerCase();
    const menuNm = menu && menu.menuNm || "";
    return menuId.indexOf("n") === -1 && menuNm.indexOf("엔콜") === -1;
  });
};
scwin.allMenuSearchSnapshot = [];
scwin.allMenuSearchInProgress = false;
scwin.cloneAllMenuList = function (menuList) {
  try {
    return JSON.parse(JSON.stringify(menuList || []));
  } catch (e) {
    return (menuList || []).slice();
  }
};
scwin.setAllMenuSearchSource = function (menuList) {
  scwin.allMenuSearchSnapshot = scwin.cloneAllMenuList(menuList);
};
scwin.normalizeAllMenuSearchText = function (value) {
  return String(value || "").replace(/\s+/g, "").toLowerCase();
};
scwin.getAllMenuSearchSource = function () {
  if ((scwin.allMenuSearchSnapshot || []).length > 0) {
    return scwin.allMenuSearchSnapshot;
  }
  return ds_menuList.getAllJSON() || [];
};
scwin.searchAllMenuLocal = function (keyword) {
  const sourceMenuList = scwin.getAllMenuSearchSource();
  const normalizedKeyword = scwin.normalizeAllMenuSearchText(keyword);
  if (!normalizedKeyword || sourceMenuList.length === 0) {
    return [];
  }
  const menuMap = {};
  const includedMenuMap = {};
  for (const row of sourceMenuList) {
    menuMap[row.menuId] = row;
  }
  const includeAncestors = function (menuId) {
    let currentMenuId = menuId;
    while (currentMenuId && menuMap[currentMenuId]) {
      if (includedMenuMap[currentMenuId]) {
        break;
      }
      includedMenuMap[currentMenuId] = true;
      currentMenuId = menuMap[currentMenuId].upperMenuId || "";
    }
  };
  for (let index = 0; index < sourceMenuList.length; index++) {
    const row = sourceMenuList[index];
    const actPgmId = String(row.actPgmId || "").trim();
    if (!actPgmId) {
      continue;
    }
    const searchTarget = scwin.normalizeAllMenuSearchText([row.menuNm, row.actPgmId, row.actPgmScrPath].join(" "));
    if (searchTarget.indexOf(normalizedKeyword) > -1) {
      includedMenuMap[row.menuId] = true;
      includeAncestors(row.menuId);
    }
  }
  return sourceMenuList.filter(function (row) {
    return !!includedMenuMap[row.menuId];
  });
};
scwin.applyAllMenuSearchResult = function (menuList) {
  ds_menuList.setJSON(menuList || []);
  try {
    scwin.alignAllMenuTreeOptions();
    tv_allMenu.spanAll(true);
  } catch (e) {}
};
scwin.normalizeRetrievedAllMenuList = function (menuArray) {
  menuArray = scwin.cloneAllMenuList(menuArray);
  for (const row of menuArray) {
    switch (row.actPgmId) {
      case "op_304_01_01b.jsp":
        row.actPgmScrPath = "/ds/op/wrkrslts/transwrkrslts/";
        break;
      case "op_304_01_02b.jsp":
        row.actPgmScrPath = "/ds/op/wrkrslts/transwrkrslts/";
        break;
      case "as_102_01_02b.jsp":
        row.actPgmScrPath = "/ds/as/cstmrsrvc/coafmgnt/";
        break;
      case "as_102_01_03b.jsp":
        row.actPgmScrPath = "/ds/as/cstmrsrvc/coafmgnt/";
        break;
      case "op_301_01_05b.jsp":
        if (row.menuId.indexOf("n") !== -1) {
          row.actPgmId = "op_301_01_19b.jsp";
        }
        break;
      case "op_301_01_06b.jsp":
        if (row.menuId.indexOf("n") !== -1) {
          row.actPgmId = "op_301_01_09b.jsp";
        }
        break;
      case "op_304_01_06b.jsp":
        row.actPgmScrPath = "/ds/op/wrkrslts/transwrkrslts/";
        break;
      case "fs_103_03_01b.jsp":
        if (row.menuId.indexOf("n") !== -1) {
          row.actPgmId = "fs_103_03_02b.jsp";
        }
        break;
      case "op_204_04_01b.jsp":
        if (row.menuId.indexOf("n") !== -1) {
          row.actPgmScrPath = "/tn/op/transwrkindict/cntr/";
          row.actPgmId = "tn_304_03_09b.jsp";
        }
        break;
      case "op_301_01_17b.jsp":
        if (row.menuId.indexOf("n") !== -1) {
          row.actPgmId = "op_301_01_20b.jsp";
        }
        break;
      case "op_304_01_65b.jsp":
        if (row.menuId.indexOf("n") !== -1) {
          row.actPgmScrPath = "/tn/op/transwrkindict/cntr/";
          row.actPgmId = "tn_304_01_12b.jsp";
        }
        break;
      case "op_202_02_07b.jsp":
        if (row.menuId.indexOf("n") !== -1) {
          row.actPgmId = "op_202_02_08b.jsp";
        }
        break;
      case "sd_402_01_35t.jsp":
        if (row.menuId.indexOf("n") !== -1) {
          row.actPgmId = "sd_402_01_35b.jsp";
        }
        break;
    }
  }
  return scwin.filterSubCompanyNcallMenu(menuArray);
};
scwin.resolveSearchCoCd = function () {
  const coCd = scwin.getMemValue("coCd");
  if (coCd === "000") {
    return "tobe";
  }
  if (coCd === "") {
    return coCd;
  }
  if (coCd === "017") {
    return "tobe017";
  }
  return "tobeCompany";
};
scwin.restoreAllMenuSearchResult = function () {
  ds_menuList.setJSON(scwin.getAllMenuSearchSource());
};
scwin.searchAllMenu = async function (value) {
  const searchKeyword = String(value || "").trim();
  if (!searchKeyword) {
    scwin.restoreAllMenuSearchResult();
    return;
  }
  dma_search.set("coCd", scwin.resolveSearchCoCd());
  dma_search.set("sysCd", "");
  dma_search.set("userId", scwin.getMemValue("userId"));
  dma_search.set("menuNm", searchKeyword);
  scwin.allMenuSearchInProgress = true;
  $c.sbm.execute($p, sbm_menuList);
};
scwin.ibx_allMenuSearch_oneditkeyup = function (info) {
  if (info.keyCode == 13) {
    scwin.searchAllMenu(info.newValue);
  }
};
scwin.btn_allMenuSearch_onclick = function () {
  scwin.searchAllMenu(ibx_allMenuSearch.getValue());
};
scwin.getMemValue = function (key) {
  var value = "";
  try {
    if ($c.data && typeof $c.data.getMemInfo === "function") {
      value = $c.data.getMemInfo($p, key) || "";
    }
  } catch (e) {}
  try {
    if (!value && $p.top().dma_memInfo) {
      value = $p.top().dma_memInfo.get(key) || "";
    }
  } catch (e) {}
  try {
    if (!value && WebSquare.localStorage) {
      value = WebSquare.localStorage.getItem(key) || "";
    }
  } catch (e) {}
  return value;
};
scwin.isInternalUser = function () {
  return scwin.getMemValue("userClsCd") == "01";
};
scwin.getSideWorkMenuList = function () {
  try {
    var sideWin = $p.top().wfm_side && $p.top().wfm_side.getWindow ? $p.top().wfm_side.getWindow() : null;
    if (!sideWin) {
      return [];
    }
    if (sideWin.ds_originTrvMenu && sideWin.ds_originTrvMenu.getRowCount() > 0) {
      return sideWin.ds_originTrvMenu.getAllJSON() || [];
    }
    if (sideWin.ds_trvMenu && sideWin.ds_trvMenu.getRowCount() > 0) {
      return sideWin.ds_trvMenu.getAllJSON() || [];
    }
  } catch (e) {}
  return [];
};
scwin.getInternalAllMenuList = function () {
  var allMenuList = [];
  try {
    allMenuList = $p.top().ds_allMenuList.getAllJSON() || [];
  } catch (e) {}
  scwin.coClsCd = scwin.getMemValue("coClsCd");
  scwin.privAdmin = scwin.getMemValue("privAdmin");
  if (scwin.coClsCd != "0" && scwin.coClsCd != "") {
    allMenuList = allMenuList.filter(function (menu) {
      return (menu.menuId || "").indexOf("n") === -1 && (menu.menuNm || "").indexOf("엔콜") === -1;
    });
  }
  return allMenuList;
};

// 전체 메뉴 가져오기
scwin.getAllMenu = function () {
  let maxCnt = 0;
  $p.setInterval(function () {
    let menuList = scwin.isInternalUser() ? scwin.getInternalAllMenuList() : scwin.getSideWorkMenuList();
    if (menuList.length > 0) {
      ds_menuList.setJSON(menuList);
      scwin.setAllMenuSearchSource(ds_menuList.getAllJSON());
      $p.clearInterval("getAllMenu");
      return;
    }
    maxCnt++;

    // 무한루프 방지를 위해 20번 이상 실행안되게 처리
    if (maxCnt > 20) {
      $c.win.alert($p, "메뉴데이터를 불러오지 못했습니다.<br>잠시후에 다시 호출해 주세요");
      $p.clearInterval("getAllMenu");
    }
  }, {
    "key": "getAllMenu",
    "delay": 300
  });
};
scwin.sbm_menuList_submitdone = async function (e) {
  const menuArray = scwin.normalizeRetrievedAllMenuList(e.responseJSON && e.responseJSON.GAUCE || []);
  if (scwin.allMenuSearchInProgress) {
    scwin.allMenuSearchInProgress = false;
    dma_search.set("menuNm", "");
    if (menuArray.length === 0) {
      const localMenuList = scwin.searchAllMenuLocal(ibx_allMenuSearch.getValue());
      if (localMenuList.length > 0) {
        scwin.applyAllMenuSearchResult(localMenuList);
        return;
      }
      await $c.win.alert($p, "조회된 데이터가 없습니다.");
      scwin.restoreAllMenuSearchResult();
      return;
    }
    scwin.applyAllMenuSearchResult(menuArray);
  }
};
scwin.ds_menuList2_ondataload = function () {
  // 초기화면 그리드 하단에 count 처리
  txb_tCount.setValue(ds_menuList2.getRowCount());
};

// 초기화면에서 제거 아이콘
scwin.btn_trigger2_onclick = function (e) {
  let rowIdx = grd_stMenu.getFocusedRowIndex(); // 그리드에 선택된 rowIdx
  ds_menuList2.removeRow(rowIdx); // 초기화면에서 제거

  // 그리드 하단 count 반영
  txb_tCount.setValue(ds_menuList2.getRowCount());
};

// 초기화면에 추가 아이콘
scwin.btn_trigger1_onclick = function (e) {
  let selectedMenuId = tv_allMenu.getSelectedValue(); // 현재 선택된 tree menuId
  let rowIdxList = ds_menuList.getMatchedIndex("menuId", selectedMenuId, true);
  let rowJson = rowIdxList.length > 0 ? ds_menuList.getRowJSON(rowIdxList[0]) : null;
  if (!rowJson) {
    $c.win.alert($p, "메뉴를 선택하세요.");
    return;
  }
  ds_menuList.setRowPosition(rowIdxList[0]);

  // 화면만 등록처리
  if (String(rowJson.actPgmId || "").trim() == "") {
    $c.win.alert($p, "화면만 등록이 가능합니다.");
    return;
  }
  if (ds_menuList2.getRowCount() > 4) {
    $c.win.alert($p, "초기화면은 5개까지 저장이 가능합니다.");
    return;
  }

  // 중복 체크
  let dupCnt = ds_menuList2.getMatchedIndex("menuId", rowJson.menuId).length;
  if (dupCnt > 0) {
    // 이미 등록되어 있으면 
    $c.win.alert($p, "이미 등록된 화면입니다.");
    return;
  } else {
    ds_menuList2.setJSON([rowJson], true); // 그리드에 붙혀넣기
  }
};

// 저장
scwin.btn_trigger3_onclick = function (e) {
  for (let i = 0; i < ds_menuList2.getRowCount(); i++) {
    ds_menuList2.setCellData(i, "sortSeq", i + 1);
  }
  ds_fav.set("method", "merge");
  ds_fav.set("data", ds_menuList2.getAllJSON());
  $c.sbm.execute($p, sbm_saveInitPage);
};

// 저장 콜백
scwin.sbm_saveInitPage_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다 
};

// 조회 콜백
scwin.sbm_getInitPage_submitdone = function (e) {
  if (e.responseJSON.length > 0) {
    ds_menuList2.setJSON(e.responseJSON);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox col3 wfix',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'초기화면설정',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'form-grp section flex-col'},E:[{T:1,N:'xf:input',A:{style:'',id:'ibx_allMenuSearch',class:'form-control','ev:oneditkeyup':'scwin.ibx_allMenuSearch_oneditkeyup'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_allMenuSearch',title:'Search',type:'button',class:'btn ico sch','ev:onclick':'scwin.btn_allMenuSearch_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tvw-wrap',id:'',style:''},E:[{T:1,N:'w2:treeview',A:{dataType:'listed',id:'tv_allMenu',renderType:'virtual',style:'',tooltipGroupClass:'false',class:'flex-full',hierarchy:'true',showTreeDepth:'0',toggleEvent:'onclick'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_menuList'},E:[{T:1,N:'w2:label',A:{ref:'menuNm'}},{T:1,N:'w2:value',A:{ref:'menuId'}},{T:1,N:'w2:depth',A:{ref:'lvl'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'shattle flex-row',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico btn-right',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.btn_trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'왼쪽이동'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ico btn-left',id:'btn_trigger2',style:'',type:'button','ev:onclick':'scwin.btn_trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오른쪽이동'}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwflex',id:'group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_menuList2',id:'grd_stMenu',style:'',visibleRowNum:'10',visibleRowNumFix:'true',dataDragDrop:'true',useFilterList:'false',sortable:'false',noSelect:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'메뉴명',width:'200',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'menuNm',inputType:'text',style:'',value:'',width:'200',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'txb_tCount',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger3',style:'',type:'button','ev:onclick':'scwin.btn_trigger3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]})