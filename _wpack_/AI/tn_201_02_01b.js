/*amd /AI/tn_201_02_01b.xml 39207 32b90662af44a5b4900ff29dc6d0a26007432dbfe51ac414dac1a9f682be085c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'reqDtFrom',name:'시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDtTo',name:'종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expimpDomesticClsCd',name:'수출입내수구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'districtCd',name:'권역코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_webOdrInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'reqNo',name:'의뢰번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpDomesticClsCd',name:'수출입내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpDomesticClsNm',name:'수출입내수구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkHh',name:'작업시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onDistrictCd',name:'상차권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorDistrictCd',name:'DOOR권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDistrictCd',name:'하차권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onDtl',name:'상차상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorDtl',name:'DOOR상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDtl',name:'하차상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorPicNm',name:'DOOR담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorTelNo',name:'DOOR전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNeedHh',name:'작업소요시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'LINE명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltNo',name:'관련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portnm',name:'PORT명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'마감일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeHh',name:'마감시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrRmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onRgnCd',name:'상차지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onRgnNm',name:'상차지역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorRgnCd',name:'DOOR지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorRgnNm',name:'DOOR지역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offRgnCd',name:'하차지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offRgnNm',name:'하차지역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrClsCd',name:'화주오더구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrClsNm',name:'화주오더구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onZip',name:'상차지우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorZip',name:'DOOR우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offZip',name:'하차지우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'f20',name:'20F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'f40',name:'40F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'f45',name:'45F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'목적항코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_attach',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'reqAttachSeq',name:'SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFileNm',name:'첨부파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFileSiz',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFilePath',name:'첨부파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_file'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'reqNo',name:'의뢰번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blBkNo',name:'오더번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mchtOdrRegDTO'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mchtOdrCommDTO'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveWebOdrList',action:'/tn.sd.odrmgnt.cntrodrreg.RetrieveWebOdrListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_queryCondition","key":"IN_DS1"},{"id":"ds_webOdrInfo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_webOdrInfo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveWebOdrList_submitdone','ev:submiterror':'scwin.sbm_retrieveWebOdrList_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveFileList',action:'/tn.sd.webodrmgnt.bulkwebodrmgnt.RetrieveBulkPreOdrCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_file","key":"IN_DS1"},{"id":"ds_mchtOdrRegDTO","key":"OUT_DS1"},{"id":"ds_mchtOdrCommDTO","key":"OUT_DS2"},{"id":"ds_attach","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_mchtOdrRegDTO","key":"OUT_DS1"},{"id":"ds_mchtOdrCommDTO","key":"OUT_DS2"},{"id":"ds_attach","key":"OUT_DS3"}]','ev:submitdone':'scwin.sbm_retrieveFileList_submitdone','ev:submiterror':'scwin.sbm_retrieveFileList_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = "";
scwin.hid_makeOdr = "N";
scwin.hid_reqNo = "";
scwin.hid_clntNo = "";
scwin.hid_wrkDt = "";
scwin.hid_wrkHh = "";
scwin.hid_lineNm = "";
scwin.hid_rltNo = "";
scwin.hid_vsslNm = "";
scwin.hid_portcnt = "";
scwin.hid_portCd = "";
scwin.hid_closeDt = "";
scwin.hid_closeHh = "";
scwin.hid_odrRmk = "";
scwin.hid_odrNo = "";
scwin.hid_onRgnCd = "";
scwin.hid_onRgnNm = "";
scwin.hid_onZip = "";
scwin.hid_onDtl = "";
scwin.hid_doorRgnCd = "";
scwin.hid_doorRgnNm = "";
scwin.hid_doorZip = "";
scwin.hid_doorDtl = "";
scwin.hid_doorPicNm = "";
scwin.hid_doorTelNo = "";
scwin.hid_offRgnCd = "";
scwin.hid_offRgnNm = "";
scwin.hid_offZip = "";
scwin.hid_offDtl = "";
scwin.hid_expimpDomesticClsCd = "";
scwin.onpageload = async function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.f_SetDefaultData();
};
scwin.onUdcCompleted = async function () {
  udc_reqDt.setInitDate(scwin.vCurDate, scwin.vCurDate);
  acb_expimpDomesticClsCd.setValue("");
  acb_districtCd.setValue("");
};
scwin.f_SetDefaultData = async function () {
  let codeOptions = [{
    grpCd: "TN_DISTRICT",
    compID: "acb_districtCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.f_Retrieve = async function () {
  await $c.sbm.execute($p, sbm_retrieveWebOdrList);
};
scwin.btn_retrieve_onclick = async function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = async function (e) {
  scwin.f_FieldClear();
};
scwin.f_FieldClear = async function () {
  udc_reqDt.setInitDate(scwin.vCurDate, scwin.vCurDate);
  acb_expimpDomesticClsCd.setValue("");
  acb_districtCd.setValue("");
};
scwin.sbm_retrieveWebOdrList_submitdone = async function (e) {
  if (ds_webOdrInfo.getRowCount() < 1) {
    await $c.win.alert($p, "조회된 결과가 없습니다.");
  } else {
    totalRows.setValue(ds_webOdrInfo.getRowCount());
    ds_file.removeAll();
    ds_file.insertRow(0);
    ds_file.setCellData(0, "reqNo", ds_webOdrInfo.getCellData(0, "reqNo"));
    await $c.sbm.execute($p, sbm_retrieveFileList);
  }
};
scwin.sbm_retrieveWebOdrList_submiterror = async function (e) {
  await $c.gus.cfAlertMsg($p, e.responseJSON ? e.responseJSON.message : "조회 중 오류가 발생했습니다.");
};
scwin.sbm_retrieveFileList_submitdone = async function (e) {};
scwin.sbm_retrieveFileList_submiterror = async function (e) {};
scwin.gr_webOdrInfo_oncellclick = async function (rowIndex, columnIndex, columnId) {
  ds_file.removeAll();
  ds_file.insertRow(0);
  ds_file.setCellData(0, "reqNo", ds_webOdrInfo.getCellData(rowIndex, "reqNo"));
  await $c.sbm.execute($p, sbm_retrieveFileList);
};
scwin.ds_webOdrInfo_onrowpositionchange = async function (info) {
  let row = ds_webOdrInfo.getRowPosition();
  if (row > -1) {
    tbx_onRgnNm.setValue(ds_webOdrInfo.getCellData(row, "onRgnNm"));
    tbx_doorRgnNm.setValue(ds_webOdrInfo.getCellData(row, "doorRgnNm"));
    let wrkDtVal = ds_webOdrInfo.getCellData(row, "wrkDt");
    let wrkHhVal = ds_webOdrInfo.getCellData(row, "wrkHh");
    let pickupTimeStr = "";
    if (wrkDtVal != "" && wrkDtVal.length >= 8) {
      pickupTimeStr = wrkDtVal.substring(0, 4) + "/" + wrkDtVal.substring(4, 6) + "/" + wrkDtVal.substring(6, 8);
      if (wrkHhVal != "" && wrkHhVal.length >= 4) {
        pickupTimeStr += " " + wrkHhVal.substring(0, 2) + ":" + wrkHhVal.substring(2, 4);
        if (wrkHhVal.length >= 6) {
          pickupTimeStr += ":" + wrkHhVal.substring(4, 6);
        }
      }
    }
    tbx_pickupTime.setValue(pickupTimeStr);
    let wrkNeedHhVal = ds_webOdrInfo.getCellData(row, "wrkNeedHh");
    let wrkNeedHhStr = "";
    if (wrkNeedHhVal != "" && wrkNeedHhVal.length >= 4) {
      wrkNeedHhStr = wrkNeedHhVal.substring(0, 2) + ":" + wrkNeedHhVal.substring(2, 4);
    }
    tbx_wrkNeedHh.setValue(wrkNeedHhStr);
    tbx_offRgnNm.setValue(ds_webOdrInfo.getCellData(row, "offRgnNm"));
    tbx_doorPicNm.setValue(ds_webOdrInfo.getCellData(row, "doorPicNm"));
    tbx_doorTelNo.setValue(ds_webOdrInfo.getCellData(row, "doorTelNo"));
    tbx_lineNm.setValue(ds_webOdrInfo.getCellData(row, "lineNm"));
    tbx_rltNo.setValue(ds_webOdrInfo.getCellData(row, "rltNo"));
    tbx_vessl.setValue(ds_webOdrInfo.getCellData(row, "vsslNm") + " / " + ds_webOdrInfo.getCellData(row, "portcnt"));
    tbx_portnm.setValue(ds_webOdrInfo.getCellData(row, "portnm"));
    let closeDtVal = ds_webOdrInfo.getCellData(row, "closeDt");
    let closeHhVal = ds_webOdrInfo.getCellData(row, "closeHh");
    if (closeDtVal != "") {
      let clTimeStr = "";
      if (closeDtVal.length >= 8) {
        clTimeStr = closeDtVal.substring(0, 4) + "/" + closeDtVal.substring(4, 6) + "/" + closeDtVal.substring(6, 8);
        if (closeHhVal != "" && closeHhVal.length >= 4) {
          clTimeStr += " " + closeHhVal.substring(0, 2) + ":" + closeHhVal.substring(2, 4);
          if (closeHhVal.length >= 6) {
            clTimeStr += ":" + closeHhVal.substring(4, 6);
          }
        }
      }
      tbx_clTime.setValue(clTimeStr);
    } else {
      tbx_clTime.setValue("");
    }
    tbx_odrRmk.setValue(ds_webOdrInfo.getCellData(row, "odrRmk"));
    tbx_f20.setValue(ds_webOdrInfo.getCellData(row, "f20"));
    tbx_f40.setValue(ds_webOdrInfo.getCellData(row, "f40"));
    tbx_f45.setValue(ds_webOdrInfo.getCellData(row, "f45"));
    scwin.hid_reqNo = ds_webOdrInfo.getCellData(row, "reqNo");
    scwin.hid_clntNo = ds_webOdrInfo.getCellData(row, "clntNo");
    scwin.hid_wrkDt = ds_webOdrInfo.getCellData(row, "wrkDt");
    scwin.hid_wrkHh = ds_webOdrInfo.getCellData(row, "wrkHh");
    scwin.hid_lineNm = ds_webOdrInfo.getCellData(row, "lineNm");
    scwin.hid_rltNo = ds_webOdrInfo.getCellData(row, "rltNo");
    scwin.hid_vsslNm = ds_webOdrInfo.getCellData(row, "vsslNm");
    scwin.hid_portcnt = ds_webOdrInfo.getCellData(row, "portcnt");
    scwin.hid_portCd = ds_webOdrInfo.getCellData(row, "portnm");
    scwin.hid_closeDt = ds_webOdrInfo.getCellData(row, "closeDt");
    scwin.hid_closeHh = ds_webOdrInfo.getCellData(row, "closeHh");
    scwin.hid_odrRmk = ds_webOdrInfo.getCellData(row, "odrRmk");
    scwin.hid_odrNo = ds_webOdrInfo.getCellData(row, "odrNo");
    scwin.hid_onRgnCd = ds_webOdrInfo.getCellData(row, "onRgnCd");
    scwin.hid_onRgnNm = ds_webOdrInfo.getCellData(row, "onRgnNm");
    scwin.hid_onZip = ds_webOdrInfo.getCellData(row, "onZip");
    scwin.hid_onDtl = ds_webOdrInfo.getCellData(row, "onDtl");
    scwin.hid_doorRgnCd = ds_webOdrInfo.getCellData(row, "doorRgnCd");
    scwin.hid_doorRgnNm = ds_webOdrInfo.getCellData(row, "doorRgnNm");
    scwin.hid_doorZip = ds_webOdrInfo.getCellData(row, "doorZip");
    scwin.hid_doorDtl = ds_webOdrInfo.getCellData(row, "doorDtl");
    scwin.hid_doorPicNm = ds_webOdrInfo.getCellData(row, "doorPicNm");
    scwin.hid_doorTelNo = ds_webOdrInfo.getCellData(row, "doorTelNo");
    scwin.hid_offRgnCd = ds_webOdrInfo.getCellData(row, "offRgnCd");
    scwin.hid_offRgnNm = ds_webOdrInfo.getCellData(row, "offRgnNm");
    scwin.hid_offZip = ds_webOdrInfo.getCellData(row, "offZip");
    scwin.hid_offDtl = ds_webOdrInfo.getCellData(row, "offDtl");
    scwin.hid_expimpDomesticClsCd = ds_webOdrInfo.getCellData(row, "expimpDomesticClsCd");
  } else {
    tbx_onRgnNm.setValue("");
    tbx_doorRgnNm.setValue("");
    tbx_pickupTime.setValue("");
    tbx_wrkNeedHh.setValue("");
    tbx_offRgnNm.setValue("");
    tbx_doorPicNm.setValue("");
    tbx_doorTelNo.setValue("");
    tbx_lineNm.setValue("");
    tbx_rltNo.setValue("");
    tbx_vessl.setValue("");
    tbx_portnm.setValue("");
    tbx_clTime.setValue("");
    tbx_odrRmk.setValue("");
    tbx_f20.setValue("");
    tbx_f40.setValue("");
    tbx_f45.setValue("");
  }
  if (scwin.hid_makeOdr == "Y") {
    let chk = await $c.win.confirm($p, "생성중인 오더를 변경하시겠습니까?");
    if (chk) {
      scwin.hid_makeOdr = "N";
    }
  }
};
scwin.f_convertWebOdr = async function () {
  if (ds_webOdrInfo.getRowPosition() < 0) {
    await $c.win.alert($p, "선택된 웹오더정보가 없습니다.");
    return;
  }
  let paramObj = {
    linkPage: "webOdr",
    reqNo: scwin.hid_reqNo,
    clntNo: scwin.hid_clntNo,
    wrkDt: scwin.hid_wrkDt,
    wrkHh: scwin.hid_wrkHh,
    lineNm: scwin.hid_lineNm,
    rltNo: scwin.hid_rltNo,
    vsslNm: scwin.hid_vsslNm,
    portcnt: scwin.hid_portcnt,
    portCd: scwin.hid_portCd,
    closeDt: scwin.hid_closeDt,
    closeHh: scwin.hid_closeHh,
    odrRmk: scwin.hid_odrRmk,
    odrNo: scwin.hid_odrNo,
    onRgnCd: scwin.hid_onRgnCd,
    onRgnNm: scwin.hid_onRgnNm,
    onZip: scwin.hid_onZip,
    onDtl: scwin.hid_onDtl,
    doorRgnCd: scwin.hid_doorRgnCd,
    doorRgnNm: scwin.hid_doorRgnNm,
    doorZip: scwin.hid_doorZip,
    doorDtl: scwin.hid_doorDtl,
    doorPicNm: scwin.hid_doorPicNm,
    doorTelNo: scwin.hid_doorTelNo,
    offRgnCd: scwin.hid_offRgnCd,
    offRgnNm: scwin.hid_offRgnNm,
    offZip: scwin.hid_offZip,
    offDtl: scwin.hid_offDtl,
    expimpDomesticClsCd: scwin.hid_expimpDomesticClsCd
  };
  let targetUrl = "";
  if (scwin.hid_expimpDomesticClsCd == "I") {
    targetUrl = "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_03b.xml";
  } else if (scwin.hid_expimpDomesticClsCd == "O") {
    targetUrl = "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_04b.xml";
  }
  if (targetUrl != "") {
    $c.win.openMenu($p, "웹연계컨테이너오더등록", targetUrl, "tn_201_02_01b", paramObj);
  }
  scwin.hid_makeOdr = "Y";
};
scwin.btn_odrCrate_onclick = async function (e) {
  scwin.f_convertWebOdr();
};
scwin.f_reject = async function () {
  if (ds_webOdrInfo.getRowPosition() < 0) {
    await $c.win.alert($p, "선택된 웹오더정보가 없습니다.");
    return;
  }
  let row = ds_webOdrInfo.getRowPosition();
  let reqNoVal = ds_webOdrInfo.getCellData(row, "reqNo");
  let obj = {
    paramTitle: "오더반려팝업",
    reqNo: reqNoVal
  };
  let rtnList = await $c.win.openPopup($p, "/ui/tn/sd/odrmgnt/bulkodrreg/tn_202_02_01p.xml", {
    width: 400,
    height: 230,
    modal: true,
    data: obj
  });
  if (rtnList != null) {
    if (rtnList[0] == "1") {
      scwin.f_Retrieve();
    }
  }
};
scwin.btn_odrReject_onclick = function (e) {
  scwin.f_reject();
};
scwin.gr_attachFile_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  let attachFileNm = ds_attach.getCellData(ds_attach.getRowPosition(), "attachFileNm");
  let attachFilePath = ds_attach.getCellData(ds_attach.getRowPosition(), "attachFilePath");
  $c.gus.cfDownloadFile($p, attachFileNm, attachFilePath);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_reqDt',refDataMap:'',refEdDt:'ica_reqDtTo',refStDt:'ica_reqDtFrom',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_expimpDomesticClsCd',search:'start',style:'width: 100px;',submenuSize:'auto',ref:'data:ds_queryCondition.expimpDomesticClsCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송작업지사 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_districtCd',search:'start',style:'width: 150px;',submenuSize:'auto',ref:'data:ds_queryCondition.districtCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'웹오더정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox wfix flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-wrap '},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'ds_webOdrInfo',style:'',autoFit:'allColumn',id:'gr_webOdrInfo',class:'wq_gvw',visibleRowNum:'5',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkDt',value:'요청일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'expimpDomesticClsNm',value:'오더종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mchtOdrClsNm',value:'오더구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNm',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'reqNo',value:'의뢰번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',value:'거래처번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'expimpDomesticClsCd',value:'수출입내수구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkHh',value:'작업시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onDistrictCd',value:'상차권역코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorDistrictCd',value:'DOOR권역코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offDistrictCd',value:'하차권역코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onDtl',value:'상차상세',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorDtl',value:'DOOR상세',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offDtl',value:'하차상세',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorPicNm',value:'DOOR담당자명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorTelNo',value:'DOOR전화번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkNeedHh',value:'작업소요시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lineNm',value:'LINE명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rltNo',value:'관련번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslNm',value:'선박명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'portcnt',value:'항차',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'portnm',value:'PORT명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'closeDt',value:'마감일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'closeHh',value:'마감시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrRmk',value:'비고',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',value:'오더번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onRgnCd',value:'상차지역코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onRgnNm',value:'상차지역명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorRgnCd',value:'DOOR지역코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorRgnNm',value:'DOOR지역명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offRgnCd',value:'하차지역코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offRgnNm',value:'하차지역명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'transCargoClsCd',value:'운송화물구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mchtOdrClsCd',value:'화주오더구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onZip',value:'상차지우편번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorZip',value:'DOOR우편번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offZip',value:'하차지우편번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'f20',value:'20F',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'f40',value:'40F',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'f45',value:'45F',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'expimpDomesticClsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mchtOdrClsNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'reqNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'expimpDomesticClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onDistrictCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorDistrictCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offDistrictCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onDtl',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorDtl',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offDtl',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorPicNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorTelNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkNeedHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lineNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rltNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'portcnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'portnm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'closeDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'closeHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrRmk',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onRgnCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onRgnNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorRgnCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorRgnNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offRgnCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offRgnNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'transCargoClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mchtOdrClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onZip',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorZip',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offZip',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'f20',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'f40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'f45',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'DOOR',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'lay_doorRgnNm',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작업일시',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_pickupTime',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'예상작업시간',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_wrkNeedHh',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작업담당',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lay_doorPicNm',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'연락처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_doorTelNo',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Line',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_lineNm',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차지',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_onRgnNm',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차지',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_offRgnNm',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'BL/Booking',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_rltNo',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PORT',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_portnm',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Closing Time',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_clTime',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선명/항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_vessl',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'20F',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_f20',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'3'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'특이사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'3'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lay_odrRmk',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'40F',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_f40',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'45F',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_f45',label:'text',ref:'',style:'',userData2:''}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_odrReject',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'오더반려'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_odrCrate',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'오더생성'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'첨부파일',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_attach',id:'gr_attachFile',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'reqAttachSeq',inputType:'text',style:'',value:'SEQ',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'attachFileNm',inputType:'text',style:'',value:'첨부파일명',width:'400'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'attachFileSiz',inputType:'text',style:'',value:'SIZE',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'attachFilePath',inputType:'text',style:'',value:'첨부파일경로',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',style:'',value:'등록일시',width:'100',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'reqAttachSeq',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'attachFileNm',inputType:'text',style:'',value:'',width:'400',textAlign:'center',readOnly:'true',class:'underline'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'attachFileSiz',inputType:'text',style:'',value:'',width:'120',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'attachFilePath',inputType:'text',style:'',value:'',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})