/*amd /ui/ds/fs/consignmgnt/fs_401_01_07b.xml 29595 ed7507a02cd766729a2b66b6550fc7dcda293b13363826ace92496ddd6ead62f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtDtMm',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'posnClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'setoffYn',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_trusteeSellingPurchase',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsVatAmt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSumAmt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatAmt',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt2',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt3',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt4',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSum',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffPchsSum',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'notSetoffPchsSum',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffSellSum',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'notSetoffSellSum',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisVehclDrvNm',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'name20',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.consignmgnt.consignmgntcadjm.RetrieveTrusteeSellingPurchaseCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_queryCondition","key":"IN_DS1"},{"id":"ds_trusteeSellingPurchase","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_trusteeSellingPurchase","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/*년월 setting*/
scwin.strYm = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환

//$c.win.alert(scwin.strCurYyMm);

/*global sesstion정보 */

// 회원정보를 json 데이터로 모두 받음
//let memJson = $c.data.getMemInfo();
scwin.userId = $c.data.getMemInfo($p, "userId");
scwin.empNo = $c.data.getMemInfo($p, "empNo ");
scwin.onpageload = function () {
  ed_ctrtDtMm.setValue(scwin.strYm); //기준월
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = async function (e) {
  //필수입력항목 체크
  if (!(await $c.gus.cfValidate($p, [ed_ctrtDtMm]))) return;
  dma_queryCondition.set("lobranCd", ed_lobranCd.getValue());
  dma_queryCondition.set("clntNo", ed_clntNo.getValue());
  dma_queryCondition.set("ctrtDtMm", ed_ctrtDtMm.getValue());
  dma_queryCondition.set("posnClsCd", lc_posnClsCd.getValue());
  dma_queryCondition.set("vehclNo", ed_vehclNo.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//조회callback
scwin.sbm_retrieve_submitdone = function () {
  let nRow = ds_trusteeSellingPurchase.getRowCount();
  total.setValue(nRow);
  if (nRow === 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
  }
};
scwin.f_downExcelSheet = async function () {
  if (await $c.win.confirm($p, "EXCEL로 다운로드 하시겠습니까?")) {
    let grdObj = gr_trusteeSellingPurchase;
    let options = {
      fileName: "위수탁(지입차) 매입/매출 조회.xlsx",
      sheetName: "위수탁(지입차) 매입/매출 조회"
    };
    let infoArr = {};
    // AS-IS: 조회 결과 없어도 엑셀 다운로드
    $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
  }
};

//소유,구분(decode : posnClsCd,"G","지입","W","위수탁","기타")
scwin.f_poncl = function (data) {
  return $c.gus.decode($p, data, "G", "지입", "W", "위수탁", "기타");
};

//-------------------------------------------------------------------------
// function name : f_openCommonPopUp
// function desc : 팝업처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let code = pCode.trim();
  switch (disGubun) {
    case 1:
      // 매출입부서
      udc_comCode_lobran.setSelectId("retrieveOpDeptCdInfo");
      await udc_comCode_lobran.cfCommonPopUp(scwin.udc_comCode_lobran_callBackFunc, code, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "청구부서코드,부서코드,부서명");
      break;
    case 2:
      // 청구화주코드(거래처)
      udc_comCode_clnt.setSelectId('retrieveClntInfo');
      await udc_comCode_clnt.cfCommonPopUp(scwin.udc_comCode_clnt_callBack, code, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "청구화주코드,거래처코드,거래처명");
      break;
    case 3:
      // 차량단축코드
      udc_comCode_vehcl.setSelectId('retrieveVehiclesNo');
      await udc_comCode_vehcl.cfCommonPopUp(scwin.udc_comCode_vehcl_callBack, pCode, pName, pClose, '2', null, null, '3,4,5,6,7,8,9,10', null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// function name : f_chkOpenCommonPopUp
// function desc : 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
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

//차량번호 공통 pop
scwin.udc_comCode_vehcl_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(3, ed_vehclShortCd.getValue(), ed_vehclNo.getValue(), "F", "T");
};

//거래처pop
scwin.udc_comCode_clnt_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(2, ed_clntNo.getValue(), ed_bilgClntNm.getValue(), 'F', 'F');
};

// 매출입부서 pop
scwin.udc_comCode_lobran_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(1, ed_lobranCd.getValue(), ed_lodeptNm.getValue(), 'F', 'F');
};

// 공통 팝업 호출 callBackFunc
scwin.udc_comCode_lobran_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lobranCd, ed_lodeptNm); //RetrunValue, 청구부서코드, 청구부서명
};
scwin.udc_comCode_clnt_callBack = rtnList => $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_bilgClntNm); //RetrunValue,청구화주코드,청구화주명

