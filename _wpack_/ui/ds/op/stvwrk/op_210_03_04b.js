/*amd /ui/ds/op/stvwrk/op_210_03_04b.xml 42181 dc415ccc5dbecaaf2c29f0dc0cd3bc5a340565564a78514f906cb9ae99744b3c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'조회년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'districtCd',name:'구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkList',saveRemovedData:'true','ev:ondataload':'scwin.ds_wrkList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'over24Amt',name:'SHIFT초과',dataType:'text'}},{T:1,N:'w2:column',A:{id:'threeShiftAmt',name:'3연근',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtCd',name:'구역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeClsCd',name:'직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeClsNm',name:'직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직책',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직책',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftCnt',name:'시프트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realShiftCnt',name:'시프트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'standardSal',name:'기본임금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holidayAmt',name:'휴일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'specialAmt',name:'특휴',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdAmt',name:'연장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weatherAmt',name:'설천',dataType:'text'}},{T:1,N:'w2:column',A:{id:'moveAmt',name:'GANG이동',dataType:'text'}},{T:1,N:'w2:column',A:{id:'singleAmt',name:'단독',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emerAmt',name:'긴급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'waitingAmt',name:'대기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'additionalAmt',name:'추가금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'removalAmt',name:'제외금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalExtdAmt',name:'합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eduAmt',name:'학자금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unionAmt',name:'노조비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalAmt',name:'총합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'groupLv2',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'groupLv1',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalCol',name:'name30',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'co_ds_combo1_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.stvwrk.RetrieveStvTempWrkSalCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_wrkList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_wrkList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobranCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,co_ds_combo1_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_210_03_04b 
// 이름     : 상용직 임금명세서
// 경로     : 물류/하역(인천)/현황/
// 작 성 자 : 조성빈
// 작 업 일 : 2026-04-08
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
  const codeOptions = [{
    grpCd: "OP316",
    compID: "lc_districtCd"
  } //반출입구분
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.setCommonCodeCallBack);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(async function () {}, {
    "delay": 50
  });
};
scwin.setCommonCodeCallBack = async function () {
  lc_districtCd.addItem("전체", "", "", 0);
  lc_districtCd.setSelectedIndex(0);
  co_ds_combo1_search.set("sysCd", "BerthNonUsableEBC");
  co_ds_combo1_search.set("queryId", "retriveLobranCodeList");
  var rs = await $c.sbm.execute($p, sbm_lobranCd);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    co_ds_combo1.setJSON(rs.responseJSON.GAUCE);
    co_ds_combo1.sort("code", 0);
    scwin.f_SetDefaultData();
  }
  ;
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  ica_wrkStDt.setValue(scwin.vwrkStDt);
  lc_lobranCd.setValue(scwin.lobranCd);
  lc_lobranCd.focus();

  // $p.setTimeout(function() {
  //     ica_wrkStDt.setValue("201610");
  //     lc_lobranCd.setValue("4AA");
  // }, {"delay":1200});
};

//-------------------------------------------------------------------------
// 본선작업계획현황조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 검색조건 필수 입력 체크
  if (!(await $c.gus.cfValidate($p, [lc_lobranCd, ica_wrkStDt]))) {
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
  // var vDay = "점소 | " + lc_lobranCd.getText(true) + " | "
  //          + "작업년월 | " + ica_wrkStDt.getValue();
  var vDay = "";

  // var vSearchOption = ";font-face:굴림체;font-size:10pt;font-color:black;bgcolor:#ffffff;align: left;line-color:red;line-width:0pt;";
  //argGrid.SetExcelTitle(1, "value:" + vDay.replace(/:/g,'|').replace(/;/g,'') + vSearchOption );
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
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 	

  switch (disGubun) {
    case 1:
      var pWhere = lc_lobranCd.getValue();
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

//-------------------------------------------------------------------------
// 본선관리번호검색 팝업창 띄우기
//-------------------------------------------------------------------------
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
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = inObj.getValue();

  // inObj가 코드 필드일 경우 팝업
  if ($c.gus.cfIsNull($p, isCode) || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');

    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 검색영역 Field Clear함.
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.excelDown = function () {
  scwin.f_gridToExcel(gr_wrkList, '임금명세서');
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg == "FAIL") {} else {
    // ds_wrkList event=OnLoadCompleted(rowCnt)>
    // 총 조회건수 표시
    // 	cfShowTotalRows(totalRows, rowCnt);
    var rowCnt = ds_wrkList.getRowCount();
    txt_totalRows.setValue(rowCnt);
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_lobranCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_condition.lobranCd',title:'점소',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:co_ds_combo1'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'조회년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal',id:'ica_wrkStDt',style:'',title:'시작일자',mandatory:'true',objType:'data',ref:'data:ds_condition.wrkStDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_districtCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',chooseOptionLabel:'전체',ref:'data:ds_condition.districtCd'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'임금내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',gridID:'gr_wrkList',gridDownFn:'scwin.excelDown',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',templateYn:'N',gridUpYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_wrkList',id:'gr_wrkList',style:'',fixedColumn:'7',visibleRowNum:'15',visibleRowNumFix:'true',dataName:'임금현황',validFeatures:'ignoreStatus=no',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'구역',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'사번',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'직종',width:'70',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'직종',width:'80',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'직책',width:'70',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'직책',width:'80',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'성명',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'시프트',width:'70',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'시프트',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'기본임금',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'910',inputType:'text',id:'column43',value:'연장비',displayMode:'label',colSpan:'13',sortable:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column100',value:'학자금',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column120',value:'노조비',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column112',value:'합계',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column116',value:'총합계<br/>(학자금포함)',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column121',value:'totalCol',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column65',value:'3연근',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column64',value:'SHIFT<br/>초과',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column63',value:'휴일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column62',value:'특휴',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column61',value:'연장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column89',value:'설천',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column77',value:'GANG이동',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column81',value:'단독',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column85',value:'긴급',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column109',value:'대기',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column105',value:'추가금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column93',value:'제외금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column97',value:'합계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'districtCd',inputType:'select',width:'70'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천내항'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'IIR'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천북항'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'INR'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNo',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occptypeClsCd',inputType:'text',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occptypeClsNm',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdCd',inputType:'text',width:'70',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdNm',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shiftCnt',inputType:'text',width:'70',textAlign:'right',hidden:'true',dataType:'number',displayFormat:'#,###.0',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realShiftCnt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,###.0',dataType:'number',excelCellType:'number',excelFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'standardSal',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'threeShiftAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'over24Amt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'holidayAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'specialAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'extdAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'weatherAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'moveAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'singleAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'emerAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'waitingAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'additionalAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'removalAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'totalExtdAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'eduAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'unionAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'sumAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totalAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'totalCol',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'occpgrdNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',width:'70',id:'s1_districtCd'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',width:'70',id:'s1_staffNo'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',width:'70',id:'s1_occptypeClsCd'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',width:'80',id:'s1_occptypeClsNm'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',width:'70',id:'s1_occpgrdCd',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'80',id:'s1_occpgrdNm',expression:'targetColValue()'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s1_staffNm',expression:'count(\'staffNm\')'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s1_shiftCnt',expression:'sum(\'shiftCnt\')',textAlign:'right',dataType:'number',displayFormat:'#,###.0'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s1_realShiftCnt',expression:'sum(\'realShiftCnt\')',textAlign:'right',dataType:'number',displayFormat:'#,###.0'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'100',id:'s1_standardSal',expression:'sum(\'standardSal\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'90',id:'s1_threeShiftAmt',expression:'sum(\'threeShiftAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'90',id:'s1_over24Amt',expression:'sum(\'over24Amt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s1_holidayAmt',expression:'sum(\'holidayAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s1_specialAmt',expression:'sum(\'specialAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s1_extdAmt',expression:'sum(\'extdAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s1_weatherAmt',expression:'sum(\'weatherAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s1_moveAmt',expression:'sum(\'moveAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s1_singleAmt',expression:'sum(\'singleAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s1_emerAmt',expression:'sum(\'emerAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s1_waitingAmt',expression:'sum(\'waitingAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s1_additionalAmt',expression:'sum(\'additionalAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s1_removalAmt',expression:'sum(\'removalAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s1_totalExtdAmt',expression:'sum(\'totalExtdAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'90',id:'s1_eduAmt',expression:'sum(\'eduAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'90',id:'s1_unionAmt',expression:'sum(\'unionAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'90',id:'s1_sumAmt',expression:'sum(\'sumAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'100',id:'s1_totalAmt',expression:'sum(\'totalAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column124',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'totalCol',style:'',id:'subTotal2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',width:'70',id:'s2_districtCd'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',width:'70',id:'s2_staffNo'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',width:'70',id:'s2_occptypeClsCd'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',width:'80',id:'s2_occptypeClsNm'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',width:'70',id:'s2_occpgrdCd',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',width:'80',id:'s2_occpgrdNm',value:'계'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s2_staffNm',expression:'count(\'staffNm\')'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s2_shiftCnt',expression:'sum(\'shiftCnt\')',textAlign:'right',dataType:'number',displayFormat:'#,###.0'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s2_realShiftCnt',expression:'sum(\'realShiftCnt\')',textAlign:'right',dataType:'number',displayFormat:'#,###.0'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'100',id:'s2_standardSal',expression:'sum(\'standardSal\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'90',id:'s2_threeShiftAmt',expression:'sum(\'threeShiftAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'90',id:'s2_over24Amt',expression:'sum(\'over24Amt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s2_holidayAmt',expression:'sum(\'holidayAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s2_specialAmt',expression:'sum(\'specialAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s2_extdAmt',expression:'sum(\'extdAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s2_weatherAmt',expression:'sum(\'weatherAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s2_moveAmt',expression:'sum(\'moveAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s2_singleAmt',expression:'sum(\'singleAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s2_emerAmt',expression:'sum(\'emerAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s2_waitingAmt',expression:'sum(\'waitingAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s2_additionalAmt',expression:'sum(\'additionalAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s2_removalAmt',expression:'sum(\'removalAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'s2_totalExtdAmt',expression:'sum(\'totalExtdAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'90',id:'s2_eduAmt',expression:'sum(\'eduAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'90',id:'s2_unionAmt',expression:'sum(\'unionAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'90',id:'s2_sumAmt',expression:'sum(\'sumAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'100',id:'s2_totalAmt',expression:'sum(\'totalAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column125',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',width:'70',id:'f1_districtCd'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',width:'70',id:'f1_staffNo',value:'합계'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',width:'70',id:'f1_occptypeClsCd'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',width:'80',id:'f1_occptypeClsNm'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',width:'70',id:'f1_occpgrdCd'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',width:'80',id:'f1_occpgrdNm'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'f1_staffNm',expression:'count(\'staffNm\')'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'f1_shiftCnt',expression:'sum(\'shiftCnt\')',textAlign:'right',dataType:'number',displayFormat:'#,###.0'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'f1_realShiftCnt',expression:'sum(\'realShiftCnt\')',textAlign:'right',dataType:'number',displayFormat:'#,###.0'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'100',id:'f1_standardSal',expression:'sum(\'standardSal\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'90',id:'f1_threeShiftAmt',expression:'sum(\'threeShiftAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'90',id:'f1_over24Amt',expression:'sum(\'over24Amt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'f1_holidayAmt',expression:'sum(\'holidayAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'f1_specialAmt',expression:'sum(\'specialAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'f1_extdAmt',expression:'sum(\'extdAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'f1_weatherAmt',expression:'sum(\'weatherAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'f1_moveAmt',expression:'sum(\'moveAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'f1_singleAmt',expression:'sum(\'singleAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'f1_emerAmt',expression:'sum(\'emerAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'f1_waitingAmt',expression:'sum(\'waitingAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'f1_additionalAmt',expression:'sum(\'additionalAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'f1_removalAmt',expression:'sum(\'removalAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'70',id:'f1_totalExtdAmt',expression:'sum(\'totalExtdAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'90',id:'f1_eduAmt',expression:'sum(\'eduAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'90',id:'f1_unionAmt',expression:'sum(\'unionAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'90',id:'f1_sumAmt',expression:'sum(\'sumAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'expression',width:'100',id:'f1_totalAmt',expression:'sum(\'totalAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column126',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})