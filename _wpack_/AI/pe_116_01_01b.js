/*amd /AI/pe_116_01_01b.xml 26629 cda61c1e8e74fadd6d77746ff6a09080b7dd603c4960be9f04e7ce01d889d03c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ioClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seaair',name:'해공구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hblno',name:'House No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblno',name:'Master No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'customer',name:'Customer',dataType:'text'}},{T:1,N:'w2:key',A:{id:'consignee',name:'Consignee',dataType:'text'}},{T:1,N:'w2:key',A:{id:'notify',name:'Notify',dataType:'text'}},{T:1,N:'w2:key',A:{id:'etaFrom',name:'ETA From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'etaTo',name:'ETA To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dept',name:'Department',dataType:'text'}},{T:1,N:'w2:key',A:{id:'retrievalYn',name:'회수건조회',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieve_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaAirCls',name:'해공구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblno',name:'House B/L NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'Master B/L NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customer',name:'CUSTOMER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customernm',name:'CUSTOMER명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'consignee',name:'CONSIGNEE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'notify',name:'NOTIFY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pol',name:'POL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pod',name:'POD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etd',name:'ETD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eta',name:'ETA',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dept',name:'DEPARTURE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptnm',name:'DEPARTURE명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blType',name:'B/L TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retrievalDoc',name:'회수서류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retrievalDt',name:'회수일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidance',name:'증빙',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidanceFilePath',name:'증빙파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deliveryOrder',name:'DELIVERY ORDER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deliveryOrderFilePath',name:'DELIVERY ORDER 파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.pfm.pefm.RetrieveImportDocCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_retrieve","key":"IN_DS1"},{"id":"ds_retrieve_result","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_retrieve_result","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.pfm.pefm.SaveImportDocCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_retrieve_result","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = "";
scwin.strPreDate = "";
scwin.onpageload = function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.strPreDate = $c.date.addDate($p, scwin.vCurDate, -2);
  scwin.f_set("ONLOAD");
  lc_seaair.setValue("");
  lc_ioClsCd.setValue("I");
};
scwin.onUdcCompleted = function () {
  udc_eta.setInitDate(scwin.strPreDate, scwin.vCurDate);
};
scwin.f_set = function (gubun) {
  switch (gubun) {
    case "ONLOAD":
      $c.gus.cfDisableKey($p);
      break;
    case "RETRIEVE":
      $c.gus.cfEnableAllBtn($p);
      break;
    case "DELETE":
      $c.gus.cfDisableBtn($p);
      break;
  }
};
scwin.btn_Retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function () {
  let chk = await $c.gus.cfValidate($p, [ica_etaFrom, ica_etaTo]);
  if (!chk) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_etaFrom.getValue(), ica_etaTo.getValue())) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_048, ["ETA From", "ETA To"]);
    ica_etaFrom.setFocus();
    return false;
  }
  if (chb_retrievalYn.getValue() != "") {
    ds_retrieve.set("retrievalYn", "1");
  } else {
    ds_retrieve.set("retrievalYn", "0");
  }
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowcnt = ds_retrieve_result.getRowCount();
  if (rowcnt == 0) {
    spa_totalRow.setValue(0);
    await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
    return;
  } else {
    spa_totalRow.setValue(rowcnt);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.btSave_onclick = function (e) {
  scwin.f_Save();
};
scwin.f_Save = async function () {
  if (ds_retrieve_result.getUpdatedIndex().length == 0) {
    await $c.win.alert($p, "변경된 내역이 없습니다.");
    return false;
  }
  for (let i = 0; i < ds_retrieve_result.getRowCount(); i++) {
    if (ds_retrieve_result.getRowStatus(i) == "U" || ds_retrieve_result.getRowStatus(i) == "C") {
      if (ds_retrieve_result.getCellData(i, "retrievalDt") == "") {
        await $c.win.alert($p, "회수일자는 필수 입력 사항입니다.");
        return false;
      }
      if (ds_retrieve_result.getCellData(i, "blType") == "") {
        await $c.win.alert($p, "B/L Type은 필수 입력 사항입니다.");
        return false;
      }
      if (ds_retrieve_result.getCellData(i, "retrievalDoc") == "") {
        await $c.win.alert($p, "회수서류 종류는 필수 입력 사항입니다.");
        return false;
      }
    }
  }
  let chk = await $c.win.confirm($p, "저장하시겠습니까?");
  if (chk) {
    await $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.win.alert($p, "저장이 완료되었습니다.");
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.f_fileSet = async function (gubun) {
  let row = ds_retrieve_result.getRowPosition();
  let houseNo = ds_retrieve_result.getCellData(row, "hblno");
  let obj = {
    houseNo: houseNo
  };
  let resultList = await $c.win.openPopup($p, "/ui/il/pfm/pefm/pe_116_01_01p.xml", {
    width: 870,
    height: 335,
    modal: true,
    data: obj
  });
  if (resultList != null) {
    if (resultList[0] != "" && resultList[0] != "undefined") {
      switch (gubun) {
        case 1:
          ds_retrieve_result.setCellData(row, "evidanceFilePath", resultList[0]);
          ds_retrieve_result.setCellData(row, "evidance", ds_retrieve_result.getCellData(row, "hblno") + "_증빙");
          break;
        case 2:
          ds_retrieve_result.setCellData(row, "deliveryOrderFilePath", resultList[0]);
          ds_retrieve_result.setCellData(row, "deliveryOrder", ds_retrieve_result.getCellData(row, "hblno") + "_Delivery Order");
          break;
      }
    }
  }
};
scwin.f_Download = async function (gubun) {
  let row = ds_retrieve_result.getRowPosition();
  if (row < 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["첨부파일 행"]);
    return;
  } else {
    switch (gubun) {
      case 1:
        let fileName1 = ds_retrieve_result.getCellData(row, "evidance");
        let filePath1 = ds_retrieve_result.getCellData(row, "evidanceFilePath");
        if (filePath1.trim().length == 0) {
          await $c.win.alert($p, "선택하신 " + (row + 1) + "행에 파일이 등록되어 있지 않습니다.");
        } else {
          if (filePath1.indexOf(".") > 0) {
            fileName1 += filePath1.substring(filePath1.indexOf("."), filePath1.indexOf(".") + 4);
            $c.gus.cfDownloadFile($p, fileName1, filePath1);
          }
        }
        break;
      case 2:
        let fileName2 = ds_retrieve_result.getCellData(row, "deliveryOrder");
        let filePath2 = ds_retrieve_result.getCellData(row, "deliveryOrderFilePath");
        if (filePath2.trim().length == 0) {
          await $c.win.alert($p, "선택하신 " + (row + 1) + "행에 파일이 등록되어 있지 않습니다.");
        } else {
          if (filePath2.indexOf(".") > 0) {
            fileName2 += filePath2.substring(filePath2.indexOf("."), filePath2.indexOf(".") + 4);
            $c.gus.cfDownloadFile($p, fileName2, filePath2);
          }
        }
        break;
    }
  }
};
scwin.btn_Clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [tb_retrieve]);
};
scwin.f_PopUp = function (disGubun, chgGubun) {
  switch (disGubun) {
    case "Customer":
      udc_customer.ilCommonPopUp(scwin.callbackCustomer, ed_customer.getValue().trim(), txt_customer.getValue(), chgGubun, '10', 'Customer Code,Customer Name,Address1,Address2,Address3,Address4,Tel,,,CRN', '140,300,100,100,100,100,100,,,100', '8,9', null, '500', '500', null, null, null, "F", 'Customer search,Customer Code,Customer Name');
      break;
    case "Consignee":
      udc_consignee.ilCommonPopUp(scwin.callbackConsignee, ed_consignee.getValue().trim(), txt_consignee.getValue(), chgGubun, '10', 'Consignee Code,Consignee Name,Address1,Address2,Address3,Address4,Tel,,,CRN', '140,300,100,100,100,100,100,,,100', '8,9', null, '500', '500', null, null, null, "F", 'Consignee search,Consignee Code,Consignee Name');
      break;
    case "Notify":
      udc_notify.ilCommonPopUp(scwin.callbackNotify, ed_notify.getValue().trim(), txt_notify.getValue(), chgGubun, '10', 'Notify Code,Notify Name,Address1,Address2,Address3,Address4,Tel,,,CRN', '140,300,100,100,100,100,100,,,100', '8,9', null, '500', '500', null, null, null, "F", 'Notify search,Notify Code,Notify Name');
      break;
  }
};
scwin.callbackCustomer = function (rtnList) {
  if (rtnList) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_customer, txt_customer);
  }
};
scwin.callbackConsignee = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_consignee, txt_consignee);
};
scwin.callbackNotify = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_notify, txt_notify);
};
scwin.f_OpenCommonPopUp = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  switch (gubun1) {
    case "DEPT":
      udc_dept.ilCommonPopUp(scwin.callbackDept, ed_dept.getValue().trim(), txt_dept.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "DEPT,Code,Name", pNoDataCloseTF);
      break;
  }
};
scwin.callbackDept = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dept, txt_dept);
};
scwin.f_downExcelSheet = async function () {
  let cntRow = ds_retrieve_result.getRowCount();
  if (cntRow != 0) {
    let cfrm = await $c.win.confirm($p, "수입서류 관리대장 목록을 EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      $c.data.downloadGridViewExcel($p, gr_retrieve_result, "수입서류 관리대장", "수입서류 관리대장");
    }
  } else {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
  }
};
scwin.f_BeforePopUpEd2 = function (nmObj, cdObj, gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  let cdObjVal = cdObj.getValue().trim();
  if (cdObjVal == "") {
    nmObj.setValue("");
  } else {
    nmObj.setValue("");
    if (gubun1 == "DEPT") {
      scwin.f_OpenCommonPopUp('DEPT', 'T', 'F', 'F');
    } else {
      scwin.f_PopUp(gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF);
    }
  }
};
scwin.ed_customer_onblur = function (e) {
  let strClntNo = ed_customer.getValue().trim();
  if (strClntNo.length > 0) {
    txt_customer.setValue("");
    scwin.f_PopUp('Customer', 'T');
  } else {
    txt_customer.setValue("");
  }
};
scwin.ed_consignee_onblur = function (e) {
  let strClntNo = ed_consignee.getValue().trim();
  if (strClntNo.length > 0) {
    txt_consignee.setValue("");
    scwin.f_PopUp('Consignee', 'T');
  } else {
    txt_consignee.setValue("");
  }
};
scwin.ed_notify_onblur = function (e) {
  let strClntNo = ed_notify.getValue().trim();
  if (strClntNo.length > 0) {
    txt_notify.setValue("");
    scwin.f_PopUp('Notify', 'T');
  } else {
    txt_notify.setValue("");
  }
};
scwin.ed_dept_onblur = function (e) {
  let strClntNo = ed_dept.getValue().trim();
  if (strClntNo.length > 0) {
    txt_dept.setValue("");
    scwin.f_OpenCommonPopUp("DEPT", "T", "F", "F");
  } else {
    txt_dept.setValue("");
  }
};
scwin.gr_retrieve_result_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "evidance":
      scwin.f_fileSet(1);
      break;
    case "deliveryOrder":
      scwin.f_fileSet(2);
      break;
  }
};
scwin.gr_retrieve_result_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "evidance":
      scwin.f_Download(1);
      break;
    case "deliveryOrder":
      scwin.f_Download(2);
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Air/Sea',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_seaair',search:'start',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_retrieve.seaair'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Export/Import',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_ioClsCd',search:'start',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_retrieve.ioClsCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETA',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_eta',refEdDt:'',edFromId:'ica_etaFrom',edToId:'ica_etaTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_blno',style:'width: 150px;',ref:'data:ds_retrieve.hblno'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mblno',style:'width: 150px;',ref:'data:ds_retrieve.mblno'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_customer',codeId:'ed_customer',nameId:'txt_customer',popupID:'',selectID:'',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_retrievalYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'회수건만 조회'}]},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consignee',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_consignee',popupID:'',selectID:'',codeId:'ed_consignee',validTitle:'',nameId:'txt_consignee',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Notify',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_notify',codeId:'ed_notify',nameId:'txt_notify',popupID:'',selectID:'',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Department',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_dept',codeId:'ed_dept',nameId:'txt_dept',popupID:'',selectID:'',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'수입서류 관리대장',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_retrieve_result',focusMode:'row',id:'gr_retrieve_result',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'kcomcd',inputType:'text',style:'',value:'',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mhno',inputType:'text',style:'',value:'',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seaAirCls',inputType:'text',style:'',value:'Sea/Air',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mblno',inputType:'text',style:'',value:'Master B/L NO',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hblno',inputType:'text',style:'',value:'House B/L NO',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'customer',inputType:'text',style:'',value:'CUSTOMER',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'customernm',inputType:'text',style:'',value:'CUSTOMER',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'etd',inputType:'text',style:'',value:'ETD',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eta',inputType:'text',style:'',value:'ETA',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pol',value:'POL',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pod',value:'POD',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'dept',value:'DEPARTURE',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'deptnm',value:'DEPARTURE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'blType',value:'B/L TYPE',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'retrievalDoc',value:'회수서류',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'retrievalDt',value:'회수일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'evidance',value:'증빙',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'evidanceFilePath',value:'증빙파일경로',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'deliveryOrder',value:'DELIVERY ORDER',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'deliveryOrderFilePath',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'regId',value:'',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'kcomcd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mhno',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seaAirCls',inputType:'select',style:'',value:'',width:'100',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Sea'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Air'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'mblno',inputType:'text',style:'',value:'',width:'130',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hblno',inputType:'text',style:'',value:'',width:'130',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'customer',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'customernm',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'etd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eta',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pol',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pod',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'dept',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'deptnm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',style:'',id:'blType',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'retrievalDoc',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'retrievalDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',style:'',id:'evidance',value:'',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'evidanceFilePath',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'textImage',style:'',id:'deliveryOrder',value:'',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'deliveryOrderFilePath',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'regId',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btSave',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})