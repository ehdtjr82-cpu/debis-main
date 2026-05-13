/*amd /ui/ac/fi/stdinfomgnt/fi_100_01_01p.xml 19981 0fe3ee023258c30f704db884eefb70786e7242e9539be41f80f63da6b017bf0f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'acctCd',name:'계정코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mst',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'histDate',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipPrtNm',name:'전표인쇄명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctEngNm',name:'영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'계정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClsCd',name:'차대구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctLvl',name:'계정레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'aggrClsCd',name:'집계구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperAcctCd',name:'상위계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperAcctNm',name:'상위계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipProcYn',name:'기표여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNoCd',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'termMgntYn',name:'기간관리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntYn',name:'거래처관리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empMgntYn',name:'사원관리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtMgntYn',name:'일자관리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsTaxAmtDeductYn',name:'매입세액불공제',dataType:'text'}},{T:1,N:'w2:column',A:{id:'substSlipCntlYn',name:'잔액통제',dataType:'text'}},{T:1,N:'w2:column',A:{id:'corCardDeductYn',name:'법인카드공제',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdCntlYn',name:'전도금통제',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transferSlipYn',name:'대체전표불가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expenseSlipYn',name:'경비전표불가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'privateCorCardYn',name:'개.법.카불가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptTermStDt',name:'적용기간_시작',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptTermEndDt',name:'적용기간_종료',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.stdinfomgnt.RetrieveAccountCodeHistListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search", "key":"IN_DS1"},{"id":"ds_mst","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_mst", "key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 계정이력조회
 * 메뉴경로 : 회계/재무회계/기준정보/계정이력조회
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/fi/stdinfomgnt/fi_100_01_01p.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-10-02
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼) : 엑셀다운로드 작업(첫라인에 제목나오도록 처리)
 *    5. [완료]GauceUtil.getGridCombo("XXXXX",false) 공통코드 가져오는거 작업처리해야 함.
 *    6. [완료, 2025-10-23]그리드 readOnly = true 시 그리드셀 색 안먹힘
 * 참고사항 :
 *    1. 그리드 fixedColumn 시 마지막 column의 다음 column이 움직이지 않는 현상 수정해야함.
 *       예)fixedColumn = "5" 인 경우 5자리까지 이동 불가해야하는데 6자리부터 이동불가됨(인스웨이브에서 공통처리 예정)
 * 수정이력 :
 *    - 2025-10-02      배기원    최초작성
 */
/**
  * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  ds_mst.removeAll();
  totalRows.setValue("0");
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
  scwin.f_SetDataHeader();
};

/**
 *  DataSet의 Header 정보 생성
 */
