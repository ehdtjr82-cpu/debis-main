/*amd /ui/il/acc/acpay/ac_107_01_01b.xml 46392 b892a5669d1d223bbb271b70a15f8ea3ac67e993b91c37e516447b8041a487da */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Invoice',saveRemovedData:'true','ev:ondataload':'scwin.ds_Invoice_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'Currow',name:'No',dataType:'',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'seaair',name:'AIR/OCEAN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'M B/L NO',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'blno',name:'H B/L NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'Currency',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm1',name:'Shipper',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltno',name:'FLT No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngnm1',name:'Materials',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mftpkg',name:'Package',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mftwht',name:'Gross Weight',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tcwht',name:'Chargeable W/T(Kg)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'rton',name:'R/TON',dataType:'',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'ondt',name:'ETD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'avdt',name:'ETA',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpcd',name:'Port(From)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dscd',name:'Port(To)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'aaf',name:'A/F Total',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rate',name:'Rate',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ccf',name:'CCF',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thc',name:'THC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doc',name:'DOC/DOCV',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wfg',name:'WFG',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slc',name:'SLC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ccc',name:'CCC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'psf',name:'PSF',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsg',name:'TSG',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trcv',name:'TRCV/TRDV',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oth',name:'Other CHG',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iogb',name:'',dataType:''}},{T:1,N:'w2:column',A:{id:'total',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'custnm',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carrnm',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trcvnm',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpnm',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsnm',name:'name36',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_SearchParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seaair',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iogb',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prtnGrpNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsLodeptCd',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsIntendDtFrom',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsIntendDtTo',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.acc.acpay.RetrievePaymentInvoiceListCMD2.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_SearchParam","key":"IN_DS1"},{"id":"ds_Invoice","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_Invoice","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/js/il/ilcommon.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.txt_countRow = "";
scwin.hid_kcomcd = "DBEX"; //대표거래처 코드
scwin.hid_lobranCd = ""; //업무담당자구분코드

scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.strPreDate = $c.date.addMonth($p, scwin.strCurDate, -1); //한달전

scwin.userId = $c.data.getMemInfo($p, "userId"); //사용자
scwin.loginClntNo = $c.data.getMemInfo($p, "clntNo") == null ? "-" : $c.data.getMemInfo($p, "clntNo");
scwin.loginClntNm = $c.data.getMemInfo($p, "clntNm") == null ? "" : $c.data.getMemInfo($p, "clntNm"); //거래처명
scwin.userClsCd = $c.data.getMemInfo($p, "userClsCd"); // 사용자 구분코드

scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  scwin.f_DefaultValue();
};
scwin.f_DefaultValue = function () {
  lc_jobgb.setValue("S");
  lc_iogb.setValue("O");
  udc_fromToCalendar.setInitDate(scwin.strPreDate, scwin.strCurDate); //udc

  // 내부거래처 이외에는 user 정보로 read only
  if (scwin.userClsCd != '01') {
    ed_cncd.setValue(scwin.loginClntNo);
    ed_cnnm.setValue(scwin.loginClntNm);
    $c.gus.cfDisableObjects($p, [ed_cncd, ed_cnnm]);
  } else {
    $c.gus.cfEnableObjects($p, [ed_cncd, ed_cnnm]);
  }
};
scwin.f_PopUp = async function (disGubun, chgGubun) {
  switch (disGubun) {
    case 'Customer':
      //거래처 팝업(Search Partner)
      udc_ilcomCode_crn.setSelectId('retrieveEngClntInfo');
      udc_ilcomCode_crn.ilCommonPopUp(scwin.udc_ilcomCode_crn_callBackFunc, ed_cncd.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      ed_cnnm.getValue(),
      // 화면에서의 ??? Name Element의	Value                                  
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '5',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Customer',
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
      'F',
      // 전체검색허용여부	("F")                                                  
      'Customer Search,Customer Code,Customer Name'); // 
      break;
    case 'Pic':
      //거래처 팝업(Customer)
      let pParam = ed_cncd.getValue().trim();
      if (pParam == "") {
        await $c.win.alert($p, $c.data.getMessage($p, E_MSG_CM_ERR_056, "Customer")); // 선택된 @이(가) 없습니다.
        ed_cncd.focus();
        return;
      }
      udc_ilcomCode_anno.setSelectId('retrieveClntPicInfo');
      udc_ilcomCode_anno.ilCommonPopUp(scwin.udc_ilcomCode_anno_callBackFunc, ed_anno.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      ed_annm.getValue(),
      // 화면에서의 ??? Name Element의	Value                                  
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '4',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      "PIC",
      // Title순서	                                                           
      //'80,200,120,300',             // 보여주는 각 컬럼들의 폭	                                               
      '100,350',
      // 보여주는 각 컬럼들의 폭	                                               
      null,
      // 컬럼중에서 숨기는	컬럼 지정	                                       
      pParam,
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
      "T",
      // 전체검색허용여부	("F")                                                  
      null); // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")  			
      break;
    case 'Bic':
      //거래처 팝업(Search Partner)
      udc_ilcomCode_admin.setSelectId('retrieveEmpDeptInfoLo');
      udc_ilcomCode_admin.ilCommonPopUp(scwin.udc_ilcomCode_admin_callBackFunc, ed_adminPic.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      ed_adminPicNm.getValue(),
      // 화면에서의 ??? Name Element의	Value                                  
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '5',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      "BIC",
      // Title순서	                                                           
      //'80,200,120,300',             // 보여주는 각 컬럼들의 폭	                                               
      '100,100,,,100',
      // 보여주는 각 컬럼들의 폭	                                               
      '3,4,6,7,8,9,10',
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
      "F",
      // 전체검색허용여부	("F")                                                  
      null); // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")  							
      break;
    case 'Department':
      udc_ilcomCode_dept.setSelectId('retrieveOpDeptCdInfo');
      udc_ilcomCode_dept.ilCommonPopUp(scwin.udc_ilcomCode_dept_callBackFunc, ed_dept.getValue().trim(), ed_deptnm.getValue(), "T", '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", "Department,Code,Name", "F");
      break;
    default:
      break;
  }
};

//초기화
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_DefaultValue();
};

//customer pop
scwin.udc_ilcomCode_crn_onclickEvent = function (e) {
  scwin.f_PopUp('Customer', 'F');
};
scwin.udc_ilcomCode_crn_onblurCodeEvent = function (e) {
  if (ed_cncd.getValue() != "") {
    scwin.f_PopUp('Customer', 'T');
  } else {
    ed_cnnm.setValue("");
  }
};
scwin.udc_ilcomCode_crn_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('Customer', 'T');
};
scwin.udc_ilcomCode_crn_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cncd, ed_cnnm);
};

//department pop
scwin.udc_ilcomCode_dept_onclickEvent = function (e) {
  scwin.f_PopUp('Department', 'T');
};
scwin.udc_ilcomCode_dept_onblurCodeEvent = function (e) {
  //ASIS에 동작이 없다.	
};
scwin.udc_ilcomCode_dept_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('Department', 'F');
};
scwin.udc_ilcomCode_dept_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dept, ed_deptnm);
};

//담당자 pop
scwin.udc_ilcomCode_anno_onclickEvent = function (e) {
  scwin.f_PopUp('Pic', 'T');
};
scwin.udc_ilcomCode_anno_onblurCodeEvent = function (e) {};
scwin.udc_ilcomCode_anno_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('Pic', 'F');
};
scwin.udc_ilcomCode_anno_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_anno, ed_annm, ed_cncd);
};

//업무담당자 pop
scwin.udc_ilcomCode_admin_onclickEvent = function (e) {
  scwin.f_PopUp('Bic', 'F');
};
scwin.udc_ilcomCode_admin_onblurCodeEvent = function (e) {};
scwin.udc_ilcomCode_admin_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('Bic', 'T');
};
scwin.udc_ilcomCode_admin_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_adminPic, ed_adminPicNm, ["", "", scwin.hid_lobranCd]);
};

//조회
scwin.btn_retrieve_onclick = function (e) {
  dma_SearchParam.set("kcomcd", "DBEX"); //대표거래처코드

  $c.sbm.execute($p, sbm_retrieve);
};

//조회callback
scwin.sbm_retrieve_submitdone = function () {};

