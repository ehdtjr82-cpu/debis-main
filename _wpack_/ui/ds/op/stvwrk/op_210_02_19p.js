/*amd /ui/ds/op/stvwrk/op_210_02_19p.xml 28813 ed8147228b4a68e5b1bcdfd5f86002762e0bd493a5e0bdb38fa0f0db7b4d89a7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_commSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',name:'sysCd',id:'sysCd'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'workStDt',name:'작업년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'workEndDt',name:'작업년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'인원',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_lobranCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'label',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'staffNo',name:'staffNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'staffNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptNm',name:'deptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'occpgrdNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workDt',name:'workDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'rmk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromStHh',name:'fromStHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromEndHh',name:'fromEndHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toStHh',name:'toStHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toEndHh',name:'toEndHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workTime',name:'workTime',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ecsWorkTime',name:'ecsWorkTime',dataType:'text'}},{T:1,N:'w2:column',A:{id:'morningEarlyTime',name:'morningEarlyTime',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdTime',name:'extdTime',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngtTime2',name:'ngtTime2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngtTime',name:'ngtTime',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDayExtdTime',name:'offDayExtdTime',dataType:'text'}},{T:1,N:'w2:column',A:{id:'foodDay',name:'foodDay',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDayAllowTime',name:'offDayAllowDay',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDayAllowDay',name:'offDayAllowDay',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allNightDay',name:'allNightDay',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overtime40',name:'overtime40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'annualDay',name:'annualDay',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reWorkTime',name:'reWorkTime',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lunchHh',name:'lunchHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dinnerHh',name:'dinnerHh',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_commonPopup',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_commSearch',target:'data:json,{"id":"dlt_lobranCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_commonPopup_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.stvwrk.RetrieveFuncPostWrkDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log("scwin.onpageload");
  scwin.f_defaultValue();
  scwin.params = $c.data.getParameter($p); // 부모창에서 전달된 파라미터를 가져옴 
  if ($c.gus.cfIsNull($p, scwin.params)) {
    $c.win.alert($p, "부모창이 존재하지 않습니다."); // 부모창이 없을 경우 알림
    return null;
  }
  console.log(scwin.params);
  lc_lobranCd.setValue(scwin.params.pLobranCd);
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("scwin.onUdcCompleted");
  udc_fromToCalendar.setInitDate(scwin.params.pWorkStDt, scwin.params.pWorkEndDt);
  //ed_closeYm.setValue(scwin.params.pCloseYm);
  //ed_workEndDt.setValue(scwin.params.pCloseYmEnd);
  ed_staffNo.setValue(scwin.params.pStaffNo);
  ed_staffNm.setValue(scwin.params.pStaffNm);

  //자동조회
  scwin.btn_search_onclick();
};

//-------------------------------------------------------------------------
// 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  console.log("scwin.f_defaultValue");

  //점소코드 조회
  dma_commSearch.set("sysCd", "BerthNonUsableEBC");
  dma_commSearch.set("queryId", "retriveLobranCodeList");
  $c.sbm.execute($p, sbm_commonPopup);
};

//-------------------------------------------------------------------------
// 부모창 param
//-------------------------------------------------------------------------
scwin.getParentParameters = function () {
  console.log("scwin.getParentParameters");
  scwin.params = $c.data.getParameter($p); // 부모창에서 전달된 파라미터를 가져옴
  console.log(scwin.params);
  if (!$c.gus.cfIsNull($p, scwin.params)) {
    $c.win.alert($p, "부모창이 존재하지 않습니다."); // 부모창이 없을 경우 알림
    return null;
  }
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  console.log("scwin.f_FieldClear");
  $c.gus.cfInitObjects($p, [tbl_search]);
  lc_lobranCd.setValue(scwin.params.pLoabranCd);
  ed_workStDt.setValue(scwin.params.pCloseYm);
  ed_workEndDt.setValue(scwin.params.pCloseYmEnd);
  lc_lobranCd.focus();
  ed_staffNo.setValue("");
  ed_staffNm.setValue("");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log("scwin.f_Retrieve");
  let chkVal = await $c.gus.cfValidate($p, [lc_lobranCd, ed_workStDt, ed_workEndDt]);

  // 검색조건 필수 입력 체크
  if (!chkVal) return;
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 공통 Popup 호출
//-------------------------------------------------------------------------
scwin.f_openlobPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면
  let curDate = $c.date.getServerDateTime($p).substring(0, 6);
  switch (disGubun) {
    case 1:
      var arrParam = new Array();
      arrParam[0] = pCode; //사번
      arrParam[1] = pName; //사원명
      arrParam[2] = lc_lobranCd.getValue(); //점소코드
      arrParam[3] = lc_lobranCd.getText(true); //점소명
      arrParam[4] = ''; //작업장코드
      arrParam[5] = ''; //직종  (정규직)
      arrParam[6] = ''; //상세직종코드 
      arrParam[7] = ''; //직급
      arrParam[8] = ''; //작업일
      arrParam[9] = ''; //배치가능여부
      arrParam[10] = 'T'; //WINDOW CLOSE 여부
      arrParam[11] = "1"; //상세직종Flag
      arrParam[13] = curDate + "01";
      arrParam[14] = curDate + $c.date.getLastDateOfMonth($p, curDate);
      var opts = {
        id: "op_103_01_10p",
        popupName: "인력검색",
        modal: true,
        type: "browserPopup",
        title: "인력검색",
        width: 750,
        height: 550
      };
      let rtnList = await $c.win.openPopup($p, "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml", opts, arrParam);

      //(0)직종코드		
      //(1)직종명	        
      //(2)인원번호		
      //(3)인원명	                          
      //(4)직급		    
      //(5)직급명		    
      //(6)물류점소코드   
      //(7)물류점소명		
      //(8)상세직종코드	
      //(9)상세직종명		                  
      //(10)배치가능여부	
      //(11)본사계약직여부 
      //(12)연근여부		

      if (rtnList != null) {
        ed_staffNo.setValue(rtnList[2]); //사원코드
        ed_staffNm.setValue(rtnList[3]); //사원명
        return;
        break;
      } else {
        ed_staffNo.setValue(""); //사원코드
        ed_staffNm.setValue(""); //사원명
        return;
        break;
      }
      break;
  }
};

//폰트 컬러 설정
scwin.f_fontColor = function (data, formattedData, rowIndex, colIndex) {
  var colId = gr_master.getColumnID(colIndex);
  if (colId == "rmk") {
    var color = $c.gus.decode($p, data, "토요일", "blue", "일요일", "red", "공휴일", "red", "black");
    gr_master.setCellColor(rowIndex, colId, color);
  }
  return data;
};

//엑셀 다운로드
scwin.f_down = async function () {
  var totCnt = ds_master.getTotalRow();
  var sheetTitle = "기능직근태조회 인원별 상세";
  if (totCnt != 0) {
    var cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      var options = {
        fileName: "기능직근태조회 인원별 상세.xlsx",
        sheetName: "기능직근태조회 인원별 상세",
        type: "4+8+16",
        useSubTotal: "true",
        useSubTotalData: "true"
      };
      $c.data.downloadGridViewExcel($p, gr_master, options);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

/*----------------------------------------------------------------------------
    T R   C O M P O N E N T' S   E V E N T S
-----------------------------------------------------------------------------*/
//점소코드 조회
scwin.sbm_commonPopup_submitdone = function (e) {
  console.log("scwin.sbm_commonPopup_submitdone");
};

