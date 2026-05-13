/*amd /ui/ac/fm/stdinfomgnt/fm_100_06_01b.xml 13039 c77338751df10f8fe1c56987d91611c027fa4e9f89282fce989db508a5f02358 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'기준일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdExchRt',name:'기준환율',dataType:'number',defaultValue:''}},{T:1,N:'w2:key',A:{id:'pchsExchRt',name:'매입환율',dataType:'number',defaultValue:''}},{T:1,N:'w2:key',A:{id:'sellovExchRt',name:'매도환율',dataType:'number',defaultValue:''}},{T:1,N:'w2:key',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDtm',name:'등록일시',dataType:'date'}},{T:1,N:'w2:key',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modDtm',name:'수정일시',dataType:'date'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exchangeRt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdDt',name:'기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdExchRt',name:'기준환율',dataType:'number',defaultValue:'0.00'}},{T:1,N:'w2:column',A:{id:'pchsExchRt',name:'TTB',dataType:'number',defaultValue:'0.00'}},{T:1,N:'w2:column',A:{id:'sellovExchRt',name:'TTS',dataType:'number',defaultValue:'0.00'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자id',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정id',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_crc',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crcCd',name:'value',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcNm',name:'label',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchExchangeRt',action:'/ac.fm.stdinfomgnt.RetrieveExchangeRateListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_exchangeRt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_exchangeRt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchExchangeRt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveExchangeRt',action:'/ac.fm.stdinfomgnt.SaveExchangeRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_exchangeRt","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveExchangeRt_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.vCurDate = WebSquare.date.getCurrentServerDate();
scwin.onpageload = function () {
  // 통화코드 공통 확인필요.
  const codeOptions = [{
    grpCd: "ZZ006",
    compID: "acb_crcCd,gr_exchangeRt:crcCd",
    opt: {
      "range": "1,10"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
  ed_stdDt.setValue(scwin.vCurDate);
  $c.gus.cfDisableKey($p);
};
scwin.ondataload = function () {
  data = dlt_commonCodeZZ006.getAllJSON();
  data.sort(function (a, b) {
    return Number(a.sortSeq) - Number(b.sortSeq);
  });
  dlt_commonCodeZZ006.setJSON(data, false);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_stdDt]))) {
    return;
  }
  $c.sbm.execute($p, sbm_searchExchangeRt);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  const changedData = ds_exchangeRt.getModifiedData();
  let validArray = [{
    id: "crcCd",
    name: "통화코드",
    mandatory: true,
    key: true
  }, {
    id: "stdDt",
    name: "기준일자",
    mandatory: true,
    key: true
  }];
  if (!(changedData.length > 0)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["환율관리"]);
    return;
  } else {
    ret = await $c.gus.cfValidateGrid($p, gr_exchangeRt, null, null, validArray, "환율관리");
    if (ret) {
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        $c.sbm.execute($p, sbm_saveExchangeRt);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------

scwin.f_AddRow = function () {
  let rowIndex = ds_exchangeRt.getRowCount();
  ds_exchangeRt.insertRow(rowIndex);
  ds_exchangeRt.setCellData(rowIndex, "crcCd", acb_crcCd.getValue());
  ds_exchangeRt.setCellData(rowIndex, "stdDt", scwin.vCurDate);
  gr_exchangeRt.setFocusedCell(rowIndex, 0);
};

//-------------------------------------------------------------------------
// 행 취소
//-------------------------------------------------------------------------
scwin.f_UndoAll = function () {
  $c.data.undoAll($p, ds_exchangeRt);
};
// 버그투성 수정필요

//-------------------------------------------------------------------------
// 행 삭제
//-------------------------------------------------------------------------
scwin.f_DeleteRow = function () {
  var rowIndex = ds_exchangeRt.getRowPosition();
  if (ds_exchangeRt.getRowStatus(rowIndex) == "C") {
    ds_exchangeRt.removeRow(rowIndex);
  }
  if (rowIndex >= 0) {
    // ds_exchangeRt.removeRow(rowIndex);
    ds_exchangeRt.deleteRow(rowIndex);
  }
};

//-----------------------------------------------------------------------------
//script
//------------------------------------------------------------------------------

scwin.sbm_searchExchangeRt_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  rows = ds_exchangeRt.getRowCount();
  totalRows.setValue(rows);
  if (rows === 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
  }
};
scwin.sbm_saveExchangeRt_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.customFm = function (data, formattedData, rowIndex, colIndex) {
  if (formattedData == null || formattedData === "") return "";
  var num = Number(formattedData.replace(/,/g, ""));
  if (isNaN(num)) return formattedData;
  num = Math.floor(num * 100) / 100;
  return num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통화코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_crcCd',search:'start',style:'width: 120px',submenuSize:'fixed',ref:'data:dma_condition.crcCd',visibleRowNum:'20'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기준일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_stdDt',style:'',displayFormat:'yyyy/MM/dd',ref:'data:dma_condition.stdDt',validateOnInput:'true',mandatory:'true',title:'기준일자'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_exchangeRt',focusMode:'cell',id:'gr_exchangeRt',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNumFix:'true',validExp:'crcCd:통화코드:yes::key,stdDt:기준일자:yes:date=YYYYMMDD:key',rowStatusVisible:'true',rowStatusWidth:'10',visibleRowNum:'15'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'통화코드'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'기준일자'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'기준환율'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'100',value:'TTB'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'TTS',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'crcCd',inputType:'select',removeBorderStyle:'false',width:'70',objType:'key',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'stdDt',inputType:'calendar',removeBorderStyle:'false',width:'70',displayFormat:'yyyy/MM/dd',objType:'key',readOnly:'true',mandatory:'true',minLength:'8'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'stdExchRt',inputType:'text',removeBorderStyle:'false',width:'70',displayFormat:'#,##0.00##',readOnly:'false',dataType:'float',textAlign:'right',maxLength:'5.4',customFormatter:'scwin.customFm',excelCellType:'number'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'pchsExchRt',inputType:'text',removeBorderStyle:'false',width:'70',dataType:'float',displayFormat:'#,##0.00##',textAlign:'right',maxLength:'5.4',customFormatter:'scwin.customFm',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellovExchRt',inputType:'text',width:'70',dataType:'float',displayFormat:'#,##0.00##',textAlign:'right',maxLength:'5.4',customFormatter:'scwin.customFm',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:button',A:{class:'btn sm',id:'add',label:'행추가',style:'','ev:onclick':'scwin.f_AddRow',userAuth:'U'}},{T:1,N:'w2:button',A:{class:'btn sm',id:'delete',label:'행삭제',style:'','ev:onclick':'scwin.f_DeleteRow',userAuth:'U'}},{T:1,N:'w2:button',A:{class:'btn sm',id:'cancel',label:'취소',style:'','ev:onclick':'scwin.f_UndoAll',userAuth:'U'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})