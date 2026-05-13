/*amd /ui/ac/fm/fundemploy/fundsett/fm_206_01_03b.xml 4128 8c19ceee54fa4470e8303523a001862ae1ca037590437f6d99688ef74e32c5ed */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'closeYm',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fm.fundemploy.fundsett.CreateUncollectedInterestCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_condition", "key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.currYyyyMM = WebSquare.date.getFormattedDate(new Date(), "yyyyMM");
scwin.onpageload = function () {
  scwin.f_Setting();
};

//-------------------------------------------------------------------------
// function name : f_Header
// function desc : 헤더생성
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// scwin.name : f_Setting(
// function desc : 날짜셋팅
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  ica_closeYm.setValue(scwin.currYyyyMM);
  ica_closeYm.focus();
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  let ret = await $c.gus.cfValidate($p, [ica_closeYm]);
  if (!ret) {
    return false;
  }
  let confirmResult = await $c.win.confirm($p, "미수금이자금액을 계산하시겠습니까?");
  if (confirmResult) {
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = function (e) {
  $c.win.alert($p, "미수금이자금액계산을 완료하였습니다.");
  ica_closeYm.focus();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준월',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal',id:'ica_closeYm',style:'',objType:'data',mandatory:'true',validExp:'기준월:yes:date=YYYYMM',delimiter:'/',ref:'data:dma_condition.closeYm'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]}]}]}]}]}]}]}]})