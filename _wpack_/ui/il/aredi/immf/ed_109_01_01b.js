/*amd /ui/il/aredi/immf/ed_109_01_01b.xml 36895 e24aacec2df3174a7537a8adf2d377d3b8107493602c575fff0ac1637b2ac477 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'House B/L No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sndt',name:'전송일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rfno',name:'관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'Consol No',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_partialList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rfno',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN Number',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN Number',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mfGb',name:'정정항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cscd1',name:'세관코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csnm1',name:'세관명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cscd2',name:'세관 과코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csnm2',name:'세관과명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scount',name:'신고차수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'warecd',name:'장치장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ergb',name:'화물반입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndt',name:'신청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sgb',name:'신고인구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'HOUSE B/L NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pcount',name:'분할/취소건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'send',name:'전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'result',name:'전송결과',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recdt',name:'수신일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mark',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자 ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'수정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sbcrbeName',name:'신청인상호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sbcrbeTelno',name:'신청인연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sbcrbeRsn',name:'신청사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag',name:'플래그',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Rfno'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명칭',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_hsnInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rfno',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mfGb',name:'정정항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dvdHsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pkg',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pkgUnit',name:'포장단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wtUnit',name:'중량단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsgnNm',name:'Consignee 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsgnAddr1',name:'Consignee 주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsgnAddr2',name:'Consignee 주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsgnAddr3',name:'Consignee 주소3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'B/L번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라미터1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'파라미터2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.aredi.immf.RetrieveAirImportCargoManifestPartialCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_Search","key":"IN_DS1"},{"id":"ds_partialList","key":"OUT_DS1"},{"id":"ds_hsnInfo","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_partialList","key":"OUT_DS1"},{"id":"ds_hsnInfo","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_Save',action:'/il.aredi.immf.SaveAirImportCargoManifestPartialCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"action" : "modified", "id":"ds_partialList","key":"IN_DS1"}, {"action" : "modified", "id":"ds_hsnInfo","key":"IN_DS2"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_Save_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_Delete',action:'/il.aredi.immf.SaveAirImportCargoManifestPartialCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"action" : "modified", "id":"ds_partialList","key":"IN_DS1"},{"action" : "modified", "id":"ds_hsnInfo","key":"IN_DS2"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_Delete_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_RfnoLoading',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds","key":"IN_DS1"},{"id":"ds_Rfno","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_Rfno","key":"GAUCE"}','ev:submitdone':'scwin.sbm_RfnoLoading_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCheck = true;
scwin.hid_kcomcd = "DBEX";

// 회원정보를 json 데이터로 모두 받음
let memJson = $c.data.getMemInfo($p);
$c.data.getA;
console.log(memJson);
scwin.onpageload = function () {
  scwin.hid_kcomcd = "DBEX";
};
scwin.onUdcCompleted = function () {
  // $c.gus.cfDisableObjects([ed_cscd1, txt_csnm1, ed_cscd2, txt_csnm2]);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.b_Cancel_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.b_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.b_Delete_onclick = function (e) {
  scwin.f_Delete();
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [ed_blno]);
};
scwin.f_Retrieve = async function () {
  ds_partialList.removeAll();
  ds_hsnInfo.removeAll();
  if (ed_blno.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["House B/L No"]);
    ed_blno.focus();
    return;
  }
  // dma_Search.set("blno", ed_blno.getValue().trim());
  // dma_Search.set("rfno", dma_Search.get("rfno").trim());
  dma_Search.set("kcomcd", scwin.hid_kcomcd);
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_Cancel = function () {
  ds_partialList.undoAll();
  ds_hsnInfo.undoAll();
};
scwin.f_Save = async function () {
  if (await scwin.f_ReqFieldChk()) {
    if (ds_partialList.getCellData(0, "blno") == "") {
      ds_partialList.setCellData(0, "blno", ed_blno.getValue());
      if (ds_partialList.getCellData(0, "blno") == "") {
        await $c.win.alert($p, "BL번호는 필수 입력항목입니다");
        ed_blno.focus();
        return false;
      }
    }
    for (let i = 0; i < ds_hsnInfo.getRowCount(); i++) {
      ds_hsnInfo.setCellData(i, "blno", ds_partialList.getCellData(0, "blno"));
    }

    // if (ds_partialList.getCellData(0, "rfno") == "") {
    //     ds_partialList.setRowStatus(0, "C");
    // }

    await $c.sbm.execute($p, sbm_Save);
    scwin.f_RfnoLoading();
  }
};
scwin.f_ReqFieldChk = async function () {
  let chk = await $c.gus.cfValidate($p, [tb_headerMandantory]);
  if (!chk) {
    return false;
  }
  return true;
};
scwin.f_Delete = async function () {
  let chk = await $c.win.confirm($p, MSG_CM_CRM_004);
  if (chk) {
    ds_partialList.deleteRow(0);
    for (let i = 0; i < ds_hsnInfo.getRowCount(); i++) {
      ds_hsnInfo.deleteRow(i);
    }
    await $c.sbm.execute($p, sbm_Delete);
    scwin.f_RfnoLoading();
  }
};
scwin.f_RfnoLoading = async function () {
  let param1 = "";
  let param2 = "";
  param1 = ed_blno.getValue().trim();
  param2 = scwin.hid_kcomcd;
  if (param1.length > 0) {
    ds.set("sysCd", "ilCommonEBC");
    ds.set("queryId", "retriveAirImportCargoManifestPartialRfnoCombo");
    ds.set("param1", param1);
    ds.set("param2", param2);
    await $c.sbm.execute($p, sbm_RfnoLoading);
  } else {
    ds_Rfno.removeAll();
  }
};
scwin.f_ChkKeyCode = function (ds, row, colid) {
  try {
    let str = ds.getCellData(row, colid);
    let chkStr = "";
    let comStr = "";
    let badStr = "";
    for (let i = 0; i < str.length; i++) {
      chkStr = str.charCodeAt(i);
      if (chkStr >= 33 && chkStr <= 39) {
        badStr += str.charAt(i);
      } else if (chkStr >= 91 && chkStr <= 96) {
        badStr += str.charAt(i);
      } else if (chkStr >= 123 && chkStr <= 126) {
        badStr += str.charAt(i);
      } else if (chkStr == 63) {
        badStr += str.charAt(i);
      } else if (chkStr == 64) {
        badStr += str.charAt(i);
      } else if (chkStr == 43) {
        badStr += str.charAt(i);
      } else if (chkStr == 59) {
        badStr += str.charAt(i);
      } else if (chkStr == 0) {
        badStr += str.charAt(i);
      } else {
        comStr += str.charAt(i);
      }
    }
    ds.setCellData(row, colid, comStr);
  } catch (e) {
    scwin.vCheck = false;
  }
};
scwin.f_PopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  let rtnList;
  let pCode = "";
  let pName = "";
  switch (disGubun) {
    case "CustomInfo":
      udc_cscd1.ilCommonPopUp(scwin.callbackCustomInfo, ed_cscd1.getValue().trim(), txt_csnm1.getValue().trim(), pWinCloseTF, '2', '관할세관 Code, 관할세관 Name', '130,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, "관할세관 Search,관할세관 Code, 관할세관 Name", pNoDataCloseTF);
      break;
    case "CustomSectionInfo":
      udc_cscd2.ilCommonPopUp(scwin.callbackCustomSectionInfo, ed_cscd2.getValue().trim(), txt_csnm2.getValue().trim(), pWinCloseTF, '2', "세관과 Code, 세관과 Name", '130,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, "세관과 Search,세관과 Code, 세관과 Name", pNoDataCloseTF);
      break;
    default:
      break;
  }
};
scwin.f_GridPopUp = async function (disGubun, row, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  return await new Promise(function (resolve) {
    switch (disGubun) {
      case "PackageCode":
        debugger;
        var pkgUnit = ds_hsnInfo.getCellData(row, "pkgUnit");
        udc_pkgUnit.setSelectId("retrievePackageCode");

        //잘못된 값인 경우에 초기화 진행
        ds_hsnInfo.setCellData(row, "pkgUnit", "");
        udc_pkgUnit.ilCommonPopUp(function (rtnList) {
          console.log("rtnList : " + JSON.stringify(rtnList));
          if (rtnList != 'N/A' && rtnList != "") {
            $c.gus.cfSetGridReturnValue($p, rtnList, ds_hsnInfo, row, "pkgUnit", "", [""]);
            resolve(true);
          } else {
            resolve(false);
          }
        }, pkgUnit,
        //ds_hsnInfo.getCellData(row, "pkgUnit"),
        "", pWinCloseTF, '2', "Package Code, Package Name", '130,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, "Package Code Search,Package Code, Package Name", pNoDataCloseTF);
        break;
      default:
        break;
    }
  });
};
scwin.callbackCustomInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cscd1, txt_csnm1);
};
scwin.callbackCustomSectionInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cscd2, txt_csnm2);
};
scwin.callbackPackageCode = function (rtnList) {
  if (rtnList != null) {
    console.log("ds_hsnInfo.getRowPosition() : " + ds_hsnInfo.getRowPosition());
    ds_hsnInfo.setCellData(ds_hsnInfo.getRowPosition(), "pkgUnit", rtnList[0]);
  }
};
scwin.callbackWeightUnitCode = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_wtUnit, '');
};
scwin.f_BeforePopUpEd = function (nmObj, cdObj, gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  if (cdObj.getValue().trim() == cdObj.options.hidVal) return;
  nmObj.setValue("");
  nmObj.options.hidVal = "";
  cdObj.options.hidVal = "";
  if (cdObj.getValue().trim() != "") {
    scwin.f_PopUp(gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF);
  }
};
scwin.f_ChkPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_PopUp(disGubun, 'T', 'F', 'F');
  } else {
    scwin.f_PopUp(disGubun, 'T', 'F', 'F');
  }
};
scwin.f_addRow = async function () {
  if (ds_partialList.getRowCount() == 0) {
    await $c.win.alert($p, "분할/분할취소 정보를 먼저 등록해 주세요");
    return false;
  } else {
    if (ds_partialList.getCellData(0, "mrn") == "" || ds_partialList.getCellData(0, "msn") == "" || ds_partialList.getCellData(0, "hsn") == "") {
      await $c.win.alert($p, "MRN / MSN / HSN 정보를 입력해 주세요");
      return false;
    }
    if (lc_mfGb.getValue() != "1" && lc_mfGb.getValue() != "2") {
      await $c.win.alert($p, "신고유형을 선택해 주세요");
      lc_mfGb.focus();
      return false;
    }
  }
  ds_hsnInfo.insertRow();
  let row = ds_hsnInfo.getRowCount() - 1;
  ds_hsnInfo.setCellData(row, "kcomcd", ds_partialList.getCellData(0, "kcomcd"));
  ds_hsnInfo.setCellData(row, "rfno", ds_partialList.getCellData(0, "rfno"));
  if (ds_partialList.getCellData(0, "rfno") == "") {
    ds_hsnInfo.setCellData(row, "rfno", ds_partialList.getCellData(0, "mrn") + ds_partialList.getCellData(0, "msn") + ds_partialList.getCellData(0, "hsn"));
  }
  ds_hsnInfo.setCellData(row, "blno", ds_partialList.getCellData(0, "blno"));
  ds_hsnInfo.setCellData(row, "mfGb", lc_mfGb.getValue());
  ds_hsnInfo.setCellData(row, "seq", ds_hsnInfo.getRowCount());
};
scwin.f_deleteRow = function () {
  ds_hsnInfo.removeRow(ds_hsnInfo.getRowPosition());
};
scwin.btn_addRowIntnl2_onclick = function (e) {
  scwin.f_addRow();
};
scwin.btn_deleteRowIntnl2_onclick = function (e) {
  if (ds_hsnInfo.getRowStatus(ds_hsnInfo.getRowPosition()) == "C") {
    ds_hsnInfo.removeRow(ds_hsnInfo.getRowPosition());
  } else {
    ds_hsnInfo.deleteRow(ds_hsnInfo.getRowPosition());
  }
};
scwin.btn_undoMarkIntnl2_onclick = function (e) {
  if (ds_hsnInfo.getRowStatus(ds_hsnInfo.getRowPosition()) == "C") {
    ds_hsnInfo.removeRow(ds_hsnInfo.getRowPosition());
  } else {
    ds_hsnInfo.undoRow(ds_hsnInfo.getRowPosition());
  }
};
scwin.sbm_retrieve_submitdone = function (e) {
  ed_totCnt.setValue(ds_partialList.getTotalRow());
  if (ds_partialList.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
  } else {
    if (ds_partialList.getCellData(0, "flag") == "INSERT") {
      var newData = ds_partialList.getRowJSON(0);
      //newData.rowStatus = "C";

      ds_partialList.setJSON([]);
      ds_partialList.insertRow(0);
      ds_partialList.setRowJSON(0, newData, true);
      ds_partialList.setRowPosition(0);
      $c.gus.cfEnableObjects($p, [ed_mrn, ed_msn, ed_hsn]);
    } else {
      ds_partialList.setRowPosition(0);
      $c.gus.cfDisableObjects($p, [ed_mrn, ed_msn, ed_hsn]);
    }
  }
};
scwin.sbm_Save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_Delete_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
  scwin.f_Retrieve();
};
scwin.sbm_RfnoLoading_submitdone = function (e) {};
scwin.ds_partialList_oncelldatachange = function (info) {
  scwin.f_ChkKeyCode(ds_partialList, info.row, info.colId);
};
scwin.ed_blno_onblur = function (e) {
  scwin.f_RfnoLoading();
};
scwin.ed_cscd1_onblur = function (e) {
  scwin.f_BeforePopUpEd(txt_csnm1, ed_cscd1, 'CustomInfo', "T", "F", "F");
};
scwin.udc_cscd1_onblurNameEvent = function (e) {
  scwin.f_BeforePopUpEd(ed_cscd1, txt_csnm1, 'CustomInfo', "T", "F", "F");
};
scwin.udc_cscd2_onblurCodeEvent = function (e) {
  scwin.f_BeforePopUpEd(txt_csnm2, ed_cscd2, "CustomSectionInfo", "T", "F", "F");
};
scwin.udc_cscd2_onblurNameEvent = function (e) {
  scwin.f_BeforePopUpEd(ed_cscd2, txt_csnm2, "CustomSectionInfo", "T", "F", "F");
};
scwin.udc_cscd2_onclickEvent = function (e) {
  scwin.f_PopUp("CustomSectionInfo", 'T', 'F', 'F');
};
scwin.gr_hsnInfo_ontextimageclick = function (rowIndex, columnIndex) {
  let columnId = gr_hsnInfo.getColumnID(columnIndex);
  console.log("gr_hsnInfo_ontextimageclick columnId : " + columnId + " : " + rowIndex);
  if (columnId == "pkgUnit") {
    scwin.f_GridPopUp("PackageCode", rowIndex, "T", "F", "F");
  }
};
scwin.udc_cscd1_onclickEvent = function (e) {
  scwin.f_PopUp("CustomInfo", 'T', 'F', 'F');
};
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.gr_hsnInfo_onviewchange = function (info) {
  console.log(info);
  if (info.colId == "pkgUnit") {
    scwin.f_GridPopUp("PackageCode", info.rowIndex, "T", "F", "F");
  }
};
scwin.gr_hsnInfo_onafteredit = function (rowIndex, columnIndex, value) {
  let columnId = gr_hsnInfo.getColumnID(columnIndex);
  console.log("gr_hsnInfo_onafteredit columnId : " + columnId + " : " + rowIndex);
  if (columnId == "pkgUnit") {
    scwin.f_GridPopUp("PackageCode", rowIndex, "T", "F", "F");
  }
};
scwin.ed_mrn_onblur = function (e) {
  ed_mrn.setValue(ed_mrn.getValue().toUpperCase());
};
scwin.ed_msn_onblur = function (e) {
  ed_msn.setValue(ed_msn.getValue().toUpperCase());
};
scwin.ed_hsn_onblur = function (e) {
  ed_hsn.setValue(ed_hsn.getValue().toUpperCase());
};
scwin.ed_scount_onblur = function (e) {
  ed_scount.setValue(ed_scount.getValue().toUpperCase());
};
scwin.ed_pcount_onblur = function (e) {
  ed_pcount.setValue(ed_pcount.getValue().toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'House B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_blno',placeholder:'',style:'width:150px;',ref:'data:dma_Search.blno',mandatory:'true',minlength:'20','ev:onblur':'scwin.ed_blno_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Reference No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_rfno',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:dma_Search.rfno',allOption:'',chooseOption:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_Rfno'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear','ev:onclick':'scwin.btn_fieldClear_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve','ev:onclick':'scwin.btn_retrieve_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'분할/분할 취소',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'tb_headerMandantory',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:150px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:150px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'MRN / MSN / HSN',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 40%;',id:'ed_mrn',placeholder:'',class:'',ref:'data:ds_partialList.mrn',mandatory:'true',dataType:'text','ev:onkeyup':'scwin.onkeyup',maxlength:'11',allowChar:'0-9a-zA-Z','ev:onblur':'scwin.ed_mrn_onblur'}},{T:1,N:'xf:input',A:{style:'width: 20%;',id:'ed_msn',placeholder:'',class:'',ref:'data:ds_partialList.msn',mandatory:'true','ev:onkeyup':'scwin.onkeyup',maxlength:'4',allowChar:'0-9a-zA-Z','ev:onblur':'scwin.ed_msn_onblur'}},{T:1,N:'xf:input',A:{style:'width: 20%;',id:'ed_hsn',placeholder:'',class:'',ref:'data:ds_partialList.hsn',mandatory:'true','ev:onkeyup':'scwin.onkeyup',maxlength:'4',allowChar:'0-9a-zA-Z','ev:onblur':'scwin.ed_hsn_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'전송상태 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{ref:'data:ds_partialList.send',appearance:'full',style:'',id:'rd_send',renderType:'radiogroup',rows:'',class:'',cols:'',selectedIndex:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'최초전송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'재전송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'신고차수 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_scount',placeholder:'',class:'',ref:'data:ds_partialList.scount',mandatory:'true',displayFormat:'###',title:'신고차수',maxlength:'3','ev:onkeyup':'scwin.onkeyup',allowChar:'0-9a-zA-Z','ev:onblur':'scwin.ed_scount_onblur'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'분할/취소 건수',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_pcount',placeholder:'',class:'',ref:'data:ds_partialList.pcount',mandatory:'true',displayFormat:'###',title:'분할/취소 건수',maxlength:'3','ev:onkeyup':'scwin.onkeyup',allowChar:'0-9a-zA-Z','ev:onblur':'scwin.ed_pcount_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'신청세관 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{id:'udc_cscd1',codeId:'ed_cscd1',nameId:'txt_csnm1',popupID:'',style:'',UpperFlagCode:'1',refDataCollection:'ds_partialList',code:'cscd1',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',name:'csnm1',maxlengthCode:'3',objTypeCode:'data',maxlengthName:'40',btnId:'btn_cscd1',selectID:'retrieveCustomInfo','ev:onblurCodeEvent':'scwin.ed_cscd1_onblur','ev:onclickEvent':'scwin.udc_cscd1_onclickEvent',readOnlyCode:'false',validTitle:'신청세관',mandatoryCode:'true',allowCharCode:'a-zA-Z0-9',mandatoryName:'true','ev:onblurNameEvent':'scwin.udc_cscd1_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'신청세관(과)',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{id:'udc_cscd2',codeId:'ed_cscd2',nameId:'txt_csnm2',popupID:'',style:'',hideName:'Y',allowCharCode:'a-zA-Z0-9',mandatoryCode:'true',refDataCollection:'ds_partialList',code:'cscd2',name:'csnm2',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',objTypeCode:'data',maxlengthCode:'3',UpperFlagCode:'1',maxlengthName:'40',mandatoryName:'true',btnId:'btn_cscd2',selectID:'retrieveCustomSectionInfo',readOnlyCode:'false',validTitle:'신청세관(과)','ev:onclickEvent':'scwin.udc_cscd2_onclickEvent','ev:onblurNameEvent':'scwin.udc_cscd2_onblurNameEvent','ev:onblurCodeEvent':'scwin.udc_cscd2_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'신고유형 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'lc_mfGb',class:'',ref:'data:ds_partialList.mfGb',mandatory:'true',allOption:'',chooseOption:'',chooseOptionLabel:'선택',title:'신고유형'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'선택'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'분할등록'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'분할취소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'신고인구분 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'lc_sgb',class:'',ref:'data:ds_partialList.sgb',mandatory:'true',allOption:'',chooseOption:'',title:'신고인구분'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'선택'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'화주(대리인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'보세구역운영인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'반입구분 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'lc_ergb',class:'',ref:'data:ds_partialList.ergb',mandatory:'true',allOption:'',chooseOption:'',title:'법인구분'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'선택'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'반입전'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'반입후'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'보세구역부호 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_warecd',placeholder:'',class:'',ref:'data:ds_partialList.warecd',title:'보세구역부호','ev:onkeyup':'scwin.onkeyup',allowChar:'a-zA-Z0-9',maxlength:'8'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'신청인 상호 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:200px;',id:'txt_sbcrbeName',placeholder:'',class:'',ref:'data:ds_partialList.sbcrbeName',title:'신청인 상호',maxlength:'25'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'신청인 연락처 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:150px;',id:'txt_sbcrbeTelno',placeholder:'',class:'',ref:'data:ds_partialList.sbcrbeTelno',title:'신청인 연락처',maxlength:'20'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'신청사유 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'',id:'txt_sbcrbeRsn',placeholder:'',class:'',ref:'data:ds_partialList.sbcrbeRsn',title:'신청사유',maxlength:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'전송일시 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',dataType:'text',displayFormat:'####/##/##/##:##',id:'ed_sndt',readOnly:'true',ref:'data:ds_partialList.sndt',style:';text-align:left;width:150px'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'HSN정보내역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_hsnInfo',btnUser:'Y',gridDownYn:'N',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{class:'wq_gvw',dataList:'data:ds_hsnInfo',id:'gr_hsnInfo',readOnly:'false',rowNumHeaderValue:'No',rowNumWidth:'50',style:'',visibleRowNum:'3',visibleRowNumFix:'true',autoFit:'allColumn','ev:ontextimageclick':'scwin.gr_hsnInfo_ontextimageclick',rowStatusVisible:'true',rowStatusWidth:'20','ev:onafteredit':'scwin.gr_hsnInfo_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'dvdHsn',inputType:'text',value:'HSN',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pkgUnit',inputType:'text',value:'포장단위',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pkg',inputType:'text',value:'개수',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'text',value:'중량',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnsgnNm',inputType:'text',value:'수하인상호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnsgnAddr1',inputType:'text',value:'수하인주소1',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnsgnAddr2',inputType:'text',value:'수하인주소2',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnsgnAddr3',inputType:'text',value:'수하인주소3',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'dvdHsn',inputType:'text',width:'60',textAlign:'right',maxLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pkgUnit',inputType:'textImage',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'icon',allowChar:'a-zA-Z0-9',maxLength:'3'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'pkg',inputType:'text',width:'60',textAlign:'right',dataType:'number',maxLength:'10',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'text',width:'60',textAlign:'right',dataType:'float',displayFormat:'#,##0.##0',maxLength:'17'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnsgnNm',inputType:'text',width:'100',textAlign:'left',maxLength:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnsgnAddr1',inputType:'text',width:'200',textAlign:'left',maxLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnsgnAddr2',inputType:'text',width:'200',textAlign:'left',maxLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnsgnAddr3',inputType:'text',width:'200',textAlign:'left',maxLength:'50'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totCnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'',nameId:'',popupID:'',selectID:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',style:'width:%; height:px; ;display:none;',validTitle:'',id:'udc_pkgUnit'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',EngYn:'Y',rowAddFunction:'scwin.btn_addRowIntnl2_onclick',rowDelFunction:'scwin.btn_deleteRowIntnl2_onclick',cancelFunction:'scwin.btn_undoMarkIntnl2_onclick',gridID:'gr_hsnInfo',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',rowAddObjType:'ctrlBtn',rowDelObjType:'ctrlBtn',cancelObjType:'ctrlBtn'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'b_Cancel','ev:onclick':'scwin.b_Cancel_onclick',label:'저장',style:'',type:'button',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Save','ev:onclick':'scwin.b_Save_onclick',label:'저장',style:'',type:'button',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'b_Delete','ev:onclick':'scwin.b_Delete_onclick',label:'저장',style:'',type:'button',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]}]}]}]}]}]}]}]})