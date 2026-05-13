/*amd /ui/ds/op/wrkrslts/yardwrkrslts/op_302_01_28p.xml 15926 cd274842b8cd05a8b289e8d2dbd901aee04e497d5213da715804dd19b16dd4af */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msn',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hsn',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_CarryingOutAdmInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crryoutAdmitNo',name:'반출승인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carryoutYn',name:'반출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'통보일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutAdmitPatternNm',name:'반출유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPackCnt',name:'승인수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWt',name:'승인중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockCnt',name:'승인잔고수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockWt',name:'승인잔고중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutAdmitPattern',name:'반출유형코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveCarryingOutAdmissionContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_CarryingOutAdmInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_CarryingOutAdmInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submiterror':'scwin.sbm_Retrieve_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// scwin.rwrkClsCd = scwin.params.param1;
// scwin.rwrkPlCd = scwin.params.param2;    
// scwin.rwrkPlNm = scwin.params.param3;
// scwin.rmrn = scwin.params.param4;    
// scwin.rmsn = scwin.params.param5;
// scwin.rhsn = scwin.params.param6;    

scwin.params;
scwin.rwrkClsCd;
scwin.rwrkPlCd;
scwin.rwrkPlNm;
scwin.rmrn;
scwin.rmsn;
scwin.rhsn;
scwin.onpageload = async function () {};
scwin.onUdcCompleted = function () {
  let param = $c.data.getParameter($p);
  scwin.rwrkClsCd = param.param1;
  scwin.rwrkPlCd = param.param2; // 작업장코드
  scwin.rwrkPlNm = param.param3; // 작업장코드명 
  scwin.rmrn = param.param4; // mrn
  scwin.rmsn = param.param5; // msn
  scwin.rhsn = param.param6; // hsn
  lc_wrkClsCd.setValue(scwin.rwrkClsCd);
  ed_wrkPlCd.setValue(scwin.rwrkPlCd);
  ed_wrkPlNm.setValue(scwin.rwrkPlNm);
  ed_mrn.setValue(scwin.rmrn);
  ed_msn.setValue(scwin.rmsn);
  ed_hsn.setValue(scwin.rhsn);
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function () {
  // 검색조건 필수 입력 체크
  if (!(await $c.gus.cfValidate($p, [lc_wrkClsCd, ed_wrkPlCd, ed_mrn, ed_msn, ed_hsn]))) {
    return;
  }

  //$c.gus.cfShowDSWaitMsg(gr_CarryingOutAdmissionInfo);

  $c.sbm.execute($p, sbm_Retrieve);
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, search_cond, null);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  await $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = await $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면

  switch (disGubun) {
    case 1:
      //작업장코드
      //retrieveWrkPlInfo
      udc_comCode.setSelectId("retrieveWrkPlInfo");
      rtnList = udc_comCode.cfCommonPopUp(scwin.retrieveWrkPlInfoCb // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의    Value
      , pName // 화면에서의 ??? Name Element의    Value
      , pClose // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는    컬럼 지정
      , 'F' // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의    사용자 정의 폭
      , null // POP-UP뛰을때 우도우의    사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};
scwin.retrieveWrkPlInfoCb = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, ed_wrkPlNm);
};
scwin.sbm_Retrieve_submitdone = async function (e) {
  let rowCnt = ds_CarryingOutAdmInfo.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
  }
  //$c.gus.cfHideDSWaitMsg(gr_CarryingOutAdmissionInfo); //로딩바 숨기기
  //$c.gus.cfShowTotalRows(totalRows, rowCnt);
  totalRows.setValue(rowCnt);
};
scwin.sbm_Retrieve_submiterror = function (e) {
  //$c.gus.cfShowError(ds_CarryingOutAdmInfo);
};
scwin.gr_CarryingOutAdmissionInfo_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  //if (row == 0) return;

  var rtnValues = new Array();
  rtnValues[0] = ds_CarryingOutAdmInfo.getCellData(rowIndex, "crryoutAdmitNo"); // 반출승인번호
  rtnValues[1] = ds_CarryingOutAdmInfo.getCellData(rowIndex, "regDtm"); // 통보일시
  rtnValues[2] = ds_CarryingOutAdmInfo.getCellData(rowIndex, "crryoutAdmitPattern"); // 반출유형코드
  rtnValues[3] = ds_CarryingOutAdmInfo.getCellData(rowIndex, "crryoutAdmitPatternNm"); // 반출유형코드명
  rtnValues[4] = ds_CarryingOutAdmInfo.getCellData(rowIndex, "totPackCnt"); // 승인수량
  rtnValues[5] = ds_CarryingOutAdmInfo.getCellData(rowIndex, "totWt"); // 승인중량
  rtnValues[6] = ds_CarryingOutAdmInfo.getCellData(rowIndex, "stockCnt"); // 승인잔고수량
  rtnValues[7] = ds_CarryingOutAdmInfo.getCellData(rowIndex, "stockWt"); // 승인잔고중량 

  $c.win.closePopup($p, rtnValues);
};
scwin.udc_comCode_onblurCodeEvent = async function (e) {
  if (ed_wrkPlCd.getValue() == "") {
    return;
  } else {
    scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, ed_wrkPlNm, 1, true);
  }
};
scwin.udc_comCode_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(1, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), 'F', 'T');
};
scwin.udc_comCode_onviewchangeNameEvent = function (info) {
  if (ed_wrkPlNm.getValue() == "") {
    return;
  } else {
    scwin.f_chkOpenCommonPopUp(ed_wrkPlNm, ed_wrkPlCd, 1, false);
  }
};
scwin.btn_trigger1_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'search_cond',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkClsCd',style:'width: 150px;',submenuSize:'auto',ref:'data:dma_condition.wrkClsCd'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'btn_PopUp2',style:'',id:'udc_comCode',codeId:'ed_wrkPlCd',nameId:'ed_wrkPlNm',objTypeName:'Data',objTypeCode:'Data',maxlengthCode:'5',mandatoryCode:'true',mandatoryName:'true',selectID:'',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_comCode_onblurCodeEvent','ev:onclickEvent':'scwin.udc_comCode_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_onviewchangeNameEvent',refDataCollection:'dma_condition',popupTitle:'작업장,작업장코드,작업장명',popupGridHeadTitle:'작업장코드,작업장명,\'\',\'\',\'\',\'\',\'\',\'\',\'\',\'\'',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',code:'wrkPlCd',allowCharCode:'0-9a-zA-Z',validTitle:'작업장코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'화물관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:120px;',id:'ed_mrn',class:'',objType:'Data',mandatory:'true',maxlength:'11',allowChar:'a-zA-Z0-9',ref:'data:dma_condition.mrn',title:'화물관리번호'}},{T:1,N:'xf:input',A:{style:'width:70px;',id:'ed_msn',class:'',objType:'data',allowChar:'0-9',maxlength:'4',mandatory:'true',ref:'data:dma_condition.msn',title:'화물관리번호'}},{T:1,N:'xf:input',A:{style:'width:70px;',id:'ed_hsn',class:'',mandatory:'true',maxlength:'4',allowChar:'0-9',ref:'data:dma_condition.hsn',title:'화물관리번호'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:' btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_CarryingOutAdmInfo',id:'gr_CarryingOutAdmissionInfo',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_CarryingOutAdmissionInfo_oncelldblclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'반출승인번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'반출여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'통보일시',width:'149'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'반출유형',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'승인수량',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'승인중량',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'승인잔고수량',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'승인잔고중량',width:'140'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'crryoutAdmitNo',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'carryoutYn',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',style:'',value:'',width:'149'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryoutAdmitPatternNm',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totPackCnt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totWt',inputType:'text',style:'',value:'',width:'140',textAlign:'right',displayFormat:'#,###.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockCnt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockWt',inputType:'text',style:'',value:'',width:'140',textAlign:'right',displayFormat:'#,###.000'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.btn_trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})