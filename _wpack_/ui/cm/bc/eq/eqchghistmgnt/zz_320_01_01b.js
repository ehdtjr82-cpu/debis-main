/*amd /ui/cm/bc/eq/eqchghistmgnt/zz_320_01_01b.xml 22601 61f6322f24375e0222e6c1cfb6229fbd7d69453a43e9b16591aa262fe0b8660c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqChangeHistory',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqHomeClsCd',name:'장비소속',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNm',name:'장비명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seat',name:'좌석수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispDisuseStsCd',name:'매각폐기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regLobranCd',name:'등록물류점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'배정물류점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisWrkDistrictCd',name:'물류작업권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'고정자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqOfcCd',name:'렌터카영업소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixCopCoNo',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranDt',name:'이관일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqDelYn',name:'사용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisHveqRepCopCoNo',name:'물류중기대표협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbssysStDt',name:'회원제시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbssysEndDt',name:'회원제종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisVehclDrvNm1',name:'물류차량기사명1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisVehclDrv1MpNo',name:'물류차량기사1핸드폰번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransVehclStDt',name:'보세운송차량시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransVehclEndDt',name:'보세운송차량종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchEqChangeHistory',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_eqChangeHistory","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchEqChangeHistory_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_eqChangeHistory","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.currDate = WebSquare.date.getCurrentServerDate();

//hidden
scwin.txt_homeCls = "0";
scwin.txt_qryCond = "0";
scwin.txt_countRow = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "acb_sysCls,gr_eqChangeHistory:eqHomeClsCd"
  }, {
    grpCd: "ZZ507",
    compID: "gr_eqChangeHistory:seat"
  }, {
    grpCd: "ZZ310",
    compID: "gr_eqChangeHistory:dispDisuseStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  ed_qryCntn.focus();
  let vBeforeAWeekDay = scwin.f_SetDate("2", 7);
  let vToday = scwin.f_SetDate("1", 0);
  ed_adptStDt.setValue(vBeforeAWeekDay);
  ed_adptEndDt.setValue(vToday);
  acb_delYn.setValue("1");
};

//-------------------------------------------------------------------------
// 날짜설정
//-------------------------------------------------------------------------
scwin.f_SetDate = function (pSetType, pDayCnt) {
  //유형 1:현재일, 2:이전일, 3:이후일

  let vReturnDate = "";
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
// 적용일자 체크
//-------------------------------------------------------------------------
scwin.f_CheckAdptDt = async function () {
  let vAdptStDt = ed_adptStDt.getValue();
  let vAdptEndDt = ed_adptEndDt.getValue();
  let vReturn = true;
  if (vAdptStDt != "" && vAdptStDt.length < 8) {
    await $c.win.alert($p, "적용시작일자를 정확하게 입력해주십시오.");
    ed_adptStDt.focus();
    vReturn = false;
  }
  if (vAdptEndDt != "" && vAdptEndDt.length < 8) {
    await $c.win.alert($p, "적용종료일자를 정확하게 입력해주십시오.");
    ed_adptEndDt.focus();
    vReturn = false;
  }
  if (vAdptStDt > vAdptEndDt) {
    await $c.win.alert($p, "적용시작일자가 종료일자보다 늦은 날짜입니다.");
    ed_adptStDt.focus();
    vReturn = false;
  }
  return vReturn;
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let vChkVal = scwin.f_CheckAdptDt();
  if (!vChkVal) {
    return false;
  }
  let vQryCntn = ed_qryCntn.getValue();
  if (vQryCntn.trim() == "" || vQryCntn.length < 1) {
    await $c.win.alert($p, "검색내용을 한자이상 입력해주십시오.");
    ed_qryCntn.focus();
    return false;
  }
  let condition = "?";
  condition += "sys=" + acb_sysCls.getValue() + "&qryCond=" + acb_LupCond.getValue() + "&qryCntn=" + ed_qryCntn.getValue();
  condition += "&adptStDt=" + ed_adptStDt.getValue() + "&adptEndDt=" + ed_adptEndDt.getValue();
  condition += "&delYn=" + acb_delYn.getValue();
  sbm_searchEqChangeHistory.action = "/cm.bc.eq.eqchghistmgnt.cmd.RetrieveEquipmentChangeHistoryListCMD.do" + condition;
  $c.sbm.execute($p, sbm_searchEqChangeHistory);
};

//-------------------------------------------------------------------------
// 저장 : 삭제된 Row 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (!ds_eqChangeHistory.getModifiedIndex().length > 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["장비변경이력 그리드"]);
    return;
  }
  if (!(await $c.win.confirm($p, "저장 하시겠습니까?"))) {
    return;
  }
  sbm_save.action = "/cm.bc.eq.eqchghistmgnt.cmd.SaveEquipmentChangeHistoryListCMD.do";
  $c.sbm.execute($p, sbm_save);
};
scwin.f_downExcelSheet = async function () {
  if (gr_eqChangeHistory.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  let fileName = '장비변경이력목록';
  let sheetTitle = '장비변경이력목록';
  if (await $c.win.confirm($p, "장비변경이력목록을 Excel로 다운로드 하시겠습니까?")) {
    await $c.data.downloadGridViewExcel($p, gr_eqChangeHistory, {
      fileName: fileName + ".xlsx",
      sheetName: sheetTitle
    });
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.
  scwin.f_Retrieve();
};
scwin.sbm_searchEqChangeHistory_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_eqChangeHistory.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    totalRows.setValue(rowCnt);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_fromToCalendar3',refEdDt:'',edFromId:'ed_adptStDt',edToId:'ed_adptEndDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_sysCls',search:'start',style:'width: 150px',submenuSize:'fixed',visibleRowNum:'20'}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_LupCond',search:'start',style:'width: 150px',submenuSize:'fixed',allOption:'',chooseOption:'',ref:'',visibleRowNum:'20'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'차량단축코드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'차량번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'고정자산번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'장비번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'삭제여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_delYn',search:'start',style:'width: 100px;',submenuSize:'fixed',allOption:'',chooseOption:'',ref:'',visibleRowNum:'20'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정상'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'9'}]}]}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_qryCntn',style:'width: 150px;'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'장비변경이력목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_downExcelSheet',gridID:'gr_eqChangeHistory'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_eqChangeHistory',focusMode:'cell',id:'gr_eqChangeHistory',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true',columnMove:'true',dataDragSelectAutoScroll:'true',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'15'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'적용일자',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'순번',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'장비코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'삭제',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'장비소속',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'장비명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'단축코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'좌석수',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'매각폐기',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column50',value:'등록물류점소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column48',value:'배정물류점소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column46',value:'물류작업권역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'고정자산번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column44',value:'렌터카영업소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'협력업체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'이관일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'사용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column66',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column64',value:'물류중기대표협력업체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column62',value:'회원제시작일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column60',value:'회원제종료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column58',value:'물류차량기사명1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column54',value:'물류차량기사1핸드폰번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column56',value:'보세운송차량시작일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column78',value:'보세운송차량종료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'등록일자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'delYn',inputType:'select',style:'',value:'',width:'70',allOption:'',chooseOption:'',ref:'',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정상'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'eqHomeClsCd',inputType:'select',style:'',value:'',width:'100',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclShortCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'seat',inputType:'select',style:'',value:'',width:'100',emptyItem:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'dispDisuseStsCd',value:'',displayMode:'value delim label',emptyItem:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'regLobranCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'assgnLobranCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'logisWrkDistrictCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'fixedAsetNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'eqOfcCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fixCopCoNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'tranDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'eqDelYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'logisHveqRepCopCoNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'calendar',style:'',id:'mbssysStDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'150',inputType:'calendar',style:'',id:'mbssysEndDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'logisVehclDrvNm1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'logisVehclDrv1MpNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'calendar',style:'',id:'bondTransVehclStDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'180',inputType:'calendar',style:'',id:'bondTransVehclEndDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regId',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regDtm',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',btnRowAddYn:'N',gridID:'gr_eqChangeHistory'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})