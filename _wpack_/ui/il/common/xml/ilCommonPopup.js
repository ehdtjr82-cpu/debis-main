/*amd /ui/il/common/xml/ilCommonPopup.xml 21816 b77006bae2a1ef0ccb244cb17cd31e84fa29de3561cd39e7082dff87cc0a0dc4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8',standalone:'no'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',A:{ttc:''},E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_comcode'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userId',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param9',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param10',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param11',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param12',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param13',name:'name16',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param14',name:'name17',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kngParam1',name:'name18',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kndParam2',name:'name19',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'GAUCE',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_comcodeList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mymenuList'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rownum',name:'rownum',dataType:'text'}},{T:1,N:'w2:column',A:{id:'imgD',name:'imgD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customerGrpNm',name:'customerGrpNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'imgC',name:'imgC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lvl',name:'lvl',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customerNm',name:'customerNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'userId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'imgO',name:'imgO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'seq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customerCd',name:'customerCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customer',name:'customer',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_comcode',target:'data:json,{"id":"ds_comcodeList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_mymenuList',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_mymenuList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @component
 * @componentName udc_ilCommonPopup
 * @pluginName 
 * @company
 * @developer
 * @category /ui/il/common/xml
 * @notSupportBrowser 
 * @version
 * @htmlRender
 * @icon
 * @disableIcon
 * @description
 * @width
 * @height
 * @license 
 * @imagePath 
 * @homepage 
 */
scwin.arrOptCnd = [];
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.userId = $c.data.getMemInfo($p).userId;
  console.log("[ilCommonPopup onpageload] params: ", scwin.params.arrParm);
  scwin.initPop(scwin.params.arrParm);
};
scwin.initPop = function (obj) {
  let arrParent = obj;
  tbx_codeTitle.setValue(arrParent[0][1]); // 코드 Value
  tbx_nameTitle.setValue(arrParent[0][2]); // Name Value
  scwin.strQueryId = arrParent[0][3]; // XML SQL Query ID
  scwin.strOnCloseTF = arrParent[0][4]; // 결과 1건일? AutoClose 여부
  scwin.iDispCnt = arrParent[0][5]; // Grid 항목개수
  scwin.strExistTF = arrParent[0][6]; // 중복체크 여부
  scwin.strAllSearchTF = arrParent[0][7]; // 전체검색 허용 여부
  scwin.nLenCD = arrParent[0][8]; // 코드 입력 자리수 제한 길이
  scwin.nLenNM = arrParent[0][9]; // 명 입력 자리수 제한 길이
  scwin.bOptDisableTF = arrParent[0][10]; // 검색조건Disable 여부

  ed_code.setValue(arrParent[1]?.[0]?.trim()); // 넘머온 코드 Value SET
  ed_name.setValue(arrParent[1]?.[1]?.trim()); // 넘머온 Name Value SET

  //해더명세팅
  for (const key in arrParent[2]) {
    gr_popup.setHeaderValue("column" + key, arrParent[2][key]);
  }

  // 칼럼 hidden setting
  for (const element of arrParent[5]) {
    gr_popup.setColumnVisible("col" + element, false);
  }

  // 추가옵션 Where절
  if (arrParent[6] != null) {
    for (let i = 0; i < arrParent[6].length; i++) {
      scwin.arrOptCnd.push(arrParent[6][i]);
    }
  }

  // selectID retrieveEngClntInfo인 경우 즐겨찾기 버튼 보이게
  if (scwin.strQueryId == "retrieveEngClntInfo") {
    grp_fav.show('');
  }
  if (scwin.strQueryId == "retrieveAcctDeptCdInfo") {
    btn_search.setValue("조회");
    btn_close.setValue("닫기");
  }
  if (scwin.strQueryId == "retrieveCreditLimitTargetCrnInfo") {
    gr_popup.setColumn;
    gr_popup.setColumnDisplayFormatter(3, scwin.fn_ratioFormatter);
    gr_popup.setColumnDisplayFormatter(4, scwin.fn_ratioFormatter);
    gr_popup.setColumnDisplayFormatter(5, scwin.fn_ratioFormatter);
  }

  // 검색문자열 길이 체크
  if (!scwin.f_ByteLengthChk(ed_code.getValue(), ed_name.getValue())) {
    // selectID retrieveEngClntInfo이고 검색조건이 입력 안 된 경우 treeview로 조회
    if (scwin.strQueryId == "retrieveEngClntInfo") {
      grd_section1.setStyle("visibility", "hidden");
      grd_section1.setStyle("height", "0%");
      grp_tree.show('');
      scwin.f_RetrieveMyCustomer();
    }
    ed_name.focus();
    return;
  }
  ed_name.focus();

  // 파라메터1 : DataSet
  // 파라메터2 : 0:타른화면에서 불려졌을경우, 1:Self화면에서 요청 
  if (scwin.strAllSearchTF == "T") scwin.f_Retrieve(arrParent[7], "1");else scwin.f_Retrieve(arrParent[7], "0");
  if (scwin.bOptDisableTF == "T") $c.gus.cfDisableObjects($p, [tbl_search]);
};
scwin.fn_ratioFormatter = function (val) {
  if (val === null || val === undefined || val === "") return "0.00";
  var n = Number(val);
  if (isNaN(n)) return "0.00";
  return n.toFixed(2);
};

