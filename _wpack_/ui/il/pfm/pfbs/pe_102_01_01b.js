/*amd /ui/il/pfm/pfbs/pe_102_01_01b.xml 42000 e700a79a6759ae76f9b9d0213187c79f6b10a449ea7913467c675c7fd319c8cb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_BookingSheetList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'CHK',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mblno',name:'Master B/L No',dataType:''}},{T:1,N:'w2:column',A:{id:'blno',name:'House B/L No',dataType:''}},{T:1,N:'w2:column',A:{id:'ondt',name:'Ondt/Avdt',dataType:''}},{T:1,N:'w2:column',A:{id:'mhno',name:'Consol No',dataType:''}},{T:1,N:'w2:column',A:{id:'customernm',name:'Customer',dataType:''}},{T:1,N:'w2:column',A:{id:'hhvsl',name:'Vessel',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'slipNo',name:'Slip No',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'kcomcd',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhlinernm',name:'LinerName',dataType:''}},{T:1,N:'w2:column',A:{id:'userId',name:'UserId',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'userNm',name:'UserName',dataType:''}},{T:1,N:'w2:column',A:{id:'custNmDetail',name:'거래처명',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'linerNmDetail',name:'선사명',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhvslDetail',name:'VESSEL',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhetdDetail',name:'ETD',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhetaDetail',name:'ETA',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'loadNmDetail',name:'출발지명',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'discNmDetail',name:'도착지명',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'deptNmDetail',name:'부서명',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'wtDetail',name:'WT',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'sellAmtDetail',name:'매출',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pchsAmtDetail',name:'매입',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'profitDetail',name:'이익',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'profitPerDetail',name:'이익율',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pchsPerDetail',name:'원가율',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'itemNmDetail',name:'품목명',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bkNoDetail',name:'BK NO',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pnNmDetail',name:'파트너명',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'loadCdDetail',name:'출발지',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'discCdDetail',name:'도착지',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'arNmDetail',name:'지역명',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntyNmDetail',name:'국가명',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'salesNmDetail',name:'영업사원',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pkgDetail',name:'PKG',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hhondtDetail',name:'ON BOARD',dataType:''}},{T:1,N:'w2:column',A:{id:'odrNoDetail',name:'ODRNO',dataType:'',defaultValue:''}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seaair',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iogb',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'searchGubun',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromDate',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDate',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'custmer',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sales',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dept',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptGubun',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bltype',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirm',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNoYn',name:'name14',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.pfm.pfbs.RetrieveBookingSheetListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Search","key":"IN_DS1"},{"id":"ds_BookingSheetList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_BookingSheetList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.pfm.pfbs.SaveBookingSheetListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_BookingSheetList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/js/il/ilcommon.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.txt_countRow = "";
scwin.hid_kcomcd = "DBEX"; //대표거래처 코드

scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.strPreDate = $c.date.addMonth($p, scwin.strCurDate, -1); //한달전

scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId; //사용자

scwin.loginClntNo = $c.data.getMemInfo($p, "clntNo") == null ? "-" : $c.data.getMemInfo($p, "clntNo");
scwin.loginClntNm = $c.data.getMemInfo($p, "clntNm") == null ? "" : $c.data.getMemInfo($p, "clntNm"); //거래처명
scwin.userClsCd = $c.data.getMemInfo($p, "userClsCd"); // 사용자 구분코드

scwin.onpageload = function () {
  scwin.f_DefaultValue();
  scwin.f_Set("INIT");
};
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      //초기화
      cnd_rd_dpgb.setValue("1");
      cnd_lc_jobgb.setSelectedIndex(0);
      cnd_lc_iogb.setSelectedIndex(0);
      cnd_lc_bltype.setSelectedIndex(0);
      cnd_lc_searchGubun.setSelectedIndex(0);
      gr_BookingSheetList.setReadOnly("grid", true);
      break;
    case "RETRIEVE":
      //조회모드	
      break;
  }
};
scwin.f_DefaultValue = function () {
  udc_fromToCalendar.setInitDate(scwin.strPreDate, scwin.strCurDate); //udc
};

//초기화
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_searchCondition, [cnd_rd_dpgb]);
  //cnd_rd_dpgb.setSelectedIndex(1);
};

//조회
scwin.btn_retrieve_onclick = function (e) {
  if (cnd_ed_fromDate.getValue() == "" || cnd_ed_toDate.getValue() == "") {
    $c.gus.cfAlertMsg($p, "OnBoard/Arrival or Result Date is mandatory.");
    cnd_ed_fromDate.focus();
    return;
  } else {
    ds_BookingSheetList.removeAll();
    dma_Search.set("kcomcd", scwin.hid_kcomcd);
    if (cnd_chb_Confirm.getValue() == "1") {
      dma_Search.set("confirm", "N");
    } else {
      dma_Search.set("confirm", "");
    }
    if (cnd_chb_slipNo.getValue()) {
      dma_Search.set("slipNoYn", "Y");
    } else {
      dma_Search.set("slipNoYn", "");
    }

    //dataMap Binding...
    dma_Search.set("seaair", cnd_lc_jobgb.getValue());
    dma_Search.set("iogb", cnd_lc_iogb.getValue());
    dma_Search.set("searchGubun", cnd_lc_searchGubun.getValue());
    dma_Search.set("fromDate", cnd_ed_fromDate.getValue());
    dma_Search.set("toDate", cnd_ed_toDate.getValue());
    dma_Search.set("custmer", ed_custCd.getValue());
    dma_Search.set("sales", ed_sacd.getValue());
    dma_Search.set("dept", ed_dept.getValue());
    dma_Search.set("deptGubun", cnd_rd_dpgb.getValue());
    dma_Search.set("bltype", cnd_lc_bltype.getValue());
    dma_Search.set("slipNo", ed_slipNo.getValue());
    $c.sbm.execute($p, sbm_retrieve);
    scwin.f_Set("RETRIEVE");
  }
};

//조회callback
scwin.sbm_retrieve_submitdone = function () {
  let nCnt = ds_BookingSheetList.getRowCount();
  if (nCnt == 0) {
    total.setValue(nCnt);
    $c.gus.cfAlertMsg($p, "결과값이 없습니다.");
    scwin.processFlag = "INIT";
  } else {
    gr_BookingSheetList.setFocusedCell(0, 0);
    total.setValue(nCnt);
  }
  if (cnd_chb_slipNo.getValue() == "1") {
    gr_BookingSheetList.setColumnVisible("slipNo", true);
  } else {
    gr_BookingSheetList.setColumnVisible("slipNo", false);
  }
};

//customer pop
scwin.udc_ilcomCode_cust_onclickEvent = function (e) {
  udc_ilcomCode_cust.ilCommonPopUp(scwin.udc_ilcomCode_cust_callBackFunc, ed_custCd.getValue(), ed_custNm.getValue(), "T", "2", "Code, Name", null, null, null, null, null, null, null, null, "F", "Customer,Code,Name", null);
};
scwin.udc_ilcomCode_cust_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_custCd, ed_custNm);
};
scwin.udc_ilcomCode_cust_onblurCodeEvent = function (e) {
  if (ed_custCd.getValue() === "") {
    ed_custNm.setValue("");
  } else {
    udc_ilcomCode_cust.ilCommonPopUp(scwin.udc_ilcomCode_cust_callBackFunc, ed_custCd.getValue(), "", "T", "2", "Code, Name", null, null, null, null, null, null, null, null, "F", "Customer,Code,Name", null);
  }
};
scwin.udc_ilcomCode_cust_onviewchangeNameEvent = function (info) {
  if (ed_custNm.getValue() === "") {
    ed_custCd.setValue("");
  } else {
    udc_ilcomCode_cust.ilCommonPopUp(scwin.udc_ilcomCode_cust_callBackFunc, "", ed_custNm.getValue(), "T", "2", "Code, Name", null, null, null, null, null, null, null, null, "F", "Customer,Code,Name", null);
  }
};

////Department pop
scwin.udc_ilcomCode_dept_onclickEvent = function (e) {
  udc_ilcomCode_dept.ilCommonPopUp(scwin.udc_ilcomCode_dept_callBackFunc, ed_dept.getValue(), ed_deptnm.getValue(), "T", "2", "Code, Name", null, null, null, null, null, null, null, null, "F", "Department,Code,Name", null);
};
scwin.udc_ilcomCode_dept_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_dept, ed_deptnm);
};
scwin.udc_ilcomCode_dept_onblurCodeEvent = function (e) {
  if (ed_dept.getValue() === "") {
    ed_deptnm.setValue("");
  } else {
    udc_ilcomCode_dept.ilCommonPopUp(scwin.udc_ilcomCode_dept_callBackFunc, ed_dept.getValue(), "", "T", "2", "Code, Name", null, null, null, null, null, null, null, null, "F", "Department,Code,Name", null);
  }
};
scwin.udc_ilcomCode_dept_onviewchangeNameEvent = function (info) {
  if (ed_deptnm.getValue() === "") {
    ed_dept.setValue("");
  } else {
    udc_ilcomCode_dept.ilCommonPopUp(scwin.udc_ilcomCode_dept_callBackFunc, "", ed_deptnm.getValue(), "T", "2", "Code, Name", null, null, null, null, null, null, null, null, "F", "Department,Code,Name", null);
  }
};

//Salesman pop
scwin.udc_ilcomCode_sa_onclickEvent = function (e) {
  udc_ilcomCode_sa.ilCommonPopUp(scwin.udc_ilcomCode_sa_callBackFunc, ed_sacd.getValue(), ed_sanm.getValue(), "T", "2", "Code, Name", null, null, null, null, null, null, null, null, "F", "Salesman,Code,Name", null);
};
scwin.udc_ilcomCode_sa_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_sacd, ed_sanm);
};
scwin.udc_ilcomCode_sa_onblurCodeEvent = function (e) {
  if (ed_sacd.getValue() === "") {
    ed_sanm.setValue("");
  } else {
    udc_ilcomCode_sa.ilCommonPopUp(scwin.udc_ilcomCode_sa_callBackFunc, ed_sacd.getValue(), "", "T", "2", "Code, Name", null, null, null, null, null, null, null, null, "F", "Salesman,Code,Name", null);
  }
};
scwin.udc_ilcomCode_sa_onviewchangeNameEvent = function (info) {
  if (ed_sanm.getValue() === "") {
    ed_sacd.setValue("");
  } else {
    udc_ilcomCode_sa.ilCommonPopUp(scwin.udc_ilcomCode_sa_callBackFunc, "", ed_sanm.getValue(), "T", "2", "Code, Name", null, null, null, null, null, null, null, null, "F", "Salesman,Code,Name", null);
  }
};

//job type 선택시
scwin.cnd_lc_jobgb_onselected = function () {
  if (cnd_lc_jobgb.getValue() == "") {
    cnd_lc_searchGubun.setValue("2");
    $c.gus.cfDisableObjects($p, [cnd_lc_iogb]);
  } else {
    $c.gus.cfEnableObjects($p, [cnd_lc_iogb]);
  }
};

//저장()
scwin.btn_save_onclick = function (e) {
  ds_BookingSheetList.modifyAllStatus("C");
  $c.sbm.execute($p, sbm_save);
};
scwin.sbm_save_submitdone = function () {
  scwin.f_print();
};
scwin.f_print = async function () {
  let data = "";
  let iogb = "";
  let confirmVal = "";
  let vChkCnt = 0;
  if (cnd_lc_iogb.getSelectedIndex() == 0) {
    iogb = "O";
  } else {
    iogb = "I";
  }
  for (var i = 0; i < ds_BookingSheetList.getRowCount(); i++) {
    let vChkYn = ds_BookingSheetList.getCellData(i, "chk");
    if (vChkYn == "T") {
      vChkCnt++;
    }
  }
  if (vChkCnt < 1) {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_056, ["Row"]);
    return;
  }
  if (cnd_chb_Confirm.getValue() == "1") {
    confirmVal = "N";
  } else {
    confirmVal = "";
  }
  if (cnd_lc_jobgb.getValue() == "S") {
    //해운
    data = {
      reportName: "/il/pfm/pe_102_01_02b.ozr",
      odiParam: {
        SEAAIR: "S",
        KCOMCD: scwin.hid_kcomcd,
        USERID: scwin.userId,
        IOGB: iogb,
        CONFIRM: confirmVal
      },
      viewerParam: {
        useprogressbar: false,
        mode: "preview"
      },
      formParam: {}
    };
    await scwin.openPopup(data);
  } else {
    // 항공
    data = {
      reportName: "/il/pfm/pe_102_01_01b.ozr",
      odiParam: {
        SEAAIR: "A",
        KCOMCD: scwin.hid_kcomcd,
        USERID: scwin.userId,
        IOGB: iogb
      },
      viewerParam: {
        useprogressbar: false,
        mode: "preview"
      },
      formParam: {}
    };
    await scwin.openPopup(data);
  }
};
scwin.btn_edit_onclick = async function (e) {
  // 선택한 로우가 있는지 확인
  let vChkCnt = 0;
  let vChkYn = "";
  for (var i = 0; i < ds_BookingSheetList.getRowCount(); i++) {
    vChkYn = ds_BookingSheetList.getCellData(i, "chk");
    if (vChkYn == 'T') {
      vChkCnt++;
    }
  }
  if (vChkCnt < 1) {
    $c.win.alert($p, "Nothing has been selected.");
    return;
  }

  // 체크된 갯수만큼 오즈리포트를 출력한다. 
  for (var i = 0; i < ds_BookingSheetList.getRowCount(); i++) {
    vChkYn = ds_BookingSheetList.getCellData(i, "chk");
    if (vChkYn == 'T') {
      if (cnd_lc_jobgb.getValue() == "S") {
        //해운
        // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
        let data = {
          reportName: "/il/pfm/pe_101_01_02b.ozr",
          odiParam: {
            KCOMCD: ds_BookingSheetList.getCellData(i, "kcomcd"),
            MHNO: ds_BookingSheetList.getCellData(i, "mhno"),
            MBLNO: ds_BookingSheetList.getCellData(i, "mblno")
          },
          viewerParam: {
            useprogressbar: false,
            mode: "silent"
          },
          formParam: {
            //
          }
        };
        await scwin.openPopup(data);
      } else {
        // 항공
        // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
        let data = {
          reportName: "/il/pfm/pe_101_01_01b.ozr",
          odiName: "pe_101_01_02b",
          odiParam: {
            KCOMCD: ds_BookingSheetList.getCellData(i, "kcomcd"),
            MHNO: ds_BookingSheetList.getCellData(i, "mhno"),
            MBLNO: ds_BookingSheetList.getCellData(i, "mblno")
          },
          viewerParam: {
            useprogressbar: false,
            mode: "silent"
          },
          formParam: {
            //
          }
        };
        await scwin.openPopup(data);
      }
    }
  }
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};
scwin.cnd_chb_Confirm_onchange = function (info) {
  ds_BookingSheetList.removeAll();
};
scwin.cnd_chb_slipNo_onchange = function (info) {
  ds_BookingSheetList.removeAll();
};
scwin.getFloorValue = function (value) {
  if (value === "" || value === undefined || value === null) return "";
  return $c.gus.cfInsertComma($p, Math.trunc(Number(value).toFixed(1)));
};
scwin.finalSumFormatter = function (data) {
  if (data === "" || data === undefined || data === null || isNaN(data)) return "0";
  var val = Number(data);
  var step1 = Number(val.toFixed(1));
  var finalInt = Math.trunc(step1);
  return $c.gus.cfInsertComma($p, finalInt);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_searchCondition',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Job Type',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'cnd_lc_jobgb',chooseOption:'',style:'width:110px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',objType:'data','ev:onchange':'scwin.cnd_lc_jobgb_onselected'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Sea'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Air'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'All'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Export/Import',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'cnd_lc_iogb',ref:'',style:'width:110px;',submenuSize:'auto',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Search Option',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'cnd_lc_searchGubun',ref:'',style:'width:120px;',submenuSize:'auto',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ONDT/AVDT'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Result Date'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'cnd_ed_fromDate',edToId:'cnd_ed_toDate',id:'udc_fromToCalendar',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_custCd',nameId:'ed_custNm',popupID:'',selectID:'retrieveEngClntInfo',style:'width: 100%;',validTitle:'',id:'udc_ilcomCode_cust',UpperFlagCode:'1',maxlengthCode:'6','ev:onclickEvent':'scwin.udc_ilcomCode_cust_onclickEvent','ev:onblurCodeEvent':'scwin.udc_ilcomCode_cust_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_ilcomCode_cust_onviewchangeNameEvent',allowCharCode:'0-9a-zA-Z'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Salesman',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_sacd',nameId:'ed_sanm',popupID:'',selectID:'retrieveEmpInfo',style:'width: 100%;',validTitle:'',id:'udc_ilcomCode_sa',maxlengthCode:'6',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_ilcomCode_sa_onclickEvent','ev:onblurCodeEvent':'scwin.udc_ilcomCode_sa_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_ilcomCode_sa_onviewchangeNameEvent',allowCharCode:'0-9a-zA-Z'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'mr8',cols:'',id:'cnd_rd_dpgb',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'0',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DEPT Only'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DEPT Exclude'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'cnd_lc_bltype',ref:'',style:'width:148px; height:21px; ',submenuSize:'auto',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'All'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Bulk'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Container'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Department',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_dept',nameId:'ed_deptnm',popupID:'',selectID:'retrieveOpDeptCdInfo',style:'width: 100%;',validTitle:'',id:'udc_ilcomCode_dept',UpperFlagCode:'1',maxlengthCode:'6','ev:onclickEvent':'scwin.udc_ilcomCode_dept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_ilcomCode_dept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_ilcomCode_dept_onviewchangeNameEvent',allowCharCode:'0-9a-zA-Z'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Slip No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'mr8',id:'ed_slipNo',maxlength:'10',placeholder:'',style:'width:150px;',objType:'data'}},{T:1,N:'xf:group',A:{class:'form-group mr8',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Unsettled',style:''}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'','ev:onchange':'scwin.cnd_chb_Confirm_onchange',id:'cnd_chb_Confirm',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SlipNo표시여부',style:''}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'','ev:onchange':'scwin.cnd_chb_slipNo_onchange',id:'cnd_chb_slipNo',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'B/L List',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'Y',gridUpYn:'N',gridID:'gr_BookingSheetList',btnPlusYn:'Y',grdDownOpts:'{"fileName":"BookingSheetList.xlsx", "sheetName": "BookingSheetList"}',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_BookingSheetList',id:'gr_BookingSheetList',style:'',visibleRowNum:'13',visibleRowNumFix:'true',focusMode:'',focusMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',value:' ',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Master B/L No',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'House B/L No',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'Ondt/Avdt',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'Consol No',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',width:'120',value:'Customer',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',width:'100',value:'Vessel',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',width:'100',value:'Slip No',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',width:'100',value:'kcomcd',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',width:'100',value:'LinerName',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',displayMode:'label',value:'UserId',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label',value:'UserName',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column37',displayMode:'label',value:'거래처명',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column35',displayMode:'label',value:'선사명',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column33',displayMode:'label',value:'VESSEL',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column31',displayMode:'label',value:'ETD',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column29',displayMode:'label',value:'ETA',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',displayMode:'label',value:'출발지명',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',displayMode:'label',value:'도착지명',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',displayMode:'label',value:'부서명',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column25',displayMode:'label',value:'WT',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column85',value:'매출',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column83',value:'매입',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column81',value:'이익',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column79',value:'이익율',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column77',value:'원가율',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column75',value:'품목명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column73',value:'BK NO',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column71',value:'파트너명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column69',value:'출발지',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column67',value:'도착지',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column65',value:'지역명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column63',value:'국가명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column61',value:'영업사원',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column59',value:'PKG',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'ON BOARD',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'ODRNO',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'70',falseValue:'F',trueValue:'T',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mblno',inputType:'text',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blno',inputType:'text',width:'130',class:'underline',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ondt',inputType:'text',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mhno',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'customernm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hhvsl',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'kcomcd',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hhlinernm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'userId',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'userNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'custNmDetail',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'linerNmDetail',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'hhvslDetail',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'calendar',id:'hhetdDetail',displayMode:'label',displayFormat:'yyyy/MM/dd',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'calendar',id:'hhetaDetail',displayMode:'label',displayFormat:'yyyy/MM/dd',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'loadNmDetail',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'discNmDetail',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'deptNmDetail',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',excelCellType:'number',id:'wtDetail',displayMode:'label',dataType:'number',textAlign:'right',displayFormatter:'scwin.getFloorValue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',excelCellType:'number',id:'sellAmtDetail',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',excelCellType:'number',id:'pchsAmtDetail',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',excelCellType:'number',id:'profitDetail',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',excelCellType:'number',id:'profitPerDetail',displayMode:'label',dataType:'number',textAlign:'right',displayFormatter:'scwin.getFloorValue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',excelCellType:'number',id:'pchsPerDetail',displayMode:'label',dataType:'number',textAlign:'right',displayFormatter:'scwin.getFloorValue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'itemNmDetail',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'bkNoDetail',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pnNmDetail',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'loadCdDetail',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'discCdDetail',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'arNmDetail',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'cntyNmDetail',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'salesNmDetail',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pkgDetail',displayMode:'label',dataType:'number',displayFormat:'#,##0',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'hhondtDetail',displayMode:'label',displayFormat:'yyyy/MM/dd',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNoDetail',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column123',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column122',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column121',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column120',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column119',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column118',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column117',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column116',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column115',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column114',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column113',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column112',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column111',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column110',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column109',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column108',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column107',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column106',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column104',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column103',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'wtDetail\')',dataType:'number',displayFormatter:'scwin.finalSumFormatter',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column102',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',expression:'SUM(\'sellAmtDetail\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column101',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',expression:'SUM(\'pchsAmtDetail\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column100',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',expression:'SUM(\'profitDetail\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column99',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'profitPerDetail\')',dataType:'number',displayFormatter:'scwin.finalSumFormatter',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column98',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'pchsPerDetail\')',dataType:'number',displayFormatter:'scwin.finalSumFormatter',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column95',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column94',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column92',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column91',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column89',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column88',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_edit',style:'',type:'button','ev:onclick':'scwin.btn_edit_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'SerialPrint'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Print'}]}]}]}]}]}]}]}]}]})