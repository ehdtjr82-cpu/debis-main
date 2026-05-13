/*amd /ui/ac/fi/sap/sap_100_01_01b.xml 13151 36ee74f36127f63c891c9191829879eee763c6ae44caa61fc6735f62f04d2a62 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sapCode',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctCd',name:'DEBIS;계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'DEBIS;계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sapAcctCd',name:'SAP;계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sapAcctNm',name:'SAP;계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'acctCd',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"} , {"id":"ds_sapCode","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_sapCode","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveSapCode',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_sapCode","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//

scwin.row;
scwin.data;
scwin.prevRow = "";
scwin.onpageload = function () {
  scwin.f_Retrieve();
};
scwin.ed_acct_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'T');
};
scwin.trigger5_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.openPop = function (rowIndex, colId, nowValue) {
  scwin.row = rowIndex;
  scwin.data = nowValue;
  scwin.udc_comCode1_onclickEvent();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  dma_search.set("acctCd", ed_acctCd.getValue());
  sbm_search.action = "/ac.fi.sap.RetrieveSapAcctCdListCMD.do";
  $c.sbm.execute($p, sbm_search);
};
scwin.sbm_search_submitDone = async function () {
  totalRows.setValue(ds_sapCode.getRowCount());

  //조회결과가 0인경우
  if (ds_sapCode.getRowCount() == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
    await $c.gus.cfDisableBtn($p, [btn_save]);
  } else if (ds_sapCode.getRowCount() > 0) {
    await $c.gus.cfEnableObjects($p, [btn_save]);
    for (var i = 0; i <= ds_sapCode.getRowCount(); i++) {
      gr_sapCode.setCellInputType(i, "sapAcctCd", {
        inputType: "textImage"
      });
    }
    //$c.gus.cfGoPrevPosition(ds_sapCode, scwin.prevRow);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다. 	
  if (ds_sapCode.getModifiedIndex().length == 0) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  ;
  if (await $c.win.confirm($p, "저장하시겠습니까?")) {
    sbm_saveSapCode.action = "/ac.fi.sap.SaveSapAcctCdCMD.do";
    await $c.sbm.execute($p, sbm_saveSapCode);
  }
  await scwin.f_Retrieve();
};
scwin.f_downExcelSheet = async function () {
  let ret = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (ret) {
    if (ds_sapCode.getRowCount() > 0) {
      const options = {
        fileName: "SAP 계정코드 매핑.xlsx",
        // + ".xls",
        sheetName: "SAP 계정코드 매핑",
        useStyle: true,
        startColumnIndex: 0
      };
      await $c.data.downloadGridViewExcel($p, gr_sapCode, options);
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    ;
  }
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  var rtnList = new Array();
  switch (flag) {
    case '1':
      // 계정
      udc_acct.setSelectId("retrieveAcctCdInfo");
      rtnList = udc_acct.cfCommonPopUp(scwin.retrieveAcctCdInfoCb, ed_acctCd.getValue(), ed_acctNm.getValue(), check, null, null, null, null, null, null, null, null, null);
      break;
  }
};
scwin.retrieveAcctCdInfoCb = function (rtnList) {
  scwin.f_resultPopEd(ed_acctCd, ed_acctNm, rtnList);
};

//-------------------------------------------------------------------------
// 팝업체크
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  // 사용안함
  if (strCd.text.trim() == strCd.hidVal) return;
  strNm.value = "";
  strCd.hidVal = "";
  if (strCd.text.trim() != "") f_openPopUp(flag, 'T');
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명
    strCd.options.hidVal = rtnList[0]; // 히든값
  } else {
    strCd.setValue("");
    strNm.setValue("");
    strCd.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// sap 계정코드 팝업
//-------------------------------------------------------------------------
scwin.f_sapAcctCdPopUp = async function (row, data) {
  var rtnList = new Array();
  udc_comCode1.setSelectId('retrieveSapAcctCd');
  rtnList = await udc_comCode1.cfCommonPopUp(scwin.retrieveSapAcctCdCb, data, '', "F", null, null, null, null, null, null, null, null, null);
};
scwin.retrieveSapAcctCdCb = function (rtnList) {
  //통장코드
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    ds_sapCode.setCellData(scwin.row, "sapAcctCd", rtnList[0]);
    ds_sapCode.setCellData(scwin.row, "sapAcctNm", rtnList[1]);
    scwin.row = "";
    scwin.data = "";
  } else {
    ds_sapCode.setCellData(scwin.row, "sapAcctCd", "");
    ds_sapCode.setCellData(scwin.row, "sapAcctNm", "");
    scwin.row = "";
    scwin.data = "";
  }
};
scwin.udc_comCode1_onclickEvent = function (e) {
  scwin.f_sapAcctCdPopUp(scwin.row, scwin.data);
};
scwin.udc_acct_onblurCodeEvent = function (e) {
  scwin.f_openPopUp('1', 'T');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_acctCd',nameId:'ed_acctNm',id:'udc_acct',btnId:'btn_acct','ev:onclickEvent':'scwin.ed_acct_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acct_onblurCodeEvent',allowCharCode:'0-9',maxlengthCode:'7'}},{T:1,N:'w2:udc_comCode',A:{codeId:'',id:'udc_comCode1',nameId:'',popupID:'',style:'display : none;','ev:onclickEvent':'scwin.udc_comCode1_onclickEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'trigger5',style:'',type:'button','ev:onclick':'scwin.trigger5_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'SAP 계정코드 매핑 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',gridDownFn:'scwin.f_downExcelSheet',gridID:'gr_sapCode',id:'udc_utilComp'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_sapCode',id:'gr_sapCode',style:'',visibleRowNum:'16',visibleRowNumFix:'true',setCellInputTypeCustom:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'DEBIS<br/>계정코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'DEBIS<br/>계정명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'SAP<br/>계정코드',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'SAP<br/>계정명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'등록자',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'등록일시',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'수정자',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'수정일시',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',value:'',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sapAcctCd',inputType:'custom',style:'',value:'',width:'100',imageClickFunction:'scwin.openPop'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sapAcctNm',inputType:'text',style:'',value:'',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',style:'',value:'',width:'70',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modId',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modDtm',inputType:'text',style:'',value:'',width:'70',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})