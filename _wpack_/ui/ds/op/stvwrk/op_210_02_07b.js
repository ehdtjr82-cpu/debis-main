/*amd /ui/ds/op/stvwrk/op_210_02_07b.xml 38727 3eebe23c0de58ff0dfc8de5140d84f8d436b292dfca84859fd05d05a86e3e1ed */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dailyPaycheck',saveRemovedData:'true','ev:ondataload':'scwin.ds_dailyPaycheck_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'gubun',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retireCk',name:'재직',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalCost',name:'총',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tax1',name:'소득세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tax2',name:'주민세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tax4',name:'조합비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tax5',name:'국민연금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tax6',name:'국민연금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tax7',name:'건강보험',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tax8',name:'장기요양',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tax9',name:'건강보험',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tax10',name:'장기요양',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tax3',name:'고용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deduction',name:'공제',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realCost',name:'실제',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tax11',name:'퇴직',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refCh',name:'일반',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalCol',name:'name23',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_staff_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_staff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'co_ds_combo1_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.stvwrk.RetrieveDailyManpowerPaycheckCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_dailyPaycheck","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_dailyPaycheck","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobranCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,co_ds_combo1_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_staff',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_staff_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'$blank','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_210_02_07b 
// 이름     : 일용직임금명세서
// 경로     : 물류/하역(인천)/현황/
// 작 성 자 : 조성빈
// 작 업 일 : 2026-04-07
// 사용계정 : 내부
// 비고     :  ***
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.onpageload = async function () {
  scwin.lobranCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "lobranCd")) ? "" : $c.data.getMemInfo($p, "lobranCd"); // 물류 점소 코드

  scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
  scwin.vwrkStDt = scwin.vCurDate.substring(0, 6) + "01"; // 입항예정일자 from(현재 날짜가 포함된 달의 시작 일자)
  scwin.vwrkEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.vCurDate.substring(0, 6)); // 입항예정일자 to(현재 날짜가 포함된 달의 마지막 일자)

  scwin.v_workClsCd = "";
  scwin.bOnPopUp = false;
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(async function () {
    co_ds_combo1_search.set("sysCd", "BerthNonUsableEBC");
    co_ds_combo1_search.set("queryId", "retriveLobranCodeList");
    var rs = await $c.sbm.execute($p, sbm_lobranCd);
    if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
      co_ds_combo1.setJSON(rs.responseJSON.GAUCE);
      co_ds_combo1.sort("code", 0);
      scwin.f_SetDefaultData();
      $c.gus.cfDisableObjects($p, [ed_staffNo, ed_staffNm]);
    }
    ;
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  ica_wrkDt.setValue(scwin.vCurDate);
  lc_lobranCd.setValue(scwin.lobranCd);
  lc_lobranCd.focus();

  // $p.setTimeout(function() {
  //     // ica_wrkDt.setValue("201610");
  //     ica_wrkDt.setValue("202504");
  //     lc_lobranCd.setValue("4AA");
  // }, {"delay":1200});
};

