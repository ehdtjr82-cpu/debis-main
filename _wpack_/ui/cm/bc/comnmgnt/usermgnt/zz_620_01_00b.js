/*amd /ui/cm/bc/comnmgnt/usermgnt/zz_620_01_00b.xml 2608 ae96835c0416d213ae77b1c9038b682f7fa3a64725f35c0f67fcb882eafc3b6a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.tabCange'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @component
 * @componentName udc_zz_620_01_00b
 * @pluginName
 * @company
 * @developer
 * @category /ui/cm/bc/comnmgnt/usermgnt
 * @notSupportBrowser
 * @version
 * @htmlRender
 * @icon
 * @disableIcon
 * @description
 * @width
 * @height
 * @license
 * @imagePath
 * @homepage
 */

scwin.onpageload = function () {
  let params = $p.getParameter("paramData");

  // 메인화면에서 호출시 초기화면설정 노출
  try {
    if (params.init == "Y") {
      scwin.tabCange(3);
    }
  } catch (e) {
    console.log(e);
  }
};

/**
 * @method
 * @name tabCange
 * @description 탭 변경
 * @param {number} idx tab index
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.tabCange = function (idx) {
  tac_main.setSelectedTabIndex(idx);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'wq_tab',id:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'',id:'tac_main',style:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'개인정보변경',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'개인환경설정',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs3',label:'비밀번호변경'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs4',label:'초기화면설정'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:'',src:'/ui/cm/bc/comnmgnt/usermgnt/zz_620_01_02b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',style:'',src:'/ui/cm/bc/comnmgnt/usermgnt/zz_620_01_03b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content3',style:'',src:'/ui/cm/bc/comnmgnt/usermgnt/zz_620_01_04b.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content4',src:'/ui/cm/bc/comnmgnt/usermgnt/zz_620_01_06b.xml'}}]}]}]}]}]}]}]})