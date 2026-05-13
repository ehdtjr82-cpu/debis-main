/*amd /cm/xml/userFilter.xml 16213 3865044845bc81eb319e78d9e9c12e2512d0f4e6c53811aaf5520c6d6fb71083 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8',standalone:'no'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds__col_status',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'statusNm',name:'statusNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'statusDel',name:'statusDel',dataType:'text'}},{T:1,N:'w2:column',A:{id:'statusStore',name:'statusStore',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_select'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'label',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bodyColId',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_col'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'label',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'value',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.gridColListSetPopUpFrist = false;
scwin.onpageload = function () {};
scwin._gridSetPopUp = function ($p, grdObj, btnId) {
  //debugger;
  try {
    var grdObj = typeof grdObj == 'object' ? grdObj : typeof grdObj == 'string' ? $c.util.getObject($p, grdObj) : grdObj;
    let headerInfo = scwin.buildHeaderLabelsWithBody(grdObj);
    dlt_select.setJSON(headerInfo);
    var grdId = grdObj.id;
    var btnObj = $c.gus.object($p, btnId);
    // 체크박스용 dataList 생성.
    // var grdColDlId = grdId+"_colDataList";
    // if(scwin.gridColListSetPopUpFrist){ 
    // 	if(btnId != grp__pop_chk_grid.getUserData("btn_id")){
    // 	    grp__pop_chk_grid.hide();
    // 	    grp__pop_chk_grid.setUserData("btn_id",btnId);
    //     }
    // }
    scwin.gridColListSetPopUpFrist = true;
    if (grdObj) {
      if (grp__pop_chk_grid.getStyle("display") == "none") {
        grp__pop_chk_grid.setUserData("grd_id", grdId);
        grp__pop_chk_grid.setUserData("btn_id", btnId);
        //grp__pop_chk_grid.setUserData( "dl_id" , grdColDlId );

        // if(JSON.stringify(grdObj.options.xmlEvents).indexOf("scwin._gridColListSetOnaftercolumnmove") == -1){
        // 	grdObj.bind("onaftercolumnmove","scwin._gridColListSetOnaftercolumnmove");	
        // }												
        var dltObj = dlt_select;
        // if(typeof dltObj == "undefined"){
        // 	var info = ["label", "value"];
        // 	dltObj = $c.data.createDataList(grdColDlId, info);
        // }			
        // chk__grid_col.setNodeSet("data:"+grdColDlId, "label","value");		
        var obj = $('#' + btnId).offset();
        if (btnObj.hasClass('btn_grid_set_item_sel')) {
          // $('.grp_chk_grid_col_ty1').show();
          var top = obj.top - $('#grp__pop_chk_grid').height() - 61;
          // 체크박스용 dataList에 넣을 그리드 컬럼명 목록 json 생성.
          var grdColumnOrderArr = grdObj.getColumnOrder(true);
          var grdColumnHiddenArr = grdObj.hiddenList;
          var tmp_arr = [];
          var chk_id = [];
          var str_tmp = "";
          var grdDefaultColCnt = grdObj.defaultColCnt;
          // var isGrdHeadMultRow = grdObj.htmlInfo.head.rowArr.length>1 ? true: false ;

          for (var i = 0; i < dlt_select.getRowCount(); i++) {
            // var id = grdColumnOrderArr[i];
            var columnId = "";
            var columnLavel = "";
            // var grdObjGetHeaderID = "";

            id = dlt_select.getCellData(i, "bodyColId");
            columnLavel = dlt_select.getCellData(i, "label");
            if (i == 0 && grdObj.getHeaderInfo(grdObj.getHeaderID(i)).options.inputType == "checkbox") {
              columnLavel = "선택";
            }
            if (grdObj.getCellInfo(id).options.inputType == "checkbox" && columnLavel == "") {
              columnLavel = "선택";
            }
            if (typeof grdObj.getCellInfo(id).options.hiddenCol !== "undefined" && grdObj.getCellInfo(id).options.hiddenCol == "true") {} else {
              var jtmp = {
                "label": columnLavel,
                "value": id
              };
              tmp_arr.push(jtmp);
            }
            if (!grdColumnHiddenArr[i + grdDefaultColCnt]) {
              str_tmp = str_tmp + " " + grdColumnOrderArr[i];
            }
          }
          dlt_col.setJSON(tmp_arr);
          chk__grid_col.setValue(str_tmp.replace(/^\s+/, ""));

          //chk__grid_col_all.checkAll((grdObj.hiddenList+"").indexOf("true") == -1 ? true : false);	
        } else if (btnObj.hasClass('btn_grid_set_setting')) {
          var top = obj.top - $('#grp__pop_chk_grid').height() - 61;
          ds_col_status.removeAll();
        } else {
          $c.win.alert($p, "클릭한 버튼 class를 확인하십시요");
          return;
        }
        let lyClass = "",
          lyYn = "N";
        try {
          lyClass = scwin._getLyBox(grdObj.getParent());
          if (lyClass) {
            if (lyClass.indexOf("lybox") > -1) {
              // 화면 분할
              lyYn = "Y";
            }
          }
        } catch (e) {}
        // var left = parseInt(obj.left) -204;
        // var top = parseInt(obj.top) +25;
        grp__pop_chk_grid.show("");
        var w = grdObj.getScopeWindow().$p.getFrame().getSize("width");
        let tabLy = scwin._getTabBox(grdObj.getParent());
        if (!tabLy) {
          if (lyYn == "Y") {
            // if(grdObj.getScopeWindow().$p.getFrame().getPluginName() !== "wframe" || lyYn == "Y") {
            if (typeof w !== "undefined" && parseInt(obj.left) > w) {
              grp__pop_chk_grid.setStyle('left', w - 280 + "px");
            } else {
              if ($p.top().$p.isPopup()) {
                grp__pop_chk_grid.setStyle('left', parseInt(obj.left) - 200 + "px");
              } else {
                if (!$(".container").hasClass("on")) {
                  // 좌측 메뉴가 있으면
                  grp__pop_chk_grid.setStyle('left', parseInt(obj.left) - 460 + "px");
                } else {
                  grp__pop_chk_grid.setStyle('left', parseInt(obj.left) - 220 + "px");
                }
              }
            }
          } else {
            if (typeof w === "undefined") {
              grp__pop_chk_grid.setStyle('left', window.innerWidth - 280 + "px");
            } else {
              grp__pop_chk_grid.setStyle('left', w - 280 + "px");
            }
          }
        } else {
          let tabInLy = scwin._getTabInLyBox(grdObj.getParent());
          if (tabInLy) {
            if (typeof w !== "undefined" && parseInt(obj.left) > w) {
              grp__pop_chk_grid.setStyle('left', w - 280 + "px");
            } else {
              if ($p.top().$p.isPopup()) {
                grp__pop_chk_grid.setStyle('left', parseInt(obj.left) - 200 + "px");
              } else {
                if (!$(".container").hasClass("on")) {
                  // 좌측 메뉴가 있으면
                  grp__pop_chk_grid.setStyle('left', parseInt(obj.left) - 460 + "px");
                } else {
                  grp__pop_chk_grid.setStyle('left', parseInt(obj.left) - 220 + "px");
                }
              }
            }
          }
        }
      }
    }
  } catch (e) {
    console.log("[scwin.._gridSetPopUp] Exception :: " + e);
  }
};
scwin.maxCnt = 0;
scwin._getLyBox = function (obj) {
  if (scwin.maxCnt > 5) {
    return "";
  }
  try {
    let p = obj.getParent();
    if (p.options.className.indexOf("round-box") > -1) {
      return "";
    } else if (p.options.className.indexOf("lybox") == -1) {
      return scwin._getLyBox(p);
    } else {
      return "lybox";
    }
    scwin.maxCnt++;
  } catch (e) {
    console.log(e);
  }
};
scwin._getTabInLyBox = function (obj, tp) {
  let p = obj.getParent();
  try {
    if (p.org_id == "tac_layout") {
      return false;
    }
    if (p == null) {
      return false;
    }
    if (p.options.className.indexOf("lybox") > -1) {
      return true;
    } else if (p.options.className.indexOf("w2tb") > -1) {
      return false;
    } else {
      if (p.getPluginName() == "tabControl" && p.org_id !== "tac_layout") {
        return false;
      } else if (p.org_id == "tac_layout") {
        return false;
      } else {
        return scwin._getTabInLyBox(p);
      }
    }
  } catch (e) {}
};
scwin._getTabBox = function (obj) {
  let p = obj.getParent();
  try {
    if (p.org_id == "tac_layout") {
      return false;
    }
    if (p == null) {
      return false;
    }
    if (p.getPluginName() == "tabControl" && p.org_id !== "tac_layout") {
      return true;
    } else if (p.org_id == "tac_layout") {
      return false;
    } else {
      return scwin._getTabBox(p);
    }
  } catch (e) {}
};
scwin.btn__grdColClose_onclick = function () {
  var dlId = grp__pop_chk_grid.getUserData("dl_id");
  grp__pop_chk_grid.setUserData("dl_id", "");
  grp__pop_chk_grid.setUserData("btn_id", "");
  grp__pop_chk_grid.setUserData("grd_id", "");
  var dlObj = $c.gus.object($p, dlId);
  dlObj.removeAll();
  grp__pop_chk_grid.hide();
};

//------------------------------------------------------------------------------
//   그리드 컬럼 onviewchange
//------------------------------------------------------------------------------ 
scwin._chk__grid_col_onviewchange = function (info) {
  //debugger;
  var grdId = grp__pop_chk_grid.getUserData("grd_id");
  var grdObj = $c.gus.object($p, grdId);
  var grdColumnHiddenArr = grdObj.hiddenList;
  let fixedIdx = grdObj.getFixedColumnLastIndex();
  let defaultCnt = grdObj.defaultColCnt;
  grdObj.setFixedColumn(0);
  grdObj.setColumnVisible(info.value, info.checked);
  //chk__grid_col_all.checkAll((grdObj.hiddenList+"").indexOf("true") == -1 ? true : false);		
  grdObj.setFixedColumn(fixedIdx - defaultCnt);
};
scwin.chk__grid_col_all_oncheckboxclick = function (index, checked, value) {
  var grdId = grp__pop_chk_grid.getUserData("grd_id");
  var grdObj = $c.gus.object($p, grdId);
  var dlId = grp__pop_chk_grid.getUserData("dl_id");
  var dltObj = $c.gus.object($p, dlId);
  let fixedIdx = grdObj.getFixedColumnLastIndex();
  let defaultCnt = grdObj.defaultColCnt;
  grdObj.setFixedColumn(0);
  for (var i = 0; i < dltObj.getRowCount(); i++) {
    grdObj.setColumnVisible(dltObj.getCellData(i, 'value'), checked);
  }
  grdObj.setFixedColumn(fixedIdx - defaultCnt);
};
scwin.chk__grid_col_all_onlabelclick = function (index, checked, value) {
  //debugger;

  var grdId = grp__pop_chk_grid.getUserData("grd_id");
  var grdObj = $c.gus.object($p, grdId);
  var dlId = grp__pop_chk_grid.getUserData("dl_id");
  var dltObj = $c.gus.object($p, dlId);
  let fixedIdx = grdObj.getFixedColumnLastIndex();
  let defaultCnt = grdObj.defaultColCnt;
  grdObj.setFixedColumn(0);
  for (var i = 0; i < dltObj.getRowCount(); i++) {
    grdObj.setColumnVisible(dltObj.getCellData(i, 'value'), checked);
  }
  grdObj.setFixedColumn(fixedIdx - defaultCnt);
};

// 초기화
scwin.btn_trigger1_onclick = function (e) {
  try {
    let grdObj = $c.gus.object($p, grp__pop_chk_grid.getUserData("grd_id"));
    grdObj.setColumnOrder([]);
    let fixedIdx = grdObj.getFixedColumnLastIndex();
    let defaultCnt = grdObj.defaultColCnt;
    grdObj.setFixedColumn(0);
    let TotCnt = grdObj.getTotalCol();
    for (var i = 0; i < TotCnt; i++) {
      if (grdObj.getCellInfo(i).options.hidden !== "true") {
        grdObj.setColumnVisible(i, true);
      } else {
        grdObj.setColumnVisible(i, false);
      }
    }
    grdObj.setFixedColumn(fixedIdx - defaultCnt);
    $c.win.gridSetting($p, grdObj, "init");
    $('.pop_ty1').hide("fast");
  } catch (e) {
    console.log("초기화=>>" + e);
  }
};

// 저장
scwin.btn_trigger2_onclick = function (e) {
  // debugger;
  try {
    let grdId = grp__pop_chk_grid.getUserData("grd_id");
    let grdObj = $c.gus.object($p, grdId);
    $c.win.gridSetting($p, grdObj);
  } catch (e) {
    console.log("=========== save Catch =======");
  }
};
// 닫기
scwin.btn_trigger3_onclick = function (e) {
  $('.pop_ty1').hide("fast");
};
scwin.buildHeaderLabelsWithBody = function (grdObj, joiner = "_") {
  let headerRows = grdObj.htmlInfo.head.rowArr;
  let headerToBodyRelation = grdObj.headerToBodyRelation;
  if (!Array.isArray(headerRows) || headerRows.length === 0) return [];
  const R = headerRows.length;

  // 1) 헤더를 colSpan/rowSpan 반영해서 matrix로 펼치기
  // matrix[r][c] = 그 위치를 "점유"하는 셀 참조
  const matrix = Array.from({
    length: R
  }, () => []);

  // 해당 행에서 "다음 빈 col" 찾기
  function nextFreeCol(r, startCol) {
    let c = startCol;
    while (matrix[r][c]) c++;
    return c;
  }
  let maxCols = 0;
  for (let r = 0; r < R; r++) {
    const row = headerRows[r] || [];
    let c = 0;
    for (const cell of row) {
      const colSpan = Number(cell.colSpan || 1);
      const rowSpan = Number(cell.rowSpan || 1);
      c = nextFreeCol(r, c);

      // rowSpan * colSpan 영역 채우기
      for (let rr = r; rr < Math.min(R, r + rowSpan); rr++) {
        for (let cc = c; cc < c + colSpan; cc++) {
          matrix[rr][cc] = cell;
        }
      }
      c += colSpan;
      if (c > maxCols) maxCols = c;
    }
  }

  // 2) 각 컬럼별로 "마지막 행에서 점유 중인 셀"이 leaf 후보
  // colId(leafHeaderId) = leafCell.id or leafCell.colId
  // label = 위에서 아래까지 같은 컬럼을 점유하는 셀들의 value를 순서대로 join
  const lastRow = R - 1;
  const out = [];
  const seenColId = new Set(); // colId 중복 방지(스팬 등)

  for (let col = 0; col < maxCols; col++) {
    const leafCell = matrix[lastRow][col];
    if (!leafCell) continue;
    const colId = leafCell.colId || leafCell.id || "";
    if (!colId) continue;
    if (seenColId.has(colId)) continue; // 같은 leaf가 여러 칸 점유하는 경우 1번만
    seenColId.add(colId);

    // 라벨 조합(중복/연속 중복 제거)
    const parts = [];
    let prevCell = null;
    for (let r = 0; r < R; r++) {
      const cell = matrix[r][col];
      if (!cell) continue;

      // 같은 셀이 rowSpan으로 여러 행을 점유하면 중복 제거
      if (cell === prevCell) continue;
      prevCell = cell;
      let v = cell.value ?? "";
      if (!v) continue;
      v = v.replace(/\<br\/\>|\<\/br\>|\<br\>/g, " ");

      // 같은 라벨 문자열이 연속으로 들어가면 제거(선택)
      if (parts.length && parts[parts.length - 1] === v) continue;
      parts.push(v);
    }
    out.push({
      label: parts.join(joiner),
      colId,
      bodyColId: headerToBodyRelation && headerToBodyRelation[colId] ? headerToBodyRelation[colId] : ""
    });
  }
  return out;
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'grp__pop_chk_grid',style:'display: none;z-index:500;position: absolute;',class:'user-filter pop_ty1'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'user-cont'},E:[{T:1,N:'xf:select',A:{appearance:'full',cols:'1','ev:onviewchange':'scwin._chk__grid_col_onviewchange',id:'chk__grid_col',renderType:'checkboxgroup',rows:'1',selectedindex:'-1',style:'',class:'flex-row  ch-fiter',itemTagname:'span'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_col'},E:[{T:1,N:'xf:label',A:{ref:'label'}},{T:1,N:'xf:value',A:{ref:'value'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'user-bottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger1',style:'',title:'초기화',type:'button','ev:onclick':'scwin.btn_trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger2',style:'',title:'저장',type:'button','ev:onclick':'scwin.btn_trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})