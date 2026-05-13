/*amd /ui/ac/fm/acctrecvmgnt/pooracctrecv/fm_602_03_01b.xml 15207 e5d68e5ad9cb1d70623946f1e72aff329dc46fc20a20df8463fe267da22d6586 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchPoorAcctRecv'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntKnd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_poorAcctRecv',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntKnd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgCntAbove',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgCntUnder',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdDdCnt',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldClntKnd',name:'name6',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_poorAcctRecv',action:'/ac.fm.acctrecvmgnt.pooracctrecv.RegistManagementCustomerStandardCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_poorAcctRecv","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_poorAcctRecv_submitdone','ev:submiterror':'scwin.sbm_poorAcctRecv_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchPoorAcctRecv',action:'/ac.fm.acctrecvmgnt.pooracctrecv.RetrieveManagementCustomerStandardListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchPoorAcctRecv","key":"IN_DS1"},{"id":"ds_poorAcctRecv","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_poorAcctRecv","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchPoorAcctRecv_submitdone','ev:submiterror':'scwin.sbm_searchPoorAcctRecv_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  var codeOptions = [{
    grpCd: "FM050",
    compID: "acb_clntKnd,gr_poorAcctRecv:clntKnd"
  }, {
    grpCd: "FM051",
    compID: "gr_poorAcctRecv:useYn"
  }];
  $c.data.setCommonCode($p, codeOptions);

  // scwin.f_Header();
  scwin.f_Reset();
};

//-------------------------------------------------------------------------
// Header 초기화
//-------------------------------------------------------------------------
// function f_Header() {

//     var GAUCE_DATASET_HEADER = "clntKnd:STRING(2)"					// 거래처종류
//                                 + ",useYn:DECIMAL(1)";					// 관리처래처여부

//     ds_searchPoorAcctRecv.SetDataHeader(GAUCE_DATASET_HEADER);
//     ds_searchPoorAcctRecv.AddRow();

// }

//-------------------------------------------------------------------------
// 저장 완료후 화면 Reset시 사용하는 함수 
//-------------------------------------------------------------------------
scwin.f_Reset = function () {
  acb_useYn.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  dma_searchPoorAcctRecv.set("clntKnd", acb_clntKnd.getValue());
  dma_searchPoorAcctRecv.set("useYn", acb_useYn.getValue());
  // dma_searchPoorAcctRecv.set("clntKnd", "");
  // dma_searchPoorAcctRecv.set("useYn", -1.0);

  $c.sbm.execute($p, sbm_searchPoorAcctRecv);
};
scwin.onUdcCompleted = async function () {};

//-------------------------------------------------------------------------
// 관리채권등록 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  // 변경여부 확인
  if (ds_poorAcctRecv.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
    return;
  }

  // 필수 입력사항 체크
  if (!(await $c.gus.cfValidate($p, [gr_poorAcctRecv]))) {
    return;
  }
  for (var i = 0; i < ds_poorAcctRecv.getTotalRow(); i++) {
    if (ds_poorAcctRecv.getCellData(i, "bilgCntAbove").length > 6) {
      await $c.gus.cfAlertMsg($p, "관리거래처기준등록의 " + (i + 1) + "번째 데이터의 횟수이상은 6자 이하로 입력하십시오.");
      ds_poorAcctRecv.setRowPosition(i);
      gr_poorAcctRecv.setFocusedCell(i, 1, true);
      return;
    }
    if (ds_poorAcctRecv.getCellData(i, "bilgCntUnder").length > 6) {
      await $c.gus.cfAlertMsg($p, "관리거래처기준등록의 " + (i + 1) + "번째 데이터의 횟수이하는 6자 이하로 입력하십시오.");
      ds_poorAcctRecv.setRowPosition(i);
      gr_poorAcctRecv.setFocusedCell(i, 2, true);
      return;
    }
    if (!$c.num.isNumber($p, gr_poorAcctRecv.getCellDisplayData(i, "bilgCntAbove"))) {
      await $c.gus.cfAlertMsg($p, "관리거래처기준등록의 " + (i + 1) + "번째 데이터의 횟수이상은 숫자만을 입력하십시오.");
      ds_poorAcctRecv.setRowPosition(i);
      gr_poorAcctRecv.setFocusedCell(i, 1, true);
      return;
    }
    if (!$c.num.isNumber($p, gr_poorAcctRecv.getCellDisplayData(i, "bilgCntUnder"))) {
      await $c.gus.cfAlertMsg($p, "관리거래처기준등록의 " + (i + 1) + "번째 데이터의 횟수이하는 숫자만을 입력하십시오.");
      ds_poorAcctRecv.setRowPosition(i);
      gr_poorAcctRecv.setFocusedCell(i, 2, true);
      return;
    }
    if (parseInt(ds_poorAcctRecv.getCellData(i, "bilgCntAbove")) > parseInt(ds_poorAcctRecv.getCellData(i, "bilgCntUnder"))) {
      await $c.gus.cfAlertMsg($p, i + 1 + "행번째의 횟수이상값은 횟수이하값보다 작아야 합니다. 확인하시기 바랍니다.");
      ds_poorAcctRecv.setRowPosition(i);
      gr_poorAcctRecv.setFocusedCell(i, 1, true);
      return;
    }
    if (i != 0 && parseInt(ds_poorAcctRecv.getCellData(i, "bilgCntAbove")) < parseInt(ds_poorAcctRecv.getCellData(i - 1, "bilgCntUnder"))) {
      await $c.gus.cfAlertMsg($p, i + 1 + "행번째의 횟수이상은 " + i + "행번째의 횟수이하  값보다 커야합니다. 확인하시기 바랍니다.");
      ds_poorAcctRecv.setRowPosition(i);
      gr_poorAcctRecv.setFocusedCell(i, 1, true);
      return;
    }
    if (ds_poorAcctRecv.getCellData(i, "stdDdCnt") <= 0) {
      await $c.gus.cfAlertMsg($p, "관리거래처기준등록의 " + i + "번째 데이터에서 기준일수는 1 이상으로 입력하십시오.");
      gr_poorAcctRecv.setFocusedCell(i, 3, true);
      return;
    }
    if (ds_poorAcctRecv.getRowStatusValue(i) == 2) {
      for (let k = 0; k < ds_poorAcctRecv.getTotalRow(); k++) {
        if (k == i) {
          continue;
        } else {
          if (ds_poorAcctRecv.getCellData(i, "clntKnd") == ds_poorAcctRecv.getCellData(k, "clntKnd")) {
            await $c.gus.cfAlertMsg($p, "관리거래처기준등록의 " + (i + 1) + "번째 데이터에서 거래처종류는 중복될 수 없습니다.");
            gr_poorAcctRecv.setFocusedCell(i, 0, true);
            return;
          }
        }
      }
    }
  }
  if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
    $c.sbm.execute($p, sbm_poorAcctRecv);
  }
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  var newRow = ds_poorAcctRecv.insertRow();
  gr_poorAcctRecv.setFocusedCell(newRow, 0, true);
  ds_poorAcctRecv.setCellData(newRow, "useYn", "0");
  ds_poorAcctRecv.setCellData(newRow, "clntKnd", "01");
  ds_poorAcctRecv.setCellData(newRow, "stdDdCnt", "0");
};
scwin.sbm_poorAcctRecv_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_poorAcctRecv_submiterror = async function (e) {
  await $c.gus.cfShowError($p, sbm_poorAcctRecv);
};
scwin.sbm_searchPoorAcctRecv_submitdone = async function (e) {
  var rowCount = ds_poorAcctRecv.getTotalRow();
  ed_totalRow.setValue(rowCount);
  if (rowCount == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }
};
scwin.sbm_searchPoorAcctRecv_submiterror = async function (e) {
  await $c.gus.cfShowError($p, sbm_searchPoorAcctRecv);
};
scwin.btn_clear_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1, []);
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_clntKnd',style:'width: 150px;',submenuSize:'fixed',displayMode:'value delim label',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_useYn',style:'width: 100px;',submenuSize:'fixed',ref:'',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox gvwflex'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_poorAcctRecv',style:'',autoFit:'allColumn',id:'gr_poorAcctRecv',visibleRowNum:'10',class:'wq_gvw',validExp:'clntKnd:거래처종류:yes:number&length=2:key,bilgCntAbove:횟수이상:no:number&maxLength=6,bilgCntUnder:횟수이하:no:number&maxLength=6,stdDdCnt:기준일수:yes:number&minNumber=1,useYn:사용여부:yes:number&maxLength=2',validFeatures:'ignoreStatus=no',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column17',value:'거래처종류',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column15',value:'횟수이상',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column13',value:'횟수이하',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column11',value:'기준일수',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column9',value:'사용여부',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'select',id:'clntKnd',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'bilgCntAbove',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'bilgCntUnder',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'stdDdCnt',displayMode:'label',validateOnInput:'true',dataType:'number',allowChar:'0-9',maxLength:'3'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'150',inputType:'select',id:'useYn',displayMode:'label',viewType:'icon',editModeEvent:'onclick'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRow',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',btnDelYn:'N',style:'',btnRowAddYn:'Y',btnRowDelYn:'N',gridID:'gr_poorAcctRecv',rowAddFunction:'scwin.f_AddRow',rowAddUserAuth:'C',id:'udc_bottom',btnRowAddObj:'btn_AddRow'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})