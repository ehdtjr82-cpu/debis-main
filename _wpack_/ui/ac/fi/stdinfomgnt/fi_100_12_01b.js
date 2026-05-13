/*amd /ui/ac/fi/stdinfomgnt/fi_100_12_01b.xml 32836 6d18bece66327b18394fb139946a4e82b85d181be6f53dbf9a4d379bbd7e4d33 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리아이디',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'부가세관리부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'부가세관리부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'사용여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'적용년도',dataType:'text'}},{T:1,N:'w2:key',A:{id:'evidClsCd',name:'증빙구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsSellCls',name:'매입/출',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evidClsCd',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evidCode',saveRemovedData:'false','ev:onbeforerowpositionchange':'scwin.ds_evidCode_onbeforerowpositionchange','ev:onrowpositionchange':'scwin.ds_evidCode_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsNm',name:'증빙구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntYn',name:'거래처관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'부가세여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNoYn',name:'카드번호여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frchNoYn',name:'가맹점번호여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductClsYn',name:'공제구분여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroTaxClsYn',name:'영세율구분여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'limitAmt',name:'한도금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellEvidYn',name:'매출증빙여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsEvidYn',name:'매입증빙여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_evidClsCd',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_search',target:'data:json,{"id":"ds_evidClsCd", "key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_evidClsCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.stdinfomgnt.RetrieveEvidenceClassificationListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_evidCode","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_evidCode", "key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.stdinfomgnt.RegistEvidenceClassificationCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_evidCode","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 증빙구분코드등록
 * 메뉴경로 : 회계/재무회계/기준정보/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/fi/stdinfomgnt/fi_100_12_01b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-11-05
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항 : 
 *    1. 그리드.setNoResultMessageVisible(false) 설정해줘야 그리드에 데이터없음 안보임
 *    2. ☏ onbeforerowpositionchange 이벤트에 $c.gus.cfValidate([tbl_save]) 처리 안됨
 *    ☞ 일단 scwin.f_ValidationSync() 만들어서 처리(scwin.setInit()에 ds_list.reform() 필수, 조회 시 이벤트 안태움)
 *    3. ☏ UDC 행추가, 취소가 나와야 하는데 안됨
 *    4. "hiddenVisible":true 되어 있는 항목 일단 false 처리[hiddenCol="true" => hiddenCol="false"]
 * 수정이력 :
 *    - 2025-11-05      배기원    최초작성
 */

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  // var SEARCH_HEADER = "evidClsCd:STRING(2)" // 증빙구분코드
  //     + ",evidClsNm:STRING(30)" // 증빙구분명
  //     + ",useYn:INT(1)" // 사용여부
  //     + ",pchsSellCls:STRING(1)";

  // ds_search.SetDataHeader(SEARCH_HEADER);
  // ds_search.insertRow();
  // c_useYn.Index = 0;

  // var GAUCE_DATASET_HEADER = "evidClsCd:STRING(2)" // 증빙구분코드
  //     + ",evidClsNm:STRING(30)" // 증빙구분명
  //     + ",clntMgntYn:INT(1)" // 거래처관리여부
  //     + ",vatYn:INT(1)" // 부가세여부
  //     + ",cardNoYn:INT(1)" // 카드번호여부
  //     + ",frchNoYn:INT(1)" // 가맹점번호여부
  //     + ",deductClsYn:INT(1)" // 공제구분여부
  //     + ",zeroTaxClsYn:INT(1)" // 영세율구분여부
  //     + ",limitAmt:DECIMAL(13.0)" // 한도금액
  //     + ",sellEvidYn:INT(1)" // 매출증빙여부
  //     + ",pchsEvidYn:INT(1)"; // 매입증빙여부

  // ds_evidCode.SetDataHeader(GAUCE_DATASET_HEADER);
  // c_evidClsCd.focus();
  // $c.gus.cfDisableKeyData();
  // $c.gus.cfDisableObjects([bSav, bUpd]);
  // $c.gus.cfDisableObjects([ed_evidClsNm]);

  const codeOptions = [{
    grpCd: "FI019",
    compID: "lc_pchsSellCls"
  } //매출/매입
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};

/**
 * $c.data.setCommonCode 함수의 콜백함수
 */
