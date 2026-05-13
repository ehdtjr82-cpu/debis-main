/*amd /ui/ds/op/stvwrk/op_210_01_11b.xml 26848 263f5bae2275011e530fdf603752a69978315fa0f53b2cd765f32c4709da5928 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkList',saveRemovedData:'true','ev:ondataload':'scwin.ds_wrkList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'workDt',name:'일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iipDayCnt',name:'주간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iipNgtCnt',name:'야간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iipSumCnt',name:'계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpDayCnt',name:'주간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpNgtCnt',name:'야간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpSumCnt',name:'계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ihpDayCnt',name:'주간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ihpNgtCnt',name:'야간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ihpSumCnt',name:'계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iypDayCnt',name:'주간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iypNgtCnt',name:'야간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iypSumCnt',name:'계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumCnt',name:'합계',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'co_ds_combo1_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.stvwrk.RetrieveDailyStaffWrkInputListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_wrkList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_wrkList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_retrieve_submit','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobranCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,co_ds_combo1_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_210_01_11b 
// 이름     : 일용직투입현황(월)
// 경로     : 물류/하역(인천)/현황/
// 작 성 자 : 조성빈
// 작 업 일 : 2026-03-31
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
  ds_wrkList.sort("workDt", 0);
  co_ds_combo1_search.set("sysCd", "BerthNonUsableEBC");
  co_ds_combo1_search.set("queryId", "retriveLobranCodeList");
  var rs = await $c.sbm.execute($p, sbm_lobranCd);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    co_ds_combo1.setJSON(rs.responseJSON.GAUCE);
    co_ds_combo1.sort("code", 0);
    scwin.f_SetDefaultData();

    // $p.setTimeout(function() {
    //     ica_wrkStDt.setValue("201610");
    //     acb_lobranCd.setValue("4AA");
    // }, {"delay":100});
  }
  ;
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {}, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  ica_wrkStDt.setValue(scwin.vwrkStDt);
  acb_lobranCd.setValue(scwin.lobranCd);
  acb_lobranCd.focus();
};

//-------------------------------------------------------------------------
// 본선작업계획현황조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 검색조건 필수 입력 체크
  if (acb_lobranCd.getValue() == "-1") {
    await $c.win.alert($p, "점소는 필수 입력 항목 입니다.");
    return;
  }
  if (!(await $c.gus.cfValidate($p, [acb_lobranCd, ica_wrkStDt]))) {
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
  // var vDay = "점소 : " + acb_lobranCd.ValueOfIndex("lobranNm",acb_lobranCd.Index) + " : "
  //          + "작업년월: " + ica_wrkStDt.text ;
  // var vSearchOption = ";font-face:굴림체;font-size:10pt;font-color:black;bgcolor:#ffffff;align: left;line-color:red;line-width:0pt;";
  // //argGrid.SetExcelTitle(1, "value:" + vDay.replace(/:/g,'|').replace(/;/g,'') + vSearchOption );
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
  }];
  const options = {
    fileName: argTitle + ".xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: argTitle,
    type: "1",
    startRowIndex: 2
    // removeColumns: "0,21",
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
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 	

  switch (disGubun) {
    case 1:
      var pWhere = acb_lobranCd.getValue();
      udc_staff.setSelectId('retrieveStvArrangementDailyManList');
      udc_staff.cfCommonPopUp(function (rtnList) {
        if (rtnList != null) {
          ed_staffNo.setValue(rtnList[0]); //사원코드
          ed_staffNm.setValue(rtnList[1]); //사원명
        } else {
          ed_staffNo.setValue(''); //사원코드
          ed_staffNm.setValue(''); //사원명
        }
      } // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '8' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , '사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종' // Title순서	
      , '70,70,70,70,50,70,50,80' // 보여주는 각 컬럼들의 폭	
      , '5,7,9,10' // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , 500 // POP-UP뛰을때 원도우의	사용자 정의	폭
      , 400 // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "T" // 전체검색허용여부	("F")
      , "사원,사원코드,사원명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
    case 1:
      var wrkPlGbCd = "1"; //CY,장치장창고
      var lodeptCd = scwin.lobranCd;
      var paramList = "," + lodeptCd + "," + wrkPlGbCd;
      udc_wrkPl.setSelectId('retrieveWrkPlInfo');
      udc_wrkPl.cfCommonPopUp(function (rtnList) {
        //작업장코드  작업장명
        $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, ed_wrkPlNm);
      }, pCode, pName, pClose, null, null, null, null, null, null, null, null, null); // 작업장
      break;
  }
};
scwin.f_openPopUp = async function () {
  var args = new Array();
  args[0] = ed_cvsslMgntNo.getValue(); //본선관리번호
  args[1] = ""; //수출입구분코드

  let win_url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml";
  let opts = {
    id: "searchCvsslMgntNoPop",
    popupName: "본선관리번호검색팝업",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "본선관리번호검색팝업"
  };
  var rtnValues = await $c.win.openPopup($p, win_url, opts, args);
  // var rtnValues = window.showModalDialog('/ds/op/wrkplan/stvwrkplan/op_204_01_07p.jsp?paramTitle=본선관리번호검색팝업',args,"dialogWidth:900px; dialogHeight:400px; status:No");

  if (rtnValues != null) {
    ed_cvsslMgntNo.setValue(rtnValues[0]); //본선관리번호
    //rtnValues[0];  본선관리번호
    //rtnValues[1];  선박코드
    //rtnValues[2];  선박명
    //rtnValues[3];  마감일자
    //rtnValues[4];  마감시간
    //rtnValues[5];  도착(입항)일자
    //rtnValues[6];  도착(입항)시간
    //rtnValues[7];  출발(출항)일자
    //rtnValues[8];  출발(출항)시간
    //rtnValues[9];  선사항차
    //rtnValues[10]; 항로
    //rtnValues[11]; 항구코드
    //rtnValues[12]; 부두코드
    //rtnValues[13]; 부두코드명
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

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
// 검색영역 Field Clear함.
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.excelDown = function () {
  scwin.f_gridToExcel(gr_wrkList, '투입현황(월)');
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg == "FAIL") {} else {
    // 총 조회건수 표시
    var rowCnt = ds_wrkList.getRowCount();
    txt_totalRows.setValue(rowCnt);
    if (rowCnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
      return;
    }
    ds_wrkList.sort("workDt", 0);
  }
};
scwin.sbm_retrieve_submit = function (e) {};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_lobranCd',style:'width: 150px;display: none;',submenuSize:'fixed',ref:'data:ds_condition.lobranCd',mandatory:'true',title:'점소'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:co_ds_combo1'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'acb_lobranCd',search:'start',style:'width: 150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_condition.lobranCd',mandatory:'true',title:'점소',chooseOptionLabel:' ',emptyItem:'true',emptyValue:'-1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:co_ds_combo1'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'투입년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_wrkStDt',style:'',mandatory:'true',title:'투입년월',objType:'data',ref:'data:ds_condition.wrkStDt'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'투입현황(월)',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',gridDownUserAuth:'X',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_wrkList',gridDownFn:'scwin.excelDown'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_wrkList',focusMode:'row',id:'gr_wrkList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',dataName:'투입현황',validFeatures:'ignoreStatus=no'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'일자',width:'70',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'내항',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column66',value:'북항',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'항동',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'연안',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column74',value:'합계',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column56',value:'주간',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column55',value:'야간',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column71',value:'계',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'주간',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'야간',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column59',value:'계',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column54',value:'주간',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column53',value:'야간',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'계',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column51',value:'주간',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',value:'야간',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column49',value:'계',displayMode:'label',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'workDt',inputType:'text',style:'',value:'',width:'70',sortable:'true',displayFormat:'##/##',readOnly:'true',dataType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'iipDayCnt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'iipNgtCnt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'iipSumCnt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'inpDayCnt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'inpNgtCnt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'inpSumCnt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ihpDayCnt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ihpNgtCnt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ihpSumCnt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'iypDayCnt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'iypNgtCnt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'iypSumCnt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sumCnt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column47',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("iipDayCnt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column46',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("iipNgtCnt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column73',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("iipSumCnt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column69',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("inpDayCnt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column65',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("inpNgtCnt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column61',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("inpSumCnt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column45',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("ihpDayCnt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column44',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("ihpNgtCnt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column43',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("ihpSumCnt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column42',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("iypDayCnt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column41',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("iypNgtCnt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column40',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("iypSumCnt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column77',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("sumCnt")'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})