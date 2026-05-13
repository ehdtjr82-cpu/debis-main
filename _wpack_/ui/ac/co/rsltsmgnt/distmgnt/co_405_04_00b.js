/*amd /ui/ac/co/rsltsmgnt/distmgnt/co_405_04_00b.xml 2429 10c88da8035dd2c79d1c3c852c381d8a087758fb24d75e040e4bd4680c1b57d3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 배부결과조회
 * 메뉴경로 : 회계/관리회계/실적관리/배부관리/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/distmgnt/co_405_04_00b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-12-18
 * 작업내용 :
 *    1. 화면세팅
 * 참고사항
 *    1. 탭 메인화면 : 배부하는부서조회[co_405_04_03b.xml], 배부받는부서조회[co_405_04_04b.xml], 배부대상금액조회[co_405_04_02b.xml]
 * 수정이력 :
 *    - 2025-12-18      배기원    최초작성
 */

scwin.onpageload = function () {
  // console.log("co_405_04_00 탭메인화면 start");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{style:'',id:'',class:'tabbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'wq_tab'},E:[{T:1,N:'w2:tabControl',A:{style:'',id:'',class:'',alwaysDraw:'false',processMsgFrame:'false'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs1',label:'배부하는부서조회'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs2',label:'배부받는부서조회'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs3',label:'배부대상금액조회'}},{T:1,N:'w2:content',A:{src:'/ui/ac/co/rsltsmgnt/distmgnt/co_405_04_03b.xml',alwaysDraw:'false',style:'',id:'content1',scope:'true',frameMode:'wframePreload'}},{T:1,N:'w2:content',A:{src:'/ui/ac/co/rsltsmgnt/distmgnt/co_405_04_04b.xml',alwaysDraw:'false',style:'',id:'content2',scope:'true',frameMode:'wframePreload'}},{T:1,N:'w2:content',A:{src:'/ui/ac/co/rsltsmgnt/distmgnt/co_405_04_02b.xml',alwaysDraw:'false',style:'',id:'content3',scope:'true',frameMode:'wframePreload'}}]}]}]}]}]}]}]})