/*amd /ui/ac/fi/fixedaset/fi_301_02_04p.xml 19264 979f7509290e02562ac765ca8a6a2b236399077045febfa7e9794eeca0b12f3c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixedAsetNo',name:'자산번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetNm',name:'자산명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acqDtStDt',name:'삼각년월(시작)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acqDtEndDt',name:'삼각년월(종료)',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'deprYm',name:'상각년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'고정자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprClsCd',name:'상각구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetTbeginAmt',name:'자산기초금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetIncrAmt',name:'자산증가금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetDecrAmt',name:'자산감소금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfYrProvAmt',name:'전년도충당금금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookAmt',name:'장부가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'provTbeginAmt',name:'충당금기초금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'provIncrAmt',name:'충당금증가금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'provDecrAmt',name:'충당금감소금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'suvlAmt',name:'잔존금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprLimitAmt',name:'상각한도금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yyDeprAmt',name:'년감가상각금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmDeprAmt',name:'당월감가상각액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprCumAmt',name:'상각누계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrlSlipNo',name:'조정전표번호',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.fixedaset.RetrieveDepreciationContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master", "key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 자산월별상각내역조회
 * 메뉴경로 : 회계/재무회계/고정자산/고정자산조회및변경
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/fi/fixedaset/fi_301_02_04p.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-11-14
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 *    5. footer에 값 처리
 * 참고사항 : 
 * 수정이력 :
 *    - 2025-11-14      배기원    최초작성
 */
scwin.fixedAsetNo = "";
scwin.fixedAsetNm = "";
scwin.initJson = {}; //초기세팅값(TOBE)

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  if (!$c.util.isEmpty($p, scwin.params["fixedAsetNo"])) {
    scwin.fixedAsetNo = scwin.params["fixedAsetNo"];
  }
  if (!$c.util.isEmpty($p, scwin.params["fixedAsetNm"])) {
    scwin.fixedAsetNm = scwin.params["fixedAsetNm"];
  }
  //테스트값
  // scwin.fixedAsetNo = "1000045627";
  // scwin.fixedAsetNm = "테스트단지";
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  gr_master.setNoResultMessageVisible(false);
  ds_master.reform();
  ds_master.removeAll();
  totalRows.setValue("0");
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableObjects($p, ["ed_srchFixedAsetNo", "ed_srchFixedAsetNm"]);
  ed_srchFixedAsetNo.setValue(scwin.fixedAsetNo);
  ed_srchFixedAsetNm.setValue(scwin.fixedAsetNm);

  //기간은 당일의 12개월전부터
  let toYM = $c.date.getServerDateTime($p, "yyyyMM");
  let foYm = $c.date.addMonth($p, toYM + "01", -12);
  ica_acqDtStDt.setValue(foYm.substring(0, 6));
  ica_acqDtEndDt.setValue(toYM);
  scwin.initJson = dma_search.getJSON();
  scwin.f_Retrieve();
};

/**
 * 조회필드 CLEAR
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
  //데이터맵의 초기값으로 세팅 시
  //dma_search.setJSON(scwin.initJson);
};

/**
 * 데이터셋 세팅
 * tobe 사용안함
 */
scwin.f_HeaderCreate = function () {
  // var GAUCE_DATASET_HEADER = "acqDtStDt:STRING"
  //     + ",acqDtEndDt:STRING"
  //     + ",fixedAsetNo:STRING"
  //     + ",acctDeptCd:STRING"
  //     + ",asetPatternCd:STRING"
  //     + ",asetKndCd:STRING"
  //     + ",fixedAsetHistClsCd:STRING"
  //     + ",procDt:STRING";
  // ds_search.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_search.insertRow();
};

/**
 * 조회
 */
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_srchFixedAsetNo, ica_acqDtStDt, ica_acqDtEndDt]);
  if (!ret) {
    return false;
  }
  if (ica_acqDtStDt.getValue() > ica_acqDtEndDt.getValue()) {
    await $c.win.alert($p, MSG_CM_ERR_039);
    ica_acqDtStDt.focus();
    return;
  }
  scwin.setInit();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_master.setNoResultMessageVisible(true);
  let rowCnt = ds_master.getRowCount();
  totalRows.setValue(rowCnt);
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    } else {
      gr_master.setFocusedCell(0, 0);
    }
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 닫기
 */
