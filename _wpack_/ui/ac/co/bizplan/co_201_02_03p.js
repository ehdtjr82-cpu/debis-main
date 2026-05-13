/*amd /ui/ac/co/bizplan/co_201_02_03p.xml 6041 47d77b4d6161d70c41bffc72eae00a723e81bc5c0708392efd308d65003f72ac */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_master'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'planYr',name:'기준년도',dataType:'text'}},{T:1,N:'w2:key',A:{id:'planYm',name:'반영년도',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ac.co.bizplan.CreateSellingPlanClassificationAutoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_master_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  if (!$c.util.isEmpty($p, scwin.params["planYr"])) {
    ica_planYr.setValue(scwin.params["planYr"]);
  }
  ica_planYr.focus();
  if (!$c.util.isEmpty($p, scwin.params["CO_CD"])) {
    ed_coCd.setValue(scwin.params["CO_CD"]);
  }
  if (!$c.util.isEmpty($p, scwin.params["CO_NM"])) {
    ed_coNm.setValue(scwin.params["CO_NM"]);
  }
  $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm]);
};

//-------------------------------------------------------------------------
// 생성 : 
//-------------------------------------------------------------------------
scwin.f_Create = async function () {
  //생성조건 입력여부 및 형식 체크
  let ret = await $c.gus.cfValidate($p, [ica_planYr, ica_planYm, ed_coCd]);
  if (!ret) {
    return false;
  }

  //반영할 년도와 기준년도가 같은 지 체크
  if (ica_planYr.getValue() >= ica_planYm.getValue()) {
    await $c.win.alert($p, "기준년도는 반영할 년도 이전이여야 합니다.");
    ica_planYm.focus();
    return;
  }
  if (await $c.win.confirm($p, "반영할 년도의 기존 자료는 삭제됩니다.\n\n계속하시겠습니까?")) {
    $c.sbm.execute($p, sbm_master);
  }
};
scwin.sbm_master_submitdone = async function (e) {
  await $c.win.alert($p, MSG_CM_INF_001);
  $c.win.closePopup($p);
};
scwin.btn_create_onclick = function (e) {
  scwin.f_Create();
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group col7',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'w85',id:'ed_coCd',placeholder:'',style:'',objType:'data',validExp:'회사코드:yes',mandatory:'true',allowChar:'0-9',maxlength:'3',title:'회사코드',ref:'data:dma_master.coCd'}},{T:1,N:'xf:input',A:{class:'',id:'ed_coNm',placeholder:'',style:'',objType:'data'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년도',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:'',id:'ica_planYr',style:'',objType:'key',mandatory:'true',validExp:'기준년도:yes:date=YYYY',placeholder:' ',displayFormat:'yyyy',validateOnInput:'true',title:'기준년도',ref:'data:dma_master.planYr'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'반영할 년도',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:'',id:'ica_planYm',style:'',objType:'data',mandatory:'true',validExp:'년도:yes:date=YYYY',placeholder:' ',validateOnInput:'true',displayFormat:'yyyy',title:'반영할 년도',ref:'data:dma_master.planYm'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_create',style:'',type:'button',userAuth:'C',objType:'bSave','ev:onclick':'scwin.btn_create_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]}]}]}]}]}]})