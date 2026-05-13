/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_17p.xml 15308 5d1d81a73c27cfa4bfd815e9cfd378c0723a6eba22e19d66a0d4f96ecb80c5f7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdWrkPathNo',name:'기준작업경로번호',dataType:'text',length:'3'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_lkStepNo',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text',length:'4'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workPathEachworkStep',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdWrkPathNo',name:'기준작업경로번호',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'orgWrkStpSeq',name:'작업단계순번',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'hidSelpchItemNm',name:'매출입항목명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'rowStatus ',name:'name9',dataType:'text',length:'255'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_workPath',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'#N/A',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'stdWrkPathNo',name:'기준작업경로번호',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'stdWrkPathNm',name:'기준작업경로명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'bizDivCntrYn',name:'사업부문컨테이너여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'bizDivBulkYn',name:'사업부문벌크여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'bizDomTransYn',name:'사업영역운송여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'bizDomStvYn',name:'사업영역하역여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'bizDomStrYn',name:'사업영역보관여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'bizDomInatYn',name:'사업영역국제여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'bizDomTplYn',name:'사업영역3자물류여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'estTrgtYn',name:'견적대상여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text',length:'500'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text',length:'1'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lkStepNo',action:'/ds.lo.comninfomgnt.RetrieveStdWorkPathCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lkStepNo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lkStepNo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveStandardWorkPathDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_cond","key":"IN_DS1"},{"id":"ds_workPath","key":"OUT_DS1"},{"id":"ds_workPathEachworkStep","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_workPath","key":"OUT_DS1"},{"id":"ds_workPathEachworkStep","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.MSG_LO_INF_002 = "사업부문을 선택하여 주십시오.";
  scwin.MSG_LO_INF_003 = "사업영역은 반드시 한 개 이상 체크되어야 합니다.";
  scwin.pos_rowSts = 0;

  //공통코드 조회
  const codeOptions = [{
    grpCd: "SD113",
    compID: "acb_odrKndCd"
  }, {
    grpCd: "LO121",
    compID: "gr_workPathEachworkStep:wrkPlClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackSetCommonCode);

  //엑셀그리드 숨기기
  grdExcel.hide();
};

//-------------------------------------------------------------------------
// 공통코드 조회 후 callBack
//-------------------------------------------------------------------------
scwin.callBackSetCommonCode = function (e) {
  dlt_commonCodeLO121.setRowJSON(dlt_commonCodeLO121.getTotalRow(), {
    "cdNm": "→",
    "cd": "→"
  });
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  console.log("scwin.f_defaultValue");
  $c.gus.cfDisableKey($p);
  $c.sbm.execute($p, sbm_lkStepNo);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = function () {
  $c.sbm.execute($p, sbm_retrieve);
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//작업단계 조회 완료
scwin.sbm_lkStepNo_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var stdWrkPathNo = $c.data.getParameter($p, "stdWrkPathNo");
  dma_cond.set("stdWrkPathNo", stdWrkPathNo);
  scwin.f_retrieve();
};

//조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_workPath.setRowPosition(0);
  var rowCnt = ds_workPathEachworkStep.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  for (var i = 0; i < rowCnt; i++) {
    if ($c.util.isEmpty($p, ds_workPathEachworkStep.getCellData(i, "wrkPlClsCd"))) {
      ds_workPathEachworkStep.setCellData(i, "wrkPlClsCd", "→");
    }
  }
  gr_workPathEachworkStep.refreshColumn("wrkPlClsCd");
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//닫기 버튼
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'grp_group253'},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'grp_group254',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기준작업경로명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_stdWrkPathNm',style:'',objType:'key',ref:'data:ds_workPath.stdWrkPathNm','data-length':'50',maxByteLength:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_odrKndCd',search:'start',style:'',submenuSize:'auto',objType:'key',allOption:'',chooseOption:'',ref:'data:ds_workPath.odrKndCd',displayMode:'label',textAlign:'left','data-length':'2'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lkStepNo'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_rmk',style:'',objType:'key',ref:'data:ds_workPath.rmk','data-length':'500',maxByteLength:'500'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'기준작업경로상세',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_topGrdBtn',grdDownOpts:'{"fileName" : "기준작업경로상세.xlsx", "sheetName" : "기준작업경로상세", "type":"2+4+8+16"}',gridDownUserAuth:'X',btnUser:'Y',gridDownYn:'Y',templateYn:'N',gridID:'gr_workPathEachworkStep',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_workPathEachworkStep',focusMode:'row',id:'gr_workPathEachworkStep',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true',resize:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stdWrkPathNo',value:'기준작업경로번호',displayMode:'label',hidden:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column15',value:'No',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'작업장구분'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'작업단계',displayMode:'label',checkboxLabel:'포함'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'column17',value:'매출요율항목',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'stdWrkPathNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkStpSeq',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'wrkPlClsCd',inputType:'select',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'wrkStpCd',displayMode:'label',textAlign:'left',validExp:'wrkStpCd:작업단계:yes'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lkStepNo'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'selpchItemNm',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totalRow',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_workPathEachworkStep',focusMode:'row',id:'grdExcel',readOnly:'true',resize:'false',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'0',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption11',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stdWrkPathNo',inputType:'text',value:'기준작업경로번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'No',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'작업장구분',width:'100'}},{T:1,N:'w2:column',A:{checkboxLabel:'포함',displayMode:'label',id:'column13',inputType:'text',value:'작업단계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'매출요율항목',width:'300'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stdWrkPathNo',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',excelCellType:'number',id:'wrkStpSeq',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'wrkPlClsCd',inputType:'text',removeBorderStyle:'false',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'select',textAlign:'left',validExp:'wrkStpCd:작업단계:yes',width:'100'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lkStepNo'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',textAlign:'left',width:'300'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})