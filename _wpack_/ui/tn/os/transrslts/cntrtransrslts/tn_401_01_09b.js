/*amd /ui/tn/os/transrslts/cntrtransrslts/tn_401_01_09b.xml 19160 7a0e60ba601685ee532d1626ebb6b553572d825bfcd5c82cfa18fce55c335b39 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'toDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellBilgCltLupCond ',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onWrkPlCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offWrkPlCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrk20Qty',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrk40Qty',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrk45Qty',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rate',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellBilgCltLupCond',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'onWrkPlCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntKndCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsltsStdDtFm',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsltsStdDtTo',name:'name6',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.os.transrslts.cntrtransrslts.RetrieveCntrClntDstEchTransRsltsAggrCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_retrieve',target:'data:json,{"id":"ds_master","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.prevRow = 0;
scwin.memJson;
scwin.epId;
scwin.strDate;
scwin.strCurDate;
scwin.chkFlag;
scwin.userId;
scwin.udc_objNm;
scwin.interval01;
scwin.comboRtnFlag01;
scwin.comboRtnFlag02;
scwin.onpageload = async function () {
  scwin.f_SetDefaultData();
  const codeOptions = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "lc_sellBilgCltLupCond" //바인딩 할 컴포넌트 id
  }];
  await $c.data.setGauceUtil($p, codeOptions, scwin.commonCodeCallBack01);
  const codeOptions2 = [{
    method: "getLuxeComboData",
    param1: "RegionEBC",
    param2: "retrieveDistrict",
    param3: ["", "", "1", "2", "WDE"],
    // 기존 new String[]{...}
    compID: "lc_onWrkPlCd" // 바인딩할 콤보 ID
  }];
  await $c.data.setGauceUtil($p, codeOptions2, scwin.commonCodeCallBack02);
};
scwin.commonCodeCallBack01 = async function () {
  $p.getComponentById(lc_sellBilgCltLupCond.getDataListInfo().id).insertRow(0);
  $p.getComponentById(lc_sellBilgCltLupCond.getDataListInfo().id).setCellData(0, "code", "");
  $p.getComponentById(lc_sellBilgCltLupCond.getDataListInfo().id).setCellData(0, "name", "전체");
  // scwin.comboRtnFlag01 = true;
};
scwin.commonCodeCallBack02 = async function () {
  $p.getComponentById(lc_onWrkPlCd.getDataListInfo().id).insertRow(0);
  $p.getComponentById(lc_onWrkPlCd.getDataListInfo().id).setCellData(0, "code", "");
  $p.getComponentById(lc_onWrkPlCd.getDataListInfo().id).setCellData(0, "name", "전체");
};
scwin.sbm_retrieve_submitdone = function () {
  ed_totalCnt.setValue(ds_master.getRowCount());
  var options = {};
  options.sortIndex = "odrKndCd onWrkPlCd offWrkPlCd";
  options.sortOrder = "1 1 1";
  ds_master.multisort(options);
  // var l20 = "";
  // var l40 = "";
  // var l45 = "";
  // var sellAmt = "";
  // var pchsAmt = "";
  // var totRate = "";
  // for(var i=0; i <= ds_master.getRowCount(); i++ ){
  //     l20 = l20 + ds_master.getCellData(i, "wrk20Qty");
  //     l40 = l40 + ds_master.getCellData(i, "wrk40Qty");
  //     l45 = l45 + ds_master.getCellData(i, "wrk45Qty");
  //     sellAmt = sellAmt + ds_master.getCellData(i, "sellAmt");
  //     pchsAmt = buyAmt + ds_master.getCellData(i, "pchsAmt");
  //     totRate = totRate + ds_master.getCellData(i, "rate");
  // };
  // ds_master.setCellData(rowIndex, columnInfo, data)otal20.setValue(l20);
  // total40 
};
scwin.f_Excel = async function () {
  let rtn = await $c.win.confirm($p, "Excel 양식을 다운로드 하시겠습니까?");
  if (rtn) {
    var sheetTitle = "컨테이너거래처운송실적";
    $c.data.downloadGridViewExcel($p, gr_master, {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle
    });
  }
};
scwin.f_SetDefaultData = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.epId = scwin.memJson.epId;
  scwin.strDate = WebSquare.date.getCurrentServerDate().substring(0, 6);
  scwin.strCurDate = WebSquare.date.getCurrentServerDate().substring(0, 8);
  scwin.chkFlag = "";
  scwin.userId = scwin.memJson.userId;
  dma_search.set("fromDt", scwin.strCurDate);
  dma_search.set("toDt", scwin.strCurDate);
  scwin.comboRtnFlag01 = false;
  scwin.comboRtnFlag02 = false;
};
scwin.f_Retrieve = function () {
  var onWrkPlCd = lc_onWrkPlCd.selectedItem.orgLabel;
  if (onWrkPlCd == "전체") {
    onWrkPlCd = "";
  }
  if (!$c.gus.cfIsAfterDate($p, ed_rsltsStdDtFm.getValue(), ed_rsltsStdDtTo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_rsltsStdDtFm.focus();
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_rsltsStdDtFm.getValue(), ed_rsltsStdDtTo.getValue())) {
    !$c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_rsltsStdDtFm.focus();
    return;
  }

  //var condition = "?";

  dma_retrieve.set("bilgClntNo", ed_bilgClntNo.getValue());
  dma_retrieve.set("sellBilgCltLupCond", lc_sellBilgCltLupCond.getValue());
  dma_retrieve.set("onWrkPlCd", onWrkPlCd);
  dma_retrieve.set("clntKndCd", lc_clntKndCd.getValue());
  dma_retrieve.set("rsltsStdDtFm", ed_rsltsStdDtFm.getValue());
  dma_retrieve.set("rsltsStdDtTo", ed_rsltsStdDtTo.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.strCurDate = WebSquare.date.getCurrentServerDate().substring(0, 8);
  dma_search.set("fromDt", scwin.strCurDate);
  dma_search.set("toDt", scwin.strCurDate);
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);
  scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'F');
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면

  switch (disGubun) {
    case 1:
      // 거래처  팝업
      udc_bilgClnt.setSelectId("retrieveClntList_tpro");
      rtnList = await udc_bilgClnt.cfCommonPopUp(scwin.retrieveClntList_tpro_callBack, pCode, pName, pClose, null, null, null, "3,4,5,6,7,8,9,10", "" //" ,S"
      , null, null, null, null, null, pAllSearch, null, null); //

      //거래처ID    거래처명

      break;
  }
};
scwin.retrieveClntList_tpro_callBack = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgClntNo, ed_bilgClntNm);
};
scwin.udc_bilgClnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgClntNo.getValue(), ed_bilgClntNm.getValue(), 'F', 'F');
  // scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, ed_bilgClntNm, 1)
};
scwin.udc_bilgClnt_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNm, ed_bilgClntNo, 1);
};
scwin.udc_bilgClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, ed_bilgClntNm, 1);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출기준실적일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_rsltsStd',refDataMap:'dma_search',refEdDt:'toDt',refStDt:'fromDt',style:'',edToId:'ed_rsltsStdDtTo',edFromId:'ed_rsltsStdDtFm',mandatoryTo:'true',mandatoryFrom:'true',objTypeBtn:'data',objTypeFrom:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_sellBilgCltLupCond',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:dma_search.sellBilgCltLupCond ',displayMode:'label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_clntKndCd',style:'width:100px;',submenuSize:'auto',ref:'',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'청구거래처'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대표거래처'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_bilgClnt',codeId:'ed_bilgClntNo',nameId:'ed_bilgClntNm',btnId:'btn_bilgClnt',code:'bilgClntNo',refDataCollection:'dma_search','ev:onclickEvent':'scwin.udc_bilgClnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bilgClnt_onblurCodeEvent',name:'bilgClntNm','ev:onviewchangeNameEvent':'scwin.udc_bilgClnt_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'권역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_onWrkPlCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:dma_search.wrkPlCd',displayMode:'value delim label'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'컨테이너거래처별 운송실적 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_master',id:'udc_topGrd',gridDownFn:'scwin.f_Excel',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'15',visibleRowNumFix:'true',rowStatusVisible:'true',readOnly:'true',focusMode:'row'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'청구거래처',width:'180',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'운송내역',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'출발지',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'도착지',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'작업수량',width:'103',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'매출금액',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'매입금액',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'비율',width:'80',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'20′',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'103',inputType:'text',style:'',id:'column41',value:'40′',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'45′',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'180',textAlign:'left',style:';color:#0000FF;',class:'underline'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndCd',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onWrkPlCd',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offWrkPlCd',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrk20Qty',inputType:'text',width:'100',textAlign:'right',excelCellType:'number',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrk40Qty',inputType:'text',width:'103',textAlign:'right',excelCellType:'number',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrk45Qty',inputType:'text',width:'100',textAlign:'right',excelCellType:'number',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rate',inputType:'text',width:'80',textAlign:'right',dataType:'float',excelCellType:'bigDecimal',displayFormat:'#,###.0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column30',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'total20',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'wrk20Qty\')'}},{T:1,N:'w2:column',A:{width:'103',inputType:'expression',id:'total40',displayMode:'label',textAlign:'right',expression:'sum(\'wrk40Qty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'total45',displayMode:'label',textAlign:'right',expression:'sum(\'wrk45Qty\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'totalSellAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',expression:'sum(\'sellAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'totalPchAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',expression:'sum(\'pchsAmt\')'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'totalRate',displayMode:'label',textAlign:'right',expression:'SUM(\'sellAmt\') == 0 ? 0 : parseInt((SUM(\'pchsAmt\') * 100 / SUM(\'sellAmt\')) * 10 + 0.5) / 10',excelCellType:'bigDecimal',displayFormat:'#,###.#',dataType:'number',excelFormat:'#,##0.0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalCnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})