// 조회된 데이터 적재 완료시
scwin.ds_Invoice_ondataload = function () {
  let nCnt = ds_Invoice.getRowCount();
  if (nCnt == 0) {
    $c.win.alert($p, E_MSG_CM_WRN_002);
    return false;
  }
  gr_Invoice.setFocusedCell(0, 0);
  gr_Invoice2.setFocusedCell(0, 0);
  total.setValue(nCnt);
  total2.setValue(nCnt);
  if (lc_jobgb.getValue() == "S") {
    gr_Invoice.setHeaderValue("aaf_header", "O/F Total");
    gr_Invoice.setColumnVisible("fltno", false);
    gr_Invoice2.setHeaderValue("aaf_header", "O/F Total");
    gr_Invoice2.setColumnVisible("fltno", false);
  } else {
    gr_Invoice.setHeaderValue("aaf_header", "A/F Total");
    gr_Invoice.setColumnVisible("fltno", true);
    gr_Invoice2.setHeaderValue("aaf_header", "A/F Total");
    gr_Invoice2.setColumnVisible("fltno", true);
  }
};
scwin.ed_prtnGrpNo_onblur = function (e) {
  let str = (ed_prtnGrpNo.getValue() ?? "").toUpperCase().trim();
  if (str.length > 0) {
    ed_prtnGrpNo.setValue(str);
  }
};
scwin.ed_certiNo_onblur = function (e) {
  let str = (ed_certiNo.getValue() ?? "").toUpperCase().trim();
  if (str.length > 0) {
    ed_certiNo.setValue(str);
  }
};
scwin.ed_slipNo_onblur = function (e) {
  let str = (ed_slipNo.getValue() ?? "").toUpperCase().trim();
  if (str.length > 0) {
    ed_slipNo.setValue(str);
  }
};

