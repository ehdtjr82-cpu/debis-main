/*amd /ui/ac/fi/electaxinvc/fi_900_01_05b.xml 12638 c9e6af47859853a5a26b0cc1e8746c200df51019c47e1c4de6fc2a4f57399f2b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gbn',name:'매출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatNo',name:'부가세번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'DEBIS공급가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'DEBIS부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supplyamount',name:'신고공급가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxamount',name:'신고부가세',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'spplyDtSt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spplyDtEnd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'responsetype',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.electaxinvc.RetreiveSendVatCompTableCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p); // 로그인 정보를 가져온다.
scwin.privAdmin = scwin.memJson.privAdmin; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님

scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.strFromDate = scwin.strCurDate.substring(0, 6) + "01";
scwin.strToDate = scwin.strCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.strCurDate);
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드
scwin.isSubCompany = false;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// UDC 로딩 완료 후
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ica_spplyDtSt.setValue(scwin.strFromDate);
  ica_spplyDtEnd.setValue(scwin.strCurDate);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (row) {
  dma_search.set("clntNo", "100002");
  if ($c.gus.cfIsNull($p, ica_spplyDtSt.getValue())) {
    await $c.win.alert($p, "공급일자는 필수 입니다.");
    ica_spplyDtSt.focus();
    return;
  }
  if ($c.gus.cfIsNull($p, ica_spplyDtEnd.getValue())) {
    await $c.win.alert($p, "공급일자는 필수 입니다.");
    ica_spplyDtEnd.focus();
    return;
  }
  let ret1 = await $c.date.isDate($p, ica_spplyDtSt.getValue().trim());
  if (!ret1) {
    await $c.win.alert($p, "공급일자가 날자 형식에 맞지 않습니다.");
    ica_spplyDtSt.focus();
    return;
  }
  let ret2 = await $c.date.isDate($p, ica_spplyDtEnd.getValue().trim());
  if (!ret2) {
    await $c.win.alert($p, "공급일자가 날자 형식에 맞지 않습니다.");
    ica_spplyDtEnd.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_srchCond);
  ica_spplyDtSt.setValue(scwin.strFromDate);
  ica_spplyDtEnd.setValue(scwin.strToDate);
  lc_responsetype.setValue("F");
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_out.getRowCount() == 0) {
    return;
  }
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    const options = {
      fileName: "전자세금계산서부가세대사조회.xlsx",
      sheetName: "전자세금계산서부가세대사조회"
    };
    $c.data.downloadGridViewExcel($p, gr_out, options);
  }
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_out.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    return;
  }
  totalRows.setValue(rowCnt);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'공급일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'}},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar4',refDataMap:'dma_search',refEdDt:'spplyDtEnd',refStDt:'spplyDtSt',style:'',edFromId:'ica_spplyDtSt',edToId:'ica_spplyDtEnd',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data',objTypeBtn:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비교대상',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_responsetype',style:'width: 200px;',submenuSize:'fixed',objType:'data',ref:'data:dma_search.responsetype',title:'비교대상'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'최종승인분과 비교'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'KT접수분과 비교'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownUserAuth:'X',gridDownFn:'scwin.f_Excel',gridID:'gr_out',btnUser:'Y',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'13',visibleRowNumFix:'true',validFeatures:'ignoreStatus=yes',columnMove:'true',rowStatusVisible:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'공급일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'매출입<br/>구분',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'전표번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'부가세번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'DEBIS<br/>공급가액',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'DEBIS<br/>부가세',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'신고<br/>공급가액',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',value:'신고<br/>부가세',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyDt',inputType:'text',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd',ioFormat:'yyyyMMdd',allowChar:'0-9',validateOnInput:'true',maxLength:'8'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'gbn',inputType:'text',width:'120',maxLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'120',maxLength:'10'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatNo',inputType:'text',width:'120',maxLength:'10'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyAmt',inputType:'text',width:'150',textAlign:'right',displayFormat:'#,##0',dataType:'number',validateOnInput:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vat',inputType:'text',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',validateOnInput:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'supplyamount',inputType:'text',width:'150',textAlign:'right',displayFormat:'#,##0',dataType:'number',validateOnInput:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'taxamount',inputType:'text',width:'150',textAlign:'right',displayFormat:'#,##0',dataType:'number',validateOnInput:'true',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})