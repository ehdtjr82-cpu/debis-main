/*amd /ui/to/in/bulk/tmlbulk/in_201_02_12p.xml 32061 5d249fe1f7aa7261c99dd4baad81aca0e70cc0cc9aa21bf0b1af11a70a14d7e7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkShift',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPatternCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkIndictNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkIndictPrgsStsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blBkNo',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repKcgCd',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commNm',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tmlYardCd',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pdaWrkPicNo',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name15',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveWrkPlan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkShift',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indictQty',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indictWt',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indictCbm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsQty',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsWt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsCbm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictPrgsStsCd',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_condition',action:'/to.in.bulk.tmlbulk.RetrieveBulkWrkIndictLupContCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_retrieveWrkPlan","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_retrieveWrkPlan","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_condition_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수 
scwin.login = "";
scwin.empNo = "";
scwin.g_wrkIndictNo = "";
scwin.g_closeTF = "";
scwin.strFromDate = "";
scwin.onpageload = function () {
  scwin.login = $c.data.getMemInfo($p);
  scwin.empNo = scwin.login.userId;
  scwin.param = $c.data.getParameter($p);
  scwin.g_wrkIndictNo = scwin.param.wrkIndictNo || ""; // Null이면 아무값도 안나오게 셋
  scwin.g_closeTF = scwin.param.closeTF || "";
  scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재년월일을 구한다.

  const codeOptions = [{
    grpCd: "TB005",
    compID: "lc_wrkShift, gr_retrieveWrkPlan:wrkShift"
  }, {
    grpCd: "TB016",
    compID: "lc_pdaWrkPicNo"
  }, {
    grpCd: "TB013",
    compID: "lc_wrkIndictPrgsStsCd, gr_retrieveWrkPlan:wrkIndictPrgsStsCd"
  }, {
    grpCd: "TB002",
    compID: "lc_wrkPatternCd"
  }, {
    grpCd: "TB040",
    compID: "lc_wrkPlCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function () {
  lc_wrkShift.setValue("D");
  lc_pdaWrkPicNo.setValue("");
  lc_wrkPatternCd.setValue("");
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ica_wrkDt.setValue(scwin.strFromDate);
  ed_wrkIndictNo.setValue(scwin.g_wrkIndictNo);
  ed_clntNo.setValue("");
  txt_clntNm.setValue("");
  lc_repKcgCd.setValue("");
  ed_commCd.setValue("");
  txt_commNm.setValue("");
  ed_tmlYardCd.setValue("");
  txt_tmlYardNm.setValue("");
  ed_blBkNo.setValue("");
  ed_cvsslMgntNo.setValue("");

  // var paramArray = window.dialogArguments;

  // if (!cfIsNull(paramArray)) {
  //     for (key in (paramArray)) {
  //         ds_condition.NameValue(ds_condition.RowPosition, key) = paramArray[key];
  //     }
  // }

  if (!$c.gus.cfIsNull($p, scwin.param)) {
    for (key in scwin.param) {
      dma_condition.set(key, scwin.param[key]);
    }
  }
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function (e) {
  var check = await $c.gus.cfValidate($p, tb_searchCondition);
  if (!check) {
    return;
  }

  // 바인딩으로 대체
  // ds_condition.nameValue(1, "wrkDt") = ica_wrkDt.text;
  // ds_condition.nameValue(1, "wrkShift") = lc_wrkShift.BindColVal;
  // ds_condition.nameValue(1, "wrkPatternCd") = lc_wrkPatternCd.BindColVal;
  // ds_condition.nameValue(1, "wrkIndictPrgsStsCd") = lc_wrkIndictPrgsStsCd.BindColVal;
  // ds_condition.nameValue(1, "clntNo") = ed_clntNo.text;
  // ds_condition.nameValue(1, "clntNm") = txt_clntNm.value;
  // ds_condition.nameValue(1, "cvsslMgntNo") = ed_cvsslMgntNo.text;
  // ds_condition.nameValue(1, "blBkNo") = ed_blBkNo.text;
  // ds_condition.nameValue(1, "commCd") = ed_commCd.text;
  // ds_condition.nameValue(1, "commNm") = txt_commNm.value;
  // ds_condition.nameValue(1, "tmlYardCd") = ed_tmlYardCd.text;
  // ds_condition.nameValue(1, "pdaWrkPicNo") = lc_pdaWrkPicNo.BindColVal;
  // ds_condition.nameValue(1, "repKcgCd") = lc_repKcgCd.BindColVal;
  // ds_condition.nameValue(1, "wrkIndictNo") = ed_wrkIndictNo.text;
  // ds_condition.nameValue(1, "wrkPlCd") = lc_wrkPlCd.BindColVal;

  $c.sbm.execute($p, sbm_condition);
};

//-------------------------------------------------------------------------
// 팝업 검색결과가 한건일 경우 기본 처리방법
//-------------------------------------------------------------------------
// scwin.f_getDefaultAutoClose = function () {
//     return f_isPopUpClicked() ? 'F' : 'T';
// }

//-------------------------------------------------------------------------
// 팝업 버튼에 의한 팝업호출 여부 리턴
//-------------------------------------------------------------------------
// scwin.f_isPopUpClicked = function () {
//     if (cfIsNull(event)) return false;
//     var src = event.srcElement;
//     return (src && src.tagName && (src.tagName.toUpperCase() == "IMG"));
// }

//-------------------------------------------------------------------------
// BL/BK 검색 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_openBlBkNoPopUp = async function () {
  var param = {
    "blBkNo": ed_blBkNo.getValue()
  };
  var options = {
    id: "pupup",
    popupName: "BL/BK검색팝업",
    type: "browserPopup",
    modal: true,
    width: 1000,
    height: 605
  };
  var rtnValues = await $c.win.openPopup($p, "/ui/to/in/bulk/tmlbulk/in_201_02_04p.xml", options, param);
  if (!$c.gus.cfIsNull($p, rtnValues)) {
    ed_blBkNo.setValue(rtnValues[12]);
  } else {
    ed_blBkNo.setValue("");
  }
};

//-------------------------------------------------------------------------
// 본선관리번호검색 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_openCvsslMgntNoPopUp = async function () {
  var param = [ed_cvsslMgntNo.getValue()];
  var options = {
    id: "pupup",
    popupName: "본선관리번호검색팝업",
    type: "browserPopup",
    modal: true,
    width: 885,
    height: 500
  };
  var rtnValues = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", options, param);
  if (!$c.gus.cfIsNull($p, rtnValues)) {
    ed_cvsslMgntNo.setValue(rtnValues[0]);
  } else {
    ed_cvsslMgntNo.setValue("");
  }
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_runExcel = async function () {
  totCnt = ds_retrieveWrkPlan.getRowCount();
  if (totCnt != 0) {
    cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      var options = {
        fileName: "벌크 작업 지시 정보.xlsx",
        sheetName: "벌크 작업 지시 정보",
        startRowIndex: 0,
        startColumnIndex: 0,
        type: 1
      };

      //cfGridToExcel(varGrNm, sheetTitle, sheetTitle + ".xls", 4 + 8 + 16);
      $c.data.downloadGridViewExcel($p, gr_retrieveWrkPlan, options);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 팝업 여부 체크
//-------------------------------------------------------------------------
// scwin.f_canOpenPopUp = function (inObj, pairObj) {
//     if (!f_isPopUpClicked()) {
//         if (!cfIsNull(event)) {
//             if (!cfCanOpenPopup(pairObj, inObj)) return false;
//             cfClearPairObj(inObj);
//         } else {
//             if (!cfCanOpenPopup(inObj, pairObj)) return false;
//             cfClearPairObj(pairObj);
//         }
//     }
//     return true;
// }

//-------------------------------------------------------------------------
// 화주 검색 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_openClntPopUp = function (pAllSearch) {
  // var inObj = ed_clntNo;
  // var pairObj = txt_clntNm;
  //var pAutoClose = f_getDefaultAutoClose();

  //if (!scwin.f_canOpenPopUp(inObj, pairObj)) return;

  //디테일 수입 대표거래처 팝업
  udc_clntNo.cfCommonPopUp(function (rtnList) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, txt_clntNm);
  }, ed_clntNo.getValue() // 화면에서의 ??? Code Element의	Value
  , txt_clntNm.getValue() // 화면에서의 ??? Name Element의	Value
  , "T" // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서	
  , null // 보여주는 각 컬럼들의 폭	
  , null // 컬럼중에서 숨기는	컬럼 지정	
  , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , 'F' // 전체검색허용여부	("F")
  , "대표거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};

//-------------------------------------------------------------------------
// 장치장 검색 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_openTmlYardPopUp = function (pAllSearch) {
  // var inObj = ed_tmlYardCd;
  // var pairObj = txt_tmlYardNm;
  // var pAutoClose = f_getDefaultAutoClose();

  // if (!f_canOpenPopUp(inObj, pairObj)) return;

  //디테일 수입 대표거래처 팝업
  udc_tmlYardCd.cfCommonPopUp(function (rtnList) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_tmlYardCd, txt_tmlYardNm);
  }, ed_tmlYardCd.getValue() // 화면에서의 ??? Code Element의	Value
  , txt_tmlYardNm.getValue() // 화면에서의 ??? Name Element의	Value
  , "T" // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서	
  , null // 보여주는 각 컬럼들의 폭	
  , null // 컬럼중에서 숨기는	컬럼 지정	
  , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , 'F' // 전체검색허용여부	("F")
  , "터미널장치장,장치장코드,장치장명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};

//-------------------------------------------------------------------------
// 화종 검색 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_openKcgCdPopUp = async function () {
  // var inObj = ed_commCd;
  // var pairObj = txt_commNm;

  // if (!f_canOpenPopUp(inObj, pairObj)) return;

  var param = {
    "repKcgCd": lc_repKcgCd.getValue(),
    "cd": ed_commCd.getValue(),
    "nm": txt_commNm.getValue()
  };
  var options = {
    id: "pupup",
    popupName: "대표거래처",
    type: "browserPopup",
    modal: true,
    width: 600,
    height: 500
  };
  var rtnValues = await $c.win.openPopup($p, "/ui/to/in/bulk/tmlbulk/in_201_02_10p.xml", options, param);
  if (!$c.gus.cfIsNull($p, rtnValues)) {
    ed_commCd.setValue(rtnValues[0]);
    txt_commNm.setValue(rtnValues[1]);
    lc_repKcgCd.setValue(rtnValues[2]);
  } else {
    ed_clntNo.setValue("");
    txt_clntNm.setValue("");
    lc_repKcgCd.setValue("");
  }
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function (e) {
  $c.gus.cfInitObjects($p, tb_searchCondition, [ica_wrkDt, ed_wrkIndictNo, lc_pdaWrkPicNo, lc_wrkIndictPrgsStsCd, lc_wrkPatternCd]);
  $c.gus.cfInitHidVal($p, tb_searchCondition);
  scwin.f_SetSrchClear();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchClear = function () {
  ica_wrkDt.setValue(scwin.strFromDate);
  lc_wrkShift.setValue("D");
  ed_wrkIndictNo.setValue("");
  ed_clntNo.setValue("");
  txt_clntNm.setValue("");
  lc_repKcgCd.setValue("");
  ed_commCd.setValue("");
  txt_commNm.setValue("");
  ed_tmlYardCd.setValue("");
  txt_tmlYardNm.setValue("");
  lc_pdaWrkPicNo.setValue("");
  ed_blBkNo.setValue("");
  ed_cvsslMgntNo.setValue("");
  lc_wrkPatternCd.setValue("");
  lc_wrkIndictPrgsStsCd.setValue("");
  lc_wrkPlCd.setValue("");
};
scwin.f_WinClose = function (e) {
  $c.win.closePopup($p, ["N/A"]);
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openClntPopUp();
};
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  scwin.f_openClntPopUp();
};
scwin.udc_commCd_onclickEvent = function (e) {
  scwin.f_openKcgCdPopUp();
};
scwin.udc_commCd_onviewchangeCodeEvent = function (info) {
  scwin.f_openKcgCdPopUp();
};
scwin.udc_tmlYardCd_onviewchangeCodeEvent = function (info) {
  scwin.f_openTmlYardPopUp();
};
scwin.udc_tmlYardCd_onviewchangeNameEvent = function (info) {
  scwin.f_openTmlYardPopUp();
};
scwin.udc_tmlYardCd_onclickEvent = function (e) {
  scwin.f_openTmlYardPopUp();
};
scwin.img_PopUp2_onclick = function (e) {
  scwin.f_openBlBkNoPopUp();
};
scwin.img_conCvsslMgntNo_onclick = function (e) {
  scwin.f_openCvsslMgntNoPopUp();
};
scwin.sbm_condition_submitdone = async function () {
  //for=ds_retrieveWrkPlan event=OnLoadCompleted(rowCnt)
  var rowCnt = ds_retrieveWrkPlan.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다	
  } else if (rowCnt == 1 && scwin.g_closeTF == "T") {
    var rtnValues = {};
    var row = 0;
    rtnValues[0] = dma_condition.get(row, "wrkIndictNo");
    $c.win.closePopup($p, rtnValues);
  }
  totalRows.setValue(rowCnt);
};
scwin.ed_wrkIndictNo_onkeyup = function (e) {
  $c.gus.cfToUpper($p, ed_wrkIndictNo);
};
scwin.ed_blBkNo_onkeyup = function (e) {
  $c.gus.cfToUpper($p, ed_blBkNo);
};
scwin.ed_cvsslMgntNo_onkeyup = function (e) {
  $c.gus.cfToUpper($p, ed_cvsslMgntNo);
};
scwin.udc_commCd_onblurCodeEvent = function (e) {
  scwin.f_openKcgCdPopUp(txt_commNm);
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_openClntPopUp();
};
scwin.udc_tmlYardCd_onblurCodeEvent = function (e) {
  scwin.f_openTmlYardPopUp();
};
scwin.ed_blBkNo_onblur = function (e) {
  scwin.f_openBlBkNoPopUp();
};
scwin.ed_cvsslMgntNo_onblur = function (e) {
  scwin.f_openCvsslMgntNoPopUp();
};
scwin.gr_retrieveWrkPlan_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex == -1) return;
  var rtnValues = {};
  rtnValues[0] = ds_retrieveWrkPlan.getCellData(rowIndex, "wrkIndictNo"); // 작업지시번호

  $c.win.closePopup($p, rtnValues);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'tb_searchCondition',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup',style:''},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkDt',pickerType:'dynamic',style:'',mandatory:'true',displayFormat:'yyyy/MM/dd',ref:'data:dma_condition.wrkDt',title:'작업일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업시프트 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_wrkShift',search:'start',style:'width:150px;',submenuSize:'auto',mandatory:'true',ref:'data:dma_condition.wrkShift',title:'작업시프트'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업지시번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_wrkIndictNo',placeholder:'',style:'width:150px;',objType:'data',maxlength:'13',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.ed_wrkIndictNo_onkeyup',ref:'data:dma_condition.wrkIndictNo'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',maxlengthCode:'8',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',codeId:'ed_clntNo',id:'udc_clntNo',nameId:'txt_clntNm',objTypeCode:'data',objTypeName:'data',btnId:'img_clntNo',refDataCollection:'dma_condition',code:'clntNo',name:'clntNm','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent',selectID:'retrieveCoopList','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_repKcgCd',search:'start',style:'width:80px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_condition.repKcgCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'화종'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'품목'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'품명'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_commCd',id:'udc_commCd',nameId:'txt_commNm',objTypeCode:'data',objTypeName:'data',btnId:'img_PopUp3',maxlengthCode:'8',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',refDataCollection:'dma_condition',code:'commCd',name:'commNm','ev:onclickEvent':'scwin.udc_commCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_commCd_onviewchangeCodeEvent','ev:onblurCodeEvent':'scwin.udc_commCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장치장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_tmlYardCd',id:'udc_tmlYardCd',nameId:'txt_tmlYardNm',objTypeCode:'data',objTypeName:'data',maxlengthCode:'8',UpperFlagCode:'1',refDataCollection:'dma_condition',code:'tmlYardCd','ev:onviewchangeCodeEvent':'scwin.udc_tmlYardCd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_tmlYardCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_tmlYardCd_onclickEvent',selectID:'retrieveWrkPlInfo','ev:onblurCodeEvent':'scwin.udc_tmlYardCd_onblurCodeEvent',allowCharCode:'0-9a-zA-Z'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_pdaWrkPicNo',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_condition.pdaWrkPicNo'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BL/BK 번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_blBkNo',placeholder:'',style:'width: 150px;',objType:'data',maxlength:'11',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.ed_blBkNo_onkeyup',ref:'data:dma_condition.blBkNo','ev:onblur':'scwin.ed_blBkNo_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_PopUp2',style:'',type:'button','ev:onclick':'scwin.img_PopUp2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',style:'width: 150px;',objType:'data',maxlength:'8',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.ed_cvsslMgntNo_onkeyup',ref:'data:dma_condition.cvsslMgntNo','ev:onblur':'scwin.ed_cvsslMgntNo_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_conCvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.img_conCvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'진행상태 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_wrkIndictPrgsStsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_condition.wrkIndictPrgsStsCd',visibleRowNum:'6'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업유형 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_wrkPatternCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_condition.wrkPatternCd',visibleRowNum:'14'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_wrkPlCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_condition.wrkPlCd',objType:'data',visibleRowNum:'6'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_fieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'벌크 작업 지시 검색',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridID:'gr_retrieveWrkPlan',gridUpYn:'N',gridDownUserAuth:'X',gridDownFn:'scwin.f_runExcel',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_retrieveWrkPlan',id:'gr_retrieveWrkPlan',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_retrieveWrkPlan_oncelldblclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'작업지시번호',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'작업단위',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'작업지시',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'작업실적',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'진행상태',width:'100',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column28',value:'시프트',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column26',value:'중량(톤)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column23',value:'중량(톤)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'CBM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIndictNo',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',style:'',value:'',width:'70',displayFormat:'MM:dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkShift',inputType:'select',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'indictQty',inputType:'text',style:'',value:'',width:'70',textAlign:'right',excelCellType:'number',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'indictWt',inputType:'text',style:'',value:'',width:'80',textAlign:'right',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###0.000',dataType:'float'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'indictCbm',inputType:'text',style:'',value:'',width:'70',textAlign:'right',excelCellType:'number',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsQty',inputType:'text',style:'',value:'',width:'70',textAlign:'right',excelCellType:'number',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsWt',inputType:'text',style:'',value:'',width:'80',textAlign:'right',excelCellType:'number',excelFormat:'#,###0.000',displayFormat:'#,###',dataType:'float'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsCbm',inputType:'text',style:'',value:'',width:'70',textAlign:'right',excelCellType:'number',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIndictPrgsStsCd',inputType:'select',style:'',value:'',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_WinClose'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})