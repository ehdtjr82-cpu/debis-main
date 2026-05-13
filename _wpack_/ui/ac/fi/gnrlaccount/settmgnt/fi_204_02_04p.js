/*amd /ui/ac/fi/gnrlaccount/settmgnt/fi_204_02_04p.xml 12065 965e2f64e59174b24f61b94bced4ff315f3c73bbe45746072311eb834852f980 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'postDtSt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postDtEnd',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptCdSt',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrlSlipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'damt',name:'차변',dataType:'text'}},{T:1,N:'w2:column',A:{id:'camt',name:'대변',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSlipDetail',action:'/ac.fi.gnrlaccount.settmgnt.RetrieveControlSlipDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_slipDetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_slipDetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveSlipDetail_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p); // 로그인 정보를 가져온다.
scwin.privAdmin = scwin.memJson.privAdmin; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님

scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; // 회계_회사구분
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드
scwin.isSubCompany = false;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.closeYm = scwin.params["closeYm"];
  scwin.acctDeptCd = scwin.params["acctDeptCd"];
  scwin.acctDeptNm = scwin.params["acctDeptNm"];
  scwin.acctCd = scwin.params["acctCd"];
  scwin.acctNm = scwin.params["acctNm"];

  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd !== ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  let coCd = scwin.vLoginCoCd;
  $c.gus.cfDisableObjects($p, [ica_closeYm]);
  $c.gus.cfDisableObjects($p, [ed_acctDeptCd]);
  $c.gus.cfDisableObjects($p, [ed_acctCd]);
  $c.gus.cfDisableObjects($p, [ed_acctDeptNm]);
  $c.gus.cfDisableObjects($p, [ed_acctNm]);
  dma_condition.set("postDtSt", scwin.closeYm + "01");
  dma_condition.set("postDtEnd", scwin.closeYm + $c.date.getLastDateOfMonth($p, scwin.closeYm));
  dma_condition.set("slipAcctDeptCdSt", scwin.acctDeptCd);
  dma_condition.set("acctCd", scwin.acctCd);
  dma_condition.set("coCd", coCd);
  ica_closeYm.setValue(scwin.closeYm);
  ed_acctDeptNm.setValue(scwin.acctDeptNm);
  ed_acctNm.setValue(scwin.acctNm);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_retrieveSlipDetail);
};
scwin.btn_Division_onclick = function (e) {
  $c.win.closePopup($p);
};
scwin.sbm_retrieveSlipDetail_submitdone = async function (e) {
  if ($c.gus.cfCheckCreateFlag($p) === true) {
    $c.gus.cfTurnCreateFlag($p, false);
  } else {
    if (ds_slipDetail.getRowCount() === 0) {
      await $c.win.alert($p, "조회된 데이터가 없습니다");
    } else {
      totalRows.setValue(ds_slipDetail.getRowCount());
    }
  }
};
scwin.gr_slipDetail_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId === "clntNo") {
    if (!(ds_slipDetail.getCellData(rowIndex, columnId) == null && ds_slipDetail.getCellData(rowIndex, columnId) == "")) {
      await $c.gus.cfViewClntInfo($p, ds_slipDetail.getCellData(rowIndex, columnId));
    }
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'년월 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_closeYm',style:'',displayFormat:'yyyy/MM',editType:'focus',title:'년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_acctDeptCd',style:'width:80px;',objType:'data',mandatory:'false',allowChar:'0-9',maxlength:'5',editType:'select',ref:'data:dma_condition.slipAcctDeptCdSt',title:'부서코드'}},{T:1,N:'xf:input',A:{id:'ed_acctDeptNm',style:'width:150px;',objType:'data',title:'부서명'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_acctCd',style:'width:80px;',objType:'data',mandatory:'false',allowChar:'0-9',maxlength:'7',editType:'select',ref:'data:dma_condition.acctCd',title:'계정코드'}},{T:1,N:'xf:input',A:{id:'ed_acctNm',style:'width:150px;',objType:'data',title:'계정명'}}]}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_slipDetail',id:'gr_slipDetail',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',columnMove:'true','ev:oncellclick':'scwin.gr_slipDetail_oncellclick',columnMoveWithFooter:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'전표일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'전표종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'계정명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'차변',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'대변',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column34',value:'적요',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrlSlipNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'text',width:'100',displayFormat:'yyyy/MM/dd',dataType:'date',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipKndNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'damt',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'camt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctDeptNm',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'summary',displayMode:'label',readOnly:'true',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column26',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("damt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column25',value:'0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("camt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column36',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Division',style:'',type:'button',objType:'bSave','ev:onclick':'scwin.btn_Division_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})