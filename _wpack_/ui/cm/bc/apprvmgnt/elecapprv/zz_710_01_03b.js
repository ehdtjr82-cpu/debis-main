/*amd /ui/cm/bc/apprvmgnt/elecapprv/zz_710_01_03b.xml 21710 64cb15342ae7edd9b99b35dab801baf16068f0c35cbff99737c6227467f5ebb4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fromApprvReqDt',name:'fromApprvReqDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toApprvReqDt',name:'toApprvReqDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawAcctDeptCd',name:'drawAcctDeptCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvStsCd',name:'apprvStsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvDocKndCd',name:'apprvDocKndCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'slipNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqNo',name:'reqNo',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_approveStsList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvSts',name:'결재상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postReqDt',name:'회계요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDt',name:'상신일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKnd',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'관리거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrCls',name:'차대구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drAmt',name:'차변금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crAmt',name:'대변금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqrId',name:'전표요청자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqrNm',name:'전표요청자성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvGbn',name:'전결위임구분',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_approveStsList',action:'/cm.bc.apprvmgnt.elecapprv.RetrieveSlipApprovePresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_search',target:'data:json,{"id":"ds_approveStsList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_approveStsList_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.currDate = WebSquare.date.getFormattedDate(new Date(), "yyyyMMdd");
scwin.onpageload = function () {
  console.log("===========scwin.onpageload==========");
  const codeOptions = [{
    grpCd: "ZZ022",
    compID: "lc_apprvDocKndCd",
    opt: {
      'range': '1,01'
    }
  }, {
    grpCd: "ZZ021",
    compID: "lc_apprvStsCd",
    opt: {
      'range': '1,C'
    }
  }];
  $c.data.setCommonCode($p, codeOptions);

  //value="^전체,<%=GauceUtil.getLuxeComboData("AccountDepartmentEBC", "retrieveAccountDepartmentAllComboDTO")%>">
  const codeOptions2 = [{
    method: "getLuxeComboData",
    param1: "AccountDepartmentEBC",
    param2: "retrieveAccountDepartmentAllComboDTO",
    param3: [""],
    compID: "lc_drawAcctDeptCd"
  }];
  $c.data.setGauceUtil($p, codeOptions2);
};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {
  console.log("===========scwin.ondataload==========");
};

// UDC 셋팅이 이후..
scwin.onUdcCompleted = function () {
  console.log("===========scwin.onUdcCompleted==========");
  var vBeforeAWeekDay = scwin.f_SetDate("2", 7);
  var vToday = scwin.f_SetDate("1", 0);
  ica_fromApprvReqDt.setValue(vBeforeAWeekDay);
  ica_toApprvReqDt.setValue(vToday);
};

//-------------------------------------------------------------------------
// 날짜설정
//-------------------------------------------------------------------------
scwin.f_SetDate = function (pSetType, pDayCnt) {
  //유형 1:현재일, 2:이전일, 3:이후일
  var vReturnDate = "";
  if (pSetType == "1") {
    vReturnDate = scwin.currDate;
  } else if (pSetType == "2") {
    vReturnDate = WebSquare.date.dateAdd(scwin.currDate, -pDayCnt);
  } else if (pSetType == "3") {
    vReturnDate = WebSquare.date.dateAdd(scwin.currDate, pDayCnt);
  }
  return vReturnDate;
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  var vFromApprvReqDt = ica_fromApprvReqDt.getValue().trim(); // From결재요청일자
  var vToApprvReqDt = ica_toApprvReqDt.getValue().trim(); // To결재요청일자

  if (vFromApprvReqDt != "" && vFromApprvReqDt.length < 8) {
    await $c.win.alert($p, "요청시작일자를 정확하게 입력해 주십시오.");
    ica_fromApprvReqDt.focus();
    return false;
  }
  if (vToApprvReqDt != "" && vToApprvReqDt.length < 8) {
    await $c.win.alert($p, "요청종료일자를 정확하게 입력해 주십시오.");
    ica_toApprvReqDt.focus();
    return false;
  }
  if (vFromApprvReqDt != "" && vToApprvReqDt != "" && vFromApprvReqDt > vToApprvReqDt) {
    await $c.win.alert($p, "요청일 종료일자가 시작일자보다 이전입니다.");
    ica_toApprvReqDt.focus();
    return false;
  }

  // var vDrawAcctDeptCd = drawAcctDeptCd.valueOfIndex("code",drawAcctDeptCd.Index);  // 작성귀속부서코드
  // var vApprvDocKndCd = apprvDocKndCd.valueOfIndex("code",apprvDocKndCd.Index);  // 결재요청구분
  // var vApprvStsCd = apprvStsCd.valueOfIndex("code",apprvStsCd.Index);  // 결재상태코드
  // var vSlipNo = searchSlipNo.value; // 전표번호
  // var vReqNo = searchReqNo.value; // 요청번호

  dma_search.set("fromApprvReqDt", ica_fromApprvReqDt.getValue());
  dma_search.set("toApprvReqDt", ica_toApprvReqDt.getValue());
  dma_search.set("drawAcctDeptCd", lc_drawAcctDeptCd.getValue());
  dma_search.set("apprvStsCd", lc_apprvStsCd.getValue());
  dma_search.set("apprvDocKndCd", lc_apprvDocKndCd.getValue());
  dma_search.set("slipNo", ed_searchSlipNo.getValue());
  dma_search.set("reqNo", ed_searchReqNo.getValue());
  $c.sbm.execute($p, sbm_approveStsList);
};

//-------------------------------------------------------------------------
// 전자결재요청 Tray Component에서 EP 사용자 ID가져오기
//-------------------------------------------------------------------------
scwin.f_getSSOInfo = function () {
  var EXIST_YN = 0;
  if (vSabun != "") {
    EXIST_YN = 1;
  } else {
    try {
      EXIST_YN = SSOCheck.IsExist("GROUP");
    } catch (exception) {
      EXIST_YN = 0;
    }
  }
  if (EXIST_YN == 1) {
    SSO_LOGIN_YN = true;
    vSabun;
    vEpUserId = SSOCheck.GetETC("GROUP", "F18"); // EP사용자ID  
  }
  if (vEpUserId == "") {
    vEpUserId = vSabun;
  }
};

//-------------------------------------------------------------------------
//그리드 높이 늘리기
//-------------------------------------------------------------------------

//-----------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_runExcel = function (varGrNm) {
  let sheetTitle = "전표결재현황";
  const options = {
    fileName: sheetTitle + ".xlsx",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gr_approveStsList, options);
};
scwin.sbm_approveStsList_submitdone = function (e) {
  let rowCnt = ds_approveStsList.getRowCount();
  let vRealCount = 0;
  //gr_approveStsList.setFocusedCell(0, 0);
  if (rowCnt == 0) {
    spanTotal.setLabel(rowCnt);
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  } else {
    let vTmpApprvReqNo = "";
    for (let i = 0; i < rowCnt; i++) {
      let vApprvReqNo = ds_approveStsList.getCellData(i, "apprvReqNo");
      if (vTmpApprvReqNo != vApprvReqNo) {
        vTmpApprvReqNo = vApprvReqNo;
        vRealCount++;
      }
    }
    spanTotal.setLabel(vRealCount);
  }
};
scwin.gr_approveStsList_oncellclick = async function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "slipNo":
      var vslipNo = gr_approveStsList.getCellData(rowIndex, "slipNo");
      let result = await $c.gus.cfShowSlipInfo($p, vslipNo);
      break;
  }
};
scwin.btn_search1_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상신일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ica_fromApprvReqDt',edToId:'ica_toApprvReqDt',id:'udc_fromToCalendar',mandatoryFrom:'true',mandatoryTo:'true',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',class:'',editType:'select',id:'lc_drawAcctDeptCd',mandatory:'true',ref:'',search:'start',style:'width:200px;',submenuSize:'fixed',visibleRowNum:'15',chooseOptionLabel:'전체',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'00'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'국내 운영 실적'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'AS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'관리회계'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CO'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결재요청구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_apprvDocKndCd',style:'width: 150px;',submenuSize:'fixed',sortOption:'value'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결재상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_apprvStsCd',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',sortOption:'value'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_searchSlipNo',style:'width: 208px;',maxlength:'10'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_searchReqNo',style:'width: 200px;',maxByteLength:'15'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_search1_init',style:'',type:'button','ev:onclick':'scwin.btn_search1_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'전표결재현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_approveStsList',gridID:'gr_approveStsList',gridDownYn:'Y',gridUpYn:'N',gridDownFn:'scwin.f_runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_approveStsList',id:'gr_approveStsList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true',readOnly:'true','ev:oncellclick':'scwin.gr_approveStsList_oncellclick',fixedColumn:'7',fixedColumnNoMove:'false',fixedColumnWithHidden:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'요청번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'상신일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'전표번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'결재상태',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'삭제여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'전표종류',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'전표일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'결재</br>요청자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'회계</br>요청일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column44',value:'거래처명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column43',value:'금액(단위 :원)',displayMode:'label',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column40',value:'계정명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column64',value:'적요사항',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column67',value:'전결위임구분',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'차변',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'대변',width:'110'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'mergeStd',value:'',displayMode:'label',expression:'display(\'apprvReqNo\')+display(\'regDt\')+display(\'slipNo\')+display(\'apprvSts\')+display(\'delYn\')+display(\'slipKnd\')',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvReqNo',inputType:'text',style:'',value:'',width:'100',colMerge:'true',upperColumn:'mergeStd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd',colMerge:'true',upperColumn:'mergeStd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'color:blue;',id:'slipNo',value:'',displayMode:'label',class:'underline',colMerge:'true',upperColumn:'mergeStd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'apprvSts',value:'',displayMode:'label',colMerge:'true',upperColumn:'mergeStd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'delYn',value:'',displayMode:'label',colMerge:'true',upperColumn:'mergeStd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipKnd',value:'',displayMode:'label',textAlign:'left',colMerge:'true',upperColumn:'mergeStd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'text',style:'',value:'',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvReqrNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postReqDt',inputType:'text',style:'',value:'',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNm',inputType:'text',style:'',value:'',width:'180',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drAmt',inputType:'text',style:'',value:'',width:'110',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crAmt',inputType:'text',style:'',value:'',width:'110',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drcrCls',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',value:'',width:'180',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'apprvGbn',value:'',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'txt-dot txt-blue',id:'',label:'조회결과에 보이는 내용은(승인과 승인취소에 대하여) 상신,반려,중간승인,최종승인을 보여줍니다. ',style:''}}]}]}]}]}]})