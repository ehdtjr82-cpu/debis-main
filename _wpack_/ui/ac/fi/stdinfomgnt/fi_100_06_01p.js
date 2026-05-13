/*amd /ui/ac/fi/stdinfomgnt/fi_100_06_01p.xml 15694 6a31d2a710f3f6051d8cd8ff342ac0f8d3a7273fd6bfcde22dba369d54a01223 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리아이디',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'부가세관리부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'부가세관리부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'사용여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'적용년도',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vat',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'빈값',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'부가세관리부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'세무서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'계좌',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'사업부명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col11',name:'사업장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col12',name:'사업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col13',name:'부가세신고부서여부',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_search',target:'data:json,{"id":"ds_vat", "key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 부가세신고부서
 * 메뉴경로 : 회계/재무회계/기준정보/부가세관리부서등록
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/fi/stdinfomgnt/fi_100_06_01p.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-10-01
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅, 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항 :
 * 수정이력 :
 *    - 2025-10-01      배기원    최초작성
 */
scwin.hid_acctDeptCd = ""; //asis 사용안함
scwin.hid_pUseYn = "";
scwin.arrRtnVal = [];
scwin.params;
scwin.vCoCd; //회사 코드(param)
scwin.vCoClsCd; //회사 구분 코드(param)
scwin.vAdptYr; //적용년도(param)

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  scwin.setInit();
  scwin.f_FieldClear();
  scwin.params = $c.data.getParameter($p);
  scwin.pWinCloseTF = scwin.params["pWinCloseTF"];
  if (scwin.pWinCloseTF == "T") {
    if (!$c.util.isEmpty($p, scwin.params)) {
      if (!$c.util.isEmpty($p, scwin.params["pCode"])) {
        ed_vatDeclarAcctDeptCd.setValue(scwin.params["pCode"]);
      }
    }
  }
  if (!$c.util.isEmpty($p, scwin.params["pUseYn"])) {
    scwin.hid_pUseYn = scwin.params["pUseYn"];
  }
  if (!$c.util.isEmpty($p, scwin.params["pCoCd"])) {
    scwin.vCoCd = scwin.params["pCoCd"];
  }
  if (!$c.util.isEmpty($p, scwin.params["pCoClsCd"])) {
    scwin.vCoClsCd = scwin.params["pCoClsCd"];
  }
  if (!$c.util.isEmpty($p, scwin.params["pAdptYr"])) {
    scwin.vAdptYr = scwin.params["pAdptYr"];
  }

  // WinCloseTF가 T이고, 한 건만 조회 시 바로 팝업 닫혀야해서 추가
  if (!$c.util.isEmpty($p, scwin.params["pWinCloseTF"])) {
    scwin.vWinCloseTF = scwin.params["pWinCloseTF"];
  }
  ed_adptYr.setValue(scwin.vAdptYr);
  scwin.f_Retrieve();
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  ds_vat.removeAll();
  totalRows.setValue("0");
};

/**
 * 조회초기 필드 Clear
 */
scwin.f_FieldClear = function (e) {
  dma_search.setEmptyValue();
  dma_search.set("sysCd", "CommonEBC");
  dma_search.set("queryId", "retrieveVatDeclarAcctDeptCd");
  ed_vatDeclarAcctDeptCd.focus();
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  //타이틀 추가
  $c.data.setPopupTitle($p, "부가세관리부서");
};

/**
 * 조회 : 데이터를 조회한다.
 */
scwin.f_Retrieve = function (e) {
  scwin.setInit();
  dma_search.set("param1", ed_vatDeclarAcctDeptCd.getValue());
  dma_search.set("param2", ed_vatDeclarAcctDeptNm.getValue());
  dma_search.set("param3", ed_vatCrn.getValue());
  dma_search.set("param4", scwin.hid_acctDeptCd);
  dma_search.set("param5", scwin.hid_pUseYn);
  dma_search.set("param6", scwin.vCoCd);
  dma_search.set("param7", scwin.vCoClsCd);
  dma_search.set("param8", ed_adptYr.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    let rowCnt = ds_vat.getRowCount();
    totalRows.setValue(rowCnt);
    if (rowCnt > 0) {
      //조회된 결과 정렬(asis:<param name=SortExpr 참조)
      ds_vat.sort("col3", 0);
      if (!$c.util.isEmpty($p, scwin.vWinCloseTF) && scwin.vWinCloseTF == "T" && rowCnt == 1) {
        scwin.f_rtnValue(0);
      }
      gr_vat.setFocusedCell(0, 0);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
      ed_vatDeclarAcctDeptCd.focus();
    }
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
    scwin.arrRtnVal[i] = ds_vat.getCellData(row, "col" + (i + 1));
  }
  var str_tmp = ds_vat.getCellData(row, "col10");
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
scwin.gr_vat_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_rtnValue(rowIndex);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'년도',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_adptYr',placeholder:'',style:'',editFormat:'####',maxlength:'4',allowChar:'0-9',ref:'data:dma_search.param8','ev:onkeydown':'scwin.search_onkeydown',title:'년도'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_vatDeclarAcctDeptCd',placeholder:'',style:'',editFormat:'#####',allowChar:'0-9',maxlength:'5',ref:'data:dma_search.param1','ev:onkeydown':'scwin.search_onkeydown',title:'관리부서'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서명',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_vatDeclarAcctDeptNm',placeholder:'',style:'',maxlength:'30',ref:'data:dma_search.param2','ev:onkeydown':'scwin.search_onkeydown',title:'부서명'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_vatCrn',placeholder:'',style:'',editFormat:'#############',allowChar:'0-9',maxlength:'13',ref:'data:dma_search.param3','ev:onkeydown':'scwin.search_onkeydown',title:'사업자번호'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'trigger2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_vat',focusMode:'cell',id:'gr_vat',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_vat_oncelldblclick',autoFitMinWidth:'1200'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'빈값',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column43',value:'적용일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column41',value:'부가세관리부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column39',value:'부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column60',value:'사업장번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column61',value:'사업장명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column62',value:'부가세신고부서여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column37',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column35',value:'세무서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'계좌',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'사용여부',displayMode:'label'}},{T:1,N:'w2:column',A:{hiddenCol:'true',width:'120',inputType:'text',style:'',id:'column29',value:'사업부명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column59',value:'회사코드',displayMode:'label',hiddenCol:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col1',value:'',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'col2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'col3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'col4',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'col11',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'col12',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'160',inputType:'select',style:'',id:'col13',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value'}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'col6',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'col5',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'col7',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col8',value:'',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'col9',value:'',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col10',value:'',displayMode:'label',hiddenCol:'true',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_WinClose'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})