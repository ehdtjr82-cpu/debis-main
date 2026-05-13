/*amd /ui/ac/co/rsltsmgnt/distmgnt/co_405_02_01p.xml 9899 3cea29f93d7903101d6085914107cb1a5f85c38181e5158cdc9ac97b103378d4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_master'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdYr',name:'기준년도',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distStdCd',name:'현재기준',dataType:'text'}},{T:1,N:'w2:key',A:{id:'chgDistStdCd',name:'변경기준',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_temp',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryId',name:'쿼리아이디',dataType:'text'}},{T:1,N:'w2:column',A:{id:'param1',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'param2',name:'기준년도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'param3',name:'현재기준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.co.rsltsmgnt.distmgnt.ChangeDistributionStandardCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_temp","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 배부기준등록자동생성
 * 메뉴경로 : 회계/관리회계/실적관리/배부관리/배부기준등록
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/distmgnt/co_405_02_01p.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-10-20
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항 :
 * 수정이력 :
 *    - 2025-10-20      배기원    최초작성
 */
/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  scwin.f_Header();
  scwin.params = $c.data.getParameter($p);
  if (!$c.util.isEmpty($p, scwin.params["stdYr"])) {
    ed_stdYr.setValue(scwin.params["stdYr"]);
  }
  if (!$c.util.isEmpty($p, scwin.params["coCd"])) {
    ed_coCd.setValue(scwin.params["coCd"]);
  }
  if (!$c.util.isEmpty($p, scwin.params["coNm"])) {
    ed_coNm.setValue(scwin.params["coNm"]);
  }
  const codeOptions = [{
    grpCd: "CO007",
    compID: "lc_distStdCd, lc_chgDistStdCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  ed_stdYr.focus();
  $c.gus.cfDisableObjects($p, [ed_coCd]);
};

/**
 * 조회 데이터셋 헤더 생성
 * TOBE 사용안함
 */
scwin.f_Header = function () {
  // var GAUCE_DATASET_HEADER = "coCd:STRING(3)"
  //       + ",stdYr:STRING(4)"
  //       + ",distStdCd:STRING()"
  //       + ",chgDistStdCd:STRING()";
  // ds_master.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_master.insertRow();
};

/**
 * 변경
 */
scwin.f_Change = async function (e) {
  //생성조건 입력여부 및 형식 체크
  let ret = await $c.gus.cfValidate($p, [ed_stdYr, lc_distStdCd, lc_chgDistStdCd]);
  if (!ret) {
    return false;
  }
  if (lc_distStdCd.getValue() == lc_chgDistStdCd.getValue()) {
    await $c.win.alert($p, "현재 기준과 변경 기준이 같습니다. 기준을 다시 선택해주세요.");
    return false;
  }
  ret = await scwin.f_chkDistributionStandardCount();
  if (!ret) {
    await $c.win.alert($p, lc_distStdCd.getText(true) + " 기준으로 등록된 내역이 없습니다.");
    return false;
  }
  if (await $c.win.confirm($p, ed_stdYr.getValue() + "년도 기준자료가 일괄 변경됩니다.<BR>" + lc_distStdCd.getText(true) + "기준을 " + lc_chgDistStdCd.getText(true) + "기준으로 일괄변경하시겠습니까?")) {
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  }
};

// scwin.sbm_save_submiterror = function (e) {
//     $c.gus.cfAlertMsg(e.responseJSON.resultDataSet[1].Msg);
// };

/**
 * 현재기준 등록여부 체크
 */
scwin.f_chkDistributionStandardCount = async function () {
  var ebcId = "DistributionStandardInformationEBC";
  var queryId = "retrieveDistributionStandardCount";
  var param1 = ed_coCd.getValue(); // 회사코드
  var param2 = ed_stdYr.getValue().trim(); // 기준년도
  var param3 = lc_distStdCd.getValue(); // 현재기준
  //테스트 데이터
  //param3 = "25";
  ds_temp.removeAll();
  ds_temp.insertRow(0);
  ds_temp.setCellData(0, "sysCd", ebcId);
  ds_temp.setCellData(0, "queryId", queryId);
  ds_temp.setCellData(0, "param1", param1);
  ds_temp.setCellData(0, "param2", param2);
  ds_temp.setCellData(0, "param3", param3);
  await $c.sbm.execute($p, sbm_retrieve, ds_temp.getRowJSON(0));
  if (ds_temp.getCellData(0, "col1") == "0") {
    return false;
  } else {
    return true;
  }
};

/**
 * 닫기
 */
scwin.f_WinClose = function (e) {
  let rt = ["N/A"];
  $c.win.closePopup($p, rt);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group col7',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w85',id:'ed_coCd',placeholder:'',style:'',readOnly:'true',ref:'data:ds_master.coCd',mandatory:'true',title:'회사코드'}},{T:1,N:'xf:input',A:{class:'form-control',id:'ed_coNm',placeholder:'',style:'',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년도',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:'form-control cal w50',id:'ed_stdYr',style:'',ref:'data:ds_master.stdYr',title:'기준년도',mandatory:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'현재 기준',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'form-control ',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_distStdCd',style:'',submenuSize:'auto',ref:'data:ds_master.distStdCd',chooseOptionLabel:'선택',mandatory:'true',title:'현재기준',visibleRowNum:'20'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'변경 기준',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'form-control ',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_chgDistStdCd',style:'',submenuSize:'auto',ref:'data:ds_master.chgDistStdCd',chooseOptionLabel:'선택',mandatory:'true',title:'변경기준',visibleRowNum:'20'},E:[{T:1,N:'xf:choices'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_change',style:'',type:'button','ev:onclick':'scwin.f_Change',userAuth:'U',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'변경'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_WinClose',id:'btn_close',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})