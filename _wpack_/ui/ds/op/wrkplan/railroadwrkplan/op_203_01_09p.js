/*amd /ui/ds/op/wrkplan/railroadwrkplan/op_203_01_09p.xml 18298 fe9d105330386f1b2ac799591e537eec0346a23dd875ae7cd5ce7829468a01d8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_btLoadingSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkStDt1',name:'wrkStDt1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt2',name:'wrkStDt2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'dptWrkPlCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'arvWrkPlCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'btTransNmCd',name:'btTransNmCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_btLoadingList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upDownLine',name:'상하행',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'Size',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clsNm',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fare',name:'운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldRate',name:'상하차료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구금액',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkplan.railroadwrkplan.RetrieveBTLoadingListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_btLoadingSearch","key":"IN_DS1"},{"id":"ds_btLoadingList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_btLoadingList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onUdcCompleted = function () {
  // ed_dptWrkPlCd.setValue("6R01");
  // ed_dptWrkPlNm.setValue("부산진역");
  // acb_btTransNmCd.setValue("DB");  
  scwin.strNowMonth = WebSquare.date.getCurrentServerDate().substring(0, 8);
  scwin.strNextMonth = $c.date.addMonth($p, scwin.strNowMonth, 1);
  ica_wrkStDt1.setValue(scwin.strNowMonth);
  ica_wrkStDt2.setValue(scwin.strNextMonth);
  acb_btTransNmCd.setValue("");
};
scwin.onpageload = function () {};
scwin.f_runExcel = async function () {
  var totCnt = ds_btLoadingList.getRowCount();
  if (totCnt != "0") {
    var cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      // cfGridToExcel(varGrNm, sheetTitle, sheetTitle, 2+4+8+16);	

      var fileName = "저수요적재리스트";
      await $c.data.downloadGridViewExcel($p, gr_btLoadingList, {
        fileName: fileName + ".xlsx",
        sheetName: fileName
      });
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.f_Retrieve = async function () {
  if (await $c.gus.cfValidate($p, [tbl_search])) {
    if (ica_wrkStDt1.getValue() == "" || ica_wrkStDt2.getValue() == "") {
      $c.win.alert($p, "적재기간은 필수입력 사항입니다.");
      return false;
    }
    if (ed_dptWrkPlCd.getValue() == "") {
      $c.win.alert($p, "출발역은 필수입력 사항입니다.");
      return false;
    }
    dma_btLoadingSearch.set("wrkStDt1", ica_wrkStDt1.getValue());
    dma_btLoadingSearch.set("wrkStDt2", ica_wrkStDt2.getValue());
    dma_btLoadingSearch.set("dptWrkPlCd", ed_dptWrkPlCd.getValue());
    dma_btLoadingSearch.set("arvWrkPlCd", ed_arvWrkPlCd.getValue());
    dma_btLoadingSearch.set("btTransNmCd", acb_btTransNmCd.getValue());
    $c.sbm.execute($p, sbm_retrieve);
  }
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  scwin.f_defaultValue();
};
scwin.sbm_retrieve_submitDone = function () {
  var cnt = 0;
  for (var i = 0; i < ds_btLoadingList.getRowCount(); i++) {
    var val = ds_btLoadingList.getCellData(i, "wrkStDt");
    if (val != "소계" && val != "합계") {
      cnt++;
    }
  }
  totalRows.setValue(cnt);
  if (ds_btLoadingList.getRowCount() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
};
scwin.ed_dptWrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_dptWrkPlCd.getValue(), ed_dptWrkPlNm.getValue(), 'F', 'T');
};
scwin.ed_dptWrkPl_onblurCodeEvent = function (e) {
  if (ed_dptWrkPlCd.getValue() != "") scwin.f_openCommonPopUp("1", "", "F", "T");
};
scwin.ed_arvWrkPl_onblurCodeEvent = function (e) {
  if (ed_arvWrkPlCd.getValue() != "") scwin.f_openCommonPopUp("2", "", "F", "T");
};
scwin.ed_arvWrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_arvWrkPlCd.getValue(), ed_arvWrkPlNm.getValue(), 'F', 'T');
};
scwin.ed_arvWrkPl_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_arvWrkPlNm, ed_arvWrkPlCd, 2, false);
};
scwin.ed_dptWrkPl_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_dptWrkPlNm, ed_dptWrkPlCd, 1, false);
};
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  await $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = await $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// function name : f_openCommonPopUp
// function desc : 팝업열기
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (gubun, pWhere, pAllSearchTF, pWinCloseTF) {
  var pCode = "";
  var pName = "";
  var pWtitleSearch = "";
  var pSelectID = "";
  var rtnList = new Array();
  if (gubun == "1") {
    pCode = ed_dptWrkPlCd.getValue();
    pName = ed_dptWrkPlNm.getValue();
    pWtitleSearch = "역명조회, 작업장코드, 작업장명";
    ed_dptWrkPl.setSelectId("retrieveTrainWorkPlace");
    rtnList = await ed_dptWrkPl.cfCommonPopUp(scwin.retrieveTrainCb,
    //pSelectID
    pCode,
    //pCode
    pName,
    //pName
    pWinCloseTF,
    //pWinCloseTF
    "5",
    //pDispCnt
    null,
    //pTitle
    "150,170",
    //pWidth
    null,
    //pHidden
    pWhere,
    //pWhere
    "440",
    //pW
    "500",
    //pH
    null,
    //pTop
    null,
    //pLeft
    null,
    //pExistTF - 중복체크여부	("F")
    pAllSearchTF,
    //pAllSearchTF - 전체검색허용여부	("F")
    pWtitleSearch,
    //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    null //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
    );
  } else if (gubun == "2") {
    pCode = ed_arvWrkPlCd.getValue();
    pName = ed_arvWrkPlNm.getValue();
    pWtitleSearch = "역명조회, 작업장코드, 작업장명";
    ed_arvWrkPl.setSelectId("retrieveTrainWorkPlace");
    rtnList = await ed_arvWrkPl.cfCommonPopUp(scwin.retrieveTrainCb2,
    //pSelectID
    pCode,
    //pCode
    pName,
    //pName
    pWinCloseTF,
    //pWinCloseTF
    "5",
    //pDispCnt
    null,
    //pTitle
    "150,170",
    //pWidth
    null,
    //pHidden
    pWhere,
    //pWhere
    "440",
    //pW
    "500",
    //pH
    null,
    //pTop
    null,
    //pLeft
    null,
    //pExistTF - 중복체크여부	("F")
    pAllSearchTF,
    //pAllSearchTF - 전체검색허용여부	("F")
    pWtitleSearch,
    //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    null //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
    );
  }
  ;
};
scwin.retrieveTrainCb = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_dptWrkPlCd.setValue(rtnList[0]);
      ed_dptWrkPlNm.setValue(rtnList[1]);
    }
  } else {
    ed_arvWrkPlCd.setValue("");
    ed_dptWrkPlNm.setValue("");
  }
};
scwin.retrieveTrainCb2 = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_arvWrkPlCd.setValue(rtnList[0]);
      ed_arvWrkPlNm.setValue(rtnList[1]);
    }
  } else {
    ed_arvWrkPlCd.setValue("");
    ed_arvWrkPlNm.setValue("");
  }
};
scwin.f_WinClose = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적재기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'ica_wrkStDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_wrkStDt1',edToId:'ica_wrkStDt2',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'ed_dptWrkPl',style:'',id:'ed_dptWrkPl',codeId:'ed_dptWrkPlCd',nameId:'ed_dptWrkPlNm','ev:onclickEvent':'scwin.ed_dptWrkPl_onclickEvent','ev:onblurCodeEvent':'scwin.ed_dptWrkPl_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.ed_dptWrkPl_onviewchangeNameEvent',UpperFlagCode:'1',allowCharCode:'0-9A-Za-z',maxlengthCode:'6',mandatoryCode:'true',validTitle:'출발역'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_arvWrkPlCd',nameId:'ed_arvWrkPlNm',id:'ed_arvWrkPl','ev:onblurCodeEvent':'scwin.ed_arvWrkPl_onblurCodeEvent','ev:onclickEvent':'scwin.ed_arvWrkPl_onclickEvent','ev:onviewchangeNameEvent':'scwin.ed_arvWrkPl_onviewchangeNameEvent',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',validTitle:'도착역'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'저수요운송명의',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w100',id:'acb_btTransNmCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',emptyItem:'true',mandatory:'true',editType:'select',title:'BT운송명의'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'천일'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CI'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'동부'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'양양'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'YY'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'저수요적재리스트',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_comP',btnUser:'Y',gridUpYn:'N',gridID:'gr_btLoadingList',gridDownFn:'scwin.f_runExcel',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_btLoadingList',id:'gr_btLoadingList',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'작업일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'상하행',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'컨테이너번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'Size',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'F/E',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'운임',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'상하차료',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'청구금액',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upDownLine',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clsNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fare',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,###.00000',dataType:'number',excelFormat:'#,###.00000',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lduldRate',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,###.00000',dataType:'number',excelFormat:'#,###.00000',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,###.00000',dataType:'number',excelFormat:'#,###.00000',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',displayFormat:'#,###'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'(단위 : 원)',class:'txt-blue'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_WinClose',id:'trigger1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})