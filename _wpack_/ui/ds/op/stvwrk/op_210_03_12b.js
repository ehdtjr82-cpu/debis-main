/*amd /ui/ds/op/stvwrk/op_210_03_12b.xml 31131 f31f3019d972ca5af49bb4e6a92ed76f6fcf8b57d3caa2b2afb5c13a1889ca11 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_lobran'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'점소명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'구역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ehrEmpNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeClsCd',name:'직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeClsNm',name:'직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직책',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직책',dataType:'text'}},{T:1,N:'w2:column',A:{id:'benefitWage',name:'보장임금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'positionAllowWage',name:'직책수당',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stevedoreAllow',name:'하역수당',dataType:'text'}},{T:1,N:'w2:column',A:{id:'efficiencyAllow',name:'능률수당',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qualificationAllow',name:'자격수당',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trffcCost',name:'교통비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dayExtdShiftAllCnt',name:'개수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdWorkWage',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dayHoliShiftAllCnt',name:'개수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holiWorkWage',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dayHoliExtdShiftAllCnt',name:'개수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holiExtdWorkWage',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dayHoliNightShiftAllCnt',name:'개수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holiNightWorkWage',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dayEarlyShiftAllCnt',name:'개수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'earlyWorkWage',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dayDailyJobSubAllCnt',name:'개수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dailyWorkWage',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allMonthSumCnt',name:'개수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allowWage',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalWage',name:'총합계',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdYm',name:'작업일자 from',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endYm',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_lobran',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.stvwrk.RetrieveStvUnloadWrkSalCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_wrkList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_wrkList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p); // 로그인 정보를 가져온다.
scwin.lobranCd = scwin.memJson.lobranCd; // 물류 점소 코드

scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.vstdYm = scwin.vCurDate.substring(0, 6);
scwin.v_workClsCd = "";
scwin.bOnPopUp = false;
scwin.onpageload = function () {
  scwin.popTitleCh();
  const codeOptions = [{
    grpCd: "OP316",
    compID: "acb_wrkPlClsCd",
    opt: {
      "range": "1,1"
    }
  } // 구분
  ];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_retrieveLobran();
};

/**
 * UDC값
 */
scwin.onUdcCompleted = function () {
  scwin.f_SetDefaultData();
  $c.gus.cfDisableObjects($p, [acb_wrkPlClsCd]);
};
scwin.ondataload = function () {
  acb_wrkPlClsCd.setValue("03");
};
scwin.f_retrieveLobran = function () {
  dma_lobran.set("sysCd", "BerthNonUsableEBC");
  dma_lobran.set("queryId", "retriveLobranCodeList");
  $c.sbm.execute($p, sbm_lobran);
};
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "상용직 근무실적(평택)");
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  ica_stdYm.setValue(scwin.vstdYm);
  acb_lobranCd.focus();
};

//-------------------------------------------------------------------------
// 본선작업계획현황조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 검색조건 필수 입력 체크
  let ret = await $c.gus.cfValidate($p, [acb_lobranCd, ica_stdYm]);
  if (!ret) {
    return false;
  }
  dma_condition.set("wrkPlClsCd", acb_wrkPlClsCd.getValue());
  dma_condition.set("endYm", ica_stdYm.getValue() + "31");
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_gridToExcel = async function () {
  let gridColCount = 0;
  for (let i = 0; i < gr_wrkList.getTotalCol(); i++) {
    if (gr_wrkList.getColumnVisible(i)) {
      console.log(gridColCount);
      gridColCount++;
    }
  }
  let infoArr = [{
    rowIndex: 0,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "상용직 근무실적(평택)",
    textAlign: "center",
    //정렬
    fontSize: 16,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }];
  const options = {
    fileName: "상용직 근무실적(평택)" + ".xlsx",
    sheetName: "상용직 근무실적(평택)",
    startRowIndex: 2,
    startColumnIndex: 0,
    columnMove: true,
    type: 1
  };
  await $c.data.downloadGridViewExcel($p, gr_wrkList, options, infoArr);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  let rtnList; // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      let pWhere = acb_lobranCd.getValue();
      rtnList = await $c.gus.cfCommonPopUp($p, 'retrieveStvArrangementDailyManList' // XML상의 SELECT ID    
      , pCode // 화면에서의 ??? Code Element의    Value
      , pName // 화면에서의 ??? Name Element의    Value
      , pClose // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened)
      , '8' // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , '사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종' // Title순서    
      , '70,70,70,70,50,70,50,80' // 보여주는 각 컬럼들의 폭  
      , '5,7,9,10' // 컬럼중에서 숨기는    컬럼 지정   
      , pWhere // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , 500 // POP-UP뛰을때 원도우의    사용자 정의 폭
      , 400 // POP-UP뛰을때 우도우의    사용자 정의 높이    
      , null // 윈도우 위치 Y좌표    
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , "T" // 전체검색허용여부 ("F")
      , "사원,사원코드,사원명" // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      if (rtnList != null) {
        // ed_staffNo.setValue(rtnList[0]) = ;    //사원코드
        // ed_staffNm.setValue(rtnList[1]) = ;  //사원명
      } else {
        // ed_staffNo.setValue() = '';    //사원코드
        // ed_staffNm.setValue() = '';  //사원명
      }
      break;
    case 4:
    case 1:
      let wrkPlGbCd = "1"; //CY,장치장창고
      let lodeptCd = scwin.lobranCd;
      let paramList = "," + lodeptCd + "," + wrkPlGbCd;
      rtnList = await $c.gus.cfCommonPopUp($p, 'retrieveWrkPlInfo', pCode, pName, pClose, null, null, null, null, null, null, null, null, null); // 작업장

      //작업장코드  작업장명
      // cfSetReturnValue(rtnList, ed_wrkPlCd, txt_wrkPlNm);
      break;
  }
};

