/*amd /ui/ds/op/adjmbd/pchstrfmgnt/op_401_01_00b.xml 3403 1d49d6c09e95adeb231458b03f9b0ac8ed459c09954198207242f562e6c46dc8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 회원정보를 json 데이터로 모두 받음
let memJson = $c.data.getMemInfo($p);
// 로그인 정보 추출
let userHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드
let userId = $c.data.getMemInfo($p, "userId");
let empNo = $c.data.getMemInfo($p, "empNo");
scwin.onpageload = function () {};

/*tab 초기화 처리(init)*/
scwin.tac_tabControl1_onchange = function (tabId, index, userTabId) {
  let currentFrame1 = tac_tabControl1.getFrame(0);
  let currentFrame2 = tac_tabControl1.getFrame(1);
  let currentFrame3 = tac_tabControl1.getFrame(2);
  let currentFrame5 = tac_tabControl1.getFrame(3);
  let currentFrame6 = tac_tabControl1.getFrame(4);
  if (userTabId == "tabs1") {
    currentFrame1.reload();
  } else if (userTabId == "tabs2") {
    currentFrame2.reload();
  } else if (userTabId == "tabs3") {
    currentFrame3.reload();
  } else if (userTabId == "tabs5") {
    currentFrame5.reload();
  } else if (userTabId == "tabs6") {
    currentFrame6.reload();
  } else {
    return;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onbeforepageunload':'scwin.onbeforepageunload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tab',id:'tac_tabControl1',style:'','ev:onchange':'scwin.tac_tabControl1_onchange'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'철송임률',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'전용화차율',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs3',label:'전용화차량',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs5',label:'철송임저감률'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs6',label:'역별조작료'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:'',src:'/ui/ds/op/adjmbd/pchstrfmgnt/op_401_02_04b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',style:'',src:'/ui/ds/op/adjmbd/pchstrfmgnt/op_401_02_10b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content3',style:'',src:'/ui/ds/op/adjmbd/pchstrfmgnt/op_401_02_11b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content5',src:'/ui/ds/op/adjmbd/pchstrfmgnt/op_401_02_08b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content6',src:'/ui/ds/op/adjmbd/pchstrfmgnt/op_401_02_06b.xml'}}]}]}]}]}]}]})