/*amd /ui/ds/op/wrkrslts/wagewrkrslts/op_307_01_14b.xml 10967 94752dae965bd971781f925e65a79b279e90f0057e08da51de383aaf8134cbb2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_oWhouseWagesCreationConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'branCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStYmDd',name:'작업년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tskClsCd',name:'업무구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndYmDd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'nypayCreatYn',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'actId',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'conseCntn',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wageAgrmntStdDd',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oWhouseWagesCreationConsequenceDTO',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'conseCntn',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_wagesCreationPierPierInside',action:'/ds.op.wrkrslts.wagewrkrslts.CreateOtherWarehouseMonthPublicChargesCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_oWhouseWagesCreationConditionDTO","key":"IN_DS1"},{"id":"ds_oWhouseWagesCreationConsequenceDTO","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_oWhouseWagesCreationConsequenceDTO","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수
//-------------------------------------------------------------------------
scwin.vCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.loginDTO = $c.data.getMemInfo($p);
scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd");

//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.f_SetDefaultData();
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  ica_wrkStYmDd.setValue(scwin.vQryStDt);
  acb_branCd.setValue(scwin.loUpperLobranCd);
};

//-------------------------------------------------------------------------
// 타창고월제세공과금생성 f_RegistWagesCreationPierPierInside
//-------------------------------------------------------------------------
scwin.btn_Save_onClick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [acb_branCd, ica_wrkStYmDd]))) {
    return;
  }
  dma_oWhouseWagesCreationConditionDTO.set("tskClsCd", "C"); // 업무구분코드
  dma_oWhouseWagesCreationConditionDTO.set("branCd", acb_branCd.getValue()); // 업무구분코드
  dma_oWhouseWagesCreationConditionDTO.set("wrkPlCd", ed_wrkPlCd.getValue()); // 업무구분코드
  dma_oWhouseWagesCreationConditionDTO.set("wrkStYmDd", ica_wrkStYmDd.getValue()); // 업무구분코드

  if (await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_009, "월제세공과금(타창고)"))) {
    // @을(를) 생성하시겠습니까?
    btn_Save.setDisabled(true);
    $c.sbm.execute($p, sbm_wagesCreationPierPierInside);
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (작업장)
//-------------------------------------------------------------------------
scwin.udc_wrkPl_onClick = async function (e) {
  let lodeptCd = acb_branCd.getValue();
  let paramList = "," + lodeptCd + "";
  // 'retrieveWrkPlInfo',pCode.trim(),pName,pClose,null,null,null,null,',' + lc_branCd.ValueOfIndex("code", lc_branCd.Index) + '',null,null,null,null,null,pAllSearch,null
  udc_wrkPl.cfCommonPopUp(scwin.udc_wrkPl_callBackFunc, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), "F", null, null, null, null, ',' + acb_branCd.getValue() + '', null, null, null, null, null, null);
};
scwin.udc_wrkPl_onblurCode = async function (e) {
  let lodeptCd = acb_branCd.getValue();
  let paramList = "," + lodeptCd + "";
  if (ed_wrkPlCd.getValue() != "") {
    udc_wrkPl.cfCommonPopUp(scwin.udc_wrkPl_callBackFunc, ed_wrkPlCd.getValue(), "", "T", null, null, null, null, ',' + acb_branCd.getValue() + '', null, null, null, null, null, null);
  } else {
    return;
  }
};
scwin.udc_wrkPl_onChangeName = async function (info) {
  const wrkPlNm = ed_wrkPlNm.getValue();
  if ($c.util.isEmpty($p, wrkPlNm)) {
    ed_wrkPlCd.setValue("");
    return;
  }
  let lodeptCd = acb_branCd.getValue();
  let paramList = "," + lodeptCd + "";
  if (wrkPlNm != "") {
    udc_wrkPl.cfCommonPopUp(scwin.udc_wrkPl_callBackFunc, "", wrkPlNm, "T", null, null, null, null, ',' + acb_branCd.getValue() + '', null, null, null, null, null, null);
  } else {
    return;
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백 (작업장)
//-------------------------------------------------------------------------
scwin.udc_wrkPl_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_wrkPlCd, ed_wrkPlNm);
};

//-------------------------------------------------------------------------
// 서브미션 성공시
//-------------------------------------------------------------------------
scwin.sbm_submitDone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    console.log("result" + ds_oWhouseWagesCreationConsequenceDTO.getCellData(0, "conseCntn"));
    let conseCntn = ds_oWhouseWagesCreationConsequenceDTO.getCellData(0, "conseCntn");
    $c.win.alert($p, conseCntn.replaceAll("##", "<br>"));
    btn_Save.setDisabled(false);
    // scwin.f_Retrieve();
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};
scwin.btn_init_onClick = function (e) {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:180px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:180px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_branCd',search:'start',style:'',submenuSize:'fixed',allOption:'',chooseOption:'',ref:'',mandatory:'true',title:'점소'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부산지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'울산지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6BB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'충남지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전남지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5AA'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_wrkPlCd',nameId:'ed_wrkPlNm',id:'udc_wrkPl',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5',objTypeCode:'Data',objTypeName:'data','ev:onclickEvent':'scwin.udc_wrkPl_onClick','ev:onblurCodeEvent':'scwin.udc_wrkPl_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_wrkPl_onChangeName',selectID:'retrieveWrkPlInfo',validTitle:'작업장'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업월일 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_wrkStYmDd',style:'',pickerType:'dynamic',mandatory:'true',objType:'Data',editType:'select',title:'작업년월'}}]}]}]}]}]}]}]}]}]})