scwin.udc_comCode_vehcl_callBack = rtnList => $c.gus.cfSetReturnValue($p, rtnList, ed_vehclShortCd, ed_vehclNo); //RetrunValue,차량단축코드, 차량번호

// 매출입부서 Focus 이동시
scwin.udc_comCode_lobran_onblurCodeEvent = e => scwin.f_chkOpenCommonPopUp(ed_lobranCd, ed_lodeptNm, 1);
scwin.udc_comCode_lobran_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lodeptNm, ed_lobranCd, 1, false);
};

// 차량번호 Focus 이동시
scwin.udc_comCode_vehcl_onblurCodeEvent = e => scwin.f_chkOpenCommonPopUp(ed_vehclShortCd, ed_vehclNo, 3);
scwin.udc_comCode_vehcl_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_vehclNo, ed_vehclShortCd, 3, false);
};

// 거래처 Focus 이동시
scwin.udc_comCode_clnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNm, ed_clntNo, 2, false);
};
scwin.udc_comCode_clnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_bilgClntNm, 2);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_ctrtDtMm',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy/MM',title:'기준월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'btn_clnt',style:'',codeId:'ed_clntNo',nameId:'ed_bilgClntNm',maxlengthCode:'6',objTypeName:'data',objTypeCode:'data',mandatoryCode:'false',id:'udc_comCode_clnt',selectID:'retrieveClntInfo',popupGridHeadTitle:'거래처코드,거래처명,거래처구분,거래처구분명,거래처주소',popupTitle:'청구화주코드,거래처코드,거래처명','ev:onclickEvent':'scwin.udc_comCode_clnt_onclickEvent',popupGridHiddenColumn:'6,7,8,9,10','ev:onblurCodeEvent':'scwin.udc_comCode_clnt_onblurCodeEvent',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1','ev:onviewchangeNameEvent':'scwin.udc_comCode_clnt_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'btn_vehcl',style:'',codeId:'ed_vehclShortCd',nameId:'ed_vehclNo',id:'udc_comCode_vehcl',objTypeName:'data',mandatoryCode:'false',UpperFlagCode:'1',maxlengthCode:'7','ev:onclickEvent':'scwin.udc_comCode_vehcl_onclickEvent',popupGridHeadTitle:'차량코드,차량단축코드',popupTitle:'차량번호조회,차량코드,차량번호',selectID:'retrieveVehiclesNo',popupGridHiddenColumn:'3,4,5,6,7,8,9,10','ev:onblurCodeEvent':'scwin.udc_comCode_vehcl_onblurCodeEvent',allowCharCode:'a-zA-Z0-9','ev:onviewchangeNameEvent':'scwin.udc_comCode_vehcl_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출입부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'btn_lobran',style:'',codeId:'ed_lobranCd',nameId:'ed_lodeptNm',id:'udc_comCode_lobran',objTypeCode:'data',mandatoryCode:'false',maxlengthCode:'6',selectID:'retrieveOpDeptCdInfo',popupGridHeadTitle:'부서코드,부서명',popupTitle:'청구부서코드,부서코드,부서명','ev:onclickEvent':'scwin.udc_comCode_lobran_onclickEvent',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_comCode_lobran_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_lobran_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업체구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_posnClsCd',search:'start',style:'width: 110px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'[]전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'위수탁'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'W'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지입차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'G'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',gridUpYn:'N',templateYn:'N',gridID:'gr_trusteeSellingPurchase',gridDownFn:'scwin.f_downExcelSheet'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_trusteeSellingPurchase',id:'gr_trusteeSellingPurchase',style:'',visibleRowNum:'18',visibleRowNumFix:'true',focusMode:'cell',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'거래처번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'사업자번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'차량번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'거래처명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'소유<br/>구분',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'당월 매입',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'당월 매출',width:'420',colSpan:'6',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column34',displayMode:'label',value:'외상매입금(최종3개월)',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column58',value:'외상매출금(최종3개월)',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'현금지급<br/>예정금액<br/>(최종3개월)',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'수탁자명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column61',value:'배정<br/>점소',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label',value:'매입금액'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label',value:'부가세'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label',value:'매출금액'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label',value:'부가세'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',displayMode:'label',value:'보증금'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',displayMode:'label',value:'지입차대납'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',displayMode:'label',value:'수탁대납'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column32',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',displayMode:'label',value:'상계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column38',displayMode:'label',value:'미상계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'상계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'미상계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'posnClsCd',inputType:'text',width:'70',textAlign:'center',displayFormatter:'scwin.f_poncl'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsVatAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSumAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellVatAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt2',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt3',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt4',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellSum',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'setoffPchsSum',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'notSetoffPchsSum',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'setoffSellSum',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'notSetoffSellSum',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'logisVehclDrvNm',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'assgnLobranCd',value:'',displayMode:'label',textAlign:'center'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'clntNo',style:'',id:'subTotal'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column104',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column103',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column102',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column101',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column100',value:'',displayMode:'label',dataType:'number',expression:'SUM(\'pchsAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column99',value:'',displayMode:'label',dataType:'number',expression:'sum(\'pchsVatAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column98',value:'',displayMode:'label',dataType:'number',expression:'sum(\'pchsSumAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column97',value:'',displayMode:'label',dataType:'number',expression:'sum(\'sellAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column96',value:'',displayMode:'label',dataType:'number',expression:'sum(\'sellVatAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column95',value:'',displayMode:'label',dataType:'number',expression:'sum(\'sellAmt2\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column94',value:'',displayMode:'label',dataType:'number',expression:'sum(\'sellAmt3\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column93',value:'',displayMode:'label',dataType:'number',expression:'sum(\'sellAmt4\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column92',value:'',displayMode:'label',dataType:'number',expression:'sum(\'sellSum\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column91',value:'',displayMode:'label',dataType:'number',expression:'sum(\'setoffPchsSum\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column90',value:'',displayMode:'label',dataType:'number',expression:'sum(\'notSetoffPchsSum\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column89',value:'',displayMode:'label',dataType:'number',expression:'sum(\'setoffSellSum\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column88',value:'',displayMode:'label',dataType:'number',expression:'sum(\'notSetoffSellSum\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column87',value:'',displayMode:'label',dataType:'number',expression:'sum(\'payAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column86',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column83',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column82',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column79',value:'',displayMode:'label',textAlign:'right',expression:'SUM("pchsAmt")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column78',value:'',displayMode:'label',textAlign:'right',expression:'SUM("pchsVatAmt")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column77',value:'',displayMode:'label',textAlign:'right',expression:'SUM("pchsSumAmt")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column76',value:'',displayMode:'label',textAlign:'right',expression:'SUM("sellAmt")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column75',value:'',displayMode:'label',textAlign:'right',expression:'SUM("sellVatAmt")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column74',value:'',displayMode:'label',textAlign:'right',expression:'SUM("sellAmt2")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column73',value:'',displayMode:'label',textAlign:'right',expression:'SUM("sellAmt3")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column72',value:'',displayMode:'label',textAlign:'right',expression:'SUM("sellAmt4")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column71',value:'',displayMode:'label',textAlign:'right',expression:'SUM("sellSum")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column70',value:'',displayMode:'label',textAlign:'right',expression:'SUM("setoffPchsSum")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',textAlign:'right',expression:'SUM("notSetoffPchsSum")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column68',value:'',displayMode:'label',textAlign:'right',expression:'SUM("setoffSellSum")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column67',value:'',displayMode:'label',textAlign:'right',expression:'SUM("notSetoffSellSum")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column66',value:'',displayMode:'label',textAlign:'right',expression:'SUM("payAmt")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'total',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})