//-------------------------------------------------------------------------
// 본선관리번호검색 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function () {
  let args = {};
  args[0] = em_cvsslMgntNo.getValue(); //본선관리번호
  args[1] = ""; //수출입구분코드

  let options = {
    id: "op_204_01_07p",
    popupName: "본선관리번호검색팝업",
    width: 900,
    height: 400
  };
  let rtnValues = await $c.win.openPopup($p, 'ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml', options, args);
  if (rtnValues != null) {
    em_cvsslMgntNo.setValue(rtnValues[0]);
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 검색영역 Field Clear함.
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  acb_lobranCd.setValue(scwin.lobranCd);
  scwin.f_SetDefaultData();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_wrkList.getRowCount();
  // 총 조회건수 표시
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_lobran_submitdone = function (e) {
  if (scwin.lobranCd != "") {
    acb_lobranCd.setValue(scwin.lobranCd);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobranCd',search:'start',style:'width:200px;',submenuSize:'auto',objType:'key',searchTarget:'label',sortOption:'value',title:'점소',ref:'data:dma_condition.lobranCd',allOption:'',chooseOption:'',visibleRowNum:'12'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'조회년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_stdYm',pickerType:'dynamic',style:'',objType:'Data',displayFormat:'yyyy/MM',editType:'select',title:'조회년월',ref:'data:dma_condition.stdYm',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_wrkPlClsCd',search:'start',style:'width:200px;',submenuSize:'auto',searchTarget:'value',title:'구분'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'상용직 근무실적',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownUserAuth:'X',gridUpYn:'N',gridID:'gr_wrkList',gridDownFn:'scwin.f_gridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_wrkList',id:'gr_wrkList',style:'',visibleRowNum:'13',visibleRowNumFix:'true',columnMove:'true',columnMoveWithFooter:'true',dataDragSelectAutoScroll:'true',readOnly:'true',sortable:'false',rowStatusWidth:'20',fixedColumn:'8',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column89',value:'구역',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'성명',width:'120',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'사번',width:'100',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'사번',width:'120',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'직종',width:'100',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column93',value:'직종',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'직책',width:'100',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column97',value:'직책',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column101',value:'보장임금',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column105',value:'직책수당',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column109',value:'하역수당',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column113',value:'능률수당',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column117',value:'자격수당',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column121',value:'교통비',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'column31',value:'연장근로',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column70',value:'휴일근로',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column64',value:'휴일연장',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column58',value:'휴일야간',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column52',value:'조기출근',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column134',value:'일용직대체',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column46',value:'추가수당계',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column142',value:'총합계',displayMode:'label',rowSpan:'2',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column88',value:'개수',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column87',value:'금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column125',value:'개수',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column126',value:'금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column127',value:'개수',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column128',value:'금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column129',value:'개수',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column130',value:'금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column131',value:'개수',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column132',value:'금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column135',value:'개수',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column139',value:'금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column133',value:'개수',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column147',value:'금액',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkPlClsCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNm',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNo',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ehrEmpNo',inputType:'text',width:'120',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occptypeClsCd',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'occptypeClsNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdCd',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'occpgrdNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'benefitWage',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'positionAllowWage',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stevedoreAllow',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'efficiencyAllow',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'qualificationAllow',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'trffcCost',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dayExtdShiftAllCnt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'extdWorkWage',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dayHoliShiftAllCnt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'holiWorkWage',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dayHoliExtdShiftAllCnt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'holiExtdWorkWage',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dayHoliNightShiftAllCnt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'holiNightWorkWage',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dayEarlyShiftAllCnt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'earlyWorkWage',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dayDailyJobSubAllCnt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dailyWorkWage',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'allMonthSumCnt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'allowWage',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'totalWage',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column92',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column26',displayMode:'label',value:'0',dataType:'number',expression:'count("staffNm")',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column24',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column96',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column100',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column104',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("benefitWage")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column108',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("positionAllowWage")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column112',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("stevedoreAllow")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column116',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("efficiencyAllow")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column120',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("qualificationAllow")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column124',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("trffcCost")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column33',displayMode:'label',value:'0',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("dayExtdShiftAllCnt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column36',displayMode:'label',value:'0',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("extdWorkWage")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column72',displayMode:'label',value:'0',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("dayHoliShiftAllCnt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column69',displayMode:'label',value:'0',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("holiWorkWage")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column66',displayMode:'label',value:'0',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("dayHoliExtdShiftAllCnt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column63',displayMode:'label',value:'0',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("holiExtdWorkWage")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column60',displayMode:'label',value:'0',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("dayHoliNightShiftAllCnt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column57',displayMode:'label',value:'0',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("holiNightWorkWage")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column54',displayMode:'label',value:'0',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("dayEarlyShiftAllCnt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column51',displayMode:'label',value:'0',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("earlyWorkWage")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column137',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("dayDailyJobSubAllCnt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column141',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("dailyWorkWage")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column48',displayMode:'label',value:'0',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("allMonthSumCnt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column149',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("allowWage")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column145',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("totalWage")'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})