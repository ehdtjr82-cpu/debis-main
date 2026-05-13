/*amd /ui/ps/eq/fmsmgnt/fmsoilmgnt/eq_610_02_08b.xml 35326 438772f2a0b3a76fb00baa27eb921952ffb1cb60c56b5437338f9aff830bdb30 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'uprClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilkndCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payClsCd',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oilBuyList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insYn',name:'입력',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatClntNo',name:'주유소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatClntNm',name:'주유소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilCoClntNo',name:'정유사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilCoClntNm',name:'정유사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilkndCd',name:'유종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'세부구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preCoAfClsCd',name:'판매구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNo',name:'매출처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNm',name:'매출처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payClsCd',name:'거래구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransYn',name:'운송',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transClntNo',name:'운송거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transClntNm',name:'운송거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inQty',name:'입고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insQty',name:'입고분할',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accumQty',name:'누적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdQty',name:'리터',dataType:'text'}},{T:1,N:'w2:column',A:{id:'factUpr',name:'공장도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcUpr',name:'할인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyUpr',name:'구매',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realDcUpr',name:'실제할인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realBuyUpr',name:'실제구매',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDcUpr',name:'운송할인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addDcUpr',name:'추가할인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyAmt',name:'구매',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realBuyAmt',name:'실제구매',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDcAmt',name:'운송할인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addDcAmt',name:'추가할인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transFeeUpr',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transFeeAmt',name:'금액',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveFMSOilBuyingContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_oilBuyList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_oilBuyList","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.ed_stDt = "";

//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = async function () {
  scwin.ed_stDt = $c.date.getServerDateTime($p, "yyyyMM") + "01";
  lc_inClsCd.setSelectedIndex(0); // 입고구분
  lc_transClsCd.setSelectedIndex(0); // 운송구분
  lc_uprClsCd.setSelectedIndex(0); // 단가구분
  lc_oilkndCd.setSelectedIndex(0);
  lc_transClsCd.setSelectedIndex(0);
  lc_payClsCd.setSelectedIndex(0);
  var codeOptions = [{
    grpCd: "TL105",
    compID: "lc_oilkndCd,gr_oilBuyList:oilkndCd"
  },
  //유종구분
  {
    grpCd: "TL113",
    compID: "lc_payClsCd,gr_oilBuyList:payClsCd"
  } // 거래구분
  ];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ed_stDt.setValue(scwin.ed_stDt); // 시작날짜
  ed_endDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd")); // 종료날짜
  ed_clntNo.setValue('125109');
  ed_clntNm.setValue('지에스칼텍스(주)여수공장');
};

//-------------------------------------------------------------------------
// 적용일자 체크 및 도움말 버튼 눌렀을 때 팝업 이벤트
//-------------------------------------------------------------------------
scwin.f_CheckAdptDt = async function () {
  var vAdptStDt = ed_stDt.getValue();
  var vAdptEndDt = ed_endDt.getValue();
  var vReturn = true;
  if (vAdptStDt == "" || vAdptStDt.length < 8) {
    await $c.win.alert($p, "입고시작일자를 정확하게 입력해주십시오.");
    ed_stDt.focus();
    vReturn = false;
  }
  if (vAdptEndDt == "" || vAdptEndDt.length < 8) {
    await $c.win.alert($p, "입고종료일자를 정확하게 입력해주십시오.");
    ed_endDt.focus();
    vReturn = false;
  }
  if (vAdptStDt > vAdptEndDt) {
    await $c.win.alert($p, "입고시작일자가 종료일자보다 늦은 날짜입니다.");
    ed_stDt.focus();
    vReturn = false;
  }
  return vReturn;
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  var vChkVal = await scwin.f_CheckAdptDt(); //날짜 체크한 결과 값을 리턴
  if (!vChkVal) {
    //true or false 결과을 체크하여 잘못들어갔다면, false값 리턴
    return false;
  }
  dma_search.set("stDt", ed_stDt.getValue());
  dma_search.set("endDt", ed_endDt.getValue());
  dma_search.set("inClsCd", lc_inClsCd.getValue());
  dma_search.set("transClsCd", lc_transClsCd.getValue());
  dma_search.set("clntNo", ed_clntNo.getValue());
  dma_search.set("uprClsCd", lc_uprClsCd.getValue());
  dma_search.set("oilkndCd", lc_oilkndCd.getValue());
  dma_search.set("payClsCd", lc_payClsCd.getValue());
  //dma_search.UseChangeInfo = "false";

  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    var rowCnt = ds_oilBuyList.getRowCount();
    totalRows.setValue(rowCnt);
    if (rowCnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    } else {
      var uprClsCd = "";
      uprClsCd = lc_uprClsCd.getValue();
      if (uprClsCd == "B") {
        // 기본할인
        gr_oilBuyList.setColumnVisible("insYn", false); // 입력여부
        gr_oilBuyList.setColumnVisible("insQty", false); // 입력수량
        gr_oilBuyList.setColumnVisible("realDcUpr", false); // 실제할인단가
        gr_oilBuyList.setColumnVisible("realBuyUpr", false); // 실제구매단가
        gr_oilBuyList.setColumnVisible("addDcUpr", false); // 추가할인단가
        gr_oilBuyList.setColumnVisible("realBuyAmt", false); // 실제구매금액
        gr_oilBuyList.setColumnVisible("addDcAmt", false); // 추가할인금액
        gr_oilBuyList.setColumnVisible("transFeeUpr", false); // 운송비단가
        gr_oilBuyList.setColumnVisible("transFeeAmt", false); // 운송비금액
      } else if (uprClsCd == "A") {
        // 추가할인
        gr_oilBuyList.setColumnVisible("insYn", true); // 입력여부
        gr_oilBuyList.setColumnVisible("insQty", true); // 입력수량
        gr_oilBuyList.setColumnVisible("realDcUpr", true); // 실제할인단가
        gr_oilBuyList.setColumnVisible("realBuyUpr", true); // 실제구매단가
        gr_oilBuyList.setColumnVisible("addDcUpr", true); // 추가할인단가
        gr_oilBuyList.setColumnVisible("realBuyAmt", true); // 실제구매금액
        gr_oilBuyList.setColumnVisible("addDcAmt", true); // 추가할인금액
        gr_oilBuyList.setColumnVisible("transFeeUpr", true); // 운송비단가
        gr_oilBuyList.setColumnVisible("transFeeAmt", true); // 운송비금액
      }
    }
  }
  ;
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = function () {
  var count = ds_oilBuyList.getRowCount();
  if (!(count > 0)) return;
  var options = {
    fileName: "FMS유류입고현황조회.xlsx",
    sheetName: "FMS유류입고현황조회",
    startRowIndex: 5,
    startColumnIndex: 0,
    type: 1,
    columnMove: true,
    //그리드 컬럼이동시 이동된 상태로 다운로드 유무 ( "true"인경우 컬럼이동 순서대로 출력 )
    evenRowBackgroundColor: "#f5fff5" //excel파일에서 그리드 body의 짝수줄의 배경색
  };
  var infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 17,
    text: "FMS유류입고현황조회",
    textAlign: "center",
    fontSize: 12,
    drawBorder: false
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 17,
    text: `입고일자 [${$c.date.formatDate($p, ed_stDt.getValue(), "date")} ~ ${$c.date.formatDate($p, ed_endDt.getValue(), "date")}]`,
    textAlign: "left",
    fontSize: 10,
    drawBorder: false
  }, {
    rowIndex: 3,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 17,
    text: `주유소 [${ed_clntNm.getValue()}[${ed_clntNo.getValue()}]]`,
    textAlign: "left",
    fontSize: 10,
    drawBorder: false
  }, {
    rowIndex: 4,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 17,
    text: `유종구분 [${lc_oilkndCd.getText()}]`,
    textAlign: "left",
    fontSize: 10,
    drawBorder: false
  }];
  $c.data.downloadGridViewExcel($p, gr_oilBuyList, options, infoArr);
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  switch (disGubun) {
    case 5:
      // 거래처(정유사)
      await udc_clnt.cfCommonPopUp(scwin.udc_clnt_callback_Func, pCode, pName, 'T', null, null, null, null, null, null, null, null, null);
      break;
  }
};
scwin.udc_clnt_callback_Func = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
};
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if ($c.gus.cfIsNull($p, isCode) || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.udc_clnt_onblurCodeEvent = async function (e) {
  await scwin.f_openCommonPopUp(5, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
  if ($c.gus.cfIsNull($p, ed_clntNo.getValue())) {
    ed_clntNm.setValue("");
  }
};
scwin.udc_clnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 5, false);
};
scwin.udc_clnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입고일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_fromToCalendar3',refEdDt:'',edFromId:'ed_stDt',edToId:'ed_endDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입고구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_inClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'',objType:'data',displayMode:'value delim label',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자가'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_transClsCd',style:'width: 150px;',submenuSize:'fixed',objType:'data',ref:'',displayMode:'value delim label',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자가운송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정유사운송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_payClsCd',style:'width: 150px;',submenuSize:'fixed',objType:'data',chooseOptionLabel:'전체',displayMode:'value delim label'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정유사 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntEmpNoList',codeId:'ed_clntNo',validTitle:'',nameId:'ed_clntNm',style:'',id:'udc_clnt','ev:onclickEvent':'scwin.udc_clnt_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_clnt_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent',allowCharCode:'A-Z0-9',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'단가구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_uprClsCd',style:'width: 150px;',submenuSize:'fixed',objType:'data',ref:'',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기본할인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'추가할인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유종구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_oilkndCd',style:'width: 150px;',submenuSize:'fixed',objType:'data',displayMode:'value delim label',chooseOptionLabel:'전체'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' FMS유류입고세부내역 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridUpYn:'N',templateYn:'N',gridID:'gr_oilBuyList',gridDownFn:'scwin.f_Excel',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_oilBuyList',focusMode:'row',id:'gr_oilBuyList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'13',visibleRowNumFix:'true',readOnly:'true',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'구분 ',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'입고</br>일자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'SEQ',width:'70',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column61',value:'입력',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'주유소',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'주유소',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'정유사',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'정유사',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'유종 ',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'세부</br>구분',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'판매</br>구분',width:'70',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'매출처',width:'100',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'매출처',width:'100',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'거래</br>구분',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column98',value:'운송',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column94',value:'운송거래처',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column90',value:'운송거래처',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'310',inputType:'text',style:'',id:'column86',value:'수량',displayMode:'label',colSpan:'4',rowSpan:''}},{T:1,N:'w2:column',A:{width:'640',inputType:'text',style:'',id:'column122',value:'단가',displayMode:'label',colSpan:'7',rowSpan:''}},{T:1,N:'w2:column',A:{width:'370',inputType:'text',style:'',id:'column138',value:'금액',displayMode:'label',colSpan:'4',rowSpan:''}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column158',value:'운송비',displayMode:'label',colSpan:'2',rowSpan:''}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column87',value:'입고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'입고분할',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column83',value:'누적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column127',value:'리터',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column123',value:'공장도',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column119',value:'할인',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column115',value:'구매',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column111',value:'실제할인',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column103',value:'실제구매',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column107',value:'운송할인',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column143',value:'추가할인',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column139',value:'구매',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column131',value:'실제구매',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column135',value:'운송할인',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column163',value:'추가할인',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column159',value:'단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column155',value:'금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clsCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inDt',inputType:'text',style:'',value:'',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',style:'',value:'',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'insYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'oilStatClntNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'oilStatClntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'oilCoClntNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'oilCoClntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilkndCd',inputType:'select',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClsCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'preCoAfClsCd',inputType:'text',style:'',value:'',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellClntNo',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellClntNm',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payClsCd',inputType:'select',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'selfTransYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'transClntNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'transClntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'inQty',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'insQty',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'accumQty',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stdQty',value:'',displayMode:'label',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'factUpr',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0.##',dataType:'float',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dcUpr',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0.##',dataType:'float',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'buyUpr',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0.##',dataType:'float',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'realDcUpr',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0.##',dataType:'float',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'realBuyUpr',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0.##',dataType:'float',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'transDcUpr',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0.##',dataType:'float',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'addDcUpr',value:'',displayMode:'label',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'buyAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'realBuyAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'transDcAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'addDcAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'transFeeUpr',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'transFeeAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column101',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column89',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'inQty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column81',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'insQty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column129',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column125',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column121',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column117',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column113',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column105',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column109',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column145',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column141',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'buyAmt\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column133',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'realBuyAmt\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column137',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'transDcAmt\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column165',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'addDcAmt\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column161',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column157',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'transFeeAmt\')',displayFormat:'#,###',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})