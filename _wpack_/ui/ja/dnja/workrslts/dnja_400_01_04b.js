/*amd /ui/ja/dnja/workrslts/dnja_400_01_04b.xml 25445 48fe1b00ecb927e2a1a2cf7753936254226690a793325016387bb30092e9095b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptYmFrom',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptYmTo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNoCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'homeClntNm',name:'소속거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'managerNo',name:'매니저코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'managerNm',name:'매니저명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatNm',name:'부가세 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatTot',name:'누계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat01',name:'1월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat02',name:'2월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat03',name:'3월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat04',name:'4월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat05',name:'5월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat06',name:'6월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat07',name:'7월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat08',name:'8월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat09',name:'9월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat10',name:'10월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat11',name:'11월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat12',name:'12월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'columnMerge',name:'병합기준',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ja.dnja.workrslts.RetrieveVatConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurYear = $c.date.getServerDateTime($p, "yyyy");
scwin.strCurDate = null;
scwin.strPreDate = null;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //파라미터(JSON)
  var params = $c.data.getParameter($p);
  //파라미터(ARRAY)
  var arrParam = $p.getAllParameter().paramData;
  //scwin.arrParams[1];

  var stdDt = params.stdDt; // 대쉬보드 링크
  var etdDt = params.etdDt; // 대쉬보드 링크

  if (stdDt != null && !"".equals(stdDt) && typeof stdDt != undefined && etdDt != null && !"".equals(etdDt) && typeof etdDt != undefined) {
    scwin.strCurDate = etdDt;
    scwin.strPreDate = stdDt;
  } else {
    scwin.strCurDate = scwin.strCurYear + "1231";
    scwin.strPreDate = scwin.strCurYear + "0101";
  }
  scwin.strCurDate = scwin.strCurDate.substr(0, 6);
  scwin.strPreDate = scwin.strPreDate.substr(0, 6);
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  udc_dt.setInitDate(scwin.strPreDate, scwin.strCurDate);
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_portCondtionPart, null);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = async function (e) {
  var dtFrom = ed_dtFrom.getValue();
  var dtTo = ed_dtTo.getValue();
  if (ed_dtFrom.getValue() == "") {
    $c.win.alert($p, "년월은 필수조건 입니다.");
    await ed_dtFrom.focus();
    return false;
  } else if (ed_dtTo.getValue() == "") {
    $c.win.alert($p, "년월은 필수조건 입니다.");
    await ed_dtTo.focus();
    return false;
  }
  if (dtFrom.substring(0, 4) != dtTo.substring(0, 4)) {
    await $c.win.alert($p, "년도수가 같아야 합니다. ");
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
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
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// function name : f_openPopUp
// function desc : popup
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      //거래처
      udc_clntNo.setSelectId('retrieveSubsidaryClntListJa');
      udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , '150,170' // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "소속거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      udc_vehclNoCd.setSelectId('retrieveSubsidaryVehclList');
      udc_vehclNoCd.cfCommonPopUp(scwin.udc_vehclNoCd_callBackFunc // XML상의 SELECT ID  
      , pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는    컬럼 지정
      , "022" // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , "400" // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "차량번호,차량단축코드,차량번호" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};
scwin.udc_clntNo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    ed_clntNo.setValue(rtnList[0]); //코드
    txt_clntNm.setValue(rtnList[1]); //명
  }
};
scwin.udc_vehclNoCd_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    ed_vehclNoCd.setValue(rtnList[0]); //코드
    txt_cond_vehclNo.setValue(rtnList[1]); //명
  }
};
scwin.sbm_retrieve_submitdone = function (e) {
  let success = e.responseJSON.resultDataSet[0].Code == 0;
  if (!success || ds_out.getRowCount() < 1) {
    $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  totalRows.setValue(ds_out.getRowCount());
  gr_out.setFocusedCell(0, 0);

  //if(eventid == "color") {
  for (var i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, "selpchItemCd") == "9999") {
      //return "#FFDAB9";
      gr_out.setCellBackgroundColor(i, "selpchItemCd", "#FFDAB9");
      gr_out.setCellBackgroundColor(i, "selpchItemNm", "#FFDAB9");
      gr_out.setCellBackgroundColor(i, "vatTot", "#FFDAB9");
      gr_out.setCellBackgroundColor(i, "vat01", "#FFDAB9");
      gr_out.setCellBackgroundColor(i, "vat02", "#FFDAB9");
      gr_out.setCellBackgroundColor(i, "vat03", "#FFDAB9");
      gr_out.setCellBackgroundColor(i, "vat04", "#FFDAB9");
      gr_out.setCellBackgroundColor(i, "vat05", "#FFDAB9");
      gr_out.setCellBackgroundColor(i, "vat06", "#FFDAB9");
      gr_out.setCellBackgroundColor(i, "vat07", "#FFDAB9");
      gr_out.setCellBackgroundColor(i, "vat08", "#FFDAB9");
      gr_out.setCellBackgroundColor(i, "vat09", "#FFDAB9");
      gr_out.setCellBackgroundColor(i, "vat10", "#FFDAB9");
      gr_out.setCellBackgroundColor(i, "vat11", "#FFDAB9");
      gr_out.setCellBackgroundColor(i, "vat12", "#FFDAB9");
    }
  }
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, txt_clntNm, 1);
};
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_clntNm, ed_clntNo, 1, false);
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), txt_clntNm.getValue(), 'F', 'F');
};
scwin.udc_vehclNoCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_vehclNoCd, txt_cond_vehclNo, 3);
};
scwin.udc_vehclNoCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_cond_vehclNo, ed_vehclNoCd, 3, false);
};
scwin.udc_vehclNoCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_vehclNoCd.getValue(), txt_cond_vehclNo.getValue(), 'F', 'T');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_portCondtionPart',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToYearMon',A:{refStDt:'adptYmFrom',refDataMap:'dma_condition',style:'',id:'udc_dt',refEdDt:'adptYmTo',edFromId:'ed_dtFrom',edToId:'ed_dtTo',mandatoryFrom:'true',mandatoryTo:'true',titleTo:'시작일자',titleFrom:'시작일자',objTypeTo:'data',objTypeFrom:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_clntNo',nameId:'txt_clntNm',btnId:'btn_clntNo',id:'udc_clntNo',refDataCollection:'dma_condition',code:'pchsClntNo','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',allowCharCode:'0-9',UpperFlagCode:'0',maxlengthCode:'6',maxlengthName:'100',validTitle:'거래처번호','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_vehclNoCd',btnId:'btn_vehclNoCd',id:'udc_vehclNoCd',nameId:'txt_cond_vehclNo',refDataCollection:'dma_condition',name:'vehclNoCd','ev:onblurCodeEvent':'scwin.udc_vehclNoCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_vehclNoCd_onclickEvent',UpperFlagCode:'0',allowCharCode:'0-9',maxlengthCode:'4',validTitle:'차량번호','ev:onviewchangeNameEvent':'scwin.udc_vehclNoCd_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Clear'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'차량별 부가세 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridID:'gr_out',gridUpYn:'N',grdDownOpts:'{"fileName" : "차량별 부가세 현황.xlsx", "sheetName": "차량별 부가세 현황", "useStyle": "false" }',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',focusMode:'cell',columnMove:'false',fixedColumn:'4'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'소속거래처',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'차량번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'매니저',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'부가세<br/>구분',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'매출입항목',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'월별 부가세',width:'910',colSpan:'13',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column55',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column53',value:'누계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'1월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column51',value:'2월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',value:'3월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column49',value:'4월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'5월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'6월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column46',value:'7월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column78',value:'8월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column74',value:'9월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'10월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'11월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'12월',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClntNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left',upperColumn:'vehclNo',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'100',colMerge:'true',upperColumn:'homeClntNm',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'managerNo',inputType:'text',style:'',value:'',width:'70',colMerge:'true',upperColumn:'homeClntNm, vehclNo'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'managerNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',colMerge:'true',upperColumn:'homeClntNm, vehclNo'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatNm',inputType:'text',style:'',value:'',width:'80',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatTot',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',excelCellType:'bigDecimal',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vat01',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###',excelCellType:'bigDecimal',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vat02',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###',excelCellType:'bigDecimal',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vat03',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'bigDecimal',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vat04',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'bigDecimal',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vat05',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'bigDecimal',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vat06',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'bigDecimal',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vat07',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'bigDecimal',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vat08',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'bigDecimal',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vat09',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'bigDecimal',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vat10',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'bigDecimal',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vat11',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'bigDecimal',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vat12',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'bigDecimal',dataType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column36',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column39',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column80',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column76',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})