scwin.callBackCommonCode = function () {
  scwin.f_EvidClsCd();
};

/**
 * 증빙종류조회
 */
scwin.f_EvidClsCd = function () {
  // ds_evidClsCd.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC"
  //     + "&queryId=retrieveEvidInfo";
  // ds_evidClsCd.undoAll();
  //데이터셋에 정보설정
  dma_search.setEmptyValue();
  dma_search.set("sysCd", "CommonEBC");
  dma_search.set("queryId", "retrieveEvidInfo");
  $c.sbm.execute($p, sbm_evidClsCd);
};

/**
 * 증빙종류조회 callback
 */
scwin.sbm_evidClsCd_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    // ds_evidClsCd.insertJSON(0, [{
    //     "col1": "",
    //     "col2": "전체"
    // }]);
    // ds_evidClsCd.reform();
    lc_evidClsCd.setValue("");
  } else {
    $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
  }
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  $c.gus.cfDisableObjects($p, grp_save);
  $c.gus.cfDisableBtn($p, [btn_update, btn_save]);
  gr_evidCode.setNoResultMessageVisible(false);
  ds_evidCode.reform();
  ds_evidCode.removeAll();
  totalRows.setValue("0");
  lc_evidClsCd.focus();
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
};

/**
 * 조회필드 CLEAR
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
};

/**
 * 조회
 */
scwin.f_Retrieve = async function () {
  // ds_search.UseChangeInfo = false
  // sbm_search.setAction = "/ac.fi.stdinfomgnt.RetrieveEvidenceClassificationListCMD.do";
  scwin.setInit();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_evidCode.setNoResultMessageVisible(true);
  let rowCnt = ds_evidCode.getRowCount();
  totalRows.setValue(rowCnt);
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    } else {
      //조회된 결과 정렬(asis:<param name=SortExpr 참조)
      ds_evidCode.sort("vatDeclarAcctDeptCd", 0);
      gr_evidCode.setFocusedCell(0, 0);
      $c.gus.cfDisableBtn($p, [btn_save]);
    }
  }
};

/**
 * 행추가
 */
scwin.f_Create = async function () {
  if (ds_evidCode.getInsertedIndex().length > 0) {
    let ret = await scwin.f_Validation();
    if (!ret) {
      return false;
    }
  }
  let row = ds_evidCode.insertRow();
  gr_evidCode.setFocusedCell(row, 0, false);

  //disable 처리
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableBtn($p, [btn_update]);
  $c.gus.cfEnableObjects($p, grp_save);
  lc_useYn.setValue(1);
  ed_evidClsCd.focus();
};

/**
 * 수정버튼
 */
scwin.f_Update = function () {
  // disable 처리
  $c.gus.cfDisableKey($p);
  $c.gus.cfEnableObjects($p, grp_save);
  $c.gus.cfDisableObjects($p, [ed_evidClsCd]);
  $c.gus.cfDisableBtn($p, [btn_update]);
  //focus 설정
  ed_evidClsNm.focus();
};

/**
 * 취소
 */
scwin.f_Cancel = function (e) {
  $c.data.undoRow($p, ds_evidCode, "N");
  $c.gus.cfDisableObjects($p, grp_save);
  $c.gus.cfDisableBtn($p, [btn_save]);
};

/**
 * 저장 시 입력 Validation
 */
scwin.f_Validation = async function () {
  //Mandatory 항목이 누락하지 않았는지 체크한다.
  // if (!cfCheckMandatory())
  // return false;

  // 체크(전표종류코드, 전표종류명)
  let ret = await $c.gus.cfValidate($p, [ed_evidClsCd, ed_evidClsNm, ed_limitAmt]);
  if (!ret) {
    return false;
  }
  return true;
};

/**
 * scwin.f_ValidationSync 사용하기 위한 함수
 */
scwin.myCfValidate = function (oElement) {
  let obj = $c.gus.object($p, oElement);
  if (obj.length != null) {
    for (var i = 0; i < obj.length; i++) {
      let id = obj[i];
      if ($c.gus.cfIsNull($p, id.getValue())) {
        $c.win.alert($p, id.options.title + "은(는) 필수 입력 항목입니다.");
        id.focus();
        return false;
      }
    }
  }
  return true;
};

