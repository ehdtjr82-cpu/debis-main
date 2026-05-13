/*amd /ui/ds/op/wrkrslts/stockrslts/op_303_08_01b.xml 25216 c096d4e574c4e8fac857d7f0d526d016f462fc52813da0539b71b5b4029b06ec */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromDt',name:'시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDt',name:'종류일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrDeprtPortList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE CODE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'입항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'출항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dchrVsslNm',name:'양하선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dchrCallsignCd',name:'호출부호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impShpCoPortcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impShpCoService',name:'SVC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipVsslNm',name:'선적선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipCallsignCd',name:'호출부호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expShpCoPortcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expShpCoService',name:'SVC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BK NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'운송사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발터미널;코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착터미널;코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발터미널',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착터미널',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cwOdrNo',name:'CW오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csOdrNo',name:'CS오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'BILL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpVsslEngNm',name:'표시모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpPortcnt',name:'표시항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDepPortDt',name:'입출항일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition_combo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_LineList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tmp_ordKind',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/ds.op.wrkrslts.stockrslts.RetrieveCntrDeprtPortListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_cntrDeprtPortList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_cntrDeprtPortList","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submiterror':'scwin.sbm_Retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_line',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_condition_combo',target:'data:json,{"id":"ds_LineList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_line_submitdone','ev:submiterror':'scwin.sbm_line_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//물류>실적현황>컨테이너 재고>라인별 출항현황 조회
//조회조건 LINE:EAS, 출항일자:20190901, 오더종류:CP

scwin.vEndDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vStDate = $c.date.addMonth($p, scwin.vEndDate, -1); // 서버를 기준으로 현재 날짜 반환
scwin.memJson = $c.data.getMemInfo($p);
scwin.loginClntNo = scwin.memJson.clntNo;
scwin.userClsCd = scwin.memJson.userClsCd;
scwin.onpageload = function () {
  //공통코드 조회
  const codeOptions = [{
    grpCd: "SD113",
    compID: "acb_cnd_odrKndCd",
    opt: {
      "range": "1,C"
    }
  } //<%= GauceUtil.getCodeList("SD113", new int[] {1,3}, new String[] {DsConstants.ODR_CNTR, "1" }) %>">
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};
scwin.callBackCommonCode = function () {
  dlt_commonCodeSD113.removeColumnFilter('cd');
  var filterOptions = {
    type: 'regExp',
    colIndex: 'cd',
    key: /CW|CT|CP/gi,
    condition: 'and'
  };
  dlt_commonCodeSD113.setColumnFilter(filterOptions);
  dlt_commonCodeSD113.reform();
};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  /*
  	var dsHeader =  "lineCd:STRING(5)"			+ //라인코드
  					",fromDt:STRING(8)"			+ //일자From
  					",toDt:STRING(8)"			+ //일자To
  					",odrKndCd:STRING(2)"
  					;
  
       				
  	ds_condition.SetDataHeader(dsHeader); 
  	ds_condition.AddRow(); 
  */
  //console.log("f_OnLoad~~~");
  //console.log(scwin.memJson);

  scwin.f_setLine();
  ica_fromDt.setValue(scwin.vStDate);
  ica_toDt.setValue(scwin.vEndDate);
};
scwin.onUdcCompleted = function () {
  scwin.f_OnLoad();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //if (acb_lineCd.index == 0) {
  if (acb_lineCd.getValue() == "") {
    await $c.win.alert($p, "LINE을 선택하세요.");
    acb_lineCd.focus();
    return;
  }
  if (!(await $c.gus.cfValidate($p, [ica_fromDt, ica_toDt]))) {
    return;
  }
  if (!(await $c.gus.cfIsAfterDate($p, ica_fromDt.getValue().trim(), ica_toDt.getValue().trim()))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ica_fromDt.focus();
    return;
  }
  var diffObj = await $c.gus.cfDifferBetween($p, ica_fromDt.getValue(), ica_toDt.getValue());

  // 마감일자가 1달 이상인경우 확인
  if (diffObj.year > 0 || diffObj.month > 0) {
    //if(! await $c.gus.cfConfirmMsg(["출항일이 1개월이 넘습니다. 조회 하시겠습니까?"])){
    if (!(await $c.win.confirm($p, "출항일이 1개월이 넘습니다. 조회 하시겠습니까?"))) {
      ica_fromDt.focus();
      return false;
    }
  }

  //tr_Retrieve.Post();
  $c.sbm.execute($p, sbm_Retrieve);
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  acb_lineCd.focus();
  ica_fromDt.setValue(scwin.vStDate);
  ica_toDt.setValue(scwin.vEndDate);
  acb_cnd_odrKndCd.setValue("");
};

//-------------------------------------------------------------------------
// 라인콤보 조회 
//-------------------------------------------------------------------------
scwin.f_setLine = function () {
  //console.log("f_setLine~~~");
  //ds_LineList.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=LineEBC&queryId=retrieveLineEachShpCoCdCombo&param1=<%=loginClntNo%>&param2=<%=userClsCd%>&param3=";
  //ds_LineList.Reset();

  const jsonData = {
    sysCd: "LineEBC" // 시스템코드
    ,

    queryId: "retrieveLineEachShpCoCdCombo" // 쿼리ID
    ,

    param1: scwin.loginClntNo,
    param2: scwin.userClsCd,
    param3: ''
  };
  ds_condition_combo.setJSON(jsonData);
  $c.sbm.execute($p, sbm_line);
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_Retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  var rowcnt = ds_cntrDeprtPortList.getRowCount();
  tbx_totalRows.setValue(rowcnt);
  if (rowcnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }
  gr_cntrDeprtPortList.setFocusedCell(0, "lineCd", false);
};
scwin.sbm_Retrieve_submiterror = function (e) {};
scwin.sbm_line_submitdone = function (e) {};
scwin.sbm_line_submiterror = function (e) {};
scwin.btn_filedClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.customExp = function (data, formatData, rowIdx, colIdx) {
  var value = ds_cntrDeprtPortList.getCellData(rowIdx, "selfClsCd");
  //console.log("v_selfClsCd==>"+value);
  return $c.gus.decode($p, value, "JE", "", "동원로엑스(주)");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:55px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'LINE ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' col7',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_lineCd',style:'width:150px;',submenuSize:'auto',chooseOptionLabel:'-전체-',ref:'data:ds_condition.lineCd',mandatory:'true',objType:'data',title:'Line',visibleRowNum:'25'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_LineList'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출항일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromDt',refDataMap:'ds_condition',refEdDt:'toDt',refStDt:'fromDt',style:'',edFromId:'ica_fromDt',edToId:'ica_toDt',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'시작일',titleTo:'종료일',objTypeFrom:'data',objTypeTo:'data',objTypeBtn:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' col7',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_cnd_odrKndCd',style:'width:150px;',submenuSize:'auto',chooseOptionLabel:'-전체-',ref:'data:ds_condition.odrKndCd',title:'오더종류'},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_filedClear',style:'',type:'button','ev:onclick':'scwin.btn_filedClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'라인별 출항현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',grdDownOpts:'{"fileName":"라인별출항현황.xls","sheetName": "라인별출항현황","type":"2+4+8+16"}',gridID:'gr_cntrDeprtPortList',gridUpYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_cntrDeprtPortList',focusMode:'cell',id:'gr_cntrDeprtPortList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true',readOnly:'true',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'LINE',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'오더일자',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'입항일자',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'100',value:'출항일자',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'Cntr',width:'280',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'양하선박',width:'280',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'column41',value:'선적선박',displayMode:'label',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column80',value:'B/L번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column77',value:'BK NO',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column74',value:'운송사',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column71',value:'출발터미널<br/>코드',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column68',value:'도착터미널<br/>코드',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column65',value:'출발터미널',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column62',value:'도착터미널',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column59',value:'CW오더번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column56',value:'CS오더번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column53',value:'BILL번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column95',value:'표시모선명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column92',value:'표시항차',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column89',value:'입출항일',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column83',value:'회계일자',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',value:'컨테이너번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column26',value:'TYPE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',value:'SIZE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column24',value:'F/E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',value:'양하선명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'호출부호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',value:'항차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',value:'SVC',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',value:'선적선명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'호출부호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',value:'항차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column36',value:'SVC',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'lineCd',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrDt',inputType:'text',removeBorderStyle:'false',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'wrkStDt',inputType:'text',removeBorderStyle:'false',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'wrkEndDt',inputType:'text',removeBorderStyle:'false',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dchrVsslNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dchrCallsignCd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'impShpCoPortcnt',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'impShpCoService',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'shipVsslNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shipCallsignCd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'expShpCoPortcnt',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'expShpCoService',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'blNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'bookingNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',id:'selfClsCd',displayMode:'label',textAlign:'left',customFormatter:'scwin.customExp'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dptWrkPlCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvWrkPlCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dptWrkPlNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvWrkPlNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cwOdrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'csOdrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'certiNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inscrpVsslEngNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inscrpPortcnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arDepPortDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'postDt',displayMode:'label',displayFormat:'####/##/##'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column127',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column126',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column125',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column124',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column123',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column122',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column121',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column120',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column119',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column118',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column117',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column116',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column115',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column114',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column113',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column112',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column111',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column110',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column109',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column108',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column107',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column106',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column105',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column104',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column103',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column102',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column101',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column100',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column99',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column98',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})