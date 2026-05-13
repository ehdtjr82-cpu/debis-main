/*amd /ui/ac/co/stdinfomgnt/co_100_09_02p.xml 8864 d4d07b20e7a35b5d8b85cc5c5f33d93a910b050a7b0af15da97e5cdaaff948e0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_master'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'standardBudgetYr',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'targetBudgetYr',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deleteYn',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'deleteYn',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ac.co.stdinfomgnt.CreateVarfixedClassificationAutoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_master","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_master_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'ACConstants',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd;
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd;
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.isSubCompany = false;
scwin.privAdmin = scwin.memJson.privAdmin;
scwin.txtCoClsCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
};

/**
 * UDC값
 */
scwin.onUdcCompleted = function () {
  if (!$c.util.isEmpty($p, scwin.params["standardBudgetYr"])) {
    ica_standardBudgetYr.setValue(scwin.params["standardBudgetYr"]);
  }
  if (!$c.util.isEmpty($p, scwin.params["coCd"])) {
    ed_coCd.setValue(scwin.params["coCd"]);
  }
  ica_targetBudgetYr.focus();
  scwin.f_PopUpCompanyInfo('T');
  $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm]);
};

//-------------------------------------------------------------------------
// 생성 : 
//-------------------------------------------------------------------------
scwin.f_Create = async function () {
  //생성조건 입력여부 및 형식 체크
  let ret = await $c.gus.cfValidate($p, [ica_standardBudgetYr, ica_targetBudgetYr]);
  if (!ret) {
    return false;
  }

  //반영할 년도와 기준년도가 같은 지 체크
  if (ica_standardBudgetYr.getValue().trim() == ica_targetBudgetYr.getValue().trim()) {
    await $c.win.alert($p, "기준년도와 반영할 년도가 같습니다.");
    ica_targetBudgetYr.focus();
    return;
  }
  if (await $c.win.confirm($p, "자동생성하시겠습니까?")) {
    dma_master.set("standardBudgetYr", ica_standardBudgetYr.getValue());
    dma_master.set("targetBudgetYr", ica_targetBudgetYr.getValue());
    dma_master.set("deleteYn", 0);
    dma_master.set("coCd", ed_coCd.getValue());
    $c.sbm.execute($p, sbm_master);
  }
};

// -------------------------------------------------------------------------
// 회사 입력 팝업 
// -------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  await udc_dongbuGroupCompanyInfo.cfCommonPopUp(scwin.udc_dongbuGroupCompanyInfo_callBackFunc, ed_coCd.getValue(), "", pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_dongbuGroupCompanyInfo_callBackFunc = function (rtnList) {
  // SET	 
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명  		
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};
scwin.sbm_master_submitdone = async function (e) {
  if (ds_result.getCellData(0, "deleteYn") == 1) {
    await $c.win.alert($p, MSG_CM_INF_002);
    $c.win.closePopup($p);
  } else {
    if ((await $c.win.confirm($p, "반영할 년도에 기존 데이터가 존재합니다.\n 삭제하시고 자동생성하시겠습니까?")) == true) {
      dma_master.set("standardBudgetYr", ica_standardBudgetYr.getValue());
      dma_master.set("targetBudgetYr", ica_targetBudgetYr.getValue());
      dma_master.set("deleteYn", 1);
      dma_master.set("coCd", ed_coCd.getValue());
      $c.sbm.execute($p, sbm_master);
    }
  }
};
scwin.ed_coCd_onblur = function (e) {
  scwin.f_PopUpCompanyInfo();
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'회사코드',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{class:'form-group col7',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w85',id:'ed_coCd',placeholder:'',style:'',mandatory:'true',validExp:'회사코드:yes',allowChar:'0-9',maxlength:'3','ev:onblur':'scwin.ed_coCd_onblur',readOnly:'true',title:'회사코드'}},{T:1,N:'xf:input',A:{class:'form-control',id:'ed_coNm',placeholder:'',style:'',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'기준년도',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:'form-control cal',id:'ica_standardBudgetYr',style:'',objType:'key',mandatory:'true',validExp:'기준년도:yes:date=YYYY',displayFormat:'yyyy',validateOnInput:'true',title:'기준년도'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'반영할 년도',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:'form-control cal',id:'ica_targetBudgetYr',style:'',objType:'data',validExp:'반영할 년도:yes:date=YYYY',mandatory:'true',displayFormat:'yyyy',validateOnInput:'true',title:'반영할 년도'}}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_udcCoCd',validTitle:'',nameId:'ed_udcCoNm',style:'width:%; height:px; ;visibility:hidden;',id:'udc_dongbuGroupCompanyInfo',btnId:'btn_udcCoCd'}}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button',objType:'bSave',userAuth:'C','ev:onclick':'scwin.f_Create'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})