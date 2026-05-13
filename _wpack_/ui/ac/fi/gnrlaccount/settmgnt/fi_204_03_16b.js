/*amd /ui/ac/fi/gnrlaccount/settmgnt/fi_204_03_16b.xml 24671 948fbb321ebae6de0c62e35639576c0c3526dc56d44af9a47e30572acf109f21 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fcrcAsetLiablCls',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'chargeSlipNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'채권지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'환종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'원화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargeExchRt',name:'환율(환산)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargeAmt',name:'원화(환산)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargeProfit',name:'환산이익',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargeLoss',name:'환산손실',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargeAmtFcrc',name:'외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargeSlipNo',name:'환산전표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fcrcAsetLiablCls',name:'외화자산부채구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdYm',name:'기준년월',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_billingCommonMessage',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'msg',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_msg',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'msgNm',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_search',action:'/ac.fi.gnrlaccount.settmgnt.RetrieveAmtFcrcChargeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_createSlip',action:'/ac.fi.gnrlaccount.settmgnt.CreateAmtFcrcChargeSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_master","key":"IN_DS1"},{"id":"dma_search","key":"IN_DS2"},{"id":"ds_billingCommonMessage","key":"OUT_DS2"}]',target:'data:json,{"id":"ds_billingCommonMessage","key":"OUT_DS2"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_createSlip_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 외화환산전표생성
 * 메뉴경로 : 회계/재무회계/일반회계/결산관리/외화환산처리
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ac/fi/gnrlaccount/settmgnt/fi_204_03_16b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-18
 * 수정이력  :
 *    - 2025-12-18      정승혜    최초작성
 *    - 2026-01-29      정승혜    기타수정
 * 메모 : 
 * fi_204_03_18b(00)
 */
scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin"); // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님

scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사  
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드 
scwin.isSubCompany = false;
scwin.dDate = $c.date.getServerDateTime($p, "yyyyMMdd");

//hidden
scwin.txtCoClsCd = "";
scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  scwin.f_Header();
  lc_fcrcAsetLiablCls.setSelectedIndex(0);
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
  ed_stdYm.setValue(scwin.dDate);
  ed_stdYm.focus();
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  let rtnList = await udc_companyInfo.cfCommonPopUp(scwin.udc_companyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_companyInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
    ed_coCd.options.hidVal = rtnList[0];
    scwin.txtCoClsCd = rtnList[1];
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isStarted == true)
    // 최초 이벤트 여부 (자회사 여부를 최초 한번만 실행-팝업 리턴 시간차)
    {
      if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
        // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
        $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
      } else {
        $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
      }
      scwin.isStarted = false;
    }

  // 회사코드가 바뀌면 귀속부서에 해당 회사의 최상위레벨 부서를 셋팅한다.
  if (scwin.isSubCompany == true) {
    let acctYear = ""; //결산년월
    let coCd = ""; //회사코드
    coCd = ed_coCd.getValue();
  } else {}
};
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};

//-------------------------------------------------------------------------
// 조회(전표현황내역)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_stdYm, lc_fcrcAsetLiablCls]))) {
    return false;
  }
  //sbm_tr_search.processMsg = ""; 
  $c.sbm.execute($p, sbm_tr_search);
};

//-------------------------------------------------------------------------
// function name : f_grdHeiht
// function desc : 그리드 높이 늘리기
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_grdHeiht = function () {};

//-------------------------------------------------------------------------
// 전표생성
//-------------------------------------------------------------------------
scwin.f_Save = function () {
  if (ds_master.getRowCount() < 1) {
    return;
  }
  dma_search.set("ChargeSlipNo", ds_master.getCellData(0, "ChargeSlipNo"));
  //sbm_tr_createSlip.processMsg = ""; 
  $c.sbm.execute($p, sbm_tr_createSlip);
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
// 엑셀다운 8+16
scwin.f_Excel = async function () {
  let confirm = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (confirm) {
    const options = {
      fileName: ed_stdYm.getValue() + "외화환산처리.xlsx",
      sheetName: ed_stdYm.getValue() + "외화환산처리",
      type: 1
    };
    await $c.data.downloadGridViewExcel($p, gr_master, options);
  }
};

// 서브미션
scwin.sbm_tr_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_master.getRowCount());
  if (ds_master.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    ds_master.setRowPosition(0);
    $c.gus.cfGoPrevPosition($p, gr_master, 0);
  }
};
scwin.sbm_tr_createSlip_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_billingCommonMessage.getRowCount() < 1) {} else {
    $c.gus.cfAlertMsg($p, ds_billingCommonMessage.getCellData(0, "msg").replace("\n", "<br/>"));
    scwin.f_Retrieve();
  }
};
scwin.gr_master_oncellclick = function (rowIndex, columnIndex, columnId) {
  // 숨김처리된 컬럼 show=false
};
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue('');
  scwin.f_PopUpCompanyInfo('T');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'외화환산처리 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',validTitle:'회사코드',nameId:'ed_coNm',style:'',refDataCollection:'dma_search',code:'coCd',allowCharCode:'0-9',maxlengthCode:'3',id:'udc_companyInfo','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent',mandatoryCode:'true',btnId:'btn_company',objTypeCode:'data',objTypeName:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회계연월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_stdYm',style:'',pickerType:'dynamic',displayFormat:'yyyy/MM',ref:'data:dma_search.stdYm',mandatory:'true',title:'회계연월',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회조건',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fcrcAsetLiablCls',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.fcrcAsetLiablCls',title:'조회조건',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외화자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외화부채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_master',gridUpYn:'N',gridDownFn:'scwin.f_Excel',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'13',visibleRowNumFix:'true',readOnly:'true','ev:oncellclick':'scwin.gr_master_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'계정명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'채권지급번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'회계일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'환종',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'환율',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'외화',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'원화',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'환율(환산) ',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column58',value:'원화(환산)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'환산이익',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'환산손실',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column76',value:'계정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'외화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'환산전표',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column82',value:'외화자산부채구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'기준년월',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntNo',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'exchRt',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0.00',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amtFcrc',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0.00',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'ex',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chargeExchRt',inputType:'text',style:'',value:'',width:'120',dataType:'number',excelCellType:'number',displayFormat:'#,##0.00',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'ex',style:'',id:'chargeAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'e',style:'',id:'chargeProfit',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'e',style:'',id:'chargeLoss',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'acctCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'chargeAmtFcrc',value:'',displayMode:'label',hidden:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'chargeSlipNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'fcrcAsetLiablCls',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'stdYm',value:'',displayMode:'label',hidden:'true',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',expression:'SUM("amtFcrc")',displayFormat:'#,##0.00',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column41',value:'',displayMode:'label',expression:'SUM("amt")',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("chargeAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column51',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("chargeProfit")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column54',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("chargeLoss")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표생성'}]}]}]}]}]}]}]}]})