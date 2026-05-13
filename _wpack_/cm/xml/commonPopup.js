/*amd /cm/xml/commonPopup.xml 25957 a5fc62c6e75b367bf585c1c734d333a8c422bb90bc0294324f2b4f6b15a6f868 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8',standalone:'no'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_comcode'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userId',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param9',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param10',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param11',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param12',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param13',name:'name16',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param14',name:'name17',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kngParam1',name:'name18',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kndParam2',name:'name19',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'GAUCE',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_comcodeList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_comcode',target:'data:json,{"id":"ds_comcodeList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @component
 * @componentName udc_commonPopup
 * @pluginName
 * @company
 * @developer
 * @category /cm/xml
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
  console.log("[commonPopup onpageload] params: ", scwin.params.arrParm);
  scwin.initPop(scwin.params.arrParm);
  scwin.grFormat();
};
scwin.expandPopupInfoTail = function (rt) {
  if (!scwin.params || scwin.params.expandInfoTail != "Y" || !rt || rt.length < 10) {
    return rt;
  }
  if (scwin.params.selectID != "retrieveTransferAcctCdInfo" && scwin.params.selectID != "retrieveTransferAcctCdInfo2" && scwin.params.selectID != "retrieveMgntEmpNoList" && scwin.params.selectID != "retrieveClntEmpNoList") {
    return rt;
  }
  if ($c.util.isEmpty($p, rt[9])) {
    return rt;
  }
  return rt.concat(("" + rt[9]).split("^"));
};
scwin.initPop = async function (obj) {
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

  // 콤보박스 노출되는 경우
  if (!$c.util.isEmpty($p, arrParent[8])) {
    let codeOptions = [];
    if (!$c.util.isEmpty($p, arrParent[8][0]) && !$c.util.isEmpty($p, arrParent[8][1])) {
      tbl_kind.setStyle("display", "");
      tbx_kind1Title.setValue(arrParent[8][0]);
      codeOptions.push({
        grpCd: arrParent[8][1],
        compID: "lc_kind1"
      });
    }
    if (!$c.util.isEmpty($p, arrParent[8][3]) && !$c.util.isEmpty($p, arrParent[8][4])) {
      tbx_kind2Title.setStyle("display", "");
      lc_kind2.setStyle("display", "");
      tbx_kind2Title.setValue(arrParent[8][3]);
      codeOptions.push({
        grpCd: arrParent[8][4],
        compID: "lc_kind2"
      });
    }
    await $c.data.setCommonCode($p, codeOptions);
  }

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

  // 검색문자열 길이 체크
  if (!scwin.f_ByteLengthChk(ed_code.getValue(), ed_name.getValue())) {
    ed_name.focus();
    return;
  }
  ed_name.focus();

  // 파라메터1 : DataSet
  // 파라메터2 : 0:타른화면에서 불려졌을경우, 1:Self화면에서 요청 
  if ($c.util.isEmpty($p, arrParent[8])) {
    if (scwin.strAllSearchTF == "T") scwin.f_Retrieve(arrParent[7], "1");else scwin.f_Retrieve(arrParent[7], "0");
  }
  if (scwin.bOptDisableTF == "T") $c.gus.cfDisableObjects($p, [tbl_search]);
};
scwin.grFormat = function () {
  debugger;
  // select ID별 데이터 format.........
  if (scwin.strQueryId == "retrieveCreditLimitTargetCrnInfo") {
    gr_popup.setDataType("col4", "float", {
      displayFormat: "#,##0.#0"
    });
    gr_popup.setDataType("col5", "float", {
      displayFormat: "#,##0.#0"
    });
    gr_popup.setDataType("col6", "number", {
      displayFormat: "#,##0"
    });
  } else if (scwin.strQueryId == "retrieveBorrLedgNoInfo") {
    gr_popup.setDataType("col5", "float", {
      displayFormat: "#,##0.###0"
    });
    gr_popup.setDataType("col6", "number", {
      displayFormat: "#,##0"
    });
  } else if (scwin.strQueryId == "retrieveClntInfo") {
    // gr_popup.setColumnStyle("col2", "text-align", "left")
    // gr_popup.setColumnStyle("col3", "text-align", "left")
    // gr_popup.setColumnStyle("col4", "text-align", "left")
    // gr_popup.setColumnStyle("col5", "text-align", "left")
    // gr_popup.setColumnStyle("col6", "text-align", "left")
    // gr_popup.setColumnStyle("col7", "text-align", "left")
    // gr_popup.setColumnStyle("col8", "text-align", "left")
    // gr_popup.setColumnStyle("col9", "text-align", "left")
    // gr_popup.setColumnStyle("col10", "text-align", "left")
    gr_popup.setDataType("col2", "text", {
      textAlign: "left"
    });
    gr_popup.setDataType("col3", "text", {
      textAlign: "left"
    });
    gr_popup.setDataType("col4", "text", {
      textAlign: "left"
    });
    gr_popup.setDataType("col5", "text", {
      textAlign: "left"
    });
    gr_popup.setDataType("col6", "text", {
      textAlign: "left"
    });
    gr_popup.setDataType("col7", "text", {
      textAlign: "left"
    });
    gr_popup.setDataType("col8", "text", {
      textAlign: "left"
    });
    gr_popup.setDataType("col9", "text", {
      textAlign: "left"
    });
    gr_popup.setDataType("col10", "text", {
      textAlign: "left"
    });
    // gr_popup.setCellStyle(rowIndex, columnInfo, styleName, styleValue)
  } else if (scwin.strQueryId == "retrieveDimtSellCertiList") {
    ;
    gr_popup.setColumnStyle("col6", "text-align", "right");
    gr_popup.setColumnStyle("col7", "text-align", "right");
    gr_popup.setDataType("col6", "number", {
      displayFormat: "#,##0"
    });
    gr_popup.setDataType("col7", "number", {
      displayFormat: "#,##0"
    });
    gr_popup.setDataType("col9", "date");
  }
};

//-------------------------------------------------------------------------
// 데이타 로드 이후(공통코드 필터링용)
//-------------------------------------------------------------------------
scwin.ondataload = async function (e) {
  console.log("[commonPopup > scwin.ondataload]");
  if (!$c.util.isEmpty($p, scwin.params.arrParm[8]) && !$c.util.isEmpty($p, scwin.params.arrParm[8][2])) {
    lc_kind1.setValue(scwin.params.arrParm[8][2]);
  }
  if (!$c.util.isEmpty($p, scwin.params.arrParm[8]) && !$c.util.isEmpty($p, scwin.params.arrParm[8][5])) {
    lc_kind2.setValue(scwin.params.arrParm[8][5]);
  }

  // 파라메터1 : DataSet
  // 파라메터2 : 0:타른화면에서 불려졌을경우, 1:Self화면에서 요청
  if (!$c.util.isEmpty($p, scwin.params.arrParm[8])) {
    if (scwin.strAllSearchTF == "T") scwin.f_Retrieve(scwin.params.arrParm[7], "1");else scwin.f_Retrieve(scwin.params.arrParm[7], "0");
  }
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
  } else if (len1 < 1 && len2 < 2) {
    $c.win.alert($p, "검색어는<br/><br/>숫자(문자)=> 1자<br/>한글=> 1자<br/><br/>이상을 입력하세요...");
    ed_name.focus();
    return false;
  }
  return true;
};

// scwin.setColumnID = function(headTitle, columnId) {
//     let column = {};
//     let columnArr = [];
//     let gridHeader = "", gridBody = "";
//     let gridColumn = scwin.gridColumn ? scwin.gridColumn.split(",") : columnId;

//     //json의 첫번째 데이터에서 컬럼의 id와 개수 정보 확보
//     for(let k in headTitle) {
//         //dataList를 동적으로 만들기 위한 컬럼 정보
//         column = {};
//         column["id"] = k;
//         column["dataType"] = "text";
//         columnArr.push(column);

//         //gridView의 컬럼 정보 정의
//         gridHeader +='<w2:column blockSelect="false" displayMode="label" id="he'+ k +'" inputType="text" removeBorderStyle="false" value="'+ headTitle[k] +'" width="70"></w2:column>';
//         gridBody += '<w2:column blockSelect="false" displayMode="label" id="'+ gridColumn[k] +'" inputType="text" removeBorderStyle="false" width="70"></w2:column>';
//     }

//     //gridView 정보 정의 
//     let gridStr = '<w2:gridView xmlns:w2="http://www.inswave.com/websquare" xmlns:ev="http://www.w3.org/2001/xml-events" '
//     + 'class="wq_gvw" dataList="data:ds_comcodeList" autoFit="allColumn" checkReadOnlyOnPasteEnable="" focusMode="row" id="gr_popup" scrollByColumn="false" scrollByColumnAdaptive="false" style="" visibleRowNum="6" visibleRowNumFix="true" readOnly="true" ev:oncelldblclick="scwin.gr_popup_oncelldblclick">'
//     + '<w2:header id="header2" style="">'
//     + '<w2:row id="row3" style="">'
//     + gridHeader
//     + '</w2:row>'
//     +'</w2:header>'
//     +'<w2:gBody id="gBody2" style="">'
//     +'<w2:row id="row4" style="">'
//     + gridBody
//     +'</w2:row>'
//     +'</w2:gBody>'
//     +'</w2:gridView>';

//     gr_popup.setGridStyle(WebSquare.xml.parse( gridStr , true ));
// };

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
    if (scwin._suppressSearchOnce) {
      scwin._suppressSearchOnce = false;
      return;
    }
    btn_search.click();
  }
};

//조회
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve('', '1');
};
scwin.f_Retrieve = async function (arg_ds, init_gb) {
  let lux_value1 = "";
  let lux_value2 = "";
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
  if (init_gb == "0" && scwin.strOnCloseTF != "F") {
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
    //alert(ds_popup.ExportData(1,ds_popup.CountRow, true));
  } else {
    ds_comcode.set("sysCd", "CommonEBC");
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
  rt = scwin.expandPopupInfoTail(rt);
  $c.win.closePopup($p, rt);
};
scwin.sbm_search_submitdone = async function (e) {
  totalRows.setValue(ds_comcodeList.getRowCount());
  if (scwin.strQueryId == "retrieveClntInfo") {
    let commonList = ds_comcodeList.getAllJSON();
    commonList.forEach((e, i) => {
      gr_popup.setCellStyle(i, "col2", "text-align", "left");
      gr_popup.setCellStyle(i, "col3", "text-align", "left");
      gr_popup.setCellStyle(i, "col4", "text-align", "left");
      gr_popup.setCellStyle(i, "col5", "text-align", "left");
      gr_popup.setCellStyle(i, "col6", "text-align", "left");
      gr_popup.setCellStyle(i, "col7", "text-align", "left");
      gr_popup.setCellStyle(i, "col8", "text-align", "left");
      gr_popup.setCellStyle(i, "col9", "text-align", "left");
      gr_popup.setCellStyle(i, "col10", "text-align", "left");
    });
  }
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
scwin.btn_clear_onkeydown = async function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    scwin._suppressSearchOnce = true;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'pop_contents'},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'tbl_kind',style:'display: none;'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'width: 80px',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_kind1Title',label:'edit',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'전체',class:'',editType:'select',id:'lc_kind1',ref:'data:ds_comcode.kngParam1',search:'start',style:'width: 150px;',submenuSize:'auto'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th',style:'width: 75px'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_kind2Title',label:'edit',style:'display: none;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'전체',class:'',editType:'select',id:'lc_kind2',ref:'data:ds_comcode.kndParam2',search:'start',style:'width:150px; display: none;',submenuSize:'auto'},E:[{T:1,N:'w2:choices'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'tbl_search'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'tbx_codeTitle',label:'edit',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'ed_code',placeholder:'',class:'','ev:onkeydown':'scwin.ed_onkeydown'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'tbx_nameTitle',label:'name',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'ed_name',placeholder:'',class:'','ev:onkeydown':'scwin.ed_onkeydown'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_clear',type:'button',class:'btn ico refresh','ev:onclick':'scwin.btn_clear_onclick','ev:onkeydown':'scwin.btn_clear_onkeydown'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_search',type:'button',class:'btn_cm sch',escape:'false','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',scrollByColumn:'false',readOnly:'true',checkReadOnlyOnPasteEnable:'',focusMode:'row',dataList:'data:ds_comcodeList',style:'',id:'gr_popup','ev:oncelldblclick':'scwin.gr_popup_oncelldblclick','ev:onkeydown':'scwin.gr_popup_onkeydown',class:'wq_gvw',visibleRowNum:'15',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column0',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column1',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column4',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column6',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column7',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column8',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column9',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'',id:'col1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col4',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col5',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col6',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col7',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col8',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col9',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col10',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',label:'삭제',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'닫기'}]}]}]}]}]}]}]})