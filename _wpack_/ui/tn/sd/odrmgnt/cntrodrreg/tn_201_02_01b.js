/*amd /ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_01b.xml 43683 bef12a2fade07450577d02c92cf329535b1d8045cd92738e2308f4d4abed8b0d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_queryCondition',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'reqDtFrom',name:'시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDtTo',name:'종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpDomesticClsCd',name:'수출입내수구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtCd',name:'권역코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_webOdrInfo',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_webOdrInfo_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'reqNo',name:'의뢰번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkHh',name:'작업시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'LINE명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltNo',name:'관련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portnm',name:'PORT명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'마감일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeHh',name:'마감시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrRmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onRgnCd',name:'상차지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onRgnNm',name:'상차지역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onZip',name:'상차지우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onDtl',name:'상차상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorRgnCd',name:'DOOR지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorRgnNm',name:'DOOR지역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorZip',name:'DOOR우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorDtl',name:'DOOR상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorPicNm',name:'DOOR담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorTelNo',name:'DOOR전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offRgnCd',name:'하차지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offRgnNm',name:'하차지역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offZip',name:'하차지우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDtl',name:'하차상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpDomesticClsNm',name:'수출입내수구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onDistrictCd',name:'상차권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorDistrictCd',name:'DOOR권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDistrictCd',name:'하차권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNeedHh',name:'작업소요시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrClsCd',name:'화주오더구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrClsNm',name:'화주오더구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'f20',name:'20F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'f40',name:'40F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'f45',name:'45F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpDomesticClsCd',name:'수출입내수구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_file'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'reqNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blBkNo',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_mchtOdrRegDTO'},E:[{T:1,N:'w2:keyInfo'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_mchtOdrCommDTO'},E:[{T:1,N:'w2:keyInfo'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_attach'},E:[{T:1,N:'w2:keyInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveWebOdrList',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.RetrieveWebOdrListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_webOdrInfo","key":"OUT_DS1"},{"action":"modified","id":"ds_queryCondition","key":"IN_DS1"}]',target:'data:json,{"id":"ds_webOdrInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_retrieveWebOdrList_submit','ev:submitdone':'scwin.sbm_retrieveWebOdrList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveFileList',action:'/ncall.tn.sd.webodrmgnt.bulkwebodrmgnt.RetrieveBulkPreOdrCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_file","key":"IN_DS1"},{"id":"ds_mchtOdrRegDTO","key":"OUT_DS1"},{"id":"ds_mchtOdrCommDTO","key":"OUT_DS2"},{"id":"ds_attach","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_mchtOdrRegDTO","key":"OUT_DS1"},{"id":"ds_mchtOdrCommDTO","key":"OUT_DS2"},{"id":"ds_attach","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 참고화면 
// tn_304_03_05b
// tn_304_03_05p

// NTIS/오더관리/컨테이너오더등록/ 웹연계컨테이너오더 등록
// 웹연계컨테이너오더 등록

scwin.onpageload = function () {};

// UDC에 값 세팅 방법 
// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  console.log("----------- onUdcCompleted");
  scwin.hid_reqNo; //			의뢰번
  scwin.hid_clntNo; //	        거래처번호
  scwin.hid_wrkDt; //           작업일자
  scwin.hid_wrkHh; //          작업시간
  scwin.hid_lineNm; //         LINE명
  scwin.hid_rltNo; //            관련번호
  scwin.hid_vsslNm; //        선박명
  scwin.hid_portcnt; //        항차
  scwin.hid_portCd; //        목적항
  scwin.hid_closeDt; //       마감일자
  scwin.hid_closeHh; //      마감시간
  scwin.hid_odrRmk; //       비고
  scwin.hid_odrNo; //         오더번호
  scwin.hid_onRgnCd; //    상차지역코드
  scwin.hid_onRgnNm; //    상차지역명
  scwin.hid_onZip; //          상차지우편번호
  scwin.hid_onDtl; //           상차상세
  scwin.hid_doorRgnCd; //    DOOR지역코드
  scwin.hid_doorRgnNm; //   DOOR지역명
  scwin.hid_doorZip; //          DOOR우편번호
  scwin.hid_doorDtl; //           DOOR상세
  scwin.hid_doorPicNm; //     DOOR담당자명
  scwin.hid_doorTelNo; //      DOOR전화번호
  scwin.hid_offRgnCd; //       하차지역코드
  scwin.hid_offRgnNm; //      하차지역명
  scwin.hid_offZip; //             하차지우편번호
  scwin.hid_offDtl; //              하차상세
  scwin.hid_expimpDomesticClsCd; //	수출입내수구분코드
  scwin.hid_makeOdr = "N"; // 오더생성여부
  scwin.vCurDate = WebSquare.date.getCurrentServerDate(); // 서버날짜
  ed_reqDtFrom.setValue(scwin.vCurDate);
  ed_reqDtTo.setValue(scwin.vCurDate);
  // ed_reqDtFrom.focus();
  lc_expimpDomesticClsCd.setValue("");
  lc_districtCd.setValue("");
  lay_pickupTime.setValue("");
  scwin.setCompData();
};
scwin.setCompData = async function () {
  // // value="^전체,<%= GauceUtil.getLuxeComboData("RegionEBC","retrieveDistrict",new String[]{"","","1","2","CMP"}) %>"
  const param1 = [{
    method: "getLuxeComboData",
    param1: "RegionEBC",
    param2: "retrieveDistrict",
    param3: ["", "", "1", "2", "CMP"],
    compID: "lc_districtCd"
  }];
  await $c.data.setGauceUtil($p, param1);
};
scwin.f_Retrieve = function () {
  ds_queryCondition.insertRow();
  ds_queryCondition.setCellData(0, "reqDtFrom", ed_reqDtFrom.getValue());
  ds_queryCondition.setCellData(0, "reqDtTo", ed_reqDtTo.getValue());
  ds_queryCondition.setCellData(0, "expimpDomesticClsCd", lc_expimpDomesticClsCd.getValue());
  ds_queryCondition.setCellData(0, "districtCd", lc_districtCd.getValue());
  $c.sbm.execute($p, sbm_retrieveWebOdrList);
};

// to-do
//웹오더생성
scwin.f_convertWebOdr = async function () {
  let infoRow = ds_webOdrInfo.getRowPosition();
  if (infoRow < 0 || infoRow == null) {
    $c.win.alert($p, "선택된 웹오더정보가 없습니다.");
    return;
  }

  // 부모 메뉴정보 확보
  let parentParam = $p.getAllParameter ? $p.getAllParameter() : null;
  let parentMenuInfo = {
    menuId: ""
  }; // 최소한 객체 형태는 보장

  if (parentParam) {
    if (parentParam.paramData && parentParam.paramData.menuInfo) {
      parentMenuInfo = parentParam.paramData.menuInfo;
    } else if (parentParam.menuInfo) {
      parentMenuInfo = parentParam.menuInfo;
    }
  }
  scwin.paramObj = {
    "linkPage": "webOdr",
    "hid_reqNo": scwin.hid_reqNo,
    "hid_clntNo": scwin.hid_clntNo,
    "hid_wrkDt": scwin.hid_wrkDt,
    "hid_wrkHh": scwin.hid_wrkHh,
    "hid_lineNm": scwin.hid_lineNm,
    "hid_rltNo": scwin.hid_rltNo,
    "hid_vsslNm": scwin.hid_vsslNm,
    "hid_portcnt": scwin.hid_portcnt,
    "hid_portCd": scwin.hid_portCd,
    "hid_closeDt": scwin.hid_closeDt,
    "hid_closeHh": scwin.hid_closeHh,
    "hid_odrRmk": scwin.hid_odrRmk,
    "hid_odrNo": scwin.hid_odrNo,
    "hid_onRgnCd": scwin.hid_onRgnCd,
    "hid_onRgnNm": scwin.hid_onRgnNm,
    "hid_onZip": scwin.hid_onZip,
    "hid_onDtl": scwin.hid_onDtl,
    "hid_doorRgnCd": scwin.hid_doorRgnCd,
    "hid_doorRgnNm": scwin.hid_doorRgnNm,
    "hid_doorZip": scwin.hid_doorZip,
    "hid_doorDtl": scwin.hid_doorDtl,
    "hid_doorPicNm": scwin.hid_doorPicNm,
    "hid_doorTelNo": scwin.hid_doorTelNo,
    "hid_offRgnCd": scwin.hid_offRgnCd,
    "hid_offRgnNm": scwin.hid_offRgnNm,
    "hid_offZip": scwin.hid_offZip,
    "hid_offDtl": scwin.hid_offDtl,
    "hid_expimpDomesticClsCd": scwin.hid_expimpDomesticClsCd,
    // 추가: popupDefine.js가 읽는 위치에 menuInfo를 넣어야 함
    "menuInfo": parentMenuInfo
  };
  scwin.obj = {
    "dataObject": {
      "type": "json",
      "name": "paramData",
      "data": scwin.paramObj
    }
  };
  let targetUrl = "";
  if (scwin.hid_expimpDomesticClsCd == "I") {
    await odrFrame.setSrc("/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_03b.xml", scwin.obj);
    // await odrFrame.setSrc("/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_03b.xml", paramObj);
  } else if (scwin.hid_expimpDomesticClsCd == "O") {
    await odrFrame.setSrc("/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_04b.xml", scwin.obj);
    // await odrFrame.setSrc("/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_04b.xml", paramObj);
  }
  // if (targetUrl != "") {
  //     $c.win.openMenu("웹연계컨테이너오더등록", targetUrl, "tn_201_02_01b", paramObj);
  // }
  scwin.hid_makeOdr = "Y";
};

//웹오더반려
scwin.f_reject = async function () {
  let infoRow = ds_webOdrInfo.getRowPosition();
  if (infoRow < 0) {
    await $c.win.alert($p, "선택된 웹오더정보가 없습니다.");
    return;
  }
  let row = ds_webOdrInfo.getRowPosition();
  let reqNoVal = ds_webOdrInfo.getCellData(row, "reqNo");
  let obj = {
    paramTitle: "오더반려팝업",
    reqNo: reqNoVal
  };

  // to-do
  // tn_202_02_01p 해당 화면 없음.
  debugger;
  let rtnList = await $c.win.openPopup($p, "/ui/tn/sd/odrmgnt/bulkodrreg/tn_202_02_01p.xml", {
    width: 400,
    height: 230,
    modal: true,
    data: obj
  });

  // var rtnList = new Array();
  // var arrParam = new Array();
  // arrParam[0] = ds_webOdrInfo.getCellData(ds_webOdrInfo.rowPosition, "reqNo");
  // var sUrl = "/ui/tn/sd/odrmgnt/bulkodrreg/tn_202_02_01p.xml?paramTitle=오더반려팝업";

  // let opts = {
  //     id: "pupup",
  //     popupName: "",
  //     modal: true,
  //     type: "browserPopup",
  //     width: 400,
  //     height: 230,
  //     title: ""
  // };

  // rtnList = await $c.win.openPopup(sUrl, opts, arrParam);

  if (rtnList != null) {
    if (rtnList[0] == "1") {
      scwin.f_retrieve();
    }
  }
};

// for=tr_retrieveWebOdrList event=OnSuccess()
scwin.sbm_retrieveWebOdrList_submitdone = function (e) {
  let rowCnt = ds_webOdrInfo.getTotalRow();
  if (rowCnt < 1) {
    $c.win.alert($p, "조회된 결과가 없습니다.");
  } else {
    totalRows.setValue(rowCnt);
    gr_webOdrInfo.setFocusedCell(0, "wrkDt", false);
  }
  // to-do
  // 아래 소스 as-is에서 들어오는 데이터 확인하고 추가해야됨..
  return;
  // ds_file.addrow();zz_210_02_07b
  // ds_file.NameValue(1, "reqNo") = ds_webOdrInfo.NameValue(1, "reqNo");
  let rowIndex = gr_webOdrInfo.getFocusedRowIndex() + 1;
  let reqNoVal = ds_webOdrInfo.getCellData(rowIndex, "reqNo");
  ds_file.set("reqNo", reqNoVal);
  $c.sbm.execute($p, sbm_retrieveFileList); // tr_retrieveFileList.post();
};

// for=gr_attachFile event=OnDblClick(row,colid)
scwin.gr_attachFile_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  let firstVal = ds_attach.get("attachFileNm"); // ds_attach.NameValue(ds_attach.RowPosition, "attachFileNm")
  let secondVal = ds_attach.get("attachFilePath");
  $c.gus.cfDownloadFile($p, firstVal, secondVal);
};

// 화주오더 상세 목록
// for=ds_webOdrInfo event=OnRowPosChanged(row)
scwin.ds_webOdrInfo_onrowpositionchange = async function (info) {
  let row = info.newRowIndex;
  let rowData = ds_webOdrInfo.getRowJSON(row);
  if (row >= 0) {
    lay_onRgnNm.setValue(rowData["onRgnNm"]);
    lay_doorRgnNm.setValue(rowData["doorRgnNm"]);
    lay_pickupTime.setValue((rowData["wrkDt"] + ds_webOdrInfo.getCellData(row, "wrkHh")).toDate("YYYYMMDDHHmmss").format("YYYY/MM/DD HH:mm:ss"));
    lay_wrkNeedHh.setValue(ds_webOdrInfo.getCellData(row, "wrkNeedHh").toDate("HHmm").format("HH:mm"));
    lay_offRgnNm.setValue(rowData["offRgnNm"]);
    lay_doorPicNm.setValue(rowData["doorPicNm"]);
    lay_doorTelNo.setValue(rowData["doorTelNo"]);
    lay_lineNm.setValue(rowData["lineNm"]);
    lay_rltNo.setValue(rowData["rltNo"]);
    let layVal = "";
    layVal = ds_webOdrInfo.getCellData(row, "vsslNm") + " / " + ds_webOdrInfo.getCellData(row, "portcnt");
    lay_vessl.setValue(layVal);
    lay_portnm.setValue(rowData["portnm"]);
    if (rowData["closeDt"] != "") {
      lay_clTime.setValue((rowData["closeDt"] + ds_webOdrInfo.getCellData(row, "closeHh")).toDate("YYYYMMDDHHmmss").format("YYYY/MM/DD HH:mm:ss"));
    } else {
      lay_clTime.setValue("");
    }
    lay_odrRmk.setValue(rowData["odrRmk"]);
    lay_f20.setValue(rowData["f20"]);
    lay_f40.setValue(rowData["f40"]);
    lay_f45.setValue(rowData["f45"]);
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
    [lay_onRgnNm, lay_doorRgnNm, lay_pickupTime, lay_wrkNeedHh, lay_offRgnNm, lay_doorPicNm, lay_doorTelNo, lay_lineNm, lay_rltNo, lay_vessl, lay_portnm, lay_clTime, lay_odrRmk, lay_f20, lay_f40, lay_f45].forEach(comp => comp.setValue(""));
  }
  if (scwin.hid_makeOdr == "Y") {
    let val = await $c.win.confirm($p, "생성중인 오더를 변경하시겠습니까?");
    if (val) {
      // document.all.odrFrame.src = "";
      // document.all.odrFrame.style.top = "0";
      // document.all.hid_makeOdr.value = "N";
      scwin.hid_makeOdr = "N";
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_searchField',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_queryCondition',refEdDt:'',refStDt:'',style:'',edFromId:'ed_reqDtFrom',edToId:'ed_reqDtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_expimpDomesticClsCd',search:'start',style:'width: 100px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송작업지사 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_districtCd',search:'start',style:'width: 150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'웹오더정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox wfix flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-wrap '},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_webOdrInfo',style:'',autoFit:'allColumn',id:'gr_webOdrInfo',class:'wq_gvw',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'요청일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'오더<br>종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'오더<br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'의뢰번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'거래처번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'수출입내수구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'작업시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'상차권역코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'DOOR권역코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'하차권역코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'상차상세',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'DOOR상세',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'하차상세',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'DOOR담당자명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'DOOR전화번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'작업소요시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'LINE명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'관련번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'선박명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'항차',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'PORT명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'마감일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'마감시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',value:'비고',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',value:'오더번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'상차지역코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'상차지역명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'DOOR지역코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'DOOR지역명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'하차지역코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'하차지역명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'운송화물구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',value:'화주오더구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column77',value:'상차지우편번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',value:'DOOR우편번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',value:'하차지우편번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column71',value:'20F',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'40F',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',value:'45F',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkDt',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'expimpDomesticClsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mchtOdrClsNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'reqNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'expimpDomesticClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onDistrictCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorDistrictCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offDistrictCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onDtl',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorDtl',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offDtl',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorPicNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorTelNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkNeedHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lineNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rltNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'portcnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'portnm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'closeDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'closeHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrRmk',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onRgnCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onRgnNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorRgnCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorRgnNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offRgnCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offRgnNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'transCargoClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mchtOdrClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onZip',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorZip',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offZip',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'f20',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'f40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'f45',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'DOOR',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'lay_doorRgnNm',label:'text',ref:'data:ds_webOdrInfo.doorRgnNm',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작업일시',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_pickupTime',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'예상작업시간',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_wrkNeedHh',label:'text',ref:'data:ds_webOdrInfo.wrkNeedHh',style:'',userData2:'',dataType:'text'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작업담당',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lay_doorPicNm',label:'text',ref:'data:ds_webOdrInfo.doorPicNm',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'연락처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_doorTelNo',label:'text',ref:'data:ds_webOdrInfo.doorTelNo',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Line',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_lineNm',label:'text',ref:'data:ds_webOdrInfo.lineNm',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차지',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_onRgnNm',label:'text',ref:'data:ds_webOdrInfo.onRgnNm',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차지',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_offRgnNm',label:'text',ref:'data:ds_webOdrInfo.offRgnNm',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'BL/Booking',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_rltNo',label:'text',ref:'data:ds_webOdrInfo.rltNo',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PORT',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_portnm',label:'text',ref:'data:ds_webOdrInfo.portnm',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Closing Time',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_clTime',label:'text',ref:'data:ds_webOdrInfo.closeHh',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선명/항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_vessl',label:'text',ref:'data:ds_webOdrInfo.vsslNm',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'20F',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_f20',label:'text',ref:'data:ds_webOdrInfo.f20',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'3'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'특이사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'3'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lay_odrRmk',label:'text',ref:'data:ds_webOdrInfo.odrRmk',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'40F',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_f40',label:'text',ref:'data:ds_webOdrInfo.f40',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'45F',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_f45',label:'text',ref:'data:ds_webOdrInfo.f45',style:'',userData2:''}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_odrReject',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_reject'},E:[{T:1,N:'xf:label',E:[{T:3,text:'오더반려'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_odrCrate',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_convertWebOdr'},E:[{T:1,N:'xf:label',E:[{T:3,text:'오더생성'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'첨부파일',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_attachFile',btnPlusYn:'Y',gridDownYn:'N',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'',id:'gr_attachFile',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_attachFile_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'SEQ',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'첨부파일명',width:'400'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'SIZE',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'첨부파일경로',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'등록일시',width:'100',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'reqAttachSeq',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'attachFileNm',inputType:'text',style:'',value:'',width:'400',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'attachFileSiz',inputType:'text',style:'',value:'',width:'120',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'attachFilePath',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',style:'',value:'',width:'100'}}]}]}]},{T:1,N:'w2:iframe',A:{src:'',style:'position:relative; top:0; left:-10; width:100%; height:2000px; display: none;',id:'odrFrame1'}},{T:1,N:'w2:wframe',A:{style:'',id:'odrFrame'}},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:'display: none;'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'display: none;',id:''},E:[{T:1,N:'xf:input',A:{id:'hid_reqNo',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_clntNo',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_wrkDt',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_wrkHh',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_lineNm',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_rltNo',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_vsslNm',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_portcnt',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_portCd',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_closeDt',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_closeHh',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_odrRmk',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_odrNo',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_onRgnCd',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_onRgnNm',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_onZip',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_onDtl',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_doorRgnCd',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_doorRgnNm',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_doorZip',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_doorDtl',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_doorPicNm',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_doorTelNo',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_offRgnCd',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_offRgnNm',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_offZip',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_offDtl',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_expimpDomesticClsCd',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_makeOdr',style:'width:144px; height:21px; '}}]}]}]}]}]}]})