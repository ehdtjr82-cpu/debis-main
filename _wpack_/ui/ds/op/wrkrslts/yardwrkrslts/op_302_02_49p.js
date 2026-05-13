/*amd /ui/ds/op/wrkrslts/yardwrkrslts/op_302_02_49p.xml 10741 d75dfa656027e932227f2a46e5df8566b9dda7702562288286b14e6e730c0a59 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_invoice'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'invoiceList',name:'송장목록',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'outVehclNo',name:'출고차량',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'drvNm',name:'기사성명',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'drvMpNo',name:'기사연락처',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'dsNm',name:'목적지',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'pDsNm',name:'유통기지(포스코목적지)',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'ctrtClntNm',name:'계약거래처명',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'clientNm',name:'고객사',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'rmk',name:'비고',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'outDt',name:'생산일자',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'inDtList',name:'입고일자목록',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'productNoList',name:'제품번호목록',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'clntNoList',name:'거래처번호목록',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'invoiceNo',name:'송장번호',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'dtlDsNm',name:'상세착지',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'contact',name:'연락처',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'odrLineNoList',name:'오더지라인번호목록',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'transferYn',name:'이관여부',dataType:'text',length:'255'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_returnInvoice',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'invoiceNo',name:'송장번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.yardwrkrslts.SavePoscoInvoiceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_invoice","key":"IN_DS1"},{"id":"ds_returnInvoice","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_returnInvoice","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  var arrParam = $p.getAllParameter().paramData.data;
  if (arrParam[0] == "UPDATE") {
    ds_invoice.set("invoiceNo", arrParam[1]);
    ds_invoice.set("outVehclNo", arrParam[2]);
    ds_invoice.set("drvNm", arrParam[3]);
    ds_invoice.set("drvMpNo", arrParam[4]);
    ds_invoice.set("dsNm", arrParam[5]);
    ds_invoice.set("pDsNm", arrParam[6]);
    ds_invoice.set("ctrtClntNm", arrParam[7]);
    ds_invoice.set("clientNm", arrParam[8]);
    ds_invoice.set("rmk", arrParam[9]);
    ds_invoice.set("clntNo", arrParam[10]);
  } else {
    ds_invoice.set("outDt", arrParam[0]);
    ds_invoice.set("clntNoList", arrParam[1].join(','));
    ds_invoice.set("inDtList", arrParam[2].join(','));
    ds_invoice.set("productNoList", arrParam[3].join(','));
    ds_invoice.set("odrLineNoList", arrParam[4].join(','));
    ds_invoice.set("transferYn", arrParam[5]);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //저장 여부 확인
  let ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret) {
    // 저장 하시겠습니까?
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 팝업 close
//-------------------------------------------------------------------------
scwin.f_WinClose = function () {
  $c.win.closePopup($p);
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  var arrRtnVal = new Array();
  //arrRtnVal.invoiceNo = ds_returnInvoice.getCellData(0, "invoiceNo"); //이렇게 하면 부모창에서 리턴값 못받음
  arrRtnVal[0] = ds_returnInvoice.getCellData(0, "invoiceNo");
  $c.win.closePopup($p, arrRtnVal);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'송장발행',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출고 차량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_OUT_VEHCL_NO',placeholder:'',style:'width:150px;',ref:'data:ds_invoice.outVehclNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기사 성명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_DRV_NM',placeholder:'',style:'width:150px;',maxlength:'6',ref:'data:ds_invoice.drvNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기사 연락처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_DRV_MP_NO',placeholder:'',style:'width:150px;',maxlength:'15',ref:'data:ds_invoice.drvMpNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'목적지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_DS_NM',placeholder:'',style:'width:150px;',ref:'data:ds_invoice.dsNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유통 기지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_P_DS_NM',placeholder:'',style:'width:150px;',ref:'data:ds_invoice.pDsNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'판매 계약자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_CTRT_CLNT_NM',placeholder:'',style:'width:150px;',ref:'data:ds_invoice.ctrtClntNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'고객사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_CLIENT_NM',placeholder:'',style:'width:150px;',ref:'data:ds_invoice.clientNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상세착지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_dtlDsNm',placeholder:'',style:'width:150px;',ref:'data:ds_invoice.dtlDsNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'문의처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_contact',placeholder:'',style:'width:150px;',ref:'data:ds_invoice.contact'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_WinClose'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})