//출력
scwin.btn_print_onclick = async function (e) {
  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  if (lc_jobgb.getValue() == "") {
    await $c.win.alert($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, ["Job Type"]));
    lc_jobgb.focus();
    return;
  }
  //Print Option 입력 요구
  // 2013년 4월 30일 추가
  if (ed_prtnGrpNo.getValue() == "" && ed_certiNo.getValue() == "" && ed_slipNo.getValue() == "" && ed_cncd.getValue() == "" && ed_dept.getValue() == "") {
    await $c.win.alert($p, "Print Option을 하나 이상 입력해 주세요.");
    ed_prtnGrpNo.focus();
    return;
  }

  //Print Option 입력 요구
  if (ed_bldtfrom.getValue() == "" || ed_bldtto.getValue() == "") {
    await $c.win.alert($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, ["ETD"]));
    ed_bldtfrom.focus();
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_bldtfrom.getValue(), ed_bldtto.getValue(), false)) {
    await $c.win.alert($p, E_MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    return;
  }
  let viewerParam = {
    useprogressbar: false
  };
  let formParam = {};
  let data = undefined;
  let jobgb = lc_jobgb.getValue();
  switch (jobgb) {
    case "S":
      data = {
        odiName: "ac_107_01_01",
        reportName: "/il/acc/ac_107_01_01.ozr",
        odiParam: {
          KCOMCD: scwin.hid_kcomcd,
          IOGB: lc_iogb.getValue(),
          SEAAIR: lc_jobgb.getValue(),
          FROM_DT: ed_bldtfrom.getValue(),
          TO_DT: ed_bldtto.getValue(),
          PCHS_CLNT_NO: ed_cncd.getValue(),
          PCHS_DEPT_CD: ed_dept.getValue(),
          CNNM: ed_cnnm.getValue(),
          ANNM: ed_annm.getValue(),
          ADMINPIC: ed_adminPicNm.getValue(),
          LOBRANCD: scwin.hid_lobranCd,
          CERTI_NO: ed_certiNo.getValue(),
          PRTN_GRP_NO: ed_prtnGrpNo.getValue(),
          SLIP_NO: ed_slipNo.getValue()
        },
        viewerParam: viewerParam,
        formParam: formParam
      };
      break;
    case "A":
      data = {
        odiName: "ac_107_01_01_air",
        reportName: "/il/acc/ac_107_01_01_air.ozr",
        odiParam: {
          KCOMCD: scwin.hid_kcomcd,
          IOGB: lc_iogb.getValue(),
          SEAAIR: lc_jobgb.getValue(),
          FROM_DT: ed_bldtfrom.getValue(),
          TO_DT: ed_bldtto.getValue(),
          CUST: ed_cncd.getValue(),
          DEPT: ed_dept.getValue(),
          CERTI_NO: ed_certiNo.getValue(),
          PRTN_GRP_NO: ed_prtnGrpNo.getValue(),
          SLIP_NO: ed_slipNo.getValue()
        },
        viewerParam: viewerParam,
        formParam: formParam
      };
      break;
    case "T":
      data = {
        odiName: "ac_107_01_01_trans",
        reportName: "/il/acc/ac_107_01_01_trans.ozr",
        odiParam: {
          KCOMCD: scwin.hid_kcomcd,
          IOGB: lc_iogb.getValue(),
          SEAAIR: lc_jobgb.getValue(),
          FROM_DT: ed_bldtfrom.getValue(),
          TO_DT: ed_bldtto.getValue(),
          CUST: ed_cncd.getValue(),
          DEPT: ed_dept.getValue(),
          CERTI_NO: ed_certiNo.getValue(),
          PRTN_GRP_NO: ed_prtnGrpNo.getValue(),
          SLIP_NO: ed_slipNo.getValue()
        },
        viewerParam: viewerParam,
        formParam: formParam
      };
      break;
  }
  scwin.openOzPopup(data);
};
scwin.openOzPopup = async function (data) {
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Job Type',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'lc_jobgb',chooseOption:'',style:'width:148px; height:21px; ',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'data:dma_SearchParam.seaair'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Sea'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Air'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Trans'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'T'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Export/Import',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{id:'lc_iogb',chooseOption:'',style:'width:148px; height:21px; ',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'data:dma_SearchParam.iogb'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ALL'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'pchsIntendDtFrom',refDataMap:'dma_SearchParam',style:'',id:'udc_fromToCalendar',refEdDt:'pchsIntendDtTo',edFromId:'ed_bldtfrom',edToId:'ed_bldtto'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Print Option',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Invoice Group No',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_prtnGrpNo',placeholder:'',style:'width:150px;text-transform:uppercase;',maxlength:'16',allowChar:'0-9a-zA-Z',ref:'data:dma_SearchParam.prtnGrpNo','ev:onblur':'scwin.ed_prtnGrpNo_onblur'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Invoice No',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_certiNo',placeholder:'',style:'width:150px;text-transform:uppercase;',maxlength:'16',allowChar:'0-9a-zA-Z',ref:'data:dma_SearchParam.certiNo','ev:onblur':'scwin.ed_certiNo_onblur'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Slip No',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_slipNo',placeholder:'',style:'width:150px;text-transform:uppercase;',maxlength:'16',allowChar:'0-9a-zA-Z',ref:'data:dma_SearchParam.slipNo','ev:onblur':'scwin.ed_slipNo_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Customer ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_cncd',nameId:'ed_cnnm',popupID:'',selectID:'retrieveEngClntInfo',style:'width: 300px;',validTitle:'',id:'udc_ilcomCode_crn','ev:onclickEvent':'scwin.udc_ilcomCode_crn_onclickEvent','ev:onblurCodeEvent':'scwin.udc_ilcomCode_crn_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_ilcomCode_crn_onviewchangeNameEvent',allowCharCode:'0-9a-zA-Z',maxlengthCode:'6',UpperFlagCode:'1',refDataCollection:'dma_SearchParam',code:'pchsClntNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Department',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_dept',nameId:'ed_deptnm',popupID:'',selectID:'retrieveOpDeptCdInfo',style:'width: 300px;',validTitle:'',id:'udc_ilcomCode_dept','ev:onclickEvent':'scwin.udc_ilcomCode_dept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_ilcomCode_dept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_ilcomCode_dept_onviewchangeNameEvent',maxlengthCode:'6',UpperFlagCode:'0',allowCharCode:'0-9a-zA-Z',code:'pchsLodeptCd',refDataCollection:'dma_SearchParam'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Display Option',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'담당자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_anno',nameId:'ed_annm',popupID:'',selectID:'retrieveClntPicInfo',style:'width: 300px;',validTitle:'',id:'udc_ilcomCode_anno',maxlengthCode:'2',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_ilcomCode_anno_onclickEvent','ev:onblurCodeEvent':'scwin.udc_ilcomCode_anno_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_ilcomCode_anno_onviewchangeNameEvent',allowCharCode:'0-9a-zA-Z'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'업무담당자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_adminPic',nameId:'ed_adminPicNm',popupID:'',selectID:'retrieveEmpDeptInfoLo',style:'width: 300px;',validTitle:'',id:'udc_ilcomCode_admin',UpperFlagCode:'0',maxlengthCode:'6',allowCharCode:'0-9','ev:onclickEvent':'scwin.udc_ilcomCode_admin_onclickEvent','ev:onblurCodeEvent':'scwin.udc_ilcomCode_admin_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_ilcomCode_admin_onviewchangeNameEvent'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_print',style:'',type:'button','ev:onclick':'scwin.btn_print_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Print'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'true',class:'wq_tab',id:'tac_tabControl1',style:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'TAB1',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'TAB2',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content1',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_Invoice',gridUpYn:'N',btnPlusYn:'Y',grdDownOpts:'{"fileName":"PaymentInvoiceList.xlsx", "sheetName": "PaymentInvoiceList"}',gridDownUserAuth:'X',gridDownYn:'Y',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_Invoice',id:'gr_Invoice',style:'',visibleRowNum:'10',visibleRowNumFix:'true',focusMove:'true',readOnly:'true',rowNumHeaderValue:'No',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'No',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'AIR/OCEAN',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'M B/L NO',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'H B/L NO',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'Currency',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'Shipper',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'FLT No',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'Materials',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'Package',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'Gross Weight',width:'110'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column57',value:'Chargeable W/T(Kg)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'R/TON',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'ETD',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'ETA',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'Port(From)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'Port(To)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'aaf_header',value:'A/F Total',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'Rate',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'CCF',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'THC',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'DOC/DOCV',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'WFG',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'SLC',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'CCC',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'PSF',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'TSG',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'TRCV/TRDV',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'Other CHG',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'Currow',inputType:'expression',width:'70',expression:'rowIndex() +1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seaair',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mblno',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blno',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shnm1',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fltno',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ngnm1',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mftpkg',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mftwht',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tcwht',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cbm',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rton',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ondt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'avdt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dpcd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dscd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'aaf',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rate',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ccf',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'thc',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doc',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wfg',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slc',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ccc',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'psf',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tsg',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'trcv',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'oth',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content2',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',btnPlusYn:'Y',btnUser:'N',gridUpYn:'N',gridID:'gr_Invoice2',grdDownOpts:'{"fileName":"PaymentInvoiceList.xlsx", "sheetName": "PaymentInvoiceList"}',gridDownYn:'Y',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_Invoice',id:'gr_Invoice2',style:'',visibleRowNum:'10',visibleRowNumFix:'true',focusMove:'true',readOnly:'true',rowNumHeaderValue:'No',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'No',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'AIR/OCEAN',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'M B/L NO',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'H B/L NO',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'FLT No',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'고객사명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'선사/부킹대리점',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'운송협력사',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'Port Nm(From)',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'Port CD(From)',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column61',value:'Port Nm(To)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column59',value:'Port CD(To)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'Package',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column55',value:'Gross Weight',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column53',value:'Chargeable W/T(Kg)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'R/TON',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'ETD',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'ETA',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'Rate',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'aaf_header',value:'A/F Total',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'CCF',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'THC',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'DOC/DOCV',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'WFG',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'SLC',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'CCC',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'PSF',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'TSG',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',value:'TRCV/TRDV',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',value:'Other CHG',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column63',value:'Total Amount',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'Currow',inputType:'expression',width:'70',expression:'rowIndex() +1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seaair',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mblno',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blno',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fltno',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'custnm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'carrnm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trcvnm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dpnm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dpcd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dsnm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dscd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mftpkg',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mftwht',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'tcwht',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cbm',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rton',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ondt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'avdt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rate',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'aaf',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ccf',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'thc',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doc',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wfg',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slc',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ccc',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'psf',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tsg',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'trcv',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'oth',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'total',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]}]}]})