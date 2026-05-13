/*amd /ui/cm/bc/sealmgnt/zz_914_01_00p.xml 2393 6a97fa405931b9ce2a2c8245e4c4c143dad41e9821656eb503dfd1f55065b694 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 인장이미지보기
 * 메뉴경로 : 공통/총무업무/인장관리/인장등록
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/cm/bc/sealmgnt/zz_914_01_00p.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-04
 * 수정이력  :
 *    - 2025-12-04      정승혜    최초작성
 *    - 2026-03-18      정승혜    기타수정
 * 메모 : 
 * 조회조건 : 
 */
scwin.params = "";
scwin.sealOwner = "";
scwin.sealOwnerNm = "";
scwin.sealKind = "";
scwin.sealKindNm = "";
scwin.sealStDt = "";
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.sealOwner = scwin.params["sealOwner"];
  scwin.sealOwnerNm = scwin.params["sealOwnerNm"];
  scwin.sealKind = scwin.params["sealKind"];
  scwin.sealKindNm = scwin.params["sealKindNm"];
  scwin.sealStDt = scwin.params["sealStDt"];
  console.log("params : " + JSON.stringify(scwin.params));
  scwin.f_image();
};
scwin.f_Close = function () {
  $c.win.closePopup($p);
};
scwin.f_image = function () {
  var imageUrl = $c.sbm.getContextPath($p) + "/cm.bc.sealmgnt.RetrieveSealImage.do" + "?sealOwner=" + encodeURIComponent(scwin.sealOwner || "") + "&sealKind=" + encodeURIComponent(scwin.sealKind || "") + "&sealStDt=" + encodeURIComponent(scwin.sealStDt || "");
  img_image1.setSrc(imageUrl);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:''},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:image',A:{src:'',style:'',id:'img_image1',class:'w-full h-full'}}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button','ev:onclick':'scwin.f_Close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})