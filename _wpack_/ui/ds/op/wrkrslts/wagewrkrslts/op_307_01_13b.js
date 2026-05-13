/*amd /ui/ds/op/wrkrslts/wagewrkrslts/op_307_01_13b.xml 13633 d388bb08d4647c772265412a141f88a1e1fc829259713e119db6f01d689242d5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_oWhouseWagesCreationConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'branCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStYmDd',name:'작업시작년월일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndYmDd',name:'작업종료년월일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'nypayCreatYn',name:'소급분 미확정원가 생성 여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wageRetroactTerm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oWhouseWagesCreationConsequenceDTO',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'conseCntn',name:'결과내용',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_wageRetroactTerm',action:'/cm.zz.RetrieveComboCMD.do?sysCd=WagesCreationPierPierInsideEBC&queryId=retriveWageRetroactTerm',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_wageRetroactTerm","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_wagesCreationPierPierInside',action:'/ds.op.wrkrslts.wagewrkrslts.CreateOtherWarehouseWagesCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_oWhouseWagesCreationConditionDTO","key":"IN_DS1"},{"id":"ds_oWhouseWagesCreationConsequenceDTO","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_oWhouseWagesCreationConsequenceDTO","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_submit_Done','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수
//-------------------------------------------------------------------------
scwin.vCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.vCurDate); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
scwin.loginDTO = $c.data.getMemInfo($p);
scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd");

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.f_SetDefaultData();
  $c.sbm.execute($p, sbm_wageRetroactTerm);
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  udc_wrkYmDd.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
  if (scwin.f_IsWageRetroactTerm() == true) {
    // 노임소급기간
    cbx_nypayCreatYn.setValue("1");
  } else {
    cbx_nypayCreatYn.setValue("0");
  }
  acb_branCd.setValue(scwin.loUpperLobranCd);
};

//-------------------------------------------------------------------------
// 타창고 노임 생성 f_RegistWagesCreationPierPierInside
//-------------------------------------------------------------------------
scwin.btn_Save_onClick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [acb_branCd, ica_wrkStYmDd, ica_wrkEndYmDd]))) {
    return;
  }
  if (cbx_nypayCreatYn.getValue() == "1") {
    dma_oWhouseWagesCreationConditionDTO.set("nypayCreatYn", "1");
  } else {
    dma_oWhouseWagesCreationConditionDTO.set("nypayCreatYn", "0");
  }
  dma_oWhouseWagesCreationConditionDTO.set("branCd", acb_branCd.getValue());
  dma_oWhouseWagesCreationConditionDTO.set("wrkPlCd", ed_wrkPlCd.getValue());
  dma_oWhouseWagesCreationConditionDTO.set("wrkStYmDd", ica_wrkStYmDd.getValue());
  dma_oWhouseWagesCreationConditionDTO.set("wrkEndYmDd", ica_wrkEndYmDd.getValue());
  if (await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_009, "노임(타창고)"))) {
    // @을(를) 생성하시겠습니까?
    btn_Save.setDisabled(true);
    // cfShowDSWaitMsg(tr_wagesCreationPierPierInside, 290, 200);

    $c.sbm.execute($p, sbm_wagesCreationPierPierInside);
  }
};

//-------------------------------------------------------------------------
// 노임소급기간 포함 여부 
//-------------------------------------------------------------------------
scwin.f_IsWageRetroactTerm = function () {
  // 노임소급기간(OP280)
  let curDate = scwin.vCurDate.substring(4, 6);
  let fromMonth = ds_wageRetroactTerm.getCellData(0, "code");
  let toMonth = ds_wageRetroactTerm.getCellData(1, "name");
  if (Number(fromMonth) <= Number(curDate) && Number(toMonth) >= Number(curDate)) {
    return true;
  } else {
    return false;
  }
};

//-------------------------------------------------------------------------
// 소급분 미확정원가 생성 여부 체크시
//-------------------------------------------------------------------------
scwin.f_IsNypayCreatYn = async function (info) {
  if (scwin.f_IsWageRetroactTerm() == true && cbx_nypayCreatYn.getValue() == "0") {
    if (await $c.win.confirm($p, "미확정원가를 생성해야 되는 월입니다.\n그래도 생성여부를 해제하시겠습니까?")) {
      cbx_nypayCreatYn.setValue("0");
    } else {
      cbx_nypayCreatYn.setValue("1");
    }
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (작업장)
//-------------------------------------------------------------------------
scwin.udc_wrkPl_onClick = async function (e) {
  let lodeptCd = acb_branCd.getValue();
  let paramList = "," + lodeptCd + "";
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
  let lodeptCd = acb_branCd.getValue();
  let paramList = "," + lodeptCd + "";
  if (ed_wrkPlNm.getValue() != "") {
    udc_wrkPl.cfCommonPopUp(scwin.udc_wrkPl_callBackFunc, "", ed_wrkPlNm.getValue(), "T", null, null, null, null, ',' + acb_branCd.getValue() + '', null, null, null, null, null, null);
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
// 검색영역 Field Clear함.
//-------------------------------------------------------------------------
scwin.btn_init_onClick = function (e) {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};

//-------------------------------------------------------------------------
// 저장 성공
//-------------------------------------------------------------------------
scwin.sbm_submit_Done = function (e) {
  let conseCntn = ds_oWhouseWagesCreationConsequenceDTO.getCellData(0, "conseCntn"); // 결과내용
  $c.win.alert($p, conseCntn);
  btn_Save.setDisabled(false);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.btn_Save_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:180px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:180px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_branCd',search:'start',style:'',submenuSize:'fixed',mandatory:'true',objType:'Data',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부산지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'울산지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6BB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'충남지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전남지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5AA'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_wrkPlCd',nameId:'ed_wrkPlNm',id:'udc_wrkPl',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5',UpperFlagCode:'1',validExpCode:'작업장:yes',objTypeName:'data',objTypeCode:'Data',selectID:'retrieveWrkPlInfo','ev:onclickEvent':'scwin.udc_wrkPl_onClick','ev:onblurCodeEvent':'scwin.udc_wrkPl_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_wrkPl_onChangeName'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업월일 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_wrkYmDd',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_wrkStYmDd',edToId:'ica_wrkEndYmDd',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'Data',objTypeTo:'data',objTypeBtn:'data',titleFrom:'작업시작년월일',titleTo:'작업시작년월일'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소급분 미확정원가 생성 여부 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_nypayCreatYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'','ev:onviewchange':'scwin.f_IsNypayCreatYn'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]}]}]}]}]}]}]}]}]})