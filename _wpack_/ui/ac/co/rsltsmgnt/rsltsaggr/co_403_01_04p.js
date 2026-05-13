/*amd /ui/ac/co/rsltsmgnt/rsltsaggr/co_403_01_04p.xml 7090 180da49e21cb809d94890da188cf0652ac0e29d885082c84a626c12d21be333d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_master'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ymFrom',name:'반영할기간From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ymTo',name:'반영할기간To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'planRsltsClsCd',name:'계획실적구분',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ac.co.rsltsmgnt.rsltsaggr.CreateInterestRateAutoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_master_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 이자율등록자동생성
 * 메뉴경로 : 회계/관리회계/실적관리/실적집계/자산비용관리/이자율등록
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/rsltsaggr/co_403_01_04p.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-10-13
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항 :
 * 수정이력 :
 *    - 2025-10-13      배기원    최초작성
 */

//부모창에서 받은 파라메터
scwin.params;

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  //      $p.setTimeout(function() {
  scwin.f_SetDsetHeader();
  //      }, {"delay":50});
};

/**
 * 데이터셋의 헤더를 설정
 */
scwin.f_SetDsetHeader = function () {
  if (!$c.util.isEmpty($p, scwin.params["stdYm"])) {
    dma_master.set("stdYm", scwin.params["stdYm"]);
  }
};

/**
 * 생성
 */
scwin.f_Create = async function () {
  //생성조건 입력여부 및 형식 체크
  if (!(await $c.gus.cfValidate($p, [ed_stdYm, ed_YmFrom, ed_YmTo]))) {
    return;
  }

  //반영할 기간의 시작년월이 기준년월과 같은 지 체크
  if (ed_stdYm.getValue() == ed_YmFrom.getValue()) {
    await $c.win.alert($p, "기준년월과 반영할 기간의 시작년월이 같습니다.");
    ed_YmFrom.focus();
    return;
  }

  //반영할 기간의 종료년월이 기준년월과 같은 지 체크
  if (ed_stdYm.getValue() == ed_YmTo.getValue()) {
    await $c.win.alert($p, "기준년월과 반영할 기간의 종료년월이 같습니다.");
    ed_YmTo.focus();
    return;
  }
  //기준년월이 반영할 기간의 사이에 있는 지 체크
  if (ed_stdYm.getValue() > ed_YmFrom.getValue() && ed_stdYm.getValue() < ed_YmTo.getValue()) {
    await $c.win.alert($p, "기준년월이 반영할 기간의 사이에 있습니다.");
    ed_YmFrom.focus();
    return;
  }
  //반영할 기간의 시작과 끝을 비교
  if (ed_YmFrom.getValue() > ed_YmTo.getValue()) {
    await $c.win.alert($p, "반영할 기간의 범위가 잘못되었습니다.");
    ed_YmFrom.focus();
    return;
  }
  if (await $c.win.confirm($p, "반영할 기간의 기존 자료는 삭제됩니다.<BR>계속하시겠습니까?")) {
    // cfShowWaitMsg();
    dma_master.set("planRsltsClsCd", scwin.params["planRsltsClsCd"]);
    dma_master.set("coCd", scwin.params["coCd"]);
    $c.sbm.execute($p, sbm_master);
  }
};
scwin.sbm_master_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    $c.gus.f_cfAlertMsg($p, "자동생성 되었습니다.");
  }
};
scwin.sbm_master_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 닫기
 */
scwin.f_WinClose = function (e) {
  let rt = ["N/A"];
  $c.win.closePopup($p, rt);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년월',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'form-control cal w80 ',id:'ed_stdYm',style:'',objType:'key',mandatory:'true',validExp:'기준년월:yes:date=YYYYMM',displayFormat:'yyyy/MM',editType:'select',ref:'data:dma_master.stdYm',title:'기준년월'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'반영할 기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToYearMon',A:{id:'udc_fromToYearMon',refDataMap:'dma_master',refEdDt:'ymTo',refStDt:'ymFrom',style:'',mandatory:'true',edToId:'ed_YmTo',edFromId:'ed_YmFrom',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data',titleFrom:'반영할 기간',titleTo:'반영할 기간'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_create',style:'',type:'button',objType:'bSave',userAuth:'C','ev:onclick':'scwin.f_Create'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_WinClose',id:'btn_close',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})