/**
 * onbeforerowpositionchange 사용을 위한 validation 체크
 */
scwin.f_ValidationSync = function () {
  //필수값 임의로 체크(증빙구분코드, 증빙명, 한도금액)
  let ret = scwin.myCfValidate([ed_evidClsCd, ed_evidClsNm, ed_limitAmt]);
  if (!ret) {
    return false;
  }
  return true;
};

/**
 * 저장버튼
 */
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다.
  // if (ds_evidCode.IsUpdated == false) {
  if (ds_evidCode.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["데이타"]);
    return;
  }

  // 체크
  if (!(await scwin.f_Validation())) {
    return;
  }
  let ret = await $c.gus.cfValidate($p, [gr_evidCode]);
  if (!ret) {
    return false;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    sbm_save.userData1 = "noError";
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    ds_evidCode.reform();
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 엑셀파일 다운로드
 * TOBE 사용안함(UDC 속성값 사용, udc_topGrdBtn)
 */
// scwin.f_Excel = function() {
//     if ($c.win.confirm("Excel로 다운로드 하시겠습니까?")) {
//         $c.data.downloadGridViewExcel(objGridName, "증빙구분조회", "증빙구분조회.xls", 2 + 8 + 16);
//     }
// };

/**
 * 그리드 값 변경(decode 대신 처리)
 */
scwin.decodeYnExp2 = function (data) {
  return $c.gus.decode($p, data, "1", "Y", "0", "N", "");
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
 * DataList의 rowPosition이 변경된 경우 발생
 */
scwin.ds_evidCode_onrowpositionchange = function (info) {
  if (ds_evidCode.getRowStatus(info.newRowIndex) == "C") {
    $c.gus.cfEnableKeyData($p);
  } else {
    //기타 데이타 -> 초기화, 수정, 삭제버튼 활성화
    $c.gus.cfDisableObjects($p, grp_save);
    $c.gus.cfDisableBtn($p, [btn_save]);
  }
};

/**
* DataList의 rowPosition이 변경되기 직전에 발생하며 rowPosition의 변경 적용 여부를 결정
* asis : 그리드 로우를 변경하려고 할 경우 - 필수항목 체크
* tobe : 현재 $c.gus.cfValidate 사용 시 async라 이벤트에 async주면 return false안먹힘
*/
scwin.ds_evidCode_onbeforerowpositionchange = function (info) {
  if (ds_evidCode.getRowStatus(info.oldRowIndex) == "C" || ds_evidCode.getRowStatus(info.oldRowIndex) == "U") {
    return scwin.f_ValidationSync();
  }
};

/**
 * 입력이 가능한 컬럼에서 포커스가 빠져나가는 시점에 본 속성에 정의한 함수를 실행
 * 빈값인 경우 0으로 설정
 */
scwin.validatorNumber = function (val) {
  if ($c.gus.cfIsNull($p, val)) {
    return "0";
  }
  return val;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'증빙구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' w200',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_evidClsCd',style:'',submenuSize:'auto',ref:'data:dma_search.evidClsCd',chooseOptionLabel:'전체',visibleRowNum:'15'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_evidClsCd'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입/출',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' w100',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_pchsSellCls',style:'',submenuSize:'auto',ref:'data:dma_search.pchsSellCls',emptyItem:'true',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w100',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'c_useYn',ref:'data:dma_search.useYn',style:'',submenuSize:'auto',title:'사용여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col ',id:'',style:'width: 850px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"증빙구분조회.xlsx", "sheetName":"증빙구분조회", "type":"1", "hiddenVisible":false}',gridID:'gr_evidCode',gridUpYn:'N',grp:'grd_section1',id:'udc_excel',style:'',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_evidCode',id:'gr_evidCode',style:'',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'20',readOnly:'true',focusMode:'row',visibleRowNum:'17',keepDefaultColumnWidth:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'증빙구분코드',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'증빙명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'거래처관리여부',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'부가세여부',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'카드번호여부',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'가맹점번호여부',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'공제구분여부',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'영세율구분여부',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'매출증빙여부',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'매입증빙여부',width:'120'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'한도금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'사용여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'evidClsCd',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'evidClsNm',inputType:'text',style:'',value:'',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntMgntYn',inputType:'text',style:'',value:'',width:'120',displayFormatter:'scwin.decodeYnExp2',hiddenCol:'false',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatYn',inputType:'text',style:'',value:'',width:'120',displayFormatter:'scwin.decodeYnExp2',hiddenCol:'false',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cardNoYn',inputType:'text',style:'',value:'',width:'120',displayFormatter:'scwin.decodeYnExp2',hiddenCol:'false',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'frchNoYn',inputType:'text',style:'',value:'',width:'120',displayFormatter:'scwin.decodeYnExp2',hiddenCol:'false',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deductClsYn',inputType:'text',style:'',value:'',width:'120',displayFormatter:'scwin.decodeYnExp2',hiddenCol:'false',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'zeroTaxClsYn',inputType:'text',style:'',value:'',width:'120',displayFormatter:'scwin.decodeYnExp2',hiddenCol:'false',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellEvidYn',inputType:'text',style:'',value:'',width:'120',displayFormatter:'scwin.decodeYnExp2',hiddenCol:'false',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsEvidYn',inputType:'text',style:'',value:'',width:'120',displayFormatter:'scwin.decodeYnExp2',hiddenCol:'false',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'limitAmt',value:'',displayMode:'label',textAlign:'right',hiddenCol:'false',hidden:'true',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'useYn',value:'',displayMode:'label',displayFormatter:'scwin.decodeYnExp2',hiddenCol:'false',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',btnDelYn:'N',btnRowDelYn:'N',gridID:'gr_evidCode',id:'udc_bottomGrdBtn1',rowAddFunction:'scwin.f_Create',rowAddUserAuth:'C',style:'',cancelFunction:'scwin.f_Cancel',rowDelUserAuth:'D'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'grp_save',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'증빙구분코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control w100',id:'ed_evidClsCd',style:'',ref:'data:ds_evidCode.evidClsCd',editFormat:'##',mandatory:'true',maxlength:'2',title:'증빙구분코드',objType:'key'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'증빙명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'ed_evidClsNm',style:'',ref:'data:ds_evidCode.evidClsNm',title:'증빙명',mandatory:'true',maxByteLength:'30',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처관리여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',falseValue:'0',id:'cbx_clntMgntYn',ref:'data:ds_evidCode.clntMgntYn',refInitSync:'false',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',title:'거래처관리여부',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',falseValue:'0',id:'cbx_vatYn',ref:'data:ds_evidCode.vatYn',refInitSync:'false',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',title:'부가세여부',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'카드번호여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',falseValue:'0',id:'cbx_cardNoYn',ref:'data:ds_evidCode.cardNoYn',refInitSync:'false',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',title:'카드번호여부',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'가맹점번호여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',falseValue:'0',id:'cbx_frchNoYn',ref:'data:ds_evidCode.frchNoYn',refInitSync:'false',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',title:'가맹점번호여부',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공제구분여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',falseValue:'0',id:'cbx_deductClsYn',ref:'data:ds_evidCode.deductClsYn',refInitSync:'false',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',title:'공제구분여부',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'영세율구분여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',falseValue:'0',id:'cbx_zeroTaxClsYn',ref:'data:ds_evidCode.zeroTaxClsYn',refInitSync:'false',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',title:'영세율구분여부',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출증빙여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',falseValue:'0',id:'cbx_sellEvidYn',ref:'data:ds_evidCode.sellEvidYn',refInitSync:'false',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',title:'매출증빙여부',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입증빙여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',falseValue:'0',id:'cbx_pchsEvidYn',ref:'data:ds_evidCode.pchsEvidYn',refInitSync:'false',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',title:'매입증빙여부',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'한도금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150 tar',dataType:'number',displayFormat:'#,###',id:'ed_limitAmt',maxlength:'13',objType:'data',ref:'data:ds_evidCode.limitAmt',style:'',title:'한도금액',mandatory:'true',validator:'scwin.validatorNumber'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',emptyItem:'true',id:'lc_useYn',mandatory:'true',objType:'data',ref:'data:ds_evidCode.useYn',style:'',submenuSize:'auto',title:'사용여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용안함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Update',id:'btn_update',objType:'bUpdate',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Save',id:'btn_save',objType:'bSave',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]}]}]})