//-------------------------------------------------------------------------
// 본선작업계획현황조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 검색조건 필수 입력 체크
  if (!(await $c.gus.cfValidate($p, [lc_lobranCd, ica_wrkDt]))) {
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_gridToExcel = function (argGrid, argTitle) {
  // Title
  // argGrid.SetExcelTitle(0, "");
  // argGrid.SetExcelTitle(1,"value:" + argTitle + ";" // 표시할 타이틀
  //                       + "font-face:'돋움체';"      // 폰트
  //                       + "font-size:16pt;"         // 폰트 크기
  //                       + "font-color:black;"       // 폰트 색깔
  //                       + "bgcolor:#ffffff;"        // 배경 색깔
  //                       + "align:center;"           // 정렬
  //                       + "line-color:white;"       // 타이틀 부분 테두리선 색깔
  //                       + "line-width:0pt;"         // 타이틀 테두리선 굵기
  //                       + "skiprow:1;");            // 타이틀 다음 떼는 로우 수
  // 검색조건
  var vDay = "점소 | " + lc_lobranCd.getText(true) + " | " + "작업일자 | " + ica_wrkDt.getValue();
  // var vSearchOption = ";font-face:굴림체;font-size:10pt;font-color:black;bgcolor:#ffffff;align: left;line-color:red;line-width:0pt;";

  // argGrid.SetExcelTitle(1, "value:" + vDay.replace(/:/g,'|').replace(/;/g,'') + vSearchOption );
  // cfGridToExcel(argGrid, argTitle, argTitle+".xls", 4+8+16);

  var argGridTotalCol = 0;
  for (var i = 0; i < argGrid.getTotalCol(); i++) {
    if (argGrid.getColumnVisible(i)) {
      argGridTotalCol++;
    }
  }
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: argGridTotalCol,
    text: argTitle,
    textAlign: "center",
    fontSize: "24",
    fontName: "돋움체",
    color: "black",
    fontWeight: "",
    drawBorder: "false",
    borderColor: "",
    borderWidth: "",
    wordWrap: "true",
    bgColor: "#ffffff"
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: argGridTotalCol,
    text: vDay,
    textAlign: "left"
    // , fontSize    : "12"
    ,

    fontName: "돋움체",
    color: "black",
    fontWeight: "",
    drawBorder: "false",
    borderColor: "",
    borderWidth: "",
    wordWrap: "true",
    bgColor: "#ffffff"
  }];
  const options = {
    fileName: argTitle + ".xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: argTitle,
    type: "1",
    startRowIndex: 3
    // removeColumns: "1",
    // hiddenVisible : true,
    // useSubTotal :"true", 
    // useSubTotalData  : "true",
    // oddRowBackgroundColor  : "",                        // excel파일에서 그리드 body의 홀수줄의 배경색
    // evenRowBackgroundColor : "#F5FFF5"                  // excel파일에서 그리드 body의 짝수줄의 배경색
  };
  $c.data.downloadGridViewExcel($p, argGrid, options, infoArr);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 	

  switch (disGubun) {
    case 1:
      var arrParam = new Array();
      arrParam[0] = pCode; //사번
      arrParam[1] = pName; //사원명
      arrParam[2] = lc_lobranCd.getValue(); //점소코드
      arrParam[3] = lc_lobranCd.getText(true); //점소명
      arrParam[4] = ''; //작업장코드
      arrParam[5] = ''; //직종  (정규직)
      // arrParam[6] = lc_dtlOccptypeCd.getValue(); //상세직종코드 
      arrParam[6] = ''; //상세직종코드 
      arrParam[7] = ''; //직급
      arrParam[8] = ''; //작업일
      arrParam[9] = ''; //배치가능여부
      arrParam[10] = 'T'; //WINDOW CLOSE 여부
      arrParam[11] = "1"; //상세직종Flag

      let win_url = "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml";
      let opts = {
        id: "",
        popupName: "",
        modal: true,
        type: "browserPopup",
        width: 1000,
        height: 600,
        title: ""
      };
      var rtnValues = await $c.win.openPopup($p, win_url, opts, args);
      //(0)직종코드		
      //(1)직종명	        
      //(2)인원번호		
      //(3)인원명	                          
      //(4)직급		    
      //(5)직급명		    
      //(6)물류점소코드   
      //(7)물류점소명		
      //(8)상세직종코드	
      //(9)상세직종명		                  
      //(10)배치가능여부	
      //(11)본사계약직여부 
      //(12)연근여부		

      if (rtnValues != null) {
        ed_staffNo.setValue(rtnList[2]); //사원코드
        ed_staffNm.setValue(rtnList[3]); //사원명
      } else {
        ed_staffNo.setValue(""); //사원코드
        ed_staffNm.setValue(""); //사원명
      }
      break;
  }
};
scwin.f_RetrieveStaffInfo1 = async function (param1, param2) {
  ds_staff_search.set("sysCd", "StvWrkEBC");
  ds_staff_search.set("queryId", "retrieveStaffInfoCombo1");
  ds_staff_search.set("param1", param1);
  ds_staff_search.set("param2", param2);
  var rs = await $c.sbm.execute($p, sbm_staff);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_staff.setJSON(rs.responseJSON.GAUCE);
    if (ds_staff.getRowCount() == 0) {
      await $c.win.alert($p, "해당 관리번호에 사번이 존재하지 않습니다. 확인 후 입력해 주세요");
      ed_refNo.setValue("");
      return false;
    } else {
      ed_staffNo.setValue(ds_staff.getCellData(0, "code"));
      ed_staffNm.setValue(ds_staff.getCellData(0, "name"));
    }
  }
  ;
};