//조회
scwin.sbm_retrieve_submitdone = function (e) {
  var rowCnt = gr_master.getTotalRow();
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, "조회된 데이터가 없습니다.");
  } else {
    $c.gus.cfEnableAllBtn($p);
  }
  spn_totalRow.setValue(rowCnt);
};

/* ----------------------------------------------------------------------------
   O B J E C T   C O M P O N E N T' S   E V E N T S  
---------------------------------------------------------------------------- */
//인원 찾기 버튼
scwin.udc_staffNo_onclickEvent = function (e) {
  scwin.f_openlobPopUp(1, ed_staffNo.getValue(), ed_staffNm.getValue(), 'F', 'F');
};
scwin.udc_staffNo_onblurCodeEvent = function (e) {
  scwin.f_openlobPopUp(1, ed_staffNo.getValue(), ed_staffNm.getValue(), 'F', 'F');
};

//초기화 버튼 
scwin.btn_refresh_onclick = function (e) {
  console.log("scwin.btn_clear_onclick");
  scwin.f_FieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  console.log("scwin.btn_search_onclick");
  scwin.f_Retrieve();
};

//닫기 버튼
scwin.btn_close_onclick = function (e) {
  console.log("scwin.btn_close_onclick");
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'',id:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:20%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:20%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:45px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_lobranCd',style:'width: 150px;',submenuSize:'auto',sortOption:'value',ref:'data:dma_search.lobranCd'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_lobranCd'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'dma_search',refEdDt:'workEndDt',refStDt:'workStDt',style:'',edFromId:'ed_workStDt',objTypeFrom:'data',mandatoryFrom:'true',objTypeBtn:'data',edToId:'ed_workEndDt',objTypeTo:'data',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인원',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupStaffNm',style:'',class:'',UpperFlagCode:'1',allowCharCode:'A-Z0-9',maxlengthCode:'6',objTypeCode:'data',refDataCollection:'dma_search',code:'staffNo',codeId:'ed_staffNo',id:'udc_staffNo',btnId:'btn_staffNo',nameId:'ed_staffNm','ev:onclickEvent':'scwin.udc_staffNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_staffNo_onblurCodeEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.btn_refresh_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'기능직 근태 조회 및 수정',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_grid',style:'',id:'udc_topGrd',gridUpYn:'N',templateYn:'N',gridID:'gr_master',gridDownUserAuth:'X',gridDownFn:'scwin.f_down',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grp_grid',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'11',visibleRowNumFix:'true',fixedColumn:'3',columnMove:'true',sortable:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'사원번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'80',value:'사원명'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'작업일자'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'70',value:'요일',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'시작',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'종료',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'시작',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'종료',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'실근무시간',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'연근시간',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'조출시간',displayMode:'label',sortable:'false',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'연장시간',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column23',value:'야간특근시간',displayMode:'label',sortable:'false',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'야간시간',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'offDayAllowTime',value:'휴일근무시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column27',value:'휴일연장시간',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column43',value:'식대발생일수',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column41',value:'휴일수당일수',displayMode:'label',sortable:'false',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'철야일수',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column37',value:'40초과연장시간',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'연차일수',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'총근무시간',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'중식',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column49',value:'석식',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'staffNo',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'staffNm',inputType:'text',removeBorderStyle:'false',width:'80'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'workDt',inputType:'text',removeBorderStyle:'false',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'rmk',inputType:'text',removeBorderStyle:'false',width:'70',customFormatter:'scwin.f_fontColor'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fromStHh',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fromEndHh',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'toStHh',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'toEndHh',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workTime',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'float',displayFormat:'#,##0.0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ecsWorkTime',value:'',displayMode:'label',textAlign:'right',dataType:'text',displayFormat:'#,##0.0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'morningEarlyTime',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.0',excelCellType:'number',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'extdTime',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'ngtTime2',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.0',excelCellType:'number',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ngtTime',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'offDayAllowTime',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'offDayExtdTime',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'foodDay',value:'',displayMode:'label',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'offDayAllowDay',value:'',displayMode:'label',textAlign:'right',excelCellType:'number',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'allNightDay',value:'',displayMode:'label',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'overtime40',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'annualDay',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.#0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reWorkTime',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lunchHh',value:'',displayMode:'label',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dinnerHh',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'',displayMode:'label',expression:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'',displayMode:'label',expression:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'',displayMode:'label',expression:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'',displayMode:'label',expression:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column65',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'workTime\')',dataType:'float',displayFormat:'#,###.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column64',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'ecsWorkTime\')',dataType:'float',displayFormat:'#,###.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column63',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'morningEarlyTime\')',dataType:'float',displayFormat:'#,###.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column62',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'extdTime\')',dataType:'float',displayFormat:'#,###.0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column61',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'ngtTime2\')',dataType:'float',displayFormat:'#,###.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'ngtTime\')',dataType:'float',displayFormat:'#,###.0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column76',value:'',displayMode:'label',textAlign:'right',expression:'sum("offDayAllowTime")',dataType:'float',displayFormat:'#,###.0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column59',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'offDayExtdTime\')',dataType:'float',displayFormat:'#,###.0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column58',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'ecsWorkTime\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column57',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'offDayAllowDay\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column56',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'allNightDay\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column55',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'overtime40\')',dataType:'float',displayFormat:'#,###.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column54',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'ecsWorkTime\')',dataType:'float',displayFormat:'#,###.#0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column53',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'reWorkTime\')',dataType:'float',displayFormat:'#,###.0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column52',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'lunchHh\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column51',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'dinnerHh\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'pop-btnbox'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_close_onclick',style:'',id:'btn_close',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]}]})