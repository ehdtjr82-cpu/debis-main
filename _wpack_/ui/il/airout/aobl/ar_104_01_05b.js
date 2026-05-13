/*amd /ui/il/airout/aobl/ar_104_01_05b.xml 22349 a0aaf9f5659263d7b7f60d191078058eb8f49c93064bebc97a15f5c9589ee6f8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_mhno'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mhno',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_printCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seaAirCls',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblHblCls',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'issueYn',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inpid',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inpdt',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'updid',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upddt',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_printResult',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaAirCls',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblHblCls',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'issueYn',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveBlPrintAdmission',action:'/il.airout.aobl.RetrieveAirBlPrintAdmissionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_printCondition", "key":"IN_DS1"}, {"id":"ds_printResult", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_printResult","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveBlPrintAdmission_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_mhno',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_mhno","key":"IN_DS1"}',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_mhno_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//---------------------------------------------------------
// 전역변수
//---------------------------------------------------------   
scwin.hd_kcomcd = "DBEX";
scwin.hd_iogb = "O";
scwin.p_kcomcd;
scwin.p_blno;
scwin.p_mhno;
scwin.p_clntNo;
scwin.userClsCd;
scwin.onpageload = function () {
  /*
  const codeOptions = [
      { grpCd: "", compID: "" } 
  ];
  $c.data.setCommonCode(codeOptions, scwin.setInit);
  */
};