//-------------------------------------------------------------------------
// 문자열 자리수 체크
//-------------------------------------------------------------------------
scwin.f_ByteLengthChk = function (str1, str2) {
  if (scwin.strAllSearchTF == "T") return true;
  let len1 = $c.str.getByteLength($p, str1);
  let len2 = $c.str.getByteLength($p, str2);
  if (parseInt(scwin.nLenCD) && len1 > 0) {
    if (len1 < scwin.nLenCD) {
      $c.win.alert($p, "검색어를 " + scwin.nLenCD + "자리 이상 입력 하세요");
      ed_code.focus();
      return false;
    }
  }
  if (parseInt(scwin.nLenNM) && len2 > 0) {
    if (len2 < scwin.nLenNM) {
      $c.win.alert($p, "검색어를 " + scwin.nLenNM + "자리 이상 입력 하세요");
      ed_name.focus();
      return false;
    }
  }
  if (len1 == 0 && len2 == 0) {
    ed_name.focus();
    return false;
  } else if (len1 < 1 && len2 < 1) {
    if (scwin.strQueryId != "retrieveAirPortCode" || scwin.strQueryId != "retrieveOrdVsslInfo") {
      $c.win.alert($p, "검색어는\n\n숫자(문자)=> 1자\n한글=> 1자\n\n이상을 입력하세요...");
      ed_name.focus();
      return false;
    }
  }
  return true;
};

//초기화
scwin.btn_clear_onclick = function (e) {
  scwin.f_InitObjects();
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  if (scwin.bOptDisableTF == "T") return;
  $c.gus.cfInitObjects($p, tbl_search, null);
  ed_name.focus();
};
scwin.ed_onkeydown = function (e) {
  // 엔터키
  if (e.keyCode == 13) {
    btn_search.click();
  }
};

//조회
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve('', '1');
};
scwin.f_Retrieve = async function (arg_ds, init_gb) {
  if (scwin.strAllSearchTF != "T") {
    if (ed_code.getValue() == "" && ed_name.getValue() == "") {
      $c.win.alert($p, "전체검색이 허용되지 않았습니다.<br/><br/>검색어를 입력하세요..");
      ed_name.focus();
      return;
    }
  }
  if (!scwin.f_ByteLengthChk(ed_code.getValue(), ed_name.getValue())) {
    ed_name.focus();
    return;
  }
  if (init_gb == "0") {
    ds_comcodeList.setJSON(arg_ds);
    totalRows.setValue(ds_comcodeList.getRowCount());
    if (ds_comcodeList.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
      ed_code.setValue("");
      ed_name.setValue("");
      ed_name.focus();
      return;
    } else {
      ds_comcodeList.setRowPosition(0);
    }
  } else {
    if (scwin.strQueryId == "retrieveEngClntInfo") {
      scwin.arrOptCnd[0] = scwin.userId;
    }
    ds_comcode.set("sysCd", "ilCommonEBC");
    ds_comcode.set("queryId", scwin.strQueryId);
    ds_comcode.set("userId", $c.data.getMemInfo($p, "userId"));
    ds_comcode.set("param1", ed_code.getValue());
    ds_comcode.set("param2", ed_name.getValue());
    ds_comcode.set("param3", scwin.arrOptCnd[0]);
    ds_comcode.set("param4", scwin.arrOptCnd[1]);
    ds_comcode.set("param5", scwin.arrOptCnd[2]);
    ds_comcode.set("param6", scwin.arrOptCnd[3]);
    ds_comcode.set("param7", scwin.arrOptCnd[4]);
    ds_comcode.set("param8", scwin.arrOptCnd[5]);
    ds_comcode.set("param9", scwin.arrOptCnd[6]);
    ds_comcode.set("param10", scwin.arrOptCnd[7]);
    ds_comcode.set("param11", scwin.arrOptCnd[8]);
    ds_comcode.set("param12", scwin.arrOptCnd[9]);
    ds_comcode.set("param13", scwin.arrOptCnd[10]);
    ds_comcode.set("param14", scwin.arrOptCnd[11]);
    $c.sbm.execute($p, sbm_search);
  }
};

