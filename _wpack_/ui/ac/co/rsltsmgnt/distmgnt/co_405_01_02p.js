/*amd /ui/ac/co/rsltsmgnt/distmgnt/co_405_01_02p.xml 11063 e9636a90ec05b305c2cafe6f5fd58a2156a02f880fda2d05051469de1e9c564d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_master'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'creatYmFrom',name:'반영할기간From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'creatYmTo',name:'반영할기간To',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ac.co.rsltsmgnt.distmgnt.CreateDistributionDepartmentAutoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_master_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 배부부서등록자동생성
 * 메뉴경로 : 회계/관리회계/실적관리/배부관리/배부부서등록
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/distmgnt/co_405_01_02p.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-12-12
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항 :
 *    1. 회사코드 가져오는 UDC코딩했으나 회사코드가 비활성화라 사용하지 않음(로직 지워도 됨)
 * 수정이력 :
 *    - 2025-12-12      배기원    최초작성
 */

//부모창에서 받은 파라메터
scwin.params;

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.f_HeaderCreate();
  scwin.params = $c.data.getParameter($p);
  if (!$c.util.isEmpty($p, scwin.params["stdYm"])) {
    dma_master.set("stdYm", scwin.params["stdYm"]);
  }
  if (!$c.util.isEmpty($p, scwin.params["coCd"])) {
    dma_master.set("coCd", scwin.params["coCd"]);
  }
  if (!$c.util.isEmpty($p, scwin.params["coNm"])) {
    dma_master.set("coNm", scwin.params["coNm"]);
  }
  $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  ica_stdYm.focus();
};

/**
 * 데이터셋의 헤더를 설정
 * TOBE 사용안함
 */
scwin.f_HeaderCreate = function () {
  // var GAUCE_DATASET_HEADER = "stdYm:STRING(6)"
  //     + ",coCd:STRING(3)"
  //     + ",creatYmFrom:STRING(6)"
  //     + ",creatYmTo:STRING(6)";
  // dma_master.removeAll();
  // dma_master.SetDataHeader(GAUCE_DATASET_HEADER);
  // dma_master.insertRow();
};

/**
 * 생성
 */
scwin.f_Create = async function () {
  //생성조건 입력여부 및 형식 체크(00계획월, 01~12 실적월)
  //if (!cfValidate([ica_stdYm,ica_creatYmFrom,ica_creatYmTo]))
  // return;

  if (ica_stdYm.getValue().substring(4, 6) > "12" || ica_creatYmFrom.getValue().substring(4, 6) > "12" || ica_creatYmTo.getValue().substring(4, 6) > "12") {
    await $c.win.alert($p, "해당월 사용불가 합니다.");
    ica_stdYm.focus();
    return;
  }

  //반영할 기간의 시작년월이 기준년월과 같은 지 체크
  if (ica_stdYm.getValue() == ica_creatYmFrom.getValue()) {
    await $c.win.alert($p, "기준년월과 반영할 기간의 시작년월이 같습니다.");
    ica_creatYmFrom.focus();
    return;
  }

  //반영할 기간의 종료년월이 기준년월과 같은 지 체크
  if (ica_stdYm.getValue() == ica_creatYmTo.getValue()) {
    await $c.win.alert($p, "기준년월과 반영할 기간의 종료년월이 같습니다.");
    ica_creatYmTo.focus();
    return;
  }

  //기준년월이 반영할 기간의 사이에 있는 지 체크
  if (ica_stdYm.getValue().trim() >= ica_creatYmFrom.getValue().trim() && ica_stdYm.getValue().trim() < ica_creatYmTo.getValue().trim()) {
    await $c.win.alert($p, "기준년월이 반영할 기간의 사이에 있습니다.");
    ica_creatYmFrom.focus();
    return;
  }
  //반영할 기간의 시작과 끝을 비교
  if (ica_creatYmFrom.getValue() > ica_creatYmTo.getValue()) {
    await $c.win.alert($p, "반영할 기간의 범위가 잘못되었습니다.");
    ica_creatYmFrom.focus();
    return;
  }
  if (await $c.win.confirm($p, "반영할 기간의 기존 자료는 삭제됩니다.<BR>계속하시겠습니까?")) {
    $c.sbm.execute($p, sbm_master);
  }
};
scwin.sbm_master_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    $c.gus.f_cfAlertMsg($p, MSG_CM_INF_001);
  }
};

