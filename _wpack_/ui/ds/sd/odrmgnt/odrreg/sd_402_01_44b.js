/*amd /ui/ds/sd/odrmgnt/odrreg/sd_402_01_44b.xml 14724 8447363e5e8bdf9c801841bb251fc22c4dc64846cd7f4ade2790d8e15e8e82be */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_clntInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_crdtInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amt',name:'합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'clsNm',name:'구분',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrreg.RetrieveClntCrdtInformationListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_clntInfo","key":"IN_DS1"},{"id":"ds_crdtInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_crdtInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.saveYn = "N"; //팝업으로 띄워졌을때 parent에 보내는 값
scwin.isPopup = false; // 팝업인 경우
scwin._PopupArgs = null;
scwin.onpageload = function () {
  // 조회조건 초기화
  scwin.btn_fieldClear_onclick();

  // [AS-IS]에서 해당 페이지를 팝업으로 호출하는 경우가 없어서 주석처리 (26.03.11)
  // 이 화면이 팝업인 경우 파라미터 받기 
  // scwin.params = $c.data.getParameter();
  // scwin.params.data = scwin.params.data || [];
  // scwin.isPopup = scwin.params.data && scwin.params.data.length > 0;
  // if (scwin.isPopup) {
  // 	scwin._PopupArgs = scwin.params.data;
  // }
};
scwin.onUdcCompleted = function () {
  // [AS-IS]에서 해당 페이지를 팝업으로 호출하는 경우가 없어서 주석처리 (26.03.11)
  // 팝업인 경우
  // if (scwin.isPopup && scwin._PopupArgs) {
  // 	ed_bilgClntNo.setValue(scwin._PopupArgs[0].trim());

  // 	//사이즈 조정
  //     gr_crdtInfo.setGridHeight(180);

  // 	if (ed_bilgClntNo.getValue() != "") {
  // 		btn_close.show();
  // 		$c.gus.cfDisableObjects([ed_bilgClntNo]);

  // 		scwin.f_Retrieve();
  // 	}
  // }
};

//-------------------------------------------------------------------------
// 조회 조건 Reset
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function () {
  $c.gus.cfInitObjects($p, tbl_searchArea);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  if (ed_bilgClntNo.getValue().trim() == "") {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "청구처번호")); // @은(는) 필수 입력 항목입니다.
    return;
  }
  let rtn = await $c.gus.cfValidate($p, [tbl_searchArea]);
  if (!rtn) {
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  if (disGubun == 1) {
    // 청구처
    // Select ID : retrieveClntInfo
    udc_comCode.cfCommonPopUp(scwin.udc_comCode_callBackFunc, pCode // 화면에서의 ??? Code Element의    Value,
    , pName // 화면에서의 ??? Name Element의    Value,
    , pClose // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened) "T",
    , null // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서    
    , null // 보여주는 각 컬럼들의 폭  
    , null // 컬럼중에서 숨기는    컬럼 지정   
    , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의    사용자 정의 폭
    , null // POP-UP뛰을때 우도우의    사용자 정의 높이    
    , null // 윈도우 위치 Y좌표    
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부 ("F") 
    , pAllSearch // 전체검색허용여부 ("F") "T", //pAllSearch
    , "청구 거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  }
};

///////////////////////////////////////////// C O M P O N E N T   E V E N T /////////////////////////////////////////

///////////////////////////////////////////// U D C   E V E N T /////////////////////////////////////////

// 청구처 클릭시 팝업
scwin.udc_comCode_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgClntNo.getValue(), ed_bilgClntNm.getValue(), "F", "F");
};

// 청구처 팝업 콜백함수
scwin.udc_comCode_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_bilgClntNo, ed_bilgClntNm);
};

// 청구처 코드 FocusOut
scwin.udc_comCode_onblurCodeEvent = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, ed_bilgClntNm, 1, true);
};

// 청구처 명 onChange
scwin.udc_comCode_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNm, ed_bilgClntNo, 1, false);
};

// 팝업창인 경우, 닫기 
// [AS-IS]에서 해당 페이지를 팝업으로 호출하는 경우가 없어서 주석처리 (26.03.11)
//    - AS-IS: f_Close() 
// scwin.btn_close_onclick = function (e) {
// 	var arrRtnVal = new Array();

// 	arrRtnVal[0] = "N/A" ;
// 	arrRtnVal[1] = scwin.saveYn ;

// 	$c.win.closePopup(arrRtnVal);
// };

///////////////////////////////////////////// S U B M I S S I O N    E V E N T /////////////////////////////////////////

//조회 DONE
scwin.sbm_retrieve_submitdone = function () {
  if (ds_crdtInfo.getRowCount() == 0) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_002)); // 조회결과가 존재하지 않습니다.
  }
  totalRows.setValue(ds_crdtInfo.getRowCount());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'tbl_searchArea',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_comCode',codeId:'ed_bilgClntNo',nameId:'ed_bilgClntNm',selectID:'retrieveClntInfo',refDataCollection:'dma_clntInfo',code:'bilgClntNo',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',maxlengthCode:'6',objTypeCode:'data',objTypeName:'data',mandatoryCode:'true',mandatoryName:'true',popupGridHiddenColumn:'5,6,7,8,9,10','ev:onblurCodeEvent':'scwin.udc_comCode_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_comCode_onclickEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{class:'wq_gvw',dataList:'data:ds_crdtInfo',id:'gr_crdtInfo',style:'',visibleRowNum:'13',visibleRowNumFix:'true',autoFit:'allColumn',readOnly:'true',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'120',value:'청구처명'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'오더번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'120',value:'컨테이너번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'100',value:'품명'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'매출항목명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'매출금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'부가세',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'구분',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bilgClntNm',inputType:'text',removeBorderStyle:'false',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrNo',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'sellCommNo',inputType:'text',removeBorderStyle:'false',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commNm',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clsNm',inputType:'text',style:'',value:'',width:'70'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column31',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column26',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'sellAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column25',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'vatAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column24',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'amt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,###,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})