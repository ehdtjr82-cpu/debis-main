/*amd /AI/fm_301_08_01b.xml 28381 74b58100bc9d565ce27d80ec5483fbae49623436078b3d90200a1d305148f4ff */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'setoffCls',name:'상계구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'조회시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEdDt',name:'조회종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellpchItem',name:'매출입항목',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNoCd',name:'차량번호코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'장비코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffSlipNo',name:'상계전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'소속거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'소속거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntCd',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNm',name:'매니저명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItem',name:'매출입항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffClsNo',name:'상계구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'채권번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAmt',name:'수금액',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_process'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntCd',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItem',name:'매출입항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffSlipNo',name:'상계전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffClsNo',name:'상계구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'채권번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fm.paymgnt.paymgnt.RetrieveTargetSetoffListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_master","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fm.paymgnt.paymgnt.ProcessTargetSetoffCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_process","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ac.fm.paymgnt.paymgnt.DeleteSetoffSlipListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_process","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'scwin.sbm_delete_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.g_sCurrDate = "";
scwin.txt_eqCd = "";
scwin.onpageload = async function () {
  scwin.g_sCurrDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.f_Set("INIT");
};
scwin.onUdcCompleted = async function () {
  udc_reqDt.setInitDate(scwin.g_sCurrDate.substring(0, 6) + "01", scwin.g_sCurrDate);
  ica_slipDt.setValue(scwin.g_sCurrDate);
  acb_qrySetoffCls.setSelectedIndex(0);
};
scwin.f_Set = async function (gubun) {
  switch (gubun) {
    case "INIT":
      break;
  }
};
scwin.f_openPopUp = async function (select_code, txtCode, txtName, sFlag, pAllSearch) {
  let rtnList = null;
  let sCmdName = "";
  let code = txtCode.getValue();
  let name = txtName.getValue();
  switch (select_code) {
    case '1':
      sCmdName = "retrieveAcctDeptCdInfo";
      udc_clnt.ilCommonPopUp(function (rtn) {
        if (rtn != null) {
          if (rtn[0] == "N/A") return;
          txtCode.setValue(rtn[0]);
          txtName.setValue(rtn[1]);
        } else {
          txtCode.setValue("");
          txtName.setValue("");
        }
      }, code, name, sFlag, null, null, null, null, null, null, null, null, null);
      break;
    case '2':
      sCmdName = "retrieveClntList";
      udc_clnt.ilCommonPopUp(function (rtn) {
        if (rtn != null) {
          if (rtn[0] == "N/A") return;
          txtCode.setValue(rtn[0]);
          txtName.setValue(rtn[1]);
        } else {
          txtCode.setValue("");
          txtName.setValue("");
        }
      }, code, name, sFlag, null, null, null, null, null, null, null, null, null, null, "F", null, null);
      break;
    case '3':
      sCmdName = "retrieveSelpchItemInfo";
      udc_selpchItem.ilCommonPopUp(function (rtn) {
        if (rtn != null) {
          if (rtn[0] == "N/A") return;
          txtCode.setValue(rtn[0]);
          txtName.setValue(rtn[1]);
        } else {
          txtCode.setValue("");
          txtName.setValue("");
        }
      }, code, name, sFlag, '5', '항목코드,항목명', '150,210', null, ',,,,,,', '440', '500', null, null, null, 'F', '매출입항목코드조회,항목코드,항목명');
      break;
    case '4':
      sCmdName = "retrieveSubsidaryVehclList";
      udc_vehclNo.ilCommonPopUp(function (rtn) {
        if (rtn != null) {
          $c.gus.cfSetReturnValue($p, rtn, vehclNoCd, txt_cond_vehclNo);
          scwin.txt_eqCd = rtn[7];
        } else {
          scwin.txt_eqCd = "";
        }
      }, code, name, sFlag, null, null, null, null, null, "400", null, null, null, null, pAllSearch, "차량번호,차량단축코드,차량번호");
      break;
  }
};
scwin.f_CheckPopUp = async function (orgObjCd, orgObjNm, select_code) {
  let codeVal = orgObjCd.getValue();
  let hidVal = orgObjCd.getUserData("hidVal") || "";
  if (codeVal != hidVal) {
    orgObjNm.setValue("");
  }
  if (codeVal.trim() != "") {
    scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T', 'F');
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.setUserData("hidVal", "");
  }
};
scwin.f_Retrieve = async function () {
  let chk1 = await $c.gus.cfValidate($p, [ica_reqStartDt]);
  if (!chk1) return;
  let chk2 = await $c.gus.cfValidate($p, [ica_reqEndDt]);
  if (!chk2) return;
  ds_condition.set("setoffCls", acb_qrySetoffCls.getValue());
  ds_condition.set("qryStDt", ica_reqStartDt.getValue());
  ds_condition.set("qryEdDt", ica_reqEndDt.getValue());
  ds_condition.set("clntNo", ed_clntNo.getValue());
  ds_condition.set("sellpchItem", ed_selpchItemCd.getValue());
  ds_condition.set("vehclNoCd", vehclNoCd.getValue());
  ds_condition.set("eqCd", scwin.txt_eqCd);
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_Delete = async function () {
  ds_process.removeAll();
  if (ds_master.getUpdatedIndex().length == 0) {
    await $c.win.alert($p, MSG_CM_ERR_001.replace("@", "자료"));
    return false;
  }
  let chk = await $c.win.confirm($p, "상계처리내역을 삭제 하시겠습니까?");
  if (!chk) return false;
  let j = 0;
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "choice") == "T") {
      if (ds_master.getCellData(i, "setoffSlipNo") == "") {
        await $c.win.alert($p, "전표번호[" + ds_master.getCellData(i, "slipNo") + "]건은 삭제 할 수 없습니다..\n\n미발생 상계전표 삭제 불가!");
        return false;
      }
      scwin.f_SetDataSet(i, j);
      j++;
    }
  }
  await $c.sbm.execute($p, sbm_delete);
};
scwin.f_Setoff = async function () {
  ds_process.removeAll();
  if (ds_master.getUpdatedIndex().length == 0) {
    await $c.win.alert($p, MSG_CM_ERR_001.replace("@", "자료"));
    return false;
  }
  let chk = await $c.win.confirm($p, "상계처리 하시겠습니까?");
  if (!chk) return false;
  let j = 0;
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "choice") == "T") {
      if (ds_master.getCellData(i, "setoffSlipNo") != "") {
        await $c.win.alert($p, "전표번호[" + ds_master.getCellData(i, "slipNo") + "]건은 이미 상계처리 되었습니다.\n\n중복상계처리 불가!");
        return false;
      }
      if (ds_master.getCellData(i, "slipDt") == "" || $c.gus.cfIsNull($p, ds_master.getCellData(i, "slipDt"))) {
        await $c.win.alert($p, "전표번호[" + ds_master.getCellData(i, "slipNo") + "]건은 작성일자가 없습니다.");
        return false;
      }
      scwin.f_SetDataSet(i, j);
      j++;
    }
  }
  if (j == 0) {
    await $c.win.alert($p, "선택된건이 없습니다.");
    return false;
  }
  await $c.sbm.execute($p, sbm_save);
};
scwin.f_SetDataSet = async function (row, col) {
  ds_process.insertRow(col);
  ds_process.setCellData(col, "slipNo", ds_master.getCellData(row, "slipNo"));
  ds_process.setCellData(col, "clntNo", ds_master.getCellData(row, "clntNo"));
  ds_process.setCellData(col, "clntNm", ds_master.getCellData(row, "clntNm"));
  ds_process.setCellData(col, "vehclNo", ds_master.getCellData(row, "vehclNo"));
  ds_process.setCellData(col, "sellClntCd", ds_master.getCellData(row, "sellClntCd"));
  ds_process.setCellData(col, "sellClntNm", ds_master.getCellData(row, "sellClntNm"));
  ds_process.setCellData(col, "amt", ds_master.getCellData(row, "amt"));
  ds_process.setCellData(col, "crn", ds_master.getCellData(row, "crn"));
  ds_process.setCellData(col, "slipDt", ds_master.getCellData(row, "slipDt"));
  ds_process.setCellData(col, "selpchItem", ds_master.getCellData(row, "selpchItem"));
  ds_process.setCellData(col, "summary", ds_master.getCellData(row, "summary"));
  ds_process.setCellData(col, "setoffSlipNo", ds_master.getCellData(row, "setoffSlipNo"));
  ds_process.setCellData(col, "selpchItemCd", ds_master.getCellData(row, "selpchItemCd"));
  ds_process.setCellData(col, "selpchItemNm", ds_master.getCellData(row, "selpchItemNm"));
  ds_process.setCellData(col, "setoffClsNo", ds_master.getCellData(row, "setoffClsNo"));
  ds_process.setCellData(col, "acctRecvNo", ds_master.getCellData(row, "acctRecvNo"));
};
scwin.dataSetDebug = async function (dataList, isDebug) {
  if (isDebug == true) {
    let str = "[[[[" + dataList.getID() + "]]]]]\n";
    let colInfos = dataList.getColumnIDs();
    for (let dsRow = 0; dsRow < dataList.getRowCount(); dsRow++) {
      for (let dsCol = 0; dsCol < colInfos.length; dsCol++) {
        str += "[" + colInfos[dsCol] + "] " + dataList.getCellData(dsRow, colInfos[dsCol]) + ", ";
      }
      str += "\n\n";
    }
    await $c.win.alert($p, str);
  }
};
scwin.f_InitObjects = async function () {
  $c.gus.cfInitObjects($p, table1, null);
  udc_reqDt.setInitDate(scwin.g_sCurrDate.substring(0, 6) + "01", scwin.g_sCurrDate);
};
scwin.f_GridToExcel = async function (gr_groupCode, gridName) {
  if (ds_master.getRowCount() <= 0) {
    await $c.win.alert($p, "상계내역이 존재하지않습니다.");
    return false;
  }
  $c.data.downloadGridViewExcel($p, gr_groupCode, {
    "fileName": gridName + ".xlsx",
    "sheetName": gridName
  });
};
scwin.f_adaptSlipDt = async function () {
  let chkCnt = 0;
  let slipDt = ica_slipDt.getValue();
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "choice") == "T") {
      ds_master.setCellData(i, "slipDt", slipDt);
      chkCnt++;
    }
  }
  if (chkCnt == 0) {
    await $c.win.alert($p, "선택된 행이 없습니다. 일괄적용할 행들을 선택해 주십시오.");
    return false;
  }
};
scwin.btn_search_onclick = async function (e) {
  scwin.f_Retrieve();
};
scwin.btn_adaptSlipDt_onclick = async function (e) {
  scwin.f_adaptSlipDt();
};
scwin.btn_delete_onclick = async function (e) {
  scwin.f_Delete();
};
scwin.btn_setoff_onclick = async function (e) {
  scwin.f_Setoff();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_master.getRowCount() == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다");
  } else {
    spa_totalRow.setValue(ds_master.getRowCount());
  }
};
scwin.sbm_retrieve_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_delete_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_delete_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.gr_master_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "slipNo" && rowIndex >= 0) {
    let slipNoVal = ds_master.getCellData(rowIndex, "slipNo");
    if (!(slipNoVal == null || slipNoVal == "")) {
      $c.gus.cfShowSlipInfo($p, slipNoVal);
    }
  }
  if (columnId == "setoffSlipNo" && rowIndex >= 0) {
    let setoffSlipNoVal = ds_master.getCellData(rowIndex, "setoffSlipNo");
    if (!(setoffSlipNoVal == null || setoffSlipNoVal == "")) {
      $c.gus.cfShowSlipInfo($p, setoffSlipNoVal);
    }
  }
  if (columnId == "choice") {
    for (let i = 0; i < ds_master.getRowCount(); i++) {
      if (ds_master.getCellData(rowIndex, "clntNo") == ds_master.getCellData(i, "clntNo") && ds_master.getCellData(i, "collMoneyAmt") > 0) {
        ds_master.setCellData(i, "choice", ds_master.getCellData(rowIndex, "choice"));
      }
    }
  }
};
scwin.gr_master_onheaderclick = function (columnIndex, columnId) {
  if (columnId == "choice") {
    let allChecked = true;
    for (let i = 0; i < ds_master.getRowCount(); i++) {
      if (ds_master.getCellData(i, "choice") != "T") {
        allChecked = false;
        break;
      }
    }
    if (allChecked) {
      for (let i = 0; i < ds_master.getRowCount(); i++) {
        ds_master.setCellData(i, "choice", "F");
      }
    } else {
      for (let i = 0; i < ds_master.getRowCount(); i++) {
        ds_master.setCellData(i, "choice", "T");
      }
    }
  }
};
scwin.udc_clnt_onblurCode = function () {
  scwin.f_CheckPopUp(ed_clntNo, txt_clntNm, '2');
};
scwin.udc_selpchItem_onblurCode = function () {
  scwin.f_CheckPopUp(ed_selpchItemCd, txt_selpchItemNm, '3');
};
scwin.udc_vehclNo_onblurCode = function () {
  if (vehclNoCd.getValue() == "") {
    scwin.txt_eqCd = "";
  }
  scwin.f_CheckPopUp(vehclNoCd, txt_cond_vehclNo, '4');
};
scwin.btn_refresh_onclick = function (e) {
  scwin.f_InitObjects();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:' 상계구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'true',chooseOption:'',class:'',id:'acb_qrySetoffCls',ref:'data:ds_condition.setoffCls',renderType:'',style:'width: 110px;',submenuSize:'auto',editType:'select',search:'start'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'w2:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세금계산서일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',style:'',id:'udc_reqDt',refEdDt:'',refDataMap:'',edFromId:'ica_reqStartDt',edToId:'ica_reqEndDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_clnt',codeId:'ed_clntNo',nameId:'txt_clntNm',class:'col8',popupID:'',style:''}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출입항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_selpchItem',codeId:'ed_selpchItemCd',nameId:'txt_selpchItemNm',style:'',popupID:'',class:'col8'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_vehclNo',codeId:'vehclNoCd',nameId:'txt_cond_vehclNo',class:'col8',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{id:'',class:'section row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-wrap'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',visibleRowNumFix:'false',dataList:'data:ds_master',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_master',visibleRowNum:'10',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'checkbox',id:'choice',value:'',blockSelect:'false',displayMode:'label',fixColumnWidth:'true',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'setoffSlipNo',value:'상계전표번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'clntNo',value:'소속거래처명',blockSelect:'false',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'clntNm',value:'차량번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'vehclNo',value:'거래처코드',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'sellClntCd',value:'매니저명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'sellClntNm',value:'금액',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'amt',value:'사업자번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'crn',value:'작성일자',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'slipDt',value:'매출입항목',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'selpchItem',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'summary',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'채권번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'checkbox',id:'choice',blockSelect:'false',displayMode:'label',fixColumnWidth:'true',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'setoffSlipNo',blockSelect:'false',displayMode:'label',readOnly:'true',class:'underline',style:'color:blue;'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'clntNo',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'clntNm',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'vehclNo',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'center',removeBorderStyle:'false',width:'100',inputType:'text',id:'sellClntCd',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'70',inputType:'text',id:'sellClntNm',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'amt',blockSelect:'false',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'crn',blockSelect:'false',displayMode:'label',readOnly:'true',displayFormat:'###-##-#####'}},{T:1,N:'w2:column',A:{textAlign:'center',removeBorderStyle:'false',width:'120',inputType:'calendar',id:'slipDt',blockSelect:'false',displayMode:'label',allowChar:'0-9',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'200',inputType:'text',style:'',id:'selpchItem',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label',readOnly:'true',class:'underline'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column35',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column34',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column32',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column31',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column28',value:'',displayMode:'label',expression:'sum(\'amt\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작성일자',class:''}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_slipDt',class:' cal',calendarValueType:'yearMonthDate',mandatory:'true'}},{T:1,N:'w2:button',A:{style:'',id:'btn_adaptSlipDt','ev:onclick':'scwin.btn_adaptSlipDt_onclick',label:'일자일괄적용',class:'btn'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:button',A:{style:'',id:'btn_delete',label:'상계삭제',class:'btn'}},{T:1,N:'w2:button',A:{style:'',id:'btn_setoff',label:'일괄생성',class:'btn'}}]}]}]}]}]}]}]})