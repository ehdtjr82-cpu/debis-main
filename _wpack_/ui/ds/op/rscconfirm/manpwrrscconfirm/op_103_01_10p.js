/*amd /ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml 23551 d7abd220550455bae2afd371d656b988eaa0b2bb27a514ba93f1dfad82c661d1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_staff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'occptypeCd',name:'직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeNm',name:'직종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'인원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrd',name:'직급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:''}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeNm',name:'상세직종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrangePsblYn',name:'배치가능여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hdofficeCtrtDrtYn',name:'본사계약직여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ecsYn',name:'연근여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_search',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'직급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrd',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrangePsblYn',name:'배치가능여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCdFlag',name:'상세직종Flag',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'쉬프트구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.RetrieveArrangementPossibleManPowerCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_staff","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_staff","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.arrStaffNo = new Array(); //사번let
scwin.arrStaffNm = new Array(); //사원명let
scwin.arrBranCd = new Array(); //점소코드let
scwin.arrBranNm = new Array(); //점소명let
scwin.arrWrkPlCd = new Array(); //작업장코드let
scwin.arrOccptypeCd = new Array(); //직종let
scwin.arrDtlOccptypeCd = new Array(); //상세직종코드let
scwin.arrOccpgrdCd = new Array(); //직급let
scwin.arrWrkDt = new Array(); //작업일 , 작업시작일자, 작업종료일자
scwin.arrArrangePsblYn = new Array(); //배치가능여부
scwin.arrWindowCloseTf; //WINDOW CLOSE 여부
scwin.arrFlag; //상세직종구분
scwin.arrShiftClsCd; //shift구분
scwin.arr13;
scwin.arr14;
scwin.callbackFnStr = "";
scwin.initCnt = 0;
scwin.onpageload = function () {
  let arrParam = $p.getAllParameter().paramData.data;
  scwin.arrStaffNo = arrParam[0].advancedSplit(",", "t"); //사번let
  scwin.arrStaffNm = arrParam[1].advancedSplit(",", "t"); //사원명let
  scwin.arrBranCd = arrParam[2].advancedSplit(",", "t"); //점소코드let
  scwin.arrBranNm = arrParam[3].advancedSplit(",", "t"); //점소명let
  scwin.arrWrkPlCd = arrParam[4].advancedSplit(",", "t"); //작업장코드let
  scwin.arrOccptypeCd = arrParam[5].advancedSplit(",", "t"); //직종let
  scwin.arrDtlOccptypeCd = arrParam[6].advancedSplit(",", "t"); //상세직종코드let
  scwin.arrOccpgrdCd = arrParam[7].advancedSplit(",", "t"); //직급let
  // 수정 4
  if (arrParam[8] != "" && arrParam[8] != null) {
    // 수정 3
    scwin.arrWrkDt[0] = arrParam[8]; //작업일let
  }
  scwin.arrArrangePsblYn = arrParam[9].advancedSplit(",", "t"); //배치가능여부let
  scwin.arrWindowCloseTf = arrParam[10]; //WINDOW CLOSE 여부
  scwin.arrFlag = arrParam[11]; //Flag
  scwin.arrShiftClsCd = arrParam[12]; //shift구분
  scwin.arr13 = arrParam[13];
  scwin.arr14 = arrParam[14];

  // 수정 2
  if (scwin.arr13 != "" && scwin.arr13 != null && scwin.arr13 != undefined) {
    scwin.arrWrkDt[1] = scwin.arr13.trim().advancedSplit(",", "t"); //작업시작일
    scwin.arrWrkDt[2] = scwin.arr14.trim().advancedSplit(",", "t"); //작업종료일
  }
  let codeOptions = [{
    grpCd: "OP161",
    compID: "lc_dtlOccptypeCd",
    opt: {
      "range": "1,1"
    }
  }];
  if (scwin.arrFlag == '3') {
    codeOptions = [{
      grpCd: "OP161",
      compID: "lc_dtlOccptypeCd",
      opt: {
        "range": "3,1"
      }
    }];
  }
  $c.data.setCommonCode($p, codeOptions, scwin.callbackCode);
};
scwin.callbackCode = function () {
  scwin.chkInit();
};
scwin.onUdcCompleted = function () {
  scwin.chkInit();
};
scwin.chkInit = function () {
  if (++scwin.initCnt >= 2) {
    scwin.init();
  }
};
scwin.init = async function () {
  lc_occptypeCd.setValue(scwin.arrOccptypeCd[0].trim()); //직종
  lc_dtlOccptypeCd.setValue(scwin.arrDtlOccptypeCd[0].trim()); //상세직종코드
  lc_arrangePsblYn.setValue(scwin.arrArrangePsblYn[0].trim()); //배치가능여부

  ed_staffNo.setValue(scwin.arrStaffNo[0].trim()); //사번
  ed_staffNm.setValue(scwin.arrStaffNm[0].trim()); //사원명
  ed_branCd.setValue(scwin.arrBranCd[0].trim()); //점소코드
  ed_branNm.setValue(scwin.arrBranNm[0].trim()); //점소명

  if (scwin.arrStaffNo[1] == 'D') {
    $c.gus.cfEnableObj($p, ed_staffNo, false);
  }
  if (scwin.arrStaffNm[1] == 'D') {
    $c.gus.cfEnableObj($p, ed_staffNm, false);
  }
  if (scwin.arrBranCd[1] == 'D') {
    $c.gus.cfEnableObj($p, ed_branCd, false);
  }
  if (scwin.arrBranNm[1] == 'D') {
    $c.gus.cfEnableObj($p, ed_branNm, false);
  }
  if (scwin.arrOccptypeCd[1] == 'D') {
    $c.gus.cfEnableObj($p, lc_occptypeCd, false);
  }
  if (scwin.arrDtlOccptypeCd[1] == 'D') {
    $c.gus.cfEnableObj($p, lc_dtlOccptypeCd, false);
  }
  if (scwin.arrArrangePsblYn[1] == 'D') {
    $c.gus.cfEnableObj($p, lc_arrangePsblYn, false);
  }
  await scwin.f_Retrieve();
  ed_branCd.focus();
};
scwin.f_Retrieve = async function () {
  ds_search.removeAll();
  ds_search.insertRow(0);
  ds_search.setCellData(0, "staffNo", ed_staffNo.getValue()); //사번let
  ds_search.setCellData(0, "staffNm", ed_staffNm.getValue()); //사원명
  ds_search.setCellData(0, "lobranCd", ed_branCd.getValue()); //점소코드
  ds_search.setCellData(0, "wrkPlCd", scwin.arrWrkPlCd[0]); //작업장코드
  ds_search.setCellData(0, "occptypeCd", lc_occptypeCd.getValue()); //직종코드
  ds_search.setCellData(0, "dtlOccptypeCd", lc_dtlOccptypeCd.getValue()); //상세직종코드
  ds_search.setCellData(0, "wrkDt", scwin.arrWrkDt[0]); //작업일
  ds_search.setCellData(0, "arrangePsblYn", lc_arrangePsblYn.getValue()); //작업일
  ds_search.setCellData(0, "dtlOccptypeCdFlag", scwin.arrFlag); //상세직종Flag
  ds_search.setCellData(0, "shiftClsCd", scwin.arrShiftClsCd); //상세직종Flag

  // 수정 1
  if (scwin.arr13 != null && scwin.arr13 != "" && scwin.arr13 !== undefined) {
    ds_search.setCellData(0, "wrkStDt", scwin.arrWrkDt[1].toString()); //작업시작일
    ds_search.setCellData(0, "wrkEndDt", scwin.arrWrkDt[2].toString()); //작업종료일
  } else {
    ds_search.setCellData(0, "wrkStDt", scwin.arrWrkDt[0]); //작업시작일
    ds_search.setCellData(0, "wrkEndDt", scwin.arrWrkDt[0]); //작업종료일
  }
  let e = await $c.sbm.execute($p, sbm_retrieve);
  await scwin.sbm_retrieve_submitdone(e);
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      //점소
      let rtnList = await udc_branCd.cfCommonPopUpAsync(null, pCode, pName, pClose, null, null, null, null, null, null, null, null, null); //점소
      $c.gus.cfSetReturnValue($p, rtnList, ed_branCd, ed_branNm);
      gr_staff.setEventPause("oncelldblclick", false);
      break;
  }
};
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    // inObj가 코드 필드일 경우 팝업
    await scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    await scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_staff.getRowCount();
  tbx_totCnt.setValue(rowCnt.toString());
  if (!ds_staff.getRowCount()) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  } else {
    if (rowCnt == 1 && scwin.arrWindowCloseTf == 'T') {
      scwin.f_rtnValue(0);
    }
  }
};
scwin.f_rtnValue = function (row) {
  if (row < 0 || row === null) {
    return;
  }
  let arrRtnVal = new Array();
  arrRtnVal[0] = ds_staff.getCellData(row, "occptypeCd");
  arrRtnVal[1] = ds_staff.getCellData(row, "occptypeNm");
  arrRtnVal[2] = ds_staff.getCellData(row, "staffNo");
  arrRtnVal[3] = ds_staff.getCellData(row, "staffNm");
  arrRtnVal[4] = ds_staff.getCellData(row, "occpgrd");
  arrRtnVal[5] = ds_staff.getCellData(row, "occpgrdNm");
  arrRtnVal[6] = ds_staff.getCellData(row, "lobranCd");
  arrRtnVal[7] = ds_staff.getCellData(row, "lobranNm");
  arrRtnVal[8] = ds_staff.getCellData(row, "dtlOccptypeCd");
  arrRtnVal[9] = ds_staff.getCellData(row, "dtlOccptypeNm");
  arrRtnVal[10] = ds_staff.getCellData(row, "arrangePsblYn");
  arrRtnVal[11] = ds_staff.getCellData(row, "hdofficeCtrtDrtYn");
  arrRtnVal[12] = ds_staff.getCellData(row, "ecsYn");
  $c.win.closePopup($p, arrRtnVal);
};
scwin.btn_init_onclick = function (e) {
  scwin.f_init();
};
scwin.f_init = function () {
  ds_search.setCellData(0, "staffNo", ed_staffNo.getValue()); //사번let
  ds_search.setCellData(0, "staffNm", ed_staffNm.getValue()); //사원명
  ds_search.setCellData(0, "lobranCd", ed_branCd.getValue()); //점소코드
  ds_search.setCellData(0, "wrkPlCd", scwin.arrWrkPlCd[0]); //작업장코드
  ds_search.setCellData(0, "occptypeCd", lc_occptypeCd.getValue()); //직종코드
  ds_search.setCellData(0, "dtlOccptypeCd", lc_dtlOccptypeCd.getValue()); //상세직종코드
  ds_search.setCellData(0, "wrkDt", scwin.arrWrkDt[0]); //작업일
  ds_search.setCellData(0, "arrangePsblYn", lc_arrangePsblYn.getValue()); //작업일
  ds_search.setCellData(0, "dtlOccptypeCdFlag", scwin.arrFlag); //상세직종Flag

  if (scwin.arrStaffNo[1] == 'D') {
    $c.gus.cfEnableObj($p, ed_staffNo, false);
  }
  if (scwin.arrStaffNm[1] == 'D') {
    $c.gus.cfEnableObj($p, ed_staffNm, false);
  }
  if (scwin.arrOccptypeCd[1] == 'D') {
    $c.gus.cfEnableObj($p, lc_occptypeCd, false);
  }
  if (scwin.arrDtlOccptypeCd[1] == 'D') {
    $c.gus.cfEnableObj($p, lc_dtlOccptypeCd, false);
  }
  if (scwin.arrArrangePsblYn[1] == 'D') {
    $c.gus.cfEnableObj($p, lc_arrangePsblYn, false);
  }
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
scwin.btn_search_onclick = async function (e) {
  await scwin.f_Retrieve();
};
scwin.udc_comCode_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(1, ed_branCd.getValue(), ed_branNm.getValue(), 'F', 'F');
};
scwin.udc_comCode_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_branNm, ed_branCd, 1, false);
};
scwin.f_chkOpenCommonPopUpCdBlur = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_branCd, ed_branNm, 1, null);
};
scwin.f_chkOpenCommonPopUpNmBlur = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_branNm, ed_branCd, 1, false);
};
scwin.gr_staff_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_rtnValue(rowIndex);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:95px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 20%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'물류점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupBranCd',style:'',class:'',codeId:'ed_branCd',nameId:'ed_branNm',btnId:'btn_branCd',UpperFlagCode:'1',allowCharCode:'0-9,A-Z,a-z',editTypeCode:'select',maxlengthCode:'5',objTypeCode:'data',validExpCode:'작업장:yes',id:'udc_branCd',validExpName:'물류점소:yes','ev:onclickEvent':'scwin.udc_comCode_onclickEvent',readOnlyCode:'false','ev:onviewchangeNameEvent':'scwin.udc_comCode_onviewchangeNameEvent',selectID:'retrieveLogisDeptInfo','ev:onblurCodeEvent':'scwin.f_chkOpenCommonPopUpCdBlur',onloadCallbackFunc:'scwin.udc_comCode_callback',popupTitle:'물류점소,점소코드,점소명',popupGridHeadTitle:'점소코드,점소명','ev:onblurNameEvent':'scwin.f_chkOpenCommonPopUpNmBlur',codeWidth:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배치가능여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_arrangePsblYn',style:'width: 85px;',submenuSize:'auto',ref:'',textAlign:'left',delimiter:'-',displayMode:'label',chooseOptionLabel:'전체',visibleRowNum:'10'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직종',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_occptypeCd',style:'width: 110px;',submenuSize:'auto',textAlign:'left',delimiter:'-',displayMode:'value delim label',ref:'',chooseOptionLabel:'전체',visibleRowNum:'10'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정규직'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약직'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상세직종',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dtlOccptypeCd',style:'width: 120px;',submenuSize:'auto',ref:'',textAlign:'left',delimiter:'-',displayMode:'value delim label','ev:onchange':'scwin.lc_dtlOccptypeCd_onchange',allOption:'',chooseOptionLabel:'전체',visibleRowNum:'10'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인원',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group ',id:'',style:'width: 230px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_staffNo',placeholder:'',style:'width: 85px;',objType:'data',allowChar:'a-zA-Z0-9',maxlength:'6',editType:'select'}},{T:1,N:'xf:input',A:{class:'form-control',id:'ed_staffNm',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_staff',id:'gr_staff',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'','ev:oncelldblclick':'scwin.gr_staff_oncelldblclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'occptypeCd',value:'직종코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'직종명'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'인원번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'성명'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'',value:'직급',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'150',value:'직급명'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'물류점소코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'물류점소명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'상세직종코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'상세직종명',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'배치가능여부',width:'150'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'본사계약직여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'연근여부',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'occptypeCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'occptypeNm',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'staffNo',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'staffNm',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'occpgrd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'occpgrdNm',inputType:'text',removeBorderStyle:'false',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lobranCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lobranNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dtlOccptypeCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dtlOccptypeNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrangePsblYn',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'hdofficeCtrtDrtYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ecsYn',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totCnt',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})