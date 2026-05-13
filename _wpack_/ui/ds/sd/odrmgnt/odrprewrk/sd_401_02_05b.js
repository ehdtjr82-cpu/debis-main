/*amd /ui/ds/sd/odrmgnt/odrprewrk/sd_401_02_05b.xml 16193 78d2b488f843dbf8ef9962f28e2ae91fd89767634f04dab98d62ef9eb3fd5684 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shpCoMark',name:'선사부호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msn',name:'MSN',dataType:'number'}},{T:1,N:'w2:key',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'number'}},{T:1,N:'w2:key',A:{id:'rcvDtFrom',name:'수신시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mcomDsmbrkPlcCd',name:'당사하선장소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcvDtTo',name:'수신종료일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieve',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'String'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'shpCoMark',name:'선사부호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'chgContentNm',name:'',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mainMainBfCont',name:'정정전내역',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mainMainAfCont',name:'정정후내역',dataType:'String'}},{T:1,N:'w2:column',A:{id:'reportDtm',name:'통보일시',dataType:'String'}},{T:1,N:'w2:column',A:{id:'rcvDtm',name:'수신일시',dataType:'String'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrprewrk.RetrieveManifestChangeContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"} ,{"id":"ds_retrieve","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_retrieve","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMM") + "01"; // 현재일자를 구한다.

// 적하목록 변경내역 조회
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // 1. 파라미터 한번만 가져오기
  var params = $c.data.getParameter($p);

  // 2. 파라미터 세팅
  scwin.mrn = $c.util.isEmpty($p, params.mrn) ? "" : params.mrn;
  scwin.msn = $c.util.isEmpty($p, params.msn) ? -1 : params.msn;
  scwin.hsn = $c.util.isEmpty($p, params.hsn) ? -1 : params.hsn;

  // 4. 파라미터 있을 때 자동 조회
  // === 로 타입까지 비교
  if (!$c.util.isEmpty($p, scwin.mrn) && scwin.msn !== -1 && scwin.hsn !== -1) {
    ed_mrn.setValue(scwin.mrn);
    ed_msn.setValue(parseInt(scwin.msn));
    ed_hsn.setValue(scwin.hsn);
    scwin.f_OpenRetrieve();
  }
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// function name : f_defaultValue
// function desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  // udc_fromToCalendar UDC 에 있는 setInitDate 호출
  udc_fromToCalendar1.setInitDate(scwin.strFromDate, scwin.strToDate);
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableKey($p);

  // 파라미터가 없을 때만 초기화
  if ($c.util.isEmpty($p, scwin.mrn) || scwin.msn === -1 || scwin.hsn === -1) {
    ed_msn.setValue("");
    ed_hsn.setValue("");
  }
};

//-------------------------------------------------------------------------
// 조회 - 적하목록 변경내역 조회
//-------------------------------------------------------------------------
scwin.f_OpenRetrieve = function () {
  ds_condition.set("mrn", scwin.mrn);
  ds_condition.set("msn", scwin.msn);
  ds_condition.set("hsn", scwin.hsn);
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회 - 적하목록 변경내역 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  ds_condition.set("mcomDsmbrkPlcCd", ed_mcomDsmbrkPlcCd.getValue());
  ds_condition.set("msn", ed_msn.getValue() == "" ? -1 : ed_msn.getValue());
  ds_condition.set("hsn", ed_hsn.getValue() == "" ? -1 : ed_hsn.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_FieldClear = function () {
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// 당사 하선장소 팝업 호출
//-------------------------------------------------------------------------
scwin.udc_comCode_onclickEvent = function (e) {
  scwin.f_openCommonPopUp('', '', 'F');
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (pCode, pName, pClose) {
  // 선언부
  // 공통POP-UP -> 요청화면 
  // let pCode = ""
  // let pName = ""
  let row = ds_retrieve.getRowPosition();

  // 하선장소코드팝업	- 물류점소 - 보세구분코드 	
  pCode = ed_mcomDsmbrkPlcCd.getValue();
  pName = ed_mcomDsmbrkPlcNm.getValue();
  udc_comCode.setSelectId('retrieveBondZone'); // XML상의 SELECT ID	
  await udc_comCode.cfCommonPopUp(scwin.udc_comCode_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
  , pName // 화면에서의 ??? Name Element의	Value
  , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서	
  , null // 보여주는 각 컬럼들의 폭	
  , null // 컬럼중에서 숨기는	컬럼 지정	
  , "04" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null, null, "하선장소,하선장코드,하선장명");
};

// 당사 하선장소 공통 팝업 CallBack
scwin.udc_comCode_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    //return value Assign
    ed_mcomDsmbrkPlcCd.setValue(rtnList[7]); //하선장소코드
    ed_mcomDsmbrkPlcNm.setValue(rtnList[1]); //하선장소
  } else {
    ed_mcomDsmbrkPlcCd.setValue(""); //하선장소코드
    ed_mcomDsmbrkPlcNm.setValue(""); //하선장소
  }
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (ds_retrieve.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }
  ds_condition.set("msn", ed_msn.getValue() == -1 ? '' : ed_msn.getValue());
  ds_condition.set("hsn", ed_hsn.getValue() == -1 ? '' : ed_hsn.getValue());

  // 그리드 조회건수
  tbx_totalRows.setValue(ds_retrieve.getRowCount());
};

// 선사부호 입력 -> 대문자 변환
scwin.capitalMask = function (value) {
  return value.toUpperCase();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수신기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'rcvDtFrom',refDataMap:'ds_condition',style:'',id:'udc_fromToCalendar1',refEdDt:'rcvDtTo',objType:'Data',edFromId:'ed_rcvDtFrom',edToId:'ed_rcvDtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MRN ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',placeholder:'',style:'width:150px;',maxlength:'11',allowChar:'A-Z0-9',objType:'Data',ref:'data:ds_condition.mrn'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MSN ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_msn',placeholder:'',style:'width:70px;',objType:'Data',maxlength:'4',allowChar:'A-Z0-9',ref:'data:ds_condition.msn'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'HSN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_hsn',placeholder:'',style:'width:70px;',objType:'Data',maxlength:'4',allowChar:'A-Z0-9',ref:'data:ds_condition.hsn'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당사 하선장소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveBondZonePopup',style:'',id:'udc_comCode',codeId:'ed_mcomDsmbrkPlcCd',maxlengthCode:'6',UpperFlagCode:'1',validExpCode:'작업장 코드:yes:',objTypeName:'key',nameId:'ed_mcomDsmbrkPlcNm',btnId:'btn_wrkPlCd',refDataCollection:'ds_condition',selectID:'retrieveBondZone',popupTitle:'하선장소',popupGridHeadTitle:'보세구역코드,보세구역명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10','ev:onclickEvent':'scwin.udc_comCode_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선사부호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_shpCoMark',placeholder:'',style:'width:150px;',allowChar:'a-zA-Z0-9',maxlength:'4',objType:'data',ref:'data:ds_condition.shpCoMark',applyFormat:'all',displayFormatter:'scwin.capitalMask'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_retrieve',fixedColumn:'2',focusMode:'cell',id:'gr_retrieve',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'18',visibleRowNumFix:'true',readOnly:'true',sortable:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'MRN',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'MSN',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'HSN',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'선사부호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'정정구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'정정전내역',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'정정후내역',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'false',id:'column38',inputType:'text',value:'통보일시',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'false',id:'column39',inputType:'text',value:'수신일시',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'mrn',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'msn',inputType:'text',removeBorderStyle:'false',width:'70',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hsn',inputType:'text',removeBorderStyle:'false',width:'70',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'shpCoMark',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chgContentNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mainMainBfCont',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mainMainAfCont',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reportDtm',inputType:'text',width:'70',editFormat:'XXXX/XX/XX XX:XX:XX'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rcvDtm',inputType:'text',width:'70',editFormat:'XXXX/XX/XX'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})