// scwin.sbm_master_submiterror = function (e) {
//     $c.gus.cfAlertMsg(e.responseJSON.resultDataSet[1].Msg);
// };

/**
 * 닫기
 */
scwin.f_WinClose = function (e) {
  let rt = ["N/A"];
  $c.win.closePopup($p, rt);
};

/**
 * 회사입력팝업
 */
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_comCode.cfCommonPopUp(scwin.udc_comCode_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, null);
};

/**
 * 회사코드 팝업 callBack
 */
scwin.udc_comCode_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_coCd.setValue(ret[0]); // 코드
    ed_coNm.setValue(ret[5]); // 회사명
    ed_coCd.hidVal = ret[0]; // 히든값
  } else {
    ed_coCd.setValue(""); // 코드
    ed_coNm.setValue(""); // 회사명
    ed_coCd.hidVal = ""; // 히든값
  }
};

/*##############################################################
 * UDC 이벤트
 *##############################################################*/
/**
 * 회사코드(조회) 팝업 호출
 */
scwin.udc_comCode_onclickEvent = function (e) {
  if (ed_coCd.hidVal != ed_coCd.getValue()) {
    ed_coNm.setValue("");
  }
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_comCode_onviewchangeCodeEvent = function (info) {
  ed_coNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_coCd.getValue())) {
    scwin.f_PopUpCompanyInfo('T');
  }
};

/**
 * 반영할기간 onBlue 이벤트(시작)
 */
scwin.udc_fromToYearMon_onBlur = function () {
  // if(!$c.date.isDate(ica_creatYmFrom.getValue()+"01")) {
  //     ica_creatYmFrom.setValue("");
  //     ica_creatYmFrom.focus();
  // }
  // if(!$c.gus.cfIsNull(ica_creatYmFrom.getValue())) {
  //     ica_creatYmTo.focus();
  // }
};

/**
 * 반영할기간 onBlue 이벤트(종료)
 */
scwin.udc_fromToYearMon_onBlurTo = function (e) {
  // if(!$c.date.isDate(ica_creatYmTo.getValue()+"01")) {
  //     ica_creatYmTo.setValue("");
  //     ica_creatYmTo.focus();
  // }
  // if(!$c.gus.cfIsNull(ica_creatYmFrom.getValue()) && !$c.gus.cfIsNull(ica_creatYmTo.getValue())) {
  //     scwin.f_Create();
  // }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_company',code:'coCd',codeId:'ed_coCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_comCode_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_comCode_onviewchangeCodeEvent',id:'udc_comCode',mandatoryCode:'true',maxlengthCode:'3',maxlengthName:'30',name:'coNm',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'key',popupID:'popupCocd',refDataCollection:'dma_master',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validExpCode:'회사코드',validTitle:'회사코드',codeWidth:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req tar',id:'',label:'기준년월 계획[00월]<br/>실적[01~12]',ref:'',style:'',userData2:'',escape:'false'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'w80',id:'ica_stdYm',style:'',pickerType:'dynamic',displayFormat:'yyyy/MM',mandatory:'true',objType:'key',ref:'data:dma_master.stdYm'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'반영할 기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToYearMon',A:{edFromId:'ica_creatYmFrom',edToId:'ica_creatYmTo',id:'udc_fromToYearMon',mandatoryFrom:'true',mandatoryTo:'true',refDataMap:'dma_master',refEdDt:'creatYmTo',refStDt:'creatYmFrom',style:'',titleFrom:'반영할 기간',titleTo:'반영할 기간'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Create',id:'btn_create',objType:'bSave',style:'',type:'button',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_WinClose',id:'btn_close',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})