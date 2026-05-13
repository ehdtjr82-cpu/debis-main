/*amd /ui/tn/op/transwrkindict/cntr/tn_304_03_05p.xml 2456 f5e7a50ad38af3418fb761c0e55c1ac0bf2dfe19dec1b1e743b32bc0f8401fbd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'conSts',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.op.transwrkindict.cntr.RetrieveCyCongestionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"}, {"id":"ds_result","key":"OUT_DS1"}]',target:'data:json, {"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수

scwin.wrkPlCd;
scwin.timer;
scwin.interval;
scwin.v_cnt = 0;
scwin.params;
scwin.onpageload = async function () {
  scwin.params = $p.getParameter("params");
  scwin.wrkPlCd = scwin.params.wrkPlCd == null ? "" : scwin.params.wrkPlCd;
  scwin.f_Retrieve();
  scwin.v_cnt = 0;
};
scwin.f_Retrieve = function () {
  dma_search.set("wrkPlCd", scwin.wrkPlCd);
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitDone = function () {
  var stats = "";
  stats = ds_result.getCellData(0, "conSts");
  var waitTime = "";
  waitTime = ds_result.getCellData(0, "waitTime");
  if (ds_result.getRowCount() > 0) {
    //alert("ds_result.CountRow="+ds_result.CountRow);
    $p.getFrame().getScopeWindow().scwin.f_displayCongestion(stats, waitTime);
  } else {
    $p.getFrame().getScopeWindow().scwin.f_displayCongestion(0, null);
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'}}]}]})