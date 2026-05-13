/*amd /ui/ds/op/wrkplan/stvwrkplan/op_204_03_03b.xml 23911 6240720098ecadb1ebfc6229c59393f6ccd4ec044d6ce2a243a92aecf91e7015 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workPlaceWorkPlanVolumeQuery',saveRemovedData:'true','ev:ondataload':'scwin.ds_workPlaceWorkPlanVolumeQuery_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'volClsNm',name:'물량구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'오더종류필터',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrQty',name:'수량;(VAN)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWt',name:'중량;(TON)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrCbm',name:'CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmdrQty',name:'수량;(VAN)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmdrWt',name:'중량;(TON)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rmdrCbm',name:'CBM',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkIntendDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStp',name:'name6',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.submit_lobranDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.op.wrkplan.stvwrkplan.cmd.RetrieveWorkPlaceWorkPlanVolumeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_workPlaceWorkPlanVolumeQuery","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_workPlaceWorkPlanVolumeQuery","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_Done','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수
//-------------------------------------------------------------------------
// 계정 정보에서 부서 코드 가져올때 사용
scwin.login = $c.data.getMemInfo($p, "loUpperLobranCd");
scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환

//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드데이터 호출   
  const codeOptions = [{
    grpCd: "SD113",
    compID: "acb_odrKndCd"
  } // 셀렉트
  ];
  $c.data.setCommonCode($p, codeOptions);
  ica_qryDt.setValue(scwin.strCurDate);
  acb_lobran.setValue(scwin.login);
  $c.sbm.execute($p, sbm_lobran);
};

//-------------------------------------------------------------------------
// 대문자 변환
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [tbl_searchCond]))) {
    return;
  }
  dma_search.set("lobranCd", acb_lobran.getValue());
  dma_search.set("wrkPlCd", ed_works_01.getValue());
  dma_search.set("wrkIntendDt", ica_qryDt.getValue());
  dma_search.set("odrKndCd", acb_odrKndCd.getValue());
  dma_search.set("commCd", ed_commCd.getValue());
  dma_search.set("wrkStp", ed_wrkStp.getValue());
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (작업장)
//-------------------------------------------------------------------------
scwin.udc_works_onClick = async function (e) {
  scwin.f_openCommonPopUp(1, ed_works_01.getValue(), ed_works_02.getValue(), 'F', 'F');
};
scwin.udc_works_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_works_01, ed_works_02, 1);
};
scwin.udc_works_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_works_02, ed_works_01, 1, false);
};
scwin.udc_works_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_works_01, ed_works_02);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (작업구분)
//-------------------------------------------------------------------------
scwin.udc_wrkStp_onClick = async function (e) {
  scwin.f_openCommonPopUp(3, ed_wrkStp.getValue(), ed_txt_wrkStp.getValue(), 'F', 'T');
};
scwin.udc_wrkStp_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkStp, ed_txt_wrkStp, 3);
};
scwin.udc_wrkStp_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_txt_wrkStp, ed_wrkStp, 3, false);
};
scwin.udc_wrkStp_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_wrkStp, ed_txt_wrkStp);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (품명)
//-------------------------------------------------------------------------
scwin.udc_commCd_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(2, ed_commCd.getValue(), ed_commNm.getValue(), 'F', 'T');
};
scwin.udc_commCd_onblurCodeEvent = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_commCd, ed_commNm, 2);
};
scwin.udc_commCd_onviewchangeNameEvent = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_commNm, ed_commCd, 2, false);
};
scwin.udc_commCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_commCd, ed_commNm);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  }
  // inObj가 코드명 필드일 경우 팝업
  else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      var wrkPlGbCd = "1"; //CY,장치장창고
      var lodeptCd = acb_lobran.getValue(); //lc_lobranCd.ValueOfIndex("lodeptCd",lc_lobranCd.Index);
      var paramList = "," + lodeptCd + "," + wrkPlGbCd;
      udc_works.cfCommonPopUp(scwin.udc_works_callBackFunc, pCode, pName, pClose, null, null, null, null, paramList, null, null, null, null); // 작업장
      break;
    case 2:
      // 수요가 팝업			
      udc_commCd.cfCommonPopUp(scwin.udc_commCd_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "품명,품명코드,품명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      //수요가코드  수요가명
      break;
    case 3:
      udc_wrkStp.cfCommonPopUp(scwin.udc_wrkStp_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      );
      break;
  }
};

//-------------------------------------------------------------------------
// 점소 변경시
//-------------------------------------------------------------------------
scwin.acb_lobran_onChange = function (info) {
  ed_works_01.setValue("");
  ed_works_02.setValue("");
};
scwin.submit_lobranDone = function (e) {
  acb_lobran.setValue(scwin.login);
};
scwin.btn_init_onClick = function (e) {
  acb_lobran.setValue(scwin.login);
  ed_works_02.setValue("");
  ed_works_01.setValue("");
  ica_qryDt.setValue(scwin.strCurDate);
};

//-------------------------------------------------------------------------
// 조회 성공시
//-------------------------------------------------------------------------
scwin.ds_workPlaceWorkPlanVolumeQuery_ondataload = function () {
  spa_totalRows.setValue(ds_workPlaceWorkPlanVolumeQuery.getTotalRow());
  if (ds_workPlaceWorkPlanVolumeQuery.getTotalRow() == 0) {
    if ($c.gus.cfTurnCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.win.alert($p, MSG_CM_WRN_002);
    }
  }
  gr_workPlaceWorkPlanVolumeQuery.setFocusedCell(0, "odrKndNm");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_searchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:85px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobran',search:'start',style:'width: 250px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'','ev:onviewchange':'scwin.acb_lobran_onChange',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'col7',id:'udc_works',codeId:'ed_works_01',nameId:'ed_works_02',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',objTypeCode:'data',validExpCode:'작업장:yes',mandatoryName:'true',maxlengthCode:'5','ev:onclickEvent':'scwin.udc_works_onClick',selectID:'retrieveWrkPlInfo','ev:onblurCodeEvent':'scwin.udc_works_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_works_onChangeName',mandatoryCode:'true',validTitle:'작업장'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업예정일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_qryDt',style:'',mandatory:'true',objType:'data',validExp:'작업예정일자:yes:date=YYYYMMDD',title:'작업예정일자'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_odrKndCd',search:'start',style:'width: 250px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체',visibleRowNum:'20',allOption:'',ref:''},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'col7',id:'udc_wrkStp',codeId:'ed_wrkStp',nameId:'ed_txt_wrkStp',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'5',UpperFlagCode:'1',objTypeName:'Data',selectID:'retrieveWrkStp','ev:onclickEvent':'scwin.udc_wrkStp_onClick','ev:onblurCodeEvent':'scwin.udc_wrkStp_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_wrkStp_onChangeName'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'col7',codeId:'ed_commCd',id:'udc_commCd',nameId:'ed_commNm',maxlengthCode:'8',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',selectID:'retrieveCommInfo','ev:onblurCodeEvent':'scwin.udc_commCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_commCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_commCd_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onClick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업장 작업계획 물량조회 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_workPlaceWorkPlanVolumeQuery',grdDownOpts:'{"fileName":"작업장작업계획물량조회.xlsx", "sheetName": "작업장작업계획물량조회"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_workPlaceWorkPlanVolumeQuery',focusMode:'row',id:'gr_workPlaceWorkPlanVolumeQuery',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',resize:'true',columnMove:'true','ev:oncelldblclick':'scwin.gr_onCellDblClick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'물량구분',colSpan:'',rowSpan:'2',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'120',value:'오더종류코드',colSpan:'',rowSpan:'2',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'120',value:'오더종류필터',colSpan:'',rowSpan:'2',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'150',value:'오더종류',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'작업구분코드',width:'120',colSpan:'',rowSpan:'2',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'작업구분',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'품명코드',width:'100',colSpan:'',rowSpan:'2',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'품명',width:'170',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'오더물량',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column38',value:'잔여물량',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'수량<br/>(VAN)',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'중량<br/>(TON)',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'CBM',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'수량<br/>(VAN)',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'중량<br/>(TON)',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'CBM',displayMode:'label',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'volClsNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrKndCd',inputType:'text',removeBorderStyle:'false',width:'120',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'fltrCd2',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrKndNm',inputType:'text',removeBorderStyle:'false',width:'150',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'text',style:'',value:'',width:'120',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpNm',inputType:'text',style:'',value:'',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',style:'',value:'',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',style:'',value:'',width:'170',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrQty',inputType:'text',style:'',value:'',width:'100',textAlign:'right',sortable:'false',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrWt',value:'',displayMode:'label',textAlign:'right',sortable:'false',dataType:'number',maxLength:'.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'odrCbm',value:'',displayMode:'label',textAlign:'right',sortable:'false',maxLength:'0.3',dataType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rmdrQty',value:'',displayMode:'label',textAlign:'right',sortable:'false',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rmdrWt',value:'',displayMode:'label',textAlign:'right',sortable:'false',displayFormat:'#,##0.000',dataType:'number',maxLength:'0.3'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rmdrCbm',value:'',displayMode:'label',textAlign:'right',sortable:'false',maxLength:'0.3',dataType:'number',displayFormat:'#,##0.000'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})