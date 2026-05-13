/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_01_10p.xml 11163 e5f41644ce64ffb8521821102626b2a6b763fd4d495e34c4a9bd9b145c055e46 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_txtcopycond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'전표종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_txtcopy',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'summary',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crnNm',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNm',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsNm',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'name24',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evidaccopy',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipKndNm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copyKind',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txtcopy',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidaccopy',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve',action:'/ac.fi.gnrlaccount.slipmgnt.RetrieveTransactionContents2CMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_txtcopycond","key":"IN_DS1"},{"id":"ds_txtcopy","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_txtcopy","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_evidaccopy',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_evidaccopy","key":"OUT_DS1"}',target:'data:json,{"id":"ds_evidaccopy","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_evidaccopy_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'ACConstants.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 전표복사(매출전표)
 * 메뉴경로 : 자회사회계/재무회계/일반회계/전표관리/자회사 매출전표입력
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ac/fi/gnrlaccount/slipmgnt/fi_201_01_10p.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-12
 * 수정이력  :
 *    - 2025-12-12      정승혜    최초작성
 *    - 2026-01-20      정승혜    기타수정
 * 메모 :
 * 부모페이지 fi_201_01_08b
 * 동원 로그인 inswave1/inswave1
 * retrieveTransactionContents2DTO 쿼리 데이터 없음
 * 조회조건 : 1016328173
 * 해야할 리스트 :
 */

scwin.slipKndCd = "";
scwin.slipKndNm = "";
scwin.vCoCd = "";
scwin.vCoClsCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.slipKndCd = scwin.params["slipKndCd"];
  scwin.slipKndNm = scwin.params["slipKndNm"];
  scwin.vCoCd = scwin.params["pCoCd"];
  scwin.vCoClsCd = scwin.params["pCoClsCd"];
  scwin.f_setSubsidiaryCompanyInfo();
  lc_slipKndNm.setValue(scwin.slipKndCd);
  dma_txtcopycond.set("slipNo", "");
  dma_txtcopycond.set("slipKndNm", "");
  lc_slipKndNm.setVisibleRowNum(1);
  ed_slipNo.focus();
};
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "전표복사(매출전표)");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  dma_txtcopycond.set("slipKndCd", lc_slipKndNm.getValue());
  dma_txtcopycond.set("slipNo", ed_slipNo.getValue().trim());
  dma_txtcopycond.set("coCd", scwin.vCoCd);
  dma_txtcopycond.set("coClsCd", scwin.vCoClsCd);
  $c.sbm.execute($p, sbm_tr_retrieve);
};

//-------------------------------------------------------------------------
// 복사
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  ed_slipNo.setValue($c.gus.cfGetLeftPad($p, ed_slipNo.getValue().trim(), 10, "0"));
  let ret = await $c.gus.cfValidate($p, [ed_slipNo]);
  if (!ret) {
    return false;
  }
  let confirm = await $c.win.confirm($p, "복사하시겠습니까?");
  if (confirm) {
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 자회사 매입/경비 전표 인 경우  화면 설정 
//-------------------------------------------------------------------------
scwin.f_setSubsidiaryCompanyInfo = function () {
  if (scwin.vCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사인 경우에만  회사코드 check
    lc_slipKndNm.setSelectedIndex(1);
  } else {
    lc_slipKndNm.setSelectedIndex(0);
  }
};
scwin.f_winClose = function (e) {
  //scwin.returnValue = null;
  //$c.win.closePopup(scwin.returnValue);
  $c.win.closePopup($p);
};
scwin.sbm_tr_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_txtcopy.getRowCount() == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
    ed_slipNo.setValue("");
  } else {
    ds_txtcopy.setRowPosition(0);
    sbm_ds_evidaccopy.action = "/ac.fi.gnrlaccount.slipmgnt.RetrieveExpenseDistibutionContentsCMD.do?txnNo=" + ds_txtcopy.getCellData(ds_txtcopy.getRowPosition(), "txnNo");
    $c.sbm.execute($p, sbm_ds_evidaccopy);
  }
};
scwin.sbm_ds_evidaccopy_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let arrRtnVal = {};
  arrRtnVal.slipKndNm = lc_slipKndNm.getValue();
  arrRtnVal.copyKind = lc_copyKind.getValue();
  arrRtnVal.txtcopy = ds_txtcopy.getAllJSON();
  arrRtnVal.evidaccopy = ds_evidaccopy.getAllJSON();
  $c.win.closePopup($p, arrRtnVal);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전표종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_slipKndNm',style:'width: 200px;',submenuSize:'fixed',ref:'',chooseOptionLabel:'$blank',mandatory:'true',title:'전표종류',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사 매출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K02'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전표번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_slipNo',style:'width: 150px;',mandatory:'true',title:'전표번호',objType:'key'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'복사형태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_copyKind',style:'width: 150px;',submenuSize:'fixed',ref:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'+복사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'-복사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button','ev:onclick':'scwin.f_winClose'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'복사'}]}]}]}]}]}]}]})