/*amd /ui/ac/fm/fundemploy/fundsett/fm_206_01_01b.xml 5101 128d7df7d085fa7a27a2dd65c59e9ca88af5b2da159f0ab448d3cbaa61eb484f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'기준월',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_fundSettlementOfAccounts',action:'/ac.fm.fundemploy.fundsett.CreateCumulativeAmtCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_search","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_fundSettlementOfAccounts_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.currYyyyMM = WebSquare.date.getFormattedDate(new Date(), "yyyyMM");

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // var gs_currDate = "<%=DDate.getDate()%>";
  dma_search.set("closeYm", scwin.currYyyyMM);
  ica_closeYm.focus();
};

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
// scwin.f_Retrieve = function() {  

//     if (!$c.gus.cfValidate([ica_closeYm]))
//     return false;

//     var condition = "?closeYm="+ed_closeYm.text.trim()+"&closeDd=00&mgntNo=0";
//         condition += "&wrkNo=<%=ACConstants.CLOSE_MON_FUNDASSET%>";

//     ds_fundSettlementOfAccounts.DataID = "/cm.bc.comnmgnt.closemgnt.RetrieveCloseLogListCMD.do" + condition; 
//     ds_fundSettlementOfAccounts.Reset(); 
// };

//-------------------------------------------------------------------------
// 적수계산
//-------------------------------------------------------------------------
scwin.f_MonthProcess = async function () {
  let ret = await $c.gus.cfValidate($p, [ica_closeYm]);
  if (!ret) {
    return false;
  }
  var sMonth = ica_closeYm.getValue().trim();
  let confirmResult = await $c.win.confirm($p, sMonth.substring(0, 4) + "년" + sMonth.substring(4, 6) + "월" + " 적수를 생성하시겠습니까?");
  if (confirmResult) {
    $c.sbm.execute($p, sbm_fundSettlementOfAccounts);
  }
};
scwin.sbm_fundSettlementOfAccounts_submitdone = async function (e) {
  await $c.win.alert($p, "성공적으로 처리되었습니다.");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준월',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_closeYm',style:'',ref:'data:dma_search.closeYm',delimiter:'/',mandatory:'true',title:'기준월'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_MonthProcess',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_MonthProcess'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]}]}]}]}]}]}]}]})