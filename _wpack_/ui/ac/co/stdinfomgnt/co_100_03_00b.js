/*amd /ui/ac/co/stdinfomgnt/co_100_03_00b.xml 3563 5f88605afb999547add0138d9efc13f9bbbc8db25eea31aee03955e9385c738a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 귀속부서등록 (co_100_03_00b)
// 작성자 : 송정희
// 최초작성일자 : 2026-10-14
//-------------------------------------------------------------------------

scwin.vCoCd = $c.gus.cfIsNull($p, '<%=login.getCoCd()%>') ? '' : '<%=login.getCoCd()%>'; // 소속 자회사  
scwin.vCoClsCd = $c.gus.cfIsNull($p, '<%=login.getCoClsCd()%>') ? '' : '<%=login.getCoClsCd()%>'; //회계_회사구분('CO035' : 0:동부 EXPRESS)
//scwin.frameLoad = new Array();
//scwin.frameUrl = new Array();

scwin.onpageload = function () {
  console.log("PGM명 : 귀속부서등록 (co_100_03_00b)");
  //	scwin.f_InitTab();   
  //	scwin.f_ViewTab(0);  

  //  src 연결 확인
  //	<w2:content alwaysDraw="false" style="" id="content1" src="/ui/ac/co/stdinfomgnt/co_100_03_01b.xml">
  //	<w2:content alwaysDraw="false" style="" id="content2" src="/ui/ac/co/stdinfomgnt/co_100_08_01b.xml"></w2:content>
  //	<w2:content alwaysDraw="false" style="" id="content3" src="/ui/ac/co/stdinfomgnt/co_100_10_01b.xml"></w2:content>
};

//-------------------------------------------------------------------------
// 탭설정 초기화
//-------------------------------------------------------------------------
//scwin.f_InitTab = function () { 
//    frameLoad = [false, false, false];

//        frameUrl[0] = "/ac/co/stdinfomgnt/co_100_03_01b.xml";
//        frameUrl[1] = "/ac/co/stdinfomgnt/co_100_08_01b.xml";
//        frameUrl[2] = "/ac/co/stdinfomgnt/co_100_10_01b.xml"; 

//}
//-------------------------------------------------------------------------
// 탭클릭 처리
//-------------------------------------------------------------------------
//scwin.f_ViewTab = function (tabIndex) {  
//    if (frameLoad[tabIndex] == false) {
//        document.frames.item("iFrame" + tabIndex).location = frameUrl[tabIndex];
//        frameLoad[tabIndex] = true;
//    }  
//        $c.gus.cfViewTab(tabIndex); 

//}
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{id:'',class:'tabbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'wq_tab'},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',style:'',id:'tabs3',class:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs1',label:'귀속부서'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs2',label:'사업영역'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs3',label:'사업부'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content1',src:'/ui/ac/co/stdinfomgnt/co_100_03_01b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content2',src:'/ui/ac/co/stdinfomgnt/co_100_08_01b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content3',src:'/ui/ac/co/stdinfomgnt/co_100_10_01b.xml'}}]}]}]}]}]}]}]})