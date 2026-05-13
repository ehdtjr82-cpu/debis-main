/*amd /ui/tn/op/transwrkindict/cntr/tn_304_03_02p.xml 5858 cd930591f9915dccce9e759a2bba9d7c069eb6724508b6689dcd593349867ab1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_search',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stats',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'conSts',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'waitTime',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.op.transwrkindict.cntr.RetrieveCyCongestionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 배차관리 > CY자동화 > R/S 장비 실적 관리 > CY 상하차 정보조회

scwin.g_selected_input_box = "searchVehclNo";
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// Dataset DEBUG
//-------------------------------------------------------------------------
scwin.f_close = function () {
  $c.win.closePopup($p, searchVehclNo.getValue());
};
scwin.f_DelClick = function () {
  scwin.f_twinkleBtn("del");
  if (scwin.g_selected_input_box == 'searchVehclNo') {
    var value = searchVehclNo.getValue();
    if (value.length != 0) {
      value = value.substring(0, value.length - 1);
    }
    searchVehclNo.setValue(value);
  }
};
scwin.f_Click = function () {
  var code = this.getUserData('userData1');
  scwin.f_twinkleBtn(code, 80);
  if (scwin.g_selected_input_box == 'searchVehclNo') {
    if (searchVehclNo.getValue().length == 4) {
      //사번은 6자리
      return;
    }
    var value = searchVehclNo.getValue();
    value = value + '' + code;
    searchVehclNo.setValue(value);
  }
};
scwin.f_twinkleBtn = function (code, time) {
  time = time || 100;
  scwin.f_Btn1(code);
  setTimeout(function () {
    scwin.f_Btn2(code);
  }, time);
};
scwin.f_Btn1 = function (code) {
  var btnObj = null;
  if (code == 'del') {
    btnObj = btn_delete;
  } else {
    btnObj = $p.getComponentById("btn_" + code);
  }
  btnObj.addClass('on');
};
scwin.f_Btn2 = function (code) {
  var btnObj = null;
  if (code == 'del') {
    btnObj = btn_delete;
  } else {
    btnObj = $p.getComponentById("btn_" + code);
  }
  btnObj.removeClass('on');
};

//-----------------------------------------------------------------------------------
// TRAN EVENT
//-----------------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  if (ds_result.getRowCount() > 0) {
    var stats = ds_result.getCellData(0, "conSts");
    var waitTime = ds_result.getCellData(0, "waitTime");
    parentScope.scwin.f_displayCongestion(stats, waitTime);
  }
};
}}}]},{T:1,N:'style',A:{type:'text/css'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'calculatorbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'cal_title',id:''},E:[{T:1,N:'xf:input',A:{id:'searchVehclNo',style:''}}]},{T:1,N:'xf:group',A:{class:'cal_content',id:''},E:[{T:1,N:'xf:trigger',A:{id:'btn_1',style:'',type:'button',userData1:'1','ev:onclick':'scwin.f_Click'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:trigger',A:{id:'btn_2',style:'',type:'button',userData1:'2','ev:onclick':'scwin.f_Click'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:trigger',A:{id:'btn_3',style:'',type:'button',userData1:'3','ev:onclick':'scwin.f_Click'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:trigger',A:{id:'btn_4',style:'',type:'button',userData1:'4','ev:onclick':'scwin.f_Click'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'4'}]}]},{T:1,N:'xf:trigger',A:{id:'btn_5',style:'',type:'button',userData1:'5','ev:onclick':'scwin.f_Click'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'5'}]}]},{T:1,N:'xf:trigger',A:{id:'btn_6',style:'',type:'button',userData1:'6','ev:onclick':'scwin.f_Click'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'6'}]}]},{T:1,N:'xf:trigger',A:{id:'btn_7',style:'',type:'button',userData1:'7','ev:onclick':'scwin.f_Click'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'7'}]}]},{T:1,N:'xf:trigger',A:{id:'btn_8',style:'',type:'button',userData1:'8','ev:onclick':'scwin.f_Click'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'8'}]}]},{T:1,N:'xf:trigger',A:{id:'btn_9',style:'',type:'button',userData1:'9','ev:onclick':'scwin.f_Click'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'9'}]}]},{T:1,N:'xf:trigger',A:{id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'R'}]}]},{T:1,N:'xf:trigger',A:{id:'btn_0',style:'',type:'button',userData1:'0',class:'','ev:onclick':'scwin.f_Click'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:trigger',A:{id:'btn_delete',style:'',type:'button','ev:onclick':'scwin.f_DelClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'←'}]}]}]}]}]}]}]})