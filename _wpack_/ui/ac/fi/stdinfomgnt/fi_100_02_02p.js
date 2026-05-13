/*amd /ui/ac/fi/stdinfomgnt/fi_100_02_02p.xml 10013 87dc72097b812db473358f124d7a6fc45ad5eb8b3398755c8d1768871bf6dda6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리아이디',dataType:'text'}},{T:1,N:'w2:key',A:{dataType:'text',name:'회사코드',id:'param1'}},{T:1,N:'w2:key',A:{dataType:'text',name:'회사명',id:'param2'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_company',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'상위회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'회사레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'법인등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'법인등록명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'대표자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'직위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'업태명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'종목명',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_search',target:'data:json,{"id":"ds_company", "key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 회사조회
 * 메뉴경로 : 회계/재무회계/기준정보/회사등록
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/fi/stdinfomgnt/fi_100_02_02p.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-09-29
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항 :
 * 수정이력 :
 *    - 2025-09-29      배기원    최초작성
 */
scwin.arrRtnVal = [];
scwin.params;
// scwin.pWinCloseTF = "";

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  scwin.setInit();
  scwin.f_FieldClear();
  scwin.params = $c.data.getParameter($p);
  scwin.initPop(scwin.params.arrParm);

  // scwin.pWinCloseTF = scwin.params["pWinCloseTF"];
  // if (!$c.util.isEmpty(scwin.params["coCd"])) {
  //     dma_search.set("param1", scwin.params["coCd"]);
  // }
  // if (!$c.util.isEmpty(scwin.params["coNm"])) {
  //     dma_search.set("param2", scwin.params["coNm"]);
  // }

  scwin.f_Retrieve();
};

/**
 * 공통으로 넘어오는 파라메터값 세팅
 */
scwin.initPop = function (obj) {
  let arrParent = obj;
  edCoCd.setValue(arrParent[1][0].trim()); // 넘머온 코드 Value SET
  edCorRegNm.setValue(arrParent[1][1].trim()); // 넘머온 Name Value SET
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  ds_company.removeAll();
  totalRows.setValue("0");
};

/**
 * 조회초기 필드 Clear
 */
scwin.f_FieldClear = function (e) {
  //$c.gus.cfInitObjects($p, tbl_search, null);
  dma_search.setEmptyValue();
  dma_search.set("sysCd", "CommonEBC");
  dma_search.set("queryId", "retrieveDongbuGroupCompanyInfo");
  edCoCd.focus();
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  //타이틀 추가
  $c.data.setPopupTitle($p, "회사조회");
};

/**
 * 조회 : 데이터를 조회한다.
 */
scwin.f_Retrieve = function (e) {
  scwin.setInit();
  dma_search.set("param1", edCoCd.getValue());
  dma_search.set("param2", edCorRegNm.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_company.getRowCount();
  if (rowCnt == 1) {
    scwin.f_rtnValue(0);
  }
  totalRows.setValue(rowCnt);
  if (rowCnt > 0) {
    gr_company.setFocusedCell(0, 0);
  } else {
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    edCoCd.focus();
  }
};

/**
 * 조회영역 onkeydown
 */
scwin.search_onkeydown = function (e) {
  if (e.keyCode == "13") {
    scwin.f_Retrieve();
  }
};

/**
 * 닫기
 */
scwin.f_WinClose = function (e) {
  let rt = ["N/A"];
  $c.win.closePopup($p, rt);
};

/**
 * Grid에서 선택된 Row의 Value
 */
scwin.f_rtnValue = function (row) {
  for (i = 0; i < 10; i++) {
    scwin.arrRtnVal[i] = ds_company.getCellData(row, "col" + (i + 1));
  }
  var str_tmp = ds_company.getCellData(row, "col10");
  var strArr = str_tmp.advancedSplit("^", "t");
  for (i = 0; i < strArr.length; i++) {
    scwin.arrRtnVal[9 + i] = strArr[i];
  }
  $c.win.closePopup($p, scwin.arrRtnVal);
};

/****************************************************************************************
* 그리드, 데이타리스트 이벤트 영역
*****************************************************************************************/
/**
 * 그리드 더블클릭
 */
scwin.gr_company_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_rtnValue(rowIndex);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w100',id:'edCoCd',placeholder:'',style:'',maxlength:'3',objType:'key',ref:'data:dma_search.param1','ev:onkeydown':'scwin.search_onkeydown',allowChar:'0-9',editFormat:'###',editType:'focus',title:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'법인명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w200',id:'edCorRegNm',placeholder:'',style:'',maxlength:'70',objType:'Data',ref:'data:dma_search.param2','ev:onkeydown':'scwin.search_onkeydown',title:'법인명'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_company',focusMode:'cell',id:'gr_company',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_company_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'회사코드'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'300',value:'회사명'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col1',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col6',inputType:'text',removeBorderStyle:'false',width:'300',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_WinClose'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})