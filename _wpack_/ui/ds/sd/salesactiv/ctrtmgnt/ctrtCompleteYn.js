/*amd /ui/ds/sd/salesactiv/ctrtmgnt/ctrtCompleteYn.xml 3476 9d75d9fbdc2c15b75fc511d899844fad0a743170b7398fa78438806ebda831b9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_completeYn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_commonPopup'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param9',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param10',name:'name12',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_commonPopup',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_commonPopup',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_commonPopup_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log("$p.parent().scwin.ctrtNo = " + $p.parent().scwin.ctrtNo);

  // ds_completeYn.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=ContractEBC&queryId=retrieveContractYn&param1=<%=request.getParameter("ctrtNo")%>";
  // ds_completeYn.Reset();
  const strParam = {
    sysCd: "ContractEBC" // 시스템코드
    ,
    queryId: "retrieveContractYn" // 쿼리ID
    ,
    param1: $p.parent().scwin.ctrtNo,
    param2: "",
    param3: "",
    param4: "",
    param5: "",
    param6: "",
    param7: "",
    param8: "",
    param9: "",
    param10: ""
  };

  //데이터셋에 정보설정
  dma_commonPopup.setJSON(strParam);
  $c.sbm.execute($p, sbm_commonPopup);
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
scwin.sbm_commonPopup_submitdone = function (e) {
  // 조회 성공시
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    ds_completeYn.setJSON(e.responseJSON.GAUCE);
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'}}]}]})