scwin.f_WinClose = function (e) {
  let rt = ["N/A"];
  $c.win.closePopup($p, rt);
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
 * 그리드 셀 클릭 이벤트
 */
scwin.gr_master_oncellclick = function (rowIndex, columnIndex, columnId) {
  //전표팝업조회
  if (columnId == "ctrlSlipNo") {
    var ctrlSlipNo = ds_master.getCellData(rowIndex, "ctrlSlipNo");
    if (!$c.gus.cfIsNull($p, ctrlSlipNo)) {
      //상세화면 호출
      // var result = window.showModalDialog("/ac/fi/gnrlaccount/settmgnt/fi_204_02_01b.jsp?flag=Y", valueObject,
      //              "dialogWidth:825px; dialogHeight:600px; status:no; scroll:no");        
      let opts = {};
      opts.width = "825";
      opts.height = "600";
      opts.id = "popCtrlSlipNo";
      opts.title = "전표팝업조회";
      opts.popupName = "전표팝업조회";
      opts.scrollbars = false;
      opts.type = "browserPopup";
      let data = {};
      //팝업화면에게 param 넘김
      data.ctrlSlipNo = ctrlSlipNo;
      data.modPsblYn = "0";
      data.flag = "Y";
      $c.win.openPopup($p, "/ui/ac/fi/gnrlaccount/settmgnt/fi_204_02_01b.xml", opts, data);

      //전표팝업조회 공통있는데 화면이 다르긴 하네(fi_201_04_02p.xml)
      // await $c.gus.cfShowSlipInfo(slipNo);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_srchFixedAsetNo',class:' w100',ref:'data:dma_search.fixedAsetNo',editFormat:'##########',mandatory:'true',title:'자산번호',objType:'key'}},{T:1,N:'xf:input',A:{style:'',id:'ed_srchFixedAsetNm',class:' w150',ref:'data:dma_search.fixedAsetNm',maxlength:'30',mandatory:'true',title:'자산명',objType:'key'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상각년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToYearMon',A:{edFromId:'ica_acqDtStDt',edToId:'ica_acqDtEndDt',id:'udc_fromToYearMon',mandatoryFrom:'true',mandatoryTo:'true',refDataMap:'dma_search',refEdDt:'acqDtEndDt',refStDt:'acqDtStDt',style:'',titleFrom:'상각년월',titleTo:'상각년월'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'cell',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true','ev:oncellclick':'scwin.gr_master_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column31',value:'상각</br>년월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'자산</br>기초금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'자산</br>증가금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'자산</br>감소금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column23',value:'잔존금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'충당금</br>기초금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'충당금</br>증가금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'충당금</br>감소금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'충당금</br>합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'상각</br>한도금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'년감가</br>상각금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'월감가</br>상각금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'상각</br>누계금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'조정</br>전표번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'calendar',style:'',id:'deprYm',value:'',displayMode:'label',calendarValueType:'yearMonth',displayFormat:'yyyy/MM'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'asetTbeginAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'asetIncrAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'asetDecrAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'suvlAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'provTbeginAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'provIncrAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'provDecrAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'provDecrSumAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'deprLimitAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'yyDeprAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mmDeprAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'deprCumAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'link',style:'',id:'ctrlSlipNo',value:'',displayMode:'label',class:'linktype'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column57',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column56',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'asetTbeginAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column55',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'asetIncrAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column54',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'asetDecrAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column53',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'suvlAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column52',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'provTbeginAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column51',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'provIncrAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column50',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'provDecrAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column49',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'provDecrSumAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column48',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'deprLimitAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column47',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'yyDeprAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column46',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'mmDeprAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'deprCumAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'text',displayFormat:'#,###',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_WinClose',id:'btn_close',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})