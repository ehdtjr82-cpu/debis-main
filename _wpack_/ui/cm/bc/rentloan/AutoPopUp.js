/*amd /ui/cm/bc/rentloan/AutoPopUp.xml 6481 d8d9e89f9a1ffcea5fd63951b2c8df3a6ce2d818775c60962cd422d57ca0eb65 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){2;
scwin.vCookieID = "";
scwin.vCallURL = "";
scwin.vExpDay = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.vCookieID = scwin.params["pCookieID"];
  scwin.vCallURL = scwin.params["pCallURL"];
  scwin.vExpDay = scwin.params["pExpDay"];

  //test
  // scwin.vCookieID= "retrieveExpireContractCnt2";
  // scwin.vCallURL = "/ui/cm/bc/rentloan/zz_900_01_09b.xml";
  // scwin.vExpDay = "1";

  popIframe.setSrc(scwin.vCallURL);

  // scwin.resizeHeight(this);
};
scwin.setCookie = function (name, value, expiredays) {
  var expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + Number(expiredays));
  document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/" + "; expires=" + expireDate.toUTCString();
};
scwin.CloseWin = function () {
  let noticeVal = Notice.getValue();
  if (noticeVal == "1") {
    let key = scwin.vCookieID;
    let today = new Date();
    let expireDate = new Date();
    expireDate.setDate(today.getDate() + Number(scwin.vExpDay || 1));
    WebSquare.localStorage.setItem(key, expireDate.getTime());
  }
  $c.win.closePopup($p);
};

// scwin.resizeHeight = function(fr) {
//     fr = typeof fr == 'string' ? document.getElementById(fr) : fr;
//     fr.style.height = popIframe.document.body.scrollHeight;
// }
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'popIframe',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:'display: none;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'계약 만료 내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'',id:'gr_gridView1',style:'',visibleRowNum:'13',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',value:'선택',width:'70',colSpan:'',rowSpan:'2',checkboxLabel:'선택',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'계약번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'거래처번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'거래처명',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'계약등록자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'계약기간',width:'140',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'계약잔여일수',width:'120',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'시작일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column20',value:'종료일',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'checkbox',width:'70',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column18',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column16',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column14',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column12',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column10',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column6',inputType:'text',width:'120'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'position: absolute;left:20px;',id:'Notice',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오늘 하루 창을 띄우지 않음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.CloseWin'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'display: none;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]}]}]}]}]}]})