scwin.f_SetDataHeader = function () {
  // 조회조건용 DataSet Header 초기화
  // var GAUCE_DATASET_HEADER = "crn:STRING";
  // ds_condition.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_condition.AddRow();

  const codeOptions = [{
    grpCd: "FI001",
    compID: "gr_mst:acctClsCd"
  } //계정구분
  , {
    grpCd: "FI002",
    compID: "gr_mst:drcrClsCd"
  } //차대구분
  , {
    grpCd: "FI035",
    compID: "gr_mst:acctLvl"
  } //계정레벨
  , {
    grpCd: "CO014",
    compID: "gr_mst:aggrClsCd"
  } //집계구분
  , {
    grpCd: "FI027",
    compID: "gr_mst:mgntNoCd"
  } //관리번호
  , {
    grpCd: "FI094",
    compID: "gr_mst:pchsTaxAmtDeductYn"
  } //매입세액불공제
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};

/**
 * $c.data.setCommonCode 함수의 콜백함수
 */
scwin.callBackCommonCode = function () {
  dlt_commonCodeFI027.insertJSON(0, [{
    "grpCd": "FI027",
    "cd": "0",
    "cdNm": "0"
  }]);
  dlt_commonCodeFI027.reform();
  scwin.params = $c.data.getParameter($p);
  if (!$c.util.isEmpty($p, scwin.params["acctCd"])) {
    dma_search.set("acctCd", scwin.params["acctCd"]);
  }
  scwin.f_Retrieve();
};

/**
 * 조회
 */
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_mst.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt > 0) {
    gr_mst.setFocusedCell(0, 0);
  }
  let columInfo = $c.gus.f_GetColumnNames($p, ds_mst);
  //그리드 컬럼색 변경
  for (let j = 0; j < columInfo.length; j++) {
    for (let i = 0; i < rowCnt; i++) {
      //그리드체크박스 값 수정(엑셀에서 체크박스 0, 1값을 F, T로 변경하기 위함)
      if (columInfo[j] == "slipProcYn" || columInfo[j] == "termMgntYn" || columInfo[j] == "clntMgntYn" || columInfo[j] == "empMgntYn" || columInfo[j] == "dtMgntYn" || columInfo[j] == "substSlipCntlYn" || columInfo[j] == "corCardDeductYn" || columInfo[j] == "advcdCntlYn" || columInfo[j] == "transferSlipYn" || columInfo[j] == "expenseSlipYn" || columInfo[j] == "privateCorCardYn") {
        let checkValue = ds_mst.getOriginalCellData(i, columInfo[j]);
        ds_mst.setCellData(i, columInfo[j], scwin.decodeYnExp(checkValue));
      }

      /**
       * 그리드 색 지정 로직(첫번째 row는 비교 안함)
       * asis : <script language="javascript"  for=gr_mst event=OnUserColor(Row,eventid)>
       */
      if (i > 0) {
        let iPre = i - 1;
        if (ds_mst.getOriginalCellData(iPre, columInfo[j]) != ds_mst.getOriginalCellData(i, columInfo[j])) {
          if (columInfo[j] == "modId" || columInfo[j] == "histDate") {
            continue;
          } else if (columInfo[j] == "slipProcYn" || columInfo[j] == "termMgntYn" || columInfo[j] == "clntMgntYn" || columInfo[j] == "empMgntYn" || columInfo[j] == "dtMgntYn" || columInfo[j] == "substSlipCntlYn" || columInfo[j] == "corCardDeductYn" || columInfo[j] == "advcdCntlYn" || columInfo[j] == "transferSlipYn" || columInfo[j] == "expenseSlipYn" || columInfo[j] == "privateCorCardYn") {
            gr_mst.setCellBackgroundColor(i, columInfo[j], "#C1F3FF");
          } else {
            gr_mst.setCellColor(i, columInfo[j], "blue");
          }
        }
      }
    }
    ds_mst.reform();
    //마지막row에 수정자, 수정일자 컬럼색 변경
    if (columInfo[j] == "modId" || columInfo[j] == "histDate") {
      gr_mst.setCellBackgroundColor(rowCnt - 1, columInfo[j], "#FFD8D8");
    }
  }
};
scwin.decodeYnExp = function (data) {
  return $c.gus.decode($p, data, "0", "F", "1", "T", "F");
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_RunExcel = async function () {
  let totCnt = ds_mst.getRowCount();
  let sheetTitle = "계정이력목록";
  if (!(totCnt > 0)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    return;
  }
  //asis 엑셀옵션      
  // gridName.SetExcelTitle(1, "value:" + sheetName + ";"     // 표시할 타이틀
  //                               + "font-face:'돋움체';"	// 폰트
  //                               + "font-size:12pt;"		// 폰트 크기
  //                               + "font-color:black;"	// 폰트 색깔
  //                               + "bgcolor:#ffffff;"	      // 배경 색깔
  //                               + "align:center;"		// 정렬
  //                               + "line-color:white;"	// 타이틀 부분 테두리선 색깔
  //                               + "line-width:0pt;"		// 타이틀 테두리선 굵기
  //                               + "skiprow:1;")		// 타이틀 다음 떼는 로우 수
  //                               ;
  // cfGridToExcel(gridName, sheetName, fileName, 4 + 8 + 16);

  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    let options = {
      fileName: sheetTitle,
      // + ".xls",
      sheetName: sheetTitle,
      type: "1",
      headerColor: "#eeeeee",
      //"#E8E8E8", //연한회색 #33CCCC
      startRowIndex: 2
    };
    //그리드에 대한 내용을 추가 옵션
    let infoArr = [
    //제목
    {
      rowIndex: 0 //제목을 표시할 행 index
      ,
      colIndex: 0 //제목을 표시할 열 index
      ,
      rowSpan: 1 //병합할 행의 수
      ,
      colSpan: 25 //병합할 열의 수
      ,
      text: sheetTitle //표시할 내용(제목)
      ,
      textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
      ,
      fontSize: "12px" //폰트 size
      ,
      fontName: "돋움체" //폰트이름 
      ,
      drawBorder: false //cell의 border 지정(true, false)
    }];
    $c.data.downloadGridViewExcel($p, gr_mst, options, infoArr);
  }
};