//-------------------------------------------------------------------------
// Grid에서 선택된 Row의 Value
//-------------------------------------------------------------------------
scwin.f_rtnValue = function (rowPoi) {
  let rt = [];
  let row = rowPoi;
  for (let b in ds_comcodeList.cellIdList) {
    rt.push(ds_comcodeList.getCellData(row, parseInt(b)));
  }
  $c.win.closePopup($p, rt);
};
scwin.sbm_search_submitdone = async function (e) {
  // 그리드 조회 시 treeView 관련은 hidden처리하자
  grp_tree.hide();
  grd_section1.show('');
  grd_section1.setStyle("height", "100%");
  totalRows.setValue(ds_comcodeList.getRowCount());
  if (scwin.strExistTF == "T") {
    $c.win.closePopup($p, ds_comcodeList.getRowCount());
    return;
  } else {
    if (ds_comcodeList.getRowCount() == 1 && scwin.strOnCloseTF == "T") {
      scwin.f_rtnValue(0);
    }
    if (ds_comcodeList.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
      ed_code.setValue("");
      ed_name.setValue("");
      ed_name.focus();
      return;
    } else {
      gr_popup.focus();
    }
  }
  ds_comcodeList.setRowPosition(0);
};
scwin.gr_popup_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_rtnValue(rowIndex);
};
scwin.gr_popup_onkeydown = function (e) {
  if (e.keyCode == 13 && ds_comcodeList.getRowCount() > 0) {
    scwin.f_rtnValue(ds_comcodeList.getRowPosition());
  }
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p, ["N/A"]);
};
scwin.f_RetrieveMyCustomer = function () {
  sbm_mymenuList.action = "/cm.bc.clnt.clntmgnt.RetrieveMyCustomerListTreeCMD.do?userId=" + scwin.userId;
  $c.sbm.execute($p, sbm_mymenuList);
};

//-------------------------------------------------------------------------
// function name : scwin.f_Open
// function desc : 거래처 즐겨찾기 등록 팝업 Open
//-------------------------------------------------------------------------  
scwin.f_Open = async function () {
  let opts = {
    id: "pop_mymenu",
    popupName: "거래처 즐겨찾기 등록",
    width: "1200px",
    height: "668px"
  };
  let data = {};
  let ret = await $c.win.openPopup($p, "/ui/il/comm/code/co_110_01_01b.xml", opts, data);
  scwin.f_RetrieveMyCustomer();
};

//-------------------------------------------------------------------------
// function name : scwin.tv_popup_ondblclick
// function desc : treeView ondblclick
//-------------------------------------------------------------------------  
scwin.tv_popup_ondblclick = function (cdVal, rowNum) {
  console.log("[ilCommonPopup scwin.tv_popup_ondblclick]: ", cdVal);
  console.log("[ilCommonPopup scwin.tv_popup_ondblclick]: ", rowNum);
  if (cdVal != "000000") {
    let rt = [];
    let row = rowNum - 1;
    rt.push(ds_mymenuList.getCellData(row, "customerCd"));
    rt.push(ds_mymenuList.getCellData(row, "customerNm"));
    $c.win.closePopup($p, rt);
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'pop_contents'},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'tbl_search'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'tbx_codeTitle',label:'edit',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_code',placeholder:'',class:'','ev:onkeydown':'scwin.ed_onkeydown'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'tbx_nameTitle',label:'name',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_name',placeholder:'',class:'','ev:onkeydown':'scwin.ed_onkeydown'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_clear',type:'button',class:'btn ico refresh','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_search',type:'button',class:'btn_cm sch',escape:'false','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'search'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'grp_fav',style:'visibility:hidden;'},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_fav',style:'',type:'button','ev:onclick':'scwin.f_Open'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'즐겨찾기'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',scrollByColumn:'false',readOnly:'true',checkReadOnlyOnPasteEnable:'',focusMode:'row',dataList:'data:ds_comcodeList',style:'width : 100%',autoFit:'allColumn',id:'gr_popup','ev:oncelldblclick':'scwin.gr_popup_oncelldblclick','ev:onkeydown':'scwin.gr_popup_onkeydown',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column0',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column1',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column4',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column6',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column7',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column8',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column9',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'',id:'col1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col2',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col3',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col4',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col5',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col6',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col7',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col8',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col9',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col10',value:'',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tvw-wrap',id:'grp_tree',style:'visibility: hidden;'},E:[{T:1,N:'w2:treeview',A:{dataType:'listed',id:'tv_popup',renderType:'virtual',style:'height: 100%;',tooltipGroupClass:'false','ev:ondblclick':'scwin.tv_popup_ondblclick'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_mymenuList'},E:[{T:1,N:'w2:label',A:{ref:'customer'}},{T:1,N:'w2:value',A:{ref:'customerCd'}},{T:1,N:'w2:depth',A:{ref:'lvl'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',label:'삭제',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'close'}]}]}]}]}]}]}]}]})