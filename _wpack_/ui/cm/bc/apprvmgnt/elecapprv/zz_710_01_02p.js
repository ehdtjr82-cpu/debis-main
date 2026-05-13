/*amd /ui/cm/bc/apprvmgnt/elecapprv/zz_710_01_02p.xml 27581 31a820d527e8f46dbbdc931e4da69fb5f8917f0534f50ffc32ae7e3b082374a3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_approveDetail'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'approveRequestNumber',name:'전자결재 요청번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_approveDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'check',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postReqDt',name:'회계요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drAmt',name:'차변금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crAmt',name:'대변금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drAmtFcrc',name:'차변(외화)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crAmtFcrc',name:'대변(외화)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntSummary',name:'관리적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsNm',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveDate',name:'거래일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizcondNm',name:'업종(업태)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptNm',name:'작성부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'작성자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKnd',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'perVehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorAddress',name:'가맹점주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'확정일자',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_approveDetail',action:'/cm.bc.apprvmgnt.elecapprv.RetrieveSlipApproveRequestDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_approveDetail',target:'data:json,{"id":"ds_approveDetail","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_approveDetail_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 자회사 아이디로 로그인 (198015/1111)
//  - 전자결재 요청번호 : 1414031 조회

scwin.onpageload = function () {
  scwin.approveRequestNumber = $c.data.getParameter($p, "approveRequestNumber") == null ? "" : $c.data.getParameter($p, "approveRequestNumber");
  scwin.apprReqNo = $c.data.getParameter($p, "apprReqNo") == null ? "" : $c.data.getParameter($p, "apprReqNo");
  scwin.vApproveRequestNumber = "";
  if (scwin.approveRequestNumber != "") {
    scwin.vApproveRequestNumber = scwin.approveRequestNumber;
  } else if (scwin.apprReqNo != "") {
    scwin.vApproveRequestNumber = scwin.apprReqNo;
  }
  approveRequestNumber.setValue(scwin.vApproveRequestNumber);
  // resizeTo(1280,710);
  if (approveRequestNumber.getValue() != "") {
    $c.gus.cfEnableObj($p, approveRequestNumber, false);
    $c.gus.cfDisableBtn($p, [b_Retrieve]);
  }
  chb_printCheck.setValue("1");
  scwin.f_Retrieve(0);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function (fw) {
  if (scwin.vApproveRequestNumber.trim() == "" && fw == "0") {
    $c.win.alert($p, "요청하신 전표결재요청의 요청번호가 입력되지 않았습니다.");
    return false;
  }
  if (fw == "1") scwin.vApproveRequestNumber = approveRequestNumber.getValue();
  // var condition = "?approveRequestNumber=" + vApproveRequestNumber;
  // ds_approveDetail.DataID = "/cm.bc.apprvmgnt.elecapprv.RetrieveSlipApproveRequestDetailCMD.do" + condition;
  // ds_approveDetail.Reset();
  dma_approveDetail.set("approveRequestNumber", scwin.vApproveRequestNumber);
  $c.sbm.execute($p, sbm_approveDetail);
};

//-------------------------------------------------------------------------
// 엑셀 Download
//-------------------------------------------------------------------------
scwin.f_Export = function () {
  if (ds_approveDetail.getTotalRow() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  fileName = '전자결요청 상세조회_' + approveRequestNumber.getValue();
  // cfGridToExcel(gr_approveDetail, fileName, fileName, 2 + 8 + 16);

  const grdObj = gr_approveDetail;
  const infoArr = [];
  const options = {
    fileName: fileName + ".xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: fileName
  };
  $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
};

//-------------------------------------------------------------------------
// 인쇄
//-------------------------------------------------------------------------

scwin.f_OzReport = async function () {
  // // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  // var odiParam = new ODIParam("zz_710_01_02p");
  // odiParam.add("sysPath", "dbl.cm.bc");
  // odiParam.add("approveRequestNumber", approveRequestNumber.getValue());

  // // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  // var formParam = new FormParam();

  // // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  // var viewerParam = new ViewerParam();

  // viewerParam.add("print.mode", "silent"); // 인쇄 옵션창 표시 없이 바로 출력\

  // // iframe     viewer        OZR 경로 및 파일명  ODI파라미터 뷰어파라미터       폼파라미터
  // $c.gus.cfOZReport(
  //     "chb_printCheck",
  //     "chb_previewCheck",
  //     "/cm/bc/zz_710_01_02p.ozr", odiParam, viewerParam, formParam
  // );
  //////////////////////////////////////////////////////////////////////

  var mode = "";
  if (chb_printCheck.getValue() == "1") {
    mode = "print";
  }
  if (chb_previewCheck.getValue() == "1") {
    mode = "preview";
  }
  const data = {
    odiName: "zz_710_01_02p",
    reportName: '/cm/bc/zz_710_01_02p.ozr',
    // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
    odiParam: {
      // sysPath: "dbl.cm.bc",
      approveRequestNumber: approveRequestNumber.getValue()
    },
    // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
    viewerParam: {
      mode: mode // 인쇄 옵션창 표시 없이 바로 출력\
    },
    // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
    formParam: {}
  };
  let options = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", options, data);
};

//-------------------------------------------------------------------------
//  예산실적
//-------------------------------------------------------------------------

scwin.f_Budget = function () {
  if (!$c.gus.cfValidate($p, [approveRequestNumber])) return false;
  var valueObject = new Object();
  valueObject.approveRequestNumber = approveRequestNumber.getValue().trim();
  let strPath = "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_01_04p.xml";
  let style = {
    id: "pupup",
    popupName: "",
    modal: true,
    type: "browserPopup",
    width: 1035,
    height: 600,
    title: ""
  };
  rtnList = $c.win.openPopup($p, strPath, style, valueObject);
};

//-------------------------------------------------------------------------
//  고정자산조회화면 호출 (TAB/POPUP)
//-------------------------------------------------------------------------
scwin.ShowfixedAsetInfo = function (fixedAsetNo) {
  //상세화면 Popup 호출
  if (typeof fixedAsetNo != "undefined" && fixedAsetNo != null && fixedAsetNo != "") {
    var valueObject = new Object();
    valueObject.fixedAsetNo = fixedAsetNo;
    let v_url = "/ui/ac/fi/fixedaset/fi_301_02_01p.xml";
    let opts = {
      id: "pupup",
      popupName: "고정자산조회팝업",
      modal: true,
      type: "browserPopup",
      width: 1550,
      height: 1200,
      title: ""
    };
    var data = {
      valueObject: valueObject,
      className: "view_pop"
    };
    rtnList = $c.win.openPopup($p, v_url, opts, valueObject, data);
  }
};

//-------------------------------------------------------------------------
// 부가세 e세로 대사 팝업 
//-------------------------------------------------------------------------  	
scwin.f_evidPopUp = function () {
  var valueObject = new Object();
  valueObject.apprReqNo = approveRequestNumber.getValue();
  let v_url = "/ui/ac/fi/taxbiz/evidmgnt/fi_403_01_02b.xml";
  let opts = {
    id: "pupup",
    popupName: "",
    modal: true,
    type: "browserPopup",
    width: 1500,
    height: 680,
    title: ""
  };
  rtnList = $c.win.openPopup($p, v_url, opts, valueObject);
};

//-------------------------------------------------------------------------
//  개인차량 유류비정산 호출 (TAB/POPUP)
//-------------------------------------------------------------------------
scwin.ShowPerVehclInfo = function (slipNo) {
  //상세화면 Popup 호출
  if (typeof slipNo != "undefined" && slipNo != null && slipNo != "") {
    var valueObject = new Object();
    valueObject.slipNo = slipNo;
    let v_url = "/ui/cm/bc/pervehcl/zz_510_01_02b.xml";
    let opts = {
      id: "pupup",
      popupName: "",
      modal: true,
      type: "browserPopup",
      width: 1010,
      height: 660,
      title: ""
    };
    rtnList = $c.win.openPopup($p, v_url, opts, valueObject);
  }
};

// for="ds_approveDetail" event="OnLoadCompleted(rowcnt)"
scwin.sbm_approveDetail_submitdone = function (e) {
  let rowcnt = ds_approveDetail.getTotalRow();
  totalRows.setValue(rowcnt);
  if (rowcnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    if (ds_approveDetail.getCellData(1, "slipKndCd") == "A27") {
      //개인차량정산 전표인경우
      gr_approveDetail.setColumnVisible("fixedAsetNo", false);
      gr_approveDetail.setColumnVisible("perVehclNo", true);
    } else {
      gr_approveDetail.setColumnVisible("fixedAsetNo", true);
      gr_approveDetail.setColumnVisible("perVehclNo", false);
    }
  }
  gr_approveDetail.setColumnStyle("slipNo", "color", "blue");
  gr_approveDetail.setColumnStyle("slipNo", "text-decoration", "underline");
};

// for="gr_approveDetail" event=OnHeadCheckClick(Col,Colid,bCheck)
scwin.gr_approveDetail_onheaderclick = function (headerId) {
  var vCountRow = ds_approveDetail.getTotalRow();
  let bCheck = gr_approveDetail.getHeaderValue(headerId);
  let vChk;
  vChk = bCheck == 1 ? "T" : "F";
  if (vCountRow > 0) {
    if (headerId == "chk") {
      for (var i = 0; i < vCountRow; i++) {
        ds_approveDetail.setCellData(i, "chk", vChk);
      }
    }
  }
};

// for=gr_approveDetail event=OnClick(Row,Colid)
scwin.gr_approveDetail_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (rowIndex < 0) return;
  if (columnId == "slipNo") {
    await $c.gus.cfShowSlipInfo($p, ds_approveDetail.getCellData(rowIndex, "slipNo"));
  }
  if (columnId == "fixedAsetNo") {
    scwin.ShowfixedAsetInfo(ds_approveDetail.getCellData(rowIndex, "fixedAsetNo"));
  }
  if (columnId == "perVehclNo") {
    scwin.ShowPerVehclInfo(ds_approveDetail.getCellData(rowIndex, "slipNo"));
  }
};
scwin.b_Retrieve_onclick = function (e) {
  scwin.f_Retrieve(1);
};
scwin.btn_close_onclick = function (e) {
  self.close();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:' 전자결재 요청번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'approveRequestNumber',placeholder:'',style:'width: 150px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',disabled:'',escape:'false',id:'pu_evid',style:'',type:'button','ev:onclick':'scwin.f_evidPopUp'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'증빙연결'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',disabled:'',escape:'false',id:'pu_budget',style:'',type:'button','ev:onclick':'scwin.f_Budget'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예산실적'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'b_Retrieve',style:'',type:'button','ev:onclick':'scwin.b_Retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'전표결재요청-상세조회 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_approveDetail',gridDownFn:'scwin.f_Export',gridDownUserAuth:'X',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_approveDetail',focusMode:'cell',id:'gr_approveDetail',scrollByColumn:'true',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true',fixedColumn:'2','ev:onheaderclick':'scwin.gr_approveDetail_onheaderclick','ev:oncellclick':'scwin.gr_approveDetail_oncellclick',columnMove:'false',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'column33',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',value:'전표종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column69',value:'회계요청일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column66',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column63',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',value:'차변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'대변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column54',value:'차변(외화)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column51',value:'대변(외화)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column45',value:'귀속부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column36',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column30',value:'관리적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'과세구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',value:'거래일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'업종(업태)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column18',value:'작성부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'작성자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column99',value:'작성일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column96',value:'회계일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column93',value:'전표종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column90',value:'자산번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column87',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column84',value:'가맹점주소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column78',value:'지급일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column81',value:'확정일자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'chk',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipNo',displayMode:'label',colMerge:'true',style:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipKndCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'postReqDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctCd',displayMode:'label',textAlign:'left',style:';text-align:left;'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'acctNm',displayMode:'label',style:';text-align:left;',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'drAmt',displayMode:'label',textAlign:'right',style:';text-align:right;',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crAmt',displayMode:'label',style:';text-align:right;',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'drAmtFcrc',displayMode:'label',style:';text-align:right;',textAlign:'right',dataType:'number',displayFormat:'#,###.#0',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'crAmtFcrc',displayMode:'label',style:';text-align:right;',textAlign:'right',dataType:'number',displayFormat:'#,###.#0',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipAcctDeptCd',displayMode:'label',style:';text-align:left;',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'slipAcctDeptNm',displayMode:'label',style:';text-align:left;',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mgntClntNo',displayMode:'label',style:';text-align:left;',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mgntClntNm',displayMode:'label',style:';text-align:left;',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'summary',displayMode:'label',style:';text-align:left;',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'mgntSummary',displayMode:'label',textAlign:'left',style:';text-align:left;'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'taxnClsNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'approveDate',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bizcondNm',displayMode:'label',textAlign:'left',style:';text-align:left;'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'drawAcctDeptNm',displayMode:'label',textAlign:'left',style:';text-align:left;'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'drawEmpNm',displayMode:'label',textAlign:'center',style:';text-align:center;'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipDt',displayMode:'label',displayFormat:'####/##/##',style:';text-align:center;',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'postDt',displayMode:'label',displayFormat:'####/##/##',style:';text-align:center;',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipKnd',displayMode:'label',style:';text-align:center;',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fixedAsetNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'perVehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'vendorAddress',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'payDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcsnDt',displayMode:'label',displayFormat:'####/##/##'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column35',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column77',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column74',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column71',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column68',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column62',displayMode:'label',expression:'SUM(\'drAmt\')',dataType:'number',displayFormat:'#,###',textAlign:'right',style:';text-align:right;'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column59',displayMode:'label',expression:'SUM(\'crAmt\')',dataType:'number',displayFormat:'#,###',textAlign:'right',style:';text-align:right;'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column56',displayMode:'label',expression:'SUM(\'drAmtFcrc\')',dataType:'number',displayFormat:'#,###.#0',textAlign:'right',style:';text-align:right;'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column53',displayMode:'label',expression:'SUM(\'crAmtFcrc\')',dataType:'number',displayFormat:'#,###.#0',textAlign:'right',style:';text-align:right;'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column50',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column47',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column44',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column38',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column32',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column20',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column101',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column98',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column95',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column92',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column89',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column86',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column80',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column83',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'flex-row',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'flex-row',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn','ev:onclick':'scwin.f_OzReport'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})