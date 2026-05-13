/*amd /ui/ac/co/bizplan/co_202_03_00b.xml 2515 829610f9ce45a7ef4b164a427001da4f0ac2e0553eff78141c9bbf2df27e756b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//let TAB1_URL = "/ac/co/bizplan/co_202_03_03b.jsp";
//let TAB2_URL = "/ac/co/bizplan/co_202_03_02b.jsp";

//let acctdeptExpnBudgetUrl = TAB1_URL;
//let mgntExpnBudgetUrl = TAB2_URL;

scwin.onpageload = function () {
  // 
};

//-------------------------------------------------------------------------
// Tab Display 처리 - 분기화면 tab-src에서 처리됨
//-------------------------------------------------------------------------
//scwin.f_ViewTab = function(idx){
//for(i=0;i<tab_mxTab_page.length;i++){
//    if(idx == i){
//        tab_mxTab_page(i).style.display = "block";
//        img_tab_left(i).src = "/common/images/tap_on_left.gif";
//        td_tab_center(i).bgColor = "#C5D6EA";
//        img_tab_right(i).src = "/common/images/tap_on_right.gif";
//    } else {
//        tab_mxTab_page(i).style.display = "none";
//        img_tab_left(i).src = "/common/images/tap_off_left.gif";
//        td_tab_center(i).bgColor = "#E2EBF2";
//        img_tab_right(i).src = "/common/images/tap_off_right.gif";
//    }
//}
//}
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'wq_tab',id:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'',id:'',style:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'부서별',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'계정별',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:'',src:'/ui/ac/co/bizplan/co_202_03_03b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',style:'',src:'/ui/ac/co/bizplan/co_202_03_02b.xml'}}]}]}]}]}]}]}]})