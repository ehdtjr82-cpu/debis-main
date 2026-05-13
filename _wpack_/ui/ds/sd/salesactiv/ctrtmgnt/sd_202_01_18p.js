/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_18p.xml 12194 7c2ef5dec2ae656a4cca6d7720d65995cc02565f3f698442bd981df89e87c878 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdWrkPathNo',name:'기준작업경로번호',dataType:'text',length:'3'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtWrkPathSeq',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_lkStepNo',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text',length:'4'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workPathEachworkStep',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdWrkPathNo',name:'기준작업경로번호',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'orgWrkStpSeq',name:'작업단계순번',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'hidSelpchItemNm',name:'매출입항목명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'rowStatus ',name:'name9',dataType:'text',length:'255'}},{T:1,N:'w2:column',A:{id:'ctrtWrkStpSeq',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name11',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_workPath',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lkStepNo',action:'/ds.lo.comninfomgnt.RetrieveStdWorkPathCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lkStepNo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveReferenceWorkPathListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_cond","key":"IN_DS1"},{"id":"ds_workPath","key":"OUT_DS1"},{"id":"ds_workPathEachworkStep","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_workPath","key":"OUT_DS1"},{"id":"ds_workPathEachworkStep","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.MSG_LO_INF_002 = "사업부문을 선택하여 주십시오.";
scwin.MSG_LO_INF_003 = "사업영역은 반드시 한 개 이상 체크되어야 합니다.";
scwin.pos_rowSts = 0;
//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 조회
  const codeOptions = [{
    grpCd: "SD113",
    compID: "lc_OdrKndCd"
  }, {
    grpCd: "LO121",
    compID: "gr_workPathEachworkStep:wrkPlClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, async () => {
    dlt_commonCodeLO121.insertRow(0);
    dlt_commonCodeLO121.setCellData(0, "cd", " ");
    dlt_commonCodeLO121.setCellData(0, "cdNm", "→");
    await scwin.f_defaultValue();
    scwin.f_Retrieve();
  });
};

//-------------------------------------------------------------------------
// 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = async function () {
  $c.gus.cfDisableKey($p);
  const {
    stdWrkPathNo,
    ctrtNo,
    ctrtWrkPathSeq
  } = $c.data.getParameter($p);
  dma_cond.setEmptyValue();
  dma_cond.set("stdWrkPathNo", stdWrkPathNo);
  dma_cond.set("ctrtNo", ctrtNo);
  dma_cond.set("ctrtWrkPathSeq", ctrtWrkPathSeq);
  const r = await $c.sbm.execute($p, sbm_lkStepNo);
  if (r.responseJSON.resultDataSet[0].Code < 0) return;
  ds_lkStepNo.setJSON(r.responseJSON.GAUCE);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_retrieve);
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_workPath.setRowPosition(0);
  var rowCnt = ds_workPathEachworkStep.getTotalRow();
  spn_totalRow.setValue(rowCnt);
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//닫기 버튼
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'grp_group253'},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'grp_group254',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업경로명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_ctrtWrkPathNm',style:'',objType:'key',ref:'data:ds_workPath.ctrtWrkPathNm','data-length':'50',maxByteLength:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_OdrKndCd',search:'start',style:'',submenuSize:'auto',objType:'key',allOption:'',chooseOption:'',ref:'data:ds_workPath.odrKndCd',displayMode:'label',textAlign:'left','data-length':'2'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lkStepNo'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_Rmk',style:'',objType:'key',ref:'data:ds_workPath.rmk','data-length':'500',maxByteLength:'500'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'참조작업경로상세',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_topGrdBtn',grdDownOpts:'{"fileName" : "참조작업경로상세.xlsx", "sheetName" : "참조작업경로상세", "type":"2+4+8+16"}',gridDownUserAuth:'X',btnUser:'Y',gridDownYn:'Y',templateYn:'N',gridID:'gr_workPathEachworkStep',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_workPathEachworkStep',focusMode:'row',id:'gr_workPathEachworkStep',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true',resize:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stdWrkPathNo',value:'기준작업경로번호',displayMode:'label',hidden:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column15',value:'No',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'작업장구분'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'작업단계',displayMode:'label',checkboxLabel:'포함'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column17',value:'매출항목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',style:'',inputType:'text',id:'column18',value:'매출귀속점서'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'stdWrkPathNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ctrtWrkStpSeq',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'wrkPlClsCd',inputType:'select',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'wrkStpCd',displayMode:'label',textAlign:'left',validExp:'wrkStpCd:작업단계:yes'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lkStepNo'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'selpchItemNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',style:'',inputType:'text',id:'lobranNm',value:'',minWidth:'0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totalRow',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})