/*amd /ui/ds/fs/consignmgnt/fs_401_01_08b.xml 19823 1353df38e3c130086aa99d2f5e07a8ba8dc57afd1e845b6db680d26c84f19156 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_costContents',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'yyMm',name:'년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'업체;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPersNm',name:'수탁자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deposit',name:'보증금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprCost',name:'감가상각비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'substPayAmt',name:'대급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'관리비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name14',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_costContentsDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itemNm',name:'비용항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'단가',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ym',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'branCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'posnClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'name6',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.consignmgnt.consignmgntcadjm.RetrieveConsignmentCostContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_queryCondition","key":"IN_DS1"},{"id":"ds_costContents","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_costContents","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_detail',action:'/ds.fs.consignmgnt.consignmgntcadjm.RetrieveConsignmentCostContentsDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_queryCondition","key":"IN_DS1"},{"id":"ds_costContentsDetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_costContentsDetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'$blank','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_detail_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.strCurMon = $c.date.addDate($p, scwin.strCurDate, -7).substring(0, 6);
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  ica_ed_ym.setValue(scwin.strCurMon);
  ed_branCd.focus();
};

//업체구분(사용자함수)
scwin.gubun = function (data) {
  return $c.gus.decode($p, data, "G", "지입", "W", "위수탁", "기타");
};

//점소popup
scwin.udc_comCode_bran_onclickEvent = function (e) {
  udc_comCode_bran.cfCommonPopUp(scwin.udc_comCode_bran_callBackFunc, ed_branCd.getValue(), ed_branNm.getValue(), "F", null, null, null, null, null, null, null, null, null, null, "F", null, null);
};

//점소pop callback
scwin.udc_comCode_bran_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_branCd, ed_branNm);
};
scwin.udc_comCode_bran_onblurCodeEvent = function (e) {
  if (ed_branCd.getValue() === "") {
    ed_branNm.setValue("");
  } else {
    udc_comCode_bran.cfCommonPopUp(scwin.udc_comCode_bran_callBackFunc, ed_branCd.getValue(), "", "T", null, null, null, null, null, null, null, null, null, null, "F", null, null);
  }
};
scwin.udc_comCode_bran_onviewchangeNameEvent = function (info) {
  if (ed_branNm.getValue() === "") {
    ed_branCd.setValue("");
  } else {
    udc_comCode_bran.cfCommonPopUp(scwin.udc_comCode_bran_callBackFunc, "", ed_branNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, "F", null, null);
  }
};

//차량popup
scwin.udc_comCode_vehcl_onclickEvent = function (e) {
  udc_comCode_vehcl.cfCommonPopUp(scwin.udc_comCode_vehcl_callBackFunc, ed_vehclShortCd.getValue(), ed_vehclNo.getValue(), "F", "2", null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", null, null);
};

//차량pop callback
scwin.udc_comCode_vehcl_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_vehclShortCd, ed_vehclNo);
};
scwin.udc_comCode_vehcl_onblurCodeEvent = function (e) {
  if (ed_vehclShortCd.getValue() === "") {
    ed_vehclNo.setValue("");
  } else {
    udc_comCode_vehcl.cfCommonPopUp(scwin.udc_comCode_vehcl_callBackFunc, ed_vehclShortCd.getValue(), "", "T", "2", null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", null, null);
  }
};
scwin.udc_comCode_vehcl_onviewchangeNameEvent = function (info) {
  if (ed_vehclNo.getValue() === "") {
    ed_vehclShortCd.setValue("");
  } else {
    udc_comCode_vehcl.cfCommonPopUp(scwin.udc_comCode_vehcl_callBackFunc, "", ed_vehclNo.getValue(), "T", "2", null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", null, null);
  }
};

//main grid rowchange
scwin.gr_costContents_onrowindexchange = function (rowIndex, oldRow) {
  let nCnt = ds_costContents.getRowCount();
  if (rowIndex < 0 || nCnt < 1) return;
  dma_queryCondition.set("ym", ds_costContents.getCellData(rowIndex, "yyMm"));
  dma_queryCondition.set("ctrtNo", ds_costContents.getCellData(rowIndex, "ctrtNo"));
  dma_queryCondition.set("eqCd", ds_costContents.getCellData(rowIndex, "eqCd"));
  $c.sbm.execute($p, sbm_retrieve_detail);
};
scwin.sbm_retrieve_detail_submitdone = function () {
  let tot_cnt = ds_costContentsDetail.getRowCount();
  total2.setValue(tot_cnt);
  if (tot_cnt > 0) {
    gr_costContentsDetail.setFocusedCell(0, 0);
  }
};

//조회
scwin.btn_retrieve_onclick = async function (e) {
  //validation check
  if (!(await $c.gus.cfValidate($p, [ica_ed_ym, ed_branCd]))) {
    return;
  }
  dma_queryCondition.set("ym", ica_ed_ym.getValue());
  dma_queryCondition.set("branCd", ed_branCd.getValue());
  dma_queryCondition.set("vehclNo", ed_vehclNo.getValue());
  dma_queryCondition.set("posnClsCd", acb_lc_posnClsCd.getValue());
  ds_costContentsDetail.removeAll();
  total.setValue(0);
  total2.setValue(0);
  $c.sbm.execute($p, sbm_retrieve);
};

//조회callback
scwin.sbm_retrieve_submitdone = function () {
  let rowcnt = ds_costContents.getRowCount();
  total.setValue(rowcnt);
  if (rowcnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    gr_costContents.setFocusedCell(0, 0);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_ed_ym',pickerType:'dynamic',style:'',mandatory:'true',displayFormat:'yyyy/MM',title:'기준월',maxYear:'2099',validCheck:'true',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_branCd',nameId:'ed_branNm',id:'udc_comCode_bran',mandatoryCode:'true',maxlengthCode:'4',UpperFlagCode:'1',selectID:'retrieveLobranInfo','ev:onclickEvent':'scwin.udc_comCode_bran_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_bran_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_bran_onviewchangeNameEvent',validTitle:'점소',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_vehclShortCd',nameId:'ed_vehclNo',id:'udc_comCode_vehcl',mandatoryCode:'false',maxlengthCode:'4',UpperFlagCode:'1',selectID:'retrieveVehiclesNo','ev:onclickEvent':'scwin.udc_comCode_vehcl_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_vehcl_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_vehcl_onviewchangeNameEvent',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업체구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_posnClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'위수탁'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'W'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'G'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'위수탁(지입차)관리비 ',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_costContents',style:'',autoFit:'allColumn',id:'gr_costContents',visibleRowNum:'15',class:'wq_gvw',focusMode:'row',focusMove:'true',readOnly:'true','ev:onrowindexchange':'scwin.gr_costContents_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'업체구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column11',value:'수탁자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'보증금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'감가상각비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'대급금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'관리비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'매출합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'합계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'posnClsCd',displayMode:'label',textAlign:'left',displayFormatter:'scwin.gubun'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'clntPersNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'deposit',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'deprCost',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'substPayAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'amt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'totAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'deposit\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'deprCost\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'substPayAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'amt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'sellAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column33',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'totAmt\')'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'total',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 25%;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'관리비 상세',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_costContentsDetail',id:'gr_costContentsDetail',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',focusMode:'row',focusMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'비용항목명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'단가',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'itemNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'100',value:'합계'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'expression',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'amt\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]}]})