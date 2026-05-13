/*amd /ui/ds/op/wrkrslts/yardwrkrslts/op_302_02_53b.xml 29631 7645dc80cecefe3811b808471e5e01103a98a3c54dc41a70ba4f9c2e2859b61f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outDtFrom',name:'출고일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outDtTo',name:'출고일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrLineNo',name:'Order Line No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transferYn',name:'이관여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_InvoiceInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'inco1',name:'인도조건 코드',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'names',name:'고객사명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'kunnr',name:'고객사코드',dataType:'text',defaultValue:'',length:'10'}},{T:1,N:'w2:column',A:{id:'vbeln',name:'File No(Sales Order No)',dataType:'text',defaultValue:'',length:'10'}},{T:1,N:'w2:column',A:{id:'posnr',name:'납품품목',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'wadat',name:'고객사 입장 인도요청일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'odrLineNo',name:'Order Line No',dataType:'text',defaultValue:'',length:'15'}},{T:1,N:'w2:column',A:{id:'productNo',name:'제품번호',dataType:'text',defaultValue:'',length:'40'}},{T:1,N:'w2:column',A:{id:'pThick',name:'두께',dataType:'text',defaultValue:'',length:'10'}},{T:1,N:'w2:column',A:{id:'pSpec',name:'규격',dataType:'text',defaultValue:'',length:'60'}},{T:1,N:'w2:column',A:{id:'menge',name:'지시출하량',dataType:'text',defaultValue:'',length:'17'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number',defaultValue:'0',length:'7'}},{T:1,N:'w2:column',A:{id:'userName',name:'영업담당자',dataType:'text',defaultValue:'',length:'35'}},{T:1,N:'w2:column',A:{id:'remark1',name:'비고1',dataType:'text',defaultValue:'',length:'200'}},{T:1,N:'w2:column',A:{id:'remark2',name:'비고2',dataType:'text',defaultValue:'',length:'200'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'outDt',name:'생산일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'invoiceNo',name:'송장번호',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'inDt',name:'입고일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'ioClsCd',name:'입출고구분코드',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'transferDt',name:'이관일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'transferYn',name:'이관여부',dataType:'text',defaultValue:'',length:'1'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.yardwrkrslts.RetrievePoscoTransferListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Query","key":"IN_DS1"},{"id":"ds_InvoiceInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_InvoiceInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.yardwrkrslts.SavePoscoTransferListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_InvoiceInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.odrLineNo = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // 파라미터 SET
  var params = $c.data.getParameter($p);
  if (!$c.util.isEmpty($p, params["odrLineNo"])) {
    scwin.odrLineNo = params["odrLineNo"];
  }

  // SD463 공통코드 데이터 없음(OP228인데 잘못쓴거 같음) 콤보박스 바인딩되지않고 조회된 데이터 그대로 뿌려지기 때문에 inputType=text로 변경
  const codeOptions = [{
    grpCd: "OP228",
    compID: "gr_InvoiceInfo:ioClsCd"
  } //구분
  ];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_SetGridColumnMaxLength(gr_InvoiceInfo); // 그리드 maxlength 설정
};

//-------------------------------------------------------------------------
// 입력 그리드 maxlength 설정
//-------------------------------------------------------------------------
scwin.f_SetGridColumnMaxLength = function (gridViewObj) {
  for (let i = 0; i < gridViewObj.getTotalCol(); i++) {
    let colNm = gridViewObj.getColumnID(i);
    let dataObj = $c.gus.object($p, gridViewObj.getDataList());
    let colInfo = dataObj.getColumnInfo(colNm);
    if (typeof colInfo != "undefined") {
      gridViewObj.setMaxLength(i, colInfo.length);
    }
  }
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    //소스
    var dateStr = $c.date.getServerDateTime($p, "yyyyMMdd"); //현재일자
    ica_transferDt.setValue(dateStr);
    ed_outDtFrom.setValue(dateStr.substring(0, 6) + '01');
    ed_outDtTo.setValue(dateStr);
    scwin.f_defaultValue();

    //테스트 데이터
    // ds_Query.set("outDtFrom", "20240801");
    // ds_Query.set("outDtTo", "20240831");
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 기본값 설정
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  ed_clntNo.setValue("253811");
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'T', 'T');
  scwin.f_Retrieve("odrLine");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function (odrLine) {
  if (odrLine == "odrLine") {
    if (!$c.gus.cfIsNull($p, scwin.odrLineNo) && 'null' != scwin.odrLineNo) {
      ed_outDtFrom.setValue("");
      ed_outDtTo.setValue("");
      udc_odrLineNo.setData(scwin.odrLineNo);
      $c.sbm.execute($p, sbm_retrieve);
    }
  } else {
    if ($c.gus.cfIsNull($p, ed_clntNo.getValue())) {
      $c.gus.cfAlertMsg($p, "거래처를 입력하십시오.");
      ed_clntNo.focus();
      return;
    }
    if ($c.gus.cfIsNull($p, ed_outDtFrom.getValue()) && $c.gus.cfIsNull($p, ed_outDtTo.getValue()) && ($c.gus.cfIsNull($p, ed_outDtFrom.getValue()) || $c.gus.cfIsNull($p, ed_outDtTo.getValue()))) {
      $c.gus.cfAlertMsg($p, "재고이관일자를 입력하십시오.");
      ed_clntNo.focus();
      return;
    }
    if (!$c.gus.cfIsAfterDate($p, ed_outDtFrom.getValue(), ed_outDtTo.getValue())) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
      ed_outDtFrom.focus();
      return;
    }
    $c.sbm.execute($p, sbm_retrieve);
  }
};

//-------------------------------------------------------------------------
// 이관등록
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  var cnt = 0;
  if ($c.gus.cfIsNull($p, ica_transferDt.getValue())) {
    $c.win.alert($p, "이관일자를 선택해주세요.");
    return;
  }
  for (var i = 0; i < ds_InvoiceInfo.getRowCount(); i++) {
    if (ds_InvoiceInfo.getCellData(i, "chk") == "T" || ds_InvoiceInfo.getRowStatus(i) == "U") {
      ds_InvoiceInfo.setCellData(i, "transferDt", ica_transferDt.getValue());
      cnt++;
    }
  }
  if (cnt == 0) {
    $c.win.alert($p, "항목을 선택해주세요.");
    return;
  }
};

//-------------------------------------------------------------------------
// 이관취소
//------------------------------------------------------------------------- 
scwin.f_CancelUpdate = function () {
  var cnt = 0;
  for (var i = 0; i < ds_InvoiceInfo.getRowCount(); i++) {
    if (ds_InvoiceInfo.getCellData(i, "chk") == "T") {
      ds_InvoiceInfo.setCellData(i, "transferDt", "");
      cnt++;
    }
  }
  if (cnt == 0) {
    $c.win.alert($p, "항목을 선택해주세요.");
    return;
  }
};

//------------------------------------
// 취소
//------------------------------------
scwin.f_cancel = async function () {
  var cnt = 0;
  for (var i = 0; i < ds_InvoiceInfo.getRowCount(); i++) {
    if (ds_InvoiceInfo.getCellData(i, "chk") == "T") {
      ds_InvoiceInfo.setCellData(i, "transferDt", "");
      ds_InvoiceInfo.setCellData(i, "names", "(주)포스코인터내셔널");
      cnt++;
    }
  }
  if (cnt == 0) {
    $c.win.alert($p, "취소할 항목을 선택해 주세요.");
    return;
  }

  //취소 여부 확인
  let ret = await $c.win.confirm($p, MSG_CM_CRM_011); // 취소 하시겠습니까?
  if (ret) {
    $c.sbm.execute($p, sbm_save);
  }
};

//------------------------------------
// 저장
//------------------------------------
scwin.f_Save = async function () {
  var cnt = 0;
  for (var i = 0; i < ds_InvoiceInfo.getRowCount(); i++) {
    if (ds_InvoiceInfo.getCellData(i, "chk") == "T") {
      cnt++;
    }
  }
  if (cnt == 0) {
    $c.win.alert($p, "저장할 항목을 선택해 주세요.");
    return;
  }

  //저장 여부 확인
  let ret = await $c.win.confirm($p, MSG_CM_CRM_001); // 저장 하시겠습니까?
  if (ret) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_runExcel = async function () {
  var totCnt = ds_InvoiceInfo.getRowCount();
  var sheetTitle = "포스코 하치장재고판매 ";
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
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_InvoiceInfo.getRowCount() == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  tbx_totalRows.setValue(ds_InvoiceInfo.getRowCount()); // 소계 부분을 뺀 실제 데이터 갯수를 Count...
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'',src:'/cm/udc/schInput.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'화주',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',code:'clntNo',refDataCollection:'ds_Query',codeId:'ed_clntNo',nameId:'ed_clntNm',id:'udc_clntNo',btnId:'btn_clntNo',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',validTitle:'화주',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'이관예정일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_Query',refEdDt:'outDtTo',refStDt:'outDtFrom',style:'',edFromId:'ed_outDtFrom',edToId:'ed_outDtTo',mandatoryTo:'true',mandatoryFrom:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Order Line NO',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_schInput',A:{style:'width:150px;',id:'udc_odrLineNo',refDataMap:'ds_Query',iptNm:'odrLineNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_transferYn',ref:'data:ds_Query.transferYn',style:'width: 150px',submenuSize:'fixed'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미완료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'완료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'출고요청 내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_runExcel',gridID:'gr_InvoiceInfo',gridUpYn:'N',templateYn:'N',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_InvoiceInfo',id:'gr_InvoiceInfo',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',fixColumnWidth:'true',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'인도',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'고객사',width:'120',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'고객사코드',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'출고지시번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'행번',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'이관요청일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'이관일자',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column61',value:'출고송장번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column55',value:'OrderLineNO',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'제품번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column49',value:'두께',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column46',value:'규격',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column40',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'영업담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column34',value:'비고1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column37',value:'비고2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'입고일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'이관여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',fixColumnWidth:'true',readOnly:'false',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ioClsCd',inputType:'select',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inco1',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'names',inputType:'text',width:'120',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'kunnr',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vbeln',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'posnr',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wadat',inputType:'text',width:'120',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transferDt',inputType:'calendar',width:'100',readOnly:'false',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'invoiceNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'odrLineNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'productNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pThick',displayMode:'label',textAlign:'right',displayFormat:'#,###.##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pSpec',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'menge',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wt',displayMode:'label',textAlign:'right',displayFormat:'#,###.#0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'userName',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'remark1',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'remark2',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'inDt',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'transferYn',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column51',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column42',displayMode:'label',textAlign:'right',expression:'sum(\'wt\')',dataType:'number',displayFormat:'#,###.#0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_tranCancel',type:'button',class:'btn ','ev:onclick':'scwin.f_CancelUpdate',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'이관취소'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_tranInsert',type:'button',class:'btn ',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.f_Update'},E:[{T:1,N:'xf:label',E:[{T:3,text:'이관등록'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_transferDt',pickerType:'dynamic',style:'',calendarDisplayFormat:'yyyy/MM/dd',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.f_cancel',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})