//-------------------------------------------------------------------------
// 검색영역 Field Clear함.
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};
scwin.ed_refNo_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.ed_staffNo_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.ed_refNo_onblur = function (e) {
  ed_staffNo.setValue("");
  ed_staffNm.setValue("");
  var wrkDtValue = ica_wrkDt.getValue() + "01";
  if (ed_refNo.getValue() != "") {
    scwin.f_RetrieveStaffInfo1(ed_refNo.getValue(), wrkDtValue);
  }
};
scwin.gr_dailyPaycheck_oncellclick = function (row, columnIndex, columnId) {
  if (ds_dailyPaycheck.getCellData(row, "status") == "확정") {
    // gr_dailyPaycheck.setCellReadOnly(row, "chk", true);
    gr_dailyPaycheck.setCellReadOnly(row, "staffNo", true);
    gr_dailyPaycheck.setCellReadOnly(row, "workClsCd", true);
    gr_dailyPaycheck.setCellReadOnly(row, "stvWrkIndictNo", true);
    gr_dailyPaycheck.setCellReadOnly(row, "wrkStpCd", true);
    gr_dailyPaycheck.setCellReadOnly(row, "workStDt", true);
    gr_dailyPaycheck.setCellReadOnly(row, "workStHh", true);
    gr_dailyPaycheck.setCellReadOnly(row, "workEndDt", true);
    gr_dailyPaycheck.setCellReadOnly(row, "workEndHh", true);
    gr_dailyPaycheck.setCellReadOnly(row, "dtlTskCntnCd", true);
  } else {
    gr_dailyPaycheck.setCellReadOnly(row, "chk", false);
    gr_dailyPaycheck.setCellReadOnly(row, "staffNo", false);
    gr_dailyPaycheck.setCellReadOnly(row, "workClsCd", false);
    gr_dailyPaycheck.setCellReadOnly(row, "stvWrkIndictNo", false);
    gr_dailyPaycheck.setCellReadOnly(row, "wrkStpCd", false);
    gr_dailyPaycheck.setCellReadOnly(row, "workStDt", false);
    gr_dailyPaycheck.setCellReadOnly(row, "workStHh", false);
    gr_dailyPaycheck.setCellReadOnly(row, "workEndDt", false);
    gr_dailyPaycheck.setCellReadOnly(row, "workEndHh", false);
    gr_dailyPaycheck.setCellReadOnly(row, "dtlTskCntnCd", false);
  }
};
scwin.ed_staffNo_onblur = function (e) {
  scwin.f_openCommonPopUp(1, ed_staffNo.getValue(), ed_staffNm.getValue(), 'F', 'F');
};
scwin.ed_staffNm_onchange = function (info) {
  // scwin.f_chkOpenCommonPopUp(ed_staffNm, ed_staffNo, 1, false);
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.excelDown = function () {
  scwin.f_gridToExcel(gr_dailyPaycheck, '일용직임금명세서');
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg == "FAIL") {} else {
    // 총 조회건수 표시
    var rowCnt = ds_dailyPaycheck.getRowCount();
    txt_totalRows.setValue(rowCnt);
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
    }
  }
};
scwin.decode_retireck = function (data, formattData, rowIdx, colIdx) {
  if (data == "O") {
    return "재직";
  } else if (data == "X") {
    return "퇴사";
  }
  return "";
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:60.00px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_lobranCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_condition.lobranCd',mandatory:'true',title:'점소'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:co_ds_combo1'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_wrkDt',style:'',mandatory:'true',objType:'data',title:'작업일자',ref:'data:ds_condition.wrkDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkPlClsCd',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'data:ds_condition.wrkPlClsCd'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인천내항'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인천북항'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인천항동'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인천연안'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인원 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_refNo',style:'width: 80px;',title:'관리번호',objType:'data',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.ed_refNo_onkeyup',maxlength:'6','ev:onblur':'scwin.ed_refNo_onblur'}},{T:1,N:'xf:input',A:{class:'',id:'ed_staffNo',style:'width: 100px;',maxlength:'6',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.ed_staffNo_onkeyup',objType:'data',ref:'data:ds_condition.staffNo','ev:onblur':'scwin.ed_staffNo_onblur'}},{T:1,N:'xf:input',A:{class:'',id:'ed_staffNm',style:'width: 100px;','ev:onchange':'scwin.ed_staffNm_onchange'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'일용직임금명세서',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',gridID:'gr_dailyPaycheck',gridDownFn:'scwin.excelDown',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_dailyPaycheck',focusMode:'row',id:'gr_dailyPaycheck',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',dataName:'일용직임금명세서',validFeatures:'ignoreStatus=no'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'순서',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'관리번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'사원명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'재직</br>여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'총 노임액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'소득세',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',value:'주민세',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',value:'조합비',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column49',inputType:'text',value:'국민연금</br>사용자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column52',inputType:'text',value:'국민연금</br>근로자',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'건강보험</br>사용자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',value:'장기요양</br>사용자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'건강보험</br>근로자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'장기요양</br>근로자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column58',value:'고용</br>보험',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column70',value:'공제</br>금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',value:'실제</br>노임액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column76',value:'퇴직</br>충당금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column79',value:'일반</br>->H',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column82',value:'totalcol',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'gubun',inputType:'text',width:'70',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sortSeq',inputType:'text',width:'70',readOnly:'true',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'refNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'retireCk',inputType:'text',width:'100',hidden:'true',customFormatter:'scwin.decode_retireck',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totalCost',inputType:'text',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tax1',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tax2',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tax4',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tax5',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tax6',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tax7',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tax8',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tax9',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tax10',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'tax3',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'deduction',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'realCost',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tax11',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'refCh',displayMode:'label',dataType:'text',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'totalCol',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'gubun',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'s1_gubun',inputType:'expression',width:'70',expression:'targetColValue()'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s1_sortSeq',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s1_refNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s1_staffNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s1_retireCk',inputType:'text',width:'100',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s1_totalCost',inputType:'expression',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'totalCost\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s1_tax1',inputType:'expression',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'tax1\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s1_tax2',inputType:'expression',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'tax2\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s1_tax4',inputType:'expression',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'tax4\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s1_tax5',inputType:'expression',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'tax5\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s1_tax6',inputType:'expression',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'tax6\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s1_tax7',inputType:'expression',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'tax7\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s1_tax8',inputType:'expression',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'tax8\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s1_tax9',inputType:'expression',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'tax9\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s1_tax10',inputType:'expression',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'tax10\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s1_tax3',inputType:'expression',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'tax3\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s1_deduction',inputType:'expression',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'deduction\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s1_realCost',inputType:'expression',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'realCost\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s1_tax11',inputType:'expression',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'tax11\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s1_refCh',inputType:'text',width:'70',dataType:'text',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'totalCol',style:'',id:'subTotal2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'s2_gubun',inputType:'text',value:'합계',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s2_sortSeq',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s2_refNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s2_staffNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s2_retireCk',inputType:'text',width:'100',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s2_totalCost',inputType:'expression',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'totalCost\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s2_tax1',inputType:'expression',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'tax1\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s2_tax2',inputType:'expression',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'tax2\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s2_tax4',inputType:'expression',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'tax4\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s2_tax5',inputType:'expression',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'tax5\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s2_tax6',inputType:'expression',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'tax6\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s2_tax7',inputType:'expression',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'tax7\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s2_tax8',inputType:'expression',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'tax8\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s2_tax9',inputType:'expression',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'tax9\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s2_tax10',inputType:'expression',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'tax10\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s2_tax3',inputType:'expression',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'tax3\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s2_deduction',inputType:'expression',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'deduction\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s2_realCost',inputType:'expression',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'realCost\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s2_tax11',inputType:'expression',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'tax11\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'s2_refCh',inputType:'text',width:'70',dataType:'text',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column48',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column47',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column46',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',value:'합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column44',inputType:'text',textAlign:'right',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'expression',value:'0',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("totalCost")'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'expression',value:'0',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("tax1")'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'expression',value:'0',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("tax2")'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column40',inputType:'expression',value:'0',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("tax4")'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column51',inputType:'expression',value:'0',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("tax5")'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column54',inputType:'expression',value:'0',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("tax6")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column69',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("tax7")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column66',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("tax8")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column63',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("tax9")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column57',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("tax10")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column60',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("tax3")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column72',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("deduction")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column75',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("realCost")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column78',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("tax11")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column81',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column86',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})