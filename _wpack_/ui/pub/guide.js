/*amd /ui/pub/guide.xml 3887 2b0d2df8fcb59a92f28a9ceff5896207c66baad1fc3a9bc4f6123be851562b89 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_dataMap1'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCode',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'key2',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'key3',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'cd',E:[{T:4,cdata:'1'}]},{T:1,N:'cdNm',E:[{T:4,cdata:'aaa'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'cd',E:[{T:4,cdata:'2'}]},{T:1,N:'cdNm',E:[{T:4,cdata:'bbb'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_dataList2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_dataList3',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_test',action:'/cmn/selectGrpCdList.do',method:'get',mediatype:'application/json',ref:'',target:'data:json,{"id":"dlt_dataList1","key":"response"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_submission1_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  //$c.gus.f_CopyDataRow("dlt_dataList1", "dlt_dataList2", 0, 0, "cdNm", "col2");
};
/*
scwin.btnTest1_onclick = function (e) {
$.ajax({
    url: '/cmn/selectGrpCdList.do',
    method: 'GET', // 현재 컨트롤러가 GET 요청으로 설정되어 있음
    contentType: 'application/json',
    dataType: 'json',
    data: { grpCode: '' }, // 요청 파라미터
    success: function(response)
    {
        alert('1');
        console.log(response);
    },
    error: function(xhr, status, error) {
        console.error(error);
    }
});
};
*/

scwin.btn_trigger1_onclick = function (e) {
  $c.sbm.execute($p, sbm_test);
};
scwin.sbm_submission1_submitdone = function (e) {
  console.log("sucess");
  //$c.gus.copy("dlt_dataList1", "dlt_dataList4",  true);
  // $c.gus.cfCopyDataSet(ds_search, ds_searchCopy, "copyHeader=yes,rowFrom=1,rowCnt=1");

  // debugger;
};
scwin.ibx_input1_onkeyup = function (e) {

  //debugger;
};
scwin.btn_trigger2_onclick = function (e) {
  const options = {
    fileName: "downLoadExcel.xlsx"
  };
  $c.data.downloadGridViewExcel($p, grd_gridView1, options);
};
scwin.btn_trigger3_onclick = function (e) {
  const options = {};
  $c.data.uploadGridViewExcel($p, grd_gridView1, options);
};
}}}]},{T:1,N:'style',E:[{T:3,text:'\n    .guide-wrap{}  \n    .guide-wrap h3{height:60px;color:#fff;font-size:20px;background:#20242B;padding:20px;font-weight:400;box-} \n'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload',class:'guide-wrap'},E:[{T:1,N:'xf:group',A:{style:'',id:'grp_group1',tagname:'h3',text:'PUB Guide'}}]}]}]})