//---------------------------------------------------------
// UDC
//---------------------------------------------------------    
scwin.onUdcCompleted = function () {
  scwin.p_kcomcd = $c.data.getParameter($p, "kcomcd");
  scwin.p_blno = $c.data.getParameter($p, "blno");
  scwin.p_mhno = $c.data.getParameter($p, "mhno");
  let memJson = $c.data.getMemInfo($p);
  console.log("### onpageload :: " + JSON.stringify(memJson));
  scwin.userClsCd = memJson.userClsCd;
  ed_custcd.setValue(memJson.clntNo);
  if (ed_custcd.getValue() != "") {
    scwin.f_PopUp("Consolidator", "T", "F", "F");
  }
  var yaho = $c.gus.dsCommonUtil($p, "getCompanyInfoDTO", memJson.lobranCd);
  clntNo = yaho[0].value.split("clntNo = [")[1].split("]")[0];
  ed_custcd.setValue(clntNo);
  scwin.udc_cust_onviewchangeCodeEvent();
  scwin.f_getParametrSetting(); // link처리	  
};
//---------------------------------------------------------
// 사용자 함수
//---------------------------------------------------------   
scwin.codeCallbackFunc = function () {};
scwin.f_getParametrSetting = function () {
  var kcomcd = scwin.p_kcomcd;
  var blno = scwin.p_blno;
  var mhno = scwin.p_mhno;
  if (blno == null || blno == '') {
    return false;
  }
  scwin.hd_kcomcd = kcomcd;
  ed_blno.setValue(blno);
  scwin.f_MhnoLoading();
};
scwin.f_PopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var codeVal = ed_custcd.getValue();
  var nameVal = txt_conm.getValue();
  ed_custcd.setValue("");
  txt_conm.setValue("");
  txt_add1.setValue("");
  txt_add2.setValue("");
  txt_add3.setValue("");
  txt_add4.setValue("");
  switch (disGubun) {
    case "Consolidator":
      //Search Customer
      udc_cust.setSelectId("retrieveEngClntInfo");
      udc_cust.ilCommonPopUp(scwin.udc_cust_callbackFunc, codeVal,
      // 화면에서의 ??? Code Element의	Value                                  
      nameVal,
      // 화면에서의 ??? Name Element의	Value                                  
      pWinCloseTF,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '6',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Consolidator',
      // Title순서	                                                           
      '140,300',
      // 보여주는 각 컬럼들의 폭	                                               
      null,
      // 컬럼중에서 숨기는	컬럼 지정	                                       
      null,
      // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
      '500',
      // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
      '500',
      // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
      null,
      // 윈도우 위치 Y좌표	                                                   
      null,
      // 윈도우 위치 X좌표                                                       
      null,
      // 중복체크여부	("F")                                                      
      pAllSearchTF,
      // 전체검색허용여부	("F")                                                  
      null,
      // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")  
      pNoDataCloseTF);
      break;
    default:
      break;
  }
};
scwin.udc_cust_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_custcd, txt_conm, [txt_add1, txt_add2, txt_add3, txt_add4]);
};
scwin.f_MhnoLoading = function () {
  var strClntNo = "";
  strClntNo = ed_blno.getValue();
  param1 = "";
  if (strClntNo.length > 0) {
    param1 = strClntNo;
  } else {
    ds_mhno.removeAll();
  }
  const params = {
    sysCd: "ilCommonEBC",
    queryId: "retriveAirHouseMhnoListCombo",
    param1: param1
  };

  //데이터셋에 정보설정
  dma_mhno.setJSON(params);
  $c.sbm.execute($p, sbm_mhno);
};
scwin.f_openPgm = function (name) {
  switch (name) {
    case "AirExportHouseBL":
      var src = "";
      var menuId = "11111";
      if (ed_blno.getValue() == null || ed_blno.getValue() == "") {
        $c.win.alert($p, "Input House B/L No");
        break;
      }
      src = "/ui/il/airout/aobl/ar_104_01_01b.xml";
      paramObj = {};
      paramObj = {
        cvsslMgntNo: "",
        kcomcd: "",
        blno: ed_blno.getValue(),
        mblno: "",
        type: ""
      };
      $c.win.openMenu($p, "Export House B/L", src, menuId, paramObj);
      break;
    default:
      break;
  }
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [tb_searchCondition]);
  ds_mhno.removeAll();

  //default 동부국제물류
  ed_custcd.setValue(scwin.p_clntNo);
  if (ed_custcd.getValue() != "") {
    scwin.f_PopUp("Consolidator", "T", "F", "F");
  }
  ed_blno.focus();
};
scwin.f_Print = function () {
  var as_arranged = chb_arranged.getValue();
  var as_agreed = chb_agreed.getValue();
  var blType = lc_regb.getValue();
  if (scwin.userClsCd != "01") {
    ds_printCondition.set("kcomcd", scwin.hd_kcomcd);
    ds_printCondition.set("blno", ed_blno.getValue());
    ds_printCondition.set("mhno", lc_mhno.getValue());
    ds_printCondition.set("seaAirCls", "A");
    ds_printCondition.set("mblHblCls", "H");
    $c.sbm.execute($p, sbm_RetrieveBlPrintAdmission);
  } else if (scwin.userClsCd == "01") {
    var data = {};
    sReportName = "";
    if (lc_blgb.getSelectedIndex() == 0) {
      sReportName = "/il/airout/ar_104_01_06.ozr";
    } else {
      sReportName = "/il/airout/ar_104_01_05.ozr";
    }
    data = {
      odiName: "ar_104_01_05",
      reportName: sReportName,
      odiParam: {
        KCOMCD: scwin.hd_kcomcd,
        BLNO: ed_blno.getValue(),
        MHNO: lc_mhno.getValue(),
        AS_AGREED: as_agreed,
        AS: as_arranged,
        PRINT_TYPE: blType,
        COM_NM: txt_conm.getValue(),
        COM_ADDR1: txt_add1.getValue(),
        COM_ADDR2: txt_add2.getValue(),
        COM_ADDR3: txt_add3.getValue(),
        COM_ADDR4: txt_add4.getValue()
      },
      viewerParam: {
        useprogressbar: false,
        // 프로그레스바 쓸지 말지
        printcommand: true,
        zoom: 90 // 배율 설정
      },
      formParam: {}
    };
    console.log(JSON.stringify(data, null, 4));
    scwin.openOzReportPopup(data);
  }
};
scwin.f_Print2 = function () {
  var as_arranged = chb_arranged.getValue();
  var as_agreed = chb_agreed.getValue();
  var blType = lc_regb.getValue();
  if (scwin.userClsCd != "01") {
    ds_printCondition.set("kcomcd", scwin.hd_kcomcd);
    ds_printCondition.set("blno", ed_blno.getValue());
    ds_printCondition.set("mhno", lc_mhno.getValue());
    ds_printCondition.set("seaAirCls", "A");
    ds_printCondition.set("mblHblCls", "H");
    $c.sbm.execute($p, sbm_RetrieveBlPrintAdmission);
  } else if (scwin.userClsCd == "01") {
    var data = {};
    sReportName = "";
    if (lc_blgb.getSelectedIndex() == 0) {
      sReportName = "/il/airout/ar_104_01_06.ozr";
    } else {
      sReportName = "/il/airout/ar_104_01_07.ozr";
    }
    data = {
      odiName: "ar_104_01_05",
      reportName: sReportName,
      odiParam: {
        KCOMCD: scwin.hd_kcomcd,
        BLNO: ed_blno.getValue(),
        MHNO: lc_mhno.getValue(),
        AS_AGREED: as_agreed,
        AS: as_arranged,
        PRINT_TYPE: blType,
        COM_NM: txt_conm.getValue(),
        COM_ADDR1: txt_add1.getValue(),
        COM_ADDR2: txt_add2.getValue(),
        COM_ADDR3: txt_add3.getValue(),
        COM_ADDR4: txt_add4.getValue()
      },
      viewerParam: {
        useprogressbar: false,
        // 프로그레스바 쓸지 말지
        printcommand: true,
        zoom: 90 // 배율 설정
      },
      formParam: {}
    };
    console.log(JSON.stringify(data, null, 4));
    scwin.openOzReportPopup(data);
  }
};
scwin.openOzReportPopup = async function (data) {
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
//---------------------------------------------------------
// 컴포넌트 이벤트
//---------------------------------------------------------   
scwin.sbm_mhno_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    ds_mhno.setJSON(e.responseJSON.GAUCE);
  }
  ds_mhno.sort("code", 0);
  lc_mhno.focus();
};
scwin.udc_cust_onclickEvent = function (e) {
  scwin.f_PopUp('Consolidator', 'F', 'F', 'F');
};
scwin.udc_cust_onviewchangeCodeEvent = function (info) {
  var strClntNo = ed_custcd.getValue();
  if (strClntNo.length > 0) {
    txt_conm.setValue("");
    scwin.f_PopUp("Consolidator", "T", "F", "F");
  } else {
    txt_conm.setValue("");
    txt_add1.setValue("");
    txt_add2.setValue("");
    txt_add3.setValue("");
    txt_add4.setValue("");
  }
};
scwin.btn_dimens_onclick = function (e) {
  scwin.f_openPgm('AirExportHouseBL');
};
scwin.btn_clear_onclick = function (e) {
  lc_blgb.setSelectedIndex(0);
  lc_regb.setSelectedIndex(0);
  chb_agreed.setValue("");
  chb_arranged.setValue("");
  ed_blno.setValue("");
  txt_conm.setValue("");
  txt_add1.setValue("");
  txt_add2.setValue("");
  txt_add3.setValue("");
  txt_add4.setValue("");
  ed_custcd.setValue("");
  ed_custNm.setValue("");
  ds_mhno.removeAll();

  //default 동부국제물류
  ed_custcd.setValue(scwin.p_clntNo || "NULL");
  if (ed_custcd.getValue() != "") {
    scwin.f_PopUp("Consolidator", "T", "F", "F");
  }
  ed_blno.focus();
};
scwin.btn_print_onclick = function (e) {
  scwin.f_Print();
};
scwin.btn_print2_onclick = function (e) {
  scwin.f_Print2();
};
scwin.sbm_RetrieveBlPrintAdmission_submitdone = function (e) {
  var as_arranged = chb_arranged.getValue();
  var as_agreed = chb_agreed.getValue();
  var blType = lc_regb.getValue();
  if (scwin.userClsCd != "01") {
    if (ds_printResult.getTotalRow() == 0 || ds_printResult.Namevalue(1, "issueYn") == 0) {
      $c.win.alert($p, "해당 B/L은 발행 승인이 되지 않은 B/L입니다. \n" + "Export House B/L 화면에서 발행 승인 후 Print가 가능합니다.");
      return;
    } else {
      var data = {};
      sReportName = "";
      if (lc_blgb.getSelectedIndex() == 0) {
        sReportName = "/il/airout/ar_104_01_06.ozr";
      } else {
        sReportName = "/il/airout/ar_104_01_07.ozr";
      }
      data = {
        odiName: "ar_104_01_05",
        reportName: sReportName,
        odiParam: {
          KCOMCD: scwin.hd_kcomcd,
          BLNO: ed_blno.getValue(),
          MHNO: lc_mhno.getValue(),
          AS_AGREED: as_agreed,
          AS: as_arranged,
          PRINT_TYPE: blType,
          COM_NM: txt_conm.getValue(),
          COM_ADDR1: txt_add1.getValue(),
          COM_ADDR2: txt_add2.getValue(),
          COM_ADDR3: txt_add3.getValue(),
          COM_ADDR4: txt_add4.getValue()
        },
        viewerParam: {
          useprogressbar: false,
          // 프로그레스바 쓸지 말지
          printcommand: true,
          zoom: 90 // 배율 설정
        },
        formParam: {}
      };
      console.log(JSON.stringify(data, null, 4));
      scwin.openOzReportPopup(data);
    }
  }
};
scwin.ed_blno_onviewchange = function (info) {
  if (this.getValue() == "") {
    ds_mhno.removeAll();
    return;
  }
  scwin.f_MhnoLoading();
};
scwin.oneditkeyup = function (info, e) {
  this.setValue(e.target.value.toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_dimens',type:'button',class:'btn link','ev:onclick':'scwin.btn_dimens_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Export House B/L'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_print',style:'',type:'button','ev:onclick':'scwin.btn_print_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Print'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_print2',style:'',type:'button','ev:onclick':'scwin.btn_print2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Print(New)'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:180px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:180px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L Type',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_blgb',style:'',submenuSize:'fixed',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Neutral'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'L'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Check B/L'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Report Type',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_regb',style:'',submenuSize:'fixed',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Normal'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Charge not print'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Other charge not print'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Air Freight charge not print'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House B/L No',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_blno',style:'',allowChar:'0-9|a-z|A-Z',validateOnInput:'true',maxByteLength:'20','ev:oneditkeyup':'scwin.oneditkeyup','ev:onblur':'scwin.ed_blno_onviewchange'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consol No',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_mhno',style:'',submenuSize:'fixed',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_mhno'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th vat',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consolidator & Address',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',selectID:'',codeId:'ed_custcd',validTitle:'',nameId:'ed_custNm',style:'width:%; height:px; ',btnId:'img_PopUp8',id:'udc_cust',hideName:'true','ev:onclickEvent':'scwin.udc_cust_onclickEvent',UpperFlagCode:'1',allowCharCode:'0-9|a-z|A-Z',maxlengthCode:'7',skipOnBlurCodeValueEmpty:'N','ev:onviewchangeNameEvent':'scwin.udc_cust_onviewchangeCodeEvent'}},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_agreed',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'N'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'AS AGREED'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_arranged',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'N'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'AS PRINT '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-4'},E:[{T:1,N:'xf:input',A:{style:'',id:'txt_conm',class:''}},{T:1,N:'xf:input',A:{style:'',id:'txt_add1',class:''}},{T:1,N:'xf:input',A:{style:'',id:'txt_add2',class:''}},{T:1,N:'xf:input',A:{style:'',id:'txt_add3',class:''}},{T:1,N:'xf:input',A:{style:'',id:'txt_add4',class:''}}]}]}]}]}]}]}]}]}]}]})