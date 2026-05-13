/*amd /AI/fs_101_01_05b.xml 28766 3d3d0ea47d8dd3c7e820abe18f29297824376d09ccfc962c033622f4743f30f4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_monthRegisterCostQueryConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtSt',name:'작업일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtEnd',name:'작업일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'중기',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCdDtl',name:'중기(실적조회)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtSeq',name:'계약번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_monthRegisterCostPurchaseDTOList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'중기번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtPayStdNm',name:'계약기준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtHh',name:'계약시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtAmt',name:'계약금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptNm',name:'매입부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCertiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsNm',name:'확정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtSeq',name:'계약순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_monthRegisterCostResultsDTOList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkDt',name:'일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'배차점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'From',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'To',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdptHhCnt',name:'적용시간',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commAmt',name:'공통요율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ctrtAmt',name:'계약요율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ctrlAmt',name:'조정금액',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_monthRegisterCostQueryConditionDTO',action:'/ds.fs.adjm.adjmbdcalc.RetrieveMonthRegisterCostListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_monthRegisterCostQueryConditionDTO","key":"IN_DS1"},{"id":"ds_monthRegisterCostPurchaseDTOList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_monthRegisterCostPurchaseDTOList","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_monthRegisterCostQueryConditionDTO_submitdone','ev:submiterror':'scwin.sbm_monthRegisterCostQueryConditionDTO_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_monthRegisterCostResultsDTO',action:'/ds.fs.adjm.adjmbdcalc.RetrieveMonthRegisterCostResultsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_monthRegisterCostQueryConditionDTO","key":"IN_DS1"},{"id":"ds_monthRegisterCostResultsDTOList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_monthRegisterCostResultsDTOList","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_monthRegisterCostResultsDTO_submitdone','ev:submiterror':'scwin.sbm_monthRegisterCostResultsDTO_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveMonthRegisterCostPrimeCost',action:'/ds.fs.adjm.adjmbdcalc.RegistMonthRegisterCostPrimeCostCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_monthRegisterCostPurchaseDTOList","key":"IN_DS1"},{"id":"ds_monthRegisterCostResultsDTOList","key":"IN_DS2"},{"id":"dma_monthRegisterCostQueryConditionDTO","key":"IN_DS3"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_saveMonthRegisterCostPrimeCost_submitdone','ev:submiterror':'scwin.sbm_saveMonthRegisterCostPrimeCost_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.chk_flag = "";
scwin.vCurDate = "";
scwin.vQryStDt = "";
scwin.vQryEndDt = "";
scwin.onpageload = async function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01";
  scwin.vQryEndDt = scwin.vCurDate;
  $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Delete]);
};
scwin.onUdcCompleted = async function () {
  udc_wrkDt.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
  ed_pchsClntNo.setFocus();
};
scwin.btn_retrieve_onclick = async function (e) {
  scwin.f_RetrieveMonthRegisterCostList();
};
scwin.btn_Save_onclick = async function (e) {
  scwin.f_RegistMonthRegisterCostPrimeCost();
};
scwin.btn_Delete_onclick = async function (e) {
  scwin.f_DeleteMonthRegisterCostPrimeCost();
};
scwin.f_RetrieveMonthRegisterCostList = async function () {
  let chk = await $c.gus.cfValidate($p, [ed_pchsClntNo, ica_wrkDtSt, ica_wrkDtEnd, ed_eqCd]);
  if (!chk) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_wrkDtSt.getValue(), ica_wrkDtEnd.getValue())) {
    await $c.gus.cfAlertMsg($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ica_wrkDtSt.setFocus();
    return;
  }
  dma_monthRegisterCostQueryConditionDTO.set("pchsClntNo", ed_pchsClntNo.getValue());
  dma_monthRegisterCostQueryConditionDTO.set("wrkDtSt", ica_wrkDtSt.getValue());
  dma_monthRegisterCostQueryConditionDTO.set("wrkDtEnd", ica_wrkDtEnd.getValue());
  dma_monthRegisterCostQueryConditionDTO.set("eqCd", ed_eqCd.getValue());
  await $c.sbm.execute($p, sbm_monthRegisterCostQueryConditionDTO);
};
scwin.f_RetrieveMonthRegisterCostResults = async function (row) {
  dma_monthRegisterCostQueryConditionDTO.set("eqCdDtl", ds_monthRegisterCostPurchaseDTOList.getCellData(row, "eqCd"));
  dma_monthRegisterCostQueryConditionDTO.set("ctrtSeq", ds_monthRegisterCostPurchaseDTOList.getCellData(row, "ctrtSeq"));
  await $c.sbm.execute($p, sbm_monthRegisterCostResultsDTO);
};
scwin.f_RegistMonthRegisterCostPrimeCost = async function () {
  for (let i = 0; i < ds_monthRegisterCostPurchaseDTOList.getRowCount(); i++) {
    if (ds_monthRegisterCostPurchaseDTOList.getCellData(i, "chk") == "T") {
      if (ds_monthRegisterCostPurchaseDTOList.getCellData(i, "pchsDeptCd") == "" || ds_monthRegisterCostPurchaseDTOList.getCellData(i, "pchsDeptNm") == "") {
        await $c.gus.cfAlertMsg($p, i + 1 + "번째 데이타에서 매입부서를 입력하십시오.");
        ds_monthRegisterCostPurchaseDTOList.setRowPosition(i);
        gr_monthRegisterCostPurchaseDTOList.setFocusedCell(i, "pchsDeptCd", true);
        return;
      }
    }
  }
  let chk = await $c.win.confirm($p, "매입생성및 승인을 하시겠습니까?");
  if (chk) {
    scwin.chk_flag = "TRUE";
    sbm_saveMonthRegisterCostPrimeCost.action = "/ds.fs.adjm.adjmbdcalc.RegistMonthRegisterCostPrimeCostCMD.do";
    await $c.sbm.execute($p, sbm_saveMonthRegisterCostPrimeCost);
  }
};
scwin.f_DeleteMonthRegisterCostPrimeCost = async function () {
  let chk = await $c.win.confirm($p, MSG_CM_CRM_004);
  if (chk) {
    ds_monthRegisterCostPurchaseDTOList.removeRow(ds_monthRegisterCostPurchaseDTOList.getRowPosition());
    sbm_saveMonthRegisterCostPrimeCost.action = "/ds.fs.adjm.adjmbdcalc.DeleteMonthRegisterCostPrimeCostCMD.do";
    await $c.sbm.execute($p, sbm_saveMonthRegisterCostPrimeCost);
  }
};
scwin.f_RunExcel = async function (value) {
  let gridId = "";
  let sheetName = "";
  let fileName = "";
  if (value == "M") {
    let countA = ds_monthRegisterCostPurchaseDTOList.getRowCount();
    if (!(countA > 0)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      return;
    }
    gridId = "gr_monthRegisterCostPurchaseDTOList";
    sheetName = "월대장비목록";
    fileName = "월대장비목록.xlsx";
  } else if (value == "D") {
    let countB = ds_monthRegisterCostResultsDTOList.getRowCount();
    if (!(countB > 0)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      return;
    }
    gridId = "gr_monthRegisterCostResultsDTOList";
    sheetName = "월대장비실적";
    fileName = "월대장비실적.xlsx";
  }
  let chk = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (chk) {
    $c.data.downloadGridViewExcel($p, gridId, {
      "fileName": fileName,
      "sheetName": sheetName
    });
  }
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList = new Array();
  switch (disGubun) {
    case 1:
      udc_pchsClnt.ilCommonPopUp(scwin.callbackClnt, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      udc_eq.ilCommonPopUp(scwin.callbackEq, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, '장비,장비코드,차량번호');
      break;
    default:
      break;
  }
};
scwin.callbackClnt = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_pchsClntNo, txt_pchsClntNm);
};
scwin.callbackEq = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_eqCd, txt_vehclNo);
};
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.f_Popup = async function (disGubun) {
  let rtnList = new Array();
  let pCode = "";
  let pName = "";
  switch (disGubun) {
    case 1:
      pCode = ds_monthRegisterCostPurchaseDTOList.getCellData(ds_monthRegisterCostPurchaseDTOList.getRowPosition(), "pchsDeptCd").replace(/\s*$/, '');
      udc_comCode_Grid.ilCommonPopUp(scwin.callbackPchsDept, pCode, pName, 'F', null, null, null, null, null, null, null, null, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.callbackPchsDept = async function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ds_monthRegisterCostPurchaseDTOList.setCellData(ds_monthRegisterCostPurchaseDTOList.getRowPosition(), "pchsDeptCd", rtnList[0]);
    ds_monthRegisterCostPurchaseDTOList.setCellData(ds_monthRegisterCostPurchaseDTOList.getRowPosition(), "pchsDeptNm", rtnList[1]);
  }
};
scwin.f_InitObjects = async function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};
scwin.f_SetDefaultData = async function () {
  udc_wrkDt.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
  ed_pchsClntNo.setFocus();
};
scwin.f_SumCtrlAmt = async function () {
  let ctrlAmt = 0;
  for (let i = 0; i < ds_monthRegisterCostResultsDTOList.getRowCount(); i++) {
    ctrlAmt = ctrlAmt + Number(ds_monthRegisterCostResultsDTOList.getCellData(i, "ctrlAmt"));
  }
  ds_monthRegisterCostPurchaseDTOList.setCellData(ds_monthRegisterCostPurchaseDTOList.getRowPosition(), "pchsAmt", ctrlAmt);
};
scwin.sbm_monthRegisterCostQueryConditionDTO_submitdone = async function (e) {
  let rowCnt = ds_monthRegisterCostPurchaseDTOList.getRowCount();
  spa_totalRowMst.setValue(rowCnt);
  if (rowCnt == 0) {
    ds_monthRegisterCostResultsDTOList.removeAll();
    $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Delete]);
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  } else {
    $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Delete]);
  }
};
scwin.sbm_monthRegisterCostQueryConditionDTO_submiterror = async function (e) {
  await $c.gus.cfAlertMsg($p, e.errorMsg);
};
scwin.sbm_monthRegisterCostResultsDTO_submitdone = async function (e) {
  let rowCnt = ds_monthRegisterCostResultsDTOList.getRowCount();
  spa_totalRowDtl.setValue(rowCnt);
};
scwin.sbm_monthRegisterCostResultsDTO_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_saveMonthRegisterCostPrimeCost_submitdone = async function (e) {
  scwin.chk_flag = "";
  scwin.f_RetrieveMonthRegisterCostList();
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
};
scwin.sbm_saveMonthRegisterCostPrimeCost_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.gr_monthRegisterCostPurchaseDTOList_onrowpositionchange = function (rowIndex, oldRowIndex) {
  if (ds_monthRegisterCostPurchaseDTOList.getRowCount() > 0) {
    scwin.f_RetrieveMonthRegisterCostResults(rowIndex);
  }
};
scwin.gr_monthRegisterCostPurchaseDTOList_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "pchsDeptCd") {
    scwin.f_Popup(1);
  }
};
scwin.gr_monthRegisterCostPurchaseDTOList_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "pchsAmt") {
    if (ds_monthRegisterCostPurchaseDTOList.getCellData(rowIndex, "pchsCertiNo") == "") {
      gr_monthRegisterCostPurchaseDTOList.setColumnReadOnly("pchsAmt", false);
    } else {
      gr_monthRegisterCostPurchaseDTOList.setColumnReadOnly("pchsAmt", true);
    }
  }
  if (columnId == "pchsDeptCd") {
    if (ds_monthRegisterCostPurchaseDTOList.getCellData(rowIndex, "pchsCertiNo") == "") {
      gr_monthRegisterCostPurchaseDTOList.setColumnReadOnly("pchsDeptCd", false);
    } else {
      gr_monthRegisterCostPurchaseDTOList.setColumnReadOnly("pchsDeptCd", true);
    }
  }
};
scwin.gr_monthRegisterCostPurchaseDTOList_onheaderclick = function (columnIndex, columnId) {
  if (columnId == "chk") {
    let headerCheckValue = gr_monthRegisterCostPurchaseDTOList.getHeaderValue(0, columnIndex);
    for (let i = 0; i < ds_monthRegisterCostPurchaseDTOList.getRowCount(); i++) {
      if (headerCheckValue == "true" || headerCheckValue == true) {
        ds_monthRegisterCostPurchaseDTOList.setCellData(i, "chk", "T");
      } else {
        ds_monthRegisterCostPurchaseDTOList.setCellData(i, "chk", "F");
      }
    }
  }
};
scwin.ds_monthRegisterCostResultsDTOList_oncelldatachange = function (info) {
  let rowIndex = info.rowIndex;
  let columnId = info.columnId;
  let oldValue = info.oldValue;
  let newValue = info.newValue;
  if (newValue == oldValue) return;
  if (columnId == "ctrlAmt") {
    scwin.f_SumCtrlAmt();
  }
};
scwin.udc_pchsClnt_onblurCode = function () {
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNo, txt_pchsClntNm, 1);
};
scwin.udc_eq_onblurCode = function () {
  scwin.f_chkOpenCommonPopUp(ed_eqCd, txt_vehclNo, 2);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_pchsClnt',codeId:'ed_pchsClntNo',nameId:'txt_pchsClntNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_wrkDt',edFromId:'ica_wrkDtSt',edToId:'ica_wrkDtEnd',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'중기 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_eq',codeId:'ed_eqCd',nameId:'txt_vehclNo',hideName:'Y',popupID:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve','ev:onclick':'scwin.btn_retrieve_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'월대장비목록 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_monthRegisterCostPurchaseDTOList',style:'',autoFit:'allColumn',id:'gr_monthRegisterCostPurchaseDTOList',visibleRowNum:'5',class:'wq_gvw',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'chk',displayMode:'label',value:'',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'vehclNo',value:'중기번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ctrtPayStdNm',value:'계약기준',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ctrtHh',value:'계약시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ctrtAmt',value:'계약금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmt',value:'매입금액',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsDeptCd',value:'매입부서코드',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'pchsDeptNm',value:'매입부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsCertiNo',value:'거래명세서번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcsnClsNm',value:'확정구분',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'chk',displayMode:'label',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'vehclNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ctrtPayStdNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ctrtHh',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ctrtAmt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'pchsDeptCd',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'pchsDeptNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsCertiNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcsnClsNm',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column26',displayMode:'label',textAlign:'right',expression:'sum(\'ctrtAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',expression:'sum(\'pchsAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Delete',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'매입삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'매입생성 및 승인'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'월대장비실적',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_monthRegisterCostResultsDTOList',id:'gr_monthRegisterCostResultsDTOList',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',style:'',value:'일자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsDeptCd',inputType:'text',style:'',value:'배차점소',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stvWrkIndictNo',inputType:'text',style:'',value:'작업지시번호',width:'140',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStHh',inputType:'text',style:'',value:'실적',width:'210',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndHh',inputType:'text',style:'',value:'공통요율',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAdptHhCnt',inputType:'text',style:'',value:'계약요율',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commAmt',inputType:'text',style:'',value:'조정금액',width:'100',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkDt',value:'From',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pchsDeptCd',value:'To',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'stvWrkIndictNo',value:'적용시간',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsDeptCd',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stvWrkIndictNo',inputType:'text',style:'',value:'',width:'140',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStHh',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndHh',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAdptHhCnt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrlAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'expression',style:'',value:'',width:'100',textAlign:'right',expression:'sum(\'pchsAdptHhCnt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'expression',style:'',value:'',width:'100',textAlign:'right',expression:'sum(\'commAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'expression',style:'',value:'',width:'100',textAlign:'right',expression:'sum(\'ctrtAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'expression',style:'',value:'',width:'100',textAlign:'right',expression:'sum(\'ctrlAmt\')',dataType:'number',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})