/**
 * 닫기
 */
scwin.f_WinClose = function (e) {
  let rt = ["N/A"];
  $c.win.closePopup($p, rt);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_group1',style:'',gridUpYn:'N',gridID:'gr_mst',gridDownFn:'scwin.f_RunExcel',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_mst',focusMode:'cell',id:'gr_mst',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNumFix:'true',fixedColumn:'4',readOnly:'true',fixedColumnNoMove:'true',visibleRowNum:'15'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column31',value:'수정자ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column29',value:'수정일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column25',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column23',value:'전표인쇄명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'영문명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column19',value:'계정구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column17',value:'차대구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column13',value:'계정레벨',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column15',value:'집계구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column53',value:'상위계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column51',value:'상위계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column49',value:'기표여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column47',value:'관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column45',value:'기간관리',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column43',value:'거래처관리',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column41',value:'사원관리',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column39',value:'일자관리',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column33',value:'매입세액불공제',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column35',value:'잔액통제',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column37',value:'법인카드공제',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column63',value:'전도금통제',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column61',value:'대체전표불가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column59',value:'경비전표불가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column55',value:'개.법.카불가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'적용기간_시작',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'적용기간_종료',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'modId',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'160',inputType:'calendar',style:'',id:'histDate',value:'',calendarValueType:'yearMonthDateTimeSec',displayFormat:'yyyy/MM/dd HH:mm:SS'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'slipPrtNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctEngNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',style:'',id:'acctClsCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{width:'80',inputType:'select',style:'',id:'drcrClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',style:'',id:'acctLvl',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',style:'',id:'aggrClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'upperAcctCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'upperAcctNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'checkbox',style:'',id:'slipProcYn',value:'',displayMode:'label',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',style:'',id:'mgntNoCd',value:'',displayMode:'label',emptyItem:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'checkbox',style:'',id:'termMgntYn',value:'',displayMode:'label',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{width:'80',inputType:'checkbox',style:'',id:'clntMgntYn',value:'',displayMode:'label',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{width:'80',inputType:'checkbox',style:'',id:'empMgntYn',value:'',displayMode:'label',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{width:'80',inputType:'checkbox',style:'',id:'dtMgntYn',value:'',displayMode:'label',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{width:'130',inputType:'select',style:'',id:'pchsTaxAmtDeductYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',style:'',id:'substSlipCntlYn',value:'',displayMode:'label',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{width:'120',inputType:'checkbox',style:'',id:'corCardDeductYn',value:'',displayMode:'label',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',style:'',id:'advcdCntlYn',value:'',displayMode:'label',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{width:'120',inputType:'checkbox',style:'',id:'transferSlipYn',value:'',displayMode:'label',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{width:'120',inputType:'checkbox',style:'',id:'expenseSlipYn',value:'',displayMode:'label',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{width:'120',inputType:'checkbox',style:'',id:'privateCorCardYn',value:'',displayMode:'label',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'adptTermStDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'adptTermEndDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_WinClose',id:'btn_close',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})