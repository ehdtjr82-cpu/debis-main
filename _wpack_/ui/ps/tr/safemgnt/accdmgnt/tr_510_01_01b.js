/*amd /ui/ps/tr/safemgnt/accdmgnt/tr_510_01_01b.xml 27209 bebae8149fc4f4aa98e4f8786445f0552fb94e16040e82f524dfc819f36f4ef2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_AccidentQry'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'accdOutbrDtFrom',name:'사고발생일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'accdOutbrDtTo',name:'사고발생일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDiv',name:'사업부문',dataType:'text'}},{T:1,N:'w2:key',A:{id:'accdProcBranchCd',name:'사고처리지점코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'accdPatternCd',name:'사고유형코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AccidentDet',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'accdNo',name:'사고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accdHomeDivCd',name:'사고소속부문코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accdPattern',name:'사고유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'persNm',name:'기사성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accdProcBranch',name:'사고처리지점',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accdDt',name:'사고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accdOutbrRepoDt',name:'발생보고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accdOutbrBranchApprvDt',name:'발생지점결재일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accdTmntDt',name:'종결일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accdTmntRepoDt',name:'종결보고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmntBranchApprvDt',name:'종결지점결재일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmntAfProcDt',name:'종결후처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrApprvStsCd',name:'발생전자결재상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmntApprvStsCd',name:'종결전자결재상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_Accident',action:'/ps.tr.safemgnt.accdmgnt.RetrieveAccidentListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_AccidentQry","key":"IN_DS1"},{"id":"ds_AccidentDet","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_AccidentDet","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Accident_submitdone','ev:submiterror':'scwin.sbm_Accident_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// scwin.memJson = $c.data.getMemInfo();
scwin.wrkDate = WebSquare.date.getFormattedDate(new Date(), "yyyyMM") + "01";
scwin.curDate = WebSquare.date.getFormattedDate(new Date(), "yyyyMMdd");
scwin.allchkb = "0";
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ005",
    compID: "lc_bizDiv"
  }, {
    grpCd: "ZZ515",
    compID: "gr_Accident:accdPattern"
  }, {
    grpCd: "ZZ021",
    compID: "gr_Accident:outbrApprvStsCd, gr_Accident:tmntApprvStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  const codeOptions2 = [{
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retriveBranchCd",
    param3: [""],
    compID: "lc_accdProcBranchCd, gr_Accident:accdProcBranch"
  }];
  $c.data.setGauceUtil($p, codeOptions2);

  // $c.gus.cfDisableBtn([bUpdate, bDelete]); //발생상세, 종결상세
  $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bUpdate'), $c.gus.getctrlBtn($p, 'bDelete')]);
  // 사고유형 체크박스 체크
  cbx_chkb.checkAll(true);
};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {};

// UDC 셋팅이 이후..
scwin.onUdcCompleted = function () {
  ica_accdOutbrDtFrom.setValue(scwin.wrkDate);
  ica_accdOutbrDtTo.setValue(scwin.curDate);
  ica_accdOutbrDtFrom.focus();
};

//-----------------------------------------------------------------------------
//  check box 컨트롤
//------------------------------------------------------------------------------
scwin.cbx_chkb_onviewchange = function (info) {
  var cbx_chkbs = cbx_chkb.getSelectedIndex().split(":");
  if (cbx_chkbs.length > 0) {
    if ("0" == cbx_chkbs[0]) {
      scwin.allchkb = "0";
      cbx_chkb.checkAll(true);
    } else {
      if ("0" == scwin.allchkb) {
        scwin.allchkb = "";
        cbx_chkb.checkAll(false);
      }
    }
  } else {
    cbx_chkb.checkAll(false);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // if ( ica_accdOutbrDtFrom.Text.trim().length != 8 ) {
  if ("" == ica_accdOutbrDtFrom.getValue()) {
    // cfAlertMsg(MSG_CM_ERR_002 , ["사고기간"]);
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "사고기간"));
    ica_accdOutbrDtFrom.focus();
    return;
  }
  if ("" == ica_accdOutbrDtTo.getValue()) {
    // cfAlertMsg(MSG_CM_ERR_002 , ["사고기간"]);
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "사고기간"));
    ica_accdOutbrDtTo.focus();
    return;
  }
  if (ica_accdOutbrDtTo.getValue() < ica_accdOutbrDtFrom.getValue()) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "사고기간"));
    ica_accdOutbrDtFrom.focus();
    return;
  }
  console.log("== cbx_chkb.getValue() ==" + cbx_chkb.getValue());

  //사고유형 코드 입력 check
  if ("X" == cbx_chkb.getValue()) {
    // if ( chkb_Main.checked == false && chkb1.checked == false && chkb2.checked == false && chkb3.checked == false && chkb4.checked == false && chkb5.checked == false && chkb6.checked == false) {
    //     cfAlertMsg(MSG_CM_ERR_002 , ["전체 선택 또는 사고유형 선택"]);
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "전체 선택 또는 사고유형 선택"));
    cbx_chkb.focus();
    return;
  }
  dma_AccidentQry.set("accdOutbrDtFrom", ica_accdOutbrDtFrom.getValue());
  dma_AccidentQry.set("accdOutbrDtTo", ica_accdOutbrDtTo.getValue());
  dma_AccidentQry.set("bizDiv", lc_bizDiv.getValue());
  dma_AccidentQry.set("accdProcBranchCd", lc_accdProcBranchCd.getValue());
  dma_AccidentQry.set("accdPatternCd", cbx_chkb.getValue());
  dma_AccidentQry.set("clntNo", ed_clntNoCond.getValue());
  $c.sbm.execute($p, sbm_Accident);
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = async function () {
  // 사업부문 체크(물류/고속)
  var bizDiv = lc_bizDiv.getValue();
  if (bizDiv == "") {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "신규 등록시 사업부문"));
    lc_bizDiv.focus();
    return;
  }

  // //팝업화면에게 KEY 정보를 넘겨준다.	    
  // var argObject = new Object();
  // argObject.accdNo = "";
  // var argPath = "";
  // if ( bizDiv == "T" ) {
  //     argPath = "./tr_510_01_02b.jsp";	// 고속
  // } else if ( bizDiv == "L" )  {
  //     argPath = "./tr_510_01_05b.jsp";	// 물류
  // }

  // var result = window.showModalDialog(argPath, argObject, "dialogWidth:1020px; dialogHeight:900px; status:no; scroll:yes");

  var data = {
    accdNo: ""
  };
  var argPath = "";
  if (bizDiv == "T") {
    argPath = "/ui/ps/tr/safemgnt/accdmgnt/tr_510_01_02b.xml"; // 고속
  } else if (bizDiv == "L") {
    argPath = "/ui/ps/tr/safemgnt/accdmgnt/tr_510_01_05b.xml"; // 물류
  }
  var opts = {
    id: "Pop",
    popupName: "팝업",
    modal: true,
    type: "browserPopup",
    title: "Win pop",
    width: 1020,
    height: 900
  };
  var rtnList = await $c.win.openPopup($p, argPath, opts, data);
  if (rtnList != null) {}
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 발생보고(S)/종결보고(E)
//-------------------------------------------------------------------------
scwin.f_Detail = async function (cls) {
  var rowPos = ds_AccidentDet.getRowPosition();
  if (rowPos < 1) {
    await $c.win.alert($p, "선택한 사고번호가 없습니다.");
    return;
  }

  //팝업화면에게 KEY 정보를 넘겨준다.
  var bizDiv = ds_AccidentDet.getCellData(rowPos, "accdHomeDivCd");
  var argObject = new Object();
  argObject.accdNo = ds_AccidentDet.getCellData(rowPos, "accdNo");
  var argPath = "";
  var dialSize = "";
  if (cls == "E") {
    // if (ds_AccidentDetaccdNo.NameValue(rowPos, "accdOutbrBranchApprvDt").trim() == "" ) {
    if (ds_AccidentDet.getCellData(rowPos, "accdNo") == "") {
      await $c.win.alert($p, "발생보고 결재 전이므로 종결보고할 수 없습니다.");
      return;
    }
  }
  if (bizDiv == "T") {
    if (cls == "S") {
      argPath = "./tr_510_01_02b.jsp"; // 고속발생
      dialSize = "dialogWidth:1020px; dialogHeight:900px; status:no; scroll:yes";
    } else if (cls == "E") {
      argPath = "./tr_510_01_03b.jsp"; // 고속종결
      dialSize = "dialogWidth:1020px; dialogHeight:1000px; status:no; scroll:yes";
    }
  } else if (bizDiv == "L") {
    if (cls == "S") {
      argPath = "./tr_510_01_05b.jsp"; // 물류발생
      dialSize = "dialogWidth:1020px; dialogHeight:900px; status:no; scroll:yes";
    } else if (cls == "E") {
      argPath = "./tr_510_01_06b.jsp"; // 물류종결
      dialSize = "dialogWidth:1020px; dialogHeight:1000px; status:no; scroll:yes";
    }
  }

  // var RowPos = ds_AccidentDet.RowPosition;

  // var result = window.showModalDialog(argPath, argObject, dialSize);

  scwin.f_Retrieve();
  // ds_AccidentDet.RowPosition = RowPos;
  return;
};

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------
// scwin.f_FieldClear = function() {
// 	cfInitObjects(tb_retrieve,null);
// 	em_accdOutbrDtFrom.focus();
// };
scwin.btn_search1_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1);
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = function () {
  // if ( !(ds_AccidentDet.CountRow > 0) ) return;
  var rowCnt = ds_AccidentDet.getRowCount();
  if (rowCnt == 0) return;
  let sheetTitle = "사고처리 현황";
  const options = {
    fileName: sheetTitle + ".xlsx",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gr_Accident, options);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// scwin.name : f_openCommonPopUp
// scwin.desc : popup
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  var rtnList = new Array();
  switch (disGubun) {
    case 1:
      await udc_clntNoCond.cfCommonPopUp(scwin.udc_clntNoCond_callback, pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , '5' // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서  
      , '150,170' // 보여주는 각 컬럼들의 폭    
      , '3,4,5,6,7,8,9,10' // 컬럼중에서 숨기는    컬럼 지정   
      , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
      , null // 윈도우 위치 Y좌표   
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , '거래처 조회,거래처코드 ,거래처명 ' // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};
scwin.udc_clntNoCond_callback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_clntNoCond.setValue(rtnList[0]);
      ed_clntNoCond.options.hidVal = rtnList[0];
      ed_clntNmCond.setValue(rtnList[1]);
    }
  } else {
    ed_clntNoCond.setValue("");
    ed_clntNoCond.options.hidVal = "";
    ed_clntNmCond.setValue("");
  }
};
scwin.sbm_Accident_submitdone = function (e) {
  var rowCnt = ds_AccidentDet.getRowCount();
  spanTotal.setLabel(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  } else {
    $c.gus.cfEnableAllBtn($p);
  }
  gr_Accident.setFocusedCell(0, 0);
};
scwin.sbm_Accident_submiterror = function (e) {};
scwin.udc_clntNoCond_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNoCond.getValue(), ed_clntNmCond.getValue(), 'T', 'F');
};
scwin.udc_clntNoCond_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNoCond.getValue(), ed_clntNmCond.getValue(), 'T', 'F');
};
scwin.lc_bizDiv_onchange = function (info) {
  console.log("============" + info.newValue);
  if (info.newValue == "T") {
    lc_accdProcBranchCd.setValue("");
    lc_accdProcBranchCd.setDisabled(true);
  } else {
    lc_accdProcBranchCd.setValue("");
    lc_accdProcBranchCd.setDisabled(false);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_clntNoCond',codeId:'ed_clntNoCond',editTypeName:'focus','ev:onblurCodeEvent':'scwin.udc_clntNoCond_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNoCond_onclickEvent',id:'udc_clntNoCond',maxlengthCode:'6',maxlengthName:'30',name:'clntNm',nameId:'ed_clntNmCond',objTypeCode:'data',objTypeName:'data',onloadCallbackFunc:'',popupGridHeadTitle:'귀속코드,부서명',popupID:'',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명',refDataCollection:'dma_AccidentQry',selectID:'retrieveClntList',style:'',validExpCode:'거래처:yes',code:'clntNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사고기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ica_accdOutbrDtFrom',edToId:'ica_accdOutbrDtTo',id:'udc_fromToCalendar4',mandatoryFrom:'true',mandatoryTo:'true',refDataMap:'dma_AccidentQry',refEdDt:'accdOutbrDtTo',refStDt:'accdOutbrDtFrom',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업부문 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bizDiv',style:'width: 100px;',submenuSize:'fixed',chooseOptionLabel:'전체','ev:onchange':'scwin.lc_bizDiv_onchange'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'처리지점 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',class:'',editType:'select',id:'lc_accdProcBranchCd',mandatory:'true',ref:'',search:'start',style:'width:100px;',submenuSize:'auto',visibleRowNum:'15',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사고유형 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_chkb',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',separator:':','ev:onviewchange':'scwin.cbx_chkb_onviewchange','ev:onchange':'scwin.cbx_chkb_onchange',falseValue:'X'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단독'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'G'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가해'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'피해'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'P'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'쌍방'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_search1_init',style:'',type:'button','ev:onclick':'scwin.btn_search1_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:'','ev:onclick':'f_Create'},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'사고처리 목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_Accident',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_AccidentDet',focusMode:'row',id:'gr_Accident',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'사고번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'거래처명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'처리</br>지점',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'사고</br>유형',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'기사</br>성명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'차량</br>번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'400',inputType:'text',style:'',id:'column64',value:'사고발생',displayMode:'label',colSpan:'4',rowSpan:''}},{T:1,N:'w2:column',A:{width:'530',inputType:'text',style:'',id:'column52',value:'사고종결',displayMode:'label',colSpan:'5',rowSpan:''}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'사고발생',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'보고일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'결재일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'결재상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'사고종결',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'보고일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'결재일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column44',value:'종결후처리',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'결재상태',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'accdNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'accdProcBranch',inputType:'select',style:'',value:'',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'accdPattern',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'persNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vehclShortCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'accdDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'accdOutbrRepoDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'accdOutbrBranchApprvDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'outbrApprvStsCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'accdTmntDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'accdTmntRepoDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tmntBranchApprvDt',inputType:'text',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tmntAfProcDt',inputType:'text',style:'',value:'',width:'130',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tmntApprvStsCd',inputType:'select',style:'',value:'',width:'100',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Add',style:'',type:'button','ev:onclick':'scwin.f_Create',userAuth:'C',objType:'bCreate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Start',style:'',type:'button',disabled:'true','ev:onclick':'scwin.f_Detail(\'S\')',userAuth:'R',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사고발생보고상세'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'',style:'',type:'button',disabled:'true','ev:onclick':'scwin.f_Detail(\'E\')',userAuth:'R',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사고종결보고상세'}]}]}]}]}]}]}]}]}]})