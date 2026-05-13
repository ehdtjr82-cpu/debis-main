/*amd /ui/cm/bc/clnt/clntmgnt/zz_210_01_00b.xml 5888 478f88cd6f9dc9da405f69bc24cf77cf5e09fa1787382174d6f47a435e6ffffb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col3',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col4',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col5',name:'name5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col6',name:'name6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col7',name:'name7'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col8',name:'name8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col9',name:'name9'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col10',name:'name10'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col11',name:'name11'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col12',name:'name12'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col13',name:'name13'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col14',name:'name14'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col15',name:'name15'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col16',name:'name16'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col17',name:'name17'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = async function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd;
  if (scwin.vUserHomeClsCd == "EQ") {
    // scwin.f_ViewTab(0);
    await img_tab_left.setSelectedTabIndex(0);
  } else if (scwin.vUserHomeClsCd == "DS") {
    // scwin.f_ViewTab(1);
    await img_tab_left.setSelectedTabIndex(1);
  } else if (scwin.vUserHomeClsCd == "AC") {
    // scwin.f_ViewTab(2);
    await img_tab_left.setSelectedTabIndex(2);
  }
};

// to-do
// 아래 함수 필요없는거 같음. as-is에서는 함수가 필요하지만 to-be에서는 웹스퀘어에서 탭 설정 가능.
// 주석처리하였음.
// scwin.f_ViewTab = function (idx) {
//     var menuCount = 4;
//     var urlList = new Array("/ui/cm/bc/clnt/clntmgnt/zz_210_02_01b.xml"  //정비거래처
//         , "/ui/cm/bc/clnt/clntmgnt/zz_210_02_02b.xml"    // 물류거래처
//         , "/ui/cm/bc/clnt/clntmgnt/zz_210_02_05b.xml"	 // 회계거래처 
//         , "/ui/cm/bc/clnt/clntmgnt/zz_210_02_07b.xml"	 // 전자결재요청 2019.03 추가
//     );

//     for (i = 0; i < menuCount; i++) {
//         var imgTabLeft = "img_tab_left" + i;
//         var tbTabCenter = "td_tab_center" + i;
//         var imgTabRight = "img_tab_right" + i;
//         if (i == idx) {
//             // 선택버튼 이미지 On
//             eval(imgTabLeft).src = "/common/images/tap_on_left.gif";
//             eval(tbTabCenter).style.backgroundColor = "#c5d6ea";
//             eval(imgTabRight).src = "/common/images/tap_on_right.gif";
//             url = urlList[i];
//             continue;
//         }
//         // 선택버튼 이미지 Off
//         // eval(imgTabLeft).src = "/common/images/tap_off_left.gif";
//         // eval(tbTabCenter).style.backgroundColor = "#e2ebf2";
//         // eval(imgTabRight).src = "/common/images/tap_off_right.gif";
//     }
//     clntIframe.location = url;
// }

// to-do
scwin.resizeHeight = function (fr) {
  document.getElementById("clntIframe").style.height = clntIframe.document.body.scrollHeight;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'tabbox ',id:''},E:[{T:1,N:'xf:group',A:{class:'wq_tab',id:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',id:'img_tab_left',style:'','ev:ontabclick':'scwin.f_ViewTab'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'정비',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'물류',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs3',label:'회계'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs8',label:'전자결재'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:'',src:'/ui/cm/bc/clnt/clntmgnt/zz_210_02_01b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',style:'',src:'/ui/cm/bc/clnt/clntmgnt/zz_210_02_02b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content3',src:'/ui/cm/bc/clnt/clntmgnt/zz_210_02_05b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content8',src:'/ui/cm/bc/clnt/clntmgnt/zz_210_02_07b.xml'}}]}]}]}]}]}]}]})