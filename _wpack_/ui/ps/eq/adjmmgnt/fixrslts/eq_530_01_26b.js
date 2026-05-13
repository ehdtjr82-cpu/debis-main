/*amd /ui/ps/eq/adjmmgnt/fixrslts/eq_530_01_26b.xml 28181 73bf8831116b0950fee1d1745b1a94e3b94ceea9559ab46f86af93ebc6601307 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fixWork'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ymFrom',name:'기간',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ymTo',name:'기간',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqHomeClsCd',name:'사업부문',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'정비작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fixWork',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkNo',name:'정비번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkUnitNo',name:'작업단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkUnitNm',name:'작업명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upr',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'공임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wages',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtWagesSum',name:'총금액',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_combo',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'sysCd',name:'sysCd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'queryId',name:'queryId'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param1',name:'param1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param2',name:'param2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param3',name:'param3'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_homeClsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'LO'}]},{T:1,N:'name',E:[{T:4,cdata:'물류'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'TR'}]},{T:1,N:'name',E:[{T:4,cdata:'고속'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_wrkPlCd',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'code',name:'code'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name',name:'name'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ps.eq.adjmmgnt.fixrslts.RetrieveOutordWorkContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_fixWork","key":"IN_DS1"},{"id":"ds_fixWork","key":"OUT_DS1"}',target:'data:json,{"id":"ds_fixWork","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchCombo',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_combo',target:'data:json,{"id":"ds_wrkPlCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드
scwin.currDateFrom = WebSquare.date.getFormattedDate(new Date(), "yyyyMM") + "01";
scwin.currDate = WebSquare.date.getFormattedDate(new Date(), "yyyyMMdd");
scwin.onpageload = function () {
  console.log("=================scwin.onpageload ========");
  dma_fixWork.set("ymFrom", scwin.currDateFrom);
  dma_fixWork.set("ymTo", scwin.currDate);
  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "lc_homeClsCd",
    opt: {
      "range": "1,EQ"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {
  ica_ymFrom.focus();
};

// UDC 셋팅이 이후..
// scwin.onUdcCompleted = function() {
//     ica_ymFrom.focus();
// };

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log("=================scwin.f_Retrieve ========");
  let ret = await $c.gus.cfValidate($p, [ica_ymFrom, ica_ymTo, lc_homeClsCd, lc_wrkPlCd]);
  if (!ret) {
    return false;
  }
  gr_fixWork.setSubtotalVisible(true);
  $c.sbm.execute($p, sbm_search);
};
scwin.sbm_search_submitdone = function (e) {
  var rowCnt = ds_fixWork.getRowCount();
  spanTotal.setLabel(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  }
  gr_fixWork.setFocusedCell(0, 0);
};
scwin.lc_homeClsCd_onchange = function (info) {
  //cm.zz.RetrieveComboCMD.do?sysCd=PsCommonEBC&queryId=retriveWrkplList&param1="+lux_homeClsCd.BindColVal;
  //info.newValue
  dma_combo.set("sysCd", "PsCommonEBC");
  dma_combo.set("queryId", "retriveWrkplList");
  dma_combo.set("param1", info.newValue);
  $c.sbm.execute($p, sbm_searchCombo);
};

//-------------------------------------------------------------------------
// List 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_toExcel = async function () {
  let fileName = "외주작업 내역조회";
  let options = {
    fileName: fileName + ".xlsx",
    sheetName: fileName,
    useSubTotal: "true",
    useSubTotalData: "true",
    startRowIndex: 5,
    startColumnIndex: 0,
    type: 1
  };
  var infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 11,
    text: fileName,
    textAlign: "center",
    fontSize: 12,
    drawBorder: false
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 11,
    text: `조회일자 [${$c.date.formatDate($p, ica_ymFrom.getValue(), "date")} ~ ${$c.date.formatDate($p, ica_ymTo.getValue(), "date")}]`,
    textAlign: "left",
    fontSize: 12,
    drawBorder: false
  }, {
    rowIndex: 3,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 11,
    text: `사업부문 [${lc_homeClsCd.getText(true)}]`,
    textAlign: "left",
    fontSize: 12,
    drawBorder: false
  }, {
    rowIndex: 4,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 11,
    text: `대표정비작업장 [${lc_wrkPlCd.getText(true)}]`,
    textAlign: "left",
    fontSize: 12,
    drawBorder: false
  }];
  await $c.data.downloadGridViewExcel($p, gr_fixWork, options, infoArr);
};
scwin.f_setqrynm = function (tname, str) {
  var vSearchOption = ";font-face:굴림체;font-size:10pt;font-color:black;bgcolor:#ffffff;align: left;line-color:red;line-width:0pt;";
  gr_work_pl.SetExcelTitle(1, "value:" + tname + " [" + str + "]" + vSearchOption);
};
scwin.udc_acctDeptCdCond_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_acctDeptCdCond.getValue(), ed_acctDeptNmCond.getValue(), 'F', 'T');
};
scwin.udc_acctDeptCdCond_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_acctDeptCdCond.getValue(), ed_acctDeptNmCond.getValue(), 'F', 'T');
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 
  switch (disGubun) {
    // case 1:
    //     var pWhere = " ,"+lux_wrkPlCd.BindColVal+"";
    // 	// 정비사 팝업			
    // 	rtnList = cfCommonPopUp('retrieveFixEmpInfo'	// XML상의 SELECT ID	
    // 							,em_fixEmpNo.Text.trim()// 화면에서의 Code Element의	Value
    // 							,txt_fixEmpNm.value		// 화면에서의 Name Element의	Value
    // 							,pClose					// 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
    // 							,null					// 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
    // 							,null					// Title순서	
    // 							,null					// 보여주는 각 컬럼들의 폭	
    // 							,null					// 컬럼중에서 숨기는	컬럼 지정	
    // 							,pWhere					// SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
    // 							,null					// POP-UP뛰을때 원도우의	사용자 정의	폭
    // 							,null					// POP-UP뛰을때 우도우의	사용자 정의	높이	
    // 							,null					// 윈도우 위치 Y좌표	
    // 							,null					// 윈도우 위치 X좌표
    // 							,null					// 중복체크여부	("F")
    // 							,pAllSearch				// 전체검색허용여부	("F")
    // 							,"정비사원,사원코드,사원명"	// POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
    // 							);

    // 							  //사원코드  		사원명
    // 	// cfSetReturnValue(rtnList, em_fixEmpNo,   txt_fixEmpNm);
    // 	break;				
    case 2:
      var pWhere = "";
      // 귀속부서 팝업	
      await udc_acctDeptCdCond.cfCommonPopUp(scwin.udc_acctDeptCdCond_callback // XML상의 SELECT ID	
      , pCode // 화면에서의 Code Element의	Value
      , pName // 화면에서의 Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)                                    
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "T" // 전체검색허용여부	("F")
      , "귀속부서,부서코드,부서명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
  }
};
scwin.udc_acctDeptCdCond_callback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_acctDeptCdCond.setValue(rtnList[0]);
      ed_acctDeptCdCond.options.hidVal = rtnList[0];
      ed_acctDeptNmCond.setValue(rtnList[1]);
    }
  } else {
    ed_acctDeptCdCond.setValue("");
    ed_acctDeptCdCond.options.hidVal = "";
    ed_acctDeptNmCond.setValue("");
  }
};
scwin.btn_search1_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1);
};
scwin.f_Detail = function () {
  //팝업화면에게 KEY 정보를 넘겨준다.
  var argObject = new Object();
  argObject.homeClsCd = lux_homeClsCd.BindColVal;
  argObject.fixWrkPlCd = lux_wrkPlCd.BindColVal; // 정비작업장코드
  argObject.fixWrkNo = ds_fix_work_list.NameValue(row, "fixWrkNo"); // 정비작업번호

  var result = window.showModalDialog("/ps/eq/fixwrkmgnt/fixwrkmgnt/eq_330_01_04b.jsp", argObject, "dialogWidth:1020px; dialogHeight:674px; status:no; scroll:yes");
  if (result == "REFRESH") {
    // 다시 조회함
    f_Retrieve();
  }
};
scwin.gr_fixWork_oncellclick = async function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "fixWrkNo":
      //$c.win.alert("작업중(eq_330_01_04b 미개발)..........."+gr_fixWork.getCellData(rowIndex, "fixWrkNo"));
      let data = {
        homeClsCd: lc_homeClsCd.getValue(),
        fixWrkPlCd: lc_wrkPlCd.getValue(),
        fixWrkNo: gr_fixWork.getCellData(rowIndex, "fixWrkNo")
      };
      let popupResult;
      let url = "/ui/ps/eq/fixwrkmgnt/fixwrkmgnt/eq_330_01_04b.xml";
      const options = {
        id: "smpPop",
        type: "popup",
        modal: true,
        popupName: "정비작업",
        width: 1020,
        height: 674
      };
      popupResult = await $c.win.openPopup($p, url, options, data);
      if (popupResult != null) {}
      break;
  }
};
scwin.subtotalTargetColumnView = function (tci) {
  return tci;
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode === null || isCode === true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  }
  // inObj가 코드명 필드일 경우 팝업
  else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.udc_acctDeptCdCond_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_acctDeptNmCond, ed_acctDeptCdCond, 2, false);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_ym',refDataMap:'dma_fixWork',refEdDt:'ymTo',refStDt:'ymFrom',style:'',edFromId:'ica_ymFrom',edToId:'ica_ymTo',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width:150px;',submenuSize:'auto',ref:'data:dma_fixWork.eqHomeClsCd',chooseOptionLabel:'$blank','ev:onchange':'scwin.lc_homeClsCd_onchange',mandatory:'true',validExp:'사업부문:yes:',title:'사업부문',displayMode:'value delim label'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대표정비작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkPlCd',style:'width:150px;',submenuSize:'auto',ref:'data:dma_fixWork.fixWrkPlCd',mandatory:'true',validExp:'정비작업장:yes:',title:'대표정비작업장',visibleRowNum:'15',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_wrkPlCd'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCdCond',nameId:'ed_acctDeptNmCond',onloadCallbackFunc:'',popupID:'',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명',selectID:'retrieveAcctDeptCdInfo',style:'',id:'udc_acctDeptCdCond',refDataCollection:'dma_fixWork',code:'acctDeptCd',name:'acctDeptNm',popupGridHeadTitle:'귀속코드,부서명',objTypeName:'data',validExpCode:'귀속부서코드:yes',objTypeCode:'data',maxlengthCode:'5',allowCharCode:'0-9',maxlengthName:'30',editTypeName:'focus',btnId:'btn_acctDeptCdCond','ev:onblurCodeEvent':'scwin.udc_acctDeptCdCond_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCdCond_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCdCond_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_search1_init',style:'',type:'button','ev:onclick':'scwin.btn_search1_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_fixWork',id:'udc_gr_fixWork',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_toExcel',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_fixWork',focusMode:'row',id:'gr_fixWork',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',readOnly:'true',rowNumVisible:'false','ev:oncellclick':'scwin.gr_fixWork_oncellclick',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'업체명',width:'160'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'정비번호',width:'80'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'차량번호',width:'90'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'귀속부서',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'작업시작일자',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'작업종료일자',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'작업단위',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column44',inputType:'text',style:'',value:'작업명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'text',style:'',value:'수량',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'단가',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'공임',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column35',inputType:'text',style:'',value:'부가세',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column47',inputType:'text',style:'',value:'총금액',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNm',inputType:'text',removeBorderStyle:'false',width:'160',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'fixWrkNo',inputType:'text',removeBorderStyle:'false',textAlign:'center',width:'80',class:'underline',style:'color:blue;'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'vehclNo',inputType:'text',removeBorderStyle:'false',width:'90'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctDeptNm',inputType:'text',removeBorderStyle:'false',textAlign:'left',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'text',textAlign:'center',width:'80',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndDt',inputType:'text',textAlign:'center',width:'80',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkUnitNo',inputType:'text',textAlign:'center',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkUnitNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',style:'',value:'',width:'60',dataType:'number',textAlign:'right',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upr',inputType:'text',style:'',value:'',width:'120',dataType:'number',textAlign:'right',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wages',inputType:'',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amtWagesSum',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###,###,###',hidden:'true',excelCellType:'number'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'clntNm',style:'',id:'subTotal'},E:[{T:1,N:'w2:row',A:{style:'',id:'row9'},E:[{T:1,N:'w2:column',A:{width:'160',inputType:'expression',style:'',id:'column101',value:'소계',displayMode:'label',expression:'scwin.subtotalTargetColumnView(targetColValue())',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column100',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column98',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column95',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column94',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'expression',style:'',id:'column93',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'qty\')',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column92',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'upr\')',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column91',value:'',displayMode:'label',expression:'sum(\'amt\')',dataType:'number',displayFormat:'#,###,###,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column90',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'wages\')',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column89',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'amtWagesSum\')',textAlign:'right',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column31',inputType:'text',value:'합계',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',textAlign:'right',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',textAlign:'right',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',textAlign:'right',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column46',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'expression',style:'',value:'',width:'60',textAlign:'right',displayFormat:'#,###,###,###',expression:'sum(\'qty\')',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column40',inputType:'expression',style:'',value:'',width:'120',textAlign:'right',displayFormat:'#,###,###,###',expression:'sum(\'upr\')',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'expression',style:'',value:'',width:'120',dataType:'number',expression:'sum(\'amt\')',textAlign:'right',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column37',inputType:'expression',style:'',value:'',width:'100',displayFormat:'#,###,###,###',expression:'sum(\'wages\')',textAlign:'right',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column49',inputType:'expression',style:'',value:'',width:'100',displayFormat:'#,###,###,###',expression:'sum(\'amtWagesSum\')',textAlign:'right',excelCellType:'number',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spanTotal',label:'0',style:'',tagname:'span',displayFormat:'#,###'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})