/*amd /ui/ps/eq/adjmmgnt/fixrslts/eq_530_01_37b.xml 24370 7a9c3c97de1f452a0e4c739c58f4c196a1a6fa1ca857f947cb51c3dc0b55cb8e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fix_work_re'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ymFrom',name:'ymFrom',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ymTo',name:'ymTo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'fixWrkPlCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'acctDeptCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'eqCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_work_list',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'완료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkNo',name:'정비작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmrCls',name:'고객구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkStsCd',name:'정비작업상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixKndCd',name:'정비작업종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'고객명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'VAT 포함금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_lux_wrkPlCd',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'code',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name',name:'name2'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_wrkPlCd',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lux_wrkPlCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_wrkPlCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_fix_work_re","key":"IN_DS1"},{"id":"ds_fix_work_list","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_fix_work_list","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.userInfo = $c.data.getMemInfo($p);
scwin.eqHomeClsCd = scwin.userInfo.eqHomeClsCd == null ? "" : scwin.userInfo.eqHomeClsCd;
scwin.fixWrkPlCd = scwin.userInfo.fixWrkPlCd;
scwin.strCurDate = WebSquare.date.getCurrentServerDate();
scwin.termFrom = scwin.strCurDate.substring(0, 6) + "01";
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  ed_termFrom.setValue(scwin.termFrom);
  ed_termTo.setValue(scwin.strCurDate);
  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "lc_homeClsCd",
    opt: {
      'range': '1,EQ'
    }
  }, {
    grpCd: "EQ905",
    compID: "gr_work_pl:fixWrkStsCd"
  }, {
    grpCd: "EQ010",
    compID: "gr_work_pl:fixKndCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function (e) {
  if (scwin.eqHomeClsCd == "") {
    sbm_wrkPlCd.action = "/cm.zz.RetrieveComboCMD.do?sysCd=PsCommonEBC&queryId=retriveWrkplList&param1=" + lc_homeClsCd.getValue();
    $c.sbm.execute($p, sbm_wrkPlCd);
  } else {
    acb_homeClsCd.setValue(scwin.eqHomeClsCd);
    sbm_wrkPlCd.action = "/cm.zz.RetrieveComboCMD.do?sysCd=PsCommonEBC&queryId=retriveWrkplList&param1=" + lc_homeClsCd.getValue();
    $c.sbm.execute($p, sbm_wrkPlCd);
  }
  lc_homeClsCd.setValue("");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [tb_wrk]))) return;
  let strPath = "/ps.eq.adjmmgnt.fixrslts.RetrieveWorkIndicationDocumentPresentConditionCMD.do";
  sbm_retrieve.action = strPath;
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 데이타셋 행 수 가져오기
//-------------------------------------------------------------------------
// scwin.f_realRowCnt = function() {
//     var realRowCnt = 0;	
//     if( ds_fix_work_list.CountRow > 0 )  {    
//         for ( k=1; k <= ds_fix_work_list.CountRow; k++) {
//             if ( ds_fix_work_list.NameValue(k, "cstmrCls") != "" ) {
//                 realRowCnt += 1;	
//             }
//         }
//     }
//     return realRowCnt;
// };

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var pWhere = "";
  switch (disGubun) {
    case 1:
      // 장비 팝업
      await udc_eqBasicListInfo.cfCommonPopUp(scwin.udc_eqBasicListInfo_callBackFunc, pCode // 화면에서의 Code Element의	Value
      , pName // 화면에서의 Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , lc_homeClsCd.getValue() // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "F" // 전체검색허용여부	("F")
      , "장비,장비코드,차량번호" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    case 2:
      // 귀속부서 팝업			
      await udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, pCode // 화면에서의 Code Element의	Value
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
      , pAllSearch // 전체검색허용여부	("F")
      , "귀속부서,부서코드,부서명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
  }
};

// 콜백 함수
scwin.udc_eqBasicListInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_eqCd.setValue(rtnList[0]);
    ed_vehclNo.setValue(rtnList[1]);
  } else {
    ed_eqCd.setValue("");
    ed_vehclNo.setValue("");
  }
};
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_acctDeptCd.setValue(rtnList[0]);
    ed_acctDeptNm.setValue(rtnList[1]);
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  // cfClearPairObj(pairObj);
  pairObj.setValue("");

  // 검색어 세팅
  // var pVal = cfGetValue(inObj);
  let pVal = inObj.getValue();

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_wrk);
  lc_homeClsCd.setValue(scwin.eqHomeClsCd);
  lc_wrkPlCd.setValue(scwin.fixWrkPlCd);
  sbm_wrkPlCd.action = "/cm.zz.RetrieveComboCMD.do?sysCd=PsCommonEBC&queryId=retriveWrkplList&param1=" + lc_homeClsCd.getValue();
  $c.sbm.execute($p, sbm_wrkPlCd);
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  let cntRow = ds_fix_work_list.getRowCount();
  if (cntRow == 0) {
    return;
  }
  let fileName = '작업지시서 현황';
  let options = {
    fileName: fileName + ".xlsx",
    sheetName: fileName,
    useSubTotal: "true",
    useSubTotalData: "true",
    startRowIndex: 4,
    startColumnIndex: 0,
    type: 1
  };
  var infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 9,
    text: fileName,
    textAlign: "center",
    fontSize: 12,
    drawBorder: false
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 9,
    text: `정비기간 [${$c.date.formatDate($p, ed_termFrom.getValue(), "date")} ~ ${$c.date.formatDate($p, ed_termTo.getValue(), "date")}]`,
    textAlign: "left",
    fontSize: 12,
    drawBorder: false
  }, {
    rowIndex: 3,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 9,
    text: `정비작업장 [${lc_wrkPlCd.getText(true)}]`,
    textAlign: "left",
    fontSize: 12,
    drawBorder: false
  }];
  await $c.data.downloadGridViewExcel($p, gr_work_pl, options, infoArr);
  //await $c.data.downloadGridViewExcel(gr_work_pl, { fileName: fileName + ".xlsx", sheetName: sheetTitle });
};

// 이벤트 시작
scwin.acb_homeClsCd_onviewchange = function (info) {
  sbm_wrkPlCd.action = "/cm.zz.RetrieveComboCMD.do?sysCd=PsCommonEBC&queryId=retriveWrkplList&param1=" + lc_homeClsCd.getValue();
  $c.sbm.execute($p, sbm_wrkPlCd);
};
scwin.udc_eqBasicListInfo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_eqCd.getValue(), ed_vehclNo.getValue(), 'T', 'T');
};
scwin.udc_eqBasicListInfo_onviewchangeCodeEvent = function (info) {
  if (ed_eqCd.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_eqCd, ed_vehclNo, 1, true);
  } else {
    ed_vehclNo.setValue("");
  }
};
scwin.udc_eqBasicListInfo_onviewchangeNameEvent = function (info) {
  if (ed_vehclNo.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_vehclNo, ed_eqCd, 1, false);
  } else {
    ed_eqCd.setValue("");
  }
};
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'T');
};
scwin.udc_acctDeptCdInfo_onviewchangeCodeEvent = function (info) {
  if (ed_acctDeptCd.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_acctDeptCd, ed_acctDeptNm, 2, true);
  } else {
    ed_acctDeptNm.setValue("");
  }
};
scwin.udc_acctDeptCdInfo_onviewchangeNameEvent = function (info) {
  if (ed_acctDeptNm.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_acctDeptNm, ed_acctDeptCd, 2, false);
  } else {
    ed_acctDeptCd.setValue("");
  }
};
scwin.sbm_retrieve_submitdone = function (e) {};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_fix_work_list.getRowCount();
  spanTotal.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_wrk',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ed_termFrom',edToId:'ed_termTo',id:'udc_fromToCalendar1',mandatoryFrom:'true',mandatoryTo:'true',refDataMap:'dma_fix_work_re',refEdDt:'ymTo',refStDt:'ymFrom',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select','ev:onviewchange':'scwin.acb_homeClsCd_onviewchange',id:'lc_homeClsCd',ref:'',search:'start',style:'width: 100px;',submenuSize:'fixed',allOption:'',chooseOption:'',mandatory:'true',title:'사업부문',emptyItem:'true'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정비작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'false',class:'',editType:'select',id:'lc_wrkPlCd',ref:'data:dma_fix_work_re.fixWrkPlCd',search:'start',style:'width: 140px;',submenuSize:'fixed',mandatory:'true',title:'정비작업장',visibleRowNum:'20'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lux_wrkPlCd'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{code:'eqCd',codeId:'ed_eqCd','ev:onclickEvent':'scwin.udc_eqBasicListInfo_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_eqBasicListInfo_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_eqBasicListInfo_onviewchangeNameEvent',id:'udc_eqBasicListInfo',nameId:'ed_vehclNo',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'dma_fix_work_re',selectID:'retrieveEqBasicListInfo',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',code:'acctDeptCd',codeId:'ed_acctDeptCd','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCdInfo_onviewchangeNameEvent',id:'udc_acctDeptCdInfo',maxlengthCode:'5',nameId:'ed_acctDeptNm',popupID:'',refDataCollection:'dma_fix_work_re',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'','ev:onviewchangeCodeEvent':'scwin.udc_acctDeptCdInfo_onviewchangeCodeEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_search1_init',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_work_pl',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',id:'udc_work_pl',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_fix_work_list',id:'gr_work_pl',style:'',visibleRowNum:'16',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'작업종료일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'정비작업번호',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'구분',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'정비작업상태',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'정비작업종류',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'차량번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'귀속부서',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'고객명',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'정비비',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column28',value:'VAT포함금액',displayMode:'label',hidden:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndDt',inputType:'text',style:'',value:'',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkNo',inputType:'text',style:'',value:'',width:'110',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cstmrCls',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkStsCd',inputType:'select',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'fixKndCd',inputType:'select',style:'',value:'',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'120',class:'left',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAmt',inputType:'',style:'',value:'',width:'120',textAlign:'right',class:'',dataType:'number',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'totAmt',value:'',displayMode:'label',textAlign:'right',hidden:'true',excelCellType:'number'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'wrkEndDt',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column49',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column46',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column43',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'bilgAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column38',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column37',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column36',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column35',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column34',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column33',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column32',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'bilgAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column31',value:'',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})