/*amd /ui/ds/op/wrkrslts/yardwrkrslts/op_302_02_49b.xml 27276 73fc2da06f470ccb3e11028810904caeffe627e51c8af63951144be5632321fd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_InvoiceInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'invoiceNo',name:'송장번호',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'outVehclNo',name:'출고차량',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'기사성명',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'drvMpNo',name:'기사연락처',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'dsNm',name:'목적지',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'pDsNm',name:'유통기지(포스코목적지)',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약거래처명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'clientNm',name:'고객사',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'smsSndDtm',name:'SMS발송일시',dataType:'text',defaultValue:'',length:'16'}},{T:1,N:'w2:column',A:{id:'outDt',name:'생산일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'totWt',name:'중량',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'clntMpNo',name:'거래처핸드폰번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'inDtFrom',name:'입고일자From',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'inDtTo',name:'입고일자To',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'dtlDsNm',name:'상세착지',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'contact',name:'연락처',dataType:'text',defaultValue:'',length:'20'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outDtFrom',name:'출고일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outDtTo',name:'출고일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'invoiceNo',name:'송장번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.yardwrkrslts.RetrievePoscoInvoiceListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Query","key":"IN_DS1"},{"id":"ds_InvoiceInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_InvoiceInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.yardwrkrslts.SavePoscoInvoiceListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_InvoiceInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_invoiceSms',action:'/ds.op.wrkrslts.yardwrkrslts.SendSmsPoscoInvoiceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_InvoiceInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_invoiceSms_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sUserId = $c.data.getMemInfo($p, "userId");
scwin.sUserClsCd = $c.data.getMemInfo($p, "userClsCd"); // 사용자 구분코드
scwin.sClntNo = $c.data.getMemInfo($p, "clntNo");
scwin.sClntNm = $c.data.getMemInfo($p, "clntNm");
scwin.sLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd");

// hidden
scwin.hid_repClntNo = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    //소스
    var dateStr = $c.date.getServerDateTime($p, "yyyyMMdd"); //현재일자

    ed_outDtFrom.setValue(dateStr.substring(0, 6) + '01');
    ed_outDtTo.setValue(dateStr);
    $c.gus.cfDisableObjects($p, [btn_delete, btn_save, btn_sms]);
    ed_clntNo.setValue("253811");
    scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'T', 'T');

    //테스트 데이터
    // ds_Query.set("outDtFrom", "20240813");
    // ds_Query.set("outDtTo", "20240813");
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  if ($c.gus.cfIsNull($p, ed_clntNo.getValue())) {
    $c.gus.cfAlertMsg($p, "거래처를 입력하십시오.");
    ed_clntNo.focus();
    return;
  }
  if ($c.gus.cfIsNull($p, ed_outDtFrom.getValue()) && $c.gus.cfIsNull($p, ed_outDtTo.getValue()) && ($c.gus.cfIsNull($p, ed_outDtFrom.getValue()) || $c.gus.cfIsNull($p, ed_outDtTo.getValue()))) {
    $c.gus.cfAlertMsg($p, "출고일자를 입력하십시오.");
    ed_outDtFrom.focus();
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_outDtFrom.getValue(), ed_outDtTo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_outDtFrom.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 송장발행
//-------------------------------------------------------------------------
scwin.f_popup = function () {
  var param = "";
  var printCnt = 0;
  if (ds_InvoiceInfo.getRowCount() > 0) {
    for (i = 0; i < ds_InvoiceInfo.getRowCount(); i++) {
      if (ds_InvoiceInfo.getCellData(i, "chk") == "T") {
        printCnt++;
        param = param + "," + ds_InvoiceInfo.getCellData(i, "invoiceNo"); // 전표번호
      }
    }
    if (printCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["발행할 송장"]); // @을(를) 선택하십시오.
      return;
    }
    var data = {
      reportName: "ds/op/wrkrslts/yardwrkrslts/op_302_02_49.ozr",
      odiParam: {
        clntNo: ed_clntNo.getValue(),
        invoiceNo: param.substring(1)
      },
      viewerParam: {
        useprogressbar: true,
        // 프로그레스바 쓸지 말지
        zoom: 90 // 배율 설정
      },
      formParam: {}
    };
    scwin.openPopup(data);
  }
};

//-------------------------------------------------------------------------
// 오즈 리포트 팝업
//------------------------------------------------------------------------- 
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

//------------------------------------
// 삭제
//------------------------------------
scwin.f_Delete = async function () {
  var cnt = 0;
  for (var i = 0; i < ds_InvoiceInfo.getRowCount(); i++) {
    if (ds_InvoiceInfo.getCellData(i, "chk") == "T") {
      cnt++;
    }
  }
  if (cnt == 0) {
    $c.win.alert($p, "삭제할 항목을 선택해 주세요.");
    return;
  }
  let ret = await $c.win.confirm($p, "출고송장발행내역을 삭제합니다.");
  if (ret) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_runExcel = async function () {
  var totCnt = ds_InvoiceInfo.getRowCount();
  var sheetTitle = "포스코 출고송장발행내역 ";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: sheetTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
        ,
        sheetName: sheetTitle //엑셀내 시트명 지정필요시
      };
      const infoArr = [];
      $c.data.downloadGridViewExcel($p, gr_InvoiceInfo, options, infoArr);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 거래처 팝업
      udc_clntNo.setSelectId("retrieveClntInfo2"); // XML상의 SELECT ID
      udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "계약 거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// GRID에서 선택된 오더요청처리 : 해당 오더요청처리 페이지로 이동
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_srchCond);
  ed_clntNo.focus();
};

//-------------------------------------------------------------------------
// SMS발송 (알림톡) 
//-------------------------------------------------------------------------
scwin.f_SmsSend = async function () {
  var cnt = 0;
  let ret = await $c.win.confirm($p, "SMS를 전송 하시겠습니까?");
  if (ret) {
    for (var i = 0; i < ds_InvoiceInfo.getRowCount(); i++) {
      if (ds_InvoiceInfo.getCellData(i, "chk") == "T") {
        cnt = cnt + 1;
      }
    }
    if (cnt > 0) {
      if (ds_InvoiceInfo.getCellData(0, "clntMpNo") == "") {
        $c.win.alert($p, "거래처 휴대전화번호가 등록되어 있지 않습니다.");
        return false;
      }
      $c.sbm.execute($p, sbm_invoiceSms);
    } else {
      $c.win.alert($p, "전송할 내역이 없습니다. 전송할 내역을 선택해 주세요.");
      return;
    }
  }
};

//-------------------------------------------------------------------------
// 대문자 입력
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_InvoiceInfo.getRowCount() == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  } else {
    $c.gus.cfEnableObjects($p, [btn_delete, btn_save, btn_sms]);
  }
  tbx_totalRows.setValue(ds_InvoiceInfo.getRowCount()); // 소계 부분을 뺀 실제 데이터 갯수를 Count...
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// SMS발송 submitdone
//-------------------------------------------------------------------------
scwin.sbm_invoiceSms_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, "SMS전송이 완료되었습니다.");
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 화주 UDC START
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 1);
};
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 1, false);
};
scwin.udc_clntNo_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_clntNo, ed_clntNm);
};
//-------------------------------------------------------------------------
// 화주 UDC END
//-------------------------------------------------------------------------
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'화주',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_clntNo',btnId:'btn_clntNo',id:'udc_clntNo',nameId:'ed_clntNm',mandatoryCode:'true',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',validTitle:'화주','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent',refDataCollection:'ds_Query',code:'clntNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출고일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_Query',refEdDt:'outDtTo',refStDt:'outDtFrom',style:'',edFromId:'ed_outDtFrom',edToId:'ed_outDtTo',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출고송장번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_invoiceNo',placeholder:'',style:'width:150px;',maxlength:'20',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.onkeyup',ref:'data:ds_Query.invoiceNo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'출고송장 발행내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_runExcel',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_InvoiceInfo'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_InvoiceInfo',id:'gr_InvoiceInfo',style:'',visibleRowNum:'15',visibleRowNumFix:'true',autoFitMinWidth:'1700',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'출고송장번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'출고일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'SMS발송일시',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'수량',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'순중량',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'총중량',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'출고차량',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'출고기사',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'출고기사연락처',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column64',value:'목적지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column61',value:'유통기지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column58',value:'판매계약자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column55',value:'고객사',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column67',value:'비고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'거래처핸드폰번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column43',value:'상세착지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column40',value:'문의처',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',readOnly:'false',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'invoiceNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outDt',inputType:'text',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'smsSndDtm',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'text',width:'80',textAlign:'right',dataType:'number',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totWt',inputType:'text',width:'80',textAlign:'right',dataType:'number',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outVehclNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvMpNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dsNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pDsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ctrtClntNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clientNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column68',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column74',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column71',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'dtlDsNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'contact',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column26',displayMode:'label',textAlign:'right',expression:'sum(\'qty\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00',expression:'sum(\'wt\')'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00',expression:'sum(\'totWt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_sms',style:'',type:'button','ev:onclick':'scwin.f_SmsSend',userAuth:'D',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'SMS발송'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_delete',style:'',type:'button','ev:onclick':'scwin.f_Delete',userAuth:'D',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'송작삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_popup',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'송장재발행'}]}]}]}]}]}]}]}]}]})